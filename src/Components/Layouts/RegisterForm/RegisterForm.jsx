import React, { Component } from 'react';
import { Button } from '../../../Styles/Components/Button';
import {
	Input,
	Span,
	Label,
	TextField,
	Select,
	ErrorMessage,
} from '../../../Styles/Components/TextField';
import { Background, Overlay } from './Styles';
import { connect } from 'react-redux';
import {
	addUserAction,
	updateUserAction,
} from '../../../Redux/Actions/UserDataActions';
import { validateInput } from './Validate';

class RegisterForm extends Component {
	/* STATE */
	state = {
		currentUser: [
			{ name: 'taiKhoan', value: '' },
			{ name: 'matKhau', value: '' },
			{ name: 'email', value: '' },
			{ name: 'hoTen', value: '' },
			{ name: 'SDT', value: '' },
			{ name: 'loaiTK', value: '' },
		],

		errorDisplay: [
			{ name: 'taiKhoan', value: false },
			{ name: 'matKhau', value: false },
			{ name: 'email', value: false },
			{ name: 'hoTen', value: false },
			{ name: 'SDT', value: false },
			{ name: 'loaiTK', value: false },
		],

		formIsValid: false,
	};

	/* DATA TO RENDER */
	formFields = [
		{ name: 'taiKhoan', inputType: 'text', label: 'Tài khoản' },
		{ name: 'matKhau', inputType: 'password', label: 'Mật khẩu' },
		{ name: 'email', inputType: 'text', label: 'Email' },
		{ name: 'hoTen', inputType: 'text', label: 'Họ tên' },
		{ name: 'SDT', inputType: 'text', label: 'Số điện thoại' },
		{ name: 'loaiTK', inputType: 'text', label: 'Loại tài khoản' },
	];

	options = [
		{ optID: 0, optName: '' },
		{ optID: 1, optName: 'Thường' },
		{ optID: 2, optName: 'VIP' },
		{ optID: 3, optName: 'Super VIP' },
	];

	/* SUPPORTED METHODS */
	getValueFromProps = (fieldName) => {
		switch (fieldName) {
			case 'taiKhoan':
				return this.props.editInfo.taiKhoan;
			case 'matKhau':
				return this.props.editInfo.matKhau;
			case 'email':
				return this.props.editInfo.email;
			case 'hoTen':
				return this.props.editInfo.hoTen;
			case 'SDT':
				return this.props.editInfo.SDT;
			case 'loaiTK':
				return this.props.editInfo.loaiTK;
			default:
				return null;
		}
	};

	bindingDataFromProps = () => {
		let updateUser = [...this.state.currentUser];
		updateUser.map((field) => {
			return (field.value = this.getValueFromProps(field.name));
		});
		this.setState({ currentUser: updateUser });
	};

	changeUserState = (changeValue, fieldName) => {
		let updateUser = [...this.state.currentUser];
		let editField = updateUser.find((item) => item.name === fieldName);
		editField.value = changeValue;
		this.setState({
			currentUser: updateUser,
		});
	};

	handleOnClick = (action) => {
		this.props.dispatch(action);
		this.resetErrorDisplay();
		this.formFields.map((field) => {
			return this.changeUserState('', field.name);
		});
	};

	checkFormValid = () => {
		let valid = this.state.currentUser.reduce((tichLuy, currentItem) => {
			return (tichLuy &= validateInput(
				currentItem.name,
				currentItem.value,
			).isValid);
		}, true);
		this.setState({
			formIsValid: valid,
		});
	};

	handleErrorDisplay = (fieldName) => {
		let errList = [...this.state.errorDisplay];
		errList.find((item) => item.name === fieldName).value = true;
		this.setState({
			errorDisplay: errList,
		});
	};

	resetErrorDisplay = () => {
		let errList = [...this.state.errorDisplay];
		errList.map((item) => {
			return (item.value = false);
		});
		this.setState({
			errorDisplay: errList,
		});
	};

