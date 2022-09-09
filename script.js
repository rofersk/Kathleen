const menuButton = document.getElementsByClassName('navigation-bar-hamburger')[0];
const navigationBarLinks = document.getElementsByClassName('navigation-bar-menu');

menuButton.addEventListener('click', function(){
  for(var i = 0; i < navigationBarLinks.length; i++)
  navigationBarLinks[i].classList.toggle('active');
})