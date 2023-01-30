

const menuEmail = document.querySelector('.navbar-email'); //selecciona el elmento dode esta el email
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);  //al escuchar el evento click corre la funcon toggleDesktopMenu

function toggleDesktopMenu() {
    //quita o pone la clase inactive dependiendo si la tiene o no 
    desktopMenu.classList.toggle('inactive');
    
}