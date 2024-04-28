<template>
  <HomeCard>
    <div class="text-2xl slideShineY font-bold mb-8">{{ $t('home.white.t1') }}</div>
    <div class="h-100 overflow-y-auto">
      <HomeTier1 v-if="tierStore.pre.current_tier_number" :index="tierStore.pre.current_tier_number" :dark="false" />
      <div v-if="tierStore.pre.current_tier_number > 1">
        <HomeTier1 v-for="item in tierStore.pre.current_tier_number - 1" :key="item" :index="item" dark />
      </div>
    </div>
  </HomeCard>
</template>
<script setup lang="ts">
import { useTierStore } from '@/stores'
const tierStore = useTierStore()
</script>