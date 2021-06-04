import moment from 'moment';
import { getTimeZone } from './getTimeZone';

export const getBedTimeAlarm = (timeInput, sleepLength) => {
  const time = moment(timeInput, 'HH:mm').subtract (sleepLength, 'hours').format('HH:mm');
  return `${time}${getTimeZone()}`
}



