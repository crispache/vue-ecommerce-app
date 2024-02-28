import { defaultProductDetail, getProductByIdApi, getProductsByCategoryApi, mapProductsByCategoryFromApiToVm, mapProductDetailsToVM, type Product, type ProductDetails } from "~/api";

export const useProduct = () => {

    let products = reactive<Product[]>([]);
    let product = reactive<ProductDetails>(defaultProductDetail)

    const totalProducts = ref<number>(0);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getProductsByCategory = async (category: string) => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } = await getProductsByCategoryApi(category);

            Object.assign(products, mapProductsByCategoryFromApiToVm(data.products));
            totalProducts.value = data.totalProducts;

            if (hasErrorApi) handlingErrorsProductsByCategory();

        } catch (error) {
            handlingErrorsProductsByCategory();
        } finally {
            isLoading.value = false;
        }
    }

    const handlingErrorsProductsByCategory = (): void => {
        products = [];
        totalProducts.value = 0
        hasError.value = true;
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
        products,
        totalProducts,
        product,
        isLoading,
        hasError,

        // methods
        getProductsByCategory,
        getProductById
    }
}