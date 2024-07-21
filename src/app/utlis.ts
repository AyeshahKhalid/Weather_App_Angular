//cal today /current Date for date range
const today = new Date();
const currentDateYear = today.getFullYear();
//if month is less than 10 then add 0 before month
const currentDateMonth =
  today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
//if date is less than 10, we need to add 0 before date
const currentDateDay =
  today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

export const currentDate = `${currentDateYear}-${currentDateMonth}-${currentDateDay}`;

//7/21/2024 2024-07-21 they both are same only format is different so we need to convert them to same format
// so make a function to convert date to required format convert this 7/21/2024 to 2024-07-21
export const convertDate = (date: string) => {
  const [month, day, year] = date.split('/');
  return `${year}-${month.length === 1 ? `0${month}` : month}-${
    day.length === 1 ? `0${day}` : day
  }`;
};
