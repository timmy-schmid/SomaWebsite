var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__action");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");


if (modalButton) {
  modalButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  }
  //backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
