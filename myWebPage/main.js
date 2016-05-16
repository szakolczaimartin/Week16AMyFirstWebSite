


function validateContactData()
{
	var name = document.getElementById("MyName").value;
	var email = document.getElementById("MyEmail").value;
	var message = document.getElementById("myMessage").value;
	var reName = /^[a-zA-Z\s]+$/;
	var reEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	if(name == "" || reName.test(name)== false)
	{
		alert("Tha name is empty or not valid");
		return false;
	}
	else if(email == "" || reEmail.test(email)== false)
	{
		alert("Tha email is empty or not valid");
		return false;
	}
	else if(message == "")
	{
		alert("Tha message is empty");
		return false;
	}
		
	return true;
	
}
