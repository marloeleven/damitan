import React, { useMemo } from 'react';
import once from 'lodash/once';
import { Subject, combineLatest } from 'rxjs';

import useEffectOnce from 'hooks/useEffectOnce';
import appendScript from 'utils/appendScript';

interface IProps {
  app_id: string;
  app_version: string;
  page_id: string;
  color: string;
}

const URLS = {
  SDK: 'https://connect.facebook.net/en_US/sdk.js',
  MSSDK: 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js',
};

export default ({ app_id, app_version, page_id, color }: IProps) => {
  const customAttributes = useMemo(
    () => ({ page_id, theme_color: color, attribution: 'setup_tool' }),
    [page_id, color]
  );

  useEffectOnce(() => {
    const fbSdk$ = new Subject();
    const msSdk$ = new Subject();

    combineLatest(fbSdk$, msSdk$).subscribe(() => initMessenger());

    const initMessenger = once(() => {
      window.FB.init({
        appId: app_id,
        autoLogAppEvents: true,
        xfbml: true,
        version: app_version,
      });
    });

    setTimeout(initMessenger, 15000);
    window.fbAsyncInit = initMessenger;

    appendScript('facebook-jssdk', (js: HTMLScriptElement) => {
      js.defer = true;
      js.src = URLS.MSSDK;
      js.onload = () => msSdk$.next();
    });

    appendScript('facebook-sdk', (js: HTMLScriptElement) => {
      js.defer = true;
      js.async = true;
      js.src = URLS.SDK;
      js.onload = () => fbSdk$.next();
    });
  });

  return <div className="fb-customerchat" {...customAttributes} />;
};
