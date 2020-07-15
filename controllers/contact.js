exports.getContact = (req, res, next) => {
    res.render('contact', { title: 'Contact', lang : '' });
}

exports.getContactEN = (req, res, next) => {
    res.render('contact', { title: 'Contact', lang : 'EN' });
}

exports.getContactRO = (req, res, next) => {
    res.render('contact', { title: 'Contact', lang : 'RO' });
}