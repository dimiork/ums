
	function MainController() {


		var data = {};

		this.getData = function() {
			var card = card_controller.returnData();
			var education = education_controller.returnData();
			var pgeducation = pgeducation_controller.returnData();
			var family = family_controller.returnData();
			return this.mergeObj(card, education, pgeducation, family);

		}
		this.mergeObj = function(card, education, pgeducation, family) {
			
		    for (var attrname in card) { data[attrname] = card[attrname]; }
		    for (var attrname in education) { data[attrname] = education[attrname]; }
		    for (var attrname in pgeducation) { data[attrname] = pgeducation[attrname]; }
		    for (var attrname in family) { data[attrname] = family[attrname]; }
		    return data;
		

		}
	}