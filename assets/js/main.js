function openNav() {
    if(document.getElementById("Sidebar").style.display==="none" || document.getElementById("Sidebar").style.display===""){
         document.getElementById("Sidebar").style.display="flex";
         document.getElementById("toggle").className="fa-solid fa-xmark";

    }
    else{
        document.getElementById("Sidebar").style.display="none";
        document.getElementById("toggle").className="fa-solid fa-bars";
    }

    // alert("ff")
 
//   document.getElementById("openbtn").style.display="none";
//   document.getElementById("closebtn").style.display="flex";
//   document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("Sidebar").style.display="none";
    document.getElementById("closebtn").style.display="none";
    document.getElementById("openbtn").style.display="flex";
//   document.getElementById("main").style.marginLeft= "0";
}
window.addEventListener('scroll', () => {
const navbar = document.getElementById('header');
if (window.scrollY > 10) {
navbar.classList.add('shadow');
} else {
navbar.classList.remove('shadow');
    }
});