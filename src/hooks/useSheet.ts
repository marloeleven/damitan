import { useState, useEffect } from 'react';
import lscache from 'lscache';
import GSheets from 'api/gsheets';
import { isDevelopment } from './';

const LOCAL_DATA = 'LOCAL_DATA';

interface IItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_1: string;
  image_2: string;
  image_3: string;
  disable: number;
}
type IData = IItem[] | [];

export default () => {
  const [state, setState] = useState<IData>([]);

  useEffect(() => {
    const localData = lscache.get(LOCAL_DATA) as IData;

    if (localData) {
      return setState(localData);
    }

    GSheets().then((result) => {
      setState(result as IData);

      if (isDevelopment()) {
        return lscache.set(LOCAL_DATA, result);
      }

      lscache.set(LOCAL_DATA, result, 2);
    });
  }, []);

  return state;
};
