import { useEffect } from 'react';

export default (callback: React.EffectCallback) =>
  useEffect(() => {
    console.warn('RUN CB');
    callback();
  }, []);
