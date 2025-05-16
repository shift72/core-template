import { i18n } from 's72';
import { AppComponent, classes, getComponentElement } from 's72.ui';

export class DetailPlayerPlaceholder extends AppComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      bgLoaded: !!!props.bgImage,
      availabilityLoaded: false,
      canBeWatched: false,
      wigglin: false,
      playClicked: false,
      unlockBegin: false,
      unlockAnim: 0,
    }
  }

  componentDidMount() {
    this.app.availabilityService.getAvailability(this.props.slug).then(a => {
      this.setState({
        availabilityLoaded: true,
        canBeWatched: a && a.canBeWatched,
      });
    });
    const element = getComponentElement(this);
    this.app.messagebus.subscribe('shopping-session-completed', () => {
      this.app.availabilityService.getAvailability(this.props.slug).then(a => {
        if (a && a.canBeWatched) {
          element.classList.add('try-unlock');
        }
      });
    });
    window.addEventListener('message', e => {
      if (e.data.event == 's72-checkout:close') {
        if (element.classList.contains('try-unlock')) {
          element.classList.remove('try-unlock');
          this.playUnlockAnimation();
        }
      }
    });
  }

  componentWillUnmount() {
    this.app.messagebus.unsubscribe('shopping-session-completed');
  }

  render(props, state) {
    const {bgImage, playerLoaded} = props;
    const showPlaceholder = state.availabilityLoaded && state.bgLoaded && !playerLoaded;
    return (
      <div
        class={classes('detail-player-placeholder', {'detail-player-placeholder--visible': showPlaceholder})}
        onClick={() => this.playWiggleAnimation()}
      >
        {bgImage && this.placeholderBG()}
        <div class="detail-player-placeholder-overlay">
          {state.canBeWatched && this.playButton() }
          {!state.canBeWatched && this.lockedMessage()}
        </div>
      </div>
    );
  }

  placeholderBG() {
    return (
      <div>
        {!this.state.bgLoaded && <img
          class="detail-player-placeholder-bg-loader"
          src={this.props.bgImage}
          onLoad={() => this.setState({ bgLoaded: true }) }
          onError={() => this.setState({ bgLoaded: true }) }
        />}
        {this.state.bgLoaded && <div
          class="detail-player-placeholder-bg"
          style={`background-image: url(${this.props.bgImage})`}
        />}
      </div>
    );
  }

  playWiggleAnimation() {
    if (!this.state.wigglin) {
      this.setState({ wigglin: true });
      setTimeout(() => {
        this.setState({ wigglin: false });
      }, 900);
    }
  }

  lockedMessage() {
    return (
      <div class="detail-player-locked-message">
        <div class={classes(
          'detail-player-lock-icon-wrapper', {
            'detail-player-lock-icon-wrapper--wiggle': this.state.wigglin, 
            'detail-player-lock-icon-wrapper--large': this.state.unlockBegin
          })}>
          <svg class={`detail-player-lock-icon detail-player-lock-icon--anim-${this.state.unlockAnim}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 50 50">
            {this.state.unlockAnim < 2 ? this.lockClosedIcon() : this.lockOpenIcon()}
          </svg>
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
        {this.playIcon()}
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
  
  lockClosedIcon() {
    return (
      <path d="M 25 3 C 18.364481 3 13 8.3644809 13 15 L 13 20 L 9 20 C 7.3545455 20 6 21.354545 6 23 L 6 47 C 6 48.645455 7.3545455 50 9 50 L 41 50 C 42.645455 50 44 48.645455 44 47 L 44 23 C 44 21.354545 42.645455 20 41 20 L 37 20 L 37 15 C 37 8.3644809 31.635519 3 25 3 z M 25 5 C 30.564481 5 35 9.4355191 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4355191 19.435519 5 25 5 z M 9 22 L 13.832031 22 A 1.0001 1.0001 0 0 0 14.158203 22 L 35.832031 22 A 1.0001 1.0001 0 0 0 36.158203 22 L 41 22 C 41.554545 22 42 22.445455 42 23 L 42 47 C 42 47.554545 41.554545 48 41 48 L 9 48 C 8.4454545 48 8 47.554545 8 47 L 8 23 C 8 22.445455 8.4454545 22 9 22 z M 25 30 C 23.3 30 22 31.3 22 33 C 22 33.9 22.4 34.699219 23 35.199219 L 23 38 C 23 39.1 23.9 40 25 40 C 26.1 40 27 39.1 27 38 L 27 35.199219 C 27.6 34.699219 28 33.9 28 33 C 28 31.3 26.7 30 25 30 z"></path>
    );
  }
  
  lockOpenIcon() {
    return (
      <path d="M 22.78125 0 C 21.605469 -0.00390625 20.40625 0.164063 19.21875 0.53125 C 12.902344 2.492188 9.289063 9.269531 11.25 15.59375 L 11.25 15.65625 C 11.507813 16.367188 12.199219 18.617188 12.625 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 14.75 20 C 14.441406 19.007813 13.511719 16.074219 13.125 15 L 13.15625 15 C 11.519531 9.722656 14.5 4.109375 19.78125 2.46875 C 25.050781 0.832031 30.695313 3.796875 32.34375 9.0625 C 32.34375 9.066406 32.34375 9.089844 32.34375 9.09375 C 32.570313 9.886719 33.65625 13.40625 33.65625 13.40625 C 33.746094 13.765625 34.027344 14.050781 34.386719 14.136719 C 34.75 14.226563 35.128906 14.109375 35.375 13.832031 C 35.621094 13.550781 35.695313 13.160156 35.5625 12.8125 C 35.5625 12.8125 34.433594 9.171875 34.25 8.53125 L 34.25 8.5 C 32.78125 3.761719 28.601563 0.542969 23.9375 0.0625 C 23.550781 0.0234375 23.171875 0 22.78125 0 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
    );
  }
  
  playIcon() {
    return (
      <svg class="detail-player-play-button-icon" fill="currentColor" height="1em" width="1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <g>
          <path d={`M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995
            C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012
            C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993
            c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993z
            M25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z`} />
          <path d={`M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62
            C15.4579,62,2,48.542099,2,32C2,15.4580002,15.4579,2,32,2c16.5419998,0,30,13.4580002,30,30C62,48.542099,48.5419998,62,32,62z`} />
        </g>
      </svg>
    );
  }

}