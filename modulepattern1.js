var WebNotification = (function () {
    debugger;
    'use strict';
    var defaultMsg = "Notification Message!",
        buildAndShowNotification = function (msg) {
            console.log(this);
            alert(msg || defaultMsg);
        }
    var notificationObject = {
        showNotification: buildAndShowNotification
    };

    return notificationObject;
})();