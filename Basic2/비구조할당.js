const obj = {a:1, b:2};
function print({a,b = 3}){
  console.log(a);
  console.log(b);
}


const animal = {
  name: '멍멍이',
  type:'개'
}

const {name:nickname] = animal;
console.log(nickname)


// 배열 비구조 할당.
const array = [1 ,2];
const [one, two, three=3] = array;
console.log(one, two, three);
