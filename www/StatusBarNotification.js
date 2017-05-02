var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "StatusBarNotification", "coolMethod", [arg0]);
};

exports.StatusBarNotification = function(arg0, success, error) {
    exec(success, error, "StatusBarNotification", "StatusBarNotification", [arg0]);
};


