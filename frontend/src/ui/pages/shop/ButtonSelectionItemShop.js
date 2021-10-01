import React from "react";
import {Button} from "react-bootstrap";

//this determines which buttons to display based on whether an item has been purchased
export const ButtonSelectionItemShop = ({itemShop}) => {
    if (itemShop === null) {
        return <></>
    } else if (itemShop != null) {
        return (
            <>
                {
                    (itemShop.itemShopTenDollarGiftCard === 0)
                        ? <Button>$10 Gift Card</Button>
                        : <></>
                }
                {
                    (itemShop.itemShopTwentyDollarGiftCard === 0)
                        ? <Button>$20 Gift Card</Button>
                        : <></>
                }
                {
                    (itemShop.itemShopDemonSlayerGame === 0)
                        ? <Button>Demon Slayer Game</Button>
                        : <></>
                }
            </>
        )
    }
}
