
function CardController() {
	var card_model = new CardModel();

	this.init = function() {
		/*get.onclick = function() {
			card_controller.toModel();
		}
		set.onclick = function() {
			card_controller.fromModel();
		}*/
		/*
		navigation.onclick = function() {
			console.log("navigation cliced");
		}
		*/
		 navigation.addEventListener("click", inittest, false);
		 function inittest() {
			console.log("navigation clicked");
			card_controller.toModel();
			//card_controller.fromModel();
			card_controller.test()
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
         	/*console.log("___");
          	console.log(elements[key].type);
          	console.log(elements[key].id);
          	console.log(elements[key].value);
          	console.log(hash[elements[key].id]);
          	console.log("_____");
          	*/
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
