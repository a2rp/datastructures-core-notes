(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))f(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const _ of w.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&f(_)}).observe(document,{childList:!0,subtree:!0});function c(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(g){if(g.ep)return;g.ep=!0;const w=c(g);fetch(g.href,w)}})();function ih(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var As={exports:{}},Jn={},Hs={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function oh(){if(od)return te;od=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),A=Symbol.iterator;function H(m){return m===null||typeof m!="object"?null:(m=A&&m[A]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,b={};function K(m,j,G){this.props=m,this.context=j,this.refs=b,this.updater=G||Q}K.prototype.isReactComponent={},K.prototype.setState=function(m,j){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,j,"setState")},K.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function pe(){}pe.prototype=K.prototype;function se(m,j,G){this.props=m,this.context=j,this.refs=b,this.updater=G||Q}var oe=se.prototype=new pe;oe.constructor=se,ie(oe,K.prototype),oe.isPureReactComponent=!0;var J=Array.isArray,de=Object.prototype.hasOwnProperty,Y={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Pe(m,j,G){var X,ne={},ee=null,fe=null;if(j!=null)for(X in j.ref!==void 0&&(fe=j.ref),j.key!==void 0&&(ee=""+j.key),j)de.call(j,X)&&!U.hasOwnProperty(X)&&(ne[X]=j[X]);var le=arguments.length-2;if(le===1)ne.children=G;else if(1<le){for(var ue=Array(le),Me=0;Me<le;Me++)ue[Me]=arguments[Me+2];ne.children=ue}if(m&&m.defaultProps)for(X in le=m.defaultProps,le)ne[X]===void 0&&(ne[X]=le[X]);return{$$typeof:o,type:m,key:ee,ref:fe,props:ne,_owner:Y.current}}function tt(m,j){return{$$typeof:o,type:m.type,key:j,ref:m.ref,props:m.props,_owner:m._owner}}function yt(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Dt(m){var j={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return j[G]})}var ut=/\/+/g;function be(m,j){return typeof m=="object"&&m!==null&&m.key!=null?Dt(""+m.key):j.toString(36)}function rt(m,j,G,X,ne){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var fe=!1;if(m===null)fe=!0;else switch(ee){case"string":case"number":fe=!0;break;case"object":switch(m.$$typeof){case o:case u:fe=!0}}if(fe)return fe=m,ne=ne(fe),m=X===""?"."+be(fe,0):X,J(ne)?(G="",m!=null&&(G=m.replace(ut,"$&/")+"/"),rt(ne,j,G,"",function(Me){return Me})):ne!=null&&(yt(ne)&&(ne=tt(ne,G+(!ne.key||fe&&fe.key===ne.key?"":(""+ne.key).replace(ut,"$&/")+"/")+m)),j.push(ne)),1;if(fe=0,X=X===""?".":X+":",J(m))for(var le=0;le<m.length;le++){ee=m[le];var ue=X+be(ee,le);fe+=rt(ee,j,G,ue,ne)}else if(ue=H(m),typeof ue=="function")for(m=ue.call(m),le=0;!(ee=m.next()).done;)ee=ee.value,ue=X+be(ee,le++),fe+=rt(ee,j,G,ue,ne);else if(ee==="object")throw j=String(m),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return fe}function ct(m,j,G){if(m==null)return m;var X=[],ne=0;return rt(m,X,"","",function(ee){return j.call(G,ee,ne++)}),X}function Be(m){if(m._status===-1){var j=m._result;j=j(),j.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=j)}if(m._status===1)return m._result.default;throw m._result}var ve={current:null},z={transition:null},D={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:z,ReactCurrentOwner:Y};function L(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:ct,forEach:function(m,j,G){ct(m,function(){j.apply(this,arguments)},G)},count:function(m){var j=0;return ct(m,function(){j++}),j},toArray:function(m){return ct(m,function(j){return j})||[]},only:function(m){if(!yt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=K,te.Fragment=c,te.Profiler=g,te.PureComponent=se,te.StrictMode=f,te.Suspense=C,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,te.act=L,te.cloneElement=function(m,j,G){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var X=ie({},m.props),ne=m.key,ee=m.ref,fe=m._owner;if(j!=null){if(j.ref!==void 0&&(ee=j.ref,fe=Y.current),j.key!==void 0&&(ne=""+j.key),m.type&&m.type.defaultProps)var le=m.type.defaultProps;for(ue in j)de.call(j,ue)&&!U.hasOwnProperty(ue)&&(X[ue]=j[ue]===void 0&&le!==void 0?le[ue]:j[ue])}var ue=arguments.length-2;if(ue===1)X.children=G;else if(1<ue){le=Array(ue);for(var Me=0;Me<ue;Me++)le[Me]=arguments[Me+2];X.children=le}return{$$typeof:o,type:m.type,key:ne,ref:ee,props:X,_owner:fe}},te.createContext=function(m){return m={$$typeof:_,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:w,_context:m},m.Consumer=m},te.createElement=Pe,te.createFactory=function(m){var j=Pe.bind(null,m);return j.type=m,j},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:T,render:m}},te.isValidElement=yt,te.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:Be}},te.memo=function(m,j){return{$$typeof:M,type:m,compare:j===void 0?null:j}},te.startTransition=function(m){var j=z.transition;z.transition={};try{m()}finally{z.transition=j}},te.unstable_act=L,te.useCallback=function(m,j){return ve.current.useCallback(m,j)},te.useContext=function(m){return ve.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return ve.current.useDeferredValue(m)},te.useEffect=function(m,j){return ve.current.useEffect(m,j)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(m,j,G){return ve.current.useImperativeHandle(m,j,G)},te.useInsertionEffect=function(m,j){return ve.current.useInsertionEffect(m,j)},te.useLayoutEffect=function(m,j){return ve.current.useLayoutEffect(m,j)},te.useMemo=function(m,j){return ve.current.useMemo(m,j)},te.useReducer=function(m,j,G){return ve.current.useReducer(m,j,G)},te.useRef=function(m){return ve.current.useRef(m)},te.useState=function(m){return ve.current.useState(m)},te.useSyncExternalStore=function(m,j,G){return ve.current.useSyncExternalStore(m,j,G)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var ld;function la(){return ld||(ld=1,Hs.exports=oh()),Hs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function lh(){if(sd)return Jn;sd=1;var o=la(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,g=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function _(T,C,M){var $,A={},H=null,Q=null;M!==void 0&&(H=""+M),C.key!==void 0&&(H=""+C.key),C.ref!==void 0&&(Q=C.ref);for($ in C)f.call(C,$)&&!w.hasOwnProperty($)&&(A[$]=C[$]);if(T&&T.defaultProps)for($ in C=T.defaultProps,C)A[$]===void 0&&(A[$]=C[$]);return{$$typeof:u,type:T,key:H,ref:Q,props:A,_owner:g.current}}return Jn.Fragment=c,Jn.jsx=_,Jn.jsxs=_,Jn}var ad;function sh(){return ad||(ad=1,As.exports=lh()),As.exports}var l=sh(),mo={},Bs={exports:{}},Je={},Ws={exports:{}},Us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function ah(){return ud||(ud=1,(function(o){function u(z,D){var L=z.length;z.push(D);e:for(;0<L;){var m=L-1>>>1,j=z[m];if(0<g(j,D))z[m]=D,z[L]=j,L=m;else break e}}function c(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var D=z[0],L=z.pop();if(L!==D){z[0]=L;e:for(var m=0,j=z.length,G=j>>>1;m<G;){var X=2*(m+1)-1,ne=z[X],ee=X+1,fe=z[ee];if(0>g(ne,L))ee<j&&0>g(fe,ne)?(z[m]=fe,z[ee]=L,m=ee):(z[m]=ne,z[X]=L,m=X);else if(ee<j&&0>g(fe,L))z[m]=fe,z[ee]=L,m=ee;else break e}}return D}function g(z,D){var L=z.sortIndex-D.sortIndex;return L!==0?L:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var _=Date,T=_.now();o.unstable_now=function(){return _.now()-T}}var C=[],M=[],$=1,A=null,H=3,Q=!1,ie=!1,b=!1,K=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(z){for(var D=c(M);D!==null;){if(D.callback===null)f(M);else if(D.startTime<=z)f(M),D.sortIndex=D.expirationTime,u(C,D);else break;D=c(M)}}function J(z){if(b=!1,oe(z),!ie)if(c(C)!==null)ie=!0,Be(de);else{var D=c(M);D!==null&&ve(J,D.startTime-z)}}function de(z,D){ie=!1,b&&(b=!1,pe(Pe),Pe=-1),Q=!0;var L=H;try{for(oe(D),A=c(C);A!==null&&(!(A.expirationTime>D)||z&&!Dt());){var m=A.callback;if(typeof m=="function"){A.callback=null,H=A.priorityLevel;var j=m(A.expirationTime<=D);D=o.unstable_now(),typeof j=="function"?A.callback=j:A===c(C)&&f(C),oe(D)}else f(C);A=c(C)}if(A!==null)var G=!0;else{var X=c(M);X!==null&&ve(J,X.startTime-D),G=!1}return G}finally{A=null,H=L,Q=!1}}var Y=!1,U=null,Pe=-1,tt=5,yt=-1;function Dt(){return!(o.unstable_now()-yt<tt)}function ut(){if(U!==null){var z=o.unstable_now();yt=z;var D=!0;try{D=U(!0,z)}finally{D?be():(Y=!1,U=null)}}else Y=!1}var be;if(typeof se=="function")be=function(){se(ut)};else if(typeof MessageChannel!="undefined"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=ut,be=function(){ct.postMessage(null)}}else be=function(){K(ut,0)};function Be(z){U=z,Y||(Y=!0,be())}function ve(z,D){Pe=K(function(){z(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){ie||Q||(ie=!0,Be(de))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return H},o.unstable_getFirstCallbackNode=function(){return c(C)},o.unstable_next=function(z){switch(H){case 1:case 2:case 3:var D=3;break;default:D=H}var L=H;H=D;try{return z()}finally{H=L}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=H;H=z;try{return D()}finally{H=L}},o.unstable_scheduleCallback=function(z,D,L){var m=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?m+L:m):L=m,z){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=L+j,z={id:$++,callback:D,priorityLevel:z,startTime:L,expirationTime:j,sortIndex:-1},L>m?(z.sortIndex=L,u(M,z),c(C)===null&&z===c(M)&&(b?(pe(Pe),Pe=-1):b=!0,ve(J,L-m))):(z.sortIndex=j,u(C,z),ie||Q||(ie=!0,Be(de))),z},o.unstable_shouldYield=Dt,o.unstable_wrapCallback=function(z){var D=H;return function(){var L=H;H=D;try{return z.apply(this,arguments)}finally{H=L}}}})(Us)),Us}var cd;function uh(){return cd||(cd=1,Ws.exports=ah()),Ws.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd;function ch(){if(dd)return Je;dd=1;var o=la(),u=uh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,g={};function w(e,t){_(e,t),_(e+"Capture",t)}function _(e,t){for(g[e]=t,e=0;e<t.length;e++)f.add(t[e])}var T=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},A={};function H(e){return C.call(A,e)?!0:C.call($,e)?!1:M.test(e)?A[e]=!0:($[e]=!0,!1)}function Q(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,t,r,n){if(t===null||typeof t=="undefined"||Q(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,r,n,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pe,se);K[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pe,se);K[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pe,se);K[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,r,n){var i=K.hasOwnProperty(t)?K[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ie(t,r,i,n)&&(r=null),n||i===null?H(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var J=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),Y=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Dt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),z=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,m;function j(e){if(m===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var G=!1;function X(e,t){if(!e||G)return"";G=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=n.stack.split(`
`),a=i.length-1,d=s.length-1;1<=a&&0<=d&&i[a]!==s[d];)d--;for(;1<=a&&0<=d;a--,d--)if(i[a]!==s[d]){if(a!==1||d!==1)do if(a--,d--,0>d||i[a]!==s[d]){var p=`
`+i[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=d);break}}}finally{G=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function ne(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case Y:return"Portal";case tt:return"Profiler";case Pe:return"StrictMode";case be:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Me(e){var t=ue(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=Me(e))}function wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ue(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function bo(e,t){var r=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function fa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=le(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function Qo(e,t){pa(e,t);var r=le(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Yo(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Yo(e,t,r){(t!=="number"||oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hn=Array.isArray;function Ir(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+le(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(hn(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:le(r)}}function va(e,t){var r=le(t.value),n=le(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,ya=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(vn).forEach(function(e){af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vn[t]=vn[e]})});function wa(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||vn.hasOwnProperty(e)&&vn[e]?(""+t).trim():t+"px"}function ja(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=wa(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var uf=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,t){if(t){if(uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,Fr=null,Dr=null;function ka(e){if(e=An(e)){if(typeof el!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Li(t),el(e.stateNode,e.type,t))}}function Sa(e){Fr?Dr?Dr.push(e):Dr=[e]:Fr=e}function Na(){if(Fr){var e=Fr,t=Dr;if(Dr=Fr=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function Ca(e,t){return e(t)}function Ea(){}var tl=!1;function _a(e,t,r){if(tl)return e(t,r);tl=!0;try{return Ca(e,t,r)}finally{tl=!1,(Fr!==null||Dr!==null)&&(Ea(),Na())}}function gn(e,t){var r=e.stateNode;if(r===null)return null;var n=Li(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var rl=!1;if(T)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){rl=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{rl=!1}function cf(e,t,r,n,i,s,a,d,p){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(S){this.onError(S)}}var yn=!1,si=null,ai=!1,nl=null,df={onError:function(e){yn=!0,si=e}};function ff(e,t,r,n,i,s,a,d,p){yn=!1,si=null,cf.apply(df,arguments)}function pf(e,t,r,n,i,s,a,d,p){if(ff.apply(this,arguments),yn){if(yn){var y=si;yn=!1,si=null}else throw Error(c(198));ai||(ai=!0,nl=y)}}function gr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function za(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function La(e){if(gr(e)!==e)throw Error(c(188))}function hf(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return La(i),e;if(s===n)return La(i),t;s=s.sibling}throw Error(c(188))}if(r.return!==n.return)r=i,n=s;else{for(var a=!1,d=i.child;d;){if(d===r){a=!0,r=i,n=s;break}if(d===n){a=!0,n=i,r=s;break}d=d.sibling}if(!a){for(d=s.child;d;){if(d===r){a=!0,r=s,n=i;break}if(d===n){a=!0,n=s,r=i;break}d=d.sibling}if(!a)throw Error(c(189))}}if(r.alternate!==n)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Pa(e){return e=hf(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ta(e);if(t!==null)return t;e=e.sibling}return null}var Oa=u.unstable_scheduleCallback,Ra=u.unstable_cancelCallback,mf=u.unstable_shouldYield,vf=u.unstable_requestPaint,Ce=u.unstable_now,gf=u.unstable_getCurrentPriorityLevel,il=u.unstable_ImmediatePriority,Ia=u.unstable_UserBlockingPriority,ui=u.unstable_NormalPriority,xf=u.unstable_LowPriority,Fa=u.unstable_IdlePriority,ci=null,Pt=null;function yf(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:kf,wf=Math.log,jf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(wf(e)/jf|0)|0}var di=64,fi=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,a=r&268435455;if(a!==0){var d=a&~i;d!==0?n=wn(d):(s&=a,s!==0&&(n=wn(s)))}else a=r&~i,a!==0?n=wn(a):s!==0&&(n=wn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-jt(t),i=1<<r,n|=e[r],t&=~i;return n}function Sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-jt(s),d=1<<a,p=i[a];p===-1?((d&r)===0||(d&n)!==0)&&(i[a]=Sf(d,t)):p<=t&&(e.expiredLanes|=d),s&=~d}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Da(){var e=di;return di<<=1,(di&4194240)===0&&(di=64),e}function ll(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function jn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Cf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-jt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function sl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-jt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var me=0;function Ma(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Aa,al,Ha,Ba,Wa,ul=!1,hi=[],Gt=null,qt=null,Kt=null,kn=new Map,Sn=new Map,Xt=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function Nn(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=An(t),t!==null&&al(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _f(e,t,r,n,i){switch(t){case"focusin":return Gt=Nn(Gt,e,t,r,n,i),!0;case"dragenter":return qt=Nn(qt,e,t,r,n,i),!0;case"mouseover":return Kt=Nn(Kt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return kn.set(s,Nn(kn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Sn.set(s,Nn(Sn.get(s)||null,e,t,r,n,i)),!0}return!1}function $a(e){var t=xr(e.target);if(t!==null){var r=gr(t);if(r!==null){if(t=r.tag,t===13){if(t=za(r),t!==null){e.blockedOn=t,Wa(e.priority,function(){Ha(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Zo=n,r.target.dispatchEvent(n),Zo=null}else return t=An(r),t!==null&&al(t),e.blockedOn=r,!1;t.shift()}return!0}function Va(e,t,r){mi(e)&&r.delete(t)}function zf(){ul=!1,Gt!==null&&mi(Gt)&&(Gt=null),qt!==null&&mi(qt)&&(qt=null),Kt!==null&&mi(Kt)&&(Kt=null),kn.forEach(Va),Sn.forEach(Va)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,zf)))}function En(e){function t(i){return Cn(i,e)}if(0<hi.length){Cn(hi[0],e);for(var r=1;r<hi.length;r++){var n=hi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Gt!==null&&Cn(Gt,e),qt!==null&&Cn(qt,e),Kt!==null&&Cn(Kt,e),kn.forEach(t),Sn.forEach(t),r=0;r<Xt.length;r++)n=Xt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Xt.length&&(r=Xt[0],r.blockedOn===null);)$a(r),r.blockedOn===null&&Xt.shift()}var Mr=J.ReactCurrentBatchConfig,vi=!0;function Lf(e,t,r,n){var i=me,s=Mr.transition;Mr.transition=null;try{me=1,cl(e,t,r,n)}finally{me=i,Mr.transition=s}}function Pf(e,t,r,n){var i=me,s=Mr.transition;Mr.transition=null;try{me=4,cl(e,t,r,n)}finally{me=i,Mr.transition=s}}function cl(e,t,r,n){if(vi){var i=dl(e,t,r,n);if(i===null)zl(e,t,n,gi,r),Ua(e,n);else if(_f(i,e,t,r,n))n.stopPropagation();else if(Ua(e,n),t&4&&-1<Ef.indexOf(e)){for(;i!==null;){var s=An(i);if(s!==null&&Aa(s),s=dl(e,t,r,n),s===null&&zl(e,t,n,gi,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else zl(e,t,n,null,r)}}var gi=null;function dl(e,t,r,n){if(gi=null,e=Jo(n),e=xr(e),e!==null)if(t=gr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=za(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function ba(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gf()){case il:return 1;case Ia:return 4;case ui:case xf:return 16;case Fa:return 536870912;default:return 16}default:return 16}}var Zt=null,fl=null,xi=null;function Qa(){if(xi)return xi;var e,t=fl,r=t.length,n,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[s-n];n++);return xi=i.slice(e,1<n?1-n:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Ya(){return!1}function nt(e){function t(r,n,i,s,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wi:Ya,this.isPropagationStopped=Ya,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=nt(Ar),_n=L({},Ar,{view:0,detail:0}),Tf=nt(_n),hl,ml,zn,ji=L({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(hl=e.screenX-zn.screenX,ml=e.screenY-zn.screenY):ml=hl=0,zn=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Ga=nt(ji),Of=L({},ji,{dataTransfer:0}),Rf=nt(Of),If=L({},_n,{relatedTarget:0}),vl=nt(If),Ff=L({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=nt(Ff),Mf=L({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Af=nt(Mf),Hf=L({},Ar,{data:0}),qa=nt(Hf),Bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uf[e])?!!t[e]:!1}function gl(){return $f}var Vf=L({},_n,{key:function(e){if(e.key){var t=Bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=nt(Vf),Qf=L({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=nt(Qf),Yf=L({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),Gf=nt(Yf),qf=L({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=nt(qf),Xf=L({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=nt(Xf),Jf=[9,13,27,32],xl=T&&"CompositionEvent"in window,Ln=null;T&&"documentMode"in document&&(Ln=document.documentMode);var ep=T&&"TextEvent"in window&&!Ln,Xa=T&&(!xl||Ln&&8<Ln&&11>=Ln),Za=" ",Ja=!1;function eu(e,t){switch(e){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function tp(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(Ja=!0,Za);case"textInput":return e=t.data,e===Za&&Ja?null:e;default:return null}}function rp(e,t){if(Hr)return e==="compositionend"||!xl&&eu(e,t)?(e=Qa(),xi=fl=Zt=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xa&&t.locale!=="ko"?null:t.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!np[e.type]:t==="textarea"}function nu(e,t,r,n){Sa(n),t=Ei(t,"onChange"),0<t.length&&(r=new pl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Pn=null,Tn=null;function ip(e){ju(e,0)}function ki(e){var t=Vr(e);if(wt(t))return e}function op(e,t){if(e==="change")return t}var iu=!1;if(T){var yl;if(T){var wl="oninput"in document;if(!wl){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),wl=typeof ou.oninput=="function"}yl=wl}else yl=!1;iu=yl&&(!document.documentMode||9<document.documentMode)}function lu(){Pn&&(Pn.detachEvent("onpropertychange",su),Tn=Pn=null)}function su(e){if(e.propertyName==="value"&&ki(Tn)){var t=[];nu(t,Tn,e,Jo(e)),_a(ip,t)}}function lp(e,t,r){e==="focusin"?(lu(),Pn=t,Tn=r,Pn.attachEvent("onpropertychange",su)):e==="focusout"&&lu()}function sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Tn)}function ap(e,t){if(e==="click")return ki(t)}function up(e,t){if(e==="input"||e==="change")return ki(t)}function cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:cp;function On(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!C.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var r=au(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=au(r)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oi(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dp(e){var t=du(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&cu(r.ownerDocument.documentElement,r)){if(n!==null&&jl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=uu(r,s);var a=uu(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=T&&"documentMode"in document&&11>=document.documentMode,Br=null,kl=null,Rn=null,Sl=!1;function fu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sl||Br==null||Br!==oi(n)||(n=Br,"selectionStart"in n&&jl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rn&&On(Rn,n)||(Rn=n,n=Ei(kl,"onSelect"),0<n.length&&(t=new pl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Br)))}function Si(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Wr={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Nl={},pu={};T&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Ni(e){if(Nl[e])return Nl[e];if(!Wr[e])return e;var t=Wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in pu)return Nl[e]=t[r];return e}var hu=Ni("animationend"),mu=Ni("animationiteration"),vu=Ni("animationstart"),gu=Ni("transitionend"),xu=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){xu.set(e,t),w(t,[e])}for(var Cl=0;Cl<yu.length;Cl++){var El=yu[Cl],pp=El.toLowerCase(),hp=El[0].toUpperCase()+El.slice(1);Jt(pp,"on"+hp)}Jt(hu,"onAnimationEnd"),Jt(mu,"onAnimationIteration"),Jt(vu,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(gu,"onTransitionEnd"),_("onMouseEnter",["mouseout","mouseover"]),_("onMouseLeave",["mouseout","mouseover"]),_("onPointerEnter",["pointerout","pointerover"]),_("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function wu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,pf(n,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var a=n.length-1;0<=a;a--){var d=n[a],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==s&&i.isPropagationStopped())break e;wu(i,d,y),s=p}else for(a=0;a<n.length;a++){if(d=n[a],p=d.instance,y=d.currentTarget,d=d.listener,p!==s&&i.isPropagationStopped())break e;wu(i,d,y),s=p}}}if(ai)throw e=nl,ai=!1,nl=null,e}function xe(e,t){var r=t[Il];r===void 0&&(r=t[Il]=new Set);var n=e+"__bubble";r.has(n)||(ku(t,e,2,!1),r.add(n))}function _l(e,t,r){var n=0;t&&(n|=4),ku(r,e,n,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[Ci]){e[Ci]=!0,f.forEach(function(r){r!=="selectionchange"&&(mp.has(r)||_l(r,!1,e),_l(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,_l("selectionchange",!1,t))}}function ku(e,t,r,n){switch(ba(t)){case 1:var i=Lf;break;case 4:i=Pf;break;default:i=cl}r=i.bind(null,t,r,e),i=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function zl(e,t,r,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var d=n.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;a=a.return}for(;d!==null;){if(a=xr(d),a===null)return;if(p=a.tag,p===5||p===6){n=s=a;continue e}d=d.parentNode}}n=n.return}_a(function(){var y=s,S=Jo(r),N=[];e:{var k=xu.get(e);if(k!==void 0){var P=pl,R=e;switch(e){case"keypress":if(yi(r)===0)break e;case"keydown":case"keyup":P=bf;break;case"focusin":R="focus",P=vl;break;case"focusout":R="blur",P=vl;break;case"beforeblur":case"afterblur":P=vl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Gf;break;case hu:case mu:case vu:P=Df;break;case gu:P=Kf;break;case"scroll":P=Tf;break;case"wheel":P=Zf;break;case"copy":case"cut":case"paste":P=Af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ka}var I=(t&4)!==0,Ee=!I&&e==="scroll",v=I?k!==null?k+"Capture":null:k;I=[];for(var h=y,x;h!==null;){x=h;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,v!==null&&(E=gn(h,v),E!=null&&I.push(Dn(h,E,x)))),Ee)break;h=h.return}0<I.length&&(k=new P(k,R,null,r,S),N.push({event:k,listeners:I}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",k&&r!==Zo&&(R=r.relatedTarget||r.fromElement)&&(xr(R)||R[At]))break e;if((P||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,P?(R=r.relatedTarget||r.toElement,P=y,R=R?xr(R):null,R!==null&&(Ee=gr(R),R!==Ee||R.tag!==5&&R.tag!==6)&&(R=null)):(P=null,R=y),P!==R)){if(I=Ga,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(I=Ka,E="onPointerLeave",v="onPointerEnter",h="pointer"),Ee=P==null?k:Vr(P),x=R==null?k:Vr(R),k=new I(E,h+"leave",P,r,S),k.target=Ee,k.relatedTarget=x,E=null,xr(S)===y&&(I=new I(v,h+"enter",R,r,S),I.target=x,I.relatedTarget=Ee,E=I),Ee=E,P&&R)t:{for(I=P,v=R,h=0,x=I;x;x=Ur(x))h++;for(x=0,E=v;E;E=Ur(E))x++;for(;0<h-x;)I=Ur(I),h--;for(;0<x-h;)v=Ur(v),x--;for(;h--;){if(I===v||v!==null&&I===v.alternate)break t;I=Ur(I),v=Ur(v)}I=null}else I=null;P!==null&&Su(N,k,P,I,!1),R!==null&&Ee!==null&&Su(N,Ee,R,I,!0)}}e:{if(k=y?Vr(y):window,P=k.nodeName&&k.nodeName.toLowerCase(),P==="select"||P==="input"&&k.type==="file")var F=op;else if(ru(k))if(iu)F=up;else{F=sp;var B=lp}else(P=k.nodeName)&&P.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=ap);if(F&&(F=F(e,y))){nu(N,F,r,S);break e}B&&B(e,k,y),e==="focusout"&&(B=k._wrapperState)&&B.controlled&&k.type==="number"&&Yo(k,"number",k.value)}switch(B=y?Vr(y):window,e){case"focusin":(ru(B)||B.contentEditable==="true")&&(Br=B,kl=y,Rn=null);break;case"focusout":Rn=kl=Br=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,fu(N,r,S);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":fu(N,r,S)}var W;if(xl)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Hr?eu(e,r)&&(V="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(V="onCompositionStart");V&&(Xa&&r.locale!=="ko"&&(Hr||V!=="onCompositionStart"?V==="onCompositionEnd"&&Hr&&(W=Qa()):(Zt=S,fl="value"in Zt?Zt.value:Zt.textContent,Hr=!0)),B=Ei(y,V),0<B.length&&(V=new qa(V,e,null,r,S),N.push({event:V,listeners:B}),W?V.data=W:(W=tu(r),W!==null&&(V.data=W)))),(W=ep?tp(e,r):rp(e,r))&&(y=Ei(y,"onBeforeInput"),0<y.length&&(S=new qa("onBeforeInput","beforeinput",null,r,S),N.push({event:S,listeners:y}),S.data=W))}ju(N,t)})}function Dn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ei(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gn(e,r),s!=null&&n.unshift(Dn(e,s,i)),s=gn(e,t),s!=null&&n.push(Dn(e,s,i))),e=e.return}return n}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,r,n,i){for(var s=t._reactName,a=[];r!==null&&r!==n;){var d=r,p=d.alternate,y=d.stateNode;if(p!==null&&p===n)break;d.tag===5&&y!==null&&(d=y,i?(p=gn(r,s),p!=null&&a.unshift(Dn(r,p,d))):i||(p=gn(r,s),p!=null&&a.push(Dn(r,p,d)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var vp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(gp,"")}function _i(e,t,r){if(t=Nu(t),Nu(e)!==t&&r)throw Error(c(425))}function zi(){}var Ll=null,Pl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu!="undefined"?function(e){return Cu.resolve(null).then(e).catch(wp)}:Ol;function wp(e){setTimeout(function(){throw e})}function Rl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);En(t)}function er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),Tt="__reactFiber$"+$r,Mn="__reactProps$"+$r,At="__reactContainer$"+$r,Il="__reactEvents$"+$r,jp="__reactListeners$"+$r,kp="__reactHandles$"+$r;function xr(e){var t=e[Tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[At]||r[Tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Eu(e);e!==null;){if(r=e[Tt])return r;e=Eu(e)}return t}e=r,r=e.parentNode}return null}function An(e){return e=e[Tt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Li(e){return e[Mn]||null}var Fl=[],br=-1;function tr(e){return{current:e}}function ye(e){0>br||(e.current=Fl[br],Fl[br]=null,br--)}function ge(e,t){br++,Fl[br]=e.current,e.current=t}var rr={},We=tr(rr),Ge=tr(!1),yr=rr;function Qr(e,t){var r=e.type.contextTypes;if(!r)return rr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Pi(){ye(Ge),ye(We)}function _u(e,t,r){if(We.current!==rr)throw Error(c(168));ge(We,t),ge(Ge,r)}function zu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(c(108,fe(e)||"Unknown",i));return L({},r,n)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rr,yr=We.current,ge(We,e),ge(Ge,Ge.current),!0}function Lu(e,t,r){var n=e.stateNode;if(!n)throw Error(c(169));r?(e=zu(e,t,yr),n.__reactInternalMemoizedMergedChildContext=e,ye(Ge),ye(We),ge(We,e)):ye(Ge),ge(Ge,r)}var Ht=null,Oi=!1,Dl=!1;function Pu(e){Ht===null?Ht=[e]:Ht.push(e)}function Sp(e){Oi=!0,Pu(e)}function nr(){if(!Dl&&Ht!==null){Dl=!0;var e=0,t=me;try{var r=Ht;for(me=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ht=null,Oi=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Oa(il,nr),i}finally{me=t,Dl=!1}}return null}var Yr=[],Gr=0,Ri=null,Ii=0,dt=[],ft=0,wr=null,Bt=1,Wt="";function jr(e,t){Yr[Gr++]=Ii,Yr[Gr++]=Ri,Ri=e,Ii=t}function Tu(e,t,r){dt[ft++]=Bt,dt[ft++]=Wt,dt[ft++]=wr,wr=e;var n=Bt;e=Wt;var i=32-jt(n)-1;n&=~(1<<i),r+=1;var s=32-jt(t)+i;if(30<s){var a=i-i%5;s=(n&(1<<a)-1).toString(32),n>>=a,i-=a,Bt=1<<32-jt(t)+i|r<<i|n,Wt=s+e}else Bt=1<<s|r<<i|n,Wt=e}function Ml(e){e.return!==null&&(jr(e,1),Tu(e,1,0))}function Al(e){for(;e===Ri;)Ri=Yr[--Gr],Yr[Gr]=null,Ii=Yr[--Gr],Yr[Gr]=null;for(;e===wr;)wr=dt[--ft],dt[ft]=null,Wt=dt[--ft],dt[ft]=null,Bt=dt[--ft],dt[ft]=null}var it=null,ot=null,je=!1,St=null;function Ou(e,t){var r=vt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ru(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=wr!==null?{id:Bt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=vt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,ot=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(je){var t=ot;if(t){var r=t;if(!Ru(e,t)){if(Hl(e))throw Error(c(418));t=er(r.nextSibling);var n=it;t&&Ru(e,t)?Ou(n,r):(e.flags=e.flags&-4097|2,je=!1,it=e)}}else{if(Hl(e))throw Error(c(418));e.flags=e.flags&-4097|2,je=!1,it=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Fi(e){if(e!==it)return!1;if(!je)return Iu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=ot)){if(Hl(e))throw Fu(),Error(c(418));for(;t;)Ou(e,t),t=er(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ot=er(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?er(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=ot;e;)e=er(e.nextSibling)}function qr(){ot=it=null,je=!1}function Wl(e){St===null?St=[e]:St.push(e)}var Np=J.ReactCurrentBatchConfig;function Hn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var n=r.stateNode}if(!n)throw Error(c(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var d=i.refs;a===null?delete d[s]:d[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function Mu(e){function t(v,h){if(e){var x=v.deletions;x===null?(v.deletions=[h],v.flags|=16):x.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function n(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=dr(v,h),v.index=0,v.sibling=null,v}function s(v,h,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<h?(v.flags|=2,h):x):(v.flags|=2,h)):(v.flags|=1048576,h)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,h,x,E){return h===null||h.tag!==6?(h=Os(x,v.mode,E),h.return=v,h):(h=i(h,x),h.return=v,h)}function p(v,h,x,E){var F=x.type;return F===U?S(v,h,x.props.children,E,x.key):h!==null&&(h.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Du(F)===h.type)?(E=i(h,x.props),E.ref=Hn(v,h,x),E.return=v,E):(E=lo(x.type,x.key,x.props,null,v.mode,E),E.ref=Hn(v,h,x),E.return=v,E)}function y(v,h,x,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Rs(x,v.mode,E),h.return=v,h):(h=i(h,x.children||[]),h.return=v,h)}function S(v,h,x,E,F){return h===null||h.tag!==7?(h=Lr(x,v.mode,E,F),h.return=v,h):(h=i(h,x),h.return=v,h)}function N(v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Os(""+h,v.mode,x),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case de:return x=lo(h.type,h.key,h.props,null,v.mode,x),x.ref=Hn(v,null,h),x.return=v,x;case Y:return h=Rs(h,v.mode,x),h.return=v,h;case Be:var E=h._init;return N(v,E(h._payload),x)}if(hn(h)||D(h))return h=Lr(h,v.mode,x,null),h.return=v,h;Di(v,h)}return null}function k(v,h,x,E){var F=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:d(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case de:return x.key===F?p(v,h,x,E):null;case Y:return x.key===F?y(v,h,x,E):null;case Be:return F=x._init,k(v,h,F(x._payload),E)}if(hn(x)||D(x))return F!==null?null:S(v,h,x,E,null);Di(v,x)}return null}function P(v,h,x,E,F){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(x)||null,d(h,v,""+E,F);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case de:return v=v.get(E.key===null?x:E.key)||null,p(h,v,E,F);case Y:return v=v.get(E.key===null?x:E.key)||null,y(h,v,E,F);case Be:var B=E._init;return P(v,h,x,B(E._payload),F)}if(hn(E)||D(E))return v=v.get(x)||null,S(h,v,E,F,null);Di(h,E)}return null}function R(v,h,x,E){for(var F=null,B=null,W=h,V=h=0,Fe=null;W!==null&&V<x.length;V++){W.index>V?(Fe=W,W=null):Fe=W.sibling;var ce=k(v,W,x[V],E);if(ce===null){W===null&&(W=Fe);break}e&&W&&ce.alternate===null&&t(v,W),h=s(ce,h,V),B===null?F=ce:B.sibling=ce,B=ce,W=Fe}if(V===x.length)return r(v,W),je&&jr(v,V),F;if(W===null){for(;V<x.length;V++)W=N(v,x[V],E),W!==null&&(h=s(W,h,V),B===null?F=W:B.sibling=W,B=W);return je&&jr(v,V),F}for(W=n(v,W);V<x.length;V++)Fe=P(W,v,V,x[V],E),Fe!==null&&(e&&Fe.alternate!==null&&W.delete(Fe.key===null?V:Fe.key),h=s(Fe,h,V),B===null?F=Fe:B.sibling=Fe,B=Fe);return e&&W.forEach(function(fr){return t(v,fr)}),je&&jr(v,V),F}function I(v,h,x,E){var F=D(x);if(typeof F!="function")throw Error(c(150));if(x=F.call(x),x==null)throw Error(c(151));for(var B=F=null,W=h,V=h=0,Fe=null,ce=x.next();W!==null&&!ce.done;V++,ce=x.next()){W.index>V?(Fe=W,W=null):Fe=W.sibling;var fr=k(v,W,ce.value,E);if(fr===null){W===null&&(W=Fe);break}e&&W&&fr.alternate===null&&t(v,W),h=s(fr,h,V),B===null?F=fr:B.sibling=fr,B=fr,W=Fe}if(ce.done)return r(v,W),je&&jr(v,V),F;if(W===null){for(;!ce.done;V++,ce=x.next())ce=N(v,ce.value,E),ce!==null&&(h=s(ce,h,V),B===null?F=ce:B.sibling=ce,B=ce);return je&&jr(v,V),F}for(W=n(v,W);!ce.done;V++,ce=x.next())ce=P(W,v,V,ce.value,E),ce!==null&&(e&&ce.alternate!==null&&W.delete(ce.key===null?V:ce.key),h=s(ce,h,V),B===null?F=ce:B.sibling=ce,B=ce);return e&&W.forEach(function(nh){return t(v,nh)}),je&&jr(v,V),F}function Ee(v,h,x,E){if(typeof x=="object"&&x!==null&&x.type===U&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case de:e:{for(var F=x.key,B=h;B!==null;){if(B.key===F){if(F=x.type,F===U){if(B.tag===7){r(v,B.sibling),h=i(B,x.props.children),h.return=v,v=h;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Be&&Du(F)===B.type){r(v,B.sibling),h=i(B,x.props),h.ref=Hn(v,B,x),h.return=v,v=h;break e}r(v,B);break}else t(v,B);B=B.sibling}x.type===U?(h=Lr(x.props.children,v.mode,E,x.key),h.return=v,v=h):(E=lo(x.type,x.key,x.props,null,v.mode,E),E.ref=Hn(v,h,x),E.return=v,v=E)}return a(v);case Y:e:{for(B=x.key;h!==null;){if(h.key===B)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){r(v,h.sibling),h=i(h,x.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=Rs(x,v.mode,E),h.return=v,v=h}return a(v);case Be:return B=x._init,Ee(v,h,B(x._payload),E)}if(hn(x))return R(v,h,x,E);if(D(x))return I(v,h,x,E);Di(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(r(v,h.sibling),h=i(h,x),h.return=v,v=h):(r(v,h),h=Os(x,v.mode,E),h.return=v,v=h),a(v)):r(v,h)}return Ee}var Kr=Mu(!0),Au=Mu(!1),Mi=tr(null),Ai=null,Xr=null,Ul=null;function $l(){Ul=Xr=Ai=null}function Vl(e){var t=Mi.current;ye(Mi),e._currentValue=t}function bl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Zr(e,t){Ai=e,Ul=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},Xr===null){if(Ai===null)throw Error(c(308));Xr=e,Ai.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return t}var kr=null;function Ql(e){kr===null?kr=[e]:kr.push(e)}function Hu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ql(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ut(e,n)}function Ut(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ae&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ut(e,r)}return i=n.interleaved,i===null?(t.next=t,Ql(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ut(e,r)}function Hi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,sl(e,r)}}function Wu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=a:s=s.next=a,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Bi(e,t,r,n){var i=e.updateQueue;ir=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,y=p.next;p.next=null,a===null?s=y:a.next=y,a=p;var S=e.alternate;S!==null&&(S=S.updateQueue,d=S.lastBaseUpdate,d!==a&&(d===null?S.firstBaseUpdate=y:d.next=y,S.lastBaseUpdate=p))}if(s!==null){var N=i.baseState;a=0,S=y=p=null,d=s;do{var k=d.lane,P=d.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:P,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var R=e,I=d;switch(k=t,P=r,I.tag){case 1:if(R=I.payload,typeof R=="function"){N=R.call(P,N,k);break e}N=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=I.payload,k=typeof R=="function"?R.call(P,N,k):R,k==null)break e;N=L({},N,k);break e;case 2:ir=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[d]:k.push(d))}else P={eventTime:P,lane:k,tag:d.tag,payload:d.payload,callback:d.callback,next:null},S===null?(y=S=P,p=N):S=S.next=P,a|=k;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;k=d,d=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(p=N),i.baseState=p,i.firstBaseUpdate=y,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Cr|=a,e.lanes=a,e.memoizedState=N}}function Uu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(c(191,i));i.call(n)}}}var Bn={},Ot=tr(Bn),Wn=tr(Bn),Un=tr(Bn);function Sr(e){if(e===Bn)throw Error(c(174));return e}function Gl(e,t){switch(ge(Un,t),ge(Wn,e),ge(Ot,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qo(t,e)}ye(Ot),ge(Ot,t)}function Jr(){ye(Ot),ye(Wn),ye(Un)}function $u(e){Sr(Un.current);var t=Sr(Ot.current),r=qo(t,e.type);t!==r&&(ge(Wn,e),ge(Ot,r))}function ql(e){Wn.current===e&&(ye(Ot),ye(Wn))}var ke=tr(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Xl(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var Ui=J.ReactCurrentDispatcher,Zl=J.ReactCurrentBatchConfig,Nr=0,Se=null,Te=null,Re=null,$i=!1,$n=!1,Vn=0,Cp=0;function Ue(){throw Error(c(321))}function Jl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function es(e,t,r,n,i,s){if(Nr=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Lp:Pp,e=r(n,i),$n){s=0;do{if($n=!1,Vn=0,25<=s)throw Error(c(301));s+=1,Re=Te=null,t.updateQueue=null,Ui.current=Tp,e=r(n,i)}while($n)}if(Ui.current=Qi,t=Te!==null&&Te.next!==null,Nr=0,Re=Te=Se=null,$i=!1,t)throw Error(c(300));return e}function ts(){var e=Vn!==0;return Vn=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Se.memoizedState=Re=e:Re=Re.next=e,Re}function ht(){if(Te===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Re===null?Se.memoizedState:Re.next;if(t!==null)Re=t,Te=e;else{if(e===null)throw Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Re===null?Se.memoizedState=Re=e:Re=Re.next=e}return Re}function bn(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=ht(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=Te,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var d=a=null,p=null,y=s;do{var S=y.lane;if((Nr&S)===S)p!==null&&(p=p.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var N={lane:S,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};p===null?(d=p=N,a=n):p=p.next=N,Se.lanes|=S,Cr|=S}y=y.next}while(y!==null&&y!==s);p===null?a=n:p.next=d,kt(n,t.memoizedState)||(Ke=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=p,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Se.lanes|=s,Cr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ns(e){var t=ht(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);kt(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Vu(){}function bu(e,t){var r=Se,n=ht(),i=t(),s=!kt(n.memoizedState,i);if(s&&(n.memoizedState=i,Ke=!0),n=n.queue,is(Gu.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Re!==null&&Re.memoizedState.tag&1){if(r.flags|=2048,Qn(9,Yu.bind(null,r,n,i,t),void 0,null),Ie===null)throw Error(c(349));(Nr&30)!==0||Qu(r,t,i)}return i}function Qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Yu(e,t,r,n){t.value=r,t.getSnapshot=n,qu(t)&&Ku(e)}function Gu(e,t,r){return r(function(){qu(t)&&Ku(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function Ku(e){var t=Ut(e,1);t!==null&&_t(t,e,1,-1)}function Xu(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,Se,e),[t.memoizedState,e]}function Qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Zu(){return ht().memoizedState}function Vi(e,t,r,n){var i=Rt();Se.flags|=e,i.memoizedState=Qn(1|t,r,void 0,n===void 0?null:n)}function bi(e,t,r,n){var i=ht();n=n===void 0?null:n;var s=void 0;if(Te!==null){var a=Te.memoizedState;if(s=a.destroy,n!==null&&Jl(n,a.deps)){i.memoizedState=Qn(t,r,s,n);return}}Se.flags|=e,i.memoizedState=Qn(1|t,r,s,n)}function Ju(e,t){return Vi(8390656,8,e,t)}function is(e,t){return bi(2048,8,e,t)}function ec(e,t){return bi(4,2,e,t)}function tc(e,t){return bi(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,r){return r=r!=null?r.concat([e]):null,bi(4,4,rc.bind(null,t,e),r)}function os(){}function ic(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function oc(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function lc(e,t,r){return(Nr&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=r):(kt(r,t)||(r=Da(),Se.lanes|=r,Cr|=r,e.baseState=!0),t)}function Ep(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var n=Zl.transition;Zl.transition={};try{e(!1),t()}finally{me=r,Zl.transition=n}}function sc(){return ht().memoizedState}function _p(e,t,r){var n=ur(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ac(e))uc(t,r);else if(r=Hu(e,t,r,n),r!==null){var i=Ye();_t(r,e,n,i),cc(r,t,n)}}function zp(e,t,r){var n=ur(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ac(e))uc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,d=s(a,r);if(i.hasEagerState=!0,i.eagerState=d,kt(d,a)){var p=t.interleaved;p===null?(i.next=i,Ql(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}r=Hu(e,t,i,n),r!==null&&(i=Ye(),_t(r,e,n,i),cc(r,t,n))}}function ac(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function uc(e,t){$n=$i=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cc(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,sl(e,r)}}var Qi={readContext:pt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Lp={readContext:pt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Ju,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Vi(4194308,4,rc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var r=Rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=_p.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Xu,useDebugValue:os,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Xu(!1),t=e[0];return e=Ep.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Se,i=Rt();if(je){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ie===null)throw Error(c(349));(Nr&30)!==0||Qu(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Ju(Gu.bind(null,n,s,e),[e]),n.flags|=2048,Qn(9,Yu.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Rt(),t=Ie.identifierPrefix;if(je){var r=Wt,n=Bt;r=(n&~(1<<32-jt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Cp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:pt,useCallback:ic,useContext:pt,useEffect:is,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:oc,useReducer:rs,useRef:Zu,useState:function(){return rs(bn)},useDebugValue:os,useDeferredValue:function(e){var t=ht();return lc(t,Te.memoizedState,e)},useTransition:function(){var e=rs(bn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:bu,useId:sc,unstable_isNewReconciler:!1},Tp={readContext:pt,useCallback:ic,useContext:pt,useEffect:is,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:oc,useReducer:ns,useRef:Zu,useState:function(){return ns(bn)},useDebugValue:os,useDeferredValue:function(e){var t=ht();return Te===null?t.memoizedState=e:lc(t,Te.memoizedState,e)},useTransition:function(){var e=ns(bn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:bu,useId:sc,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ls(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:L({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Yi={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ye(),i=ur(e),s=$t(n,i);s.payload=t,r!=null&&(s.callback=r),t=or(e,s,i),t!==null&&(_t(t,e,i,n),Hi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ye(),i=ur(e),s=$t(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=or(e,s,i),t!==null&&(_t(t,e,i,n),Hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ye(),n=ur(e),i=$t(r,n);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,n),t!==null&&(_t(t,e,n,r),Hi(t,e,n))}};function dc(e,t,r,n,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,a):t.prototype&&t.prototype.isPureReactComponent?!On(r,n)||!On(i,s):!0}function fc(e,t,r){var n=!1,i=rr,s=t.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=qe(t)?yr:We.current,n=t.contextTypes,s=(n=n!=null)?Qr(e,i):rr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function pc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function ss(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Yl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=qe(t)?yr:We.current,i.context=Qr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ls(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yi.enqueueReplaceState(i,i.state,null),Bi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,t){try{var r="",n=t;do r+=ne(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function as(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function us(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Op=typeof WeakMap=="function"?WeakMap:Map;function hc(e,t,r){r=$t(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){eo||(eo=!0,Ns=n),us(e,t)},r}function mc(e,t,r){r=$t(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){us(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){us(e,t),typeof n!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function vc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Op;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Qp.bind(null,e,t,r),t.then(e,e))}function gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xc(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=$t(-1,1),t.tag=2,or(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Rp=J.ReactCurrentOwner,Ke=!1;function Qe(e,t,r,n){t.child=e===null?Au(t,null,r,n):Kr(t,e.child,r,n)}function yc(e,t,r,n,i){r=r.render;var s=t.ref;return Zr(t,i),n=es(e,t,r,n,s,i),r=ts(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(je&&r&&Ml(t),t.flags|=1,Qe(e,t,n,i),t.child)}function wc(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Ts(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,jc(e,t,s,n,i)):(e=lo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var a=s.memoizedProps;if(r=r.compare,r=r!==null?r:On,r(a,n)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=dr(s,n),e.ref=t.ref,e.return=t,t.child=e}function jc(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(On(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return cs(e,t,r,n,i)}function kc(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(rn,lt),lt|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(rn,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ge(rn,lt),lt|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ge(rn,lt),lt|=n;return Qe(e,t,i,r),t.child}function Sc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,r,n,i){var s=qe(r)?yr:We.current;return s=Qr(t,s),Zr(t,i),r=es(e,t,r,n,s,i),n=ts(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(je&&n&&Ml(t),t.flags|=1,Qe(e,t,r,i),t.child)}function Nc(e,t,r,n,i){if(qe(r)){var s=!0;Ti(t)}else s=!1;if(Zr(t,i),t.stateNode===null)qi(e,t),fc(t,r,n),ss(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,d=t.memoizedProps;a.props=d;var p=a.context,y=r.contextType;typeof y=="object"&&y!==null?y=pt(y):(y=qe(r)?yr:We.current,y=Qr(t,y));var S=r.getDerivedStateFromProps,N=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function";N||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==n||p!==y)&&pc(t,a,n,y),ir=!1;var k=t.memoizedState;a.state=k,Bi(t,n,a,i),p=t.memoizedState,d!==n||k!==p||Ge.current||ir?(typeof S=="function"&&(ls(t,r,S,n),p=t.memoizedState),(d=ir||dc(t,r,d,n,k,p,y))?(N||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),a.props=n,a.state=p,a.context=y,n=d):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Bu(e,t),d=t.memoizedProps,y=t.type===t.elementType?d:Nt(t.type,d),a.props=y,N=t.pendingProps,k=a.context,p=r.contextType,typeof p=="object"&&p!==null?p=pt(p):(p=qe(r)?yr:We.current,p=Qr(t,p));var P=r.getDerivedStateFromProps;(S=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==N||k!==p)&&pc(t,a,n,p),ir=!1,k=t.memoizedState,a.state=k,Bi(t,n,a,i);var R=t.memoizedState;d!==N||k!==R||Ge.current||ir?(typeof P=="function"&&(ls(t,r,P,n),R=t.memoizedState),(y=ir||dc(t,r,y,n,k,R,p)||!1)?(S||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,R,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,R,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=R),a.props=n,a.state=R,a.context=p,n=y):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return ds(e,t,r,n,s,i)}function ds(e,t,r,n,i,s){Sc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&Lu(t,r,!1),Vt(e,t,s);n=t.stateNode,Rp.current=t;var d=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,s),t.child=Kr(t,null,d,s)):Qe(e,t,d,s),t.memoizedState=n.state,i&&Lu(t,r,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?_u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_u(e,t.context,!1),Gl(e,t.containerInfo)}function Ec(e,t,r,n,i){return qr(),Wl(i),t.flags|=256,Qe(e,t,r,n),t.child}var fs={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,r){var n=t.pendingProps,i=ke.current,s=!1,a=(t.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ke,i&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=n.children,e=n.fallback,s?(n=t.mode,s=t.child,a={mode:"hidden",children:a},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=so(a,n,0,null),e=Lr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ps(r),t.memoizedState=fs,e):hs(t,a));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Ip(e,t,a,n,d,i,r);if(s){s=n.fallback,a=t.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:n.children};return(a&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=p,t.deletions=null):(n=dr(i,p),n.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=dr(d,s):(s=Lr(s,a,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,a=e.child.memoizedState,a=a===null?ps(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~r,t.memoizedState=fs,n}return s=e.child,e=s.sibling,n=dr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function hs(e,t){return t=so({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,r,n){return n!==null&&Wl(n),Kr(t,e.child,null,r),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,r,n,i,s,a){if(r)return t.flags&256?(t.flags&=-257,n=as(Error(c(422))),Gi(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=so({mode:"visible",children:n.children},i,0,null),s=Lr(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&Kr(t,e.child,null,a),t.child.memoizedState=ps(a),t.memoizedState=fs,s);if((t.mode&1)===0)return Gi(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var d=n.dgst;return n=d,s=Error(c(419)),n=as(s,n,void 0),Gi(e,t,a,n)}if(d=(a&e.childLanes)!==0,Ke||d){if(n=Ie,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|a))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(e,i),_t(n,e,i,-1))}return Ps(),n=as(Error(c(421))),Gi(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ot=er(i.nextSibling),it=t,je=!0,St=null,e!==null&&(dt[ft++]=Bt,dt[ft++]=Wt,dt[ft++]=wr,Bt=e.id,Wt=e.overflow,wr=t),t=hs(t,n.children),t.flags|=4096,t)}function zc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),bl(e.return,t,r)}function ms(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Lc(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Qe(e,t,n.children,r),n=ke.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,r,t);else if(e.tag===19)zc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ge(ke,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Wi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ms(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ms(t,!0,r,null,s);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=dr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Fp(e,t,r){switch(t.tag){case 3:Cc(t),qr();break;case 5:$u(t);break;case 1:qe(t.type)&&Ti(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ge(Mi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?_c(e,t,r):(ge(ke,ke.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Lc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),n)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,r)}return Vt(e,t,r)}var Pc,vs,Tc,Oc;Pc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},vs=function(){},Tc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Sr(Ot.current);var s=null;switch(r){case"input":i=bo(e,i),n=bo(e,n),s=[];break;case"select":i=L({},i,{value:void 0}),n=L({},n,{value:void 0}),s=[];break;case"textarea":i=Go(e,i),n=Go(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=zi)}Ko(r,n);var a;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var d=i[y];for(a in d)d.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in n){var p=n[y];if(d=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&p!==d&&(p!=null||d!=null))if(y==="style")if(d){for(a in d)!d.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in p)p.hasOwnProperty(a)&&d[a]!==p[a]&&(r||(r={}),r[a]=p[a])}else r||(s||(s=[]),s.push(y,r)),r=p;else y==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(s=s||[]).push(y,p)):y==="children"?typeof p!="string"&&typeof p!="number"||(s=s||[]).push(y,""+p):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(p!=null&&y==="onScroll"&&xe("scroll",e),s||d===p||(s=[])):(s=s||[]).push(y,p))}r&&(s=s||[]).push("style",r);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},Oc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Yn(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Dp(e,t,r){var n=t.pendingProps;switch(Al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return qe(t.type)&&Pi(),$e(t),null;case 3:return n=t.stateNode,Jr(),ye(Ge),ye(We),Xl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(_s(St),St=null))),vs(e,t),$e(t),null;case 5:ql(t);var i=Sr(Un.current);if(r=t.type,e!==null&&t.stateNode!=null)Tc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(c(166));return $e(t),null}if(e=Sr(Ot.current),Fi(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Tt]=t,n[Mn]=s,e=(t.mode&1)!==0,r){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(i=0;i<In.length;i++)xe(In[i],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":fa(n,s),xe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},xe("invalid",n);break;case"textarea":ma(n,s),xe("invalid",n)}Ko(r,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var d=s[a];a==="children"?typeof d=="string"?n.textContent!==d&&(s.suppressHydrationWarning!==!0&&_i(n.textContent,d,e),i=["children",d]):typeof d=="number"&&n.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&_i(n.textContent,d,e),i=["children",""+d]):g.hasOwnProperty(a)&&d!=null&&a==="onScroll"&&xe("scroll",n)}switch(r){case"input":Mt(n),ha(n,s,!0);break;case"textarea":Mt(n),ga(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=zi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xa(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Tt]=t,e[Mn]=n,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Xo(r,n),r){case"dialog":xe("cancel",e),xe("close",e),i=n;break;case"iframe":case"object":case"embed":xe("load",e),i=n;break;case"video":case"audio":for(i=0;i<In.length;i++)xe(In[i],e);i=n;break;case"source":xe("error",e),i=n;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=n;break;case"details":xe("toggle",e),i=n;break;case"input":fa(e,n),i=bo(e,n),xe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=L({},n,{value:void 0}),xe("invalid",e);break;case"textarea":ma(e,n),i=Go(e,n),xe("invalid",e);break;default:i=n}Ko(r,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var p=d[s];s==="style"?ja(e,p):s==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ya(e,p)):s==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&mn(e,p):typeof p=="number"&&mn(e,""+p):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(g.hasOwnProperty(s)?p!=null&&s==="onScroll"&&xe("scroll",e):p!=null&&oe(e,s,p,a))}switch(r){case"input":Mt(e),ha(e,n,!1);break;case"textarea":Mt(e),ga(e);break;case"option":n.value!=null&&e.setAttribute("value",""+le(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ir(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ir(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(r=Sr(Un.current),Sr(Ot.current),Fi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Tt]=t,(s=n.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:_i(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Tt]=t,t.stateNode=n}return $e(t),null;case 13:if(ye(ke),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Fu(),qr(),t.flags|=98560,s=!1;else if(s=Fi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Tt]=t}else qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else St!==null&&(_s(St),St=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Oe===0&&(Oe=3):Ps())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Jr(),vs(e,t),e===null&&Fn(t.stateNode.containerInfo),$e(t),null;case 10:return Vl(t.type._context),$e(t),null;case 17:return qe(t.type)&&Pi(),$e(t),null;case 19:if(ye(ke),s=t.memoizedState,s===null)return $e(t),null;if(n=(t.flags&128)!==0,a=s.rendering,a===null)if(n)Yn(s,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Wi(e),a!==null){for(t.flags|=128,Yn(s,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ce()>nn&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Wi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!je)return $e(t),null}else 2*Ce()-s.renderingStartTime>nn&&r!==1073741824&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(r=s.last,r!==null?r.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ce(),t.sibling=null,r=ke.current,ge(ke,n?r&1|2:r&1),t):($e(t),null);case 22:case 23:return Ls(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(lt&1073741824)!==0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Mp(e,t){switch(Al(t),t.tag){case 1:return qe(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),ye(Ge),ye(We),Xl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ql(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return Jr(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var Ki=!1,Ve=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,O=null;function tn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ne(e,t,n)}else r.current=null}function gs(e,t,r){try{r()}catch(n){Ne(e,t,n)}}var Rc=!1;function Hp(e,t){if(Ll=vi,e=du(),jl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var a=0,d=-1,p=-1,y=0,S=0,N=e,k=null;t:for(;;){for(var P;N!==r||i!==0&&N.nodeType!==3||(d=a+i),N!==s||n!==0&&N.nodeType!==3||(p=a+n),N.nodeType===3&&(a+=N.nodeValue.length),(P=N.firstChild)!==null;)k=N,N=P;for(;;){if(N===e)break t;if(k===r&&++y===i&&(d=a),k===s&&++S===n&&(p=a),(P=N.nextSibling)!==null)break;N=k,k=N.parentNode}N=P}r=d===-1||p===-1?null:{start:d,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pl={focusedElem:e,selectionRange:r},vi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var R=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var I=R.memoizedProps,Ee=R.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?I:Nt(t.type,I),Ee);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(E){Ne(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return R=Rc,Rc=!1,R}function Gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&gs(t,r,s)}i=i.next}while(i!==n)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function xs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ic(e){var t=e.alternate;t!==null&&(e.alternate=null,Ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Mn],delete t[Il],delete t[jp],delete t[kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=zi));else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,r),e=e.sibling;e!==null;)ys(e,t,r),e=e.sibling}function ws(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ws(e,t,r),e=e.sibling;e!==null;)ws(e,t,r),e=e.sibling}var Ae=null,Ct=!1;function lr(e,t,r){for(r=r.child;r!==null;)Mc(e,t,r),r=r.sibling}function Mc(e,t,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ci,r)}catch{}switch(r.tag){case 5:Ve||tn(r,t);case 6:var n=Ae,i=Ct;Ae=null,lr(e,t,r),Ae=n,Ct=i,Ae!==null&&(Ct?(e=Ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ae.removeChild(r.stateNode));break;case 18:Ae!==null&&(Ct?(e=Ae,r=r.stateNode,e.nodeType===8?Rl(e.parentNode,r):e.nodeType===1&&Rl(e,r),En(e)):Rl(Ae,r.stateNode));break;case 4:n=Ae,i=Ct,Ae=r.stateNode.containerInfo,Ct=!0,lr(e,t,r),Ae=n,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&gs(r,t,a),i=i.next}while(i!==n)}lr(e,t,r);break;case 1:if(!Ve&&(tn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(d){Ne(r,t,d)}lr(e,t,r);break;case 21:lr(e,t,r);break;case 22:r.mode&1?(Ve=(n=Ve)||r.memoizedState!==null,lr(e,t,r),Ve=n):lr(e,t,r);break;default:lr(e,t,r)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ap),t.forEach(function(n){var i=Gp.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,a=t,d=a;e:for(;d!==null;){switch(d.tag){case 5:Ae=d.stateNode,Ct=!1;break e;case 3:Ae=d.stateNode.containerInfo,Ct=!0;break e;case 4:Ae=d.stateNode.containerInfo,Ct=!0;break e}d=d.return}if(Ae===null)throw Error(c(160));Mc(s,a,i),Ae=null,Ct=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(y){Ne(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),It(e),n&4){try{Gn(3,e,e.return),Xi(3,e)}catch(I){Ne(e,e.return,I)}try{Gn(5,e,e.return)}catch(I){Ne(e,e.return,I)}}break;case 1:Et(t,e),It(e),n&512&&r!==null&&tn(r,r.return);break;case 5:if(Et(t,e),It(e),n&512&&r!==null&&tn(r,r.return),e.flags&32){var i=e.stateNode;try{mn(i,"")}catch(I){Ne(e,e.return,I)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=r!==null?r.memoizedProps:s,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&pa(i,s),Xo(d,a);var y=Xo(d,s);for(a=0;a<p.length;a+=2){var S=p[a],N=p[a+1];S==="style"?ja(i,N):S==="dangerouslySetInnerHTML"?ya(i,N):S==="children"?mn(i,N):oe(i,S,N,y)}switch(d){case"input":Qo(i,s);break;case"textarea":va(i,s);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?Ir(i,!!s.multiple,P,!1):k!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mn]=s}catch(I){Ne(e,e.return,I)}}break;case 6:if(Et(t,e),It(e),n&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(I){Ne(e,e.return,I)}}break;case 3:if(Et(t,e),It(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(I){Ne(e,e.return,I)}break;case 4:Et(t,e),It(e);break;case 13:Et(t,e),It(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ss=Ce())),n&4&&Ac(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Ve=(y=Ve)||S,Et(t,e),Ve=y):Et(t,e),It(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!S&&(e.mode&1)!==0)for(O=e,S=e.child;S!==null;){for(N=O=S;O!==null;){switch(k=O,P=k.child,k.tag){case 0:case 11:case 14:case 15:Gn(4,k,k.return);break;case 1:tn(k,k.return);var R=k.stateNode;if(typeof R.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(I){Ne(n,r,I)}}break;case 5:tn(k,k.return);break;case 22:if(k.memoizedState!==null){Uc(N);continue}}P!==null?(P.return=k,O=P):Uc(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{i=N.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=N.stateNode,p=N.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=wa("display",a))}catch(I){Ne(e,e.return,I)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=y?"":N.memoizedProps}catch(I){Ne(e,e.return,I)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Et(t,e),It(e),n&4&&Ac(e);break;case 21:break;default:Et(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fc(r)){var n=r;break e}r=r.return}throw Error(c(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(mn(i,""),n.flags&=-33);var s=Dc(e);ws(e,s,i);break;case 3:case 4:var a=n.stateNode.containerInfo,d=Dc(e);ys(e,d,a);break;default:throw Error(c(161))}}catch(p){Ne(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e,t,r){O=e,Bc(e)}function Bc(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||Ki;if(!a){var d=i.alternate,p=d!==null&&d.memoizedState!==null||Ve;d=Ki;var y=Ve;if(Ki=a,(Ve=p)&&!y)for(O=i;O!==null;)a=O,p=a.child,a.tag===22&&a.memoizedState!==null?$c(i):p!==null?(p.return=a,O=p):$c(i);for(;s!==null;)O=s,Bc(s),s=s.sibling;O=i,Ki=d,Ve=y}Wc(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,O=s):Wc(e)}}function Wc(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Xi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ve)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uu(t,s,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Uu(t,a,r)}break;case 5:var d=t.stateNode;if(r===null&&t.flags&4){r=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var S=y.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&En(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ve||t.flags&512&&xs(t)}catch(k){Ne(t,t.return,k)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Uc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function $c(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xi(4,t)}catch(p){Ne(t,r,p)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(p){Ne(t,i,p)}}var s=t.return;try{xs(t)}catch(p){Ne(t,s,p)}break;case 5:var a=t.return;try{xs(t)}catch(p){Ne(t,a,p)}}}catch(p){Ne(t,t.return,p)}if(t===e){O=null;break}var d=t.sibling;if(d!==null){d.return=t.return,O=d;break}O=t.return}}var Wp=Math.ceil,Zi=J.ReactCurrentDispatcher,js=J.ReactCurrentOwner,mt=J.ReactCurrentBatchConfig,ae=0,Ie=null,_e=null,He=0,lt=0,rn=tr(0),Oe=0,qn=null,Cr=0,Ji=0,ks=0,Kn=null,Xe=null,Ss=0,nn=1/0,bt=null,eo=!1,Ns=null,sr=null,to=!1,ar=null,ro=0,Xn=0,Cs=null,no=-1,io=0;function Ye(){return(ae&6)!==0?Ce():no!==-1?no:no=Ce()}function ur(e){return(e.mode&1)===0?1:(ae&2)!==0&&He!==0?He&-He:Np.transition!==null?(io===0&&(io=Da()),io):(e=me,e!==0||(e=window.event,e=e===void 0?16:ba(e.type)),e)}function _t(e,t,r,n){if(50<Xn)throw Xn=0,Cs=null,Error(c(185));jn(e,r,n),((ae&2)===0||e!==Ie)&&(e===Ie&&((ae&2)===0&&(Ji|=r),Oe===4&&cr(e,He)),Ze(e,n),r===1&&ae===0&&(t.mode&1)===0&&(nn=Ce()+500,Oi&&nr()))}function Ze(e,t){var r=e.callbackNode;Nf(e,t);var n=pi(e,e===Ie?He:0);if(n===0)r!==null&&Ra(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ra(r),t===1)e.tag===0?Sp(bc.bind(null,e)):Pu(bc.bind(null,e)),yp(function(){(ae&6)===0&&nr()}),r=null;else{switch(Ma(n)){case 1:r=il;break;case 4:r=Ia;break;case 16:r=ui;break;case 536870912:r=Fa;break;default:r=ui}r=Jc(r,Vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vc(e,t){if(no=-1,io=0,(ae&6)!==0)throw Error(c(327));var r=e.callbackNode;if(on()&&e.callbackNode!==r)return null;var n=pi(e,e===Ie?He:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=oo(e,n);else{t=n;var i=ae;ae|=2;var s=Yc();(Ie!==e||He!==t)&&(bt=null,nn=Ce()+500,_r(e,t));do try{Vp();break}catch(d){Qc(e,d)}while(!0);$l(),Zi.current=s,ae=i,_e!==null?t=0:(Ie=null,He=0,t=Oe)}if(t!==0){if(t===2&&(i=ol(e),i!==0&&(n=i,t=Es(e,i))),t===1)throw r=qn,_r(e,0),cr(e,n),Ze(e,Ce()),r;if(t===6)cr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Up(i)&&(t=oo(e,n),t===2&&(s=ol(e),s!==0&&(n=s,t=Es(e,s))),t===1))throw r=qn,_r(e,0),cr(e,n),Ze(e,Ce()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(c(345));case 2:zr(e,Xe,bt);break;case 3:if(cr(e,n),(n&130023424)===n&&(t=Ss+500-Ce(),10<t)){if(pi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(zr.bind(null,e,Xe,bt),t);break}zr(e,Xe,bt);break;case 4:if(cr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-jt(n);s=1<<a,a=t[a],a>i&&(i=a),n&=~s}if(n=i,n=Ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Wp(n/1960))-n,10<n){e.timeoutHandle=Ol(zr.bind(null,e,Xe,bt),n);break}zr(e,Xe,bt);break;case 5:zr(e,Xe,bt);break;default:throw Error(c(329))}}}return Ze(e,Ce()),e.callbackNode===r?Vc.bind(null,e):null}function Es(e,t){var r=Kn;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Xe,Xe=r,t!==null&&_s(t)),e}function _s(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cr(e,t){for(t&=~ks,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),n=1<<r;e[r]=-1,t&=~n}}function bc(e){if((ae&6)!==0)throw Error(c(327));on();var t=pi(e,0);if((t&1)===0)return Ze(e,Ce()),null;var r=oo(e,t);if(e.tag!==0&&r===2){var n=ol(e);n!==0&&(t=n,r=Es(e,n))}if(r===1)throw r=qn,_r(e,0),cr(e,t),Ze(e,Ce()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,Xe,bt),Ze(e,Ce()),null}function zs(e,t){var r=ae;ae|=1;try{return e(t)}finally{ae=r,ae===0&&(nn=Ce()+500,Oi&&nr())}}function Er(e){ar!==null&&ar.tag===0&&(ae&6)===0&&on();var t=ae;ae|=1;var r=mt.transition,n=me;try{if(mt.transition=null,me=1,e)return e()}finally{me=n,mt.transition=r,ae=t,(ae&6)===0&&nr()}}function Ls(){lt=rn.current,ye(rn)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,xp(r)),_e!==null)for(r=_e.return;r!==null;){var n=r;switch(Al(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Pi();break;case 3:Jr(),ye(Ge),ye(We),Xl();break;case 5:ql(n);break;case 4:Jr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Vl(n.type._context);break;case 22:case 23:Ls()}r=r.return}if(Ie=e,_e=e=dr(e.current,null),He=lt=t,Oe=0,qn=null,ks=Ji=Cr=0,Xe=Kn=null,kr!==null){for(t=0;t<kr.length;t++)if(r=kr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var a=s.next;s.next=i,n.next=a}r.pending=n}kr=null}return e}function Qc(e,t){do{var r=_e;try{if($l(),Ui.current=Qi,$i){for(var n=Se.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}$i=!1}if(Nr=0,Re=Te=Se=null,$n=!1,Vn=0,js.current=null,r===null||r.return===null){Oe=1,qn=t,_e=null;break}e:{var s=e,a=r.return,d=r,p=t;if(t=He,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var y=p,S=d,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var P=gc(a);if(P!==null){P.flags&=-257,xc(P,a,d,s,t),P.mode&1&&vc(s,y,t),t=P,p=y;var R=t.updateQueue;if(R===null){var I=new Set;I.add(p),t.updateQueue=I}else R.add(p);break e}else{if((t&1)===0){vc(s,y,t),Ps();break e}p=Error(c(426))}}else if(je&&d.mode&1){var Ee=gc(a);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),xc(Ee,a,d,s,t),Wl(en(p,d));break e}}s=p=en(p,d),Oe!==4&&(Oe=2),Kn===null?Kn=[s]:Kn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=hc(s,p,t);Wu(s,v);break e;case 1:d=p;var h=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(sr===null||!sr.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=mc(s,d,t);Wu(s,E);break e}}s=s.return}while(s!==null)}qc(r)}catch(F){t=F,_e===r&&r!==null&&(_e=r=r.return);continue}break}while(!0)}function Yc(){var e=Zi.current;return Zi.current=Qi,e===null?Qi:e}function Ps(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ie===null||(Cr&268435455)===0&&(Ji&268435455)===0||cr(Ie,He)}function oo(e,t){var r=ae;ae|=2;var n=Yc();(Ie!==e||He!==t)&&(bt=null,_r(e,t));do try{$p();break}catch(i){Qc(e,i)}while(!0);if($l(),ae=r,Zi.current=n,_e!==null)throw Error(c(261));return Ie=null,He=0,Oe}function $p(){for(;_e!==null;)Gc(_e)}function Vp(){for(;_e!==null&&!mf();)Gc(_e)}function Gc(e){var t=Zc(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?qc(e):_e=t,js.current=null}function qc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Dp(r,t,lt),r!==null){_e=r;return}}else{if(r=Mp(r,t),r!==null){r.flags&=32767,_e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Oe===0&&(Oe=5)}function zr(e,t,r){var n=me,i=mt.transition;try{mt.transition=null,me=1,bp(e,t,r,n)}finally{mt.transition=i,me=n}return null}function bp(e,t,r,n){do on();while(ar!==null);if((ae&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Cf(e,s),e===Ie&&(_e=Ie=null,He=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||to||(to=!0,Jc(ui,function(){return on(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=mt.transition,mt.transition=null;var a=me;me=1;var d=ae;ae|=4,js.current=null,Hp(e,r),Hc(r,e),dp(Pl),vi=!!Ll,Pl=Ll=null,e.current=r,Bp(r),vf(),ae=d,me=a,mt.transition=s}else e.current=r;if(to&&(to=!1,ar=e,ro=i),s=e.pendingLanes,s===0&&(sr=null),yf(r.stateNode),Ze(e,Ce()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=Ns,Ns=null,e;return(ro&1)!==0&&e.tag!==0&&on(),s=e.pendingLanes,(s&1)!==0?e===Cs?Xn++:(Xn=0,Cs=e):Xn=0,nr(),null}function on(){if(ar!==null){var e=Ma(ro),t=mt.transition,r=me;try{if(mt.transition=null,me=16>e?16:e,ar===null)var n=!1;else{if(e=ar,ar=null,ro=0,(ae&6)!==0)throw Error(c(331));var i=ae;for(ae|=4,O=e.current;O!==null;){var s=O,a=s.child;if((O.flags&16)!==0){var d=s.deletions;if(d!==null){for(var p=0;p<d.length;p++){var y=d[p];for(O=y;O!==null;){var S=O;switch(S.tag){case 0:case 11:case 15:Gn(8,S,s)}var N=S.child;if(N!==null)N.return=S,O=N;else for(;O!==null;){S=O;var k=S.sibling,P=S.return;if(Ic(S),S===y){O=null;break}if(k!==null){k.return=P,O=k;break}O=P}}}var R=s.alternate;if(R!==null){var I=R.child;if(I!==null){R.child=null;do{var Ee=I.sibling;I.sibling=null,I=Ee}while(I!==null)}}O=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,O=a;else e:for(;O!==null;){if(s=O,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Gn(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,O=v;break e}O=s.return}}var h=e.current;for(O=h;O!==null;){a=O;var x=a.child;if((a.subtreeFlags&2064)!==0&&x!==null)x.return=a,O=x;else e:for(a=h;O!==null;){if(d=O,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Xi(9,d)}}catch(F){Ne(d,d.return,F)}if(d===a){O=null;break e}var E=d.sibling;if(E!==null){E.return=d.return,O=E;break e}O=d.return}}if(ae=i,nr(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ci,e)}catch{}n=!0}return n}finally{me=r,mt.transition=t}}return!1}function Kc(e,t,r){t=en(r,t),t=hc(e,t,1),e=or(e,t,1),t=Ye(),e!==null&&(jn(e,1,t),Ze(e,t))}function Ne(e,t,r){if(e.tag===3)Kc(e,e,r);else for(;t!==null;){if(t.tag===3){Kc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sr===null||!sr.has(n))){e=en(r,e),e=mc(t,e,1),t=or(t,e,1),e=Ye(),t!==null&&(jn(t,1,e),Ze(t,e));break}}t=t.return}}function Qp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&r,Ie===e&&(He&r)===r&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Ce()-Ss?_r(e,0):ks|=r),Ze(e,t)}function Xc(e,t){t===0&&((e.mode&1)===0?t=1:(t=fi,fi<<=1,(fi&130023424)===0&&(fi=4194304)));var r=Ye();e=Ut(e,t),e!==null&&(jn(e,t,r),Ze(e,r))}function Yp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xc(e,r)}function Gp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(t),Xc(e,r)}var Zc;Zc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ke=!1,Fp(e,t,r);Ke=(e.flags&131072)!==0}else Ke=!1,je&&(t.flags&1048576)!==0&&Tu(t,Ii,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;qi(e,t),e=t.pendingProps;var i=Qr(t,We.current);Zr(t,r),i=es(null,t,n,e,i,r);var s=ts();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(n)?(s=!0,Ti(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yl(t),i.updater=Yi,t.stateNode=i,i._reactInternals=t,ss(t,n,e,r),t=ds(null,t,n,!0,s,r)):(t.tag=0,je&&s&&Ml(t),Qe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Kp(n),e=Nt(n,e),i){case 0:t=cs(null,t,n,e,r);break e;case 1:t=Nc(null,t,n,e,r);break e;case 11:t=yc(null,t,n,e,r);break e;case 14:t=wc(null,t,n,Nt(n.type,e),r);break e}throw Error(c(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),cs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),Nc(e,t,n,i,r);case 3:e:{if(Cc(t),e===null)throw Error(c(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Bu(e,t),Bi(t,n,null,r);var a=t.memoizedState;if(n=a.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=en(Error(c(423)),t),t=Ec(e,t,n,r,i);break e}else if(n!==i){i=en(Error(c(424)),t),t=Ec(e,t,n,r,i);break e}else for(ot=er(t.stateNode.containerInfo.firstChild),it=t,je=!0,St=null,r=Au(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qr(),n===i){t=Vt(e,t,r);break e}Qe(e,t,n,r)}t=t.child}return t;case 5:return $u(t),e===null&&Bl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Tl(n,i)?a=null:s!==null&&Tl(n,s)&&(t.flags|=32),Sc(e,t),Qe(e,t,a,r),t.child;case 6:return e===null&&Bl(t),null;case 13:return _c(e,t,r);case 4:return Gl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Kr(t,null,n,r):Qe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),yc(e,t,n,i,r);case 7:return Qe(e,t,t.pendingProps,r),t.child;case 8:return Qe(e,t,t.pendingProps.children,r),t.child;case 12:return Qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ge(Mi,n._currentValue),n._currentValue=a,s!==null)if(kt(s.value,a)){if(s.children===i.children&&!Ge.current){t=Vt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var d=s.dependencies;if(d!==null){a=s.child;for(var p=d.firstContext;p!==null;){if(p.context===n){if(s.tag===1){p=$t(-1,r&-r),p.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var S=y.pending;S===null?p.next=p:(p.next=S.next,S.next=p),y.pending=p}}s.lanes|=r,p=s.alternate,p!==null&&(p.lanes|=r),bl(s.return,r,t),d.lanes|=r;break}p=p.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(c(341));a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),bl(a,r,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Qe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Zr(t,r),i=pt(i),n=n(i),t.flags|=1,Qe(e,t,n,r),t.child;case 14:return n=t.type,i=Nt(n,t.pendingProps),i=Nt(n.type,i),wc(e,t,n,i,r);case 15:return jc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),qi(e,t),t.tag=1,qe(n)?(e=!0,Ti(t)):e=!1,Zr(t,r),fc(t,n,i),ss(t,n,i,r),ds(null,t,n,!0,e,r);case 19:return Lc(e,t,r);case 22:return kc(e,t,r)}throw Error(c(156,t.tag))};function Jc(e,t){return Oa(e,t)}function qp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,r,n){return new qp(e,t,r,n)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kp(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function dr(e,t){var r=e.alternate;return r===null?(r=vt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lo(e,t,r,n,i,s){var a=2;if(n=e,typeof e=="function")Ts(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case U:return Lr(r.children,i,s,t);case Pe:a=8,i|=8;break;case tt:return e=vt(12,r,t,i|2),e.elementType=tt,e.lanes=s,e;case be:return e=vt(13,r,t,i),e.elementType=be,e.lanes=s,e;case rt:return e=vt(19,r,t,i),e.elementType=rt,e.lanes=s,e;case ve:return so(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:a=10;break e;case Dt:a=9;break e;case ut:a=11;break e;case ct:a=14;break e;case Be:a=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=vt(a,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Lr(e,t,r,n){return e=vt(7,e,n,t),e.lanes=r,e}function so(e,t,r,n){return e=vt(22,e,n,t),e.elementType=ve,e.lanes=r,e.stateNode={isHidden:!1},e}function Os(e,t,r){return e=vt(6,e,null,t),e.lanes=r,e}function Rs(e,t,r){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xp(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Is(e,t,r,n,i,s,a,d,p){return e=new Xp(e,t,r,d,p),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(s),e}function Zp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ed(e){if(!e)return rr;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(qe(r))return zu(e,r,t)}return t}function td(e,t,r,n,i,s,a,d,p){return e=Is(r,n,!0,e,i,s,a,d,p),e.context=ed(null),r=e.current,n=Ye(),i=ur(r),s=$t(n,i),s.callback=t!=null?t:null,or(r,s,i),e.current.lanes=i,jn(e,i,n),Ze(e,n),e}function ao(e,t,r,n){var i=t.current,s=Ye(),a=ur(i);return r=ed(r),t.context===null?t.context=r:t.pendingContext=r,t=$t(s,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=or(i,t,a),e!==null&&(_t(e,i,a,s),Hi(e,i,a)),a}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Fs(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Jp(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}co.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));ao(e,t,null,null)},co.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){ao(null,e,null,null)}),t[At]=null}};function co(e){this._internalRoot=e}co.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ba();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Xt.length&&t!==0&&t<Xt[r].priority;r++);Xt.splice(r,0,e),r===0&&$a(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function eh(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var y=uo(a);s.call(y)}}var a=td(t,n,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[At]=a.current,Fn(e.nodeType===8?e.parentNode:e),Er(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var d=n;n=function(){var y=uo(p);d.call(y)}}var p=Is(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=p,e[At]=p.current,Fn(e.nodeType===8?e.parentNode:e),Er(function(){ao(t,p,r,n)}),p}function po(e,t,r,n,i){var s=r._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var d=i;i=function(){var p=uo(a);d.call(p)}}ao(t,a,e,i)}else a=eh(r,t,e,i,n);return uo(a)}Aa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=wn(t.pendingLanes);r!==0&&(sl(t,r|1),Ze(t,Ce()),(ae&6)===0&&(nn=Ce()+500,nr()))}break;case 13:Er(function(){var n=Ut(e,1);if(n!==null){var i=Ye();_t(n,e,1,i)}}),Fs(e,1)}},al=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var r=Ye();_t(t,e,134217728,r)}Fs(e,134217728)}},Ha=function(e){if(e.tag===13){var t=ur(e),r=Ut(e,t);if(r!==null){var n=Ye();_t(r,e,t,n)}Fs(e,t)}},Ba=function(){return me},Wa=function(e,t){var r=me;try{return me=e,t()}finally{me=r}},el=function(e,t,r){switch(t){case"input":if(Qo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Li(n);if(!i)throw Error(c(90));wt(n),Qo(n,i)}}}break;case"textarea":va(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}},Ca=zs,Ea=Er;var th={usingClientEntryPoint:!1,Events:[An,Vr,Li,Sa,Na,zs]},Zn={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pa(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{ci=ho.inject(rh),Pt=ho}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,Je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(c(200));return Zp(e,t,null,r)},Je.createRoot=function(e,t){if(!Ms(e))throw Error(c(299));var r=!1,n="",i=nd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Is(e,1,!1,null,null,r,!1,n,i),e[At]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Ds(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Pa(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return Er(e)},Je.hydrate=function(e,t,r){if(!fo(t))throw Error(c(200));return po(null,e,t,!0,r)},Je.hydrateRoot=function(e,t,r){if(!Ms(e))throw Error(c(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",a=nd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=td(t,null,e,1,r!=null?r:null,i,!1,s,a),e[At]=t.current,Fn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new co(t)},Je.render=function(e,t,r){if(!fo(t))throw Error(c(200));return po(null,e,t,!1,r)},Je.unmountComponentAtNode=function(e){if(!fo(e))throw Error(c(40));return e._reactRootContainer?(Er(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},Je.unstable_batchedUpdates=zs,Je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!fo(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return po(e,t,r,!1,n)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var fd;function dh(){if(fd)return Bs.exports;fd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Bs.exports=ch(),Bs.exports}var pd;function fh(){if(pd)return mo;pd=1;var o=dh();return mo.createRoot=o.createRoot,mo.hydrateRoot=o.hydrateRoot,mo}var ph=fh(),Le=la();const gt=ih(Le);var et=function(){return et=Object.assign||function(u){for(var c,f=1,g=arguments.length;f<g;f++){c=arguments[f];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(u[w]=c[w])}return u},et.apply(this,arguments)};function Oo(o,u,c){if(c||arguments.length===2)for(var f=0,g=u.length,w;f<g;f++)(w||!(f in u))&&(w||(w=Array.prototype.slice.call(u,0,f)),w[f]=u[f]);return o.concat(w||Array.prototype.slice.call(u))}var we="-ms-",ti="-moz-",he="-webkit-",Id="comm",Ho="rule",sa="decl",hh="@import",Fd="@keyframes",mh="@layer",Dd=Math.abs,aa=String.fromCharCode,Ks=Object.assign;function vh(o,u){return De(o,0)^45?(((u<<2^De(o,0))<<2^De(o,1))<<2^De(o,2))<<2^De(o,3):0}function Md(o){return o.trim()}function Qt(o,u){return(o=u.exec(o))?o[0]:o}function Z(o,u,c){return o.replace(u,c)}function Eo(o,u,c){return o.indexOf(u,c)}function De(o,u){return o.charCodeAt(u)|0}function an(o,u,c){return o.slice(u,c)}function Ft(o){return o.length}function Ad(o){return o.length}function ei(o,u){return u.push(o),o}function gh(o,u){return o.map(u).join("")}function hd(o,u){return o.filter(function(c){return!Qt(c,u)})}var Bo=1,un=1,Hd=0,xt=0,ze=0,pn="";function Wo(o,u,c,f,g,w,_,T){return{value:o,root:u,parent:c,type:f,props:g,children:w,line:Bo,column:un,length:_,return:"",siblings:T}}function pr(o,u){return Ks(Wo("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function ln(o){for(;o.root;)o=pr(o.root,{children:[o]});ei(o,o.siblings)}function xh(){return ze}function yh(){return ze=xt>0?De(pn,--xt):0,un--,ze===10&&(un=1,Bo--),ze}function zt(){return ze=xt<Hd?De(pn,xt++):0,un++,ze===10&&(un=1,Bo++),ze}function Tr(){return De(pn,xt)}function _o(){return xt}function Uo(o,u){return an(pn,o,u)}function Xs(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wh(o){return Bo=un=1,Hd=Ft(pn=o),xt=0,[]}function jh(o){return pn="",o}function $s(o){return Md(Uo(xt-1,Zs(o===91?o+2:o===40?o+1:o)))}function kh(o){for(;(ze=Tr())&&ze<33;)zt();return Xs(o)>2||Xs(ze)>3?"":" "}function Sh(o,u){for(;--u&&zt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Uo(o,_o()+(u<6&&Tr()==32&&zt()==32))}function Zs(o){for(;zt();)switch(ze){case o:return xt;case 34:case 39:o!==34&&o!==39&&Zs(ze);break;case 40:o===41&&Zs(o);break;case 92:zt();break}return xt}function Nh(o,u){for(;zt()&&o+ze!==57;)if(o+ze===84&&Tr()===47)break;return"/*"+Uo(u,xt-1)+"*"+aa(o===47?o:zt())}function Ch(o){for(;!Xs(Tr());)zt();return Uo(o,xt)}function Eh(o){return jh(zo("",null,null,null,[""],o=wh(o),0,[0],o))}function zo(o,u,c,f,g,w,_,T,C){for(var M=0,$=0,A=_,H=0,Q=0,ie=0,b=1,K=1,pe=1,se=0,oe="",J=g,de=w,Y=f,U=oe;K;)switch(ie=se,se=zt()){case 40:if(ie!=108&&De(U,A-1)==58){Eo(U+=Z($s(se),"&","&\f"),"&\f",Dd(M?T[M-1]:0))!=-1&&(pe=-1);break}case 34:case 39:case 91:U+=$s(se);break;case 9:case 10:case 13:case 32:U+=kh(ie);break;case 92:U+=Sh(_o()-1,7);continue;case 47:switch(Tr()){case 42:case 47:ei(_h(Nh(zt(),_o()),u,c,C),C);break;default:U+="/"}break;case 123*b:T[M++]=Ft(U)*pe;case 125*b:case 59:case 0:switch(se){case 0:case 125:K=0;case 59+$:pe==-1&&(U=Z(U,/\f/g,"")),Q>0&&Ft(U)-A&&ei(Q>32?vd(U+";",f,c,A-1,C):vd(Z(U," ","")+";",f,c,A-2,C),C);break;case 59:U+=";";default:if(ei(Y=md(U,u,c,M,$,g,T,oe,J=[],de=[],A,w),w),se===123)if($===0)zo(U,u,Y,Y,J,w,A,T,de);else switch(H===99&&De(U,3)===110?100:H){case 100:case 108:case 109:case 115:zo(o,Y,Y,f&&ei(md(o,Y,Y,0,0,g,T,oe,g,J=[],A,de),de),g,de,A,T,f?J:de);break;default:zo(U,Y,Y,Y,[""],de,0,T,de)}}M=$=Q=0,b=pe=1,oe=U="",A=_;break;case 58:A=1+Ft(U),Q=ie;default:if(b<1){if(se==123)--b;else if(se==125&&b++==0&&yh()==125)continue}switch(U+=aa(se),se*b){case 38:pe=$>0?1:(U+="\f",-1);break;case 44:T[M++]=(Ft(U)-1)*pe,pe=1;break;case 64:Tr()===45&&(U+=$s(zt())),H=Tr(),$=A=Ft(oe=U+=Ch(_o())),se++;break;case 45:ie===45&&Ft(U)==2&&(b=0)}}return w}function md(o,u,c,f,g,w,_,T,C,M,$,A){for(var H=g-1,Q=g===0?w:[""],ie=Ad(Q),b=0,K=0,pe=0;b<f;++b)for(var se=0,oe=an(o,H+1,H=Dd(K=_[b])),J=o;se<ie;++se)(J=Md(K>0?Q[se]+" "+oe:Z(oe,/&\f/g,Q[se])))&&(C[pe++]=J);return Wo(o,u,c,g===0?Ho:T,C,M,$,A)}function _h(o,u,c,f){return Wo(o,u,c,Id,aa(xh()),an(o,2,-2),0,f)}function vd(o,u,c,f,g){return Wo(o,u,c,sa,an(o,0,f),an(o,f+1,-1),f,g)}function Bd(o,u,c){switch(vh(o,u)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+o+o;case 4789:return ti+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+ti+o+we+o+o;case 5936:switch(De(o,u+11)){case 114:return he+o+we+Z(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+we+Z(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+we+Z(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+we+o+o;case 6165:return he+o+we+"flex-"+o+o;case 5187:return he+o+Z(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+we+"flex-$1$2")+o;case 5443:return he+o+we+"flex-item-"+Z(o,/flex-|-self/g,"")+(Qt(o,/flex-|baseline/)?"":we+"grid-row-"+Z(o,/flex-|-self/g,""))+o;case 4675:return he+o+we+"flex-line-pack"+Z(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+we+Z(o,"shrink","negative")+o;case 5292:return he+o+we+Z(o,"basis","preferred-size")+o;case 6060:return he+"box-"+Z(o,"-grow","")+he+o+we+Z(o,"grow","positive")+o;case 4554:return he+Z(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return Z(Z(Z(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return Z(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+o+o;case 4200:if(!Qt(o,/flex-|baseline/))return we+"grid-column-align"+an(o,u)+o;break;case 2592:case 3360:return we+Z(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(f,g){return u=g,Qt(f.props,/grid-\w+-end/)})?~Eo(o+(c=c[u].value),"span",0)?o:we+Z(o,"-start","")+o+we+"grid-row-span:"+(~Eo(c,"span",0)?Qt(c,/\d+/):+Qt(c,/\d+/)-+Qt(o,/\d+/))+";":we+Z(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(f){return Qt(f.props,/grid-\w+-start/)})?o:we+Z(Z(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return Z(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(o)-1-u>6)switch(De(o,u+1)){case 109:if(De(o,u+4)!==45)break;case 102:return Z(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+ti+(De(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~Eo(o,"stretch",0)?Bd(Z(o,"stretch","fill-available"),u,c)+o:o}break;case 5152:case 5920:return Z(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,g,w,_,T,C,M){return we+g+":"+w+M+(_?we+g+"-span:"+(T?C:+C-+w)+M:"")+o});case 4949:if(De(o,u+6)===121)return Z(o,":",":"+he)+o;break;case 6444:switch(De(o,De(o,14)===45?18:11)){case 120:return Z(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+we+"$2box$3")+o;case 100:return Z(o,":",":"+we)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(o,"scroll-","scroll-snap-")+o}return o}function Ro(o,u){for(var c="",f=0;f<o.length;f++)c+=u(o[f],f,o,u)||"";return c}function zh(o,u,c,f){switch(o.type){case mh:if(o.children.length)break;case hh:case sa:return o.return=o.return||o.value;case Id:return"";case Fd:return o.return=o.value+"{"+Ro(o.children,f)+"}";case Ho:if(!Ft(o.value=o.props.join(",")))return""}return Ft(c=Ro(o.children,f))?o.return=o.value+"{"+c+"}":""}function Lh(o){var u=Ad(o);return function(c,f,g,w){for(var _="",T=0;T<u;T++)_+=o[T](c,f,g,w)||"";return _}}function Ph(o){return function(u){u.root||(u=u.return)&&o(u)}}function Th(o,u,c,f){if(o.length>-1&&!o.return)switch(o.type){case sa:o.return=Bd(o.value,o.length,c);return;case Fd:return Ro([pr(o,{value:Z(o.value,"@","@"+he)})],f);case Ho:if(o.length)return gh(c=o.props,function(g){switch(Qt(g,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ln(pr(o,{props:[Z(g,/:(read-\w+)/,":"+ti+"$1")]})),ln(pr(o,{props:[g]})),Ks(o,{props:hd(c,f)});break;case"::placeholder":ln(pr(o,{props:[Z(g,/:(plac\w+)/,":"+he+"input-$1")]})),ln(pr(o,{props:[Z(g,/:(plac\w+)/,":"+ti+"$1")]})),ln(pr(o,{props:[Z(g,/:(plac\w+)/,we+"input-$1")]})),ln(pr(o,{props:[g]})),Ks(o,{props:hd(c,f)});break}return""})}}var Oh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},cn=typeof process!="undefined"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",Wd="active",Ud="data-styled-version",$o="6.1.18",ua=`/*!sc*/
`,Io=typeof window!="undefined"&&typeof document!="undefined",Rh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),Vo=Object.freeze([]),dn=Object.freeze({});function Ih(o,u,c){return c===void 0&&(c=dn),o.theme!==c.theme&&o.theme||u||c.theme}var $d=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dh=/(^-|-$)/g;function gd(o){return o.replace(Fh,"-").replace(Dh,"")}var Mh=/(a)(d)/gi,vo=52,xd=function(o){return String.fromCharCode(o+(o>25?39:97))};function Js(o){var u,c="";for(u=Math.abs(o);u>vo;u=u/vo|0)c=xd(u%vo)+c;return(xd(u%vo)+c).replace(Mh,"$1-$2")}var Vs,Vd=5381,sn=function(o,u){for(var c=u.length;c;)o=33*o^u.charCodeAt(--c);return o},bd=function(o){return sn(Vd,o)};function Ah(o){return Js(bd(o)>>>0)}function Hh(o){return o.displayName||o.name||"Component"}function bs(o){return typeof o=="string"&&!0}var Qd=typeof Symbol=="function"&&Symbol.for,Yd=Qd?Symbol.for("react.memo"):60115,Bh=Qd?Symbol.for("react.forward_ref"):60112,Wh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$h=((Vs={})[Bh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vs[Yd]=Gd,Vs);function yd(o){return("type"in(u=o)&&u.type.$$typeof)===Yd?Gd:"$$typeof"in o?$h[o.$$typeof]:Wh;var u}var Vh=Object.defineProperty,bh=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,Qh=Object.getOwnPropertyDescriptor,Yh=Object.getPrototypeOf,jd=Object.prototype;function qd(o,u,c){if(typeof u!="string"){if(jd){var f=Yh(u);f&&f!==jd&&qd(o,f,c)}var g=bh(u);wd&&(g=g.concat(wd(u)));for(var w=yd(o),_=yd(u),T=0;T<g.length;++T){var C=g[T];if(!(C in Uh||c&&c[C]||_&&C in _||w&&C in w)){var M=Qh(u,C);try{Vh(o,C,M)}catch{}}}}return o}function fn(o){return typeof o=="function"}function ca(o){return typeof o=="object"&&"styledComponentId"in o}function Pr(o,u){return o&&u?"".concat(o," ").concat(u):o||u||""}function kd(o,u){if(o.length===0)return"";for(var c=o[0],f=1;f<o.length;f++)c+=o[f];return c}function ri(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function ea(o,u,c){if(c===void 0&&(c=!1),!c&&!ri(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(var f=0;f<u.length;f++)o[f]=ea(o[f],u[f]);else if(ri(u))for(var f in u)o[f]=ea(o[f],u[f]);return o}function da(o,u){Object.defineProperty(o,"toString",{value:u})}function ii(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Gh=(function(){function o(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return o.prototype.indexOfGroup=function(u){for(var c=0,f=0;f<u;f++)c+=this.groupSizes[f];return c},o.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var f=this.groupSizes,g=f.length,w=g;u>=w;)if((w<<=1)<0)throw ii(16,"".concat(u));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var _=g;_<w;_++)this.groupSizes[_]=0}for(var T=this.indexOfGroup(u+1),C=(_=0,c.length);_<C;_++)this.tag.insertRule(T,c[_])&&(this.groupSizes[u]++,T++)},o.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],f=this.indexOfGroup(u),g=f+c;this.groupSizes[u]=0;for(var w=f;w<g;w++)this.tag.deleteRule(f)}},o.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var f=this.groupSizes[u],g=this.indexOfGroup(u),w=g+f,_=g;_<w;_++)c+="".concat(this.tag.getRule(_)).concat(ua);return c},o})(),Lo=new Map,Fo=new Map,Po=1,go=function(o){if(Lo.has(o))return Lo.get(o);for(;Fo.has(Po);)Po++;var u=Po++;return Lo.set(o,u),Fo.set(u,o),u},qh=function(o,u){Po=u+1,Lo.set(o,u),Fo.set(u,o)},Kh="style[".concat(cn,"][").concat(Ud,'="').concat($o,'"]'),Xh=new RegExp("^".concat(cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zh=function(o,u,c){for(var f,g=c.split(","),w=0,_=g.length;w<_;w++)(f=g[w])&&o.registerName(u,f)},Jh=function(o,u){for(var c,f=((c=u.textContent)!==null&&c!==void 0?c:"").split(ua),g=[],w=0,_=f.length;w<_;w++){var T=f[w].trim();if(T){var C=T.match(Xh);if(C){var M=0|parseInt(C[1],10),$=C[2];M!==0&&(qh($,M),Zh(o,$,C[3]),o.getTag().insertRules(M,g)),g.length=0}else g.push(T)}}},Sd=function(o){for(var u=document.querySelectorAll(Kh),c=0,f=u.length;c<f;c++){var g=u[c];g&&g.getAttribute(cn)!==Wd&&(Jh(o,g),g.parentNode&&g.parentNode.removeChild(g))}};function em(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Kd=function(o){var u=document.head,c=o||u,f=document.createElement("style"),g=(function(T){var C=Array.from(T.querySelectorAll("style[".concat(cn,"]")));return C[C.length-1]})(c),w=g!==void 0?g.nextSibling:null;f.setAttribute(cn,Wd),f.setAttribute(Ud,$o);var _=em();return _&&f.setAttribute("nonce",_),c.insertBefore(f,w),f},tm=(function(){function o(u){this.element=Kd(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var f=document.styleSheets,g=0,w=f.length;g<w;g++){var _=f[g];if(_.ownerNode===c)return _}throw ii(17)})(this.element),this.length=0}return o.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},o.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},o})(),rm=(function(){function o(u){this.element=Kd(u),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var f=document.createTextNode(c);return this.element.insertBefore(f,this.nodes[u]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},o.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},o})(),nm=(function(){function o(u){this.rules=[],this.length=0}return o.prototype.insertRule=function(u,c){return u<=this.length&&(this.rules.splice(u,0,c),this.length++,!0)},o.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},o.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},o})(),Nd=Io,im={isServer:!Io,useCSSOMInjection:!Rh},Xd=(function(){function o(u,c,f){u===void 0&&(u=dn),c===void 0&&(c={});var g=this;this.options=et(et({},im),u),this.gs=c,this.names=new Map(f),this.server=!!u.isServer,!this.server&&Io&&Nd&&(Nd=!1,Sd(this)),da(this,function(){return(function(w){for(var _=w.getTag(),T=_.length,C="",M=function(A){var H=(function(pe){return Fo.get(pe)})(A);if(H===void 0)return"continue";var Q=w.names.get(H),ie=_.getGroup(A);if(Q===void 0||!Q.size||ie.length===0)return"continue";var b="".concat(cn,".g").concat(A,'[id="').concat(H,'"]'),K="";Q!==void 0&&Q.forEach(function(pe){pe.length>0&&(K+="".concat(pe,","))}),C+="".concat(ie).concat(b,'{content:"').concat(K,'"}').concat(ua)},$=0;$<T;$++)M($);return C})(g)})}return o.registerId=function(u){return go(u)},o.prototype.rehydrate=function(){!this.server&&Io&&Sd(this)},o.prototype.reconstructWithOptions=function(u,c){return c===void 0&&(c=!0),new o(et(et({},this.options),u),this.gs,c&&this.names||void 0)},o.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(c){var f=c.useCSSOMInjection,g=c.target;return c.isServer?new nm(g):f?new tm(g):new rm(g)})(this.options),new Gh(u)));var u},o.prototype.hasNameForId=function(u,c){return this.names.has(u)&&this.names.get(u).has(c)},o.prototype.registerName=function(u,c){if(go(u),this.names.has(u))this.names.get(u).add(c);else{var f=new Set;f.add(c),this.names.set(u,f)}},o.prototype.insertRules=function(u,c,f){this.registerName(u,c),this.getTag().insertRules(go(u),f)},o.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},o.prototype.clearRules=function(u){this.getTag().clearGroup(go(u)),this.clearNames(u)},o.prototype.clearTag=function(){this.tag=void 0},o})(),om=/&/g,lm=/^\s*\/\/.*$/gm;function Zd(o,u){return o.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(f){return"".concat(u," ").concat(f)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Zd(c.children,u)),c})}function sm(o){var u,c,f,g=dn,w=g.options,_=w===void 0?dn:w,T=g.plugins,C=T===void 0?Vo:T,M=function(H,Q,ie){return ie.startsWith(c)&&ie.endsWith(c)&&ie.replaceAll(c,"").length>0?".".concat(u):H},$=C.slice();$.push(function(H){H.type===Ho&&H.value.includes("&")&&(H.props[0]=H.props[0].replace(om,c).replace(f,M))}),_.prefix&&$.push(Th),$.push(zh);var A=function(H,Q,ie,b){Q===void 0&&(Q=""),ie===void 0&&(ie=""),b===void 0&&(b="&"),u=b,c=Q,f=new RegExp("\\".concat(c,"\\b"),"g");var K=H.replace(lm,""),pe=Eh(ie||Q?"".concat(ie," ").concat(Q," { ").concat(K," }"):K);_.namespace&&(pe=Zd(pe,_.namespace));var se=[];return Ro(pe,Lh($.concat(Ph(function(oe){return se.push(oe)})))),se};return A.hash=C.length?C.reduce(function(H,Q){return Q.name||ii(15),sn(H,Q.name)},Vd).toString():"",A}var am=new Xd,ta=sm(),Jd=gt.createContext({shouldForwardProp:void 0,styleSheet:am,stylis:ta});Jd.Consumer;gt.createContext(void 0);function Cd(){return Le.useContext(Jd)}var um=(function(){function o(u,c){var f=this;this.inject=function(g,w){w===void 0&&(w=ta);var _=f.name+w.hash;g.hasNameForId(f.id,_)||g.insertRules(f.id,_,w(f.rules,_,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,da(this,function(){throw ii(12,String(f.name))})}return o.prototype.getName=function(u){return u===void 0&&(u=ta),this.name+u.hash},o})(),cm=function(o){return o>="A"&&o<="Z"};function Ed(o){for(var u="",c=0;c<o.length;c++){var f=o[c];if(c===1&&f==="-"&&o[0]==="-")return o;cm(f)?u+="-"+f.toLowerCase():u+=f}return u.startsWith("ms-")?"-"+u:u}var ef=function(o){return o==null||o===!1||o===""},tf=function(o){var u,c,f=[];for(var g in o){var w=o[g];o.hasOwnProperty(g)&&!ef(w)&&(Array.isArray(w)&&w.isCss||fn(w)?f.push("".concat(Ed(g),":"),w,";"):ri(w)?f.push.apply(f,Oo(Oo(["".concat(g," {")],tf(w),!1),["}"],!1)):f.push("".concat(Ed(g),": ").concat((u=g,(c=w)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||u in Oh||u.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return f};function Or(o,u,c,f){if(ef(o))return[];if(ca(o))return[".".concat(o.styledComponentId)];if(fn(o)){if(!fn(w=o)||w.prototype&&w.prototype.isReactComponent||!u)return[o];var g=o(u);return Or(g,u,c,f)}var w;return o instanceof um?c?(o.inject(c,f),[o.getName(f)]):[o]:ri(o)?tf(o):Array.isArray(o)?Array.prototype.concat.apply(Vo,o.map(function(_){return Or(_,u,c,f)})):[o.toString()]}function dm(o){for(var u=0;u<o.length;u+=1){var c=o[u];if(fn(c)&&!ca(c))return!1}return!0}var fm=bd($o),pm=(function(){function o(u,c,f){this.rules=u,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&dm(u),this.componentId=c,this.baseHash=sn(fm,c),this.baseStyle=f,Xd.registerId(c)}return o.prototype.generateAndInjectStyles=function(u,c,f){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))g=Pr(g,this.staticRulesId);else{var w=kd(Or(this.rules,u,c,f)),_=Js(sn(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,_)){var T=f(w,".".concat(_),void 0,this.componentId);c.insertRules(this.componentId,_,T)}g=Pr(g,_),this.staticRulesId=_}else{for(var C=sn(this.baseHash,f.hash),M="",$=0;$<this.rules.length;$++){var A=this.rules[$];if(typeof A=="string")M+=A;else if(A){var H=kd(Or(A,u,c,f));C=sn(C,H+$),M+=H}}if(M){var Q=Js(C>>>0);c.hasNameForId(this.componentId,Q)||c.insertRules(this.componentId,Q,f(M,".".concat(Q),void 0,this.componentId)),g=Pr(g,Q)}}return g},o})(),rf=gt.createContext(void 0);rf.Consumer;var Qs={};function hm(o,u,c){var f=ca(o),g=o,w=!bs(o),_=u.attrs,T=_===void 0?Vo:_,C=u.componentId,M=C===void 0?(function(J,de){var Y=typeof J!="string"?"sc":gd(J);Qs[Y]=(Qs[Y]||0)+1;var U="".concat(Y,"-").concat(Ah($o+Y+Qs[Y]));return de?"".concat(de,"-").concat(U):U})(u.displayName,u.parentComponentId):C,$=u.displayName,A=$===void 0?(function(J){return bs(J)?"styled.".concat(J):"Styled(".concat(Hh(J),")")})(o):$,H=u.displayName&&u.componentId?"".concat(gd(u.displayName),"-").concat(u.componentId):u.componentId||M,Q=f&&g.attrs?g.attrs.concat(T).filter(Boolean):T,ie=u.shouldForwardProp;if(f&&g.shouldForwardProp){var b=g.shouldForwardProp;if(u.shouldForwardProp){var K=u.shouldForwardProp;ie=function(J,de){return b(J,de)&&K(J,de)}}else ie=b}var pe=new pm(c,H,f?g.componentStyle:void 0);function se(J,de){return(function(Y,U,Pe){var tt=Y.attrs,yt=Y.componentStyle,Dt=Y.defaultProps,ut=Y.foldedComponentIds,be=Y.styledComponentId,rt=Y.target,ct=gt.useContext(rf),Be=Cd(),ve=Y.shouldForwardProp||Be.shouldForwardProp,z=Ih(U,ct,Dt)||dn,D=(function(ne,ee,fe){for(var le,ue=et(et({},ee),{className:void 0,theme:fe}),Me=0;Me<ne.length;Me+=1){var Mt=fn(le=ne[Me])?le(ue):le;for(var wt in Mt)ue[wt]=wt==="className"?Pr(ue[wt],Mt[wt]):wt==="style"?et(et({},ue[wt]),Mt[wt]):Mt[wt]}return ee.className&&(ue.className=Pr(ue.className,ee.className)),ue})(tt,U,z),L=D.as||rt,m={};for(var j in D)D[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&D.theme===z||(j==="forwardedAs"?m.as=D.forwardedAs:ve&&!ve(j,L)||(m[j]=D[j]));var G=(function(ne,ee){var fe=Cd(),le=ne.generateAndInjectStyles(ee,fe.styleSheet,fe.stylis);return le})(yt,D),X=Pr(ut,be);return G&&(X+=" "+G),D.className&&(X+=" "+D.className),m[bs(L)&&!$d.has(L)?"class":"className"]=X,Pe&&(m.ref=Pe),Le.createElement(L,m)})(oe,J,de)}se.displayName=A;var oe=gt.forwardRef(se);return oe.attrs=Q,oe.componentStyle=pe,oe.displayName=A,oe.shouldForwardProp=ie,oe.foldedComponentIds=f?Pr(g.foldedComponentIds,g.styledComponentId):"",oe.styledComponentId=H,oe.target=f?g.target:o,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=f?(function(de){for(var Y=[],U=1;U<arguments.length;U++)Y[U-1]=arguments[U];for(var Pe=0,tt=Y;Pe<tt.length;Pe++)ea(de,tt[Pe],!0);return de})({},g.defaultProps,J):J}}),da(oe,function(){return".".concat(oe.styledComponentId)}),w&&qd(oe,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function _d(o,u){for(var c=[o[0]],f=0,g=u.length;f<g;f+=1)c.push(u[f],o[f+1]);return c}var zd=function(o){return Object.assign(o,{isCss:!0})};function mm(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(fn(o)||ri(o))return zd(Or(_d(Vo,Oo([o],u,!0))));var f=o;return u.length===0&&f.length===1&&typeof f[0]=="string"?Or(f):zd(Or(_d(f,u)))}function ra(o,u,c){if(c===void 0&&(c=dn),!u)throw ii(1,u);var f=function(g){for(var w=[],_=1;_<arguments.length;_++)w[_-1]=arguments[_];return o(u,c,mm.apply(void 0,Oo([g],w,!1)))};return f.attrs=function(g){return ra(o,u,et(et({},c),{attrs:Array.prototype.concat(c.attrs,g).filter(Boolean)}))},f.withConfig=function(g){return ra(o,u,et(et({},c),g))},f}var nf=function(o){return ra(hm,o)},q=nf;$d.forEach(function(o){q[o]=nf(o)});const Ys={Wrapper:q.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .scrollTopButton { position: fixed; right: 22px; bottom: 22px; z-index: 10; width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 14px; color: #fff; background: var(--color-primary); box-shadow: 0 10px 28px var(--color-shadow); opacity: 0; pointer-events: none; transform: translateY(10px); transition: opacity .16s ease, transform .16s ease, background .16s ease, box-shadow .16s ease; }
        .scrollTopButton.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .scrollTopButton:hover { transform: translateY(-2px); background: var(--color-primary-hover); }
        .scrollTopButton svg { font-size: 18px; }
    `,Header:q.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,ScrollTop:q.button``,Main:q.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .studyNav { position: fixed; top: 60px; bottom: 0; left: 0; width: 248px; padding: 22px 14px; overflow-y: auto; background: var(--color-surface-2); border-right: 1px solid var(--color-border); z-index: 4; }
        .studyNavLabel { padding: 0 10px 10px; color: var(--color-text-muted); font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
        .studyNav nav { display: grid; gap: 4px; }
        .studyNav button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px; border-radius: 10px; color: var(--color-text-secondary); text-align: left; font-size: 13px; font-weight: 800; transition: background .16s ease, color .16s ease, transform .16s ease; }
        .studyNav button svg { flex: 0 0 auto; font-size: 16px; }
        .studyNav button:hover, .studyNav button.active { background: var(--color-primary); color: #fff; }
        .studyNav button:hover { transform: translateX(2px); }
        .studyNav p { margin: 18px 10px 0; color: var(--color-text-muted); font-size: 12px; }

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: 0 0 0 248px;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
        .topicWrapper { display: none; }
        .topicWrapper.activeTopic { display: block; }
        @media (max-width: 800px) {
            .studyNav { position: static; width: auto; margin: 12px; border: 1px solid var(--color-border); border-radius: 16px; max-height: 220px; }
            .studyNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .contentWrapper { margin-left: 0 !important; }
        }
    `},Ld={Wrapper:q.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        height: 60px;
    `,Main:q.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `};var of={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pd=gt.createContext&&gt.createContext(of),vm=["attr","size","title"];function gm(o,u){if(o==null)return{};var c=xm(o,u),f,g;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(g=0;g<w.length;g++)f=w[g],!(u.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(o,f)&&(c[f]=o[f])}return c}function xm(o,u){if(o==null)return{};var c={};for(var f in o)if(Object.prototype.hasOwnProperty.call(o,f)){if(u.indexOf(f)>=0)continue;c[f]=o[f]}return c}function Do(){return Do=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(o[f]=c[f])}return o},Do.apply(this,arguments)}function Td(o,u){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);u&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(o,g).enumerable})),c.push.apply(c,f)}return c}function Mo(o){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?Td(Object(c),!0).forEach(function(f){ym(o,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):Td(Object(c)).forEach(function(f){Object.defineProperty(o,f,Object.getOwnPropertyDescriptor(c,f))})}return o}function ym(o,u,c){return u=wm(u),u in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,o}function wm(o){var u=jm(o,"string");return typeof u=="symbol"?u:u+""}function jm(o,u){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var f=c.call(o,u);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function lf(o){return o&&o.map((u,c)=>gt.createElement(u.tag,Mo({key:c},u.attr),lf(u.child)))}function re(o){return u=>gt.createElement(km,Do({attr:Mo({},o.attr)},u),lf(o.child))}function km(o){var u=c=>{var{attr:f,size:g,title:w}=o,_=gm(o,vm),T=g||c.size||"1em",C;return c.className&&(C=c.className),o.className&&(C=(C?C+" ":"")+o.className),gt.createElement("svg",Do({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,f,_,{className:C,style:Mo(Mo({color:o.color||c.color},c.style),o.style),height:T,width:T,xmlns:"http://www.w3.org/2000/svg"}),w&&gt.createElement("title",null,w),o.children)};return Pd!==void 0?gt.createElement(Pd.Consumer,null,c=>u(c)):u(of)}function ni(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function Sm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function na(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Nm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function Cm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(o)}function Em(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function Od(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function mr(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function vr(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function ia(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function _m(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function zm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function Rr(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function To(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function Lm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(o)}function Yt(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function Pm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function Tm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function Om(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Gs(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Rm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function at(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function oa(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Im(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function Fm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function Dm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function qs(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Mm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function hr(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function Am(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function sf(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(o)}function Ao(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function Hm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(o)}function Bm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Wm(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function Lt(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Um(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(o)}function $m(o){return re({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const Vm="/datastructures-core-notes/logo.png",bm=()=>{const[o,u]=Le.useState(!1),[c,f]=Le.useState("dark");Le.useEffect(()=>{const T=localStorage.getItem("app-theme")||"dark";f(T),T==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Le.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const g=Le.useMemo(()=>c==="light"?"dark":"light",[c]),w=()=>{f(g)};return l.jsx(Ld.Wrapper,{children:l.jsx(Ld.Main,{children:l.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[l.jsxs("div",{className:"logoNameWrapper",children:[l.jsxs("div",{className:"logoWrapper",children:[!o&&l.jsx("div",{className:"logoSkeleton"}),l.jsx("img",{src:Vm,alt:"Data Structures Core Notes logo",onLoad:()=>u(!0),style:{opacity:o?1:0}})]}),l.jsxs("div",{className:"nameWrapper",children:[l.jsx("div",{className:"title",children:"datastructures-core-notes"}),l.jsx("div",{className:"subTitle",children:"At-a-glance datastructures revision"})]})]}),l.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${g} theme`,title:`Switch to ${g}`,children:[l.jsx("span",{className:"icon",children:c==="light"?l.jsx(Mm,{}):l.jsx(Bm,{})}),l.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})},Qm={Wrapper:q.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 15px 24px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copy {
            line-height: 1.6;
        }

        .copy a {
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .copy a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            color: var(--color-text-secondary);
            transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-text-primary);
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 18%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;

            .links {
                justify-content: flex-start;
            }
        }
    `},Ym=[["Portfolio","https://www.ashishranjan.net/",Tm],["GitHub","https://github.com/a2rp",Pm],["CodePen","https://codepen.io/ash1198",_m],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Im],["Facebook","https://www.facebook.com/theash.ashish/",Lm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Um],["Email","mailto:ash.ranjan09@gmail.com",Dm],["Support","https://a2rp-donation-page.netlify.app/",Rm],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",zm],["Patreon","https://www.patreon.com/a2rp",Hm]],Gm=()=>{const o=new Date().getFullYear();return l.jsxs(Qm.Wrapper,{children:[l.jsxs("div",{className:"copy",children:["Copyright © ",o," ",l.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),l.jsx("nav",{className:"links","aria-label":"Social and support links",children:Ym.map(([u,c,f])=>l.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":u,title:u,children:l.jsx(f,{"aria-hidden":"true"})},u))})]})},Rd={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 48px;
        box-shadow: 0 14px 40px var(--color-shadow);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 55px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        .header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 28px;
        }

        .iconBox {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            svg {
                font-size: 20px;
            }
        }

        &:hover .iconBox {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .title {
            font-size: 32px;
            font-weight: 800;
            letter-spacing: 0.4px;
            color: var(--color-primary);
        }

        p {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 20px;
            color: var(--color-text-secondary);
        }

        .metaRow {
            margin-top: 30px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        .metaItem {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-muted);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                color 0.2s ease;

            svg {
                color: var(--color-accent);
            }

            &:hover {
                transform: translateY(-2px);
                color: var(--color-text-primary);
            }
        }

        .metaBar {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            flex-wrap: wrap;
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            display: grid;
            place-items: center;

            svg {
                font-size: 14px;
            }
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }
        }

        @media (max-width: 768px) {
            padding: 28px;

            .title {
                font-size: 24px;
            }
        }
    `},qm=()=>{const o="2026-10-02T13:46:24.388Z",u=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return l.jsx(Rd.Wrapper,{children:l.jsxs(Rd.Container,{children:[l.jsxs("div",{className:"header",children:[l.jsx("div",{className:"iconBox",children:l.jsx(at,{})}),l.jsx("h2",{className:"title",children:"About Data Structures"})]}),l.jsx("p",{children:"Data Structures are organized ways of storing and managing data so that it can be accessed and modified efficiently. They are the foundation of algorithm design and performance optimization. Choosing the correct data structure directly impacts speed, memory usage, and scalability of software systems."}),l.jsx("p",{children:"Beyond definitions, understanding data structures means understanding trade-offs. Arrays offer fast access but slow insertion. Linked lists offer flexible insertion but slower traversal. Hash tables provide average constant-time lookup but depend heavily on hashing quality. Trees and graphs model hierarchical and network relationships that linear structures cannot represent."}),l.jsx("p",{children:"This project focuses on clarity over memorization. Each structure is explained through its internal behavior, time complexity, space cost, and real-world usage patterns. The goal is not just to implement structures, but to develop the intuition required to choose the right one under pressure."}),l.jsxs("div",{className:"metaRow",children:[l.jsxs("div",{className:"metaItem",children:[l.jsx(Rr,{}),l.jsx("span",{children:"Performance Thinking"})]}),l.jsxs("div",{className:"metaItem",children:[l.jsx(Lt,{}),l.jsx("span",{children:"Complexity Awareness"})]})]}),l.jsxs("div",{className:"metaBar",children:[l.jsxs("span",{className:"metaLeft",children:[l.jsx("span",{className:"metaIcon",children:l.jsx(ia,{})}),l.jsx("span",{className:"metaLabel",children:"Last updated"})]}),l.jsx("span",{className:"metaValue",children:u})]})]})})},xo={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Km=()=>{const[o,u]=Le.useState(!0);return l.jsx(xo.Wrapper,{children:l.jsxs(xo.Container,{className:o?"open":"",children:[l.jsxs(xo.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(at,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Foundations"}),l.jsx("p",{children:"This is non-negotiable"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(xo.Content,{children:[l.jsx("div",{className:"intro",children:"Strong data structure understanding begins with performance awareness. Before learning trees, graphs, or hashing, you must understand how cost grows, how memory behaves, and why trade-offs exist. If this section is strong, everything else becomes obvious."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"What is a Data Structure"})]}),l.jsx("p",{children:"A Data Structure is a way of organizing and storing data so that operations like access, insertion, deletion, and search can be performed efficiently."}),l.jsx("p",{className:"mini",children:"It is not just storage. It defines behavior and cost."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Abstract Data Type vs Data Structure"})]}),l.jsx("p",{children:"An Abstract Data Type defines behavior. A Data Structure defines implementation."}),l.jsx("pre",{children:`// Stack is ADT
// Array-based stack is Data Structure`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ia,{}),l.jsx("h3",{children:"Time Complexity"})]}),l.jsx("p",{children:"Time complexity measures how running time grows relative to input size."}),l.jsx("pre",{children:`// O(n)
for(int i=0;i<n;i++){
   cout << i;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ni,{}),l.jsx("h3",{children:"Space Complexity"})]}),l.jsx("p",{children:"Space complexity measures how memory usage grows with input size."}),l.jsx("pre",{children:`// O(n) extra space
int arr[n];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Big O, Omega, Theta"})]}),l.jsx("p",{children:"Big O → worst case Big Omega → best case Big Theta → tight bound"}),l.jsx("p",{className:"mini",children:"Always analyze worst case unless specified."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"Growth Rates"})]}),l.jsx("p",{children:"Constant O(1) Logarithmic O(log n) Linear O(n) Quadratic O(n²)"}),l.jsx("p",{className:"mini",children:"Logarithmic growth scales far better than linear."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Recursion Stack Cost"})]}),l.jsx("p",{children:"Every recursive call uses stack memory. Deep recursion may cause stack overflow."}),l.jsx("pre",{children:`void f(int n){
  if(n==0) return;
  f(n-1);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Trade-off Thinking"})]}),l.jsx("p",{children:"Faster access often means higher memory usage. Lower memory may increase computation time."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ia,{}),l.jsx("h3",{children:"Amortized Analysis"})]}),l.jsx("p",{children:"Some operations are expensive occasionally, but cheap on average."}),l.jsx("pre",{children:`// Vector resizing
// Occasional O(n)
// Average O(1)`})]})]})]})]})})},yo={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 20px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
        }

        .focus {
            margin-bottom: 30px;
            padding: 14px;
            border-left: 4px solid var(--color-primary);
            background: var(--color-surface-2);
            font-size: 14px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                margin-bottom: 8px;
                line-height: 1.6;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Xm=()=>{const[o,u]=Le.useState(!0);return l.jsx(yo.Wrapper,{children:l.jsxs(yo.Container,{className:o?"open":"",children:[l.jsxs(yo.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(at,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Linear Data Structures"}),l.jsx("p",{children:"Memory in sequence"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(yo.Content,{children:[l.jsx("div",{className:"intro",children:"Linear data structures store elements in a sequential manner. Each element has a single predecessor and successor except the first and last. Understanding memory layout here builds the base for trees, graphs, and advanced structures."}),l.jsxs("div",{className:"focus",children:["Mental Focus:",l.jsx("br",{}),"Contiguous vs Non-contiguous memory",l.jsx("br",{}),"Access cost vs Insertion cost"]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Od,{}),l.jsx("h3",{children:"Array"})]}),l.jsx("p",{children:"Stores elements in contiguous memory locations. Fast access using index."}),l.jsx("p",{className:"mini",children:"Access: O(1) | Insert: O(n)"}),l.jsx("pre",{children:`int arr[5] = {1,2,3,4,5};
cout << arr[2];  // 3`}),l.jsx("pre",{children:`// Insert at beginning (costly)
for(int i=n;i>0;i--){
  arr[i] = arr[i-1];
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Static vs Dynamic Arrays"})]}),l.jsx("p",{children:"Static arrays have fixed size. Dynamic arrays resize at runtime."}),l.jsx("pre",{children:`// Static
int arr[5];

// Dynamic
int* arr = new int[n];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"Vector Concept"})]}),l.jsx("p",{children:"Dynamic array that resizes automatically."}),l.jsx("pre",{children:`vector<int> v;
v.push_back(10);
v.push_back(20);`}),l.jsx("p",{className:"mini",children:"Amortized insertion: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"Singly Linked List"})]}),l.jsx("p",{children:"Nodes stored non-contiguously. Each node points to next."}),l.jsx("pre",{children:`struct Node {
  int data;
  Node* next;
};`}),l.jsx("p",{className:"mini",children:"Access: O(n) | Insert at head: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"Doubly Linked List"})]}),l.jsx("p",{children:"Each node has previous and next pointer."}),l.jsx("pre",{children:`struct Node {
  int data;
  Node* next;
  Node* prev;
};`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Circular Linked List"})]}),l.jsx("p",{children:"Last node connects back to first node."}),l.jsx("pre",{children:"tail->next = head;"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Od,{}),l.jsx("h3",{children:"Stack (LIFO)"})]}),l.jsx("p",{children:"Last In First Out structure."}),l.jsx("pre",{children:`stack<int> s;
s.push(10);
s.pop();`}),l.jsx("p",{className:"mini",children:"Used in recursion, expression evaluation."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"Queue (FIFO)"})]}),l.jsx("p",{children:"First In First Out structure."}),l.jsx("pre",{children:`queue<int> q;
q.push(10);
q.pop();`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Deque"})]}),l.jsx("p",{children:"Double-ended queue. Insert and remove from both ends."}),l.jsx("pre",{children:`deque<int> d;
d.push_front(5);
d.push_back(10);`})]})]})]})]})})},wo={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Zm=()=>{const[o,u]=Le.useState(!0);return l.jsx(wo.Wrapper,{children:l.jsxs(wo.Container,{className:o?"open":"",children:[l.jsxs(wo.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(To,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Hash Based Structures"}),l.jsx("p",{children:"Fast lookup structures"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(wo.Content,{children:[l.jsx("div",{className:"intro",children:"Hash based structures allow near constant-time lookup, insertion, and deletion on average. They trade ordering for speed. Understanding how hashing works internally is critical to avoid worst case performance traps."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Gs,{}),l.jsx("h3",{children:"Hash Table"})]}),l.jsx("p",{children:"A hash table stores key-value pairs and uses a hash function to compute an index for each key."}),l.jsx("pre",{children:`// C++ example
#include <unordered_map>

unordered_map<string,int> mp;
mp["apple"] = 10;
cout << mp["apple"]; // 10`}),l.jsx("p",{className:"mini",children:"Average complexity: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Hash Function Basics"})]}),l.jsx("p",{children:"A hash function converts a key into an index. Good hash functions distribute values evenly."}),l.jsx("pre",{children:`// Simplified example
index = key % table_size;`}),l.jsx("p",{className:"mini",children:"Poor hash function leads to collisions."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Collision Handling"})]}),l.jsx("p",{children:"Collision happens when two keys map to same index."}),l.jsx("pre",{children:`// Chaining
index -> linked list of entries

// Open Addressing
Probe next free slot`}),l.jsx("p",{className:"mini",children:"Chaining uses extra memory. Open addressing reduces memory but needs probing."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Load Factor"})]}),l.jsx("p",{children:"Load factor = number_of_elements / table_size."}),l.jsx("pre",{children:"load_factor = n / m;"}),l.jsx("p",{children:"High load factor increases collisions and reduces performance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(To,{}),l.jsx("h3",{children:"Rehashing"})]}),l.jsx("p",{children:"When load factor exceeds threshold, table resizes and elements are rehashed."}),l.jsx("pre",{children:`// Happens internally
if(load_factor > threshold)
   resize_table();`}),l.jsx("p",{className:"mini",children:"Expensive occasionally but amortized O(1)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Gs,{}),l.jsx("h3",{children:"Set"})]}),l.jsx("p",{children:"Set stores unique values using hashing."}),l.jsx("pre",{children:`# Python example
s = set()
s.add(10)
s.add(20)
print(10 in s)  # True`}),l.jsx("p",{className:"mini",children:"No duplicates allowed."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(To,{}),l.jsx("h3",{children:"Map"})]}),l.jsx("p",{children:"Map stores key-value pairs."}),l.jsx("pre",{children:`# Python dict
d = {"a": 1}
print(d["a"])  # 1`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Gs,{}),l.jsx("h3",{children:"Unordered Map Concept"})]}),l.jsx("p",{children:"C++ unordered_map is hash based. Order is not maintained."}),l.jsx("pre",{children:`unordered_map<int,int> mp;
mp[1] = 100;`}),l.jsx("p",{className:"mini",children:"Ordered map uses tree (O(log n)). Unordered map uses hashing (avg O(1))."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Mental Focus"})]}),l.jsx("p",{children:"Average O(1) does not mean guaranteed O(1). Worst case can degrade to O(n)."}),l.jsx("p",{className:"mini",children:"Understand trade-offs before blindly using hash structures."})]})]})]})]})})},jo={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        .mental {
            margin-top: 30px;
            padding: 20px;
            border-radius: 16px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);

            h4 {
                margin-bottom: 10px;
                font-size: 16px;
                font-weight: 800;
                color: var(--color-primary);
            }

            p {
                font-size: 14px;
                color: var(--color-text-secondary);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},Jm=()=>{const[o,u]=Le.useState(!0);return l.jsx(jo.Wrapper,{children:l.jsxs(jo.Container,{className:o?"open":"",children:[l.jsxs(jo.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Yt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Trees"}),l.jsx("p",{children:"Hierarchical structures"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(jo.Content,{children:[l.jsx("div",{className:"intro",children:"Trees represent hierarchical relationships. Unlike arrays or linked lists, trees branch. They are fundamental for searching, sorting, indexing, and system design. Understanding recursion and height cost is essential here."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Tree Terminology"})]}),l.jsx("p",{children:"Root, Parent, Child, Leaf, Height, Depth, Subtree."}),l.jsx("pre",{children:`// Height of tree = longest path from root to leaf
// Height = number of edges`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"Binary Tree"})]}),l.jsx("p",{children:"Each node has at most two children."}),l.jsx("pre",{children:`struct Node {
    int data;
    Node* left;
    Node* right;
};`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Binary Search Tree"})]}),l.jsx("p",{children:"Left subtree < Root < Right subtree."}),l.jsx("pre",{children:`Node* insert(Node* root, int val) {
    if(!root) return new Node{val, NULL, NULL};

    if(val < root->data)
        root->left = insert(root->left, val);
    else
        root->right = insert(root->right, val);

    return root;
}`}),l.jsx("p",{className:"mini",children:"Search cost depends on height."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Tree Traversals"})]}),l.jsx("p",{children:"DFS: Inorder, Preorder, Postorder"}),l.jsx("pre",{children:`void inorder(Node* root){
    if(!root) return;
    inorder(root->left);
    cout << root->data;
    inorder(root->right);
}`}),l.jsx("p",{children:"BFS: Level Order"}),l.jsx("pre",{children:`queue<Node*> q;
q.push(root);
while(!q.empty()){
   Node* curr = q.front();
   q.pop();
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Balanced Tree Concept"})]}),l.jsx("p",{children:"Balanced tree keeps height small. Ideal height ≈ log(n)."}),l.jsx("p",{className:"mini",children:"Unbalanced BST can degrade to O(n)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"AVL Tree (Concept)"})]}),l.jsx("p",{children:"Self-balancing BST. Height difference ≤ 1."}),l.jsx("p",{className:"mini",children:"Uses rotations to maintain balance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Red Black Tree (Concept)"})]}),l.jsx("p",{children:"Balanced BST with coloring rules."}),l.jsx("p",{className:"mini",children:"Used internally in map, set (C++)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"Heap"})]}),l.jsx("p",{children:"Complete binary tree."}),l.jsx("pre",{children:`// Array representation
// left = 2*i + 1
// right = 2*i + 2`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Min Heap / Max Heap"})]}),l.jsx("p",{children:"Min heap: parent ≤ children Max heap: parent ≥ children"}),l.jsx("pre",{children:`// C++ priority queue (max heap by default)
priority_queue<int> pq;`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Priority Queue"})]}),l.jsx("p",{children:"Abstract structure using heap internally."}),l.jsx("pre",{children:"priority_queue<int, vector<int>, greater<int>> pq; // min heap"})]})]}),l.jsxs("div",{className:"mental",children:[l.jsx("h4",{children:"Mental Focus"}),l.jsx("p",{children:"Recursion is natural in trees. Height determines time complexity. Divide and conquer patterns emerge here."})]})]})]})})},ko={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},ev=()=>{const[o,u]=Le.useState(!0);return l.jsx(ko.Wrapper,{children:l.jsxs(ko.Container,{className:o?"open":"",children:[l.jsxs(ko.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(sf,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Graphs"}),l.jsx("p",{children:"Connectivity thinking"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(ko.Content,{children:[l.jsx("div",{className:"intro",children:"Graphs model relationships. Whenever data is about connections between entities, graphs are the natural structure. Social networks, road maps, dependencies, routing systems — all are graphs. The mental focus here is traversal patterns."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Graph Basics"})]}),l.jsx("p",{children:"A graph consists of vertices (nodes) and edges (connections between nodes)."}),l.jsx("pre",{children:`// V = vertices
// E = edges
// Graph = (V, E)`}),l.jsx("p",{className:"mini",children:"Unlike trees, graphs can contain cycles."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Directed vs Undirected"})]}),l.jsx("p",{children:"Directed graph: edges have direction. Undirected graph: edges are bidirectional."}),l.jsx("pre",{children:`// Directed edge
u -> v

// Undirected edge
u -- v`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ni,{}),l.jsx("h3",{children:"Weighted vs Unweighted"})]}),l.jsx("p",{children:"Weighted graphs assign cost to edges. Unweighted graphs treat all edges equally."}),l.jsx("pre",{children:`// Weighted edge
u -> v (cost = 5)`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(qs,{}),l.jsx("h3",{children:"Adjacency List"})]}),l.jsx("p",{children:"Stores neighbors of each node. Space efficient for sparse graphs."}),l.jsx("pre",{children:`// C++ representation
vector<int> adj[n];
adj[0].push_back(1);
adj[0].push_back(2);`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(qs,{}),l.jsx("h3",{children:"Adjacency Matrix"})]}),l.jsx("p",{children:"2D matrix representation. Useful for dense graphs."}),l.jsx("pre",{children:`int graph[n][n];
graph[u][v] = 1;`}),l.jsx("p",{className:"mini",children:"Space complexity O(n²)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(na,{}),l.jsx("h3",{children:"BFS (Breadth First Search)"})]}),l.jsx("p",{children:"Traverses level by level using queue."}),l.jsx("pre",{children:`void bfs(int start){
  queue<int> q;
  vector<bool> visited(n,false);
  q.push(start);
  visited[start]=true;

  while(!q.empty()){
    int node = q.front();
    q.pop();

    for(int neighbor: adj[node]){
      if(!visited[neighbor]){
        visited[neighbor]=true;
        q.push(neighbor);
      }
    }
  }
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"DFS (Depth First Search)"})]}),l.jsx("p",{children:"Explores deep before backtracking."}),l.jsx("pre",{children:`void dfs(int node){
  visited[node]=true;

  for(int neighbor: adj[node]){
    if(!visited[neighbor]){
      dfs(neighbor);
    }
  }
}`}),l.jsx("p",{className:"mini",children:"Uses recursion stack internally."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ni,{}),l.jsx("h3",{children:"Cycle Detection"})]}),l.jsx("p",{children:"In directed graph: use recursion stack. In undirected graph: track parent."}),l.jsx("pre",{children:`// Undirected cycle check
bool dfs(int node, int parent){
  visited[node]=true;
  for(int neighbor: adj[node]){
    if(!visited[neighbor]){
      if(dfs(neighbor,node)) return true;
    }
    else if(neighbor!=parent)
      return true;
  }
  return false;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Topological Sort"})]}),l.jsx("p",{children:"Ordering of vertices in Directed Acyclic Graph."}),l.jsx("pre",{children:`// Using DFS
void topo(int node){
  visited[node]=true;
  for(int n: adj[node]){
    if(!visited[n])
      topo(n);
  }
  stack.push(node);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(qs,{}),l.jsx("h3",{children:"Dijkstra (Intro)"})]}),l.jsx("p",{children:"Finds shortest path in weighted graph. Uses priority queue."}),l.jsx("pre",{children:`// Basic idea
priority_queue<pair<int,int>> pq;
vector<int> dist(n, INT_MAX);

dist[src]=0;
pq.push({0,src});

while(!pq.empty()){
  auto [d,node] = pq.top();
  pq.pop();

  for(auto [next,weight]: adj[node]){
    if(dist[node]+weight < dist[next]){
      dist[next] = dist[node]+weight;
      pq.push({-dist[next],next});
    }
  }
}`})]})]})]})]})})},So={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},tv=()=>{const[o,u]=Le.useState(!0);return l.jsx(So.Wrapper,{children:l.jsxs(So.Container,{className:o?"open":"",children:[l.jsxs(So.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Yt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Advanced Structures"}),l.jsx("p",{children:"These separate serious candidates"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(So.Content,{children:[l.jsx("div",{className:"intro",children:"Advanced data structures solve problems that basic arrays, stacks, or hash tables cannot handle efficiently. These structures are often used in competitive programming, system design, and performance-critical applications."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"Trie"})]}),l.jsx("p",{children:"A Trie is a tree-based structure used for storing strings efficiently. Each node represents a character."}),l.jsx("p",{className:"mini",children:"Best for prefix search, autocomplete, dictionary problems."}),l.jsx("pre",{children:`struct TrieNode {
  TrieNode* children[26];
  bool isEnd;
};

void insert(string word) {
  TrieNode* node = root;
  for(char c : word) {
    if(!node->children[c - 'a'])
      node->children[c - 'a'] = new TrieNode();
    node = node->children[c - 'a'];
  }
  node->isEnd = true;
}`}),l.jsx("p",{className:"mini",children:"Time: O(L) where L = word length"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ao,{}),l.jsx("h3",{children:"Disjoint Set (Union Find)"})]}),l.jsx("p",{children:"Used to detect connectivity between elements. Efficient for cycle detection in graphs."}),l.jsx("pre",{children:`int parent[N];

int find(int x){
  if(parent[x] == x) return x;
  return parent[x] = find(parent[x]);
}

void unionSet(int a, int b){
  int pa = find(a);
  int pb = find(b);
  if(pa != pb) parent[pa] = pb;
}`}),l.jsx("p",{className:"mini",children:"Nearly O(1) with path compression."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Cm,{}),l.jsx("h3",{children:"Segment Tree"})]}),l.jsx("p",{children:"Used for fast range queries (sum, min, max)."}),l.jsx("pre",{children:`void build(int node, int start, int end){
  if(start == end){
    tree[node] = arr[start];
  } else {
    int mid = (start + end) / 2;
    build(2*node, start, mid);
    build(2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
  }
}`}),l.jsx("p",{className:"mini",children:"Query & Update: O(log n)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Fenwick Tree"})]}),l.jsx("p",{children:"Also called Binary Indexed Tree. Used for prefix sums efficiently."}),l.jsx("pre",{children:`void update(int i, int val){
  while(i <= n){
    bit[i] += val;
    i += (i & -i);
  }
}

int sum(int i){
  int s = 0;
  while(i > 0){
    s += bit[i];
    i -= (i & -i);
  }
  return s;
}`}),l.jsx("p",{className:"mini",children:"Space efficient alternative to segment tree."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Skip List"})]}),l.jsx("p",{children:"A probabilistic alternative to balanced trees."}),l.jsx("p",{children:"Elements are stored in multiple layers to allow fast search, insert, delete."}),l.jsx("p",{className:"mini",children:"Average complexity: O(log n)"})]})]})]})]})})},No={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},rv=()=>{const[o,u]=Le.useState(!0);return l.jsx(No.Wrapper,{children:l.jsxs(No.Container,{children:[l.jsxs(No.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(at,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Algorithmic Patterns"}),l.jsx("p",{children:"This is gold"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(No.Content,{children:[l.jsx("div",{className:"intro",children:"Algorithmic patterns are reusable thinking models. Instead of solving problems randomly, you recognize structure. If you master patterns, you solve entire classes of problems instead of single questions."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Two Pointers"})]}),l.jsx("p",{children:"Use two indices moving through a structure. Often used in sorted arrays."}),l.jsx("pre",{children:`// Find pair with sum = target
int l = 0, r = n - 1;
while(l < r){
    int sum = arr[l] + arr[r];
    if(sum == target) break;
    else if(sum < target) l++;
    else r--;
}`}),l.jsx("p",{className:"mini",children:"Works well when input is sorted."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Wm,{}),l.jsx("h3",{children:"Sliding Window"})]}),l.jsx("p",{children:"Maintain a window over a range instead of recomputing repeatedly."}),l.jsx("pre",{children:`// Max sum of subarray size k
int sum = 0;
for(int i=0;i<k;i++)
    sum += arr[i];

int maxSum = sum;

for(int i=k;i<n;i++){
    sum += arr[i] - arr[i-k];
    maxSum = max(maxSum, sum);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Fast & Slow Pointers"})]}),l.jsx("p",{children:"Detect cycles in linked lists."}),l.jsx("pre",{children:`// Floyd cycle detection
Node* slow = head;
Node* fast = head;

while(fast && fast->next){
    slow = slow->next;
    fast = fast->next->next;
    if(slow == fast) return true;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Am,{}),l.jsx("h3",{children:"Binary Search Pattern"})]}),l.jsx("p",{children:"Reduce search space by half every step."}),l.jsx("pre",{children:`int l = 0, r = n-1;
while(l <= r){
    int mid = (l + r) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) l = mid + 1;
    else r = mid - 1;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Divide & Conquer"})]}),l.jsx("p",{children:"Break problem into smaller parts."}),l.jsx("pre",{children:`// Merge Sort structure
void mergeSort(int l, int r){
    if(l >= r) return;
    int mid = (l + r) / 2;
    mergeSort(l, mid);
    mergeSort(mid+1, r);
    merge(l, mid, r);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Backtracking"})]}),l.jsx("p",{children:"Try all possibilities and undo choices."}),l.jsx("pre",{children:`void solve(int index){
    if(index == n){
        printSolution();
        return;
    }
    chooseOption();
    solve(index + 1);
    undoChoice();
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"Greedy Basics"})]}),l.jsx("p",{children:"Make locally optimal choices hoping for global optimum."}),l.jsx("pre",{children:`// Activity selection idea
sort(activities.begin(), activities.end());
for(auto activity : activities){
    if(activity.start >= lastEnd){
        select(activity);
        lastEnd = activity.end;
    }
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Dynamic Programming Intro"})]}),l.jsx("p",{children:"Store solutions of subproblems to avoid recomputation."}),l.jsx("pre",{children:`// Fibonacci DP
vector<int> dp(n+1);
dp[0]=0; dp[1]=1;
for(int i=2;i<=n;i++)
    dp[i]=dp[i-1]+dp[i-2];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(hr,{}),l.jsx("h3",{children:"Recursion vs Iteration"})]}),l.jsx("p",{children:"Recursion is cleaner but uses stack space. Iteration is memory efficient."}),l.jsx("pre",{children:`// Recursive factorial
int fact(int n){
    if(n==0) return 1;
    return n * fact(n-1);
}

// Iterative factorial
int fact(int n){
    int res=1;
    for(int i=1;i<=n;i++)
        res*=i;
    return res;
}`})]})]})]})]})})},Co={Wrapper:q.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:q.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 45px var(--color-shadow);
        transition: 0.25s ease;

        &:hover {
            transform: translateY(-3px);
        }
    `,Header:q.div`
        padding: 28px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-surface-2);
        cursor: pointer;

        .left {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        h2 {
            font-size: 24px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Content:q.div`
        padding: 35px 40px;

        .intro {
            margin-bottom: 30px;
            padding: 18px;
            border-radius: 14px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
        }

        .card {
            background: var(--color-surface-2);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            transition: 0.2s ease;

            &:hover {
                transform: translateY(-4px);
                border-color: var(--color-primary);
            }

            .cardHead {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;

                svg {
                    color: var(--color-accent);
                }

                h3 {
                    font-size: 15px;
                    font-weight: 800;
                }
            }

            p {
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 8px;
            }

            .mini {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            pre {
                background: var(--color-code-bg);
                padding: 12px;
                border-radius: 12px;
                font-size: 12px;
                overflow-x: auto;
                border: 1px solid var(--color-code-border);
            }
        }

        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},nv=()=>{const[o,u]=Le.useState(!0);return l.jsx(Co.Wrapper,{children:l.jsxs(Co.Container,{className:o?"open":"",children:[l.jsxs(Co.Header,{onClick:()=>u(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Lt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Complexity Master Section"}),l.jsx("p",{children:"Because most people misunderstand cost"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(vr,{}):l.jsx(mr,{})})]}),o&&l.jsxs(Co.Content,{children:[l.jsx("div",{className:"intro",children:"Big O is not the full story. Performance depends on memory, CPU cache, recursion depth, and worst-case behavior. This section builds real cost intuition."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Rr,{}),l.jsx("h3",{children:"Time vs Space Tradeoffs"})]}),l.jsx("p",{children:"Faster execution often requires extra memory. Reducing memory may increase computation time."}),l.jsx("pre",{children:`// Using extra array for faster lookup
bool seen[n]; // O(n) space
// Speeds up search from O(n²) to O(n)`}),l.jsx("p",{className:"mini",children:"Tradeoff rule: Memory buys speed."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(To,{}),l.jsx("h3",{children:"Cache Locality Intuition"})]}),l.jsx("p",{children:"Contiguous memory (arrays) is faster because CPU cache loads nearby elements together."}),l.jsx("pre",{children:`// Array (cache friendly)
for(int i=0;i<n;i++){
   sum += arr[i];
}

// Linked list (cache unfriendly)
while(node){
   sum += node->value;
   node = node->next;
}`}),l.jsx("p",{className:"mini",children:"Arrays often outperform linked lists even if theoretical complexity is same."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Sm,{}),l.jsx("h3",{children:"Stack Overflow Concept"})]}),l.jsx("p",{children:"Each recursive call consumes stack memory. Deep recursion can crash the program."}),l.jsx("pre",{children:`void f(int n){
   if(n==0) return;
   f(n-1);  // deep recursion
}`}),l.jsx("p",{className:"mini",children:"Use iteration or tail recursion where possible."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(at,{}),l.jsx("h3",{children:"Memory Fragmentation"})]}),l.jsx("p",{children:"Frequent dynamic allocation can scatter memory, reducing performance."}),l.jsx("pre",{children:`// Multiple small allocations
new Node();
new Node();
new Node();`}),l.jsx("p",{className:"mini",children:"Contiguous allocation improves performance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ni,{}),l.jsx("h3",{children:"Worst Case vs Average Case"})]}),l.jsx("p",{children:"Always analyze worst case unless told otherwise."}),l.jsx("pre",{children:`// Hash table
// Average: O(1)
// Worst case: O(n) if collisions`}),l.jsx("p",{className:"mini",children:"Real systems must survive worst-case behavior."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lt,{}),l.jsx("h3",{children:"When Big O Lies"})]}),l.jsx("p",{children:"Big O ignores constants and real hardware."}),l.jsx("pre",{children:`// O(n) array traversal
// O(n) linked list traversal

// Array is usually faster
// because of cache locality`}),l.jsx("p",{className:"mini",children:"Complexity gives growth trend, not exact runtime."})]})]})]})]})})},iv=()=>{const o=Le.useRef(null),[u,c]=Le.useState("overview"),[f,g]=Le.useState(!1),w=[["overview","Overview",l.jsx(Em,{})],["foundations","Foundations",l.jsx(at,{})],["linearDataStructures","Linear structures",l.jsx(Fm,{})],["hashBasedStructures","Hash tables",l.jsx(Om,{})],["trees","Trees",l.jsx(Yt,{})],["graphs","Graphs",l.jsx(sf,{})],["advancedStructures","Advanced structures",l.jsx($m,{})],["algorithmicPatterns","Algorithmic patterns",l.jsx(ni,{})],["complexityMaster","Complexity guide",l.jsx(at,{})]],_=C=>{var M;c(C),(M=o.current)==null||M.scrollTo({top:0,left:0,behavior:"smooth"})};Le.useEffect(()=>{const C=o.current;if(!C)return;const M=()=>g(C.scrollTop>350);return C.addEventListener("scroll",M,{passive:!0}),M(),()=>C.removeEventListener("scroll",M)},[]);const T=()=>{var C;(C=o.current)==null||C.scrollTo({top:0,left:0,behavior:"smooth"})};return l.jsxs(Ys.Wrapper,{children:[l.jsx(Ys.Header,{children:l.jsx(bm,{})}),l.jsxs(Ys.Main,{ref:o,children:[l.jsxs("aside",{className:"studyNav","aria-label":"Data structures topics",children:[l.jsx("div",{className:"studyNavLabel",children:"Study guide"}),l.jsx("nav",{children:w.map(([C,M,$])=>l.jsxs("button",{type:"button",className:u===C?"active":"",onClick:()=>_(C),children:[$,l.jsx("span",{children:M})]},C))}),l.jsx("p",{children:"Select a topic to open its notes."})]}),l.jsxs("div",{className:"contentWrapper",children:[u==="overview"&&l.jsx(qm,{}),l.jsx("div",{className:`topicWrapper ${u==="foundations"?"activeTopic":""}`,children:l.jsx(Km,{})}),l.jsx("div",{className:`topicWrapper ${u==="linearDataStructures"?"activeTopic":""}`,children:l.jsx(Xm,{})}),l.jsx("div",{className:`topicWrapper ${u==="hashBasedStructures"?"activeTopic":""}`,children:l.jsx(Zm,{})}),l.jsx("div",{className:`topicWrapper ${u==="trees"?"activeTopic":""}`,children:l.jsx(Jm,{})}),l.jsx("div",{className:`topicWrapper ${u==="graphs"?"activeTopic":""}`,children:l.jsx(ev,{})}),l.jsx("div",{className:`topicWrapper ${u==="advancedStructures"?"activeTopic":""}`,children:l.jsx(tv,{})}),l.jsx("div",{className:`topicWrapper ${u==="algorithmicPatterns"?"activeTopic":""}`,children:l.jsx(rv,{})}),l.jsx("div",{className:`topicWrapper ${u==="complexityMaster"?"activeTopic":""}`,children:l.jsx(nv,{})})]}),l.jsx("div",{className:"footerWrapper",children:l.jsx(Gm,{})})]}),l.jsx("button",{className:"scrollTopButton "+(f?"show":""),type:"button",onClick:T,"aria-label":"Scroll main content to top",title:"Scroll to top",children:l.jsx(Nm,{})})]})};ph.createRoot(document.getElementById("root")).render(l.jsx(l.Fragment,{children:l.jsx(iv,{})}));
