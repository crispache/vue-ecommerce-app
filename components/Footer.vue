<template>
    <v-footer app>
        <p>
            <strong> Copyright © {{ currentYear }}</strong>. All Rights Reserved.
        </p>
    </v-footer>
</template>

<script setup lang="ts">
const currentYear = ref<number>(new Date().getFullYear());
</script>

<style lang="scss" scoped>
footer {
    background-color: black;
    color: white;
    justify-content: center;
    height: 60px;
    padding: 10px;
    width: 100%;
}
</style>