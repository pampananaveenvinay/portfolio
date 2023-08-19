let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTOp -100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset &&top <offset+height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    }
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector(".btn");
  const readMoreContent = document.querySelector(".read-more-content");
  const btn = document.querySelector(".btns");

  readMoreBtn.addEventListener("click", function(event) {
      event.preventDefault();
      readMoreContent.classList.toggle("expanded");
      if (readMoreContent.classList.contains("expanded")) {
          readMoreBtn.textContent = "Read Less";
          readMoreContent.style.display = "block";
          btn.style.marginTop = "150px";

          
      } else {
          readMoreBtn.textContent = "Read More";
          readMoreContent.style.display = "none";
          btn.style.removeProperty("margin-top");
      }
  });
});



  