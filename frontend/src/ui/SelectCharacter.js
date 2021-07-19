import React from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku01 from "../Goku01";

export default function SelectCharacter( {name, gokuAction, narutoAction, kakashiAction} ) {
    return (
        <>
            <Goku01 gokuAction={gokuAction} name={name} />
            <Naruto narutoAction={narutoAction} name={name} />
            <Kakashi kakashiAction={kakashiAction} name={name} />
       </>
    )
}
