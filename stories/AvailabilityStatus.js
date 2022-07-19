export const createAvailabilityStatus = ({poster}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `
          <div class="poster" style="overflow: visible;">
              <s72-availability-status
                data-slug="/film/123"
              ></s72-availability-status>
          </div>
`
  return btn;
};