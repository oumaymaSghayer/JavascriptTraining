const t=[0,1,2,3,4,5,6,7,8,9,10,11,12];
function add (a,b) { return a + b ;}
var result = t.reduce(add,5);
console.log(result);
/********** */
orders=[
    {type : "apples", price : 89},
    {type : "oranges", price : 99},
    {type : "bananas", price : 129},
    {type : "pineaples", price : 150},

];
t2=["a","b","c","d","e","f","g","h","i","j","k"];
result = t2.reduce((a,e,i)=>{
   console.log(a); console.log(e);console.log(i);
    a.push(e);
    return a;
},["q"]);
/** */
result = t2.reduce((a,e,i)=>{
    return a+=e;
},'->');

console.log(result);
