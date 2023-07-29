"use strict";

const barBtn = document.querySelector(".bar");
const sidebarView = document.querySelector(".sidebar");
const xmarkBtn = document.querySelector(".xmark");

sidebarView.style.visibility = "0";

xmarkBtn.addEventListener("click", function () {
  sidebarView.classList.toggle("sidebar-hidden");
});

barBtn.addEventListener("click", function () {
  sidebarView.classList.toggle("sidebar-hidden");
});
