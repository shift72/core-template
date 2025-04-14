import { utils } from 's72';
import { AppComponent, bindAllComponents, render, h, attrs, getComponentElement } from 's72.ui';

export default class ExternalPurchaseButton extends AppComponent {
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
          e.classList.toggle('s72-show', this.shouldBeVisible);
        }, utils.noop);
    }
  }

  get shouldBeVisible() {
    return this.state.loaded && !this.state.isOwned;
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
  }
  
  render(props) {
    if (!this.shouldBeVisible || props.url == '' || props.label == '') return null;
    return (
      <button
        type="button"
        class="s72-btn s72-btn-purchase s72-btn-external-purchase"
        onClick={e => {
          e.preventDefault();
          if (props.url) {
            window.location.href = props.url;
          }
        }}
      >
        <span class="verb">{props.label}</span>
      </button>
    );
  }
}

bindAllComponents('external-purchase-button', elements => {
  return elements.map(e => render(h(ExternalPurchaseButton, attrs(e)), e));
});
