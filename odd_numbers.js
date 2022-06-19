// Using a loop print all odd numbers up to and including n. Don’t include 0. 
function oddNumbers(n){
    for(i=1;i<=n;i++)
    {
        if((i%2)!=0){
            console.log(i);
        }
    }
}
oddNumbers(10);