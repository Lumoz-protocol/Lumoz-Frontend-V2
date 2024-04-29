import { useSSRContext, defineComponent, ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './wallet-B5EoBYQq.mjs';
import { u as useRollupsStore, b as useWalletStore } from './launchbase-DLXoI83z.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
import 'vue-countup-v3';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'ethers';
import 'axios';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "tab",
  __ssrInlineRender: true,
  props: {
    word: { default: "" },
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [_ctx.active ? "home-button-corner text-black" : "home-button-corner-empty text-primary-900", "px-4 py-1.5 hvr-bounce-in"]
      }, _attrs))} data-v-39612123>${ssrInterpolate(_ctx.word)}</button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/tab.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-39612123"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='26'%20height='26'%20rx='8'%20fill='%23BEFE00'%20fill-opacity='0.2'/%3e%3cg%20clip-path='url(%23clip0_4188_44284)'%3e%3cpath%20d='M12.9925%205.5C8.8525%205.5%205.5%208.86%205.5%2013C5.5%2017.14%208.8525%2020.5%2012.9925%2020.5C17.14%2020.5%2020.5%2017.14%2020.5%2013C20.5%208.86%2017.14%205.5%2012.9925%205.5ZM18.19%2010H15.9775C15.7375%209.0625%2015.3925%208.1625%2014.9425%207.33C16.3225%207.8025%2017.47%208.7625%2018.19%2010ZM13%207.03C13.6225%207.93%2014.11%208.9275%2014.4325%2010H11.5675C11.89%208.9275%2012.3775%207.93%2013%207.03ZM7.195%2014.5C7.075%2014.02%207%2013.5175%207%2013C7%2012.4825%207.075%2011.98%207.195%2011.5H9.73C9.67%2011.995%209.625%2012.49%209.625%2013C9.625%2013.51%209.67%2014.005%209.73%2014.5H7.195ZM7.81%2016H10.0225C10.2625%2016.9375%2010.6075%2017.8375%2011.0575%2018.67C9.6775%2018.1975%208.53%2017.245%207.81%2016ZM10.0225%2010H7.81C8.53%208.755%209.6775%207.8025%2011.0575%207.33C10.6075%208.1625%2010.2625%209.0625%2010.0225%2010ZM13%2018.97C12.3775%2018.07%2011.89%2017.0725%2011.5675%2016H14.4325C14.11%2017.0725%2013.6225%2018.07%2013%2018.97ZM14.755%2014.5H11.245C11.1775%2014.005%2011.125%2013.51%2011.125%2013C11.125%2012.49%2011.1775%2011.9875%2011.245%2011.5H14.755C14.8225%2011.9875%2014.875%2012.49%2014.875%2013C14.875%2013.51%2014.8225%2014.005%2014.755%2014.5ZM14.9425%2018.67C15.3925%2017.8375%2015.7375%2016.9375%2015.9775%2016H18.19C17.47%2017.2375%2016.3225%2018.1975%2014.9425%2018.67ZM16.27%2014.5C16.33%2014.005%2016.375%2013.51%2016.375%2013C16.375%2012.49%2016.33%2011.995%2016.27%2011.5H18.805C18.925%2011.98%2019%2012.4825%2019%2013C19%2013.5175%2018.925%2014.02%2018.805%2014.5H16.27Z'%20fill='%23BEFE00'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4188_44284'%3e%3crect%20width='18'%20height='18'%20fill='white'%20transform='translate(4%204)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='26'%20height='26'%20rx='8'%20fill='%23BEFE00'%20fill-opacity='0.2'/%3e%3cg%20clip-path='url(%23clip0_4188_44273)'%3e%3cg%20clip-path='url(%23clip1_4188_44273)'%3e%3cpath%20d='M20.5%208.4905C19.9205%208.74775%2019.2978%208.921%2018.6441%208.99909C19.3115%208.59944%2019.8241%207.96616%2020.0649%207.21147C19.4408%207.58159%2018.7491%207.85066%2018.0128%207.99569C17.4242%207.36766%2016.5835%206.97522%2015.6542%206.97522C13.568%206.97522%2012.035%208.92166%2012.5062%2010.9423C9.8215%2010.8077%207.44062%209.52147%205.84659%207.5665C5.00003%209.01878%205.40756%2010.9186%206.84606%2011.8807C6.31712%2011.8636%205.81837%2011.7186%205.38328%2011.4764C5.34784%2012.9733%206.42081%2014.3738%207.97481%2014.6855C7.52003%2014.8089%207.02194%2014.8378%206.51531%2014.7406C6.92613%2016.0243%208.11919%2016.9581%209.53406%2016.9843C8.17563%2018.0494%206.46413%2018.5252%204.75%2018.3231C6.17997%2019.2399%207.879%2019.7747%209.70337%2019.7747C15.7028%2019.7747%2019.0923%2014.7078%2018.8876%2010.1633C19.5189%209.70719%2020.0669%209.13822%2020.5%208.4905Z'%20fill='%23BEFE00'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4188_44273'%3e%3crect%20width='18'%20height='18'%20fill='white'%20transform='translate(4%204)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_4188_44273'%3e%3crect%20width='15.75'%20height='15.75'%20fill='white'%20transform='translate(4.75%205.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='26'%20height='26'%20rx='8'%20fill='%23BEFE00'%20fill-opacity='0.2'/%3e%3cpath%20d='M11.4443%2012.4986C10.915%2012.4986%2010.4971%2012.9454%2010.4971%2013.4906C10.4971%2014.0358%2010.9243%2014.4827%2011.4443%2014.4827C11.9736%2014.4827%2012.3914%2014.0358%2012.3914%2013.4906C12.4007%2012.9454%2011.9736%2012.4986%2011.4443%2012.4986ZM14.8336%2012.4986C14.3043%2012.4986%2013.8864%2012.9454%2013.8864%2013.4906C13.8864%2014.0358%2014.3136%2014.4827%2014.8336%2014.4827C15.3629%2014.4827%2015.7807%2014.0358%2015.7807%2013.4906C15.7807%2012.9454%2015.3629%2012.4986%2014.8336%2012.4986Z'%20fill='%23BEFE00'/%3e%3cpath%20d='M19.3464%205H6.90357C5.85429%205%205%205.82225%205%206.84112V18.9246C5%2019.9435%205.85429%2020.7657%206.90357%2020.7657H17.4336L16.9414%2019.1123L18.13%2020.1759L19.2536%2021.1769L21.25%2022.875V6.84112C21.25%205.82225%2020.3957%205%2019.3464%205ZM15.7621%2016.6724C15.7621%2016.6724%2015.4279%2016.2881%2015.1493%2015.9484C16.3657%2015.6177%2016.83%2014.8849%2016.83%2014.8849C16.4493%2015.1262%2016.0871%2015.296%2015.7621%2015.4122C15.2979%2015.5999%2014.8521%2015.725%2014.4157%2015.7965C13.5243%2015.9574%2012.7071%2015.9127%2012.0107%2015.7876C11.4814%2015.6892%2011.0264%2015.5462%2010.6457%2015.4032C10.4321%2015.3228%2010.2%2015.2245%209.96786%2015.0994C9.94%2015.0815%209.91214%2015.0726%209.88429%2015.0547C9.86571%2015.0457%209.85643%2015.0368%209.84714%2015.0279C9.68%2014.9385%209.58714%2014.8759%209.58714%2014.8759C9.58714%2014.8759%2010.0329%2015.5909%2011.2121%2015.9306C10.9336%2016.2702%2010.59%2016.6724%2010.59%2016.6724C8.53786%2016.6098%207.75786%2015.3139%207.75786%2015.3139C7.75786%2012.436%209.095%2010.1033%209.095%2010.1033C10.4321%209.13806%2011.7043%209.16487%2011.7043%209.16487L11.7971%209.27213C10.1257%209.73688%209.355%2010.4429%209.355%2010.4429C9.355%2010.4429%209.55929%2010.3357%209.90286%2010.1837C10.8964%209.76369%2011.6857%209.6475%2012.0107%209.62069C12.0664%209.61175%2012.1129%209.60281%2012.1686%209.60281C12.735%209.53131%2013.3757%209.51344%2014.0443%209.58494C14.9264%209.68325%2015.8736%209.9335%2016.8393%2010.4429C16.8393%2010.4429%2016.1057%209.77262%2014.5271%209.30787L14.6571%209.16487C14.6571%209.16487%2015.9293%209.13806%2017.2664%2010.1033C17.2664%2010.1033%2018.6036%2012.436%2018.6036%2015.3139C18.6036%2015.3139%2017.8143%2016.6098%2015.7621%2016.6724Z'%20fill='%23BEFE00'/%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    name: { default: "" },
    main: { type: Boolean, default: true }
  },
  setup(__props) {
    const rollupsStore = useRollupsStore();
    const walletStore = useWalletStore();
    const props = __props;
    const rollup = computed(() => {
      const list = rollupsStore.mainnetRollups.concat(rollupsStore.testnetRollups);
      return list.find((item) => item.name === props.name) || {};
    });
    const addNetwork = async () => {
      const _rollup = rollup.value;
      await walletStore.addNetwork({
        name: _rollup.name,
        idHex: _rollup.chainIdHex,
        symbol: _rollup.symbol,
        decimals: _rollup.decimal,
        rpcUrl: _rollup.rpc,
        explorer: _rollup.explorer
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Wallet = _sfc_main$3;
      const _component_CountUp = resolveComponent("CountUp");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "phase-box mt-8 lg:mt-12 cursor-pointer" }, _attrs))} data-v-b80902e6><div class="py-4 px-8 phase-inner1 relative" data-v-b80902e6><div class="phase-box-left absolute left-0 top-0 bottom-0 h-full w-12" data-v-b80902e6></div><div class="phase-box-right absolute right-0 top-0 bottom-0 h-full w-12" data-v-b80902e6></div><div class="flex items-center" data-v-b80902e6><div class="w-24 lg:w-32 flex flex-col items-center mr-8 lg:mr-16" data-v-b80902e6><div class="relative w-20 lg:w-28" data-v-b80902e6><img${ssrRenderAttr("src", _imports_0)} class="absolute left-0 right-0 top-0 bottom-0" data-v-b80902e6><img${ssrRenderAttr("src", unref(rollup).img)} class="w-16 lg:w-24 rounded-full m-2" data-v-b80902e6></div>`);
      if (!_ctx.main) {
        _push(`<div class="h-16 font-bold text-sm flex items-center text-center" data-v-b80902e6>${ssrInterpolate(unref(rollup).name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!_ctx.main) {
        _push(`<div class="flex-1 grid grid-cols-2 lg:grid-cols-4" data-v-b80902e6><div class="flex flex-col items-center justify-center" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).layer1 || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.base"))}</div></div><div class="flex flex-col items-center justify-center" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).zkevmType || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.zkType"))}</div></div><div class="flex flex-col items-center justify-center mt-4 lg:mt-0" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).da || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.da"))}</div></div><div class="flex flex-col items-center justify-center mt-4 lg:mt-0" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).gasToken || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.token"))}</div></div></div>`);
      } else {
        _push(`<div class="flex-1" data-v-b80902e6><div class="flex items-center" data-v-b80902e6><span class="text-lg mr-4 font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).name)}</span><a${ssrRenderAttr("href", unref(rollup).bridge)} target="_blank" class="text-xs text-[#aaa] hover:underline hover:text-primary-900 mr-4" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.bridge"))}</a>`);
        if (!unref(walletStore).account) {
          _push(ssrRenderComponent(_component_Wallet, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<a class="text-xs text-[#aaa] hover:underline hover:text-primary-900" data-v-b80902e6${_scopeId}>${ssrInterpolate(_ctx.$t("rollups.add"))}</a>`);
              } else {
                return [
                  createVNode("a", {
                    onClick: addNetwork,
                    class: "text-xs text-[#aaa] hover:underline hover:text-primary-900"
                  }, toDisplayString(_ctx.$t("rollups.add")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<a class="text-xs text-[#aaa] hover:underline hover:text-primary-900" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.add"))}</a>`);
        }
        _push(`</div><div class="text-[#aaa] text-sm mt-2" data-v-b80902e6>${ssrInterpolate(unref(rollup).des)}</div><div class="flex items-center mt-4 card-icons" data-v-b80902e6><a class="cursor-pointer mr-2 hvr-float rounded-lg"${ssrRenderAttr("href", unref(rollup).home)} target="_blank" data-v-b80902e6><img${ssrRenderAttr("src", _imports_1)} data-v-b80902e6></a><a class="cursor-pointer mr-2 hvr-float rounded-lg"${ssrRenderAttr("href", unref(rollup).twitter)} target="_blank" data-v-b80902e6><img${ssrRenderAttr("src", _imports_2)} data-v-b80902e6></a><a class="cursor-pointer hvr-float rounded-lg"${ssrRenderAttr("href", unref(rollup).dc)} target="_blank" data-v-b80902e6><img${ssrRenderAttr("src", _imports_3)} data-v-b80902e6></a></div><div class="mt-4 grid grid-cols-2 lg:grid-cols-4" data-v-b80902e6><div class="flex flex-col items-center justify-center" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).layer1 || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.base"))}</div></div><div class="flex flex-col items-center justify-center" data-v-b80902e6><div class="lg:text-2xl font-bold" data-v-b80902e6>${ssrInterpolate(unref(rollup).tvl || "-")}</div><div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.tvl"))}</div></div><div class="flex flex-col items-center justify-center mt-4 lg:mt-0" data-v-b80902e6>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(unref(rollup).transactions || 0),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "lg:text-2xl font-bold"
        }, null, _parent));
        _push(`<div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.transactions"))}</div></div><div class="flex flex-col items-center justify-center mt-4 lg:mt-0" data-v-b80902e6>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(unref(rollup).addresses || 0),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "lg:text-2xl font-bold"
        }, null, _parent));
        _push(`<div class="text-text-500 mt-2" data-v-b80902e6>${ssrInterpolate(_ctx.$t("rollups.users"))}</div></div></div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rollups/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b80902e6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const rollupsStore = useRollupsStore();
    const active = ref("main");
    const list = computed(() => {
      if (active.value === "main") {
        return rollupsStore.mainnetRollups;
      }
      return rollupsStore.testnetRollups;
    });
    const mainInfo = computed(() => {
      let transactions = 0;
      let addresses = 0;
      for (let i in rollupsStore.mainnetRollups) {
        transactions += Number(rollupsStore.mainnetRollups[i].transactions);
        addresses += Number(rollupsStore.mainnetRollups[i].addresses);
      }
      return {
        transactions,
        addresses
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonTab = __nuxt_component_0;
      const _component_CountUp = resolveComponent("CountUp");
      const _component_RollupsCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="pt-16 lg:pt-32 text-2xl lg:text-4xl xl:text-6xl text-center font-bold"><h1>${ssrInterpolate(_ctx.$t("rollups.title1"))}</h1><h1 class="mt-4">${ssrInterpolate(_ctx.$t("rollups.title2"))}</h1></div><div class="mt-4 lg:mt-16 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_CommonTab, {
        onClick: ($event) => active.value = "main",
        class: "w-32",
        word: _ctx.$t("rollups.main"),
        active: unref(active) === "main"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonTab, {
        onClick: ($event) => active.value = "test",
        class: "w-32 ml-8",
        word: _ctx.$t("rollups.test"),
        active: unref(active) === "test"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-3 mt-8 lg:mt-16 bottom-light py-12">`);
      if (unref(active) === "main") {
        _push(`<div class="flex flex-col items-center justify-center"><div class="text-lg font-bold md:text-2xl lg:text-3xl flex"><span class="mr-1">$</span>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": 3.73,
          duration: 2,
          "decimal-places": 2,
          delay: 2
        }, null, _parent));
        _push(`<span class="text-primary-900 ml-1">B</span></div><div class="text-text-dark mt-4">${ssrInterpolate(_ctx.$t("rollups.tvl"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === "test") {
        _push(`<div class="flex flex-col items-center justify-center">`);
        _push(ssrRenderComponent(_component_CountUp, {
          class: "text-lg font-bold md:text-2xl lg:text-3xl",
          "end-val": Number(16),
          duration: 2,
          "decimal-places": 0,
          unit: "B",
          delay: 2
        }, null, _parent));
        _push(`<div class="text-text-dark mt-4">${ssrInterpolate(_ctx.$t("rollups.count"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(_component_CountUp, {
        class: "text-lg font-bold md:text-2xl lg:text-3xl",
        "end-val": unref(active) === "main" ? Number(unref(mainInfo).transactions || 0) : 9258466,
        duration: 2,
        "decimal-places": 0,
        delay: 2
      }, null, _parent));
      _push(`<div class="text-text-dark mt-4">${ssrInterpolate(_ctx.$t("rollups.transactions"))}</div></div><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(_component_CountUp, {
        class: "text-lg font-bold md:text-2xl lg:text-3xl",
        "end-val": unref(active) === "main" ? Number(unref(mainInfo).addresses || 0) : 408555,
        duration: 2,
        "decimal-places": 0,
        delay: 2
      }, null, _parent));
      _push(`<div class="text-text-dark mt-4">${ssrInterpolate(_ctx.$t("rollups.users"))}</div></div></div><div class="mt-12"><!--[-->`);
      ssrRenderList(unref(list), (item, index) => {
        _push(ssrRenderComponent(_component_RollupsCard, {
          key: index,
          name: item.name,
          main: unref(active) === "main"
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rollups/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D8WBK1Cr.mjs.map
