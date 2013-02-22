// модель работы с Образованием Разраб: Ростик


function EducationModel() {
  
  var data = {};
  this.save = function(key, value) {
    data[key] = value;
    console.log("data saved to model");
    console.log(data);
  },
  this.returnData = function(num) {
    if(this.isEmpty(data)===true) {
        console.log("get data from DB");
        data = this.testData();
    } 
    if(num) return data[num];
      return data;
  }
  this.returntest = function(num) {
    if(num) return data[num];
      return data;
  }
  this.clear = function() {
      for(key in data) {
        delete data[key];
      }
  }
  this.isEmpty = function(obj) {
    for(var i in obj) {
      if(obj.hasOwnProperty(i)) {
        return false;
      }
    }
    return true;
  }
  this.testData = function() {
    return {"0":{"name":"1","lastname":"2","year":"3","address":"a","phone":"b","gender":"c"}};
  }

  this.validation = function() {

  }

}