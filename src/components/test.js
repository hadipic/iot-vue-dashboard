//how to convert this jquery code to vuejs code?        
var visibleFlag = 1;
var statusMsg = false;
var connected = false;
var doingsave = false;
var _from = 1;
var _to = 2;
var state = {};
createButtons(1, 2);
function createButtons(from, to) {
    _from = from;
    _to = to;
    var div = document.getElementById("divButtons");
    var html = "";


    // <button id="relay1" style="float:right">OFF</button>
    // <div style="font-size:20px" id="relay1name">Relay1</div>
    // <br/>
    for (var i = 0; i <= to - from; i++) {
        var relayName = "relay" + (i + from);
        html += '<button id="' + relayName + '" class="relay"  onclick="relayClick(this, \'' + relayName + '\');">OFF</button>';
        html += '<div style="font-size:20px; text-align:right" id="' + relayName + 'name">' + relayName + '</div> ';
        state[relayName] = 0;
        state[relayName + "name"] = "Relay " + (i + from);
    }


    div.innerHTML = html;
    server_get();
    update();
    setInterval(server_get, 5000);
    checkVisibility();
}

function update() {
    for (var i = 0; i <= _to - _from; i++) {
        var relayName = "relay" + (i + _from) + "name";
        var relayId = "relay" + (i + _from);
        //if (i==0) alert(relayName+":"+state[relayName]);
        $("#" + relayName).html(state[relayName]);

        if (state[relayId] == 1) {
            $("#" + relayId).html("روشن");
            $("#" + relayId).css("background-color", "#ff9600");
        } else {
            $("#" + relayId).html("خاموش");
            $("#" + relayId).css("background-color", "#555");
        }
    }
}

function relayClick(relay, statusField) {
    //state[statusField]=1-state[statusField];


    if (state[statusField] == 1) {
        state[statusField] = 0;
        $(relay).html("روشن");
        $(relay).css("background-color", "#ff9600");
    }
    else {
        state[statusField] = 1;
        $(relay).html("خاموش");
        $(relay).css("background-color", "#555");
    }

    save(statusField, state[statusField]);
}

// function for checking if the page is visible or not
// (if not visible it will stop updating data)
function checkVisibility() {
    $(window).bind("focus", function (event) {
        visibleFlag = 1;
    });

    $(window).bind("blur", function (event) {
        visibleFlag = 0;
    });
}

function setStatus(msg, dur, pri) {	 // show msg on status bar
    if (statusMsg == true) { return };
    statusMsg = true;
    if (pri > 0) {
        $("#statusView").toggleClass("statusViewAlert", true);
        $("#statusView").toggleClass("statusView", false);
    } else {
        $("#statusView").toggleClass("statusView", true);
        $("#statusView").toggleClass("statusViewAlert", false);
    }
    $("#statusView").show();
    $("#statusView").html(msg);
    dur = dur * 1000;
    if (dur > 0) {
        setTimeout(function () { $("#statusView").hide(200); $("#statusView").html(""); statusMsg = false }, dur)
    }
}

function save(param, payload) {
    doingsave = true;
    $.ajax({
        type: 'GET',
        url: "/api/relay?" + param + "=" + payload,
        async: true,
        timeout: 3000,
        tryCount: 0,
        retryLimit: 3,
        success: function (data) {
            statusMsg = false;
            if (!connected) setStatus("Connected", 2, 0);
            connected = true;
            doingsave = false;
        },
        error: function (xhr, textStatus, errorThrown) {
            if (textStatus == 'timeout') {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    $.ajax(this);
                    return;
                }
                return;
            }
            if (connected) setStatus("No connection to server!", 0, 1);
            connected = false;
            doingsave = false;
        }
    });
}

function server_get() {
    var output = {};
    checkVisibility();
    if (visibleFlag) {
        $.ajax({
            url: "/api/relay",
            dataType: 'json',
            async: true,
            timeout: 3000,
            tryCount: 0,
            retryLimit: 3,
            success: function (data) {

                if (data.length !== 0) {
                    statusMsg = false;
                    if (!connected)
                        setStatus("Connected", 2, 0);
                    connected = true;
                    if (!doingsave) {
                        state = data;
                        update();

                    }
                }
            },
            error: function (xhr, textStatus, errorThrown) {

                if (textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);

                        return;
                    }
                    return;
                }
                if (connected) setStatus("No connection to server!", 0, 1);
                connected = false;
            }
        });
    }
    return;
}


$(document).ready(function () {
    server_get();
    update();
    setInterval(server_get, 1000);
    checkVisibility();
});
