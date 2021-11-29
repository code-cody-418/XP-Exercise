import {connect} from "../database.utils";
import {Event} from "../interfaces/Event";


export const getEventByEventName = async (eventName: any) => {
    try {
        const mysqlConnection = await connect()

        const [rows] = await mysqlConnection?.execute('SELECT BIN_TO_UUID(eventId) AS participationProfileId, eventName, eventDescription FROM event WHERE eventName = :eventName', {eventName})

        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined
    } catch (error: any) {
        console.log(error)
        throw error
    }
}
