export const shoppingSessionCreated = {
    url: `${window.location.origin}/services/shopping/v1/item/create`,
    method: 'POST',
    status: 200,
    response: {
        "shopping_session_token": "1ff72eae33e0e1dd1deb6a608144f1b1",
        "cc_on_file": false,
        "item": "/film/155958",
        "item_price": "$8.00 NZD",
        "ownership": "rent",
        "quality": "hd",
        "discount_amount": "$0.00 NZD",
        "total_price": "$8.00 NZD",
        "total_price_numeric": "8.0",
        "currency": "NZD",
        "freebie": false,
        "discount_allowed": true,
        "card_amount": "$8.00 NZD",
        "wallet_amount": null,
        "payment_provider": "stripe"
    }
}