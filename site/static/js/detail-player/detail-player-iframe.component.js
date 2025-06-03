import { Component } from 's72.ui';

export class DetailPlayerIframe extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(props) {
    const {slug, onLoad} = props;
    let startTime = new URLSearchParams(window.location.search).get('t');
    let t = startTime ? startTime : 0;
    return (
      <iframe
        id="detail-player"
        src={`/play/#${slug}?tm=true&t=${t}&from=`}
        width="100%"
        height="100%"
        frameborder={0}
        allowFullScreen
        onLoad={onLoad}
      ></iframe>
    );
  }
}