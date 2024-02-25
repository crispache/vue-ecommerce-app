import { getCategoriesApi } from "~/api";

export const useProduct = () => {

    const categories = ref<string[]>([]);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getCategories = async () => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } = await getCategoriesApi();

            if (data) {
                categories.value = [...data];
                console.log(categories)
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

    return {
        // props
        categories,
        isLoading,
        hasError,

        // methods
        getCategories,
    }
}