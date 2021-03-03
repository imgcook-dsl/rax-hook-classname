module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){const n=e=>/^\{\{.*\}\}$/.test(e),o=(e,t)=>e=t?e.slice(1,-1).replace(/this\./gim,""):e.slice(2,-2).replace(/this\./gim,""),r=e=>"[object Function]"==={}.toString.call(e)?e.toString():"string"==typeof e?e:"object"==typeof e?JSON.stringify(e,(e,t)=>"function"==typeof t?t.toString():t):String(e),s=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>{let t=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(const n in e)e.hasOwnProperty(n)&&(e[n]&&"object"==typeof e[n]?t[n]=a(e[n]):t[n]=e[n]);return t},c=e=>{const t=e.toString();return{params:t.match(/\([^\(\)]*\)/)[0].slice(1,-1),content:t.slice(t.indexOf("{")+1,t.lastIndexOf("}"))}},i=(e,t)=>{if("string"==typeof e)return n(e)?o(e,t):t?e:`'${e}'`;if("function"==typeof e){const{params:t,content:n}=c(e);return`(${t}) => {${n}}`}return"boolean"==typeof e||"number"==typeof e?String(e):"object"==typeof e?Array.isArray(e)?`[${e.map(e=>i(e)).join(", ")}]`:`{${Object.keys(e).map(t=>`${/^\w+$/.test(t)?t:`'${t}'`}: ${i(e[t])}`).join(", ")}}`:void 0},p=(e,t)=>"boolean"==typeof e?e?""+t:"":"string"==typeof e&&n(e)?(e=o(e))?`(${e}) && ${t}`:""+t:t,l=e=>{const t=new RegExp("this.state","g");return e.replace(t,"state")},d=(e,t)=>{let n=!1;return e.forEach(e=>{e.import===t&&(n=!0)}),n};e.exports={isExpression:n,toString:r,transComponentsMap:(e={})=>{if(!e||!Array.isArray(e.list))return[];return e.list.reduce((e,t)=>{const n=t.name;if(!e[n]){try{let e=JSON.parse(t.dependence);e&&(t.packageName=e.package),t.dependenceVersion||(t.dependenceVersion="*"),/^\d/.test(t.dependenceVersion)&&(t.dependenceVersion="^"+t.dependenceVersion)}catch(e){}e[n]=t}return e},{})},line2Hump:e=>e=(e=e.replace(/[_|-](\w)/g,(e,t)=>t.toUpperCase())).charAt(0).toUpperCase()+e.slice(1),existImport:d,toUpperCaseStart:s,parseStyle:(e,t,n)=>{for(let o in e)switch(o){case"fontSize":case"marginTop":case"marginBottom":case"paddingTop":case"paddingBottom":case"height":case"top":case"bottom":case"width":case"maxWidth":case"left":case"right":case"paddingRight":case"paddingLeft":case"marginLeft":case"marginRight":case"lineHeight":case"borderBottomRightRadius":case"borderBottomLeftRadius":case"borderTopRightRadius":case"borderTopLeftRadius":case"borderRadius":case"textIndent":e[o]=parseInt(e[o])*t,n&&e[o]&&(e[o]=`${e[o]}${n}`)}return e},deepClone:a,parseDataSource:(e,t)=>{const o=e.id,{uri:s,method:a,params:p}=e.options,l=e.type;let u,m={};switch(l){case"fetch":u="import {fetch} from 'whatwg-fetch';",d(t,u)||t.push({import:u,package:"whatwg-fetch",version:"^3.0.0"}),m={method:a};break;case"jsonp":u="import {fetchJsonp} from 'fetch-jsonp';",d(t,u)||t.push({import:u,package:"fetch-jsonp",version:"^1.1.3"})}Object.keys(e.options).forEach(t=>{-1===["uri","method","params"].indexOf(t)&&(m[t]=r(e.options[t]))});let f=null===($=m)||"[object Object]"!==Object.prototype.toString.call($)||Object.keys($).length?",":"";var $;m=p?`${r(m).slice(0,-1)} ${f} body: ${n(p)?i(p):r(p)}}`:r(m);let h=`{\n  return ${l}(${i(s)}, ${r(m)})\n    .then((response) => response.json())\n`;if(e.dataHandler){const{params:t,content:n}=c(e.dataHandler);h+=`.then((${t}) => {${n}})\n    .catch((e) => {\n      console.log('error', e);\n    })\n  `}return h+="}",{value:`function ${o}() ${h}`,imports:t}},parseFunction:c,parseLoop:(e,t,s,a,c)=>{let i,l=t&&t[0]||"item",d=t&&t[1]||"index";Array.isArray(e)?i=r(e):n(e)&&(i=o(e)||"[]");const u=s.match(/^<.+?(\s|\b(?=>))/)[0].length;s=`${s.slice(0,u)} key={${d}}${s.slice(u)}`;const m=new RegExp("this."+l,"g");s=s.replace(m,l);let f=i;return i.match(/this\.state\./)&&(f="state."+i.split(".").pop()),c.condition&&(s=p(c.condition,s)),{hookState:[],value:`(${f} || []).map((${l}, ${d}) => {\n      return (${s});\n    })`}},parseCondition:p,parseProps:i,parseState:e=>`const [state, set${s("state")}] = useState(${r(JSON.parse(e))||null});`,parseLifeCycles:(e,t)=>{let n=[];return!e.lifeCycles._constructor&&t&&(e.lifeCycles._constructor="function _constructor() {}"),Object.keys(e.lifeCycles).forEach(o=>{let{params:r,content:s}=c(e.lifeCycles[o]);switch(s=l(s),o){case"_constructor":t.push(s),n.unshift(`\n          // constructor\n          useState(()=>{\n            ${t.join("\n")}\n          })\n        `);break;case"componentDidMount":n.push(`\n          // componentDidMount\n          useEffect(()=>{\n            ${s}\n          }, [])\n        `);break;case"componentDidUpdate":n.push(`\n          // componentDidUpdate\n          useEffect(()=>{\n            ${s}\n          })\n        `);break;case"componentWillUnMount":n.push(`\n          // componentWillUnMount\n          useEffect(()=>{\n            return ()=>{\n              ${s}\n            }\n          }, [])\n        `)}}),n},replaceState:l,generateCSS:(e,t)=>{let n="";for(let r in e){n+=`${t&&t!==r?"."+t+" ":""}.${r} {`;for(let t in e[r])n+=`${o=t,o=o.split(/(?=[A-Z])/).join("-"),/^[A-Z].*/.test(o)&&(o="-"+o),o.toLowerCase()}: ${e[r][t]};\n`;n+="}"}var o;return n},getText:e=>{let t="";const n=e=>{"text"===e.componentName.toLowerCase()&&(t+=i(e.props.text||e.text,!0).replace(/\{/g,"${")),e.children&&Array.isArray(e.children)&&e.children.map(e=>{n(e)})};return n(e),t}}},function(e,t,n){const{exportMod:o,exportPage:r}=n(2),{line2Hump:s,transComponentsMap:a}=n(0);e.exports=function(e,t){const n=[],c=750/(t.responsive&&t.responsive.width||750),i=a(t.componentsMap);t.scale=c,t.componentsMap=i,function e(t){const{json:o,scale:r,index:a}=t;switch(o.componentName.toLowerCase()){case"block":o.fileName=o.fileName||"block_"+o.id.slice(0,6)||"block_"+a,o.smart&&o.smart.layerProtocol&&o.smart.layerProtocol.module&&o.smart.layerProtocol.module.type&&(o.fileName=o.smart.layerProtocol.module.type.replace(/[@|\/]/g,"")),o.fileName="index"===o.fileName?o.fileName:s(o.fileName),n.push(o)}o.children&&o.children.length>0&&Array.isArray(o.children)&&o.children.forEach((t,n)=>{e({json:t,scale:r,index:n})})}({json:e,scale:c});let p=[];if(n.length>0&&n.forEach(e=>{const n=o(e,t);p=p.concat(n)}),"Page"===e.componentName){const n=r(e,t);p=p.concat(n)}return{panelDisplay:p,noTemplate:!0}}},function(e,t,n){const o=n(3),r=n(4);e.exports={exportMod:o,exportPage:r}},function(e,t,n){const{toString:o,existImport:r,parseLoop:s,parseStyle:a,deepClone:c,parseFunction:i,parseProps:p,parseState:l,parseLifeCycles:d,replaceState:u,parseCondition:m,generateCSS:f,parseDataSource:$,line2Hump:h,getText:y,isExpression:x}=n(0);e.exports=function(e,t){const{prettier:n,scale:g,componentsMap:b}=t,S=e.fileName;let k=[],j=[];const C={},N={},w=[];let O=null,v=[];const I=[];let E=[];const A=[],P=e=>{let t=b[e]||{},n=t.package||t.packageName||e;n&&["view","image","text","picture"].indexOf(n.toLowerCase())>=0&&(n="rax-"+n.toLowerCase());const o=`import ${e} from '${n}'`;r(k,o)||k.push({import:o,package:n,version:t.dependenceVersion||"*"})},T=e=>{const t=e.componentName,n=e.componentName.toLowerCase(),o=e.props&&e.props.className,r=o?` className="${o}"`:"";let i,l={},d={};Object.keys(e.props.style||{}).forEach(t=>{x(e.props.style[t])?d[t]=e.props.style[t]:l[t]=e.props.style[t]}),e.props.codeStyle=d,o&&(C[o]=a(l,g),N[o]=a(c(l),g,"rpx"));let f="";switch(Object.keys(e.props).forEach(t=>{-1===["className","style","text","src","key","codeStyle"].indexOf(t)&&(f+=` ${t}={${p(e.props[t])}}`),"codeStyle"===t&&"{}"!==JSON.stringify(e.props[t])&&(f+=` style={${p(e.props[t])}}`),"text"!==n&&["text"].includes(t)&&(f+=` ${t}={${p(e.props[t])}}`),0===["onClick"].indexOf(t)&&(f+=` accessible={true} role="link" aria-label={\`${y(e)}\`}`)}),"link"!==n||f.match("accessible")||(f+=` accessible={true} aria-label={\`${y(e)}\`}`),n){case"text":P("Text");let n=p(e.props.text||e.text,!0);n.match(/this\.props/)&&(n=n.replace(/this\./,"")),i=`<Text${r}${f}>${n||""}</Text>`;break;case"image":if(P("Image"),f.match("onClick")||(f+=" aria-hidden={true}"),e.props.source&&e.props.source.uri)i=`<Image${r}${f} />`;else{let t=p(e.props.src);t=t&&`source={{uri: ${t}}}`||"",i=`<Image${r}${f} ${t} />`}break;case"div":case"view":case"page":case"block":case"component":P("View"),i=e.children&&e.children.length?`<View${r}${f}>${V(e.children)}</View>`:`<View${r}${f} />`;break;default:P(e.componentName),i=e.children&&e.children.length&&Array.isArray(e.children)?`<${t}${r}${f}>${V(e.children)}</${t}>`:"string"==typeof e.children?`<${t}${r}${f} >${e.children}</${t}>`:`<${t}${r}${f} />`}if(e.loop){const t=s(e.loop,e.loopArgs,i,O,e);i=t.value,v=v.concat(t.hookState)}return i=u(i),e.condition&&(i=m(e.condition,i)),(e.loop||e.condition&&"string"==typeof e.condition)&&(i=`{${i}}`),i},V=e=>{let t="";const n=e.fileName||e.id;if(Array.isArray(e))e.forEach(e=>{t+=V(e)});else{const r=e.componentName.toLowerCase();if(-1!==["page"].indexOf(r)||n===S){const t=[];if(e.state&&(t.push("state = "+o(e.state)),O=o(e.state)),e.methods&&Object.keys(e.methods).forEach(t=>{const{params:n,content:o}=i(e.methods[t]);I.push(`function ${t}(${n}) {${o}}`)}),e.dataSource&&Array.isArray(e.dataSource.list)&&(e.dataSource.list.forEach(e=>{"boolean"==typeof e.isInit&&e.isInit?A.push(e.id+"();"):"string"==typeof e.isInit&&A.push(`if (${p(e.isInit)}) { ${e.id}(); }`);const t=$(e,k);I.push(t.value),k=t.imports}),e.dataSource.dataHandler)){const{params:t,content:n}=i(e.dataSource.dataHandler);I.push(`const dataHandler = (${t}) => {${n}}`),A.push("dataHandler()")}e.lifeCycles&&(E=d(e,A)),O&&v.push(l(O))}else if(-1!==["block"].indexOf(r)){let o="";Object.keys(e.props).forEach(t=>{-1===["className","style","text","src","key"].indexOf(t)&&(o+=` ${t}={${p(e.props[t])}}`)}),t+=`<${h(n)} ${o} />`,j.push({import:`import ${h(n)} from '../${n}';`})}else t+=T(e)}return t};t.utils&&Object.keys(t.utils).forEach(e=>{w.push(`const ${e} = ${t.utils[e]}`)}),V(e);const L={parser:"css"},M=T(e),H=M.match("dispatch"),R=n.format(`\n    'use strict';\n    import { createElement, useState, useEffect, memo } from 'rax';\n    ${k.map(e=>e.import).join("\n")}\n    ${j.map(e=>e.import).join("\n")}\n    ${H?"import { IndexContext } from '../../context';":""}\n\n    import './${S}.css';\n\n    ${w.join("\n")}\n    export default memo((props) => {\n      ${v.join("\n")}\n      ${H?"const { state: { txt }, dispatch} = useContext(IndexContext);":""}\n      ${E.join("\n")}\n      ${I.join("\n")}\n      ${M.match(/^\{true\ \&\& /)?`return (<View>${M}</View>)`:`return (${M})`}\n    });\n  `,{parser:"babel",printWidth:120,singleQuote:!0}),_=e.props&&e.props.className;return[{panelName:S+".jsx",panelValue:R,panelType:"js",panelImports:k},{panelName:S+".css",panelValue:n.format(""+f(C,_),L),panelType:"css"},{panelName:S+".rpx.css",panelValue:n.format(""+f(N,_),L),panelType:"css"}]}},function(e,t,n){const{toString:o,existImport:r,parseLoop:s,parseStyle:a,deepClone:c,parseFunction:i,parseProps:p,parseState:l,parseLifeCycles:d,replaceState:u,parseCondition:m,generateCSS:f,parseDataSource:$,line2Hump:h,getText:y,isExpression:x}=n(0);e.exports=function(e,t){const{prettier:n,scale:g,componentsMap:b}=t,S=e.fileName||e.id||"index";let k=[],j=[];const C={},N={},w=[];let O=null,v=[];const I=[];let E=[];const A=[],P=e=>{let t=b[e]||{},n=t.package||t.packageName||e;n&&["view","image","text","picture"].indexOf(n.toLowerCase())>=0&&(n="rax-"+n.toLowerCase());const o=`import ${e} from '${n}'`;r(k,o)||k.push({import:o,package:n,version:t.dependenceVersion||"*"})},T=e=>{const t=e.componentName,n=e.componentName.toLowerCase(),o=e.props&&e.props.className,r=o?` className="${o}"`:"";let i,l={},d={};Object.keys(e.props.style||{}).forEach(t=>{x(e.props.style[t])?d[t]=e.props.style[t]:l[t]=e.props.style[t]}),e.props.codeStyle=d,o&&(C[o]=a(e.props.style,g),N[o]=a(c(e.props.style),g,"rpx"));let f="";switch(Object.keys(e.props).forEach(t=>{-1===["className","style","text","src","key","codeStyle"].indexOf(t)&&(f+=` ${t}={${p(e.props[t])}}`),"codeStyle"===t&&"{}"!==JSON.stringify(e.props[t])&&(f+=` style={${p(e.props[t])}}`),"text"!==n&&["text"].includes(t)&&(f+=` ${t}={${p(e.props[t])}}`),0===["onClick"].indexOf(t)&&(f+=` accessible={true} aria-label={\`${y(e)}\`}`)}),"link"!==n||f.match("accessible")||(f+=` accessible={true} role="link" aria-label={\`${y(e)}\`}`),n){case"text":P("Text");const n=p(e.props.text||e.text,!0);i=`<Text${r}${f}>${n||""}</Text>`;break;case"image":if(P("Image"),f.match("onClick")||(f+=" aria-hidden={true}"),e.props.source&&e.props.source.uri)i=`<Image${r}${f} />`;else{let t=p(e.props.src);t=t&&`source={{uri: ${t}}}`||"",i=`<Image${r}${f} ${t} />`}break;case"div":case"view":case"page":case"block":case"component":P("View"),i=e.children&&e.children.length?`<View${r}${f}>${V(e.children)}</View>`:`<View${r}${f} />`;break;default:P(e.componentName),i=e.children&&e.children.length&&Array.isArray(e.children)?`<${t}${r}${f}>${V(e.children)}</${t}>`:"string"==typeof e.children?`<${t}${r}${f} >${e.children}</${t}>`:`<${t}${r}${f} />`}if(e.loop){const t=s(e.loop,e.loopArgs,i,O);i=t.value,v=v.concat(t.hookState)}return i=u(i),e.condition&&(i=m(e.condition,i)),(e.loop||e.condition)&&(i=`{${i}}`),i},V=e=>{let t="";if(Array.isArray(e))e.forEach(e=>{t+=V(e)});else{const n=e.componentName.toLowerCase();if(-1!==["page"].indexOf(n)){const t=[];if(e.state&&(t.push("state = "+o(e.state)),O=o(e.state)),e.methods&&Object.keys(e.methods).forEach(t=>{const{params:n,content:o}=i(e.methods[t]);I.push(`function ${t}(${n}) {${o}}`)}),e.dataSource&&Array.isArray(e.dataSource.list)&&(e.dataSource.list.forEach(e=>{"boolean"==typeof e.isInit&&e.isInit?A.push(e.id+"();"):"string"==typeof e.isInit&&A.push(`if (${p(e.isInit)}) { ${e.id}(); }`);const t=$(e,k);I.push(t.value),k=t.imports}),e.dataSource.dataHandler)){const{params:t,content:n}=i(e.dataSource.dataHandler);I.push(`const dataHandler = (${t}) => {${n}}`),A.push("dataHandler()")}e.lifeCycles&&(E=d(e,A)),O&&v.push(l(O))}else if(-1!==["block"].indexOf(n)){const n=e.fileName||e.id;let o="";Object.keys(e.props).forEach(t=>{-1===["className","style","text","src","key"].indexOf(t)&&(o+=` ${t}={${p(e.props[t])}}`)}),t+=`<${h(n)} ${o} />`,j.push({import:`import ${h(n)} from './${n}';`})}else t+=T(e)}return t};t.utils&&Object.keys(t.utils).forEach(e=>{w.push(`const ${e} = ${t.utils[e]}`)}),V(e);const L={parser:"babel",printWidth:120,singleQuote:!0},M={parser:"css"},H=T(e),R=n.format("import { createElement, createContext, useReducer } from 'rax';\n\n    const initState = {\n      txt: 'click me' // Get data, trigger proactively useEffect\n    };\n    \n    function UserReducer(state, action) {\n      switch (action.type) {\n        case 'changeTxt':\n          return {\n            ...state,\n            txt: `click me ${action.payload.val}`\n          };\n        default:\n          return state;\n      }\n    }\n    \n    const IndexContext = createContext();\n    \n    const IndexProvider = props => {\n      const [state, dispatch] = useReducer(UserReducer, initState);\n      return (\n        <IndexContext.Provider value={{ state, dispatch }}>\n          {props.children}\n        </IndexContext.Provider>\n      );\n    };\n    \n    export { IndexContext, IndexProvider };\n  ",L),_=H.match("dispatch"),U=n.format(`\n    'use strict';\n    import { createElement, useState, useEffect } from 'rax';\n    ${k.map(e=>e.import).join("\n")}\n    ${j.map(e=>e.import).join("\n")}\n    import { ${_?"IndexContext, IndexProvider":"IndexProvider"} } from './context';\n    import './${S}.css';\n\n    ${w.join("\n")}\n    export default function Page() {\n      ${v.join("\n")}\n      ${_?"const { state: { txt }, dispatch} = useContext(IndexContext);":""}\n\n      ${E.join("\n")}\n      \n      ${I.join("\n")}\n      return (<IndexProvider>${H}</IndexProvider>)\n    };\n  `,L),D=e.props&&e.props.className;return[{panelName:S+".jsx",panelValue:U,panelType:"js",panelImports:k.concat(j)},{panelName:"context.jsx",panelValue:R,panelType:"js",panelImports:[]},{panelName:S+".css",panelValue:n.format(""+f(C,D),M),panelType:"css"},{panelName:S+".rpx.css",panelValue:n.format(""+f(N,D),M),panelType:"css"}]}}]);