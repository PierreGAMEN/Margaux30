<template>
  
    <a class="cagnotte-btn"
    :href="cagnotteUrl"
    target="_blank"
    rel="noopener"
  >✦ Contribuer à la cagnotte</a>
</template>

<script setup>
import { cagnotteUrl } from '../data/gifts.js'
</script>

<style scoped>
.cagnotte-btn {
  display: inline-block;
  background: var(--c-gold);
  color: var(--c-dark);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 28px;
  border-radius: 2px;
  transition: background 0.2s;
  white-space: nowrap;
}

.cagnotte-btn:active {
  background: var(--c-gold-light);
}
</style>