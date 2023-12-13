import{defineOperationApp as e,useApi as t,useStores as a,defineModule as l,defineInterface as n}from"@directus/extensions-sdk";import{resolveComponent as i,openBlock as o,createBlock as d,withCtx as s,createVNode as r,createCommentVNode as c,defineComponent as u,ref as m,computed as p,onMounted as v,watch as f,createTextVNode as g,unref as T,createElementBlock as h,createElementVNode as b,toDisplayString as x,resolveDynamicComponent as _,normalizeStyle as A,Fragment as y,pushScopeId as w,popScopeId as k,inject as V}from"vue";var S=e({id:"ttabarcode",name:"TTA generate barcode",icon:"box",description:"Generate a barcode trough Text to anything!",overview:({barcodeContent:e})=>[{label:"barcode content",text:e}],options:[{field:"barcodeContent",name:"content",type:"string",meta:{width:"full",interface:"input"}},{field:"barcodeType",name:"type",type:"dropdown",meta:{interface:"select-dropdown",options:{choices:["auspost","azteccode","azteccodecompact","aztecrune","bc412","channelcode","codablockf","code11","code128","code16k","code2of5","code32","code39","code39ext","code49","code93","code93ext","codeone","coop2of5","daft","databarexpanded","databarexpandedcomposite","databarexpandedstacked","databarexpandedstackedcomposite","databarlimited","databarlimitedcomposite","databaromni","databaromnicomposite","databarstacked","databarstackedcomposite","databarstackedomni","databarstackedomnicomposite","databartruncated","databartruncatedcomposite","datalogic2of5","datamatrix","datamatrixrectangular","datamatrixrectangularextension","dotcode","ean13","ean13composite","ean14","ean2","ean5","ean8","ean8composite","flattermarken","gs1-128","gs1-128composite","gs1-cc","gs1datamatrix","gs1datamatrixrectangular","gs1dldatamatrix","gs1dlqrcode","gs1dotcode","gs1northamericancoupon","gs1qrcode","hanxin","hibcazteccode","hibccodablockf","hibccode128","hibccode39","hibcdatamatrix","hibcdatamatrixrectangular","hibcmicropdf417","hibcpdf417","hibcqrcode","iata2of5","identcode","industrial2of5","interleaved2of5","isbn","ismn","issn","itf14","japanpost","kix","leitcode","mailmark","mands","matrix2of5","maxicode","micropdf417","microqrcode","msi","onecode","pdf417","pdf417compact","pharmacode","pharmacode2","planet","plessey","posicode","postnet","pzn","qrcode","rationalizedCodabar","raw","rectangularmicroqrcode","royalmail","sscc18","swissqrcode","symbol","telepen","telepennumeric","ultracode","upca","upcacomposite","upce","upcecomposite"].map((e=>({text:e,value:e})))}}},{field:"scale",name:"scale",type:"number",meta:{width:"full",interface:"input"}},{field:"height",name:"height",type:"number",meta:{width:"full",interface:"input"}},{field:"includetext",name:"include text",type:"boolean",meta:{width:"full",interface:"boolean"}}]}),C=e({id:"ttapdf",name:"TTA generate PDF",icon:"box",description:"Generate a PDF trough Text to anything!",overview:({filename:e})=>[{label:"File name",text:e}],options:[{field:"filename",name:"File name",type:"string",meta:{width:"full",interface:"input"}},{field:"pdfoptions",name:"Options",type:"json",meta:{width:"full",interface:"input-code",options:{language:"json",placeholder:JSON.stringify({html:"<h1>Hello world!</h1>",format:"A4",landscape:!1,margin:10,marginRight:5,marginLeft:5},null,2),template:JSON.stringify({html:"<h1>Hello world!</h1>",format:"A4",landscape:!1,margin:10,marginRight:5,marginLeft:5},null,2)}}}]}),E=e({id:"ttapdftemplate",name:"TTA generate PDF from template",icon:"box",description:"Generate a PDF based on a template trough Text to anything!",overview:({filename:e})=>[{label:"File name",text:e}],options:[{field:"filename",name:"File name",type:"string",meta:{width:"full",interface:"input"}},{field:"template",name:"Template",type:"string",meta:{interface:"TTA-pdf-template-selector",options:{}}},{field:"templatevariables",name:"Template variables",type:"json",meta:{width:"full",interface:"input-code",options:{language:"json"}}}]}),D=e({id:"ttaqrcode",name:"TTA generate QRcode",icon:"box",description:"Generate a QRcode trough Text to anything!",overview:({qrcodeContent:e})=>[{label:"QRCode content",text:e}],options:[{field:"qrcodeContent",name:"QRCode content",type:"string",meta:{width:"full",interface:"input"}},{field:"lightColor",name:"Light color",type:"string",meta:{width:"full",interface:"input"}},{field:"darkColor",name:"Dark color",type:"string",meta:{width:"full",interface:"input"}},{field:"margin",name:"Margin",type:"integer",meta:{width:"half",interface:"input"}},{field:"width",name:"Width",type:"integer",meta:{width:"half",interface:"input"}}]});const F={render:function(e,t){const a=i("v-icon"),l=i("v-list-item-icon"),n=i("v-text-overflow"),u=i("v-list-item-content"),m=i("v-list-item"),p=i("v-list");return o(),d(p,{nav:""},{default:s((()=>[r(m,{to:"/tta_settings/templates"},{default:s((()=>[r(l,null,{default:s((()=>[r(a,{name:"code"})])),_:1}),r(u,null,{default:s((()=>[r(n,{text:"Templates"})])),_:1})])),_:1}),r(m,{to:"/tta_settings/settings"},{default:s((()=>[r(l,null,{default:s((()=>[r(a,{name:"settings"})])),_:1}),r(u,null,{default:s((()=>[r(n,{text:"Settings"})])),_:1})])),_:1}),c(' <v-list-item to="/tta_settings/usage">\n      <v-list-item-icon><v-icon name="bar_chart" /></v-list-item-icon>\n      <v-list-item-content>\n        <v-text-overflow text="Usage" />\n      </v-list-item-content>\n    </v-list-item> ')])),_:1})},__file:"settingsmodule/src/TTAnav.vue"},U={key:0,class:"TTA-popup"},P={class:"TTA-toolbar"},q={class:"right-side"},R={class:"setwidth"},z={class:"TTA-action"},L={class:"TTA-wapper"},j=["srcdoc"];var I=u({__name:"templates",setup(e){const l=m([]),n=m(!1),u=m(!1),y=m(""),w=m(50),k=p((()=>100-w.value)),V=p((()=>100-k.value)),S=t(),C=m({template:"",id:-1,name:"",description:"",collection:"",format:"A4",orientation:"portrait"}),{useCollectionsStore:E}=a(),D=E(),I=p((()=>D.collections.filter((e=>"TTA_htmltemplates"!=e.collection)).map((e=>({text:e.name,value:e.collection}))))),O=p((()=>`${C.value.template}`));async function G(){const e=await S.get("/items/TTA_htmltemplates",{params:{limit:-1}});l.value=e.data.data}async function K(){-1==C.value.id?await S.post("/items/TTA_htmltemplates",{...C.value}):await S.patch("/items/TTA_htmltemplates/"+C.value.id,{...C.value,id:void 0}),n.value=!1,G()}function N({item:e}){console.log(e),C.value=e,u.value=!0}function Y(){C.value={template:"",id:-1,name:"",description:"",collection:"",format:"A4",orientation:"portrait"},u.value=!1}return v((async()=>{const e=await S.get("/settings");y.value=e.data.data.TTA_ASSETS_KEY,w.value=parseInt(localStorage.getItem("TTA-widthPartition")||"50"),G()})),f((()=>w.value),(e=>localStorage.setItem("TTA-widthPartition",e+""))),(e,t)=>{const a=i("v-icon"),m=i("v-button"),p=i("v-card-title"),v=i("v-input"),f=i("v-list-item-content"),S=i("v-list-item"),E=i("v-select"),D=i("v-list"),G=i("v-card-text"),Q=i("v-card-actions"),H=i("v-card"),J=i("v-dialog"),M=i("v-slider"),B=i("v-table"),W=i("private-view");return o(),d(W,{title:"Templates"},{navigation:s((()=>[r(F)])),actions:s((()=>[r(m,{rounded:"",icon:"",onClick:t[0]||(t[0]=e=>n.value=!0)},{default:s((()=>[r(a,{name:"add"})])),_:1}),r(J,{modelValue:n.value,"onUpdate:modelValue":t[7]||(t[7]=e=>n.value=e),persistent:!0},{default:s((()=>[r(H,null,{default:s((()=>[r(p,null,{default:s((()=>[g("Create a new HTML template")])),_:1}),r(G,null,{default:s((()=>[r(D,null,{default:s((()=>[r(S,null,{default:s((()=>[r(f,null,{default:s((()=>[r(v,{modelValue:C.value.name,"onUpdate:modelValue":t[1]||(t[1]=e=>C.value.name=e),placeholder:"Template name"},null,8,["modelValue"])])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(f,null,{default:s((()=>[r(v,{modelValue:C.value.description,"onUpdate:modelValue":t[2]||(t[2]=e=>C.value.description=e),placeholder:"Description"},null,8,["modelValue"])])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(f,null,{default:s((()=>[r(E,{modelValue:C.value.format,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value.format=e),placeholder:"Size",items:["A1","A2","A3","A4","A5","A6","Letter","Legal","Tabloid","Ledger"].map((e=>({text:e,value:e})))},null,8,["modelValue","items"])])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(f,null,{default:s((()=>[r(E,{modelValue:C.value.orientation,"onUpdate:modelValue":t[4]||(t[4]=e=>C.value.orientation=e),placeholder:"Orientation",items:["portrait","landscape"].map((e=>({text:e,value:e})))},null,8,["modelValue","items"])])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(f,null,{default:s((()=>[r(E,{modelValue:C.value.collection,"onUpdate:modelValue":t[5]||(t[5]=e=>C.value.collection=e),items:T(I),placeholder:"Collection"},null,8,["modelValue","items"])])),_:1})])),_:1})])),_:1})])),_:1}),r(Q,null,{default:s((()=>[r(m,{secondary:"",onClick:t[6]||(t[6]=e=>n.value=!1)},{default:s((()=>[g(" Cancel ")])),_:1}),r(m,{disabled:!C.value.collection||!C.value.name||!C.value.format,onClick:K},{default:s((()=>[g(" Save ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),default:s((()=>[u.value?(o(),h("div",U,[b("div",P,[b("div",{onClick:t[8]||(t[8]=e=>n.value=!0),class:"TTA-template-title"},[g(x(C.value.name)+" ",1),r(a,{name:"edit"})]),b("div",q,[b("div",{class:"TTA-action",onClick:K},[r(a,{name:"save"})]),b("div",R,[r(M,{modelValue:w.value,"onUpdate:modelValue":t[9]||(t[9]=e=>w.value=e),min:10,max:90,class:"TTA-slider"},null,8,["modelValue"])]),b("div",z,[r(a,{name:"close",onClick:Y})])])]),b("div",L,[(o(),d(_("interface-input-rich-text-html"),{class:"TTA-editor",value:C.value.template,imageToken:y.value,onInput:t[10]||(t[10]=e=>C.value.template=e),style:A("width: "+T(V)+"%")},null,40,["value","imageToken","style"])),b("iframe",{class:"TTA-preview",srcdoc:T(O),style:A("width: "+T(k)+"%")},null,12,j)])])):c("v-if",!0),r(B,{headers:[{text:"Name",value:"name"},{text:"Description",value:"description"},{text:"Collection",value:"collection"},{text:"Format",value:"format"}],"onClick:row":N,items:l.value},null,8,["items"])])),_:1})}}}),O=[],G=[];function K(e,t){if(e&&"undefined"!=typeof document){var a,l=!0===t.prepend?"prepend":"append",n=!0===t.singleTag,i="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(n){var o=O.indexOf(i);-1===o&&(o=O.push(i)-1,G[o]={}),a=G[o]&&G[o][l]?G[o][l]:G[o][l]=d()}else a=d();65279===e.charCodeAt(0)&&(e=e.substring(1)),a.styleSheet?a.styleSheet.cssText+=e:a.appendChild(document.createTextNode(e))}function d(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var a=Object.keys(t.attributes),n=0;n<a.length;n++)e.setAttribute(a[n],t.attributes[a[n]]);var o="prepend"===l?"afterbegin":"beforeend";return i.insertAdjacentElement(o,e),e}}K("\n.TTA-popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--background-subdued);\n}\n.TTA-toolbar {\n  background-color: var(--background-subdued);\n  display: flex;\n  justify-content: space-between;\n}\n.TTA-toolbar .right-side {\n  display: flex;\n  gap: 5px;\n}\n.TTA-toolbar .TTA-slider {\n  padding-top: 5px;\n}\n.TTA-toolbar .TTA-action {\n  padding: 5px;\n  cursor: pointer;\n}\n.TTA-toolbar .setwidth {\n  display: flex;\n  gap: 10px;\n  padding-top: 6px;\n}\n.TTA-toolbar .TTA-template-title {\n  margin: auto 0;\n  font-size: 18px;\n  cursor: pointer;\n  padding-right: 5px;\n  padding-left: 20px;\n  border-bottom: 1px solid var(--v-list-item-border-color);\n}\n.TTA-toolbar .TTA-template-title i {\n  padding-left: 5px;\n}\n.TTA-wapper {\n  display: flex;\n  flex-grow: 1;\n}\n.TTA-preview {\n  flex-grow: 1;\n  background-color: white;\n  border: 0;\n}\n.TTA-editor {\n  flex-grow: 1;\n  height: 100%;\n}\n.TTA-editor .tox.tox-tinymce {\n  height: 100% !important;\n  border-radius: 0 !important;\n}\n",{}),I.__file="settingsmodule/src/templates.vue";const N=e=>(w("data-v-014dce90"),e=e(),k(),e),Y={class:"px-5"},Q=N((()=>b("span",{class:"field-name"},"RapidAPI token",-1))),H=N((()=>b("span",{class:"field-name"},"Directus Assets token",-1))),J=N((()=>b("span",{class:"field-name"},"Directus Assets folder",-1)));var M=u({__name:"settings",setup(e){const a=m(""),l=m(""),n=m(""),c=m(!1),u=t(),p=m([]);async function f(){c.value=!0,await u.patch("/settings",{TTA_KEY:a.value,TTA_ASSETS_KEY:l.value,TTA_ASSETS_FOLDER:n.value}),setTimeout((()=>{c.value=!1}),500)}return v((async()=>{const e=await u.get("/settings");a.value=e.data.data.TTA_KEY,l.value=e.data.data.TTA_ASSETS_KEY,n.value=e.data.data.TTA_ASSETS_FOLDER;const t=await u.get("/folders");p.value=t.data.data.map((e=>({text:e.name,value:e.id})))})),(e,t)=>{const u=i("v-card-title"),m=i("v-input"),v=i("v-select"),T=i("v-card-text"),x=i("v-icon"),_=i("v-button"),A=i("v-progress-circular"),w=i("v-card-actions"),k=i("v-card"),V=i("private-view");return o(),d(V,{title:"Settings"},{navigation:s((()=>[r(F)])),default:s((()=>[b("div",Y,[r(k,{class:"w-full"},{default:s((()=>[r(u,null,{default:s((()=>[g("API settings")])),_:1}),r(T,{class:"fields-spacing"},{default:s((()=>[b("div",null,[Q,r(m,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},null,8,["modelValue"])]),b("div",null,[H,r(m,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e)},null,8,["modelValue"])]),b("div",null,[J,r(v,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),items:p.value,placeholder:"Assets folder"},null,8,["modelValue","items"])])])),_:1}),r(w,null,{default:s((()=>[r(_,{href:"https://rapidapi.com/Attacler/api/text-to-anything",target:"_blank"},{default:s((()=>[r(x,{name:"open_in_new"}),g(" Get RapidAPI token ")])),_:1}),r(_,{onClick:f,disabled:c.value},{default:s((()=>[c.value?(o(),d(A,{key:1,small:!0,indeterminate:""})):(o(),h(y,{key:0},[g(" Save ")],64))])),_:1},8,["disabled"])])),_:1})])),_:1})])])),_:1})}}});K("\n.w-full[data-v-014dce90] {\n  width: 100%;\n}\n.px-5[data-v-014dce90] {\n  padding: 0 2.5rem;\n}\n.fields-spacing[data-v-014dce90] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n",{}),M.__scopeId="data-v-014dce90",M.__file="settingsmodule/src/settings.vue";var B=u({__name:"usage",setup:e=>(e,t)=>{const a=i("private-view");return o(),d(a,{title:"Usage"},{navigation:s((()=>[r(F)])),default:s((()=>[g(" Comming soon! ")])),_:1})}});B.__file="settingsmodule/src/usage.vue";var W=l({id:"tta_settings",name:"Text to anything settings",icon:"text_fields",routes:[{path:"",redirect:"/tta_settings/templates"},{path:"templates",component:I},{path:"settings",component:M},{path:"usage",component:B}]}),$=u({__name:"interface",props:["value"],emits:["input"],setup(e,{emit:t}){const a=e,l=V("api"),n=m(""),s=m([]);return v((async()=>{n.value=a.value,f((()=>n.value),((e,a)=>{e!=a&&t("input",e)}));const e=await l.get("/items/TTA_htmltemplates");s.value=e.data.data.map((e=>({text:e.name,value:e.id})))})),(e,t)=>{const a=i("v-select");return o(),d(a,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),items:s.value},null,8,["modelValue","items"])}}});$.__file="PDFTemplateSelector/src/interface.vue";const X=[n({id:"TTA-pdf-template-selector",name:"PDF template selector",icon:"box",description:"Selector for a PDF template for Text To Anything",component:$,options:null,types:["string"]})],Z=[],ee=[],te=[W],ae=[],le=[S,C,E,D];export{Z as displays,X as interfaces,ee as layouts,te as modules,le as operations,ae as panels};
