/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("mydropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("mydropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click" , () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === 'false') {
        primaryNav.setAttribute("data-visible" , true);
        navToggle.setAttribute("aria-expanded" , true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible" , false)
        navToggle.setAttribute("aria-expanded" , false)
    }
});


$(document).ready(function(){
  $("#navi").click(function(){
    $("#navi .fa-chevron-up").toggleClass("rotate180");
    $("#mydropdown").stop().slideToggle(500);
  });
});

$(document).ready(function(){
  $("#navi2").click(function(){
    $("#navi2 .fa-chevron-up").toggleClass("rotate180");
    $("#mydropdown2").stop().slideToggle(500);
  });
});















