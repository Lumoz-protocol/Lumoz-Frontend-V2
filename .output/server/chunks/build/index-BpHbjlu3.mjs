import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$3 } from './button-Bh1aFK91.mjs';
import { u as useRouter, g as __nuxt_component_6, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const M1 = "" + buildAssetsURL("1.DRou7bRk.avif");
const M2 = "" + buildAssetsURL("2.ZAaJW7Gy.avif");
const M3 = "data:image/avif;base64,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";
const M4 = "" + buildAssetsURL("4.C9ueQyd_.avif");
const M5 = "" + buildAssetsURL("5.lJGm_wK6.avif");
const M6 = "" + buildAssetsURL("6.CEQ85SMA.avif");
const M7 = "data:image/avif;base64,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";
const M8 = "" + buildAssetsURL("8.Bz7PuREa.avif");
const M9 = "data:image/avif;base64,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";
const M10 = "" + buildAssetsURL("10.CtNVxkKw.avif");
const M11 = "" + buildAssetsURL("11.Dv4MVbp_.avif");
const M12 = "" + buildAssetsURL("12.CkdMMhLz.avif");
const M13 = "" + buildAssetsURL("13.DgVYOt8A.avif");
const M14 = "data:image/avif;base64,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";
const M15 = "data:image/avif;base64,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";
const M16 = "data:image/avif;base64,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";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "scroll",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        img: M1,
        css: "w-20 mx-4 lg:w-35 lg:mx-10"
      },
      {
        img: M2,
        css: "w-20 mx-4 lg:w-28 lg:mx-10"
      },
      {
        img: M6,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M15,
        css: "w-20 mx-4 lg:w-35 lg:mx-10"
      },
      {
        img: M16,
        css: "w-20 mx-4 lg:w-35 lg:mx-10"
      },
      {
        img: M10,
        css: "w-20 mx-4 lg:w-35 lg:mx-10"
      },
      {
        img: M3,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M4,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M11,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M5,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M12,
        css: "w-20 mx-4 lg:w-30 lg:mx-10"
      },
      {
        img: M9,
        css: "w-20 mx-4 lg:w-30 lg:ml-10"
      },
      {
        img: M13,
        css: "w-20 mx-4 lg:w-45"
      },
      {
        img: M7,
        css: "w-20 mx-4 lg:w-40 lg:mr-10"
      },
      {
        img: M8,
        css: "w-20 mx-4 lg:w-40 lg:mx-10"
      },
      {
        img: M14,
        css: "w-20 mx-4 lg:w-35 lg:mr-10"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_6;
      _push(ssrRenderComponent(_component_client_only, mergeProps({ class: "flex" }, _attrs), {}, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/scroll.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("banner.Db47GLQq.mp4");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "banner",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const router = useRouter();
    const to = () => {
      router.push("/compute-layer");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeButton = _sfc_main$3;
      const _component_CommonScroll = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c4b6883a>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" playsinline="true" autoplay="true" muted="false" loop="true" data-v-c4b6883a><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-c4b6883a></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center home-banner-box" data-v-c4b6883a><div class="h-full w-full flex justify-center items-start pt-30 lg:pt-40" data-v-c4b6883a>`);
      if (_ctx.active) {
        _push(`<div class="flex items-center justify-center flex-col" data-v-c4b6883a><div class="typed-out text-2xl md:text-4xl lg:text-6xl py-4 font-bold text-center" data-v-c4b6883a>${ssrInterpolate(_ctx.$t("home.banner.title"))}</div><div class="typed-out-1s lg:text-2xl py-4 text-primary-900 text-center" data-v-c4b6883a>${ssrInterpolate(_ctx.$t("home.banner.content"))}</div>`);
        _push(ssrRenderComponent(_component_HomeButton, {
          onClick: to,
          word: _ctx.$t("home.banner.start"),
          class: "mt-4 w-40 animate__animated animate__fadeIn animate__delay-2s"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="fade-edges-s py-4 lg:pb-8 w-full" data-v-c4b6883a><div class="overflow-hidden" data-v-c4b6883a><div class="text-center font-bold lg:text-2xl" data-v-c4b6883a>${ssrInterpolate(_ctx.$t("home.back"))}</div><div class="fade-edges" data-v-c4b6883a><div class="fade-edges-t flex flex-wrap items-center justify-center" data-v-c4b6883a>`);
      _push(ssrRenderComponent(_component_CommonScroll, null, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c4b6883a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const now = ref(0);
    const fullpage = ref(null);
    const options = ref({
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      navigation: false,
      anchors: ["", "", "", "", "", "", "", ""],
      sectionsColor: [],
      controlArrows: true,
      lockAnchors: false,
      recordHistory: false,
      scrollOverflow: false,
      normalScrollElements: ".full-lock-scroll",
      scrollingSpeed: 400,
      resize: true,
      beforeLeave: function(origin, destination, direction, trigger) {
        now.value = destination.index;
      },
      css3: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_full_page = resolveComponent("full-page");
      const _component_HomeBanner = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_full_page, {
        ref_key: "fullpage",
        ref: fullpage,
        options: unref(options),
        id: "fullpage",
        class: "z-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeBanner, {
              active: unref(now) === 0
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeBanner, {
                  active: unref(now) === 0
                }, null, 8, ["active"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BpHbjlu3.mjs.map
