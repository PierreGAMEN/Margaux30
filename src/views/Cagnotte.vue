<template>
  <main class="cagnotte-page">

    <div class="cagnotte-hero">
      <p class="eyebrow">Participer</p>
      <h1 class="cagnotte-title">Contribuer à<br><em>la cagnotte</em></h1>
      <p class="cagnotte-desc">
        Choisis la méthode qui te convient le mieux.
        Chaque contribution, même petite, compte énormément.
      </p>
    </div>

    <div class="cagnotte-options">

      <!-- Lydia -->
      <div class="option-card">
        <div class="option-header">
          <span class="option-num">01</span>
          <div>
            <h2 class="option-name">Lydia</h2>
            <p class="option-tag">Via l'application mobile</p>
          </div>
        </div>
        <p class="option-desc">
          Ouvre l'app Lydia, recherche <strong>{{ lydiaHandle }}</strong> ou scanne le QR code.
          Indique le montant et c'est tout.
        </p>
        <a class="option-cta" :href="lydiaUrl" target="_blank" rel="noopener">
          Payer avec Lydia →
        </a>
      </div>

      <!-- Weeroo -->
      <div class="option-card">
        <div class="option-header">
          <span class="option-num">02</span>
          <div>
            <h2 class="option-name">Weeroo</h2>
            <p class="option-tag">Cagnotte en ligne</p>
          </div>
        </div>
        <p class="option-desc">
          Accède à la cagnotte en ligne et contribue par carte bancaire en quelques secondes.
        </p>
        <a class="option-cta" :href="weerooUrl" target="_blank" rel="noopener">
          Accéder à la cagnotte →
        </a>
      </div>

      <!-- RIB -->
      <div class="option-card">
        <div class="option-header">
          <span class="option-num">03</span>
          <div>
            <h2 class="option-name">Virement bancaire</h2>
            <p class="option-tag">Sans frais, sans appli</p>
          </div>
        </div>
        <p class="option-desc">
          Effectue un virement depuis ton application bancaire avec les coordonnées ci-dessous.
        </p>
        <div class="rib-block">
          <div class="rib-line">
            <span class="rib-label">Titulaire</span>
            <span class="rib-value">{{ rib.titulaire }}</span>
          </div>
          <div class="rib-line">
            <span class="rib-label">IBAN</span>
            <span class="rib-value rib-iban">{{ rib.iban }}</span>
          </div>
          <div class="rib-line">
            <span class="rib-label">BIC</span>
            <span class="rib-value">{{ rib.bic }}</span>
          </div>
          <div class="rib-line">
            <span class="rib-label">Référence</span>
            <span class="rib-value">{{ rib.reference }}</span>
          </div>
        </div>
        <button class="option-cta rib-copy" @click="copyIban">
          {{ ibanCopied ? '✓ IBAN copié !' : 'Copier l\'IBAN' }}
        </button>
      </div>

    </div>

    <div class="cagnotte-back">
      <RouterLink to="/" class="back-link">← Retour aux cadeaux</RouterLink>
    </div>

    <SiteFooter />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import SiteFooter from '../components/SiteFooter.vue'

// ── À remplir ───────────────────────────────────────────────
const lydiaHandle = '@ton-handle-lydia'
const lydiaUrl    = 'https://lydia-app.com/pay?...' // ← lien Lydia

const weerooUrl   = 'https://weeroo.fr/...' // ← lien Weeroo

const rib = {
  titulaire: 'Prénom Nom',
  iban:      'FR76 XXXX XXXX XXXX XXXX XXXX XXX',
  bic:       'XXXXXXXX',
  reference: 'Margaux30',
}
// ────────────────────────────────────────────────────────────

const ibanCopied = ref(false)

const copyIban = async () => {
  await navigator.clipboard.writeText(rib.iban.replace(/\s/g, ''))
  ibanCopied.value = true
  setTimeout(() => { ibanCopied.value = false }, 2500)
}
</script>

<style scoped>
.cagnotte-page {
  min-height: 100vh;
  background: var(--c-light);
}

/* ── Hero ────────────────────────────────────────────────── */
.cagnotte-hero {
  padding: 100px 24px 40px;
  background: var(--c-dark);
  color: #f5f0e8;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: 12px;
}

.cagnotte-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 9vw, 56px);
  line-height: 1.1;
  margin-bottom: 16px;
}

.cagnotte-title em {
  font-style: italic;
  color: var(--c-gold);
}

.cagnotte-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
  max-width: 480px;
}

/* ── Options ─────────────────────────────────────────────── */
.cagnotte-options {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 640px;
  margin: 0 auto;
}

.option-card {
  background: var(--c-white);
  border: 1px solid var(--c-border);
  border-radius: 3px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.option-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.option-num {
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--c-border);
  line-height: 1;
  flex-shrink: 0;
}

.option-name {
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1.1;
}

.option-tag {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-top: 4px;
}

.option-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
}

.option-cta {
  display: block;
  text-align: center;
  background: var(--c-dark);
  color: #f5f0e8;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 24px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: var(--font-body);
  transition: background 0.2s;
}

.option-cta:active {
  background: var(--c-dark-3);
}

/* ── RIB ─────────────────────────────────────────────────── */
.rib-block {
  background: var(--c-light);
  border-radius: 2px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rib-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.rib-label {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #999;
  flex-shrink: 0;
}

.rib-value {
  font-size: 14px;
  font-weight: 500;
  text-align: right;
}

.rib-iban {
  font-size: 12px;
  letter-spacing: 0.05em;
  word-break: break-all;
}

.rib-copy {
  background: transparent;
  color: var(--c-dark);
  border: 1px solid var(--c-border);
}

.rib-copy:active {
  background: var(--c-light);
}

/* ── Back ────────────────────────────────────────────────── */
.cagnotte-back {
  text-align: center;
  padding: 32px 24px 48px;
}

.back-link {
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999;
  text-decoration: none;
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 2px;
}
</style>