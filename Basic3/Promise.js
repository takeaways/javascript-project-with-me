function increaseAndPrint(n, callback){
  setTimeout(()=>{
    const increased = n + 1;
    console.log(increased);
    if(callback){
      callback(increased);
    }
  },1000);
}

increaseAndPrint(0, n=>{
  increaseAndPrint(n, n=>{
    increaseAndPrint(n, n=>{
      increaseAndPrint(n, n=>{
        increaseAndPrint(n, n=>{
          console.log("작업끝");
        })
      })
    })
  })
})
//////////////////////////



function increaseAndPrint(n){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      const value = n + 1;
      if(value === 5){
        const error = new Error();
        error.name = 'ValueIsFiveError'
        rej(error);
        return;
      }
      console.log(value);
      res(value);
    },1000)
  })
}

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e=>console.error(e))
