$(function() {
    var $mainNav = $(".nav-list");
    $(".hamburger-menu-icon").on("click", function() {
        $mainNav.fadeToggle(300);
    });
});