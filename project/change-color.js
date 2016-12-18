var trs = document.getElementsByTagName('tr')

lookArray(trs, function(tr){
  tr.addEventListener("click", function(){
    this.setAttribute("bgcolor","grey");
  })
});
