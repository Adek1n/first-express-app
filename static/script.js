let firstValue;
let secondValue;
let operation;
function getDisplayValue(){
    return document.getElementById("calculator-display").innerHTML;
}
function getDisplayElement(){
    return document.getElementById("calculator-display");
}
function allClear(){
    getDisplayElement().innerHTML="";
}
function onceClear(){
    getDisplayElement().innerHTML=getDisplayValue().substring(0,getDisplayValue().length-1);
}
function enterNumber(x){
    getDisplayElement().innerHTML=getDisplayValue().concat(x);
}
function enterPercent(){
    if(getDisplayValue().indexOf('%')==-1&&getDisplayValue().length!=0){
        getDisplayElement().innerHTML=getDisplayValue().concat('%');
    }
}
function enterDecimal(){
    if(getDisplayValue().indexOf('.')==-1&&getDisplayValue().length!=0){
        getDisplayElement().innerHTML=getDisplayValue().concat('.');
    }
}
function enterOperation(x){
    firstValue=getNumericDisplayValue();
    operation=x;
    getDisplayElement().innerHTML=null;
}
function enterEquals(){
    secondValue=getNumericDisplayValue();
    let result;
    switch(operation){
        case '*':
            result=firstValue*secondValue;
            break;
        case '/':
            result=firstValue/secondValue;
            break;
        case '-':
            result=firstValue-secondValue;
            break;
        case '+':
            result=firstValue+secondValue;
            break;    
    }
    getDisplayElement().innerHTML=result;
}
function getNumericDisplayValue(){
    if(getDisplayValue().indexOf('%')==-1){
        return parseFloat(getDisplayValue());
    }
    else{
        return parseFloat(getDisplayValue())/100;
    }
}