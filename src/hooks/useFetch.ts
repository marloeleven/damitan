import { useState } from 'react';
import useEffectOnce from 'hooks/useEffectOnce';

const PENDING = 'pending';
const ERROR = 'error';
const SUCCESS = 'success';

export default (promise: any) => {
  const [status, setStatus] = useState<string>(PENDING);
  const [result, setResult] = useState<any>();
  const [suspender, setSuspender] = useState<any>(new Promise(() => {}));

  useEffectOnce(() => {
    const promiseResult = promise()
      .then((res: any) => {
        setResult(res);

        setTimeout(() => {
          setStatus(SUCCESS);
        }, 3000);
      })
      .catch((e: Error) => {
        setResult(e);
        setStatus(ERROR);
      });

    setSuspender(promiseResult);
  });

  return {
    read: () => {
      switch (status) {
        case PENDING:
          throw suspender;
        case ERROR:
          throw result;
        case SUCCESS:
        default:
          return result;
      }
    },
  };
};
