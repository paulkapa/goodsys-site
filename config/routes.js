var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var copyrightRouter = require('../routes/copyright');
var maintenanceRouter = require('../routes/maintenance');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/contact', contactRouter);
    app.use('/copyright', copyrightRouter);
    app.use('/maintenance', maintenanceRouter);
    // !-- Do not remove this line --! //
};