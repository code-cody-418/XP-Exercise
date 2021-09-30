import {Schema} from "express-validator";

export const itemShopValidator : Schema = {
    itemShopProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid itemShopId'
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    itemShopTenDollarGiftCard: {
        optional: {
            options: {
                nullable: true
            }
        },
        isBoolean: {
            errorMessage: 'please provide boolean value'
        }
    },
    itemShopTwentyDollarGiftCard: {
        optional: {
            options: {
                nullable: true
            }
        },
        isBoolean: {
            errorMessage: 'please provide boolean value'
        }
    },
    itemShopDemonSlayerGame: {
        optional: {
            options: {
                nullable: true
            }
        },
        isBoolean: {
            errorMessage: 'please provide boolean value'
        }
    }
}
