"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7218],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),s=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),s=n(7294),o=n(6010),r=n(1048),l=n(3609),i=n(1943),u=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:f,className:h}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:k}=(0,i.U)(),[w,x]=(0,s.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=j[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==w&&(T(t),x(a),null!=f&&k(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:C,onClick:C},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,s.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return s.createElement(d,(0,a.Z)({key:String(t)},e))}},3035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),s=(n(7294),n(4137)),o=n(4259),r=n(425);const l={title:"Isolated Modules option"},i=void 0,u={unversionedId:"getting-started/options/isolatedModules",id:"version-29.0/getting-started/options/isolatedModules",title:"Isolated Modules option",description:"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.",source:"@site/versioned_docs/version-29.0/getting-started/options/isolatedModules.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/isolatedModules",permalink:"/ts-jest/docs/getting-started/options/isolatedModules",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options/isolatedModules.md",tags:[],version:"29.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1664112541,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{title:"Isolated Modules option"}},c={},p=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By default ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,s.kt)("inlineCode",{parentName:"p"},"isolatedModules")," option (which defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),") does."),(0,s.kt)("p",null,"You'll lose type-checking ability and some features such as ",(0,s.kt)("inlineCode",{parentName:"p"},"const enum"),", but in the case you plan on using Jest with the cache disabled (",(0,s.kt)("inlineCode",{parentName:"p"},"jest --no-cache"),"), your tests will then run much faster."),(0,s.kt)("p",null,"Here is how to disable type-checking and compile each file as an isolated module:"),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        isolatedModules: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,s.kt)(r.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n    // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "isolatedModules": true\n        }\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("h2",{id:"performance"},"Performance"),(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"isolatedModules: false")," comes with a cost of performance comparing to ",(0,s.kt)("inlineCode",{parentName:"p"},"isolatedModules: true"),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"include")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig")," which is used by ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),".\nThe least amount of files which are provided in ",(0,s.kt)("inlineCode",{parentName:"p"},"include"),", the more performance the test run can gain."),(0,s.kt)("h3",{id:"example-1"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n')),(0,s.kt)("h2",{id:"caveats"},"Caveats"),(0,s.kt)("p",null,"Limiting the amount of files loaded via ",(0,s.kt)("inlineCode",{parentName:"p"},"include")," can greatly boost performance when running tests. However, the trade off\nis ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," might not recognize all files which are intended to use with ",(0,s.kt)("inlineCode",{parentName:"p"},"jest"),". One can run into issues with custom typings,\nglobal modules, etc..."),(0,s.kt)("p",null,"The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,s.kt)("inlineCode",{parentName:"p"},"include"),", to gain both performance boost and avoid breaking behaviors."))}m.isMDXComponent=!0}}]);