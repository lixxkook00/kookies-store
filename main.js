const menuNavMobile = document.querySelector('.ti-menu')
const headerMain = document.querySelector('.header')
const navItems = document.querySelectorAll('.nav a')


// Close and Open Nav Menu on Mobile
var stateMenuMobile = false;
onoffMenuNav = () => {
    if (stateMenuMobile === false) {
        headerMain.classList.add('open')
        stateMenuMobile = true;
    } else {
        headerMain.classList.remove('open')
        stateMenuMobile = false;
    }
}
menuNavMobile.addEventListener('click', function() {
    onoffMenuNav()
})

for (let item of navItems) {
    item.onclick = function() {
        onoffMenuNav()
    }
}