<template>
  <main>
    <HeroSection />

    <UniversSection v-for="u in univers" :key="u.id" :univers="u" :gifts="giftsByUnivers(u.id)" />

    <RecapSection :gifts="gifts" :total="totalPrice" :cagnotteUrl="cagnotteUrl" />
    <SiteFooter/>
  </main>
</template>

<script setup>
import { univers, gifts, totalPrice, cagnotteUrl } from '@/data/gifts.js'
import HeroSection from '@/components/HeroSection.vue'
import UniversSection from '@/components/UniversSection.vue'
import RecapSection from '@/components/RecapSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const giftsByUnivers = (universId) =>
  gifts.filter(g => g.universId === universId)
</script>