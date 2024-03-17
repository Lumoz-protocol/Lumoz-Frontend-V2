import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-MaC8fVJ6.mjs';
import { defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot, normalizeClass, createBlock, Transition, toHandlers, withCtx, createElementVNode, withKeys, withModifiers, createTextVNode, toDisplayString, createVNode, withDirectives, vShow, useSSRContext, ref, watch, provide, inject, getCurrentInstance, Fragment, renderList, warn } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useRouter, k as useIdInjection, l as useRoute, m as __nuxt_component_1$1, f as __nuxt_component_6, _ as _export_sfc$1 } from './server.mjs';
import { isString, NOOP, isObject, hasOwn, isArray } from '@vue/shared';
import { fromPairs, castArray } from 'lodash-unified';
import { _ as _sfc_main$g } from './button-Bh1aFK91.mjs';
import { I as IFRAME_PREFIX } from './networks-D5gBYVoB.mjs';
import { _ as __nuxt_component_2$2 } from './footer-D4R-a7Gv.mjs';
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

const isUndefined = (val) => val === void 0;
const isNumber = (val) => typeof val === "number";
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const mutable = (val) => val;
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$3 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const emitChangeFn = (value) => isNumber(value) || isString(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "collapse.vue"]]);
const __default__$1 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse == null ? void 0 : collapse.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const _hoisted_1 = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
const _hoisted_2 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
          onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(arrowKls))
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
          }, 8, ["class"])
        ], 42, _hoisted_1),
        createVNode(unref(_CollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_2), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const _imports_0$3 = "" + buildAssetsURL("logo.ODMGqaVg.svg");
const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "flex items-center cursor-pointer hvr-pulse-shrink"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$3)} class="h-8"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$3,
            class: "h-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/logo.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "single-nav-item",
  __ssrInlineRender: true,
  props: {
    item: { default: () => {
      return {
        link: "",
        name: "",
        img: ""
      };
    } }
  },
  setup(__props) {
    useRouter();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hidden lg:block"><div class="mr-10 items-center hover:text-primary-900 cursor-pointer hvr-bounce-in hvr-underline-from-center py-4">${ssrInterpolate(_ctx.item.name)}</div></div><div class="lg:hidden"><div class="mr-10 items-center hover:text-primary-900 cursor-pointer py-4">${ssrInterpolate(_ctx.item.name)}</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/single-nav-item.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1649822344265",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path class="fill-current" d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" p-id="2128"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/triangle-down-line.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "nav-items",
  __ssrInlineRender: true,
  props: {
    size: { default: "large" },
    name: { default: "" },
    hideStatus: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const show = ref(false);
    watch(
      () => props.hideStatus,
      () => {
        show.value = false;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTriangleDownLine = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mr-10" }, _attrs))} data-v-22a3e68c><div class="relative hidden lg:block" data-v-22a3e68c><div class="${ssrRenderClass([unref(show) ? "text-primary-900" : "text-white", "py-4 cursor-pointer flex items-center transition hvr-bounce-in hvr-underline-from-center"])}" data-v-22a3e68c>${ssrInterpolate(_ctx.name)} `);
      _push(ssrRenderComponent(_component_IconTriangleDownLine, {
        class: [{ "rotate-180": unref(show) }, "ml-0.5 w-4 flex-shrink-0 transform transition inline"]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="absolute z-10" data-v-22a3e68c><ul class="${ssrRenderClass([_ctx.size === "large" ? "w-56" : "", "w-40 px-4 pb-4 shadow-default list-none absolute top-2 -left-4 transform rounded-lg bg-[#222222bb]"])}" data-v-22a3e68c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul></div></div>`);
      _push(ssrRenderComponent(unref(ElCollapse), { class: "lg:hidden" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElCollapseItem), {
              title: _ctx.name,
              class: "py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElCollapseItem), {
                title: _ctx.name,
                class: "py-4"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }, 8, ["title"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-items.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-22a3e68c"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "nav-item",
  __ssrInlineRender: true,
  props: {
    url: { default: "" },
    local: { type: Boolean, default: false },
    name: { default: "" }
  },
  setup(__props) {
    useRouter();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center rounded-md cursor-pointer mr-3 hover:text-primary-900 hover:lg:text-base" }, _attrs))}><span class="ml-2 mt-4 flex h-8 items-center"><span class="mr-1.5">${ssrInterpolate(_ctx.name)}</span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-item.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "twitter",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://twitter.com/LumozOrg",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center hvr-bounce-in"
      }, _attrs))} data-v-622d7ea9><svg class="h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-622d7ea9><path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" class="fill-current" data-v-622d7ea9></path><path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" fill="white" data-v-622d7ea9></path></svg>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-622d7ea9>${ssrInterpolate(_ctx.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/twitter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-622d7ea9"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "discord",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://discord.gg/lumoz",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center hvr-bounce-in"
      }, _attrs))} data-v-21bc9242><svg class="h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-21bc9242><path d="M32 5C32 2.23858 29.7614 0 27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5Z" class="fill-current" data-v-21bc9242></path><path d="M14.552 15.712C14.096 15.712 13.736 16.112 13.736 16.6C13.736 17.088 14.104 17.488 14.552 17.488C15.008 17.488 15.368 17.088 15.368 16.6C15.376 16.112 15.008 15.712 14.552 15.712ZM17.472 15.712C17.016 15.712 16.656 16.112 16.656 16.6C16.656 17.088 17.024 17.488 17.472 17.488C17.928 17.488 18.288 17.088 18.288 16.6C18.288 16.112 17.928 15.712 17.472 15.712Z" fill="white" data-v-21bc9242></path><path d="M21.36 9H10.64C9.736 9 9 9.736 9 10.648V21.464C9 22.376 9.736 23.112 10.64 23.112H19.712L19.288 21.632L20.312 22.584L21.28 23.48L23 25V10.648C23 9.736 22.264 9 21.36 9ZM18.272 19.448C18.272 19.448 17.984 19.104 17.744 18.8C18.792 18.504 19.192 17.848 19.192 17.848C18.864 18.064 18.552 18.216 18.272 18.32C17.872 18.488 17.488 18.6 17.112 18.664C16.344 18.808 15.64 18.768 15.04 18.656C14.584 18.568 14.192 18.44 13.864 18.312C13.68 18.24 13.48 18.152 13.28 18.04C13.256 18.024 13.232 18.016 13.208 18C13.192 17.992 13.184 17.984 13.176 17.976C13.032 17.896 12.952 17.84 12.952 17.84C12.952 17.84 13.336 18.48 14.352 18.784C14.112 19.088 13.816 19.448 13.816 19.448C12.048 19.392 11.376 18.232 11.376 18.232C11.376 15.656 12.528 13.568 12.528 13.568C13.68 12.704 14.776 12.728 14.776 12.728L14.856 12.824C13.416 13.24 12.752 13.872 12.752 13.872C12.752 13.872 12.928 13.776 13.224 13.64C14.08 13.264 14.76 13.16 15.04 13.136C15.088 13.128 15.128 13.12 15.176 13.12C15.664 13.056 16.216 13.04 16.792 13.104C17.552 13.192 18.368 13.416 19.2 13.872C19.2 13.872 18.568 13.272 17.208 12.856L17.32 12.728C17.32 12.728 18.416 12.704 19.568 13.568C19.568 13.568 20.72 15.656 20.72 18.232C20.72 18.232 20.04 19.392 18.272 19.448Z" fill="white" data-v-21bc9242></path></svg>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-21bc9242>${ssrInterpolate(_ctx.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/discord.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-21bc9242"]]);
const _imports_0$2 = "data:image/svg+xml,%3csvg%20width='15'%20height='12'%20viewBox='0%200%2015%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.899536%200.674652V2.43721L7.94978%205.96233L15%202.43721V0.674652H0.899536ZM0.899536%204.19977V11.25H15V4.19977L7.94978%207.72489L0.899536%204.19977Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "email",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "mailto:contact@lumoz.org",
        class: "h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
      }, _attrs))} data-v-198aa601><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center" data-v-198aa601><img${ssrRenderAttr("src", _imports_0$2)} class="w-4" data-v-198aa601></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-198aa601>Email</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/email.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-198aa601"]]);
