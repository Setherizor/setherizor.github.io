TRELLO_API = "cda33ce6abce02250524b0a019e111a7";
TRELLO_TOKEN = "9030fe39125e16ef5cda171ac179edcc59c768c0b930cf76d369a4ea2797cd77";
BOARD_ID = "JwRH1hMD";
PROJECT_LIST_ID = "59722a00877dfde4b1feaa70";
PROJECT_CARDS = [];
PROJECT_URLS = [];
ID = 0;


function putOnPage(p) {
    var list = document.getElementById("TheList");
    for (var i = 0; i < p.length; i++) {
        var curr = p[i];
        var attach = '<div class="section dark">' +
            "<h3>" + curr.name + "</h3>" +
            "<p>" + curr.desc + "</p>" +
            "<p><a href='" + PROJECT_URLS[i] + "' rel='noopener'>" + PROJECT_URLS[i] + "</a>" + "<br>" +
            "Last Modified: " + curr.dateLastActivity.substring(0, 10) + "</p></div>";
        if (i != p.length - 1) attach += "<br>";
        list.innerHTML += attach;
    }
}

function loadJSONFile(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'projects.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            console.log(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var getEm = function () {
    loadJSONFile(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        var p = actual_JSON;
        console.log("projects got and bout sent")
        putOnPage(p);
    });
}
//getEm();


// NEW JUNk

function trelloJSON(callback) {
    var url = "https://api.trello.com/1/boards/" + BOARD_ID + "/cards?fields=name,url,idList,desc,dateLastActivity,?&key=" + TRELLO_API + "&token=" + TRELLO_TOKEN;

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            console.log(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var getAttachments = function (callback) {
    var cardId = PROJECT_CARDS[ID].id;
    var url = "https://api.trello.com/1/cards/" + cardId + "/attachments?&fields=url,&key=" + TRELLO_API + "&token=" + TRELLO_TOKEN;

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            //console.log(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var useThem = function () {
    for (var i = 0; i < PROJECT_CARDS.length; i++) {
        ID = i;
        getAttachments(function (response) {
            var actual_JSON = JSON.parse(response);

            PROJECT_URLS.push(actual_JSON[0].url);
                
            console.log(actual_JSON[0].url);

            if (PROJECT_URLS.length === PROJECT_CARDS.length) {
                putOnPage(PROJECT_CARDS);
            }
        });
    }
}
var getThem = function () {
    trelloJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        var p = actual_JSON;
        console.log(p);
        PROJECT_CARDS = p;
        useThem();
    });
}
getThem();