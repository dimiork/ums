var card_controller = new CardController();
var education_controller = new EducationController();



window.onload = function () {
    
card_controller.init();

var family_controller = new FamilyController();
family_controller.init();

var pgeducation_controller = new PgeducationController();
pgeducation_controller.init();

education_controller.init();

// Сделать рефакторинг
tab_1.onclick = tab_2.onclick = tab_3.onclick = tab_4.onclick = tab_5.onclick = handler_tab;

}
