const burger = () => {
  const burgerButton = document.querySelector(".burger");
  const navigation = document.querySelector(".navigation");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger_active");
    navigation.classList.toggle("navigation_active");
  });
};

export default burger;
