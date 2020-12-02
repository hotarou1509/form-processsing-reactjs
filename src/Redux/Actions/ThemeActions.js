import {change_theme} from '../Types/ThemeTypes';

export const changeThemeAction = (themeName) => ({
    type: change_theme,
    themeName
})