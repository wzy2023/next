(()=>{var e={};e.id=362,e.ids=[362],e.modules={1708:e=>{"use strict";e.exports=require("node:process")},2051:(e,t,r)=>{"use strict";r.d(t,{vt:()=>c});var n=r(13050),s=r(60159),a=r(81816);let{useDebugValue:i}=s,{useSyncExternalStoreWithSelector:o}=a,u=!1,l=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?(0,n.y)(e):e,r=(e,r)=>(function(e,t=l,r){r&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let n=o(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return i(n),n})(t,e,r);return Object.assign(r,t),r},c=e=>e?d(e):d},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},7273:e=>{"use strict";e.exports=require("prettier/parser-typescript")},10642:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});var n=function(e){return e.Checkbox="checkbox",e.Radio="radio",e.Textarea="textarea",e}({})},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12188:(e,t,r)=>{Promise.resolve().then(r.bind(r,97460))},13050:(e,t,r)=>{"use strict";r.d(t,{y:()=>s});let n=e=>{let t;let r=new Set,n=(e,n)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=n?n:"object"!=typeof s||null===s)?s:Object.assign({},t,s),r.forEach(r=>r(t,e))}},s=()=>t,a={setState:n,getState:s,getInitialState:()=>i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},i=t=e(n,s,a);return a},s=e=>e?n(e):n},18415:(e,t,r)=>{"use strict";r.d(t,{E:()=>s,F:()=>n});let n={QUESTION:"question",MARKDOWN:"markdown"},s=[e=>`
你是一个专业的需求分析助手，擅长从用户的初步想法中提炼出完整、清晰的功能需求，并进一步细化为模块或页面。

你需要：
1. 首先询问用户这个需求，需要做的页面模块
2. 确认页面后，再依次询问各个页面上，更细节的需求点
3. 引导用户补全遗漏的功能点、异常流程、边界情况。
4. 提供标准化选项，便于用户快速确认关键细节。
5. 不需要询问界面如何展示之类的问题，只可以询问需求相关的。
6. 每个问题的选项增加"不需要"，代表用户完全不需要此功能。
7. 最后一个问题的选项，增加"需求已确认"，用户选择此选项时，则让用户确认各个功能点，应该做在哪个页面上 (例如提出n个问题，每个问题的选项是可能需要做在这个页面上的各个功能点，让用户选择)

用户身份：独立开发者，具备技术背景，目标是快速、高质量推进开发。

请根据用户的回答记录，继续询问深入且合理的问题，可以是任意数量，每个问题格式如下：

注意必须使用这个格式进行回复：
JSON 类型为 Column[]
interface Column {
  dataIndex: string
  title: string
  valueType: 'checkbox' | 'textarea'
  valueEnum?: { [key in string]: { text: string } }
}

历史问答记录如下：
${e}
`,e=>`
你是一个 UI 界面设计确认助手，帮助用户明确每个功能的展示形式与交互逻辑。

你的任务包括：
1. 根据需求内容，确认每个需求点，需要做在哪个页面上
2. 确定每个功能点在界面上的展现形式（表格、卡片、树形结构、表单等）。
3. 明确用户交互方式（弹窗、抽屉、Tab 页、页面跳转等）。
4. 提出符合 Ant Design Pro 设计体系的实现建议。
5. 每个问题的选项增加 "不需要"，代表用户完全不需要此功能。
6. 不需要询问需求相关的问题，只可以询问界面如何展示之类的问题。
7. 无需考虑边界情况，例如文字超出如何处理、数量过多如何处理，类似问题不需要询问用户

用户身份：独立开发者，希望通过明确的 UI 逻辑加速开发流程。

请提出 3~5 个问题，每个问题格式如下：

JSON 类型为 Column[]
interface Column {
  dataIndex: string
  title: string
  valueType: 'checkbox' | 'textarea'
  valueEnum?: { [key in string]: { text: string } }
}

历史问答记录如下：
${e}
`,e=>`
你是一个专业的产品需求文档助手，目标是将用户对话整理为结构清晰的 Markdown 格式需求文档。

要求：
1. 只关注要实现的核心功能，不要擅自添加问答记录以外的内容。
2. 文档格式结构必须按照下面"""包裹的格式
  a. 字段后面加上用什么antd组件来展示
  b. 字段后面加上有什么特殊操作，例如如果需要复制的话，则加上

"""
# 收藏夹管理 - 需求文档

## 一、背景
- 帮助用户快速管理常用链接

---

## 二、页面概览
- 收藏列表页（\`ProTable\`）
- 标签管理页（可选，\`EditableProTable\`）

---

## 三、功能概述

### 3.1 收藏列表
- **展示字段**
  - 名称（\`Input\`）
  - 链接（支持一键复制）
- **操作行为**
  - 新增（\`ModalForm\`）
  - 删除（\`Popconfirm\`）

| 字段 | 组件    | 说明       |
| ---- | ------- | ---------- |
| 名称 | \`Input\` | 必填       |
| 链接 | \`Input\` | URL 校验   |

---

### 3.2 新增/编辑书签
1. 点击“新增” → 弹出 \`ModalForm\`
2. 校验通过 → 调用 \`addLink\` 接口
3. 成功后 → 关闭弹窗 + 刷新列表
\`\`\`
"""


以下是用户的需求问答记录：
${e}
`,e=>`
你是一个资深全栈工程师，需要基于功能文档撰写一份可落地的技术实现方案，

## 已有的项目背景

### 当前项目整体是 Monorepo 的架构
   目录结构如下，括号内是包名
     libs
        hooks（@wzyjs/hooks）
        types（@wzyjs/types）
        utils（@wzyjs/utils）
     persons
        app (你需要基于这个项目下写技术方案)
     uis
        antd（@wzyjs/antd）
        components（@wzyjs/components）

### app 项目的技术栈
  React
  NextJs
  Antd
  Antd Icon
  Antd Pro
  Ahooks
  tRPC
  Prisma
  MySQL

### app 项目的目录结构
0. prisma
1. src/api
2. src/app
3. src/components
4. src/hooks
5. src/enums
5. src/consts
6. src/utils

## 你需要做的事
你需要基于 persons/app 这个项目，写出详细的技术方案
不需要具体代码，只需明确设计思路与入参出参，确保开发者可据此落地


你的技术方案应该分为三个部分：
一：prisma 数据库
目标：明确 zmodel 文件的改动
可参考以下代码
"""
import "@wzyjs/next/dist/Base" // 引入基础模型包含：id createdAt updatedAt isDeleted

model ButtonItem extends Base {
  groupId String

  sort Int?   @default(999)

  /// ![Buttons.Type] // 使用了'prisma-json-types-generator'插件
  type String

  title String?
  content String
}
"""

该模型文件需要在 'prisma/models/schema.zmodel' 内引入
然后执行 npm run generate
然后执行 npm run db:push

既可完成数据库部分的操作


二：trpc 接口
项目使用了 '@zenstackhq/trpc' 来自动为模型生成 crud 的接口
所以 crud 接口不需要再写，只需写需要用到的其它接口
可参考如下代码
"""
import { z } from 'zod'
import { procedure } from '@/api/trpc/procedures'

export const habitGroup = {
  updateSort: procedure
  .input(z.array(z.object({
    id: z.string(),
    sort: z.number(),
  })))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.$transaction(
      input.map(item =>
        ctx.db.habitGroup.update({
          where: { id: item.id },
          data: { sort: item.sort },
        }),
      ),
    )
  }),
}
"""


三：前端页面


以下是产品需求文档内容：
${e}
`]},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},25756:(e,t,r)=>{Promise.resolve().then(r.bind(r,47090))},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33001:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{W:()=>d});var s=r(13486),a=r(60159),i=r(35412),o=r(86814),u=r(18415),l=e([i]);i=(l.then?(await l)():l)[0];let d=()=>{let{steps:e,step:t,stepData:r,setValues:n}=(0,o.K)(),[l]=i.lVW.useForm(),d=e[t.current],c=r.find(e=>e.key===d?.key);if((0,a.useEffect)(()=>{l&&l.setFieldsValue(c?.values)},[c,l]),!e||0===e.length||t.current<0||t.current>=e.length)return(0,s.jsx)("div",{children:"步骤配置错误"});if(!c)return(0,s.jsx)("div",{children:"找不到当前步骤的数据"});switch(d?.type){case u.F.QUESTION:if("columns"in c&&"values"in c)return(0,s.jsx)(i.kyL,{form:l,layout:"vertical",columns:c.columns,submitter:!1,initialValues:c.values,onValuesChange:(e,t)=>{d.key&&n(d.key,t)}});return null;case u.F.MARKDOWN:if("content"in c)return(0,s.jsx)(i.ozN,{content:c.content});return null;default:return(0,s.jsxs)("div",{children:["未知的步骤类型: ",d?.type||"未定义"]})}};n()}catch(e){n(e)}})},33873:e=>{"use strict";e.exports=require("path")},34589:e=>{"use strict";e.exports=require("node:assert")},47090:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(33952).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/wangzhenyu/Code/work/persons/app/src/app/product/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/wangzhenyu/Code/work/persons/app/src/app/product/page.tsx","default")},47825:(e,t,r)=>{"use strict";r.d(t,{f:()=>i,y:()=>a});var n=r(18415),s=r(10642);let a="gpt-4.1",i=[{type:n.F.QUESTION,title:"需求分析",key:"requirement",prompt:n.E[0],initData:{columns:[{dataIndex:"content",title:"一句话需求",valueType:s.e.Textarea}],values:{content:"我想做个抓取rss信息的工具网页，我可以添加指定的抓取链接，然后把链接保存到数据库，再用定时任务去抓取这些链接的内容，将内容存到数据库"}}},{type:n.F.QUESTION,title:"界面分析",key:"ui",prompt:n.E[1],initData:{columns:[],values:{}}},{type:n.F.MARKDOWN,title:"文档生成",key:"document",prompt:n.E[2],initData:{content:""}},{type:n.F.MARKDOWN,title:"技术方案",key:"technical",prompt:n.E[3],initData:{content:""}}]},51455:e=>{"use strict";e.exports=require("node:fs/promises")},52878:(e,t,r)=>{"use strict";r.d(t,{G:()=>a,L:()=>s});var n=r(10642);let s=(e,t,r=!0)=>JSON.stringify(e.map(e=>{let s={title:e.title,value:""};return[n.e.Textarea,n.e.Radio].includes(e.valueType)&&(s.value=t?.[e.dataIndex]),e.valueType===n.e.Checkbox&&(s.value=t?.[e.dataIndex]?.map?.(t=>e?.valueEnum?.[t]?.text||t),s.options=r?Object.values(e.valueEnum||[]):[]),s}).filter(e=>e.value),null,2),a=e=>e.map(e=>({...e,fieldProps:{...e.fieldProps,disabled:!0}}))},57975:e=>{"use strict";e.exports=require("node:util")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64904:(e,t,r)=>{"use strict";var n=r(60159),s=r(52826),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=s.useSyncExternalStore,o=n.useRef,u=n.useEffect,l=n.useMemo,d=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var c=o(null);if(null===c.current){var p={hasValue:!1,value:null};c.current=p}else p=c.current;var m=i(e,(c=l(function(){function e(e){if(!u){if(u=!0,i=e,e=n(e),void 0!==s&&p.hasValue){var t=p.value;if(s(t,e))return o=t}return o=e}if(t=o,a(i,e))return t;var r=n(e);return void 0!==s&&s(t,r)?(i=e,t):(i=e,o=r)}var i,o,u=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,r,n,s]))[0],c[1]);return u(function(){p.hasValue=!0,p.value=m},[m]),d(m),m}},73024:e=>{"use strict";e.exports=require("node:fs")},73136:e=>{"use strict";e.exports=require("node:url")},76760:e=>{"use strict";e.exports=require("node:path")},76830:e=>{"use strict";e.exports=require("prettier/parser-babel")},78877:e=>{"use strict";e.exports=require("node:v8")},80140:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>l});var n=r(24332),s=r(48819),a=r(67851),i=r.n(a),o=r(97540),u={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let l={children:["",{children:["product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,47090)),"/Users/wangzhenyu/Code/work/persons/app/src/app/product/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,85631)),"/Users/wangzhenyu/Code/work/persons/app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19033,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,39956,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,92341,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["/Users/wangzhenyu/Code/work/persons/app/src/app/product/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/product/page",pathname:"/product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},81816:(e,t,r)=>{"use strict";e.exports=r(64904)},83505:e=>{"use strict";e.exports=import("prettier/standalone")},86814:(e,t,r)=>{"use strict";r.d(t,{K:()=>p});var n=r(2051),s=r(47825),a=r(17121);function i(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let s=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(n=r.getItem(e))?n:null;return a instanceof Promise?a.then(s):s(a)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}let o=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>o(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>o(t)(e)}}},u=(e,t)=>(r,n,s)=>{let a,i,u={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,d=new Set,c=new Set;try{a=u.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),r(...e)},n,s);let p=o(u.serialize),m=()=>{let e;let t=p({state:u.partialize({...n()}),version:u.version}).then(e=>a.setItem(u.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=s.setState;s.setState=(e,t)=>{f(e,t),m()};let y=e((...e)=>{r(...e),m()},n,s),g=()=>{var e;if(!a)return;l=!1,d.forEach(e=>e(n()));let t=(null==(e=u.onRehydrateStorage)?void 0:e.call(u,n()))||void 0;return o(a.getItem.bind(a))(u.name).then(e=>{if(e)return u.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===u.version)return e.state;if(u.migrate)return u.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(i=u.merge(e,null!=(t=n())?t:y),!0),m()}).then(()=>{null==t||t(i,void 0),l=!0,c.forEach(e=>e(i))}).catch(e=>{null==t||t(void 0,e)})};return s.persist={setOptions:e=>{u={...u,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(d.add(e),()=>{d.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),i||y},l=(e,t)=>(r,n,s)=>{let a,u={storage:i(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,d=new Set,c=new Set,p=u.storage;if(!p)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),r(...e)},n,s);let m=()=>{let e=u.partialize({...n()});return p.setItem(u.name,{state:e,version:u.version})},f=s.setState;s.setState=(e,t)=>{f(e,t),m()};let y=e((...e)=>{r(...e),m()},n,s);s.getInitialState=()=>y;let g=()=>{var e,t;if(!p)return;l=!1,d.forEach(e=>{var t;return e(null!=(t=n())?t:y)});let s=(null==(t=u.onRehydrateStorage)?void 0:t.call(u,null!=(e=n())?e:y))||void 0;return o(p.getItem.bind(p))(u.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===u.version)return[!1,e.state];if(u.migrate)return[!0,u.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[s,i]=e;if(r(a=u.merge(i,null!=(t=n())?t:y),!0),s)return m()}).then(()=>{null==s||s(a,void 0),a=n(),l=!0,c.forEach(e=>e(a))}).catch(e=>{null==s||s(void 0,e)})};return s.persist={setOptions:e=>{u={...u,...e},e.storage&&(p=e.storage)},clearStorage:()=>{null==p||p.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(d.add(e),()=>{d.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},u.skipHydration||g(),a||y};var d=r(52878);let c="product-steps-data",p=(0,n.vt)()(((e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),u(e,t)):l(e,t))(e=>({loading:!1,setLoading:t=>e(()=>({loading:t})),steps:s.f,setSteps:t=>e(()=>({steps:t})),step:{current:0},onNext:()=>e(e=>({step:{...e.step,current:Math.min(e.step.current+1,e.steps.length-1)}})),onPrev:()=>e(e=>({step:{...e.step,current:Math.max(e.step.current-1,0)}})),stepData:s.f.map(e=>({key:e.key,...e.initData})),setColumns:(t,r)=>e(e=>{let n=[...e.stepData],s=n.findIndex(e=>e.key===t);return -1!==s&&n[s]&&"columns"in n[s]&&(n[s]={...n[s],columns:r}),{stepData:n}}),setValues:(t,r)=>e(e=>{let n=[...e.stepData],s=n.findIndex(e=>e.key===t);return -1!==s&&n[s]&&"values"in n[s]&&(n[s]={...n[s],values:r}),{stepData:n}}),appendColumns:(t,r)=>e(e=>{let n=[...e.stepData],s=n.findIndex(e=>e.key===t);if(-1!==s&&n[s]&&"columns"in n[s]){let e=n[s];n[s]={...e,columns:a._.unionBy([...(0,d.G)(e.columns),...r],"dataIndex")}}return{stepData:n}}),setContent:(t,r)=>e(e=>{let n=[...e.stepData],s=n.findIndex(e=>e.key===t);return -1!==s&&n[s]&&"content"in n[s]&&(n[s]={...n[s],content:r}),{stepData:n}}),clearCache:()=>{localStorage.removeItem(c),e(()=>({stepData:s.f.map(e=>({key:e.key,...e.initData}))}))}}),{name:c,storage:i(()=>localStorage),partialize:e=>({stepData:e.stepData,step:{current:e.step.current}})}))},89116:e=>{"use strict";e.exports=require("vscode-oniguruma")},97460:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>h});var s=r(13486);r(60159);var a=r(35412),i=r(33001),o=r(17121),u=r(47825),l=r(18415),d=r(86814),c=r(52878),p=e([a,i]);[a,i]=p.then?(await p)():p;let{Step:m}=a.gje,{Header:f,Footer:y,Content:g}=a.PEP,h=()=>{let{steps:e,step:t,stepData:r,loading:n,setLoading:p,setContent:h,setColumns:v,setValues:x,appendColumns:b,clearCache:k,onNext:S,onPrev:w}=(0,d.K)(),E=e[t.current],I=r.find(e=>e.key===E?.key),j=e[t.current+1],z=r.find(e=>e.key===j?.key),P=async()=>{if(t.current<0||t.current>=e.length||!I||!E)return;let n=e[t.current-1],s=r.find(e=>e.key===n?.key);switch(E.type){case l.F.QUESTION:if(!("columns"in I)||!("values"in I))return;let{values:a,columns:i}=I,d=(0,c.L)(i,a);p(!0);let m=E.prompt?.(d);if(!m)return;let f=await o.ai302.chat(m,u.y);Array.isArray(f)&&E.key&&b(E.key,f),p(!1);break;case l.F.MARKDOWN:if(!("content"in I))return;let y=I.content;if(s){if(n?.type==="question"&&"columns"in s&&"values"in s){let{values:e,columns:t}=s;y=(0,c.L)(t,e,!1)}n?.type==="markdown"&&"content"in s&&(y=s.content)}p(!0);let g=E.prompt?.(y);if(!g)return;let v=await o.ai302.chat(g,u.y,!1);E.key&&h(E.key,v||""),p(!1)}};return(0,s.jsxs)(a.PEP,{style:{height:"100vh"},children:[(0,s.jsx)(f,{style:{padding:16,background:"#fff"},children:(0,s.jsx)(a.gje,{current:t.current,children:e.map(e=>(0,s.jsx)(m,{title:e.title},e.key))})}),(0,s.jsx)(g,{style:{padding:24,overflow:"auto"},children:(0,s.jsx)(i.W,{})}),(0,s.jsxs)(y,{style:{padding:16,background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(a.$nd,{icon:(0,s.jsx)(a.SUY,{}),danger:!0,onClick:()=>{k(),a.iUO.success("缓存已清除")},style:{marginRight:"auto"},children:"清除缓存"}),(0,s.jsxs)("div",{style:{display:"flex",gap:12},children:[t.current>0&&(0,s.jsx)(a.$nd,{onClick:w,children:"上一步"}),(0,s.jsx)(a.$nd,{type:"primary",loading:n,onClick:P,children:"AI 生成"}),t.current<e.length-1&&(0,s.jsx)(a.$nd,{onClick:()=>{I&&"columns"in I&&z?.key&&j?.type==="question"&&(x(z.key,I.values),v(z.key,(0,c.G)(I.columns))),S()},children:"下一步"})]})]})]})};n()}catch(e){n(e)}})},98995:e=>{"use strict";e.exports=require("node:module")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[734,661,206,571],()=>r(80140));module.exports=n})();