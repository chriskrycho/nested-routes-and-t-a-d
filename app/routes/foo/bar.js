import Route from '@ember/routing/route';
import { getData } from '../../utils/get-data';

export default class FooBarRoute extends Route {
  model() {
    return {
      c: getData('`c` is resolved', 3000, this),
    };
  }
}
