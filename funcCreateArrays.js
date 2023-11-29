function createArrayOfTables(){
    //this array of arrays contains one two-dimensional array at each investment percentile option.
    const numberOfTables = 99;
    const runs = 2000;// number of runs
    const steps = 100;// number of steps in a run
    arrayTables = new Array(numberOfTables);    
    //create empty 99x2000x100 array
    for (let table = 0; table < numberOfTables; table++) {
        arrayTables[table] = new Array(runs);
        for (let run = 0; run < runs; run++) {
            arrayTables[table][run] = new Array(steps);
        }
    }
}

function assignValuesToArrayOfTables(){
    //this array of arrays contains one two-dimensional array at each investment percentile option.
    const inputProabilityOfWinning = document.getElementById("proabilityOfWinning");
    const proabilityOfWinning = inputProabilityOfWinning.value/100;
    const numberOfTables = arrayTables.length;
    const runs = arrayTables[0].length;// number of runs
    const steps = arrayTables[0][0].length;// number of steps in a run
    
    for (let table = 0; table < numberOfTables; table++) {
        const investmentRatio = (table+1)/100;

        for (let run = 0; run < runs; run++) {
            //starting money at the begining of each run = $100,000
            let money = 100000;
            //calculate how much money is left after each step in a run
            for (let step = 0; step < steps; step++) {       
                if (money >= 100){
                    const investment = Math.round(money*investmentRatio); //round to the nearest dollar
                    if (proabilityOfWinning > Math.random()){
                        //winning senario
                        money = money + investment;
                    } else{
                        //losing senario
                        money = money - investment;
                    }            
                }
                arrayTables[table][run][step] = money;
            }
        }
    }
}