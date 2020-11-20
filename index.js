function kalkulator() {
    let input1 = parseInt(document.getElementById("input1").value)
    let input2 = parseInt(document.getElementById("input2").value)
    let operator = document.getElementById("operator").value
    let result = document.getElementById("result")
    let total = 0

    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        if (operator == "+") {
            total += input1 + input2
        } else if (operator == "-") {
            total += input1 - input2
        } else if (operator == "x") {
            total += input1 * input2
        } else {
            total += input1 / input2
        }
    }else{
        alert('masukkan + / - / * / (/)')
    }

    result.innerHTML = total
}