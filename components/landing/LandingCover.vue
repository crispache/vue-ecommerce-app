<template>
    <section>
        <div class="cover-info">
            <h1> Hola, {{ user.name }} 👋 </h1>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                previewing layouts and visual mockups.
            </p>
            <NuxtLink to="/category">
                <v-btn size="x-large" color="secondary">Ver todas las categorias</v-btn>
            </NuxtLink>
        </div>
        <div class="user-info">
           <landing-cover-card :user="user"></landing-cover-card>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { UserDetailEntity } from '~/api';

// Props
defineProps<{ user: UserDetailEntity }>()

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