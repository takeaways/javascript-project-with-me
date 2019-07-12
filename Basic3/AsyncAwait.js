function sleep(ms){
  return new Promise(res => setTimeout(res,ms));
}

async function process(){
  console.log('Hello');
  await sleep(3000);
  console.log('bye');
}

process();
