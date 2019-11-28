// Lightbox Fuctions

// Games

document.getElementById("hybrid").addEventListener("click", function() {
        document.getElementById("hGallery").className = "open";
        document.getElementById("hclose").focus();
});
document.getElementById("hybrid").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("hybrid").click();
        document.getElementById("hclose").focus();
    }
});
document.getElementById("hclose").addEventListener("click", function() {
    document.getElementById("hGallery").className = "";
    document.getElementById("hybrid").focus();
});
document.getElementById("hclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("hclose").click();
        document.getElementById("hybrid").focus();
    }
});
document.getElementById("hGallery").addEventListener("click", function(e) {
    if (e.target.id == "hGallery") {
        document.getElementById("hGallery").className = "";
    }
});

document.getElementById("badritual").addEventListener("click", function() {
        document.getElementById("brGallery").className = "open";
        document.getElementById("brclose").focus();
});
document.getElementById("badritual").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("badritual").click();
        document.getElementById("brclose").focus();
    }
});
document.getElementById("brclose").addEventListener("click", function() {
    document.getElementById("brGallery").className = "";
    document.getElementById("badritual").focus();
});
document.getElementById("brclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("brclose").click();
        document.getElementById("badritual").focus();
    }
});
document.getElementById("brGallery").addEventListener("click", function(e) {
    if (e.target.id == "brGallery") {
        document.getElementById("brGallery").className = "";
    }
});

document.getElementById("platformer").addEventListener("click", function() {
        document.getElementById("pGallery").className = "open";
        document.getElementById("pclose").focus();
});
document.getElementById("platformer").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("platformer").click();
        document.getElementById("pclose").focus();
    }
});
document.getElementById("pclose").addEventListener("click", function() {
    document.getElementById("pGallery").className = "";
    document.getElementById("platformer").focus();
});
document.getElementById("pclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("pclose").click();
        document.getElementById("platformer").focus();
    }
});
document.getElementById("pGallery").addEventListener("click", function(e) {
    if (e.target.id == "pGallery") {
        document.getElementById("pGallery").className = "";
    }
});

document.getElementById("renaissance").addEventListener("click", function() {
        document.getElementById("rmGallery").className = "open";
        document.getElementById("rmclose").focus();
});
document.getElementById("renaissance").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("renaissance").click();
        document.getElementById("rmclose").focus();
    }
});
document.getElementById("rmclose").addEventListener("click", function() {
    document.getElementById("rmGallery").className = "";
    document.getElementById("renaissance").focus();
});
document.getElementById("rmclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("rmclose").click();
        document.getElementById("renaissance").focus();
    }
});
document.getElementById("rmGallery").addEventListener("click", function(e) {
    if (e.target.id == "rmGallery") {
        document.getElementById("rmGallery").className = "";
    }
});

document.getElementById("bloodmoon").addEventListener("click", function() {
        document.getElementById("bGallery").className = "open";
        document.getElementById("bclose").focus();
});
document.getElementById("bloodmoon").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("bloodmoon").click();
        document.getElementById("bclose").focus();
    }
});
document.getElementById("bclose").addEventListener("click", function() {
    document.getElementById("bGallery").className = "";
    document.getElementById("bloodmoon").focus();
});
document.getElementById("bclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("bclose").click();
        document.getElementById("bloodmoon").focus();
    }
});
document.getElementById("bGallery").addEventListener("click", function(e) {
    if (e.target.id == "bGallery") {
        document.getElementById("bGallery").className = "";
    }
});

document.getElementById("manorhill").addEventListener("click", function() {
    document.getElementById("mhGallery").className = "open";
    document.getElementById("mhclose").focus();
});
document.getElementById("manorhill").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("manorhill").click();
        document.getElementById("mhclose").focus();
    }
});
document.getElementById("mhclose").addEventListener("click", function() {
    document.getElementById("mhGallery").className = "";
    document.getElementById("manorhill").focus();
});
document.getElementById("mhclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mhclose").click();
        document.getElementById("manorhill").focus();
    }
});
document.getElementById("mhGallery").addEventListener("click", function(e) {
    if (e.target.id == "mhGallery") {
        document.getElementById("mhGallery").className = "";
    }
});

