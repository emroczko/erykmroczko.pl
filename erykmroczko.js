$(document).ready(function(){
    if (localStorage.getItem("cookieSeen") != "shown") {
        $(".cookie").delay(2000).fadeIn(1000);
        localStorage.setItem("cookieSeen","shown")
    };
    $('.close').click(function() {
        $('.cookie').fadeOut(1000);
    })
});

function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementsByClassName("main")[0].style.display = "none";
    
    document.getElementById(pageName).style.display = "block";

    var bandcamp = document.getElementById("bandcamp");
    bandcamp.setAttribute("src", "https://bandcamp.com/EmbeddedPlayer/album=4240322720/size=large/bgcol=333333/linkcol=0f91ff/artwork=none/transparent=true/");
   
    }

function openInfo(){
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementsByClassName("main")[0].style.display = "block";
}

