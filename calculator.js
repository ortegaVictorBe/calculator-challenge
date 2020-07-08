let operA;
let operB;
let operation;

function init() {
    let result = document.getElementById("result");
    let reset = document.getElementById("reset");
    let sum = document.getElementById("sum");
    let subtraction = document.getElementById("subtraction");
    let product = document.getElementById("product");
    let division = document.getElementById("division");
    let equal = document.getElementById("equal");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let cero = document.getElementById("cero");


    one.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }
    two.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }
    three.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }
    four.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }
    five.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }
    six.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }
    seven.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }
    eight.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }
    nine.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }

    //operations key
    reset.onclick = function (e) {
        reseting();
    }

    sum.onclick = function (e) {
        operA = result.textContent;
        operation = "+";
        clean();
    }
    subtraction.onclick = function (e) {
        operA = result.textContent;
        operation = "-";
        clean();
    }
    product.onclick = function (e) {        
        operA = result.textContent;
        operation = "*";
        clean();
    }
    division.onclick = function (e) {
        operA = result.textContent;
        operation = "/";
        clean();
    }

    equal.onclick = function (e) {
        operB = result.textContent;
        resulting();
    }
}

//clean function: clean the result box
function clean() {
    result.textContent = "";
}

//reset function: clean all variables
function reseting() {
    result.textContent = "";
    operA = "";
    operB = "";
    operation = "";

}

//result function: calculate the result based in operator and elements
function resulting() {
    let res = 0;    
    console.log(operA);
    console.log(operB);
    console.log(operation);
try{
    switch (operation) {
        case "+":
            res = parseFloat(operA) + parseFloat(operB);
            break;

        case "-":
            res = parseFloat(operA) - parseFloat(operB);
            break;

        case "*":
            res = parseFloat(operA) * parseFloat(operB);
            break;
        case "/":            
                //Valid division by 0
                if (operB == "0") {
                     
                    throw "Division by 0"
                }
                res = parseFloat(operA) / parseFloat(operB);            
            break;
    }
    reseting();    
    result.textContent = res;
}
    catch (error) {  
    reseting();                                   
    result.textContent = error; 
} 

 }  
