document.addEventListener("scroll", function() {
    var scrolledHeight = window.pageYOffset;
    if(scrolledHeight > 50) {
        document.body.style.backgroundColor = "skyblue";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
