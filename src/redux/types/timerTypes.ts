export interface concentrationTimeInterface {
    concentrationTime: number,
};

export interface relaxTimeInterface {
    relaxTime: number
};

export const SET_NEW_CONCENTRATION_TIME = "SET_NEW_CONCENTRATION_TIME";
export const SET_NEW_RELAX_TIME = "SET_NEW_RELAX_TIME";

interface SetNewConcentrationTime {
    readonly type: typeof SET_NEW_CONCENTRATION_TIME,
    payload: concentrationTimeInterface
}

interface relaxTimer {
    readonly type: typeof SET_NEW_RELAX_TIME,
    payload: relaxTimeInterface
}

export type TimerActionTypes = SetNewConcentrationTime | relaxTimer;