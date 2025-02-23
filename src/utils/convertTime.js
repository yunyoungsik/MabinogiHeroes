export default function convertTime(utcString) {
  const dateParts = utcString.split('T');
  const dateString = dateParts[0];
  const timeParts = dateParts[1].split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const seconds = parseInt(timeParts[2]);

  const timeDifference = 9 * 60 * 60 * 1000;

  const utcDate = new Date(Date.UTC(parseInt(dateString.split('-')[0]), parseInt(dateString.split('-')[1]) - 1, parseInt(dateString.split('-')[2]), hours, minutes, seconds));

  const koreaDate = new Date(utcDate.getTime() + timeDifference);
  const koreaDateString = koreaDate.toISOString().replace('Z', '');

  const formattedKoreaDateString = koreaDateString.slice(0, -4);
  return formattedKoreaDateString;
};