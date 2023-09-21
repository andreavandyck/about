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

let userPoints = 0;

let favNum = ["1", "4", "11"];

let Ans = prompt("What are my favourite numbers?");

for (let i = 0; i < favNum.length; i++) {
  if (Ans === favNum[i]) {
    alert("You got one");
    userPoints++;
  } else {
    alert("Not quite");
  }
}

//if (favFoods.indexOf(foodAns) >= 0) {
//alert("You got it right!");
//userPoints++;
//}
