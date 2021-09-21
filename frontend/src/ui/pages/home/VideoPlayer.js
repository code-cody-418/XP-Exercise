import React, {useEffect, useState} from "react";
import animeMontage from "../../../videos/Anime Training Montage AMV.mp4";
import {settingVideoPlay} from "../../../store/videoPlaySlice";
import {names} from "../../shared/interfaces/names";
import {settingKakashiMove} from "../../../store/trainer-Slices/kakashiSlice";
import {moves} from "../../shared/interfaces/moves";
import {settingGokuMove} from "../../../store/trainer-Slices/gokuSlice";
import {settingKorraMove} from "../../../store/trainer-Slices/korraSlice";
import {settingNarutoMove} from "../../../store/trainer-Slices/narutoSlice";
import ReactPlayer from "react-player";
import {useDispatch, useSelector} from "react-redux";
import {settingThirtySecondTimer} from "../../../store/timer-Slices/thirtySecondTimer";
import {settingVideoSecondsTimer} from "../../../store/timer-Slices/vdeoSecondsTimer";
// import {levelUp, coinUp, expUp} from "../../shared/profile-functions/profileFunctions";
import {settingVideoFinishedModal} from "../../../store/VideoFinishedModalSlice";
// import {settingVideoFinishedModal} from "../../../store/videoFinishedModalSlice";
import {kakashiMoves} from "../../shared/interfaces/moves";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {httpConfig} from "../../shared/utils/http-config";

