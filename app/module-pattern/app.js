var WebNotification = (function () {
    'use strict';
    var defaultMsg = "Notification Message!",
        buildAndShowNotification = function (msg) {
            console.log(this);
            alert(msg || defaultMsg);
        };
    return {
        showNotification: buildAndShowNotification
    }
})();