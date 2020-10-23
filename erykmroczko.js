document.addEventListener('DOMContentLoaded', function(event){

   // document.getElementById("defaultOpen").click();

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