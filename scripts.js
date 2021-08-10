var images = [
	'./resources/images/hotel.png',
	'./resources/images/lake.png',
	'./resources/images/statue.png',
	'./resources/images/window.png'
]
var randimg =Math.floor(Math.random()*4);
document.body.background = images[randimg];