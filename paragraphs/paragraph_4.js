//елемент з найбільшою частотою повторень
function countOfRepetitions(a,r){
  a.forEach(function(i){
      if (r[i] != undefined)
          r[i]+=1;
      else
          r[i] = 1;
  });
}

function maxElement(a,r){
  max=r[a[0]];
  for (let key in r){
    if(r[key]>max){
      max=r[key];
    }
  }
  return max;
}
let array = [-2,1, 3, 4, 4, 1, 2, 4, 5];
let result = [];
countOfRepetitions(array,result);
for (let key in result){
  console.log(`${key} повторяється ${result[key]} рази`);
}
console.log(`Елемент з найбільшою частотою повторень ${array[maxElement(array,result)]}`);
