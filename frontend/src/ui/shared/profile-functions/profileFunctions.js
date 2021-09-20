import {httpConfig} from "../utils/http-config";


export const expUp = (profile) => {
    if (profile === null) {
    } else if (profile != null) {
        httpConfig.put(`/apis/profile/expUp/${profile.profileId}`, profile)
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                    }
                    console.log(reply);
                }
            );
    }
}

//function to call api that adds a Exp to profile
export const levelUp = (profile) => {
    if (profile === null) {
    } else if (profile != null) {
        if ((profile.profileExp + '').indexOf('00') > -1 === true) {
            httpConfig.put(`/apis/profile/levelUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                        }
                        console.log(reply);
                    }
                );
        }
    }
}

//function to call api that adds a coin to profile
export const coinUp = (profile) => {
    if (profile === null) {
    } else if (profile != null) {
        httpConfig.put(`/apis/profile/coinUp/${profile.profileId}`, profile)
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply);
                    }
                    console.log(reply);
                }
            );
    }
}
