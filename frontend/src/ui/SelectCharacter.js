import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku01 from "../Goku01";

export default function SelectCharacter(props) {
    if (props.name ==="kakashi") {
        return <Kakashi kakashiAction={props.kakashiAction}/>
    }
    else if (props.name ==="naurto") {
        return <Naruto narutoAction={props.narutoAction}/>
    }
    else if (props.name ==="goku") {
        return <Goku01 gokuAction={props.gokuAction}/>
    }
    return <Naruto narutoAction={props.narutoAction}/>
}
