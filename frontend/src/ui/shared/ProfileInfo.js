import React, {useEffect, useState} from "react";
import twoCoins from "../../images/two-coins.png"


// shows profile information on state change
// console.log("profile", profile.profileUserName)
export const ProfileInfo = ({profile, videoPlay, thirtySeconds}) => {
    const [progressBarExp, setProgressBarExp] = useState("75%")

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            if (profile.profileExp === 210) {
                setProgressBarExp("80%")
            } else if (profile.profileExp === 220) {
                setProgressBarExp("85%")
            } else if (profile.profileExp === 230) {
                setProgressBarExp("90%")
            } else if (profile.profileExp === 240) {
                setProgressBarExp("95%")
            } else if (profile.profileExp === 250) {
                setProgressBarExp("100%")
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
                         style={{width: progressBarExp}}>{profile.profileExp}</div>
                </div>
                {/*<p className='profileText'>Level: </p>*/}
            </>
        )
    }
}
