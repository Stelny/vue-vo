import { EOrderSheetState } from "./../../types/OrderSheet";
import { EActivityType, TActivity, TActivityType } from "./../../types/Activity";

export const ACTIVITY_TYPES: TActivityType[] = [
    {
        type: EActivityType.BREAK,
        name: "Pauza",
        hex: "#5353C4"
    },
    {
        type: EActivityType.CLEANING,
        name: "Úklid",
        hex: "#268241"
    },
]

export const ACTIVITIES: TActivity[] = [
    {
        id: '1',
        activityType: EActivityType.ORDER_SHEET,
        startDate: new Date(),
        orderSheet: {
            id: '101',
            name: 'Order Sheet 1',
            state: EOrderSheetState.WAITING
        }
    },
    {
        id: '2',
        activityType: EActivityType.BREAK,
        startDate: new Date()
    },
    {
        id: '3',
        activityType: EActivityType.CLEANING,
        startDate: new Date()
    },
    {
        id: '4',
        activityType: EActivityType.ORDER_SHEET,
        startDate: new Date(),
        orderSheet: {
            id: '102',
            name: 'Order Sheet 2',
            state: EOrderSheetState.WORKING
        }
    },
    {
        id: '5',
        activityType: EActivityType.BREAK,
        startDate: new Date()
    },
    {
        id: '6',
        activityType: EActivityType.CLEANING,
        startDate: new Date()
    },
    {
        id: '7',
        activityType: EActivityType.ORDER_SHEET,
        startDate: new Date(),
        orderSheet: {
            id: '103',
            name: 'Order Sheet 3',
            state: EOrderSheetState.COMPLETE
        }
    },
    {
        id: '8',
        activityType: EActivityType.BREAK,
        startDate: new Date()
    },
    {
        id: '9',
        activityType: EActivityType.CLEANING,
        startDate: new Date()
    },
    {
        id: '10',
        activityType: EActivityType.ORDER_SHEET,
        startDate: new Date(),
        orderSheet: {
            id: '104',
            name: 'Order Sheet 4',
            state: EOrderSheetState.WAITING
        }
    }
];