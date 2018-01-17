/*Scripts for section header*/
var navigation = $("#nav");
var navigationItem = $(navigation.find("li"));

navigationItem.click(function(){
    var activeItem = navigation.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});

navigation.localScroll({duration:800});

$(window).scroll(function(){
    if ($(this).scrollTop()>300) {
        $(".scrolltop-button").fadeIn();
    } else $(".scrolltop-button").fadeOut();
});

/*Scripts for section projects*/
var navigationProjects = $("#projectsTabs");
var navigationProjectsItem = $(navigationProjects.find("li"));

navigationProjectsItem.click(function(){
    var activeItem = navigationProjects.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});

$(".scrolltop-button").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

/*Scripts for section team*/
var carouselList = $("#carousel2 ul");
var carouselIndicators = $("#carousel2-indicators ol");
var carouselIndicatorsItem = carouselIndicators.find("li");

var interval = setInterval(moveCarousel, 3000);

const mq = window.matchMedia( "(min-width: 1201px)" );
const mq2 = window.matchMedia( "(min-width: 992px) and (max-width: 1200px)" );
const mq3 = window.matchMedia( "(min-width: 768px) and (max-width: 991px)" );
const mq4 = window.matchMedia( "(max-width: 767px)" );

//Funkcja wykrywająca początkowy rozmiar okna i ukrywająca odpowiednie kółka
if (mq2.matches || mq3.matches) {
    carouselIndicators.find("li#4").removeClass('display');
}
if (mq4.matches) {
    carouselIndicators.find("li#4, li#5, li#6, li#7, li#8, li#9").removeClass('display');
}

//Funkcja ukrywająca i pokazująca kółka przy zmianie rozmiaru okna
$(window).resize(function() {
    if (mq2.matches || mq3.matches) {
        carouselIndicators.find("li#5, li#6, li#7, li#8, li#9").addClass('display');
        carouselIndicators.find("li#4").removeClass('display');
    }
    else if (mq.matches) {
        carouselIndicators.find("li#4, li#5, li#6, li#7, li#8, li#9").addClass('display');
    }
    else if (mq4.matches) {
        carouselIndicators.find("li#5, li#6, li#7, li#8, li#9").removeClass('display');
    }
});

//Funkcja zerująca interval 
function newInterval(){
    clearInterval(interval);
    interval = setInterval(moveCarousel, 3000);
}
//Funcja zmieniająca slajd i kółka
function changeSlide(target){
    carouselIndicatorsItem.removeClass("active").eq(target).addClass("active");
    var windowWidthMatch = true;

    switch (windowWidthMatch) {
        case mq.matches : carouselList.animate({"marginLeft":-1125 * target}, 1125); break;
        case mq2.matches : carouselList.animate({"marginLeft":-750 * target}, 750); break;
        case mq3.matches : carouselList.animate({"marginLeft":-590 * target}, 590); break;
        default : carouselList.animate({"marginLeft":-295 * target}, 295);
    }   
}
//Funkcja przesuwająca karuzelę do przodu
function moveCarousel(){
    var activeIndicator = carouselIndicators.find("li.active");
    var hiddenIndicator = carouselIndicators.find("li.display");
    var hiddenIndicatorIndex = carouselIndicatorsItem.index(hiddenIndicator);
    var nextIndicator = activeIndicator.next();
    var nextIndicatorIndex = carouselIndicatorsItem.index(nextIndicator);
        
    if ((nextIndicatorIndex >= 0) && (nextIndicatorIndex != hiddenIndicatorIndex)) {
        changeSlide(nextIndicatorIndex);
    } else {
        changeSlide(0);
    }
}
//Funkcja do klikania w kółka   
carouselIndicatorsItem.click(function(){
    const target = $(this).index();
    changeSlide(target);
    newInterval();
});