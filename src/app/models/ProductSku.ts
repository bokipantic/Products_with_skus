export interface ProductSku {
    rb: number,
    sku: string,
    productId: number
}

export const productSkus: ProductSku[] = [
    {
        rb: 1,
        sku: '00-72557-3176',
        productId: 2
    },
    {
        rb: 2,
        sku: '00-72557-3152',
        productId: 2
    },
    {
        rb: 3,
        sku: '00-72557-3164',
        productId: 2
    },
    {
        rb: 4,
        sku: '00-72557-3140',
        productId: 2
    },
    {
        rb: 5,
        sku: 'ŠORCTAIBOKS-CRNIXL',
        productId: 1
    },{
        rb: 6,
        sku: '00000328-CRNAXL',
        productId: 3
    },{
        rb: 7,
        sku: '00000328-CRNAS',
        productId: 3
    },
    {
        rb: 8,
        sku: '00000328-CRNAM',
        productId: 3
    }
]

export interface ProductWithSkus {
    id: number,
    name: string,
    productSkus: ProductSku[]
}