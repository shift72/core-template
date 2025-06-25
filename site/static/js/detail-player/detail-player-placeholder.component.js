import { i18n } from 's72';
import { AppComponent, classes } from 's72.ui';
import { LockOpenIcon, LockClosedIcon, PlayIcon } from './icons';

export class DetailPlayerPlaceholder extends AppComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      bgLoaded: !!!props.bgImage,
      titleLoaded: !!!props.titleImage,
      availabilityLoaded: false,
      canBeWatched: false,
      wigglin: false,
      playClicked: false,
      purchaseCompleted: false,
      unlockBegin: false,
      unlockAnim: 0,
    }
  }

  async componentDidMount() {
    this.app.messagebus.subscribe('shopping-session-completed', async () => {
      if (await this.canBeWatched()) {
        this.setState({ purchaseCompleted: true });
      }
    });
    window.addEventListener('message', e => {
      if (e.data.event == 's72-checkout:close' && this.state.purchaseCompleted) {
        this.playUnlockAnimation();
      }
    });
    this.setState({ availabilityLoaded: true, canBeWatched: await this.canBeWatched() });
  }

  componentWillUnmount() {
    this.app.messagebus.unsubscribe('shopping-session-completed');
  }

  canBeWatched() {
    return this.app.availabilityService.getAvailability(this.props.slug)
      .then(a => a?.canBeWatched ?? false)
      .catch(() => false);
  }

  render(props, state) {
    const {playerLoaded} = props;
    const showPlaceholder = (state.availabilityLoaded && state.bgLoaded && state.titleLoaded) && !playerLoaded;
    return (
      <div
        class={classes('detail-player-placeholder', {'detail-player-placeholder--visible': showPlaceholder})}
        onClick={() => this.playWiggleAnimation()}
      >
        {this.placeholderBG()}
        <div class="detail-player-placeholder-overlay">
          {state.canBeWatched && this.playButton() }
          {!state.canBeWatched && this.lockedMessage()}
          <div class="detail-player-placeholder-gradient" />
          {this.titleLogo()}
        </div>
      </div>
    );
  }

  placeholderBG() {
    return (
      <ImageLoader
        src={this.props.bgImage}
        state={this.state.bgLoaded}
        onLoad={() => this.setState({ bgLoaded: true })}
      >
        <div
          class="detail-player-placeholder-bg"
          style={`background-image: url(${this.props.bgImage})`}
        />
      </ImageLoader>
    );
  }

  titleLogo() {
    return (
      <ImageLoader
        src={this.props.titleImage}
        state={this.state.titleLoaded}
        onLoad={() => this.setState({ titleLoaded: true })}
      >
        <img
          class="detail-player-placeholder-title"
          src={this.props.titleImage}
        />
      </ImageLoader>
    );
  }

  playWiggleAnimation() {
    if (!this.state.wigglin && !this.state.unlockBegin) {
      this.setState({ wigglin: true });
      setTimeout(() => {
        this.setState({ wigglin: false });
      }, 900);
    }
  }

  lockedMessage() {
    return (
      <div class={classes('detail-player-locked-message', {'detail-player-locked-message--unlocked': this.state.unlockBegin})}>
        <div class={classes('detail-player-lock-icon-wrapper', {
          'detail-player-lock-icon-wrapper--wiggle': this.state.wigglin, 
          'detail-player-lock-icon-wrapper--large': this.state.unlockBegin
        })}>
          <div class={`detail-player-lock-icon detail-player-lock-icon--anim-${this.state.unlockAnim}`}>
            {this.state.unlockAnim < 2 ? <LockClosedIcon /> : <LockOpenIcon />}
          </div>
        </div>
        <span class={classes('detail-player-locked-message-text', { 'detail-player-locked-message-text--unlocked': this.state.unlockBegin })}>
          {i18n('detail_player_subscribe')}
        </span>
      </div>
    );
  }

  playButton() {
    return (
      <div class={classes('detail-player-play-button', {'detail-player-play-button--clicked': this.state.playClicked})}
        onClick={() => {
          this.setState({ playClicked: true });
          this.props.showPlayer();
        }}
      >
        <PlayIcon />
      </div>
    );
  }

  playUnlockAnimation() {
    setTimeout(() => { this.setState({ unlockBegin: true }) }, 500);
    setTimeout(() => { this.setState({ unlockAnim: 1 }); }, 1000);
    setTimeout(() => { this.setState({ unlockAnim: 2 }); }, 1800);
    setTimeout(() => { this.setState({ unlockAnim: 3 }); }, 1900);
    setTimeout(() => { this.props.showPlayer() }, 2000);
  }

}

function ImageLoader(props) {
  const {src, state, onLoad, children} = props;
  if (!src) {
    return;
  }
  return (
    <div>
      {!state && <img
        class="detail-player-image-loader"
        src={src}
        onLoad={onLoad()}
        onError={onLoad()}
      />}
      {state && children}
    </div>
  );
}