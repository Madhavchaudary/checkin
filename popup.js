//waits for click
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("checkin").addEventListener("click", checkin);
});


//gets json from the django server and stores it 
function checkin() {
  	chrome.storage.sync.get('dev_id',function(ur){
    	$.getJSON('http://192.168.240.106:8000/CHECKIN/'+ur.dev_id+'/',function(data){
    		chrome.storage.sync.set({'value': data} );
    		console.log(data);
			});
		chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
    	chrome.tabs.update(tab.id, {url:"http://192.168.240.106:8080/cgi-bin/koha/circ/returns.pl" });
	
	});
});
}