<template>
  <div>
    <img v-if="!router.currentRoute.value.path.toLowerCase().startsWith('/quidditch')" src="@/assets/img/share/footer.avif" class="h-80 w-full">
    <div class="-mt-40">
      <div class="w-full flex items-center justify-center">
        <div class="footer-linear-1 h-0.5 w-1/2"></div>
        <div class="footer-linear-2 h-0.5 w-1/2"></div>
      </div>
      <div class="bg-[#000000] py-16 px-4 lg:px-32 lg:flex justify-between">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div class="flex flex-col" v-for="item, index in footer" :key="index">
            <div class="text-primary-900 text-lg mb-4 text-center lg:text-left">{{ item.name }}</div>
            <div class="mt-2 flex justify-center lg:justify-start" v-for="_item, _index in item.list" :key="_index">
              <a class="cursor-pointer text-[#ffffffaa] hover:(text-primary-900) hvr-pulse" @click="to(_item.url)">{{ _item.name }}</a>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col mt-16 lg:mt-0">
            <div class="text-primary-900 text-lg mb-4 text-center lg:text-left">{{ $t('footer.find') }}</div>
            <div class="flex justify-center lg:justify-start footer-icons">
              <a href="https://twitter.com/LumozOrg" target="_blank" class="rounded-full hvr-float">
                <img src="@/assets/img/share/twitter.svg" class="w-10">
              </a>
              <a href="https://discord.com/invite/lumozorg" target="_blank" class="ml-4 rounded-full hvr-float">
                <img src="@/assets/img/share/dc.svg" class="w-10">
              </a>
              <a href="mailto:contact@lumoz.org" class="ml-4 rounded-full hvr-float">
                <img src="@/assets/img/share/email.svg" class="w-10">
              </a>
              <a href="https://www.youtube.com/@LumozOrg" target="_blank" class="ml-4 rounded-full hvr-float">
                <img src="@/assets/img/share/youtube.svg" class="w-10">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#000000]">
      <div class="mx-4 lg:mx-32 py-4 border-t border-[#ffffff40] text-[#ffffff40] text-center">
        © 2024 Lumoz Org, Inc
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const vm = getCurrentInstance()?.proxy
const router = useRouter()
const footer = ref([
  {
    name: vm.$t('footer.solutions'),
    list: [
      {
        name: vm.$t('footer.s4'),
        url: 'https://node.lumoz.org'
      },
      {
        name: vm.$t('footer.s1'),
        url: '/compute-layer'
      },
      {
        name: vm.$t('footer.s2'),
        url: '/rollups'
      },
      {
        name: vm.$t('footer.s3'),
        url: '/launchbase'
      }
    ]
  },
  {
    name: vm.$t('footer.community'),
    list: [
      {
        name: vm.$t('footer.c1'),
        url: '/miners'
      },
      {
        name: vm.$t('footer.c2'),
        url: '/lumoz-points'
      },
      {
        name: vm.$t('footer.c3'),
        url: '/ecosystems'
      },
      {
        name: vm.$t('footer.c4'),
        url: 'https://mirror.xyz/lumozorg.eth'
      },
      {
        name: vm.$t('footer.c5'),
        url: 'https://docs.lumoz.org/'
      },
      {
        name: vm.$t('footer.c6'),
        url: 'https://github.com/lumoz-protocol/Media-Kits'
      },
    ]
  }
])

const to = (url:string) => {
  if (url.startsWith('/')) {
    router.push(url)
  } else {
    window.open(url)
  }
}
</script>
<style scoped>
.footer-linear-1 {
  background: linear-gradient(90deg, #66C54500 0%, #66C545 100%);
}
.footer-linear-2 {
  background: linear-gradient(90deg, #66C545 0%, #66C54500 100%);
}
.footer-icons a:hover {
  box-shadow: #befe00 0px 0px 20px 1px;
}
</style>