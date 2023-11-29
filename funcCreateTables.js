function createTabs(){

    //get tabs container
    const ulTabs = document.getElementById("tabsContainer");

    //get number of tables as upper limit of loop index
    numberOfTables = arrayTables.length;

    for (let index = 0; index < numberOfTables; index++) {
        
        const liTab = document.createElement("li");

        //create input radio button
        const input = document.createElement("input");
        input.id = "tab" + (index+1);
        input.type = "radio";
        input.name = "tabs";
        if (index === 0){
            input.checked = true;
        }
        input.addEventListener("click", changeActiveTab)
        //append input to li
        liTab.appendChild(input);
        
        //create label
        const label = document.createElement("label");
        label.id = "label" + (index+1);
        label.htmlFor = "tab" + (index+1);
        label.innerHTML = (index+1) + "%";
        //append label to li
        liTab.appendChild(label);

        //append liTab to tabs ulTabs
        ulTabs.appendChild(liTab);
    }
}

function createTable() {

    const rows = arrayTables[0][0].length; //number of rows
    const columns = arrayTables[0].length + 1; //number of columns
    const table = document.createElement("table");
    table.id = "table";
    //table header
    const headerRow = document.createElement("tr");

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const headerCell = document.createElement("th");          
        let headerCellValue;
        if (columnIndex == 0) {       
            headerCellValue = "Step";
        }
        else {  
            headerCellValue = "Run " + columnIndex;
        }
        headerCell.append(headerCellValue);
        headerRow.appendChild(headerCell);  
    }
    table.appendChild(headerRow);        
    //table body
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {  
        const row = document.createElement("tr");
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {               
            const dataCell = document.createElement("td");
            let dataCellValue;
            if (columnIndex == 0) {
                dataCellValue = rowIndex + 1;
            }
            else {
                dataCellValue = "";
            }
            dataCell.append(dataCellValue);   
            row.appendChild(dataCell);
        }
        table.appendChild(row);
    }

    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.appendChild(table);
}

function assignValuesToTable(arrayTable){

    const rows = arrayTable[0].length + 1; //number of rows
    const columns = arrayTable.length + 1; //number of columns
    const table = document.getElementById("table");
    //table body
    for (let rowIndex = 1; rowIndex < rows; rowIndex++) {  
        //index starts at 1 to skip first row
        for (let columnIndex = 1; columnIndex < columns; columnIndex++) {               
            //index starts 1 to skip first column

            const dataCellValue = arrayTable[columnIndex-1][rowIndex-1];
            table.rows[rowIndex].cells[columnIndex].innerHTML = dataCellValue;
        }
    }
}

async function changeActiveTab(event){
    //get input
    const input = event.target;
    //get tab id
    const tabID = input.id;
    //get numberic part of tab id
    const numbericPortionOfID = tabID.substring(3);

    if (tabClickedByUser == true){
        const p = document.getElementById("loadingTable");
        p.style.display = "block";
        p.style.margin = 0;
        const table = document.getElementById("table");
        table.style.display = "none";
        //display loading text in container
        await refreshDisplay();
        //hide loading text from container
        p.style.display = "none";
        table.style.display = "table";
    }
    //array index
    const index = numbericPortionOfID - 1;
    
    //table data
    const arrayTable = arrayTables[index];
    
    //assign values to table
    assignValuesToTable(arrayTable);
}