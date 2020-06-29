import React from 'react';
import useEffectOnce from 'hooks/useEffectOnce';

interface IProps {
  page_id: string | number;
  color: string;
}

export default React.memo(({ page_id, color }: IProps) => {
  console.warn('rendered');
  useEffectOnce(() => {
    console.warn('run');
    window.fbAsyncInit = () => {
      console.warn('INITS');
      window.FB.init({
        xfbml: true,
        version: 'v7.0',
      });
    };
  });

  return (
    <div
      className="fb-customerchat"
      custom-attribution="setup_tool"
      custom-page_id={page_id}
      custom-theme_color={color}
    />
  );
});
