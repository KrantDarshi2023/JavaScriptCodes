//object binding
function Car(regNum,brand){
    this.regNum=regNum,
    this.brand=brand;
}
Car.prototype.details = function() {
    console.log(this.regNum + " " + this.brand);
  };
  const car1= new Car("xyz","Hyundai");
  car1.details();

  
  //call   
  
let car2={
    ownerName:"krant",
    year:"2022",
}
let car3={
    ownerName:"swastik",
    year:"2022",
}

let printCarDetails = function()
{
    console.log(this.ownerName+" "+this.year);
}
printCarDetails.call(car3);
printCarDetails.call(car2);


///Apply


let printCarDetailsApply = function(brand)
{
    console.log(this.ownerName+" "+this.year+" "+brand);
}
//printCarDetailsApply.apply(car2);
printCarDetailsApply.apply(car3,["hyundai"]);

//bind
let printCarDetailsBind = function(brand)
{
    console.log(this.ownerName+" "+this.year+" "+brand);
}
//printCarDetailsBind.bind(car2);
 let binddemo=printCarDetailsBind.bind(car3,["ford"]);
 binddemo();


   