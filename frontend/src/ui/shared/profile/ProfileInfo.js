import React, {useEffect, useState} from "react";
import twoCoins from "../../../images/two-coins.png"
import "../../styles.css"
import {fetchProfileByProfileId} from "../../../store/profileSlice";


// shows profile information on state change
export const ProfileInfo = ({profile, videoPlay}) => {
    const [progressBarExp, setProgressBarExp] = useState("0%")

    useEffect(() => {
        if (profile != null) {
            console.log("profile exp", profile.profileExp)
            console.log("exp bar", progressBarExp)
        }
    }, [profile])

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            // if (progressBarExp === "100%") {
            //     setProgressBarExp("0%")
            // }
            if ((profile.profileExp + '').indexOf('00', 1) > -1 === true) {
                setProgressBarExp("100%")
            } else if ((profile.profileExp + '').indexOf('90', 1) > -1 === true) {
                setProgressBarExp("90%")
            } else if ((profile.profileExp + '').indexOf('80', 1) > -1 === true) {
                setProgressBarExp("80%")
            } else if ((profile.profileExp + '').indexOf('70', 1) > -1 === true) {
                setProgressBarExp("70%")
            } else if ((profile.profileExp + '').indexOf('60', 1) > -1 === true) {
                setProgressBarExp("60%")
            } else if ((profile.profileExp + '').indexOf('50', 1) > -1 === true) {
                setProgressBarExp("50%")
            } else if ((profile.profileExp + '').indexOf('40', 1) > -1 === true) {
                setProgressBarExp("40%")
            } else if ((profile.profileExp + '').indexOf('30', 1) > -1 === true) {
                setProgressBarExp("30%")
            } else if ((profile.profileExp + '').indexOf('20', 1) > -1 === true) {
                setProgressBarExp("20%")
            } else if ((profile.profileExp + '').indexOf('10', 1) > -1 === true) {
                setProgressBarExp("10%")
            }

        }
    }, [videoPlay, profile, progressBarExp])

    if (profile === null) {
        return <></>
    } else if (profile != null) {
        return (
            <>

                <button type="button" className="btn btn-dark position-relative profileUserNameText">
                <span>
                    <img src={profile.profileAvatarUrl} alt={"Profile Avatar"}/>
                </span>
                    {profile.profileUserName}
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>
                  {profile.profileLevel}
                </span></button>
                <div className="progress progressLevel ms-1">
                    <div className="progress-bar progress-bar-striped progress-bar-animated  progressText"
                         style={{width: progressBarExp}}>{profile.profileExp} Exp Points
                    </div>
                </div>
                <p className='coinText'>
                    <img src={twoCoins} width={50} height={50} alt="Coins"/>
                    {profile.profileCoins}</p>
            </>
        )
    }
}
