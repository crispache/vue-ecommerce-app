<template>
    <v-card min-width="300" max-width="374" elevation="16" class="my-12 pa-2">
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
</template>

<script setup lang="ts">
import type { UserDetailEntity } from '~/api';

// Props
defineProps<{ user: UserDetailEntity }>()

</script>

<style lang="scss" scoped></style>