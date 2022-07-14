var DEV_MODE = false;

var meetotionInit = function () {
  //TODO: capture screen and log emotion
};

var initInterval = null;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const xmlhttp = new XMLHttpRequest();
    console.log("message recieved " + request.msg);
    switch (request.msg) {

      case "START":
        console.log("Starting meetotion")
        initInterval = setInterval(meetotionInit, GAP_BETWEEN_HITS);
        break;

      case "STOP":
        console.log("Stopping meetotion");
        clearInterval(initInterval);
        initInterval = null;
        break;

      default:
        console.log(" Invalid request !!!");
    }
  }
);


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("Tab Updated!!!");
});
