import React, { Component } from 'react';
import RegisterForm from './Layouts/RegisterForm/RegisterForm';
import UserList from './Layouts/UserList/UserList';

export default class UserManagement extends Component {
	render() {
		return (
			<div className="row container-fluid p-0 m-0" style={{'fontFamily': 'Noto Serif'}}>
				<div className="col-4 p-0 m-0">
					<RegisterForm />
				</div>
				<div className="col-8 p-0 m-0">
					<UserList />
				</div>
			</div>
		);
	}
}
