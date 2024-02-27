<template>
    <article>
        <v-btn prepend-icon="mdi-arrow-left" variant="outlined" class="mb-5" :to="`/category/${product.category}`">
            Listado de productos
        </v-btn>
        <div class="container">
            <div class="product-images">
                <v-carousel height="360">
                    <v-carousel-item v-for="(image, index) in product.images" :key="index" :src="image"
                        alt="Imagen del producto" contain>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="product-info">
                <v-card max-width="400" min-height="350" variant="text">
                    <v-card-item>
                        <v-card-title> {{ product.title }}</v-card-title>
                        <v-card-subtitle>
                            <span>{{ product.brand }}</span>
                        </v-card-subtitle>
                        <v-rating 
                            :model-value="product.rating" 
                            color="amber" density="compact" half-increments readonly
                            size="small">
                        </v-rating>
                        <div class="description">
                            {{ product.description }}
                        </div>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn color="primary" class="flex-grow-1" variant="flat" height="48">
                            Añadir al carrito
                        </v-btn>
                    </v-card-actions>
                </v-card>
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

        .product-info {
            .description {
                font-size: 0.9rem;
                margin: 0.8rem 0;
            }
        }
    }
}
</style>