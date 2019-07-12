//작업을 한 번에 할 수 있어요!!
//api file password ..
function work(callback){
  setTimeout(()=>{
    const start = Data.now();
    for(let i = 0 ; i < 1000000; i++){

    }
    const end = Date.now();
    console.log(end-start+'ms');
    callback(end-start);
  },0)// 4ms 입니다

}

work((ms)=>{
  console.log('작업이 끝났습니다.');
  console.log(me+'ms 걸렸다');
});
console.log('다음작업');
