import { AppComponent, bindAllComponents, render, h, attrs, Tooltip } from 's72.ui';
import CarouselVideoMutedIcon from './icons/carousel-video-muted-icon.js';
import CarouselVideoUnMutedIcon from './icons/carousel-video-unmuted-icon.js';

export default class CarouselVideoMuteButton extends AppComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { muted: true };
  }

  toggleBackgroundMute(e) {
    e.preventDefault();

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
      <Tooltip tooltip={this.state.muted ? 'Unmute' : 'Mute'} position="bottom">
        <button id="muteBtn" class="s72-btn mute-btn" onClick={e => this.toggleBackgroundMute(e)}>
          {this.state.muted ? <CarouselVideoMutedIcon /> : <CarouselVideoUnMutedIcon />}
        </button>
      </Tooltip>
    );
  }
}

bindAllComponents('carousel-video-mute-button', elements => {
  return elements.map(e => render(h(CarouselVideoMuteButton, attrs(e)), e));
});
