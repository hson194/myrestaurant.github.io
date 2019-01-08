"use strict";

var index = 0;


autoSlide();



function autoSlide() {
	
	var imageArray = document.getElementsByClassName("myslide");
	stopListImage(imageArray);

	if (index >= imageArray.length){
		index = 0;
	}

	imageArray[index].style.display = "block";
	index ++;
	setTimeout(autoSlide, 3000);
}

function stopListImage(imageArray){
	for (var i = 0; i < imageArray.length; i ++){
		imageArray[i].style.display = "none";
	}
}