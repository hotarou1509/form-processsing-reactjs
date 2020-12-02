import React, { Component } from 'react';
import { Button, ButtonToggleTheme } from '../../../Styles/Components/Button';
import { Background, Table } from './Styles';
import { connect } from 'react-redux';
import { changeThemeAction } from '../../../Redux/Actions/ThemeActions';
import { ThemeProvider } from 'styled-components';
import {
	deleteUserAction,
	editUserAction,
} from '../../../Redux/Actions/UserDataActions';
import { Scrollbars } from 'react-custom-scrollbars';

class UserList extends Component {
	renderTableBody = () => {
		if (this.props.userTable.length !== 0) {
			return this.props.userTable.map((info, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{info.taiKhoan}</td>
						<td>{info.hoTen}</td>
						<td>{info.matKhau}</td>
						<td>{info.email}</td>
						<td>{info.SDT}</td>
						<td>{info.loaiTK}</td>
						<td>
							<Button
								disabled={this.props.userListBtnsAreDisabled}
								className="userBtn"
								onClick={() => {
									this.props.dispatch(
										editUserAction(
											info,
											index,
											true,
											false,
											true,
										),
									);
								}}
							>
								<i className="fa fa-edit"></i>
							</Button>
							<Button
								disabled={this.props.userListBtnsAreDisabled}
								className="userBtn"
								onClick={() => {
									this.props.dispatch(
										deleteUserAction(index),
									);
								}}
							>
								<i className="fa fa-trash-alt"></i>
							</Button>
						</td>
					</tr>
				);
			});
		} else {
			return (
				<tr>
					<td colSpan="8" className="text-center">
						Chưa có tài khoản nào được tạo.
					</td>
				</tr>
			);
		}
	};

	render() {
		return (
			<ThemeProvider theme={this.props.theme}>
				
					<Background id="user-bg" className="container">
						<div className="d-flex justify-content-end">
							<ButtonToggleTheme
								onClick={() => {
									this.props.dispatch(
										changeThemeAction(this.props.btnName),
									);
								}}
							>
								<i className={this.props.icon}></i>{' '}
								{this.props.btnName}
							</ButtonToggleTheme>
						</div>
						<h3 className="text-center mb-5">
							Danh sách tài khoản
						</h3>
							<Scrollbars style={{ width: '100%', height: 520 }}>
						<Table className="table">
							<thead>
								<tr>
									<th>STT</th>
									<th>Tài khoản</th>
									<th>Họ tên</th>
									<th>Mật khẩu</th>
									<th>Email</th>
									<th>Số điện thoại</th>
									<th>Loại tài khoản</th>
									<th></th>
								</tr>
							</thead>
								<tbody>
									{this.renderTableBody()}
								</tbody>
						</Table>
							</Scrollbars>
					</Background>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		icon: state.ThemeReducer.icon,
		btnName: state.ThemeReducer.btnName,
		theme: state.ThemeReducer.theme,
		userTable: state.UserDataReducer.userTable,
		userListBtnsAreDisabled: state.UserDataReducer.userListBtnsAreDisabled,
	};
};

export default connect(mapStateToProps)(UserList);
