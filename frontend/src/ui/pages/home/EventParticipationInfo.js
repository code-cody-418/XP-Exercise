import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";
import {httpConfig} from "../../shared/utils/http-config";
import {Button} from "react-bootstrap";

/*
This will update the state of a profiles participation in an event
 */
export const EventParticipationInfo = ({authentificatedUser, participation, videoPlay}) => {

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


    //timer that updates a user participationTime during an event challenge.
    useEffect(() => {
        if (thirtySecondTimer.setThirtySecondsTimer === 1) {
            updateParticipationTime()
        }
    }, [thirtySecondTimer])

    const updateParticipationTime = () => {
        if (authentificatedUser === null) {
        } else if (authentificatedUser != null) {
            console.log("is this this function firing?")
            httpConfig.put(`/apis/participation/updateParticipationTime`, authentificatedUser)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(authentificatedUser.profileId))
                    }
                })
        }
    }

    //this function sets a profile up to participate in an event
    const createEventParticipation = () => {
        if (authentificatedUser === null) {
        } else if (authentificatedUser != null) {
            httpConfig.post(`/apis/participation`)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(authentificatedUser.profileId))
                    }
                })
        }
    }

    //this function updates participationCompleted
    const updateParticipationCompleted = () => {
        if (authentificatedUser === null) {
        } else if (authentificatedUser != null) {
            httpConfig.put('/apis/participation/updateParticipationCompleted')
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(authentificatedUser.profileId))
                    }
                })
        }
    }

    //This component takes participationTime and turns it into a progress bar
    const ParticipationProgressBar = () => {
        const [progressBarExp, setProgressBarExp] = useState("0%")

        useEffect(() => {
            console.log("rerun")
            if (participation === null) {
            } else if (participation != null) {
                if (participation.participationTime > 2520) {
                    setProgressBarExp("100%")
                } else if (participation.participationTime > 1680 && participation.participationTime < 2520) {
                    setProgressBarExp("66%")
                } else if (participation.participationTime > 840 && participation.participationTime < 1680) {
                    setProgressBarExp("33%")
                } else if (participation.participationTime < 840) {
                    setProgressBarExp("0%")
                }
            }
        }, [videoPlay, participation, progressBarExp])

        //waits for parti
        useEffect(() => {
            if (participation != null) {
                if (participation.participationCompleted === 1) {
                }else if (participation.participationTime > 2520) {
                    updateParticipationCompleted()
                }
            }
        }, [participation])

        return (
            <>
                <div className="progress progressLevel ms-1">
                    <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated  progressText"
                         style={{width: progressBarExp}}>
                    </div>
                </div>
            </>
        )
    }

    //This Component is the logic that determines if participation needs to be created then renders the info
    const RenderParticipation = () => {
        if (authentificatedUser === null) {
            return <></>
        } else {
            if (participation === null) {
                createEventParticipation()
                return <></>
            } else {
                return (
                    <>
                        <h2>Christmas Event</h2>
                        <ParticipationProgressBar/>
                        {participation.participationCompleted}
                    </>
                )
            }
        }

    }

    return (
        <>
            <RenderParticipation/>
        </>
    )
}
