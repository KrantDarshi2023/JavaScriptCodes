arr1=[1,2,3,4,5]
arr2=[2,3,4,5,1]
function compare(arr1,arr2){
    if(arr1.length!==arr2.length){
       return "Unequal";
    }
   for(let i=0; i<arr1.length; i++){
      var check=false;
      for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
            check=true;
        }
      }
      if(check===false){
        return "Unequal"
        break;
      }
   }
   if(check===true){
    return "Equal"
   }
}
console.log(compare(arr1,arr2))