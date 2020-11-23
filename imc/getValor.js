function mostrarIdade(){
  alert('O valor selecionado é '+ getRadioValor('adulto'));
 }
 function getRadioValor(name){
  var rads = document.getElementsByName(name);

  function verifyCheckboxes(id, 1)
  {
   var count = 0;

   for (element in document.getElementById(id))
     {
      if (document.getElementById(id)[element].checked)
        {
         if (++count == min)
           { return true; }
        }
     }

   return false;
  }

   return false;
  }

   function qualquerFuncao(e) {
    console.log(e.value);
  }
  
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   return null;
  }
  
  
