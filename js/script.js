"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("show-btn");
    const targets = document.querySelectorAll(".hidden"); // Use querySelectorAll to get a NodeList

    button.addEventListener("click", () => {
        const areHidden = [...targets].some(target => target.classList.contains("hidden"));

        targets.forEach(target => {
            target.classList.toggle("hidden");
            target.classList.toggle("shown");
        });

        button.textContent = areHidden ? "Hide Projects" : "Show Previous Projects";
    });
  });