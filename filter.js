const t =["a","b","c","d","e","f","g","h","i","j","k"];
const vowels = (l)=>{ return l !=="g";}
var result=t.filter(vowels);
console.log(result);
const add=(a)=>{ return a +"Q";};
result = t.map((a)=>a+"Q");
console.log(result);
