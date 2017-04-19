
var number = document.getElementById("number");

var characterType = document.getElementById("characterType");
var btn = document.getElementById("btn");
btn.addEventListener("click", treeBuild);

function treeBuild (event) {
	if (number.value === "" || characterType.value === "") {
		alert("You need to type something");
	}
for (var i = 1; i <= number.value; i++) {
	var treeHeight = number.value - i;
	var firstRow = characterType.value.repeat(i);
	var secondHalf = " ".repeat(treeHeight);
	var combo = secondHalf + firstRow + characterType.value.repeat(i-1);
	console.log(combo);
 }
}

number.addEventListener("keypress", function(e) {
	var key = e.keyCode;
	if (e.keyCode === 13) {
		treeBuild();
	}
});

characterType.addEventListener("keypress", function(e){
	var key = e.keyCode;
	if (e.keyCode === 13) {
		treeBuild();
	}
});

