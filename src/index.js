let list = document.querySelector("#list");

function handleClick(e) {
  e.name === "menu-outline"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.add("bg-white"))
    : ((e.name = "menu-outline"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"),
      list.classList.remove("bg-white"));
}

// darkMode
let toggleIcon = document.querySelector("#darkIcon");
let html = document.querySelector("html");
let isDarkMOde = false;
const isDarkIcon = `<button>
<ion-icon class="w-8 h-6 md:hidden block" name="sunny-outline"></ion-icon>
</button>`;
const isLightIcon = `<button id="darkIcon">
<ion-icon class="w-8 h-6 md:hidden block" name="cloudy-night-outline"></ion-icon>
</button>`;

// toggleIcon = isDarkMOde ? "isDarkIcon" : "isLightIcon";
function toggleTheme() {
  isDarkMOde = !isDarkMOde;
  switchTheme();
}

function switchTheme() {
  if (isDarkMOde) {
    html.classList.add("dark");
    setTimeout(() => {
      toggleIcon.innerHTML = isDarkIcon;
    }, 250);
  } else {
    html.classList.remove("dark");
    setTimeout(() => {
      toggleIcon.innerHTML = isLightIcon;
    }, 250);
  }
}
