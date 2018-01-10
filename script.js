var navigation = $("#nav");
var navigationItem = $(navigation.find("li a"));

navigationItem.click(function(){
    var activeItem = navigation.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});