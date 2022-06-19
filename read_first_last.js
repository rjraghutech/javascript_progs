// Write a program to read the first and last digit of a number
function readFirstLast(num){
    let last=num%10;
    while(num>10){
    var first=Math.floor(num/10)
    num=num/10;
    }
    return (first+","+last);
}
console.log(readFirstLast(23459));
