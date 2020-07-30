$(function () {

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

    var modalChooseUni = document.getElementById("modalChooseUni");
    var modalSearching = document.getElementById("modalSearching");
    var modalUniList = document.getElementById("modalUniList");
    var modalOops = document.getElementById("modalOops");

    var modalOrderService = document.getElementById("modalOrderService");
    var modalOrderServiceSchool = document.getElementById("modalOrderServiceSchool");
    var modalOrderServiceHousing = document.getElementById("modalOrderServiceHousing");
    var modalOrderServiceVisa = document.getElementById("modalOrderServiceVisa");
    var modalOrderServiceTransfer = document.getElementById("modalOrderServiceTransfer");
    var modalOrderServiceTutor = document.getElementById("modalOrderServiceTutor");
    var modalOrderServiceParents = document.getElementById("modalOrderServiceParents");
    var modalOrderServiceUniContact = document.getElementById("modalOrderServiceUniContact");

    // Buttons
    var btnMenu = document.getElementById("btnMenu");
    var btnAsk = document.getElementById("btnAsk");
    var btnChooseSchool = document.getElementById("btnChooseSchool");
    var btnUniChoice = document.getElementById("btnUniChoice");
    var doYouHaveQuestions = $(".doYouHaveQuestions");
    var chooseUniOptionBtn = $(".choose-uni-option-btn");

    var btnOrderServiceSchool = document.getElementById("orderServiceSchool");
    var btnOrderServiceHousing = document.getElementById("orderServiceHousing");
    var btnOrderServiceVisa = document.getElementById("orderServiceVisa");
    var btnOrderServiceTransfer = document.getElementById("orderServiceTransfer");
    var btnOrderServiceTutor = document.getElementById("orderServiceTutor");
    var btnOrderServiceParents = document.getElementById("orderServiceParents");

    var btnSendAskQuestion = document.getElementById("btnSendAskQuestion");
    var searching = document.getElementById("searching");
    var btnCallMe = $(".btnCallMe");
    var matchesFound = document.getElementById("matchesFound");
    var uniHideNorth = $(".uniHideNorth");
    var uniHideSouth = $(".uniHideSouth");
    var uniHideScotland = $(".uniHideScotland");


    var btnSendOrderSchool = document.getElementById("btnSendOrderSchool");
    var btnSendOrderHousing = document.getElementById("btnSendOrderHousing");
    var btnSendOrderVisa = document.getElementById("btnSendOrderVisa");
    var btnSendOrderTransfer = document.getElementById("btnSendOrderTransfer");
    var btnSendOrderTutor = document.getElementById("btnSendOrderTutor");
    var btnSendOrderParents = document.getElementById("btnSendOrderParents");
    var btnSendOrderUniContact = document.getElementById("btnSendOrderUniContact");

    var btnSendOops = document.getElementById("btnSendOops");
    var region = document.getElementById('region');
    var allSelects = document.getElementsByClassName('allSelects');
    var universitySouthLabel = document.getElementById('universitySouthLabel');
    var universitySouthSelect = document.getElementById('universitySouthSelect');
    var universityNorthLabel = document.getElementById('universityNorthLabel');
    var universityNorthSelect = document.getElementById('universityNorthSelect');
    var universityScotlandLabel = document.getElementById('universityScotlandLabel');
    var universityScotlandSelect = document.getElementById('universityScotlandSelect');
    // Sections
    var aboutUsSection = $('#about_us');
    var ourServiceSection = $('#services');
    var parentsSection = $('#parents');

    var subjSchool = document.getElementById("subjSchool");
    subjSchool.value = "Заказ услуги Учебное заведение";
    var subjVisa = document.getElementById("subjVisa");
    subjVisa.value = "Заказ услуги Виза";
    var subjHousing = document.getElementById("subjHousing");
    subjHousing.value = "Заказ услуги Жилье";
    var subjTransfer = document.getElementById("subjTransfer");
    subjTransfer.value = "Заказ услуги Трансфер";
    var subjTutor = document.getElementById("subjTutor");
    subjTutor.value = "Заказ услуги Репетитор";
    var subjParents = document.getElementById("subjParents");
    subjParents.value = "Заказ услуги Родителям";
    var subjAsk = document.getElementById("subjAsk");
    subjAsk.value = "Вопрос";
    var subjUniContact = document.getElementById("subjUniContact");
    var subjOops = document.getElementById("subjOops");
    subjOops.value = "Совпадения не найдены";

    let selectedUni = "regionText";

    // hiding all university selects
    // for (var i = 0; i < allSelects.length; i++) allSelects[i].style.display = 'none';
    //
    region.onchange = function () {
        if (region.value === "south") {
            selectedUni = "south";
            console.log(selectedUni);
        }
        if (region.value === "north") {
            selectedUni = "north";
            console.log(selectedUni);

        }
        if (region.value === "scotland") {
            selectedUni = "scotland";
            console.log(selectedUni);

        }
        if (region.value === "regionText") {
            selectedUni = "regionText";
        }
    };

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        if (!isActiveBtn) {
            if (Math.ceil($(window).scrollTop() + $(window).height()) === $(document).height()) {
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

    btnAsk.onclick = function () {
        modalAskQuestion.style.display = "block";
    };

    btnMenu.onclick = function () {
        modalMenu.style.display = "block";
    };

    btnSendAskQuestion.onclick = function () {
        let name = document.getElementById("nameAsk");
        let phone = document.getElementById("phoneAsk");
        let email = document.getElementById("emailAsk");
        let question = document.getElementById("question");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjAsk.value,
            name: name.value,
            phone: phone.value,
            email: email.value,
            question: question.value
        }), () => {
            modalThanks.style.display = "block";
            modalAskQuestion.style.display = "none";
        });

    };

    // send university request
    btnSendOrderUniContact.onclick = function(){
        console.log("Hello");
        let name = document.getElementById("nameOrderUniContact");
        let phone = document.getElementById("phoneOrderUniContact");
        let email = document.getElementById("emailOrderUniContact");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjUniContact.value,
            name: name.value,
            phone: phone.value,
            email: email.value,
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceUniContact.style.display = "none";
        });

    };

    btnSendOrderSchool.onclick = function () {
        let name = document.getElementById("nameOrderSchool");
        let phone = document.getElementById("phoneOrderSchool");
        let email = document.getElementById("emailOrderSchool");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjSchool.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceSchool.style.display = "none";
        });
    };

    btnSendOrderHousing.onclick = function () {
        let name = document.getElementById("nameOrderHousing");
        let phone = document.getElementById("phoneOrderHousing");
        let email = document.getElementById("emailOrderHousing");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjHousing.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceHousing.style.display = "none";
        });
    };

    btnSendOrderVisa.onclick = function () {
        let name = document.getElementById("nameOrderVisa");
        let phone = document.getElementById("phoneOrderVisa");
        let email = document.getElementById("emailOrderVisa");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjVisa.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceVisa.style.display = "none";
        });
    };

    // btnSendOrderTransfer
    btnSendOrderTransfer.onclick = function () {
        let name = document.getElementById("nameOrderTransfer");
        let phone = document.getElementById("phoneOrderTransfer");
        let email = document.getElementById("emailOrderTransfer");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjTransfer.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceTransfer.style.display = "none";
        });
    };

    // btnSendOrderTutor
    btnSendOrderTutor.onclick = function () {
        let name = document.getElementById("nameOrderTutor");
        let phone = document.getElementById("phoneOrderTutor");
        let email = document.getElementById("emailOrderTutor");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjTutor.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceTutor.style.display = "none";
        });
    };

    // btnSendOrderParents
    btnSendOrderParents.onclick = function () {
        let name = document.getElementById("nameOrderParents");
        let phone = document.getElementById("phoneOrderParents");
        let email = document.getElementById("emailOrderParents");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjParents.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOrderServiceParents.style.display = "none";
        });
    };

    // Call me: tried to do
    let callRequestFormInput = $("#phoneInput")
    $(document).on('submit', '#callRequestForm', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        let phone = callRequestFormInput.val();

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: "Перезвонить мне",
            phone: phone,
        }), (_data) => {
            callRequestFormInput.val("");
        }).fail(function (error) {
            console.log(error)
        });

        return false;
    });


    btnSendOops.onclick = function () {
        let name = document.getElementById("nameOops");
        let phone = document.getElementById("phoneOops");
        let email = document.getElementById("emailOops");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjOops.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            modalThanks.style.display = "block";
            modalOops.style.display = "none";
        });
    };

    btnOrderServiceSchool.onclick = function () {
        modalOrderServiceSchool.style.display = "block";
    };
    btnOrderServiceHousing.onclick = function () {
        modalOrderServiceHousing.style.display = "block";
    };
    btnOrderServiceVisa.onclick = function () {
        modalOrderServiceVisa.style.display = "block";
    };
    btnOrderServiceTransfer.onclick = function () {
        modalOrderServiceTransfer.style.display = "block";
    };
    btnOrderServiceTutor.onclick = function () {
        modalOrderServiceTutor.style.display = "block";
    };
    btnOrderServiceParents.onclick = function () {
        modalOrderServiceParents.style.display = "block";
    };


    doYouHaveQuestions.each(function () {
        $(this).click(function () {
            modalOrderServiceHousing.style.display = "none";
            modalOrderServiceVisa.style.display = "none";
            modalOrderServiceTransfer.style.display = "none";
            modalOrderServiceTutor.style.display = "none";
            modalOrderServiceParents.style.display = "none";
            modalOrderServiceSchool.style.display = "none";
            modalOrderServiceUniContact.style.display = "none";

            modalAskQuestion.style.display = "block";
        });
    });

    chooseUniOptionBtn.each(function () {
        $(this).click(function () {
            modalOrderServiceUniContact.style.display = "block";
            subjUniContact.value = $(this).attr('id');
            console.log("subjUniContact" + subjUniContact.value);
            modalUniList.style.display = "none";
        });
    });

    btnChooseSchool.onclick = function () {
        modalChooseUni.style.display = "block";
    };

    btnUniChoice.onclick = function () {
        modalSearching.style.display = "block";
        modalChooseUni.style.display = "none";
        setTimeout(function () {
            if (selectedUni.localeCompare("regionText") === 0) {
                modalSearching.style.display = "none";
                modalOops.style.display = "block";
                console.log("text");
            } else {
                modalSearching.style.display = "none";
                modalUniList.style.display = "block";
                if (selectedUni.localeCompare("south") === 0) {
                    for (let el of document.querySelectorAll('.uniHideSouth')) el.style.display = 'flex';
                    for (let el of document.querySelectorAll('.uniHideNorth')) el.style.display = 'none';
                    for (let el of document.querySelectorAll('.uniHideScotland')) el.style.display = 'none';
                } else if (selectedUni.localeCompare("north") === 0) {
                    for (let el of document.querySelectorAll('.uniHideNorth')) el.style.display = 'flex';
                    for (let el of document.querySelectorAll('.uniHideSouth')) el.style.display = 'none';
                    for (let el of document.querySelectorAll('.uniHideScotland')) el.style.display = 'none';
                } else if (selectedUni.localeCompare("scotland") === 0) {
                    for (let el of document.querySelectorAll('.uniHideNorth')) el.style.display = 'none';
                    for (let el of document.querySelectorAll('.uniHideSouth')) el.style.display = 'none';
                    for (let el of document.querySelectorAll('.uniHideScotland')) el.style.display = 'flex';
                }
            }
        }, 3000);
    };


    // $(document).on(modalSearching.OPEN, function(event, modalSearching) {
    //
    //     // Use setTimeout to close the modal in 5 seconds (5000 milliseconds).
    //     setTimeout(function() {
    //         modalSearching.close();
    //     }, 5000);
    //
    // });

    // searching.onclick = function () {
    // 	modalUniList.style.display = "block";
    // 	modalSearching.style.display = "none";
    // };

    // matchesFound.onclick = function () {
    // 	modalOops.style.display = "block";
    // 	modalUniList.style.display = "none";
    // };

// When the user clicks on <span> (x), close the modalAskQuestion
    span.each(function () {
        $(this).click(function () {
            $(this).parent().parent().hide();
        });
    });

    btnCallMe.each(function () {
        $(this).click(function () {
            modalThanks.style.display = "block";
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
        if (event.target === modalOrderServiceSchool) {
            modalOrderServiceSchool.style.display = "none";
        }
        if (event.target === modalChooseUni) {
            modalChooseUni.style.display = "none";
        }
        if (event.target === modalSearching) {
            modalSearching.style.display = "none";
        }
        if (event.target === modalOops) {
            modalOops.style.display = "none";
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