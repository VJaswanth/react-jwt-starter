
var RegisterForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var author = this.refs.email.value.trim();
		var text = this.refs.password.value.trim();

		// form validation goes here
		if (!text || !author) {
		  return;
		}

		console.log('form submitted!');
		// TODO: send request to the server
		this.refs.email.value = '';
		this.refs.password.value = '';
		return;
	},
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='email' ref='email' placeholder='Email address' className='form-control' />
				<input type='password' ref='password' placeholder='Password' className='form-control' />
				<input type='submit' className='btn btn-primary' value='Register' />
			</form>
		);
	}
});

ReactDOM.render(<RegisterForm />, document.getElementById('registerForm'));