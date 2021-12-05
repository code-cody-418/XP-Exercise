import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";

//Update participation to complete
export async function updateParticipationCompletedByProfileId(profile: Profile) {
    try {

        const mysqlConnection = await connect();
        const query : string = 'UPDATE participation SET participationCompleted = true WHERE participationProfileId = UUID_TO_BIN(:profile)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}



