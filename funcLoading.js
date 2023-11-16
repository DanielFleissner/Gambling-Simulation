function addLoadingText(){
    hideElements();
    const p = document.getElementById("outcome");
    p.innerHTML = "Loading...";
}

function hideElements(){
    const tabsContainer = document.getElementById("tabsContainer");
    tabsContainer.style.display = "none";
    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.style.display = "none";
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "none";
}

function unhideElements(){
    const tabsContainer = document.getElementById("tabsContainer");
    tabsContainer.style.display = "flex";
    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.style.display = "block";
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "block";
}

async function refreshDisplay(){
    return await new Promise((resolve)=>{setTimeout(()=>resolve(),0)});
}