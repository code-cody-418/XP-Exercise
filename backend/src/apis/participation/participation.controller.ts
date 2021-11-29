import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {insertParticipation} from "../../utils/participation/insertParticipation";
import {Participation} from "../../utils/interfaces/Participation";
import {getEventByEventName} from "../../utils/events/getEventByEventName";
import {Event} from "../../utils/interfaces/Event";
import {Status} from "../../utils/interfaces/Status";

export const postParticipation = async (request: Request, response: Response): Promise<Response | undefined> => {
    try {
        const profile = <Profile>request.session?.profile
        const participationProfileId = <string>profile.profileId

        //gets the event id from a passed event Name
        const eventName = request.params
        const events = await getEventByEventName(eventName)
        const participationEventId = events.eventId


        const result = await insertParticipation(participationProfileId, participationEventId)

        const status: Status = {
            status: 200,
            message: result ?? 'Participation created Successfully',
            data: null
        }
        return response.json(status)
    } catch (error: any) {
        console.log(error)
        throw error
    }
}
