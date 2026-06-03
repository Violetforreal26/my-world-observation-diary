const body = document.body;
const toggle = document.getElementById("languageToggle");

function setLanguage(lang) {
  body.setAttribute("data-lang", lang);
  document.documentElement.lang = lang === "cn" ? "zh-CN" : "en";

  document.querySelectorAll("[data-cn][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(lang === "cn" ? "data-cn" : "data-en");
  });

  document.querySelectorAll("[data-cn-html][data-en-html]").forEach((el) => {
    el.innerHTML = el.getAttribute(lang === "cn" ? "data-cn-html" : "data-en-html");
  });

  toggle.textContent = lang === "cn" ? "English" : "中文";
  localStorage.setItem("mwod-language", lang);
}

toggle.addEventListener("click", () => {
  const current = body.getAttribute("data-lang") || "en";
  setLanguage(current === "cn" ? "en" : "cn");
});

setLanguage(localStorage.getItem("mwod-language") || "en");
