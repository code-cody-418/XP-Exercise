import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";
import {httpConfig} from "../../shared/utils/http-config";

/*
This will update the state of a profiles participation in an event
 */
export const EventParticipation = ({authentificatedUser, participation}) => {

    const dispatch = useDispatch()

    // const participation = useSelector((state) => state.participation ? state.participation : [])
    const thirtySecondTimer = useSelector((state) => state.thirtySecondTimer)

    // const sideEffects = () => {
    //     if (authentificatedUser?.profileId) {
    //         dispatch(fetchParticipation(authentificatedUser.profileId))
    //     }
    // }
    //
    // useEffect(sideEffects, [authentificatedUser])

    // console.log('dispatch', dispatch)

    console.log("thirty second timer", thirtySecondTimer.setThirtySecondsTimer)
    //timer that updates a user participationTime during an event challenge.
    useEffect(() => {
        if (thirtySecondTimer.setThirtySecondsTimer === 1) {
            updateParticipationTime()
        }
    }, [thirtySecondTimer])


    const updateParticipationTime = () => {
        console.log("is this this function firing?")
        if (authentificatedUser === null) {
        } else if (authentificatedUser != null) {
            httpConfig.put(`/apis/participation/updateParticipationTime`, authentificatedUser)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(authentificatedUser.profileId))
                    }
                })
        }
    }

    return (
        <>
            <p>
                {participation.participationTime}
            </p>

        </>
    )
}
