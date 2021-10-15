import { load } from 'ember-async-data';

export function getData(value, delay, context) {
  return load(
    new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    }),
    context
  );
}
