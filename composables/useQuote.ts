import { defaultQuote, getRandomQuoteApi, mapQuoteToVM, type Quote } from "~/api";

/*
TODO: En el manejo de errores, incluiría también un mensaje de error según el error que se esté gestionando...
*/

export const useQuote = () => {

    let quote = reactive<Quote>(defaultQuote);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getRandomQuote = async () => {
        try {
            isLoading.value = true;
            const { data, hasError } = await getRandomQuoteApi();
            
            if(data) {
                Object.assign(quote, mapQuoteToVM(data));
            } else {
                quote = defaultQuote;
            }

            if(hasError) handlingErrors();
           
        } catch (error) {
            handlingErrors();
        } finally {
            isLoading.value = false;
        }
    }

    const handlingErrors = () :void => {
        quote = defaultQuote;
        hasError.value = true;
    }

    return {
        // props
        quote,
        isLoading,
        hasError,

        // methods
        getRandomQuote,
    }
}