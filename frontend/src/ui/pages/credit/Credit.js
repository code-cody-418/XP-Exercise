import React from "react";
import {Menu} from "../../shared/Menu";
import kakashiCredit from "./kakashi-3d-credit.png"
import korraCredit from "./korra-3d-credit.png"
import gokuCredit from "./goku-3d-credit.png"
import narutoCredit from "./naruto-3d-credit.png"
import './credit-style.css'


export const Credit = () => {
    return (
        <>
            <Menu/>
            <h1>Credit</h1>

            <div className="card mb-3 bg-transparent border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={kakashiCredit} className="card-img" alt="Kakashi Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Kakashi 3-d model</h2>
                            <p className="card-text"> By gabrieel22 on
                            <a href="https://sketchfab.com/3d-models/hatake-kakashi-d6958798fee34e68a57a1d0c05ba0ef3" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-transparent border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={narutoCredit} className="card-img" alt="Naruto Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Naruto 3-d model</h2>
                            <p className="card-text"> By gabrieel22 on
                                <a href="https://sketchfab.com/3d-models/hatake-kakashi-d6958798fee34e68a57a1d0c05ba0ef3" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-transparent border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={korraCredit} className="card-img" alt="korra Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Korra 3-d model</h2>
                            <p className="card-text"> By asifaj on
                                <a href="https://sketchfab.com/3d-models/korra-085e432a2c254176b1d0d770adc8a637" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 bg-transparent border-white ms-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={gokuCredit} className="card-img" alt="Goku Credit" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Goku 3-d model</h2>
                            <p className="card-text"> By lechitachan on
                                <a href="https://sketchfab.com/3d-models/goku-76acf6680f024dc4ac08811914fc9520" target="_blank"> Sketchfab</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
