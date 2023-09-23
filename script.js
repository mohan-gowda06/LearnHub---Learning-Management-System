
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');

}



let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {

   if (window.innerWidth < 570) {
      document.querySelector('#menu-btn').style.display = 'none';
      document.querySelector('.side-bar').style.left = '0'
      document.body.style.paddingLeft = '0';
   }
   else {
      document.querySelector('#menu-btn').style.display = 'none'
      document.querySelector('.side-bar').style.left = '0'
      document.body.style.paddingLeft = '30rem';
   }


}

document.querySelector('#close-btn').onclick = () => {

   document.querySelector('#menu-btn').style.display = 'inline-block'
   document.querySelector('.side-bar').style.left = '-30rem'
   document.body.style.paddingLeft = '0';

}
