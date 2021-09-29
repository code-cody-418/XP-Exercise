import {Request, Response} from "express";
import {selectItemShopByItemShopProfileId} from "../../utils/itemShop/selectItemShopByItemShopProfileId";
import {Status} from "../../utils/interfaces/Status";
import {ItemShop} from "../../utils/interfaces/ItemShop";

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
