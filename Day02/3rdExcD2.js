
try{
function ErrorHandling(input1,input2){
   if(typeof(input1)==="string" || typeof(input2)==="string"){
     throw "String Error"
   }
   if (typeof(input1)==="number" && typeof(input2)==="number" ) {
    if(input2===0){
        throw "Divide by zero Exception"
    }else{
      let res=input1/input2;
      return res;
   } 
}
}
}
catch(err){
  console.log(err)
}
console.log(ErrorHandling(34,2));
console.log(ErrorHandling(34,0));
 console.log(ErrorHandling("krant",2));