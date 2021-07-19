import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku01 from "../Goku01";

export default function SelectCharacter( {name, gokuAction, narutoAction, kakashiAction} ) {
        // if (props.name === "kakashi") {
        //     return <Kakashi kakashiAction={props.kakashiAction}/>
        // } else if (props.name === "naruto") {
        //     return <Naruto narutoAction={props.narutoAction} gokuAction={props.gokuAction}/>
        // } else if (props.name === "goku") {
        //     return <Goku01 gokuAction={props.gokuAction} narutoAction={props.narutoAction} name={props.name}/>
        // }



    return (
        <>
            {name === 'goku' ? <Goku01 gokuAction={gokuAction} /> : null}
            {name === 'naruto' ? <Naruto narutoAction={narutoAction} /> : null}
        </>
    )
}
