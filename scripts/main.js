var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'http://web-images.chacha.com/images/Gallery/5864/what-are-awesome-facts-about-boobs-1295273339-may-23-2013-1-600x450.jpg') {
		myImage.setAttribute ('src', 'http://celebcelebceleb.com/wp-content/blogs.dir/366/2012/05/10/Joanna_Krupa_220.jpg');
	}else{
		myImage.setAttribute ('src', 'http://web-images.chacha.com/images/Gallery/5864/what-are-awesome-facts-about-boobs-1295273339-may-23-2013-1-600x450.jpg')
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


