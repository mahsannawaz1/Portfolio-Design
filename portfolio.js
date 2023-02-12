
//                             Navigation Bar

const navToggler = document.querySelector('.nav-bar__toggler');
const navList = document.querySelector('.nav-bar__list');
navToggler.addEventListener('click',function(){
navToggler.classList.toggle('nav__toggled');
if(navList.classList.contains('nav__list-visible')){

  navList.classList.remove('nav__list-visible');
}
else {
  navList.classList.add('nav__list-visible');
}
  
 
})
 
//                               Portfolio Cards 

const cards = document.querySelectorAll('.card');
const lines = document.querySelectorAll('.card__line');
cards.forEach((card,card_index)=>{
  card.addEventListener('mouseenter',function(){
    lines.forEach((line,line_index)=>{
      if(card_index===line_index){
        line.firstElementChild.classList.add('line-fill');

        line.firstElementChild.classList.remove('line-hide');
      }
    
    })
 
   
  });

 
  
})
cards.forEach((card,card_index)=>{
  card.addEventListener('mouseleave',function(){
    lines.forEach((line,line_index)=>{
      if(card_index===line_index){
        
        line.firstElementChild.classList.add('line-hide');
      }
    
    })
 
   
  });

 
  
})


let arrays = [
  {
    id:0,
    name:'Alan Walker',
    role:'Singer',
    quote:`Loved the template design and customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website from editing to uploading the template successfully.`,
    image:'./Images/alan.jpg'
  },
  {
    id:1,
    name:'David Parker',
    role:'Senior Designer',
    quote:`Minimal design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful! I can recommend this to anyone.`,
    image:'./Images/david.jpg'
  },
  {
    id:2,
    name:'Anna Barbera',
    role:'Vivaco Group',
    quote:`Wonderful support. Immediate response and they return with an easy fix and clear information. Applied the fix and it worked like a charm. You can definately trust this producer. Overall great quality service and code. Thanks a lot Marketify team!`,
    image:'./Images/anna.jpg'
  },
  {
    id:3,
    name:'James Cameron',
    role:'Aroa Founder',
    quote:`Super easy to update in a code editor. All the code is labeled with comments and laid out nicely. The documentation is great and the support via live chat was perfect. They helped me out super quick when I had a minor code customization.`,
    image:'./Images/james.jpg'
  }
  
 
 
  
]

const userName = document.querySelector('.author__heading');
const role = document.querySelector('.author__designation');
const images = document.querySelectorAll('.testimonial__img');
const para =document.querySelector('.testimonial__description');
const image =document.querySelector('.testimonial__image');
window.addEventListener('DOMContentLoaded',function(){
userName.textContent = arrays[0].name;
role.textContent = arrays[0].role;
image.textContent = arrays[0].image;
para.textContent = arrays[0].quote;
images[0].classList.add('bigger');
})
images.forEach((img,index)=>{
img.addEventListener('click',function(){
  images.forEach(img=>{
    img.classList.remove('bigger');
  })
  arrays.forEach((element,position)=>{
  
    console.log(para)
    if(index===position){
     para.textContent = element.quote;
     animation(para);
     userName.textContent = element.name;
     animation(userName);
     role.textContent = element.role;
     animation(role);
     image.setAttribute('src',element.image);
     animation(image);
     img.classList.add('bigger');
    
    }
   
  
  })

})
})
function animation(object){
  object.animate([
    {opacity:0},
    {opacity:1}
  ],{
    duration: 600,
    fill:`forwards`
 })
 
}


const newsImgs = document.querySelectorAll('.news-partner__img');



