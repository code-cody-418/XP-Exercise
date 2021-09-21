import {httpConfig} from "../utils/http-config";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {useDispatch} from "react-redux";


export const expUp = (profile) => {
    console.log("is this expUp firing?")

    const dispatch = useDispatch()

    if (profile === null) {
    } else if (profile != null) {
        httpConfig.put(`/apis/profile/expUp/${profile.profileId}`, profile)
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                        dispatch(fetchProfileByProfileId(profile.profileId));
                    }
                    console.log(reply);
                }
            );
    }
}

//function to call api that adds a Exp to profile
export const levelUp = (profile) => {
    console.log("is this levelUp firing?")
    const dispatch = useDispatch()
    if (profile === null) {
    } else if (profile != null) {
        if ((profile.profileExp + '').indexOf('00') > -1 === true) {
            httpConfig.put(`/apis/profile/levelUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        console.log(reply);
                    }
                );
        }
    }
}

//function to call api that adds a coin to profile
export const coinUp = (profile) => {
    const dispatch = useDispatch()
    console.log("is this coinUp firing?")
    if (profile === null) {
    } else if (profile != null) {
        httpConfig.put(`/apis/profile/coinUp/${profile.profileId}`, profile)
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                        dispatch(fetchProfileByProfileId(profile.profileId));
                    }
                    console.log(reply);
                }
            );
    }
}
