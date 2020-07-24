exports.getIndexEN = (req, res, next) => {
    res.render('index', { title: 'GOODSYS', lang : 'EN' });
}

exports.getIndexRO = (req, res, next) => {
    res.render('index', { title: 'GOODSYS', lang : 'RO' });
}