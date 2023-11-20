let arrayTables;

btnRun = document.getElementById("btnRun");
btnRun.onclick = run;

async function run(){

    addLoadingText();

    await refreshDisplay();

    unhideElements();
    
    let errorFound = inputValuesErrorHandling();
      
    if (!errorFound){ 

        arrayTables = createArrayOfTables();        

        createTabs();
        
        createArrayOfMedians();

        outcomeDescription();

        console.log("finished");

    }

    createChart();

}