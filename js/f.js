
function validate(forma){
		x = document.getElementsByClassName("dob");
		for (var i=x.length-1; i>=0; i--){
			x[i].parentNode.removeChild(x[i]);
		}
		var ima = isFullText(forma.ima);
		var email = isCorrectEmail(forma.mail);
		if(ima && email){
			alert('Сообщение успешно отправлены');
			return true;
		}
		else{
		return false;
		}
	}
	
	function isFullText(text){
		text.style.backgroundColor = "white";
		if (text.value == ""){
			var item = document.createElement("span");
			item.setAttribute("class","dob");
			item.style.color = "#5ea8bb";
			var name= document.getElementById("name");
			item.innerHTML = "Укажите имя";
			text.style.backgroundColor = "#5ea8bb";
			name.appendChild(item);
			return false;
		}
		return true;
	}
	
	function isCorrectEmail(text){
		var value = text.value;
		var regExp=/.+@.+\..+/i;
		if (!(regExp.test(value))){
			var item = document.createElement("span");
			item.setAttribute("class","dob");
			item.style.color = "#5ea8bb";
			var mail= document.getElementById("mail");
			item.innerHTML = "Неверный формат E-mail";
			text.style.backgroundColor = "#5ea8bb";
			mail.appendChild(item);
		}
		else{
			text.style.backgroundColor = "white";
		}
		return regExp.test(value);
	}
