# Javascript 2020

## Javascript 2020시작하기

1. 2019에 공부했던 내용에 추가하는 작업을 진행합니다.

## 1️⃣ 변수 선언

### 1. var의 문제점

- 정의된 변수가 함수 스코프를 가진다.

  ```javascript
  function fnc() {
    var i = 1;
  }
  console.log(i); //error
  ```

- 선언문을 작성하지 않으면 전역변수가 되버린다.
  ```javascript
  function fnc1() {
    i = 1;
  }
  function fnc2() {
    console.log(i);
  }
  fnc1();
  fnc2(); //1
  ```
- 호이스틍이 발생한다.
  - 선언부가 실행 컨텍스트 최상단으로 올려지는 현상.
  - environmentRecord

### 2. const, let

- Block Scope를 가진다.
- 호이스팅이 동일하게 발생이 되지만 값이 할당이 되지 않은 상태.
  - var의 경우는 undefined가 할당이 됩니다.
- const 변경 불가능한 상수를 만든다. (상수: 재할당이 불가능한다.)
- let 변경이 가능한 변수를 만든다. (변수: 재할당이 가능하다.)

## 2️⃣ 타입

### 1. javascript의 8개의 기본타입

- typeof를 사용하면 오른쪽 값의 타입을 반환한다.
- 1️⃣ number, 2️⃣ bigint, 3️⃣ string, 4️⃣ boolean, 5️⃣ object, 6️⃣ symbol, 7️⃣ undefined, 8️⃣ null
- String, Number, BigInt, Booolean 형변환을 할 때 사용이이 가능합니다.
- symbol 유일한 값을 만든다.
- === (값과 타입모두 비교), == (타입을 변환화면서 까지 비교한다.)

  ```javascript
  const val1 = 1;
  const val2 = 100000000000000000000000000n;
  const val3 = "hello, world";
  const val4 = true; // false
  console.log(typeof val1, typeof val2, typeof val3, typeof val4);
  //number bigint string boolean

  const val5 = { name: "hello javascript" };
  const val6 = Symbol("hello");
  const val7 = undefined;
  const val8 = null;
  console.log(typeof val5, typeof val6, typeof val7, typeof val8);
  //object symbol undefined object(버그 수정 안된 상태)

  function fnc1() {}
  console.log(typeof fnc1);
  //function

  console.log(typeof []);
  //object
  ```

### 2. number 타입

- parseFloat 실수 파싱
- parseInt 숫자 까지만 파싱합니다.

  ```javascript
  const num1 = parseInt("123asb"); // 123
  ```

- NaN (Not a Number) [isNaN(NaN)으로 비교가능]
- Infinity

```javascript
//자바스크립트의 number는 64 bit 부동소수점(float point) 방식을 사용합니다.
// 부호(signed) 1bit, 지수부(exponent) 11bits, 가수부(fraction) 52bits
// (-1)^부호(부호담당) * 가수부(표현력) * 2^지수부(크기)
// 53bits prection

// -(2^53-1) ~ (2^53 -1 )
// 9007199254740991, 약 16자리
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
```

### 3. string 타입

- '', "", ``로 표현 할 수 있습니다,

### 4. boolean 타입, nullish coalescing

- &&, ||, !, !!, ??

### 5. object 타입, array

## 3️⃣ 객체와 배열의 주요 기능

### 1. spread operator 및 편의기능

- [...[1,2,3]] => [1,2,3]

### 2. destructuring

- const [a = 10, b = 30 ] = [1,3] // a = 1, b = 3
- const {age:theAge, name} = {age:1,name:'dev'}

### 3. optional chaining

- const person = {age:1}
  - person?.age

## 4️⃣ 함수

### 1. 일급 함수 및 콜 스택

- 함수가 다른 함수처럼 취급되면 일급함수라고 할 수 있다.

  - 변수에 할당
  - 매개면수로 전달
  - 함수내부에서 함수를 반환한다.

- 클로저

  - 함수와 함수를 둘러싸고 있는 상태를 말한다.
  - 자바스크립트 엔진은 함수가 종료되더라도 그 환경을 기역한다.

- 콜스택
  - 실행정보를 저장하기위한 스택을 가지고 있다.
  - excution context
  - global 실행 콘텍스트
  - 함수 실행을 만나면 콜스택에 넣고 함수 실행 콘텍스트가 만들어 진다.
  - 지역변수 정보를 가지고 있는 것을 lexical environment라고 한다.
  - outerReperenceEnviroment

### 2. lexical environment

- global 실행컨텍스트 > lexical enveronment(변수 맵이라고 생각하면 됩니다. )
  - environment record
  - outer environment referenceb

### 3. 함수 정의 방법

- function fnc(a = ()=>{console.log("값을 입력해 주세요)}){}
- function fnc(a, ...rest){} => fnc(1,2,3){}
- function fnc({name = "Hello", age=10}){}
- function fnc({name = "Hello", ...reset}){}
- const fnc = () => ({name:"Hello"}) //this와 arguments가 바인딩 되지 않습니다.

### 4. this

- 함수 내부에 this라는 키워드를 사용할 수 있습니다.
- 화살표 함수에서의 this는 화살표 함수가 생성될 떄의 this를 가르키게 된다.
- 일반함수는 함수가 실행될 때 this바인딩이 이루어 진다.

## 5️⃣ 프로미스

- 자바스크립트의 비동기 처리.
  - 프로미스 (pending -> fulfilled or rejected) settled
  - 콜백
