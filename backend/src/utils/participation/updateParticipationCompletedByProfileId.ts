import {connect} from "../database.utils";

//Update participation to complete
export async function updateParticipationCompletedByProfileId(profileId: string) {
    try {

        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection?.execute('UPDATE participation SET participationCompleted = true WHERE participationProfileId = UUID_TO_BIN(:profileId)', {profileId}) ;

        // const [rows] = await mysqlConnection.execute(query, {profileId});
        return 'Participation Completed successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}



