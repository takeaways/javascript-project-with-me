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
- const 변경 불가능한 상수를 만든다. (상수: 재할당이 불가능한다.)
- let 변경이 가능한 변수를 만든다. (변수: 재할당이 가능하다.)
