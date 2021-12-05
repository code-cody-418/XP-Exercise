import {Request, Response} from "express";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {
    updateProfileCoinsByProfileId,
    updateProfileCoinsBySubtractingItemCost
} from "../../utils/profile/updateProfileCoinsByProfileId";
import {updateProfileExpByProfileId} from "../../utils/profile/updateProfileExpByProfileId";
import {updateProfileLevelByProfileId} from "../../utils/profile/updateProfileLevelByProfileId";


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

export async function putCoinsController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId


        const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfileCoinsByProfileId(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? preformUpdate({profileId, profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail})
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function putItemCost(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {itemCost} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId


        const preformUpdate = async (itemCost: number) : Promise<Response> => {
            const previousProfile = await selectWholeProfileByProfileId(profileId)
            const newProfile = {...previousProfile, itemCost}
            console.log("newProfile", newProfile)
            await updateProfileCoinsBySubtractingItemCost(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? preformUpdate(itemCost)
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function putExpController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId


        const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfileExpByProfileId(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? preformUpdate({profileId, profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail})
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}


export async function putLevelController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId


        const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfileLevelByProfileId(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? preformUpdate({profileId, profileCoins, profileLevel, profileUserName, profileExp, profileAvatarUrl, profileEmail})
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}
