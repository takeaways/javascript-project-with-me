const numbers = {
  a:1,
  b:2.
  get sum(){
    console.log('sum 함수가 실행됩니다.');
    return this.a + this.b;
  },
}

console.log(numbers.sum); //getter 함수는 조회 할 때 싱행된다.
numbers.b = 5;
;


const dog = {
  _name: '멍멍이',
  set name(value){
    this._name = name;
  }
}
dog.name = '뭉뭉이'
