exports.getServiceEN = (req, res, next) => {
    res.render('service', { title: 'Service', lang : 'EN' });
}

exports.getServiceRO = (req, res, next) => {
    res.render('service', { title: 'Service', lang : 'RO' });
}