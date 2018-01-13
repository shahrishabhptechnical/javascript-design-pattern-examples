var WebNotification = (function () {
    'use strict';
    var defaultMsg = "Notification Message!",
        buildAndShowNotification = function (msg) {
            console.log(this);
            alert(msg || defaultMsg);
        },
        notificationObject = {
            showNotification: buildAndShowNotification
        };

    return notificationObject;
})();