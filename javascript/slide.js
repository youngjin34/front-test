const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");

let currentIndex = 0;
let slideCount = slide.length;  // 슬라이드 개수 수정
const slideWidth = 300;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInit();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  let currentSlides = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlides.length;
  let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  slides.style.width = newWidth;
}

function setInit() {
  let translateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${translateValue}px)`;
}

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});
prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

function moveSlide(num) {
  slides.style.transition = "transform 0.5s";
  slides.style.transform = `translateX(${-num * (slideWidth + slideMargin) - (slideWidth + slideMargin) * slideCount}px)`;

  currentIndex = num;

  if (currentIndex === slideCount || currentIndex === -slideCount) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateX(${-0}px)`;
      currentIndex = 0;
    }, 500);

    setTimeout(() => {
      slides.style.transition = "transform 0.5s";
    }, 600);
  }
}

makeClone();
