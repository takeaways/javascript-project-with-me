async function(){
  try{
    const [p1, p2] = await Promise.all([프1, 프2]);
  }catch(e){
    console.error(e);
  }
}

//동시실행
