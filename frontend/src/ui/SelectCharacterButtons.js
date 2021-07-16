import React, {useEffect, useState} from "react";
import {Button, Col} from "react-bootstrap";


export default function SelectCharacterButtons(props) {
    //sets state of animation
    const [value, setValue] = useState('standing')

    //generalbuttons
    const ClickStanding = () => <Button onClick={() => setValue('standing')}>Standing</Button>

    //gokubuttons
    const ClickJab = () => <Button onClick={() => setValue('jab')}>Jab</Button>

    useEffect(() => {
        ClickStanding()
    })


    console.log("value:", value)

    if (props.name ==="kakashi") {
        return <button>Kakashi</button>
    }
    else if (props.name ==="naurto") {
        return <button>Naruto</button>
    }
    else if (props.name ==="goku") {
        return (
            <>
                <Col>
        <ClickStanding value={value}/>
                </Col>
                <Col>
        <ClickJab value={value}/>
                </Col>
            </>
        )
    }
    return (
        <>
            <Col>
                <ClickStanding value={value}/>
            </Col>
            <Col>
                <ClickJab value={value}/>
            </Col>
        </>
    )
}
