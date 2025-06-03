import { bindEachComponent, AppComponent, attrs, h, render } from 's72.ui';
import { DetailPlayerIframe } from './detail-player-iframe.component';
import { DetailPlayerPlaceholder } from './detail-player-placeholder.component';

export default class DetailPlayer extends AppComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      playerLoaded: false,
      playerVisible: false,
      placeholderVisible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('message', e => {
      const {event, value} = e.data;
      if (event == 's72-player:theatre-mode-change') {
        const container = document.querySelector('#main .detail-player-container');
        container.querySelector('detail-player').scrollIntoView({ behavior: 'smooth', block: 'start' });
        container.classList.toggle('detail-player-theatre-mode', value);
        document.querySelector('.meta-detail-bg').classList.toggle('meta-detail-bg--lights-out', value);
        document.querySelector('.poster-wrapper').classList.toggle('d-none', value);
      }
    });
  }

  render(props, state) {
    if (!props.slug) {
      return;
    }
    return (
      <div class="detail-player-inner">
        {state.playerVisible && <DetailPlayerIframe
          slug={props.slug}
          onLoad={() => {
            this.setState({ playerLoaded: true });
            setTimeout(() => this.setState({ placeholderVisible: false }), 1000);
          }}
        />}
        {state.placeholderVisible && <DetailPlayerPlaceholder 
          slug={props.slug}
          bgImage={props.bgImage}
          showPlayer={() => setTimeout(() => this.setState({ playerVisible: true }), 500)}
          playerLoaded={state.playerLoaded}
        />}
      </div>
    );
  }
}

bindEachComponent('detail-player', e => render(h(DetailPlayer, attrs(e)), e));