import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getParticipationByParticipationProfileId, postParticipation} from "./participation.controller";
import {participationValidator} from "./participation.validator";


export const participationRoute = Router()

participationRoute.route("/:participationProfileId")
    .get(asyncValidatorController([check("participationProfileId", "Please provide a valid participationProfileId").isUUID()]), getParticipationByParticipationProfileId
    )

participationRoute.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(participationValidator)), postParticipation)
