export interface ProductList {
    products: Product[];
    total:    number;
}

export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              string;
    rating:             number;
    brand:              string;
    photoUrl:           string;
}
