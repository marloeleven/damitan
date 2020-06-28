import { Container } from 'unstated';
import produce from 'immer';

export default class Base extends Container<{}> {
  save(callback: Function) {
    return this.setState(
      produce((draft) => {
        callback(draft);
      })
    );
  }
}
