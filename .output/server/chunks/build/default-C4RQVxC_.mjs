import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-BMzrlL8w.mjs';
import { ref, defineComponent, provide, watch, unref, openBlock, createElementBlock, normalizeClass, renderSlot, createBlock, Transition, mergeProps, toHandlers, withCtx, createElementVNode, withKeys, withModifiers, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, withDirectives, vShow, h, inject, computed, normalizeStyle, createCommentVNode, useSlots, createSlots, useSSRContext, getCurrentInstance, nextTick, Fragment, renderList, isRef, onScopeDispose, Teleport as Teleport$1 } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { k as useNamespace, u as useRouter, B as useIdInjection, C as isBoolean, y as useZIndex, D as useId, E as useRoute, F as __nuxt_component_1$1, t as throwError$1, l as isNumber, x as defaultNamespace, g as __nuxt_component_6, _ as _export_sfc$1 } from './server.mjs';
import { NOOP, isFunction, isString, isArray } from '@vue/shared';
import { k as buildProp, b as buildProps, g as withInstall, E as ElIcon, j as withNoopInstall, d as definePropType, _ as _export_sfc, i as arrow_right_default, l as addUnit, f as close_default, m as hasClass, n as getStyle, o as addClass } from './base-DBDJxkSI.mjs';
import { P as PatchFlags, m as mutable, U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, E as EVENT_CODE } from './typescript-BCz55tGc.mjs';
import { isNil, castArray, isUndefined, get } from 'lodash-unified';
import { _ as _sfc_main$m } from './button-Bh1aFK91.mjs';
import { isClient, useTimeoutFn } from '@vueuse/core';
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

let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = (void 0).createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  (void 0).body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = (void 0).createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_default
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      if (isFunction(ref2)) {
        ref2(el);
      } else {
        ref2.value = el;
      }
    });
  };
};
const componentSizes = ["", "default", "small", "large"];
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const useDraggable = (targetRef, dragRef, draggable, overflow) => {
  const resetPosition = () => {
    if (targetRef.value) {
      targetRef.value.style.transform = "none";
    }
  };
  return {
    resetPosition
  };
};
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError$1("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((void 0).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  const cleanup = () => {
    setTimeout(() => {
      return;
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((void 0).body, hiddenCls.value);
    if (withoutHiddenClass) {
      (void 0).body.style.width;
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (void 0).documentElement.clientHeight < (void 0).body.scrollHeight;
    const bodyOverflowY = getStyle((void 0).body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (void 0).body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
    addClass((void 0).body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
buildProp({
  type: String,
  values: componentSizes,
  required: false
});
buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction(val) ? !val() : !val
  }
});
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  }
}
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = (void 0).createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === (void 0).activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = (void 0).activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = (void 0).performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$l = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = (void 0).activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Teleport$1, {
        key: 1,
        to: _ctx.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "teleport.vue"]]);
