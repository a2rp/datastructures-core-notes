(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))f(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const C of w.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&f(C)}).observe(document,{childList:!0,subtree:!0});function c(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(m){if(m.ep)return;m.ep=!0;const w=c(m);fetch(m.href,w)}})();function sh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hs={exports:{}},ri={},Bs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function ah(){if(ad)return ne;ad=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),W=Symbol.iterator;function X(v){return v===null||typeof v!="object"?null:(v=W&&v[W]||v["@@iterator"],typeof v=="function"?v:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,U={};function Y(v,j,J){this.props=v,this.context=j,this.refs=U,this.updater=J||ae}Y.prototype.isReactComponent={},Y.prototype.setState=function(v,j){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,j,"setState")},Y.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function me(){}me.prototype=Y.prototype;function ce(v,j,J){this.props=v,this.context=j,this.refs=U,this.updater=J||ae}var re=ce.prototype=new me;re.constructor=ce,q(re,Y.prototype),re.isPureReactComponent=!0;var T=Array.isArray,K=Object.prototype.hasOwnProperty,$={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(v,j,J){var ee,se={},oe=null,de=null;if(j!=null)for(ee in j.ref!==void 0&&(de=j.ref),j.key!==void 0&&(oe=""+j.key),j)K.call(j,ee)&&!P.hasOwnProperty(ee)&&(se[ee]=j[ee]);var ue=arguments.length-2;if(ue===1)se.children=J;else if(1<ue){for(var ve=Array(ue),Ee=0;Ee<ue;Ee++)ve[Ee]=arguments[Ee+2];se.children=ve}if(v&&v.defaultProps)for(ee in ue=v.defaultProps,ue)se[ee]===void 0&&(se[ee]=ue[ee]);return{$$typeof:o,type:v,key:oe,ref:de,props:se,_owner:$.current}}function xe(v,j){return{$$typeof:o,type:v.type,key:j,ref:v.ref,props:v.props,_owner:v._owner}}function Te(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function le(v){var j={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(J){return j[J]})}var Le=/\/+/g;function Ne(v,j){return typeof v=="object"&&v!==null&&v.key!=null?le(""+v.key):j.toString(36)}function Ve(v,j,J,ee,se){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var de=!1;if(v===null)de=!0;else switch(oe){case"string":case"number":de=!0;break;case"object":switch(v.$$typeof){case o:case a:de=!0}}if(de)return de=v,se=se(de),v=ee===""?"."+Ne(de,0):ee,T(se)?(J="",v!=null&&(J=v.replace(Le,"$&/")+"/"),Ve(se,j,J,"",function(Ee){return Ee})):se!=null&&(Te(se)&&(se=xe(se,J+(!se.key||de&&de.key===se.key?"":(""+se.key).replace(Le,"$&/")+"/")+v)),j.push(se)),1;if(de=0,ee=ee===""?".":ee+":",T(v))for(var ue=0;ue<v.length;ue++){oe=v[ue];var ve=ee+Ne(oe,ue);de+=Ve(oe,j,J,ve,se)}else if(ve=X(v),typeof ve=="function")for(v=ve.call(v),ue=0;!(oe=v.next()).done;)oe=oe.value,ve=ee+Ne(oe,ue++),de+=Ve(oe,j,J,ve,se);else if(oe==="object")throw j=String(v),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return de}function Xe(v,j,J){if(v==null)return v;var ee=[],se=0;return Ve(v,ee,"","",function(oe){return j.call(J,oe,se++)}),ee}function Qe(v){if(v._status===-1){var j=v._result;j=j(),j.then(function(J){(v._status===0||v._status===-1)&&(v._status=1,v._result=J)},function(J){(v._status===0||v._status===-1)&&(v._status=2,v._result=J)}),v._status===-1&&(v._status=0,v._result=j)}if(v._status===1)return v._result.default;throw v._result}var ye={current:null},z={transition:null},H={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:z,ReactCurrentOwner:$};function O(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Xe,forEach:function(v,j,J){Xe(v,function(){j.apply(this,arguments)},J)},count:function(v){var j=0;return Xe(v,function(){j++}),j},toArray:function(v){return Xe(v,function(j){return j})||[]},only:function(v){if(!Te(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ne.Component=Y,ne.Fragment=c,ne.Profiler=m,ne.PureComponent=ce,ne.StrictMode=f,ne.Suspense=N,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ne.act=O,ne.cloneElement=function(v,j,J){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ee=q({},v.props),se=v.key,oe=v.ref,de=v._owner;if(j!=null){if(j.ref!==void 0&&(oe=j.ref,de=$.current),j.key!==void 0&&(se=""+j.key),v.type&&v.type.defaultProps)var ue=v.type.defaultProps;for(ve in j)K.call(j,ve)&&!P.hasOwnProperty(ve)&&(ee[ve]=j[ve]===void 0&&ue!==void 0?ue[ve]:j[ve])}var ve=arguments.length-2;if(ve===1)ee.children=J;else if(1<ve){ue=Array(ve);for(var Ee=0;Ee<ve;Ee++)ue[Ee]=arguments[Ee+2];ee.children=ue}return{$$typeof:o,type:v.type,key:se,ref:oe,props:ee,_owner:de}},ne.createContext=function(v){return v={$$typeof:C,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:w,_context:v},v.Consumer=v},ne.createElement=A,ne.createFactory=function(v){var j=A.bind(null,v);return j.type=v,j},ne.createRef=function(){return{current:null}},ne.forwardRef=function(v){return{$$typeof:L,render:v}},ne.isValidElement=Te,ne.lazy=function(v){return{$$typeof:Q,_payload:{_status:-1,_result:v},_init:Qe}},ne.memo=function(v,j){return{$$typeof:B,type:v,compare:j===void 0?null:j}},ne.startTransition=function(v){var j=z.transition;z.transition={};try{v()}finally{z.transition=j}},ne.unstable_act=O,ne.useCallback=function(v,j){return ye.current.useCallback(v,j)},ne.useContext=function(v){return ye.current.useContext(v)},ne.useDebugValue=function(){},ne.useDeferredValue=function(v){return ye.current.useDeferredValue(v)},ne.useEffect=function(v,j){return ye.current.useEffect(v,j)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(v,j,J){return ye.current.useImperativeHandle(v,j,J)},ne.useInsertionEffect=function(v,j){return ye.current.useInsertionEffect(v,j)},ne.useLayoutEffect=function(v,j){return ye.current.useLayoutEffect(v,j)},ne.useMemo=function(v,j){return ye.current.useMemo(v,j)},ne.useReducer=function(v,j,J){return ye.current.useReducer(v,j,J)},ne.useRef=function(v){return ye.current.useRef(v)},ne.useState=function(v){return ye.current.useState(v)},ne.useSyncExternalStore=function(v,j,J){return ye.current.useSyncExternalStore(v,j,J)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var ud;function aa(){return ud||(ud=1,Bs.exports=ah()),Bs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function uh(){if(cd)return ri;cd=1;var o=aa(),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(L,N,B){var Q,W={},X=null,ae=null;B!==void 0&&(X=""+B),N.key!==void 0&&(X=""+N.key),N.ref!==void 0&&(ae=N.ref);for(Q in N)f.call(N,Q)&&!w.hasOwnProperty(Q)&&(W[Q]=N[Q]);if(L&&L.defaultProps)for(Q in N=L.defaultProps,N)W[Q]===void 0&&(W[Q]=N[Q]);return{$$typeof:a,type:L,key:X,ref:ae,props:W,_owner:m.current}}return ri.Fragment=c,ri.jsx=C,ri.jsxs=C,ri}var dd;function ch(){return dd||(dd=1,Hs.exports=uh()),Hs.exports}var l=ch(),wo={},Ws={exports:{}},ot={},Us={exports:{}},$s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd;function dh(){return fd||(fd=1,(function(o){function a(z,H){var O=z.length;z.push(H);e:for(;0<O;){var v=O-1>>>1,j=z[v];if(0<m(j,H))z[v]=H,z[O]=j,O=v;else break e}}function c(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var H=z[0],O=z.pop();if(O!==H){z[0]=O;e:for(var v=0,j=z.length,J=j>>>1;v<J;){var ee=2*(v+1)-1,se=z[ee],oe=ee+1,de=z[oe];if(0>m(se,O))oe<j&&0>m(de,se)?(z[v]=de,z[oe]=O,v=oe):(z[v]=se,z[ee]=O,v=ee);else if(oe<j&&0>m(de,O))z[v]=de,z[oe]=O,v=oe;else break e}}return H}function m(z,H){var O=z.sortIndex-H.sortIndex;return O!==0?O:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var C=Date,L=C.now();o.unstable_now=function(){return C.now()-L}}var N=[],B=[],Q=1,W=null,X=3,ae=!1,q=!1,U=!1,Y=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(z){for(var H=c(B);H!==null;){if(H.callback===null)f(B);else if(H.startTime<=z)f(B),H.sortIndex=H.expirationTime,a(N,H);else break;H=c(B)}}function T(z){if(U=!1,re(z),!q)if(c(N)!==null)q=!0,Qe(K);else{var H=c(B);H!==null&&ye(T,H.startTime-z)}}function K(z,H){q=!1,U&&(U=!1,me(A),A=-1),ae=!0;var O=X;try{for(re(H),W=c(N);W!==null&&(!(W.expirationTime>H)||z&&!le());){var v=W.callback;if(typeof v=="function"){W.callback=null,X=W.priorityLevel;var j=v(W.expirationTime<=H);H=o.unstable_now(),typeof j=="function"?W.callback=j:W===c(N)&&f(N),re(H)}else f(N);W=c(N)}if(W!==null)var J=!0;else{var ee=c(B);ee!==null&&ye(T,ee.startTime-H),J=!1}return J}finally{W=null,X=O,ae=!1}}var $=!1,P=null,A=-1,xe=5,Te=-1;function le(){return!(o.unstable_now()-Te<xe)}function Le(){if(P!==null){var z=o.unstable_now();Te=z;var H=!0;try{H=P(!0,z)}finally{H?Ne():($=!1,P=null)}}else $=!1}var Ne;if(typeof ce=="function")Ne=function(){ce(Le)};else if(typeof MessageChannel!="undefined"){var Ve=new MessageChannel,Xe=Ve.port2;Ve.port1.onmessage=Le,Ne=function(){Xe.postMessage(null)}}else Ne=function(){Y(Le,0)};function Qe(z){P=z,$||($=!0,Ne())}function ye(z,H){A=Y(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){q||ae||(q=!0,Qe(K))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return X},o.unstable_getFirstCallbackNode=function(){return c(N)},o.unstable_next=function(z){switch(X){case 1:case 2:case 3:var H=3;break;default:H=X}var O=X;X=H;try{return z()}finally{X=O}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=X;X=z;try{return H()}finally{X=O}},o.unstable_scheduleCallback=function(z,H,O){var v=o.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?v+O:v):O=v,z){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=O+j,z={id:Q++,callback:H,priorityLevel:z,startTime:O,expirationTime:j,sortIndex:-1},O>v?(z.sortIndex=O,a(B,z),c(N)===null&&z===c(B)&&(U?(me(A),A=-1):U=!0,ye(T,O-v))):(z.sortIndex=j,a(N,z),q||ae||(q=!0,Qe(K))),z},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(z){var H=X;return function(){var O=X;X=H;try{return z.apply(this,arguments)}finally{X=O}}}})($s)),$s}var pd;function fh(){return pd||(pd=1,Us.exports=dh()),Us.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function ph(){if(hd)return ot;hd=1;var o=aa(),a=fh();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,m={};function w(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(m[e]=t,e=0;e<t.length;e++)f.add(t[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),N=Object.prototype.hasOwnProperty,B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},W={};function X(e){return N.call(W,e)?!0:N.call(Q,e)?!1:B.test(e)?W[e]=!0:(Q[e]=!0,!1)}function ae(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,r,n){if(t===null||typeof t=="undefined"||ae(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,r,n,i,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,ce);Y[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,ce);Y[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,ce);Y[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,n){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,r,i,n)&&(r=null),n||i===null?X(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var T=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),$=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),le=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,v;function j(e){if(v===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=n.stack.split(`
`),u=i.length-1,d=s.length-1;1<=u&&0<=d&&i[u]!==s[d];)d--;for(;1<=u&&0<=d;u--,d--)if(i[u]!==s[d]){if(u!==1||d!==1)do if(u--,d--,0>d||i[u]!==s[d]){var p=`
`+i[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{J=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function se(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case $:return"Portal";case xe:return"Profiler";case A:return"StrictMode";case Ne:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=Ee(e))}function yr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ve(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qo(e,t){var r=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function ma(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function va(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function Yo(e,t){va(e,t);var r=ue(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Go(e,t.type,r):t.hasOwnProperty("defaultValue")&&Go(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Go(e,t,r){(t!=="number"||jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function Hr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(gn(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function ya(e,t){var r=ue(t.value),n=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ko(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,ka=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},df=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yn[t]=yn[e]})});function Sa(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||yn.hasOwnProperty(e)&&yn[e]?(""+t).trim():t+"px"}function Na(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Sa(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ff=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(ff[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Zo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,Br=null,Wr=null;function Ca(e){if(e=Wn(e)){if(typeof tl!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Ii(t),tl(e.stateNode,e.type,t))}}function Ea(e){Br?Wr?Wr.push(e):Wr=[e]:Br=e}function _a(){if(Br){var e=Br,t=Wr;if(Wr=Br=null,Ca(e),t)for(e=0;e<t.length;e++)Ca(t[e])}}function za(e,t){return e(t)}function La(){}var rl=!1;function Pa(e,t,r){if(rl)return e(t,r);rl=!0;try{return za(e,t,r)}finally{rl=!1,(Br!==null||Wr!==null)&&(La(),_a())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ii(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var nl=!1;if(L)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){nl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{nl=!1}function pf(e,t,r,n,i,s,u,d,p){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(S){this.onError(S)}}var kn=!1,fi=null,pi=!1,il=null,hf={onError:function(e){kn=!0,fi=e}};function mf(e,t,r,n,i,s,u,d,p){kn=!1,fi=null,pf.apply(hf,arguments)}function vf(e,t,r,n,i,s,u,d,p){if(mf.apply(this,arguments),kn){if(kn){var y=fi;kn=!1,fi=null}else throw Error(c(198));pi||(pi=!0,il=y)}}function wr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(wr(e)!==e)throw Error(c(188))}function gf(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Oa(i),e;if(s===n)return Oa(i),t;s=s.sibling}throw Error(c(188))}if(r.return!==n.return)r=i,n=s;else{for(var u=!1,d=i.child;d;){if(d===r){u=!0,r=i,n=s;break}if(d===n){u=!0,n=i,r=s;break}d=d.sibling}if(!u){for(d=s.child;d;){if(d===r){u=!0,r=s,n=i;break}if(d===n){u=!0,n=s,r=i;break}d=d.sibling}if(!u)throw Error(c(189))}}if(r.alternate!==n)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Ra(e){return e=gf(e),e!==null?Ia(e):null}function Ia(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ia(e);if(t!==null)return t;e=e.sibling}return null}var Fa=a.unstable_scheduleCallback,Da=a.unstable_cancelCallback,xf=a.unstable_shouldYield,yf=a.unstable_requestPaint,Oe=a.unstable_now,wf=a.unstable_getCurrentPriorityLevel,ol=a.unstable_ImmediatePriority,Aa=a.unstable_UserBlockingPriority,hi=a.unstable_NormalPriority,jf=a.unstable_LowPriority,Ma=a.unstable_IdlePriority,mi=null,Ot=null;function kf(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Cf,Sf=Math.log,Nf=Math.LN2;function Cf(e){return e>>>=0,e===0?32:31-(Sf(e)/Nf|0)|0}var vi=64,gi=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,u=r&268435455;if(u!==0){var d=u&~i;d!==0?n=Sn(d):(s&=u,s!==0&&(n=Sn(s)))}else u=r&~i,u!==0?n=Sn(u):s!==0&&(n=Sn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-kt(t),i=1<<r,n|=e[r],t&=~i;return n}function Ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _f(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-kt(s),d=1<<u,p=i[u];p===-1?((d&r)===0||(d&n)!==0)&&(i[u]=Ef(d,t)):p<=t&&(e.expiredLanes|=d),s&=~d}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ha(){var e=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),e}function sl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Nn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function zf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-kt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function al(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-kt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function Ba(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wa,ul,Ua,$a,ba,cl=!1,yi=[],qt=null,Kt=null,Xt=null,Cn=new Map,En=new Map,Zt=[],Lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function _n(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Wn(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pf(e,t,r,n,i){switch(t){case"focusin":return qt=_n(qt,e,t,r,n,i),!0;case"dragenter":return Kt=_n(Kt,e,t,r,n,i),!0;case"mouseover":return Xt=_n(Xt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return Cn.set(s,_n(Cn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,En.set(s,_n(En.get(s)||null,e,t,r,n,i)),!0}return!1}function Qa(e){var t=jr(e.target);if(t!==null){var r=wr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ta(r),t!==null){e.blockedOn=t,ba(e.priority,function(){Ua(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Jo=n,r.target.dispatchEvent(n),Jo=null}else return t=Wn(r),t!==null&&ul(t),e.blockedOn=r,!1;t.shift()}return!0}function Ya(e,t,r){wi(e)&&r.delete(t)}function Tf(){cl=!1,qt!==null&&wi(qt)&&(qt=null),Kt!==null&&wi(Kt)&&(Kt=null),Xt!==null&&wi(Xt)&&(Xt=null),Cn.forEach(Ya),En.forEach(Ya)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,cl||(cl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Tf)))}function Ln(e){function t(i){return zn(i,e)}if(0<yi.length){zn(yi[0],e);for(var r=1;r<yi.length;r++){var n=yi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(qt!==null&&zn(qt,e),Kt!==null&&zn(Kt,e),Xt!==null&&zn(Xt,e),Cn.forEach(t),En.forEach(t),r=0;r<Zt.length;r++)n=Zt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Zt.length&&(r=Zt[0],r.blockedOn===null);)Qa(r),r.blockedOn===null&&Zt.shift()}var Ur=T.ReactCurrentBatchConfig,ji=!0;function Of(e,t,r,n){var i=ge,s=Ur.transition;Ur.transition=null;try{ge=1,dl(e,t,r,n)}finally{ge=i,Ur.transition=s}}function Rf(e,t,r,n){var i=ge,s=Ur.transition;Ur.transition=null;try{ge=4,dl(e,t,r,n)}finally{ge=i,Ur.transition=s}}function dl(e,t,r,n){if(ji){var i=fl(e,t,r,n);if(i===null)Ll(e,t,n,ki,r),Va(e,n);else if(Pf(i,e,t,r,n))n.stopPropagation();else if(Va(e,n),t&4&&-1<Lf.indexOf(e)){for(;i!==null;){var s=Wn(i);if(s!==null&&Wa(s),s=fl(e,t,r,n),s===null&&Ll(e,t,n,ki,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Ll(e,t,n,null,r)}}var ki=null;function fl(e,t,r,n){if(ki=null,e=el(n),e=jr(e),e!==null)if(t=wr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ta(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ki=e,null}function Ga(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case ol:return 1;case Aa:return 4;case hi:case jf:return 16;case Ma:return 536870912;default:return 16}default:return 16}}var Jt=null,pl=null,Si=null;function qa(){if(Si)return Si;var e,t=pl,r=t.length,n,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(n=1;n<=u&&t[r-n]===i[s-n];n++);return Si=i.slice(e,1<n?1-n:void 0)}function Ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Ka(){return!1}function st(e){function t(r,n,i,s,u){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(r=e[d],this[d]=r?r(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ci:Ka,this.isPropagationStopped=Ka,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=st($r),Pn=O({},$r,{view:0,detail:0}),If=st(Pn),ml,vl,Tn,Ei=O({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(ml=e.screenX-Tn.screenX,vl=e.screenY-Tn.screenY):vl=ml=0,Tn=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),Xa=st(Ei),Ff=O({},Ei,{dataTransfer:0}),Df=st(Ff),Af=O({},Pn,{relatedTarget:0}),gl=st(Af),Mf=O({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Hf=st(Mf),Bf=O({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=st(Bf),Uf=O({},$r,{data:0}),Za=st(Uf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vf[e])?!!t[e]:!1}function xl(){return Qf}var Yf=O({},Pn,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=st(Yf),qf=O({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=st(qf),Kf=O({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),Xf=st(Kf),Zf=O({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jf=st(Zf),ep=O({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=st(ep),rp=[9,13,27,32],yl=L&&"CompositionEvent"in window,On=null;L&&"documentMode"in document&&(On=document.documentMode);var np=L&&"TextEvent"in window&&!On,eu=L&&(!yl||On&&8<On&&11>=On),tu=" ",ru=!1;function nu(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function ip(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(ru=!0,tu);case"textInput":return e=t.data,e===tu&&ru?null:e;default:return null}}function op(e,t){if(br)return e==="compositionend"||!yl&&nu(e,t)?(e=qa(),Si=pl=Jt=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eu&&t.locale!=="ko"?null:t.data;default:return null}}var lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lp[e.type]:t==="textarea"}function lu(e,t,r,n){Ea(n),t=Ti(t,"onChange"),0<t.length&&(r=new hl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Rn=null,In=null;function sp(e){Nu(e,0)}function _i(e){var t=qr(e);if(yr(t))return e}function ap(e,t){if(e==="change")return t}var su=!1;if(L){var wl;if(L){var jl="oninput"in document;if(!jl){var au=document.createElement("div");au.setAttribute("oninput","return;"),jl=typeof au.oninput=="function"}wl=jl}else wl=!1;su=wl&&(!document.documentMode||9<document.documentMode)}function uu(){Rn&&(Rn.detachEvent("onpropertychange",cu),In=Rn=null)}function cu(e){if(e.propertyName==="value"&&_i(In)){var t=[];lu(t,In,e,el(e)),Pa(sp,t)}}function up(e,t,r){e==="focusin"?(uu(),Rn=t,In=r,Rn.attachEvent("onpropertychange",cu)):e==="focusout"&&uu()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(In)}function dp(e,t){if(e==="click")return _i(t)}function fp(e,t){if(e==="input"||e==="change")return _i(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:pp;function Fn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!N.call(t,i)||!St(e[i],t[i]))return!1}return!0}function du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fu(e,t){var r=du(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=du(r)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hu(){for(var e=window,t=jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=jt(e.document)}return t}function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hp(e){var t=hu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&pu(r.ownerDocument.documentElement,r)){if(n!==null&&kl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=fu(r,s);var u=fu(r,n);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=L&&"documentMode"in document&&11>=document.documentMode,Vr=null,Sl=null,Dn=null,Nl=!1;function mu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Nl||Vr==null||Vr!==jt(n)||(n=Vr,"selectionStart"in n&&kl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Dn&&Fn(Dn,n)||(Dn=n,n=Ti(Sl,"onSelect"),0<n.length&&(t=new hl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Vr)))}function zi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Qr={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Cl={},vu={};L&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Li(e){if(Cl[e])return Cl[e];if(!Qr[e])return e;var t=Qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vu)return Cl[e]=t[r];return e}var gu=Li("animationend"),xu=Li("animationiteration"),yu=Li("animationstart"),wu=Li("transitionend"),ju=new Map,ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){ju.set(e,t),w(t,[e])}for(var El=0;El<ku.length;El++){var _l=ku[El],vp=_l.toLowerCase(),gp=_l[0].toUpperCase()+_l.slice(1);er(vp,"on"+gp)}er(gu,"onAnimationEnd"),er(xu,"onAnimationIteration"),er(yu,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(wu,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Su(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,vf(n,t,void 0,e),e.currentTarget=null}function Nu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var u=n.length-1;0<=u;u--){var d=n[u],p=d.instance,y=d.currentTarget;if(d=d.listener,p!==s&&i.isPropagationStopped())break e;Su(i,d,y),s=p}else for(u=0;u<n.length;u++){if(d=n[u],p=d.instance,y=d.currentTarget,d=d.listener,p!==s&&i.isPropagationStopped())break e;Su(i,d,y),s=p}}}if(pi)throw e=il,pi=!1,il=null,e}function je(e,t){var r=t[Fl];r===void 0&&(r=t[Fl]=new Set);var n=e+"__bubble";r.has(n)||(Cu(t,e,2,!1),r.add(n))}function zl(e,t,r){var n=0;t&&(n|=4),Cu(r,e,n,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function Mn(e){if(!e[Pi]){e[Pi]=!0,f.forEach(function(r){r!=="selectionchange"&&(xp.has(r)||zl(r,!1,e),zl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,zl("selectionchange",!1,t))}}function Cu(e,t,r,n){switch(Ga(t)){case 1:var i=Of;break;case 4:i=Rf;break;default:i=dl}r=i.bind(null,t,r,e),i=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ll(e,t,r,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var d=n.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(u===4)for(u=n.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;u=u.return}for(;d!==null;){if(u=jr(d),u===null)return;if(p=u.tag,p===5||p===6){n=s=u;continue e}d=d.parentNode}}n=n.return}Pa(function(){var y=s,S=el(r),E=[];e:{var k=ju.get(e);if(k!==void 0){var R=hl,F=e;switch(e){case"keypress":if(Ni(r)===0)break e;case"keydown":case"keyup":R=Gf;break;case"focusin":F="focus",R=gl;break;case"focusout":F="blur",R=gl;break;case"beforeblur":case"afterblur":R=gl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Xf;break;case gu:case xu:case yu:R=Hf;break;case wu:R=Jf;break;case"scroll":R=If;break;case"wheel":R=tp;break;case"copy":case"cut":case"paste":R=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ja}var D=(t&4)!==0,Re=!D&&e==="scroll",g=D?k!==null?k+"Capture":null:k;D=[];for(var h=y,x;h!==null;){x=h;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,g!==null&&(_=wn(h,g),_!=null&&D.push(Hn(h,_,x)))),Re)break;h=h.return}0<D.length&&(k=new R(k,F,null,r,S),E.push({event:k,listeners:D}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&r!==Jo&&(F=r.relatedTarget||r.fromElement)&&(jr(F)||F[At]))break e;if((R||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,R?(F=r.relatedTarget||r.toElement,R=y,F=F?jr(F):null,F!==null&&(Re=wr(F),F!==Re||F.tag!==5&&F.tag!==6)&&(F=null)):(R=null,F=y),R!==F)){if(D=Xa,_="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(D=Ja,_="onPointerLeave",g="onPointerEnter",h="pointer"),Re=R==null?k:qr(R),x=F==null?k:qr(F),k=new D(_,h+"leave",R,r,S),k.target=Re,k.relatedTarget=x,_=null,jr(S)===y&&(D=new D(g,h+"enter",F,r,S),D.target=x,D.relatedTarget=Re,_=D),Re=_,R&&F)t:{for(D=R,g=F,h=0,x=D;x;x=Yr(x))h++;for(x=0,_=g;_;_=Yr(_))x++;for(;0<h-x;)D=Yr(D),h--;for(;0<x-h;)g=Yr(g),x--;for(;h--;){if(D===g||g!==null&&D===g.alternate)break t;D=Yr(D),g=Yr(g)}D=null}else D=null;R!==null&&Eu(E,k,R,D,!1),F!==null&&Re!==null&&Eu(E,Re,F,D,!0)}}e:{if(k=y?qr(y):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var M=ap;else if(ou(k))if(su)M=fp;else{M=cp;var b=up}else(R=k.nodeName)&&R.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=dp);if(M&&(M=M(e,y))){lu(E,M,r,S);break e}b&&b(e,k,y),e==="focusout"&&(b=k._wrapperState)&&b.controlled&&k.type==="number"&&Go(k,"number",k.value)}switch(b=y?qr(y):window,e){case"focusin":(ou(b)||b.contentEditable==="true")&&(Vr=b,Sl=y,Dn=null);break;case"focusout":Dn=Sl=Vr=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,mu(E,r,S);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":mu(E,r,S)}var V;if(yl)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else br?nu(e,r)&&(G="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(G="onCompositionStart");G&&(eu&&r.locale!=="ko"&&(br||G!=="onCompositionStart"?G==="onCompositionEnd"&&br&&(V=qa()):(Jt=S,pl="value"in Jt?Jt.value:Jt.textContent,br=!0)),b=Ti(y,G),0<b.length&&(G=new Za(G,e,null,r,S),E.push({event:G,listeners:b}),V?G.data=V:(V=iu(r),V!==null&&(G.data=V)))),(V=np?ip(e,r):op(e,r))&&(y=Ti(y,"onBeforeInput"),0<y.length&&(S=new Za("onBeforeInput","beforeinput",null,r,S),E.push({event:S,listeners:y}),S.data=V))}Nu(E,t)})}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ti(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wn(e,r),s!=null&&n.unshift(Hn(e,s,i)),s=wn(e,t),s!=null&&n.push(Hn(e,s,i))),e=e.return}return n}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,r,n,i){for(var s=t._reactName,u=[];r!==null&&r!==n;){var d=r,p=d.alternate,y=d.stateNode;if(p!==null&&p===n)break;d.tag===5&&y!==null&&(d=y,i?(p=wn(r,s),p!=null&&u.unshift(Hn(r,p,d))):i||(p=wn(r,s),p!=null&&u.push(Hn(r,p,d)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var yp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function _u(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(wp,"")}function Oi(e,t,r){if(t=_u(t),_u(e)!==t&&r)throw Error(c(425))}function Ri(){}var Pl=null,Tl=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof zu!="undefined"?function(e){return zu.resolve(null).then(e).catch(Sp)}:Rl;function Sp(e){setTimeout(function(){throw e})}function Il(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ln(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ln(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Gr,Bn="__reactProps$"+Gr,At="__reactContainer$"+Gr,Fl="__reactEvents$"+Gr,Np="__reactListeners$"+Gr,Cp="__reactHandles$"+Gr;function jr(e){var t=e[Rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[At]||r[Rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Lu(e);e!==null;){if(r=e[Rt])return r;e=Lu(e)}return t}e=r,r=e.parentNode}return null}function Wn(e){return e=e[Rt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ii(e){return e[Bn]||null}var Dl=[],Kr=-1;function rr(e){return{current:e}}function ke(e){0>Kr||(e.current=Dl[Kr],Dl[Kr]=null,Kr--)}function we(e,t){Kr++,Dl[Kr]=e.current,e.current=t}var nr={},Ye=rr(nr),et=rr(!1),kr=nr;function Xr(e,t){var r=e.type.contextTypes;if(!r)return nr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Fi(){ke(et),ke(Ye)}function Pu(e,t,r){if(Ye.current!==nr)throw Error(c(168));we(Ye,t),we(et,r)}function Tu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(c(108,de(e)||"Unknown",i));return O({},r,n)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,kr=Ye.current,we(Ye,e),we(et,et.current),!0}function Ou(e,t,r){var n=e.stateNode;if(!n)throw Error(c(169));r?(e=Tu(e,t,kr),n.__reactInternalMemoizedMergedChildContext=e,ke(et),ke(Ye),we(Ye,e)):ke(et),we(et,r)}var Mt=null,Ai=!1,Al=!1;function Ru(e){Mt===null?Mt=[e]:Mt.push(e)}function Ep(e){Ai=!0,Ru(e)}function ir(){if(!Al&&Mt!==null){Al=!0;var e=0,t=ge;try{var r=Mt;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Mt=null,Ai=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),Fa(ol,ir),i}finally{ge=t,Al=!1}}return null}var Zr=[],Jr=0,Mi=null,Hi=0,ht=[],mt=0,Sr=null,Ht=1,Bt="";function Nr(e,t){Zr[Jr++]=Hi,Zr[Jr++]=Mi,Mi=e,Hi=t}function Iu(e,t,r){ht[mt++]=Ht,ht[mt++]=Bt,ht[mt++]=Sr,Sr=e;var n=Ht;e=Bt;var i=32-kt(n)-1;n&=~(1<<i),r+=1;var s=32-kt(t)+i;if(30<s){var u=i-i%5;s=(n&(1<<u)-1).toString(32),n>>=u,i-=u,Ht=1<<32-kt(t)+i|r<<i|n,Bt=s+e}else Ht=1<<s|r<<i|n,Bt=e}function Ml(e){e.return!==null&&(Nr(e,1),Iu(e,1,0))}function Hl(e){for(;e===Mi;)Mi=Zr[--Jr],Zr[Jr]=null,Hi=Zr[--Jr],Zr[Jr]=null;for(;e===Sr;)Sr=ht[--mt],ht[mt]=null,Bt=ht[--mt],ht[mt]=null,Ht=ht[--mt],ht[mt]=null}var at=null,ut=null,Ce=!1,Nt=null;function Fu(e,t){var r=yt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Du(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ut=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Sr!==null?{id:Ht,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=yt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,ut=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(Ce){var t=ut;if(t){var r=t;if(!Du(e,t)){if(Bl(e))throw Error(c(418));t=tr(r.nextSibling);var n=at;t&&Du(e,t)?Fu(n,r):(e.flags=e.flags&-4097|2,Ce=!1,at=e)}}else{if(Bl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ce=!1,at=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Bi(e){if(e!==at)return!1;if(!Ce)return Au(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=ut)){if(Bl(e))throw Mu(),Error(c(418));for(;t;)Fu(e,t),t=tr(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ut=tr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=at?tr(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=ut;e;)e=tr(e.nextSibling)}function en(){ut=at=null,Ce=!1}function Ul(e){Nt===null?Nt=[e]:Nt.push(e)}var _p=T.ReactCurrentBatchConfig;function Un(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var n=r.stateNode}if(!n)throw Error(c(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var d=i.refs;u===null?delete d[s]:d[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function Bu(e){function t(g,h){if(e){var x=g.deletions;x===null?(g.deletions=[h],g.flags|=16):x.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=fr(g,h),g.index=0,g.sibling=null,g}function s(g,h,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<h?(g.flags|=2,h):x):(g.flags|=2,h)):(g.flags|=1048576,h)}function u(g){return e&&g.alternate===null&&(g.flags|=2),g}function d(g,h,x,_){return h===null||h.tag!==6?(h=Rs(x,g.mode,_),h.return=g,h):(h=i(h,x),h.return=g,h)}function p(g,h,x,_){var M=x.type;return M===P?S(g,h,x.props.children,_,x.key):h!==null&&(h.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Qe&&Hu(M)===h.type)?(_=i(h,x.props),_.ref=Un(g,h,x),_.return=g,_):(_=fo(x.type,x.key,x.props,null,g.mode,_),_.ref=Un(g,h,x),_.return=g,_)}function y(g,h,x,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Is(x,g.mode,_),h.return=g,h):(h=i(h,x.children||[]),h.return=g,h)}function S(g,h,x,_,M){return h===null||h.tag!==7?(h=Or(x,g.mode,_,M),h.return=g,h):(h=i(h,x),h.return=g,h)}function E(g,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Rs(""+h,g.mode,x),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case K:return x=fo(h.type,h.key,h.props,null,g.mode,x),x.ref=Un(g,null,h),x.return=g,x;case $:return h=Is(h,g.mode,x),h.return=g,h;case Qe:var _=h._init;return E(g,_(h._payload),x)}if(gn(h)||H(h))return h=Or(h,g.mode,x,null),h.return=g,h;Wi(g,h)}return null}function k(g,h,x,_){var M=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:d(g,h,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case K:return x.key===M?p(g,h,x,_):null;case $:return x.key===M?y(g,h,x,_):null;case Qe:return M=x._init,k(g,h,M(x._payload),_)}if(gn(x)||H(x))return M!==null?null:S(g,h,x,_,null);Wi(g,x)}return null}function R(g,h,x,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(x)||null,d(h,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case K:return g=g.get(_.key===null?x:_.key)||null,p(h,g,_,M);case $:return g=g.get(_.key===null?x:_.key)||null,y(h,g,_,M);case Qe:var b=_._init;return R(g,h,x,b(_._payload),M)}if(gn(_)||H(_))return g=g.get(x)||null,S(h,g,_,M,null);Wi(h,_)}return null}function F(g,h,x,_){for(var M=null,b=null,V=h,G=h=0,Ue=null;V!==null&&G<x.length;G++){V.index>G?(Ue=V,V=null):Ue=V.sibling;var pe=k(g,V,x[G],_);if(pe===null){V===null&&(V=Ue);break}e&&V&&pe.alternate===null&&t(g,V),h=s(pe,h,G),b===null?M=pe:b.sibling=pe,b=pe,V=Ue}if(G===x.length)return r(g,V),Ce&&Nr(g,G),M;if(V===null){for(;G<x.length;G++)V=E(g,x[G],_),V!==null&&(h=s(V,h,G),b===null?M=V:b.sibling=V,b=V);return Ce&&Nr(g,G),M}for(V=n(g,V);G<x.length;G++)Ue=R(V,g,G,x[G],_),Ue!==null&&(e&&Ue.alternate!==null&&V.delete(Ue.key===null?G:Ue.key),h=s(Ue,h,G),b===null?M=Ue:b.sibling=Ue,b=Ue);return e&&V.forEach(function(pr){return t(g,pr)}),Ce&&Nr(g,G),M}function D(g,h,x,_){var M=H(x);if(typeof M!="function")throw Error(c(150));if(x=M.call(x),x==null)throw Error(c(151));for(var b=M=null,V=h,G=h=0,Ue=null,pe=x.next();V!==null&&!pe.done;G++,pe=x.next()){V.index>G?(Ue=V,V=null):Ue=V.sibling;var pr=k(g,V,pe.value,_);if(pr===null){V===null&&(V=Ue);break}e&&V&&pr.alternate===null&&t(g,V),h=s(pr,h,G),b===null?M=pr:b.sibling=pr,b=pr,V=Ue}if(pe.done)return r(g,V),Ce&&Nr(g,G),M;if(V===null){for(;!pe.done;G++,pe=x.next())pe=E(g,pe.value,_),pe!==null&&(h=s(pe,h,G),b===null?M=pe:b.sibling=pe,b=pe);return Ce&&Nr(g,G),M}for(V=n(g,V);!pe.done;G++,pe=x.next())pe=R(V,g,G,pe.value,_),pe!==null&&(e&&pe.alternate!==null&&V.delete(pe.key===null?G:pe.key),h=s(pe,h,G),b===null?M=pe:b.sibling=pe,b=pe);return e&&V.forEach(function(lh){return t(g,lh)}),Ce&&Nr(g,G),M}function Re(g,h,x,_){if(typeof x=="object"&&x!==null&&x.type===P&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case K:e:{for(var M=x.key,b=h;b!==null;){if(b.key===M){if(M=x.type,M===P){if(b.tag===7){r(g,b.sibling),h=i(b,x.props.children),h.return=g,g=h;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Qe&&Hu(M)===b.type){r(g,b.sibling),h=i(b,x.props),h.ref=Un(g,b,x),h.return=g,g=h;break e}r(g,b);break}else t(g,b);b=b.sibling}x.type===P?(h=Or(x.props.children,g.mode,_,x.key),h.return=g,g=h):(_=fo(x.type,x.key,x.props,null,g.mode,_),_.ref=Un(g,h,x),_.return=g,g=_)}return u(g);case $:e:{for(b=x.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){r(g,h.sibling),h=i(h,x.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=Is(x,g.mode,_),h.return=g,g=h}return u(g);case Qe:return b=x._init,Re(g,h,b(x._payload),_)}if(gn(x))return F(g,h,x,_);if(H(x))return D(g,h,x,_);Wi(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,x),h.return=g,g=h):(r(g,h),h=Rs(x,g.mode,_),h.return=g,g=h),u(g)):r(g,h)}return Re}var tn=Bu(!0),Wu=Bu(!1),Ui=rr(null),$i=null,rn=null,$l=null;function bl(){$l=rn=$i=null}function Vl(e){var t=Ui.current;ke(Ui),e._currentValue=t}function Ql(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function nn(e,t){$i=e,$l=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if($i===null)throw Error(c(308));rn=e,$i.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Cr=null;function Yl(e){Cr===null?Cr=[e]:Cr.push(e)}function Uu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Yl(t)):(r.next=i.next,i.next=r),t.interleaved=r,Wt(e,n)}function Wt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var or=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Wt(e,r)}return i=n.interleaved,i===null?(t.next=t,Yl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Wt(e,r)}function bi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,al(e,r)}}function bu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=u:s=s.next=u,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Vi(e,t,r,n){var i=e.updateQueue;or=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,y=p.next;p.next=null,u===null?s=y:u.next=y,u=p;var S=e.alternate;S!==null&&(S=S.updateQueue,d=S.lastBaseUpdate,d!==u&&(d===null?S.firstBaseUpdate=y:d.next=y,S.lastBaseUpdate=p))}if(s!==null){var E=i.baseState;u=0,S=y=p=null,d=s;do{var k=d.lane,R=d.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:R,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var F=e,D=d;switch(k=t,R=r,D.tag){case 1:if(F=D.payload,typeof F=="function"){E=F.call(R,E,k);break e}E=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=D.payload,k=typeof F=="function"?F.call(R,E,k):F,k==null)break e;E=O({},E,k);break e;case 2:or=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[d]:k.push(d))}else R={eventTime:R,lane:k,tag:d.tag,payload:d.payload,callback:d.callback,next:null},S===null?(y=S=R,p=E):S=S.next=R,u|=k;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;k=d,d=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(p=E),i.baseState=p,i.firstBaseUpdate=y,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);zr|=u,e.lanes=u,e.memoizedState=E}}function Vu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(c(191,i));i.call(n)}}}var $n={},It=rr($n),bn=rr($n),Vn=rr($n);function Er(e){if(e===$n)throw Error(c(174));return e}function ql(e,t){switch(we(Vn,t),we(bn,e),we(It,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ko(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ko(t,e)}ke(It),we(It,t)}function on(){ke(It),ke(bn),ke(Vn)}function Qu(e){Er(Vn.current);var t=Er(It.current),r=Ko(t,e.type);t!==r&&(we(bn,e),we(It,r))}function Kl(e){bn.current===e&&(ke(It),ke(bn))}var _e=rr(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Zl(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Yi=T.ReactCurrentDispatcher,Jl=T.ReactCurrentBatchConfig,_r=0,ze=null,De=null,Be=null,Gi=!1,Qn=!1,Yn=0,zp=0;function Ge(){throw Error(c(321))}function es(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function ts(e,t,r,n,i,s){if(_r=s,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?Op:Rp,e=r(n,i),Qn){s=0;do{if(Qn=!1,Yn=0,25<=s)throw Error(c(301));s+=1,Be=De=null,t.updateQueue=null,Yi.current=Ip,e=r(n,i)}while(Qn)}if(Yi.current=Xi,t=De!==null&&De.next!==null,_r=0,Be=De=ze=null,Gi=!1,t)throw Error(c(300));return e}function rs(){var e=Yn!==0;return Yn=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ze.memoizedState=Be=e:Be=Be.next=e,Be}function gt(){if(De===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Be===null?ze.memoizedState:Be.next;if(t!==null)Be=t,De=e;else{if(e===null)throw Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?ze.memoizedState=Be=e:Be=Be.next=e}return Be}function Gn(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=gt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=De,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var d=u=null,p=null,y=s;do{var S=y.lane;if((_r&S)===S)p!==null&&(p=p.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var E={lane:S,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};p===null?(d=p=E,u=n):p=p.next=E,ze.lanes|=S,zr|=S}y=y.next}while(y!==null&&y!==s);p===null?u=n:p.next=d,St(n,t.memoizedState)||(rt=!0),t.memoizedState=n,t.baseState=u,t.baseQueue=p,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,ze.lanes|=s,zr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function is(e){var t=gt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);St(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Yu(){}function Gu(e,t){var r=ze,n=gt(),i=t(),s=!St(n.memoizedState,i);if(s&&(n.memoizedState=i,rt=!0),n=n.queue,os(Xu.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,qn(9,Ku.bind(null,r,n,i,t),void 0,null),We===null)throw Error(c(349));(_r&30)!==0||qu(r,t,i)}return i}function qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ku(e,t,r,n){t.value=r,t.getSnapshot=n,Zu(t)&&Ju(e)}function Xu(e,t,r){return r(function(){Zu(t)&&Ju(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function Ju(e){var t=Wt(e,1);t!==null&&zt(t,e,1,-1)}function ec(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,ze,e),[t.memoizedState,e]}function qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function tc(){return gt().memoizedState}function qi(e,t,r,n){var i=Ft();ze.flags|=e,i.memoizedState=qn(1|t,r,void 0,n===void 0?null:n)}function Ki(e,t,r,n){var i=gt();n=n===void 0?null:n;var s=void 0;if(De!==null){var u=De.memoizedState;if(s=u.destroy,n!==null&&es(n,u.deps)){i.memoizedState=qn(t,r,s,n);return}}ze.flags|=e,i.memoizedState=qn(1|t,r,s,n)}function rc(e,t){return qi(8390656,8,e,t)}function os(e,t){return Ki(2048,8,e,t)}function nc(e,t){return Ki(4,2,e,t)}function ic(e,t){return Ki(4,4,e,t)}function oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lc(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4,4,oc.bind(null,t,e),r)}function ls(){}function sc(e,t){var r=gt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&es(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ac(e,t){var r=gt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&es(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function uc(e,t,r){return(_r&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r):(St(r,t)||(r=Ha(),ze.lanes|=r,zr|=r,e.baseState=!0),t)}function Lp(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Jl.transition;Jl.transition={};try{e(!1),t()}finally{ge=r,Jl.transition=n}}function cc(){return gt().memoizedState}function Pp(e,t,r){var n=cr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e))fc(t,r);else if(r=Uu(e,t,r,n),r!==null){var i=Je();zt(r,e,n,i),pc(r,t,n)}}function Tp(e,t,r){var n=cr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,d=s(u,r);if(i.hasEagerState=!0,i.eagerState=d,St(d,u)){var p=t.interleaved;p===null?(i.next=i,Yl(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}r=Uu(e,t,i,n),r!==null&&(i=Je(),zt(r,e,n,i),pc(r,t,n))}}function dc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function fc(e,t){Qn=Gi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function pc(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,al(e,r)}}var Xi={readContext:vt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Op={readContext:vt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:rc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,qi(4194308,4,oc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return qi(4,2,e,t)},useMemo:function(e,t){var r=Ft();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ft();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Pp.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:ls,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=Lp.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ze,i=Ft();if(Ce){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),We===null)throw Error(c(349));(_r&30)!==0||qu(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,rc(Xu.bind(null,n,s,e),[e]),n.flags|=2048,qn(9,Ku.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Ft(),t=We.identifierPrefix;if(Ce){var r=Bt,n=Ht;r=(n&~(1<<32-kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rp={readContext:vt,useCallback:sc,useContext:vt,useEffect:os,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:ic,useMemo:ac,useReducer:ns,useRef:tc,useState:function(){return ns(Gn)},useDebugValue:ls,useDeferredValue:function(e){var t=gt();return uc(t,De.memoizedState,e)},useTransition:function(){var e=ns(Gn)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Gu,useId:cc,unstable_isNewReconciler:!1},Ip={readContext:vt,useCallback:sc,useContext:vt,useEffect:os,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:ic,useMemo:ac,useReducer:is,useRef:tc,useState:function(){return is(Gn)},useDebugValue:ls,useDeferredValue:function(e){var t=gt();return De===null?t.memoizedState=e:uc(t,De.memoizedState,e)},useTransition:function(){var e=is(Gn)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Gu,useId:cc,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ss(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:O({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Zi={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Je(),i=cr(e),s=Ut(n,i);s.payload=t,r!=null&&(s.callback=r),t=lr(e,s,i),t!==null&&(zt(t,e,i,n),bi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Je(),i=cr(e),s=Ut(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=lr(e,s,i),t!==null&&(zt(t,e,i,n),bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),n=cr(e),i=Ut(r,n);i.tag=2,t!=null&&(i.callback=t),t=lr(e,i,n),t!==null&&(zt(t,e,n,r),bi(t,e,n))}};function hc(e,t,r,n,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):t.prototype&&t.prototype.isPureReactComponent?!Fn(r,n)||!Fn(i,s):!0}function mc(e,t,r){var n=!1,i=nr,s=t.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=tt(t)?kr:Ye.current,n=t.contextTypes,s=(n=n!=null)?Xr(e,i):nr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function vc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function as(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Gl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=tt(t)?kr:Ye.current,i.context=Xr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ss(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zi.enqueueReplaceState(i,i.state,null),Vi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var r="",n=t;do r+=se(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Fp=typeof WeakMap=="function"?WeakMap:Map;function gc(e,t,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oo||(oo=!0,Cs=n),cs(e,t)},r}function xc(e,t,r){r=Ut(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){cs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){cs(e,t),typeof n!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function yc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Fp;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=qp.bind(null,e,t,r),t.then(e,e))}function wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jc(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ut(-1,1),t.tag=2,lr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Dp=T.ReactCurrentOwner,rt=!1;function Ze(e,t,r,n){t.child=e===null?Wu(t,null,r,n):tn(t,e.child,r,n)}function kc(e,t,r,n,i){r=r.render;var s=t.ref;return nn(t,i),n=ts(e,t,r,n,s,i),r=rs(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Ce&&r&&Ml(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Sc(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Os(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Nc(e,t,s,n,i)):(e=fo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var u=s.memoizedProps;if(r=r.compare,r=r!==null?r:Fn,r(u,n)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=fr(s,n),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(Fn(s,n)&&e.ref===t.ref)if(rt=!1,t.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,$t(e,t,i)}return ds(e,t,r,n,i)}function Cc(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(an,ct),ct|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(an,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,we(an,ct),ct|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,we(an,ct),ct|=n;return Ze(e,t,i,r),t.child}function Ec(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,r,n,i){var s=tt(r)?kr:Ye.current;return s=Xr(t,s),nn(t,i),r=ts(e,t,r,n,s,i),n=rs(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Ce&&n&&Ml(t),t.flags|=1,Ze(e,t,r,i),t.child)}function _c(e,t,r,n,i){if(tt(r)){var s=!0;Di(t)}else s=!1;if(nn(t,i),t.stateNode===null)eo(e,t),mc(t,r,n),as(t,r,n,i),n=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var p=u.context,y=r.contextType;typeof y=="object"&&y!==null?y=vt(y):(y=tt(r)?kr:Ye.current,y=Xr(t,y));var S=r.getDerivedStateFromProps,E=typeof S=="function"||typeof u.getSnapshotBeforeUpdate=="function";E||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==n||p!==y)&&vc(t,u,n,y),or=!1;var k=t.memoizedState;u.state=k,Vi(t,n,u,i),p=t.memoizedState,d!==n||k!==p||et.current||or?(typeof S=="function"&&(ss(t,r,S,n),p=t.memoizedState),(d=or||hc(t,r,d,n,k,p,y))?(E||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),u.props=n,u.state=p,u.context=y,n=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,$u(e,t),d=t.memoizedProps,y=t.type===t.elementType?d:Ct(t.type,d),u.props=y,E=t.pendingProps,k=u.context,p=r.contextType,typeof p=="object"&&p!==null?p=vt(p):(p=tt(r)?kr:Ye.current,p=Xr(t,p));var R=r.getDerivedStateFromProps;(S=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==E||k!==p)&&vc(t,u,n,p),or=!1,k=t.memoizedState,u.state=k,Vi(t,n,u,i);var F=t.memoizedState;d!==E||k!==F||et.current||or?(typeof R=="function"&&(ss(t,r,R,n),F=t.memoizedState),(y=or||hc(t,r,y,n,k,F,p)||!1)?(S||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,F,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,F,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=F),u.props=n,u.state=F,u.context=p,n=y):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return fs(e,t,r,n,s,i)}function fs(e,t,r,n,i,s){Ec(e,t);var u=(t.flags&128)!==0;if(!n&&!u)return i&&Ou(t,r,!1),$t(e,t,s);n=t.stateNode,Dp.current=t;var d=u&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&u?(t.child=tn(t,e.child,null,s),t.child=tn(t,null,d,s)):Ze(e,t,d,s),t.memoizedState=n.state,i&&Ou(t,r,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?Pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pu(e,t.context,!1),ql(e,t.containerInfo)}function Lc(e,t,r,n,i){return en(),Ul(i),t.flags|=256,Ze(e,t,r,n),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,r){var n=t.pendingProps,i=_e.current,s=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(_e,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=t.mode,s=t.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=po(u,n,0,null),e=Or(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=hs(r),t.memoizedState=ps,e):ms(t,u));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Ap(e,t,u,n,d,i,r);if(s){s=n.fallback,u=t.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:n.children};return(u&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=p,t.deletions=null):(n=fr(i,p),n.subtreeFlags=i.subtreeFlags&14680064),d!==null?s=fr(d,s):(s=Or(s,u,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,u=e.child.memoizedState,u=u===null?hs(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~r,t.memoizedState=ps,n}return s=e.child,e=s.sibling,n=fr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ms(e,t){return t=po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,r,n){return n!==null&&Ul(n),tn(t,e.child,null,r),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ap(e,t,r,n,i,s,u){if(r)return t.flags&256?(t.flags&=-257,n=us(Error(c(422))),Ji(e,t,u,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=po({mode:"visible",children:n.children},i,0,null),s=Or(s,i,u,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&tn(t,e.child,null,u),t.child.memoizedState=hs(u),t.memoizedState=ps,s);if((t.mode&1)===0)return Ji(e,t,u,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var d=n.dgst;return n=d,s=Error(c(419)),n=us(s,n,void 0),Ji(e,t,u,n)}if(d=(u&e.childLanes)!==0,rt||d){if(n=We,n!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|u))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(e,i),zt(n,e,i,-1))}return Ts(),n=us(Error(c(421))),Ji(e,t,u,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kp.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ut=tr(i.nextSibling),at=t,Ce=!0,Nt=null,e!==null&&(ht[mt++]=Ht,ht[mt++]=Bt,ht[mt++]=Sr,Ht=e.id,Bt=e.overflow,Sr=t),t=ms(t,n.children),t.flags|=4096,t)}function Tc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ql(e.return,t,r)}function vs(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Oc(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Ze(e,t,n.children,r),n=_e.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,r,t);else if(e.tag===19)Tc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(we(_e,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Qi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),vs(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}vs(t,!0,r,null,s);break;case"together":vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),zr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mp(e,t,r){switch(t.tag){case 3:zc(t),en();break;case 5:Qu(t);break;case 1:tt(t.type)&&Di(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;we(Ui,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(we(_e,_e.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Pc(e,t,r):(we(_e,_e.current&1),e=$t(e,t,r),e!==null?e.sibling:null);we(_e,_e.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Oc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(_e,_e.current),n)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,r)}return $t(e,t,r)}var Rc,gs,Ic,Fc;Rc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},gs=function(){},Ic=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Er(It.current);var s=null;switch(r){case"input":i=Qo(e,i),n=Qo(e,n),s=[];break;case"select":i=O({},i,{value:void 0}),n=O({},n,{value:void 0}),s=[];break;case"textarea":i=qo(e,i),n=qo(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ri)}Xo(r,n);var u;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var d=i[y];for(u in d)d.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in n){var p=n[y];if(d=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&p!==d&&(p!=null||d!=null))if(y==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(r||(r={}),r[u]=p[u])}else r||(s||(s=[]),s.push(y,r)),r=p;else y==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(s=s||[]).push(y,p)):y==="children"?typeof p!="string"&&typeof p!="number"||(s=s||[]).push(y,""+p):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(p!=null&&y==="onScroll"&&je("scroll",e),s||d===p||(s=[])):(s=s||[]).push(y,p))}r&&(s=s||[]).push("style",r);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},Fc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Kn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Hp(e,t,r){var n=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return tt(t.type)&&Fi(),qe(t),null;case 3:return n=t.stateNode,on(),ke(et),ke(Ye),Zl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(zs(Nt),Nt=null))),gs(e,t),qe(t),null;case 5:Kl(t);var i=Er(Vn.current);if(r=t.type,e!==null&&t.stateNode!=null)Ic(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(e=Er(It.current),Bi(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Rt]=t,n[Bn]=s,e=(t.mode&1)!==0,r){case"dialog":je("cancel",n),je("close",n);break;case"iframe":case"object":case"embed":je("load",n);break;case"video":case"audio":for(i=0;i<An.length;i++)je(An[i],n);break;case"source":je("error",n);break;case"img":case"image":case"link":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"input":ma(n,s),je("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},je("invalid",n);break;case"textarea":xa(n,s),je("invalid",n)}Xo(r,s),i=null;for(var u in s)if(s.hasOwnProperty(u)){var d=s[u];u==="children"?typeof d=="string"?n.textContent!==d&&(s.suppressHydrationWarning!==!0&&Oi(n.textContent,d,e),i=["children",d]):typeof d=="number"&&n.textContent!==""+d&&(s.suppressHydrationWarning!==!0&&Oi(n.textContent,d,e),i=["children",""+d]):m.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&je("scroll",n)}switch(r){case"input":Gt(n),ga(n,s,!0);break;case"textarea":Gt(n),wa(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ri)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ja(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(r,{is:n.is}):(e=u.createElement(r),r==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,r),e[Rt]=t,e[Bn]=n,Rc(e,t,!1,!1),t.stateNode=e;e:{switch(u=Zo(r,n),r){case"dialog":je("cancel",e),je("close",e),i=n;break;case"iframe":case"object":case"embed":je("load",e),i=n;break;case"video":case"audio":for(i=0;i<An.length;i++)je(An[i],e);i=n;break;case"source":je("error",e),i=n;break;case"img":case"image":case"link":je("error",e),je("load",e),i=n;break;case"details":je("toggle",e),i=n;break;case"input":ma(e,n),i=Qo(e,n),je("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=O({},n,{value:void 0}),je("invalid",e);break;case"textarea":xa(e,n),i=qo(e,n),je("invalid",e);break;default:i=n}Xo(r,i),d=i;for(s in d)if(d.hasOwnProperty(s)){var p=d[s];s==="style"?Na(e,p):s==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ka(e,p)):s==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&xn(e,p):typeof p=="number"&&xn(e,""+p):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(m.hasOwnProperty(s)?p!=null&&s==="onScroll"&&je("scroll",e):p!=null&&re(e,s,p,u))}switch(r){case"input":Gt(e),ga(e,n,!1);break;case"textarea":Gt(e),wa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ue(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Hr(e,!!n.multiple,s,!1):n.defaultValue!=null&&Hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Fc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(r=Er(Vn.current),Er(It.current),Bi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Rt]=t,(s=n.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:Oi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oi(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Rt]=t,t.stateNode=n}return qe(t),null;case 13:if(ke(_e),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Mu(),en(),t.flags|=98560,s=!1;else if(s=Bi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Rt]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),s=!1}else Nt!==null&&(zs(Nt),Nt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Ae===0&&(Ae=3):Ts())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return on(),gs(e,t),e===null&&Mn(t.stateNode.containerInfo),qe(t),null;case 10:return Vl(t.type._context),qe(t),null;case 17:return tt(t.type)&&Fi(),qe(t),null;case 19:if(ke(_e),s=t.memoizedState,s===null)return qe(t),null;if(n=(t.flags&128)!==0,u=s.rendering,u===null)if(n)Kn(s,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Qi(e),u!==null){for(t.flags|=128,Kn(s,!1),n=u.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(_e,_e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Oe()>un&&(t.flags|=128,n=!0,Kn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Qi(u),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Ce)return qe(t),null}else 2*Oe()-s.renderingStartTime>un&&r!==1073741824&&(t.flags|=128,n=!0,Kn(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(r=s.last,r!==null?r.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Oe(),t.sibling=null,r=_e.current,we(_e,n?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return Ps(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ct&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Bp(e,t){switch(Hl(t),t.tag){case 1:return tt(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),ke(et),ke(Ye),Zl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Kl(t),null;case 13:if(ke(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(_e),null;case 4:return on(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var to=!1,Ke=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,I=null;function sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Pe(e,t,n)}else r.current=null}function xs(e,t,r){try{r()}catch(n){Pe(e,t,n)}}var Dc=!1;function Up(e,t){if(Pl=ji,e=hu(),kl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var u=0,d=-1,p=-1,y=0,S=0,E=e,k=null;t:for(;;){for(var R;E!==r||i!==0&&E.nodeType!==3||(d=u+i),E!==s||n!==0&&E.nodeType!==3||(p=u+n),E.nodeType===3&&(u+=E.nodeValue.length),(R=E.firstChild)!==null;)k=E,E=R;for(;;){if(E===e)break t;if(k===r&&++y===i&&(d=u),k===s&&++S===n&&(p=u),(R=E.nextSibling)!==null)break;E=k,k=E.parentNode}E=R}r=d===-1||p===-1?null:{start:d,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(Tl={focusedElem:e,selectionRange:r},ji=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var F=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var D=F.memoizedProps,Re=F.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?D:Ct(t.type,D),Re);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(_){Pe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return F=Dc,Dc=!1,F}function Xn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&xs(t,r,s)}i=i.next}while(i!==n)}}function ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ys(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Bn],delete t[Fl],delete t[Np],delete t[Cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ws(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ri));else if(n!==4&&(e=e.child,e!==null))for(ws(e,t,r),e=e.sibling;e!==null;)ws(e,t,r),e=e.sibling}function js(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(js(e,t,r),e=e.sibling;e!==null;)js(e,t,r),e=e.sibling}var $e=null,Et=!1;function sr(e,t,r){for(r=r.child;r!==null;)Bc(e,t,r),r=r.sibling}function Bc(e,t,r){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(mi,r)}catch{}switch(r.tag){case 5:Ke||sn(r,t);case 6:var n=$e,i=Et;$e=null,sr(e,t,r),$e=n,Et=i,$e!==null&&(Et?(e=$e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):$e.removeChild(r.stateNode));break;case 18:$e!==null&&(Et?(e=$e,r=r.stateNode,e.nodeType===8?Il(e.parentNode,r):e.nodeType===1&&Il(e,r),Ln(e)):Il($e,r.stateNode));break;case 4:n=$e,i=Et,$e=r.stateNode.containerInfo,Et=!0,sr(e,t,r),$e=n,Et=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&xs(r,t,u),i=i.next}while(i!==n)}sr(e,t,r);break;case 1:if(!Ke&&(sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(d){Pe(r,t,d)}sr(e,t,r);break;case 21:sr(e,t,r);break;case 22:r.mode&1?(Ke=(n=Ke)||r.memoizedState!==null,sr(e,t,r),Ke=n):sr(e,t,r);break;default:sr(e,t,r)}}function Wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wp),t.forEach(function(n){var i=Xp.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function _t(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:$e=d.stateNode,Et=!1;break e;case 3:$e=d.stateNode.containerInfo,Et=!0;break e;case 4:$e=d.stateNode.containerInfo,Et=!0;break e}d=d.return}if($e===null)throw Error(c(160));Bc(s,u,i),$e=null,Et=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(y){Pe(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uc(t,e),t=t.sibling}function Uc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Dt(e),n&4){try{Xn(3,e,e.return),ro(3,e)}catch(D){Pe(e,e.return,D)}try{Xn(5,e,e.return)}catch(D){Pe(e,e.return,D)}}break;case 1:_t(t,e),Dt(e),n&512&&r!==null&&sn(r,r.return);break;case 5:if(_t(t,e),Dt(e),n&512&&r!==null&&sn(r,r.return),e.flags&32){var i=e.stateNode;try{xn(i,"")}catch(D){Pe(e,e.return,D)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,u=r!==null?r.memoizedProps:s,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&s.type==="radio"&&s.name!=null&&va(i,s),Zo(d,u);var y=Zo(d,s);for(u=0;u<p.length;u+=2){var S=p[u],E=p[u+1];S==="style"?Na(i,E):S==="dangerouslySetInnerHTML"?ka(i,E):S==="children"?xn(i,E):re(i,S,E,y)}switch(d){case"input":Yo(i,s);break;case"textarea":ya(i,s);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Hr(i,!!s.multiple,R,!1):k!==!!s.multiple&&(s.defaultValue!=null?Hr(i,!!s.multiple,s.defaultValue,!0):Hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bn]=s}catch(D){Pe(e,e.return,D)}}break;case 6:if(_t(t,e),Dt(e),n&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(D){Pe(e,e.return,D)}}break;case 3:if(_t(t,e),Dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(D){Pe(e,e.return,D)}break;case 4:_t(t,e),Dt(e);break;case 13:_t(t,e),Dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ns=Oe())),n&4&&Wc(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(Ke=(y=Ke)||S,_t(t,e),Ke=y):_t(t,e),Dt(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!S&&(e.mode&1)!==0)for(I=e,S=e.child;S!==null;){for(E=I=S;I!==null;){switch(k=I,R=k.child,k.tag){case 0:case 11:case 14:case 15:Xn(4,k,k.return);break;case 1:sn(k,k.return);var F=k.stateNode;if(typeof F.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch(D){Pe(n,r,D)}}break;case 5:sn(k,k.return);break;case 22:if(k.memoizedState!==null){Vc(E);continue}}R!==null?(R.return=k,I=R):Vc(E)}S=S.sibling}e:for(S=null,E=e;;){if(E.tag===5){if(S===null){S=E;try{i=E.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(d=E.stateNode,p=E.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=Sa("display",u))}catch(D){Pe(e,e.return,D)}}}else if(E.tag===6){if(S===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(D){Pe(e,e.return,D)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;S===E&&(S=null),E=E.return}S===E&&(S=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:_t(t,e),Dt(e),n&4&&Wc(e);break;case 21:break;default:_t(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Mc(r)){var n=r;break e}r=r.return}throw Error(c(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(xn(i,""),n.flags&=-33);var s=Hc(e);js(e,s,i);break;case 3:case 4:var u=n.stateNode.containerInfo,d=Hc(e);ws(e,d,u);break;default:throw Error(c(161))}}catch(p){Pe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,r){I=e,$c(e)}function $c(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&n){var u=i.memoizedState!==null||to;if(!u){var d=i.alternate,p=d!==null&&d.memoizedState!==null||Ke;d=to;var y=Ke;if(to=u,(Ke=p)&&!y)for(I=i;I!==null;)u=I,p=u.child,u.tag===22&&u.memoizedState!==null?Qc(i):p!==null?(p.return=u,I=p):Qc(i);for(;s!==null;)I=s,$c(s),s=s.sibling;I=i,to=d,Ke=y}bc(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):bc(e)}}function bc(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||ro(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ke)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ct(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Vu(t,s,n);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Vu(t,u,r)}break;case 5:var d=t.stateNode;if(r===null&&t.flags&4){r=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var S=y.memoizedState;if(S!==null){var E=S.dehydrated;E!==null&&Ln(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ke||t.flags&512&&ys(t)}catch(k){Pe(t,t.return,k)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function Vc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function Qc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ro(4,t)}catch(p){Pe(t,r,p)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(p){Pe(t,i,p)}}var s=t.return;try{ys(t)}catch(p){Pe(t,s,p)}break;case 5:var u=t.return;try{ys(t)}catch(p){Pe(t,u,p)}}}catch(p){Pe(t,t.return,p)}if(t===e){I=null;break}var d=t.sibling;if(d!==null){d.return=t.return,I=d;break}I=t.return}}var bp=Math.ceil,no=T.ReactCurrentDispatcher,ks=T.ReactCurrentOwner,xt=T.ReactCurrentBatchConfig,fe=0,We=null,Ie=null,be=0,ct=0,an=rr(0),Ae=0,Zn=null,zr=0,io=0,Ss=0,Jn=null,nt=null,Ns=0,un=1/0,bt=null,oo=!1,Cs=null,ar=null,lo=!1,ur=null,so=0,ei=0,Es=null,ao=-1,uo=0;function Je(){return(fe&6)!==0?Oe():ao!==-1?ao:ao=Oe()}function cr(e){return(e.mode&1)===0?1:(fe&2)!==0&&be!==0?be&-be:_p.transition!==null?(uo===0&&(uo=Ha()),uo):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ga(e.type)),e)}function zt(e,t,r,n){if(50<ei)throw ei=0,Es=null,Error(c(185));Nn(e,r,n),((fe&2)===0||e!==We)&&(e===We&&((fe&2)===0&&(io|=r),Ae===4&&dr(e,be)),it(e,n),r===1&&fe===0&&(t.mode&1)===0&&(un=Oe()+500,Ai&&ir()))}function it(e,t){var r=e.callbackNode;_f(e,t);var n=xi(e,e===We?be:0);if(n===0)r!==null&&Da(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Da(r),t===1)e.tag===0?Ep(Gc.bind(null,e)):Ru(Gc.bind(null,e)),kp(function(){(fe&6)===0&&ir()}),r=null;else{switch(Ba(n)){case 1:r=ol;break;case 4:r=Aa;break;case 16:r=hi;break;case 536870912:r=Ma;break;default:r=hi}r=rd(r,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Yc(e,t){if(ao=-1,uo=0,(fe&6)!==0)throw Error(c(327));var r=e.callbackNode;if(cn()&&e.callbackNode!==r)return null;var n=xi(e,e===We?be:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=co(e,n);else{t=n;var i=fe;fe|=2;var s=Kc();(We!==e||be!==t)&&(bt=null,un=Oe()+500,Pr(e,t));do try{Yp();break}catch(d){qc(e,d)}while(!0);bl(),no.current=s,fe=i,Ie!==null?t=0:(We=null,be=0,t=Ae)}if(t!==0){if(t===2&&(i=ll(e),i!==0&&(n=i,t=_s(e,i))),t===1)throw r=Zn,Pr(e,0),dr(e,n),it(e,Oe()),r;if(t===6)dr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Vp(i)&&(t=co(e,n),t===2&&(s=ll(e),s!==0&&(n=s,t=_s(e,s))),t===1))throw r=Zn,Pr(e,0),dr(e,n),it(e,Oe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(c(345));case 2:Tr(e,nt,bt);break;case 3:if(dr(e,n),(n&130023424)===n&&(t=Ns+500-Oe(),10<t)){if(xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rl(Tr.bind(null,e,nt,bt),t);break}Tr(e,nt,bt);break;case 4:if(dr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var u=31-kt(n);s=1<<u,u=t[u],u>i&&(i=u),n&=~s}if(n=i,n=Oe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*bp(n/1960))-n,10<n){e.timeoutHandle=Rl(Tr.bind(null,e,nt,bt),n);break}Tr(e,nt,bt);break;case 5:Tr(e,nt,bt);break;default:throw Error(c(329))}}}return it(e,Oe()),e.callbackNode===r?Yc.bind(null,e):null}function _s(e,t){var r=Jn;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=co(e,t),e!==2&&(t=nt,nt=r,t!==null&&zs(t)),e}function zs(e){nt===null?nt=e:nt.push.apply(nt,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Ss,t&=~io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),n=1<<r;e[r]=-1,t&=~n}}function Gc(e){if((fe&6)!==0)throw Error(c(327));cn();var t=xi(e,0);if((t&1)===0)return it(e,Oe()),null;var r=co(e,t);if(e.tag!==0&&r===2){var n=ll(e);n!==0&&(t=n,r=_s(e,n))}if(r===1)throw r=Zn,Pr(e,0),dr(e,t),it(e,Oe()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tr(e,nt,bt),it(e,Oe()),null}function Ls(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(un=Oe()+500,Ai&&ir())}}function Lr(e){ur!==null&&ur.tag===0&&(fe&6)===0&&cn();var t=fe;fe|=1;var r=xt.transition,n=ge;try{if(xt.transition=null,ge=1,e)return e()}finally{ge=n,xt.transition=r,fe=t,(fe&6)===0&&ir()}}function Ps(){ct=an.current,ke(an)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,jp(r)),Ie!==null)for(r=Ie.return;r!==null;){var n=r;switch(Hl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fi();break;case 3:on(),ke(et),ke(Ye),Zl();break;case 5:Kl(n);break;case 4:on();break;case 13:ke(_e);break;case 19:ke(_e);break;case 10:Vl(n.type._context);break;case 22:case 23:Ps()}r=r.return}if(We=e,Ie=e=fr(e.current,null),be=ct=t,Ae=0,Zn=null,Ss=io=zr=0,nt=Jn=null,Cr!==null){for(t=0;t<Cr.length;t++)if(r=Cr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var u=s.next;s.next=i,n.next=u}r.pending=n}Cr=null}return e}function qc(e,t){do{var r=Ie;try{if(bl(),Yi.current=Xi,Gi){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Gi=!1}if(_r=0,Be=De=ze=null,Qn=!1,Yn=0,ks.current=null,r===null||r.return===null){Ae=1,Zn=t,Ie=null;break}e:{var s=e,u=r.return,d=r,p=t;if(t=be,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var y=p,S=d,E=S.tag;if((S.mode&1)===0&&(E===0||E===11||E===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var R=wc(u);if(R!==null){R.flags&=-257,jc(R,u,d,s,t),R.mode&1&&yc(s,y,t),t=R,p=y;var F=t.updateQueue;if(F===null){var D=new Set;D.add(p),t.updateQueue=D}else F.add(p);break e}else{if((t&1)===0){yc(s,y,t),Ts();break e}p=Error(c(426))}}else if(Ce&&d.mode&1){var Re=wc(u);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),jc(Re,u,d,s,t),Ul(ln(p,d));break e}}s=p=ln(p,d),Ae!==4&&(Ae=2),Jn===null?Jn=[s]:Jn.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=gc(s,p,t);bu(s,g);break e;case 1:d=p;var h=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ar===null||!ar.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=xc(s,d,t);bu(s,_);break e}}s=s.return}while(s!==null)}Zc(r)}catch(M){t=M,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function Kc(){var e=no.current;return no.current=Xi,e===null?Xi:e}function Ts(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),We===null||(zr&268435455)===0&&(io&268435455)===0||dr(We,be)}function co(e,t){var r=fe;fe|=2;var n=Kc();(We!==e||be!==t)&&(bt=null,Pr(e,t));do try{Qp();break}catch(i){qc(e,i)}while(!0);if(bl(),fe=r,no.current=n,Ie!==null)throw Error(c(261));return We=null,be=0,Ae}function Qp(){for(;Ie!==null;)Xc(Ie)}function Yp(){for(;Ie!==null&&!xf();)Xc(Ie)}function Xc(e){var t=td(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Zc(e):Ie=t,ks.current=null}function Zc(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Hp(r,t,ct),r!==null){Ie=r;return}}else{if(r=Bp(r,t),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ae===0&&(Ae=5)}function Tr(e,t,r){var n=ge,i=xt.transition;try{xt.transition=null,ge=1,Gp(e,t,r,n)}finally{xt.transition=i,ge=n}return null}function Gp(e,t,r,n){do cn();while(ur!==null);if((fe&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(zf(e,s),e===We&&(Ie=We=null,be=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||lo||(lo=!0,rd(hi,function(){return cn(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=xt.transition,xt.transition=null;var u=ge;ge=1;var d=fe;fe|=4,ks.current=null,Up(e,r),Uc(r,e),hp(Tl),ji=!!Pl,Tl=Pl=null,e.current=r,$p(r),yf(),fe=d,ge=u,xt.transition=s}else e.current=r;if(lo&&(lo=!1,ur=e,so=i),s=e.pendingLanes,s===0&&(ar=null),kf(r.stateNode),it(e,Oe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Cs,Cs=null,e;return(so&1)!==0&&e.tag!==0&&cn(),s=e.pendingLanes,(s&1)!==0?e===Es?ei++:(ei=0,Es=e):ei=0,ir(),null}function cn(){if(ur!==null){var e=Ba(so),t=xt.transition,r=ge;try{if(xt.transition=null,ge=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,so=0,(fe&6)!==0)throw Error(c(331));var i=fe;for(fe|=4,I=e.current;I!==null;){var s=I,u=s.child;if((I.flags&16)!==0){var d=s.deletions;if(d!==null){for(var p=0;p<d.length;p++){var y=d[p];for(I=y;I!==null;){var S=I;switch(S.tag){case 0:case 11:case 15:Xn(8,S,s)}var E=S.child;if(E!==null)E.return=S,I=E;else for(;I!==null;){S=I;var k=S.sibling,R=S.return;if(Ac(S),S===y){I=null;break}if(k!==null){k.return=R,I=k;break}I=R}}}var F=s.alternate;if(F!==null){var D=F.child;if(D!==null){F.child=null;do{var Re=D.sibling;D.sibling=null,D=Re}while(D!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,I=u;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Xn(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,I=g;break e}I=s.return}}var h=e.current;for(I=h;I!==null;){u=I;var x=u.child;if((u.subtreeFlags&2064)!==0&&x!==null)x.return=u,I=x;else e:for(u=h;I!==null;){if(d=I,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:ro(9,d)}}catch(M){Pe(d,d.return,M)}if(d===u){I=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,I=_;break e}I=d.return}}if(fe=i,ir(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(mi,e)}catch{}n=!0}return n}finally{ge=r,xt.transition=t}}return!1}function Jc(e,t,r){t=ln(r,t),t=gc(e,t,1),e=lr(e,t,1),t=Je(),e!==null&&(Nn(e,1,t),it(e,t))}function Pe(e,t,r){if(e.tag===3)Jc(e,e,r);else for(;t!==null;){if(t.tag===3){Jc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ar===null||!ar.has(n))){e=ln(r,e),e=xc(t,e,1),t=lr(t,e,1),e=Je(),t!==null&&(Nn(t,1,e),it(t,e));break}}t=t.return}}function qp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(be&r)===r&&(Ae===4||Ae===3&&(be&130023424)===be&&500>Oe()-Ns?Pr(e,0):Ss|=r),it(e,t)}function ed(e,t){t===0&&((e.mode&1)===0?t=1:(t=gi,gi<<=1,(gi&130023424)===0&&(gi=4194304)));var r=Je();e=Wt(e,t),e!==null&&(Nn(e,t,r),it(e,r))}function Kp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ed(e,r)}function Xp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(t),ed(e,r)}var td;td=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)rt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return rt=!1,Mp(e,t,r);rt=(e.flags&131072)!==0}else rt=!1,Ce&&(t.flags&1048576)!==0&&Iu(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;eo(e,t),e=t.pendingProps;var i=Xr(t,Ye.current);nn(t,r),i=ts(null,t,n,e,i,r);var s=rs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(n)?(s=!0,Di(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gl(t),i.updater=Zi,t.stateNode=i,i._reactInternals=t,as(t,n,e,r),t=fs(null,t,n,!0,s,r)):(t.tag=0,Ce&&s&&Ml(t),Ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Jp(n),e=Ct(n,e),i){case 0:t=ds(null,t,n,e,r);break e;case 1:t=_c(null,t,n,e,r);break e;case 11:t=kc(null,t,n,e,r);break e;case 14:t=Sc(null,t,n,Ct(n.type,e),r);break e}throw Error(c(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),ds(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),_c(e,t,n,i,r);case 3:e:{if(zc(t),e===null)throw Error(c(387));n=t.pendingProps,s=t.memoizedState,i=s.element,$u(e,t),Vi(t,n,null,r);var u=t.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ln(Error(c(423)),t),t=Lc(e,t,n,r,i);break e}else if(n!==i){i=ln(Error(c(424)),t),t=Lc(e,t,n,r,i);break e}else for(ut=tr(t.stateNode.containerInfo.firstChild),at=t,Ce=!0,Nt=null,r=Wu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(en(),n===i){t=$t(e,t,r);break e}Ze(e,t,n,r)}t=t.child}return t;case 5:return Qu(t),e===null&&Wl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,u=i.children,Ol(n,i)?u=null:s!==null&&Ol(n,s)&&(t.flags|=32),Ec(e,t),Ze(e,t,u,r),t.child;case 6:return e===null&&Wl(t),null;case 13:return Pc(e,t,r);case 4:return ql(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=tn(t,null,n,r):Ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),kc(e,t,n,i,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,u=i.value,we(Ui,n._currentValue),n._currentValue=u,s!==null)if(St(s.value,u)){if(s.children===i.children&&!et.current){t=$t(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var d=s.dependencies;if(d!==null){u=s.child;for(var p=d.firstContext;p!==null;){if(p.context===n){if(s.tag===1){p=Ut(-1,r&-r),p.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var S=y.pending;S===null?p.next=p:(p.next=S.next,S.next=p),y.pending=p}}s.lanes|=r,p=s.alternate,p!==null&&(p.lanes|=r),Ql(s.return,r,t),d.lanes|=r;break}p=p.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(c(341));u.lanes|=r,d=u.alternate,d!==null&&(d.lanes|=r),Ql(u,r,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,nn(t,r),i=vt(i),n=n(i),t.flags|=1,Ze(e,t,n,r),t.child;case 14:return n=t.type,i=Ct(n,t.pendingProps),i=Ct(n.type,i),Sc(e,t,n,i,r);case 15:return Nc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),eo(e,t),t.tag=1,tt(n)?(e=!0,Di(t)):e=!1,nn(t,r),mc(t,n,i),as(t,n,i,r),fs(null,t,n,!0,e,r);case 19:return Oc(e,t,r);case 22:return Cc(e,t,r)}throw Error(c(156,t.tag))};function rd(e,t){return Fa(e,t)}function Zp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,r,n){return new Zp(e,t,r,n)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===Xe)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=yt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fo(e,t,r,n,i,s){var u=2;if(n=e,typeof e=="function")Os(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case P:return Or(r.children,i,s,t);case A:u=8,i|=8;break;case xe:return e=yt(12,r,t,i|2),e.elementType=xe,e.lanes=s,e;case Ne:return e=yt(13,r,t,i),e.elementType=Ne,e.lanes=s,e;case Ve:return e=yt(19,r,t,i),e.elementType=Ve,e.lanes=s,e;case ye:return po(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:u=10;break e;case le:u=9;break e;case Le:u=11;break e;case Xe:u=14;break e;case Qe:u=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=yt(u,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Or(e,t,r,n){return e=yt(7,e,n,t),e.lanes=r,e}function po(e,t,r,n){return e=yt(22,e,n,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function Rs(e,t,r){return e=yt(6,e,null,t),e.lanes=r,e}function Is(e,t,r){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fs(e,t,r,n,i,s,u,d,p){return e=new eh(e,t,r,d,p),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(s),e}function th(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function nd(e){if(!e)return nr;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(tt(r))return Tu(e,r,t)}return t}function id(e,t,r,n,i,s,u,d,p){return e=Fs(r,n,!0,e,i,s,u,d,p),e.context=nd(null),r=e.current,n=Je(),i=cr(r),s=Ut(n,i),s.callback=t!=null?t:null,lr(r,s,i),e.current.lanes=i,Nn(e,i,n),it(e,n),e}function ho(e,t,r,n){var i=t.current,s=Je(),u=cr(i);return r=nd(r),t.context===null?t.context=r:t.pendingContext=r,t=Ut(s,u),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=lr(i,t,u),e!==null&&(zt(e,i,u,s),bi(e,i,u)),u}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ds(e,t){od(e,t),(e=e.alternate)&&od(e,t)}function rh(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}vo.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));ho(e,t,null,null)},vo.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){ho(null,e,null,null)}),t[At]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=$a();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Zt.length&&t!==0&&t<Zt[r].priority;r++);Zt.splice(r,0,e),r===0&&Qa(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function nh(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var y=mo(u);s.call(y)}}var u=id(t,n,e,0,null,!1,!1,"",sd);return e._reactRootContainer=u,e[At]=u.current,Mn(e.nodeType===8?e.parentNode:e),Lr(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var d=n;n=function(){var y=mo(p);d.call(y)}}var p=Fs(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=p,e[At]=p.current,Mn(e.nodeType===8?e.parentNode:e),Lr(function(){ho(t,p,r,n)}),p}function xo(e,t,r,n,i){var s=r._reactRootContainer;if(s){var u=s;if(typeof i=="function"){var d=i;i=function(){var p=mo(u);d.call(p)}}ho(t,u,e,i)}else u=nh(r,t,e,i,n);return mo(u)}Wa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Sn(t.pendingLanes);r!==0&&(al(t,r|1),it(t,Oe()),(fe&6)===0&&(un=Oe()+500,ir()))}break;case 13:Lr(function(){var n=Wt(e,1);if(n!==null){var i=Je();zt(n,e,1,i)}}),Ds(e,1)}},ul=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var r=Je();zt(t,e,134217728,r)}Ds(e,134217728)}},Ua=function(e){if(e.tag===13){var t=cr(e),r=Wt(e,t);if(r!==null){var n=Je();zt(r,e,t,n)}Ds(e,t)}},$a=function(){return ge},ba=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},tl=function(e,t,r){switch(t){case"input":if(Yo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ii(n);if(!i)throw Error(c(90));yr(n),Yo(n,i)}}}break;case"textarea":ya(e,r);break;case"select":t=r.value,t!=null&&Hr(e,!!r.multiple,t,!1)}},za=Ls,La=Lr;var ih={usingClientEntryPoint:!1,Events:[Wn,qr,Ii,Ea,_a,Ls]},ti={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oh={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ra(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{mi=yo.inject(oh),Ot=yo}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih,ot.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(c(200));return th(e,t,null,r)},ot.createRoot=function(e,t){if(!Ms(e))throw Error(c(299));var r=!1,n="",i=ld;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fs(e,1,!1,null,null,r,!1,n,i),e[At]=t.current,Mn(e.nodeType===8?e.parentNode:e),new As(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ra(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return Lr(e)},ot.hydrate=function(e,t,r){if(!go(t))throw Error(c(200));return xo(null,e,t,!0,r)},ot.hydrateRoot=function(e,t,r){if(!Ms(e))throw Error(c(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",u=ld;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=id(t,null,e,1,r!=null?r:null,i,!1,s,u),e[At]=t.current,Mn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new vo(t)},ot.render=function(e,t,r){if(!go(t))throw Error(c(200));return xo(null,e,t,!1,r)},ot.unmountComponentAtNode=function(e){if(!go(e))throw Error(c(40));return e._reactRootContainer?(Lr(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1},ot.unstable_batchedUpdates=Ls,ot.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!go(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return xo(e,t,r,!1,n)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var md;function hh(){if(md)return Ws.exports;md=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),Ws.exports=ph(),Ws.exports}var vd;function mh(){if(vd)return wo;vd=1;var o=hh();return wo.createRoot=o.createRoot,wo.hydrateRoot=o.hydrateRoot,wo}var vh=mh(),He=aa();const ft=sh(He);var lt=function(){return lt=Object.assign||function(a){for(var c,f=1,m=arguments.length;f<m;f++){c=arguments[f];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(a[w]=c[w])}return a},lt.apply(this,arguments)};function Fo(o,a,c){if(c||arguments.length===2)for(var f=0,m=a.length,w;f<m;f++)(w||!(f in a))&&(w||(w=Array.prototype.slice.call(a,0,f)),w[f]=a[f]);return o.concat(w||Array.prototype.slice.call(a))}var Se="-ms-",oi="-moz-",he="-webkit-",Md="comm",Wo="rule",ua="decl",gh="@import",xh="@namespace",Hd="@keyframes",yh="@layer",Bd=Math.abs,ca=String.fromCharCode,Zs=Object.assign;function wh(o,a){return Me(o,0)^45?(((a<<2^Me(o,0))<<2^Me(o,1))<<2^Me(o,2))<<2^Me(o,3):0}function Wd(o){return o.trim()}function Vt(o,a){return(o=a.exec(o))?o[0]:o}function te(o,a,c){return o.replace(a,c)}function Lo(o,a,c){return o.indexOf(a,c)}function Me(o,a){return o.charCodeAt(a)|0}function Mr(o,a,c){return o.slice(a,c)}function Lt(o){return o.length}function Ud(o){return o.length}function ni(o,a){return a.push(o),o}function jh(o,a){return o.map(a).join("")}function gd(o,a){return o.filter(function(c){return!Vt(c,a)})}var Uo=1,fn=1,$d=0,wt=0,Fe=0,vn="";function $o(o,a,c,f,m,w,C,L){return{value:o,root:a,parent:c,type:f,props:m,children:w,line:Uo,column:fn,length:C,return:"",siblings:L}}function hr(o,a){return Zs($o("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},a)}function dn(o){for(;o.root;)o=hr(o.root,{children:[o]});ni(o,o.siblings)}function kh(){return Fe}function Sh(){return Fe=wt>0?Me(vn,--wt):0,fn--,Fe===10&&(fn=1,Uo--),Fe}function Pt(){return Fe=wt<$d?Me(vn,wt++):0,fn++,Fe===10&&(fn=1,Uo++),Fe}function mr(){return Me(vn,wt)}function Po(){return wt}function bo(o,a){return Mr(vn,o,a)}function si(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nh(o){return Uo=fn=1,$d=Lt(vn=o),wt=0,[]}function Ch(o){return vn="",o}function bs(o){return Wd(bo(wt-1,Js(o===91?o+2:o===40?o+1:o)))}function Eh(o){for(;(Fe=mr())&&Fe<33;)Pt();return si(o)>2||si(Fe)>3?"":" "}function _h(o,a){for(;--a&&Pt()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return bo(o,Po()+(a<6&&mr()==32&&Pt()==32))}function Js(o){for(;Pt();)switch(Fe){case o:return wt;case 34:case 39:o!==34&&o!==39&&Js(Fe);break;case 40:o===41&&Js(o);break;case 92:Pt();break}return wt}function zh(o,a){for(;Pt()&&o+Fe!==57;)if(o+Fe===84&&mr()===47)break;return"/*"+bo(a,wt-1)+"*"+ca(o===47?o:Pt())}function Lh(o){for(;!si(mr());)Pt();return bo(o,wt)}function Ph(o){return Ch(To("",null,null,null,[""],o=Nh(o),0,[0],o))}function To(o,a,c,f,m,w,C,L,N){for(var B=0,Q=0,W=C,X=0,ae=0,q=0,U=1,Y=1,me=1,ce=0,re="",T=m,K=w,$=f,P=re;Y;)switch(q=ce,ce=Pt()){case 40:if(q!=108&&Me(P,W-1)==58){Lo(P+=te(bs(ce),"&","&\f"),"&\f",Bd(B?L[B-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:P+=bs(ce);break;case 9:case 10:case 13:case 32:P+=Eh(q);break;case 92:P+=_h(Po()-1,7);continue;case 47:switch(mr()){case 42:case 47:ni(Th(zh(Pt(),Po()),a,c,N),N),(si(q||1)==5||si(mr()||1)==5)&&Lt(P)&&Mr(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*U:L[B++]=Lt(P)*me;case 125*U:case 59:case 0:switch(ce){case 0:case 125:Y=0;case 59+Q:me==-1&&(P=te(P,/\f/g,"")),ae>0&&(Lt(P)-W||U===0&&q===47)&&ni(ae>32?yd(P+";",f,c,W-1,N):yd(te(P," ","")+";",f,c,W-2,N),N);break;case 59:P+=";";default:if(ni($=xd(P,a,c,B,Q,m,L,re,T=[],K=[],W,w),w),ce===123)if(Q===0)To(P,a,$,$,T,w,W,L,K);else{switch(X){case 99:if(Me(P,3)===110)break;case 108:if(Me(P,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?To(o,$,$,f&&ni(xd(o,$,$,0,0,m,L,re,m,T=[],W,K),K),m,K,W,L,f?T:K):To(P,$,$,$,[""],K,0,L,K)}}B=Q=ae=0,U=me=1,re=P="",W=C;break;case 58:W=1+Lt(P),ae=q;default:if(U<1){if(ce==123)--U;else if(ce==125&&U++==0&&Sh()==125)continue}switch(P+=ca(ce),ce*U){case 38:me=Q>0?1:(P+="\f",-1);break;case 44:L[B++]=(Lt(P)-1)*me,me=1;break;case 64:mr()===45&&(P+=bs(Pt())),X=mr(),Q=W=Lt(re=P+=Lh(Po())),ce++;break;case 45:q===45&&Lt(P)==2&&(U=0)}}return w}function xd(o,a,c,f,m,w,C,L,N,B,Q,W){for(var X=m-1,ae=m===0?w:[""],q=Ud(ae),U=0,Y=0,me=0;U<f;++U)for(var ce=0,re=Mr(o,X+1,X=Bd(Y=C[U])),T=o;ce<q;++ce)(T=Wd(Y>0?ae[ce]+" "+re:te(re,/&\f/g,ae[ce])))&&(N[me++]=T);return $o(o,a,c,m===0?Wo:L,N,B,Q,W)}function Th(o,a,c,f){return $o(o,a,c,Md,ca(kh()),Mr(o,2,-2),0,f)}function yd(o,a,c,f,m){return $o(o,a,c,ua,Mr(o,0,f),Mr(o,f+1,-1),f,m)}function bd(o,a,c){switch(wh(o,a)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+o+o;case 4855:return he+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return oi+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+oi+o+Se+o+o;case 5936:switch(Me(o,a+11)){case 114:return he+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+Se+o+o;case 6165:return he+o+Se+"flex-"+o+o;case 5187:return he+o+te(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+Se+"flex-$1$2")+o;case 5443:return he+o+Se+"flex-item-"+te(o,/flex-|-self/g,"")+(Vt(o,/flex-|baseline/)?"":Se+"grid-row-"+te(o,/flex-|-self/g,""))+o;case 4675:return he+o+Se+"flex-line-pack"+te(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+Se+te(o,"shrink","negative")+o;case 5292:return he+o+Se+te(o,"basis","preferred-size")+o;case 6060:return he+"box-"+te(o,"-grow","")+he+o+Se+te(o,"grow","positive")+o;case 4554:return he+te(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return te(te(te(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return te(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return te(te(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+he+o+o;case 4200:if(!Vt(o,/flex-|baseline/))return Se+"grid-column-align"+Mr(o,a)+o;break;case 2592:case 3360:return Se+te(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(f,m){return a=m,Vt(f.props,/grid-\w+-end/)})?~Lo(o+(c=c[a].value),"span",0)?o:Se+te(o,"-start","")+o+Se+"grid-row-span:"+(~Lo(c,"span",0)?Vt(c,/\d+/):+Vt(c,/\d+/)-+Vt(o,/\d+/))+";":Se+te(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(f){return Vt(f.props,/grid-\w+-start/)})?o:Se+te(te(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return te(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(o)-1-a>6)switch(Me(o,a+1)){case 109:if(Me(o,a+4)!==45)break;case 102:return te(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+oi+(Me(o,a+3)==108?"$3":"$2-$3"))+o;case 115:return~Lo(o,"stretch",0)?bd(te(o,"stretch","fill-available"),a,c)+o:o}break;case 5152:case 5920:return te(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,m,w,C,L,N,B){return Se+m+":"+w+B+(C?Se+m+"-span:"+(L?N:+N-+w)+B:"")+o});case 4949:if(Me(o,a+6)===121)return te(o,":",":"+he)+o;break;case 6444:switch(Me(o,Me(o,14)===45?18:11)){case 120:return te(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Me(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Se+"$2box$3")+o;case 100:return te(o,":",":"+Se)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(o,"scroll-","scroll-snap-")+o}return o}function Do(o,a){for(var c="",f=0;f<o.length;f++)c+=a(o[f],f,o,a)||"";return c}function Oh(o,a,c,f){switch(o.type){case yh:if(o.children.length)break;case gh:case xh:case ua:return o.return=o.return||o.value;case Md:return"";case Hd:return o.return=o.value+"{"+Do(o.children,f)+"}";case Wo:if(!Lt(o.value=o.props.join(",")))return""}return Lt(c=Do(o.children,f))?o.return=o.value+"{"+c+"}":""}function Rh(o){var a=Ud(o);return function(c,f,m,w){for(var C="",L=0;L<a;L++)C+=o[L](c,f,m,w)||"";return C}}function Ih(o){return function(a){a.root||(a=a.return)&&o(a)}}function Fh(o,a,c,f){if(o.length>-1&&!o.return)switch(o.type){case ua:o.return=bd(o.value,o.length,c);return;case Hd:return Do([hr(o,{value:te(o.value,"@","@"+he)})],f);case Wo:if(o.length)return jh(c=o.props,function(m){switch(Vt(m,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dn(hr(o,{props:[te(m,/:(read-\w+)/,":"+oi+"$1")]})),dn(hr(o,{props:[m]})),Zs(o,{props:gd(c,f)});break;case"::placeholder":dn(hr(o,{props:[te(m,/:(plac\w+)/,":"+he+"input-$1")]})),dn(hr(o,{props:[te(m,/:(plac\w+)/,":"+oi+"$1")]})),dn(hr(o,{props:[te(m,/:(plac\w+)/,Se+"input-$1")]})),dn(hr(o,{props:[m]})),Zs(o,{props:gd(c,f)});break}return""})}}var Dh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},pn=typeof process!="undefined"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",Vd="active",Qd="data-styled-version",Vo="6.3.10",da=`/*!sc*/
`,li=typeof window!="undefined"&&typeof document!="undefined",Ah=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY);function ci(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Oo=new Map,Ao=new Map,Ro=1,ii=function(o){if(Oo.has(o))return Oo.get(o);for(;Ao.has(Ro);)Ro++;var a=Ro++;return Oo.set(o,a),Ao.set(a,o),a},Mh=function(o,a){Ro=a+1,Oo.set(o,a),Ao.set(a,o)},fa=Object.freeze([]),hn=Object.freeze({});function Hh(o,a,c){return c===void 0&&(c=hn),o.theme!==c.theme&&o.theme||a||c.theme}var Yd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wh=/(^-|-$)/g;function wd(o){return o.replace(Bh,"-").replace(Wh,"")}var Uh=/(a)(d)/gi,jd=function(o){return String.fromCharCode(o+(o>25?39:97))};function ea(o){var a,c="";for(a=Math.abs(o);a>52;a=a/52|0)c=jd(a%52)+c;return(jd(a%52)+c).replace(Uh,"$1-$2")}var Vs,Rr=function(o,a){for(var c=a.length;c;)o=33*o^a.charCodeAt(--c);return o},Gd=function(o){return Rr(5381,o)};function $h(o){return ea(Gd(o)>>>0)}function bh(o){return o.displayName||o.name||"Component"}function Qs(o){return typeof o=="string"&&!0}var qd=typeof Symbol=="function"&&Symbol.for,Kd=qd?Symbol.for("react.memo"):60115,Vh=qd?Symbol.for("react.forward_ref"):60112,Qh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gh=((Vs={})[Vh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vs[Kd]=Xd,Vs);function kd(o){return("type"in(a=o)&&a.type.$$typeof)===Kd?Xd:"$$typeof"in o?Gh[o.$$typeof]:Qh;var a}var qh=Object.defineProperty,Kh=Object.getOwnPropertyNames,Sd=Object.getOwnPropertySymbols,Xh=Object.getOwnPropertyDescriptor,Zh=Object.getPrototypeOf,Nd=Object.prototype;function Zd(o,a,c){if(typeof a!="string"){if(Nd){var f=Zh(a);f&&f!==Nd&&Zd(o,f,c)}var m=Kh(a);Sd&&(m=m.concat(Sd(a)));for(var w=kd(o),C=kd(a),L=0;L<m.length;++L){var N=m[L];if(!(N in Yh||c&&c[N]||C&&N in C||w&&N in w)){var B=Xh(a,N);try{qh(o,N,B)}catch{}}}}return o}function mn(o){return typeof o=="function"}function pa(o){return typeof o=="object"&&"styledComponentId"in o}function Fr(o,a){return o&&a?"".concat(o," ").concat(a):o||a||""}function Cd(o,a){return o.join("")}function ai(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function ta(o,a,c){if(c===void 0&&(c=!1),!c&&!ai(o)&&!Array.isArray(o))return a;if(Array.isArray(a))for(var f=0;f<a.length;f++)o[f]=ta(o[f],a[f]);else if(ai(a))for(var f in a)o[f]=ta(o[f],a[f]);return o}function ha(o,a){Object.defineProperty(o,"toString",{value:a})}var Jh=(function(){function o(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(a){if(a===this._cGroup)return this._cIndex;var c=this._cIndex;if(a>this._cGroup)for(var f=this._cGroup;f<a;f++)c+=this.groupSizes[f];else for(f=this._cGroup-1;f>=a;f--)c-=this.groupSizes[f];return this._cGroup=a,this._cIndex=c,c},o.prototype.insertRules=function(a,c){if(a>=this.groupSizes.length){for(var f=this.groupSizes,m=f.length,w=m;a>=w;)if((w<<=1)<0)throw ci(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var C=m;C<w;C++)this.groupSizes[C]=0}for(var L=this.indexOfGroup(a+1),N=0,B=(C=0,c.length);C<B;C++)this.tag.insertRule(L,c[C])&&(this.groupSizes[a]++,L++,N++);N>0&&this._cGroup>a&&(this._cIndex+=N)},o.prototype.clearGroup=function(a){if(a<this.length){var c=this.groupSizes[a],f=this.indexOfGroup(a),m=f+c;this.groupSizes[a]=0;for(var w=f;w<m;w++)this.tag.deleteRule(f);c>0&&this._cGroup>a&&(this._cIndex-=c)}},o.prototype.getGroup=function(a){var c="";if(a>=this.length||this.groupSizes[a]===0)return c;for(var f=this.groupSizes[a],m=this.indexOfGroup(a),w=m+f,C=m;C<w;C++)c+=this.tag.getRule(C)+da;return c},o})(),em="style[".concat(pn,"][").concat(Qd,'="').concat(Vo,'"]'),tm=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ed=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},ra=function(o){if(!o)return document;if(Ed(o))return o;if("getRootNode"in o){var a=o.getRootNode();if(Ed(a))return a}return document},rm=function(o,a,c){for(var f,m=c.split(","),w=0,C=m.length;w<C;w++)(f=m[w])&&o.registerName(a,f)},nm=function(o,a){for(var c,f=((c=a.textContent)!==null&&c!==void 0?c:"").split(da),m=[],w=0,C=f.length;w<C;w++){var L=f[w].trim();if(L){var N=L.match(tm);if(N){var B=0|parseInt(N[1],10),Q=N[2];B!==0&&(Mh(Q,B),rm(o,Q,N[3]),o.getTag().insertRules(B,m)),m.length=0}else m.push(L)}}},Ys=function(o){for(var a=ra(o.options.target).querySelectorAll(em),c=0,f=a.length;c<f;c++){var m=a[c];m&&m.getAttribute(pn)!==Vd&&(nm(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function im(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Jd=function(o){var a=document.head,c=o||a,f=document.createElement("style"),m=(function(L){var N=Array.from(L.querySelectorAll("style[".concat(pn,"]")));return N[N.length-1]})(c),w=m!==void 0?m.nextSibling:null;f.setAttribute(pn,Vd),f.setAttribute(Qd,Vo);var C=im();return C&&f.setAttribute("nonce",C),c.insertBefore(f,w),f},om=(function(){function o(a){this.element=Jd(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var f;if(c.sheet)return c.sheet;for(var m=(f=c.getRootNode().styleSheets)!==null&&f!==void 0?f:document.styleSheets,w=0,C=m.length;w<C;w++){var L=m[w];if(L.ownerNode===c)return L}throw ci(17)})(this.element),this.length=0}return o.prototype.insertRule=function(a,c){try{return this.sheet.insertRule(c,a),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},o.prototype.getRule=function(a){var c=this.sheet.cssRules[a];return c&&c.cssText?c.cssText:""},o})(),lm=(function(){function o(a){this.element=Jd(a),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(a,c){if(a<=this.length&&a>=0){var f=document.createTextNode(c);return this.element.insertBefore(f,this.nodes[a]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},o.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},o})(),sm=(function(){function o(a){this.rules=[],this.length=0}return o.prototype.insertRule=function(a,c){return a<=this.length&&(a===this.length?this.rules.push(c):this.rules.splice(a,0,c),this.length++,!0)},o.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},o.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},o})(),_d=li,am={isServer:!li,useCSSOMInjection:!Ah},ef=(function(){function o(a,c,f){a===void 0&&(a=hn),c===void 0&&(c={});var m=this;this.options=lt(lt({},am),a),this.gs=c,this.names=new Map(f),this.server=!!a.isServer,!this.server&&li&&_d&&(_d=!1,Ys(this)),ha(this,function(){return(function(w){for(var C=w.getTag(),L=C.length,N="",B=function(W){var X=(function(me){return Ao.get(me)})(W);if(X===void 0)return"continue";var ae=w.names.get(X);if(ae===void 0||!ae.size)return"continue";var q=C.getGroup(W);if(q.length===0)return"continue";var U=pn+".g"+W+'[id="'+X+'"]',Y="";ae.forEach(function(me){me.length>0&&(Y+=me+",")}),N+=q+U+'{content:"'+Y+'"}'+da},Q=0;Q<L;Q++)B(Q);return N})(m)})}return o.registerId=function(a){return ii(a)},o.prototype.rehydrate=function(){!this.server&&li&&Ys(this)},o.prototype.reconstructWithOptions=function(a,c){c===void 0&&(c=!0);var f=new o(lt(lt({},this.options),a),this.gs,c&&this.names||void 0);return!this.server&&li&&a.target!==this.options.target&&ra(this.options.target)!==ra(a.target)&&Ys(f),f},o.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(c){var f=c.useCSSOMInjection,m=c.target;return c.isServer?new sm(m):f?new om(m):new lm(m)})(this.options),new Jh(a)));var a},o.prototype.hasNameForId=function(a,c){var f,m;return(m=(f=this.names.get(a))===null||f===void 0?void 0:f.has(c))!==null&&m!==void 0&&m},o.prototype.registerName=function(a,c){ii(a);var f=this.names.get(a);f?f.add(c):this.names.set(a,new Set([c]))},o.prototype.insertRules=function(a,c,f){this.registerName(a,c),this.getTag().insertRules(ii(a),f)},o.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},o.prototype.clearRules=function(a){this.getTag().clearGroup(ii(a)),this.clearNames(a)},o.prototype.clearTag=function(){this.tag=void 0},o})(),um=/&/g,Qt=47,Ir=42;function zd(o){if(o.indexOf("}")===-1)return!1;for(var a=o.length,c=0,f=0,m=!1,w=0;w<a;w++){var C=o.charCodeAt(w);if(f!==0||m||C!==Qt||o.charCodeAt(w+1)!==Ir)if(m)C===Ir&&o.charCodeAt(w+1)===Qt&&(m=!1,w++);else if(C!==34&&C!==39||w!==0&&o.charCodeAt(w-1)===92){if(f===0){if(C===123)c++;else if(C===125&&--c<0)return!0}}else f===0?f=C:f===C&&(f=0);else m=!0,w++}return c!==0||f!==0}function tf(o,a){return o.map(function(c){return c.type==="rule"&&(c.value="".concat(a," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(a," ")),c.props=c.props.map(function(f){return"".concat(a," ").concat(f)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=tf(c.children,a)),c})}function cm(o){var a,c,f,m=hn,w=m.options,C=w===void 0?hn:w,L=m.plugins,N=L===void 0?fa:L,B=function(q,U,Y){return Y.startsWith(c)&&Y.endsWith(c)&&Y.replaceAll(c,"").length>0?".".concat(a):q},Q=N.slice();Q.push(function(q){q.type===Wo&&q.value.includes("&")&&(f||(f=new RegExp("\\".concat(c,"\\b"),"g")),q.props[0]=q.props[0].replace(um,c).replace(f,B))}),C.prefix&&Q.push(Fh),Q.push(Oh);var W=[],X=Rh(Q.concat(Ih(function(q){return W.push(q)}))),ae=function(q,U,Y,me){U===void 0&&(U=""),Y===void 0&&(Y=""),me===void 0&&(me="&"),a=me,c=U,f=void 0;var ce=(function(T){if(!zd(T))return T;for(var K=T.length,$="",P=0,A=0,xe=0,Te=!1,le=0;le<K;le++){var Le=T.charCodeAt(le);if(xe!==0||Te||Le!==Qt||T.charCodeAt(le+1)!==Ir)if(Te)Le===Ir&&T.charCodeAt(le+1)===Qt&&(Te=!1,le++);else if(Le!==34&&Le!==39||le!==0&&T.charCodeAt(le-1)===92){if(xe===0)if(Le===123)A++;else if(Le===125){if(--A<0){for(var Ne=le+1;Ne<K;){var Ve=T.charCodeAt(Ne);if(Ve===59||Ve===10)break;Ne++}Ne<K&&T.charCodeAt(Ne)===59&&Ne++,A=0,le=Ne-1,P=Ne;continue}A===0&&($+=T.substring(P,le+1),P=le+1)}else Le===59&&A===0&&($+=T.substring(P,le+1),P=le+1)}else xe===0?xe=Le:xe===Le&&(xe=0);else Te=!0,le++}if(P<K){var Xe=T.substring(P);zd(Xe)||($+=Xe)}return $})((function(T){if(T.indexOf("//")===-1)return T;for(var K=T.length,$=[],P=0,A=0,xe=0,Te=0;A<K;){var le=T.charCodeAt(A);if(le!==34&&le!==39||A!==0&&T.charCodeAt(A-1)===92)if(xe===0)if(le===Qt&&A+1<K&&T.charCodeAt(A+1)===Ir){for(A+=2;A+1<K&&(T.charCodeAt(A)!==Ir||T.charCodeAt(A+1)!==Qt);)A++;A+=2}else if(le===40&&A>=3&&(32|T.charCodeAt(A-1))==108&&(32|T.charCodeAt(A-2))==114&&(32|T.charCodeAt(A-3))==117)Te=1,A++;else if(Te>0)le===41?Te--:le===40&&Te++,A++;else if(le===Ir&&A+1<K&&T.charCodeAt(A+1)===Qt)A>P&&$.push(T.substring(P,A)),P=A+=2;else if(le===Qt&&A+1<K&&T.charCodeAt(A+1)===Qt){for(A>P&&$.push(T.substring(P,A));A<K&&T.charCodeAt(A)!==10;)A++;P=A}else A++;else A++;else xe===0?xe=le:xe===le&&(xe=0),A++}return P===0?T:(P<K&&$.push(T.substring(P)),$.join(""))})(q)),re=Ph(Y||U?"".concat(Y," ").concat(U," { ").concat(ce," }"):ce);return C.namespace&&(re=tf(re,C.namespace)),W=[],Do(re,X),W};return ae.hash=N.length?N.reduce(function(q,U){return U.name||ci(15),Rr(q,U.name)},5381).toString():"",ae}var dm=new ef,na=cm(),rf=ft.createContext({shouldForwardProp:void 0,styleSheet:dm,stylis:na});rf.Consumer;ft.createContext(void 0);function Ld(){return ft.useContext(rf)}var fm=(function(){function o(a,c){var f=this;this.inject=function(m,w){w===void 0&&(w=na);var C=f.name+w.hash;m.hasNameForId(f.id,C)||m.insertRules(f.id,C,w(f.rules,C,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=c,ha(this,function(){throw ci(12,String(f.name))})}return o.prototype.getName=function(a){return a===void 0&&(a=na),this.name+a.hash},o})();function pm(o,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||o in Dh||o.startsWith("--")?String(a).trim():"".concat(a,"px")}var hm=function(o){return o>="A"&&o<="Z"};function Pd(o){for(var a="",c=0;c<o.length;c++){var f=o[c];if(c===1&&f==="-"&&o[0]==="-")return o;hm(f)?a+="-"+f.toLowerCase():a+=f}return a.startsWith("ms-")?"-"+a:a}var nf=function(o){return o==null||o===!1||o===""},of=function(o){var a=[];for(var c in o){var f=o[c];o.hasOwnProperty(c)&&!nf(f)&&(Array.isArray(f)&&f.isCss||mn(f)?a.push("".concat(Pd(c),":"),f,";"):ai(f)?a.push.apply(a,Fo(Fo(["".concat(c," {")],of(f),!1),["}"],!1)):a.push("".concat(Pd(c),": ").concat(pm(c,f),";")))}return a};function Dr(o,a,c,f,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(nf(o))return m;if(pa(o))return m.push(".".concat(o.styledComponentId)),m;if(mn(o)){if(!mn(C=o)||C.prototype&&C.prototype.isReactComponent||!a)return m.push(o),m;var w=o(a);return Dr(w,a,c,f,m)}var C;if(o instanceof fm)return c?(o.inject(c,f),m.push(o.getName(f))):m.push(o),m;if(ai(o)){for(var L=of(o),N=0;N<L.length;N++)m.push(L[N]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(N=0;N<o.length;N++)Dr(o[N],a,c,f,m);return m}function mm(o){for(var a=0;a<o.length;a+=1){var c=o[a];if(mn(c)&&!pa(c))return!1}return!0}var vm=Gd(Vo),gm=(function(){function o(a,c,f){this.rules=a,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&mm(a),this.componentId=c,this.baseHash=Rr(vm,c),this.baseStyle=f,ef.registerId(c)}return o.prototype.generateAndInjectStyles=function(a,c,f){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,c,f).className:"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Fr(m,this.staticRulesId);else{var w=Cd(Dr(this.rules,a,c,f)),C=ea(Rr(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,C)){var L=f(w,".".concat(C),void 0,this.componentId);c.insertRules(this.componentId,C,L)}m=Fr(m,C),this.staticRulesId=C}else{for(var N=Rr(this.baseHash,f.hash),B="",Q=0;Q<this.rules.length;Q++){var W=this.rules[Q];if(typeof W=="string")B+=W;else if(W){var X=Cd(Dr(W,a,c,f));N=Rr(Rr(N,String(Q)),X),B+=X}}if(B){var ae=ea(N>>>0);if(!c.hasNameForId(this.componentId,ae)){var q=f(B,".".concat(ae),void 0,this.componentId);c.insertRules(this.componentId,ae,q)}m=Fr(m,ae)}}return{className:m,css:typeof window=="undefined"?c.getTag().getGroup(ii(this.componentId)):""}},o})(),lf=ft.createContext(void 0);lf.Consumer;var Gs={};function xm(o,a,c){var f=pa(o),m=o,w=!Qs(o),C=a.attrs,L=C===void 0?fa:C,N=a.componentId,B=N===void 0?(function(T,K){var $=typeof T!="string"?"sc":wd(T);Gs[$]=(Gs[$]||0)+1;var P="".concat($,"-").concat($h(Vo+$+Gs[$]));return K?"".concat(K,"-").concat(P):P})(a.displayName,a.parentComponentId):N,Q=a.displayName,W=Q===void 0?(function(T){return Qs(T)?"styled.".concat(T):"Styled(".concat(bh(T),")")})(o):Q,X=a.displayName&&a.componentId?"".concat(wd(a.displayName),"-").concat(a.componentId):a.componentId||B,ae=f&&m.attrs?m.attrs.concat(L).filter(Boolean):L,q=a.shouldForwardProp;if(f&&m.shouldForwardProp){var U=m.shouldForwardProp;if(a.shouldForwardProp){var Y=a.shouldForwardProp;q=function(T,K){return U(T,K)&&Y(T,K)}}else q=U}var me=new gm(c,X,f?m.componentStyle:void 0);function ce(T,K){return(function($,P,A){var xe=$.attrs,Te=$.componentStyle,le=$.defaultProps,Le=$.foldedComponentIds,Ne=$.styledComponentId,Ve=$.target,Xe=ft.useContext(lf),Qe=Ld(),ye=$.shouldForwardProp||Qe.shouldForwardProp,z=Hh(P,Xe,le)||hn,H=(function(oe,de,ue){for(var ve,Ee=lt(lt({},de),{className:void 0,theme:ue}),Gt=0;Gt<oe.length;Gt+=1){var yr=mn(ve=oe[Gt])?ve(Ee):ve;for(var jt in yr)jt==="className"?Ee.className=Fr(Ee.className,yr[jt]):jt==="style"?Ee.style=lt(lt({},Ee.style),yr[jt]):Ee[jt]=yr[jt]}return"className"in de&&typeof de.className=="string"&&(Ee.className=Fr(Ee.className,de.className)),Ee})(xe,P,z),O=H.as||Ve,v={};for(var j in H)H[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&H.theme===z||(j==="forwardedAs"?v.as=H.forwardedAs:ye&&!ye(j,O)||(v[j]=H[j]));var J=(function(oe,de){var ue=Ld(),ve=oe.generateAndInjectStyles(de,ue.styleSheet,ue.stylis);return ve})(Te,H),ee=J.className,se=Fr(Le,Ne);return ee&&(se+=" "+ee),H.className&&(se+=" "+H.className),v[Qs(O)&&!Yd.has(O)?"class":"className"]=se,A&&(v.ref=A),He.createElement(O,v)})(re,T,K)}ce.displayName=W;var re=ft.forwardRef(ce);return re.attrs=ae,re.componentStyle=me,re.displayName=W,re.shouldForwardProp=q,re.foldedComponentIds=f?Fr(m.foldedComponentIds,m.styledComponentId):"",re.styledComponentId=X,re.target=f?m.target:o,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=f?(function(K){for(var $=[],P=1;P<arguments.length;P++)$[P-1]=arguments[P];for(var A=0,xe=$;A<xe.length;A++)ta(K,xe[A],!0);return K})({},m.defaultProps,T):T}}),ha(re,function(){return".".concat(re.styledComponentId)}),w&&Zd(re,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function Td(o,a){for(var c=[o[0]],f=0,m=a.length;f<m;f+=1)c.push(a[f],o[f+1]);return c}var Od=function(o){return Object.assign(o,{isCss:!0})};function ym(o){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];if(mn(o)||ai(o))return Od(Dr(Td(fa,Fo([o],a,!0))));var f=o;return a.length===0&&f.length===1&&typeof f[0]=="string"?Dr(f):Od(Dr(Td(f,a)))}function ia(o,a,c){if(c===void 0&&(c=hn),!a)throw ci(1,a);var f=function(m){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];return o(a,c,ym.apply(void 0,Fo([m],w,!1)))};return f.attrs=function(m){return ia(o,a,lt(lt({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},f.withConfig=function(m){return ia(o,a,lt(lt({},c),m))},f}var sf=function(o){return ia(xm,o)},Z=sf;Yd.forEach(function(o){Z[o]=sf(o)});const qs={Wrapper:Z.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .scrollTopButton { position: fixed; right: 22px; bottom: 22px; z-index: 10; width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 14px; color: #fff; background: var(--color-primary); box-shadow: 0 10px 28px var(--color-shadow); opacity: 0; pointer-events: none; transform: translateY(10px); transition: opacity .16s ease, transform .16s ease, background .16s ease, box-shadow .16s ease; }
        .scrollTopButton.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
        .scrollTopButton:hover { transform: translateY(-2px); background: var(--color-primary-hover); }
        .scrollTopButton svg { font-size: 18px; }
    `,Header:Z.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,ScrollTop:Z.button``,Main:Z.main`
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
    `},Rd={Wrapper:Z.header`
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
    `,Main:Z.div`
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
    `};var af={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Id=ft.createContext&&ft.createContext(af),wm=["attr","size","title"];function jm(o,a){if(o==null)return{};var c=km(o,a),f,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(m=0;m<w.length;m++)f=w[m],!(a.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(o,f)&&(c[f]=o[f])}return c}function km(o,a){if(o==null)return{};var c={};for(var f in o)if(Object.prototype.hasOwnProperty.call(o,f)){if(a.indexOf(f)>=0)continue;c[f]=o[f]}return c}function Mo(){return Mo=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(o[f]=c[f])}return o},Mo.apply(this,arguments)}function Fd(o,a){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);a&&(f=f.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),c.push.apply(c,f)}return c}function Ho(o){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?Fd(Object(c),!0).forEach(function(f){Sm(o,f,c[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):Fd(Object(c)).forEach(function(f){Object.defineProperty(o,f,Object.getOwnPropertyDescriptor(c,f))})}return o}function Sm(o,a,c){return a=Nm(a),a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}function Nm(o){var a=Cm(o,"string");return typeof a=="symbol"?a:a+""}function Cm(o,a){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var f=c.call(o,a);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(o)}function uf(o){return o&&o.map((a,c)=>ft.createElement(a.tag,Ho({key:c},a.attr),uf(a.child)))}function ie(o){return a=>ft.createElement(Em,Mo({attr:Ho({},o.attr)},a),uf(o.child))}function Em(o){var a=c=>{var{attr:f,size:m,title:w}=o,C=jm(o,wm),L=m||c.size||"1em",N;return c.className&&(N=c.className),o.className&&(N=(N?N+" ":"")+o.className),ft.createElement("svg",Mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,f,C,{className:N,style:Ho(Ho({color:o.color||c.color},c.style),o.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),w&&ft.createElement("title",null,w),o.children)};return Id!==void 0?ft.createElement(Id.Consumer,null,c=>a(c)):a(af)}function ui(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function _m(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function oa(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 16 16 12 12 8"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function zm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function Lm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(o)}function Pm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function Dd(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function gr(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function xr(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function la(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function Tm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Om(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(o)}function Ar(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Io(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(o)}function Rm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(o)}function Yt(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function Im(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(o)}function Fm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(o)}function Dm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function Ks(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Am(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(o)}function pt(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function sa(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function Mm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(o)}function Hm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function Bm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(o)}function Xs(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(o)}function Wm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function vr(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function Um(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function cf(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(o)}function Bo(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function $m(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(o)}function bm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Vm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(o)}function Tt(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(o)}function Qm(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(o)}function Ym(o){return ie({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const Gm="/datastructures-core-notes/logo.png",qm=()=>{const[o,a]=He.useState(!1),[c,f]=He.useState("dark");He.useEffect(()=>{const L=localStorage.getItem("app-theme")||"dark";f(L),L==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),He.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const m=He.useMemo(()=>c==="light"?"dark":"light",[c]),w=()=>{f(m)};return l.jsx(Rd.Wrapper,{children:l.jsx(Rd.Main,{children:l.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[l.jsxs("div",{className:"logoNameWrapper",children:[l.jsxs("div",{className:"logoWrapper",children:[!o&&l.jsx("div",{className:"logoSkeleton"}),l.jsx("img",{src:Gm,alt:"Data Structures Core Notes logo",onLoad:()=>a(!0),style:{opacity:o?1:0}})]}),l.jsxs("div",{className:"nameWrapper",children:[l.jsx("div",{className:"title",children:"datastructures-core-notes"}),l.jsx("div",{className:"subTitle",children:"At-a-glance datastructures revision"})]})]}),l.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[l.jsx("span",{className:"icon",children:c==="light"?l.jsx(Wm,{}):l.jsx(bm,{})}),l.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})},Km={Wrapper:Z.footer`
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
    `},Xm=[["Portfolio","https://www.ashishranjan.net/",Fm],["GitHub","https://github.com/a2rp",Im],["CodePen","https://codepen.io/ash1198",Tm],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Mm],["Facebook","https://www.facebook.com/theash.ashish/",Rm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Qm],["Email","mailto:ash.ranjan09@gmail.com",Bm],["Support","https://a2rp-donation-page.netlify.app/",Am],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Om],["Patreon","https://www.patreon.com/a2rp",$m]],Zm=()=>{const o=new Date().getFullYear();return l.jsxs(Km.Wrapper,{children:[l.jsxs("div",{className:"copy",children:["Copyright © ",o," ",l.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),l.jsx("nav",{className:"links","aria-label":"Social and support links",children:Xm.map(([a,c,f])=>l.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":a,title:a,children:l.jsx(f,{"aria-hidden":"true"})},a))})]})},Ad={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    `,Container:Z.div`
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
    `},Jm=()=>{const o="2026-09-23T15:59:46.027Z",a=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return l.jsx(Ad.Wrapper,{children:l.jsxs(Ad.Container,{children:[l.jsxs("div",{className:"header",children:[l.jsx("div",{className:"iconBox",children:l.jsx(pt,{})}),l.jsx("h2",{className:"title",children:"About Data Structures"})]}),l.jsx("p",{children:"Data Structures are organized ways of storing and managing data so that it can be accessed and modified efficiently. They are the foundation of algorithm design and performance optimization. Choosing the correct data structure directly impacts speed, memory usage, and scalability of software systems."}),l.jsx("p",{children:"Beyond definitions, understanding data structures means understanding trade-offs. Arrays offer fast access but slow insertion. Linked lists offer flexible insertion but slower traversal. Hash tables provide average constant-time lookup but depend heavily on hashing quality. Trees and graphs model hierarchical and network relationships that linear structures cannot represent."}),l.jsx("p",{children:"This project focuses on clarity over memorization. Each structure is explained through its internal behavior, time complexity, space cost, and real-world usage patterns. The goal is not just to implement structures, but to develop the intuition required to choose the right one under pressure."}),l.jsxs("div",{className:"metaRow",children:[l.jsxs("div",{className:"metaItem",children:[l.jsx(Ar,{}),l.jsx("span",{children:"Performance Thinking"})]}),l.jsxs("div",{className:"metaItem",children:[l.jsx(Tt,{}),l.jsx("span",{children:"Complexity Awareness"})]})]}),l.jsxs("div",{className:"metaBar",children:[l.jsxs("span",{className:"metaLeft",children:[l.jsx("span",{className:"metaIcon",children:l.jsx(la,{})}),l.jsx("span",{className:"metaLabel",children:"Last updated"})]}),l.jsx("span",{className:"metaValue",children:a})]})]})})},jo={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},ev=()=>{const[o,a]=He.useState(!0);return l.jsx(jo.Wrapper,{children:l.jsxs(jo.Container,{className:o?"open":"",children:[l.jsxs(jo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(pt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Foundations"}),l.jsx("p",{children:"This is non-negotiable"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(jo.Content,{children:[l.jsx("div",{className:"intro",children:"Strong data structure understanding begins with performance awareness. Before learning trees, graphs, or hashing, you must understand how cost grows, how memory behaves, and why trade-offs exist. If this section is strong, everything else becomes obvious."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"What is a Data Structure"})]}),l.jsx("p",{children:"A Data Structure is a way of organizing and storing data so that operations like access, insertion, deletion, and search can be performed efficiently."}),l.jsx("p",{className:"mini",children:"It is not just storage. It defines behavior and cost."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Bo,{}),l.jsx("h3",{children:"Abstract Data Type vs Data Structure"})]}),l.jsx("p",{children:"An Abstract Data Type defines behavior. A Data Structure defines implementation."}),l.jsx("pre",{children:`// Stack is ADT
// Array-based stack is Data Structure`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(la,{}),l.jsx("h3",{children:"Time Complexity"})]}),l.jsx("p",{children:"Time complexity measures how running time grows relative to input size."}),l.jsx("pre",{children:`// O(n)
for(int i=0;i<n;i++){
   cout << i;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Space Complexity"})]}),l.jsx("p",{children:"Space complexity measures how memory usage grows with input size."}),l.jsx("pre",{children:`// O(n) extra space
int arr[n];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Big O, Omega, Theta"})]}),l.jsx("p",{children:"Big O → worst case Big Omega → best case Big Theta → tight bound"}),l.jsx("p",{className:"mini",children:"Always analyze worst case unless specified."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"Growth Rates"})]}),l.jsx("p",{children:"Constant O(1) Logarithmic O(log n) Linear O(n) Quadratic O(n²)"}),l.jsx("p",{className:"mini",children:"Logarithmic growth scales far better than linear."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Recursion Stack Cost"})]}),l.jsx("p",{children:"Every recursive call uses stack memory. Deep recursion may cause stack overflow."}),l.jsx("pre",{children:`void f(int n){
  if(n==0) return;
  f(n-1);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Bo,{}),l.jsx("h3",{children:"Trade-off Thinking"})]}),l.jsx("p",{children:"Faster access often means higher memory usage. Lower memory may increase computation time."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(la,{}),l.jsx("h3",{children:"Amortized Analysis"})]}),l.jsx("p",{children:"Some operations are expensive occasionally, but cheap on average."}),l.jsx("pre",{children:`// Vector resizing
// Occasional O(n)
// Average O(1)`})]})]})]})]})})},ko={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},tv=()=>{const[o,a]=He.useState(!0);return l.jsx(ko.Wrapper,{children:l.jsxs(ko.Container,{className:o?"open":"",children:[l.jsxs(ko.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(pt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Linear Data Structures"}),l.jsx("p",{children:"Memory in sequence"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(ko.Content,{children:[l.jsx("div",{className:"intro",children:"Linear data structures store elements in a sequential manner. Each element has a single predecessor and successor except the first and last. Understanding memory layout here builds the base for trees, graphs, and advanced structures."}),l.jsxs("div",{className:"focus",children:["Mental Focus:",l.jsx("br",{}),"Contiguous vs Non-contiguous memory",l.jsx("br",{}),"Access cost vs Insertion cost"]}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dd,{}),l.jsx("h3",{children:"Array"})]}),l.jsx("p",{children:"Stores elements in contiguous memory locations. Fast access using index."}),l.jsx("p",{className:"mini",children:"Access: O(1) | Insert: O(n)"}),l.jsx("pre",{children:`int arr[5] = {1,2,3,4,5};
cout << arr[2];  // 3`}),l.jsx("pre",{children:`// Insert at beginning (costly)
for(int i=n;i>0;i--){
  arr[i] = arr[i-1];
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Static vs Dynamic Arrays"})]}),l.jsx("p",{children:"Static arrays have fixed size. Dynamic arrays resize at runtime."}),l.jsx("pre",{children:`// Static
int arr[5];

// Dynamic
int* arr = new int[n];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"Vector Concept"})]}),l.jsx("p",{children:"Dynamic array that resizes automatically."}),l.jsx("pre",{children:`vector<int> v;
v.push_back(10);
v.push_back(20);`}),l.jsx("p",{className:"mini",children:"Amortized insertion: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(sa,{}),l.jsx("h3",{children:"Singly Linked List"})]}),l.jsx("p",{children:"Nodes stored non-contiguously. Each node points to next."}),l.jsx("pre",{children:`struct Node {
  int data;
  Node* next;
};`}),l.jsx("p",{className:"mini",children:"Access: O(n) | Insert at head: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(sa,{}),l.jsx("h3",{children:"Doubly Linked List"})]}),l.jsx("p",{children:"Each node has previous and next pointer."}),l.jsx("pre",{children:`struct Node {
  int data;
  Node* next;
  Node* prev;
};`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Circular Linked List"})]}),l.jsx("p",{children:"Last node connects back to first node."}),l.jsx("pre",{children:"tail->next = head;"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Dd,{}),l.jsx("h3",{children:"Stack (LIFO)"})]}),l.jsx("p",{children:"Last In First Out structure."}),l.jsx("pre",{children:`stack<int> s;
s.push(10);
s.pop();`}),l.jsx("p",{className:"mini",children:"Used in recursion, expression evaluation."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"Queue (FIFO)"})]}),l.jsx("p",{children:"First In First Out structure."}),l.jsx("pre",{children:`queue<int> q;
q.push(10);
q.pop();`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Deque"})]}),l.jsx("p",{children:"Double-ended queue. Insert and remove from both ends."}),l.jsx("pre",{children:`deque<int> d;
d.push_front(5);
d.push_back(10);`})]})]})]})]})})},So={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},rv=()=>{const[o,a]=He.useState(!0);return l.jsx(So.Wrapper,{children:l.jsxs(So.Container,{className:o?"open":"",children:[l.jsxs(So.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Io,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Hash Based Structures"}),l.jsx("p",{children:"Fast lookup structures"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(So.Content,{children:[l.jsx("div",{className:"intro",children:"Hash based structures allow near constant-time lookup, insertion, and deletion on average. They trade ordering for speed. Understanding how hashing works internally is critical to avoid worst case performance traps."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ks,{}),l.jsx("h3",{children:"Hash Table"})]}),l.jsx("p",{children:"A hash table stores key-value pairs and uses a hash function to compute an index for each key."}),l.jsx("pre",{children:`// C++ example
#include <unordered_map>

unordered_map<string,int> mp;
mp["apple"] = 10;
cout << mp["apple"]; // 10`}),l.jsx("p",{className:"mini",children:"Average complexity: O(1)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Bo,{}),l.jsx("h3",{children:"Hash Function Basics"})]}),l.jsx("p",{children:"A hash function converts a key into an index. Good hash functions distribute values evenly."}),l.jsx("pre",{children:`// Simplified example
index = key % table_size;`}),l.jsx("p",{className:"mini",children:"Poor hash function leads to collisions."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Collision Handling"})]}),l.jsx("p",{children:"Collision happens when two keys map to same index."}),l.jsx("pre",{children:`// Chaining
index -> linked list of entries

// Open Addressing
Probe next free slot`}),l.jsx("p",{className:"mini",children:"Chaining uses extra memory. Open addressing reduces memory but needs probing."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Load Factor"})]}),l.jsx("p",{children:"Load factor = number_of_elements / table_size."}),l.jsx("pre",{children:"load_factor = n / m;"}),l.jsx("p",{children:"High load factor increases collisions and reduces performance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Io,{}),l.jsx("h3",{children:"Rehashing"})]}),l.jsx("p",{children:"When load factor exceeds threshold, table resizes and elements are rehashed."}),l.jsx("pre",{children:`// Happens internally
if(load_factor > threshold)
   resize_table();`}),l.jsx("p",{className:"mini",children:"Expensive occasionally but amortized O(1)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ks,{}),l.jsx("h3",{children:"Set"})]}),l.jsx("p",{children:"Set stores unique values using hashing."}),l.jsx("pre",{children:`# Python example
s = set()
s.add(10)
s.add(20)
print(10 in s)  # True`}),l.jsx("p",{className:"mini",children:"No duplicates allowed."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Io,{}),l.jsx("h3",{children:"Map"})]}),l.jsx("p",{children:"Map stores key-value pairs."}),l.jsx("pre",{children:`# Python dict
d = {"a": 1}
print(d["a"])  # 1`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ks,{}),l.jsx("h3",{children:"Unordered Map Concept"})]}),l.jsx("p",{children:"C++ unordered_map is hash based. Order is not maintained."}),l.jsx("pre",{children:`unordered_map<int,int> mp;
mp[1] = 100;`}),l.jsx("p",{className:"mini",children:"Ordered map uses tree (O(log n)). Unordered map uses hashing (avg O(1))."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Mental Focus"})]}),l.jsx("p",{children:"Average O(1) does not mean guaranteed O(1). Worst case can degrade to O(n)."}),l.jsx("p",{className:"mini",children:"Understand trade-offs before blindly using hash structures."})]})]})]})]})})},No={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},nv=()=>{const[o,a]=He.useState(!0);return l.jsx(No.Wrapper,{children:l.jsxs(No.Container,{className:o?"open":"",children:[l.jsxs(No.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Yt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Trees"}),l.jsx("p",{children:"Hierarchical structures"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(No.Content,{children:[l.jsx("div",{className:"intro",children:"Trees represent hierarchical relationships. Unlike arrays or linked lists, trees branch. They are fundamental for searching, sorting, indexing, and system design. Understanding recursion and height cost is essential here."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Tree Terminology"})]}),l.jsx("p",{children:"Root, Parent, Child, Leaf, Height, Depth, Subtree."}),l.jsx("pre",{children:`// Height of tree = longest path from root to leaf
// Height = number of edges`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"Binary Tree"})]}),l.jsx("p",{children:"Each node has at most two children."}),l.jsx("pre",{children:`struct Node {
    int data;
    Node* left;
    Node* right;
};`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Binary Search Tree"})]}),l.jsx("p",{children:"Left subtree < Root < Right subtree."}),l.jsx("pre",{children:`Node* insert(Node* root, int val) {
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
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Balanced Tree Concept"})]}),l.jsx("p",{children:"Balanced tree keeps height small. Ideal height ≈ log(n)."}),l.jsx("p",{className:"mini",children:"Unbalanced BST can degrade to O(n)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"AVL Tree (Concept)"})]}),l.jsx("p",{children:"Self-balancing BST. Height difference ≤ 1."}),l.jsx("p",{className:"mini",children:"Uses rotations to maintain balance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Red Black Tree (Concept)"})]}),l.jsx("p",{children:"Balanced BST with coloring rules."}),l.jsx("p",{className:"mini",children:"Used internally in map, set (C++)."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"Heap"})]}),l.jsx("p",{children:"Complete binary tree."}),l.jsx("pre",{children:`// Array representation
// left = 2*i + 1
// right = 2*i + 2`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Min Heap / Max Heap"})]}),l.jsx("p",{children:"Min heap: parent ≤ children Max heap: parent ≥ children"}),l.jsx("pre",{children:`// C++ priority queue (max heap by default)
priority_queue<int> pq;`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Priority Queue"})]}),l.jsx("p",{children:"Abstract structure using heap internally."}),l.jsx("pre",{children:"priority_queue<int, vector<int>, greater<int>> pq; // min heap"})]})]}),l.jsxs("div",{className:"mental",children:[l.jsx("h4",{children:"Mental Focus"}),l.jsx("p",{children:"Recursion is natural in trees. Height determines time complexity. Divide and conquer patterns emerge here."})]})]})]})})},Co={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},iv=()=>{const[o,a]=He.useState(!0);return l.jsx(Co.Wrapper,{children:l.jsxs(Co.Container,{className:o?"open":"",children:[l.jsxs(Co.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(cf,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Graphs"}),l.jsx("p",{children:"Connectivity thinking"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(Co.Content,{children:[l.jsx("div",{className:"intro",children:"Graphs model relationships. Whenever data is about connections between entities, graphs are the natural structure. Social networks, road maps, dependencies, routing systems — all are graphs. The mental focus here is traversal patterns."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Graph Basics"})]}),l.jsx("p",{children:"A graph consists of vertices (nodes) and edges (connections between nodes)."}),l.jsx("pre",{children:`// V = vertices
// E = edges
// Graph = (V, E)`}),l.jsx("p",{className:"mini",children:"Unlike trees, graphs can contain cycles."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Directed vs Undirected"})]}),l.jsx("p",{children:"Directed graph: edges have direction. Undirected graph: edges are bidirectional."}),l.jsx("pre",{children:`// Directed edge
u -> v

// Undirected edge
u -- v`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Weighted vs Unweighted"})]}),l.jsx("p",{children:"Weighted graphs assign cost to edges. Unweighted graphs treat all edges equally."}),l.jsx("pre",{children:`// Weighted edge
u -> v (cost = 5)`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Xs,{}),l.jsx("h3",{children:"Adjacency List"})]}),l.jsx("p",{children:"Stores neighbors of each node. Space efficient for sparse graphs."}),l.jsx("pre",{children:`// C++ representation
vector<int> adj[n];
adj[0].push_back(1);
adj[0].push_back(2);`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Xs,{}),l.jsx("h3",{children:"Adjacency Matrix"})]}),l.jsx("p",{children:"2D matrix representation. Useful for dense graphs."}),l.jsx("pre",{children:`int graph[n][n];
graph[u][v] = 1;`}),l.jsx("p",{className:"mini",children:"Space complexity O(n²)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(oa,{}),l.jsx("h3",{children:"BFS (Breadth First Search)"})]}),l.jsx("p",{children:"Traverses level by level using queue."}),l.jsx("pre",{children:`void bfs(int start){
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
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"DFS (Depth First Search)"})]}),l.jsx("p",{children:"Explores deep before backtracking."}),l.jsx("pre",{children:`void dfs(int node){
  visited[node]=true;

  for(int neighbor: adj[node]){
    if(!visited[neighbor]){
      dfs(neighbor);
    }
  }
}`}),l.jsx("p",{className:"mini",children:"Uses recursion stack internally."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Cycle Detection"})]}),l.jsx("p",{children:"In directed graph: use recursion stack. In undirected graph: track parent."}),l.jsx("pre",{children:`// Undirected cycle check
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
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Xs,{}),l.jsx("h3",{children:"Dijkstra (Intro)"})]}),l.jsx("p",{children:"Finds shortest path in weighted graph. Uses priority queue."}),l.jsx("pre",{children:`// Basic idea
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
}`})]})]})]})]})})},Eo={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},ov=()=>{const[o,a]=He.useState(!0);return l.jsx(Eo.Wrapper,{children:l.jsxs(Eo.Container,{className:o?"open":"",children:[l.jsxs(Eo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Yt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Advanced Structures"}),l.jsx("p",{children:"These separate serious candidates"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(Eo.Content,{children:[l.jsx("div",{className:"intro",children:"Advanced data structures solve problems that basic arrays, stacks, or hash tables cannot handle efficiently. These structures are often used in competitive programming, system design, and performance-critical applications."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(sa,{}),l.jsx("h3",{children:"Trie"})]}),l.jsx("p",{children:"A Trie is a tree-based structure used for storing strings efficiently. Each node represents a character."}),l.jsx("p",{className:"mini",children:"Best for prefix search, autocomplete, dictionary problems."}),l.jsx("pre",{children:`struct TrieNode {
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
}`}),l.jsx("p",{className:"mini",children:"Time: O(L) where L = word length"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Bo,{}),l.jsx("h3",{children:"Disjoint Set (Union Find)"})]}),l.jsx("p",{children:"Used to detect connectivity between elements. Efficient for cycle detection in graphs."}),l.jsx("pre",{children:`int parent[N];

int find(int x){
  if(parent[x] == x) return x;
  return parent[x] = find(parent[x]);
}

void unionSet(int a, int b){
  int pa = find(a);
  int pb = find(b);
  if(pa != pb) parent[pa] = pb;
}`}),l.jsx("p",{className:"mini",children:"Nearly O(1) with path compression."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Lm,{}),l.jsx("h3",{children:"Segment Tree"})]}),l.jsx("p",{children:"Used for fast range queries (sum, min, max)."}),l.jsx("pre",{children:`void build(int node, int start, int end){
  if(start == end){
    tree[node] = arr[start];
  } else {
    int mid = (start + end) / 2;
    build(2*node, start, mid);
    build(2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
  }
}`}),l.jsx("p",{className:"mini",children:"Query & Update: O(log n)"})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Fenwick Tree"})]}),l.jsx("p",{children:"Also called Binary Indexed Tree. Used for prefix sums efficiently."}),l.jsx("pre",{children:`void update(int i, int val){
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
}`}),l.jsx("p",{className:"mini",children:"Space efficient alternative to segment tree."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Yt,{}),l.jsx("h3",{children:"Skip List"})]}),l.jsx("p",{children:"A probabilistic alternative to balanced trees."}),l.jsx("p",{children:"Elements are stored in multiple layers to allow fast search, insert, delete."}),l.jsx("p",{className:"mini",children:"Average complexity: O(log n)"})]})]})]})]})})},_o={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},lv=()=>{const[o,a]=He.useState(!0);return l.jsx(_o.Wrapper,{children:l.jsxs(_o.Container,{children:[l.jsxs(_o.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(pt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Algorithmic Patterns"}),l.jsx("p",{children:"This is gold"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(_o.Content,{children:[l.jsx("div",{className:"intro",children:"Algorithmic patterns are reusable thinking models. Instead of solving problems randomly, you recognize structure. If you master patterns, you solve entire classes of problems instead of single questions."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Two Pointers"})]}),l.jsx("p",{children:"Use two indices moving through a structure. Often used in sorted arrays."}),l.jsx("pre",{children:`// Find pair with sum = target
int l = 0, r = n - 1;
while(l < r){
    int sum = arr[l] + arr[r];
    if(sum == target) break;
    else if(sum < target) l++;
    else r--;
}`}),l.jsx("p",{className:"mini",children:"Works well when input is sorted."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Vm,{}),l.jsx("h3",{children:"Sliding Window"})]}),l.jsx("p",{children:"Maintain a window over a range instead of recomputing repeatedly."}),l.jsx("pre",{children:`// Max sum of subarray size k
int sum = 0;
for(int i=0;i<k;i++)
    sum += arr[i];

int maxSum = sum;

for(int i=k;i<n;i++){
    sum += arr[i] - arr[i-k];
    maxSum = max(maxSum, sum);
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Fast & Slow Pointers"})]}),l.jsx("p",{children:"Detect cycles in linked lists."}),l.jsx("pre",{children:`// Floyd cycle detection
Node* slow = head;
Node* fast = head;

while(fast && fast->next){
    slow = slow->next;
    fast = fast->next->next;
    if(slow == fast) return true;
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Um,{}),l.jsx("h3",{children:"Binary Search Pattern"})]}),l.jsx("p",{children:"Reduce search space by half every step."}),l.jsx("pre",{children:`int l = 0, r = n-1;
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
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Backtracking"})]}),l.jsx("p",{children:"Try all possibilities and undo choices."}),l.jsx("pre",{children:`void solve(int index){
    if(index == n){
        printSolution();
        return;
    }
    chooseOption();
    solve(index + 1);
    undoChoice();
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"Greedy Basics"})]}),l.jsx("p",{children:"Make locally optimal choices hoping for global optimum."}),l.jsx("pre",{children:`// Activity selection idea
sort(activities.begin(), activities.end());
for(auto activity : activities){
    if(activity.start >= lastEnd){
        select(activity);
        lastEnd = activity.end;
    }
}`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Dynamic Programming Intro"})]}),l.jsx("p",{children:"Store solutions of subproblems to avoid recomputation."}),l.jsx("pre",{children:`// Fibonacci DP
vector<int> dp(n+1);
dp[0]=0; dp[1]=1;
for(int i=2;i<=n;i++)
    dp[i]=dp[i-1]+dp[i-2];`})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(vr,{}),l.jsx("h3",{children:"Recursion vs Iteration"})]}),l.jsx("p",{children:"Recursion is cleaner but uses stack space. Iteration is memory efficient."}),l.jsx("pre",{children:`// Recursive factorial
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
}`})]})]})]})]})})},zo={Wrapper:Z.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:Z.div`
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
    `,Header:Z.div`
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
    `,Content:Z.div`
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
    `},sv=()=>{const[o,a]=He.useState(!0);return l.jsx(zo.Wrapper,{children:l.jsxs(zo.Container,{className:o?"open":"",children:[l.jsxs(zo.Header,{onClick:()=>a(!o),children:[l.jsxs("div",{className:"left",children:[l.jsx("div",{className:"icon",children:l.jsx(Tt,{})}),l.jsxs("div",{children:[l.jsx("h2",{children:"Complexity Master Section"}),l.jsx("p",{children:"Because most people misunderstand cost"})]})]}),l.jsx("div",{className:"right",children:o?l.jsx(xr,{}):l.jsx(gr,{})})]}),o&&l.jsxs(zo.Content,{children:[l.jsx("div",{className:"intro",children:"Big O is not the full story. Performance depends on memory, CPU cache, recursion depth, and worst-case behavior. This section builds real cost intuition."}),l.jsxs("div",{className:"grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Ar,{}),l.jsx("h3",{children:"Time vs Space Tradeoffs"})]}),l.jsx("p",{children:"Faster execution often requires extra memory. Reducing memory may increase computation time."}),l.jsx("pre",{children:`// Using extra array for faster lookup
bool seen[n]; // O(n) space
// Speeds up search from O(n²) to O(n)`}),l.jsx("p",{className:"mini",children:"Tradeoff rule: Memory buys speed."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Io,{}),l.jsx("h3",{children:"Cache Locality Intuition"})]}),l.jsx("p",{children:"Contiguous memory (arrays) is faster because CPU cache loads nearby elements together."}),l.jsx("pre",{children:`// Array (cache friendly)
for(int i=0;i<n;i++){
   sum += arr[i];
}

// Linked list (cache unfriendly)
while(node){
   sum += node->value;
   node = node->next;
}`}),l.jsx("p",{className:"mini",children:"Arrays often outperform linked lists even if theoretical complexity is same."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(_m,{}),l.jsx("h3",{children:"Stack Overflow Concept"})]}),l.jsx("p",{children:"Each recursive call consumes stack memory. Deep recursion can crash the program."}),l.jsx("pre",{children:`void f(int n){
   if(n==0) return;
   f(n-1);  // deep recursion
}`}),l.jsx("p",{className:"mini",children:"Use iteration or tail recursion where possible."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(pt,{}),l.jsx("h3",{children:"Memory Fragmentation"})]}),l.jsx("p",{children:"Frequent dynamic allocation can scatter memory, reducing performance."}),l.jsx("pre",{children:`// Multiple small allocations
new Node();
new Node();
new Node();`}),l.jsx("p",{className:"mini",children:"Contiguous allocation improves performance."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(ui,{}),l.jsx("h3",{children:"Worst Case vs Average Case"})]}),l.jsx("p",{children:"Always analyze worst case unless told otherwise."}),l.jsx("pre",{children:`// Hash table
// Average: O(1)
// Worst case: O(n) if collisions`}),l.jsx("p",{className:"mini",children:"Real systems must survive worst-case behavior."})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"cardHead",children:[l.jsx(Tt,{}),l.jsx("h3",{children:"When Big O Lies"})]}),l.jsx("p",{children:"Big O ignores constants and real hardware."}),l.jsx("pre",{children:`// O(n) array traversal
// O(n) linked list traversal

// Array is usually faster
// because of cache locality`}),l.jsx("p",{className:"mini",children:"Complexity gives growth trend, not exact runtime."})]})]})]})]})})},av=()=>{const o=He.useRef(null),[a,c]=He.useState("overview"),[f,m]=He.useState(!1),w=[["overview","Overview",l.jsx(Pm,{})],["foundations","Foundations",l.jsx(pt,{})],["linearDataStructures","Linear structures",l.jsx(Hm,{})],["hashBasedStructures","Hash tables",l.jsx(Dm,{})],["trees","Trees",l.jsx(Yt,{})],["graphs","Graphs",l.jsx(cf,{})],["advancedStructures","Advanced structures",l.jsx(Ym,{})],["algorithmicPatterns","Algorithmic patterns",l.jsx(ui,{})],["complexityMaster","Complexity guide",l.jsx(pt,{})]],C=N=>{var B;c(N),(B=o.current)==null||B.scrollTo({top:0,left:0,behavior:"smooth"})};He.useEffect(()=>{const N=o.current;if(!N)return;const B=()=>m(N.scrollTop>350);return N.addEventListener("scroll",B,{passive:!0}),B(),()=>N.removeEventListener("scroll",B)},[]);const L=()=>{var N;(N=o.current)==null||N.scrollTo({top:0,left:0,behavior:"smooth"})};return l.jsxs(qs.Wrapper,{children:[l.jsx(qs.Header,{children:l.jsx(qm,{})}),l.jsxs(qs.Main,{ref:o,children:[l.jsxs("aside",{className:"studyNav","aria-label":"Data structures topics",children:[l.jsx("div",{className:"studyNavLabel",children:"Study guide"}),l.jsx("nav",{children:w.map(([N,B,Q])=>l.jsxs("button",{type:"button",className:a===N?"active":"",onClick:()=>C(N),children:[Q,l.jsx("span",{children:B})]},N))}),l.jsx("p",{children:"Select a topic to open its notes."})]}),l.jsxs("div",{className:"contentWrapper",children:[a==="overview"&&l.jsx(Jm,{}),l.jsx("div",{className:`topicWrapper ${a==="foundations"?"activeTopic":""}`,children:l.jsx(ev,{})}),l.jsx("div",{className:`topicWrapper ${a==="linearDataStructures"?"activeTopic":""}`,children:l.jsx(tv,{})}),l.jsx("div",{className:`topicWrapper ${a==="hashBasedStructures"?"activeTopic":""}`,children:l.jsx(rv,{})}),l.jsx("div",{className:`topicWrapper ${a==="trees"?"activeTopic":""}`,children:l.jsx(nv,{})}),l.jsx("div",{className:`topicWrapper ${a==="graphs"?"activeTopic":""}`,children:l.jsx(iv,{})}),l.jsx("div",{className:`topicWrapper ${a==="advancedStructures"?"activeTopic":""}`,children:l.jsx(ov,{})}),l.jsx("div",{className:`topicWrapper ${a==="algorithmicPatterns"?"activeTopic":""}`,children:l.jsx(lv,{})}),l.jsx("div",{className:`topicWrapper ${a==="complexityMaster"?"activeTopic":""}`,children:l.jsx(sv,{})})]}),l.jsx("div",{className:"footerWrapper",children:l.jsx(Zm,{})})]}),l.jsx("button",{className:"scrollTopButton "+(f?"show":""),type:"button",onClick:L,"aria-label":"Scroll main content to top",title:"Scroll to top",children:l.jsx(zm,{})})]})};vh.createRoot(document.getElementById("root")).render(l.jsx(l.Fragment,{children:l.jsx(av,{})}));
