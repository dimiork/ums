var card_controller = new CardController();
var education_controller = new EducationController();
var family_controller = new FamilyController();
var pgeducation_controller = new PgeducationController();
var main_controller = new MainController();




window.onload = function () {
    
card_controller.init();


family_controller.init();


pgeducation_controller.init();

education_controller.init();

// Сделать рефакторинг
tab_1.onclick = tab_2.onclick = tab_3.onclick = tab_4.onclick = tab_5.onclick = handler_tab;



}
