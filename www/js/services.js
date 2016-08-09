var moApp = function () {
    this.urlValue = 'http://82.212.77.38/servicehandler/upload.php';
}

moApp.prototype.sendRequest = function (service_name, fieldName, value, callback) {

    var that = this;

    $.post(that.urlValue, {service: service_name, search: fieldName, value: value}, function (data) {
        callback(data);
    });


};


moApp.prototype.sendFullRequest = function (service_name, formdata, callback) {

    var that = this;
   
    $.post(that.urlValue, {service: service_name,formdata:JSON.stringify(formdata)}, function (data) {
        callback(data);
    });


};