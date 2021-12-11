// Payloads
export interface initConcentrationTimeInterface {
    initConcentrationTime: number
};

export interface initRelaxTimeInterface {
    initRelaxTime: number
};


// Types
export const SET_NEW_CONCENTRATION_TIME = "SET_NEW_CONCENTRATION_TIME";
export const SET_NEW_RELAX_TIME = "SET_NEW_RELAX_TIME";

// Actions
interface SetNewConcentrationTime {
    readonly type: typeof SET_NEW_CONCENTRATION_TIME,
    payload: initConcentrationTimeInterface
}

interface SetNewRelaxTime {
    readonly type: typeof SET_NEW_RELAX_TIME,
    payload: initRelaxTimeInterface
}

export type TimerActionTypes = SetNewConcentrationTime | SetNewRelaxTime;