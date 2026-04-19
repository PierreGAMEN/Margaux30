<template>
    <section class="recap">
        <div class="recap-header">
            <p class="recap-eyebrow">La liste complète</p>
            <h2 class="recap-title">
                Tous les cadeaux,<br>
                <em>une intention.</em>
            </h2>
            <p class="recap-desc">
                Chaque contribution compte. Même 10 €, c'est déjà un bout du chemin.
                La cagnotte est ouverte, il n'y a pas de minimum.
            </p>
        </div>

        <ul class="recap-list">
            <li v-for="gift in gifts" :key="gift.id" class="recap-item">
                <div class="recap-item-left">
                    <span class="recap-item-brand">{{ gift.brand }}</span>
                    <span class="recap-item-name">{{ gift.name }}</span>
                </div>
                <span class="recap-item-price">{{ gift.price }} €</span>
            </li>
        </ul>

        <div class="recap-total">
            <span class="recap-total-label">Total</span>
            <span class="recap-total-amount">{{ total }} €</span>
        </div>

        <a class="recap-cta" :href="cagnotteUrl" target="_blank" rel="noopener">✦ Contribuer à la cagnotte</a>

        <p class="recap-note">
            Merci de votre générosité pour les 30 ans de Margaux ✦
        </p>
    </section>
</template>

<script setup>
defineProps({
    gifts: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    cagnotteUrl: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
.recap {
    background: var(--c-dark-2);
    color: #f5f0e8;
    padding: 56px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

/* ── Header ─────────────────────────────────────────────── */
.recap-eyebrow {
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--c-gold);
    margin-bottom: 12px;
}

.recap-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 8vw, 44px);
    line-height: 1.1;
    margin-bottom: 16px;
}

.recap-title em {
    font-style: italic;
    color: var(--c-gold);
}

.recap-desc {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.7;
    max-width: 480px;
}

/* ── Liste ───────────────────────────────────────────────── */
.recap-list {
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.recap-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    gap: 16px;
}

.recap-item-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.recap-item-brand {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--c-gold);
    font-weight: 500;
}

.recap-item-name {
    font-family: var(--font-display);
    font-size: 15px;
    line-height: 1.25;
}

.recap-item-price {
    font-size: 18px;
    font-weight: 500;
    flex-shrink: 0;
}

/* ── Total ───────────────────────────────────────────────── */
.recap-total {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-top: 8px;
}

.recap-total-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.recap-total-amount {
    font-family: var(--font-display);
    font-size: 40px;
    color: #f5f0e8;
}

/* ── CTA ─────────────────────────────────────────────────── */
.recap-cta {
    display: block;
    text-align: center;
    background: var(--c-gold);
    color: var(--c-dark);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 18px 24px;
    border-radius: 2px;
    transition: background 0.2s;
}

.recap-cta:active {
    background: var(--c-gold-light);
}

/* ── Note ────────────────────────────────────────────────── */
.recap-note {
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
}

/* ── Desktop ─────────────────────────────────────────────── */
@media (min-width: 768px) {
    .recap {
        padding: 80px 64px;
        max-width: 720px;
        margin: 0 auto;
    }
}
</style>