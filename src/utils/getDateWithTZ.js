import { getTimeZone } from './getTimeZone.js';
import moment from  'moment';

export const getDateWithTZ = () => {
  const timeZone = getTimeZone();
  const d = new Date();
  const partialDate = d.toString().split(" ").slice(1, 5).join(" ");
  
  return `${moment().format('dddd')} ${partialDate}${timeZone}`

}
