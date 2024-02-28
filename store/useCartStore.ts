import type { ProductDetails } from "~/api";


type CartItem = { quantity: number; data: ProductDetails }
type CartItemRecord = Record<ProductDetails['id'], CartItem>

export const useCartStore = defineStore('cart', () => {

    // state
    const cartProducts = ref<CartItemRecord>({})

    // getters
    const totalProductsCart = computed(() => {
        return Object.values(cartProducts.value).reduce((total, item) => {
            return total + item.quantity;
        }, 0)
    })

    // Actions
    const addToCart = (item: ProductDetails) => {
        const { id } = item;
        const newCartItem = {
            quantity: cartProducts.value[id]?.quantity + 1 || 1,
            data: item,
        }

        if (cartProducts.value[id]) {
            cartProducts.value[id] = newCartItem;
        } else {
            cartProducts.value = {
                ...cartProducts.value,
                [id]: newCartItem
            }
        }
    }

    return {
        cartProducts,
        totalProductsCart,
        addToCart
    }
})