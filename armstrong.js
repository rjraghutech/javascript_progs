// Check whether the given number is an armstrong number or not. 
function armstrong(num){
    var last=num%10;
    if(num>=10 && num<100){
        var num1=Math.floor(num/10);
        var output=(num1**3)+(last**3);
    }
    else if(num>=100 && num<1000){
        var num_div=Math.floor(num/10);
        var num1=Math.floor(num_div/10);
        var num2=num_div%10;
        var output=(num1**3)+(num2**3)+(last**3);
    }
    else if(num>=1000 && num<10000){
        var num_div1=Math.floor(num/10);
        var num_div2=Math.floor(num_div1/10);
        var num1=Math.floor(num_div2/10);
        var num2=num_div2%10;
        var num3=num_div1%10;
        var output=(num1**3)+(num2**3)+(num3**3)+(last**3);
    }
    if(output==num)
    {
        return ("Armstrong Number");
    }
    return ("Not Armstrong Number");
}
console.log(armstrong(371));