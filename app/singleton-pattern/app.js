var WebNotification = (function () {
    var notificationInstance;

    function init() {
        var defaultMsg = "Notification Message!";        
        return {
            showNotification: function (msg) {
                alert(msg || defaultMsg);
            }
        };
    };
    return {
        getInstance: function () {
            if (!notificationInstance) {
                notificationInstance = init();
            }
            return notificationInstance;
        }
    }

})();

