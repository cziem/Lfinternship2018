//  Account checker

var balance = 5000.0;

// var isActive = true;

var acctName = "westBanks";

var usrName = prompt("Enter your account name");

if (usrName === acctName) {
  if (isActive) {
    alert(
      `${acctName} your account balance is N${balance.toLocaleString(
        "en-US"
      )} only.`
    );
  } else {
    alert(
      `${acctName} your account is in-active! Please kindly contact your Financial manager!`
    );
  }
} else {
  alert(`${usrName} does not match any account in the database!`);
}

// Even and Odd numbers

var usrNum = +prompt("Enter a number", "100");

for (var i = 1; i <= usrNum; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even");
  } else if (i % 2 !== 0) {
    console.log(i + " is Odd");
  }
}

// Music Stuff
var usrGrp = +prompt("How many are you in the group");

if (usrGrp <= 0) {
  alert("You are not a group.");
} else if (usrGrp === 1) {
  alert("You are solo.");
} else if (usrGrp === 2) {
  alert("You are a duet");
} else if (usrGrp === 3) {
  alert("You are a trio");
} else if (usrGrp === 4) {
  alert("You are a quartet");
} else if (usrGrp > 4) {
  alert("This is a large group");
}

let isActive = false;
let username = "fayvor";
let name = prompt("Enter username");
let amountDeposit = +prompt("Enter deposit amount");
let totalBalance = 0;
totalBalance += amountDeposit;

if (name === username) {
  if (totalBalance) {
    isActive = true;
    if (isActive) {
      alert(
        `${name} your account balance is N${totalBalance.toLocaleString(
          "en-US"
        )}`
      );
    }
  } else {
    alert(
      `${name} your acount is currently in-active! Please contact your financial advisor!`
    );
  }
} else {
  alert(`${name} you are not a registerd customer.`);
}


var month = prompt('Enter month');

switch (month) {
  case 'january':
    alert('The year has just begun');
    break;
  case 'december':
    alert('Christmas is around the corner');
    break;
  case 'june':
    alert('Just rounding up the first quarter of the year');
    break;
  case 'february':
    alert('Fools are increasing');
    break;
  case 'march':
  case  'april':
    alert('Marching forward');
    break;
  case 'october', 'november':
    alert('Ember month fever');
    break;
  case 'september':
    alert('School has resumed');
    break;
  case 'may':
  case 'august':
  case 'july':
    alert('Are you on break yet?');
    break;
  default:
    alert('This month is execptional.');
    break;
}


var browser = prompt("What is your browser type?");

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support the" + browser + " too");
    break;
  default:
    alert("We hope that this page looks ok!");
}


if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support the " + browser + " too");
} else {
  alert("We hope that this page looks ok!");
}

// QUESTION 2

// let a = +prompt('a?', '');

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert('2, 3');
}


let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert(2, 3);
    break;
}

ARRAYS

let fruits = [];
fruits[100] = 'Mango';
fruits[5] = 'Apple';
fruits[10] = 'Orange';
// alert(fruits);

let animals = ['Goat', 'Dog', 'Chicken', 'Cow'];
// alert(animals)
animals.shift();


let arr = [1, 2, 3, ['g', 'l', 5], []];
arr[4].push('add');
arr[4].push('git');
arr[4].push('projects');

alert(arr[4]);

let array = ['home', 'run', 'developer', 'system', 1, 3, 4, 6];
alert(array.reverse());

let sortArr = [1, 4, 2, 5, 7, 8, 9, 20, 23, 12, 29, 26, 15, 94];
let sorted = sortArr.sort((a, b) => b -a);
alert(sorted);

name = ['Bentely', 'Continental', 'Baddmos'];
let company = ['GozzTech', 'Rectify', 'osz'];
let fullLog = name.concat(company);
// fullLog.sort.apply((a, b) => a - b); // Assignment... make this sort
// alert(fullLog);

function doSomething(arr) {
    alert('The database has the following: ' + arr);
    var usrName = prompt('Enter username');
    if (arr.indexOf(usrName) !== -1) {
        const numVal = arr.indexOf(usrName);
        const retArrRem = arr.splice(numVal, 1);
        alert('The deleted item is: ' + retArrRem);
        alert('The current database is: ' + arr);
    }
}

doSomething(fullLog);