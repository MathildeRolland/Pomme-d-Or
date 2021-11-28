// payload
export interface themeInterface {
    theme: string,
}

// Types
export const SWITCH_THEME = "SWITCH_THEME";

// Actions types
interface switchTheme {
    readonly type: typeof SWITCH_THEME,
    payload: themeInterface 
}

export type UtilsActionsTypes = switchTheme;