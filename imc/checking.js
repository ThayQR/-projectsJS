function verificandoCampo(){
  document.getElementById("altura").style.borderColor = "#ffffff";
  document.getElementById("altura").style.backgroundColor = "#ffffff";
  document.getElementById("peso").style.borderColor = "#ffffff";
  document.getElementById("peso").style.backgroundColor = "#ffffff";
  if(document.getElementById("peso").value == ""){
	alert("Preencha o peso");
	document.getElementById("peso").style.borderColor = "red";
	document.getElementById("peso").style.backgroundColor = "#ffe5e5";
	document.getElementById("peso").focus();
    return false;
  }
  if(document.getElementById("altura").value == ""){
    alert("Preencha o altura");
    document.getElementById("altura").style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "#ffe5e5";
    document.getElementById("altura").focus();
      return false;
  }
  return true;
}
