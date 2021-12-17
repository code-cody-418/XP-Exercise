import React, {useEffect, useState, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";
import {httpConfig} from "../../shared/utils/http-config";
import '../../shared/main-nav/sign-in/menuStyle.css'
import {Button} from "react-bootstrap";
import {fetchProfileByProfileId} from "../../../store/profileSlice";

/*
This will update the state of a profiles participation in an event
 */
export const EventParticipationInfo = ({profile, participation}) => {

    const dispatch = useDispatch()

    const thirtySecondTimer = useSelector((state) => state.thirtySecondTimer)


    //timer that updates a user participationTime during an event challenge.
    useEffect(() => {
        if (thirtySecondTimer.setThirtySecondsTimer === 1) {
            updateParticipationTime()
        }
    }, [thirtySecondTimer])

    const updateParticipationTime = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/participation/updateParticipationTime`, profile)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(profile.profileId))
                    }
                })
        }
    }

    //this function sets a profile up to participate in an event
    const createEventParticipation = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.post(`/apis/participation`)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(profile.profileId))
                    }
                })
        }
    }

    //this function updates participationCompleted
    const updateParticipationCompleted = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put('/apis/participation/updateParticipationCompleted')
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(profile.profileId))
                    }
                })
        }
    }

    //this function updates participationCompleted
    const updateParticipationCoinsReward = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put('/apis/participation/updateParticipationCoins')
                .then(reply => {
                    console.log("reply", reply)
                    if (reply.status === 200) {
                        dispatch(fetchParticipation(profile.profileId))
                        dispatch(fetchProfileByProfileId(profile.profileId))
                    }
                })
        }
    }

    const [progressBarExp, setProgressBarExp] = useState("0%")

    useEffect(() => {

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
    }, [participation])

    //updates partition completed
    useEffect(() => {
        if (participation != null) {
            if (participation.participationCompleted === 1) {
            } else if (participation.participationTime > 2520) {
                updateParticipationCompleted()
            }
        }
    }, [participation])

//Final return from component
    if (profile === null) {
        return <></>
    } else {
        if (participation === null) {
            createEventParticipation()
            return <></>
        } else {
            return (
                <>
                    <h2>Christmas Event</h2>
                    <div className="progress progressLevel ms-1">
                        <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated  progressText"
                             style={{width: progressBarExp}}>Event Progress
                        </div>
                    </div>
                    {(participation.participationCompleted === 1 && participation.participationCoinReward === 0)
                        ? (
                            <Button onClick={() => updateParticipationCoinsReward()}>Claim Event Reward</Button>
                        ) :
                        (
                            <></>
                        )
                    }
                </>
            )
        }
    }
}
