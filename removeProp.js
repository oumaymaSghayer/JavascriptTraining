function removeProperty(obj,prop){
    if (prop in obj){
        delete obj[prop];
        return true;
    }
    return null;
}
var car ={
    color: "red",
    mark:"bmw"
};
console.log(removeProperty(car,"color"));
console.log(car)