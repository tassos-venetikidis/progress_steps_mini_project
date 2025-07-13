const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// MY FIRST TAKE HARDCODED FOR FOUR STEPS 👇

// const onPrevBtnClick = () => {
//   switch (progress.style.width) {
//     case "100%":
//       progress.style.width = "66.666%";
//       circles[3].classList.remove("active");
//       nextBtn.disabled = false;
//       break;
//     case "66.666%":
//       progress.style.width = "33.333%";
//       circles[2].classList.remove("active");
//       break;
//     case "33.333%":
//       progress.style.width = "0%";
//       circles[1].classList.remove("active");
//       prevBtn.disabled = true;
//       break;
//   }
// };

// const onNextBtnClick = () => {
//   switch (progress.style.width) {
//     case "33.333%":
//       progress.style.width = "66.666%";
//       circles[2].classList.add("active");
//       break;
//     case "66.666%":
//       progress.style.width = "100%";
//       circles[3].classList.add("active");
//       nextBtn.disabled = true;
//       break;
//     default:
//       progress.style.width = "33.333%";
//       prevBtn.disabled = false;
//       circles[1].classList.add("active");
//   }
// };

// prevBtn.addEventListener("click", onPrevBtnClick);
// nextBtn.addEventListener("click", onNextBtnClick);

// GENERAL SOLUTION TO THE IMPLEMENTATION OF MULTIPLE PROGRESS STEPS 👇

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

nextBtn.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevBtn.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
