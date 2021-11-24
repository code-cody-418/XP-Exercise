import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";


export const participationRoute = Router()

participationRoute.route("/:participationProfileId")
    .get(asyncValidatorController([("participationProfileId", "Please provide a valid participationProfileId").isUUID()]), getParticipationByParticipationId
    )
