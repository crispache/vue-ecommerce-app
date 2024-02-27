<template>
    <section>
        <v-btn prepend-icon="mdi-arrow-left" variant="outlined" class="mb-5" to="/category">
            Listado de categorías
        </v-btn>
        <h1> Categoría {{ category }}</h1>
        <div class="total-products">
            <p>Total: {{ totalProducts }}</p>
        </div>
        <div class="product-list">
            <article v-for="(product, index) in products" :key="index">
                <v-card width="330" height="420" variant="text" hover>
                    <v-img contain height="235" :src="product.photoUrl"></v-img>
                    <v-card-item>
                        <v-card-title>{{ product.title }}</v-card-title>
                        <v-card-subtitle>
                            <span>{{ product.brand }}</span>
                        </v-card-subtitle>
                        <div class="description">
                            {{ product.description }}
                        </div>
                        <div class="rating-price">
                            <v-rating :model-value="product.rating" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>
                            <p class="price"> {{ product.price }}</p>
                        </div>
                    </v-card-item>
                </v-card>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">

const route = useRoute();
const category = route.params.category as string;
const { products, totalProducts, getProductsByCategory } = useProduct();
await getProductsByCategory(category);

</script>

<style lang="scss" scoped>
section {
    padding: 50px;

    h1 {
        font-size: 2rem;
    }

    .total-products {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

        .description {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.9rem;
            height: 45px;
            margin: 0.8rem 0;
        }

        .rating-price {
            display: flex;
            justify-content: space-between;
            align-content: center;
        }

        .price {
            font-size: 1.4rem;
        }
    }
}
</style>
