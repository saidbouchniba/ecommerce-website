const stripe = require("stripe")
const secretkey = "sk_test_51Q5rzZKnU2QaIK2qHE86NuyomP8aEjTh7f0XxyQjeYj20CurkgnX1t6OJqfNOdd1xMp2M3KeDwlKWq1w20RW6BhR00aRElQy40"
const Stripe = stripe(secretkey)
exports.payment = async (req, res) => {
    console.log(req.body);
    try {
        const line_items = req.body.cart.map(el => {
            return {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: el.product.title,
                        images: [el.product.Image],
                        description: el.product.description,
                        metadata: {
                            id: el.product._id
                        }
                    },
                    unit_amount: el.product.price * 100
                },
                quantity: el.quantity
            }
        })
        const session = await Stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        })
        res.status(200).send({ url: session.url })
    } catch (error) {
        res.status(500).send({ Msg: "Please try again", error })

    }
}