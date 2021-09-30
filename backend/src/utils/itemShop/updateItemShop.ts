import {connect} from "../database.utils";
import {ItemShop} from "../interfaces/ItemShop";

export async function updateItemShop(itemShop: ItemShop) {
    try {
        const mysqlConnection = await connect()
        const query = 'UPDATE itemShop SET itemShopTenDollarGiftCard = :itemShopTenDollarGiftCard, itemShopTwentyDollarGiftCard = :itemShopTwentyDollarGiftCard, itemShopDemonSlayerGame = :itemShopDemonSlayerGame WHERE itemShopProfileId = UUID_TO_BIN(:itemShopProfileId)'

        const [rows] = await mysqlConnection?.execute(query, itemShop)

        return 'itemShop successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}
