<template>
    <v-app-bar height="70" class="pr-4 pl-4">
        <template #prepend>
            <img src="/logo.png" alt="Logo Innatial" width="150" />
        </template>

        <template #append>
            <v-btn class="mr-1" stacked>
                <v-badge :content="totalProductsCart" color="primary">
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
            <span> Hola {{ userName || userDetails.name }} </span>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
/*
TODO: Pondría un index.ts en la carpeta Store para facilitar la importación, 
o haría alguna configuración para que todo lo que está dentro de la carpeta store se pueda importar fácilmente como las componentes,etc.*
*/
import { useCartStore } from '~/store/useCartStore';
import { useUserStore } from '~/store/useUserStore';

const userStore = useUserStore();
const cartStore = useCartStore();
const { userName } = storeToRefs(userStore);

const { userDetails, getUserDetails } = useUser();

/*
TODO: Esto es un "parche" rápido, ya que en teoría si el usuario está loggeado, a través de un "login", en la Store (useUser) estaría los datos del usuario. 
Ya que te puede interesar tenerlo en un store para que estén fácilmente accesibles desde cualquier parte de la app porque lo vas usar en distintos sitios.
Pero, si ahora no pasas directamente por la ruta de inicio(landing) que es donde se lanza la Api para obtener los datos del usuario y vas directamente 
a otra ruta no aparece el nombre del usuario. También se hubiera lanzado la API desde aquí(header), y en la Landing coger los datos de la userStore...
*/
if (userName) {
    await getUserDetails(1);
}

const { totalProductsCart } = storeToRefs(cartStore);
</script>