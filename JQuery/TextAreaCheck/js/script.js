var message = $("textarea");
var nbWords = $("span#nbWords");
var nbChars = $("span#nbChars");

message.keyup(function (e) {
    if (message[0].value.length > 200) {
        e.target.value = e.target.value.slice(0, 200);
        message.css("background-color", "#F44");
    } else {
        message.css("background-color", "white");
    }
    nbChars[0].innerHTML = message[0].value.length ;
    
    var tabSplit
    tabSplit = message[0].value.split(" ");
    tabSplit = tabSplit.filter(function (elem) {
        return (elem !== "");
    });
    nbWords[0].innerHTML = tabSplit.length;
})