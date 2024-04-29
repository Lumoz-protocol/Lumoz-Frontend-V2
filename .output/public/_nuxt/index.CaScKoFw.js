import{n as k,aw as J,q as _,ay as ee,aq as V,e as o,f as n,L as m,T as s,h as e,az as C,W as G,t as l,V as g,U as j,k as te,aA as se,aB as w,aj as E,ak as R,b as q,g as M,r as O,j as b,_ as re}from"./entry.TG_AKZQi.js";import{_ as oe}from"./button.vue.CsHBzEJl.js";import{b as ne,d as D,w as ae,c as le,a as ce,e as ie,f as de,E as he,_ as ue,g as _e}from"./base.B49cTNcA.js";const me=ne({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:v=>v>=0&&v<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:D(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:D([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:D(Function),default:v=>`${v}%`}}),pe=["aria-valuenow"],ge={viewBox:"0 0 100 100"},ve=["d","stroke","stroke-linecap","stroke-width"],fe=["d","stroke","opacity","stroke-linecap","stroke-width"],ye={key:0},$e=k({name:"ElProgress"}),ke=k({...$e,props:me,setup(v){const t=v,i={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},c=J("progress"),u=_(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:U(t.percentage)})),r=_(()=>(t.strokeWidth/t.width*100).toFixed(1)),h=_(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(r.value)/2}`,10):0),d=_(()=>{const a=h.value,f=t.type==="dashboard";return`
          M 50 50
          m 0 ${f?"":"-"}${a}
          a ${a} ${a} 0 1 1 0 ${f?"-":""}${a*2}
          a ${a} ${a} 0 1 1 0 ${f?"":"-"}${a*2}
          `}),y=_(()=>2*Math.PI*h.value),x=_(()=>t.type==="dashboard"?.75:1),B=_(()=>`${-1*y.value*(1-x.value)/2}px`),p=_(()=>({strokeDasharray:`${y.value*x.value}px, ${y.value}px`,strokeDashoffset:B.value})),A=_(()=>({strokeDasharray:`${y.value*x.value*(t.percentage/100)}px, ${y.value}px`,strokeDashoffset:B.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),z=_(()=>{let a;return t.color?a=U(t.percentage):a=i[t.status]||i.default,a}),N=_(()=>t.status==="warning"?ae:t.type==="line"?t.status==="success"?le:ce:t.status==="success"?ie:de),P=_(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),T=_(()=>t.format(t.percentage));function I(a){const f=100/a.length;return a.map(($,L)=>V($)?{color:$,percentage:(L+1)*f}:$).sort(($,L)=>$.percentage-L.percentage)}const U=a=>{var f;const{color:S}=t;if(ee(S))return S(a);if(V(S))return S;{const $=I(S);for(const L of $)if(L.percentage>a)return L.color;return(f=$[$.length-1])==null?void 0:f.color}};return(a,f)=>(o(),n("div",{class:m([s(c).b(),s(c).m(a.type),s(c).is(a.status),{[s(c).m("without-text")]:!a.showText,[s(c).m("text-inside")]:a.textInside}]),role:"progressbar","aria-valuenow":a.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[a.type==="line"?(o(),n("div",{key:0,class:m(s(c).b("bar"))},[e("div",{class:m(s(c).be("bar","outer")),style:C({height:`${a.strokeWidth}px`})},[e("div",{class:m([s(c).be("bar","inner"),{[s(c).bem("bar","inner","indeterminate")]:a.indeterminate},{[s(c).bem("bar","inner","striped")]:a.striped},{[s(c).bem("bar","inner","striped-flow")]:a.stripedFlow}]),style:C(s(u))},[(a.showText||a.$slots.default)&&a.textInside?(o(),n("div",{key:0,class:m(s(c).be("bar","innerText"))},[G(a.$slots,"default",{percentage:a.percentage},()=>[e("span",null,l(s(T)),1)])],2)):g("v-if",!0)],6)],6)],2)):(o(),n("div",{key:1,class:m(s(c).b("circle")),style:C({height:`${a.width}px`,width:`${a.width}px`})},[(o(),n("svg",ge,[e("path",{class:m(s(c).be("circle","track")),d:s(d),stroke:`var(${s(c).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":a.strokeLinecap,"stroke-width":s(r),fill:"none",style:C(s(p))},null,14,ve),e("path",{class:m(s(c).be("circle","path")),d:s(d),stroke:s(z),fill:"none",opacity:a.percentage?1:0,"stroke-linecap":a.strokeLinecap,"stroke-width":s(r),style:C(s(A))},null,14,fe)]))],6)),(a.showText||a.$slots.default)&&!a.textInside?(o(),n("div",{key:2,class:m(s(c).e("text")),style:C({fontSize:`${s(P)}px`})},[G(a.$slots,"default",{percentage:a.percentage},()=>[a.status?(o(),j(s(he),{key:1},{default:te(()=>[(o(),j(se(s(N))))]),_:1})):(o(),n("span",ye,l(s(T)),1))])],6)):g("v-if",!0)],10,pe))}});var be=ue(ke,[["__file","progress.vue"]]);const xe=_e(be),W=""+new URL("btc.D1aYs0rO.svg",import.meta.url).href,H=""+new URL("ethereum.0m1RQlta.svg",import.meta.url).href,Q=""+new URL("polygon.B0B5aH3C.svg",import.meta.url).href,X=""+new URL("bsc.BQHmLSdG.svg",import.meta.url).href,Y=""+new URL("solana.FBme6_aC.svg",import.meta.url).href,we={class:"mb-8"},Se={class:"text-xl font-bold mb-2"},Le={class:"mb-4 text-text-dark"},Ce={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},Be=["onClick"],Ee={class:"h-full w-full flex justify-center items-center"},Re={key:0,src:W,class:"ml-4 h-16 mt-2"},Te={key:1,src:H,class:"ml-4 h-16 mt-2"},Ue={key:2,src:Q,class:"ml-4 h-16 mt-2"},ze={key:3,src:X,class:"ml-4 h-16 mt-2"},Ne={key:4,src:Y,class:"ml-4 h-13 mb-3 mt-2"},Pe={class:"ml-4 font-bold flex-1"},Ie=k({__name:"layer1",setup(v){const t=["Bitcoin","Ethereum","Polygon","BNB Chain","Solana"],i=w();return(c,u)=>(o(),n("div",we,[e("div",null,[e("div",Se,l(c.$t("launch.layer1")),1),e("div",Le,l(c.$t("launch.layer1c")),1)]),e("div",Ce,[(o(),n(E,null,R(t,(r,h)=>e("div",{key:h,class:m(["rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow",s(i).layer1===r?"launch-check-box-high":"launch-check-box"]),onClick:d=>s(i).setLayer1(r)},[e("div",Ee,[r==="Bitcoin"?(o(),n("img",Re)):r==="Ethereum"?(o(),n("img",Te)):r==="Polygon"?(o(),n("img",Ue)):r==="BNB Chain"?(o(),n("img",ze)):r==="Solana"?(o(),n("img",Ne)):g("",!0),e("span",Pe,l(r),1)])],10,Be)),64))])]))}}),De=""+new URL("polygon-zkevm.0TbCGgdy.svg",import.meta.url).href,je=""+new URL("zksync.D9pQO_q7.svg",import.meta.url).href,qe=""+new URL("scroll.CjGPUfSN.svg",import.meta.url).href,Fe=""+new URL("starknet.CchTze7E.svg",import.meta.url).href,Ae=""+new URL("linea.DXjPpZWk.svg",import.meta.url).href,Ve=""+new URL("taiko.CFOJchft.svg",import.meta.url).href,Ge={class:"mb-8"},Oe={class:"text-xl font-bold mb-2"},Me={class:"mb-4 text-text-dark"},We={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},He=["onClick"],Qe={class:"h-full w-full flex justify-center items-center"},Xe={key:0,src:De,class:"ml-4 h-16 mt-2"},Ye={key:1,src:je,class:"ml-4 h-16 mt-2"},Ze={key:2,src:qe,class:"ml-4 h-16 mt-2"},Ke={key:3,src:Fe,class:"ml-4 h-16 mt-2"},Je={key:4,src:Ae,class:"ml-4 h-16 mt-2"},et={key:5,src:Ve,class:"ml-4 h-16 mt-2"},tt={class:"ml-4 font-bold flex-1"},st=k({__name:"zkevm",setup(v){const t=w(),i=["Polygon zkEVM","zkSync","Scroll","StarkNet","Linea","Taiko"];return(c,u)=>(o(),n("div",Ge,[e("div",null,[e("div",Oe,l(c.$t("launch.type")),1),e("div",Me,l(c.$t("launch.typec")),1)]),e("div",We,[(o(),n(E,null,R(i,(r,h)=>e("div",{key:h,class:m(["rounded-xl border bg-[#181818] border-[#181818] text-white",s(t).zkevmType===r?"launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow":"launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow"]),onClick:d=>s(t).setEvmType(r)},[e("div",Qe,[r==="Polygon zkEVM"?(o(),n("img",Xe)):g("",!0),r==="zkSync"?(o(),n("img",Ye)):r==="Scroll"?(o(),n("img",Ze)):r==="StarkNet"?(o(),n("img",Ke)):r==="Linea"?(o(),n("img",Je)):r==="Taiko"?(o(),n("img",et)):g("",!0),e("span",tt,l(r),1)])],10,He)),64))])]))}}),F=""+new URL("gas.B0mLnl9C.svg",import.meta.url).href,rt=""+new URL("celestia.B0gfHmtS.svg",import.meta.url).href,ot=""+new URL("eigenlayer.BpnBC5gs.svg",import.meta.url).href,nt=""+new URL("ethstorage.G4FR3PHB.svg",import.meta.url).href,at=""+new URL("avail.CX96Yzfd.svg",import.meta.url).href,Z=""+new URL("espressosys.DcUxK94Y.svg",import.meta.url).href,lt={class:"mb-8"},ct={class:"text-xl font-bold mb-2"},it={class:"mb-4 text-text-dark"},dt={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},ht=["onClick"],ut={class:"h-full w-full flex justify-center items-center"},_t={key:0,src:F,class:"ml-4 h-13 mb-3 mt-2"},mt={key:1,src:rt,class:"ml-4 h-16 mt-2"},pt={key:2,src:ot,class:"ml-4 h-16 mt-2"},gt={key:3,src:nt,class:"ml-4 h-16 mt-2"},vt={key:4,src:at,class:"ml-4 h-16 mt-2"},ft={key:5,src:Z,class:"ml-4 h-16 mt-2"},yt={class:"ml-4 font-bold flex-1"},$t=k({__name:"da",setup(v){const t=w(),i=["Layer 1","Celestia","Eigenlayer","Ethstorage","Avail","Espresso"];q(()=>t.layer1,()=>{t.setDa("")});const c=_(()=>t.layer1==="Bitcoin"?["Ethereum","BNB Chain"]:[]),u=r=>c.value.includes(r);return(r,h)=>(o(),n("div",lt,[e("div",null,[e("div",ct,l(r.$t("launch.da")),1),e("div",it,l(r.$t("launch.dac")),1)]),e("div",dt,[(o(),n(E,null,R(i,(d,y)=>e("div",{key:y,class:m(["rounded-xl border bg-[#181818] border-[#181818] text-white",u(d)?"opacity-50 cursor-not-allowed":s(t).da===d?"launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow":"launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow"]),onClick:x=>u(d)?"":s(t).setDa(d)},[e("div",ut,[d==="Layer 1"?(o(),n("img",_t)):d==="Celestia"?(o(),n("img",mt)):d==="Eigenlayer"?(o(),n("img",pt)):d==="Ethstorage"?(o(),n("img",gt)):d==="Avail"?(o(),n("img",vt)):d==="Espresso"?(o(),n("img",ft)):g("",!0),e("span",yt,l(d),1)])],10,ht)),64))])]))}}),kt=""+new URL("astria.dsVRwp6v.svg",import.meta.url).href,bt=""+new URL("radius.BVIU9jTg.svg",import.meta.url).href,xt={class:"mb-8"},wt={class:"text-xl font-bold mb-2"},St={class:"mb-4 text-text-dark"},Lt={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},Ct=["onClick"],Bt={class:"h-full w-full flex justify-center items-center"},Et={key:0,src:F,class:"ml-4 h-13 mb-3 mt-2"},Rt={key:1,src:Z,class:"ml-4 h-16 mt-2"},Tt={key:2,src:kt,class:"ml-4 h-16 mt-2"},Ut={key:3,src:bt,class:"ml-4 h-16 mt-2"},zt={class:"ml-4 font-bold flex-1"},Nt=k({__name:"sequencer",setup(v){const t=w(),i=["Single Node","Espresso","Astria","Radius"];return(c,u)=>(o(),n("div",xt,[e("div",null,[e("div",wt,l(c.$t("launch.seq")),1),e("div",St,l(c.$t("launch.seqc")),1)]),e("div",Lt,[(o(),n(E,null,R(i,(r,h)=>e("div",{key:h,class:m(["rounded-xl border bg-[#181818] border-[#181818] text-white",s(t).sequencer===r?"launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow":"launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow"]),onClick:d=>s(t).setSequencer(r)},[e("div",Bt,[r==="Single Node"?(o(),n("img",Et)):g("",!0),r==="Espresso"?(o(),n("img",Rt)):r==="Astria"?(o(),n("img",Tt)):r==="Radius"?(o(),n("img",Ut)):g("",!0),e("span",zt,l(r),1)])],10,Ct)),64))])]))}}),K=""+new URL("lumoz.D6x-EnFM.svg",import.meta.url).href,Pt={class:"mb-8"},It={class:"text-xl font-bold mb-2"},Dt={class:"mb-4 text-text-dark"},jt={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},qt=["onClick"],Ft={class:"h-full w-full flex justify-center items-center"},At={key:0,src:K,class:"ml-4 h-16 mt-2"},Vt={class:"ml-4 font-bold flex-1"},Gt=k({__name:"prover",setup(v){const t=w(),i=["Lumoz"];return(c,u)=>(o(),n("div",Pt,[e("div",null,[e("div",It,l(c.$t("launch.prov")),1),e("div",Dt,l(c.$t("launch.provc")),1)]),e("div",jt,[(o(),n(E,null,R(i,(r,h)=>e("div",{key:h,class:m(["rounded-xl border bg-[#181818] border-[#181818] text-white",s(t).prover===r?"launch-check-box-high cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow":"launch-check-box cursor-pointer hover:text-primary-900 hover:border-primary-900 hvr-grow"]),onClick:d=>s(t).setProver(r)},[e("div",Ft,[r==="Lumoz"?(o(),n("img",At)):g("",!0),e("span",Vt,l(r),1)])],10,qt)),64))])]))}}),Ot={class:"mb-8"},Mt={class:"text-xl font-bold mb-2"},Wt={class:"mb-4 text-text-dark"},Ht={class:"grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-4 text-sm"},Qt={class:"h-full w-full flex justify-center items-center"},Xt={key:0,src:W,class:"ml-4 h-16 mt-2"},Yt={key:1,src:K,class:"ml-4 h-16 mt-2"},Zt={key:2,src:H,class:"ml-4 h-16 mt-2"},Kt={key:3,src:Q,class:"ml-4 h-16 mt-2"},Jt={key:4,src:X,class:"ml-4 h-16 mt-2"},es={key:5,src:Y,class:"ml-4 h-13 mb-3 mt-2"},ts={class:"ml-4 font-bold flex-1"},ss={class:"h-full w-full flex justify-center items-center"},rs=e("img",{src:F,class:"ml-4 h-13 mb-3 mt-2"},null,-1),os={class:"ml-4 font-bold flex-1"},ns=k({__name:"gas",setup(v){var u;const t=w();(u=M())==null||u.proxy;const i=_(()=>{if(t.layer1==="Bitcoin")return"BTC";if(t.layer1==="Lumoz")return"MOZ";if(t.layer1==="Ethereum")return"ETH";if(t.layer1==="Polygon")return"MATIC";if(t.layer1==="BNB Chain")return"BNB";if(t.layer1==="Solana")return"SOL"});q(()=>t.layer1,()=>{t.setGas("")});const c=r=>{r?t.setGas(i.value):t.setGas("Customize")};return(r,h)=>(o(),n("div",Ot,[e("div",null,[e("div",Mt,l(r.$t("launch.gas")),1),e("div",Wt,l(r.$t("launch.gasc")),1)]),e("div",Ht,[e("div",{class:m(["rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow",s(t).gas===s(i)?"launch-check-box-high":"launch-check-box"]),onClick:h[0]||(h[0]=d=>c(!0))},[e("div",Qt,[s(t).layer1==="Bitcoin"?(o(),n("img",Xt)):g("",!0),s(t).layer1==="Lumoz"?(o(),n("img",Yt)):s(t).layer1==="Ethereum"?(o(),n("img",Zt)):s(t).layer1==="Polygon"?(o(),n("img",Kt)):s(t).layer1==="BNB Chain"?(o(),n("img",Jt)):s(t).layer1==="Solana"?(o(),n("img",es)):g("",!0),e("span",ts,l(s(i)),1)])],2),e("div",{class:m(["rounded-xl cursor-pointer border bg-[#181818] border-[#181818] text-white hover:text-primary-900 hover:border-primary-900 hvr-grow",s(t).gas==="Customize"?"launch-check-box-high":"launch-check-box"]),onClick:h[1]||(h[1]=d=>c(!1))},[e("div",ss,[rs,e("span",os,l(r.$t("launch.cus")),1)])],2)])]))}}),as=window.setInterval,ls={class:"container mx-auto py-12"},cs={key:0},is={class:"text-4xl font-bold text-center"},ds={class:"text-center mb-12 text-text-dark mt-4 lg:w-1/2 mx-auto text-xl"},hs={class:"flex items-center justify-center"},us={key:1},_s={class:"text-xl font-bold"},ms={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},ps={class:"mt-8 flex items-center"},gs={class:"text-text-dark w-40"},vs={class:"mt-8 flex items-center"},fs={class:"text-text-dark w-40"},ys={class:"mt-8 flex items-center"},$s={class:"text-text-dark w-40"},ks={class:"mt-8 flex items-center"},bs={class:"text-text-dark w-40"},xs={class:"mt-8 flex items-center"},ws={class:"text-text-dark w-40"},Ss={class:"mt-8 flex items-center"},Ls={class:"text-text-dark w-40"},Cs={class:"text-xl font-bold mt-16"},Bs={class:"px-8 py-4 launch-p-box mt-4 bg-[#2c2c2c] rounded-md"},Es={key:0,class:"text-center mt-4 text-primary-900 font-bold"},Rs={key:0,class:"flex flex-col items-center justify-center"},Ts={class:"mt-8 lg:mt-16 text-center text-3xl font-bold animate__animated animate__flipInX"},Us={class:"text-center mt-4 text-lg animate__animated animate__flipInX animate__delay-1s"},zs={href:"mailto:contact@lumoz.org",class:"mt-8 animate__animated animate__fadeIn animate__delay-2s"},Ns=k({__name:"index",setup(v){var B;const t=w(),i=(B=M())==null?void 0:B.proxy;let c=null;const u=O(1),r=O(0),h=_(()=>!!(t.layer1&&t.zkevmType&&t.da&&t.sequencer&&t.gas&&t.prover));q(()=>u.value,()=>{u.value===2&&(window.scrollTo({top:0,behavior:"smooth"}),r.value=0,y())});const d=()=>{h.value&&(u.value=2)},y=()=>{c&&clearInterval(c),c=as(()=>{if(r.value===100){clearInterval(c);return}r.value=r.value+1},200)},x=_(()=>r.value<=25?i==null?void 0:i.$t("launch.d1"):r.value<=50?i==null?void 0:i.$t("launch.d2"):r.value<=75?i==null?void 0:i.$t("launch.d3"):r.value<100?i==null?void 0:i.$t("launch.d4"):"");return(p,A)=>{const z=Ie,N=st,P=$t,T=Nt,I=Gt,U=ns,a=oe,f=xe;return o(),n("div",ls,[s(u)===1?(o(),n("div",cs,[e("div",is,l(p.$t("launch.create")),1),e("div",ds,l(p.$t("launch.content")),1),b(z),b(N),b(P),b(T),b(I),s(t).layer1?(o(),j(U,{key:0})):g("",!0),e("div",hs,[b(a,{light:!s(h),onClick:d,class:m(["w-40",s(h)?"":"cursor-not-allowed"]),word:p.$t("launch.next")},null,8,["light","class","word"])])])):g("",!0),s(u)===2?(o(),n("div",us,[e("div",_s,l(p.$t("launch.info")),1),e("div",ms,[e("div",ps,[e("div",gs,l(p.$t("launch.layer1"))+":",1),e("div",null,l(s(t).layer1),1)]),e("div",vs,[e("div",fs,l(p.$t("launch.type"))+":",1),e("div",null,l(s(t).zkevmType),1)]),e("div",ys,[e("div",$s,l(p.$t("launch.da"))+":",1),e("div",null,l(s(t).da),1)]),e("div",ks,[e("div",bs,l(p.$t("launch.seq"))+":",1),e("div",null,l(s(t).sequencer),1)]),e("div",xs,[e("div",ws,l(p.$t("launch.gas"))+":",1),e("div",null,l(s(t).gas),1)]),e("div",Ss,[e("div",Ls,l(p.$t("launch.prov"))+":",1),e("div",null,l(s(t).prover),1)])]),e("div",Cs,l(p.$t("launch.generate")),1),e("div",Bs,[b(f,{percentage:s(r),"stroke-width":20,status:"success",striped:"","striped-flow":"",duration:100},null,8,["percentage"]),s(x)?(o(),n("div",Es,l(s(x))+" ...",1)):g("",!0)]),s(r)===100?(o(),n("div",Rs,[e("div",Ts,l(p.$t("launch.con")),1),e("div",Us,l(p.$t("launch.con1")),1),e("a",zs,[b(a,{class:"w-60",word:p.$t("launch.apply")},null,8,["word"])])])):g("",!0)])):g("",!0)])}}}),js=re(Ns,[["__scopeId","data-v-bb28cd78"]]);export{js as default};
