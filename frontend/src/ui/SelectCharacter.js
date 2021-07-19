import React, {useState} from "react";
import Kakashi from "../Kakashi";
import Naruto from "../Naruto";
import Goku01 from "../Goku01";
import {Transition} from "react-transition-group";

export default function SelectCharacter( {name, gokuAction, narutoAction, kakashiAction} ) {
        // if (props.name === "kakashi") {
        //     return <Kakashi kakashiAction={props.kakashiAction}/>
        // } else if (props.name === "naruto") {
        //     return <Naruto narutoAction={props.narutoAction} gokuAction={props.gokuAction}/>
        // } else if (props.name === "goku") {
        //     return <Goku01 gokuAction={props.gokuAction} narutoAction={props.narutoAction} name={props.name}/>
        // }

    // const [characterGoku, setCharacterGoku] = useState(false)

    console.log('name', name)

    return (
        <>
            <Goku01 gokuAction={gokuAction} name={name}/>
            <Naruto narutoAction={narutoAction} name={name}/>
            <Kakashi kakashiAction={kakashiAction} name={name} />

            {/*<Goku01 gokuAction={gokuAction} style={name === 'goku' ? {} : {visibility: "hidden" }} />*/}
            {/*<Naruto narutoAction={narutoAction} style={name === 'naruto' ? {} : {visibility: "hidden" }} />*/}

            {/*{name === 'naruto' ? <Naruto narutoAction={narutoAction} /> : <Naruto narutoAction={narutoAction} />}*/}

       </>
    )
}
