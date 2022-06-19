// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even
function productOfNumbers(a,b){
    var prod=1;
    for(i=a;i<b;i++){
        var secNum1=Math.floor(i/10);
        var secNum=secNum1%10;
        if(secNum==4 && (i%2==0)){
            prod=i*prod;
        }
    }
    if(prod>1)
        return prod;
    return 0;
}
console.log(productOfNumbers(10,45));