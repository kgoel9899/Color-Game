alert("This is a Colour Guessing Game, the game is over after you have guessed the right colour based on the given rgb value.")
var num = 6;
var modeButtons = document.querySelectorAll(".mode");
var squares = document.getElementsByClassName("square");
var rg = document.getElementsByClassName("colour");
var rese = document.getElementsByClassName("reset");
var message = document.getElementById("text");
var header = document.getElementsByClassName("header");
var arr = generate(num);
var picked = picke();
for(var i=0;i<2;i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "EASY") {
			num = 3;
		}
		else{
			num = 6;
		}
		reset();
	}
);
}
function reset() {
	arr = generate(num);
	picked = picke();
	rg[0].textContent = picked;
	header[0].style.backgroundColor = "steelblue";
	message.textContent = "";
	for(var i=0;i<num;i++) {
		squares[i].style.backgroundColor = arr[i];
	}
	if(num === 3) {
		squares[3].style.display = "none";
		squares[4].style.display = "none";
		squares[5].style.display = "none";
	}
	else{
		squares[3].style.display = "block";
		squares[4].style.display = "block";
		squares[5].style.display = "block";
	}
	rese[0].textContent = "NEW COLOURS";
}
rese[0].addEventListener("click", function() {
	reset();
});
for(var y =0;y<squares.length;y++) {
	rg[0].textContent = picked;
	squares[y].style.backgroundColor = arr[y];
	squares[y].addEventListener("click", function() {
		if (this.style.backgroundColor === picked) {
			message.textContent = "Correct";
			rese[0].textContent = "PLAY AGAIN?";
			for(var j=0;j<num;j++) {
				squares[j].style.backgroundColor = picked;
			}
			header[0].style.backgroundColor = picked;
		}
		else{
			message.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	})
}
function picke() {
	return arr[Math.floor(Math.random() * arr.length)];
}
function generate(num) {
	var arr = [];
	for(var i=0;i<num;i++) {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		arr.push("rgb(" + r + ", " + g +", " + b + ")");
	}
	return arr;
}