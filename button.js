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

// noBtn.addEventListener("mouseover", () => {
//   const i =
//     Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
//   const j =
//     Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
//   noBtn.style.left = i + "px";
//   noBtn.style.top = j + "px";
//   question.textContent = "Don't tell lie";
// });
// noBtn.addEventListener("click",()=>{
//   question.textContent = "Don't tell lie";

// });

 setInterval(() => {
    const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
     noBtn.addEventListener("click",()=>{
    question.textContent = '"Love is the silent poetry of the heart, a language spoken in the warmth of a glance, the tenderness of a touch, and the beauty of shared moments that etch the soul with an everlasting melody."';
    question.style.color = "white";
  });

   },100);
