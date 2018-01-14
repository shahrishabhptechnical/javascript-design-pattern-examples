var WebNotification = function () {
    this.defaultMsg = "Notification Message!";
}

WebNotification.prototype = function () {
    var getDefaultMsg = function (msg) {
        console.log(this);
        alert(msg || this.defaultMsg);
    }

    return {
        showNotification: getDefaultMsg
    }
}();