const data=[
    {
        id:1,
        heading:'Discover innovative ways to decorate',
        description:`We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,

    },
    {
        id:2,
        heading:'We are available all across the globe',
        description:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,

    },
    {
        id:3,
        heading:'Manufactured with the best materials',
        description:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
  
    },

]
let currentIndex =0
const heading= document.querySelector('#heading')
const description= document.querySelector('#description')
const btnContainer= document.querySelector('.btn')
const showNowLink = document.querySelector('.showNow')
let interval
let animation
const slides = document.querySelectorAll('.img')


function showData(move='right'){
    const currentSlide = data[currentIndex]
    heading.classList.add('textAnimation')
    heading.textContent = currentSlide.heading
    description.textContent = currentSlide.description
    description.classList.add('bottom-animation')
    showNowLink.classList.add('textAnimation')

    animation = setTimeout(()=>{
        heading.classList.remove('textAnimation')
        description.classList.remove('bottom-animation')
        showNowLink.classList.remove('textAnimation')
   },500)
}
window.addEventListener('DOMContentLoaded',function(){
    showData()

})
function autoSliding(){
    interval = setInterval(timer, 4000)
    function timer(){
        slideNext()
        showData()
    }
}
autoSliding()
function resetInterval() {
    clearInterval(interval)
    clearInterval(animation)
}

function slideNext(){
    slides[currentIndex].style.animation='next1 0.5s ease-in forwards'
    if(currentIndex >=data.length-1){
        currentIndex=0
    }else{
         currentIndex++
    }
     slides[currentIndex].style.animation='next2 0.5s ease-in forwards'
}
function slidePrev(){
    slides[currentIndex].style.animation='prev1 0.5s ease-in forwards'
    if(currentIndex==0){
        currentIndex = data.length-1
    }else{
        currentIndex--
    }
    slides[currentIndex].style.animation='prev2 0.5s ease-in forwards'
}
btnContainer.addEventListener('click',function(e){
    resetInterval()
    if(e.target.classList.contains('right') ||e.target.parentElement.classList.contains('right')  ){
        slideNext()
        showData()
       
    }
    else if(e.target.classList.contains('left') || e.target.parentElement.classList.contains('left')){
        slidePrev()
        showData()
    }

})
showNowLink.addEventListener('click',function(e){
    resetInterval()
})

const burgerMenu= document.querySelector('.hamburger-menu')
const nav = document.querySelector('header nav')
burgerMenu.addEventListener('click',function(e){
    e.preventDefault()
    if(nav.classList.contains('active')){
        nav.parentElement.classList.remove('close')
        nav.classList.remove('active')
    }else{
        
        nav.parentElement.classList.add('close')
        nav.classList.add('active')
    }
    
})