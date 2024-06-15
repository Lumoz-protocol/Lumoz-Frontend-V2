<template>
<client-only>
<el-dialog
    v-model="dialog"
    class="lumoz-dialog"
    width="800"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :lock-scroll="true"
    modal-class="dialog-modal"
    :show-close="false"
    align-center
    append-to-body
>
<div class="text-white -mt-4 px-4">
    <div class="text-center text-xl font-bold">🪧 Risk Notice and Disclaimer </div>
    <div class="text-center text-base my-4">We highly value every user’s right to be informed and their investment safety. Therefore, we solemnly declare: </div>
    <div class="h-100 overflow-y-scroll warning-box rounded-xl px-4 scroll-bar" id="warning-details">
        <div>
            <div class="mt-4 text-lg font-bold">Comprehensive Understanding:</div>
            <div class="mt-2 text-base text-[#919191]">All users participating in the purchase of zkVerifier nodes must fully understand the functions, purposes, and technical details of these nodes. This includes but is not limited to their role in the Lumoz architecture, working principles, profit mechanisms, and related operational requirements.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Informed Consent:</div>
            <div class="mt-2 text-base text-[#919191]">Before purchasing zkVerifier nodes, users should carefully read and understand all relevant documents and information, including but not limited to the technical whitepaper, user guides, FAQs, and other official materials. Users should ensure they have a comprehensive and accurate understanding of the product.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Investment Risks:</div>
            <div class="mt-2 text-base text-[#919191]">All users must clearly understand that investing in zkVerifier nodes may involve various risks. These risks include but are not limited to market volatility, technical risks, regulatory risks, operational risks, and other unforeseen risks. Users should be aware of the high risk and volatility in the market.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Risk Tolerance:</div>
            <div class="mt-2 text-base text-[#919191]">Users must confirm their ability and mental readiness to bear investment risks. Before making any purchasing decisions, it is recommended that users thoroughly assess their risk tolerance and decide whether to participate in the investment based on their situation.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Voluntary Purchase: </div>
            <div class="mt-2 text-base text-[#919191]">Users' purchasing actions should be autonomous and voluntary, without any form of coercion, misdirection, or undue influence. Users should make purchasing decisions independently after fully understanding the relevant information and risks.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Liability Statement:</div>
            <div class="mt-2 text-base text-[#919191]">Any losses incurred by users after purchasing zkVerifier nodes are the users’ sole responsibility. We are not responsible for investment losses due to market fluctuations, technical issues, or other factors.</div>
        </div>
        <div>
            <div class="mt-4 text-lg font-bold">Country and Region Restrictions:</div>
            <div class="mt-2 text-base text-[#919191]">According to legal regulations, Lumoz must comply with the laws and regulations of specific countries and regions. Therefore, we regret to inform you that users from the following countries and regions will not be able to participate in this purchase:</div>
        </div>
        <div>
            <div class="mt-12 text-lg font-bold">Countries and Regions Not Accepted for Purchase:</div>
            <ul style="list-style:disc" class="px-4 mt-4 font-bold text-primary-900">
                <li v-for="item, index in country" :key="index" class="mb-2">
                {{ item }}
                </li>
            </ul>
        </div>
        <div class="my-8 text-[#919191]">
        By participating in the purchase of zkVerifier nodes, users indicate that they have read, understood, and agreed to the above terms, and are willing to bear all risks and responsibilities associated with the investment.
        </div>
    </div>
    <div>
        <div class="flex items-center justify-center text-lg mt-8 cursor-pointer hover:text-primary-900" :class="check ? 'text-primary-900' :''" @click="check = !check">
            <img src="@/assets/img/share/check-no.svg" v-if="!check" alt="" class="mr-2" />
            <img src="@/assets/img/share/check.svg" v-else alt="" class="mr-2" />
            I am aware of all the terms and details mentioned above!
        </div>
    </div>
    <div class="mt-8 flex items-center justify-center">
        <HomeButton :light="!check || !bottom" class="w-32" @click="agree" word="Agree"></HomeButton>
    </div>
</div>
</el-dialog>
</client-only>
</template>
<script setup lang="ts">
const dialog = ref(false)
const country = [
    'United States',
    'Syria',
    'Sudan',
    'Mainland China',
    'Myanmar',
    'Balkans',
    'Democratic Republic of the Congo',
    'Libya',
    'Somalia',
    'Zimbabwe',
    'Hon Kong',
   ' Other countries and regions sanctioned by the United Nations'
]
const check = ref(false)
const bottom = ref(false)
watch(() => dialog.value, () => {
    try {
        if (dialog.value) {
            check.value = false
            bottom.value = false
            setTimeout(() => {
                try {
                    const element = document.getElementById('warning-details');
                    console.log(element)
                    element.addEventListener('scroll', function(event) {
                        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                            bottom.value = true
                        }
                    });
                } catch {}
            })
        }
    } catch {}
})

onMounted(() => {
    const agreed = localStorage.getItem('aggree-lumoz-warning')
    if (!agreed) {
        dialog.value = true
    }
})

const agree = () => {
    if (check.value && bottom.value) {
        localStorage.setItem('aggree-lumoz-warning', 'true')
        dialog.value = false
    }
}
</script>
<style scoped>
.warning-box {
    background: linear-gradient(186.78deg, #333332 -12.32%, #22242A 105.82%);
}
</style>