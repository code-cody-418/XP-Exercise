import {Router} from "express"
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {getItemShopByItemShopProfileId} from "../itemShop/itemShop.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {itemShopValidator} from "../itemShop/itemShop.validator";
import {postParticipation} from "./participation.controller";


export const participationRoute = Router()

participationRoute.route("/:participationProfileId")
    .get(asyncValidatorController([check("participationProfileId", "Please provide a valid participationProfileId").isUUID()]), getItemShopByItemShopProfileId
    )

participationRoute.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(itemShopValidator)), postParticipation)
