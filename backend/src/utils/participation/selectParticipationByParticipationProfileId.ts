//This gets the profile participation information

import {connect} from "../database.utils";

export const selectParticipationByParticipationProfileId = async (participationProfileId: string) => {
    try {
        const mysqlConnection = await connect()

        const [rows] = await mysqlConnection?.execute('SELECT BIN_TO_UUID(participationProfileId) AS participationProfileId, participationEventId, participationCoinReward, participationTime, participationCompleted FROM participation WHERE participationProfileId = UUID_TO_BIN(:participationProfileId)', (participationProfileId))
        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined
    } catch (error) {
        console.log(error)
        return undefined
    }

}
