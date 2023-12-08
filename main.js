let arrayTables;
let tabClickedByUser;
let activeTabID;
let runningMain = false; //this feature does not work for some reason
let changingTab = false; //this feature does not work for some reason

btnRun = document.getElementById("btnRun");
btnRun.onclick = run;
document.addEventListener("keydown", runIfEnterKeydown);

function runIfEnterKeydown(e) {
  if(e.code === "Enter"){
    run();
  };
}


async function run(){

  if(!runningMain){
    runningMain = true;
    tabClickedByUser = false;
    activeTabID = "not defined yet"

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

        tabClickedByUser = true;

        console.log("finished");

    }
    runningMain = false;
  }
}