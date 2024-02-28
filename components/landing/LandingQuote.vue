<template>
    <figure class="quote">
        <blockquote>
            <p> {{  quote.quote  }}</p>
            <figcaption> &mdash; {{ quote.author }}, <cite>Dummyjson</cite></figcaption>
        </blockquote>
    </figure>
</template>

<script setup lang="ts">
const { quote, getRandomQuote } = useQuote();
await getRandomQuote();
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