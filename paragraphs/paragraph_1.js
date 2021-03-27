//генерування шістнадцяткового числа
function number16  () {
  str=""
  x=Math.floor(Math.random()*1000)
  console.log("В десятковій системі числення:",x)
  let arr = ['A','B','C','D','E','F'];
  while (x>0) {
    b=x%16
    if (b>=10 && b<=15) {
      b=arr[b-10]
    }
    str=String(b)+str
    x=Math.floor(x/16)
  }
  return str
}
let number=number16()
 console.log("В шіснадцятковій системі:",number)
