// let name = "Mathew Onoja";

// let message = " is an instructor at LearnFactory Nigeria";

// console.log(name + message);

// // class work
// alert("Hello " + name); // Hello Matthew Onoja
// alert(name + " You are on the way to learnfactory"); // Matthew Onoja You are on the way to learnfactory
// // first alerts the name after the string, the second alerts the name before the string
// let mat = 7;
// document.writeln("The variable mat has typeof " + typeof mat + "<br>");

// let myPple = "Shalom Bernadine Zoe and Grace";
// document.write("The variable myPple has typeof " + typeof myPple + "<br>");
// document.write(myPple);

// let oranges = 5;
// let children = 3;
// let remainder = oranges % children;
// console.log(`The remainder of the oranges are ${remainder}`);

// let count = 0;
// let username = "leeblank";

// My for loop implementation
/*
for (var i = 0; i <= count; i++) {
  let name = prompt("What is your name?");
  if (name === username) {
    alert(`Welcome ${name}`);
    break;
  } else if (name !== username) {
    alert(`${name} does not match.`);
  }
  if (i == 2) alert(`${name} you have exceeded trails! contact Admin.`);
}

// My while loop implementation
while (count < 3) {
  let name = prompt("What is your name?");
  if (name === username) {
    alert(`Welcome ${name}`);
    break;
  } else if (name !== username) {
    alert(`${name} does not match.`);
  }
  if (count == 2) alert(`${name} you have exceeded trails! contact Admin.`);
  count++;
}
*/

// MR MATT SOLUTION WITH IF
/*
let count = 0;
let username = "fayvor";
let name = prompt("Enter your username");

if (name !== username) {
  alert(`${name} does not match. Try again.`);
  count++;
  if (count < 3) {
    name = prompt("Enter your username");
    if (name !== username) {
      alert(`${name} does not match. Try again.`);
      count++;
      if (count < 3) {
        name = prompt("Enter your username");
        if (name !== username) {
          alert(`${name} does not match! You have one more trial.`);
          count++;
          if (count === 3) {
            name = prompt("Enter your username");
            if (name !== username) {
              alert(
                `${name} you have exceeded number of trials. Contact Admin!`
              );
              alert(`You have tried ${count} times.`);
            } else {
              alert(`${name} Signed in successfully.`);
            }
          }
        } else {
          alert(`${name} Signed in successfully.`);
        }
      }
    } else {
      alert(`${name} Signed in successfully.`);
    }
  }
} else {
  alert(`${name} Signed in successfully.`);
}
*/

// let isMatured = false;
// let permission = false;
// let isGranted = (permission || isMatured) ? "Access Granted." : (isMatured && !permission) ? "Access Granted" : (!permission && !isMatured) ? 'Access Denied' : 'Get Authorization';
// console.log(isGranted);

// let age = +prompt("How old are you?");
// if (permission || age < 18) {
//   alert('Access Denied.');
// } else if (age > 18) {
//   alert('Access Granted.');
// } else if (!permission || age < 18) {
//   alert('Access Granted.');
// }

// let granted =
//   permission || age < 18
//     ? alert("Access Denied.")
//     : !permission || age < 18
//       ? alert("Access granted")
//       : "Access Granted";

// let age = +prompt("How old are you?");
// var permit;
/*
let cinema =
  age > 18
    ? "Access Granted"
    : (permit = prompt("Grant Permission", "true or false"));
permit === "true"
  ? "Access Granted"
  : permit === "false" && age < 18
    ? "Access Denied"
    : age > 18
      ? "Access Granted"
      : "You are underaged with no permission";
alert(cinema);
*/
/*
let cinema =
  age > 18
    ? "Access Granted."
    : (permit = prompt("Grant Permission", "true or false")(permit === 'true')
        ? "Access Granted"
        : permit === "false" && age < 18)
      ? "Access Denied"
      : "you are underaged with no permission";

alert(cinema);
*/

// ARRAYS

// const weekDays = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

// for (let i = 0; i < weekDays.length; i++) {
//   let eachDay = weekDays[i];
//   document.write(eachDay + '<br>');
// }

