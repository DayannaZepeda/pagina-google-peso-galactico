function Validar(){
	//declarar las variables
	var U,C;
	//recuperar los datos
	U=document.getElementById("Us").value;
	C=document.getElementById("Co").value;
	//validar los datos
	if (U=="Dayanna"&&C=="123") {
		alert("Usuario y Contraseña Correctos");
		window.open("Dayanna.html");
		document.getElementById("Us").value="";
		document.getElementById("Co").value="";
	}
	else {
		alert("Usuario o Contraseña Incorrectos");
		document.getElementById("Us").value="";
		document.getElementById("Co").value="";
	}

}