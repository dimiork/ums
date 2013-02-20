function CardModel() {
  var content = {};
  var toCheck = ['name','lastName','middleName','dateBirth','monthBirth','yearBirth','persNumber','passport'];
  
  this.setValue = function(key, value) {
    if (value) {	
	  content[key] = value;
	  //console.log(content[key]);
	}
	else content[key] = "";
  } 
  
  this.getValue = function() {
    return content;
  }
  this.clear = function() {
      for(key in content) {
        delete content[key];
      }
  }
  
  this.validate = function() {
     	var check = [];
	for (var key in content) {
	  if (key in toCheck){
	    switch(key) {
	      case 'name':
		  var name_pattern = /[А-Яа-я]+/;
		    var check_name = name_pattern.test(content[key]);
		    if (check_name == false) check.push(key);
		    break;
		  case 'lastName':
		  var last_pattern = /[А-Яа-я]+/;
		    var check_last = last_pattern.test(content[key]);
		    if (check_last == false) check.push(key);
		    break;
		  case 'middleName': 
		    var middle_pattern = /[А-Яа-я]+/;
		    var check_middle = middle_pattern.test(content[key]);
		    if (check_middle == false) check.push(key);
		    break;
		  case 'dateBirth':
		    var date_pattern = /[0-9]{2}/;
		    var check_date = date_pattern.test(content[key]);
		    if (check_date == false) check.push(key);
		    break;
		  case 'yearBirth':
		    var year_pattern = /[0-9]{4}/;
		    var check_year = year_pattern.test(content[key]);
		    if (check_year == false)check.push(key);
		    break;
		  case 'persNumber':
		    var inn_pattern = /[0-9]{10}/;
		    var check_inn = inn_pattern.test(content[key]);
		    if (check_inn == false) check.push(key);
		    break;
		  case 'passport':
		    var passp_pattern = /[А-Яа-я]{2}[0-9]{6}/;
		    var check_passp = passp_pattern.test(content[key]);
		    if (check_passp == false) check.push(key);
		    break;
		  }	
		}

     }
	  return check;
	}
  
  
  return this;
}

