import React from "react";
import {Menu} from "../../shared/Menu";
import kakashiCredit from "./kakashi-3d-credit.png"
import {Container, Row} from "react-bootstrap";
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

        </>
    )
}
