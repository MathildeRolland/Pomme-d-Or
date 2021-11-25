// Payloads
interface newHabbitInterface {
    newHabbit: string
}


// Types
export const SET_NEW_HABBIT = "SET_NEW_HABBIT";



// Actions Types
interface setNewHabbit {
    readonly type: typeof SET_NEW_HABBIT,
    payload: newHabbitInterface
}


export type habbitActionsTypes = setNewHabbit;