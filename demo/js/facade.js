function Facade() {
    
	function AjaxObject() {
   	 
	 var ajax;
	 
	 if (XMLHttpRequest)	 
	   ajax = new XMLHttpRequest();	   
	
	 else	 
	   ajax = ActiveXObject("Msxml2.XMLHTTP");
	 
	 return ajax;	
	
}		
 
	this.getText = function(url, data, callback) {
	
	  var ajax = AjaxObject();

	  ajax.onreadystatechange = function() {

		if (ajax.readyState === 4 && ajax.status === 200)
		
		  callback(ajax.responseText);
		
	  }
	
	  ajax.open("POST", url);
      
      ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
	  ajax.send("data="+data);	
	
	}
	

	
}