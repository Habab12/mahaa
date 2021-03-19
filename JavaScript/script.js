// Left nav bar slide in function
const leftNavBar = document.querySelector('.navbar-brand');
const closeNavbar = document.querySelector('.close-nav');
const navBar = document.querySelector('.location');

leftNavBar.addEventListener('click',()=>{
	navBar.style.marginLeft = "-10px";
	navBar.style.transition = "all 0.6s";
});

closeNavbar.addEventListener('click',()=>{
	navBar.style.marginLeft = "-415px";
	navBar.style.transition = "all 0.6s";
});

// Change video and its details
const tharDesert = document.querySelector('.thar-desert');
const riverPadma = document.querySelector('.river-padma');
const karakoram = document.querySelector('.karakoram');
const dubai = document.querySelector('.dubai');
const timelapseVideo = document.querySelector('.timelapse-video');
const locationName = document.querySelector('#location-name');

tharDesert.addEventListener('click',()=>{
	changeDetail('https://www.youtube.com/embed/aFb30K60L4s', 'T H A R \u00a0\u00a0 D E S E R T ');
});

riverPadma.addEventListener('click',()=>{
	changeDetail('https://www.youtube.com/embed/u27q1QHj9Xw','R I V E R \u00a0\u00a0 P A D M A');
});

karakoram.addEventListener('click',()=>{
	changeDetail('https://www.youtube.com/embed/V8LTmtcu1Ig','K A R A K O R A M');
});

dubai.addEventListener('click',()=>{
	changeDetail('https://www.youtube.com/embed/9GPLl735zBU','D U B A I');
});

function changeDetail(src , location){
	timelapseVideo.src = src;
	locationName.innerText = location;
	navBar.style.marginLeft = "-415px";
	navBar.style.transition = "all 0.6s";
}

