let theme = localStorage.getItem("theme");

if (theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById("theme-style").href = "default.css";
        document.getElementById('github').style.fill="black";
    }

    if (mode == "blue") {
        document.getElementById("theme-style").href = "blue.css";
        document.getElementById('github').style.fill="white";
    }

    if (mode == "green") {
        document.getElementById("theme-style").href = "green.css";
        document.getElementById('github').style.fill="black";
    }

    if (mode == "purple") {
        document.getElementById("theme-style").href = "purple.css";
        document.getElementById('github').style.fill="white";
    }

    localStorage.setItem("theme", mode);
}
