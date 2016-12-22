/* simple code just to provide servie for application */
var api = {}

var dateActual = new Date();
var dateLastWeek = new Date();
dateLastWeek.setDate(dateActual.getDate() - 7);
var dateBeforeLastWeek = new Date();
dateBeforeLastWeek.setDate(dateActual.getDate() - 14);

var negotiations = [
      { date : dateActual, quantity : 1, value : 150},
      { date : dateActual, quantity : 2, value : 250},
      { date : dateActual, quantity : 3, value : 350},
      { date : dateLastWeek, quantity : 1, value : 450},
      { date : dateLastWeek, quantity : 2, value : 550},
      { date : dateLastWeek, quantity : 3, value : 650},
      { date : dateBeforeLastWeek, quantity : 1, value : 750},
      { date : dateBeforeLastWeek, quantity : 2, value : 950},
      { date : dateBeforeLastWeek, quantity : 3, value : 950}
    ];


api.listWeek = function(req, res) {
    var negotiationsActual = negotiations.filter(function(negotiation) {
        return negotiation.date > dateLastWeek;
    });
    res.json(negotiationsActual);
};

api.listLastWeek = function(req, res) {

   var negotiationsLastWeek = negotiations.filter(function(negotiation) {
        return negotiation.date < dateActual && negotiation.date > dateBeforeLastWeek;
    });
	setTimeout(function() {
		res.json(negotiationsLastWeek);
	}, 500);

};

api.listBeforeLastWeek = function(req, res) {

   var negotiationsBeforeLastWeek = negotiations.filter(function(negotiation) {
        return negotiation.date < dateLastWeek;
    });
    res.json(negotiationsBeforeLastWeek);

};

api.createNegotiation = function(req, res) {

   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negotiation Received");
};



module.exports = api;
