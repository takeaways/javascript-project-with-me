// function isAnimal(text){
//   return (
//     text === "고양이" || text ==="개"
//   )
// }
//
// console.log(isAnimal("고양이"));


function isAnimal(text){
  const animals = ["고양이","너구리","개""];
  return animals.includes(text);
}


// function getSound(animal){
//   if(animal === "개") return "멍멍";
//   if(animal === "참새") return "짹짹";
// }

const getSound = (animal) => {
  const sounds = {
    개:'멍멍',
    참새:'짹쨱'
  }
  return sounds[animal] || "...?";
}


function makeSound(animal){
  const tasks = {
    개(){
      console.log('멍멍');
    },
    고양이(){
      console.log('야옹');
    }
  }
    const task = tasks[animal];
    if(!task){
      console.log(',,,,,,??');
      return
    }
    task();
}


makeSound("개");
makeSound("너구리");
