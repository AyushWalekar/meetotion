function createEmotionLineChart(expressionsRecorded) {
    //TOOD: add param for types of chart to display

    const angryValues = [];
    const happyValues = [];
    const sadValues = [];
    // const angryValues = [];
    // const angryValues = [];

    const startDate = new Date().toDateString();

    let timeStampArr = Object.keys(expressionsRecorded);
    for (let i = 0; i < timeStampArr.length; i++) {
        angryValues.push(expressionsRecorded[timeStampArr[i]].angry);
        happyValues.push(expressionsRecorded[timeStampArr[i]].happy);
        sadValues.push(expressionsRecorded[timeStampArr[i]].sad);
        //TODO: others
    }

<<<<<<< HEAD
    const avgHappy = 0;
    const avgSad = 0;
    const avgAngry = 0;

    for (let i = 0; i < timeStampArr.length; i++) {
        avgHappy += expressionsRecorded[timeStampArr[i]].happy;
        avgSad += expressionsRecorded[timeStampArr[i]].sad;
        avgAngry += expressionsRecorded[timeStampArr[i]].sad;
        //TODO: others
    }

=======
    timeStampArr = timeStampArr.map(val => {
        let d = new Date(parseInt(val));
        return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    })
>>>>>>> refs/remotes/origin/main

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: timeStampArr,
            datasets: [{
                data: happyValues,
                label: "happy",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: sadValues,
                label: "sad",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: angryValues,
                label: "angry",
                borderColor: "#3cba9f",
                fill: false
            },
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Meetotion Report: ' + startDate
            }
        }
    });




new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Happy","Sad","Angry"],
      datasets: [{
        data: [avgHappy,avgSad,avgAngry],
        label: "happy",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        
    }
    ]
    },
    options: {
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
});

}

function createEmotionPieChart(data) {
    //TODO:
}