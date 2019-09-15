$(document).ready(function () {

	var isActiveBtn = false;

	window.onscroll = function () {
		myFunction()
	};

	var header = document.getElementById("header");
	var sticky = header.offsetTop;
    var span = $(".closeBut");
    // Modals
	var modalAskQuestion = document.getElementById("modalAskQuestion");
	var modalMenu = document.getElementById("modalMenu");
    var modalThanks = document.getElementById("modalThanks");
    var modalOrderService = document.getElementById("modalOrderService");
    var modalChooseUni = document.getElementById("modalChooseUni");
    var modalSearching = document.getElementById("modalSearching");
    // Buttons
	var btnMenu = document.getElementById("btnMenu");
	var btnAsk = document.getElementById("btnAsk");
    var btnChooseSchool = document.getElementById("btnChooseSchool");
    var btnUniChoice = document.getElementById("btnUniChoice");
    var doYouHaveQuestions = document.getElementById("doYouHaveQuestions");
    var btnOrderService = $(".orderService")
    var btnSend = document.getElementById("btnSend");
    // Sections
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
			if(Math.ceil($(window).scrollTop() + $(window).height()) === $(document).height()) {
				$('.nav-btn').each(function () {
					$(this).removeClass('active-nav-btn')
				});
				$('#contacts_btn').addClass('active-nav-btn');
				if (window.location.hash !== '#contacts') {
					if (history.pushState) {
						history.pushState(null, null, '#contacts');
					} else {
						// location.hash = '#myhash';
					}
				}
				return false;
			}

			if (window.pageYOffset > aboutUsSection.offset().top - 200 && window.pageYOffset < aboutUsSection.offset().top + aboutUsSection.height() + 200) {
				$('.nav-btn').each(function () {
					$(this).removeClass('active-nav-btn')
				});
				$('#about_us_btn').addClass('active-nav-btn');
				if (window.location.hash !== '#about_us') {
					if (history.pushState) {
						history.pushState(null, null, '#about_us');
					} else {
						// location.hash = '#myhash';
					}
				}
				return false;
			}

			if (window.pageYOffset > ourServiceSection.offset().top - 200 && window.pageYOffset < parentsSection.offset().top + parentsSection.height() + 200) {
				$('.nav-btn').each(function () {
					$(this).removeClass('active-nav-btn')
				});
				$('#services_btn').addClass('active-nav-btn');
				if (window.location.hash !== '#services') {
					if (history.pushState) {
						history.pushState(null, null, '#services');
					} else {
						// location.hash = '#myhash';
					}
				}
				return false;
			}
			$('.nav-btn').each(function () {
				$(this).removeClass('active-nav-btn')
			});
			if (window.location.hash !== '#') {
				if (history.pushState) {
					history.pushState(null, null, '#');
				} else {
					// location.hash = '#myhash';
				}
			}
		}
	}

	// When the user clicks the button, open the modalAskQuestion
	btnAsk.onclick = function () {
		modalAskQuestion.style.display = "block";
	};

	btnMenu.onclick = function() {
		modalMenu.style.display = "block";
	};

    btnSend.onclick = function() {
        modalThanks.style.display = "block";
        modalAskQuestion.style.display = "none";
    };

    btnOrderService.each(function () {
        $(this).click(function () {
            modalOrderService.style.display = "block";
        });
    });

    doYouHaveQuestions.onclick = function() {
        modalOrderService.style.display = "none";
        modalAskQuestion.style.display = "block";
    };

    btnChooseSchool.onclick = function() {
        modalChooseUni.style.display = "block";
    };

    btnUniChoice.onclick = function() {
        modalSearching.style.display = "block";
        modalChooseUni.style.display = "none";
    };



// When the user clicks on <span> (x), close the modalAskQuestion
	span.each(function () {
		$(this).click(function () {
			$(this).parent().parent().hide();
		});
	});

// When the user clicks anywhere outside of the modalAskQuestion, close it
	window.onclick = function (event) {
		if (event.target === modalAskQuestion) {
			modalAskQuestion.style.display = "none";
		}
		if (event.target === modalMenu) {
			modalMenu.style.display = "none";
		}
		if (event.target === modalThanks) {
            modalThanks.style.display = "none";
		}
        if (event.target === modalOrderService) {
            modalOrderService.style.display = "none";
        }
        if (event.target === modalChooseUni) {
            modalChooseUni.style.display = "none";
        }
        if (event.target === modalSearching) {
            modalSearching.style.display = "none";
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
			if (this.classList.contains("menu-btn")) {
				$("#closeMenu").click();
			}
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

	$("#btnMenuAsk").click(function () {
		$("#closeMenu").click();
		$("#btnAsk").click();
	});

	myFunction()
});