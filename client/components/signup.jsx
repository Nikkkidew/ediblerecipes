// import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
// import '../src/App.css';
import axios from 'axios';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
			email: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// componentDidMount () {
	// 	// 	axios.get('http://localhost:3000/')
	// 	// 		.then(console.log("in here 2!"))
	// 	// }

	// 	setTimeout(() => {
	// 		fetch('http://localhost:3000/', {
	// 			method: 'GET',
	// 			mode: 'same-origin',
	// 			credentials: 'include', // Don't forget to specify this if you need cookies
	// 		})
	// 	}, 500)
	// }

	handleChange (e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			...this.state,
			[name]: value,
		});
	}

	onSubmit (e) {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			password: this.state.password,
			email: this.state.email,
		};

		console.log(newUser);
		//ask Grace and Wilmer about secretKey
		axios.post('/signUp', newUser).then((res) => console.log(res.data));

		this.setState({
			name: '',
			password: '',
			email: '',
		});

		this.props.history.push('/login');
		// this command above returns you to the homepage
	}

	render () {
		return (
			<div style={{ marginTop: 20 }}>
				<h2>Sign Up</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input
							name="name"
							type="text"
							className="form-control"
							defaultValue={this.state.name}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group">
						<label>Password </label>
						<input
							name="password"
							type="password"
							className="form-control"
							defaultValue={this.state.password}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group">
						<label>Email: </label>
						<input
							type="text"
							name="email"
							className="form-control"
							defaultValue={this.state.email}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form-group">
						<input
							type="submit"
							defaultValue="Create New User"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
			// </div>
		);
	}
}
