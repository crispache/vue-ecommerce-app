<template>
    <article>
        <v-btn prepend-icon="mdi-arrow-left" variant="outlined" class="mb-5" :to="`/category/${product.category}`">
            Listado de productos
        </v-btn>
        <div class="container">
            <div class="product-images">
                <product-images-carousel :images="product.images"></product-images-carousel>
            </div>
            <div class="product-info">
                <product-info-card :product="product"></product-info-card>
            </div>
        </div>
    </article>
</template>
    
<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;
const { product, getProductById } = useProduct();

await getProductById(id)
</script>
    
<style lang="scss" scoped>
article {
    padding: 50px;
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;
        .product-images {
            width: 60rem;
        }
    }
}
</style>