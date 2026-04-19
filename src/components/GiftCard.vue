<template>
    <article class="gift-card reveal" ref="cardEl" :style="{ transitionDelay: `${index * 80}ms` }">
        <div class="gift-card-img">
            <img v-if="gift.imageUrl" :src="gift.imageUrl" :alt="gift.name" loading="lazy" @error="onImgError" />
            <div v-if="imgError || !gift.imageUrl" class="gift-card-emoji">
                {{ gift.emoji }}
            </div>
        </div>

        <div class="gift-card-body">
            <p class="gift-brand">{{ gift.brand }}</p>
            <h3 class="gift-name">{{ gift.name }}</h3>
            <p class="gift-desc">{{ gift.description }}</p>
            <div class="gift-footer">
                <span class="gift-price">{{ gift.price }} €</span>
                <a class="gift-link" :href="gift.productUrl" target="_blank" rel="noopener">Voir le produit →</a>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    gift: { type: Object, required: true },
    index: { type: Number, default: 0 },
})

const imgError = ref(false)
const onImgError = () => { imgError.value = true }

const cardEl = ref(null)
let observer = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )
    if (cardEl.value) observer.observe(cardEl.value)
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<style scoped>
.gift-card {
    display: flex;
    gap: 0;
    background: var(--c-white);
    border: 1px solid var(--c-border);
    border-radius: 3px;
    overflow: hidden;
    transition: box-shadow 0.2s;
}

.gift-card:active {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Image */
.gift-card-img {
    width: 110px;
    flex-shrink: 0;
    background: #f0ebe3;
    position: relative;
    overflow: hidden;
    min-height: 140px;
}

.gift-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
}

.gift-card-emoji {
    width: 100%;
    height: 100%;
    min-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
}

/* Body */
.gift-card-body {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.gift-brand {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--c-gold);
    font-weight: 500;
}

.gift-name {
    font-family: var(--font-display);
    font-size: 16px;
    line-height: 1.25;
    color: var(--c-dark);
}

.gift-desc {
    font-size: 12px;
    color: #888;
    line-height: 1.55;
    flex: 1;
    margin-top: 4px;
}

.gift-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.gift-price {
    font-size: 20px;
    font-weight: 500;
    color: var(--c-dark);
}

.gift-link {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c-gold);
    text-decoration: none;
    border-bottom: 1px solid var(--c-border);
    padding-bottom: 1px;
}

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
}

.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>