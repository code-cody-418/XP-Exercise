import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {
    getProfileByProfileId,
    putCoinsController,
    putExpController, putItemCost,
    putLevelController
} from "./profile.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {itemCostValidator, profileValidator} from "./profile.validator";


export const profileRoute = Router();

profileRoute.route('/coinUp/:profileId')
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putCoinsController)

profileRoute.route('/expUp/:profileId')
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putExpController)

profileRoute.route('/levelUp/:profileId')
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putLevelController)

profileRoute.route('/itemCost/:profileId')
    .put(isLoggedIn, asyncValidatorController(checkSchema(itemCostValidator)), putItemCost)

profileRoute.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "Please Provide a valid profileId").isUUID()
        ])
        , getProfileByProfileId
    )

