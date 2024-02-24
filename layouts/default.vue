<template>
    <v-app>
        <v-app-bar height="70">
            <template #prepend>
                <img src="/logo.png" alt="Logo Innatial" width="150" />
            </template>

            <template #append>
                <v-btn class="mr-1" stacked>
                    <v-badge content="1" color="primary">
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </v-btn>
                <span> Hola {{ userName }} </span>
            </template>
        </v-app-bar>

        <v-main>
            <slot />
        </v-main>

        <v-footer app>
            <p>
                <strong> Copyright © {{ currentYear }}</strong>. All Rights Reserved.
            </p>
        </v-footer>
    </v-app>
</template>

<script setup lang="ts">
const currentYear = ref<number>(new Date().getFullYear());
const userName = ref<string>('Pepe');
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