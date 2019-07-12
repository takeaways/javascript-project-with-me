//Falsy : undefined null 0 '' NaN false

function print(person){
  if(!person){
    console.log('값이 없어요')
  }else{
      console.log(person.name);
  }

}

const person = {
  name : "Kin"
}

print(person);
