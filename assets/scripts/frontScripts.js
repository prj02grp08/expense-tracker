//see other
const seeotherEl = document.getElementById("seeOtherbtn");

seeotherEl.addEventListener("click", seeOther);

function seeOther() {
    graphcontainer1.classList.add("hide")
    graphcontainer2.classList.remove("hide")
    graphcontainer3.classList.remove("hide")
    backbtn.classList.remove("hide")
};

//back to personal
const backEl = document.getElementById("backbtn");

backEl.addEventListener("click", back);

function back() {
    graphcontainer1.classList.remove("hide")
    graphcontainer2.classList.add("hide")
    graphcontainer3.classList.add("hide")
    backbtn.classList.add("hide")
};

//
const homeEl = document.getElementById("homebtn");

homeEl.addEventListener("click", home);