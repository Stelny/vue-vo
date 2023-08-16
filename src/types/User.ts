import { TActivity } from "./Activity"

export type TUser = {
    id: string
    name: string
    surname: string
    activity?: TActivity
}