<template>
    <v-carousel height="360">
        <v-carousel-item 
            v-for="(image, index) in images" 
            :key="index" 
            :src="image" alt="Imagen del producto"
            contain>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup lang="ts">
    defineProps<{ images: string[] }>()
</script>