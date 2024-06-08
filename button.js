const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
console.log(wrapperRect);

yesBtn.addEventListener("click", () => {
  question.textContent = "let's get married🤣 👨‍👩‍👧‍👧 ";
  question.style.fontSize = "5rem";
  question.style.color = "red";
  clearInterval(timerId);
  let vanish = setTimeout(() => {
    noBtn.style.display = "none";
  }, 300);
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

 let timerId = setInterval(() => {
    const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
     noBtn.addEventListener("click",()=>{
    question.textContent = `ok don't worry give me your friends number who is very beautiful`;
    question.style.color = "white";
  });
   },100);
