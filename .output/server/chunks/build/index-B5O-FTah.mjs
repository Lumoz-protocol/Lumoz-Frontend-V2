import { defineComponent, getCurrentInstance, inject, ref, watch, nextTick, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, computed, onUpdated, createVNode, provide, renderSlot, useSlots, reactive, onUnmounted, withDirectives, vShow, createCommentVNode, useSSRContext, shallowRef, mergeProps, withCtx, createBlock, createTextVNode, toDisplayString, isRef, isVNode } from 'vue';
import { b as buildProps, d as definePropType, t as throwError, u as useNamespace, E as ElIcon, h as arrow_left_default, i as arrow_right_default, f as close_default, p as plus_default, g as withInstall, j as withNoopInstall, _ as _export_sfc$1, k as isUndefined, l as isNumber } from './base-nAYtqrjF.mjs';
import { useResizeObserver, useDocumentVisibility, useWindowFocus, eagerComputed } from '@vueuse/core';
import { m as mutable, U as UPDATE_MODEL_EVENT } from './typescript-D1EYHpXz.mjs';
import { capitalize as capitalize$1, isString, isArray } from '@vue/shared';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRouter, g as __nuxt_component_6 } from './server.mjs';
import { a as getNetworkImg, L as LUMOZ, E as ETH, P as POLYGON, B as BNB } from './utils-CLQqHViM.mjs';
import axios from 'axios';
import moment from 'moment';
import 'lodash-unified';
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

