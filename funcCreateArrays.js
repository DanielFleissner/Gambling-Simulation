function createTableArray(investmentRatio, proabilityOfWinning){

    //create empty 400x100 array
    const runs = 2000;// number of runs
    const steps = 100;// number of steps in a run
    const arrayTable = new Array(runs);
    for (let index = 0; index < runs; index++) {
        arrayTable[index] = new Array(steps);
    }

    for (let run = 0; run < runs; run++) {
        
        let money = 100000;
        // calculate how much money is left after each step in a run.
        for (let step = 0; step < steps; step++) {
            
            if (money >= 100){
                let investment = Math.round(money*investmentRatio); // round to the nearest dollar
                if (proabilityOfWinning > Math.random()){
                    //winning senario
                    money = money + investment;
                } else
                {
                    //losing senario
                    money = money - investment;
                }            
            }
            arrayTable[run][step] = money;

        }
    }
    return arrayTable;
}

function createArrayOfTables(){
//this collection of arrays contains one array at each investment ratio option.
    const numberOfTables = 99;
    arrayTables = new Array(numberOfTables);
    const inputProabilityOfWinning = document.getElementById("proabilityOfWinning");
    const proabilityOfWinning = inputProabilityOfWinning.value/100;

    for (let index = 0; index < numberOfTables; index++) {
        const investmentRatio = (index+1)/100;
        const arrayTable = createTableArray(investmentRatio, proabilityOfWinning);
        arrayTables[index] = arrayTable;
    }
    return arrayTables;
}



function betterMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295; 
}
