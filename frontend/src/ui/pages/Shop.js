import React, {useEffect, useState} from "react";
import {Menu} from "../shared/menu/Menu";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useJwtToken} from "../shared/utils/useJwtToken";
import {fetchProfileByProfileId} from "../../store/profileSlice";
import {httpConfig} from "../shared/utils/http-config";
import {fetchItemShopByProfileId} from "../../store/itemShop/itemShopSlice";


export const Shop = () => {

    const dispatch = useDispatch()

//redux functionality to get profile data
    const {authenticatedUser} = useJwtToken();

    const sideEffects = () => {
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
            dispatch(fetchItemShopByProfileId(authenticatedUser.profileId))
        }
        // dispatch(fetchAuth());
    }

    useEffect(sideEffects, [authenticatedUser, dispatch]);

    const auth = useSelector(state => state.auth);
    const profile = useSelector(state => (
        state.profile
            ? state.profile
            : null
    ));

    //gets the item shop
    const itemShop = useSelector(state => state.itemShop)

    //This is the functionality to set the state of a purchased item
    //These states will then be put into an object to be sent to backend
    const [itemShopProfileId, setItemShopProfileId] = useState(null)

    useEffect(() => {
        if (profile === null) {
        } else if (profile != null) {
            setItemShopProfileId(profile.profileId)
        }
    }, [profile, itemShop])

    const newItemShop =
        {
            itemShopId: itemShopProfileId,
            itemShopTenDollarGiftCard: false,
            itemShopTwentyDollarGiftCard: false,
            itemShopDemonSlayerGame: true
        }

//item shops are created when this function runs
    const createItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.post(`/apis/itemShop/`)
                .then(reply => {
                        if (reply.status === 200) {
                            dispatch(fetchItemShopByProfileId(profile.profileId))
                            console.log("item Shop created")
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

    //this changes the boolean value of an item to true meaning it has been purchased
    const purchaseItem = () => {
        if (profile === null) {
        } else if (profile != null) {
            httpConfig.put(`/apis/itemShop/updateItemShop/${itemShop.itemShopProfileId}`, newItemShop)
                .then(reply => {
                    if (reply.status === 200) {
                        console.log("purchaseItem worked")
                        dispatch(fetchItemShopByProfileId(profile.profileId))
                    }
                })
        }
    }

    //this subtracts the coins needed to buy an item


    const ButtonSelectionItemShop = () => {
        if (itemShop === null) {
            return <></>
        } else if (itemShop != null) {
            if (itemShop.itemShopTenDollarGiftCard === 0) {
                return (
                    <>
                        <Button>
                            $10 Gift Card
                        </Button>
                    </>
                )
            }
        }
    }

    return (
        <>
            <Menu profile={profile}/>
            <h1>Shop</h1>
            <Button
                onClick={createItemShop}
            >
                Enter Shop
            </Button>
            <Button
                onClick={fetchItemShop}
            >
                fetch ItemShop
            </Button>
            <Button
                onClick={purchaseItem}
            >
                Purchase Item
            </Button>

            <ButtonSelectionItemShop/>
            {
                (itemShop === null)
                    ? <></>
                    :
                    (itemShop.itemShopTwentyDollarGiftCard === 0)
                        ? <Button>$20 Gift Card</Button>
                        : <></>
            }
            {
                (itemShop === null)
                    ? <></>
                    :
                    (itemShop.itemShopDemonSlayerGame === 0)
                        ? <Button>Demon Slayer Game</Button>
                        : <></>
            }

        </>
    )
}
