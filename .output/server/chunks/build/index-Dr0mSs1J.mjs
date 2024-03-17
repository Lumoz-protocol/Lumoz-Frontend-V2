import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$8 } from './button-Bh1aFK91.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode, mergeProps, watch, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './footer-D4R-a7Gv.mjs';
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

const _imports_0$4 = "" + buildAssetsURL("banner.Db47GLQq.mp4");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "banner",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const to = () => {
      (void 0).open("https://docs.lumoz.org");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8c9dcee7>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" id="Id" playsinline="true" autoplay="true" muted="false" loop="true" data-v-8c9dcee7><source${ssrRenderAttr("src", _imports_0$4)} type="video/mp4" data-v-8c9dcee7></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-banner-box" data-v-8c9dcee7><div class="h-full w-full flex justify-center items-start pt-40" data-v-8c9dcee7>`);
      if (_ctx.active) {
        _push(`<div class="flex items-center justify-center flex-col" data-v-8c9dcee7><div class="typed-out text-3xl md:text-4xl lg:text-6xl py-4 font-bold text-center" data-v-8c9dcee7>${ssrInterpolate(_ctx.$t("home.banner.title"))}</div><div class="typed-out-2s text-2xl py-4 text-primary-900 text-center" data-v-8c9dcee7>${ssrInterpolate(_ctx.$t("home.banner.content"))}</div>`);
        _push(ssrRenderComponent(_component_HomeButton, {
          onClick: to,
          word: _ctx.$t("home.banner.start"),
          class: "mt-4 w-40 animate__animated animate__fadeIn animate__delay-3s"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8c9dcee7"]]);
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAeCAYAAACWnXROAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgB7dy7TcRQEIXhY6AA6GAJyaACTAWICoAKlg7ogEcDSFSARAFAA0AFPCqAmADMPbq2bIKNvIGZ+3/SaK3Vhkej8ey1JQDA5KwLKECV6i3Vj5YQ+hUB0/fefu5qJAKPqWtS3Sp3+n0BBdhQDv6HRo41qwKm70t5nNlqrx8EBLenvsvPBATnGf5COfR3AgrgWd4rSof+TEABdlJ9Ku/lTwUU4Fi5y3ednn9hEd6Bcqd36F9THQoIblP9TO+6F8FHAY70N/ju/Dep5qlqDdaYVfsDoATNmgg8YqgWfN8suAb+JQfds/y1+pHGK0vfyJ4rz/QzsclBAA77ifptjY8dOOS1gGDc1b2V6Tr6lThjg6CG60iPLrWAoIZhfxJdHYEND489ihtRBOYb1G4T8yLCjuC6A2M8AILwhq/qmAsIzicju43MKLymA1PXvZ7Dgb8UEJwD/6w8zmwLCM6Bd9i/tQS/hn9O35I93acAAAAASUVORK5CYII=";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "box",
  __ssrInlineRender: true,
  setup(__props) {
    const id = ref("home-box" + Number(/* @__PURE__ */ new Date()) + Math.floor(Math.random() * 1e3));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "outer" + unref(id),
        class: "home-box-outer"
      }, _attrs))} data-v-43e59449><div class="home-box flex flex-col p-2 cursor-pointer"${ssrRenderAttr("id", unref(id))} data-v-43e59449><img${ssrRenderAttr("src", _imports_0$3)} class="h-3 mb-4 w-20" data-v-43e59449><div class="flex-1" data-v-43e59449>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/box.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-43e59449"]]);
const _imports_0$2 = "" + buildAssetsURL("icon1.CrlCNNOB.png");
const _imports_1 = "" + buildAssetsURL("icon2.DaLPAlH1.png");
const _imports_2 = "data:image/svg+xml,%3csvg%20width='55'%20height='62'%20viewBox='0%200%2055%2062'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M55%2021.6378C55%209.68854%2043.9448%200.00124339%2030.3059%200.00124339C23.8774%20-0.0609382%2017.6484%202.21105%2012.7955%206.38808C9.97318%208.4454%207.79597%2011.2517%206.51537%2014.4828C5.67932%2016.6356%205.19536%2018.9067%205.08176%2021.2106C5.04069%2023.8562%206.34619%2026.4466%205.19617%2029.0224C4.39624%2030.8243%202.31721%2032.3481%200.980415%2033.7847C0.980415%2033.7847%20-2.76301%2036.2521%204.37962%2036.5892C4.58107%2036.5989%205.48466%2040.8274%205.70957%2041.7951C5.55172%2042.0063%205.47227%2042.265%205.48465%2042.5275C5.48465%2043.3383%206.51635%2044%207.78469%2044H8.56017C6.88502%2044.2257%205.67535%2044.8718%205.67535%2045.7727C5.67535%2046.3927%206.47039%2047.2103%207.65854%2047.7005C7.65854%2047.7005%206.19168%2052.2468%208.36655%2053.2833C8.83422%2053.4612%209.34453%2053.4983%209.83341%2053.3899C12.9177%2053.5565%2018.439%2053.3395%2021.5077%2053.3395C21.5077%2053.2843%2023.1212%2061.9999%2023.1212%2061.9999H50.8517C50.8517%2062.0435%2048.1859%2042.2969%2048.1859%2042.2969C53.0657%2035.3744%2054.7555%2029.1774%2054.8474%2023.9986C54.9452%2023.2159%2054.9961%2022.4273%2054.9971%2021.6378H55ZM40.3871%2017.9702C39.437%2017.9679%2038.5072%2017.6972%2037.707%2017.1898C36.9067%2016.6824%2036.2692%2015.9594%2035.8692%2015.1057L32.1238%2017.2543C32.6962%2018.4174%2032.9498%2019.7092%2032.8592%2021.0001C32.7685%2022.2909%2032.3369%2023.5355%2031.6075%2024.6089L38.6328%2028.6408C39.0461%2028.2376%2039.5876%2027.9887%2040.1652%2027.9364C40.7428%2027.884%2041.3209%2028.0314%2041.8012%2028.3535C42.2815%2028.6756%2042.6344%2029.1525%2042.7999%2029.7032C42.9654%2030.2539%2042.9333%2030.8444%2042.709%2031.3743C42.4848%2031.9041%2042.0822%2032.3407%2041.5697%2032.6099C41.0572%2032.879%2040.4665%2032.964%2039.8979%2032.8504C39.3293%2032.7369%2038.818%2032.4318%2038.4508%2031.987C38.0836%2031.5422%2037.8832%2030.9852%2037.8837%2030.4106C37.8965%2030.1775%2037.9433%2029.9475%2038.0226%2029.7277L30.8036%2025.5854C29.7351%2026.703%2028.3438%2027.4658%2026.8204%2027.7691C25.297%2028.0724%2023.7161%2027.9015%2022.2947%2027.2796C20.8733%2026.6578%2019.6808%2025.6156%2018.8809%2024.2959C18.0811%2022.9762%2017.7129%2021.4437%2017.827%2019.9086C17.941%2018.3735%2018.5317%2016.9109%2019.5181%2015.7214C20.5044%2014.532%2021.838%2013.674%2023.336%2013.265C24.8341%2012.856%2026.4231%2012.9162%2027.8853%2013.4372C29.3474%2013.9582%2030.611%2014.9146%2031.5028%2016.1751L35.4722%2013.8986C35.2887%2012.8972%2035.4211%2011.8641%2035.8514%2010.9399C36.2817%2010.0157%2036.9889%209.2452%2037.8769%208.73326C38.7648%208.22133%2039.7905%207.99281%2040.8142%208.07878C41.838%208.16475%2042.8101%208.56105%2043.5984%209.21376C44.3867%209.86646%2044.9529%2010.7439%2045.22%2011.7267C45.4871%2012.7095%2045.442%2013.7499%2045.091%2014.7064C44.74%2015.6629%2044.1001%2016.4891%2043.2582%2017.0726C42.4164%2017.6561%2041.4136%2017.9685%2040.3862%2017.9673L40.3871%2017.9702Z'%20fill='url(%23paint0_linear_181_1272)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_181_1272'%20x1='27.5'%20y1='0'%20x2='27.5'%20y2='62'%20gradientUnits='userSpaceOnUse'%3e%3cstop/%3e%3cstop%20offset='1'%20stop-color='%23666666'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "arc",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    let timer = null;
    watch(() => props.active, () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (props.active) {
        timer = setTimeout(() => {
        }, 2e3);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e8d005c2><div class="absolute left-0 right-0 top-30" data-v-e8d005c2>`);
      if (_ctx.active) {
        _push(`<div class="container mx-auto" data-v-e8d005c2><div class="text-2xl lg:text-4xl font-bold pl-4 lg:pl-0 home-arc-1 animate__animated animate__fadeInUp animate__slower" data-v-e8d005c2>${ssrInterpolate(_ctx.$t("home.arc.title"))}</div><div class="text-6xl lg:text-8xl xl:text-9xl font-bold text-[#ffffff22] mt-8 home-arc-2 animate__animated animate__fadeInUp animate__delay-1s animate__slower" data-v-e8d005c2>${ssrInterpolate(_ctx.$t("home.arc.title").toUpperCase())}</div><div class="text-6xl lg:text-8xl xl:text-9xl font-bold mt-8 home-arc-3 animate__animated animate__fadeInUp animate__delay-2s animate__slower" data-v-e8d005c2>${ssrInterpolate(_ctx.$t("home.arc.title").toUpperCase())}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-arc-box" id="b-animation" data-v-e8d005c2><div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-arc" data-v-e8d005c2><div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-30 pb-40 lg:pt-40 lg:pb-0" data-v-e8d005c2><div class="w-full xl:w-3/5" data-v-e8d005c2>`);
      _push(ssrRenderComponent(_component_HomeBox, { class: "md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-e8d005c2${_scopeId}><div class="flex items-center justify-center flex-1" data-v-e8d005c2${_scopeId}><img${ssrRenderAttr("src", _imports_0$2)} class="w-16" data-v-e8d005c2${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-e8d005c2${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.rollups"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_0$2,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.rollups")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:ml-0 lg:w-2/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-e8d005c2${_scopeId}><div class="flex items-center justify-center flex-1" data-v-e8d005c2${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="w-16" data-v-e8d005c2${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-e8d005c2${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.modular"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_1,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.modular")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-e8d005c2${_scopeId}><div class="flex items-center justify-center flex-1" data-v-e8d005c2${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="w-16" data-v-e8d005c2${_scopeId}></div><div class="text-xl h-12 pl-4" data-v-e8d005c2${_scopeId}>${ssrInterpolate(_ctx.$t("home.arc.ai"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "flex items-center justify-center flex-1" }, [
                  createVNode("img", {
                    src: _imports_2,
                    class: "w-16"
                  })
                ]),
                createVNode("div", { class: "text-xl h-12 pl-4" }, toDisplayString(_ctx.$t("home.arc.ai")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-40" data-v-e8d005c2></div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/arc.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e8d005c2"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "raas",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-raas-box",
        id: "c-animation"
      }, _attrs))} data-v-5e48638c><div class="h-full w-full pt-20" data-v-5e48638c>`);
      if (_ctx.active) {
        _push(`<div class="lg:w-1/2 lg:ml-1/6 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0" data-v-5e48638c><div data-v-5e48638c><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-5e48638c>${ssrInterpolate(_ctx.$t("home.raas.title"))}</h1></div><p class="px-4 md:w-1/2 md:px-0 lg:w-full lg:pr-16 2xl:w-1/2 2xl:px-0 mt-8 animate__animated animate__fadeIn animate__delay-2s" data-v-5e48638c>${ssrInterpolate(_ctx.$t("home.raas.content"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/raas.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5e48638c"]]);
const _imports_0$1 = "" + buildAssetsURL("ai.C8bREhnv.mp4");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ai",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a2a2de3a>`);
      if (_ctx.active) {
        _push(`<video class="absolute top-0 bottom-0 left-0 right-0 home-video" id="Id" playsinline="true" autoplay="true" muted="false" loop="true" data-v-a2a2de3a><source${ssrRenderAttr("src", _imports_0$1)} type="video/mp4" data-v-a2a2de3a></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ai-box" data-v-a2a2de3a><div class="h-full w-full pt-20" data-v-a2a2de3a>`);
      if (_ctx.active) {
        _push(`<div class="lg:w-1/2 lg:ml-1/2 2xl:ml-2/3 flex items-center lg:items-start lg:justify-center h-full flex-col mt-8 lg:mt-0" data-v-a2a2de3a><div data-v-a2a2de3a><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-a2a2de3a>${ssrInterpolate(_ctx.$t("home.ai.title"))}</h1></div><p class="px-4 md:w-1/2 md:px-0 lg:w-full lg:pr-16 2xl:w-2/3 2xl:px-0 2xl:pr-16 mt-8 animate__animated animate__fadeIn animate__delay-2s" data-v-a2a2de3a>${ssrInterpolate(_ctx.$t("home.ai.content"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ai.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a2a2de3a"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='url(%23paint0_linear_5981_13919)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.53345%208.50904L6.74507%207.21313C6.47397%207.66327%206.24339%208.1366%206.05605%208.62755L8.15163%209.30568C8.26085%209.03185%208.38841%208.7657%208.53345%208.50904ZM10.2527%206.52403L8.63877%205.00098C8.14283%205.41738%207.69365%205.88649%207.29914%206.40003L9.08203%207.69155C9.42226%207.25527%209.81551%206.86307%2010.2527%206.52403ZM7.8532%2010.2483L5.75872%209.57013C5.6284%2010.0773%205.54322%2010.5951%205.50418%2011.1173H7.71057C7.73894%2010.8248%207.78659%2010.5345%207.8532%2010.2483ZM8.05947%2013.9966L5.96718%2014.6748C6.14457%2015.1823%206.36862%2015.6724%206.63645%2016.1386L8.43031%2014.8394C8.28715%2014.5656%208.16323%2014.2822%208.05947%2013.9911V13.9966ZM8.95037%2015.6777L7.17187%2016.9648C7.58483%2017.5316%208.06362%2018.0472%208.59818%2018.501L10.2088%2016.9802C9.73205%2016.6032%209.3087%2016.1632%208.95037%2015.6722V15.6777ZM7.69521%2012.2651H5.50089C5.52596%2012.7577%205.59239%2013.2474%205.69947%2013.7289L7.80493%2013.0475C7.75365%2012.7871%207.71702%2012.5241%207.69521%2012.2596V12.2651Z'%20fill='%23314F00'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.3012%207.50488C13.2843%207.50529%2012.301%207.86908%2011.5287%208.53063C10.7564%209.19218%2010.2459%2010.108%2010.0892%2011.1128H12.2495C12.407%2010.6158%2012.7394%2010.1928%2013.1849%209.92213C13.6305%209.65147%2014.159%209.55153%2014.6726%209.64084C15.1862%209.73014%2015.6501%2010.0026%2015.9781%2010.4078C16.3062%2010.813%2016.4763%2011.3234%2016.4569%2011.8444C16.4374%2012.3654%2016.2298%2012.8617%2015.8725%2013.2413C15.5152%2013.6209%2015.0323%2013.8581%2014.5135%2013.9089C13.9947%2013.9597%2013.475%2013.8207%2013.0509%2013.5176C12.6267%2013.2145%2012.3268%2012.7679%2012.2067%2012.2606H10.0738C10.1694%2013.0764%2010.4989%2013.8473%2011.0225%2014.4802C11.5461%2015.113%2012.2415%2015.581%2013.025%2015.8277C13.8084%2016.0744%2014.6465%2016.0893%2015.4382%2015.8705C16.2299%2015.6518%2016.9414%2015.2088%2017.4872%2014.5948C18.0329%2013.9809%2018.3895%2013.2223%2018.514%2012.4103C18.6385%2011.5983%2018.5256%2010.7677%2018.1889%2010.0184C17.8522%209.26916%2017.3061%208.63324%2016.6163%208.18728C15.9265%207.74132%2015.1225%207.50433%2014.3012%207.50488Z'%20fill='%23314F00'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_5981_13919'%20x1='3.43246e-07'%20y1='5.33333'%20x2='21.9914'%20y2='19.7231'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23BEFE00'/%3e%3cstop%20offset='0.71875'%20stop-color='%2330F200'/%3e%3cstop%20offset='1'%20stop-color='%2300F780'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "data",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CountUp = resolveComponent("CountUp");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-data-box" }, _attrs))} data-v-afd2668e><div class="h-full w-full pt-20 overflow-y-auto hide-scroll flex items-center justify-center" id="home-data" data-v-afd2668e><div class="flex items-center flex-col w-full px-4 lg:px-0" data-v-afd2668e>`);
      if (_ctx.active) {
        _push(`<div data-v-afd2668e><h1 class="text-2xl lg:text-6xl font-bold typed-out" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.title1"))}</h1><div class="flex justify-center" data-v-afd2668e><h1 class="text-2xl lg:text-6xl font-bold typed-out-2s text-center" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.title2"))}</h1></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="home-data-data-box rounded-lg lg:rounded-full mt-12 grid grid-cols-2 w-full lg:w-2/3 xl:w-1/2 relative" data-v-afd2668e>`);
      if (_ctx.active) {
        _push(`<div class="home-data-grid-1 flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(28403),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.nodes"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(16),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.ser"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(20002146),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.trans"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.active) {
        _push(`<div class="home-data-grid-2 flex flex-col items-center justify-center" data-v-afd2668e>`);
        _push(ssrRenderComponent(_component_CountUp, {
          "end-val": Number(4791671),
          duration: 2,
          "decimal-places": 0,
          delay: 2,
          class: "text-lg lg:text-3xl font-bold"
        }, null, _parent));
        _push(`<div class="mt-4 text-[#999]" data-v-afd2668e>${ssrInterpolate(_ctx.$t("home.data.zkp"))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="circleBox absolute w-40 h-40 left-1/2 top-1/2 -mt-20 -ml-20 flex items-center justify-center" data-v-afd2668e><div class="circle z-1 border border-6 border-[#C8D1B3] rounded-full" data-v-afd2668e><img${ssrRenderAttr("src", _imports_0)} class="w-16 h-16 border border-6 border-[#E0FF94] rounded-full" data-v-afd2668e></div><div class="circle1 w-10 h-10 z-0" data-v-afd2668e></div><div class="circle2 w-10 h-10 z-0" data-v-afd2668e></div><div class="circle3 w-10 h-10 z-0" data-v-afd2668e></div><div class="w-28 h-28 border absolute rounded-full border-[#99999944]" data-v-afd2668e></div><div class="w-40 h-40 border absolute rounded-full border-[#99999944]" data-v-afd2668e></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/data.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-afd2668e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "benifit",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBox = __nuxt_component_0;
      const _component_CommonFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-075ba65e><div class="absolute left-0 right-0 top-30" data-v-075ba65e>`);
      if (_ctx.active) {
        _push(`<div class="container mx-auto" data-v-075ba65e><div class="text-2xl lg:text-4xl font-bold pl-4 lg:pl-0 home-arc-1 animate__animated animate__fadeInUp animate__slower" data-v-075ba65e>${ssrInterpolate(_ctx.$t("home.ben.title"))}</div><div class="text-8xl lg:text-12xl xl:text-16xl font-bold text-[#ffffff22] mt-8 home-arc-2 animate__animated animate__fadeInUp animate__delay-1s animate__slower" data-v-075ba65e>${ssrInterpolate(_ctx.$t("home.ben.title").toUpperCase())}</div><div class="text-8xl lg:text-12xl xl:text-16xl font-bold text-[#ffffffaa] mt-8 home-arc-3 animate__animated animate__fadeInUp animate__delay-2s animate__slower" data-v-075ba65e>${ssrInterpolate(_ctx.$t("home.ben.title").toUpperCase())}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center home-ben-box" data-v-075ba65e><div class="h-full w-full pt-20 overflow-y-auto hide-scroll" id="home-ben" data-v-075ba65e><div class="mx-25 md:mx-10 lg:mx-20 xl:mx-40 flex justify-end pt-30 pb-40 lg:pt-40 lg:pb-0" data-v-075ba65e><div class="w-full xl:w-3/5" data-v-075ba65e>`);
      _push(ssrRenderComponent(_component_HomeBox, { class: "md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-075ba65e${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t1"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c1"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t1")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c1")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:ml-0 lg:w-2/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-075ba65e${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t2"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c2"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t2")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c2")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HomeBox, { class: "mt-12 md:w-1/2 md:ml-1/4 lg:w-2/5 lg:ml-3/5 lg:-mt-40" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-black justify-between h-full" data-v-075ba65e${_scopeId}><div class="text-xl h-12 pl-4 font-bold" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.t3"))}</div><div class="text-xl px-4 mb-8 xl:text-base 2xl:text-xl" data-v-075ba65e${_scopeId}>${ssrInterpolate(_ctx.$t("home.ben.c3"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-black justify-between h-full" }, [
                createVNode("div", { class: "text-xl h-12 pl-4 font-bold" }, toDisplayString(_ctx.$t("home.ben.t3")), 1),
                createVNode("div", { class: "text-xl px-4 mb-8 xl:text-base 2xl:text-xl" }, toDisplayString(_ctx.$t("home.ben.c3")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="h-40" data-v-075ba65e></div>`);
      _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/benifit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-075ba65e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const now = ref(0);
    const fullpage = ref(null);
    const options = ref({
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      navigation: false,
      anchors: ["", "", "", "", "", "", "", "", "", ""],
      sectionsColor: [],
      controlArrows: false,
      lockAnchors: false,
      recordHistory: false,
      scrollOverflow: true,
      scrollingSpeed: 700,
      resize: true,
      beforeLeave: function(origin, destination, direction, trigger) {
        now.value = destination.index;
      },
      css3: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_full_page = resolveComponent("full-page");
      const _component_HomeBanner = __nuxt_component_0$1;
      const _component_HomeArc = __nuxt_component_1;
      const _component_HomeRaas = __nuxt_component_2;
      const _component_HomeAi = __nuxt_component_3;
      const _component_HomeData = __nuxt_component_4;
      const _component_HomeBenifit = __nuxt_component_5;
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
            _push2(`</div><div class="section bg-black"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeArc, {
              active: unref(now) === 1,
              onNext: ($event) => unref(fullpage).api.moveTo(3, 0),
              onBefore: ($event) => unref(fullpage).api.moveTo(1, 0)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeRaas, {
              active: unref(now) === 2
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeAi, {
              active: unref(now) === 3
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeData, {
              active: unref(now) === 4,
              onNext: ($event) => unref(fullpage).api.moveTo(6, 0),
              onBefore: ($event) => unref(fullpage).api.moveTo(4, 0)
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="section"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeBenifit, {
              active: unref(now) === 5
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeBanner, {
                  active: unref(now) === 0
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section bg-black" }, [
                createVNode(_component_HomeArc, {
                  active: unref(now) === 1,
                  onNext: ($event) => unref(fullpage).api.moveTo(3, 0),
                  onBefore: ($event) => unref(fullpage).api.moveTo(1, 0)
                }, null, 8, ["active", "onNext", "onBefore"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeRaas, {
                  active: unref(now) === 2
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeAi, {
                  active: unref(now) === 3
                }, null, 8, ["active"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeData, {
                  active: unref(now) === 4,
                  onNext: ($event) => unref(fullpage).api.moveTo(6, 0),
                  onBefore: ($event) => unref(fullpage).api.moveTo(4, 0)
                }, null, 8, ["active", "onNext", "onBefore"])
              ]),
              createVNode("div", { class: "section" }, [
                createVNode(_component_HomeBenifit, {
                  active: unref(now) === 5
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
//# sourceMappingURL=index-Dr0mSs1J.mjs.map
