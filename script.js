
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("div");
	var deleteButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li,deleteButton);
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("taskclass");
	deleteButton.classList.add("delclass");
	deleteButton.innerHTML = "del";
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function donetask(task){
	if(task.target.className==="taskclass"){
		task.target.classList.toggle("done");
	}
}
function deltask(task){
	if(task.target.className==="delclass"){
		task.target.parentElement.remove();
	}
}

function handleUlClick(ele){
	donetask(ele);
	deltask(ele);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",handleUlClick);