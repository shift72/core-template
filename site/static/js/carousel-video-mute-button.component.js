import { AppComponent, bindAllComponents, render, h, attrs } from 's72.ui';
import CarouselVideoMutedIcon from './icons/carousel-video-muted-icon.js';
import CarouselVideoUnMutedIcon from './icons/carousel-video-unmuted-icon.js';

export default class CarouselVideoMuteButton extends AppComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { muted: true };
  }

  toggleBackgroundMute() {
    let video = document.querySelector('.s72-carousel-item.current video');

    if (video.muted) {
      video.muted = false;
      this.setState({ muted: false });
    } else {
      video.muted = true;
      this.setState({ muted: true });
    }
  }

  render() {
    return (
      <button id="muteBtn" onClick={() => this.toggleBackgroundMute()}>
        {this.state.muted ? <CarouselVideoMutedIcon /> : <CarouselVideoUnMutedIcon />}
      </button>
    );
  }
}

bindAllComponents('carousel-video-mute-button', elements => {
  return elements.map(e => render(h(CarouselVideoMuteButton, attrs(e)), e));
});
