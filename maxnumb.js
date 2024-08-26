function maxofTwonumber (){
    const num1=Number(document.querySelector("input:nth-child(1)").value);
    const num2=Number(document.querySelector("input:nth-child(2)").value);
    const textResul=document.querySelector("form + p ")
    let result

    if (num1>num2){
        result=num1

    }else if(num2>num1){
        result=num2
    }
    else {
        result="two number is equal";
    }
    textResul.innerHTML="max number : " + result;
}


