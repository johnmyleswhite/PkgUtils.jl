function getData(queryString) {
    var searchTerms = queryString.split(" ");
    var baseURL = "http://localhost:8000/search/?query="
    var URL = baseURL + searchTerms.join("+");
    return jQuery.ajax(URL);
}

function renderResults(responseText) {
    var results = JSON.parse(responseText);
    var table = document.getElementById("search");
    while (table.hasChildNodes())
    {
        table.removeChild(table.firstChild);
    }
    var i = 0;
    var len = results.length;
    for (; i < len; i++) {
        var tr = table.insertRow();
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(results[i]));
    }
    return;
}

function getSearchResults() {
    var inputBox = document.getElementById("query");
    var queryString = inputBox.value;
    var response = getData(queryString);
    response.done(function (msg) {
        renderResults(msg);
    });
    return;
}
