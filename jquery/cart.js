var updateData = function(){
  var items = $(".item-total");
  var total = 0;
  for (var i=0;i < items.length; i++){
    var item = $(items[i]);
    var value = parseFloat(item.text());
    total = total +value;
  }

  $("#total-value").text(total);
  $("#quantity-items").text(items.length);
};

var removeItem = function(event){
  event.preventDefault();

  var self = $(this);
  //self.closest("tr").remove();
  self.closest("tr").hide();

  updateData();
  /**var actual =  parseInt($("#quantity-items").text());
  var newQuantity = actual - 1;
  $("#quantity-items").text(newQuantity);

  var valueActual = parseFloat($("#total-value").text());
  var value = parseFloat(self.closest("tr").find(".item-total").text());
  var valueFinal = valueActual - value ;
  $("#total-value").text(valueFinal);**/

};

var undo = function(){
  $("tr:visible").removeClass("recovered");
  var trs = $("tr:hidden");
  trs.addClass("recovered").show();
  /**trs.addClass("recovered");
  trs.show();**/
};

var afterLoad = function(){
  updateData();
  $("#undo").click(undo);
  $(".remove-item").click(removeItem);
};
$(afterLoad);
