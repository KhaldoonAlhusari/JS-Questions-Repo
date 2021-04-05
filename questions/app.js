const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

btn1.addEventListener("click", () => { toggleAnswer(answer1) });
btn2.addEventListener("click", () => { toggleAnswer(answer2) });
btn3.addEventListener("click", () => { toggleAnswer(answer3) });
btn4.addEventListener("click", () => { toggleAnswer(answer4) });

function toggleAnswer(answer) {
    answer.classList.toggle("hide");
}