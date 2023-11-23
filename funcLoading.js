function addLoadingText(){
    const outcomePart1 = document.getElementById("outcomePart1");
    outcomePart1.innerHTML = "Loading...";
    outcomePart1.style.display = "block";
}

function hideElements(){
    const tabsContainer = document.getElementById("tabsContainer");
    tabsContainer.style.display = "none";
    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.style.display = "none";
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "none";
    const outcomePart1 = document.getElementById("outcomePart1");
    outcomePart1.style.display = "none";
    const outcomePart2 = document.getElementById("outcomePart2");
    outcomePart2.style.display = "none";
}

function unhideElements(){
    const tabsContainer = document.getElementById("tabsContainer");
    tabsContainer.style.display = "flex";
    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.style.display = "block";
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "block";
    const outcomePart2 = document.getElementById("outcomePart2");
    outcomePart2.style.display = "block";
}

function refreshDisplay(){
    return new Promise((resolve)=>{setTimeout(()=>resolve(), 20)});
}