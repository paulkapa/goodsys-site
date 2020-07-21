exports.getSubscriptionsEN = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'EN', subscription : '' });
}

exports.getSubscriptionsRO = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'RO', subscription : '' });
}

exports.getITPremiumEN = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'EN', subscription : 'premium' });
}

exports.getITPremiumRO = (req, res, next) => {
    res.render('subscriptions', { title: 'Subscriptions', lang : 'RO', subscription : 'premium' });
}