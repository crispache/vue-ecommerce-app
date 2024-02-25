<template>
    <landing-cover :user="user"></landing-cover>
    <landing-quote></landing-quote>
</template>

<script setup lang="ts">
const { user, getDetailUser } = useInfoUser();
await getDetailUser(1);

</script>
