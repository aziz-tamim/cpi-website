var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 500
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });
});
