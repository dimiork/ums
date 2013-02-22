
	function ViewController() {

		
		this.show_preview = function(hash) {
			console.log(hash);
			preview.style.display = "block";

			var education1Src = document.getElementById("education1Template").innerHTML;
	        var education1Tmpl = Handlebars.compile(education1Src);

	        var education2Src = document.getElementById("education2Template").innerHTML;
	        var education2Tmpl = Handlebars.compile(education2Src);

	        var familySrc = document.getElementById("familyTemplate").innerHTML;
	        var familyTmpl = Handlebars.compile(familySrc);

	        var postgraduateSrc = document.getElementById("postgraduateTemplate").innerHTML;
	        var postgraduateTmpl = Handlebars.compile(postgraduateSrc);

	        var card1Src = document.getElementById("card1Template").innerHTML;
	        var card1Tmpl = Handlebars.compile(card1Src);
	        
	        var card2Src = document.getElementById("card2Template").innerHTML;
	        var card2Tmpl = Handlebars.compile(card2Src);

	        var card3Src = document.getElementById("card3Template").innerHTML;
	        var card3Tmpl = Handlebars.compile(card3Src);



	        var json = hash; // {'anketa':{'lastName':'фамилия111','firstName':'имя111','middleName':'отчество','male':'1','army':'1','dateBirth':'12','monthBirth':'Січень','yearBirth':'1925','id':'12345698','INN':'инн','serial':'АА','number':'123654','passportDate':'дата выдачи паспорта','givenBy':'кем выдан','citizenship':'гражданство','postgraduate':'on','adyunkture':'on','doctoral':'on','latestJob':'останее мисто работы','profession':'йпоасада','dateReasonDismissal':'дата и причина увольнения','pensionInfo':'дланные пенсии','actualPlace':'адрес фактчиеского прожианивая','registrationPlace':'прописка адреса','undefined':''},'education':{'0':{'educationalInstitutionName':'нметау ','diplomaSerialNumber':'диплом','endYear':'1980','profession':'специальность','qualification':'квалифыикаия','learningForm':'дневная'},'1':{'educationalInstitutionName':'диит','diplomaSerialNumber':'диплом диита','endYear':'2010','profession':'специальность диита','qualification':'квалификация диита','learningForm':'ночная'}},'pgeducation':{},'family':{'1':['мама','фио','1236'],'2':['папа','фио','1368'],'3':['сын','афио','1588']}};

	        document.getElementById("preview_education1").innerHTML = education1Tmpl(json);
	        document.getElementById("preview_education2").innerHTML = education2Tmpl(json);
	        document.getElementById("preview_postgraduate").innerHTML = postgraduateTmpl(json);
	        document.getElementById("preview_family").innerHTML = familyTmpl(json);
	        document.getElementById("preview_card1").innerHTML = card1Tmpl(json);
	      	document.getElementById("preview_card2").innerHTML = card2Tmpl(json);
	       	document.getElementById("preview_card3").innerHTML = card3Tmpl(json);

		}
	}