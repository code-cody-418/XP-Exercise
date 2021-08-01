import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/http-config";
import {fetchAuth} from "./authSlice";



const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        getProfileByProfileId: (profile, action) => {
            return action.payload
            // profile.push(action.payload)
        }
    }
})

export const {getProfileByProfileId} = profileSlice.actions

export default profileSlice.reducer

export const fetchProfileByProfileId = (profileId) => async dispatch => {

    const {data} = await httpConfig(`/apis/profile/${profileId}`);
    console.log("data", data)
    dispatch(getProfileByProfileId(data))
}

// export const fetchProfileByProfileId = () => async (dispatch, getState) => {
//     await dispatch(fetchAuth())
//     const {auth} = getState()
//     console.log(auth)
//     if(auth !== null) {
//         const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
//         console.log(data)
//         dispatch(getProfileByProfileId(data))
//     }
// }
