// Payloads
export interface initConcentrationTimeInterface {
    initConcentrationTime: number
};

export interface initRelaxTimeInterface {
    initRelaxTime: number
};

export interface concentrationTimeInterface {
    concentrationTime: number
};

export interface relaxTimeInterface {
    relaxTime: number
};

// Types
export const INIT_CONCENTRATION_TIME = "INIT_CONCENTRATION_TIME";
export const INIT_RELAX_TIME = "INIT_RELAX_TIME";
export const SET_NEW_CONCENTRATION_TIME = "SET_NEW_CONCENTRATION_TIME";
export const SET_NEW_RELAX_TIME = "SET_NEW_RELAX_TIME";

// Actions
interface InitConcentrationTime {
    readonly type: typeof INIT_CONCENTRATION_TIME,
    payload: initConcentrationTimeInterface
}

interface InitRelaxTime {
    readonly type: typeof INIT_RELAX_TIME,
    payload: initRelaxTimeInterface
}
interface SetNewConcentrationTime {
    readonly type: typeof SET_NEW_CONCENTRATION_TIME,
    payload: concentrationTimeInterface
}

interface relaxTimer {
    readonly type: typeof SET_NEW_RELAX_TIME,
    payload: relaxTimeInterface
}

export type TimerActionTypes = InitConcentrationTime | InitRelaxTime | SetNewConcentrationTime | relaxTimer;