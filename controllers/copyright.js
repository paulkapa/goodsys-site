exports.getCopyrightEN = (req, res, next) => {
    res.render('copyright', { title: 'Copyright', lang : 'EN' });
}

exports.getCopyrightRO = (req, res, next) => {
    res.render('copyright', { title: 'Copyright', lang : 'RO' });
}