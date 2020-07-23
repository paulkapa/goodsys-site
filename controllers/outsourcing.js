exports.getOutsourcingEN = (req, res, next) => {
    res.render('outsourcing', { title: 'Outsourcing', lang : 'EN' });
}

exports.getOutsourcingRO = (req, res, next) => {
    res.render('outsourcing', { title: 'Outsourcing', lang : 'RO' });
}