import { LightTheme } from '../../Styles/Themes/LightTheme';
import { arrTheme } from '../../Styles/Themes/ThemeManager';

const initialState = {
    icon:'fa fa-moon',
	btnName: 'DARK',
	theme: LightTheme,
};

const ThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'change_theme': {
            let updateTheme = [...arrTheme];
            let newTheme = updateTheme.find(theme => theme.btnName !== action.themeName);
            state = {...newTheme};
			return { ...state };
		}
		default:
    }
    return {...state};
};

export default ThemeReducer;
