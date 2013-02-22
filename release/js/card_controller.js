
function CardController() {
	var card_model = new CardModel();

	this.init = function() {
		
		navigation.addEventListener("click", inittest, false);
		function inittest() {
			console.log("Card Data is saved to Model");
			card_controller.toModel();
		}
		
		previewButton.addEventListener("click", initclick, false);
		function initclick() {

			document.getElementById('light').style.display='block';
			document.getElementById('fade').style.display='block'
			var view_controller = new ViewController();
			view_controller.show_preview(main_controller.getData());
		}

	}
	// DEBUG METHOD (remove in release)
	this.test = function() {
		console.log("__________");
		return card_model.getValue();
	}

	
	this.toModel = function() {
		card_model.clear();
		var values = document.getElementsByClassName("fields");
		for(key in values) {

			if((values[key].type==="radio" || values[key].type==="checkbox") &&  values[key].checked === true) { 
				card_model.setValue([values[key].id], values[key].value);
				console.log(values[key].id+" = "+values[key].value);
			} 
			if(values[key].type!="radio" && values[key].type!="checkbox") {
				card_model.setValue(values[key].id, values[key].value); // add to hashid, value
				console.log(values[key].id+" = "+values[key].type+" => "+values[key].value);
			}
		}
	}

	this.fromModel = function() {
		var hash = card_model.getValue();
		var elements = document.getElementsByClassName("fields");  // get all need to save element's objects id and value
        for(key in elements) {
          	if( (elements[key].type=="radio" || elements[key].type=="checkbox") && elements[key].value == hash[elements[key].id] ) {
            elements[key].checked = true;
          } else if(elements[key].type!=="radio" && elements[key].type!=="checkbox") {
          elements[key].value = hash[elements[key].id];
          }
         
         
       }
	}

	this.invalid = function() {
		// do remove event for error data highlighting 
	    var valid = card_model.validate();
	    for (var key in valid) {
	      valid.style.border = "1px solid #ff0000";
        } 	  
	}
	this.returnData = function() {
		return { "anketa" : card_model.getValue() } ;
	}
	return this;
}




	  



//saveButton.onclick = invalid;
	 


/*

  // Функция вызывается при переходе между вкладками
	function addModel() {
	  
	  var fields = document.getElementsByClassName('fields'); // вытащить все поля с классом field
	  
	  for (var i=0; i < fields.length; i++) {
		  
	    card_model.setValue(fields[i].id, report(fields[i]));  // передам в метод модели id поле и его значение
		
	  }
	  
	  
	  //Функция проверки типа полей (если чекбокс или радио то значение будет true либо false) 
	  
	    function report(id_element) {
		
		  switch(id_element.type){
		    case 'text': 
		      return id_element.value;
		  break;
		  
		  case 'checkbox': 
		    if (id_element.checked) 
			  return id_element.value;
		  break;
		  
		  case 'radio': 
		     if (id_element.checked) 
			 return id_element.value; 
		  break;
		  
		  case 'select-one': 
		    return id_element.value;
		  break;
		 
		  case 'textarea':
		    return id_element.value;		  
		  }		
	    }
	
  }
  var insertData = function() {
      var elements = document.getElementsByClassName("fields");  // get all need to save element's objects id and value
      var hash = card_model.getValue();  // get hash form Model()
         for(key in elements) {
         	console.log(elements[key]);
          if((elements[key].type=="radio" || elements[key].type=="checkbox") && elements[key].value == hash[elements[key].id]) { 
            elements[key].checked = true;
          } else {
          elements[key].value = hash[elements[key].id];
          }
          
         
       } 
        console.log(hash);
    }

    */
