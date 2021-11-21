interface Action {
    type: string,
    payload: object
}

const initialState = {
    workTimer: 1800,
    relaxTimer: 15,
};

export const app = (state = initialState, action: Action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}