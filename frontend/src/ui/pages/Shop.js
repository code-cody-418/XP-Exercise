import React, {useEffect} from "react";
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

    const itemShop = useSelector(state => state.itemShop)

    console.log("This is item shop", itemShop)


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

    const fetchItemShop = () => {
        if (profile === null) {
        } else if (profile != null) {
            dispatch(fetchItemShopByProfileId(profile.profileId))
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
        </>
    )
}
