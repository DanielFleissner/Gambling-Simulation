function createTable(arrayTable) {

    const rows = arrayTable[0].length; //number of rows
    const columns = arrayTable.length + 1; //number of columns
    const table = document.createElement("table");
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
                dataCellValue = arrayTable[columnIndex-1][rowIndex];
            }
            dataCell.append(dataCellValue);   
            row.appendChild(dataCell);
        }
        table.appendChild(row);
    }

    return table;

}

function createTabs(){

    //get tabs container
    const ulTabs = document.getElementById("tabsContainer");
    //remove children from tabs container
    ulTabs.replaceChildren();

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
        input.addEventListener("click", changeActiveTable)
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

function changeActiveTable(event){

    //get input
    const input = event.target;
    //get tab id
    const tabID = input.id;
    //get numberic part of tab id
    const numbericPortionOfID = tabID.substring(3);

    //clear children from tables container
    const divTables = document.getElementById("tablesContainer");
    divTables.replaceChildren();

    //array index
    const index = numbericPortionOfID - 1;

    //create table
    const arrayTable = arrayTables[index];
    const table = createTable(arrayTable);

    //append table to table container
    divTables.appendChild(table);
}