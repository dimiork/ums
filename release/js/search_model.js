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

	this.setCardsArray = function(array) {//� ������� ���� ������ ��������, ��������� � �������
		searchedCards = array;
	}

	this.setValuesArray = function(array) {//������� ���� ������ �������� ������������ ������
		valuesArray = array;
	}

	this.getUpdateCards = function() {//�� ����������� ������ � ���������� �������
		return updateCards;
	}

	return this;
}