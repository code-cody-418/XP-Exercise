import React, {useEffect, useState} from "react";
import twoCoins from "../../images/two-coins.png"


// shows profile information on state change
// console.log("profile", profile.profileUserName)
export const ProfileInfo = ({profile, videoPlay, thirtySeconds}) => {
    const [progressBarExp, setProgressBarExp] = useState("75%")

    const [oldExp, setOldExp] = useState(null)

    // useEffect(() => {
    //     if (profile === null) {
    //     } else if (profile != null) {
    //         setOldExp(profile.profileExp)
    //     }
    // }, [progressBarExp])

    console.log("progressBarExp", progressBarExp)

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            if (progressBarExp === "100%") {
                setProgressBarExp("0%")
            } else if ((profile.profileExp + '').indexOf('00') > -1 === true) {
                setProgressBarExp("100%")
            } else if ((profile.profileExp + '').indexOf('90') > -1 === true) {
                setProgressBarExp("90%")
            } else if ((profile.profileExp + '').indexOf('80') > -1 === true) {
                setProgressBarExp("80%")
            } else if ((profile.profileExp + '').indexOf('70') > -1 === true) {
                setProgressBarExp("70%")
            } else if ((profile.profileExp + '').indexOf('60') > -1 === true) {
                setProgressBarExp("60%")
            } else if ((profile.profileExp + '').indexOf('50') > -1 === true) {
                setProgressBarExp("50%")
            } else if ((profile.profileExp + '').indexOf('40') > -1 === true) {
                setProgressBarExp("40%")
            } else if ((profile.profileExp + '').indexOf('30') > -1 === true) {
                setProgressBarExp("30%")
            } else if ((profile.profileExp + '').indexOf('20') > -1 === true) {
                setProgressBarExp("20%")
            } else if ((profile.profileExp + '').indexOf('10') > -1 === true) {
                setProgressBarExp("10%")
            }

        }
    }, [videoPlay, thirtySeconds])

    if (profile === null) {
        return <></>
    } else if (profile != null) {
        return (
            <>

                <button type="button" className="btn btn-dark position-relative">
                <span>
                    <img src={profile.profileAvatarUrl} alt={"Profile Avatar"}/>
                </span>
                    {profile.profileUserName}
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>
                  {profile.profileLevel}
                </span></button>
                <p className='profileText'>
                    <img src={twoCoins} width={50} height={50}/>
                    {profile.profileCoins}</p>
                {/*<p className='profileText'></p>*/}
                <div className="progress progressLevel">
                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                         style={{width: progressBarExp}}>{profile.profileExp} Exp Points
                    </div>
                </div>
                {/*<p className='profileText'>Level: </p>*/}
            </>
        )
    }
}
