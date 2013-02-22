window.onload = function() {
	var events = new LoginController(new LoginEvents());
} // end of onload

function LoginController(parent_class) {
	dologin.onclick = function() {
		parent_class.login(login.value, password.value);
	}
}