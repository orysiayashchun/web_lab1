//функція,я ка повертає кількість днів, що пройшли від початку року
function difference(){
  let date1 = new Date("01/01/2021");
  let date = new Date();
  let timeDiff=date.getTime()-date1.getTime();
  let diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diff
}
let diffDays=difference();
console.log(diffDays);
