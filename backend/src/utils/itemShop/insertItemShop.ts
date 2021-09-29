import {connect} from "../database.utils";
import {ItemShop} from "../interfaces/ItemShop";

export const insertItemShop = async (itemShopProfileId: string) => {
    try {
        const mySqlConnection = await connect()
        const [rows] = await mySqlConnection?.execute('INSERT INTO itemShop(itemShopId, itemShopProfileId, itemShopTenDollarGiftCard, itemShopTwentyDollarGiftCard, itemShopDemonSlayerGame) VALUES (uuid_to_bin(uuid()), uuid_to_bin(:itemShopProfileId), false, false, false)', {itemShopProfileId})

        return 'itemShop created successfully'
    } catch (error) {
        console.log(error)
    }
}
