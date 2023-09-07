"use strcit";
const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const header = document.querySelector("header");
const links = document.querySelector(".links");
const pics = document.querySelector("#pics");

openBtn.addEventListener("click", () => {
  openBtn.classList.add("hidden");
  header.classList.add("show-nav");
  closeBtn.classList.remove("hidden");
  links.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.remove("hidden");
  header.classList.remove("show-nav");
  closeBtn.classList.add("hidden");
  links.classList.add("hidden");
});

pics.addEventListener("click", (e) => {
  const img = e.target.classList;
  if (!img.contains("card")) return;
  if (img.contains("card")) {
    document
      .querySelectorAll(".card")
      .forEach((e) => e.classList.remove("active"));
    img.add("active");
  }
});
