let dropdownBrandsBlock = ".brands-list__item--hidden"
let windowInnerWidth = document.documentElement.clientWidth;

let dropdownBrandsButton = ".brands__button";
function setToggle(buttonClass, hideClassArr) {
  let currentToggle = 0;
  let button = document.querySelector(buttonClass);
  let parent = button.parentNode;
  let elements = parent.querySelectorAll(hideClassArr);
  console.log(button,elements)
  let toggleText = ["Показать всё", "Скрыть"];
  function getToggleText() {
    return toggleText[++currentToggle % toggleText.length];
  }
  button.addEventListener("click", () => {
    button.innerHTML = getToggleText();
    button.classList.toggle("more-button--active");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("hidden");
    }
  });
}

setToggle(dropdownBrandsButton,dropdownBrandsBlock)
setToggle(".tech__button", ".tech-list__item--hidden");
setToggle('.main__info__button', ".main__description--hidden")