export const createAvailabilityStatus = ({poster}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `
          <div class="poster">
              <s72-availability-status
                data-slug="/film/28933"
              ></s72-availability-status>
          </div>
`
  return btn;
};