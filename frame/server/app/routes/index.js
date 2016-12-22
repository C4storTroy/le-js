/* simple code just to provide servie for application */

var api = require('../api');

module.exports  = function(app) {

    app.route('/negotiations/week')
        .get(api.listWeek);

    app.route('/negotiations/lastweek')
        .get(api.listLastWeek);

    app.route('/negotiations/beflastweek')
        .get(api.listBeforeLastWeek);

    app.route('/negotiations')
        .post(api.createNegotiation);
};
