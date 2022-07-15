function createEmotionLineChart(expressionsRecorded) {
    const angryValues = [];
    const happyValues = [];
    const sadValues = [];
    const surprisedValues = [];
    const neutralValues = [];
    const fearfulValues = [];

    const startDate = new Date().toDateString();

    let timeStampArr = Object.keys(expressionsRecorded);
    for (let i = 0; i < timeStampArr.length; i++) {
        angryValues.push(expressionsRecorded[timeStampArr[i]].angry);
        happyValues.push(expressionsRecorded[timeStampArr[i]].happy);
        sadValues.push(expressionsRecorded[timeStampArr[i]].sad);
        surprisedValues.push(expressionsRecorded[timeStampArr[i]].surprised);
        neutralValues.push(expressionsRecorded[timeStampArr[i]].neutral);
        fearfulValues.push(expressionsRecorded[timeStampArr[i]].fearful);
    }

    timeStampArr = timeStampArr.map(val => {
        let d = new Date(parseInt(val));
        return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    })

    const dataset = [];
    if (document.getElementById('happy').checked) {
        dataset.push({
            data: happyValues,
            label: "happy",
            borderColor: "#F8DE7E",
            fill: false
        })
    }
    if (document.getElementById('sad').checked) {
        dataset.push({
            data: sadValues,
            label: "sad",
            borderColor: "#3e95cd",
            fill: false
        })
    }
    if (document.getElementById('angry').checked) {
        dataset.push({
            data: angryValues,
            label: "angry",
            borderColor: "#C45850",
            fill: false
        })
    }
    if (document.getElementById('surprised').checked) {
        dataset.push({
            data: surprisedValues,
            label: "surprised",
            borderColor: "#3e95cd",
            fill: false
        })
    }
    if (document.getElementById('neutral').checked) {
        dataset.push({
            data: neutralValues,
            label: "neutral",
            borderColor: "#E8C3B9",
            fill: false
        })
    }
    if (document.getElementById('fearful').checked) {
        dataset.push({
            data: fearfulValues,
            label: "fearful",
            borderColor: "##8E5EA2",
            fill: false
        })
    }

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: timeStampArr,
            datasets: dataset
        },
        options: {
            title: {
                display: true,
                text: 'Meetotion Report: ' + startDate
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        beginAtZero: true,
                        max: 1
                    }
                }]
            }
        }
    });

}

function createEmotionPieChart(data) {
    //TODO:
}