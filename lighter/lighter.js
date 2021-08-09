var images = [
	'../resources/images/hotel.png',
	'../resources/images/lake.png',
	'../resources/images/statue.png',
	'../resources/images/window.png'
]
var randimg =Math.floor(Math.random()*4);
document.body.background = images[randimg];

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gallery");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}