export const VideoPlayer = ({profile}) => {

    const dispatch = useDispatch();

    const name = useSelector((state) => state.name.setName)
    const videoPlay = useSelector((state) => state.videoPlay.setVideoPlay)
    const autoWorkout = useSelector((state) => state.autoWorkout.setAutoWorkout)
    const kakashiAction = useSelector((state) => state.kakashiMove.setMove)
    const korraAction = useSelector((state) => state.korraMove.setMove)
    const gokuAction = useSelector((state) => state.gokuMove.setMove)
    const narutoAction = useSelector((state) => state.narutoMove.setMove)
    // const thirtySeconds = useSelector(state => state.thirtySecondTimer.setThirtySecondsTimer)
    // const seconds = useSelector(state => state.videoSecondsTimer.setVideoSecondsTimer)


//Functionality for 30 second workout timer
    const [thirtySeconds, setThirtySeconds] = useState(30)

    const [kakashiIndex, setKakashiIndex] = useState(0)


    useEffect(() => {
        if (videoPlay === true) {
            setKakashiIndex(kakashiIndex + 1)
            dispatch(settingKakashiMove(kakashiMoves[kakashiIndex]))
        }
    }, [videoPlay])

    useEffect(() => {
        if (thirtySeconds === -1) {
            setThirtySeconds(30)
            expUp()
            levelUp()
            if (kakashiIndex === 4) {
                setKakashiIndex(2)
            } else if (kakashiIndex !== 4) {
                if (name === names.kakashi) {
                    setKakashiIndex(kakashiIndex + 1)
                    dispatch(settingKakashiMove(kakashiMoves[kakashiIndex]))
                } else if (name === names.korra) {

                }
            }
        } else if (videoPlay === true) {
            const intervalId = setInterval(() => {
                setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                dispatch(settingThirtySecondTimer(thirtySeconds))
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [videoPlay, thirtySeconds])

    //
    // useEffect(() => {
    //     if (profile != null) {
    //         // console.log("profile updated")
    //         dispatch(fetchProfileByProfileId(profile.profileId))
    //     }
    // }, [kakashiIndex])

//sets the state of the videoFinshedModal to show for when the video ends
    const handleShow = () => {
        coinUp()
        dispatch(settingVideoFinishedModal(true))
    };

//function to call api that adds a Exp to profile
    const expUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/expUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        console.log(reply);
                    }
                );
        }
    }

//function to call api that adds a level to profile
    const levelUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            if ((profile.profileExp + '').indexOf('00', 1) > -1 === true) {
                httpConfig.put(`/apis/profile/levelUp/${profile.profileId}`, profile)
                    .then(reply => {
                            if (reply.status === 200) {
                                console.log(reply);
                                dispatch(fetchProfileByProfileId(profile.profileId));
                            }
                            console.log(reply);
                        }
                    );
            }
        }
    }

    const coinUp = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/profile/coinUp/${profile.profileId}`, profile)
                .then(reply => {
                        if (reply.status === 200) {
                            console.log(reply);
                            dispatch(fetchProfileByProfileId(profile.profileId));
                        }
                        console.log(reply);
                    }
                );
        }
    }
    return (
        <>
            <ReactPlayer url={animeMontage}

                         width={'100%'}
                         height={'400px'}
                         playing={videoPlay}
                         onEnded={() => {
                             handleShow()
                             dispatch(settingVideoPlay(false))
                         }}
                         onPlay={() => {
                             dispatch(settingVideoPlay(true))
                         }}
                         onPause={() => {
                             dispatch(settingVideoPlay(false))
                         }}
                // config={{
                //     youtube: {
                //         playerVars: { showinfo: 1,
                //             origin: 'http://143.244.183.237/',
                //             // origin: 'http://localhost:3000/',
                //             enablejsapi: 1
                //         }
                //     }
                // }}
                //extra callbacks for videoplayer
                         controls={true}
                // muted={true}

                //this is logic that determines auto-workouts
                //          onProgress={(played) => {
                //              if (autoWorkout === true && videoPlay === true) {
                //                  //determines an action of each character based on elapsed seconds and resets 30 seconds timer
                //                  if (seconds <= 30) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.armStretch))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.touchToes))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.armStretch))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.armStretch))
                //                      }
                //                  } else if (seconds === 31) {
                //                      setThirtySeconds(28)
                //                      expUp(profile)
                //                      levelUp(profile)
                //                  } else if (seconds <= 60) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.neckStretch))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.armStretch))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.touchToes))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.touchToes))
                //                      }
                //                  } else if (seconds === 61) {
                //                      setThirtySeconds(28)
                //                      expUp(profile)
                //                      levelUp(profile)
                //                  } else if (seconds <= 90) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.touchToes))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jumpingJack))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.burpee))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.jumpingJack))
                //                      }
                //                  } else if (seconds === 91) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 120) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.sitUps))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jab))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossJumps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.upRock))
                //                      }
                //                  } else if (seconds === 121) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 150) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.pushUp))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.hook))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossRotation))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.footwork))
                //                      }
                //                  } else if (seconds === 151) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 180) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.jumpingJack))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.punchCombo))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.freeze))
                //                      }
                //                  } else if (seconds === 181) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 210) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.pushUp))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 211) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 240) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.kick))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.bicepCurl))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.sitUps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bikeCrunch))
                //                      }
                //                  } else if (seconds === 241) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 270) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.bicepCurl))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.plank))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.bicepCurl))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.sitUps))
                //                      }
                //                  } else if (seconds === 271) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 300) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.squat))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.sitUps))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.pushUp))
                //                      }
                //                  } else if (seconds === 301) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 330) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.pushUp))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.burpee))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bicepCurl))
                //                      }
                //                  } else if (seconds === 331) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 360) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.sitUps))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossJumps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 361) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 390) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.pushUp))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jumpingJack))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossRotation))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.jumpingJack))
                //                      }
                //                  } else if (seconds === 391) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 420) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.jumpingJack))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jab))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.upRock))
                //                      }
                //                  } else if (seconds === 421) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 450) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.hook))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.pushUp))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.footwork))
                //                      }
                //                  } else if (seconds === 451) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 480) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.kick))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.punchCombo))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.sitUps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.freeze))
                //                      }
                //                  } else if (seconds === 481) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 510) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.bicepCurl))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.bicepCurl))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 511) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 540) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.squat))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.bicepCurl))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bikeCrunch))
                //                      }
                //                  } else if (seconds === 541) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 570) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.plank))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.burpee))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.sitUps))
                //                      }
                //                  } else if (seconds === 571) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 600) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.sitUps))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.sitUps))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossJumps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.pushUp))
                //                      }
                //                  } else if (seconds === 601) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 630) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.pushUp))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.pushUp))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossRotation))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bicepCurl))
                //                      }
                //                  } else if (seconds === 631) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 660) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.jumpingJack))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 661) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 690) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jumpingJack))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.pushUp))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.jumpingJack))
                //                      }
                //                  } else if (seconds === 691) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 720) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.kick))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jab))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.sitUps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.upRock))
                //                      }
                //                  } else if (seconds === 721) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 750) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.bicepCurl))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.hook))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.bicepCurl))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.footwork))
                //                      }
                //                  } else if (seconds === 751) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 780) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.squat))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.punchCombo))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.freeze))
                //                      }
                //                  } else if (seconds === 781) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 810) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.burpee))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 811) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 840) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.sitUps))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.bicepCurl))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossJumps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bikeCrunch))
                //                      }
                //                  } else if (seconds === 841) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 870) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.pushUp))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.plank))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.crossRotation))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.sitUps))
                //                      }
                //                  } else if (seconds === 871) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 900) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.jumpingJack))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.sitUps))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.pushUp))
                //                      }
                //                  } else if (seconds === 901) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 930) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.pushUp))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.pushUp))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.bicepCurl))
                //                      }
                //                  } else if (seconds === 931) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 960) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.kick))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.sitUps))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.coolDown))
                //                      }
                //                  } else if (seconds === 961) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 990) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.bicepCurl))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jumpingJack))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.bicepCurl))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.jumpingJack))
                //                      }
                //                  } else if (seconds === 991) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 1010) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.squat))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.jab))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.upRock))
                //                      }
                //                  } else if (seconds === 1011) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  } else if (seconds <= 1030) {
                //                      if (name === names.kakashi) {
                //                          dispatch(settingKakashiMove(moves.coolDown))
                //                      } else if (name === names.goku) {
                //                          dispatch(settingGokuMove(moves.coolDown))
                //                      } else if (name === names.korra) {
                //                          dispatch(settingKorraMove(moves.coolDown))
                //                      } else if (name === names.naruto) {
                //                          dispatch(settingNarutoMove(moves.footwork))
                //                      }
                //                  } else if (seconds === 1031) {
                //                      setThirtySeconds(28)
                //                      expUp()
                //                      levelUp()
                //                  }
                //                  //when video stops character turns idle
                //              } else if (autoWorkout === true && videoPlay === false) {
                //                  if (name === names.kakashi) {
                //                      return dispatch(settingKakashiMove(moves.idle))
                //                  }
                //              }
                //          }}
            />
        </>
    )
}
