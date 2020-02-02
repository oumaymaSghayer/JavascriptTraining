/*
Given the root to a binary tree, implement serialize(root), 
which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.*/

const r = {
    data : "root"
}
const a = {
    data : "a"
}
const b = {
    data : "b"
}
const c = {
    data : "c"
}
const d = {
    data : "d"
}
const e = {
    data : "e"
}
const f = {
    data : "f"
}
r.right =a;
r.left = b;

a.right =c;
a.left = d;

b.right =e;
b.left = f;
console.log(r);

function serialize(root) {
    var result =[];
    if (root=== undefined){result.push(-1); return result ;}
   
    result.push(root.data);
    result.push(serialize(root.right));
    result.push(serialize(root.left));
    return result;
   
}
//onsole.log(c.right);
console.log(serialize(r));