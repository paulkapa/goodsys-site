exports.getCopyright = (req, res, next) => {
    res.render('Copyright', { title: 'Copyright', lang : '' });
}

exports.getCopyrightEN = (req, res, next) => {
    res.render('Copyright', { title: 'Copyright', lang : 'EN' });
}

exports.getCopyrightRO = (req, res, next) => {
    res.render('Copyright', { title: 'Copyright', lang : 'RO' });
}