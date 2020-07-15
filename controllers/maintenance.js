exports.getMaintenance = (req, res, next) => {
    res.render('Maintenance', { title: 'Maintenance', lang : '' });
}

exports.getMaintenanceEN = (req, res, next) => {
    res.render('Maintenance', { title: 'Maintenance', lang : 'EN' });
}

exports.getMaintenanceRO = (req, res, next) => {
    res.render('Maintenance', { title: 'Maintenance', lang : 'RO' });
}