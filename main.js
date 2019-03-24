try{
  for(var i =1 ; i>0; i++){
    console.log(i);
    if(i >= 1000){
    	throw new SyntaxError("???");
    }
  }
}
catch(e){
  console.log(e);
}