
export interface ProductListApi {
    products: ProductApi[];
    total:    number;
    skip:     number;
    limit:    number;
}

export interface ProductApi {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}
