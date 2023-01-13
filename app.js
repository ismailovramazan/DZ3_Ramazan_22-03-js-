var evenNumber = 0;
while (evenNumber <=20)
 {
    console.log(evenNumber)
    evenNumber+=2;
}
var no = 0;
do {
    var number = Number( prompt("числону жазчы"));
    if (number >=0){
        no += number;
    }
}while (number >=0);
console.log('сумма чисел - ' + no)