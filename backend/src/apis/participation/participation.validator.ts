import {Schema} from "express-validator";

export const participationValidator: Schema = {
    participationProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid participationProfileId'
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    participationEventId: {
        isUUID: {
            errorMessage: 'Please provide a valid participationEventId'
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    participationCoinReward: {
        isInt: {
            errorMessage: "Please provide a valid Integer"
        },
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        }
    },
    participationTime: {
        isInt: {
            errorMessage: "Please provide a valid Integer"
        },
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        }
    },
    participationCompleted: {
        isBoolean: {
            errorMessage: "Please provide a boolean"
        },
        optional: {
            options: {
                nullable: true
            }
        }
    }
}
