import type { ProductApi, ProductDetailsApi, ProductsByCategoryApi } from "./api.model";

interface ProductsByCategoryResponse {
    data: {
        products: ProductApi[];
        totalProducts: number;
    }
    hasError?: boolean;
}

interface ProductDetailsByIdResponse {
    data: ProductDetailsApi | null;
    hasError?: boolean;
}


export const getProductsByCategoryApi = async(category: string): Promise<ProductsByCategoryResponse> => {
    try {
        const data = await $fetch<ProductsByCategoryApi>(`https://dummyjson.com/products/category/${category}`);
        return { data: { products: data.products, totalProducts: data.total }};
    } catch (error) {
        return { data: { products: [], totalProducts: 0 }, hasError: true}
    }
};

export const getProductDetailsByIdApi = async(id: string): Promise<ProductDetailsByIdResponse> => {
    try {
        const data = await $fetch<ProductDetailsApi>(`https://dummyjson.com/products/${id}`);
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }
};