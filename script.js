const menuToggle = document.querySelector('.menu-toogle input');
const nav= document.querySelector('nav ul');

// menuToggle.addEventListener('click' , function(){

// nav.classList.toggle('slide');

// });

menuToggle.addEventListener('click' , ()=>{
    // console.log('selesaii');
    nav.classList.toggle('slide');
})

// AOS.init({
//     duration: 1200,
//   })
  