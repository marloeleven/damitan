import { useState, useEffect } from 'react';
import lscache from 'lscache';
import GSheets from 'api/gsheets';

const LOCAL_DATA = 'LOCAL_DATA';

interface IItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_1: string;
  image_2: string;
  image_3: string;
}
type IData = IItem[] | [];

export default () => {
  const [state, setState] = useState<IData>([]);

  useEffect(() => {
    // const localData = lscache.get(LOCAL_DATA) as IData;

    // if (localData) {
    //   return setState(localData);
    // }

    GSheets().then((result) => {
      // lscache.set(LOCAL_DATA, result, 2);
      lscache.set(LOCAL_DATA, result);

      setState(result as IData);
    });
  }, []);

  return state;
};
