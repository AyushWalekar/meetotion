console.log("Foooo");

let toggleBtn = document.getElementById("start-btn");
let generateResult = document.getElementById("generate-result-btn");


function handleInitStatus(response) {
    if (response.data.initiated) {
        toggleBtn.innerHTML = "STOP";
        toggleBtn.style.color = "red";
    }
}

// chrome.runtime.sendMessage({ msg: "SEND_SERVER_URL" }, handleCurrentServerUrl);
// // chrome.runtime.sendMessage({msg: "SEND_DISABLED_SOURCES"}, handleDisabledSources);
// chrome.runtime.sendMessage({ msg: "SEND_INIT_STATUS" }, handleInitStatus);


generateResult.addEventListener('click', () => {
    //TODO: generate emotion report
    // let lstName = document.querySelector('input[name="src-list"]:checked').value;
    // let lstValue = updateSourceListField.value;
    // delete localStorage['whitelist'];
    // delete localStorage['blacklist'];
    // if (lstValue !== null && lstName !== null) {
    //     let sources = lstValue.split(',');
    //     for (let i in sources) {
    //         sources[i] = sources[i].trim();
    //     }
    //     var uniqueSources = sources.filter((value, index, self) => {
    //         return self.indexOf(value) === index && value !== "";
    //     });
    //     localStorage[lstName] = uniqueSources.join(',');
    //     console.log("Value stored in localStorage are -> " + lstName + ": " + JSON.stringify(lstValue));
    //     showMsg("List stored successfully !!", false);
    // } else {
    //     showMsg("Error while storing list !!", true);
    // }
});

toggleBtn.addEventListener('click', () => {
    console.log('click toggleBtn');
    if (toggleBtn.innerHTML === "START") {
        chrome.runtime.sendMessage({ msg: "START" }, () => {
            toggleBtn.innerHTML = "STOP"
            toggleBtn.style.color = "red";
        });
    } else if (toggleBtn.innerHTML === "STOP") {
        chrome.runtime.sendMessage({ msg: "STOP" }, () => {
            toggleBtn.innerHTML = "START"
            toggleBtn.style.color = "green";
        });
    }
});


var localStore = (function () {
    var setData = function (key, obj) {
        var values = JSON.stringify(obj);
        localStorage.setItem(key, values);
    }
    var getData = function (key) {
        if (localStorage.getItem(key) != null) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return false;
        }
    }
    var updateDate = function (key, newData) {
        if (localStorage.getItem(key) != null) {
            var oldData = JSON.parse(localStorage.getItem(key));
            for (keyObj in newData) {
                oldData[keyObj] = newData[keyObj];
            }
            var values = JSON.stringify(oldData);
            localStorage.setItem(key, values);
        } else {
            return false;
        }
    }
    return { set: setData, get: getData, update: updateDate }
})();