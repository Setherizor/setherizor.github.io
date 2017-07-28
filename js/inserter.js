var doRequest = function (callback) {
    var url = "./data.json";

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            // console.log(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var handleAttributes = function (obj, el) {
    if (obj.type == "html") {
        el.innerHTML = obj.body;
    } else {
        el.innerText = obj;
        return;
    }

    if (obj.color != undefined) {
        el.style.backgroundColor = obj.color;
    }
}
var replace = function (data) {
    var length = Object.keys(data).length;
    for (var i = 0; i < length; i++) {
        var currName = Object.keys(data)[i];
        var elements = document.getElementsByName(currName);
        if (elements[0] != undefined) {
            for (var j = 0; j < elements.length; j++) {
                handleAttributes(data[currName], elements[j])
            }
        }
    }
}
var getThem = function () {
    doRequest(function (response) {
        var actual_JSON = JSON.parse(response);
        //console.log(actual_JSON);
        replace(actual_JSON);
    });
}
getThem();