function toggle() {
    if(document.getElementById("Sidebar").style.display==="none" || document.getElementById("Sidebar").style.display===""){
         document.getElementById("Sidebar").style.display="flex";
         document.getElementById("toggle").className="fa-solid fa-xmark";

    }
    else{
        document.getElementById("Sidebar").style.display="none";
        document.getElementById("toggle").className="fa-solid fa-bars";
    }

}


window.addEventListener('scroll', () => {
const navbar = document.getElementById('header');
if (window.scrollY > 10) {
navbar.classList.add('shadow');
} else {
navbar.classList.remove('shadow');
    }
});