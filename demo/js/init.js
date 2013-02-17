window.onload = function() {
	
var card_controller = new CardController();
card_controller.init();

var family_controller = new FamilyController();
family_controller.init();

var pgeducation_controller = new PgeducationController();
pgeducation_controller.init();

var education_controller = new EducationController();
education_controller.init();

console.log("application is initialize");

}
