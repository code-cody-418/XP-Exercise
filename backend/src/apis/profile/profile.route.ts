import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getProfileByProfileId} from "./profile.controller";
import {check} from "express-validator";


export const profileRoute = Router();

profileRoute.route("/:profileId")
.get(
    asyncValidatorController([
        check("profileId", "Please Provide a valid profileId").isUUID()
    ])
    , getProfileByProfileId
)
