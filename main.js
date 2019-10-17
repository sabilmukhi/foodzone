var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch

// Image List
images[0] = "IMAGES/1index.jpg";
images[1] = "IMAGES/3index.jpg";
images[2] = "IMAGES/2index.jpg";
images[3] = "IMAGES/4index.jpg";
images[3] = "IMAGES/5index.jpg";
images[3] = "IMAGES/7index.jpg";
images[3] = "IMAGES/6index.jpg";

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
