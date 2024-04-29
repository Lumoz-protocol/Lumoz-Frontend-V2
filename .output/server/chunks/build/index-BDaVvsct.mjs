import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, toDisplayString, createCommentVNode, createBlock, withCtx, resolveDynamicComponent, useSSRContext, mergeProps, watch, getCurrentInstance, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { a as useLaunchStore } from './launchbase-DLXoI83z.mjs';
import { _ as _sfc_main$8 } from './button-Bh1aFK91.mjs';
import { b as buildProps, d as definePropType, u as useNamespace, w as warning_filled_default, c as circle_check_default, a as circle_close_default, e as check_default, f as close_default, E as ElIcon, g as withInstall, _ as _export_sfc$1 } from './base-nAYtqrjF.mjs';
import { isFunction, isString } from '@vue/shared';
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
import 'axios';
import 'lodash-unified';
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

const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = { viewBox: "0 0 100 100" };
const _hoisted_3 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_4 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
const _hoisted_5 = { key: 0 };
const __default__ = defineComponent({
  name: "ElProgress"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: progressProps,
  setup(__props) {
    const props = __props;
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const ns = useNamespace("progress");
    const barStyle = computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index2) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index2 + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.type),
          unref(ns).is(_ctx.status),
          {
            [unref(ns).m("without-text")]: !_ctx.showText,
            [unref(ns).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).b("bar"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).be("bar", "outer")),
            style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                unref(ns).be("bar", "inner"),
                { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
              ]),
              style: normalizeStyle(unref(barStyle))
            }, [
              (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(ns).be("bar", "innerText"))
              }, [
                renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                  createElementVNode("span", null, toDisplayString(unref(content)), 1)
                ])
              ], 2)) : createCommentVNode("v-if", true)
            ], 6)
          ], 6)
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).b("circle")),
          style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
        }, [
          (openBlock(), createElementBlock("svg", _hoisted_2, [
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "track")),
              d: unref(trackPath),
              stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              fill: "none",
              style: normalizeStyle(unref(trailPathStyle))
            }, null, 14, _hoisted_3),
            createElementVNode("path", {
              class: normalizeClass(unref(ns).be("circle", "path")),
              d: unref(trackPath),
              stroke: unref(stroke),
              fill: "none",
              opacity: _ctx.percentage ? 1 : 0,
              "stroke-linecap": _ctx.strokeLinecap,
              "stroke-width": unref(relativeStrokeWidth),
              style: normalizeStyle(unref(circlePathStyle))
            }, null, 14, _hoisted_4)
          ]))
        ], 6)),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ fontSize: `${unref(progressTextSize)}px` })
        }, [
          renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
            !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(content)), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(statusIcon))))
              ]),
              _: 1
            }))
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "progress.vue"]]);
const ElProgress = withInstall(Progress);
const _imports_0$1 = "" + buildAssetsURL("btc.D1aYs0rO.svg");
const _imports_2$3 = "" + buildAssetsURL("ethereum.0m1RQlta.svg");
const _imports_3$3 = "" + buildAssetsURL("polygon.B0B5aH3C.svg");
const _imports_4$2 = "" + buildAssetsURL("bsc.BQHmLSdG.svg");
const _imports_5$1 = "" + buildAssetsURL("solana.FBme6_aC.svg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "layer1",
  __ssrInlineRender: true,
  setup(__props) {
    const NETWORKS = ["Bitcoin", "Ethereum", "Polygon", "BNB Chain", "Solana"];
    const launchStore = useLaunchStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.layer1"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.layer1c"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><!--[-->`);
      ssrRenderList(NETWORKS, (item, index2) => {
        _push(`<div class="${ssrRenderClass([unref(launchStore).layer1 === item ? "launch-check-box-high" : "launch-check-box", "rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow"])}"><div class="h-full w-full flex justify-center items-center">`);
        if (item === "Bitcoin") {
          _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Ethereum") {
          _push(`<img${ssrRenderAttr("src", _imports_2$3)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Polygon") {
          _push(`<img${ssrRenderAttr("src", _imports_3$3)} class="ml-4 h-16 mt-2">`);
        } else if (item === "BNB Chain") {
          _push(`<img${ssrRenderAttr("src", _imports_4$2)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Solana") {
          _push(`<img${ssrRenderAttr("src", _imports_5$1)} class="ml-4 h-13 mb-3 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(item)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/layer1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("polygon-zkevm.0TbCGgdy.svg");
const _imports_1$3 = "" + buildAssetsURL("zksync.D9pQO_q7.svg");
const _imports_2$2 = "" + buildAssetsURL("scroll.CjGPUfSN.svg");
const _imports_3$2 = "" + buildAssetsURL("starknet.CchTze7E.svg");
const _imports_4$1 = "" + buildAssetsURL("linea.DXjPpZWk.svg");
const _imports_5 = "" + buildAssetsURL("taiko.CFOJchft.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "zkevm",
  __ssrInlineRender: true,
  setup(__props) {
    const launchStore = useLaunchStore();
    const TYPES = ["Polygon zkEVM", "zkSync", "Scroll", "StarkNet", "Linea", "Taiko"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.type"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.typec"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><!--[-->`);
      ssrRenderList(TYPES, (item, index2) => {
        _push(`<div class="${ssrRenderClass([unref(launchStore).zkevmType === item ? "launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow" : "launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow", "rounded-xl border bg-[#181818] border-[#181818] text-white"])}"><div class="h-full w-full flex justify-center items-center">`);
        if (item === "Polygon zkEVM") {
          _push(`<img${ssrRenderAttr("src", _imports_0)} class="ml-4 h-16 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        if (item === "zkSync") {
          _push(`<img${ssrRenderAttr("src", _imports_1$3)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Scroll") {
          _push(`<img${ssrRenderAttr("src", _imports_2$2)} class="ml-4 h-16 mt-2">`);
        } else if (item === "StarkNet") {
          _push(`<img${ssrRenderAttr("src", _imports_3$2)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Linea") {
          _push(`<img${ssrRenderAttr("src", _imports_4$1)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Taiko") {
          _push(`<img${ssrRenderAttr("src", _imports_5)} class="ml-4 h-16 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(item)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/zkevm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_6 = "" + buildAssetsURL("gas.B0mLnl9C.svg");
const _imports_1$2 = "" + buildAssetsURL("celestia.B0gfHmtS.svg");
const _imports_2$1 = "" + buildAssetsURL("eigenlayer.BpnBC5gs.svg");
const _imports_3$1 = "" + buildAssetsURL("ethstorage.G4FR3PHB.svg");
const _imports_4 = "" + buildAssetsURL("avail.CX96Yzfd.svg");
const _imports_1$1 = "" + buildAssetsURL("espressosys.DcUxK94Y.svg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "da",
  __ssrInlineRender: true,
  setup(__props) {
    const launchStore = useLaunchStore();
    const DAS = ["Layer 1", "Celestia", "Eigenlayer", "Ethstorage", "Avail", "Espresso"];
    watch(() => launchStore.layer1, () => {
      launchStore.setDa("");
    });
    const disabled = computed(() => {
      if (launchStore.layer1 === "Bitcoin") {
        return ["Ethereum", "BNB Chain"];
      }
      return [];
    });
    const getDis = (item) => {
      return disabled.value.includes(item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.da"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.dac"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><!--[-->`);
      ssrRenderList(DAS, (item, index2) => {
        _push(`<div class="${ssrRenderClass([getDis(item) ? "opacity-50 cursor-not-allowed" : unref(launchStore).da === item ? "launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow" : "launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow", "rounded-xl border bg-[#181818] border-[#181818] text-white"])}"><div class="h-full w-full flex justify-center items-center">`);
        if (item === "Layer 1") {
          _push(`<img${ssrRenderAttr("src", _imports_6)} class="ml-4 h-13 mb-3 mt-2">`);
        } else if (item === "Celestia") {
          _push(`<img${ssrRenderAttr("src", _imports_1$2)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Eigenlayer") {
          _push(`<img${ssrRenderAttr("src", _imports_2$1)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Ethstorage") {
          _push(`<img${ssrRenderAttr("src", _imports_3$1)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Avail") {
          _push(`<img${ssrRenderAttr("src", _imports_4)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Espresso") {
          _push(`<img${ssrRenderAttr("src", _imports_1$1)} class="ml-4 h-16 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(item)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/da.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_2 = "" + buildAssetsURL("astria.dsVRwp6v.svg");
const _imports_3 = "" + buildAssetsURL("radius.BVIU9jTg.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "sequencer",
  __ssrInlineRender: true,
  setup(__props) {
    const launchStore = useLaunchStore();
    const SEQUENCERS = ["Single Node", "Espresso", "Astria", "Radius"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.seq"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.seqc"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><!--[-->`);
      ssrRenderList(SEQUENCERS, (item, index2) => {
        _push(`<div class="${ssrRenderClass([unref(launchStore).sequencer === item ? "launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow" : "launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow", "rounded-xl border bg-[#181818] border-[#181818] text-white"])}"><div class="h-full w-full flex justify-center items-center">`);
        if (item === "Single Node") {
          _push(`<img${ssrRenderAttr("src", _imports_6)} class="ml-4 h-13 mb-3 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        if (item === "Espresso") {
          _push(`<img${ssrRenderAttr("src", _imports_1$1)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Astria") {
          _push(`<img${ssrRenderAttr("src", _imports_2)} class="ml-4 h-16 mt-2">`);
        } else if (item === "Radius") {
          _push(`<img${ssrRenderAttr("src", _imports_3)} class="ml-4 h-16 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(item)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/sequencer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_1 = "" + buildAssetsURL("lumoz.D6x-EnFM.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "prover",
  __ssrInlineRender: true,
  setup(__props) {
    const launchStore = useLaunchStore();
    const PROVERS = ["Lumoz"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.prov"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.provc"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><!--[-->`);
      ssrRenderList(PROVERS, (item, index2) => {
        _push(`<div class="${ssrRenderClass([unref(launchStore).prover === item ? "launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow" : "launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow", "rounded-xl border bg-[#181818] border-[#181818] text-white"])}"><div class="h-full w-full flex justify-center items-center">`);
        if (item === "Lumoz") {
          _push(`<img${ssrRenderAttr("src", _imports_1)} class="ml-4 h-16 mt-2">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(item)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/prover.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "gas",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const launchStore = useLaunchStore();
    (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    const token = computed(() => {
      if (launchStore.layer1 === "Bitcoin") {
        return "BTC";
      }
      if (launchStore.layer1 === "Lumoz") {
        return "MOZ";
      }
      if (launchStore.layer1 === "Ethereum") {
        return "ETH";
      }
      if (launchStore.layer1 === "Polygon") {
        return "MATIC";
      }
      if (launchStore.layer1 === "BNB Chain") {
        return "BNB";
      }
      if (launchStore.layer1 === "Solana") {
        return "SOL";
      }
    });
    watch(() => launchStore.layer1, () => {
      launchStore.setGas("");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8" }, _attrs))}><div><div class="text-xl font-bold mb-2">${ssrInterpolate(_ctx.$t("launch.gas"))}</div><div class="mb-4 text-text-dark">${ssrInterpolate(_ctx.$t("launch.gasc"))}</div></div><div class="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"><div class="${ssrRenderClass([unref(launchStore).gas === unref(token) ? "launch-check-box-high" : "launch-check-box", "rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow"])}"><div class="h-full w-full flex justify-center items-center">`);
      if (unref(launchStore).layer1 === "Bitcoin") {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="ml-4 h-16 mt-2">`);
      } else {
        _push(`<!---->`);
      }
      if (unref(launchStore).layer1 === "Lumoz") {
        _push(`<img${ssrRenderAttr("src", _imports_1)} class="ml-4 h-16 mt-2">`);
      } else if (unref(launchStore).layer1 === "Ethereum") {
        _push(`<img${ssrRenderAttr("src", _imports_2$3)} class="ml-4 h-16 mt-2">`);
      } else if (unref(launchStore).layer1 === "Polygon") {
        _push(`<img${ssrRenderAttr("src", _imports_3$3)} class="ml-4 h-16 mt-2">`);
      } else if (unref(launchStore).layer1 === "BNB Chain") {
        _push(`<img${ssrRenderAttr("src", _imports_4$2)} class="ml-4 h-16 mt-2">`);
      } else if (unref(launchStore).layer1 === "Solana") {
        _push(`<img${ssrRenderAttr("src", _imports_5$1)} class="ml-4 h-13 mb-3 mt-2">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="ml-4 font-bold flex-1">${ssrInterpolate(unref(token))}</span></div></div><div class="${ssrRenderClass([unref(launchStore).gas === "Customize" ? "launch-check-box-high" : "launch-check-box", "rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow"])}"><div class="h-full w-full flex justify-center items-center"><img${ssrRenderAttr("src", _imports_6)} class="ml-4 h-13 mb-3 mt-2"><span class="ml-4 font-bold flex-1">${ssrInterpolate(_ctx.$t("launch.cus"))}</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launch/gas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const launchStore = useLaunchStore();
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    let timer = null;
    const part = ref(1);
    const percentage = ref(0);
    const canNext = computed(() => {
      if (launchStore.layer1 && launchStore.zkevmType && launchStore.da && launchStore.sequencer && launchStore.gas && launchStore.prover) {
        return true;
      }
      return false;
    });
    watch(() => part.value, () => {
      if (part.value === 2) {
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
        percentage.value = 0;
        startTimer();
      }
    });
    const next = () => {
      if (canNext.value) {
        part.value = 2;
      }
    };
    const startTimer = () => {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval();
    };
    const progress = computed(() => {
      if (percentage.value <= 25) {
        return vm == null ? void 0 : vm.$t("launch.d1");
      } else if (percentage.value <= 50) {
        return vm == null ? void 0 : vm.$t("launch.d2");
      } else if (percentage.value <= 75) {
        return vm == null ? void 0 : vm.$t("launch.d3");
      } else if (percentage.value < 100) {
        return vm == null ? void 0 : vm.$t("launch.d4");
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LaunchLayer1 = _sfc_main$6;
      const _component_LaunchZkevm = _sfc_main$5;
      const _component_LaunchDa = _sfc_main$4;
      const _component_LaunchSequencer = _sfc_main$3;
      const _component_LaunchProver = _sfc_main$2;
      const _component_LaunchGas = _sfc_main$1;
      const _component_HomeButton = _sfc_main$8;
      const _component_el_progress = ElProgress;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto py-12" }, _attrs))} data-v-bb28cd78>`);
      if (unref(part) === 1) {
        _push(`<div data-v-bb28cd78><div class="text-4xl font-bold text-center" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.create"))}</div><div class="text-center mb-12 text-text-dark mt-4 lg:w-1/2 mx-auto text-xl" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.content"))}</div>`);
        _push(ssrRenderComponent(_component_LaunchLayer1, null, null, _parent));
        _push(ssrRenderComponent(_component_LaunchZkevm, null, null, _parent));
        _push(ssrRenderComponent(_component_LaunchDa, null, null, _parent));
        _push(ssrRenderComponent(_component_LaunchSequencer, null, null, _parent));
        _push(ssrRenderComponent(_component_LaunchProver, null, null, _parent));
        if (unref(launchStore).layer1) {
          _push(ssrRenderComponent(_component_LaunchGas, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-center" data-v-bb28cd78>`);
        _push(ssrRenderComponent(_component_HomeButton, {
          light: !unref(canNext) ? true : false,
          onClick: next,
          class: ["w-40", !unref(canNext) ? "cursor-not-allowed" : ""],
          word: _ctx.$t("launch.next")
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(part) === 2) {
        _push(`<div data-v-bb28cd78><div class="text-xl font-bold" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.info"))}</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-v-bb28cd78><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.layer1"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).layer1)}</div></div><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.type"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).zkevmType)}</div></div><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.da"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).da)}</div></div><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.seq"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).sequencer)}</div></div><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.gas"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).gas)}</div></div><div class="mt-8 flex items-center" data-v-bb28cd78><div class="text-text-dark w-40" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.prov"))}:</div><div data-v-bb28cd78>${ssrInterpolate(unref(launchStore).prover)}</div></div></div><div class="text-xl font-bold mt-16" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.generate"))}</div><div class="px-8 py-4 launch-p-box mt-4 bg-[#2c2c2c] rounded-md" data-v-bb28cd78>`);
        _push(ssrRenderComponent(_component_el_progress, {
          percentage: unref(percentage),
          "stroke-width": 20,
          status: "success",
          striped: "",
          "striped-flow": "",
          duration: 100
        }, null, _parent));
        if (unref(progress)) {
          _push(`<div class="text-center mt-4 text-primary-900 font-bold" data-v-bb28cd78>${ssrInterpolate(unref(progress))} ...</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(percentage) === 100) {
          _push(`<div class="flex flex-col items-center justify-center" data-v-bb28cd78><div class="mt-8 lg:mt-16 text-center text-3xl font-bold animate__animated animate__flipInX" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.con"))}</div><div class="text-center mt-4 text-lg animate__animated animate__flipInX animate__delay-1s" data-v-bb28cd78>${ssrInterpolate(_ctx.$t("launch.con1"))}</div><a href="mailto:contact@lumoz.org" class="mt-8 animate__animated animate__fadeIn animate__delay-2s" data-v-bb28cd78>`);
          _push(ssrRenderComponent(_component_HomeButton, {
            class: "w-60",
            word: _ctx.$t("launch.apply")
          }, null, _parent));
          _push(`</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/launchbase/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb28cd78"]]);

export { index as default };
//# sourceMappingURL=index-BDaVvsct.mjs.map
