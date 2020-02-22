let inputBar = document.getElementById("inputBar");
let enter = document.getElementById("enter");
let answer = document.getElementById("searchQuery");
let kanjiDef = '';

function test() {
	console.log("TEST TEST");
}
const test1 = () => console.log("TEST1");

const createAnswer = () => {
	getKanji(inputBar.value);
	inputBar.value = "";
}


async function getKanji(search) {
	try {
		let searching = `https://kanjiapi.dev/v1/${search}`;
		let response = await fetch(searching);
		kanjiDef = await response.json();
		console.log(kanjiDef);
	} catch (err) {
		kanjiDef = false;
		console.log(err,"Doesnt exist");
	}

	if(kanjiDef){
		let newAnswer = document.createElement("p");
		newAnswer.innerHTML = JSON.stringify(kanjiDef);
		answer.appendChild(newAnswer);
		return true;
	}
	else{
		alert("Input not correct");
		return false;
	}
}

enter.addEventListener("click", createAnswer);
//inputBar.addEventListener("keypress", createAnswer);
// fetch("https://kanjiapi.dev/v1/kanji/grade-1")
// 	.then(response => response.json())
// 	.then(kanjiList => console.log(kanjiList));




// function createListElement (){
// 		// console.log(input.value);
// 		var newListElement = document.createElement("li");
// 		newListElement.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(newListElement);
// 		addButton(li.length-1);
// 		input.value = "";
// }
