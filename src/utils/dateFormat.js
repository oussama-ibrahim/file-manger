const dateFormat = (date, format = 'en-Us') => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString(format, {
    dateStyle: 'long',
  });
};
export default dateFormat;
