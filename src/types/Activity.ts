import { TOrderSheet } from "./OrderSheet";

export enum EActivityType {
    ORDER_SHEET,
    BREAK,
    CLEANING
}

export type TActivityType = {
    type: EActivityType,
    name: string,
    hex: string
}

export type TActivity = {
    id: string,
    activityType: EActivityType,
    startDate: Date | string,
    orderSheet?: TOrderSheet,
}

