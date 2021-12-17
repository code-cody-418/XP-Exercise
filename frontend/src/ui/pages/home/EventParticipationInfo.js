import React, {useEffect, useState, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchParticipation} from "../../../store/eventParticipationSlices/participationSlice";
import {httpConfig} from "../../shared/utils/http-config";
import {Canvas} from "@react-three/fiber";
import ChristmasHat01 from "../../../3D-Models/event-models/Christmas-hat-01";
import '../../shared/main-nav/sign-in/menuStyle.css'
import {OrbitControls} from "@react-three/drei";
import {Button} from "react-bootstrap";

/*
This will update the state of a profiles participation in an event
 */
export const EventParticipationInfo = ({profile, participation, videoPlay}) => {

    const dispatch = useDispatch()

    const thirtySecondTimer = useSelector((state) => state.thirtySecondTimer)


    //timer that updates a user participationTime during an event challenge.
    useEffect(() => {
        if (thirtySecondTimer.setThirtySecondsTimer === 1) {
            updateParticipationTime()
        }
    }, [thirtySecondTimer])

    const updateParticipationTime = () => {
        console.log("profile", profile)
        if (profile === null) {
        } else if (profile != null) {
            console.log("is this firing?")
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

    //This component takes participationTime and turns it into a progress bar
    const ParticipationProgressBar = () => {
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
        }, [videoPlay, participation, progressBarExp])

        //updates partition completed
        useEffect(() => {
            if (participation != null) {
                if (participation.participationCompleted === 1) {
                } else if (participation.participationTime > 2520) {
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
        if (profile === null) {
            console.log("if")
            return <></>
        } else {
            if (participation === null) {
                console.log("else")
                createEventParticipation()
                return <></>
            } else {
                return (
                    <>
                        <h2>Christmas Event</h2>
                        <ParticipationProgressBar/>
                        {(participation.participationCompleted === 1)
                            ? (
                                <Button onClick={() => console.log("reward Claimed")}>Claim Event Reward</Button>
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

    return (
        <>
            <RenderParticipation/>

        </>
    )
}
