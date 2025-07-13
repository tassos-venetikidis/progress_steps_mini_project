const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

const onPrevBtnClick = () => {
  switch (progress.style.width) {
    case "100%":
      progress.style.width = "66.666%";
      document.getElementsByClassName("circle")[3].classList.remove("active");
      nextBtn.disabled = false;
      break;
    case "66.666%":
      progress.style.width = "33.333%";
      document.getElementsByClassName("circle")[2].classList.remove("active");
      break;
    case "33.333%":
      progress.style.width = "0%";
      document.getElementsByClassName("circle")[1].classList.remove("active");
      prevBtn.disabled = true;
      break;
  }
};

const onNextBtnClick = () => {
  switch (progress.style.width) {
    case "33.333%":
      progress.style.width = "66.666%";
      document.getElementsByClassName("circle")[2].classList.add("active");
      break;
    case "66.666%":
      progress.style.width = "100%";
      document.getElementsByClassName("circle")[3].classList.add("active");
      nextBtn.disabled = true;
      break;
    default:
      progress.style.width = "33.333%";
      prevBtn.disabled = false;
      document.getElementsByClassName("circle")[1].classList.add("active");
  }
};

prevBtn.addEventListener("click", onPrevBtnClick);
nextBtn.addEventListener("click", onNextBtnClick);
