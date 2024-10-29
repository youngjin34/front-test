const closeBtn = document.querySelector("#close-modal");
const restaurantModal = document.querySelector("#modal-container");
const imagePath = "../images/";

const restaurants = [
  {
    name: "청기와타운",
    imgSrc: `${imagePath}7.png`,
  },
];

function showModal(restaurant) {
  restaurantModal.style.display = "none";
  restaurantModal.style.display = "flex";

  // 음식 사진
  const foodImg = document.querySelector("restaurant-img");
  foodImg.innerHTML = ``;
}
