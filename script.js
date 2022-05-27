var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function getInputLength() {
    return input.value.length > 0;
}

function createElement() {
    var div = document.createElement("div");
    var delButton = document.createElement("button");
    var doneButton = document.createElement("button");
    var time = new Date();
    var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    div.classList.add("wrapper");
    delButton.classList.add("delClass");
    doneButton.classList.add("doneClass");
    doneButton.innerHTML = ("done");
    delButton.innerHTML = ("delete");
    var li = document.createElement("li");
    div.append(li, delButton, doneButton, timeNow);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(div);
    input.value = "";
}

function delElement(element) {
    if (element.target.className == "delClass") {
        element.target.parentElement.remove();
    }
}

function doneElement(element) {
    if (element.target.className == "doneClass") {
        element.target.parentElement.classList.add("done");
    }
}

function handlerUI(element) {
    delElement(element);
    doneElement(element);

}

function buttonEvent() {
    if (getInputLength()) {
        createElement();
    }
}

function inputEvent(event) {
    if (getInputLength() && event.keyCode == 13) {
        createElement();
    }
}
ul.addEventListener("click", handlerUI);
button.addEventListener("click", buttonEvent);

input.addEventListener("keypress", inputEvent);