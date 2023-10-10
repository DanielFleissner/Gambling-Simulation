let arrayTables;
let arrayMedians;

function run(){
    let errorFound = inputValuesErrorHandling();
    if (!errorFound){
        
        arrayTables = createArrayOfTables();

        /* sessionStorage.setItem("array of Tables", jsonArrayTables); */

        createTabs();
        
        createArrayOfMedians();

        console.log("finished");

    }
}

btnRun = document.getElementById("btnRun");
btnRun.onclick = run;

const btnChangeColor = document.getElementById("btnChangeColor");

const para = document.getElementById("demo");

function changeColor(e){
    para.style.color = "red";
}


function testRand(){
    let sum = 0;
    for (let index = 0; index < 10000; index++) {
        let rand = betterMathRandom();
        sum = sum+ rand; 
    }
    console.log(sum);
}



 











