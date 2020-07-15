exports.getMaintenanceEN = (req, res, next) => {
    res.render('maintenance', { title: 'Maintenance', lang : 'EN' });
}

exports.getMaintenanceRO = (req, res, next) => {
    res.render('maintenance', { title: 'Maintenance', lang : 'RO' });
}