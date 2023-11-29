function outcomeDescription(){
    const outcomePart1 = document.getElementById("outcomePart1");
    outcomePart1.innerHTML = percentileWithHighestMedian + "% is the percentile with the highest median. This is the most effective long term investment percentage according to the simulation for the entered \"% chance of winning\".";
    const outcomePart2 = document.getElementById("outcomePart2");
    outcomePart2.innerHTML = "The tabs below display the raw data at each percentile. By default the tab with the best performing percentile has been selected.";
}   