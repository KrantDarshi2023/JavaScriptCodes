function function1(){
    console.log()
}
 
function function2(x,y,callback){
    var multiply= x*y;
    callback(multiply);
}
function2(4,5,function1)