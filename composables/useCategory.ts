import { getCategoriesApi } from "~/api";

/*
TODO: En el manejo de errores, incluiría también un mensaje de error según el error que se esté gestionando...
*/

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