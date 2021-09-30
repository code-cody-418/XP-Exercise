import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {itemShopValidator} from "./itemShop.validator";
import {
    addItemShop,
    getItemShopByItemShopProfileId,
    putItemShop,
} from "./itemShop.controller";

export const itemShopRoute = Router()

itemShopRoute.route('/:itemShopProfileId')
    .get(
        asyncValidatorController([check("itemShopProfileId", "Please provide a valid itemShopProfileId").isUUID()
        ])
        , getItemShopByItemShopProfileId
    )

itemShopRoute.route('/')
    .post(
        isLoggedIn,
        asyncValidatorController(checkSchema(itemShopValidator)),
        addItemShop
    )

itemShopRoute.route('/updateItemShop/:itemShopProfileId')
    .put(
        isLoggedIn,
        asyncValidatorController(checkSchema(itemShopValidator)),
        putItemShop
    )
