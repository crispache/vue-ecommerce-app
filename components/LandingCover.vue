<template>
    <section>
        <div class="cover-info">
            <h1> Hola, {{ user.name }} 👋 </h1>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                previewing layouts and visual mockups.
            </p>
            <v-btn size="x-large" color="secondary">Ver todas las categorias</v-btn>
        </div>

        <div class="user-info">
            <v-card class="my-12 pa-2" min-width="300" width="374" elevation="16">
                <v-img contain height="250" :src="user.photoUrl" alt="Usuario"></v-img>
                <v-card-title>{{ user.name }}</v-card-title>
                <v-card-text class="pa-0">
                    <v-list lines="two">
                        <v-list-item :title="user.address" subtitle="Dirección">
                            <template #prepend>
                                <v-avatar color="grey-lighten-1">
                                    <v-icon color="white">mdi-map-marker</v-icon>
                                </v-avatar>
                            </template>
                        </v-list-item>
                        <v-list-item :title="user.email" subtitle="Email">
                            <template #prepend>
                                <v-avatar color="grey-lighten-1">
                                    <v-icon color="white">mdi-email</v-icon>
                                </v-avatar>
                            </template>
                        </v-list-item>
                        <v-list-item :title="user.phone" subtitle="Teléfono">
                            <template #prepend>
                                <v-avatar color="grey-lighten-1">
                                    <v-icon color="white">mdi-phone</v-icon>
                                </v-avatar>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </div>
    </section>
</template>

<script setup lang="ts">
import { vm } from '~/api';

// Props
const props = defineProps<{ user: vm.UserDetailEntity }>()

</script>

<style lang="scss" scoped>
section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 50px;

    .cover-info {
        max-width: 45%;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.6rem;
            margin-bottom: 30px;
        }
    }
}
</style>