const capitalize = (str) => capitalize$1(str);
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};
const tabsRootContextKey = Symbol("tabsRootContextKey");
const tabBarProps = buildProps({
  tabs: {
    type: definePropType(Array),
    default: () => mutable([])
  }
});
const COMPONENT_NAME$2 = "ElTabBar";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: tabBarProps,
  setup(__props, { expose }) {
    const props = __props;
    const instance = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$2, "<el-tabs><el-tab-bar /></el-tabs>");
    const ns = useNamespace("tabs");
    const barRef = ref();
    const barStyle = ref();
    const getBarStyle = () => {
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      const position = sizeDir === "x" ? "left" : "top";
      props.tabs.every((tab) => {
        var _a, _b;
        const $el = (_b = (_a = instance.parent) == null ? void 0 : _a.refs) == null ? void 0 : _b[`tab-${tab.uid}`];
        if (!$el)
          return false;
        if (!tab.active) {
          return true;
        }
        offset = $el[`offset${capitalize(position)}`];
        tabSize = $el[`client${capitalize(sizeName)}`];
        const tabStyles = (void 0).getComputedStyle($el);
        if (sizeName === "width") {
          if (props.tabs.length > 1) {
            tabSize -= Number.parseFloat(tabStyles.paddingLeft) + Number.parseFloat(tabStyles.paddingRight);
          }
          offset += Number.parseFloat(tabStyles.paddingLeft);
        }
        return false;
      });
      return {
        [sizeName]: `${tabSize}px`,
        transform: `translate${capitalize(sizeDir)}(${offset}px)`
      };
    };
    const update = () => barStyle.value = getBarStyle();
    watch(() => props.tabs, async () => {
      await nextTick();
      update();
    }, { immediate: true });
    useResizeObserver(barRef, () => update());
    expose({
      ref: barRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "barRef",
        ref: barRef,
        class: normalizeClass([unref(ns).e("active-bar"), unref(ns).is(unref(rootTabs).props.tabPosition)]),
        style: normalizeStyle(barStyle.value)
      }, null, 6);
    };
  }
});
var TabBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__file", "tab-bar.vue"]]);
const tabNavProps = buildProps({
  panes: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
const tabNavEmits = {
  tabClick: (tab, tabName, ev) => ev instanceof Event,
  tabRemove: (tab, ev) => ev instanceof Event
};
const COMPONENT_NAME$1 = "ElTabNav";
const TabNav = defineComponent({
  name: COMPONENT_NAME$1,
  props: tabNavProps,
  emits: tabNavEmits,
  setup(props, {
    expose,
    emit
  }) {
    const vm = getCurrentInstance();
    const rootTabs = inject(tabsRootContextKey);
    if (!rootTabs)
      throwError(COMPONENT_NAME$1, `<el-tabs><tab-nav /></el-tabs>`);
    const ns = useNamespace("tabs");
    const visibility = useDocumentVisibility();
    const focused = useWindowFocus();
    const navScroll$ = ref();
    const nav$ = ref();
    const el$ = ref();
    const tabBarRef = ref();
    const scrollable = ref(false);
    const navOffset = ref(0);
    const isFocus = ref(false);
    const focusable = ref(true);
    const sizeName = computed(() => ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height");
    const navStyle = computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      if (!navScroll$.value)
        return;
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      if (!navScroll$.value || !nav$.value)
        return;
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = async () => {
      const nav = nav$.value;
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav)
        return;
      await nextTick();
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      var _a;
      if (!nav$.value || !navScroll$.value)
        return;
      props.stretch && ((_a = tabBarRef.value) == null ? void 0 : _a.update());
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset;
        scrollable.value.next = currentOffset + containerSize < navSize;
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      const {
        up,
        down,
        left,
        right
      } = EVENT_CODE;
      if (![up, down, left, right].includes(code))
        return;
      const tabList = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));
      const currentIndex = tabList.indexOf(e.target);
      let nextIndex;
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus({
        preventScroll: true
      });
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value)
        isFocus.value = true;
    };
    const removeFocus = () => isFocus.value = false;
    watch(visibility, (visibility2) => {
      if (visibility2 === "hidden") {
        focusable.value = false;
      } else if (visibility2 === "visible") {
        setTimeout(() => focusable.value = true, 50);
      }
    });
    watch(focused, (focused2) => {
      if (focused2) {
        setTimeout(() => focusable.value = true, 50);
      } else {
        focusable.value = false;
      }
    });
    useResizeObserver(el$, update);
    onUpdated(() => update());
    expose({
      scrollToActiveTab,
      removeFocus
    });
    watch(() => props.panes, () => vm.update(), {
      flush: "post",
      deep: true
    });
    return () => {
      const scrollBtn = scrollable.value ? [createVNode("span", {
        "class": [ns.e("nav-prev"), ns.is("disabled", !scrollable.value.prev)],
        "onClick": scrollPrev
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_left_default, null, null)]
      })]), createVNode("span", {
        "class": [ns.e("nav-next"), ns.is("disabled", !scrollable.value.next)],
        "onClick": scrollNext
      }, [createVNode(ElIcon, null, {
        default: () => [createVNode(arrow_right_default, null, null)]
      })])] : null;
      const tabs = props.panes.map((pane, index2) => {
        var _a, _b, _c, _d;
        const uid = pane.uid;
        const disabled = pane.props.disabled;
        const tabName = (_b = (_a = pane.props.name) != null ? _a : pane.index) != null ? _b : `${index2}`;
        const closable = !disabled && (pane.isClosable || props.editable);
        pane.index = `${index2}`;
        const btnClose = closable ? createVNode(ElIcon, {
          "class": "is-icon-close",
          "onClick": (ev) => emit("tabRemove", pane, ev)
        }, {
          default: () => [createVNode(close_default, null, null)]
        }) : null;
        const tabLabelContent = ((_d = (_c = pane.slots).label) == null ? void 0 : _d.call(_c)) || pane.props.label;
        const tabindex = !disabled && pane.active ? 0 : -1;
        return createVNode("div", {
          "ref": `tab-${uid}`,
          "class": [ns.e("item"), ns.is(rootTabs.props.tabPosition), ns.is("active", pane.active), ns.is("disabled", disabled), ns.is("closable", closable), ns.is("focus", isFocus.value)],
          "id": `tab-${tabName}`,
          "key": `tab-${uid}`,
          "aria-controls": `pane-${tabName}`,
          "role": "tab",
          "aria-selected": pane.active,
          "tabindex": tabindex,
          "onFocus": () => setFocus(),
          "onBlur": () => removeFocus(),
          "onClick": (ev) => {
            removeFocus();
            emit("tabClick", pane, tabName, ev);
          },
          "onKeydown": (ev) => {
            if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
              emit("tabRemove", pane, ev);
            }
          }
        }, [...[tabLabelContent, btnClose]]);
      });
      return createVNode("div", {
        "ref": el$,
        "class": [ns.e("nav-wrap"), ns.is("scrollable", !!scrollable.value), ns.is(rootTabs.props.tabPosition)]
      }, [scrollBtn, createVNode("div", {
        "class": ns.e("nav-scroll"),
        "ref": navScroll$
      }, [createVNode("div", {
        "class": [ns.e("nav"), ns.is(rootTabs.props.tabPosition), ns.is("stretch", props.stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition))],
        "ref": nav$,
        "style": navStyle.value,
        "role": "tablist",
        "onKeydown": changeTab
      }, [...[!props.type ? createVNode(TabBar, {
        "ref": tabBarRef,
        "tabs": [...props.panes]
      }, null) : null, tabs]])])]);
    };
  }
});
const tabsProps = buildProps({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPaneName = (value) => isString(value) || isNumber(value);
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name) => isPaneName(name),
  tabClick: (pane, ev) => ev instanceof Event,
  tabChange: (name) => isPaneName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  tabRemove: (name) => isPaneName(name),
  tabAdd: () => true
};
const Tabs = defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    var _a;
    const ns = useNamespace("tabs");
    const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane
    } = useOrderedChildren(getCurrentInstance(), "ElTabPane");
    const nav$ = ref();
    const currentName = ref((_a = props.modelValue) != null ? _a : "0");
    const setCurrentName = async (value, trigger = false) => {
      var _a2, _b, _c;
      if (currentName.value === value || isUndefined(value))
        return;
      try {
        const canLeave = await ((_a2 = props.beforeLeave) == null ? void 0 : _a2.call(props, value, currentName.value));
        if (canLeave !== false) {
          currentName.value = value;
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value);
            emit("tabChange", value);
          }
          (_c = (_b = nav$.value) == null ? void 0 : _b.removeFocus) == null ? void 0 : _c.call(_b);
        }
      } catch (e) {
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName, true);
      emit("tabClick", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled || isUndefined(pane.props.name))
        return;
      ev.stopPropagation();
      emit("edit", pane.props.name, "remove");
      emit("tabRemove", pane.props.name);
    };
    const handleTabAdd = () => {
      emit("edit", void 0, "add");
      emit("tabAdd");
    };
    watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    watch(currentName, async () => {
      var _a2;
      await nextTick();
      (_a2 = nav$.value) == null ? void 0 : _a2.scrollToActiveTab();
    });
    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane,
      unregisterPane
    });
    expose({
      currentName
    });
    return () => {
      const addSlot = slots["add-icon"];
      const newButton = props.editable || props.addable ? createVNode("span", {
        "class": ns.e("new-tab"),
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if (ev.code === EVENT_CODE.enter)
            handleTabAdd();
        }
      }, [addSlot ? renderSlot(slots, "add-icon") : createVNode(ElIcon, {
        "class": ns.is("icon-plus")
      }, {
        default: () => [createVNode(plus_default, null, null)]
      })]) : null;
      const header = createVNode("div", {
        "class": [ns.e("header"), ns.is(props.tabPosition)]
      }, [newButton, createVNode(TabNav, {
        "ref": nav$,
        "currentName": currentName.value,
        "editable": props.editable,
        "type": props.type,
        "panes": panes.value,
        "stretch": props.stretch,
        "onTabClick": handleTabClick,
        "onTabRemove": handleTabRemove
      }, null)]);
      const panels = createVNode("div", {
        "class": ns.e("content")
      }, [renderSlot(slots, "default")]);
      return createVNode("div", {
        "class": [ns.b(), ns.m(props.tabPosition), {
          [ns.m("card")]: props.type === "card",
          [ns.m("border-card")]: props.type === "border-card"
        }]
      }, [...props.tabPosition !== "bottom" ? [header, panels] : [panels, header]]);
    };
  }
});
const tabPaneProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
const COMPONENT_NAME = "ElTabPane";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const slots = useSlots();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = useNamespace("tab-pane");
    const index2 = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => {
      var _a;
      return tabsRoot.currentName.value === ((_a = props.name) != null ? _a : index2.value);
    });
    const loaded = ref(active.value);
    const paneName = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : index2.value;
    });
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const pane = reactive({
      uid: instance.uid,
      slots,
      props,
      paneName,
      active,
      index: index2,
      isClosable
    });
    onUnmounted(() => {
      tabsRoot.unregisterPane(pane.uid);
    });
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__file", "tab-pane.vue"]]);
const ElTabs = withInstall(Tabs, {
  TabPane
});
const ElTabPane = withNoopInstall(TabPane);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "lumoz-radio",
  __ssrInlineRender: true,
  props: {
    content: { default: "" },
    highLight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "border px-2 mr-2 rounded-full mb-2 text-xs h-7 flex items-center",
          _ctx.disabled ? "text-[#444444] cursor-not-allowed bg-[#222222] border-[#222222]" : _ctx.highLight ? "bg-primary-900 opacity-85 text-black border border-primary-900 text-black hover:opacity-100 hover:text-black font-bold cursor-pointer" : "bg-dark-200 text-[#CCCCCC] hover:text-primary-900 hover:border-primary-900 border-dark-200 cursor-pointer"
        ]
      }, _attrs))}><div>${ssrInterpolate(_ctx.content)}</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lumoz-radio.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "select",
  __ssrInlineRender: true,
  props: {
    rollups: { default: () => {
      return [];
    } },
    appList: { default: () => {
      return [];
    } },
    showCount: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    var _a;
    const type = ref("");
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    const rollupsShowing = computed(() => {
      return [
        {
          _id: "",
          name: vm.$t("miner.overview.all")
        },
        ...props.rollups
      ];
    });
    const props = __props;
    watch(
      () => type.value,
      () => {
        emit("change", type.value);
      }
    );
    const emit = __emit;
    const getRollupCount = (item) => {
      if (!item._id) {
        return props.appList.length;
      } else if (item._id === -1) {
        return props.appList.filter((_item) => _item.layer == "Lumoz").length;
      }
      return props.appList.filter((_item) => _item.rollupId == item._id).length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LumozRadio = _sfc_main$5;
      const _component_client_only = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-end md:justify-between flex-wrap mt-1.5 mb-3" }, _attrs))}><div class="items-center hidden md:flex"><!--[-->`);
      ssrRenderList(unref(rollupsShowing).slice(0, 4), (item) => {
        _push(ssrRenderComponent(_component_LumozRadio, {
          key: item._id,
          "high-light": item._id === unref(type),
          onClick: ($event) => type.value = item._id,
          class: "mb-1 mb-5 lg:mb-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([item.img ? "" : "px-2", "flex items-center my-1"])}"${_scopeId}>`);
              if (item.img) {
                _push2(`<div class="flex items-center mr-2 relative"${_scopeId}><img${ssrRenderAttr("src", item.img)} class="w-5 h-5 rounded-full"${_scopeId}>`);
                if (unref(getNetworkImg)(item.layer1 || "")) {
                  _push2(`<img${ssrRenderAttr("src", unref(getNetworkImg)(item.layer1 || ""))} class="w-3 h-3 absolute -right-1 bottom-0"${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(item.name)} `);
              if (_ctx.showCount) {
                _push2(`<div${_scopeId}>(${ssrInterpolate(getRollupCount(item))})</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center my-1", item.img ? "" : "px-2"]
                }, [
                  item.img ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center mr-2 relative"
                  }, [
                    createVNode("img", {
                      src: item.img,
                      class: "w-5 h-5 rounded-full"
                    }, null, 8, ["src"]),
                    unref(getNetworkImg)(item.layer1 || "") ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(getNetworkImg)(item.layer1 || ""),
                      class: "w-3 h-3 absolute -right-1 bottom-0"
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(item.name) + " ", 1),
                  _ctx.showCount ? (openBlock(), createBlock("div", { key: 1 }, "(" + toDisplayString(getRollupCount(item)) + ")", 1)) : createCommentVNode("", true)
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rollups/select.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DATA_API = "https://lumoz.org/data/api/";
const lumozTestnetNetworkId = 51178;
const goerliNetworkId = 5;
const mumbaiNetworkId = 80001;
const bnbTestNetworkId = 97;
const NETWORKS = [
  {
    name: "Lumoz Testnet",
    chainId: lumozTestnetNetworkId,
    img: LUMOZ,
    chain: "Lumoz",
    id: lumozTestnetNetworkId,
    idHex: `0x${lumozTestnetNetworkId.toString(16)}`,
    symbol: "MOZ",
    decimals: 18,
    rpcUrl: "https://alpha-us-http-geth.lumoz.org",
    explorer: "https://lumoz.info",
    explorerName: "Lumoz.info",
    wallet: "metamask",
    rollupApplyContractAddress: "0xd57FE97DC021D7E2E3e96834F721a08E7E6a9014",
    multicallAddress: "0x7716B017265BFfbd7Fa6C300Bc505cE5A693E1BA",
    wmozAddress: ""
  },
  {
    name: "ETH(goerli)",
    chainId: goerliNetworkId,
    chain: "Goerli",
    img: ETH,
    id: goerliNetworkId,
    idHex: `0x${goerliNetworkId.toString(16)}`,
    symbol: "ETH",
    decimals: 18,
    rpcUrl: "https://ethereum-goerli.publicnode.com",
    explorer: "https://goerli.etherscan.io/",
    explorerName: "Etherscan",
    wallet: "metamask",
    rollupApplyContractAddress: "0xe077c0E55d7461F8C9357e3fCcfaFc0920b807F7",
    multicallAddress: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
    wmozAddress: "0x80920B48664b45c8FD9C2f4201AcFf6249c72768"
  },
  {
    name: "Polygon Mumbai",
    chainId: mumbaiNetworkId,
    chain: "Mumbai",
    img: POLYGON,
    id: mumbaiNetworkId,
    idHex: `0x${mumbaiNetworkId.toString(16)}`,
    symbol: "MATIC",
    decimals: 18,
    rpcUrl: "https://polygon-mumbai-bor.publicnode.com",
    explorer: "https://mumbai.polygonscan.com/",
    explorerName: "Polygonscan",
    wallet: "metamask",
    multicallAddress: "",
    rollupApplyContractAddress: "",
    wmozAddress: ""
  },
  {
    name: "BNB Testnet",
    chainId: bnbTestNetworkId,
    chain: "BNB Testnet",
    img: BNB,
    id: bnbTestNetworkId,
    idHex: `0x${bnbTestNetworkId.toString(16)}`,
    symbol: "BNB",
    decimals: 18,
    rpcUrl: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
    explorer: "https://testnet.bscscan.com/",
    explorerName: "Bscscan",
    wallet: "metamask",
    multicallAddress: "",
    rollupApplyContractAddress: "",
    wmozAddress: ""
  }
];
const dataUrl = (path) => {
  return `${DATA_API}${path}`;
};
const getNetworksId = (layer1) => {
  const network = NETWORKS.find((item) => item.chain === layer1);
  return (network == null ? void 0 : network.id) || "";
};
const getTotalMiners = async (layer1, rollupId, phase) => {
  const { data } = await axios.get(dataUrl(`total-miners`), {
    params: {
      layer1: getNetworksId(layer1),
      rollup_id: rollupId,
      phase
    }
  });
  return data;
};
const getTotalMinersChange = async (layer1, rollupId) => {
  const { data } = await axios.get(dataUrl(`daily-rollup-change-rate`), {
    params: {
      layer1: getNetworksId(layer1),
      rollup_id: rollupId
    }
  });
  return data;
};
const getMinerOverview = async (layer1) => {
  const { data } = await axios.get(dataUrl(`miner-overview`), {
    params: {
      layer1: getNetworksId(layer1)
    }
  });
  return data;
};
const getMinerOverviewLineChart = async (layer1, start) => {
  const { data } = await axios.get(dataUrl(`daily-rollup-overview`), {
    params: {
      layer1: getNetworksId(layer1),
      start
    }
  });
  return data;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "layer1-select",
  __ssrInlineRender: true,
  props: {
    list: { default: () => [] },
    count: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const layer1 = ref("");
    watch(
      () => layer1.value,
      () => {
        emit("change", layer1.value);
      }
    );
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LumozRadio = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center mt-2.2 mb-2 flex-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LumozRadio, {
        "high-light": !unref(layer1),
        onClick: ($event) => layer1.value = ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center my-1 px-2"${_scopeId}>${ssrInterpolate(_ctx.$t("miner.overview.all"))} `);
            if (_ctx.count) {
              _push2(`<span class="ml-1"${_scopeId}>(${ssrInterpolate(_ctx.list.length)})</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center my-1 px-2" }, [
                createTextVNode(toDisplayString(_ctx.$t("miner.overview.all")) + " ", 1),
                _ctx.count ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "ml-1"
                }, "(" + toDisplayString(_ctx.list.length) + ")", 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(NETWORKS).slice(0, 2), (item) => {
        _push(ssrRenderComponent(_component_LumozRadio, {
          key: item.chain,
          "high-light": item.chain === unref(layer1),
          onClick: ($event) => layer1.value = item.chain
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([unref(getNetworkImg)(item.chain) ? "" : "px-2", "flex items-center my-1"])}"${_scopeId}><img${ssrRenderAttr("src", unref(getNetworkImg)(item.chain))} class="w-5 h-5 rounded-full mr-2"${_scopeId}> ${ssrInterpolate(item.name)} `);
              if (_ctx.count) {
                _push2(`<span class="ml-1"${_scopeId}>(${ssrInterpolate(_ctx.list.filter((_item) => _item.layer1 === item.chain).length)})</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center my-1", unref(getNetworkImg)(item.chain) ? "" : "px-2"]
                }, [
                  createVNode("img", {
                    src: unref(getNetworkImg)(item.chain),
                    class: "w-5 h-5 rounded-full mr-2"
                  }, null, 8, ["src"]),
                  createTextVNode(" " + toDisplayString(item.name) + " ", 1),
                  _ctx.count ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ml-1"
                  }, "(" + toDisplayString(_ctx.list.filter((_item) => _item.layer1 === item.chain).length) + ")", 1)) : createCommentVNode("", true)
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rollups/layer1-select.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))} data-v-cca676cb><div class="circles" data-v-cca676cb><div class="circle circle-1" data-v-cca676cb></div><div class="circle circle-2" data-v-cca676cb></div></div><div class="card" data-v-cca676cb><div class="card opacity-90 hover:opacity-100" data-v-cca676cb><div class="gradient-container" data-v-cca676cb>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gradient.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cca676cb"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "info",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    content: { default: "" },
    format: { type: Boolean, default: true },
    unit: { default: "" },
    loading: { type: Boolean, default: false },
    size: { default: "normal" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Gradient = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Gradient, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([_ctx.size === "small" ? "py-4" : "", "p-4 flex justify-center flex-col cursor-pointer"])}" data-v-2531b1aa${_scopeId}><div class="text-sm" data-v-2531b1aa${_scopeId}>${ssrInterpolate(_ctx.title)}</div>`);
            if (_ctx.format) {
              _push2(`<div class="mt-2 font-bold h-7" data-v-2531b1aa${_scopeId}>`);
              if (_ctx.loading) {
                _push2(`<div class="sp sp-bars ml-3 mt-2" data-v-2531b1aa${_scopeId}></div>`);
              } else {
                _push2(`<span class="${ssrRenderClass(_ctx.size === "small" ? "text-base" : "")}" data-v-2531b1aa${_scopeId}>${ssrInterpolate(Number(_ctx.content || 0).toLocaleString())} ${ssrInterpolate(_ctx.unit)}</span>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div data-v-2531b1aa${_scopeId}><div class="mt-2 font-bold h-7" data-v-2531b1aa${_scopeId}>`);
              if (_ctx.loading) {
                _push2(`<div class="sp sp-bars ml-3 mt-2" data-v-2531b1aa${_scopeId}></div>`);
              } else {
                _push2(`<span class="${ssrRenderClass(_ctx.size === "small" ? "text-base" : "")}" data-v-2531b1aa${_scopeId}>${ssrInterpolate(_ctx.content)} ${ssrInterpolate(_ctx.unit)}</span>`);
              }
              _push2(`</div></div>`);
            }
            if (!_ctx.loading) {
              _push2(`<div data-v-2531b1aa${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["p-4 flex justify-center flex-col cursor-pointer", _ctx.size === "small" ? "py-4" : ""]
              }, [
                createVNode("div", { class: "text-sm" }, toDisplayString(_ctx.title), 1),
                _ctx.format ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-2 font-bold h-7"
                }, [
                  _ctx.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "sp sp-bars ml-3 mt-2"
                  })) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.size === "small" ? "text-base" : ""
                  }, toDisplayString(Number(_ctx.content || 0).toLocaleString()) + " " + toDisplayString(_ctx.unit), 3))
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "mt-2 font-bold h-7" }, [
                    _ctx.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "sp sp-bars ml-3 mt-2"
                    })) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.size === "small" ? "text-base" : ""
                    }, toDisplayString(_ctx.content) + " " + toDisplayString(_ctx.unit), 3))
                  ])
                ])),
                !_ctx.loading ? (openBlock(), createBlock("div", { key: 2 }, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2531b1aa"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='9'%20r='5'%20fill='black'/%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='%23F5222D'%20fill-opacity='0.4'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11'%20cy='9'%20r='5'%20fill='black'/%3e%3ccircle%20cx='5'%20cy='5'%20r='5'%20fill='%23BEFE00'%20fill-opacity='0.4'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useRouter();
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    const instance = getCurrentInstance();
    const echarts = instance.appContext.config.globalProperties.$echarts;
    let chart1 = null;
    let chart2 = null;
    const chart1Loading = ref(true);
    const chart2Loading = ref(true);
    const chartTypes = [
      {
        id: "proof",
        name: vm.$t("miner.overview.submitted")
      },
      {
        id: "miners",
        name: vm.$t("miner.overview.miners")
      },
      {
        id: "stake",
        name: vm.$t("miner.overview.staked")
      },
      {
        id: "income",
        name: vm.$t("miner.overview.incomeMOZ")
      }
    ];
    const minersSta = ref({
      total_count: "0",
      total_income: "0",
      total_miners: "0",
      staked_info: "0",
      daily_deposit_rate: "",
      daily_income_rate: "",
      daily_miner_rate: "",
      daily_submitted_rate: ""
    });
    const active = ref("rollups");
    const layer1 = ref("");
    const date = ref(7);
    const rollups = ref([]);
    const rollupDatas = ref([]);
    const type = ref("");
    const chartType = ref("proof");
    const staLoading = ref(true);
    const chartBars = ref([]);
    const lineCharts = ref([]);
    const recommend = computed(() => {
      var _a2, _b, _c;
      let datas = rollupDatas.value;
      if (active.value === "layer1") {
        if (!layer1.value) {
          return ((_a2 = rollups.value.find((item) => {
            var _a3;
            return item._id === ((_a3 = datas[0]) == null ? void 0 : _a3.id);
          })) == null ? void 0 : _a2.name) || "";
        } else {
          datas = rollupDatas.value.filter((item) => item.layer1 === layer1.value);
          return ((_b = rollups.value.find((item) => {
            var _a3;
            return item._id === ((_a3 = datas[0]) == null ? void 0 : _a3.id);
          })) == null ? void 0 : _b.name) || "";
        }
      } else if (!type.value) {
        return ((_c = rollups.value.find((item) => {
          var _a3;
          return item._id === ((_a3 = datas[0]) == null ? void 0 : _a3.id);
        })) == null ? void 0 : _c.name) || "";
      } else {
        return "";
      }
    });
    watch(
      () => [type.value, active.value, layer1.value],
      () => {
        getMinersSta();
        initMinerChart2();
      }
    );
    watch(
      () => [active.value],
      () => {
        initMinerChart1();
      }
    );
    watch(
      () => [active.value, layer1.value],
      () => {
        if (active.value === "layer1" || !type.value) {
          getOverview();
        }
      }
    );
    watch(
      () => chartType.value,
      () => {
        initMinerChart2();
        initMinerChart1();
      }
    );
    watch(
      () => [date.value, layer1.value, active.value, type.value],
      () => {
        getLineChart();
      }
    );
    const getMinersSta = async () => {
      var _a2;
      staLoading.value = true;
      minersSta.value = {
        total_count: "0",
        total_income: "0",
        total_miners: "0",
        staked_info: "0",
        daily_deposit_rate: "",
        daily_income_rate: "",
        daily_miner_rate: "",
        daily_submitted_rate: ""
      };
      let total;
      let change;
      if (active.value === "layer1") {
        total = await getTotalMiners(layer1.value, "");
        change = await getTotalMinersChange(layer1.value, "");
      } else {
        const _layer1 = (_a2 = rollups.value.find((item) => item._id === type.value)) == null ? void 0 : _a2.layer1;
        total = await getTotalMiners(_layer1 || "", type.value);
        change = await getTotalMinersChange(_layer1 || "", type.value);
      }
      minersSta.value = {
        ...total,
        ...change
      };
      staLoading.value = false;
    };
    const changeType = (val) => {
      type.value = val;
    };
    const changeLayer1 = (val) => {
      layer1.value = val;
    };
    const getOverview = async () => {
      let params = layer1.value;
      if (active.value === "rollups") {
        params = "";
      }
      const data = await getMinerOverview(params);
      chartBars.value = data.rollups;
      initMinerChart1();
    };
    const getLineChart = async () => {
      const start = moment().subtract(date.value, "days").format("YYYY-MM-DD");
      let params = layer1.value;
      if (active.value === "rollups") {
        params = "";
      }
      lineCharts.value = await getMinerOverviewLineChart(params, start);
      setTimeout(() => {
        initMinerChart2();
      }, 200);
    };
    const initMinerChart1 = () => {
      let total = 0;
      let key = "";
      chartBars.value.forEach((item) => {
        switch (chartType.value) {
          case "miners":
            total += Number(item.miner_count || 0);
            key = "miner_count";
            break;
          case "stake":
            total += Number(item.rollup_staked_info || 0);
            key = "rollup_staked_info";
            break;
          case "proof":
            total += Number(item.submitted_count || 0);
            key = "submitted_count";
            break;
          case "income":
            total += Number(item.rollup_income || 0);
            key = "rollup_income";
            break;
        }
      });
      const datas = [];
      if (active.value === "rollups" && type.value) {
        const item = rollups.value.find((_item) => _item._id === type.value);
        const chartData = chartBars.value.find((_item) => _item.rollup_id === item._id);
        total = chartData[key];
        datas.push({
          value: parseInt(chartData[key]),
          name: item.name
        });
      } else {
        chartBars.value.forEach((item) => {
          var _a2;
          const name = (_a2 = rollups.value.find((_item) => _item._id === item.rollup_id)) == null ? void 0 : _a2.name;
          if (!name) {
            datas.push({
              value: parseInt(item[key]),
              name: "Others"
            });
          } else {
            datas.push({
              value: parseInt(item[key]),
              name
            });
          }
        });
      }
      const dom = (void 0).getElementById("miner-overview-chart1");
      dom.removeAttribute("_echarts_instance_");
      chart1 = echarts.init(dom);
      chart1.setOption({
        color: [
          "#BFFE00",
          "#00FFB2",
          "#00C589",
          "#64AB9E",
          "#00899C",
          "#003959",
          "#084E39",
          "#5B8F18",
          "#74CB06",
          "#8EFE00"
        ],
        tooltip: {
          trigger: "item",
          backgroundColor: "#000000",
          borderColor: "#000000",
          textStyle: {
            color: "#FFFFFF"
          }
        },
        legend: {
          align: "auto",
          itemWidth: 12,
          itemHeight: 12,
          orient: "vertical",
          right: "20",
          top: "20",
          icon: "circle",
          inactiveBorderWidth: 0,
          formatter: function(name) {
            var _a2;
            const rollupId = ((_a2 = rollups.value.find((item2) => item2.name === name)) == null ? void 0 : _a2._id) || "";
            const item = chartBars.value.find((item2) => item2.rollup_id === rollupId);
            const val = item ? Number(item[key]) : 0;
            const arr = [
              "{a|" + name + "}",
              "  {b|" + Number((val / total * 100).toFixed(1)) + "%}"
            ];
            return arr.join("  ");
          },
          textStyle: {
            rich: {
              a: {
                fontSize: 12,
                width: 140,
                color: "#737373"
              },
              b: {
                fontSize: 12,
                width: 0,
                color: "#FFFFFF"
              }
            }
          }
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "95%"],
            center: ["34%", "50%"],
            label: {
              normal: {
                show: true,
                position: "center",
                color: "#FFFFFF",
                formatter: () => key === "rollup_staked_info" || key === "rollup_income" ? Math.floor(total).toLocaleString() + " MOZ" : total.toLocaleString(),
                fontSize: "18",
                fontWeight: "bolder"
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: "#000000"
              }
            },
            data: datas
          }
        ]
      });
      (void 0).onresize = resize;
      chart1Loading.value = false;
    };
    const initMinerChart2 = () => {
      let key = "";
      switch (chartType.value) {
        case "miners":
          key = "daily_miner_count";
          break;
        case "stake":
          key = "daily_deposit";
          break;
        case "proof":
          key = "daily_submitted_count";
          break;
        case "income":
          key = "daily_income";
          break;
      }
      let data = JSON.parse(JSON.stringify(lineCharts.value));
      if (active.value === "rollups" && type.value) {
        data = data.filter((item) => item.rollup_id === type.value);
        const dom = (void 0).getElementById("miner-overview-chart3");
        dom.removeAttribute("_echarts_instance_");
        chart2 = echarts.init(dom);
      } else {
        const dom = (void 0).getElementById("miner-overview-chart2");
        dom.removeAttribute("_echarts_instance_");
        chart2 = echarts.init(dom);
      }
      const names = [];
      const datas = [];
      let xAxis = [];
      for (const i in data) {
        const item = rollups.value.find((item2) => item2._id === data[i].rollup_id);
        if (item) {
          names.push(item.name);
          datas.push(data[i].daily_data);
        }
      }
      const startDates = datas.map((item) => item[0] ? item[0].day : "").filter((item) => item);
      const endDates = datas.map((item) => item[item.length - 1] ? item[item.length - 1].day : "").filter((item) => item);
      const startDate = moment.min(startDates.map((item) => moment(item))).format("YYYY-MM-DD");
      const endDate = moment.max(endDates.map((item) => moment(item))).format("YYYY-MM-DD");
      xAxis = [startDate];
      let current = moment(startDate).add(1, "days");
      while (current.isBetween(startDate, endDate)) {
        xAxis.push(current.format("YYYY-MM-DD"));
        current = current.add(1, "days");
      }
      xAxis.push(endDate);
      const series = [];
      names.forEach((item, index2) => {
        const y = [];
        for (const i in xAxis) {
          const x = datas[index2].find((_item) => _item.day === xAxis[i]);
          if (x) {
            y.push(Math.floor(Number(x[key])));
          } else {
            y.push(0);
          }
        }
        series.push({
          name: item,
          type: "line",
          showSymbol: false,
          data: y
        });
      });
      chart2.setOption({
        color: [
          "#BFFE00",
          "#00FFB2",
          "#00C589",
          "#64AB9E",
          "#00899C",
          "#003959",
          "#084E39",
          "#5B8F18",
          "#74CB06",
          "#8EFE00"
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          backgroundColor: "#000000",
          borderColor: "#000000",
          textStyle: {
            color: "#FFFFFF"
          }
        },
        grid: {
          top: "20px",
          left: "20px",
          right: "35px",
          bottom: "0",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: xAxis
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.2)"
              }
            }
          }
        ],
        series
      });
      (void 0).onresize = resize;
      resize();
      chart2Loading.value = false;
    };
    function resize() {
      chart1 == null ? void 0 : chart1.resize();
      chart2 == null ? void 0 : chart2.resize();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_RollupsSelect = _sfc_main$4;
      const _component_RollupsLayer1Select = _sfc_main$3;
      const _component_Info = __nuxt_component_4;
      const _component_LumozRadio = _sfc_main$5;
      const _component_client_only = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))} data-v-4c3ab8d6><div class="mt-4" data-v-4c3ab8d6><h1 class="mb-2" data-v-4c3ab8d6><div class="font-bold text-2xl py-6 lg:text-4xl lg:py-12 flex items-center justify-center" data-v-4c3ab8d6>${ssrInterpolate(_ctx.$t("miner.overview.title"))}</div>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(active),
        "onUpdate:modelValue": ($event) => isRef(active) ? active.value = $event : null,
        class: "simple_tabstabs lumoz-rollup-tabs mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: _ctx.$t("miner.overview.rollups"),
              name: "rollups"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: _ctx.$t("miner.overview.layer1"),
              name: "layer1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                label: _ctx.$t("miner.overview.rollups"),
                name: "rollups"
              }, null, 8, ["label"]),
              createVNode(_component_el_tab_pane, {
                label: _ctx.$t("miner.overview.layer1"),
                name: "layer1"
              }, null, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(active) === "rollups") {
        _push(ssrRenderComponent(_component_RollupsSelect, {
          rollups: unref(rollups),
          onChange: changeType
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_RollupsLayer1Select, { onChange: changeLayer1 }, null, _parent));
      }
      _push(`</h1><div class="md:grid w-full gap-4 z-1 lg:grid-cols-2 xl:grid-cols-5" data-v-4c3ab8d6>`);
      _push(ssrRenderComponent(_component_Info, {
        title: _ctx.$t("miner.overview.miners"),
        content: unref(minersSta).total_miners,
        loading: unref(staLoading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 text-sm font-bold h-5" data-v-4c3ab8d6${_scopeId}>`);
            if (!unref(staLoading)) {
              _push2(`<div class="flex items-center justify-between" data-v-4c3ab8d6${_scopeId}><div data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_miner_rate.startsWith("-") ? "" : "+")}${ssrInterpolate(unref(minersSta).daily_miner_rate)} <span class="${ssrRenderClass(
                unref(minersSta).daily_miner_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
              )}" data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_miner_rate.startsWith("-") ? "\u2193" : "\u2191")}</span><span class="text-text-200 font-normal text-xs ml-1" data-v-4c3ab8d6${_scopeId}>(${ssrInterpolate(_ctx.$t("miner.overview.lastDay"))})</span></div>`);
              if (unref(minersSta).daily_miner_rate.startsWith("-")) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-4c3ab8d6${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-4c3ab8d6${_scopeId}>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 text-sm font-bold h-5" }, [
                !unref(staLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between"
                }, [
                  createVNode("div", null, [
                    createTextVNode(toDisplayString(unref(minersSta).daily_miner_rate.startsWith("-") ? "" : "+") + toDisplayString(unref(minersSta).daily_miner_rate) + " ", 1),
                    createVNode("span", {
                      class: unref(minersSta).daily_miner_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
                    }, toDisplayString(unref(minersSta).daily_miner_rate.startsWith("-") ? "\u2193" : "\u2191"), 3),
                    createVNode("span", { class: "text-text-200 font-normal text-xs ml-1" }, "(" + toDisplayString(_ctx.$t("miner.overview.lastDay")) + ")", 1)
                  ]),
                  unref(minersSta).daily_miner_rate.startsWith("-") ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_1
                  }))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Info, {
        title: _ctx.$t("miner.overview.staking"),
        content: unref(minersSta).staked_info,
        loading: unref(staLoading),
        unit: "MOZ",
        class: "mt-4 md:mt-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 text-sm font-bold h-5" data-v-4c3ab8d6${_scopeId}>`);
            if (!unref(staLoading)) {
              _push2(`<div class="flex items-center justify-between" data-v-4c3ab8d6${_scopeId}><div data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_deposit_rate.startsWith("-") ? "" : "+")}${ssrInterpolate(unref(minersSta).daily_deposit_rate)} <span class="${ssrRenderClass(
                unref(minersSta).daily_deposit_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
              )}" data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_deposit_rate.startsWith("-") ? "\u2193" : "\u2191")}</span><span class="text-text-200 font-normal text-xs ml-1" data-v-4c3ab8d6${_scopeId}>(${ssrInterpolate(_ctx.$t("miner.overview.lastDay"))})</span></div>`);
              if (unref(minersSta).daily_deposit_rate.startsWith("-")) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-4c3ab8d6${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-4c3ab8d6${_scopeId}>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 text-sm font-bold h-5" }, [
                !unref(staLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between"
                }, [
                  createVNode("div", null, [
                    createTextVNode(toDisplayString(unref(minersSta).daily_deposit_rate.startsWith("-") ? "" : "+") + toDisplayString(unref(minersSta).daily_deposit_rate) + " ", 1),
                    createVNode("span", {
                      class: unref(minersSta).daily_deposit_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
                    }, toDisplayString(unref(minersSta).daily_deposit_rate.startsWith("-") ? "\u2193" : "\u2191"), 3),
                    createVNode("span", { class: "text-text-200 font-normal text-xs ml-1" }, "(" + toDisplayString(_ctx.$t("miner.overview.lastDay")) + ")", 1)
                  ]),
                  unref(minersSta).daily_deposit_rate.startsWith("-") ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_1
                  }))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Info, {
        title: _ctx.$t("miner.overview.proof"),
        content: unref(minersSta).total_count,
        loading: unref(staLoading),
        class: "mt-4 md:mt-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 text-sm font-bold h-5" data-v-4c3ab8d6${_scopeId}>`);
            if (!unref(staLoading)) {
              _push2(`<div class="flex items-center justify-between" data-v-4c3ab8d6${_scopeId}><div data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_submitted_rate.startsWith("-") ? "" : "+")}${ssrInterpolate(unref(minersSta).daily_submitted_rate)} <span class="${ssrRenderClass(
                unref(minersSta).daily_submitted_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
              )}" data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_submitted_rate.startsWith("-") ? "\u2193" : "\u2191")}</span><span class="text-text-200 font-normal text-xs ml-1" data-v-4c3ab8d6${_scopeId}>(${ssrInterpolate(_ctx.$t("miner.overview.lastDay"))})</span></div>`);
              if (unref(minersSta).daily_submitted_rate.startsWith("-")) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-4c3ab8d6${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-4c3ab8d6${_scopeId}>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 text-sm font-bold h-5" }, [
                !unref(staLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between"
                }, [
                  createVNode("div", null, [
                    createTextVNode(toDisplayString(unref(minersSta).daily_submitted_rate.startsWith("-") ? "" : "+") + toDisplayString(unref(minersSta).daily_submitted_rate) + " ", 1),
                    createVNode("span", {
                      class: unref(minersSta).daily_submitted_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
                    }, toDisplayString(unref(minersSta).daily_submitted_rate.startsWith("-") ? "\u2193" : "\u2191"), 3),
                    createVNode("span", { class: "text-text-200 font-normal text-xs ml-1" }, "(" + toDisplayString(_ctx.$t("miner.overview.lastDay")) + ")", 1)
                  ]),
                  unref(minersSta).daily_submitted_rate.startsWith("-") ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_1
                  }))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Info, {
        title: _ctx.$t("miner.overview.totalIncome"),
        content: unref(minersSta).total_income,
        loading: unref(staLoading),
        unit: "MOZ",
        class: "mt-4 md:mt-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 text-sm font-bold h-5" data-v-4c3ab8d6${_scopeId}>`);
            if (!unref(staLoading)) {
              _push2(`<div class="flex items-center justify-between" data-v-4c3ab8d6${_scopeId}><div data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_income_rate.startsWith("-") ? "" : "+")}${ssrInterpolate(unref(minersSta).daily_income_rate)} <span class="${ssrRenderClass(
                unref(minersSta).daily_income_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
              )}" data-v-4c3ab8d6${_scopeId}>${ssrInterpolate(unref(minersSta).daily_income_rate.startsWith("-") ? "\u2193" : "\u2191")}</span><span class="text-text-200 font-normal text-xs ml-1" data-v-4c3ab8d6${_scopeId}>(${ssrInterpolate(_ctx.$t("miner.overview.lastDay"))})</span></div>`);
              if (unref(minersSta).daily_income_rate.startsWith("-")) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-4c3ab8d6${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} data-v-4c3ab8d6${_scopeId}>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 text-sm font-bold h-5" }, [
                !unref(staLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between"
                }, [
                  createVNode("div", null, [
                    createTextVNode(toDisplayString(unref(minersSta).daily_income_rate.startsWith("-") ? "" : "+") + toDisplayString(unref(minersSta).daily_income_rate) + " ", 1),
                    createVNode("span", {
                      class: unref(minersSta).daily_income_rate.startsWith("-") ? "text-error-900" : "text-primary-900"
                    }, toDisplayString(unref(minersSta).daily_income_rate.startsWith("-") ? "\u2193" : "\u2191"), 3),
                    createVNode("span", { class: "text-text-200 font-normal text-xs ml-1" }, "(" + toDisplayString(_ctx.$t("miner.overview.lastDay")) + ")", 1)
                  ]),
                  unref(minersSta).daily_income_rate.startsWith("-") ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: _imports_0
                  })) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: _imports_1
                  }))
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Info, {
        title: unref(active) === "layer1" || !unref(type) ? _ctx.$t("miner.overview.recommendedRollup") : _ctx.$t("miner.overview.rollup"),
        content: unref(active) === "layer1" || !unref(type) ? unref(recommend) : (_a2 = unref(rollups).find((item) => item._id === unref(type))) == null ? void 0 : _a2.name,
        loading: unref(staLoading),
        format: false,
        class: "mt-4 md:mt-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2 text-sm font-bold h-5" data-v-4c3ab8d6${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2 text-sm font-bold h-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><h1 class="mt-8 text-lg" data-v-4c3ab8d6>${ssrInterpolate(_ctx.$t("miner.overview.chart"))}</h1><div class="flex items-center mt-2 flex-wrap" data-v-4c3ab8d6><!--[-->`);
      ssrRenderList(chartTypes, (item) => {
        _push(ssrRenderComponent(_component_LumozRadio, {
          key: item.id,
          content: item.name,
          "high-light": item.id === unref(chartType),
          onClick: ($event) => chartType.value = item.id
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="grid md:gap-4 mt-2 grid-cols-1 lg:grid-cols-2" data-v-4c3ab8d6><div class="gradient-card rounded-lg" data-v-4c3ab8d6>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="gradient-card p-4 rounded-lg mt-4 md:mt-0 relative" data-v-4c3ab8d6>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/miners/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c3ab8d6"]]);

export { index as default };
//# sourceMappingURL=index-B5O-FTah.mjs.map
