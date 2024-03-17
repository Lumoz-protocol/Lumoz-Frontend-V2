import { f as __nuxt_component_6 } from './server.mjs';
import { defineComponent, ref, useSlots, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wallet",
  __ssrInlineRender: true,
  setup(__props) {
    ref(!!useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_6;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=wallet-Dl1e5hJs.mjs.map
