'use strict';

function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || 'GET',
        url: ajaxOptions.url || '',
        onSuccess: ajaxOptions.onSuccess || function () {},
        onError: ajaxOptions.onError || function () {},
        dataType: ajaxOptions.dataType || 'text'
    };

    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == 'undefined');

        } catch (err) {
            return false;
        }
    }


    var httpReq = new XMLHttpRequest();


    httpReq.open(options.type, options.url, true);




    httpReq.onreadystatechange = function () {

        if (httpReq.readyState == 4) {
            if (httpSuccess(httpReq)) {




                var reutrnData = (options.dataType == 'xml') ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(reutrnData);



            } else {
                options.onError(httpReq.statusText);
            }
        }
    }
    httpReq.send();

}



function pobierzDane(event) {
    event.preventDefault();
    ajax({
        url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
    });

    ajax({
                type: 'GET',
                url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
                onSuccess: function (response) {


                    console.log('hura, Yupi! pbrałem dane' + response); // tutaj wpisujemy co robimy z danymi z ajax i je np wstrzykujemu w html
                },
                onError: function (status) {
                    alert('Połączenie o statusie' + status);
                }
            });

//ajax({
//    type: 'GET',
//    url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
//    onSuccess: function(response) {
//        
//        
//        console.log('hura, Yupi! pbrałem dane' + response);// tutaj wpisujemy co robimy z danymi z ajax i je np wstrzykujemu w html
//    },
//    onError: function(status) {
//        alert('Połączenie o statusie' + status);
//}
//});