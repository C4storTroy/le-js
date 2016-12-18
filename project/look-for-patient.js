function lookArray(trsPatients, printName){
  for(var pos=0;pos <= trsPatients.length - 1; pos++){
    var patientTrActual = trsPatients[pos];
    printName(patientTrActual);
  }
}
