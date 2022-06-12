const burgerMenuBtn = document.querySelector(".nav__burger-menu");
const navLinks = document.querySelector(".nav__links");
const burgerContactBtn = document.querySelector(".nav__burger-contact");
const navContact = document.querySelector(".nav__contact");
const footerYear = document.querySelector(".footer__actual-year");
const arrowTop = document.querySelector(".arrowToTop");
const expNumber = document.querySelector('.expexperience__number')
console.log(expNumber)

burgerMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("showNavMenu");
    navContact.classList.remove("showNavContact");
});
burgerContactBtn.addEventListener("click", () => {
    navContact.classList.toggle("showNavContact");
    navLinks.classList.remove("showNavMenu");
});

const actualYear = () => {
    const year = new Date().getFullYear();
    footerYear.textContent = `${year}`;
};
actualYear();

// window.addEventListener('scroll', () => {
//     const scroll = window.scrollY
//     console.log(countNumber)
//     if (scroll = 2100) {
//         setTimeout((expNumber) => {
//             expNumber.innerHtml =
//         },1000);
//     }
// })

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 1000) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
});

// SLICK
$(document).ready(function () {
    $(".team__cards").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});