// Writing

document.getElementById("entomologist").addEventListener("click", function() {
    document.getElementById("entGallery").className = "open";
    document.getElementById("entclose").focus();
});
document.getElementById("entomologist").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("entomologist").click();
        document.getElementById("entclose").focus();
    }
});
document.getElementById("entclose").addEventListener("click", function() {
    document.getElementById("entGallery").className = "";
    document.getElementById("entomologist").focus();
});
document.getElementById("entclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("entclose").click();
        document.getElementById("entomologist").focus();
    }
});
document.getElementById("entGallery").addEventListener("click", function(e) {
    if (e.target.id == "entGallery") {
        document.getElementById("entGallery").className = "";
    }
});

document.getElementById("seasons").addEventListener("click", function() {
    document.getElementById("seaGallery").className = "open";
    document.getElementById("seaclose").focus();
});
document.getElementById("seasons").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("seasons").click();
        document.getElementById("seaclose").focus();
    }
});
document.getElementById("seaclose").addEventListener("click", function() {
    document.getElementById("seaGallery").className = "";
    document.getElementById("seasons").focus();
});
document.getElementById("seaclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("seaclose").click();
        document.getElementById("seasons").focus();
    }
});
document.getElementById("seaGallery").addEventListener("click", function(e) {
    if (e.target.id == "seaGallery") {
        document.getElementById("seaGallery").className = "";
    }
});

document.getElementById("rock").addEventListener("click", function() {
        document.getElementById("rGallery").className = "open";
        document.getElementById("rclose").focus();
});
document.getElementById("rock").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("rock").click();
        document.getElementById("rclose").focus();
    }
});
document.getElementById("rclose").addEventListener("click", function() {
    document.getElementById("rGallery").className = "";
    document.getElementById("rock").focus();
});
document.getElementById("rclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("rclose").click();
        document.getElementById("rock").focus();
    }
});
document.getElementById("rGallery").addEventListener("click", function(e) {
    if (e.target.id == "rGallery") {
        document.getElementById("rGallery").className = "";
    }
});

document.getElementById("gods").addEventListener("click", function() {
    document.getElementById("gGallery").className = "open";
    document.getElementById("gclose").focus();
});
document.getElementById("gods").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("gods").click();
        document.getElementById("gclose").focus();
    }
});
document.getElementById("gclose").addEventListener("click", function() {
    document.getElementById("gGallery").className = "";
});
document.getElementById("gclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("gclose").click();
        document.getElementById("gods").focus();
    }
});
document.getElementById("gGallery").addEventListener("click", function(e) {
    if (e.target.id == "gGallery") {
        document.getElementById("gGallery").className = "";
    }
});

document.getElementById("vision").addEventListener("click", function() {
    document.getElementById("vGallery").className = "open";
    document.getElementById("vclose").focus();
});
document.getElementById("vision").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("vision").click();
        document.getElementById("vclose").focus();
    }
});
document.getElementById("vclose").addEventListener("click", function() {
    document.getElementById("vGallery").className = "";
});
document.getElementById("vclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("vclose").click();
        document.getElementById("vision").focus();
    }
});
document.getElementById("vGallery").addEventListener("click", function(e) {
    if (e.target.id == "vGallery") {
        document.getElementById("vGallery").className = "";
    }
});

// Design

document.getElementById("potion").addEventListener("click", function() {
    document.getElementById("poGallery").className = "open";
    document.getElementById("poclose");
});
document.getElementById("potion").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("potion").click();
        document.getElementById("poclose").focus();
    }
});
document.getElementById("poclose").addEventListener("click", function() {
    document.getElementById("poGallery").className = "";
    document.getElementById("potion").focus();
});
document.getElementById("poclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("poclose").click();
        document.getElementById("potion").focus();
    }
});
document.getElementById("poGallery").addEventListener("click", function(e) {
    if (e.target.id == "poGallery") {
        document.getElementById("poGallery").className = "";
    }
});

