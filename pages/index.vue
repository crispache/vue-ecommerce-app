<template>
    <landing-cover :user="user"></landing-cover>
</template>

<script setup lang="ts">
const { user, isLoading, hasError , getDetailUser} = useInfoUser()

await getDetailUser(1)

</script>
