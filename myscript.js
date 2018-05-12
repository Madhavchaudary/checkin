 
chrome.storage.sync.get('value', function(data){
  	
  	var book_array = data.value;
    console.log(book_array);
    // var c=0;
    // for(count = 0; count < 10; count++){
    //            if(book_array[count]=="") {
    //            	c = c+1;
    //            }
    //         }
    // if(c==1){
    // 	alert("attempted to read an empty tag or 'NO' tags are present in range");
    // }
    // else if(c>1){
    // 	alert("attempted to read "+c+" empty tags");
    // }
    
  	if(document.URL == "http://192.168.240.106:8080/cgi-bin/koha/circ/returns.pl" && book_array.length!=0){
    window.document.getElementsByTagName('input')[6].value = book_array[0];
    data.value.shift();
    chrome.storage.sync.set({'value':data.value});
    }
});
















