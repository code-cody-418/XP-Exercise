import {Schema} from "express-validator";

export const itemShopValidator : Schema = {
    itemShopId: {
        isUUID: {
            errorMessage: 'please provide a valid itemShopId'
        }
    },
    itemShopProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid itemShopId'
        }
    },
    itemShopTenDollarGiftCard: {
        isBoolean: {
            errorMessage: 'please provide boolean value'
        }
    }

}
