const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
console.log(wrapperRect);

yesBtn.addEventListener("click", () => {
  question.textContent = "I love you too";
  question.style.fontSize = "5rem";
  question.style.color = "red";
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
npbtn.addEventListener("click",()=>{
  question.textContent = "Don't tell lie";

});
