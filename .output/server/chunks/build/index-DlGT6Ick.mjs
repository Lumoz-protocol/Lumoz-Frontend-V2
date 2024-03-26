import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$2 } from './button-Bh1aFK91.mjs';
import { u as useRouter, _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode } from 'vue';
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
import 'vue-countup-v3';

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
      const _component_HomeButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f1b60160>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" playsinline="true" autoplay="true" muted="false" loop="true" data-v-f1b60160><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-f1b60160></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-banner-box" data-v-f1b60160><div class="h-full w-full flex justify-center items-start pt-40" data-v-f1b60160>`);
      if (_ctx.active) {
        _push(`<div class="flex items-center justify-center flex-col" data-v-f1b60160><div class="typed-out text-3xl md:text-4xl lg:text-6xl py-4 font-bold text-center" data-v-f1b60160>${ssrInterpolate(_ctx.$t("home.banner.title"))}</div><div class="typed-out-1s text-2xl py-4 text-primary-900 text-center" data-v-f1b60160>${ssrInterpolate(_ctx.$t("home.banner.content"))}</div>`);
        _push(ssrRenderComponent(_component_HomeButton, {
          onClick: to,
          word: _ctx.$t("home.banner.start"),
          class: "mt-4 w-40 animate__animated animate__fadeIn animate__delay-1s"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1b60160"]]);
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
//# sourceMappingURL=index-DlGT6Ick.mjs.map
