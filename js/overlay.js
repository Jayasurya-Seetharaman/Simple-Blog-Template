// function on() {
//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("overlay").style.transition = "2";
//     document.getElementById("search").focus();
// }

$(document).ready(function(){
    $("#test").click(function(){
        // alert('Working');
        $("#overlay").fadeIn();
        $("#overlay").fadeIn("slow");
        $("#overlay").fadeIn(3000);
        $("#search").focus();
    });
});

$(document).ready(function(){
    $("#close").click(function(){
        $("#overlay").fadeOut();
        $("#overlay").fadeOut("slow");
        $("#overlay").fadeOut(3000);
    });
});

function off() {
    document.getElementById("overlay").style.display = "none";
}
