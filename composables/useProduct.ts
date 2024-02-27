import { defaultProductDetail, getCategoriesApi, getProductByIdApi, getProductsByCategoryApi, mapProductCollectionFromApiToVm, mapProductDetailsToVM, mapProductListToVM, type Product, type ProductDetails } from "~/api";

export const useProduct = () => {

    const categories = ref<string[]>([]);
    let product = reactive<ProductDetails>(defaultProductDetail)
    let products = reactive<Product[]>([]);
    const totalProducts = ref<number>(0);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getCategories = async () => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } = await getCategoriesApi();

            if (data) {
                categories.value = [...data];
            } else {
                categories.value = []
            }

            if (hasErrorApi) {
                hasError.value = true;
            }

        } catch (error) {
            categories.value = []
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }


    const getProductsByCategory = async (category: string) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } = await getProductsByCategoryApi(category);

            if (data) {
                Object.assign(products, mapProductCollectionFromApiToVm(data.products));
                totalProducts.value = data.total;
            } else {
                products = [];
                totalProducts.value = 0
            }

            if (hasErrorApi) {
                hasError.value = true;
            }

        } catch (error) {
            products = [];
            totalProducts.value = 0
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }


    const getProductById = async (id: string) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } = await getProductByIdApi(id);

            if (data) {
                Object.assign(product, mapProductDetailsToVM(data));
            } else {
                product = defaultProductDetail;
            }

            if (hasErrorApi) {
                hasError.value = true;
            }

        } catch (error) {
            product = defaultProductDetail;
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }
    

    return {
        // props
        categories,
        products,
        totalProducts,
        product,
        isLoading,
        hasError,

        // methods
        getCategories,
        getProductsByCategory,
        getProductById
    }
}