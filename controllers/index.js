exports.getIndex = (req, res, next) => {
    res.render('index', { title: 'GoodSys', lang : 'RO' });
}

exports.getIndexEN = (req, res, next) => {
    res.render('index', { title: 'GoodSys', lang : 'EN' });
}

exports.getIndexRO = (req, res, next) => {
    res.render('index', { title: 'GoodSys', lang : 'RO' });
}