import React, {useEffect, useState} from "react";
import {Menu} from "../../shared/menu/Menu";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useJwtToken} from "../../shared/utils/useJwtToken";
import {fetchProfileByProfileId} from "../../../store/profileSlice";
import {httpConfig} from "../../shared/utils/http-config";
import {fetchItemShopByProfileId} from "../../../store/itemShop/itemShopSlice";
import {ButtonSelectionItemShop} from "./ButtonSelectionItemShop";


export const Shop = () => {

    const dispatch = useDispatch()

//redux functionality to get profile data
    const {authenticatedUser} = useJwtToken();

    const sideEffects = () => {
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
            dispatch(fetchItemShopByProfileId(authenticatedUser.profileId))
        }
    }

    useEffect(sideEffects, [authenticatedUser, dispatch]);

    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));

    //gets the item shop
    const itemShop = useSelector(state => state.itemShop)

    //item shops are created when this function runs
    const createItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.post(`/apis/itemShop/`)
                .then(reply => {
                        if (reply.status === 200) {
                            dispatch(fetchItemShopByProfileId(profile.profileId))
                        }
                    }
                )
        }
    }

    //this gets data from redux about the profiles item shop
    const fetchItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            dispatch(fetchItemShopByProfileId(profile.profileId))
        }
    }


    //This is the functionality to set the state of a purchased item
    //These states will then be put into an object to be sent to backend
    const [itemShopProfileId, setItemShopProfileId] = useState(null)
    const [tenDollarGiftCard, setTenDollarGiftCard] = useState(false)
    const [twentyDollarGiftCard, setTwentyDollarGiftCard] = useState(false)
    const [demonSlayerGame, setDemonSlayerGame] = useState(false)

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            setItemShopProfileId(profile.profileId)
        }
    }, [profile])

    const newItemShop =
        {
            itemShopId: itemShopProfileId,
            itemShopTenDollarGiftCard: tenDollarGiftCard,
            itemShopTwentyDollarGiftCard: twentyDollarGiftCard,
            itemShopDemonSlayerGame: demonSlayerGame
        }

    //this changes the boolean value of an item to true meaning it has been purchased
    const purchaseItem = () => {
        if (itemShop === null) {
        } else if (itemShop != null) {
            httpConfig.put(`/apis/itemShop/updateItemShop/${itemShop.itemShopProfileId}`, newItemShop)
                .then(reply => {
                    if (reply.status === 200) {
                        // console.log("purchaseItem worked")
                        dispatch(fetchItemShopByProfileId(profile.profileId))
                    }
                })
        }
    }


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

    return (
        <>
            <Menu profile={profile}/>
            <h1>Shop</h1>
            <h2>
                {(profile === null)
                    ? <></>
                    : profile.profileCoins
                }</h2>
            <Button
                onClick={createItemShop}
            >
                Enter Shop
            </Button>
            {/*<Button*/}
            {/*    onClick={fetchItemShop}*/}
            {/*>*/}
            {/*    fetch ItemShop*/}
            {/*</Button>*/}
            <Button
                onClick={purchaseItem}
            >
                Purchase Item
            </Button>
            <Button onClick={coinDeduction}>
                Coin Deduction
            </Button>

            <ButtonSelectionItemShop itemShop={itemShop}/>
        </>
    )
}
