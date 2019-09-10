$(document).ready(function () {

	var isActiveBtn = false;

	window.onscroll = function () {
		myFunction()
	};

	var header = document.getElementById("header");
	var sticky = header.offsetTop;
	var modalAskQuestion = document.getElementById("modalAskQuestion");
	var btnAsk = document.getElementById("btnAsk");
	var span = document.getElementsByClassName("closeBut")[0];
	var aboutUsSection = $('#about_us');
	var ourServiceSection = $('#services');
	var parentsSection = $('#parents');

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
		if (!isActiveBtn) {
			if (window.pageYOffset > aboutUsSection.offset().top - 200 && window.pageYOffset < aboutUsSection.offset().top + aboutUsSection.height() + 200) {
				$('.nav-btn').each(function () {
					$(this).removeClass('active-nav-btn')
				});
				$('#about_us_btn').addClass('active-nav-btn');
				if(history.pushState) {
					history.pushState(null, null, '#about_us');
				}
				else {
					// location.hash = '#myhash';
				}
				return false;
			}

			if (window.pageYOffset > ourServiceSection.offset().top - 200 && window.pageYOffset < parentsSection.offset().top + parentsSection.height() + 200) {
				$('.nav-btn').each(function () {
					$(this).removeClass('active-nav-btn')
				});
				$('#services_btn').addClass('active-nav-btn');
				if(history.pushState) {
					history.pushState(null, null, '#services');
				}
				else {
					// location.hash = '#myhash';
				}
				return false;
			}
			$('.nav-btn').each(function () {
				$(this).removeClass('active-nav-btn')
			});
			if(history.pushState) {
				history.pushState(null, null, '#');
			}
			else {
				// location.hash = '#myhash';
			}
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
			isActiveBtn = true;
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
					isActiveBtn = false;
				})
			});
		} // End if

		$('.nav-btn').each(function () {
			$(this).removeClass('active-nav-btn')
		});
		$(this).addClass('active-nav-btn')
	});

	$('#scroll_to_top').click(function () {
		isActiveBtn = true;
		$('.nav-btn').each(function () {
			$(this).removeClass('active-nav-btn')
		});
		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 1100, function () {
			isActiveBtn = false;
		})
	});

	myFunction()
});