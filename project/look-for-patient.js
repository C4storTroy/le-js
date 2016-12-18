function lookArray(trsPatients, behave){
  for(var pos=0;pos <= trsPatients.length - 1; pos++){
    var patientTrActual = trsPatients[pos];
    behave(patientTrActual);
  }
}
