export const formatToIntl = (unformattedDate) => {
  const date = new Date(unformattedDate)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return new Intl.DateTimeFormat('pt-br', options).format(date)
}
