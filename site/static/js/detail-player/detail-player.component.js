import { bindEachComponent, AppComponent, attrs, h, render, classes } from 's72.ui';
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