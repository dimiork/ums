function PgeducationModel() {

  var data = {};
  
//добавляет данные в модель
  this.setValue = function(key,value) {
		
    data[key] = value;
	
  }
//вертает модель с данными
  this.getValue = function() {
	  
    return data;
	
  }
   
   this.clearValue = function() {
	  
    data = {};
	
  }   	
}