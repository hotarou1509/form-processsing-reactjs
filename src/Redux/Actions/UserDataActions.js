import {
	add_user,
	delete_user,
	edit_user,
	update_user,
} from '../Types/UserDataTypes';

export const addUserAction = (newUser) => ({
	type: add_user,
	newUser,
});

export const deleteUserAction = (userID) => ({
	type: delete_user,
	userID,
});

export const editUserAction = (
	userInfo,
	userID,
	signUpBtnIsDisabled,
	updateBtnIsDisabled,
	userListBtnsAreDisabled,
) => ({
	type: edit_user,
	userInfo,
	userID,
	signUpBtnIsDisabled,
	updateBtnIsDisabled,
	userListBtnsAreDisabled,
});

export const updateUserAction = (
	updateInfo,
	signUpBtnIsDisabled,
	updateBtnIsDisabled,
	userListBtnsAreDisabled,
) => ({
	type: update_user,
	updateInfo,
	signUpBtnIsDisabled,
	updateBtnIsDisabled,
	userListBtnsAreDisabled,
});
