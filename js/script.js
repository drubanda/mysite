// ELEMENTS
let contentBoc = document.getElementById('content');
let menuButton = document.getElementById('toggle-btn');
let navSection = document.getElementById('bottom-nav');
let heroSection = document.getElementById('hero-section');
let containerbox = document.getElementById('container-box');

console.log(contentBoc.id)



// METHODS
let dropNav = () => {
   if (navSection.classList.contains('nav-initial')) {
      menuButton.firstElementChild.classList.add('top');
      menuButton.firstElementChild.nextElementSibling.classList.add('middle');
      menuButton.lastElementChild.classList.add('bottom');
      navSection.classList.replace('nav-initial', 'nav-change');
      content.classList.add('box-change');
      
      
   }
   else {
      navSection.classList.replace('nav-change', 'nav-initial');
      menuButton.firstElementChild.classList.remove('top');
      menuButton.firstElementChild.nextElementSibling.classList.remove('middle');
      menuButton.lastElementChild.classList.remove('bottom');
      content.classList.remove('box-change');
   }
   console.log(content.classList);
}

function hero(){
   // heroSection.classList.remove('pad-hero');
   // heroSection.classList.add('change-pad-hero');
}
function animateSkills(){
  if(Number.parseInt(containerbox.scrollTop)>100){
     document.getElementById('clip-skl-elem').classList.remove('clip-initial');
     document.getElementById('clip-skl-elem').classList.add('change-state');
  }
  
}
window.onload =hero;

// EVENTS
menuButton.addEventListener('click', dropNav);
containerbox.onscroll = animateSkills;
// function event(){
//    let value =containerbox.scrollTop;
//    console.log(value);
// }
