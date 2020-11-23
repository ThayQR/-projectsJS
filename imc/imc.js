function calculandoIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = (altura*altura)/peso;
    let resultado = imc * 1000;

    if (document.getElementById("adulto").getRadioValor){
      if(resultado >= 18.5 && resultado <= 24.99){
        alert("seu peso é considerado normal. Seu IMC é:" + resultado)
      }
      else if (resultado >= 24 && resultado <= 29.99){
        alert("Acima do peso. Seu IMC é:" + resultado)
      }
      else if (resultado >= 30 && resultado <= 34.99){
        alert("Obesidade grau I. Seu IMC é:" + resultado)
      }
      else if (resultado >= 35 && resultado <= 39.99){
        alert("Obsidade grau II. Seu IMC é:" + resultado)
      }
      else if (resultado < 18.5){
        alert("Abaixo do peso. Seu IMC é:" + resultado)
      }
    }
    if (document.getElementById("idoso").getRadioValor){
      if (resultado < 23){
        alert("Baixo peso. Seu IMC é:" + resultado)
      }
      else if (resultado >= 23 && resultado < 28){
        alert("Peso Saudável. Seu IMC é:" + resultado)
      }
      else if (resultado >= 28 && resultado < 30){
        alert("Sobrepeso. Seu IMC é:" + resultado)
      }
      else if (resultado >= 30){
        alert("Obsidade. Seu IMC é:" + resultado)
      }
    }
    return true;
  }