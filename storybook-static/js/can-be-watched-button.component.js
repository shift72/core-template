import { utils } from 's72';
import { AppComponent, bindAllComponents, render, h, attrs, getComponentElement } from 's72.ui';

export default class CanBeWatchedButton extends AppComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.updateState();
    this.app.messagebus.subscribe('user-signed-in', () => this.updateState());
    this.app.messagebus.subscribe('user-signed-out', () => this.updateState());
    this.app.messagebus.subscribe('shopping-session-completed', session =>
      this.shoppingSessionCompleted(session)
    );
  }

  componentWillUnmount() {
    this.app.messagebus.unsubscribe('shopping-session-completed', () => this.updateState());
  }

  updateState() {
    if (this.props.slug && this.app.shoppingService.isValidType(this.props.slug)) {
      return this.loadAvailability(this.props.slug)
        .then(() => {
          return this.setState({ loaded: true });
        }, utils.noop)
        .then(() => {
          let e = getComponentElement(this);
          e.classList.toggle('s72-show', this.state.loaded && this.state.isOwned);
        }, utils.noop);
    }
  }

  shoppingSessionCompleted(session) {
    if (session.data.slug != this.props.slug) {
      return;
    }
    this.updateState();
  }

  loadAvailability(slug) {
    if (utils.slugs.detect(slug) === utils.slugs.TYPE.FILM) {
      return this.app.availabilityService.getAvailability(slug).then(a => {
        this.setState({ isOwned: a && a.canBeWatched });
      });
    }
    return;
  }

  openLink(event, url) {
    event.preventDefault();
    if (url.length == 0) return;
    window.open(url);
  }

  render(props, state) {
    if (!state.loaded || !state.isOwned || props.url == '' || props.label == '') return;
    return (
      state.loaded &&
      state.isOwned && (
        <button
          class="s72-btn s72-btn-can-be-watched"
          onClick={e => {
            this.openLink(e, props.url);
          }}
        >
          <span class="padder" />
          <span class="verb watch s72-btn-can-be-watched-label">{props.label}</span>
        </button>
      )
    );
  }
}

bindAllComponents('can-be-watched-button', elements => {
  return elements.map(e => render(h(CanBeWatchedButton, attrs(e)), e));
});
