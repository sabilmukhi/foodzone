
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch

// Image List
images[0] = "IMAGES/1index.jpg";
images[1] = "IMAGES/3index.jpg";
images[2] = "IMAGES/2index.jpg";
images[3] = "IMAGES/4index.jpg";
images[4] = "IMAGES/5index.jpg";
images[5] = "IMAGES/7index.jpg";
images[6] = "IMAGES/6index.jpg";
images[7] = "IMAGES/9index.jpg";
images[8] = "IMAGES/8index.jpg";
images[9] = "IMAGES/10index.jpg";
images[10] = "IMAGES/11index.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
