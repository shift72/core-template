export const createAvailabilityStatusPoster = ({poster, warning}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `
  ${warning ? `<div class='alert alert-warning'>${warning}</div>` : ""}
  <main id="main" class="page">
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
              data-slug="/film/3144"
            ></s72-availability-label>
            <div class="poster-overlay poster-overlay-top">
              <s72-availability-status
                data-slug="/film/3144"
              ></s72-availability-status>
            </div>

            <s72-image
              src="${poster}"
              alt="Babe: Pig in the City"
              class=""
              border="0"
              ></s72-image>

            <div class="hover">
              <div class="content">
                <div class="buttons">
                  <s72-play-button
                    data-slug="/film/3144"
                    title="Babe: Pig in the City"
                    class=""
                  ></s72-play-button>

                  <s72-pricing-buttons
                    data-slug="/film/3144"
                    class="pricing-buttons-fit s72-show"
                    title="Babe: Pig in the City"
                    ></s72-pricing-buttons>

                  <can-be-watched-button
                    data-slug="/film/3144"
                    data-url=""
                    data-label="can_be_watched_button_text"
                  ></can-be-watched-button>
                </div>
              </div>
              <s72-userwishlist-button
                data-slug="/film/3144"
                class="btn-wishlist"
              ></s72-userwishlist-button>
            </div>
          </div>
        </a>
      </div>
    </section>
</main>`
  return btn;
};