import type { ProductApi, ProductListApi } from "./api.model";


interface CategoriesResponse {
    data: string[] | null;
    hasError?: boolean;
}

interface ProductsByCategorysResponse {
    data: ProductListApi | null;
    hasError?: boolean;
}

interface ProductByIdResponse {
    data: ProductApi | null;
    hasError?: boolean;
}



export const getCategoriesApi = async(): Promise<CategoriesResponse> => {
    try {
        const data = await $fetch<string[]>('https://dummyjson.com/products/categories');
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }
};


export const getProductsByCategoryApi = async(category: string): Promise<ProductsByCategorysResponse> => {
    try {
        const data = await $fetch<ProductListApi>(`https://dummyjson.com/products/category/${category}`);
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }
};

export const getProductByIdApi = async(id: string): Promise<ProductByIdResponse> => {
    try {
        const data = await $fetch<ProductApi>(`https://dummyjson.com/products/${id}`);
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }
};