const ElTeleport = withInstall(Teleport);
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
const __default__$4 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$4,
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
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "collapse.vue"]]);
const __default__$3 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$3,
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
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "collapse-transition.vue"]]);
const ElCollapseTransition = withInstall(CollapseTransition);
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  icon: {
    type: iconPropType,
    default: arrow_right_default
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
const __default__$2 = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
          onClick: unref(handleHeaderClick),
          onKeydown: withKeys(withModifiers(unref(handleEnterClick), ["stop", "prevent"]), ["space", "enter"]),
          onFocus: unref(handleFocus),
          onBlur: ($event) => focusing.value = false
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          renderSlot(_ctx.$slots, "icon", { isActive: unref(isActive) }, () => [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(arrowKls))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]),
        createVNode(unref(ElCollapseTransition), null, {
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
            ], 10, ["id", "aria-hidden", "aria-labelledby"]), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogInjectionKey = Symbol("dialogInjectionKey");
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};
const __default__$1 = defineComponent({ name: "ElDialogContent" });
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", props.draggable),
      ns.is("align-center", props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    computed(() => props.draggable);
    computed(() => props.overflow);
    const { resetPosition } = useDraggable(dialogRef);
    expose({
      resetPosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(unref(dialogKls)),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createElementVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass([unref(ns).e("header"), { "show-close": _ctx.showClose }])
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createElementVNode("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: normalizeClass(unref(ns).e("title"))
            }, toDisplayString(_ctx.title), 11, ["aria-level"])
          ]),
          _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.dialog.close"),
            class: normalizeClass(unref(ns).e("headerbtn")),
            type: "button",
            onClick: ($event) => _ctx.$emit("close")
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass(unref(ns).e("close"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, ["aria-label", "onClick"])) : createCommentVNode("v-if", true)
        ], 2),
        createElementVNode("div", {
          id: unref(bodyId),
          class: normalizeClass(unref(ns).e("body"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 10, ["id"]),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const __default__ = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    const resetPosition = () => {
      var _a;
      (_a = dialogContentRef.value) == null ? void 0 : _a.resetPosition();
    };
    expose({
      visible,
      dialogContentRef,
      resetPosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "dialog-fade",
            onAfterEnter: unref(afterEnter),
            onAfterLeave: unref(afterLeave),
            onBeforeLeave: unref(beforeLeave),
            persisted: ""
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(ElOverlay), {
                "custom-mask-event": "",
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": unref(zIndex)
              }, {
                default: withCtx(() => [
                  createElementVNode("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": _ctx.title || void 0,
                    "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                    "aria-describedby": unref(bodyId),
                    class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                    style: normalizeStyle(unref(overlayDialogStyle)),
                    onClick: unref(overlayEvent).onClick,
                    onMousedown: unref(overlayEvent).onMousedown,
                    onMouseup: unref(overlayEvent).onMouseup
                  }, [
                    createVNode(unref(ElFocusTrap), {
                      loop: "",
                      trapped: unref(visible),
                      "focus-start-el": "container",
                      onFocusAfterTrapped: unref(onOpenAutoFocus),
                      onFocusAfterReleased: unref(onCloseAutoFocus),
                      onFocusoutPrevented: unref(onFocusoutPrevented),
                      onReleaseRequested: unref(onCloseRequested)
                    }, {
                      default: withCtx(() => [
                        unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                          key: 0,
                          ref_key: "dialogContentRef",
                          ref: dialogContentRef
                        }, _ctx.$attrs, {
                          center: _ctx.center,
                          "align-center": _ctx.alignCenter,
                          "close-icon": _ctx.closeIcon,
                          draggable: unref(draggable),
                          overflow: _ctx.overflow,
                          fullscreen: _ctx.fullscreen,
                          "show-close": _ctx.showClose,
                          title: _ctx.title,
                          "aria-level": _ctx.headerAriaLevel,
                          onClose: unref(handleClose)
                        }), createSlots({
                          header: withCtx(() => [
                            !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                              key: 0,
                              close: unref(handleClose),
                              titleId: unref(titleId),
                              titleClass: unref(ns).e("title")
                            }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                          ]),
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 2
                        }, [
                          _ctx.$slots.footer ? {
                            name: "footer",
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, "footer")
                            ])
                          } : void 0
                        ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                      ]),
                      _: 3
                    }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                  ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index"]), [
                [vShow, unref(visible)]
              ])
            ]),
            _: 3
          }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const _imports_0$6 = "" + buildAssetsURL("logo.ODMGqaVg.svg");
const _sfc_main$e = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "flex items-center cursor-pointer hvr-pulse-shrink"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$6)} class="h-8"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$6,
            class: "h-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/logo.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hidden lg:block"><div class="mr-10 items-center hover:text-primary-900 cursor-pointer hvr-bounce-in hvr-underline-from-center py-4 text-sm">${ssrInterpolate(_ctx.item.name)}</div></div><div class="lg:hidden"><div class="mr-10 items-center hover:text-primary-900 cursor-pointer py-4">${ssrInterpolate(_ctx.item.name)}</div></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/single-nav-item.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    t: "1649822344265",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path class="fill-current" d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" p-id="2128"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/triangle-down-line.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mr-10" }, _attrs))} data-v-5d63b256><div class="relative hidden lg:block" data-v-5d63b256><div class="${ssrRenderClass([unref(show) ? "text-primary-900" : "text-white", "py-4 cursor-pointer flex items-center transition hvr-bounce-in hvr-underline-from-center text-sm"])}" data-v-5d63b256>${ssrInterpolate(_ctx.name)} `);
      _push(ssrRenderComponent(_component_IconTriangleDownLine, {
        class: [{ "rotate-180": unref(show) }, "ml-0.5 w-4 flex-shrink-0 transform transition inline"]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="absolute z-10" data-v-5d63b256><ul class="${ssrRenderClass([_ctx.size === "large" ? "w-56" : "", "w-40 px-4 pb-4 shadow-default list-none absolute top-2 -left-4 transform rounded-lg bg-[#222222bb]"])}" data-v-5d63b256>`);
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-items.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-5d63b256"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center rounded-md cursor-pointer mr-3 text-sm hover:text-primary-900 hover:text-base" }, _attrs))}><span class="ml-2 mt-4 flex h-8 items-center"><span class="mr-1.5">${ssrInterpolate(_ctx.name)}</span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/nav-item.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0$5 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1724668858701'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1809'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M1020.521813%20161.706667L866.495147%20889.173333c-10.666667%2051.626667-41.813333%2064-85.333334%2040.106667l-234.666666-173.653333-113.493334%20109.653333c-12.8%2012.8-23.466667%2023.893333-46.933333%2023.893333-30.72%200-25.6-11.52-35.84-40.533333L269.161813%20584.533333%2036.62848%20512c-50.346667-14.933333-50.773333-49.493333%2011.093333-74.666667l907.093334-349.866666c41.386667-18.346667%2081.066667%2010.24%2065.28%2073.813333z'%20p-id='1810'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "tg",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://t.me/Lumozannouncement",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center justify-center hvr-bounce-in"
      }, _attrs))} data-v-e5095ff5><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center" data-v-e5095ff5><img${ssrRenderAttr("src", _imports_0$5)} class="w-4" data-v-e5095ff5></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-e5095ff5>Telegram</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/tg.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__scopeId", "data-v-e5095ff5"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/twitter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-622d7ea9"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "discord",
  __ssrInlineRender: true,
  props: {
    href: {},
    name: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "https://discord.com/invite/lumozorg",
        target: "_blank",
        class: "h-7 inline-block text-[#292929] transition flex items-center hvr-bounce-in"
      }, _attrs))} data-v-f636666a><svg class="h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f636666a><path d="M32 5C32 2.23858 29.7614 0 27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5Z" class="fill-current" data-v-f636666a></path><path d="M14.552 15.712C14.096 15.712 13.736 16.112 13.736 16.6C13.736 17.088 14.104 17.488 14.552 17.488C15.008 17.488 15.368 17.088 15.368 16.6C15.376 16.112 15.008 15.712 14.552 15.712ZM17.472 15.712C17.016 15.712 16.656 16.112 16.656 16.6C16.656 17.088 17.024 17.488 17.472 17.488C17.928 17.488 18.288 17.088 18.288 16.6C18.288 16.112 17.928 15.712 17.472 15.712Z" fill="white" data-v-f636666a></path><path d="M21.36 9H10.64C9.736 9 9 9.736 9 10.648V21.464C9 22.376 9.736 23.112 10.64 23.112H19.712L19.288 21.632L20.312 22.584L21.28 23.48L23 25V10.648C23 9.736 22.264 9 21.36 9ZM18.272 19.448C18.272 19.448 17.984 19.104 17.744 18.8C18.792 18.504 19.192 17.848 19.192 17.848C18.864 18.064 18.552 18.216 18.272 18.32C17.872 18.488 17.488 18.6 17.112 18.664C16.344 18.808 15.64 18.768 15.04 18.656C14.584 18.568 14.192 18.44 13.864 18.312C13.68 18.24 13.48 18.152 13.28 18.04C13.256 18.024 13.232 18.016 13.208 18C13.192 17.992 13.184 17.984 13.176 17.976C13.032 17.896 12.952 17.84 12.952 17.84C12.952 17.84 13.336 18.48 14.352 18.784C14.112 19.088 13.816 19.448 13.816 19.448C12.048 19.392 11.376 18.232 11.376 18.232C11.376 15.656 12.528 13.568 12.528 13.568C13.68 12.704 14.776 12.728 14.776 12.728L14.856 12.824C13.416 13.24 12.752 13.872 12.752 13.872C12.752 13.872 12.928 13.776 13.224 13.64C14.08 13.264 14.76 13.16 15.04 13.136C15.088 13.128 15.128 13.12 15.176 13.12C15.664 13.056 16.216 13.04 16.792 13.104C17.552 13.192 18.368 13.416 19.2 13.872C19.2 13.872 18.568 13.272 17.208 12.856L17.32 12.728C17.32 12.728 18.416 12.704 19.568 13.568C19.568 13.568 20.72 15.656 20.72 18.232C20.72 18.232 20.04 19.392 18.272 19.448Z" fill="white" data-v-f636666a></path></svg>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-f636666a>${ssrInterpolate(_ctx.name)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/discord.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-f636666a"]]);
