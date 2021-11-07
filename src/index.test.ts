import Checkout from "./index"

describe("Checkout Myer", () => {
    const rule = [
        {
            client: "Axil",
            product: "standout",
            discountPrice: 299.99,
        },
    ]

    const checkout = new Checkout(rule)
    test("add() returns an Array", () => {
        expect(checkout.add("standout")).toStrictEqual(["standout"])
    })

    test("remove() returns an empty Array", () => {
        expect(checkout.remove("standout")).toStrictEqual([])
    })

    test("total() return a number", () => {
        expect(typeof checkout.total()).toBe("number")
    })
})
