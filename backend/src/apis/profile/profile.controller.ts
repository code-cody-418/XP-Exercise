import {Request, Response} from "express";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";


export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}
