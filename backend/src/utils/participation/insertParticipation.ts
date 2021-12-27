// This is called when the profile starts the event


import {connect} from "../database.utils";

export const insertParticipation = async (participationProfileId: string, participationEventId: string) => {
    try {
        const mySqlConnection = await connect()
        const [rows] = await mySqlConnection?.execute('INSERT INTO participation(participationProfileId, participationEventId, participationCoinReward, participationTime, participationCompleted) VALUES (uuid_to_bin(:participationProfileId), uuid_to_bin(:participationEventId), false, 0, false)', {participationProfileId, participationEventId})
        return 'Participation created Successfully'
    } catch (error) {
        console.log(error)
        return 'Participation not created'
    }
}
