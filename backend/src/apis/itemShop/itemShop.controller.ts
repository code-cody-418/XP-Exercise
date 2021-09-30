import {Request, Response} from "express";
import {selectItemShopByItemShopProfileId} from "../../utils/itemShop/selectItemShopByItemShopProfileId";
import {Status} from "../../utils/interfaces/Status";
import {ItemShop} from "../../utils/interfaces/ItemShop";
import {Profile} from "../../utils/interfaces/Profile";
import {insertItemShop} from "../../utils/itemShop/insertItemShop";
import {updateItemShop} from "../../utils/itemShop/updateItemShop";

//this gets the itemShop Data
export async function getItemShopByItemShopProfileId(request: Request, response: Response): Promise<Response> {
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

//this adds itemShop to profile
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

//This changes the boolean value of the item to be purchased
export async function putItemShop(request: Request, response: Response): Promise<Response> {
    try {
        const {itemShopProfileId} = request.params
        const {itemShopId, itemShopTenDollarGiftCard, itemShopTwentyDollarGiftCard, itemShopDemonSlayerGame} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId

        const preformUpdate = async (itemShop: ItemShop): Promise<Response> => {
            const previousItemShop: ItemShop = await selectItemShopByItemShopProfileId(<string>itemShopProfileId)
            const newItemShop: ItemShop = {...previousItemShop, ...itemShop}
            await updateItemShop(newItemShop)
            return response.json({status: 200, data: null, message: "Wahoo! itemShop Successfully Updated"})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        return itemShopProfileId === profileIdFromSession
            ? preformUpdate({
               itemShopId, itemShopProfileId, itemShopTenDollarGiftCard, itemShopTwentyDollarGiftCard, itemShopDemonSlayerGame
            })
            : updateFailed("Not allowed to do this update sucker fool. Please sign in")
    } catch
        (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

