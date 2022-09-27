"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4702],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?s.createElement(g,i(i({ref:t},c),{},{components:n})):s.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(7462),a=n(7294),o=n(6010),i=n(1048),r=n(3609),l=n(1943),p=n(2957);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:u,groupId:g,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),j=u??b.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),h=(0,r.l)(j,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!j.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${j.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[v,x]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==v&&j.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),s=j[n].value;s!==v&&(w(t),x(s),null!=g&&N(g,String(s)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},j.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return a.createElement(d,(0,s.Z)({key:String(t)},e))}},7651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var s=n(7462),a=(n(7294),n(4137)),o=n(4259),i=n(425);const r={title:"Diagnostics option"},l=void 0,p={unversionedId:"getting-started/options/diagnostics",id:"getting-started/options/diagnostics",title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/docs/getting-started/options/diagnostics.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/next/getting-started/options/diagnostics",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/diagnostics.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1664280465,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{title:"Diagnostics option"}},c={},m=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."),(0,a.kt)("p",null,"If a diagnostic is not filtered out, ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," will fail the compilation and your test."),(0,a.kt)("h3",{id:"disablingenabling"},"Disabling/enabling"),(0,a.kt)("p",null,"By default all diagnostics are enabled. This is the same as setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nTo disable all diagnostics, set ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."),(0,a.kt)("h3",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnostics")," option's value can also accept an object for more advanced configuration. Each config. key is optional:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"warnOnly")),": If specified and ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", diagnostics will be reported but won't stop compilation (default: ",(0,a.kt)("em",{parentName:"li"},"disabled"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ignoreCodes")),": List of TypeScript error codes to ignore. Complete list can be found ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". By default here are the ones ignored:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6059"),": ",(0,a.kt)("em",{parentName:"li"},"'rootDir' is expected to contain all source files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"18002"),": ",(0,a.kt)("em",{parentName:"li"},"The 'files' list in config file is empty.")," (it is strongly recommended including this one)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"18003"),": ",(0,a.kt)("em",{parentName:"li"},"No inputs were found in config file.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"exclude")),": If specified, diagnostics of source files which path ",(0,a.kt)("strong",{parentName:"li"},"matches")," will be ignored. This works a bit\nsimilar to ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig")," option ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#exclude"},"exclude")," with the only difference is that\nin TypeScript, ",(0,a.kt)("inlineCode",{parentName:"li"},"exclude")," will also exclude files from compilation process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"pretty")),": Enables/disables colorful and pretty output of errors (default: ",(0,a.kt)("em",{parentName:"li"},"enabled"),").")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"disabling-diagnostics"},"Disabling diagnostics"),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": false\n        }\n      ]\n    }\n  }\n}\n')))),(0,a.kt)("h4",{id:"advanced-options"},"Advanced options"),(0,a.kt)("h5",{id:"enabling-diagnostics-for-test-files-only"},"Enabling diagnostics for test files only"),(0,a.kt)("p",null,"Assuming all your test files ends with ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.ts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".test.ts"),", using the following config will enable error reporting only for those files:"),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          exclude: ['!**/*.(spec|test).ts'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "exclude": ["!**/*.(spec|test).ts"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,a.kt)("h5",{id:"do-not-fail-on-first-error"},"Do not fail on first error"),(0,a.kt)("p",null,"While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"warnOnly")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          warnOnly: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "warnOnly": true\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,a.kt)("h5",{id:"ignoring-some-error-codes"},"Ignoring some error codes"),(0,a.kt)("p",null,"All TypeScript error codes can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreCodes")," option accepts this values:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A single ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," (example: ",(0,a.kt)("inlineCode",{parentName:"li"},"1009"),"): unique error code to ignore"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," with a code (example ",(0,a.kt)("inlineCode",{parentName:"li"},'"1009"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"TS1009"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"TS1009"'),")"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," with a list of the above (example: ",(0,a.kt)("inlineCode",{parentName:"li"},'"1009, TS2571, 4072"'),")"),(0,a.kt)("li",{parentName:"ol"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," of one or more from ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," (example: ",(0,a.kt)("inlineCode",{parentName:"li"},'[1009, "TS2571", "6031"]'),")")),(0,a.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        diagnostics: {\n          ignoreCodes: [2571, 6031, 18003],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n    // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "diagnostics": {\n            "ignoreCodes": [2571, 6031, 18003]\n          }\n        }\n      ]\n    }\n  }\n}\n')))))}u.isMDXComponent=!0}}]);