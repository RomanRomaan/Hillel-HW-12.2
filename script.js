const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btns = document.querySelector('.buttons')


btns.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {

        const clickedItemText = event.target.textContent;
        alert("Клікнуто на пункті: " + clickedItemText);
    }
});