var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var copyrightRouter = require('../routes/copyright');
var maintenanceRouter = require('../routes/maintenance');
var subscriptionsRouter = require('../routes/subscriptions');
var serviceRouter = require('../routes/service')
var outsourcingRouter = require('../routes/outsourcing')

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/', contactRouter);
    app.use('/', copyrightRouter);
    app.use('/', maintenanceRouter);
    app.use('/', subscriptionsRouter);
    app.use('/', serviceRouter);
    app.use('/', outsourcingRouter);
    // !-- Do not remove this line --! //
};