import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";

/*
This will update the state of a profiles participation in an event
 */
export const EventParticipation = ({authentificatedUser}) => {

    const dispatch = useDispatch()

    const participation = useSelector((state) => state.participation)

    const sideEffects = () => {
        if (authentificatedUser?.profileId) {
            dispatch(fetchParticipation(authentificatedUser.profileId))
        }
    }

    useEffect(sideEffects, [authentificatedUser, dispatch])

    console.log("participation", participation)

    return (
        <>
        </>
    )
}
