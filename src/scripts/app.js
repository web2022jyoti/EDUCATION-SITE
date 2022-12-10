var menulogo = document.getElementById("menulogo");
        var side = document.getElementById("sidenav");

        menulogo.onclick = function(){
            if(side.style.right == "-250px"){
                side.style.right = "0px";
            }else{
                side.style.right = "-250px"
            }
        }
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1000,
            speedAsDuration: true
    });