exports.getProjectsEN = (req, res, next) => {
    res.render('projects', { title: 'Projects', lang : 'EN', project : '' });
}

exports.getProjectsRO = (req, res, next) => {
    res.render('projects', { title: 'Projects', lang : 'RO', project : '' });
}