function SearchModel()
{
	var searchedCards = [{
		'main':[{
			'last_name': 'Gopkalo',
			'first_name': 'Filip',
			'middle_name': 'Vladimirovich',
			'age': 21,
			'study': 3,
			'army': 0,
			'sex': 'm'
		}]
	}, {
		'main':[{
			'last_name': 'Gopkalo',
			'first_name': 'Nikita',
			'middle_name': 'Vladimirovich',
			'age': 26,
			'study': 5,
			'army': 0,
			'sex': 'm'
		}]
	}],
		valuesArray = [],
		updatedCards = [];
	console.log(searchedCards[0]['main']);

	this.setCardsArray = function(array) {//я передаю тебе массив карточек, пришедших с сервера
		searchedCards = array;
	}

	this.setValuesArray = function(array) {//передаю тебе массив значений расширенного поиска
		valuesArray = array;
	}

	this.getUpdateCards = function() {//ты возвращаешь массив с отсеянными картами
		return updateCards;
	}

	return this;
}