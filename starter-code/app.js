
const menuBurger = () => {
    const burger = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    })

    // $("#menuToggle").click(() => {
    //   console.log('klikniety')
    //   $("header .menu").toggleClass("active-menu");
    //   $("header").toggleClass("active-menu");
    // });
    // $("header .menu a").click(() => {
    //   $("header .menu").toggleClass("active");
    // });
}

menuBurger();

// const activeLink = () => {
//     const navLink = document.getElementsByClassName("navLink");
//     console.log(navLink)
//     for (var i = 0; i < navLink.length; i++) {
//         navLink[i].addEventListener("click", function () {
//             var current = document.querySelector(".testClass");
//             current[0].className = current[0].className.replace(" testClass", "");
//             this.className += " testClass";
//         });


//     }
// }

// activeLink();












