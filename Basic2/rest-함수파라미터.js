//하나이 배여로 나온다
function sum(...rest){
  return rest.reduce((acc, current) => acc+current, 0);
}
