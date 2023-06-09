let student={
    name:"Krantdarshi",
    rollno:123
}
function FindDetails(student){
    console.log(Object.keys(student))
    console.log(Object.values(student))
    console.log(Object.keys(student).length);
}
FindDetails(student);