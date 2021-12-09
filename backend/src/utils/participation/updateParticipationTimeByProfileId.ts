import {connect} from "../database.utils";

//increases participation time by 30 seconds
export async function updateParticipationTimeByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection?.execute('UPDATE participation SET participationTime = participationTime + 30 WHERE participationProfileId = UUID_TO_BIN(:profileId)', {profileId});

        return 'Profile successfully updated'
    } catch (e) {
        console.log(e)
        console.error(e)
        return null
    }
}




