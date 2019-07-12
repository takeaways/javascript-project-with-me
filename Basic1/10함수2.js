function getGrade(score){
  if(score === 100){
    return 'A+';
  }else if(score >= 90){
    return 'A';
  }else if(score >= 80){
    return 'B+';
  }else{
    return 'F';
  }
}

console.log(getGrade(98));
