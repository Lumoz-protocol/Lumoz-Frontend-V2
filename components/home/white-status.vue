<template>
  <div v-if="walletStore.account" class="flex flex-col items-center justify-center">
    <div class="flex font-bold">
      <div>{{ $t('home.white.my1') }}</div>
      <div class="ml-1">{{ tierStore.user.preTier === -1 ? $t('home.white.none') : 'Tier ' + (tierStore.user.preTier || '-') }}</div>
    </div>
    <!-- <div class="flex font-bold my-4 lg:my-0">
      <div>{{ $t('home.white.my2') }}</div>
      <div class="ml-1">0</div>
    </div>
    <div class="flex font-bold items-center">
      <div class="flex">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Bottom Center prompts info"
          placement="bottom"
        >
          <div class="icon-box cursor-pointer mr-2">
            <img src="@/assets/img/icon/info-circle.svg" class="icon-dark w-6" alt="">
            <img src="@/assets/img/icon/info-circle-light.svg" class="icon-light w-6" alt="">
          </div>
          <template #content>
            <div class="w-60 text-left">
              Invite others to use your invite code for purchases will earn you a <span class="text-primary-900">5% reward</span> based on their purchase amount. Rewards will be distributed after the conclusion of the public sale.
            </div>
          </template>
        </el-tooltip>
       
        {{ $t('home.white.my3') }}
      </div>
      <div class="ml-1 flex items-center">
        <span class="text-primary-900">-</span>
        <div class="icon-box cursor-pointer">
          <img src="@/assets/img/icon/copy.svg" class="icon-dark w-6" alt="">
          <img src="@/assets/img/icon/copy-light.svg" class="icon-light w-6" alt="">
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { useTierStore, useWalletStore } from '@/stores'
const tierStore = useTierStore()
const walletStore = useWalletStore()
</script>
