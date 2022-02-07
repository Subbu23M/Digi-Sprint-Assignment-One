// Year - Feb - 
const result = "2018-02-06T18:30:00.000Z"
console.log(result);

// 2022-11-01

let current = new Date(result);

// let dateMDY = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
// console.log(dateMDY);

const dateNumber = `${current.getDate()-1}`
console.log(dateNumber);

const dateNumberOne = `${current.getMonth() + 1}`
console.log(dateNumberOne);

const dateNumberTwo = `${current.getFullYear()}`
console.log(dateNumberTwo);

const finalResult = `${dateNumberTwo}-${dateNumberOne}-${dateNumber}`;
console.log(finalResult);