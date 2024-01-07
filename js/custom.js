// navigation  menu js
function openNav() {
    $("#myNav").addClass("menu_width");
    $(".menu_btn-style").fadeIn();
}

function closeNav() {
    $("#myNav").removeClass("menu_width");
    $(".menu_btn-style").fadeOut();
}


// get current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
displayYear();


// owl carousel slider js
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

/*============작성한 코드============================*/
function showSubItems(itemId) {
    // 모든 하위 항목 숨기기
    var subItems = document.getElementsByClassName('sub-items');
    for (var i = 0; i < subItems.length; i++) {
        subItems[i].style.display = 'none';
    }
    
    // 선택한 항목의 하위 항목 보여주기
    var selectedSubItems = document.getElementById(itemId);
    selectedSubItems.style.display = 'block';
}


