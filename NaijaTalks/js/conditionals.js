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

let someNums = [1, 2, 3, 4, 5, 6, 7, 'Chilaka', 'CJ', 'Ezekiel'];

let getSum = someNums.reduce((sum, current) => sum + current);
alert(getSum);

let eachElem = someNums.forEach((item, index, array) => {
  alert(item);
});

// Functions
function greet(name) {
	return alert('Good morning ' + name);
}
let name = prompt('Enter your name');

greet(name);

// using variables inside functions
let y = 4;
function addTwoNumber() {
	let x = 3;
	y = 10;
	alert(x + y);
}
alert(y);
addTwoNumber();
alert(y);

return
function studentName() {
	let fnm = 'Grace';
	let lnm = 'Anthony';
	let nm = `${fnm} ${lnm}`;
	return nm;
}
alert(studentName());

let age = +prompt('How old are you?', '');
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
     return confirm('Do you have parental permission?');
  }
}

if (checkAge(age)) {
  alert('You are in the club now');
} else {
  alert('Cannot verify you.');
}

let myNumbers = [
	[20, 12, 24, 5, 6],
	[1, 15, 8, 23, 10, 45],
	[7, 300, 9, 12, 4, 89]
];

let newNums = [];
for (let i = 0, numLen = myNumbers.length; i < numLen; i += 1) {
	for (let j =0, numLen = myNumbers.length; i < numLen; i++) {
		newNums.push(myNumbers[j]);
	}
}

let sum = 0;
let summedArr = myNumbers.forEach(function(arr) {
	return sum += arr;
});
console.log(newNums);

myNumbers.reduce((a, b) => a + b, 0);
console.log(myNumbers);




// Assignments

const numArr = [12, 100, 21, 34, 17, 2, 10, 27, 23, 12.09, 47.20];

function _20percent(arr) {
	let summedArr = arr.reduce((ini, acc) => ini + acc);
	let percent = arr.map(function(arr) {
		return (arr / summedArr) * 100;
	})
	return percent;
}

function _20percent(arr) {
	let summedArr = Math.floor(arr.reduce((ini, acc) => ini + acc));
	let percent = arr.map(function(arr) {
		return Math.floor((arr / summedArr) * 20/100);
	});
	return percent;
}

console.log(_20percent(numArr));


// Return whole numbers

// Question 1
const numArr = [12, 100, 21, 34, 17, 2, 10, 27, 23, 12.09, 47.20];

function _20percent(arr) {
	function calc (base) {
		return base * (20/100);
	}

	let percentArr = arr.map(calc);
	return percentArr;
}

// Bern's solution
let perAry = myNumbers.map((acc, ind, arr) => acc * 0.2);

// console.log(perAry);
console.log(_20percent(numArr));

// Question 2
const dimArr = [
	[23, 156, 25, 10, 52, 23],
	[12, 100, 23, 56, 81, 93],
	[42.5, 71, 10, 23, 35, 11, 72, 99],
	[11, 100, 99, 102, 13, 8, 12]
];

let dimL = [];
dimArr.forEach(function (arr) {
	arr.forEach(function (index) {
		if (index % 2 === 0) {
			dimL.push('even');
		} else {
			dimL.push('odd');
		}
	})
});
console.log(dimL);

function checkEvenOddArray(arr) {

	function checkEvenOdd(n) {
		if (n % 2 === 0) {
			return 'even';
		} else {
			return 'odd';
		}
	}

	let arrPercent = [];
	for (let i = 0; i < arr.length; i++){
		let childArr = arr[i].map(checkEvenOdd);
		arrPercent.push(childArr);
	}
		return arrPercent;
}
console.log (checkEvenOddArray(dimArr));


// Question 3
let customers = [

  {	id: 1,
  	name: "Ada Mike",
  	product: "Milk",
  	email: "ada@gmail.com" },

  {	id: 2,
  	name: "Friday Chukwuma",
  	product: "Milk",
  	email: "friday@gmail.com" },

  { id: 3,
  	name: "Ifeanyi Okeke",
  	product: "Indomie",
  	email: "ifeanyi@gmail.com" },

  { id: 4,
  	name: "Michael Chilaka",
  	product: "Milk",
  	email: "michael@gmail.com" },

  { id: 5,
  	name: "Bitrus Abah",
  	product: "Fruits",
  	email: "bitrus@gmail.com" },

  { id: 6,
  	name: "Jordi Leebni",
  	product: "Arts",
  	email: "jordLee@leebna.com" },

  { id: 7,
  	name: "Anaele Odinaka",
  	product: "Chemicals",
  	email: "anaele-odinaka@yahoo.com" },

  { id: 8,
  	name: "Melvis Ph3torn",
  	product: "Songs",
  	email: "phatMelv@runad.com" },

  { id: 9,
  	name: "Mark Jonah",
  	product: "Apps",
  	email: "marjo@gmail.com" },

  { id: 10,
  	name: "Celina Sands",
  	product: "Make ups",
  	email: "sandyCeli@aol.com" },

  { id: 11,
  	name: "Bharna Phandi",
  	product: "Electronics",
  	email: "bharnaphandi@gmail.com" },

  { id: 12,
  	name: "Obinna Ikechukwu",
  	product: "Autos",
  	email: "obike@Ikechukwu.com" },

  { id: 13,
  	name: "Anita Cameron",
  	product: "books",
  	email: "anitcame@gmail.com" },

  { id: 14,
  	name: "John Krump",
  	product: "Movies",
  	email: "jKamp@kamp.com" },

  { id: 15,
  	name: "Fositov kleenche",
  	product: "football",
  	email: "fasikle@gmail.com" }

  ];


// first answer
function customerOps(arr) {
	function expression (str){
		var newStr = str.toLowerCase();
		if (newStr.match(/a/g)) {
			return true;
		} else {
			return false
		}
	}

	for (let i = 0; i < arr.length; i++) {
		// This answers the first question
		if (arr[i].id === 3) {
			console.log(`${arr[i].name} has the id ${arr[i].id}`);
	  }
	}

  for (let i = 0; i < arr.length; i++) {
  	if (arr[i].id < 10) {
  		console.log(`${arr[i].name} and ${arr[i].email} with ${arr[i].product}`);
    }
  }

  let newCustomers = [];
	for (let i = 0; i < arr.length; i++){
		if (expression(arr[i].name)) {
			newCustomers.push(arr[i]);
		}
	}
	return newCustomers;
}

console.log(customerOps(customers));


var arr1 = [23, 4, 5];
var arr2 = [56, 23];
var arr3 = [...arr1,...arr2]; // you can use this on objects to

// for (let i = 0; i < customer.length; i++){
// 	if (customer[i].id === 3) {
// 		console.log ("i found 3" + customer[i].name);
// 	} else if (customer[i].id < 10) {
// 		console.log("found these users " + customer[i].name)
// 	}
// }

// function expression (str){
// 	var newStr = str.toLowerCase();
// 	if (newStr.match(/a/g)) {
// 		return true;
// 	} else {
// 		return false
// 	}
// }

// let newCustomers = [];
// for (let i = 0; i < customer.length; i++){
// 	if (expression(customer[i].name)) {
// 		newCustomers.push(customer[i]);
// 	}
// }