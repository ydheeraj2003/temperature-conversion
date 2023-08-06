
function celcius_to_farenheit(c){
  var f= (c*9/5)+32;
  return f;
}

function farenheit_to_celcius(f){
  var c= (5/9)*(f-32);
  return c;
}

function celcius_to_kelvin(c){
  var k= c + 273.15;
  return k;
}

function kelvin_to_celcius(k){
  var c= k - 273.15;
  return c;
}

function farenheit_to_kelvin(f){
  var k= (f+459.67)*5/9;
  return k;
}

function kelvin_to_farenheit(k){
  var f= (k*9/5) - 459.67;
  return f;
}

function convert(){
  var temperature= document.getElementById("number").value;
  var input=document.getElementById("input").value;
  var output=document.getElementById("output").value;
  var result=document.getElementById("result");
  var answer;
  if (input=="celcius" && output=="farenheit")
  {
    answer= celcius_to_farenheit(parseFloat(temperature));
  }
  if (input=="farenheit" && output=="celcius")
  {
    answer= farenheit_to_celcius(parseFloat(temperature));
  }
  if (input=="celcius" && output=="kelvin")
  {
    answer= celcius_to_kelvin(parseFloat(temperature));
  }
  if (input=="kelvin" && output=="celcius")
  {
    answer= kelvin_to_celcius(parseFloat(temperature));
  }
  if (input=="farenheit" && output=="kelvin")
  {
    answer= farenheit_to_kelvin(parseFloat(temperature));
  }
  if (input=="kelvin" && output=="farenheit")
  {
    answer= kelvin_to_farenheit(parseFloat(temperature));
  }
  result.innerHTML = temperature + "° " + input + " = " + answer.toFixed(3)  + "° " + output;
}
