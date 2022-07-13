export const createAvailabilityLabel = ({

}) => {
  const btn = document.createElement('div');
  btn.style.backgroundColor = 'red';
  btn.innerHTML = `
  <main id="main" class="page collection-page">
    <section class="page-collections" aria-label="Page Collection">
      <div class="page-collection-item">
        <a
          href="/film/babe-pig-in-the-city/"
          class="meta-item-link"
          aria-label="Babe: Pig in the City"
          target=""
        >
          <div class="poster poster-portrait">
            <s72-availability-label
              data-slug="/film/28933"
            ></s72-availability-label>
            <div class="poster-overlay poster-overlay-top">
              <s72-availability-status
                data-slug="/film/28933"
              ></s72-availability-status>
            </div>

            <s72-image
              src="https://d2gynsnnx1ixn5.cloudfront.net/jgwp5/images/282x422/film/58674/777e87bdc0783cae11748756f026b6a8.jpg"
              alt="Babe: Pig in the City"
              class=""
              border="0"
              ></s72-image>

            <div class="hover">
              <div class="content">
                <div class="buttons">
                  <s72-play-button
                    data-slug="/film/28933"
                    title="Babe: Pig in the City"
                    class=""
                  ></s72-play-button>

                  <s72-pricing-buttons
                    data-slug="/film/28933"
                    class="pricing-buttons-fit s72-show"
                    title="Babe: Pig in the City"
                    ></s72-pricing-buttons>

                  <can-be-watched-button
                    data-slug="/film/28933"
                    data-url=""
                    data-label="can_be_watched_button_text"
                  ></can-be-watched-button>
                </div>
              </div>
              <s72-userwishlist-button
                data-slug="/film/28933"
                class="btn-wishlist"
              ></s72-userwishlist-button>
            </div>
          </div>
        </a>

        <div class="caption">
          <div class="title" title="Babe: Pig in the City">
            Babe: Pig in the City
          </div>

          <div class="meta-item-tagline">
            <span class="runtime">
              <span class="item"> 1h 37m </span>
            </span>

            <span class="genres">
              <span class="divider">•</span>

              <span class="item"> Family, Adventure, Children’s </span>
            </span>

            <span class="release-date">
              <span class="divider">•</span>

              <span class="item"> 1998 </span>
            </span>
          </div>
        </div>
      </div>
    </section>
</main>`
  return btn;
};