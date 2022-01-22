this.LoginPage = $page(
	'Login page',
	{
		password: "input[name='password_protected_pwd']",
		loginButton: 'id:wp-submit',
	},
	{
		loginAs: function (password) {
			this.password.typeText(password)
			this.loginButton.click()
		},
	}
)
