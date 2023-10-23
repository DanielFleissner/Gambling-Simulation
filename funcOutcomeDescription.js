function outcomeDescription(){
    const p = document.getElementById("outcome");
    p.innerHTML = percentileWithHighestMedian + "% is the percentile with the highest median. This is the most effective long term investment percentage accorrding to the simulation for the entered \"% chance of winning\"." + "\n" + "The tabs below display the raw data at each percentile. By default the best performing percentile has be selected.";
}   