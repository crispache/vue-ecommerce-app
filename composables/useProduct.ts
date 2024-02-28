import { defaultProductDetail, getProductDetailsByIdApi, getProductsByCategoryApi, mapProductsByCategoryFromApiToVm, mapProductDetailsToVM, type Product, type ProductDetails } from "~/api";
/*
TODO: En el manejo de errores, incluiría también un mensaje de error según el error que se esté gestionando...
*/
export const useProduct = () => {

    let products = reactive<Product[]>([]);
    let productDetails = reactive<ProductDetails>(defaultProductDetail)

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


    const getProductDetailsById = async (id: string) => {
        try {
            isLoading.value = true;
            const { data, hasError } = await getProductDetailsByIdApi(id);

            if (data) {
                Object.assign(productDetails, mapProductDetailsToVM(data));
            } else {
                productDetails = defaultProductDetail;
            }

            if (hasError) handlingErrorsProductDetailsById();

        } catch (error) {
            handlingErrorsProductDetailsById();
        } finally {
            isLoading.value = false;
        }
    }

    const handlingErrorsProductDetailsById = (): void => {
        productDetails = defaultProductDetail;
        hasError.value = true;
    }

    return {
        // props
        products,
        totalProducts,
        productDetails,
        isLoading,
        hasError,

        // methods
        getProductsByCategory,
        getProductDetailsById
    }
}