const _imports_0$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1683788650546'%20class='icon'%20viewBox='0%200%201331%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3430'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='259.9609375'%20height='200'%3e%3cpath%20d='M1322.368%20225.536c0-119.68-85.888-215.9616-192-215.9616C986.5728%202.6624%20839.9616%200%20690.2272%200H643.5328C494.08%200%20347.2128%202.6624%20203.4432%209.5744%2097.5616%209.5744%2011.6992%20106.3936%2011.6992%20226.0736A3993.9584%203993.9584%200%200%200%202.56%20510.1312c-0.256%2094.6944%202.6112%20189.3888%208.832%20284.3392%200%20119.68%2085.888%20216.7552%20191.744%20216.7552%20151.04%207.168%20305.9712%2010.368%20463.488%2010.112%20157.7728%200.512%20312.1664-2.6624%20463.4368-10.112%20106.1376%200%20192.0256-97.0752%20192.0256-216.7552%206.2208-94.976%209.088-189.6448%208.832-284.5952%200.512-94.6944-2.3296-189.3888-8.576-284.3392zM539.7504%20771.072V248.3968l376.2688%20261.1712L539.7504%20771.072z'%20fill='%23ffffff'%20p-id='3431'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "youtube",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://www.youtube.com/@LumozOrg",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
      }, _attrs))} data-v-c1aa5942><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#e93620] flex items-center justify-center" data-v-c1aa5942><img${ssrRenderAttr("src", _imports_0$1)} class="w-4" data-v-c1aa5942></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-c1aa5942>Youtube</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/youtube.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-c1aa5942"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconTwitter = __nuxt_component_0;
  const _component_IconDiscord = __nuxt_component_1;
  const _component_IconEmail = __nuxt_component_2;
  const _component_IconYoutube = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IconTwitter, null, null, _parent));
  _push(ssrRenderComponent(_component_IconDiscord, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconEmail, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconYoutube, { class: "ml-3" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/media.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1665288072633'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4831'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M63.97608%20127.975696v127.909182h895.454322V127.975696H63.97608z%20m255.843946%20447.727161h639.610376V447.787536H319.820026v127.915321z%20m0%20319.780118h639.610376V767.541047H319.820026v127.941928zM63.97608%20575.702857h127.922485V447.787536H63.97608v127.915321z%20m0%20319.780118h127.922485V767.541047H63.97608v127.941928z'%20p-id='4832'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    useRouter();
    const menuShow = ref(false);
    const navHide = ref(false);
    const singleMenus = ref([
      { name: vm.$t("header.raas"), link: "/raas" },
      { name: vm.$t("header.rollups"), link: "/rollups" },
      { name: vm.$t("header.points"), link: "/lumoz-points" }
    ]);
    const menus = ref([
      {
        name: vm.$t("header.community.title"),
        list: [
          {
            name: vm.$t("header.community.ecosystems"),
            local: true,
            url: "/ecosystems"
          },
          {
            name: vm.$t("header.community.developer"),
            local: false,
            url: "https://docs.lumoz.org"
          },
          {
            name: vm.$t("header.community.blog"),
            local: false,
            url: "https://mirror.xyz/lumozorg.eth"
          }
        ]
      }
    ]);
    const hideMenu = () => {
      menuShow.value = false;
    };
    const hideItems = () => {
      navHide.value = !navHide.value;
    };
    const toLaunch = () => {
      (void 0).open(IFRAME_PREFIX + "rollup/create");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLogo = __nuxt_component_0$2;
      const _component_CommonSingleNavItem = _sfc_main$a;
      const _component_CommonNavItems = __nuxt_component_2$1;
      const _component_CommonNavItem = _sfc_main$7;
      const _component_CommonMedia = __nuxt_component_4;
      const _component_HomeButton = _sfc_main$g;
      const _component_client_only = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-1 top-0 left-0 right-0 h-20 bg-filter flex items-center justify-between px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonLogo, null, null, _parent));
      _push(`<div class="hidden lg:flex items-center h-full"><!--[-->`);
      ssrRenderList(unref(singleMenus), (item) => {
        _push(ssrRenderComponent(_component_CommonSingleNavItem, {
          key: item.name,
          item,
          onClick: hideMenu
        }, null, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(menus), (item) => {
        _push(ssrRenderComponent(_component_CommonNavItems, {
          key: item.name,
          name: item.name,
          "hide-status": unref(navHide)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(item.list, (_item) => {
                _push2(ssrRenderComponent(_component_CommonNavItem, {
                  key: _item.name,
                  name: _item.name,
                  type: _item.type,
                  local: _item.local,
                  url: _item.url,
                  onClick: hideItems
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(item.list, (_item) => {
                  return openBlock(), createBlock(_component_CommonNavItem, {
                    key: _item.name,
                    name: _item.name,
                    type: _item.type,
                    local: _item.local,
                    url: _item.url,
                    onClick: hideItems
                  }, null, 8, ["name", "type", "local", "url"]);
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="px-2 2xl:px-5 border-l border-r border-border-300">`);
      _push(ssrRenderComponent(_component_CommonMedia, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomeButton, {
        onClick: toLaunch,
        class: "ml-8",
        word: _ctx.$t("header.launch")
      }, null, _parent));
      _push(`</div><div class="lg:hidden relative">`);
      if (!unref(menuShow)) {
        _push(`<img${ssrRenderAttr("src", _imports_0)} class="w-6 mr-2 cursor-pointer hvr-bounce-in">`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonHeader = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_1$1;
      const _component_CommonFooter = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonHeader, null, null, _parent));
      if (unref(router).currentRoute.value.fullPath !== "/") {
        _push(`<div class="h-20"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DjzPuLdZ.mjs.map
