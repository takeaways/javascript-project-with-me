const puCS = {
  name:'슬라임',
  attr:'cute',
  color:'보라'
}

const {color, ...cs} = puCS;


const numbers = [1,2,3,4,5,6];
const [one, two, ...rest] = numbers;
