import './button.css';

export const createButton = ({

}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `<s72-availability-label data-slug="/film/28933"></s72-availability-label>`
  return btn;
};

// console.log(s72);
// console.log(s72.ui);
// console.log(s72.ui.render);
// var e = document.querySelector('s72-availability-label');
// s72.ui.render(s72.ui.h(AvailabilityLabel, s72.ui.attrs(e)), e);