const key = "dashTheme";
const lastTheme = window.localStorage.getItem(key) || "light-theme";

document.body.classList.add(lastTheme);

document.querySelector(".header").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  window.localStorage.setItem(key, document.body.classList[1]);
});