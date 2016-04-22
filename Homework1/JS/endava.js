function changePicture(n) {
	var a = document.getElementById("image");
	if (n==1) {
		$('#button1').css('background-color', 'red');
		$('#button2').css('background-color', 'blue');
		a.src = "Media/image1.jpg"
	} else{
		a.src = "Media/image2.jpg"
	}
}

function SubmitMessage(){
	
	var validationResponse = ValidateFields();
	if (validationResponse != "Ok") {
		alert(validationResponse);
	} else {
		alert("Message sent");
		//do some stuff
		//ajax call
	}	
}

function ValidateFields(){
	
	var email = $("#email").val();
	var name = $("#name").val();
	var website = $("#website").val();
	var message = $("#message").val();
	
	console.log(email);
	console.log(name);
	console.log(website);
	console.log(message);
	
	if (name == "" || name.length < 3) {
		return "Invalid Name";
	}
	if (validateEmail(email) == false) {
		return "Invalid Email Adress";
	} 	
	if (isValidWebsite(website) == false) {
		return "Invalid Website";
	}
	if (message == "" || message.length < 5) {
		return "Invalid Message"
	}	
	
	return "Ok";
}

function onClickTwitter(){
	document.location.href = 'https://twitter.com/endava';
}

function onClickFacebook(){
	document.location.href = 'https://www.facebook.com/endava/';
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function isValidWebsite(url) {
	var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
}