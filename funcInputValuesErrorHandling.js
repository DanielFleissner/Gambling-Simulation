function inputValuesErrorHandling(){

    let errorFound = false;
    const inputStringValue = document.getElementById("proabilityOfWinning").value
    const inputStringLength = inputStringValue.length;
    // convert string to Number
    const inputNumberValue = Number(inputStringValue);
    

    if (inputStringLength === 0){
        errorFound = true;
        alert("please enter a value between 0 and 100");
    }else if (inputNumberValue < 0) {
        errorFound = true;
        alert("value must cannot be negative");
    } else if (inputNumberValue > 100) {
        errorFound = true;
        alert("value must be less than 100");
    }
    else if (!Number.isInteger(inputNumberValue)) {
        errorFound = true;
        alert("value must be an integer");
    } 
    return errorFound;
    
}