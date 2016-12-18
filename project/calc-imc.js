//array of patients - tr
var trsPatients = document.getElementsByClassName('patient');


lookArray(trsPatients, function(patientTr){

  var tdName = patientTr.getElementsByClassName('info-name')[0];
  var tdWeight = patientTr.getElementsByClassName('info-weight')[0];
  var tdHeight = patientTr.getElementsByClassName('info-height')[0];


  var patientActual = {
    name : tdName.textContent,
    weight : tdWeight.textContent,
    height : tdHeight.textContent,
    getImc: function(){
      if((this.height >=0) ){
        var imc = this.weight/(this.height * this.height);
        return imc;
      } else {
        console.log("height is less than 0");
      }
    }
  };
  
  var imc = patientActual.getImc();

  var tdImc = patientTr.getElementsByClassName('info-imc')[0];
  tdImc.textContent = imc;
  console.log(imc);

});
