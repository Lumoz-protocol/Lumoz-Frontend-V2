<template>
<el-dialog
    v-model="dialog"
    class="lumoz-dialog"
    width="550"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :lock-scroll="true"
    modal-class="dialog-modal"
    :show-close="false"
    align-center
    append-to-body
>
<div class="text-white -mt-4 px-4">
    <div class="text-center text-xl font-bold">Lumoz products aren’t available in your region </div>
    <div class="text-center text-base my-4">Lumoz is currently not available in {{country}} due to local laws and regulations. If you do not reside in {{country}}, you may continue using Lumoz. </div>
    <div>
        <div class="flex items-center justify-center text-lg mt-8 cursor-pointer hover:text-primary-900" :class="check ? 'text-primary-900' :''" @click="check = !check">
            <img src="@/assets/img/share/check-no.svg" v-if="!check" alt="" class="mr-2" />
            <img src="@/assets/img/share/check.svg" v-else alt="" class="mr-2" />
            Don't show for 7 days.
        </div>
    </div>
    <div class="mt-8 flex items-center justify-center">
        <HomeButton :light="!check" class="w-32" @click="agree" word="Close"></HomeButton>
    </div>
</div>
</el-dialog>
</template>
<script setup lang="ts">
import axios from 'axios'

const dialog = ref(false)
const check = ref(false)
const country = ref('')

const permit = [
    {
        key: 'US',
        name: 'United States'
    },
    {
        key: 'SY',
        name: 'Syria'
    },
    {
        key: 'SD',
        name: 'Sudan'
    },
    {
        key: 'CN',
        name: 'Mainland China'
    },
    {
        key: 'MM',
        name: 'Myanmar'
    },
    {
        key: 'sr,hu,bs,rom',
        name: 'Balkans'
    },
    {
        key: 'CD',
        name: 'Democratic Republic of the Congo'
    },
    {
        key: 'LY',
        name: 'Libya'
    },
    {
        key: 'SO',
        name: 'Somalia'
    },
    {
        key: 'ZW',
        name: 'Zimbabwe'
    },
    {
        key: 'ZW',
        name: 'Zimbabwe'
    },
    {
        key: 'HK',
        name: 'Hong Kong'
    }
]

onMounted(async() => {
    try {
        const { data } = await axios.get('https://ipapi.co/json')
        const _item = permit.find(item => item.key === data.country_code || item.key === data.languages)

        if (_item) {
            try {
                const time = Number(localStorage.getItem('lumoz-ip'))
                if (time && Number(new Date()) - time < 604800000) {
                    return
                }
            } catch {}
            country.value = _item.name
            dialog.value = true
        }
    } catch(e) {
        console.log(e)
        dialog.value = true
    }
})

const agree = () => {
    localStorage.setItem('lumoz-ip', Number(new Date()).toString())
    dialog.value = false
}
</script>