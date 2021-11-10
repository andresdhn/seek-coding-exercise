import Checkout from "./index"

describe("Checkout Myer", () => {
    const rule = [
        {
            client: "Jora",
            product: "premium",
            productDiscountTarget: 4,
            discountPrice: 379.99,
        },
    ]

    const checkout = new Checkout(rule)
    test("add() returns an Array", () => {
        checkout.add("standout")
        checkout.add("standout")
        checkout.add("standout")
        expect(checkout.products.length).toEqual(3)
    })

    test("remove() returns an empty Array", () => {
        expect(checkout.remove("standout")).toStrictEqual([])
    })

    test("total() return a number", () => {
        expect(typeof checkout.total()).toBe("number")
    })

    test("total()", () => {
        checkout.add("premium")
        checkout.add("premium")
        checkout.add("premium")
        checkout.add("premium")
        checkout.add("premium")
        expect(checkout.total()).toEqual(1519.96 + 379.99)
    })
})
