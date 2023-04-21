type DateObject = {
  date: string
  time: string
}

export default function dateRead(dateUTC: string): DateObject {
  const utc = new Date(dateUTC);
  const months = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const minutes = utc.getMinutes() < 10 ? `0${utc.getMinutes()}` : `${utc.getMinutes()}`

  return {
    date: `${months[utc.getMonth()]} ${utc.getDate()}, ${utc.getFullYear()}`,
    time: `${utc.getHours()}:${minutes}`
  }
}

