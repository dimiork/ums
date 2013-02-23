function SearchController()
{
	var searchModel = new SearchModel();//creating model for storage found cards
		globalSearchValues = [],
		searchField = '';//value from View field for further searching of this string

	function ajaxResult(result) {
		cardArray = JSON.parse(result);
	}

	this.startSearch = function() {//этого скоро не будет
		buttonSearch.addEventListener("click", function() {
			//var facade = new SearchFacade(); /*client facade wich contains function wich returns array of cards*/
			//console.log(cardArray);
			searchModel.setCardsArray([]);//in the new stage of search cleaning up this array

			saveRegularSearchValues();//save regular search data
			saveAdvancedSearchValues();//save global search data
			
			searchModel.setValuesArray(globalSearchValues);
			//searchModel.setCardsArray(cardArray);
			
			//facade.sendRequest('index.php/search', searchField, ajaxResult);

			//console.log(searchModel.getUpdateCards());
			console.log(globalSearchValues);
		});
	}

	function saveRegularSearchValues() {
		searchField = LFP.value; //getting value from View field for further searching of this string
	}

	function saveAdvancedSearchValues() {//WARNING! Do not look at it :)
		globalSearchValues['age'] = getAge();
		globalSearchValues['sex'] = getSex();
		globalSearchValues['study'] = getStudy();
		globalSearchValues['army'] = getArmy();
	}
	
	//метод для запроса списка кард из модели
	this.getCards = function() {
		return searchModel.getUpdateCards();
	}

	this.initViewController = function() {
		var controller = new ViewController();//contains model
		controller.view(cardArray[i]);
	}
	
	function buttonEditView() {
		
	}

	return this;
}

//some dirty functions here
function getAge() {
	var a1 = parseInt(age1.value);
	var a2 = parseInt(age2.value);
	var age = [];

	if (a1 < a2) {
		for (i=a1; i<=a2; i++){
			age.push(i);
		}
	} else if (!a2 && a1 >= 18) {
		for (i=a1; i<=80; i++){
			age.push(i);
		}
	} else if (!a1 && a2 <= 80) {
		for (i=18; i<=a2; i++){
			age.push(i);
		}
	} else {
		console.log("Wrong interval");
	}
	return age;
}

function getSex() {
	if (m.checked) {
		return "m";
	} else if (f.checked) {
		return "f";
	} else {
		return "";
	}
}

function getStudy() {
	//0-базова загальна середня, 1-повна загальна середня, 2-професійно-технічна, 3-неповна вища, 4-базова вища, 5-повна вища
	switch (searchSelect.value)
	{
	case 'full_secondary':
		return [0, 1];
		break;
	case 'technological':
		return [0, 1, 2];
		break;
	case 'incomplete_high':
		return [0, 1, 2, 3];
		break;
	case 'basic_high':
		return [0, 1, 2, 3, 4];
		break;
	case 'complete_high':
		return [0, 1, 2, 3, 4, 5];
		break;
	default:
		return [0];
	}
}

function getArmy() {
	if (army_yes.checked) {
		return 1;
	} else if (army_no.checked) {
		return 0;
	} else {
		return "";
	}
}

function init() {
	var searchController = new SearchController();
	searchController.startSearch();
}

window.onload = init;


/*useless function for a while and may be for forever
function value_of_array_in_array(inner_array, outer_array) {
	for (i=0; i<=inner_array.length; i++) {
		for (j=0; j<=outer_array.length; i++) {
			if ((inner_array) && inner_array[i] === outer_array[j]) {
				return true;
			}
			break;
		}
	}
}*/