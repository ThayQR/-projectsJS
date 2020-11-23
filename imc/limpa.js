function limpa(){
  if(document.getElementById("button").value!=""){
    document.getElementById('peso').value=""
    document.getElementById('altura').value=""
  }
  var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0, l = inputs.length; i < l; i++){
       inputs[i].checked = false;
    }
}