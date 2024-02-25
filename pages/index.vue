<template>
    <landing-cover :user="user"></landing-cover>
    <landing-quote></landing-quote>
    <landing-categories></landing-categories>
</template>

<script setup lang="ts">
const { user, getDetailUser } = useInfoUser();
await getDetailUser(1);

</script>
