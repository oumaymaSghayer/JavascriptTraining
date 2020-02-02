const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const add = (a,b) =>a+b;
var result=nums.reduce(add);
console.log(result);
/******************************* */
orders=[
    {type : "apples", price : 89},
    {type : "oranges", price : 99},
    {type : "bananas", price : 129},
    {type : "pineaples", price : 150},

]
var total = orders.reduce(
    (acc,currentOrder)=>{
        return acc +currentOrder.price
    } 
    , 0
) ;
console.log(total+"£");