/*Given a list of numbers, return whether any two sums to k. 
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

*/
const t=[10, 15, 3, 7,18];
const k = 17;

var result=t.filter((a)=>{ return a<17});
console.log(result);
var e = result.filter((a)=>{return result.indexOf(k-a) !== -1;})

console.log(e);
