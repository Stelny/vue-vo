import { EActivityType } from "./../../types/Activity";
import { TUser } from "./../../types/User";
import { ORDER_SHEETS } from "./orderSheet";

export const USERS: TUser[] = [
    {
        id: "AK458",
        name: "Tomáš",
        surname: "Omáčka",
    },
    {
        id: "BW548",
        name: "Tonda",
        surname: "Mup",
        activity: {
            id: "1",
            activityType: EActivityType.ORDER_SHEET,
            startDate: new Date(2023, 7, 16, 13, 30, 45),
            orderSheet: ORDER_SHEETS[0]
        }
    },
    {
        id: "K55OS",
        name: "Jaroslav",
        surname: "Blažek"
    },
    {
        id: "POS25",
        name: "Jirka",
        surname: "Karman"
    },
] 