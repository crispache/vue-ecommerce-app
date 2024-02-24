<template>
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
</template>

<script setup lang="ts">
const userName = ref<string>('Pepe');
</script>