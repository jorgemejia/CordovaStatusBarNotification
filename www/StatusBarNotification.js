var exec = require('cordova/exec');

var StatusBarNotification = {
    coolMethod : function (arg0, success, error) {
        exec(success, error, "StatusBarNotification", "coolMethod", [arg0]);
    },
    showNotification : function (arg0, success, error) {
        exec(success, error, "StatusBarNotification", "showNotification", [arg0]);
    }
};

module.exports = StatusBarNotification;
