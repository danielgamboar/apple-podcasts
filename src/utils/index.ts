/**
 * The function `formatTime` takes a time value in milliseconds and returns a formatted string in the
 * format "hh:mm:ss".
 * @param {number} milliseconds - The `formatTime` function takes a number of milliseconds as input and
 * converts it into a formatted time string in the format "hh:mm:ss".
 * @returns The function `formatTime` takes a number of milliseconds as input and calculates the
 * equivalent time in hours, minutes, and seconds. It then formats the time values to ensure they are
 * displayed with leading zeros if they are less than 10. Finally, it returns a string in the format
 * "HH:MM:SS" representing the formatted time.
 */
export function formatTime(milliseconds: number) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * The function `formatDate` takes a Date object as input and returns a formatted string in the format
 * "dd/mm/yyyy".
 * @param {Date} date - A Date object representing a specific date.
 * @returns The `formatDate` function takes a `Date` object as input and returns a formatted date
 * string in the format "DD/MM/YYYY".
 */
export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * The function `isOdd` in TypeScript checks if a given number is odd by returning true if the number
 * is not divisible by 2.
 * @param {number} number - A number that you want to check if it is odd.
 * @returns The function `isOdd` is returning a boolean value indicating whether the input number is
 * odd or not. It returns `true` if the number is odd and `false` if the number is even.
 */
export function isOdd(number: number) {
  return number % 2 !== 0;
}
