arr=[33,1,2,3,9,10,21];
function FinfMaxDiff(arr){
    let maxDiff=0;
    if(arr.length<5){
       return "Insufficient Elements"
    }
    else{
    for(let i=0; i<arr.length; i++){
        diff=Math.abs(arr[i+1]-arr[i]);
        if(diff>maxDiff){
            maxDiff=diff;
        }
    }
    return maxDiff;
}
    
}
console.log(FinfMaxDiff(arr));