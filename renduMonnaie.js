const money = [5,2,1];

var s = 28;



for (m in money){
    while (s-money[m] >= 0) {
        result.push(money[m]);
        s-=money[m];
    }
}
console.log(result)