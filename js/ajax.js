

$('#pobierz-dane').eq(0).click(function() {
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(dane){
       console.log(dane); 
        
            var parId = document.createElement('p');
            var parName = document.createElement('p'); 
            var parURL = document.createElement('p');
            
            
            parId.innerHTML = 'User ID: ' + dane.userId;
            parName.innerHTML = 'User Name: ' + dane.userName;
            parURL.innerHTML = 'User WEB: ' + dane.userURL;
            

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parURL);
            
			//po zakończeniu operacji usuń obietk
			dane = null;
        
    });
});

/*document.getElementsByTagName('button')[1].onclick = function(){
    
}*/



