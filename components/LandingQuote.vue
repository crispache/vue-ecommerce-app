<template>
    <figure class="quote">
        <blockquote>
            <p> Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.
            </p>
            <figcaption> &mdash; Rumi, <cite>Dummyjson</cite></figcaption>
        </blockquote>
    </figure>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.quote {
    display: flex;
    justify-content: center;
    background: #eee;
    padding: 1.5em 1rem;
    margin-bottom: 80px;
   
    blockquote {
        max-width: 38%;
        p {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
    }
}
</style>