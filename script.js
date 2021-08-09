// getNumber
function number(num){
    var result = document.getElementById("input");
    result.value += num;
}


//  Equal button 
function equal(){
    var result = document.getElementById("input");
    result.value = eval(result.value);
}

// clear button 
function clearResult(){
   var result = document.getElementById("input");
    result.value = "";
}

// Backspace Button 
function deleteChar(){
    var number = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}