import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";

//increases coins by one
export async function updateProfileCoinsByProfileId(profile: Profile) {
    try {

        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileCoins = profileCoins + 1 WHERE profileId = UUID_TO_BIN(:profileId)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}

//Updates coins by subtracting the item cost. Item cost is passed from the frontend
export async function updateProfileCoinsBySubtractingItemCost(itemCost: number) {
    try {

        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileCoins = profileCoins - :itemCost WHERE profileId = UUID_TO_BIN(:profileId)';

        const [rows] = await mysqlConnection.execute(query, itemCost);
        return 'Coins successfully subtracted'
    } catch (e) {
        console.error(e)
        return null
    }
}
