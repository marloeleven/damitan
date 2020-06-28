import Base from './base';
import ILang from 'types/lang';
import en from 'lang/en.json';

interface LangObject {
  [key: string]: string;
}

interface IState {
  lang: ILang;
  data: LangObject;
}

class Lang extends Base {
  state: IState = {
    lang: ILang.en,
    data: en,
  };

  setLang(lang: ILang) {
    this.save((draft: IState) => (draft.lang = lang));
  }

  getText(key: string, defaultValue: string = '') {
    return this.state.data.hasOwnProperty(key)
      ? this.state.data[key]
      : defaultValue;
  }
}

export { Lang };
export default new Lang();
