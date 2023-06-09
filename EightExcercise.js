var num=9;
var ans="";
while(num>0){
    var rem=parseInt( num%2);
    num=parseInt( num/2);
    ans=ans+rem;
    
}
console.log(ans.split("").reverse().join(""));