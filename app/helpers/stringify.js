import { helper } from '@ember/component/helper';

export default helper(function stringify([value]) {
  return JSON.stringify(value);
});
