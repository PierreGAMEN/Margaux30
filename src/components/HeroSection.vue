<template>
  <section class="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="hero-gradient"></div>

    <div class="hero-content">
      <p class="hero-eyebrow">30 ans · L'ascension collective</p>
      <h1 class="hero-title">
        <em>Margaux</em>,<br>
        Celle qui enchaîne les longueurs le samedi,<br>
        et l'élégance le reste de la semaine.
      </h1>
      <p class="hero-sub">Un cadeau en trois temps, pour une femme à 300%</p>
      <div class="hero-scroll-hint">
        <span>Découvrir les cadeaux</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const bgImage = './images/backgroundHero.jpg'
</script>

<style scoped>
.hero {
  min-height: 100svh;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 48px 24px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.92) 30%,
    rgba(10, 10, 10, 0.35) 70%,
    rgba(10, 10, 10, 0.15) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: 16px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 9vw, 64px);
  line-height: 1.08;
  color: #f5f0e8;
  margin-bottom: 16px;
}

.hero-title em {
  font-style: italic;
  color: var(--c-gold);
}

.hero-sub {
  font-family: var(--font-display);
  font-size: clamp(15px, 4vw, 20px);
  font-style: italic;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 32px;
}

.hero-scroll-hint {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.hero-scroll-hint::after {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
}
</style>