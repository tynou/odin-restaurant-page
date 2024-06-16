import './style.css';
import loadHome from "./home.js";
import loadFlowers from "./flowers.js";

const content = document.querySelector("#content");
const btns = {
    home: document.querySelector("#home"),
    flowers: document.querySelector("#flowers")
}

let currentPage = "home";

for (let page in btns) {
    btns[page].addEventListener("click", () => {
        if (page === currentPage) return;

        clearContent();

        btns[currentPage].classList.remove("active");
        btns[page].classList.add("active");

        currentPage = page;

        switch (currentPage) {
            case "home":
                loadHome();
                break;
            case "flowers":
                loadFlowers();
                break;
        }
    });
}

const clearContent = () => {
    content.innerHTML = "";
};

window.onload = () => {
    clearContent();
    loadHome();
};