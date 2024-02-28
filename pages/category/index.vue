<template>
    <section>
        <v-btn prepend-icon="mdi-arrow-left" variant="outlined" class="mb-5" to="/">
            Volver al inicio
        </v-btn>
        <h1> Listado de categorías </h1>
        <div class="category-list">
            <v-card v-for="(category, index) in categories" :key="index" variant="text" height="255" width="270">
                <v-card-item>
                    <NuxtLink :to="`/category/${category}`">
                    <v-img contain src="https://dummyimage.com/300x250/dbdede/0011ff.png&" :alt="`Foto de ${category}`"
                        class="mb-5 cursor-pointer"></v-img>
                    </NuxtLink>
                    <v-card-title class="text-capitalize">
                        {{ category }}
                    </v-card-title>
                </v-card-item>
            </v-card>
        </div>
    </section>
</template>

<script setup lang="ts">
const { categories, getCategories } = useCategory();
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
