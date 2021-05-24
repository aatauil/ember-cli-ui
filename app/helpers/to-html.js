import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function toHtml(params/*, hash*/) {
  return htmlSafe(params);
});
