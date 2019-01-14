// script for button backToTop STARTS HERE
var toTop = document.getElementById('backToTop');

window.onscroll = function(){
  if(document.body.scrollTop > 800 || 
     document.documentElement.scrollTop > 800) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

toTop.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// script for button backToTop ENDS HERE


// script for popup window STARTS HERE
var btn = document.getElementById('loginBtn');
var body = document.body;
var popup = document.getElementById('popup');
var close = document.getElementById('closeBtn');

btn.addEventListener('click', function(){
  popup.style.display = "block";
});

close.addEventListener('click', function(){
  popup.style.display = "none";
});
// script for popup window ENDS HERE


//script for carousel STARTS HERE
var index = 1;
showSlide(index);   

function navigateSlides(n) {
  showSlide(index += n);  
}

function showCurrentSlide(n) {
  showSlide(index = n);
}

function showSlide(n) {   
  var slides = document.getElementsByClassName('slide');
  
  if (n > slides.length) {
    index = 1;
  }
  
  if (n < 1) {
    index = slides.length;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[index - 1].style.display = "block";
}
//script for carousel ENDS HERE