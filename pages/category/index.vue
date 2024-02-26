<template>
    <section>
        <h1> Listado de categorías </h1>
        <div class="category-list">
            <v-card v-for="(category, index) in categories" :key="index" color="indigo" variant="outlined" height="100" width="225" hover>
                <v-card-item>
                    <v-card-title class="text-capitalize">
                        {{ category }}
                    </v-card-title>
                </v-card-item>
            </v-card>
        </div>
    </section>
</template>

<script setup lang="ts">
const { categories, getCategories } = useProduct();
await getCategories();

</script>

<style lang="scss" scoped>
section {
    padding: 50px;

    h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .category-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;

        .v-card-item {
            height: 100%;
            text-align: center;
        }
    }
}
</style>
