import moment from 'moment';

export function getHashCode(string: string): number {
  let hash = 0,
    i, chr;
  if (string.length === 0) {return hash;}
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

export function getTimeFromMinutes(mins: number) {
  if (mins >= 24 * 60 || mins < 0) {
    throw new RangeError('Valid input should be greater than or equal to 0 and less than 1440.');
  }
  const hours = mins / 60 | 0;
  const minutes = mins % 60 | 0;
  return moment().hours(hours).minutes(minutes).format('H[h] mm[m]');
}
