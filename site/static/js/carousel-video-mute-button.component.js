import { AppComponent, bindAllComponents, render, h, attrs } from 's72.ui';

export default class CarouselVideoMuteButton extends AppComponent {
  toggleBackgroundMute() {
    let video = document.querySelector('.s72-carousel-item.current video');
    let button = document.querySelector('.s72-carousel-item.current #muteBtn');

    if (video.muted) {
      video.muted = false;
      button.classList.remove('muted');
      button.classList.add('unmuted');
    } else {
      video.muted = true;
      button.classList.remove('unmuted');
      button.classList.add('muted');
    }
  }

  render() {
    return <button id="muteBtn" onClick={() => this.toggleBackgroundMute()} class="muted" />;
  }
}

bindAllComponents('carousel-video-mute-button', elements => {
  return elements.map(e => render(h(CarouselVideoMuteButton, attrs(e)), e));
});
