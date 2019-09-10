$(document).ready(function () {

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
	btnAsk.onclick = function () {
		modalAskQuestion.style.display = "block";
	};

// When the user clicks on <span> (x), close the modalAskQuestion
	span.onclick = function () {
		modalAskQuestion.style.display = "none";
	};

// When the user clicks anywhere outside of the modalAskQuestion, close it
	window.onclick = function (event) {
		if (event.target === modalAskQuestion) {
			modalAskQuestion.style.display = "none";
		}
	};

	// Add smooth scrolling to all links
	$('a').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			event.stopImmediatePropagation();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 170
			}, 1100, function () {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 170
				}, 0, function () {

				})
			});
		} // End if
	});

	myFunction()
});