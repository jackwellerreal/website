Red Rooster is the sixth biggest restaurant in Australia, known for their fried chicken and chips. They have around 350 stores spread across the country and are a popular choice for many Australians when they want a quick meal.

One Friday night, I was feeling hungry and decided to order Red Rooster for dinner using their mobile app. The mobile app allows customers to order and pay for food; the app also allows customers to create an account to get rewards and vouchers. I had previously created an account and had a few vouchers saved up, so I decided to use them to get a discount on my order.

After eating my succulent chicken and chips, I decided to check my account to see how the website determines the vouchers that are available to me. I opened the developer tools in my browser and looked at the network requests that the website was sending. I discovered that the website was sending a request to an API endpoint to get the vouchers that were available to me. I thought about ways to spoof the response from the API to get more vouchers, but the only software that I knew did this is unavailable on macOS.

So instead of spoofing the vouchers available to me, I continued looking through the network requests to find a URL containing a JSON list of every voucher available to every user. I wrote code to fetch the JSON list of vouchers and ask the user what voucher they would like to use. The program would then make a QR code using the `dcode` found in the JSON list and save it to a file for the user to scan in store. For those interested, the URL of the JSON list of vouchers is:
[https://content-acl.redrooster.com.au/all_loyalty_voucher_info.json](https://content-acl.redrooster.com.au/all_loyalty_voucher_info.json)

I later realized that the `dcode` is not used to identify the voucher for the user, rendering the program useless.

After some more time tinkering with the website dev tools, I discovered that if you apply a $5 discount voucher to your order, the server will remove the value of the voucher from the total cost of the order, but there is an issue: in order to get the discount, you need to have spent at least $15 on your order. But I found a way to bypass this by messing with the `cart` variable in the session storage in the browser.

The `cart` variable is a JSON object that contains the items in your cart, the total cost of the items in your cart, and a list of all the vouchers you applied to your cart, which contains all the conditions of the voucher. I found that if I changed the `minimumSpend` variable to `0` and set the sessions storage variable to the modified JSON object, the website would think that the voucher was to get a $5 discount on any order, regardless of the total cost.

```json
{
    "voucher": {
        "data": {
            "voucherName": "$5 OFF your next order",
            "pluCode": "D1900087",
            "voucherStatus": "ACTIVE",
            "redemptionsAllowed": 1,
            "redeemableAt": ["All stores"],
            "voucherValue": 5,
            "minimumSpend": 0, // <-- Manipulated minimumSpend
        }
    }
}
```

![$5 Discount with total being 0](./assets/5dollardiscount.jpg)

Perfect, I had figured out a way to get a $5 discount on any order, regardless of the overall price. But if I wanted to get a burger or anything else that cost more than $5, I would need to find a way to figure out how to set the `total` variable in the cart object to $0. So I tried just that; I set the `total` variable to `0`, and the website accepted the total price of the order as $0. I had successfully found a way to get unlimited free food from Red Rooster.

The code below shows an example of the cart variable in the session storage.

```json
{
    "data": [
        {
            "cartId": "6eb241ba",
            "categoryName": "Drinks & Desserts",
            "productSlug": "375ml-drinks",
            "name": "375ml Drinks",
            "price": 375,
            "quantity": 1,
            "total": 375,
            "selected": [
                {
                    "subItemName": "375ml Soft Drink",
                    "selected": [
                        {
                            "name": "375ml 7up",
                            "price": 375
                        }
                    ]
                }
            ],
            "itemPrice": 375
        }
    ],
    "total": 375,
    "deliveryFee": 0
}
```

```json
{
    "data": [
        {
            "cartId": "6eb241ba",
            "categoryName": "Drinks & Desserts",
            "productSlug": "375ml-drinks",
            "name": "375ml Drinks",
            "price": 375,
            "quantity": 1,
            "total": 375,
            "selected": [
                {
                    "subItemName": "375ml Soft Drink",
                    "selected": [
                        {
                            "name": "375ml 7up",
                            "price": 375
                        }
                    ]
                }
            ],
            "itemPrice": 375
        }
    ],
    "total": 0, // <-- Manipulated total
    "deliveryFee": 0
}
```

This is very cool but has a major downside, it only works with pickup in-store orders, and not delivery; this is because the delivery is controlled by DoorDash and has more extensive checks to ensure .

After two months of trying to get in contact with their parent company, Craveable Brands, I finally got a response from the Cheif Information Officer who was very thankful for my report and immediately contacted his development team to start working on a fix. And of course this happened on a Friday, I feel bad for the developers who are about to go home for the weekend and were informed of a critical security issue that needed to be fixed.

## Conclusion

This was my first experience with discovering a security vulnerability in a major company, and it was a lot of fun tinkering with the website to find a way to get free food.

In my ICT class for school, we were taught how to change prices on websites using the developer tools, but I never thought that would apply to the real world. Turns out, it does.

Remember, ALWAYS get permission before you try to find vulnerabilities in a website. I was lucky that Red Rooster was understanding and thankful for my report, but not all companies are like that.

### Thanks for reading!