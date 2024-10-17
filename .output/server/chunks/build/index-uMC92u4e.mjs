import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { u as useWalletStore, _ as _sfc_main$1, C as CONFIG } from './wallet-BRbbcLD1.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { g as getAdjustedIsoString } from './utils-CLQqHViM.mjs';
import axios from 'axios';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'ethers';
import '@web3modal/ethers5/vue';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'zrender/lib/zrender.js';
import 'zrender/lib/core/util.js';
import 'zrender/lib/core/env.js';
import 'zrender/lib/core/timsort.js';
import 'zrender/lib/core/Eventful.js';
import 'zrender/lib/graphic/Text.js';
import 'zrender/lib/tool/color.js';
import 'zrender/lib/graphic/Path.js';
import 'zrender/lib/tool/path.js';
import 'zrender/lib/core/matrix.js';
import 'zrender/lib/core/vector.js';
import 'zrender/lib/core/Transformable.js';
import 'zrender/lib/graphic/Image.js';
import 'zrender/lib/graphic/Group.js';
import 'zrender/lib/graphic/shape/Circle.js';
import 'zrender/lib/graphic/shape/Ellipse.js';
import 'zrender/lib/graphic/shape/Sector.js';
import 'zrender/lib/graphic/shape/Ring.js';
import 'zrender/lib/graphic/shape/Polygon.js';
import 'zrender/lib/graphic/shape/Polyline.js';
import 'zrender/lib/graphic/shape/Rect.js';
import 'zrender/lib/graphic/shape/Line.js';
import 'zrender/lib/graphic/shape/BezierCurve.js';
import 'zrender/lib/graphic/shape/Arc.js';
import 'zrender/lib/graphic/CompoundPath.js';
import 'zrender/lib/graphic/LinearGradient.js';
import 'zrender/lib/graphic/RadialGradient.js';
import 'zrender/lib/core/BoundingRect.js';
import 'zrender/lib/core/OrientedBoundingRect.js';
import 'zrender/lib/core/Point.js';
import 'zrender/lib/graphic/IncrementalDisplayable.js';
import 'zrender/lib/graphic/helper/subPixelOptimize.js';
import 'zrender/lib/core/dom.js';
import 'zrender/lib/core/WeakMap.js';
import 'zrender/lib/core/LRU.js';
import 'zrender/lib/contain/text.js';
import 'zrender/lib/canvas/graphic.js';
import 'zrender/lib/core/platform.js';
import 'zrender/lib/canvas/Painter.js';
import 'zrender/lib/svg/Painter.js';
import 'zrender/lib/core/PathProxy.js';
import 'zrender/lib/core/curve.js';
import 'zrender/lib/contain/util.js';
import 'zrender/lib/core/event.js';
import 'zrender/lib/tool/parseSVG.js';
import 'zrender/lib/tool/parseXML.js';
import 'zrender/lib/contain/polygon.js';
import 'zrender/lib/graphic/Displayable.js';
import 'zrender/lib/core/bbox.js';
import 'zrender/lib/contain/line.js';
import 'zrender/lib/contain/quadratic.js';
import 'zrender/lib/animation/Animator.js';
import 'zrender/lib/tool/morphPath.js';
import 'zrender/lib/graphic/helper/parseText.js';

