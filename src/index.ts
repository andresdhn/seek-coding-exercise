const productPrices = {
    classic: 269.99,
    standOut: 322.99,
    premium: 394.99,
} as {
    [key: string]: number
}

interface Rule {
    product: string
    productDiscountTarget?: number
    productDiscountReward?: number
    discountPrice?: number
}

class Checkout {
    products: string[]
    rules: Rule[]

    constructor(rules: Rule[]) {
        this.products = [] as Array<string>
        this.rules = rules
    }

    add(product: string) {
        this.products.push(product)
        return this.products
    }

    remove(product: string) {
        this.products = this.products.filter((p: string) => p !== product)
        return this.products
    }

    total() {
        return getTotal(this.products, this.rules)
    }
}

export default Checkout

const getTotal = (products: string[], rules: Rule[]): number => {
    let prodCount = 0
    let total = 0

    products.forEach((prod: string) => {
        // Returns full price if the Client has no rules
        const priceRule = rules.filter((prodRule: Rule) => prodRule.product === prod)
        if (priceRule.length <= 0) {
            total += productPrices[prod]
        }

        // Returns discounted price if available
        if (Object.prototype.hasOwnProperty.call(priceRule[0], "discountPrice")) {
            total += priceRule[0].discountPrice!
        }

        // Returns product price until discount target condition is Met
        if (Object.prototype.hasOwnProperty.call(priceRule[0], "productDiscountTarget")) {
            prodCount += 1

            if (prodCount !== priceRule[0].productDiscountTarget) {
                total += productPrices[prod]
            }
        }
    })

    return total
}
