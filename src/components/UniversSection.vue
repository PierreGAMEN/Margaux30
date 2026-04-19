<template>
  <section class="univers">

    <!-- Bannière chapitre -->
    <div class="univers-banner" :style="{ backgroundImage: `url(${univers.bgImage})` }">
      <div class="univers-overlay" :style="{ background: overlayColor }"></div>
      <div class="univers-banner-content">
        <span class="univers-num">{{ univers.num }}</span>
        <p class="univers-label" :style="{ color: univers.accentColor }">{{ univers.label }}</p>
        <h2 class="univers-title">
          {{ univers.title }}<br>
          <em>{{ univers.titleItalic }}</em>
        </h2>
        <p class="univers-tagline">{{ univers.tagline }}</p>
      </div>
    </div>

    <!-- Cartes cadeaux -->
    <div class="univers-cards">
      <GiftCard
        v-for="gift in gifts"
        :key="gift.id"
        :gift="gift"
      />
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'
import GiftCard from './GiftCard.vue'

const props = defineProps({
  univers: {
    type: Object,
    required: true,
  },
  gifts: {
    type: Array,
    required: true,
  },
})

// Overlay sombre adapté à chaque univers
const overlayColors = {
  climb: 'linear-gradient(to top, rgba(20,35,20,0.90) 30%, rgba(20,35,20,0.30) 100%)',
  chic:  'linear-gradient(to top, rgba(25,20,15,0.90) 30%, rgba(25,20,15,0.30) 100%)',
  zen:   'linear-gradient(to top, rgba(15,25,35,0.90) 30%, rgba(15,25,35,0.30) 100%)',
}

const overlayColor = computed(() => overlayColors[props.univers.id] ?? overlayColors.climb)
</script>

<style scoped>
.univers {
  display: flex;
  flex-direction: column;
}

/* ── Bannière ───────────────────────────────────────────── */
.univers-banner {
  position: relative;
  min-height: 60vw;
  max-height: 420px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 32px 24px;
  overflow: hidden;
}

.univers-overlay {
  position: absolute;
  inset: 0;
}

.univers-banner-content {
  position: relative;
  z-index: 2;
}

.univers-num {
  font-family: var(--font-display);
  font-size: 72px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.12);
  display: block;
  margin-bottom: -8px;
}

.univers-label {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 8px;
}

.univers-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 7vw, 40px);
  line-height: 1.15;
  color: #f5f0e8;
  margin-bottom: 10px;
}

.univers-title em {
  font-style: italic;
}

.univers-tagline {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  max-width: 320px;
}

/* ── Cartes ─────────────────────────────────────────────── */
.univers-cards {
  background: var(--c-light);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ── Desktop : effet sticky ─────────────────────────────── */
@media (min-width: 768px) {
  .univers {
    flex-direction: row;
    min-height: 100vh;
    align-items: stretch;
  }

  .univers-banner {
    position: sticky;
    top: 0;
    width: 42%;
    max-height: 100vh;
    min-height: 100vh;
    flex-shrink: 0;
    align-items: flex-end;
  }

  .univers-cards {
    width: 58%;
    padding: 40px 32px;
    justify-content: center;
  }
}
</style>