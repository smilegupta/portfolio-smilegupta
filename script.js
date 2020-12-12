function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="white";
    document.getElementById('codepen').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="white";

  }

  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme("light");
else setTheme(theme);

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

