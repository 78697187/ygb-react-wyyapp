import theme from 'styled-theming';

const LIGHT_MODE = {
  logoUrl: require('@/assets/img/logo.png'),
  /* 网易红，哈哈哈 */
  themeColor: '#ec4141',
  bodyColor: '#f9f9f9',
  // bodyColor: '#ffffff',
  sideColor: '#f6f6f6',
  sideFontColor: '#313131',
  searchBarColor: '#e4e4e4',
  normalColor: '#000',
  grayFontColor: '#7d7d7d',
  hoverColor: '#dedede',
  boxShadow: 'rgba(0,0,0,0.1)',
}

const DARK_MODE = {
  logoUrl: require('@/assets/img/logo_light.png'),
  themeColor: '#1fcfa1',
  bodyColor: '#1D1D1F',
  sideColor: '#171718',
  sideFontColor: '#d1d1d1',
  searchBarColor: '#343435',
  normalColor: '#fff',
  grayFontColor: '#8e8e8f',
  hoverColor: '#2e2e2f',
  boxShadow: 'rgba(52, 53, 52, 0.5)',
}

const logoUrl = theme('mode', {
  light: LIGHT_MODE.logoUrl,
  dark: DARK_MODE.logoUrl,
});
const themeColor = theme('mode', {
  light: LIGHT_MODE.themeColor,
  dark: DARK_MODE.themeColor,
});
const bodyColor = theme('mode', {
  light: LIGHT_MODE.bodyColor,
  dark: DARK_MODE.bodyColor,
});
const sideColor = theme('mode', {
  light: LIGHT_MODE.sideColor,
  dark: DARK_MODE.sideColor,
});
const sideFontColor = theme('mode', {
  light: LIGHT_MODE.sideFontColor,
  dark: DARK_MODE.sideFontColor,
});
const searchBarColor = theme('mode', {
  light: LIGHT_MODE.searchBarColor,
  dark: DARK_MODE.searchBarColor,
});
const normalColor = theme('mode', {
  light: LIGHT_MODE.normalColor,
  dark: DARK_MODE.normalColor,
});
const grayFontColor = theme('mode', {
  light: LIGHT_MODE.grayFontColor,
  dark: DARK_MODE.grayFontColor,
});
const hoverColor = theme('mode', {
  light: LIGHT_MODE.hoverColor,
  dark: DARK_MODE.hoverColor,
});
const boxShadow = theme('mode', {
  light: LIGHT_MODE.boxShadow,
  dark: DARK_MODE.boxShadow,
});

export const myTheme = {
  logoUrl,
  themeColor,
  bodyColor,
  sideColor,
  sideFontColor,
  searchBarColor,
  normalColor,
  grayFontColor,
  hoverColor,
  boxShadow,
};