const admin = require('firebase-admin');

admin.initializeApp();

exports.user = require('./api/user.api');
exports.userTriggers = require('./triggers/user.trigger');
