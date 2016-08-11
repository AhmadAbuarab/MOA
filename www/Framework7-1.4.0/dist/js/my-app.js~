// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
/*
 // Callbacks to run specific code for specific pages, for example for About page:
 myApp.onPageInit('tasks', function (page) {
 // run createContentPage func after link was clicked
 $$('.create-page').on('click', function () {
 });
 });
 */

$(document).ajaxSend(function (event, jqXHR, settings) {
    $('#general-ajax-load').fadeIn();
});

$(document).ajaxComplete(function (event, jqXHR, settings) {
    $('#general-ajax-load').fadeOut();
});

Handlebars.registerHelper('ifCond', function (property, options) {
    if (typeof property == 'object')
        return 'لايوجد';
    return property;
});

var MobileApp = new moApp();

myApp.onPageInit('forms', function (page) {
    $('#search').click(function () {
        var serviceName = 'Agricultural_Locations_Query';
        var fieldName;
        var fieldValue;
        $(".item-content .item-inner .item-input .input-field").each(function () {
            if ($(this).val() != '') {
                fieldValue = $(this).val();
                fieldName = $(this).attr('id');
                return false;
            }
        });

//        MobileApp.sendRequest('Agricultural_Locations_Query', 'agr_center', 'الإدارة العامة بمنطقة الرياض', function (dataArray) {
        MobileApp.sendRequest('Agricultural_Locations_Query', fieldName, fieldValue, function (dataArray) {
            console.log(dataArray);
            dataArray = eval('(' + dataArray + ')');

            if ((dataArray["Body"]["MOA_spcAgricultural_spcLocations_spcQuery_spcWS_spcWF_Output"]["ListOfMoa_Agricultural_Locations_Io"]["MoaAgriculturalLocations"].length) == null)
                var dataRes = dataArray["Body"]["MOA_spcAgricultural_spcLocations_spcQuery_spcWS_spcWF_Output"]["ListOfMoa_Agricultural_Locations_Io"];
            else
                var dataRes = dataArray["Body"]["MOA_spcAgricultural_spcLocations_spcQuery_spcWS_spcWF_Output"]["ListOfMoa_Agricultural_Locations_Io"]["MoaAgriculturalLocations"];

            if (dataRes != '') {
                localStorage.setItem('agriculturalLocationsData', dataRes);

                var source = $("#agricultural-template").html();
                var template = Handlebars.compile(source);
                var context = {agriculturalLocationsData: dataRes};
                var html = template(context);
                $("#hmmTabel").append(html);
            }
        });
    });

});

myApp.onPageInit('forms2', function (page) {
    $('#search2').click(function () {
        var serviceName = 'Application_Query_Service';
        var fieldName;
        var fieldValue;
        var formdata = {};
        $(".item-content .item-inner .item-input .input-field").each(function () {
//            if ($(this).val() != '') {
            fieldValue = $(this).val();
            fieldName = $(this).attr('id');
            formdata[fieldName] = fieldValue;

//            }
        });
//        MobileApp.sendRequest('Application_Query_Service', 'sn', '3400828', function (dataArray) {
        MobileApp.sendFullRequest('Application_Query_Service', formdata, function (dataArray2) {
            console.log(dataArray2);
            dataArray2 = eval('(' + dataArray2 + ')');
            if ((dataArray2["Body"]["MOA_Case_Query_WS_WF_Output"]["ListOfMoa_Case_Unified_Q_Io"]["MoaCaseUnified"].length) == null)
                var dataRes = dataArray2["Body"]["MOA_Case_Query_WS_WF_Output"]["ListOfMoa_Case_Unified_Q_Io"];
            else
                var dataRes = dataArray2["Body"]["MOA_Case_Query_WS_WF_Output"]["ListOfMoa_Case_Unified_Q_Io"]["MoaCaseUnified"];



            if (dataRes != '') {
                localStorage.setItem('applicationData', dataRes);

                var source = $("#application-template").html();
                var template = Handlebars.compile(source);
                var context = {applicationData: dataRes};
                var html = template(context);
                $("#applicationTable").append(html);
            }
        });
    });
});

