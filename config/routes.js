var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var copyrightRouter = require('../routes/copyright');
var maintenanceRouter = require('../routes/maintenance');
var subscriptionsRouter = require('../routes/subscriptions');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/', contactRouter);
    app.use('/', copyrightRouter);
    app.use('/', maintenanceRouter);
    app.use('/', subscriptionsRouter);
    // !-- Do not remove this line --! //
};