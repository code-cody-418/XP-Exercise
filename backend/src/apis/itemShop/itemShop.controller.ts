import {Request, Response} from "express";
import {selectItemShopByItemShopProfileId} from "../../utils/itemShop/selectItemShopByItemShopProfileId";
import {Status} from "../../utils/interfaces/Status";
import {ItemShop} from "../../utils/interfaces/ItemShop";
import {Profile} from "../../utils/interfaces/Profile";
import {insertItemShop} from "../../utils/itemShop/insertItemShop";

export async function getItemShopByItemShopProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {itemShopProfileId} = request.params;
        const mySqlResult = await selectItemShopByItemShopProfileId(itemShopProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function addItemShop(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const profile = <Profile>request.session?.profile
        const itemShopProfileId = <string>profile.profileId

        const result = await insertItemShop(itemShopProfileId)
        const status: Status = {
            status: 200,
            message: result ?? 'itemShop created successfully',
            data: null
        }
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}
