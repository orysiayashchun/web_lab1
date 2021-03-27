//функція, яка вставляє стрічку на відповідну позицію іншої
function insert(str,sub,position){
  return str=str.substr(0,position)+sub+str.substr(position,str.length)
}

s1="Hello world!"//стрічка
s2="javascript"//підстрічка
i=3//позиція

console.log("Утворена стрічка:",insert(s1,s2,i))
