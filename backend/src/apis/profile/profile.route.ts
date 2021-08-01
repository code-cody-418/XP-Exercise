import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getProfileByProfileId, putCoinsController, putExpController, putLevelController} from "./profile.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileValidator} from "./profile.validator";


export const profileRoute = Router();

profileRoute.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "Please Provide a valid profileId").isUUID()
        ])
        , getProfileByProfileId
    )
    // .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putCoinsController)
    // .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putExpController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putLevelController)
