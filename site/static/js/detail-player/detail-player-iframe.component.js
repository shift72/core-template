import { Component } from 's72.ui';

export class DetailPlayerIframe extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(props) {
    const {slug, onLoad} = props;
    return (
      <iframe
        id="detail-player"
        src={`/play/#${slug}?tm=true&from=`}
        width="100%"
        height="100%"
        frameborder={0}
        allowFullScreen
        onLoad={onLoad}
      ></iframe>
    );
  }
}