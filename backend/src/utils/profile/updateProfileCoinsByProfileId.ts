import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";

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