const _imports_0$4 = "data:image/svg+xml,%3csvg%20width='15'%20height='12'%20viewBox='0%200%2015%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.899536%200.674652V2.43721L7.94978%205.96233L15%202.43721V0.674652H0.899536ZM0.899536%204.19977V11.25H15V4.19977L7.94978%207.72489L0.899536%204.19977Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-198aa601><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#34d399] flex items-center justify-center" data-v-198aa601><img${ssrRenderAttr("src", _imports_0$4)} class="w-4" data-v-198aa601></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-198aa601>Email</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/email.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-198aa601"]]);
const _imports_0$3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1683788650546'%20class='icon'%20viewBox='0%200%201331%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3430'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='259.9609375'%20height='200'%3e%3cpath%20d='M1322.368%20225.536c0-119.68-85.888-215.9616-192-215.9616C986.5728%202.6624%20839.9616%200%20690.2272%200H643.5328C494.08%200%20347.2128%202.6624%20203.4432%209.5744%2097.5616%209.5744%2011.6992%20106.3936%2011.6992%20226.0736A3993.9584%203993.9584%200%200%200%202.56%20510.1312c-0.256%2094.6944%202.6112%20189.3888%208.832%20284.3392%200%20119.68%2085.888%20216.7552%20191.744%20216.7552%20151.04%207.168%20305.9712%2010.368%20463.488%2010.112%20157.7728%200.512%20312.1664-2.6624%20463.4368-10.112%20106.1376%200%20192.0256-97.0752%20192.0256-216.7552%206.2208-94.976%209.088-189.6448%208.832-284.5952%200.512-94.6944-2.3296-189.3888-8.576-284.3392zM539.7504%20771.072V248.3968l376.2688%20261.1712L539.7504%20771.072z'%20fill='%23ffffff'%20p-id='3431'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      }, _attrs))} data-v-c1aa5942><div class="w-7 h-7 rounded bg-[#292929] hover:bg-[#e93620] flex items-center justify-center" data-v-c1aa5942><img${ssrRenderAttr("src", _imports_0$3)} class="w-4" data-v-c1aa5942></div>`);
      if (_ctx.name) {
        _push(`<span class="ml-1.5" data-v-c1aa5942>Youtube</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icon/youtube.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-c1aa5942"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconTg = __nuxt_component_0;
  const _component_IconTwitter = __nuxt_component_1;
  const _component_IconDiscord = __nuxt_component_2$1;
  const _component_IconEmail = __nuxt_component_3;
  const _component_IconYoutube = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IconTg, null, null, _parent));
  _push(ssrRenderComponent(_component_IconTwitter, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconDiscord, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconEmail, { class: "ml-3" }, null, _parent));
  _push(ssrRenderComponent(_component_IconYoutube, { class: "ml-3" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/media.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0$2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1665288072633'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4831'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M63.97608%20127.975696v127.909182h895.454322V127.975696H63.97608z%20m255.843946%20447.727161h639.610376V447.787536H319.820026v127.915321z%20m0%20319.780118h639.610376V767.541047H319.820026v127.941928zM63.97608%20575.702857h127.922485V447.787536H63.97608v127.915321z%20m0%20319.780118h127.922485V767.541047H63.97608v127.941928z'%20p-id='4832'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    const router = useRouter();
    const menuShow = ref(false);
    const navHide = ref(false);
    const singleMenus = ref([
      { name: vm.$t("header.zkv"), link: "https://node.lumoz.org" },
      { name: vm.$t("header.raas"), link: "/compute-layer" },
      { name: vm.$t("header.rollups"), link: "/rollups" },
      { name: vm.$t("header.points"), link: "/lumoz-points" }
    ]);
    const menus = ref([
      {
        name: vm.$t("header.community.title"),
        list: [
          {
            name: vm.$t("header.community.miners"),
            local: true,
            url: "/miners"
          },
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
      router.push("/launchbase");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLogo = __nuxt_component_0$2;
      const _component_CommonSingleNavItem = _sfc_main$d;
      const _component_CommonNavItems = __nuxt_component_2$2;
      const _component_CommonNavItem = _sfc_main$a;
      const _component_CommonMedia = __nuxt_component_4;
      const _component_HomeButton = _sfc_main$m;
      const _component_client_only = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-10 top-0 left-0 right-0 h-20 bg-filter flex items-center justify-between px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonLogo, null, null, _parent));
      _push(`<div class="hidden xl:flex items-center h-full"><!--[-->`);
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
      _push(`</div><div class="xl:hidden relative">`);
      if (!unref(menuShow)) {
        _push(`<img${ssrRenderAttr("src", _imports_0$2)} class="w-6 mr-2 cursor-pointer hvr-bounce-in">`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("footer.BJqA6y1w.avif");
const _imports_1$1 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_625)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_625)'/%3e%3cpath%20d='M36%2023.5C35.3625%2023.8%2034.725%2023.9%2033.9813%2024C34.725%2023.6%2035.2563%2023%2035.4688%2022.2C34.8313%2022.6%2034.0875%2022.8%2033.2375%2023C32.6%2022.4%2031.6438%2022%2030.6875%2022C28.4563%2022%2026.7563%2024%2027.2875%2026C24.4188%2025.9%2021.8688%2024.6%2020.0625%2022.6C19.1063%2024.1%2019.6375%2026%2021.125%2027C20.5938%2027%2020.0625%2026.8%2019.5312%2026.6C19.5312%2028.1%2020.7%2029.5%2022.2938%2029.9C21.7625%2030%2021.2313%2030.1%2020.7%2030C21.125%2031.3%2022.4%2032.3%2023.9937%2032.3C22.7187%2033.2%2020.8063%2033.7%2019%2033.5C20.5938%2034.4%2022.4%2035%2024.3125%2035C30.7937%2035%2034.4062%2029.9%2034.1937%2025.2C34.9375%2024.8%2035.575%2024.2%2036%2023.5Z'%20fill='%23232937'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_625'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_625'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_625'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_630)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M24.6895%2026.5878C25.5385%2026.5878%2026.2262%2027.2004%2026.2107%2027.9482C26.2107%2028.6969%2025.5402%2029.3087%2024.6895%2029.3087C23.8552%2029.3087%2023.1675%2028.6969%2023.1675%2027.9482C23.1675%2027.2004%2023.8397%2026.5878%2024.6895%2026.5878ZM30.1347%2026.5878C30.9853%2026.5878%2031.6576%2027.2004%2031.6576%2027.9482C31.6576%2028.6969%2030.9853%2029.3087%2030.1347%2029.3087C29.3003%2029.3087%2028.6135%2028.6969%2028.6135%2027.9482C28.6135%2027.2004%2029.284%2026.5878%2030.1347%2026.5878ZM31.5453%2033C34.7618%2032.9011%2036%2030.8291%2036%2030.8291C36%2026.2283%2033.9034%2022.4991%2033.9034%2022.4991C31.8085%2020.9572%2029.8131%2021.0001%2029.8131%2021.0001L29.6099%2021.2285C32.0846%2021.9714%2033.2337%2023.0432%2033.2337%2023.0432C31.8824%2022.3113%2030.3932%2021.8452%2028.8527%2021.6721C27.8757%2021.566%2026.8888%2021.5751%2025.914%2021.6993C25.8257%2021.6993%2025.7528%2021.7141%2025.6654%2021.7282C25.1569%2021.7719%2023.9186%2021.9565%2022.3623%2022.6285C21.8246%2022.8709%2021.5031%2023.0432%2021.5031%2023.0432C21.5031%2023.0432%2022.7121%2021.9137%2025.3309%2021.1716L25.1852%2021.0001C25.1852%2021.0001%2023.1915%2020.9581%2021.0949%2022.5007C21.0949%2022.5007%2019%2026.2291%2019%2030.8282C19%2030.8282%2020.2228%2032.8994%2023.4393%2033C23.4393%2033%2023.9769%2032.3585%2024.4151%2031.8152C22.5655%2031.271%2021.8683%2030.1282%2021.8683%2030.1282C21.8683%2030.1282%2022.0124%2030.2288%2022.2739%2030.3715C22.2885%2030.3855%2022.3022%2030.4003%2022.3323%2030.4135C22.376%2030.444%2022.4197%2030.4572%2022.4643%2030.4861C22.8279%2030.6856%2023.1915%2030.8423%2023.525%2030.9717C24.1227%2031.2001%2024.8353%2031.4285%2025.6662%2031.5868C26.9105%2031.8212%2028.1898%2031.8256%2029.4358%2031.6C30.1615%2031.4755%2030.8695%2031.2696%2031.5453%2030.9866C32.1349%2030.7672%2032.6967%2030.4842%2033.22%2030.1431C33.22%2030.1431%2032.492%2031.3139%2030.5849%2031.844C31.0222%2032.3866%2031.547%2033%2031.547%2033H31.5453Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_630)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_630'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_630'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_630'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_635)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.3886%2022H33.6382C34.3875%2022%2035%2022.5749%2035%2023.2813V23.5489L29.036%2029.1651C28.6302%2029.5472%2028.0895%2029.758%2027.5144%2029.758C26.9402%2029.758%2026.3995%2029.5472%2025.9927%2029.1651L20.0297%2023.5489V23.2813C20.0297%2022.5749%2020.6393%2022%2021.3886%2022ZM20%2030.3077V24.4283L23.2576%2027.4964L20%2030.3077ZM34.9713%2024.4283V30.2905L31.7223%2027.4883L34.9713%2024.4283ZM28.5698%2030.1707C28.9134%2030.0366%2029.2254%2029.8397%2029.4877%2029.5913L29.4886%2029.5904L31.24%2027.9415L34.9713%2031.1601V31.7187C34.9713%2032.4251%2034.3607%2033%2033.6104%2033H21.3609C20.6106%2033%2020%2032.4251%2020%2031.7178V31.1772L23.74%2027.9496L25.4826%2029.5913C26.0176%2030.095%2026.7296%2030.3725%2027.4856%2030.3725C27.8576%2030.3734%2028.2261%2030.3048%2028.5698%2030.1707Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_635)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_635'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_635'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_635'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_640)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27.25%2026.2353V30.7647L31%2028.4922L27.25%2026.2353ZM35.85%2031.6272C35.85%2031.6272%2035.7031%2032.7046%2035.2538%2033.1795C34.6831%2033.8026%2034.0438%2033.8052%2033.7506%2033.8415C31.6519%2034%2028.5031%2034%2028.5031%2034H28.4969C28.4969%2034%2025.3481%2034%2023.2494%2033.8415C22.9556%2033.8052%2022.3169%2033.8026%2021.7456%2033.1795C21.2962%2032.7046%2021.15%2031.6266%2021.15%2031.6266C21.15%2031.6266%2021%2030.3622%2021%2029.0972V27.9099C21%2026.6442%2021.15%2025.3786%2021.15%2025.3786C21.15%2025.3786%2021.2962%2024.3012%2021.7456%2023.8263C22.3169%2023.2032%2023.0662%2023.2232%2023.4%2023.1579C24.6%2023.0369%2028.5%2023%2028.5%2023C28.5%2023%2031.6519%2023.0052%2033.7506%2023.1631C34.0444%2023.1999%2034.6831%2023.2025%2035.2538%2023.8256C35.7038%2024.3006%2035.85%2025.3786%2035.85%2025.3786C35.85%2025.3786%2036%2026.6436%2036%2027.9092V29.0959C36%2030.3616%2035.85%2031.6272%2035.85%2031.6272Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_640)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_640'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_640'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_640'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    const router = useRouter();
    const footer = ref([
      {
        name: vm.$t("footer.solutions"),
        list: [
          {
            name: vm.$t("footer.s1"),
            url: "/compute-layer"
          },
          {
            name: vm.$t("footer.s2"),
            url: "/rollups"
          },
          {
            name: vm.$t("footer.s3"),
            url: "/launchbase"
          }
        ]
      },
      {
        name: vm.$t("footer.zkv"),
        list: [
          {
            name: "Run A Node",
            url: "https://quidditch-zkverifiers.lumoz.org/my-node"
          },
          {
            name: "Staking",
            url: "https://quidditch-zkverifiers.lumoz.org/staking"
          },
          {
            name: "Delegate",
            url: "https://quidditch-zkverifiers.lumoz.org/staking?tab=delegate"
          },
          {
            name: "Public Sale",
            url: "https://node.lumoz.org/public-sale"
          }
        ]
      },
      {
        name: vm.$t("footer.community"),
        list: [
          {
            name: vm.$t("footer.c1"),
            url: "/miners"
          },
          {
            name: vm.$t("footer.c2"),
            url: "/lumoz-points"
          },
          {
            name: vm.$t("footer.c3"),
            url: "/ecosystems"
          },
          {
            name: vm.$t("footer.c4"),
            url: "https://mirror.xyz/lumozorg.eth"
          },
          {
            name: vm.$t("footer.c5"),
            url: "https://docs.lumoz.org/"
          },
          {
            name: vm.$t("footer.c6"),
            url: "https://github.com/lumoz-protocol/Media-Kits"
          }
        ]
      }
    ]);
    const showImg = computed(() => {
      const rou = router.currentRoute.value.path.toLowerCase();
      if (rou == "/quidditch-join" || rou == "/zkverifier-events") {
        return false;
      }
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9b12eda9>`);
      if (unref(showImg)) {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} class="h-80 w-full" data-v-9b12eda9>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="-mt-40" data-v-9b12eda9><div class="w-full flex items-center justify-center" data-v-9b12eda9><div class="footer-linear-1 h-0.5 w-1/2" data-v-9b12eda9></div><div class="footer-linear-2 h-0.5 w-1/2" data-v-9b12eda9></div></div><div class="bg-[#000000] py-16 px-4 lg:px-32 lg:flex justify-between" data-v-9b12eda9><div class="grid grid-cols-2 md:grid-cols-3 gap-16" data-v-9b12eda9><!--[-->`);
      ssrRenderList(unref(footer), (item, index) => {
        _push(`<div class="flex flex-col" data-v-9b12eda9><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-9b12eda9>${ssrInterpolate(item.name)}</div><!--[-->`);
        ssrRenderList(item.list, (_item, _index) => {
          _push(`<div class="mt-2 flex justify-center lg:justify-start" data-v-9b12eda9><a class="cursor-pointer text-[#ffffffaa] hover:text-primary-900 hvr-pulse" data-v-9b12eda9>${ssrInterpolate(_item.name)}</a></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div data-v-9b12eda9><div class="flex flex-col mt-16 lg:mt-0" data-v-9b12eda9><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-9b12eda9>${ssrInterpolate(_ctx.$t("footer.find"))}</div><div class="flex justify-center lg:justify-start footer-icons" data-v-9b12eda9><a href="https://twitter.com/LumozOrg" target="_blank" class="rounded-full hvr-float" data-v-9b12eda9><img${ssrRenderAttr("src", _imports_1$1)} class="w-10" data-v-9b12eda9></a><a href="https://discord.com/invite/lumozorg" target="_blank" class="ml-4 rounded-full hvr-float" data-v-9b12eda9><img${ssrRenderAttr("src", _imports_2)} class="w-10" data-v-9b12eda9></a><a href="mailto:contact@lumoz.org" class="ml-4 rounded-full hvr-float" data-v-9b12eda9><img${ssrRenderAttr("src", _imports_3)} class="w-10" data-v-9b12eda9></a><a href="https://www.youtube.com/@LumozOrg" target="_blank" class="ml-4 rounded-full hvr-float" data-v-9b12eda9><img${ssrRenderAttr("src", _imports_4)} class="w-10" data-v-9b12eda9></a></div></div></div></div></div><div class="bg-[#000000]" data-v-9b12eda9><div class="mx-4 lg:mx-32 py-4 border-t border-[#ffffff40] text-[#ffffff40] text-center" data-v-9b12eda9> \xA9 2024 Lumoz Org, Inc </div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-9b12eda9"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='0.5'%20width='19'%20height='19'%20rx='3.5'%20stroke='%23BEFE00'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='0.5'%20width='19'%20height='19'%20rx='3.5'%20stroke='%23BEFE00'/%3e%3cpath%20d='M8.83263%2012.6433L16.4926%204.98242L17.6718%206.16076L8.83263%2014.9999L3.5293%209.69659L4.70763%208.51826L8.83263%2012.6433Z'%20fill='%23DBFF34'/%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ip",
  __ssrInlineRender: true,
  setup(__props) {
    const dialog = ref(false);
    const check = ref(false);
    const country = ref("");
    const agree = () => {
      localStorage.setItem("lumoz-ip", Number(/* @__PURE__ */ new Date()).toString());
      dialog.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_HomeButton = _sfc_main$m;
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        class: "lumoz-dialog",
        width: "550",
        "close-on-press-escape": false,
        "close-on-click-modal": false,
        "lock-scroll": true,
        "modal-class": "dialog-modal",
        "show-close": false,
        "align-center": "",
        "append-to-body": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white -mt-4 px-4"${_scopeId}><div class="text-center text-xl font-bold"${_scopeId}>Lumoz products aren\u2019t available in your region </div><div class="text-center text-base my-4"${_scopeId}>Lumoz is currently not available in ${ssrInterpolate(unref(country))} due to local laws and regulations. If you do not reside in ${ssrInterpolate(unref(country))}, you may continue using Lumoz. </div><div${_scopeId}><div class="${ssrRenderClass([unref(check) ? "text-primary-900" : "", "flex items-center justify-center text-lg mt-8 cursor-pointer hover:text-primary-900"])}"${_scopeId}>`);
            if (!unref(check)) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="mr-2"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="mr-2"${_scopeId}>`);
            }
            _push2(` Don&#39;t show for 7 days. </div></div><div class="mt-8 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeButton, {
              light: !unref(check),
              class: "w-32",
              onClick: agree,
              word: "Close"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-white -mt-4 px-4" }, [
                createVNode("div", { class: "text-center text-xl font-bold" }, "Lumoz products aren\u2019t available in your region "),
                createVNode("div", { class: "text-center text-base my-4" }, "Lumoz is currently not available in " + toDisplayString(unref(country)) + " due to local laws and regulations. If you do not reside in " + toDisplayString(unref(country)) + ", you may continue using Lumoz. ", 1),
                createVNode("div", null, [
                  createVNode("div", {
                    class: ["flex items-center justify-center text-lg mt-8 cursor-pointer hover:text-primary-900", unref(check) ? "text-primary-900" : ""],
                    onClick: ($event) => check.value = !unref(check)
                  }, [
                    !unref(check) ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: _imports_0,
                      alt: "",
                      class: "mr-2"
                    })) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: _imports_1,
                      alt: "",
                      class: "mr-2"
                    })),
                    createTextVNode(" Don't show for 7 days. ")
                  ], 10, ["onClick"])
                ]),
                createVNode("div", { class: "mt-8 flex items-center justify-center" }, [
                  createVNode(_component_HomeButton, {
                    light: !unref(check),
                    class: "w-32",
                    onClick: agree,
                    word: "Close"
                  }, null, 8, ["light"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonHeader = _sfc_main$3;
      const _component_NuxtPage = __nuxt_component_1$1;
      const _component_CommonFooter = __nuxt_component_2;
      const _component_Ip = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonHeader, null, null, _parent));
      if (unref(router).currentRoute.value.fullPath !== "/") {
        _push(`<div class="h-20"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      if (unref(router).currentRoute.value.fullPath !== "/") {
        _push(ssrRenderComponent(_component_CommonFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Ip, null, null, _parent));
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
//# sourceMappingURL=default-C4RQVxC_.mjs.map
