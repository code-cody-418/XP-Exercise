import {connect} from "../database.utils";

export async function selectItemShopByItemShopProfileId(itemShopProfileId: string) {
    try {
        const mysqlConnection = await connect()

        const [rows] = await mysqlConnection?.execute('SELECT BIN_TO_UUID(itemShopId) AS itemShopId, BIN_TO_UUID(itemShopProfileId) as itemShopProfileId, itemShopTenDollarGiftCard, itemShopTwentyDollarGiftCard, itemShopDemonSlayerGame FROM itemShop WHERE itemShopProfileId = UUID_TO_BIN(:itemShopProfileId)', {itemShopProfileId})


        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined
    } catch (error) {
        console.log(error)
        return undefined
    }
}
