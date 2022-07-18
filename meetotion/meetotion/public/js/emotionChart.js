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
            },
            animation: {
                duration: 0
            }
        }
    });
}

function createEmotionPieChart(expressionsRecorded) {
    var angryValues = 0;
    var happyValues = 0;
    var sadValues = 0;
    var neutalValues = 0;
    var surprisedValues = 0;
    var fearfulValues = 0;
    let timeStampArr = Object.keys(expressionsRecorded);
    for (let i = 0; i < timeStampArr.length; i++) {
        if (expressionsRecorded[timeStampArr[i]].angry !== NaN) {
            angryValues += expressionsRecorded[timeStampArr[i]].angry;
        }
        if (expressionsRecorded[timeStampArr[i]].happy !== NaN) {
            happyValues += expressionsRecorded[timeStampArr[i]].happy;
        }
        if (expressionsRecorded[timeStampArr[i]].sad !== NaN) {
            sadValues += expressionsRecorded[timeStampArr[i]].sad;
        }
        if (expressionsRecorded[timeStampArr[i]].neutal !== NaN) {
            neutalValues += expressionsRecorded[timeStampArr[i]].neutal;
        }
        if (expressionsRecorded[timeStampArr[i]].surprised !== NaN) {
            surprisedValues += expressionsRecorded[timeStampArr[i]].surprised;
        }
        if (expressionsRecorded[timeStampArr[i]].fearful !== NaN) {
            fearfulValues += expressionsRecorded[timeStampArr[i]].fearful;
        }
    }
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
            labels: ["Angry", "Happy", "Sad", "Neutral", "Surprised", "Fearful"],
            datasets: [{
                label: "Summary",
                backgroundColor: ["#C45850", "#F8DE7E", "#3e95cd", "#E8C3B9", "#3e95cd", "##8E5EA2"],
                data: [angryValues, happyValues, sadValues, neutalValues, fearfulValues]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Summary of the Meet'
            }
        }
    });
}