arr=[1,2,3,4,5,6];
function swapArr(arr){
    if(arr.length%2!=0){
        return "Length Of Array is Odd cant Swap"
    }else{
        var half=arr.length/2;
        for(let i=0; i<half; i++){
                var temp=arr[i];
                arr[i]=arr[i+half];
                arr[i+half]=temp;
        }
        return(arr);
    }
}
console.log(swapArr(arr));