<template>
    <v-card max-width="400" min-height="350" variant="text">
        <v-card-item>
            <v-card-title> {{ product.title }}</v-card-title>
            <v-card-subtitle>
                <span>{{ product.brand }}</span>
            </v-card-subtitle>
            <v-rating :model-value="product.rating" color="amber" density="compact" half-increments readonly size="small">
            </v-rating>
            <div class="description">
                {{ product.description }}
            </div>
        </v-card-item>
        <v-card-actions>
            <v-btn color="primary" class="flex-grow-1" variant="flat" height="48" @click="addToCart(product)">
                Añadir al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { type ProductDetails } from "~/api";
import { useCartStore } from "~/store/useCartStore";

defineProps<{ product: ProductDetails }>();

const { addToCart } = useCartStore();
</script>

<style lang="scss" scoped>
.description {
    font-size: 0.9rem;
    margin: 0.8rem 0;
}
</style>