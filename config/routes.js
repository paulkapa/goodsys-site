var indexRouter = require('../routes/index');
var contactRouter = require('../routes/contact');
var copyrightRouter = require('../routes/copyright');
var maintenanceRouter = require('../routes/maintenance');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/en', indexRouter);
    app.use('/ro', indexRouter);
    app.use('/en/contact', contactRouter);
    app.use('/ro/contact', contactRouter);
    app.use('/en/copyright', copyrightRouter);
    app.use('/ro/copyright', copyrightRouter);
    app.use('/en/maintenance', maintenanceRouter);
    app.use('/ro/maintenance', maintenanceRouter);
    // !-- Do not remove this line --! //
};