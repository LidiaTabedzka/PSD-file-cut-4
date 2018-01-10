/*Scripts for section header*/
var navigation = $("#nav");
var navigationItem = $(navigation.find("li"));

navigationItem.click(function(){
    var activeItem = navigation.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});

/*Scripts for section projects*/
var navigationProjects = $("#projectsTabs");
var navigationProjectsItem = $(navigationProjects.find("li"));

navigationProjectsItem.click(function(){
    var activeItem = navigationProjects.find("li.current");
    activeItem.removeClass();
    $(this).addClass("current");
});