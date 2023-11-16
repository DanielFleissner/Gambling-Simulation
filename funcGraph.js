//create empty 100 element array
const percentiles = 98;// number of tables
const xValues = new Array(percentiles);
for (let index = 0; index < percentiles; index++) {
    xValues[index] = index+1;
}

function createChart(){
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.replaceChildren();
    new Chart("chartContainer", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: arrayOfMedians
        }]
    },
    options: {
        legend: {display: false},
    }
    });
}