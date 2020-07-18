exports.getSubscriptionsEN = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'EN', type : '' });
}

exports.getSubscriptionsRO = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'RO', type : '' });
}

exports.getITPremiumEN = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'EN', type : 'premium' });
}

exports.getITPremiumRO = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'RO', type : 'premium' });
}