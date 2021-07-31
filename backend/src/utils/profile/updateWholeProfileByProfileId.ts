import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export const updateWholeProfileByProfileId = async (profile: Profile) => {
    try {

        const mysqlConnection = await connect();
        const query : string = 'update profile set profileActivationToken = :profileActivationToken, profileAvatarUrl = :profileAvatarUrl, profileCoins = :profileCoins, profileEmail = :profileEmail, profileExp = :profileExp, profileHash = :profileHash, profileLevel = :profileLevel, profileUsername = :profileUsername where profileId = uuid_to_bin(:profileId)';
    console.log(query, profile)
        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
};
