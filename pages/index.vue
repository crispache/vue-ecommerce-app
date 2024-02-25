<template>
    <landing-cover :user="user"></landing-cover>
</template>

<script setup lang="ts">
const { user, getDetailUser } = useInfoUser();
await getDetailUser(1);

</script>
