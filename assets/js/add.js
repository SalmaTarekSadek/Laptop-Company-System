
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        $('#nav').toggleClass('active');
    });

});

function changeI() {
    var fa = document.getElementById("fa");
    if (fa.classList.contains("fa-angle-down")) {
        fa.classList.remove("fa-angle-down");
        fa.classList.add("fa-angle-up");
    } else {
        fa.classList.add("fa-angle-down");
    }
}

function showLaptop() {
    document.getElementById("card1").style.position ="absolute";
    document.getElementById("card1").style.right = "80px";
    document.title = "add lap";

    var lapDiv = document.getElementById("lapDiv");
    if (lapDiv.classList.contains("hide")) {
        lapDiv.classList.remove("hide");        
    }
    
    var card = document.getElementById("div0");
    if (!card.classList.contains("hide")) {
        card.classList.add("hide");
    }

    var spareForm = document.getElementById("spareForm");
    if (!spareForm.classList.contains("hide")) {
        spareForm.classList.add("hide");        
    }

    var charForm = document.getElementById("charForm");
    if (!charForm.classList.contains("hide")) {
        charForm.classList.add("hide");        
    }
}


function showCharge() {
    var charForm = document.getElementById("charForm");
    if (charForm.classList.contains("hide")) {
        charForm.classList.remove("hide");        
    }
    
    var card = document.getElementById("div0");
    if(!card.classList.contains("hide"))
        card.classList.add("hide");
    
    var spareForm = document.getElementById("spareForm");
    if (!spareForm.classList.contains("hide")) {
        spareForm.classList.add("hide");        
    }
    var lapDiv = document.getElementById("lapDiv");
    if (!lapDiv.classList.contains("hide")) {
        lapDiv.classList.add("hide");        
    }
    document.title = "add CHAR";
}


function showSpare() {
    var spareForm = document.getElementById("spareForm");
    if (spareForm.classList.contains("hide")) {
        spareForm.classList.remove("hide");        
    }

    var charForm = document.getElementById("charForm");
    if (!charForm.classList.contains("hide")) {
        charForm.classList.add("hide");        
    }

    var card = document.getElementById("div0");
    if(!card.classList.contains("hide"))
        card.classList.add("hide");
    
        var lapDiv = document.getElementById("lapDiv");
    if (!lapDiv.classList.contains("hide")) {
        lapDiv.classList.add("hide");        
    }

    document.title = "add spare";
}