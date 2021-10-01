import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {httpConfig} from "../../shared/utils/http-config";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {useDispatch} from "react-redux";
import {Modal} from "bootstrap";

//this determines which buttons to display based on whether an item has been purchased
export const ButtonSelectionItemShop = ({itemShop, profile}) => {

    const dispatch = useDispatch()

    //this sets the state of the cost for a selected item
    const [itemCost, setItemCost] = useState(null)

    //this is the object thats passed to the backend
    const itemCostObject = {
        itemCost: itemCost
    }

    //this subtracts the coins needed to buy an item
    const coinDeduction = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`apis/profile/itemCost/${profile.profileId}`, itemCostObject)
                .then(reply => {
                    if (reply.status === 200) {
                        dispatch(fetchProfileByProfileId(profile.profileId))
                    }
                })
        }
    }

    //modal logic for confirming purchase
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


//this is the logic that determines which buttons show. first it determines whether the profile has an itemShop.
// Second it determines if an item shop has been purchased by checking true or false(0 is false). Third it sets the
// coin cost of an item.
    if (itemShop === null) {
        return <></>
    } else if (itemShop != null) {
        return (
            <>
                {
                    (itemShop.itemShopTenDollarGiftCard === 0)
                        ? <Button onClick={() => {
                            setItemCost(8)
                            handleShow()
                        }}>$10 Gift Card</Button>
                        : <></>
                }
                {
                    (itemShop.itemShopTwentyDollarGiftCard === 0)
                        ? <Button onClick={() => setItemCost(15)}>$20 Gift Card</Button>
                        : <></>
                }
                {
                    (itemShop.itemShopDemonSlayerGame === 0)
                        ? <Button onClick={() => setItemCost(40)}>Demon Slayer Game</Button>
                        : <></>
                }
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </>
        )
    }
}
