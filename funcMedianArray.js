//use array Tables array of arrays to determine the median value of the last step at each percentile

let highestMedian;
let arrayOfMedians;

function createArrayOfMedians() {
    //get number of tables as upper limit of loop index
    const numberOfTables = arrayTables.length;
    const rows = arrayTables[0][0].length; //number of rows = number of steps
    const columns = arrayTables[0].length; // number of columns = number of runs
    arrayOfMedians = new Array(numberOfTables);

    for (let index = 0; index < numberOfTables; index++) {
        //get table from tables array at index
        const arrayTable = arrayTables[index];
        
        //get last row of table
        const lastRowOfTable = new Array(columns);

        for (let column = 0; column < columns; column++){            
            lastRowOfTable[column] = arrayTable[column][rows-1];
        }
        
        //get median value from last row
        const median = funcMedian(lastRowOfTable);

        //assign values to array elements
        arrayOfMedians[index] = median;
    }
    highestMedian = Math.max(...arrayOfMedians);
    //find index at hightest median
    const indexOfhighestMedian = arrayOfMedians.indexOf(highestMedian);
    //get tabs container
    const ulTabs = document.getElementById("tabs");
    //select input element and click it
    //tab ID
    const tabID = "tab" + (indexOfhighestMedian+1);
    const tabWithHighestMedian = document.getElementById(tabID);
    tabWithHighestMedian.click();
}

function funcMedian(arr) {
    const mid = Math.floor(arr.length / 2);
    const sortedArr = arr.sort((a, b) => a - b);
  
    if (arr.length % 2 === 0) {
       return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
       return sortedArr[mid];
    }
}
