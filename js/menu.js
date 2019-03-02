window.onload= function(){
	 var menuElem = document.getElementById('servises');
	 var titleElem = menuElem.querySelector('.title');
	 titleElem.onclick = function() {
	      menuElem.classList.toggle('open');
	 };
 
	var x=document.getElementById('tt');
	var y=document.getElementById('containerF');
	x.onclick = function () {
        if(y.style.visibility == 'hidden'){
	y.style.visibility = 'visible'
    } 
	else {
    y.style.visibility = 'hidden'
    };
    };
	
 };

