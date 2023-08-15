let primaryColorPicker = document.getElementById('color-picker-primary');
let secondaryColorPicker = document.getElementById('color-picker-secondary');
let bodyBgColorPicker = document.getElementById('color-picker-body-bg');
let bodyColorColorPicker = document.getElementById('color-picker-body-color');
let logoSizePicker = document.getElementById('--navbar-brand-height');
let headerHeightPicker = document.getElementById('header-height');
let buttonColorPicker = document.getElementById('--button-background');

if (sessionStorage.getItem('s72.theme.--button-background') !== null) {
  buttonColorPicker.defaultValue = sessionStorage.getItem('s72.theme.--button-background');
  setThemeVar('--button-background', buttonColorPicker.value);
}

function setThemeVar(name, value, unit) {
  let r = document.querySelector(':root');
  r.style.setProperty(name, value + (unit || ''));
  sessionStorage.setItem(`s72.theme.${  name}`, value);
}

function hexTorgb(hex) {
  return [`0x${  hex[1]  }${hex[2]}` | 0, `0x${  hex[3]  }${hex[4]}` | 0, `0x${  hex[5]  }${hex[6]}` | 0];
}

primaryColorPicker.addEventListener('input', (e) => {
  let primaryHex = hexTorgb(e.target.value);
  setThemeVar('--primary-rgb', primaryHex);
});
secondaryColorPicker.addEventListener('input', (e) => {
  let secondaryHex = hexTorgb(e.target.value);
  setThemeVar('--secondary-rgb', secondaryHex);
});
bodyBgColorPicker.addEventListener('input', (e) => {
  let bodyBgHex = hexTorgb(e.target.value);
  setThemeVar('--body-bg-rgb', bodyBgHex);
});
bodyColorColorPicker.addEventListener('input', (e) => {
  let bodyColorHex = hexTorgb(e.target.value);
  setThemeVar('--body-color-rgb', bodyColorHex);
});
logoSizePicker.addEventListener('input', (e) => {
  setThemeVar('--navbar-brand-height', e.target.value, 'px');
});
headerHeightPicker.addEventListener('input', (e) => {
  setThemeVar('--navbar-brand-padding-y', e.target.value, 'px');
});
buttonColorPicker.addEventListener('input', (e) => {
  setThemeVar('--button-background', e.target.value);
});
