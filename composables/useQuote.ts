import { defaultQuote, getRandomQuoteApi, mapQuoteToVM, type Quote } from "~/api";

export const useQuote = () => {

    let quote = reactive<Quote>(defaultQuote);
    const isLoading = ref<boolean>(false);
    const hasError = ref<boolean>(false);

    const getQuote = async () => {
        try {
            isLoading.value = true;
            const { data, hasError: hasErrorApi } =  await getRandomQuoteApi();
            
            if(data) {
                Object.assign(quote, mapQuoteToVM(data));
            } else {
                quote = defaultQuote
            }

            if(hasErrorApi) {
                hasError.value = true;
            }
           
        } catch (error) {
            quote = defaultQuote
            hasError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        // props
        quote,
        isLoading,
        hasError,

        // methods
        getQuote,
    }
}