function PgeducationController() {
 
  //создаем экземпляр оббекта модели
    var pgeducation_model = new PgeducationModel(); 
  this.init = function() {

	    navigation.addEventListener("click", inittest, false);
		 function inittest() {
			console.log("Family Data is saved to Model");
			pgeducation_controller.toModel();
		}
	
	// добавить поля для ввода текста
	input_data();
	
    add_pgeducation.onclick = function() {
    
  // добавляем новую строку в таблицу семья
	addRow();	
	
  //Вешаем  функцию обработчик для удаления данных на только, что созданную строку
    deleteRow();
  	
  }
  	   
	// Функция создает поля вода и присваивает им уникальный ид и значение
	
	function create_cell(value) {
		
      var field = document.createElement( "input");
      
	  field.type = 'text';
      field.value = value;
	  
      return field;
	  
	}
 
 // Функция формирует поля ввода
    
	function input_data() {
	
	var row = table_body2.insertRow(table_body2.rows.length);
	 
	  var cell_1 = row.insertCell(0);
      var cell_2 = row.insertCell(1);
      var cell_3 = row.insertCell(2);
	  var cell_4 = row.insertCell(3);
	  
	  cell_1.innerHTML = "<input type='text' id = 'educationalInstitutionName' value = '' />";
	  cell_2.innerHTML = "<input type='text' id = 'pg_endYear' value = '' />";
	  cell_3.innerHTML = "<input type='text' id = 'degree' value = '' />";
	}
	
	
// Функция для добавления данных в выделенной строке

	function addRow() {
    
	if (educationalInstitutionName.value && pg_endYear.value && degree.value) {
		
	  var row = table_body2.insertRow(table_body2.rows.length - 1);
	  
      var cell_1 = row.insertCell(0);
      var cell_2 = row.insertCell(1);
      var cell_3 = row.insertCell(2);
      var cell_4 = row.insertCell(3);
      	  
 // Динамическое создание и добавление инпутов в ячейки таблицы 
 
	  cell_1.appendChild(create_cell(educationalInstitutionName.value));
      cell_2.appendChild(create_cell(pg_endYear.value));
      cell_3.appendChild(create_cell(degree.value));
	  
	  //добавляем кнопки удаления и редактирования
	  
	  cell_4.innerHTML = "<div id ='delete_button2'> <button class='delete_pgeducation'> x </button></div>";

	
	 // очищаем поля ввода
	 
	 educationalInstitutionName.value = "";
     pg_endYear.value = "";
     degree.value = "";
		 
    }
	
  }
  
  
  // функция реализует обход таблицы получает значение и передает их моделе
  
  function getAround() {
   		
	 for (var i = 0; i < table_body2.rows.length; i++) {
		   
		   var mass_row = [];
		   
		   for(var j = 0; j < table_body2.rows[i].cells.length - 1; j++) {
		 
		     mass_row.push(table_body2.rows[i].cells[j].childNodes[0].value);
		   }
		   
	        if (mass_row[0] && mass_row[1] && mass_row[2]) //  не заносить в модель пустую строку ( требуется рефакторинг)
		     
			 pgeducation_model.setValue(table_body2.rows[i].rowIndex, mass_row);
		 
		 }		
  }
  	
	
// Функция для удаления данных в выделенной строке
	
	function deleteRow() {
		
		var delete_row = document.getElementsByClassName('delete_pgeducation');
		
		for(var i = 0; i < delete_row.length; i++) {
			 
		  delete_row[i].onclick = function() {
			   
		    return function() {
				 							  
			  // удаляем поле из таблицы
	
		      pgeducation_table.deleteRow(this.parentNode.parentNode.parentNode.rowIndex);			 
					  			              
		    }
		  
		  }(i);
	  }
	}
  
    
	
	
  }
  this.toModel = function() {
  	for (var i = 0; i < table_body2.rows.length; i++) {
		   
		   var mass_row = [];
		   
		   for(var j = 0; j < table_body2.rows[i].cells.length - 1; j++) {
		 
		     mass_row.push(table_body2.rows[i].cells[j].childNodes[0].value);
		   }
		   
	        if (mass_row[0] && mass_row[1] && mass_row[2]) //  не заносить в модель пустую строку ( требуется рефакторинг)
		     
			 pgeducation_model.setValue(table_body2.rows[i].rowIndex, mass_row);
		 
		 }	
  }
  this.returnData = function() {
  	return { "postgraduate" : pgeducation_model.getValue() };
  }  
}
  
  
