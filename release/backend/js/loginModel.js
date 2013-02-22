function LoginEvents() {
	this.login = static_login;
	this.loginCallback = static_loginCallback;
	return this;
}

function static_login(login, password) {
	// create an empty associative array (Object)
	var credentials = {}; // {} is a shortcut for "new Object()"
	// add a key named login
	credentials.login = login; // we can do that because "login" is a constant
	// and conforms to id rules
	credentials.password = password; // we can do that because "password" is a constant
	// post login credentials and set callback
	var resp = (new XHR()).post('index.php/login', JSON.stringify(credentials), this.loginCallback);
}

// pocess server login response

function static_loginCallback(loginResponse) {

	//var response = null;

	var respObj = JSON.parse(loginResponse, null);

	console.log(respObj);

	if (respObj.status=='OK') {
		// OK auth response processing
        (new XHR()).get('search.html',
            function (resp){
                content.innerHTML=resp;
            }
        );
	}else{
		// FAIL auth response processing
		content.innerHTML=respObj.message;
	};
}