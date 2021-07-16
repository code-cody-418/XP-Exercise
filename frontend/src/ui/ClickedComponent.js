import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku from "../Goku";
import Goku01 from "../Goku01";

export default function ClickedComponent(props) {
    if (props.name ==="kakashi") {
        return <Kakashi />
    }
    else if (props.name ==="naurto") {
        return <Naruto />
    }
    else if (props.name ==="goku") {
        return <Goku01 />
    }
    return <Naruto />
}