document.getElementById("w1").addEventListener("click", function() {
    document.getElementById("w1Gallery").className = "open";
    document.getElementById("w1close").focus();
});
document.getElementById("w1").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("w1").click();
        document.getElementById("w1close").focus();
    }
});
document.getElementById("w1close").addEventListener("click", function() {
    document.getElementById("w1Gallery").className = "";
    document.getElementById("w1").focus();
});
document.getElementById("w1close").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("w1close").click();
        document.getElementById("w1").focus();
    }
});
document.getElementById("w1Gallery").addEventListener("click", function(e) {
    if (e.target.id == "w1Gallery") {
        document.getElementById("w1Gallery").className = "";
    }
});

document.getElementById("w2").addEventListener("click", function() {
    document.getElementById("w2Gallery").className = "open";
    document.getElementById("w2close").focus();
});
document.getElementById("w2").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("w2").click();
        document.getElementById("w2close").focus();
    }
});
document.getElementById("w2close").addEventListener("click", function() {
    document.getElementById("w2Gallery").className = "";
    document.getElementById("w2").focus();
});
document.getElementById("w2close").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("w2close").click();
        document.getElementById("w2").focus();
    }
});
document.getElementById("w2Gallery").addEventListener("click", function(e) {
    if (e.target.id == "w2Gallery") {
        document.getElementById("w2Gallery").className = "";
    }
});

document.getElementById("am").addEventListener("click", function() {
    document.getElementById("amGallery").className = "open";
    document.getElementById("amclose").focus();
});
document.getElementById("am").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("am").click();
        document.getElementById("amclose").focus();
    }
});
document.getElementById("amclose").addEventListener("click", function() {
    document.getElementById("amGallery").className = "";
    document.getElementById("am").focus();
});
document.getElementById("amclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("amclose").click();
        document.getElementById("am").focus();
    }
});
document.getElementById("amGallery").addEventListener("click", function(e) {
    if (e.target.id == "amGallery") {
        document.getElementById("amGallery").className = "";
    }
});

// Animations

document.getElementById("fs").addEventListener("click", function() {
    document.getElementById("fsGallery").className = "open";
    document.getElementById("fsclose").focus();
});
document.getElementById("fs").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("fs").click();
        document.getElementById("fsclose").focus();
    }
});
document.getElementById("fsclose").addEventListener("click", function() {
    document.getElementById("fsGallery").className = "";
    document.getElementById("fs").focus();
});
document.getElementById("fsclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("fsclose").click();
        document.getElementById("fs").focus();
    }
});
document.getElementById("fsGallery").addEventListener("click", function(e) {
    if (e.target.id == "fsGallery") {
        document.getElementById("fsGallery").className = "";
    }
});

document.getElementById("pt").addEventListener("click", function() {
    document.getElementById("ptGallery").className = "open";
    document.getElementById("ptclose").focus();
});
document.getElementById("pt").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("pt").click();
        document.getElementById("ptclose").focus();
    }
});
document.getElementById("ptclose").addEventListener("click", function() {
    document.getElementById("ptGallery").className = "";
    document.getElementById("pt").focus();
});
document.getElementById("ptclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("ptclose").click();
        document.getElementById("pt").focus();
    }
});
document.getElementById("ptGallery").addEventListener("click", function(e) {
    if (e.target.id == "ptGallery") {
        document.getElementById("ptGallery").className = "";
    }
});

document.getElementById("srs").addEventListener("click", function() {
    document.getElementById("srsGallery").className = "open";
    document.getElementById("srsclose").focus();
});
document.getElementById("srs").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("srs").click();
        document.getElementById("srsclose").focus();
    }
});
document.getElementById("srsclose").addEventListener("click", function() {
    document.getElementById("srsGallery").className = "";
    document.getElementById("srs").focus();
});
document.getElementById("srsclose").addEventListener("keyup", function() {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("srsclose").click();
        document.getElementById("srs").focus();
    }
});
document.getElementById("srsGallery").addEventListener("click", function(e) {
    if (e.target.id == "srsGallery") {
        document.getElementById("srsGallery").className = "";
    }
});
