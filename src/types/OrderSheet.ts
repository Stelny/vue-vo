export enum EOrderSheetState {
    WAITING,
    WORKING,
    COMPLETE
}

export type TOrderSheetType = {
    state: EOrderSheetState, 
    name: string
}

export type TOrderSheet = {
    id: string;
    name: string;
    state: EOrderSheetState
}