

import type { QuoteApi } from "./api.model";
import * as vm from "./api.vm";

export const mapQuoteToVM = (data: QuoteApi): vm.Quote => ({
    quote: data.quote,
    author: data.author,
})
