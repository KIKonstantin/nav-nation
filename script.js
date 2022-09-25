const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navs = {
    nav1: document.getElementById("nav-1"),
    nav2: document.getElementById("nav-2"),
    nav3: document.getElementById("nav-3"),
    nav4: document.getElementById("nav-4"),
    nav5: document.getElementById("nav-5"),
};
let navsArr = Object.values(navs);
// Event listeners
menuBars.addEventListener("click", toggleNav);
navsArr.forEach((n) => n.addEventListener("click", toggleNav));

function navAnimation(directionF, directionT) {
    for (let i = 0; i < 5; i++) {
        navsArr[i].classList.replace(
            `slide-${directionF}-${i + 1}`,
            `slide-${directionT}-${i + 1}`
        );
    }
}

function toggleNav() {
    console.log('I work')
        //Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle("change");
    // Toggle: Menu Actuve
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        // animate in - overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        // animate in - nav items
        navAnimation('out', 'in');
    } else {
        // animate out - overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}