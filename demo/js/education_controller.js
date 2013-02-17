i=0;

function EducationController() {
  var education_model = new EducationModel();

  this.init = function() {
    var form1 = document.getElementById("form1");
    var button = form1.getElementsByTagName("button");
      for(key in button) {
        button[key].onclick = function() {
          deleteField(this);
      }
    }
    edu_addField.onclick = function() {
      addField();
    }
  }

  this.toModel = function() {
    education_model.clear();
    var fields = document.getElementById("form1").getElementsByTagName("div");
    var fields2 = document.getElementById("form2").getElementsByTagName("div");
    for(key in fields) {
      if (fields.hasOwnProperty(key)) {
        if(key!=="length") {
          var inputs = fields[key].getElementsByTagName("input");
          var hash = {};
          for(jey in inputs) {
            if (inputs.hasOwnProperty(jey)) {
              if(jey!=="length") {
                hash[inputs[jey].className]=inputs[jey].value;
              } // // enf of first cycle validation 2
            }   // enf of second cycle validation 1
          }  // end of second cycle
          education_model.save(key, hash);
        }  // enf of first cycle validation 2 (length)
      }  // enf of first cycle validation 1
    }  // end of first cycle
    for(key2 in fields2) {
      if (fields2.hasOwnProperty(key2)) {
        if(key2!=="length") {
          var inputs2 = fields2[key2].getElementsByTagName("input");
          var hash2 = {};
          for(jey2 in inputs2) {
            if (inputs2.hasOwnProperty(jey2)) {
              if(jey2!=="length") {
                hash2[inputs2[jey2].className]=inputs2[jey2].value;
              } // // enf of first cycle validation 2     
            }   // enf of second cycle validation 1
          }  // end of second cycle
          var extended = education_controller.mergeObjects(education_model.returnData(key2), hash2);
          education_model.save(key2, extended);
        }  // enf of first cycle validation 2 (length)
      }  // enf of first cycle validation 1
    }  // end of first cycle
  }

  this.testmo = function() {
    return education_model.returnData();
  }

  this.renderEdit = function() {
    var element = document.getElementById("education2");
    // если в главном блоке что-то есть, удаляем
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    var educationObject = education_model.returnData();
    var el1 = document.createElement("div");
    var el2 = document.createElement("div");
    el1.id = "form1";
    el2.id = "form2";
    element.appendChild(el1);
    element.appendChild(el2);
    
    var title1 = document.createElement("div");
    var title2 = document.createElement("div");
    title1.innerHTML = "<span>Назва освiтнього закладу</span><span>Диплом, свiдоцтво(номер)</span><span>Рiк закiнчення</span>";
    title2.innerHTML = "<span>Спецiальнiсть</span><span>Квалiфiкацiя</span><span>Форма навчання</span>";
    element.insertBefore(title1, form1);
    element.insertBefore(title2, form2);
    
    var btn_add = document.createElement("button");
    btn_add.id = "edu_addField";
    btn_add.innerHTML = "ADD";
    element.appendChild(btn_add);
    for(key in educationObject) {
      var element1 = document.createElement("div");
      var element2 = document.createElement("div");
      element1.className = "education"+key;
      element2.className = "education"+key;
      element1.innerHTML = "<input value="+educationObject[key].educationalInstitutionName+" class=\"educationalInstitutionName\" /> <input value='"+educationObject[key].diplomaSerialNumber+"' class=\"diplomaSerialNumber\" /> <input value='"+educationObject[key].endYear+"' class=\"endYear\" /> <button>delete</button>";
      element2.innerHTML = "<input value="+educationObject[key].profession+" class=\"profession\" /> <input value='"+educationObject[key].qualification+"' class=\"qualification\" /> <input value='"+educationObject[key].learningForm+"' class=\"learningForm\" />";
      form1.appendChild(element1);
      form2.appendChild(element2);
    }
    education_controller.init();
  }

  this.mergeObjects = function(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }
}  // END OF <education_controller>
 








//  helper scripts for table layout Education

  function validateForm(type) {
    // refactoring: validation must loop around the fields and get info about the unfilled
    if(type==="add") {
        var num = form1.children.length - 1;
        var firstField = form1.getElementsByTagName("div")[num];
        var inputs = firstField.getElementsByTagName("input");
        if(inputs[0].value!="" && inputs[1].value!="" && inputs[2].value!="") {
           return true;
        }     
    }
    if(type==="delete") {
      if(form1.children.length>1) {
        return true;
      }
    }
  }


  function addField() {
    if(validateForm("add")===true) {
    i++;
    var newElem1 = document.createElement("div");
    var newElem2 = document.createElement("div");
    newElem1.className = "education"+i;
    newElem2.className = "education"+i;
    var inner1 = "<input class=\"educationalInstitutionName\" value=\"\" /> <input class=\"diplomaSerialNumber\" value=\"\" /> <input class=\"endYear\" value=\"\" />";
    var inner2 = "<input class=\"profession\" value=\"\" /> <input class=\"qualification\" value=\"\" /> <input class=\"learningForm\" value=\"\" />";
    newElem1.innerHTML = inner1+" <button>delete</button>";
    newElem2.innerHTML = inner2;
    form1.appendChild(newElem1);
    form2.appendChild(newElem2);

    education_controller.init();
    }
  }


function deleteField(node) {
  if(validateForm("delete")===true) {
    var classname = document.getElementsByClassName(node.parentNode.className);
    while(classname[0]) {
      classname[0].parentNode.removeChild(classname[0]);
    }
  }
}