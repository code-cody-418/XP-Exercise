import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export const insertProfile = async (profile: Profile) => {
    try {
        const mysqlConnection = await connect();
        const query : string = 'insert into profile(profileId, profileActivationToken, profileAvatarUrl, profileCoins, profileEmail, profileExp, profileHash, profileLevel, profileUsername) values (uuid_to_bin(uuid()), :profileActivationToken, :profileAvatarUrl, :profileCoins, :profileEmail, :profileExp, :profileHash, :profileLevel, :profileUsername)';

        const [rows] = await mysqlConnection.execute(query, profile)
        return 'Profile Successfully Created'
    } catch (e) {
        console.error(e)
        return null
    }
};
