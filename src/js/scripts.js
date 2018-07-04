const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', function() { 
	this.classList.toggle('menu-button--active');
	navigation.classList.toggle('navvigation--active');
});