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

export interface ProductDetails {
    id:                 number;
    title:              string;
    description:        string;
    price:              string;
    rating:             number;
    brand:              string;
    category:           string;
    images:             string[];
}


export const defaultProductDetail: ProductDetails = {
    id: 0,
    title: '',
    description: '',
    price: '',
    rating: 0,
    brand: '',
    category: '',
    images: []
}