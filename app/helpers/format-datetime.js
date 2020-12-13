import { helper } from '@ember/component/helper';

export default helper(function formatDatetime([datetime]) {
  return datetime.split('T')[0];
});
