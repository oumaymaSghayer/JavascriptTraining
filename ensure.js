function ensure(value){
    try
    {if(value !== undefined) return value;}
    catch(error) {console.log(error);}
}
console.log(ensure(ob))