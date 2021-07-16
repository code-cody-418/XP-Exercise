import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku01 from "../Goku01";

export default function SelectCharacter(props) {
    if (props.name ==="kakashi") {
        return <Kakashi value={props.value}/>
    }
    else if (props.name ==="naurto") {
        return <Naruto value={props.value}/>
    }
    else if (props.name ==="goku") {
        return <Goku01 value={props.value}/>
    }
    return <Naruto value={props.value}/>
}
