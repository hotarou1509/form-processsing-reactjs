import {
	add_user,
	delete_user,
	edit_user,
	update_user,
} from '../Types/UserDataTypes';

const initialState = {
	userTable: [],

	editInfo: {},
	editID: {},
	signUpBtnIsDisabled: false,
	updateBtnIsDisabled: true,
	userListBtnsAreDisabled: false,
};

const UserDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_user: {
			let [taiKhoan, matKhau, email, hoTen, SDT, loaiTK] = action.newUser;
			let userInfo = {
				taiKhoan: taiKhoan.value,
				matKhau: matKhau.value,
				email: email.value,
				hoTen: hoTen.value,
				SDT: SDT.value,
				loaiTK: loaiTK.value,
			};
			let updateUserTable = [...state.userTable];
			updateUserTable.push(userInfo);
			state.userTable = updateUserTable;
			return { ...state };
		}
		case edit_user: {
			state.editInfo = action.userInfo;
			state.editID = action.userID;
			state.signUpBtnIsDisabled = action.signUpBtnIsDisabled;
			state.updateBtnIsDisabled = action.updateBtnIsDisabled;
			state.userListBtnsAreDisabled = action.userListBtnsAreDisabled;
			return {
				...state,
			};
		}
		case update_user: {
			let [
				taiKhoan,
				matKhau,
				email,
				hoTen,
				SDT,
				loaiTK,
			] = action.updateInfo;
			let newInfo = {
				taiKhoan: taiKhoan.value,
				matKhau: matKhau.value,
				email: email.value,
				hoTen: hoTen.value,
				SDT: SDT.value,
				loaiTK: loaiTK.value,
			};
			let updateUserTable = [...state.userTable];
			updateUserTable[state.editID] = newInfo;
			state.userTable = updateUserTable;
			state.signUpBtnIsDisabled = action.signUpBtnIsDisabled;
			state.updateBtnIsDisabled = action.updateBtnIsDisabled;
			state.userListBtnsAreDisabled = action.userListBtnsAreDisabled;
			return { ...state };
		}
		case delete_user: {
			let updateUserTable = [...state.userTable];
			updateUserTable.splice(action.userID, 1);
			state.userTable = updateUserTable;
			state.editID = {};
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default UserDataReducer;
