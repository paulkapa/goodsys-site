var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var copyrightRouter = require('../routes/copyright');
var maintenanceRouter = require('../routes/maintenance');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/', contactRouter);
    app.use('/', copyrightRouter);
    app.use('/', maintenanceRouter);
    // !-- Do not remove this line --! //
};