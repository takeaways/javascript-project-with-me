const slime = {
  name:'슬라임'
}

const cuteSlime = {
  name:'슬라임',
  attr:'cute'
}

const puCS ={
  ...cuteSlime,
  color:'보라색'
}

const grCS ={
  ...puCS,
  color:'green' // 덮어 쓰기가 됩니다.
}
