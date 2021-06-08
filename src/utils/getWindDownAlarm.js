import moment from 'moment';
import { getTimeZone } from './getTimeZone';


export const getWindDownAlarm = (bedTimeAlarm, windDownLength) => {
  const timeNoTZ = bedTimeAlarm.split("-")[0];
  const windDownNumber = windDownLength.split(" ")[0];
  const time = moment(timeNoTZ, 'HH:mm').subtract (windDownNumber, 'hours').format('HH:mm');
  return `${time}${getTimeZone()}`
}