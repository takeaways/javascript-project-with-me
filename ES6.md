# ES6

## 💫 Block Scope

1. if문, for문, while문, switch-case문. '문단' 결과를 리턴하지 않아요.
2. 식 expresstion. 값이 될 수 있는 경우.
3. 값

```js
if(true){}//실행 후 끝
for(){}
while(){}
switch(){}
```

### hoisting?

- 호이스팅이 된다면?

1. const, let 호이스팅이 되기 때문에 reference 에러가 나는 겁니다.
2. const, let TDZ 끓어 올리지만 undefined를 할당 하지 않는다.

```js
if (true) {
  let a = 10;
  if (true) {
    console.log(a);
    const a = 20;
  }
  console.log(a);
}
```

### TDZ: Temporal Dead Zone (임시시각디재.)

- Ecmascript에서 정의한 개념은 아닙니다.

1. let TDZ에 갇힌다.

### const (Constant Variable)

- 어떤 값이 상수다 -> 알파요 오메가 늘 영원히 언제나 그 값을 의미하는 것인가?

### Object.freeze()

### 얕은 복사 : 객체의 프로퍼티들을 복사 (depth 1단계 까지만)

- Object.assign({},a)

### 깊은 복사 : 객체의 모든 depth복사