const _imports_0 = "" + buildAssetsURL("qui.m_B5n1hx.avif");
const getDataUrl = (url) => {
  return `${CONFIG.DATA_API}${url}`;
};
const getAchieveInfo = async (address, timestamp, signature) => {
  const headers = {
    "API-SIGNATURE": signature,
    "TIMESTAMP": timestamp
  };
  const { data } = await axios.get(getDataUrl(`lumoz-points?address=${address}`), { headers });
  return data.lumoz_points;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const walletStore = useWalletStore();
    const data = {
      total_points: 0,
      nodes_campaign: 0,
      alpha_extra_cpu_miner_rank_10: 0,
      alpha_extra_cpu_miner_rank_11: 0,
      alpha_extra_cpu_miner_rank_12: 0,
      alpha_extra_cpu_miner_rank_9: 0,
      alpha_extra_galxe_points_rank: 0,
      alpha_extra_gpu_miner_rank_10: 0,
      alpha_extra_gpu_miner_rank_11: 0,
      alpha_extra_gpu_miner_rank_12: 0,
      alpha_extra_gpu_miner_rank_9: 0,
      alpha_extra_pk_team: 0,
      alpha_extra_validator_rank_10: 0,
      alpha_extra_validator_rank_11: 0,
      alpha_extra_validator_rank_12: 0,
      alpha_extra_validator_rank_9: 0,
      dragon_slayer_phase_1: 0,
      dragon_slayer_phase_2: 0,
      dragon_slayer_phase_3: 0,
      galxe_alpha: 0,
      galxe_pre_alpha: 0,
      galxe_final_wave: 0,
      miner_alpha_cpu: 0,
      miner_alpha_gpu: 0,
      miner_pre_alpha: 0,
      validator_alpha: 0,
      validator_pre_alpha: 0,
      quidditch_miniapp: 0,
      quidditch_onchain: 0,
      quidditch_project: 0
    };
    const info = ref(JSON.parse(JSON.stringify(data)));
    watch(() => walletStore.account, () => {
      if (walletStore.account) {
        getData();
      } else {
        info.value = JSON.parse(JSON.stringify(data));
      }
    });
    const getData = async () => {
      const timestamp = getAdjustedIsoString();
      const signature = await walletStore.simpleSign([timestamp, "GET", `/api/details?address=${walletStore.account}`]);
      const data2 = await getAchieveInfo(walletStore.account, timestamp, signature);
      if (data2) {
        info.value = data2;
      }
    };
    const quidditch = computed(() => {
      const _info = info.value;
      return _info.quidditch_miniapp + _info.quidditch_onchain + _info.quidditch_project;
    });
    const user = computed(() => {
      const _info = info.value;
      return _info.galxe_pre_alpha + _info.galxe_alpha + _info.alpha_extra_pk_team + _info.galxe_final_wave;
    });
    const validator = computed(() => {
      const _info = info.value;
      return _info.validator_pre_alpha + _info.validator_alpha + _info.alpha_extra_validator_rank_9 + _info.alpha_extra_validator_rank_10 + _info.alpha_extra_validator_rank_11 + _info.alpha_extra_validator_rank_12;
    });
    const dragon = computed(() => {
      const _info = info.value;
      return _info.dragon_slayer_phase_1 + _info.dragon_slayer_phase_2 + _info.dragon_slayer_phase_3;
    });
    const miner = computed(() => {
      const _info = info.value;
      return _info.miner_pre_alpha + _info.miner_alpha_cpu + _info.miner_alpha_gpu + _info.alpha_extra_cpu_miner_rank_9 + _info.alpha_extra_cpu_miner_rank_10 + _info.alpha_extra_cpu_miner_rank_11 + _info.alpha_extra_cpu_miner_rank_12 + _info.alpha_extra_gpu_miner_rank_9 + _info.alpha_extra_gpu_miner_rank_10 + _info.alpha_extra_gpu_miner_rank_11 + _info.alpha_extra_gpu_miner_rank_12;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Wallet = _sfc_main$1;
      const _component_CountUp = resolveComponent("CountUp");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-d122392c><a target="_blank" class="w-full relative" data-v-d122392c><img${ssrRenderAttr("src", _imports_0)} class="w-full mt-10 rounded-lg" alt="" data-v-d122392c></a><div class="points-box mt-8" data-v-d122392c><div class="text-center h-1/4 flex items-center justify-center text-xs md:text-2xl font-bold text-primary-900" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.points"))}</div><div class="h-4/5 p-1 lg:p-4" data-v-d122392c><div class="h-full rounded-lg border-4 border-black shadow-inner-box flex items-center justify-center text-center text-sm lg:text-xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.pcontent"))}</div></div></div><div class="text-center mt-12 lg:mt-24 text-xl lg:text-4xl font-bold" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.connect"))}</div><div class="my-8 flex items-center justify-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_Wallet, null, null, _parent));
      _push(`</div><div data-v-d122392c><div class="shadow-inner-box p-8 rounded-2xl flex items-center justify-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(info).total_points || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-2xl lg:text-4xl text-primary-900 font-bold"
      }, null, _parent));
      _push(`<span class="text-2xl font-bold ml-4" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.total"))}</span></div></div><div class="grid grid-cols-2 mt-8 gap-8" data-v-d122392c><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.qui"))}</div><div class="h-16 flex items-center justify-center" data-v-d122392c></div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(quidditch) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl font-bold mr-4"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.zkv"))}</div><div class="h-16 flex items-center justify-center" data-v-d122392c></div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(info).nodes_campaign || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl font-bold mr-4"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.dragon"))}</div><div class="h-16 flex items-center justify-center" data-v-d122392c></div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(dragon) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl font-bold mr-4"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.user"))}</div><div class="h-16 text-center text-xs" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(user) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.validator"))}</div><div class="h-16 text-center text-xs" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(validator) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-d122392c><div class="py-4 px-8 phase-inner1 relative" data-v-d122392c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-d122392c></div><div class="flex flex-col items-center justify-center" data-v-d122392c><div class="text-xl lg:text-2xl" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.miner"))}</div><div class="h-16 text-center text-xs" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-d122392c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(miner) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-d122392c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lumoz-points/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d122392c"]]);

export { index as default };
//# sourceMappingURL=index-uMC92u4e.mjs.map
