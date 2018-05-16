//  Account checker

var balance = 5000.0;

var isActive = true;

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
        `${name} your account balance is ${totalBalance.toLocaleString(
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
