// Take a number and return all the even digits of the number.
function evenDigits(num){
    var x=0;
    if((num%2)==0)
        console.log(num%10);
    if(num>=10 && num<100){
        x=1;
    }
    else if(num>=100 && num<1000){
        x=2;
    }
    else if(num>=1000 && num<10000){
        x=3;
    }
    else if(num>=10000 && num<100000){
        x=4;
    }
    else if(num>=100000 && num<1000000){
        x=5;
    }
    
    for(i=1;i<=x;i++){
        var num1=Math.floor(num/10);
        var num2=num1%10;
        num=num1;
        if((num2%2)==0)
            console.log(num2);
    }
}
evenDigits(123568);