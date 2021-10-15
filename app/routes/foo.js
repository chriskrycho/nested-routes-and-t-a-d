import Route from '@ember/routing/route';
import { getData } from '../utils/get-data';
import { hash } from 'rsvp';

export default class FooRoute extends Route {
  model() {
    return getData(
      hash({
        a: '`a` resolved',
        b: '`b` resolved',
      }),
      1000,
      this
    );
  }
}
