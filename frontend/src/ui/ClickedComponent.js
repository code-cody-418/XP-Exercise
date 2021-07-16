import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku from "../Goku";

export default function ClickedComponent(props) {
    if (props.name ==="kakashi") {
        return <Kakashi />
    }
    else if (props.name ==="naurto") {
        return <Naruto />
    }
    else if (props.name ==="goku") {
        return <Goku />
    }
    return <Naruto />
}
