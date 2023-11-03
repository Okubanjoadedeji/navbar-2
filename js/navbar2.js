function myFunction () {
  document.getElementById("myDropdown").classList.toggle("drop");
}


window.onclick = function(a) {  
  if (!a.target.matches('.dropmenu-btn2')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('drop')) {
      myDropdown.classList.remove('drop');
    }
  }
}
