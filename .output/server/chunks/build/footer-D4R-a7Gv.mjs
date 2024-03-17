import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, getCurrentInstance, ref, unref } from 'vue';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _imports_0 = "" + buildAssetsURL("footer.BJqA6y1w.avif");
const _imports_1 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_625)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_625)'/%3e%3cpath%20d='M36%2023.5C35.3625%2023.8%2034.725%2023.9%2033.9813%2024C34.725%2023.6%2035.2563%2023%2035.4688%2022.2C34.8313%2022.6%2034.0875%2022.8%2033.2375%2023C32.6%2022.4%2031.6438%2022%2030.6875%2022C28.4563%2022%2026.7563%2024%2027.2875%2026C24.4188%2025.9%2021.8688%2024.6%2020.0625%2022.6C19.1063%2024.1%2019.6375%2026%2021.125%2027C20.5938%2027%2020.0625%2026.8%2019.5312%2026.6C19.5312%2028.1%2020.7%2029.5%2022.2938%2029.9C21.7625%2030%2021.2313%2030.1%2020.7%2030C21.125%2031.3%2022.4%2032.3%2023.9937%2032.3C22.7187%2033.2%2020.8063%2033.7%2019%2033.5C20.5938%2034.4%2022.4%2035%2024.3125%2035C30.7937%2035%2034.4062%2029.9%2034.1937%2025.2C34.9375%2024.8%2035.575%2024.2%2036%2023.5Z'%20fill='%23232937'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_625'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_625'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_625'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_630)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M24.6895%2026.5878C25.5385%2026.5878%2026.2262%2027.2004%2026.2107%2027.9482C26.2107%2028.6969%2025.5402%2029.3087%2024.6895%2029.3087C23.8552%2029.3087%2023.1675%2028.6969%2023.1675%2027.9482C23.1675%2027.2004%2023.8397%2026.5878%2024.6895%2026.5878ZM30.1347%2026.5878C30.9853%2026.5878%2031.6576%2027.2004%2031.6576%2027.9482C31.6576%2028.6969%2030.9853%2029.3087%2030.1347%2029.3087C29.3003%2029.3087%2028.6135%2028.6969%2028.6135%2027.9482C28.6135%2027.2004%2029.284%2026.5878%2030.1347%2026.5878ZM31.5453%2033C34.7618%2032.9011%2036%2030.8291%2036%2030.8291C36%2026.2283%2033.9034%2022.4991%2033.9034%2022.4991C31.8085%2020.9572%2029.8131%2021.0001%2029.8131%2021.0001L29.6099%2021.2285C32.0846%2021.9714%2033.2337%2023.0432%2033.2337%2023.0432C31.8824%2022.3113%2030.3932%2021.8452%2028.8527%2021.6721C27.8757%2021.566%2026.8888%2021.5751%2025.914%2021.6993C25.8257%2021.6993%2025.7528%2021.7141%2025.6654%2021.7282C25.1569%2021.7719%2023.9186%2021.9565%2022.3623%2022.6285C21.8246%2022.8709%2021.5031%2023.0432%2021.5031%2023.0432C21.5031%2023.0432%2022.7121%2021.9137%2025.3309%2021.1716L25.1852%2021.0001C25.1852%2021.0001%2023.1915%2020.9581%2021.0949%2022.5007C21.0949%2022.5007%2019%2026.2291%2019%2030.8282C19%2030.8282%2020.2228%2032.8994%2023.4393%2033C23.4393%2033%2023.9769%2032.3585%2024.4151%2031.8152C22.5655%2031.271%2021.8683%2030.1282%2021.8683%2030.1282C21.8683%2030.1282%2022.0124%2030.2288%2022.2739%2030.3715C22.2885%2030.3855%2022.3022%2030.4003%2022.3323%2030.4135C22.376%2030.444%2022.4197%2030.4572%2022.4643%2030.4861C22.8279%2030.6856%2023.1915%2030.8423%2023.525%2030.9717C24.1227%2031.2001%2024.8353%2031.4285%2025.6662%2031.5868C26.9105%2031.8212%2028.1898%2031.8256%2029.4358%2031.6C30.1615%2031.4755%2030.8695%2031.2696%2031.5453%2030.9866C32.1349%2030.7672%2032.6967%2030.4842%2033.22%2030.1431C33.22%2030.1431%2032.492%2031.3139%2030.5849%2031.844C31.0222%2032.3866%2031.547%2033%2031.547%2033H31.5453Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_630)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_630'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_630'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_630'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_635)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.3886%2022H33.6382C34.3875%2022%2035%2022.5749%2035%2023.2813V23.5489L29.036%2029.1651C28.6302%2029.5472%2028.0895%2029.758%2027.5144%2029.758C26.9402%2029.758%2026.3995%2029.5472%2025.9927%2029.1651L20.0297%2023.5489V23.2813C20.0297%2022.5749%2020.6393%2022%2021.3886%2022ZM20%2030.3077V24.4283L23.2576%2027.4964L20%2030.3077ZM34.9713%2024.4283V30.2905L31.7223%2027.4883L34.9713%2024.4283ZM28.5698%2030.1707C28.9134%2030.0366%2029.2254%2029.8397%2029.4877%2029.5913L29.4886%2029.5904L31.24%2027.9415L34.9713%2031.1601V31.7187C34.9713%2032.4251%2034.3607%2033%2033.6104%2033H21.3609C20.6106%2033%2020%2032.4251%2020%2031.7178V31.1772L23.74%2027.9496L25.4826%2029.5913C26.0176%2030.095%2026.7296%2030.3725%2027.4856%2030.3725C27.8576%2030.3734%2028.2261%2030.3048%2028.5698%2030.1707Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_635)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_635'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_635'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_635'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_177_640)'%3e%3cpath%20d='M47.25%200H8.75C3.91751%200%200%203.91751%200%208.75V47.25C0%2052.0825%203.91751%2056%208.75%2056H47.25C52.0825%2056%2056%2052.0825%2056%2047.25V8.75C56%203.91751%2052.0825%200%2047.25%200Z'%20fill='%23212932'/%3e%3c/g%3e%3ccircle%20cx='27.5'%20cy='27.5'%20r='16.5'%20fill='%23DBFF34'/%3e%3cpath%20d='M27.25%2026.2353V30.7647L31%2028.4922L27.25%2026.2353ZM35.85%2031.6272C35.85%2031.6272%2035.7031%2032.7046%2035.2538%2033.1795C34.6831%2033.8026%2034.0438%2033.8052%2033.7506%2033.8415C31.6519%2034%2028.5031%2034%2028.5031%2034H28.4969C28.4969%2034%2025.3481%2034%2023.2494%2033.8415C22.9556%2033.8052%2022.3169%2033.8026%2021.7456%2033.1795C21.2962%2032.7046%2021.15%2031.6266%2021.15%2031.6266C21.15%2031.6266%2021%2030.3622%2021%2029.0972V27.9099C21%2026.6442%2021.15%2025.3786%2021.15%2025.3786C21.15%2025.3786%2021.2962%2024.3012%2021.7456%2023.8263C22.3169%2023.2032%2023.0662%2023.2232%2023.4%2023.1579C24.6%2023.0369%2028.5%2023%2028.5%2023C28.5%2023%2031.6519%2023.0052%2033.7506%2023.1631C34.0444%2023.1999%2034.6831%2023.2025%2035.2538%2023.8256C35.7038%2024.3006%2035.85%2025.3786%2035.85%2025.3786C35.85%2025.3786%2036%2026.6436%2036%2027.9092V29.0959C36%2030.3616%2035.85%2031.6272%2035.85%2031.6272Z'%20fill='%23232937'/%3e%3cpath%20d='M27%2046C17.0589%2046%209%2050.4772%209%2056H45C45%2050.4772%2036.9411%2046%2027%2046Z'%20fill='url(%23paint0_radial_177_640)'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_177_640'%20x='0'%20y='0'%20width='56'%20height='56'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.87451%200%200%200%200%200.996078%200%200%200%200%200.258824%200%200%200%200.31%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_177_640'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_177_640'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.5455%2056)%20rotate(-180)%20scale(17.4545%208.28056)'%3e%3cstop%20stop-color='%23DEFD41'%20stop-opacity='0.63'/%3e%3cstop%20offset='1'%20stop-color='%23DEFD41'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const vm = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
    useRouter();
    const footer = ref([
      {
        name: vm.$t("footer.solutions"),
        list: [
          {
            name: vm.$t("footer.s1"),
            url: "/"
          },
          {
            name: vm.$t("footer.s2"),
            url: "/raas"
          },
          {
            name: vm.$t("footer.s3"),
            url: "/rollups"
          }
        ]
      },
      {
        name: vm.$t("footer.community"),
        list: [
          {
            name: vm.$t("footer.c1"),
            url: "/lumoz-points"
          },
          {
            name: vm.$t("footer.c2"),
            url: "/ecosystems"
          },
          {
            name: vm.$t("footer.c3"),
            url: "https://mirror.xyz/lumozorg.eth"
          },
          {
            name: vm.$t("footer.c4"),
            url: "https://docs.lumoz.org/"
          },
          {
            name: vm.$t("footer.c5"),
            url: "https://lumoz.org/admin/file/files/LUMOZ_MEDIA_KIT_2.zip"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a233a460><img${ssrRenderAttr("src", _imports_0)} class="h-80 w-full" data-v-a233a460><div class="-mt-40" data-v-a233a460><div class="w-full flex items-center justify-center" data-v-a233a460><div class="footer-linear-1 h-0.5 w-1/2" data-v-a233a460></div><div class="footer-linear-2 h-0.5 w-1/2" data-v-a233a460></div></div><div class="bg-[#000000aa] py-16 px-4 lg:px-32 lg:flex justify-between" data-v-a233a460><div class="grid grid-cols-2 md:grid-cols-3 gap-16" data-v-a233a460><!--[-->`);
      ssrRenderList(unref(footer), (item, index) => {
        _push(`<div class="flex flex-col" data-v-a233a460><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-a233a460>${ssrInterpolate(item.name)}</div><!--[-->`);
        ssrRenderList(item.list, (_item, _index) => {
          _push(`<div class="mt-2" data-v-a233a460><a class="cursor-pointer text-[#ffffffaa] hover:text-primary-900 hvr-pulse" data-v-a233a460>${ssrInterpolate(_item.name)}</a></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div data-v-a233a460><div class="flex flex-col mt-16 lg:mt-0" data-v-a233a460><div class="text-primary-900 text-lg mb-4 text-center lg:text-left" data-v-a233a460>${ssrInterpolate(_ctx.$t("footer.find"))}</div><div class="flex justify-center lg:justify-start footer-icons" data-v-a233a460><a href="https://twitter.com/LumozOrg" target="_blank" class="rounded-full hvr-float" data-v-a233a460><img${ssrRenderAttr("src", _imports_1)} class="w-10" data-v-a233a460></a><a href="https://discord.gg/lumoz" target="_blank" class="ml-4 rounded-full hvr-float" data-v-a233a460><img${ssrRenderAttr("src", _imports_2)} class="w-10" data-v-a233a460></a><a href="mailto:contact@lumoz.org" class="ml-4 rounded-full hvr-float" data-v-a233a460><img${ssrRenderAttr("src", _imports_3)} class="w-10" data-v-a233a460></a><a href="https://www.youtube.com/@LumozOrg" target="_blank" class="ml-4 rounded-full hvr-float" data-v-a233a460><img${ssrRenderAttr("src", _imports_4)} class="w-10" data-v-a233a460></a></div></div></div></div></div><div class="bg-[#000000]" data-v-a233a460><div class="mx-4 lg:mx-32 py-4 border-t border-[#ffffff40] text-[#ffffff40] text-center" data-v-a233a460> \xA9 2024 Lumoz Org, Inc </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a233a460"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=footer-D4R-a7Gv.mjs.map
