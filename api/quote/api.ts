import type { QuoteApi } from "./api.model";

interface QuoteResponse {
    data: QuoteApi | null;
    hasError?: boolean;
}

export const getRandomQuoteApi = async(): Promise<QuoteResponse> => {
    try {
        const data = await $fetch<QuoteApi>('https://dummyjson.com/quotes/random');
        return { data };
    } catch (error) {
        return { data: null, hasError: true}
    }
};