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

    // Buttons
    var btnMenu = document.getElementById("btnMenu");
    var btnAsk = document.getElementById("btnAsk");
    var btnChooseSchool = document.getElementById("btnChooseSchool");
    var btnUniChoice = document.getElementById("btnUniChoice");
    var doYouHaveQuestions = $(".doYouHaveQuestions");

    var btnOrderServiceSchool = document.getElementById("orderServiceSchool");
    var btnOrderServiceHousing = document.getElementById("orderServiceHousing");
    var btnOrderServiceVisa = document.getElementById("orderServiceVisa");
    var btnOrderServiceTransfer = document.getElementById("orderServiceTransfer");
    var btnOrderServiceTutor = document.getElementById("orderServiceTutor");
    var btnOrderServiceParents = document.getElementById("orderServiceParents");
    var btnCallMeDesktop = document.getElementById("btnCallMeDesktop");
    var btnCallMeMobile = document.getElementById("btnCallMeMobile");

    var btnSendAskQuestion = document.getElementById("btnSendAskQuestion");
    var searching = document.getElementById("searching");
    var btnCallMe = $(".btnCallMe");
    var matchesFound = document.getElementById("matchesFound");

    var btnSendOrderSchool = document.getElementById("btnSendOrderSchool");
    var btnSendOrderHousing = document.getElementById("btnSendOrderHousing");
    var btnSendOrderVisa = document.getElementById("btnSendOrderVisa");
    var btnSendOrderTransfer = document.getElementById("btnSendOrderTransfer");
    var btnSendOrderTutor = document.getElementById("btnSendOrderTutor");
    var btnSendOrderParents = document.getElementById("btnSendOrderParents");

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

    // hiding all university selects
    for (var i = 0; i < allSelects.length; i++) allSelects[i].style.display = 'none';

    region.onchange = function () {
        if (region.value === "south") {
            for (var i2 = 0; i2 < allSelects.length; i2++) allSelects[i2].style.display = 'none';
            universitySouthLabel.style.display = "block";
            universitySouthSelect.style.display = "block";
        }
        if (region.value === "north") {
            for (var i3 = 0; i3 < allSelects.length; i3++) allSelects[i3].style.display = 'none';
            universityNorthLabel.style.display = "block";
            universityNorthSelect.style.display = "block";
        }
        if (region.value === "scotland") {
            for (var i4 = 0; i4 < allSelects.length; i4++) allSelects[i4].style.display = 'none';
            universityScotlandLabel.style.display = "block";
            universityScotlandSelect.style.display = "block";
        }
        if (region.value === "regionText") {
            for (var i = 0; i < allSelects.length; i++) allSelects[i].style.display = 'none';
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
        modalThanks.style.display = "block";
        modalAskQuestion.style.display = "none";
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
            alert("Спасибо, что выбрали нас!");
            $("#ServiceSchoolForm").find("input[type=text], textarea").val("");
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
            alert("Спасибо, что выбрали нас!");
            $("#ServiceHousingForm").find("input[type=text], textarea").val("");
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
            alert("Спасибо, что выбрали нас!");
            $("#ServiceVisaForm").find("input[type=text], textarea").val("");
        });
    };

    // btnSendOrderTransfer
    btnSendOrderTransfer.onclick = function (){
        let name = document.getElementById("nameOrderTransfer");
        let phone = document.getElementById("phoneOrderTransfer");
        let email = document.getElementById("emailOrderTransfer");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjTransfer.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            alert("Спасибо, что выбрали нас!");
            $("#ServiceTransferForm").find("input[type=text], textarea").val("");
        });
    };

    // btnSendOrderTutor
    btnSendOrderTutor.onclick = function (){
        let name = document.getElementById("nameOrderTutor");
        let phone = document.getElementById("phoneOrderTutor");
        let email = document.getElementById("emailOrderTutor");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjTutor.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            alert("Спасибо, что выбрали нас!");
            $("#ServiceTutorForm").find("input[type=text], textarea").val("");
        });
    };

    // btnSendOrderParents
    btnSendOrderParents.onclick = function (){
        let name = document.getElementById("nameOrderParents");
        let phone = document.getElementById("phoneOrderParents");
        let email = document.getElementById("emailOrderParents");

        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            subject: subjParents.value,
            name: name.value,
            phone: phone.value,
            email: email.value
        }), () => {
            alert("Спасибо, что выбрали нас!");
            $("#ServiceParentsForm").find("input[type=text], textarea").val("");
        });
    };

    // Call me: tried to do
    btnCallMeDesktop.onclick = function(){
        let phone = document.getElementById("phoneInput");
        console.log(phone);
        $.post("https://dev.laurus.agency/advice/formRequest", JSON.stringify({
            phone: phone.value,
        }), () => {
            alert("Спасибо, что выбрали нас!");
        });
    };

    // Mobile TODO

    btnSendOops.onclick = function () {
        modalThanks.style.display = "block";
        modalOops.style.display = "none";
    };

    btnOrderServiceSchool.onclick = function(){
        modalOrderServiceSchool.style.display = "block";
    };
    btnOrderServiceHousing.onclick = function(){
        modalOrderServiceHousing.style.display = "block";
    };
    btnOrderServiceVisa.onclick = function(){
        modalOrderServiceVisa.style.display = "block";
    };
    btnOrderServiceTransfer.onclick = function(){
        modalOrderServiceTransfer.style.display = "block";
    };
    btnOrderServiceTutor.onclick = function(){
        modalOrderServiceTutor.style.display = "block";
    };
    btnOrderServiceParents.onclick = function(){
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
            modalAskQuestion.style.display = "block";
        });
    });

    btnChooseSchool.onclick = function () {
        modalChooseUni.style.display = "block";
    };

    btnUniChoice.onclick = function () {
        modalSearching.style.display = "block";
        modalChooseUni.style.display = "none";
    };
    searching.onclick = function () {
        modalUniList.style.display = "block";
        modalSearching.style.display = "none";
    };

    matchesFound.onclick = function () {
        modalOops.style.display = "block";
        modalUniList.style.display = "none";
    };

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