	/* RENDERING */
	renderError = (fieldName) => {
		let displayErr = this.state.errorDisplay.find(
			(item) => item.name === fieldName,
		).value;
		if (displayErr) {
			let errList = validateInput(
				fieldName,
				this.state.currentUser.find((item) => item.name === fieldName)
					.value,
			).errList;
			return errList.map((err, index) => {
				return (
					<p key={index} className="mb-0 text-right text-danger">
						<i>{err}</i>
					</p>
				);
			});
		} else return;
	};

	renderSelect = (field, index) => {
		return (
			<TextField key={index}>
				<Select
					type={this.formFields.inputType}
					value={
						this.state.currentUser.find(
							(item) => item.name === field.name,
						).value
					}
					autoComplete="off"
					required
					onChange={(e) => {
						this.changeUserState(e.target.value, field.name);
						this.handleErrorDisplay(field.name);
					}}
				>
					{this.options.map((option, index) => {
						return (
							<option key={index} className="text-dark">
								{option.optName}
							</option>
						);
					})}
				</Select>
				<Label className="input-label">
					<Span className="input-content">{field.label}</Span>
				</Label>
				<ErrorMessage>{this.renderError(field.name)}</ErrorMessage>
			</TextField>
		);
	};

	renderInput = (field, index) => {
		return (
			<TextField key={index}>
				<Input
					value={
						this.state.currentUser.find(
							(item) => item.name === field.name,
						).value
					}
					type={field.inputType}
					name={field.name}
					autoComplete="off"
					required
					onChange={(e) => {
						this.changeUserState(e.target.value, field.name);
						this.handleErrorDisplay(field.name);
					}}
				/>
				<Label className="input-label">
					<Span className="input-content">{field.label}</Span>
				</Label>
				<ErrorMessage>{this.renderError(field.name)}</ErrorMessage>
			</TextField>
		);
	};

	renderForm = () => {
		return this.formFields.map((field, index) => {
			if (field.name === 'loaiTK') {
				return this.renderSelect(field, index);
			} else {
				return this.renderInput(field, index);
			}
		});
	};

	render() {
		return (
			<Background style={{ backgroundImage: "url('./img/bgImage.jpg')" }}>
				<Overlay>
					<h3 className="text-light text-center">FORM ĐĂNG KÝ</h3>
					{this.renderForm()}
					<div className="d-flex justify-content-center">
						<Button
							disabled={
								this.props.signUpBtnIsDisabled ||
								!this.state.formIsValid
							}
							type="submit"
							onClick={() => {
								this.handleOnClick(
									addUserAction(this.state.currentUser),
								);
							}}
						>
							Đăng ký
						</Button>
						<Button
							disabled={
								this.props.updateBtnIsDisabled ||
								!this.state.formIsValid
							}
							type="submit"
							onClick={() => {
								this.handleOnClick(
									// Nút 'CẬP NHẬT' chỉ được enable sau khi nhấn nút 'EDIT' trên table
									// Trong quá trình edit thông tin, disable tất cả các nút trên page(trừ nút 'CẬP NHẬT')
									// Sau khi nhấn 'UPDATE' trả lại trạng thái ban đầu cho các nút 
									updateUserAction(
										this.state.currentUser,
										false, // enable Nút 'ĐĂNG KÝ'
										true, // disable nút UPDATE
										false, // enable nút 'EDIT' và 'DELETE' trên Table
									),
								)
							}}
						>
							Cập nhật
						</Button>
					</div>
				</Overlay>
			</Background>
		);
	}

	/* LIFE CYCLE */
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.editInfo !== this.props.editInfo) {
			this.bindingDataFromProps();
		}
		if (prevState.currentUser !== this.state.currentUser) {
			this.checkFormValid();
		}
	}
}

const mapStateToProps = (state) => {
	return {
		editInfo: state.UserDataReducer.editInfo,
		editID: state.UserDataReducer.editID,
		signUpBtnIsDisabled: state.UserDataReducer.signUpBtnIsDisabled,
		updateBtnIsDisabled: state.UserDataReducer.updateBtnIsDisabled,
	};
};

export default connect(mapStateToProps)(RegisterForm);
