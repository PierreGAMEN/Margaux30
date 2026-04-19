<template>
  <footer class="footer">
    <span class="footer-name">Margaux · 30 ans</span>
    <span class="footer-sub">Organisé avec amour · Haute-Savoie 2025</span>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--c-dark);
  color: rgba(255, 255, 255, 0.35);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.footer-name {
  font-family: var(--font-display);
  font-size: 15px;
  color: #f5f0e8;
}

.footer-sub {
  font-size: 11px;
  letter-spacing: 0.12em;
}
</style>