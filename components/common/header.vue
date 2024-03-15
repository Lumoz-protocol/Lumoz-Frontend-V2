<template>
  <div class="fixed z-1 top-0 left-0 right-0 h-20 bg-filter flex items-center justify-between px-4">
    <CommonLogo />
    <div class="hidden lg:flex items-center h-full">
      <CommonSingleNavItem v-for="item in singleMenus" :key="item.name" :item="item" @click="hideMenu" />
      <CommonNavItems v-for="item in menus" :key="item.name" :name="item.name" :hide-status="navHide">
        <CommonNavItem
          v-for="_item in item.list"
          :key="_item.name"
          :name="_item.name"
          :type="_item.type"
          :local="_item.local"
          :url="_item.url"
          @click.native="hideItems"
        >
        </CommonNavItem>
      </CommonNavItems>
      <div class="px-2 2xl:px-5 border-l border-r border-border-300">
        <CommonMedia />
      </div>
      <HomeButton class="ml-8" :word="$t('header.launch')" />
    </div>
    <div class="lg:hidden relative">
      <img
        src="@/assets/img/icon/menu.svg"
        class="w-6 mr-2 cursor-pointer hvr-bounce-in"
        v-if="!menuShow"
        @click="menuShow = !menuShow"
      />
      <client-only>
        <el-drawer v-model="menuShow" :with-header="false" :append-to-body="true" :size="400">
          <div class="flex items-center justify-between mb-4">
            <CommonLogo />
            <HomeButton :word="$t('header.launch')" />
          </div>

          <CommonSingleNavItem
            v-for="item in singleMenus"
            :key="item.name"
            :item="item"
            class="mt-4"
            @click.native="hideMenu"
          />
          <CommonNavItems v-for="item in menus" :key="item.name" :name="item.name" :hide-status="navHide">
            <div class="h-2"></div>
            <CommonNavItem
              v-for="_item in item.list"
              :key="_item.name"
              :name="_item.name"
              :type="_item.type"
              :local="_item.local"
              :url="_item.url"
              @click.native="hideMenu"
            >
            </CommonNavItem>
          </CommonNavItems>
          <div class="mt-4 text-sm">
            {{ $t('header.touch') }}
            <CommonMedia class="mt-2" />
          </div>
        </el-drawer>
      </client-only>
    </div>
  </div>
</template>
<script setup lang="ts">
const vm = getCurrentInstance()?.proxy
const router = useRouter()
const menuShow = ref(false)
const navHide = ref(false)

const singleMenus = ref([
  { name: 'Leaderboard', link: '', img: '' },
])

const menus = ref([
  {
    name: vm.$t('header.community.title'),
    list: [
      {
        name: vm.$t('header.community.developer'),
        local: false,
        url: 'https://docs.lumoz.org'
      },
      {
        name: vm.$t('header.community.blog'),
        local: false,
        url: 'https://mirror.xyz/lumozorg.eth'
      }
    ]
  }
])

onMounted(() => {
  window.addEventListener('resize', () => {
    hideItems()
    hideMenu()
  })
})

const open = (url: string) => {
  window.open(url)
}

const hideMenu = () => {
  menuShow.value = false
}
const hideItems = () => {
  navHide.value = !navHide.value
}
</script>
<style class="ra-borders">
.ra-borders {
  border: 2px solid var(--1, #44EF49);
}
</style>