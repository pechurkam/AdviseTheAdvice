window.onscroll = function () {
	myFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var modalAskQuestion = document.getElementById("modalAskQuestion");
var btnAsk = document.getElementById("btnAsk");
var span = document.getElementsByClassName("closeBut")[0];

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

// When the user clicks the button, open the modalAskQuestion
btnAsk.onclick = function() {
    modalAskQuestion.style.display = "block";
}

// When the user clicks on <span> (x), close the modalAskQuestion
span.onclick = function() {
    modalAskQuestion.style.display = "none";
}

// When the user clicks anywhere outside of the modalAskQuestion, close it
window.onclick = function(event) {
    if (event.target == modalAskQuestion) {
        modalAskQuestion.style.display = "none";
    }
}
