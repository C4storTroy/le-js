
//var myTable = document.getElementsByTagName("table")[0];
//document.querySelectorAll("table"); - create an array


var button = document.querySelector("#add-patient");

button.addEventListener("click", function(event){

  event.preventDefault();

  var fieldName = document.querySelector("#field-name");
  var fieldWeight = document.querySelector("#field-weight");
  var fieldHeight = document.querySelector("#field-height");

  var newPatient = "<tr class='patient'>"+
                      "<td class='info-name'>"+ fieldName.value +"</td>"+
                      "<td class='info-weight'>"+ fieldWeight.value +"</td>"+
                      "<td class='info-height'>"+ fieldHeight.value +"</td>"+
                      "<td class='info-imc'></td>"+
                    "</tr>";
  var myTable = document.querySelector("table");
  myTable.innerHTML = myTable.innerHTML + newPatient;

  fieldName.value = "";
  fieldWeight.value = "";
  fieldHeight.value = "";

//we can remove form value with default function
//var formPatient = document.querySelector("form");
//formPatiente.reset();

});
