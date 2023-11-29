let arrayTables;

let firstProgramRun = true;
let tabClickedByUser;

let activeTabID;

btnRun = document.getElementById("btnRun");
btnRun.onclick = run;
document.addEventListener("keydown", runIfEnterKeydown);

function runIfEnterKeydown(e) {
  if(e.code === "Enter"){
    run();
  };
}


async function run(){

    hideElements();
    
    await refreshDisplay();
    
    let errorFound = inputValuesErrorHandling();
      
    if (!errorFound){

        addLoadingText();

        await refreshDisplay();

        unhideElements();

        if (firstProgramRun){
          
          createArrayOfTables();//creates empty three dimensional array
          
          createTabs();

          createTable();//creates empty table

          createArrayOfMedians();//create empty one dimesional array

          //createChart();//create empty chart

          firstProgramRun = false;

        }

        assignValuesToArrayOfTables();
               
        assignValuesToArrayOfMedians();

        tabClickedByUser = false;
        
        selectTabWithHighestMedian();

        outcomeDescription();

        createChart();

        console.log("finished");

    }

}