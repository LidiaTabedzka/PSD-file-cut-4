var navigation = $("#nav");
var navigationItem = $(navigation.find("li"));

navigationItem.click(function(){
    var activeItem = navigation.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});