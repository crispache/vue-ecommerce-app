<template>
    <section>
        <h2>Categorías recomendadas</h2>
        <div class="category-list">
            <v-card v-for="(category, index) in categories.slice(0,4)" :key="index" max-width="300" color="indigo" variant="flat">
                <v-card-item>
                    <v-card-title class="text-capitalize">
                        {{ category }}
                    </v-card-title>
                </v-card-item>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </v-card-text>
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
    min-height: 400px;
    padding: 50px;
    margin-bottom: 1rem;

    h2 {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    .category-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
}
</style>