//create empty 100 element array
const percentiles = 99;// number of tables
const xValues = new Array(percentiles);
for (let index = 0; index < percentiles; index++) {
    xValues[index] = index + 1;
} 

function createChart(){
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.replaceChildren(); //remove existing chart from chart container if there is one.
    
    const canvas = document.createElement("canvas");
    canvas.id = "chartCanvas";
    

    chartContainer.appendChild(canvas);
    new Chart("chartCanvas", {
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
            responsive: true,  
            maintainAspectRatio: true,
            aspectRatio: 2.7,
            plugins: {
                title: {
                    display: true,
                    text: 'Median money at step 100 at each percentile'
                },
                legend: {
                  display: false
                }
            },
            scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Dollars'
                  }
                },
                x: {
                  title: {
                    display: true,
                    text: 'Percentiles',
                  ticks:{
                    autoSkip: false,
                    maxRotation: 1,
                    minRotation: 1
                  }
                  }
                }
              }
        }



    });
}