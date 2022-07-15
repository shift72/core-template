export const createForgotPasswordForm = ({poster}) => {
  const btn = document.createElement('div');
  btn.innerHTML = `<s72-forgotpassword-form></s72-forgotpassword-form>`
  return btn;
};