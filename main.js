let arrayTables;
let runButtonClicked;

btnRun = document.getElementById("btnRun");
btnRun.onclick = run;
document.addEventListener("keydown", runIfEnterKeydown);

function runIfEnterKeydown(e) {
  if(e.code === "Enter"){
    run();
  };
}


async function run(){

    runButtonClicked = true;

    hideElements();
    
    await refreshDisplay();
    
    let errorFound = inputValuesErrorHandling();
      
    if (!errorFound){

        addLoadingText();

        await refreshDisplay();

        unhideElements();

        createArrayOfTables();        

        createTabs();
        
        createArrayOfMedians();

        selectTabWithHighestMedian();

        outcomeDescription();

        createChart();

        runButtonClicked = false;

        console.log("finished");

    }

}