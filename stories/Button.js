export const createButton = ({poster}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `
  <button class="btn-primary-override s72-btn" type="submit">Button</button>
`
  return btn;
};