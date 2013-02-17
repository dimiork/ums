// Этот блок кода отвечает за переключение между вкладками 
	 
      var tab_switch = function (new_tab, new_content) {
        
		var contents = document.getElementsByClassName('content');
		
		for (var i = 0; i < contents.length; i++)
		{
		 contents[i].style.display = 'none';
		}

        document.getElementById(new_content).style.display = 'block';
		
		// Сделать рефакторинг
        tab_1.className = '';
        tab_2.className = '';
        tab_3.className = '';
		tab_4.className = '';
		tab_5.className = '';
		
        document.getElementById(new_tab).className = 'active';     
		
 }

var handler_tab = function(event) {

var target = event.target;

	 // Сделать рефакторинг
	 if (target.id === 'tab_1') tab_switch(target.id, 'content_1'); 
	 if (target.id === 'tab_2') tab_switch(target.id, 'content_2');
	 if (target.id === 'tab_3') tab_switch(target.id, 'content_3');
	 if (target.id === 'tab_4') tab_switch(target.id, 'content_4');
	 if (target.id === 'tab_5') tab_switch(target.id, 'content_5');	 

       event.preventDefault();
	   
	   // Собираем данные и заносим в модель
	   /*
	   addModel();
       insertData();
       */
}

