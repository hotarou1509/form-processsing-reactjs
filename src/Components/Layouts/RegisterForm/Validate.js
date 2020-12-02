export const validateInput = (checkingField, checkingText) => {
	let errList = [];
	let isValid = checkEmpty(checkingText).isInputValid;
	errList.push(checkEmpty(checkingText).errorMessage);
	switch (checkingField) {
		case 'taiKhoan': {
			errList.push(validateTaiKhoan(checkingText).errorMessage);
			isValid &= validateTaiKhoan(checkingText).isInputValid;
			break;
		}
		case 'hoTen': {
			errList.push(validateHoTen(checkingText).errorMessage);
			isValid &= validateHoTen(checkingText).isInputValid;
			break;
		}
		case 'email': {
			errList.push(validateEmail(checkingText).errorMessage);
			isValid &= validateEmail(checkingText).isInputValid;
			break;
		}
		case 'SDT': {
			errList.push(validateSDT(checkingText).errorMessage);
			isValid &= validateSDT(checkingText).isInputValid;
			break;
		}
		default:
			break;
	}
	return { errList, isValid };
};

const checkEmpty = (checkingText) => {
	if (!checkingText.trim()) {
		return {
			isInputValid: false,
			errorMessage: `(*) Mục này không được bỏ trống.`,
		};
	} else {
		return {
			isInputValid: true,
			errorMessage: '',
		};
	}
};

const validateTaiKhoan = (checkingText) => {
	const regexp = /^[a-zA-Z0-9]+$/;
	const checkingResult = regexp.exec(checkingText);
	if (checkingResult !== null) {
		return { isInputValid: true, errorMessage: '' };
	} else {
		return {
			isInputValid: false,
			errorMessage: '(*) Tên tài khoản chỉ bao gồm chữ và số.',
		};
	}
};

const validateSDT = (checkingText) => {
	const regexp = /^\d{10,11}$/;
	const checkingResult = regexp.exec(checkingText);
	if (checkingResult !== null) {
		return { isInputValid: true, errorMessage: '' };
	} else {
		return {
			isInputValid: false,
			errorMessage: '(*) Số điện thoại phải có 10 - 11 chữ số.',
		};
	}
};

const validateEmail = (checkingText) => {
	const regexp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
	const checkingResult = regexp.exec(checkingText);
	if (checkingResult !== null) {
		return { isInputValid: true, errorMessage: '' };
	} else {
		return {
			isInputValid: false,
			errorMessage: '(*) Email không hợp lệ.',
		};
	}
};

const formatString = (str) => {
	if (str === null || str === undefined) return str;
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
	str = str.replace(/đ/g, 'd');
	return str;
};

const validateHoTen = (checkingText) => {
	const regexp = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;
	const checkingResult = regexp.exec(formatString(checkingText));
	if (checkingResult !== null) {
		return { isInputValid: true, errorMessage: '' };
	} else {
		return {
			isInputValid: false,
			errorMessage: '(*) Họ tên chỉ bao gồm chữ cái',
		};
	}
};
