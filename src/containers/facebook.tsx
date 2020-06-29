import React, { useMemo } from 'react';
import useEffectOnce from 'hooks/useEffectOnce';

interface IProps {
  page_id: string | number;
  color: string;
}

export default React.memo(({ page_id, color }: IProps) => {
  const customAttributes = useMemo(
    () => ({ page_id, theme_color: color, attribution: 'setup_tool' }),
    [page_id, color]
  );

  useEffectOnce(() => {
    console.warn('run');
    window.fbAsyncInit = () => {
      console.warn('INITS');
      window.FB.init({
        xfbml: true,
        version: 'v7.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      // @ts-ignore
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      // @ts-ignore
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });

  return <div className="fb-customerchat" {...customAttributes} />;
});
