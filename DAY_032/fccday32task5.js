
function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 400 == 0) {  // Check 400 FIRST
      return `${year} is a leap year.`;
    }
    if (year % 100 == 0) {  // Then check 100
      return `${year} is not a leap year.`;
    }
    return `${year} is a leap year.`;  // Divisible by 4 but not 100
  }
  return `${year} is not a leap year.`;  // Not divisible by 4
}
  

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);