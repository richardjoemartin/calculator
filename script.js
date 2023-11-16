//display number in text box
function displaynumber(num){
    result.value+=num
}
//clear text box
function clearBox(){
    result.value=""
}
//evaluate expression
function evaluateOperator(){
    result.value=eval(result.value)
    }

//remove last item from list
function removelasitem(){
    result.value=result.value.slice(0,-1)
}