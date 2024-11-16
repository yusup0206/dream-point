function toggleTheme() {
  document.body.classList.toggle("dark");
  setLogo();
}

function setLogo() {
  const isDarkTheme = document.body.classList.contains("dark");
  const whiteLogos = document.querySelectorAll(".white-logo");
  const darkLogos = document.querySelectorAll(".dark-logo");

  whiteLogos.forEach((logo) => {
    logo.style.display = isDarkTheme ? "none" : "block";
  });
  darkLogos.forEach((logo) => {
    logo.style.display = isDarkTheme ? "block" : "none";
  });
}

setLogo();

// mobile lang modal
const mobileLang = document.querySelector("#mobileLang");
const mobileLangModalWrapper = document.querySelector(
  "#mobileLangModalWrapper"
);

mobileLang.addEventListener("click", () => {
  mobileLangModalWrapper.classList.add("active");
});

mobileLangModalWrapper.addEventListener("click", (e) => {
  e.target.classList.remove("active");
});
