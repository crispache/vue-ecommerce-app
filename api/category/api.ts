
interface CategoriesResponse {
    data: string[];
    hasError?: boolean;
}

export const getCategoriesApi = async(): Promise<CategoriesResponse> => {
    try {
        const data = await $fetch<string[]>('https://dummyjson.com/products/categories');
        return { data };
    } catch (error) {
        return { data: [], hasError: true}
    }
};