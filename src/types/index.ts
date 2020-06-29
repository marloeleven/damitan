export { default as lang } from './lang';

declare global {
  interface Window {
    fbAsyncInit: any;
    FB: {
      init: Function;
    };
  }
}
