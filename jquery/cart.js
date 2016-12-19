var oneAd = function(){
  var ads=["What do you think about a new car?",
           "What do you think about a new bike?",
           "What do you thinkg about a new guitar?",
           "What do you thinkg about a new TV?"];
  var posAd = Math.floor(ads.length * Math.random());
  var text = ads[posAd];
  var tr = $("<tr>").addClass("adv").append("<td>");
  tr.find("td").attr("colspan",6).text(text);
  return tr;
};

/**
function to update page
**/
var updateData = function(){
  var car = $(".cart");
  car.each(function(){
    var car = $(this);
    var items = car.find(".item-total:visible");
    var total = 0;
    for (var i=0;i < items.length; i++){
      var item = $(items[i]);
      var value = parseFloat(item.text());
      total = total +value;
    }
    car.find(".total-value").text(total);
    car.find(".quantity-items").text(items.length);
  });
};

/**
function to remove items
**/
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

/**
function to back removed items
**/
var undo = function(){
  var car = $(this).closest('.cart');

  car.find('tr:visible').removeClass('recovered');

  var trs = car.find('tr:hidden');
  trs.addClass("recovered");
  trs.show();
  updateData();
  /**trs.addClass("recovered");
  trs.show();**/
};

var giveBright = function(){
  $(this).find(".remove-item").fadeIn();
  $(this).addClass("hovering");
};
var delBright = function(){
  $(this).find(".remove-item").fadeOut();
  $(this).removeClass("hovering");
};

var alterAd = function(event){
  event.preventDefault();
  $(".adv").fadeToggle();
  $(".alter-ad").toggle();
};



var afterLoad = function(){
  updateData();
  $(".undo").click(undo);
  $(".remove-item").click(removeItem);
  $("tr:nth-child(3n)").each(function(){
    oneAd().insertAfter($(this));
  });
  $("tbody tr").hover(giveBright, delBright);
  /**$("#hide-ad").click(alterAd);
  $("#show-ad").click(alterAd);**/
  $(".alter-ad").click(alterAd);
  //$("tr").on("mouseenter", giveBright);
  //$("tr").on("mouseleave", delBright);
};
$(afterLoad);
//afterLoad();
