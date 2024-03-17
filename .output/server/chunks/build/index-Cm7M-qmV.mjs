import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './wallet-Dl1e5hJs.mjs';
import { _ as _sfc_main$2 } from './button-Bh1aFK91.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useWalletStore } from './rollups-mW1IBXdI.mjs';
import axios from 'axios';
import { D as DATA_API } from './networks-D5gBYVoB.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'ethers';
import 'vue-router';
import 'vue-countup-v3';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _imports_0 = "" + buildAssetsURL("dragon.CGHxEp4p.avif");
function getAdjustedIsoString() {
  const timestamp = /* @__PURE__ */ new Date();
  return timestamp.toISOString();
}
const timeout = 60 * 1e3;
class Request {
  constructor() {
    __publicField(this, "instance");
    this.instance = axios.create({
      timeout
    });
    this.interceptor();
  }
  interceptor() {
    this.instance.interceptors.response.use((response) => {
      const { data } = response;
      const { code } = data || {};
      if (code !== void 0 && code !== 0) {
        this.msgLoader(code);
      }
      return data;
    });
  }
  msgLoader(code) {
    const msg = `Error: ${code}`;
    throw new Error(msg);
  }
  async upload(data, url = "/upload", config = {}) {
    const res = await this.instance.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout,
      ...config
    });
    return res;
  }
}
const request = new Request();
({ upload: request.upload.bind(request), ...request.instance });
const getDataUrl = (url) => {
  return `${DATA_API}${url}`;
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
      alpha_extra_validator_rank_9: 70,
      galxe_alpha: 0,
      galxe_pre_alpha: 0,
      miner_alpha_cpu: 0,
      miner_alpha_gpu: 0,
      miner_pre_alpha: 0,
      validator_alpha: 0,
      validator_pre_alpha: 0
    };
    const info = ref(JSON.parse(JSON.stringify(data)));
    const to = (url) => {
      (void 0).open(url);
    };
    watch(() => walletStore.account, () => {
      if (walletStore.account) {
        getData();
      } else {
        info.value = data;
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
    const user = computed(() => {
      info.value;
      return info.galxe_pre_alpha + info.galxe_alpha + info.alpha_extra_pk_team;
    });
    const validator = computed(() => {
      const _info = info.value;
      return _info.validator_pre_alpha + _info.validator_alpha + _info.alpha_extra_validator_rank_9 + _info.alpha_extra_validator_rank_10 + _info.alpha_extra_validator_rank_11 + _info.alpha_extra_validator_rank_12;
    });
    const miner = computed(() => {
      const _info = info.value;
      return _info.miner_pre_alpha + _info.miner_alpha_cpu + _info.miner_alpha_gpu + _info.alpha_extra_cpu_miner_rank_9 + _info.alpha_extra_cpu_miner_rank_10 + _info.alpha_extra_cpu_miner_rank_11 + _info.alpha_extra_cpu_miner_rank_12 + _info.alpha_extra_gpu_miner_rank_9 + _info.alpha_extra_gpu_miner_rank_10 + _info.alpha_extra_gpu_miner_rank_11 + _info.alpha_extra_gpu_miner_rank_12;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Wallet = _sfc_main$1;
      const _component_CountUp = resolveComponent("CountUp");
      const _component_HomeButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-55bab44c><a href="https://dragon-slayer.zkfair.io" class="w-full lg:w-2/3 lg:ml-1/6 cursor-pointer hvr-grow" data-v-55bab44c><img${ssrRenderAttr("src", _imports_0)} class="w-full" alt="" data-v-55bab44c></a><div class="points-box mt-8" data-v-55bab44c><div class="text-cnter h-1/4 flex items-center justify-center text-xs md:text-2xl font-bold text-primary-900" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.points"))}</div><div class="h-4/5 p-1 lg:p-4" data-v-55bab44c><div class="h-full rounded-lg border-4 border-black shadow-inner-box flex items-center justify-center text-center text-sm lg:text-xl" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.pcontent"))}</div></div></div><div class="text-center mt-12 lg:mt-24 text-xl lg:text-4xl font-bold" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.connect"))}</div><div class="my-8 flex items-center justify-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_Wallet, null, null, _parent));
      _push(`</div><div data-v-55bab44c><div class="shadow-inner-box p-8 rounded-2xl flex items-center justify-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(info).total_points || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-2xl lg:text-4xl text-primary-900 font-bold"
      }, null, _parent));
      _push(`<span class="text-2xl font-bold ml-4" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.total"))}</span></div></div><div class="grid grid-cols-2 mt-8 gap-8" data-v-55bab44c><div class="phase-box points-outer" data-v-55bab44c><div class="py-4 px-8 phase-inner1 relative" data-v-55bab44c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="flex flex-col items-center justify-center" data-v-55bab44c><div class="text-xl lg:text-2xl" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.dragon"))}</div><div class="h-16 flex items-center justify-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_HomeButton, {
        onClick: ($event) => to("https://dragon-slayer.zkfair.io"),
        light: "",
        class: "w-32",
        word: _ctx.$t("points.more")
      }, null, _parent));
      _push(`</div><div class="flex items-center" data-v-55bab44c><div class="text-xl lg:text-3xl mr-4 font-bold points-text" data-v-55bab44c>-</div></div></div></div></div><div class="phase-box points-outer" data-v-55bab44c><div class="py-4 px-8 phase-inner1 relative" data-v-55bab44c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="flex flex-col items-center justify-center" data-v-55bab44c><div class="text-xl lg:text-2xl" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.user"))}</div><div class="h-16 text-center text-xs" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(user) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-55bab44c><div class="py-4 px-8 phase-inner1 relative" data-v-55bab44c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="flex flex-col items-center justify-center" data-v-55bab44c><div class="text-xl lg:text-2xl" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.validator"))}</div><div class="h-16 text-center text-xs" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(validator) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div><div class="phase-box points-outer" data-v-55bab44c><div class="py-4 px-8 phase-inner1 relative" data-v-55bab44c><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-55bab44c></div><div class="flex flex-col items-center justify-center" data-v-55bab44c><div class="text-xl lg:text-2xl" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.miner"))}</div><div class="h-16 text-center text-xs" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.d"))}</div><div class="flex items-center" data-v-55bab44c>`);
      _push(ssrRenderComponent(_component_CountUp, {
        "end-val": Number(unref(miner) || 0),
        duration: 2,
        "decimal-places": 0,
        delay: 2,
        class: "text-xl lg:text-3xl mr-4 font-bold points-text"
      }, null, _parent));
      _push(`<div class="text-text-dark" data-v-55bab44c>${ssrInterpolate(_ctx.$t("points.p"))}</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lumoz-points/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55bab44c"]]);

export { index as default };
//# sourceMappingURL=index-Cm7M-qmV.mjs.map
