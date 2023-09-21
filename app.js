function showAlert() {
  let color = prompt("What is my favorite colour?");
  console.log(color.toLowerCase());

  switch (color.toLowerCase()) {
    case "pink":
      alert("Who woulda thunk it!");
      break;
    default:
      alert("Wrong, my favourite colour is pink!");
  }
  let answer1 = prompt("How many siblings do I have?");
  console.log(answer1);
  if (answer1 === "1") {
    alert("Youre right!");
  } else {
    alert("Wrong answer, I have one sister!");
  }

  let answer2 = prompt("What's my relationship status?");
  console.log(answer2);
  if (answer2 === "single") {
    alert("Not anymore!");
  } else if (answer2 === "married") {
    alert("Almost!");
  } else if (answer2 === "engaged") {
    alert("Yep!");
  } else {
    alert("Not sure what other options there are");
  }
}

function guessingGame() {
  let answer = 3;
  let number = prompt("Guess a number between 1-10");
  let attempts = 4;
  while (attempts >= 1) {
    attempts--;
    if (number > answer) {
      alert("Too high!");
      number = prompt("Try again! You have " + attempts + " left");
    } else if (number < answer) {
      alert("Too low");
      number = prompt("Try again! You have " + attempts + " left");
    } else if (parseInt(number) === answer) {
      alert("Correct!");
      break;
    }
  }
  if (parseInt(number) !== answer) {
    alert("Actually the answer was 3");
  }
}
//if (favFoods.indexOf(foodAns) >= 0) {
//alert("You got it right!");
//userPoints++;
//}
