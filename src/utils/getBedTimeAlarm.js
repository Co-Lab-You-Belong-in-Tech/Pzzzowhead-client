import moment from 'moment';
import { getTimeZone } from './getTimeZone';

export const getBedTimeAlarm = (timeInput, sleepLength) => {
  const time = moment(timeInput, 'HH:mm').subtract(Number(sleepLength.split('').slice(0,-6).join('')), 'hours').format('HH:mm');
  return `${time}${getTimeZone()}`
}



