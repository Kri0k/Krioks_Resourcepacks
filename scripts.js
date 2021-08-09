var scale = 'scale(1)';
document.body.style.webkitTransform =  scale; 
document.body.style.zoom = 1.0
document.body.style.transform = scale; 

var images = [
	'./resources/images/hotel.png',
	'./resources/images/lake.png',
	'./resources/images/statue.png',
	'./resources/images/window.png'
]
var randimg =Math.floor(Math.random()*4);
document.body.background = images[randimg];
