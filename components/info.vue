<template>
  <Gradient>
    <div
      class="p-4 flex justify-center flex-col cursor-pointer"
      :class="size === 'small' ? 'py-4' : ''"
    >
      <div class="text-sm">{{ title }}</div>
      <div v-if="format" class="mt-2 font-bold h-7">
        <div v-if="loading" class="sp sp-bars ml-3 mt-2"></div>
        <span v-else :class="size === 'small' ? 'text-base' : ''"
          >{{ Number(content || 0).toLocaleString() }} {{ unit }}</span
        >
      </div>
      <div v-else>
        <div class="mt-2 font-bold h-7">
          <div v-if="loading" class="sp sp-bars ml-3 mt-2"></div>
          <span v-else :class="size === 'small' ? 'text-base' : ''">{{ content }} {{ unit }}</span>
        </div>
      </div>
      <div v-if="!loading">
        <slot></slot>
      </div>
    </div>
  </Gradient>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    content: string
    format: boolean
    unit: string
    loading: boolean
    size: string
  }>(),
  {
    title: '',
    content: '',
    format: true,
    unit: '',
    loading: false,
    size: 'normal'
  }
)
</script>
<style scoped>
.sp {
  height: 14px;
  clear: both;
}
.sp-bars {
  position: relative;
  width: 2px;
  border-radius: 100px;
  background-color: #BEFE00DD;
  -webkit-animation: spBars 1s infinite linear;
  animation: spBars 1s infinite linear;
}

.sp-bars:after, .sp-bars:before {
  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 100px;
  background-color: inherit;
}

.sp-bars:before {
  left: -8px;
  -webkit-animation: spBarsBefore 1s infinite linear;
  animation: spBarsBefore 1s infinite linear;
}

.sp-bars:after {
  right: -8px;
  -webkit-animation: spBarsAfter 1s infinite linear;
  animation: spBarsAfter 1s infinite linear;
}

@keyframes spBarsBefore {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.25);
  }
  50% {
    transform: scale(1, 0.75);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes spBars {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 1.25);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes spBarsAfter {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, 0.75);
  }
  75% {
    transform: scale(1, 1.25);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>