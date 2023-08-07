function scuberGreetingForFeet(ride, newRide) {
  // Write your code here!
  const distance = 400;
  const limit = 2500;

  if (ride < distance) {
    return "This one is on me!";
  } else if (ride > distance) {
    return "I will gladly take your thirty bucks.";
  } else if (newRide > limit) {
    let res = "No can do.";
    console.log(res);
  }
}
console.log(scuberGreetingForFeet(199, 2600));

// function scuberGreetingForFeet() {
//   // Write your code here!
//   const distance1 = 2500;
//   const ride1 = 3000;

//   if (ride1 > distance1) {
//     const res = ;
//     return res;
//   }
// }
// console.log(scuberGreetingForFeet());

function ternaryCheckCity(city) {
  const msg = city === "NYC" ? "Ok, sounds good." : "No go.";
  return msg;
}
console.log(ternaryCheckCity("NYC"));

function ternaryCheckCity(city) {
  const msg1 = city === "NYC" ? "Ok, sounds good." : "No go.";
  return msg1;
}
console.log(ternaryCheckCity("NY"));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
switchOnCharmFromTip(tip);
