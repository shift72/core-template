var primaryColorPicker = document.getElementById('color-picker-primary');
var secondaryColorPicker = document.getElementById('color-picker-secondary');
var bodyBgColorPicker = document.getElementById('color-picker-body-bg');
var bodyColorColorPicker = document.getElementById('color-picker-body-color');
var logoWidthPicker = document.getElementById('nav-logo-height');
var headerHeightPicker = document.getElementById('footer-logo-height');

function setThemeVar(name, value, unit) {
  var r = document.querySelector(':root');
  r.style.setProperty(name, value + (unit || ''));
}

function hexTorgb(hex) {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

primaryColorPicker.addEventListener('input', function (e) {
  var primaryHex = hexTorgb(e.target.value);
  setThemeVar('--primary-rgb', primaryHex);
});
secondaryColorPicker.addEventListener('input', function (e) {
  var secondaryHex = hexTorgb(e.target.value);
  setThemeVar('--secondary-rgb', secondaryHex);
});
bodyBgColorPicker.addEventListener('input', function (e) {
  var bodyBgHex = hexTorgb(e.target.value);
  setThemeVar('--body-bg-rgb', bodyBgHex);
});
bodyColorColorPicker.addEventListener('input', function (e) {
  var bodyColorHex = hexTorgb(e.target.value);
  setThemeVar('--body-color-rgb', bodyColorHex);
});
logoWidthPicker.addEventListener('input', function (e) {
  setThemeVar('--navbar-brand-height', e.target.value, 'px');
});
headerHeightPicker.addEventListener('input', function (e) {
  setThemeVar('--footer-brand-height', e.target.value, 'px');
});