import { getCategoriesApi } from "~/api";

export const useCategory = () => {

    const categories = ref<string[]>([]);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getCategories = async () => {
        try {
            isLoading.value = true;
            const { data, hasError } = await getCategoriesApi();
            categories.value = [...data];
            if (hasError) handlingErrors();

        } catch (error) {
            handlingErrors();
        } finally {
            isLoading.value = false;
        }
    }

    const handlingErrors = () :void => {
        categories.value = [];
        hasError.value = true;
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