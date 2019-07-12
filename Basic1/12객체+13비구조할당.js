//하나의 이름에 여러개의 이름을 넣을 수 있게 해준다!

const dog = {
  name:'멍멍이',
  age:2,
  cute:true,
  sample:{
    a:1
  },
}

console.log(dog)
console.log(dog.name);
console.log(dog.age);

const iromMan = {
  name:'토니스타크',
  actor:'로버트 다우니 주니어',
  alias:'아이언맨'
}



function pring(hero){
  //비구조할당
  const {alias,name.actor} =hero
  const text = `${alias}`
}
