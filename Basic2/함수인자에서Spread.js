function say(파라미터){}
say(인자);

function sum(...rest){
  return rest.reduce((acc, curr) => acc+curr, 0);
}
const numbers = [1,2,3,4,5,6,7];

console.log(sum(...numbers));











const arr1 = [1,2,3,4,10,5,6,7]

function Max(...rest){
    return rest.reduce((acc,c)=> acc > c ? acc : c, 0);
}
