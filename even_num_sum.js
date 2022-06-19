// Print the sum of all even numbers in a range from a to b.
function evenNumSum(a,b){
    var sum=0
    for(i=a;i<=b;i++){
        if((i%2)==0){
            sum=sum+i;
        }
    }
    return sum;
}
console.log(evenNumSum(1,10));