// Payloads
export interface initConcentrationTimeInterface {
    initConcentrationTime: number
};

export interface initRelaxTimeInterface {
    initRelaxTime: number
};

export interface isConcentrationModeOnInterface{
    isConcentrationModeOn: boolean
}

export interface isRelaxModeOnInterface{
    isRelaxModeOn: boolean
}

// Types
export const INIT_CONCENTRATION_TIME = "INIT_CONCENTRATION_TIME";
export const INIT_RELAX_TIME = "INIT_RELAX_TIME";
export const SET_IS_CONCENTRATION_MODE_ON = "SET_IS_CONCENTRATION_MODE_ON";
export const SET_IS_RELAX_MODE_ON = "SET_IS_RELAX_MODE_ON";

// Actions
interface InitConcentrationTime {
    readonly type: typeof INIT_CONCENTRATION_TIME,
    payload: initConcentrationTimeInterface
}

interface InitRelaxTime {
    readonly type: typeof INIT_RELAX_TIME,
    payload: initRelaxTimeInterface
}

interface setIsConcentrationModeOn {
    readonly type: typeof SET_IS_CONCENTRATION_MODE_ON,
    payload: isConcentrationModeOnInterface
}

interface setIsRelaxModeOn {
    readonly type: typeof SET_IS_RELAX_MODE_ON,
    payload: isRelaxModeOnInterface
}

export type TimerActionTypes = InitConcentrationTime | InitRelaxTime | setIsConcentrationModeOn | setIsRelaxModeOn;