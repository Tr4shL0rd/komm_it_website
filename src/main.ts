import { format } from "date-fns";
import "./style.scss";

function getOrdinal(num: number): string {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + 'th';
  } else if (lastDigit === 1) {
      return num + 'st';
  } else if (lastDigit === 2) {
      return num + 'nd';
  } else if (lastDigit === 3) {
      return num + 'rd';
  } else {
      return num + 'th';
  }
}

function getLongDate(): void {
  console.log("GetLongDate()");
  const date = new Date();
  let dateText: any = document.getElementById("todays-date");
  const day = date.getDate();
  const dayName = date.toLocaleString("default", { weekday: "long" });
  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  dateText.innerHTML = `${dayName} the ${getOrdinal(day)} of ${monthName} ${year}`;

}

function getShortDate(): void {
  console.log("GetShortDate()");
  const date = new Date();
  let dateText: any = document.getElementById("short-date");
  const day = date.getDate();
  const monthNumber = date.getMonth()+1;
  const year = date.getFullYear();

  dateText.innerHTML = `<u>${day}/${monthNumber}/${year}</u>`;
}

function getBetterShortDate(): void {
  console.log("HELLO FROM GET_BETTER_SHORT_DATE");
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd/MM/yyyy");
  console.log(`${formattedDate} HELLO`);
}

document.body.onload = () => {
  getLongDate();
  getShortDate();
  getBetterShortDate();
}