(()=>{var wv=Object.defineProperty,Cv=Object.defineProperties;var xv=Object.getOwnPropertyDescriptors;var Nf=Object.getOwnPropertySymbols;var c0=Object.prototype.hasOwnProperty,d0=Object.prototype.propertyIsEnumerable;var pd=(Jr,eo)=>(eo=Symbol[Jr])?eo:Symbol.for("Symbol."+Jr),Sv=Jr=>{throw TypeError(Jr)};var u0=(Jr,eo,ft)=>eo in Jr?wv(Jr,eo,{enumerable:!0,configurable:!0,writable:!0,value:ft}):Jr[eo]=ft,Kn=(Jr,eo)=>{for(var ft in eo||(eo={}))c0.call(eo,ft)&&u0(Jr,ft,eo[ft]);if(Nf)for(var ft of Nf(eo))d0.call(eo,ft)&&u0(Jr,ft,eo[ft]);return Jr},ci=(Jr,eo)=>Cv(Jr,xv(eo));var qu=(Jr,eo)=>{var ft={};for(var Li in Jr)c0.call(Jr,Li)&&eo.indexOf(Li)<0&&(ft[Li]=Jr[Li]);if(Jr!=null&&Nf)for(var Li of Nf(Jr))eo.indexOf(Li)<0&&d0.call(Jr,Li)&&(ft[Li]=Jr[Li]);return ft};var Ir=(Jr,eo,ft)=>new Promise((Li,M)=>{var f=E=>{try{F(ft.next(E))}catch(x){M(x)}},y=E=>{try{F(ft.throw(E))}catch(x){M(x)}},F=E=>E.done?Li(E.value):Promise.resolve(E.value).then(f,y);F((ft=ft.apply(Jr,eo)).next())}),Dc=function(Jr,eo){this[0]=Jr,this[1]=eo},hp=(Jr,eo,ft)=>{var Li=(y,F,E,x)=>{try{var m=ft[y](F),d=(F=m.value)instanceof Dc,J=m.done;Promise.resolve(d?F[0]:F).then(R=>d?Li(y==="return"?y:"next",F[1]?{done:R.done,value:R.value}:R,E,x):E({value:R,done:J})).catch(R=>Li("throw",R,E,x))}catch(R){x(R)}},M=y=>f[y]=F=>new Promise((E,x)=>Li(y,F,E,x)),f={};return ft=ft.apply(Jr,eo),f[pd("asyncIterator")]=()=>f,M("next"),M("throw"),M("return"),f},mp=Jr=>{var eo=Jr[pd("asyncIterator")],ft=!1,Li,M={};return eo==null?(eo=Jr[pd("iterator")](),Li=f=>M[f]=y=>eo[f](y)):(eo=eo.call(Jr),Li=f=>M[f]=y=>{if(ft){if(ft=!1,f==="throw")throw y;return y}return ft=!0,{done:!1,value:new Dc(new Promise(F=>{var E=eo[f](y);E instanceof Object||Sv("Object expected"),F(E)}),1)}}),M[pd("iterator")]=()=>M,Li("next"),"throw"in eo?Li("throw"):M.throw=f=>{throw f},"return"in eo&&Li("return"),M},f0=(Jr,eo,ft)=>(eo=Jr[pd("asyncIterator")])?eo.call(Jr):(Jr=Jr[pd("iterator")](),eo={},ft=(Li,M)=>(M=Jr[Li])&&(eo[Li]=f=>new Promise((y,F,E)=>(f=M.call(Jr,f),E=f.done,Promise.resolve(f.value).then(x=>y({value:x,done:E}),F)))),ft("next"),ft("return"),eo);(()=>{var Jr={2242(M,f,y){"use strict";y.d(f,{U1:()=>nn,zD:()=>Uo,Z0:()=>kr});function F(u){for(var v=arguments.length,C=Array(v>1?v-1:0),O=1;O<v;O++)C[O-1]=arguments[O];if(0)var V,re;throw Error("[Immer] minified error nr: "+u+(C.length?" "+C.map((function(ke){return"'"+ke+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function E(u){return!!u&&!!u[mn]}function x(u){var v;return!!u&&((function(C){if(!C||typeof C!="object")return!1;var O=Object.getPrototypeOf(C);if(O===null)return!0;var V=Object.hasOwnProperty.call(O,"constructor")&&O.constructor;return V===Object||typeof V=="function"&&Function.toString.call(V)===_i})(u)||Array.isArray(u)||!!u[Rn]||!!(!((v=u.constructor)===null||v===void 0)&&v[Rn])||se(u)||ge(u))}function m(u){return E(u)||F(23,u),u[mn].t}function d(u,v,C){C===void 0&&(C=!1),J(u)===0?(C?Object.keys:Nr)(u).forEach((function(O){C&&typeof O=="symbol"||v(O,u[O],u)})):u.forEach((function(O,V){return v(V,O,u)}))}function J(u){var v=u[mn];return v?v.i>3?v.i-4:v.i:Array.isArray(u)?1:se(u)?2:ge(u)?3:0}function R(u,v){return J(u)===2?u.has(v):Object.prototype.hasOwnProperty.call(u,v)}function z(u,v){return J(u)===2?u.get(v):u[v]}function X(u,v,C){var O=J(u);O===2?u.set(v,C):O===3?u.add(C):u[v]=C}function be(u,v){return u===v?u!==0||1/u==1/v:u!=u&&v!=v}function se(u){return mt&&u instanceof Map}function ge(u){return ct&&u instanceof Set}function ye(u){return u.o||u.t}function Z(u){if(Array.isArray(u))return Array.prototype.slice.call(u);var v=Po(u);delete v[mn];for(var C=Nr(v),O=0;O<C.length;O++){var V=C[O],re=v[V];re.writable===!1&&(re.writable=!0,re.configurable=!0),(re.get||re.set)&&(v[V]={configurable:!0,writable:!0,enumerable:re.enumerable,value:u[V]})}return Object.create(Object.getPrototypeOf(u),v)}function ve(u,v){return v===void 0&&(v=!1),fe(u)||E(u)||!x(u)||(J(u)>1&&(u.set=u.add=u.clear=u.delete=ae),Object.freeze(u),v&&d(u,(function(C,O){return ve(O,!0)}),!0)),u}function ae(){F(2)}function fe(u){return u==null||typeof u!="object"||Object.isFrozen(u)}function ee(u){var v=di[u];return v||F(18,u),v}function g(u,v){di[u]||(di[u]=v)}function Be(){return xt}function Ee(u,v){v&&(ee("Patches"),u.u=[],u.s=[],u.v=v)}function We(u){ht(u),u.p.forEach(zt),u.p=null}function ht(u){u===xt&&(xt=u.l)}function Tt(u){return xt={p:[],l:xt,h:u,m:!0,_:0}}function zt(u){var v=u[mn];v.i===0||v.i===1?v.j():v.g=!0}function Wn(u,v){v._=v.p.length;var C=v.p[0],O=u!==void 0&&u!==C;return v.h.O||ee("ES5").S(v,u,O),O?(C[mn].P&&(We(v),F(4)),x(u)&&(u=ir(v,u),v.l||An(v,u)),v.u&&ee("Patches").M(C[mn].t,u,v.u,v.s)):u=ir(v,C,[]),We(v),v.u&&v.v(v.u,v.s),u!==Sn?u:void 0}function ir(u,v,C){if(fe(v))return v;var O=v[mn];if(!O)return d(v,(function(Re,Te){return Vn(u,O,v,Re,Te,C)}),!0),v;if(O.A!==u)return v;if(!O.P)return An(u,O.t,!0),O.t;if(!O.I){O.I=!0,O.A._--;var V=O.i===4||O.i===5?O.o=Z(O.k):O.o,re=V,ke=!1;O.i===3&&(re=new Set(V),V.clear(),ke=!0),d(re,(function(Re,Te){return Vn(u,O,V,Re,Te,C,ke)})),An(u,V,!1),C&&u.u&&ee("Patches").N(O,C,u.u,u.s)}return O.o}function Vn(u,v,C,O,V,re,ke){if(E(V)){var Re=ir(u,V,re&&v&&v.i!==3&&!R(v.R,O)?re.concat(O):void 0);if(X(C,O,Re),!E(Re))return;u.m=!1}else ke&&C.add(V);if(x(V)&&!fe(V)){if(!u.h.D&&u._<1)return;ir(u,V),v&&v.A.l||An(u,V)}}function An(u,v,C){C===void 0&&(C=!1),!u.l&&u.h.D&&u.m&&ve(v,C)}function Bn(u,v){var C=u[mn];return(C?ye(C):u)[v]}function ar(u,v){if(v in u)for(var C=Object.getPrototypeOf(u);C;){var O=Object.getOwnPropertyDescriptor(C,v);if(O)return O;C=Object.getPrototypeOf(C)}}function _n(u){u.P||(u.P=!0,u.l&&_n(u.l))}function wt(u){u.o||(u.o=Z(u.t))}function ln(u,v,C){var O=se(v)?ee("MapSet").F(v,C):ge(v)?ee("MapSet").T(v,C):u.O?(function(V,re){var ke=Array.isArray(V),Re={i:ke?1:0,A:re?re.A:Be(),P:!1,I:!1,R:{},l:re,t:V,k:null,o:null,j:null,C:!1},Te=Re,ie=xo;ke&&(Te=[Re],ie=So);var Pe=Proxy.revocable(Te,ie),l=Pe.revoke,p=Pe.proxy;return Re.k=p,Re.j=l,p})(v,C):ee("ES5").J(v,C);return(C?C.A:Be()).p.push(O),O}function kn(u){return E(u)||F(22,u),(function v(C){if(!x(C))return C;var O,V=C[mn],re=J(C);if(V){if(!V.P&&(V.i<4||!ee("ES5").K(V)))return V.t;V.I=!0,O=er(C,re),V.I=!1}else O=er(C,re);return d(O,(function(ke,Re){V&&z(V.t,ke)===Re||X(O,ke,v(Re))})),re===3?new Set(O):O})(u)}function er(u,v){switch(v){case 2:return new Map(u);case 3:return Array.from(u)}return Z(u)}function Oe(){function u(ke,Re){var Te=re[ke];return Te?Te.enumerable=Re:re[ke]=Te={configurable:!0,enumerable:Re,get:function(){var ie=this[mn];return xo.get(ie,ke)},set:function(ie){var Pe=this[mn];xo.set(Pe,ke,ie)}},Te}function v(ke){for(var Re=ke.length-1;Re>=0;Re--){var Te=ke[Re][mn];if(!Te.P)switch(Te.i){case 5:O(Te)&&_n(Te);break;case 4:C(Te)&&_n(Te)}}}function C(ke){for(var Re=ke.t,Te=ke.k,ie=Nr(Te),Pe=ie.length-1;Pe>=0;Pe--){var l=ie[Pe];if(l!==mn){var p=Re[l];if(p===void 0&&!R(Re,l))return!0;var b=Te[l],_=b&&b[mn];if(_?_.t!==p:!be(b,p))return!0}}var j=!!Re[mn];return ie.length!==Nr(Re).length+(j?0:1)}function O(ke){var Re=ke.k;if(Re.length!==ke.t.length)return!0;var Te=Object.getOwnPropertyDescriptor(Re,Re.length-1);if(Te&&!Te.get)return!0;for(var ie=0;ie<Re.length;ie++)if(!Re.hasOwnProperty(ie))return!0;return!1}function V(ke){ke.g&&F(3,JSON.stringify(ye(ke)))}var re={};g("ES5",{J:function(ke,Re){var Te=Array.isArray(ke),ie=(function(l,p){if(l){for(var b=Array(p.length),_=0;_<p.length;_++)Object.defineProperty(b,""+_,u(_,!0));return b}var j=Po(p);delete j[mn];for(var oe=Nr(j),Ce=0;Ce<oe.length;Ce++){var Le=oe[Ce];j[Le]=u(Le,l||!!j[Le].enumerable)}return Object.create(Object.getPrototypeOf(p),j)})(Te,ke),Pe={i:Te?5:4,A:Re?Re.A:Be(),P:!1,I:!1,R:{},l:Re,t:ke,k:ie,o:null,g:!1,C:!1};return Object.defineProperty(ie,mn,{value:Pe,writable:!0}),ie},S:function(ke,Re,Te){Te?E(Re)&&Re[mn].A===ke&&v(ke.p):(ke.u&&(function ie(Pe){if(Pe&&typeof Pe=="object"){var l=Pe[mn];if(l){var p=l.t,b=l.k,_=l.R,j=l.i;if(j===4)d(b,(function(Ve){Ve!==mn&&(p[Ve]!==void 0||R(p,Ve)?_[Ve]||ie(b[Ve]):(_[Ve]=!0,_n(l)))})),d(p,(function(Ve){b[Ve]!==void 0||R(b,Ve)||(_[Ve]=!1,_n(l))}));else if(j===5){if(O(l)&&(_n(l),_.length=!0),b.length<p.length)for(var oe=b.length;oe<p.length;oe++)_[oe]=!1;else for(var Ce=p.length;Ce<b.length;Ce++)_[Ce]=!0;for(var Le=Math.min(b.length,p.length),qe=0;qe<Le;qe++)b.hasOwnProperty(qe)||(_[qe]=!0),_[qe]===void 0&&ie(b[qe])}}}})(ke.p[0]),v(ke.p))},K:function(ke){return ke.i===4?C(ke):O(ke)}})}function vt(){function u(O){if(!x(O))return O;if(Array.isArray(O))return O.map(u);if(se(O))return new Map(Array.from(O.entries()).map((function(ke){return[ke[0],u(ke[1])]})));if(ge(O))return new Set(Array.from(O).map(u));var V=Object.create(Object.getPrototypeOf(O));for(var re in O)V[re]=u(O[re]);return R(O,Rn)&&(V[Rn]=O[Rn]),V}function v(O){return E(O)?u(O):O}var C="add";g("Patches",{$:function(O,V){return V.forEach((function(re){for(var ke=re.path,Re=re.op,Te=O,ie=0;ie<ke.length-1;ie++){var Pe=J(Te),l=ke[ie];typeof l!="string"&&typeof l!="number"&&(l=""+l),Pe!==0&&Pe!==1||l!=="__proto__"&&l!=="constructor"||F(24),typeof Te=="function"&&l==="prototype"&&F(24),typeof(Te=z(Te,l))!="object"&&F(15,ke.join("/"))}var p=J(Te),b=u(re.value),_=ke[ke.length-1];switch(Re){case"replace":switch(p){case 2:return Te.set(_,b);case 3:F(16);default:return Te[_]=b}case C:switch(p){case 1:return _==="-"?Te.push(b):Te.splice(_,0,b);case 2:return Te.set(_,b);case 3:return Te.add(b);default:return Te[_]=b}case"remove":switch(p){case 1:return Te.splice(_,1);case 2:return Te.delete(_);case 3:return Te.delete(re.value);default:return delete Te[_]}default:F(17,Re)}})),O},N:function(O,V,re,ke){switch(O.i){case 0:case 4:case 2:return(function(Re,Te,ie,Pe){var l=Re.t,p=Re.o;d(Re.R,(function(b,_){var j=z(l,b),oe=z(p,b),Ce=_?R(l,b)?"replace":C:"remove";if(j!==oe||Ce!=="replace"){var Le=Te.concat(b);ie.push(Ce==="remove"?{op:Ce,path:Le}:{op:Ce,path:Le,value:oe}),Pe.push(Ce===C?{op:"remove",path:Le}:Ce==="remove"?{op:C,path:Le,value:v(j)}:{op:"replace",path:Le,value:v(j)})}}))})(O,V,re,ke);case 5:case 1:return(function(Re,Te,ie,Pe){var l=Re.t,p=Re.R,b=Re.o;if(b.length<l.length){var _=[b,l];l=_[0],b=_[1];var j=[Pe,ie];ie=j[0],Pe=j[1]}for(var oe=0;oe<l.length;oe++)if(p[oe]&&b[oe]!==l[oe]){var Ce=Te.concat([oe]);ie.push({op:"replace",path:Ce,value:v(b[oe])}),Pe.push({op:"replace",path:Ce,value:v(l[oe])})}for(var Le=l.length;Le<b.length;Le++){var qe=Te.concat([Le]);ie.push({op:C,path:qe,value:v(b[Le])})}l.length<b.length&&Pe.push({op:"replace",path:Te.concat(["length"]),value:l.length})})(O,V,re,ke);case 3:return(function(Re,Te,ie,Pe){var l=Re.t,p=Re.o,b=0;l.forEach((function(_){if(!p.has(_)){var j=Te.concat([b]);ie.push({op:"remove",path:j,value:_}),Pe.unshift({op:C,path:j,value:_})}b++})),b=0,p.forEach((function(_){if(!l.has(_)){var j=Te.concat([b]);ie.push({op:C,path:j,value:_}),Pe.unshift({op:"remove",path:j,value:_})}b++}))})(O,V,re,ke)}},M:function(O,V,re,ke){re.push({op:"replace",path:[],value:V===Sn?void 0:V}),ke.push({op:"replace",path:[],value:O})}})}function gn(){function u(Re,Te){function ie(){this.constructor=Re}V(Re,Te),Re.prototype=(ie.prototype=Te.prototype,new ie)}function v(Re){Re.o||(Re.R=new Map,Re.o=new Map(Re.t))}function C(Re){Re.o||(Re.o=new Set,Re.t.forEach((function(Te){if(x(Te)){var ie=ln(Re.A.h,Te,Re);Re.p.set(Te,ie),Re.o.add(ie)}else Re.o.add(Te)})))}function O(Re){Re.g&&F(3,JSON.stringify(ye(Re)))}var V=function(Re,Te){return(V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(ie,Pe){ie.__proto__=Pe}||function(ie,Pe){for(var l in Pe)Pe.hasOwnProperty(l)&&(ie[l]=Pe[l])})(Re,Te)},re=(function(){function Re(ie,Pe){return this[mn]={i:2,l:Pe,A:Pe?Pe.A:Be(),P:!1,I:!1,o:void 0,R:void 0,t:ie,k:this,C:!1,g:!1},this}u(Re,Map);var Te=Re.prototype;return Object.defineProperty(Te,"size",{get:function(){return ye(this[mn]).size}}),Te.has=function(ie){return ye(this[mn]).has(ie)},Te.set=function(ie,Pe){var l=this[mn];return O(l),ye(l).has(ie)&&ye(l).get(ie)===Pe||(v(l),_n(l),l.R.set(ie,!0),l.o.set(ie,Pe),l.R.set(ie,!0)),this},Te.delete=function(ie){if(!this.has(ie))return!1;var Pe=this[mn];return O(Pe),v(Pe),_n(Pe),Pe.t.has(ie)?Pe.R.set(ie,!1):Pe.R.delete(ie),Pe.o.delete(ie),!0},Te.clear=function(){var ie=this[mn];O(ie),ye(ie).size&&(v(ie),_n(ie),ie.R=new Map,d(ie.t,(function(Pe){ie.R.set(Pe,!1)})),ie.o.clear())},Te.forEach=function(ie,Pe){var l=this;ye(this[mn]).forEach((function(p,b){ie.call(Pe,l.get(b),b,l)}))},Te.get=function(ie){var Pe=this[mn];O(Pe);var l=ye(Pe).get(ie);if(Pe.I||!x(l)||l!==Pe.t.get(ie))return l;var p=ln(Pe.A.h,l,Pe);return v(Pe),Pe.o.set(ie,p),p},Te.keys=function(){return ye(this[mn]).keys()},Te.values=function(){var ie,Pe=this,l=this.keys();return(ie={})[Lr]=function(){return Pe.values()},ie.next=function(){var p=l.next();return p.done?p:{done:!1,value:Pe.get(p.value)}},ie},Te.entries=function(){var ie,Pe=this,l=this.keys();return(ie={})[Lr]=function(){return Pe.entries()},ie.next=function(){var p=l.next();if(p.done)return p;var b=Pe.get(p.value);return{done:!1,value:[p.value,b]}},ie},Te[Lr]=function(){return this.entries()},Re})(),ke=(function(){function Re(ie,Pe){return this[mn]={i:3,l:Pe,A:Pe?Pe.A:Be(),P:!1,I:!1,o:void 0,t:ie,k:this,p:new Map,g:!1,C:!1},this}u(Re,Set);var Te=Re.prototype;return Object.defineProperty(Te,"size",{get:function(){return ye(this[mn]).size}}),Te.has=function(ie){var Pe=this[mn];return O(Pe),Pe.o?!!Pe.o.has(ie)||!(!Pe.p.has(ie)||!Pe.o.has(Pe.p.get(ie))):Pe.t.has(ie)},Te.add=function(ie){var Pe=this[mn];return O(Pe),this.has(ie)||(C(Pe),_n(Pe),Pe.o.add(ie)),this},Te.delete=function(ie){if(!this.has(ie))return!1;var Pe=this[mn];return O(Pe),C(Pe),_n(Pe),Pe.o.delete(ie)||!!Pe.p.has(ie)&&Pe.o.delete(Pe.p.get(ie))},Te.clear=function(){var ie=this[mn];O(ie),ye(ie).size&&(C(ie),_n(ie),ie.o.clear())},Te.values=function(){var ie=this[mn];return O(ie),C(ie),ie.o.values()},Te.entries=function(){var ie=this[mn];return O(ie),C(ie),ie.o.entries()},Te.keys=function(){return this.values()},Te[Lr]=function(){return this.values()},Te.forEach=function(ie,Pe){for(var l=this.values(),p=l.next();!p.done;)ie.call(Pe,p.value,p.value,this),p=l.next()},Re})();g("MapSet",{F:function(Re,Te){return new re(Re,Te)},T:function(Re,Te){return new ke(Re,Te)}})}function Bt(){Oe(),gn(),vt()}function on(u){return u}function rt(u){return u}var tt,xt,nt=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",mt=typeof Map!="undefined",ct=typeof Set!="undefined",kt=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Sn=nt?Symbol.for("immer-nothing"):((tt={})["immer-nothing"]=!0,tt),Rn=nt?Symbol.for("immer-draftable"):"__$immer_draftable",mn=nt?Symbol.for("immer-state"):"__$immer_state",Lr=typeof Symbol!="undefined"&&Symbol.iterator||"@@iterator",uo={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(u){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+u},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(u){return"Cannot apply patch, path doesn't resolve: "+u},16:'Sets cannot have "replace" patches.',17:function(u){return"Unsupported patch operation: "+u},18:function(u){return"The plugin for '"+u+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+u+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(u){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+u+"'"},22:function(u){return"'current' expects a draft, got: "+u},23:function(u){return"'original' expects a draft, got: "+u},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},_i=""+Object.prototype.constructor,Nr=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(u){return Object.getOwnPropertyNames(u).concat(Object.getOwnPropertySymbols(u))}:Object.getOwnPropertyNames,Po=Object.getOwnPropertyDescriptors||function(u){var v={};return Nr(u).forEach((function(C){v[C]=Object.getOwnPropertyDescriptor(u,C)})),v},di={},xo={get:function(u,v){if(v===mn)return u;var C=ye(u);if(!R(C,v))return(function(V,re,ke){var Re,Te=ar(re,ke);return Te?"value"in Te?Te.value:(Re=Te.get)===null||Re===void 0?void 0:Re.call(V.k):void 0})(u,C,v);var O=C[v];return u.I||!x(O)?O:O===Bn(u.t,v)?(wt(u),u.o[v]=ln(u.A.h,O,u)):O},has:function(u,v){return v in ye(u)},ownKeys:function(u){return Reflect.ownKeys(ye(u))},set:function(u,v,C){var O=ar(ye(u),v);if(O!=null&&O.set)return O.set.call(u.k,C),!0;if(!u.P){var V=Bn(ye(u),v),re=V==null?void 0:V[mn];if(re&&re.t===C)return u.o[v]=C,u.R[v]=!1,!0;if(be(C,V)&&(C!==void 0||R(u.t,v)))return!0;wt(u),_n(u)}return u.o[v]===C&&(C!==void 0||v in u.o)||Number.isNaN(C)&&Number.isNaN(u.o[v])||(u.o[v]=C,u.R[v]=!0),!0},deleteProperty:function(u,v){return Bn(u.t,v)!==void 0||v in u.t?(u.R[v]=!1,wt(u),_n(u)):delete u.R[v],u.o&&delete u.o[v],!0},getOwnPropertyDescriptor:function(u,v){var C=ye(u),O=Reflect.getOwnPropertyDescriptor(C,v);return O&&{writable:!0,configurable:u.i!==1||v!=="length",enumerable:O.enumerable,value:C[v]}},defineProperty:function(){F(11)},getPrototypeOf:function(u){return Object.getPrototypeOf(u.t)},setPrototypeOf:function(){F(12)}},So={};d(xo,(function(u,v){So[u]=function(){return arguments[0]=arguments[0][0],v.apply(this,arguments)}})),So.deleteProperty=function(u,v){return So.set.call(this,u,v,void 0)},So.set=function(u,v,C){return xo.set.call(this,u[0],v,C,u[0])};var Ra=(function(){function u(C){var O=this;this.O=kt,this.D=!0,this.produce=function(V,re,ke){if(typeof V=="function"&&typeof re!="function"){var Re=re;re=V;var Te=O;return function(j){var oe=this;j===void 0&&(j=Re);for(var Ce=arguments.length,Le=Array(Ce>1?Ce-1:0),qe=1;qe<Ce;qe++)Le[qe-1]=arguments[qe];return Te.produce(j,(function(Ve){var Mt;return(Mt=re).call.apply(Mt,[oe,Ve].concat(Le))}))}}var ie;if(typeof re!="function"&&F(6),ke!==void 0&&typeof ke!="function"&&F(7),x(V)){var Pe=Tt(O),l=ln(O,V,void 0),p=!0;try{ie=re(l),p=!1}finally{p?We(Pe):ht(Pe)}return typeof Promise!="undefined"&&ie instanceof Promise?ie.then((function(j){return Ee(Pe,ke),Wn(j,Pe)}),(function(j){throw We(Pe),j})):(Ee(Pe,ke),Wn(ie,Pe))}if(!V||typeof V!="object"){if((ie=re(V))===void 0&&(ie=V),ie===Sn&&(ie=void 0),O.D&&ve(ie,!0),ke){var b=[],_=[];ee("Patches").M(V,ie,b,_),ke(b,_)}return ie}F(21,V)},this.produceWithPatches=function(V,re){if(typeof V=="function")return function(ie){for(var Pe=arguments.length,l=Array(Pe>1?Pe-1:0),p=1;p<Pe;p++)l[p-1]=arguments[p];return O.produceWithPatches(ie,(function(b){return V.apply(void 0,[b].concat(l))}))};var ke,Re,Te=O.produce(V,re,(function(ie,Pe){ke=ie,Re=Pe}));return typeof Promise!="undefined"&&Te instanceof Promise?Te.then((function(ie){return[ie,ke,Re]})):[Te,ke,Re]},typeof(C==null?void 0:C.useProxies)=="boolean"&&this.setUseProxies(C.useProxies),typeof(C==null?void 0:C.autoFreeze)=="boolean"&&this.setAutoFreeze(C.autoFreeze)}var v=u.prototype;return v.createDraft=function(C){x(C)||F(8),E(C)&&(C=kn(C));var O=Tt(this),V=ln(this,C,void 0);return V[mn].C=!0,ht(O),V},v.finishDraft=function(C,O){var V=C&&C[mn],re=V.A;return Ee(re,O),Wn(void 0,re)},v.setAutoFreeze=function(C){this.D=C},v.setUseProxies=function(C){C&&!kt&&F(20),this.O=C},v.applyPatches=function(C,O){var V;for(V=O.length-1;V>=0;V--){var re=O[V];if(re.path.length===0&&re.op==="replace"){C=re.value;break}}V>-1&&(O=O.slice(V+1));var ke=ee("Patches").$;return E(C)?ke(C,O):this.produce(C,(function(Re){return ke(Re,O)}))},u})(),Gr=new Ra,Ga=Gr.produce,Nn=Gr.produceWithPatches.bind(Gr),vr=Gr.setAutoFreeze.bind(Gr),$n=Gr.setUseProxies.bind(Gr),an=Gr.applyPatches.bind(Gr),wr=Gr.createDraft.bind(Gr),zn=Gr.finishDraft.bind(Gr);const Ze=Ga;function Ar(u){"@babel/helpers - typeof";return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},Ar(u)}function Zn(u,v){if(Ar(u)!="object"||!u)return u;var C=u[Symbol.toPrimitive];if(C!==void 0){var O=C.call(u,v||"default");if(Ar(O)!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(u)}function Kr(u){var v=Zn(u,"string");return Ar(v)=="symbol"?v:v+""}function Bo(u,v,C){return(v=Kr(v))in u?Object.defineProperty(u,v,{value:C,enumerable:!0,configurable:!0,writable:!0}):u[v]=C,u}function co(u,v){var C=Object.keys(u);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(u);v&&(O=O.filter(function(V){return Object.getOwnPropertyDescriptor(u,V).enumerable})),C.push.apply(C,O)}return C}function ko(u){for(var v=1;v<arguments.length;v++){var C=arguments[v]!=null?arguments[v]:{};v%2?co(Object(C),!0).forEach(function(O){Bo(u,O,C[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(C)):co(Object(C)).forEach(function(O){Object.defineProperty(u,O,Object.getOwnPropertyDescriptor(C,O))})}return u}function Cr(u){return"Minified Redux error #"+u+"; visit https://redux.js.org/Errors?code="+u+" for the full message or use the non-minified dev environment for full errors. "}var to=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})(),No=function(){return Math.random().toString(36).substring(7).split("").join(".")},_r={INIT:"@@redux/INIT"+No(),REPLACE:"@@redux/REPLACE"+No(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+No()}};function io(u){if(typeof u!="object"||u===null)return!1;for(var v=u;Object.getPrototypeOf(v)!==null;)v=Object.getPrototypeOf(v);return Object.getPrototypeOf(u)===v}function Mr(u){if(u===void 0)return"undefined";if(u===null)return"null";var v=typeof u;switch(v){case"boolean":case"string":case"number":case"symbol":case"function":return v}if(Array.isArray(u))return"array";if(Qe(u))return"date";if(Ji(u))return"error";var C=fi(u);switch(C){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return C}return v.slice(8,-1).toLowerCase().replace(/\s/g,"")}function fi(u){return typeof u.constructor=="function"?u.constructor.name:null}function Ji(u){return u instanceof Error||typeof u.message=="string"&&u.constructor&&typeof u.constructor.stackTraceLimit=="number"}function Qe(u){return u instanceof Date?!0:typeof u.toDateString=="function"&&typeof u.getDate=="function"&&typeof u.setDate=="function"}function Ye(u){var v=typeof u;return v}function Ct(u,v,C){var O;if(typeof v=="function"&&typeof C=="function"||typeof C=="function"&&typeof arguments[3]=="function")throw new Error(Cr(0));if(typeof v=="function"&&typeof C=="undefined"&&(C=v,v=void 0),typeof C!="undefined"){if(typeof C!="function")throw new Error(Cr(1));return C(Ct)(u,v)}if(typeof u!="function")throw new Error(Cr(2));var V=u,re=v,ke=[],Re=ke,Te=!1;function ie(){Re===ke&&(Re=ke.slice())}function Pe(){if(Te)throw new Error(Cr(3));return re}function l(j){if(typeof j!="function")throw new Error(Cr(4));if(Te)throw new Error(Cr(5));var oe=!0;return ie(),Re.push(j),function(){if(oe){if(Te)throw new Error(Cr(6));oe=!1,ie();var Le=Re.indexOf(j);Re.splice(Le,1),ke=null}}}function p(j){if(!io(j))throw new Error(Cr(7));if(typeof j.type=="undefined")throw new Error(Cr(8));if(Te)throw new Error(Cr(9));try{Te=!0,re=V(re,j)}finally{Te=!1}for(var oe=ke=Re,Ce=0;Ce<oe.length;Ce++){var Le=oe[Ce];Le()}return j}function b(j){if(typeof j!="function")throw new Error(Cr(10));V=j,p({type:_r.REPLACE})}function _(){var j,oe=l;return j={subscribe:function(Le){if(typeof Le!="object"||Le===null)throw new Error(Cr(11));function qe(){Le.next&&Le.next(Pe())}qe();var Ve=oe(qe);return{unsubscribe:Ve}}},j[to]=function(){return this},j}return p({type:_r.INIT}),O={dispatch:p,subscribe:l,getState:Pe,replaceReducer:b},O[to]=_,O}var Nt=null;function qt(u){typeof console!="undefined"&&typeof console.error=="function"&&console.error(u);try{throw new Error(u)}catch(v){}}function En(u,v,C,O){var V=Object.keys(v),re=C&&C.type===_r.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(V.length===0)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!io(u))return"The "+re+' has unexpected type of "'+Ye(u)+'". Expected argument to be an object with the following '+('keys: "'+V.join('", "')+'"');var ke=Object.keys(u).filter(function(Re){return!v.hasOwnProperty(Re)&&!O[Re]});if(ke.forEach(function(Re){O[Re]=!0}),!(C&&C.type===_r.REPLACE)&&ke.length>0)return"Unexpected "+(ke.length>1?"keys":"key")+" "+('"'+ke.join('", "')+'" found in '+re+". ")+"Expected to find one of the known reducer keys instead: "+('"'+V.join('", "')+'". Unexpected keys will be ignored.')}function wn(u){Object.keys(u).forEach(function(v){var C=u[v],O=C(void 0,{type:_r.INIT});if(typeof O=="undefined")throw new Error(Cr(12));if(typeof C(void 0,{type:_r.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(Cr(13))})}function Yn(u){for(var v=Object.keys(u),C={},O=0;O<v.length;O++){var V=v[O];typeof u[V]=="function"&&(C[V]=u[V])}var re=Object.keys(C),ke,Re;try{wn(C)}catch(Te){Re=Te}return function(ie,Pe){if(ie===void 0&&(ie={}),Re)throw Re;if(0)var l;for(var p=!1,b={},_=0;_<re.length;_++){var j=re[_],oe=C[j],Ce=ie[j],Le=oe(Ce,Pe);if(typeof Le=="undefined"){var qe=Pe&&Pe.type;throw new Error(Cr(14))}b[j]=Le,p=p||Le!==Ce}return p=p||re.length!==Object.keys(ie).length,p?b:ie}}function fr(u,v){return function(){return v(u.apply(this,arguments))}}function gr(u,v){if(typeof u=="function")return fr(u,v);if(typeof u!="object"||u===null)throw new Error(Cr(16));var C={};for(var O in u){var V=u[O];typeof V=="function"&&(C[O]=fr(V,v))}return C}function rr(){for(var u=arguments.length,v=new Array(u),C=0;C<u;C++)v[C]=arguments[C];return v.length===0?function(O){return O}:v.length===1?v[0]:v.reduce(function(O,V){return function(){return O(V.apply(void 0,arguments))}})}function Fn(){for(var u=arguments.length,v=new Array(u),C=0;C<u;C++)v[C]=arguments[C];return function(O){return function(){var V=O.apply(void 0,arguments),re=function(){throw new Error(Cr(15))},ke={getState:V.getState,dispatch:function(){return re.apply(void 0,arguments)}},Re=v.map(function(Te){return Te(ke)});return re=rr.apply(void 0,Re)(V.dispatch),ko(ko({},V),{},{dispatch:re})}}}function Xr(u){var v=function(O){var V=O.dispatch,re=O.getState;return function(ke){return function(Re){return typeof Re=="function"?Re(V,re,u):ke(Re)}}};return v}var fo=Xr();fo.withExtraArgument=Xr;const bn=fo;var pi,hi,mi,po,vi,fa=(function(){var u=function(v,C){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(O,V){O.__proto__=V}||function(O,V){for(var re in V)Object.prototype.hasOwnProperty.call(V,re)&&(O[re]=V[re])},u(v,C)};return function(v,C){if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");u(v,C);function O(){this.constructor=v}v.prototype=C===null?Object.create(C):(O.prototype=C.prototype,new O)}})(),Si=function(u,v){var C={label:0,sent:function(){if(re[0]&1)throw re[1];return re[1]},trys:[],ops:[]},O,V,re,ke;return ke={next:Re(0),throw:Re(1),return:Re(2)},typeof Symbol=="function"&&(ke[Symbol.iterator]=function(){return this}),ke;function Re(ie){return function(Pe){return Te([ie,Pe])}}function Te(ie){if(O)throw new TypeError("Generator is already executing.");for(;C;)try{if(O=1,V&&(re=ie[0]&2?V.return:ie[0]?V.throw||((re=V.return)&&re.call(V),0):V.next)&&!(re=re.call(V,ie[1])).done)return re;switch(V=0,re&&(ie=[ie[0]&2,re.value]),ie[0]){case 0:case 1:re=ie;break;case 4:return C.label++,{value:ie[1],done:!1};case 5:C.label++,V=ie[1],ie=[0];continue;case 7:ie=C.ops.pop(),C.trys.pop();continue;default:if(re=C.trys,!(re=re.length>0&&re[re.length-1])&&(ie[0]===6||ie[0]===2)){C=0;continue}if(ie[0]===3&&(!re||ie[1]>re[0]&&ie[1]<re[3])){C.label=ie[1];break}if(ie[0]===6&&C.label<re[1]){C.label=re[1],re=ie;break}if(re&&C.label<re[2]){C.label=re[2],C.ops.push(ie);break}re[2]&&C.ops.pop(),C.trys.pop();continue}ie=v.call(u,C)}catch(Pe){ie=[6,Pe],V=0}finally{O=re=0}if(ie[0]&5)throw ie[1];return{value:ie[0]?ie[1]:void 0,done:!0}}},Ei=function(u,v){for(var C=0,O=v.length,V=u.length;C<O;C++,V++)u[V]=v[C];return u},ja=Object.defineProperty,Sr=Object.defineProperties,bi=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertySymbols,aa=Object.prototype.hasOwnProperty,Oi=Object.prototype.propertyIsEnumerable,pa=function(u,v,C){return v in u?ja(u,v,{enumerable:!0,configurable:!0,writable:!0,value:C}):u[v]=C},Wr=function(u,v){for(var C in v||(v={}))aa.call(v,C)&&pa(u,C,v[C]);if(xr)for(var O=0,V=xr(v);O<V.length;O++){var C=V[O];Oi.call(v,C)&&pa(u,C,v[C])}return u},ha=function(u,v){return Sr(u,bi(v))},Fo=function(u,v,C){return new Promise(function(O,V){var re=function(Te){try{Re(C.next(Te))}catch(ie){V(ie)}},ke=function(Te){try{Re(C.throw(Te))}catch(ie){V(ie)}},Re=function(Te){return Te.done?O(Te.value):Promise.resolve(Te.value).then(re,ke)};Re((C=C.apply(u,v)).next())})},Yr=function(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];var C=mi.apply(void 0,u),O=function(V){for(var re=[],ke=1;ke<arguments.length;ke++)re[ke-1]=arguments[ke];return C.apply(void 0,Ei([pi(V)?hi(V):V],re))};return O},Gt=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?rr:rr.apply(null,arguments)},ea=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(u){return u}};function Xa(u){if(typeof u!="object"||u===null)return!1;var v=Object.getPrototypeOf(u);if(v===null)return!0;for(var C=v;Object.getPrototypeOf(C)!==null;)C=Object.getPrototypeOf(C);return v===C}var Ri=function(u){return u&&typeof u.match=="function"};function Oo(u,v){function C(){for(var O=[],V=0;V<arguments.length;V++)O[V]=arguments[V];if(v){var re=v.apply(void 0,O);if(!re)throw new Error("prepareAction did not return an object");return Wr(Wr({type:u,payload:re.payload},"meta"in re&&{meta:re.meta}),"error"in re&&{error:re.error})}return{type:u,payload:O[0]}}return C.toString=function(){return""+u},C.type=u,C.match=function(O){return O.type===u},C}function sa(u){return Xa(u)&&"type"in u}function Fr(u){return typeof u=="function"&&"type"in u&&Ri(u)}function ji(u){return sa(u)&&typeof u.type=="string"&&Object.keys(u).every(Br)}function Br(u){return["type","payload","error","meta"].indexOf(u)>-1}function ni(u){return""+u}function Io(u){var v=u?(""+u).split("/"):[],C=v[v.length-1]||"actionCreator";return'Detected an action creator with type "'+(u||"unknown")+`" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(`+C+"())` instead of `dispatch("+C+")`. This is necessary even if the action has no payload."}function Ni(u){return u===void 0&&(u={}),function(){return function(O){return function(V){return O(V)}}};var v,C}function Xo(u,v){var C=0;return{measureTime:function(O){var V=Date.now();try{return O()}finally{var re=Date.now();C+=re-V}},warnIfExceeded:function(){C>u&&console.warn(v+" took "+C+"ms, which is more than the warning threshold of "+u+`ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`)}}}var ma=(function(u){fa(v,u);function v(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];var V=u.apply(this,C)||this;return Object.setPrototypeOf(V,v.prototype),V}return Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.concat=function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];return u.prototype.concat.apply(this,C)},v.prototype.prepend=function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];return C.length===1&&Array.isArray(C[0])?new(v.bind.apply(v,Ei([void 0],C[0].concat(this)))):new(v.bind.apply(v,Ei([void 0],C.concat(this))))},v})(Array),no=(function(u){fa(v,u);function v(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];var V=u.apply(this,C)||this;return Object.setPrototypeOf(V,v.prototype),V}return Object.defineProperty(v,Symbol.species,{get:function(){return v},enumerable:!1,configurable:!0}),v.prototype.concat=function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];return u.prototype.concat.apply(this,C)},v.prototype.prepend=function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];return C.length===1&&Array.isArray(C[0])?new(v.bind.apply(v,Ei([void 0],C[0].concat(this)))):new(v.bind.apply(v,Ei([void 0],C.concat(this))))},v})(Array);function wa(u){return x(u)?Ze(u,function(){}):u}var or=null,To="Invariant failed";function Hi(u,v){if(!u)throw or?new Error(To):new Error(To+": "+(v||""))}function Di(u,v,C,O){return JSON.stringify(u,S(v,O),C)}function S(u,v){var C=[],O=[];return v||(v=function(V,re){return C[0]===re?"[Circular ~]":"[Circular ~."+O.slice(0,C.indexOf(re)).join(".")+"]"}),function(V,re){if(C.length>0){var ke=C.indexOf(this);~ke?C.splice(ke+1):C.push(this),~ke?O.splice(ke,1/0,V):O.push(V),~C.indexOf(re)&&(re=v.call(this,V,re))}else C.push(re);return u==null?re:u.call(this,V,re)}}function D(u){return typeof u!="object"||u==null||Object.isFrozen(u)}function q(u,v,C){var O=ue(u,v,C);return{detectMutations:function(){return le(u,v,O,C)}}}function ue(u,v,C,O,V){v===void 0&&(v=[]),O===void 0&&(O=""),V===void 0&&(V=new Set);var re={value:C};if(!u(C)&&!V.has(C)){V.add(C),re.children={};for(var ke in C){var Re=O?O+"."+ke:ke;v.length&&v.indexOf(Re)!==-1||(re.children[ke]=ue(u,v,C[ke],Re))}}return re}function le(u,v,C,O,V,re){v===void 0&&(v=[]),V===void 0&&(V=!1),re===void 0&&(re="");var ke=C?C.value:void 0,Re=ke===O;if(V&&!Re&&!Number.isNaN(O))return{wasMutated:!0,path:re};if(u(ke)||u(O))return{wasMutated:!1};var Te={};for(var ie in C.children)Te[ie]=!0;for(var ie in O)Te[ie]=!0;var Pe=v.length>0,l=function(b){var _=re?re+"."+b:b;if(Pe){var j=v.some(function(Ce){return Ce instanceof RegExp?Ce.test(_):_===Ce});if(j)return"continue"}var oe=le(u,v,C.children[b],O[b],Re,_);if(oe.wasMutated)return{value:oe}};for(var ie in Te){var p=l(ie);if(typeof p=="object")return p.value}return{wasMutated:!1}}function Me(u){return u===void 0&&(u={}),function(){return function(Te){return function(ie){return Te(ie)}}};var v,C,O,V,re,ke,Re}function Ne(u){var v=typeof u;return u==null||v==="string"||v==="boolean"||v==="number"||Array.isArray(u)||Xa(u)}function lt(u,v,C,O,V,re){v===void 0&&(v=""),C===void 0&&(C=Ne),V===void 0&&(V=[]);var ke;if(!C(u))return{keyPath:v||"<root>",value:u};if(typeof u!="object"||u===null||re!=null&&re.has(u))return!1;for(var Re=O!=null?O(u):Object.entries(u),Te=V.length>0,ie=function(oe,Ce){var Le=v?v+"."+oe:oe;if(Te){var qe=V.some(function(Ve){return Ve instanceof RegExp?Ve.test(Le):Le===Ve});if(qe)return"continue"}if(!C(Ce))return{value:{keyPath:Le,value:Ce}};if(typeof Ce=="object"&&(ke=lt(Ce,Le,C,O,V,re),ke))return{value:ke}},Pe=0,l=Re;Pe<l.length;Pe++){var p=l[Pe],b=p[0],_=p[1],j=ie(b,_);if(typeof j=="object")return j.value}return re&&st(u)&&re.add(u),!1}function st(u){if(!Object.isFrozen(u))return!1;for(var v=0,C=Object.values(u);v<C.length;v++){var O=C[v];if(!(typeof O!="object"||O===null)&&!st(O))return!1}return!0}function Dt(u){return u===void 0&&(u={}),function(){return function(qe){return function(Ve){return qe(Ve)}}};var v,C,O,V,re,ke,Re,Te,ie,Pe,l,p,b,_,j,oe,Ce,Le}function Vt(u){return typeof u=="boolean"}function Xt(){return function(v){return yn(v)}}function yn(u){u===void 0&&(u={});var v=u.thunk,C=v===void 0?!0:v,O=u.immutableCheck,V=O===void 0?!0:O,re=u.serializableCheck,ke=re===void 0?!0:re,Re=u.actionCreatorCheck,Te=Re===void 0?!0:Re,ie=new ma;if(C&&(Vt(C)?ie.push(bn):ie.push(bn.withExtraArgument(C.extraArgument))),0)var Pe,l,p;return ie}var _t=!0;function nn(u){var v=Xt(),C=u||{},O=C.reducer,V=O===void 0?void 0:O,re=C.middleware,ke=re===void 0?v():re,Re=C.devTools,Te=Re===void 0?!0:Re,ie=C.preloadedState,Pe=ie===void 0?void 0:ie,l=C.enhancers,p=l===void 0?void 0:l,b;if(typeof V=="function")b=V;else if(Xa(V))b=Yn(V);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=ke;if(typeof _=="function"&&(_=_(v),!_t&&!Array.isArray(_)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!_t&&_.some(function(Ve){return typeof Ve!="function"}))throw new Error("each middleware provided to configureStore must be a function");var j=Fn.apply(void 0,_),oe=rr;Te&&(oe=Gt(Wr({trace:!_t},typeof Te=="object"&&Te)));var Ce=new no(j),Le=Ce;Array.isArray(p)?Le=Ei([j],p):typeof p=="function"&&(Le=p(Ce));var qe=oe.apply(void 0,Le);return Ct(b,Pe,qe)}function tn(u){var v={},C=[],O,V={addCase:function(re,ke){var Re=typeof re=="string"?re:re.type;if(!Re)throw new Error("`builder.addCase` cannot be called with an empty action type");if(Re in v)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return v[Re]=ke,V},addMatcher:function(re,ke){return C.push({matcher:re,reducer:ke}),V},addDefaultCase:function(re){return O=re,V}};return u(V),[v,C,O]}function Cn(u){return typeof u=="function"}var pr=!1;function jn(u,v,C,O){C===void 0&&(C=[]);var V=typeof v=="function"?tn(v):[v,C,O],re=V[0],ke=V[1],Re=V[2],Te;if(Cn(u))Te=function(){return wa(u())};else{var ie=wa(u);Te=function(){return ie}}function Pe(l,p){l===void 0&&(l=Te());var b=Ei([re[p.type]],ke.filter(function(_){var j=_.matcher;return j(p)}).map(function(_){var j=_.reducer;return j}));return b.filter(function(_){return!!_}).length===0&&(b=[Re]),b.reduce(function(_,j){if(j)if(E(_)){var oe=_,Ce=j(oe,p);return Ce===void 0?_:Ce}else{if(x(_))return Ze(_,function(Le){return j(Le,p)});var Ce=j(_,p);if(Ce===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return Ce}return _},l)}return Pe.getInitialState=Te,Pe}var lr=!1;function fn(u,v){return u+"/"+v}function kr(u){var v=u.name;if(!v)throw new Error("`name` is a required option for createSlice");var C=typeof u.initialState=="function"?u.initialState:wa(u.initialState),O=u.reducers||{},V=Object.keys(O),re={},ke={},Re={};V.forEach(function(Pe){var l=O[Pe],p=fn(v,Pe),b,_;"reducer"in l?(b=l.reducer,_=l.prepare):b=l,re[Pe]=b,ke[p]=b,Re[Pe]=_?Oo(p,_):Oo(p)});function Te(){var Pe=typeof u.extraReducers=="function"?tn(u.extraReducers):[u.extraReducers],l=Pe[0],p=l===void 0?{}:l,b=Pe[1],_=b===void 0?[]:b,j=Pe[2],oe=j===void 0?void 0:j,Ce=Wr(Wr({},p),ke);return jn(C,function(Le){for(var qe in Ce)Le.addCase(qe,Ce[qe]);for(var Ve=0,Mt=_;Ve<Mt.length;Ve++){var sn=Mt[Ve];Le.addMatcher(sn.matcher,sn.reducer)}oe&&Le.addDefaultCase(oe)})}var ie;return{name:v,reducer:function(Pe,l){return ie||(ie=Te()),ie(Pe,l)},actions:Re,caseReducers:re,getInitialState:function(){return ie||(ie=Te()),ie.getInitialState()}}}function ao(){return{ids:[],entities:{}}}function et(){function u(v){return v===void 0&&(v={}),Object.assign(ao(),v)}return{getInitialState:u}}function yr(){function u(v){var C=function(ie){return ie.ids},O=function(ie){return ie.entities},V=Yr(C,O,function(ie,Pe){return ie.map(function(l){return Pe[l]})}),re=function(ie,Pe){return Pe},ke=function(ie,Pe){return ie[Pe]},Re=Yr(C,function(ie){return ie.length});if(!v)return{selectIds:C,selectEntities:O,selectAll:V,selectTotal:Re,selectById:Yr(O,re,ke)};var Te=Yr(v,O);return{selectIds:Yr(v,C),selectEntities:Te,selectAll:Yr(v,V),selectTotal:Yr(v,Re),selectById:Yr(Te,re,ke)}}return{getSelectors:u}}function ro(u){var v=Gn(function(C,O){return u(O)});return function(O){return v(O,void 0)}}function Gn(u){return function(C,O){function V(ke){return ji(ke)}var re=function(ke){V(O)?u(O.payload,ke):u(O,ke)};return po(C)?(re(C),C):vi(C,re)}}function oo(u,v){var C=v(u);return C}function Ro(u){return Array.isArray(u)||(u=Object.values(u)),u}function Ao(u,v,C){u=Ro(u);for(var O=[],V=[],re=0,ke=u;re<ke.length;re++){var Re=ke[re],Te=oo(Re,v);Te in C.entities?V.push({id:Te,changes:Re}):O.push(Re)}return[O,V]}function Ki(u){function v(_,j){var oe=oo(_,u);oe in j.entities||(j.ids.push(oe),j.entities[oe]=_)}function C(_,j){_=Ro(_);for(var oe=0,Ce=_;oe<Ce.length;oe++){var Le=Ce[oe];v(Le,j)}}function O(_,j){var oe=oo(_,u);oe in j.entities||j.ids.push(oe),j.entities[oe]=_}function V(_,j){_=Ro(_);for(var oe=0,Ce=_;oe<Ce.length;oe++){var Le=Ce[oe];O(Le,j)}}function re(_,j){_=Ro(_),j.ids=[],j.entities={},C(_,j)}function ke(_,j){return Re([_],j)}function Re(_,j){var oe=!1;_.forEach(function(Ce){Ce in j.entities&&(delete j.entities[Ce],oe=!0)}),oe&&(j.ids=j.ids.filter(function(Ce){return Ce in j.entities}))}function Te(_){Object.assign(_,{ids:[],entities:{}})}function ie(_,j,oe){var Ce=oe.entities[j.id],Le=Object.assign({},Ce,j.changes),qe=oo(Le,u),Ve=qe!==j.id;return Ve&&(_[j.id]=qe,delete oe.entities[j.id]),oe.entities[qe]=Le,Ve}function Pe(_,j){return l([_],j)}function l(_,j){var oe={},Ce={};_.forEach(function(Ve){Ve.id in j.entities&&(Ce[Ve.id]={id:Ve.id,changes:Wr(Wr({},Ce[Ve.id]?Ce[Ve.id].changes:null),Ve.changes)})}),_=Object.values(Ce);var Le=_.length>0;if(Le){var qe=_.filter(function(Ve){return ie(oe,Ve,j)}).length>0;qe&&(j.ids=Object.keys(j.entities))}}function p(_,j){return b([_],j)}function b(_,j){var oe=Ao(_,u,j),Ce=oe[0],Le=oe[1];l(Le,j),C(Ce,j)}return{removeAll:ro(Te),addOne:Gn(v),addMany:Gn(C),setOne:Gn(O),setMany:Gn(V),setAll:Gn(re),updateOne:Gn(Pe),updateMany:Gn(l),upsertOne:Gn(p),upsertMany:Gn(b),removeOne:Gn(ke),removeMany:Gn(Re)}}function Pi(u,v){var C=Ki(u),O=C.removeOne,V=C.removeMany,re=C.removeAll;function ke(Le,qe){return Re([Le],qe)}function Re(Le,qe){Le=Ro(Le);var Ve=Le.filter(function(Mt){return!(oo(Mt,u)in qe.entities)});Ve.length!==0&&oe(Ve,qe)}function Te(Le,qe){return ie([Le],qe)}function ie(Le,qe){Le=Ro(Le),Le.length!==0&&oe(Le,qe)}function Pe(Le,qe){Le=Ro(Le),qe.entities={},qe.ids=[],Re(Le,qe)}function l(Le,qe){return p([Le],qe)}function p(Le,qe){for(var Ve=!1,Mt=0,sn=Le;Mt<sn.length;Mt++){var ur=sn[Mt],rn=qe.entities[ur.id];if(rn){Ve=!0,Object.assign(rn,ur.changes);var Tn=u(rn);ur.id!==Tn&&(delete qe.entities[ur.id],qe.entities[Tn]=rn)}}Ve&&Ce(qe)}function b(Le,qe){return _([Le],qe)}function _(Le,qe){var Ve=Ao(Le,u,qe),Mt=Ve[0],sn=Ve[1];p(sn,qe),Re(Mt,qe)}function j(Le,qe){if(Le.length!==qe.length)return!1;for(var Ve=0;Ve<Le.length&&Ve<qe.length;Ve++)if(Le[Ve]!==qe[Ve])return!1;return!0}function oe(Le,qe){Le.forEach(function(Ve){qe.entities[u(Ve)]=Ve}),Ce(qe)}function Ce(Le){var qe=Object.values(Le.entities);qe.sort(v);var Ve=qe.map(u),Mt=Le.ids;j(Mt,Ve)||(Le.ids=Ve)}return{removeOne:O,removeMany:V,removeAll:re,addOne:Gn(ke),updateOne:Gn(l),upsertOne:Gn(b),setOne:Gn(Te),setMany:Gn(ie),setAll:Gn(Pe),addMany:Gn(Re),updateMany:Gn(p),upsertMany:Gn(_)}}function Da(u){u===void 0&&(u={});var v=Wr({sortComparer:!1,selectId:function(Re){return Re.id}},u),C=v.selectId,O=v.sortComparer,V=et(),re=yr(),ke=O?Pi(C,O):Ki(C);return Wr(Wr(Wr({selectId:C,sortComparer:O},V),re),ke)}var ri="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ho=function(u){u===void 0&&(u=21);for(var v="",C=u;C--;)v+=ri[Math.random()*64|0];return v},_o=["name","message","stack","code"],jo=(function(){function u(v,C){this.payload=v,this.meta=C}return u})(),oi=(function(){function u(v,C){this.payload=v,this.meta=C}return u})(),gi=function(u){if(typeof u=="object"&&u!==null){for(var v={},C=0,O=_o;C<O.length;C++){var V=O[C];typeof u[V]=="string"&&(v[V]=u[V])}return v}return{message:String(u)}},Uo=(function(){function u(v,C,O){var V=Oo(v+"/fulfilled",function(Pe,l,p,b){return{payload:Pe,meta:ha(Wr({},b||{}),{arg:p,requestId:l,requestStatus:"fulfilled"})}}),re=Oo(v+"/pending",function(Pe,l,p){return{payload:void 0,meta:ha(Wr({},p||{}),{arg:l,requestId:Pe,requestStatus:"pending"})}}),ke=Oo(v+"/rejected",function(Pe,l,p,b,_){return{payload:b,error:(O&&O.serializeError||gi)(Pe||"Rejected"),meta:ha(Wr({},_||{}),{arg:p,requestId:l,rejectedWithValue:!!b,requestStatus:"rejected",aborted:(Pe==null?void 0:Pe.name)==="AbortError",condition:(Pe==null?void 0:Pe.name)==="ConditionError"})}}),Re=!1,Te=typeof AbortController!="undefined"?AbortController:(function(){function Pe(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return Pe.prototype.abort=function(){},Pe})();function ie(Pe){return function(l,p,b){var _=O!=null&&O.idGenerator?O.idGenerator(Pe):ho(),j=new Te,oe,Ce=!1;function Le(Ve){oe=Ve,j.abort()}var qe=(function(){return Fo(this,null,function(){var Ve,Mt,sn,ur,rn,Tn,hr;return Si(this,function(Tr){switch(Tr.label){case 0:return Tr.trys.push([0,4,,5]),ur=(Ve=O==null?void 0:O.condition)==null?void 0:Ve.call(O,Pe,{getState:p,extra:b}),Mo(ur)?[4,ur]:[3,2];case 1:ur=Tr.sent(),Tr.label=2;case 2:if(ur===!1||j.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return Ce=!0,rn=new Promise(function(Or,mo){return j.signal.addEventListener("abort",function(){return mo({name:"AbortError",message:oe||"Aborted"})})}),l(re(_,Pe,(Mt=O==null?void 0:O.getPendingMeta)==null?void 0:Mt.call(O,{requestId:_,arg:Pe},{getState:p,extra:b}))),[4,Promise.race([rn,Promise.resolve(C(Pe,{dispatch:l,getState:p,extra:b,requestId:_,signal:j.signal,abort:Le,rejectWithValue:function(Or,mo){return new jo(Or,mo)},fulfillWithValue:function(Or,mo){return new oi(Or,mo)}})).then(function(Or){if(Or instanceof jo)throw Or;return Or instanceof oi?V(Or.payload,_,Pe,Or.meta):V(Or,_,Pe)})])];case 3:return sn=Tr.sent(),[3,5];case 4:return Tn=Tr.sent(),sn=Tn instanceof jo?ke(null,_,Pe,Tn.payload,Tn.meta):ke(Tn,_,Pe),[3,5];case 5:return hr=O&&!O.dispatchConditionRejection&&ke.match(sn)&&sn.meta.condition,hr||l(sn),[2,sn]}})})})();return Object.assign(qe,{abort:Le,requestId:_,arg:Pe,unwrap:function(){return qe.then(va)}})}}return Object.assign(ie,{pending:re,rejected:ke,fulfilled:V,typePrefix:v})}return u.withTypes=function(){return u},u})();function va(u){if(u.meta&&u.meta.rejectedWithValue)throw u.payload;if(u.error)throw u.error;return u.payload}function Mo(u){return u!==null&&typeof u=="object"&&typeof u.then=="function"}var $i=function(u,v){return Ri(u)?u.match(v):u(v)};function Ur(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return function(C){return u.some(function(O){return $i(O,C)})}}function Eo(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return function(C){return u.every(function(O){return $i(O,C)})}}function Ia(u,v){if(!u||!u.meta)return!1;var C=typeof u.meta.requestId=="string",O=v.indexOf(u.meta.requestStatus)>-1;return C&&O}function ta(u){return typeof u[0]=="function"&&"pending"in u[0]&&"fulfilled"in u[0]&&"rejected"in u[0]}function Ma(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return u.length===0?function(C){return Ia(C,["pending"])}:ta(u)?function(C){var O=u.map(function(re){return re.pending}),V=Ur.apply(void 0,O);return V(C)}:Ma()(u[0])}function bo(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return u.length===0?function(C){return Ia(C,["rejected"])}:ta(u)?function(C){var O=u.map(function(re){return re.rejected}),V=Ur.apply(void 0,O);return V(C)}:bo()(u[0])}function zi(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];var C=function(O){return O&&O.meta&&O.meta.rejectedWithValue};return u.length===0?function(O){var V=Eo(bo.apply(void 0,u),C);return V(O)}:ta(u)?function(O){var V=Eo(bo.apply(void 0,u),C);return V(O)}:zi()(u[0])}function Gi(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return u.length===0?function(C){return Ia(C,["fulfilled"])}:ta(u)?function(C){var O=u.map(function(re){return re.fulfilled}),V=Ur.apply(void 0,O);return V(C)}:Gi()(u[0])}function La(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];return u.length===0?function(C){return Ia(C,["pending","fulfilled","rejected"])}:ta(u)?function(C){for(var O=[],V=0,re=u;V<re.length;V++){var ke=re[V];O.push(ke.pending,ke.rejected,ke.fulfilled)}var Re=Ur.apply(void 0,O);return Re(C)}:La()(u[0])}var wo=function(u,v){if(typeof u!="function")throw new TypeError(v+" is not a function")},ga=function(){},Ya=function(u,v){return v===void 0&&(v=ga),u.catch(v),u},Xi=function(u,v){return u.addEventListener("abort",v,{once:!0}),function(){return u.removeEventListener("abort",v)}},ts=function(u,v){var C=u.signal;C.aborted||("reason"in C||Object.defineProperty(C,"reason",{enumerable:!0,value:v,configurable:!0,writable:!0}),u.abort(v))},Yi="task",ls="listener",bs="completed",Bi="cancelled",Qa="task-"+Bi,ws="task-"+bs,Na=ls+"-"+Bi,P=ls+"-"+bs,k=(function(){function u(v){this.code=v,this.name="TaskAbortError",this.message=Yi+" "+Bi+" (reason: "+v+")"}return u})(),H=function(u){if(u.aborted)throw new k(u.reason)};function ne(u,v){var C=ga;return new Promise(function(O,V){var re=function(){return V(new k(u.reason))};if(u.aborted){re();return}C=Xi(u,re),v.finally(function(){return C()}).then(O,V)}).finally(function(){C=ga})}var Ae=function(u,v){return Fo(void 0,null,function(){var C,O;return Si(this,function(V){switch(V.label){case 0:return V.trys.push([0,3,4,5]),[4,Promise.resolve()];case 1:return V.sent(),[4,u()];case 2:return C=V.sent(),[2,{status:"ok",value:C}];case 3:return O=V.sent(),[2,{status:O instanceof k?"cancelled":"rejected",error:O}];case 4:return v==null||v(),[7];case 5:return[2]}})})},Ke=function(u){return function(v){return Ya(ne(u,v).then(function(C){return H(u),C}))}},$e=function(u){var v=Ke(u);return function(C){return v(new Promise(function(O){return setTimeout(O,C)}))}},yt=Object.assign,xn={},Ht="listenerMiddleware",Ft=function(u,v){var C=function(O){return Xi(u,function(){return ts(O,u.reason)})};return function(O,V){wo(O,"taskExecutor");var re=new AbortController;C(re);var ke=Ae(function(){return Fo(void 0,null,function(){var Re;return Si(this,function(Te){switch(Te.label){case 0:return H(u),H(re.signal),[4,O({pause:Ke(re.signal),delay:$e(re.signal),signal:re.signal})];case 1:return Re=Te.sent(),H(re.signal),[2,Re]}})})},function(){return ts(re,ws)});return V!=null&&V.autoJoin&&v.push(ke),{result:Ke(u)(ke),cancel:function(){ts(re,Qa)}}}},On=function(u,v){var C=function(O,V){return Fo(void 0,null,function(){var re,ke,Re,Te;return Si(this,function(ie){switch(ie.label){case 0:H(v),re=function(){},ke=new Promise(function(Pe,l){var p=u({predicate:O,effect:function(b,_){_.unsubscribe(),Pe([b,_.getState(),_.getOriginalState()])}});re=function(){p(),l()}}),Re=[ke],V!=null&&Re.push(new Promise(function(Pe){return setTimeout(Pe,V,null)})),ie.label=1;case 1:return ie.trys.push([1,,3,4]),[4,ne(v,Promise.race(Re))];case 2:return Te=ie.sent(),H(v),[2,Te];case 3:return re(),[7];case 4:return[2]}})})};return function(O,V){return Ya(C(O,V))}},zr=function(u){var v=u.type,C=u.actionCreator,O=u.matcher,V=u.predicate,re=u.effect;if(v)V=Oo(v).match;else if(C)v=C.type,V=C.match;else if(O)V=O;else if(!V)throw new Error("Creating or removing a listener requires one of the known fields for matching an action");return wo(re,"options.listener"),{predicate:V,type:v,effect:re}},Do=function(u){var v=zr(u),C=v.type,O=v.predicate,V=v.effect,re=ho(),ke={id:re,effect:V,type:C,predicate:O,pending:new Set,unsubscribe:function(){throw new Error("Unsubscribe not initialized")}};return ke},pe=function(u){u.pending.forEach(function(v){ts(v,Na)})},jt=function(u){return function(){u.forEach(pe),u.clear()}},Fe=function(u,v,C){try{u(v,C)}catch(O){setTimeout(function(){throw O},0)}},zo=Oo(Ht+"/add"),qo=Oo(Ht+"/removeAll"),K=Oo(Ht+"/remove"),Yo=function(){for(var u=[],v=0;v<arguments.length;v++)u[v]=arguments[v];console.error.apply(console,Ei([Ht+"/error"],u))};function Ii(u){var v=this;u===void 0&&(u={});var C=new Map,O=u.extra,V=u.onError,re=V===void 0?Yo:V;wo(re,"onError");var ke=function(b){return b.unsubscribe=function(){return C.delete(b.id)},C.set(b.id,b),function(_){b.unsubscribe(),_!=null&&_.cancelActive&&pe(b)}},Re=function(b){for(var _=0,j=Array.from(C.values());_<j.length;_++){var oe=j[_];if(b(oe))return oe}},Te=function(b){var _=Re(function(j){return j.effect===b.effect});return _||(_=Do(b)),ke(_)},ie=function(b){var _=zr(b),j=_.type,oe=_.effect,Ce=_.predicate,Le=Re(function(qe){var Ve=typeof j=="string"?qe.type===j:qe.predicate===Ce;return Ve&&qe.effect===oe});return Le&&(Le.unsubscribe(),b.cancelActive&&pe(Le)),!!Le},Pe=function(b,_,j,oe){return Fo(v,null,function(){var Ce,Le,qe,Ve;return Si(this,function(Mt){switch(Mt.label){case 0:Ce=new AbortController,Le=On(Te,Ce.signal),qe=[],Mt.label=1;case 1:return Mt.trys.push([1,3,4,6]),b.pending.add(Ce),[4,Promise.resolve(b.effect(_,yt({},j,{getOriginalState:oe,condition:function(sn,ur){return Le(sn,ur).then(Boolean)},take:Le,delay:$e(Ce.signal),pause:Ke(Ce.signal),extra:O,signal:Ce.signal,fork:Ft(Ce.signal,qe),unsubscribe:b.unsubscribe,subscribe:function(){C.set(b.id,b)},cancelActiveListeners:function(){b.pending.forEach(function(sn,ur,rn){sn!==Ce&&(ts(sn,Na),rn.delete(sn))})}})))];case 2:return Mt.sent(),[3,6];case 3:return Ve=Mt.sent(),Ve instanceof k||Fe(re,Ve,{raisedBy:"effect"}),[3,6];case 4:return[4,Promise.allSettled(qe)];case 5:return Mt.sent(),ts(Ce,P),b.pending.delete(Ce),[7];case 6:return[2]}})})},l=jt(C),p=function(b){return function(_){return function(j){if(!sa(j))return _(j);if(zo.match(j))return Te(j.payload);if(qo.match(j)){l();return}if(K.match(j))return ie(j.payload);var oe=b.getState(),Ce=function(){if(oe===xn)throw new Error(Ht+": getOriginalState can only be called synchronously");return oe},Le;try{if(Le=_(j),C.size>0)for(var qe=b.getState(),Ve=Array.from(C.values()),Mt=0,sn=Ve;Mt<sn.length;Mt++){var ur=sn[Mt],rn=!1;try{rn=ur.predicate(j,qe,oe)}catch(Tn){rn=!1,Fe(re,Tn,{raisedBy:"predicate"})}rn&&Pe(ur,j,b,Ce)}}finally{oe=xn}return Le}}};return{middleware:p,startListening:Te,stopListening:ie,clearListeners:l}}var wi="RTK_autoBatch",Se=function(){return function(u){var v;return{payload:u,meta:(v={},v[wi]=!0,v)}}},Xe,it=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window!="undefined"?window:typeof y.g!="undefined"?y.g:globalThis):function(u){return(Xe||(Xe=Promise.resolve())).then(u).catch(function(v){return setTimeout(function(){throw v},0)})},It=function(u){return function(v){setTimeout(v,u)}},un=typeof window!="undefined"&&window.requestAnimationFrame?window.requestAnimationFrame:It(10),Dn=function(u){return u===void 0&&(u={type:"raf"}),function(v){return function(){for(var C=[],O=0;O<arguments.length;O++)C[O]=arguments[O];var V=v.apply(void 0,C),re=!0,ke=!1,Re=!1,Te=new Set,ie=u.type==="tick"?it:u.type==="raf"?un:u.type==="callback"?u.queueNotification:It(u.timeout),Pe=function(){Re=!1,ke&&(ke=!1,Te.forEach(function(l){return l()}))};return Object.assign({},V,{subscribe:function(l){var p=function(){return re&&l()},b=V.subscribe(p);return Te.add(l),function(){b(),Te.delete(l)}},dispatch:function(l){var p;try{return re=!((p=l==null?void 0:l.meta)!=null&&p[wi]),ke=!re,ke&&(Re||(Re=!0,ie(Pe))),V.dispatch(l)}finally{re=!0}}})}}};Oe()},5588(M,f,y){"use strict";y.d(f,{AO:()=>ge,B6:()=>er,Gh:()=>ct,HS:()=>Sn,Oi:()=>R,RO:()=>vt,Rr:()=>ye,pX:()=>$n,pb:()=>gn,rc:()=>E,tH:()=>Po,tW:()=>kn,ue:()=>g,yD:()=>mt,zR:()=>d});/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(S){for(var D=1;D<arguments.length;D++){var q=arguments[D];for(var ue in q)Object.prototype.hasOwnProperty.call(q,ue)&&(S[ue]=q[ue])}return S},F.apply(this,arguments)}var E;(function(S){S.Pop="POP",S.Push="PUSH",S.Replace="REPLACE"})(E||(E={}));const x="popstate";function m(S){S===void 0&&(S={});let{initialEntries:D=["/"],initialIndex:q,v5Compat:ue=!1}=S,le;le=D.map((_t,nn)=>Vt(_t,typeof _t=="string"?null:_t.state,nn===0?"default":void 0));let Me=st(q==null?le.length-1:q),Ne=E.Pop,lt=null;function st(_t){return Math.min(Math.max(_t,0),le.length-1)}function Dt(){return le[Me]}function Vt(_t,nn,tn){nn===void 0&&(nn=null);let Cn=se(le?Dt().pathname:"/",_t,nn,tn);return z(Cn.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(_t)),Cn}function Xt(_t){return typeof _t=="string"?_t:ge(_t)}return{get index(){return Me},get action(){return Ne},get location(){return Dt()},createHref:Xt,createURL(_t){return new URL(Xt(_t),"http://localhost")},encodeLocation(_t){let nn=typeof _t=="string"?ye(_t):_t;return{pathname:nn.pathname||"",search:nn.search||"",hash:nn.hash||""}},push(_t,nn){Ne=E.Push;let tn=Vt(_t,nn);Me+=1,le.splice(Me,le.length,tn),ue&&lt&&lt({action:Ne,location:tn,delta:1})},replace(_t,nn){Ne=E.Replace;let tn=Vt(_t,nn);le[Me]=tn,ue&&lt&&lt({action:Ne,location:tn,delta:0})},go(_t){Ne=E.Pop;let nn=st(Me+_t),tn=le[nn];Me=nn,lt&&lt({action:Ne,location:tn,delta:_t})},listen(_t){return lt=_t,()=>{lt=null}}}}function d(S){S===void 0&&(S={});function D(ue,le){let{pathname:Me,search:Ne,hash:lt}=ue.location;return se("",{pathname:Me,search:Ne,hash:lt},le.state&&le.state.usr||null,le.state&&le.state.key||"default")}function q(ue,le){return typeof le=="string"?le:ge(le)}return Z(D,q,null,S)}function J(S){S===void 0&&(S={});function D(le,Me){let{pathname:Ne="/",search:lt="",hash:st=""}=ye(le.location.hash.substr(1));return!Ne.startsWith("/")&&!Ne.startsWith(".")&&(Ne="/"+Ne),se("",{pathname:Ne,search:lt,hash:st},Me.state&&Me.state.usr||null,Me.state&&Me.state.key||"default")}function q(le,Me){let Ne=le.document.querySelector("base"),lt="";if(Ne&&Ne.getAttribute("href")){let st=le.location.href,Dt=st.indexOf("#");lt=Dt===-1?st:st.slice(0,Dt)}return lt+"#"+(typeof Me=="string"?Me:ge(Me))}function ue(le,Me){z(le.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(Me)+")")}return Z(D,q,ue,S)}function R(S,D){if(S===!1||S===null||typeof S=="undefined")throw new Error(D)}function z(S,D){if(!S){typeof console!="undefined"&&console.warn(D);try{throw new Error(D)}catch(q){}}}function X(){return Math.random().toString(36).substr(2,8)}function be(S,D){return{usr:S.state,key:S.key,idx:D}}function se(S,D,q,ue){return q===void 0&&(q=null),F({pathname:typeof S=="string"?S:S.pathname,search:"",hash:""},typeof D=="string"?ye(D):D,{state:q,key:D&&D.key||ue||X()})}function ge(S){let{pathname:D="/",search:q="",hash:ue=""}=S;return q&&q!=="?"&&(D+=q.charAt(0)==="?"?q:"?"+q),ue&&ue!=="#"&&(D+=ue.charAt(0)==="#"?ue:"#"+ue),D}function ye(S){let D={};if(S){let q=S.indexOf("#");q>=0&&(D.hash=S.substr(q),S=S.substr(0,q));let ue=S.indexOf("?");ue>=0&&(D.search=S.substr(ue),S=S.substr(0,ue)),S&&(D.pathname=S)}return D}function Z(S,D,q,ue){ue===void 0&&(ue={});let{window:le=document.defaultView,v5Compat:Me=!1}=ue,Ne=le.history,lt=E.Pop,st=null,Dt=Vt();Dt==null&&(Dt=0,Ne.replaceState(F({},Ne.state,{idx:Dt}),""));function Vt(){return(Ne.state||{idx:null}).idx}function Xt(){lt=E.Pop;let Cn=Vt(),pr=Cn==null?null:Cn-Dt;Dt=Cn,st&&st({action:lt,location:tn.location,delta:pr})}function yn(Cn,pr){lt=E.Push;let jn=se(tn.location,Cn,pr);q&&q(jn,Cn),Dt=Vt()+1;let lr=be(jn,Dt),fn=tn.createHref(jn);try{Ne.pushState(lr,"",fn)}catch(kr){if(kr instanceof DOMException&&kr.name==="DataCloneError")throw kr;le.location.assign(fn)}Me&&st&&st({action:lt,location:tn.location,delta:1})}function _t(Cn,pr){lt=E.Replace;let jn=se(tn.location,Cn,pr);q&&q(jn,Cn),Dt=Vt();let lr=be(jn,Dt),fn=tn.createHref(jn);Ne.replaceState(lr,"",fn),Me&&st&&st({action:lt,location:tn.location,delta:0})}function nn(Cn){let pr=le.location.origin!=="null"?le.location.origin:le.location.href,jn=typeof Cn=="string"?Cn:ge(Cn);return jn=jn.replace(/ $/,"%20"),R(pr,"No window.location.(origin|href) available to create URL for href: "+jn),new URL(jn,pr)}let tn={get action(){return lt},get location(){return S(le,Ne)},listen(Cn){if(st)throw new Error("A history only accepts one active listener");return le.addEventListener(x,Xt),st=Cn,()=>{le.removeEventListener(x,Xt),st=null}},createHref(Cn){return D(le,Cn)},createURL:nn,encodeLocation(Cn){let pr=nn(Cn);return{pathname:pr.pathname,search:pr.search,hash:pr.hash}},push:yn,replace:_t,go(Cn){return Ne.go(Cn)}};return tn}var ve;(function(S){S.data="data",S.deferred="deferred",S.redirect="redirect",S.error="error"})(ve||(ve={}));const ae=new Set(["lazy","caseSensitive","path","id","index","children"]);function fe(S){return S.index===!0}function ee(S,D,q,ue){return q===void 0&&(q=[]),ue===void 0&&(ue={}),S.map((le,Me)=>{let Ne=[...q,String(Me)],lt=typeof le.id=="string"?le.id:Ne.join("-");if(R(le.index!==!0||!le.children,"Cannot specify children on an index route"),R(!ue[lt],'Found a route id collision on id "'+lt+`".  Route id's must be globally unique within Data Router usages`),fe(le)){let st=F({},le,D(le),{id:lt});return ue[lt]=st,st}else{let st=F({},le,D(le),{id:lt,children:void 0});return ue[lt]=st,le.children&&(st.children=ee(le.children,D,Ne,ue)),st}})}function g(S,D,q){return q===void 0&&(q="/"),Be(S,D,q,!1)}function Be(S,D,q,ue){let le=typeof D=="string"?ye(D):D,Me=gn(le.pathname||"/",q);if(Me==null)return null;let Ne=We(S);Tt(Ne);let lt=null;for(let st=0;lt==null&&st<Ne.length;++st){let Dt=vt(Me);lt=ln(Ne[st],Dt,ue)}return lt}function Ee(S,D){let{route:q,pathname:ue,params:le}=S;return{id:q.id,pathname:ue,params:le,data:D[q.id],handle:q.handle}}function We(S,D,q,ue){D===void 0&&(D=[]),q===void 0&&(q=[]),ue===void 0&&(ue="");let le=(Me,Ne,lt)=>{let st={relativePath:lt===void 0?Me.path||"":lt,caseSensitive:Me.caseSensitive===!0,childrenIndex:Ne,route:Me};st.relativePath.startsWith("/")&&(R(st.relativePath.startsWith(ue),'Absolute route path "'+st.relativePath+'" nested under path '+('"'+ue+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),st.relativePath=st.relativePath.slice(ue.length));let Dt=Sn([ue,st.relativePath]),Vt=q.concat(st);Me.children&&Me.children.length>0&&(R(Me.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+Dt+'".')),We(Me.children,D,Vt,Dt)),!(Me.path==null&&!Me.index)&&D.push({path:Dt,score:_n(Dt,Me.index),routesMeta:Vt})};return S.forEach((Me,Ne)=>{var lt;if(Me.path===""||!((lt=Me.path)!=null&&lt.includes("?")))le(Me,Ne);else for(let st of ht(Me.path))le(Me,Ne,st)}),D}function ht(S){let D=S.split("/");if(D.length===0)return[];let[q,...ue]=D,le=q.endsWith("?"),Me=q.replace(/\?$/,"");if(ue.length===0)return le?[Me,""]:[Me];let Ne=ht(ue.join("/")),lt=[];return lt.push(...Ne.map(st=>st===""?Me:[Me,st].join("/"))),le&&lt.push(...Ne),lt.map(st=>S.startsWith("/")&&st===""?"/":st)}function Tt(S){S.sort((D,q)=>D.score!==q.score?q.score-D.score:wt(D.routesMeta.map(ue=>ue.childrenIndex),q.routesMeta.map(ue=>ue.childrenIndex)))}const zt=/^:[\w-]+$/,Wn=3,ir=2,Vn=1,An=10,Bn=-2,ar=S=>S==="*";function _n(S,D){let q=S.split("/"),ue=q.length;return q.some(ar)&&(ue+=Bn),D&&(ue+=ir),q.filter(le=>!ar(le)).reduce((le,Me)=>le+(zt.test(Me)?Wn:Me===""?Vn:An),ue)}function wt(S,D){return S.length===D.length&&S.slice(0,-1).every((ue,le)=>ue===D[le])?S[S.length-1]-D[D.length-1]:0}function ln(S,D,q){q===void 0&&(q=!1);let{routesMeta:ue}=S,le={},Me="/",Ne=[];for(let lt=0;lt<ue.length;++lt){let st=ue[lt],Dt=lt===ue.length-1,Vt=Me==="/"?D:D.slice(Me.length)||"/",Xt=er({path:st.relativePath,caseSensitive:st.caseSensitive,end:Dt},Vt),yn=st.route;if(!Xt&&Dt&&q&&!ue[ue.length-1].route.index&&(Xt=er({path:st.relativePath,caseSensitive:st.caseSensitive,end:!1},Vt)),!Xt)return null;Object.assign(le,Xt.params),Ne.push({params:le,pathname:Sn([Me,Xt.pathname]),pathnameBase:Rn(Sn([Me,Xt.pathnameBase])),route:yn}),Xt.pathnameBase!=="/"&&(Me=Sn([Me,Xt.pathnameBase]))}return Ne}function kn(S,D){D===void 0&&(D={});let q=S;q.endsWith("*")&&q!=="*"&&!q.endsWith("/*")&&(z(!1,'Route path "'+q+'" will be treated as if it were '+('"'+q.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+q.replace(/\*$/,"/*")+'".')),q=q.replace(/\*$/,"/*"));const ue=q.startsWith("/")?"/":"",le=Ne=>Ne==null?"":typeof Ne=="string"?Ne:String(Ne),Me=q.split(/\/+/).map((Ne,lt,st)=>{if(lt===st.length-1&&Ne==="*")return le(D["*"]);const Vt=Ne.match(/^:([\w-]+)(\??)$/);if(Vt){const[,Xt,yn]=Vt;let _t=D[Xt];return R(yn==="?"||_t!=null,'Missing ":'+Xt+'" param'),le(_t)}return Ne.replace(/\?$/g,"")}).filter(Ne=>!!Ne);return ue+Me.join("/")}function er(S,D){typeof S=="string"&&(S={path:S,caseSensitive:!1,end:!0});let[q,ue]=Oe(S.path,S.caseSensitive,S.end),le=D.match(q);if(!le)return null;let Me=le[0],Ne=Me.replace(/(.)\/+$/,"$1"),lt=le.slice(1);return{params:ue.reduce((Dt,Vt,Xt)=>{let{paramName:yn,isOptional:_t}=Vt;if(yn==="*"){let tn=lt[Xt]||"";Ne=Me.slice(0,Me.length-tn.length).replace(/(.)\/+$/,"$1")}const nn=lt[Xt];return _t&&!nn?Dt[yn]=void 0:Dt[yn]=(nn||"").replace(/%2F/g,"/"),Dt},{}),pathname:Me,pathnameBase:Ne,pattern:S}}function Oe(S,D,q){D===void 0&&(D=!1),q===void 0&&(q=!0),z(S==="*"||!S.endsWith("*")||S.endsWith("/*"),'Route path "'+S+'" will be treated as if it were '+('"'+S.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+S.replace(/\*$/,"/*")+'".'));let ue=[],le="^"+S.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(Ne,lt,st)=>(ue.push({paramName:lt,isOptional:st!=null}),st?"/?([^\\/]+)?":"/([^\\/]+)"));return S.endsWith("*")?(ue.push({paramName:"*"}),le+=S==="*"||S==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):q?le+="\\/*$":S!==""&&S!=="/"&&(le+="(?:(?=\\/|$))"),[new RegExp(le,D?void 0:"i"),ue]}function vt(S){try{return S.split("/").map(D=>decodeURIComponent(D).replace(/\//g,"%2F")).join("/")}catch(D){return z(!1,'The URL path "'+S+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+D+").")),S}}function gn(S,D){if(D==="/")return S;if(!S.toLowerCase().startsWith(D.toLowerCase()))return null;let q=D.endsWith("/")?D.length-1:D.length,ue=S.charAt(q);return ue&&ue!=="/"?null:S.slice(q)||"/"}const Bt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,on=S=>Bt.test(S);function rt(S,D){D===void 0&&(D="/");let{pathname:q,search:ue="",hash:le=""}=typeof S=="string"?ye(S):S,Me;if(q)if(on(q))Me=q;else{if(q.includes("//")){let Ne=q;q=q.replace(/\/\/+/g,"/"),z(!1,"Pathnames cannot have embedded double slashes - normalizing "+(Ne+" -> "+q))}q.startsWith("/")?Me=tt(q.substring(1),"/"):Me=tt(q,D)}else Me=D;return{pathname:Me,search:mn(ue),hash:Lr(le)}}function tt(S,D){let q=D.replace(/\/+$/,"").split("/");return S.split("/").forEach(le=>{le===".."?q.length>1&&q.pop():le!=="."&&q.push(le)}),q.length>1?q.join("/"):"/"}function xt(S,D,q,ue){return"Cannot include a '"+S+"' character in a manually specified "+("`to."+D+"` field ["+JSON.stringify(ue)+"].  Please separate it out to the ")+("`to."+q+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nt(S){return S.filter((D,q)=>q===0||D.route.path&&D.route.path.length>0)}function mt(S,D){let q=nt(S);return D?q.map((ue,le)=>le===q.length-1?ue.pathname:ue.pathnameBase):q.map(ue=>ue.pathnameBase)}function ct(S,D,q,ue){ue===void 0&&(ue=!1);let le;typeof S=="string"?le=ye(S):(le=F({},S),R(!le.pathname||!le.pathname.includes("?"),xt("?","pathname","search",le)),R(!le.pathname||!le.pathname.includes("#"),xt("#","pathname","hash",le)),R(!le.search||!le.search.includes("#"),xt("#","search","hash",le)));let Me=S===""||le.pathname==="",Ne=Me?"/":le.pathname,lt;if(Ne==null)lt=q;else{let Xt=D.length-1;if(!ue&&Ne.startsWith("..")){let yn=Ne.split("/");for(;yn[0]==="..";)yn.shift(),Xt-=1;le.pathname=yn.join("/")}lt=Xt>=0?D[Xt]:"/"}let st=rt(le,lt),Dt=Ne&&Ne!=="/"&&Ne.endsWith("/"),Vt=(Me||Ne===".")&&q.endsWith("/");return!st.pathname.endsWith("/")&&(Dt||Vt)&&(st.pathname+="/"),st}function kt(S){return S===""||S.pathname===""?"/":typeof S=="string"?ye(S).pathname:S.pathname}const Sn=S=>S.join("/").replace(/\/\/+/g,"/"),Rn=S=>S.replace(/\/+$/,"").replace(/^\/*/,"/"),mn=S=>!S||S==="?"?"":S.startsWith("?")?S:"?"+S,Lr=S=>!S||S==="#"?"":S.startsWith("#")?S:"#"+S,uo=function(D,q){q===void 0&&(q={});let ue=typeof q=="number"?{status:q}:q,le=new Headers(ue.headers);return le.has("Content-Type")||le.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(D),F({},ue,{headers:le}))};class _i{constructor(D,q){this.type="DataWithResponseInit",this.data=D,this.init=q||null}}function Nr(S,D){return new _i(S,typeof D=="number"?{status:D}:D)}class Po extends Error{}class di{constructor(D,q){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],R(D&&typeof D=="object"&&!Array.isArray(D),"defer() only accepts plain objects");let ue;this.abortPromise=new Promise((Me,Ne)=>ue=Ne),this.controller=new AbortController;let le=()=>ue(new Po("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",le),this.controller.signal.addEventListener("abort",le),this.data=Object.entries(D).reduce((Me,Ne)=>{let[lt,st]=Ne;return Object.assign(Me,{[lt]:this.trackPromise(lt,st)})},{}),this.done&&this.unlistenAbortSignal(),this.init=q}trackPromise(D,q){if(!(q instanceof Promise))return q;this.deferredKeys.push(D),this.pendingKeysSet.add(D);let ue=Promise.race([q,this.abortPromise]).then(le=>this.onSettle(ue,D,void 0,le),le=>this.onSettle(ue,D,le));return ue.catch(()=>{}),Object.defineProperty(ue,"_tracked",{get:()=>!0}),ue}onSettle(D,q,ue,le){if(this.controller.signal.aborted&&ue instanceof Po)return this.unlistenAbortSignal(),Object.defineProperty(D,"_error",{get:()=>ue}),Promise.reject(ue);if(this.pendingKeysSet.delete(q),this.done&&this.unlistenAbortSignal(),ue===void 0&&le===void 0){let Me=new Error('Deferred data for key "'+q+'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');return Object.defineProperty(D,"_error",{get:()=>Me}),this.emit(!1,q),Promise.reject(Me)}return le===void 0?(Object.defineProperty(D,"_error",{get:()=>ue}),this.emit(!1,q),Promise.reject(ue)):(Object.defineProperty(D,"_data",{get:()=>le}),this.emit(!1,q),le)}emit(D,q){this.subscribers.forEach(ue=>ue(D,q))}subscribe(D){return this.subscribers.add(D),()=>this.subscribers.delete(D)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((D,q)=>this.pendingKeysSet.delete(q)),this.emit(!0)}resolveData(D){return Ir(this,null,function*(){let q=!1;if(!this.done){let ue=()=>this.cancel();D.addEventListener("abort",ue),q=yield new Promise(le=>{this.subscribe(Me=>{D.removeEventListener("abort",ue),(Me||this.done)&&le(Me)})})}return q})}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return R(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((D,q)=>{let[ue,le]=q;return Object.assign(D,{[ue]:So(le)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function xo(S){return S instanceof Promise&&S._tracked===!0}function So(S){if(!xo(S))return S;if(S._error)throw S._error;return S._data}const Ra=function(D,q){q===void 0&&(q={});let ue=typeof q=="number"?{status:q}:q;return new di(D,ue)},Gr=function(D,q){q===void 0&&(q=302);let ue=q;typeof ue=="number"?ue={status:ue}:typeof ue.status=="undefined"&&(ue.status=302);let le=new Headers(ue.headers);return le.set("Location",D),new Response(null,F({},ue,{headers:le}))},Ga=(S,D)=>{let q=Gr(S,D);return q.headers.set("X-Remix-Reload-Document","true"),q},Nn=(S,D)=>{let q=Gr(S,D);return q.headers.set("X-Remix-Replace","true"),q};class vr{constructor(D,q,ue,le){le===void 0&&(le=!1),this.status=D,this.statusText=q||"",this.internal=le,ue instanceof Error?(this.data=ue.toString(),this.error=ue):this.data=ue}}function $n(S){return S!=null&&typeof S.status=="number"&&typeof S.statusText=="string"&&typeof S.internal=="boolean"&&"data"in S}const an=["post","put","patch","delete"],wr=new Set(an),zn=["get",...an],Ze=new Set(zn),Ar=new Set([301,302,303,307,308]),Zn=new Set([307,308]),Kr={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Bo={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},co={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ko=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cr=S=>({hasErrorBoundary:!!S.hasErrorBoundary}),to="remix-router-transitions";function No(S){const D=S.window?S.window:typeof window!="undefined"?window:void 0,q=typeof D!="undefined"&&typeof D.document!="undefined"&&typeof D.document.createElement!="undefined",ue=!q;R(S.routes.length>0,"You must provide a non-empty routes array to createRouter");let le;if(S.mapRouteProperties)le=S.mapRouteProperties;else if(S.detectErrorBoundary){let Se=S.detectErrorBoundary;le=Xe=>({hasErrorBoundary:Se(Xe)})}else le=Cr;let Me={},Ne=ee(S.routes,le,void 0,Me),lt,st=S.basename||"/",Dt=S.dataStrategy||Fn,Vt=S.patchRoutesOnNavigation,Xt=F({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},S.future),yn=null,_t=new Set,nn=null,tn=null,Cn=null,pr=S.hydrationData!=null,jn=g(Ne,S.history.location,st),lr=!1,fn=null;if(jn==null&&!Vt){let Se=xr(404,{pathname:S.history.location.pathname}),{matches:Xe,route:it}=bi(Ne);jn=Xe,fn={[it.id]:Se}}jn&&!S.hydrationData&&K(jn,Ne,S.history.location.pathname).active&&(jn=null);let kr;if(jn)if(jn.some(Se=>Se.route.lazy))kr=!1;else if(!jn.some(Se=>Se.route.loader))kr=!0;else if(Xt.v7_partialHydration){let Se=S.hydrationData?S.hydrationData.loaderData:null,Xe=S.hydrationData?S.hydrationData.errors:null;if(Xe){let it=jn.findIndex(It=>Xe[It.route.id]!==void 0);kr=jn.slice(0,it+1).every(It=>!qt(It.route,Se,Xe))}else kr=jn.every(it=>!qt(it.route,Se,Xe))}else kr=S.hydrationData!=null;else if(kr=!1,jn=[],Xt.v7_partialHydration){let Se=K(null,Ne,S.history.location.pathname);Se.active&&Se.matches&&(lr=!0,jn=Se.matches)}let ao,et={historyAction:S.history.action,location:S.history.location,matches:jn,initialized:kr,navigation:Kr,restoreScrollPosition:S.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:S.hydrationData&&S.hydrationData.loaderData||{},actionData:S.hydrationData&&S.hydrationData.actionData||null,errors:S.hydrationData&&S.hydrationData.errors||fn,fetchers:new Map,blockers:new Map},yr=E.Pop,ro=!1,Gn,oo=!1,Ro=new Map,Ao=null,Ki=!1,Pi=!1,Da=[],ri=new Set,ho=new Map,_o=0,jo=-1,oi=new Map,gi=new Set,Uo=new Map,va=new Map,Mo=new Set,$i=new Map,Ur=new Map,Eo;function Ia(){if(yn=S.history.listen(Se=>{let{action:Xe,location:it,delta:It}=Se;if(Eo){Eo(),Eo=void 0;return}z(Ur.size===0||It!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let un=zr({currentLocation:et.location,nextLocation:it,historyAction:Xe});if(un&&It!=null){let Dn=new Promise(u=>{Eo=u});S.history.go(It*-1),On(un,{state:"blocked",location:it,proceed(){On(un,{state:"proceeding",proceed:void 0,reset:void 0,location:it}),Dn.then(()=>S.history.go(It))},reset(){let u=new Map(et.blockers);u.set(un,co),bo({blockers:u})}});return}return wo(Xe,it)}),q){Hi(D,Ro);let Se=()=>Di(D,Ro);D.addEventListener("pagehide",Se),Ao=()=>D.removeEventListener("pagehide",Se)}return et.initialized||wo(E.Pop,et.location,{initialHydration:!0}),ao}function ta(){yn&&yn(),Ao&&Ao(),_t.clear(),Gn&&Gn.abort(),et.fetchers.forEach((Se,Xe)=>ne(Xe)),et.blockers.forEach((Se,Xe)=>Ft(Xe))}function Ma(Se){return _t.add(Se),()=>_t.delete(Se)}function bo(Se,Xe){Xe===void 0&&(Xe={}),et=F({},et,Se);let it=[],It=[];Xt.v7_fetcherPersist&&et.fetchers.forEach((un,Dn)=>{un.state==="idle"&&(Mo.has(Dn)?It.push(Dn):it.push(Dn))}),Mo.forEach(un=>{!et.fetchers.has(un)&&!ho.has(un)&&It.push(un)}),[..._t].forEach(un=>un(et,{deletedFetchers:It,viewTransitionOpts:Xe.viewTransitionOpts,flushSync:Xe.flushSync===!0})),Xt.v7_fetcherPersist?(it.forEach(un=>et.fetchers.delete(un)),It.forEach(un=>ne(un))):It.forEach(un=>Mo.delete(un))}function zi(Se,Xe,it){var It,un;let{flushSync:Dn}=it===void 0?{}:it,u=et.actionData!=null&&et.navigation.formMethod!=null&&Fr(et.navigation.formMethod)&&et.navigation.state==="loading"&&((It=Se.state)==null?void 0:It._isRedirect)!==!0,v;Xe.actionData?Object.keys(Xe.actionData).length>0?v=Xe.actionData:v=null:u?v=et.actionData:v=null;let C=Xe.loaderData?Ei(et.loaderData,Xe.loaderData,Xe.matches||[],Xe.errors):et.loaderData,O=et.blockers;O.size>0&&(O=new Map(O),O.forEach((ke,Re)=>O.set(Re,co)));let V=ro===!0||et.navigation.formMethod!=null&&Fr(et.navigation.formMethod)&&((un=Se.state)==null?void 0:un._isRedirect)!==!0;lt&&(Ne=lt,lt=void 0),Ki||yr===E.Pop||(yr===E.Push?S.history.push(Se,Se.state):yr===E.Replace&&S.history.replace(Se,Se.state));let re;if(yr===E.Pop){let ke=Ro.get(et.location.pathname);ke&&ke.has(Se.pathname)?re={currentLocation:et.location,nextLocation:Se}:Ro.has(Se.pathname)&&(re={currentLocation:Se,nextLocation:et.location})}else if(oo){let ke=Ro.get(et.location.pathname);ke?ke.add(Se.pathname):(ke=new Set([Se.pathname]),Ro.set(et.location.pathname,ke)),re={currentLocation:et.location,nextLocation:Se}}bo(F({},Xe,{actionData:v,loaderData:C,historyAction:yr,location:Se,initialized:!0,navigation:Kr,revalidation:"idle",restoreScrollPosition:qo(Se,Xe.matches||et.matches),preventScrollReset:V,blockers:O}),{viewTransitionOpts:re,flushSync:Dn===!0}),yr=E.Pop,ro=!1,oo=!1,Ki=!1,Pi=!1,Da=[]}function Gi(Se,Xe){return Ir(this,null,function*(){if(typeof Se=="number"){S.history.go(Se);return}let it=Qe(et.location,et.matches,st,Xt.v7_prependBasename,Se,Xt.v7_relativeSplatPath,Xe==null?void 0:Xe.fromRouteId,Xe==null?void 0:Xe.relative),{path:It,submission:un,error:Dn}=Ye(Xt.v7_normalizeFormMethod,!1,it,Xe),u=et.location,v=se(et.location,It,Xe&&Xe.state);v=F({},v,S.history.encodeLocation(v));let C=Xe&&Xe.replace!=null?Xe.replace:void 0,O=E.Push;C===!0?O=E.Replace:C===!1||un!=null&&Fr(un.formMethod)&&un.formAction===et.location.pathname+et.location.search&&(O=E.Replace);let V=Xe&&"preventScrollReset"in Xe?Xe.preventScrollReset===!0:void 0,re=(Xe&&Xe.flushSync)===!0,ke=zr({currentLocation:u,nextLocation:v,historyAction:O});if(ke){On(ke,{state:"blocked",location:v,proceed(){On(ke,{state:"proceeding",proceed:void 0,reset:void 0,location:v}),Gi(Se,Xe)},reset(){let Re=new Map(et.blockers);Re.set(ke,co),bo({blockers:Re})}});return}return yield wo(O,v,{submission:un,pendingError:Dn,preventScrollReset:V,replace:Xe&&Xe.replace,enableViewTransition:Xe&&Xe.viewTransition,flushSync:re})})}function La(){if(Na(),bo({revalidation:"loading"}),et.navigation.state!=="submitting"){if(et.navigation.state==="idle"){wo(et.historyAction,et.location,{startUninterruptedRevalidation:!0});return}wo(yr||et.historyAction,et.navigation.location,{overrideNavigation:et.navigation,enableViewTransition:oo===!0})}}function wo(Se,Xe,it){return Ir(this,null,function*(){Gn&&Gn.abort(),Gn=null,yr=Se,Ki=(it&&it.startUninterruptedRevalidation)===!0,zo(et.location,et.matches),ro=(it&&it.preventScrollReset)===!0,oo=(it&&it.enableViewTransition)===!0;let It=lt||Ne,un=it&&it.overrideNavigation,Dn=it!=null&&it.initialHydration&&et.matches&&et.matches.length>0&&!lr?et.matches:g(It,Xe,st),u=(it&&it.flushSync)===!0;if(Dn&&et.initialized&&!Pi&&pa(et.location,Xe)&&!(it&&it.submission&&Fr(it.submission.formMethod))){zi(Xe,{matches:Dn},{flushSync:u});return}let v=K(Dn,It,Xe.pathname);if(v.active&&v.matches&&(Dn=v.matches),!Dn){let{error:Te,notFoundMatches:ie,route:Pe}=Do(Xe.pathname);zi(Xe,{matches:ie,loaderData:{},errors:{[Pe.id]:Te}},{flushSync:u});return}Gn=new AbortController;let C=mi(S.history,Xe,Gn.signal,it&&it.submission),O;if(it&&it.pendingError)O=[Sr(Dn).route.id,{type:ve.error,error:it.pendingError}];else if(it&&it.submission&&Fr(it.submission.formMethod)){let Te=yield ga(C,Xe,it.submission,Dn,v.active,{replace:it.replace,flushSync:u});if(Te.shortCircuited)return;if(Te.pendingActionResult){let[ie,Pe]=Te.pendingActionResult;if(Yr(Pe)&&$n(Pe.error)&&Pe.error.status===404){Gn=null,zi(Xe,{matches:Te.matches,loaderData:{},errors:{[ie]:Pe.error}});return}}Dn=Te.matches||Dn,O=Te.pendingActionResult,un=ma(Xe,it.submission),u=!1,v.active=!1,C=mi(S.history,C.url,C.signal)}let{shortCircuited:V,matches:re,loaderData:ke,errors:Re}=yield Ya(C,Xe,Dn,v.active,un,it&&it.submission,it&&it.fetcherSubmission,it&&it.replace,it&&it.initialHydration===!0,u,O);V||(Gn=null,zi(Xe,F({matches:re||Dn},ja(O),{loaderData:ke,errors:Re})))})}function ga(Se,Xe,it,It,un,Dn){return Ir(this,null,function*(){Dn===void 0&&(Dn={}),Na();let u=no(Xe,it);if(bo({navigation:u},{flushSync:Dn.flushSync===!0}),un){let O=yield Yo(It,Xe.pathname,Se.signal);if(O.type==="aborted")return{shortCircuited:!0};if(O.type==="error"){let V=Sr(O.partialMatches).route.id;return{matches:O.partialMatches,pendingActionResult:[V,{type:ve.error,error:O.error}]}}else if(O.matches)It=O.matches;else{let{notFoundMatches:V,error:re,route:ke}=Do(Xe.pathname);return{matches:V,pendingActionResult:[ke.id,{type:ve.error,error:re}]}}}let v,C=Ni(It,Xe);if(!C.route.action&&!C.route.lazy)v={type:ve.error,error:xr(405,{method:Se.method,pathname:Xe.pathname,routeId:C.route.id})};else if(v=(yield Qa("action",et,Se,[C],It,null))[C.route.id],Se.signal.aborted)return{shortCircuited:!0};if(Gt(v)){let O;return Dn&&Dn.replace!=null?O=Dn.replace:O=hi(v.response.headers.get("Location"),new URL(Se.url),st,S.history)===et.location.pathname+et.location.search,yield Bi(Se,v,!0,{submission:it,replace:O}),{shortCircuited:!0}}if(Fo(v))throw xr(400,{type:"defer-action"});if(Yr(v)){let O=Sr(It,C.route.id);return(Dn&&Dn.replace)!==!0&&(yr=E.Push),{matches:It,pendingActionResult:[O.route.id,v]}}return{matches:It,pendingActionResult:[C.route.id,v]}})}function Ya(Se,Xe,it,It,un,Dn,u,v,C,O,V){return Ir(this,null,function*(){let re=un||ma(Xe,Dn),ke=Dn||u||Xo(re),Re=!Ki&&(!Xt.v7_partialHydration||!C);if(It){if(Re){let Mt=Xi(V);bo(F({navigation:re},Mt!==void 0?{actionData:Mt}:{}),{flushSync:O})}let Ve=yield Yo(it,Xe.pathname,Se.signal);if(Ve.type==="aborted")return{shortCircuited:!0};if(Ve.type==="error"){let Mt=Sr(Ve.partialMatches).route.id;return{matches:Ve.partialMatches,loaderData:{},errors:{[Mt]:Ve.error}}}else if(Ve.matches)it=Ve.matches;else{let{error:Mt,notFoundMatches:sn,route:ur}=Do(Xe.pathname);return{matches:sn,loaderData:{},errors:{[ur.id]:Mt}}}}let Te=lt||Ne,[ie,Pe]=Nt(S.history,et,it,ke,Xe,Xt.v7_partialHydration&&C===!0,Xt.v7_skipActionErrorRevalidation,Pi,Da,ri,Mo,Uo,gi,Te,st,V);if(pe(Ve=>!(it&&it.some(Mt=>Mt.route.id===Ve))||ie&&ie.some(Mt=>Mt.route.id===Ve)),jo=++_o,ie.length===0&&Pe.length===0){let Ve=yt();return zi(Xe,F({matches:it,loaderData:{},errors:V&&Yr(V[1])?{[V[0]]:V[1].error}:null},ja(V),Ve?{fetchers:new Map(et.fetchers)}:{}),{flushSync:O}),{shortCircuited:!0}}if(Re){let Ve={};if(!It){Ve.navigation=re;let Mt=Xi(V);Mt!==void 0&&(Ve.actionData=Mt)}Pe.length>0&&(Ve.fetchers=ts(Pe)),bo(Ve,{flushSync:O})}Pe.forEach(Ve=>{Ke(Ve.key),Ve.controller&&ho.set(Ve.key,Ve.controller)});let l=()=>Pe.forEach(Ve=>Ke(Ve.key));Gn&&Gn.signal.addEventListener("abort",l);let{loaderResults:p,fetcherResults:b}=yield ws(et,it,ie,Pe,Se);if(Se.signal.aborted)return{shortCircuited:!0};Gn&&Gn.signal.removeEventListener("abort",l),Pe.forEach(Ve=>ho.delete(Ve.key));let _=aa(p);if(_)return yield Bi(Se,_.result,!0,{replace:v}),{shortCircuited:!0};if(_=aa(b),_)return gi.add(_.key),yield Bi(Se,_.result,!0,{replace:v}),{shortCircuited:!0};let{loaderData:j,errors:oe}=Si(et,it,p,V,Pe,b,$i);$i.forEach((Ve,Mt)=>{Ve.subscribe(sn=>{(sn||Ve.done)&&$i.delete(Mt)})}),Xt.v7_partialHydration&&C&&et.errors&&(oe=F({},et.errors,oe));let Ce=yt(),Le=xn(jo),qe=Ce||Le||Pe.length>0;return F({matches:it,loaderData:j,errors:oe},qe?{fetchers:new Map(et.fetchers)}:{})})}function Xi(Se){if(Se&&!Yr(Se[1]))return{[Se[0]]:Se[1].data};if(et.actionData)return Object.keys(et.actionData).length===0?null:et.actionData}function ts(Se){return Se.forEach(Xe=>{let it=et.fetchers.get(Xe.key),It=wa(void 0,it?it.data:void 0);et.fetchers.set(Xe.key,It)}),new Map(et.fetchers)}function Yi(Se,Xe,it,It){if(ue)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Ke(Se);let un=(It&&It.flushSync)===!0,Dn=lt||Ne,u=Qe(et.location,et.matches,st,Xt.v7_prependBasename,it,Xt.v7_relativeSplatPath,Xe,It==null?void 0:It.relative),v=g(Dn,u,st),C=K(v,Dn,u);if(C.active&&C.matches&&(v=C.matches),!v){k(Se,Xe,xr(404,{pathname:u}),{flushSync:un});return}let{path:O,submission:V,error:re}=Ye(Xt.v7_normalizeFormMethod,!0,u,It);if(re){k(Se,Xe,re,{flushSync:un});return}let ke=Ni(v,O),Re=(It&&It.preventScrollReset)===!0;if(V&&Fr(V.formMethod)){ls(Se,Xe,O,ke,v,C.active,un,Re,V);return}Uo.set(Se,{routeId:Xe,path:O}),bs(Se,Xe,O,ke,v,C.active,un,Re,V)}function ls(Se,Xe,it,It,un,Dn,u,v,C){return Ir(this,null,function*(){Na(),Uo.delete(Se);function O(rn){if(!rn.route.action&&!rn.route.lazy){let Tn=xr(405,{method:C.formMethod,pathname:it,routeId:Xe});return k(Se,Xe,Tn,{flushSync:u}),!0}return!1}if(!Dn&&O(It))return;let V=et.fetchers.get(Se);P(Se,or(C,V),{flushSync:u});let re=new AbortController,ke=mi(S.history,it,re.signal,C);if(Dn){let rn=yield Yo(un,new URL(ke.url).pathname,ke.signal,Se);if(rn.type==="aborted")return;if(rn.type==="error"){k(Se,Xe,rn.error,{flushSync:u});return}else if(rn.matches){if(un=rn.matches,It=Ni(un,it),O(It))return}else{k(Se,Xe,xr(404,{pathname:it}),{flushSync:u});return}}ho.set(Se,re);let Re=_o,ie=(yield Qa("action",et,ke,[It],un,Se))[It.route.id];if(ke.signal.aborted){ho.get(Se)===re&&ho.delete(Se);return}if(Xt.v7_fetcherPersist&&Mo.has(Se)){if(Gt(ie)||Yr(ie)){P(Se,To(void 0));return}}else{if(Gt(ie))if(ho.delete(Se),jo>Re){P(Se,To(void 0));return}else return gi.add(Se),P(Se,wa(C)),Bi(ke,ie,!1,{fetcherSubmission:C,preventScrollReset:v});if(Yr(ie)){k(Se,Xe,ie.error);return}}if(Fo(ie))throw xr(400,{type:"defer-action"});let Pe=et.navigation.location||et.location,l=mi(S.history,Pe,re.signal),p=lt||Ne,b=et.navigation.state!=="idle"?g(p,et.navigation.location,st):et.matches;R(b,"Didn't find any matches after fetcher action");let _=++_o;oi.set(Se,_);let j=wa(C,ie.data);et.fetchers.set(Se,j);let[oe,Ce]=Nt(S.history,et,b,C,Pe,!1,Xt.v7_skipActionErrorRevalidation,Pi,Da,ri,Mo,Uo,gi,p,st,[It.route.id,ie]);Ce.filter(rn=>rn.key!==Se).forEach(rn=>{let Tn=rn.key,hr=et.fetchers.get(Tn),Tr=wa(void 0,hr?hr.data:void 0);et.fetchers.set(Tn,Tr),Ke(Tn),rn.controller&&ho.set(Tn,rn.controller)}),bo({fetchers:new Map(et.fetchers)});let Le=()=>Ce.forEach(rn=>Ke(rn.key));re.signal.addEventListener("abort",Le);let{loaderResults:qe,fetcherResults:Ve}=yield ws(et,b,oe,Ce,l);if(re.signal.aborted)return;re.signal.removeEventListener("abort",Le),oi.delete(Se),ho.delete(Se),Ce.forEach(rn=>ho.delete(rn.key));let Mt=aa(qe);if(Mt)return Bi(l,Mt.result,!1,{preventScrollReset:v});if(Mt=aa(Ve),Mt)return gi.add(Mt.key),Bi(l,Mt.result,!1,{preventScrollReset:v});let{loaderData:sn,errors:ur}=Si(et,b,qe,void 0,Ce,Ve,$i);if(et.fetchers.has(Se)){let rn=To(ie.data);et.fetchers.set(Se,rn)}xn(_),et.navigation.state==="loading"&&_>jo?(R(yr,"Expected pending action"),Gn&&Gn.abort(),zi(et.navigation.location,{matches:b,loaderData:sn,errors:ur,fetchers:new Map(et.fetchers)})):(bo({errors:ur,loaderData:Ei(et.loaderData,sn,b,ur),fetchers:new Map(et.fetchers)}),Pi=!1)})}function bs(Se,Xe,it,It,un,Dn,u,v,C){return Ir(this,null,function*(){let O=et.fetchers.get(Se);P(Se,wa(C,O?O.data:void 0),{flushSync:u});let V=new AbortController,re=mi(S.history,it,V.signal);if(Dn){let ie=yield Yo(un,new URL(re.url).pathname,re.signal,Se);if(ie.type==="aborted")return;if(ie.type==="error"){k(Se,Xe,ie.error,{flushSync:u});return}else if(ie.matches)un=ie.matches,It=Ni(un,it);else{k(Se,Xe,xr(404,{pathname:it}),{flushSync:u});return}}ho.set(Se,V);let ke=_o,Te=(yield Qa("loader",et,re,[It],un,Se))[It.route.id];if(Fo(Te)&&(Te=(yield ni(Te,re.signal,!0))||Te),ho.get(Se)===V&&ho.delete(Se),!re.signal.aborted){if(Mo.has(Se)){P(Se,To(void 0));return}if(Gt(Te))if(jo>ke){P(Se,To(void 0));return}else{gi.add(Se),yield Bi(re,Te,!1,{preventScrollReset:v});return}if(Yr(Te)){k(Se,Xe,Te.error);return}R(!Fo(Te),"Unhandled fetcher deferred data"),P(Se,To(Te.data))}})}function Bi(Se,Xe,it,It){return Ir(this,null,function*(){let{submission:un,fetcherSubmission:Dn,preventScrollReset:u,replace:v}=It===void 0?{}:It;Xe.response.headers.has("X-Remix-Revalidate")&&(Pi=!0);let C=Xe.response.headers.get("Location");R(C,"Expected a Location header on the redirect Response"),C=hi(C,new URL(Se.url),st,S.history);let O=se(et.location,C,{_isRedirect:!0});if(q){let ie=!1;if(Xe.response.headers.has("X-Remix-Reload-Document"))ie=!0;else if(ko.test(C)){const Pe=S.history.createURL(C);ie=Pe.origin!==D.location.origin||gn(Pe.pathname,st)==null}if(ie){v?D.location.replace(C):D.location.assign(C);return}}Gn=null;let V=v===!0||Xe.response.headers.has("X-Remix-Replace")?E.Replace:E.Push,{formMethod:re,formAction:ke,formEncType:Re}=et.navigation;!un&&!Dn&&re&&ke&&Re&&(un=Xo(et.navigation));let Te=un||Dn;if(Zn.has(Xe.response.status)&&Te&&Fr(Te.formMethod))yield wo(V,O,{submission:F({},Te,{formAction:C}),preventScrollReset:u||ro,enableViewTransition:it?oo:void 0});else{let ie=ma(O,un);yield wo(V,O,{overrideNavigation:ie,fetcherSubmission:Dn,preventScrollReset:u||ro,enableViewTransition:it?oo:void 0})}})}function Qa(Se,Xe,it,It,un,Dn){return Ir(this,null,function*(){let u,v={};try{u=yield Xr(Dt,Se,Xe,it,It,un,Dn,Me,le)}catch(C){return It.forEach(O=>{v[O.route.id]={type:ve.error,error:C}}),v}for(let[C,O]of Object.entries(u))if(ha(O)){let V=O.result;v[C]={type:ve.redirect,response:pi(V,it,C,un,st,Xt.v7_relativeSplatPath)}}else v[C]=yield bn(O);return v})}function ws(Se,Xe,it,It,un){return Ir(this,null,function*(){let Dn=Se.matches,u=Qa("loader",Se,un,it,Xe,null),v=Promise.all(It.map(V=>Ir(null,null,function*(){if(V.matches&&V.match&&V.controller){let ke=(yield Qa("loader",Se,mi(S.history,V.path,V.controller.signal),[V.match],V.matches,V.key))[V.match.route.id];return{[V.key]:ke}}else return Promise.resolve({[V.key]:{type:ve.error,error:xr(404,{pathname:V.path})}})}))),C=yield u,O=(yield v).reduce((V,re)=>Object.assign(V,re),{});return yield Promise.all([ji(Xe,C,un.signal,Dn,Se.loaderData),Br(Xe,O,It)]),{loaderResults:C,fetcherResults:O}})}function Na(){Pi=!0,Da.push(...pe()),Uo.forEach((Se,Xe)=>{ho.has(Xe)&&ri.add(Xe),Ke(Xe)})}function P(Se,Xe,it){it===void 0&&(it={}),et.fetchers.set(Se,Xe),bo({fetchers:new Map(et.fetchers)},{flushSync:(it&&it.flushSync)===!0})}function k(Se,Xe,it,It){It===void 0&&(It={});let un=Sr(et.matches,Xe);ne(Se),bo({errors:{[un.route.id]:it},fetchers:new Map(et.fetchers)},{flushSync:(It&&It.flushSync)===!0})}function H(Se){return va.set(Se,(va.get(Se)||0)+1),Mo.has(Se)&&Mo.delete(Se),et.fetchers.get(Se)||Bo}function ne(Se){let Xe=et.fetchers.get(Se);ho.has(Se)&&!(Xe&&Xe.state==="loading"&&oi.has(Se))&&Ke(Se),Uo.delete(Se),oi.delete(Se),gi.delete(Se),Xt.v7_fetcherPersist&&Mo.delete(Se),ri.delete(Se),et.fetchers.delete(Se)}function Ae(Se){let Xe=(va.get(Se)||0)-1;Xe<=0?(va.delete(Se),Mo.add(Se),Xt.v7_fetcherPersist||ne(Se)):va.set(Se,Xe),bo({fetchers:new Map(et.fetchers)})}function Ke(Se){let Xe=ho.get(Se);Xe&&(Xe.abort(),ho.delete(Se))}function $e(Se){for(let Xe of Se){let it=H(Xe),It=To(it.data);et.fetchers.set(Xe,It)}}function yt(){let Se=[],Xe=!1;for(let it of gi){let It=et.fetchers.get(it);R(It,"Expected fetcher: "+it),It.state==="loading"&&(gi.delete(it),Se.push(it),Xe=!0)}return $e(Se),Xe}function xn(Se){let Xe=[];for(let[it,It]of oi)if(It<Se){let un=et.fetchers.get(it);R(un,"Expected fetcher: "+it),un.state==="loading"&&(Ke(it),oi.delete(it),Xe.push(it))}return $e(Xe),Xe.length>0}function Ht(Se,Xe){let it=et.blockers.get(Se)||co;return Ur.get(Se)!==Xe&&Ur.set(Se,Xe),it}function Ft(Se){et.blockers.delete(Se),Ur.delete(Se)}function On(Se,Xe){let it=et.blockers.get(Se)||co;R(it.state==="unblocked"&&Xe.state==="blocked"||it.state==="blocked"&&Xe.state==="blocked"||it.state==="blocked"&&Xe.state==="proceeding"||it.state==="blocked"&&Xe.state==="unblocked"||it.state==="proceeding"&&Xe.state==="unblocked","Invalid blocker state transition: "+it.state+" -> "+Xe.state);let It=new Map(et.blockers);It.set(Se,Xe),bo({blockers:It})}function zr(Se){let{currentLocation:Xe,nextLocation:it,historyAction:It}=Se;if(Ur.size===0)return;Ur.size>1&&z(!1,"A router only supports one blocker at a time");let un=Array.from(Ur.entries()),[Dn,u]=un[un.length-1],v=et.blockers.get(Dn);if(!(v&&v.state==="proceeding")&&u({currentLocation:Xe,nextLocation:it,historyAction:It}))return Dn}function Do(Se){let Xe=xr(404,{pathname:Se}),it=lt||Ne,{matches:It,route:un}=bi(it);return pe(),{notFoundMatches:It,route:un,error:Xe}}function pe(Se){let Xe=[];return $i.forEach((it,It)=>{(!Se||Se(It))&&(it.cancel(),Xe.push(It),$i.delete(It))}),Xe}function jt(Se,Xe,it){if(nn=Se,Cn=Xe,tn=it||null,!pr&&et.navigation===Kr){pr=!0;let It=qo(et.location,et.matches);It!=null&&bo({restoreScrollPosition:It})}return()=>{nn=null,Cn=null,tn=null}}function Fe(Se,Xe){return tn&&tn(Se,Xe.map(It=>Ee(It,et.loaderData)))||Se.key}function zo(Se,Xe){if(nn&&Cn){let it=Fe(Se,Xe);nn[it]=Cn()}}function qo(Se,Xe){if(nn){let it=Fe(Se,Xe),It=nn[it];if(typeof It=="number")return It}return null}function K(Se,Xe,it){if(Vt)if(Se){if(Object.keys(Se[0].params).length>0)return{active:!0,matches:Be(Xe,it,st,!0)}}else return{active:!0,matches:Be(Xe,it,st,!0)||[]};return{active:!1,matches:null}}function Yo(Se,Xe,it,It){return Ir(this,null,function*(){if(!Vt)return{type:"success",matches:Se};let un=Se;for(;;){let Dn=lt==null,u=lt||Ne,v=Me;try{yield Vt({signal:it,path:Xe,matches:un,fetcherKey:It,patch:(V,re)=>{it.aborted||fr(V,re,u,v,le)}})}catch(V){return{type:"error",error:V,partialMatches:un}}finally{Dn&&!it.aborted&&(Ne=[...Ne])}if(it.aborted)return{type:"aborted"};let C=g(u,Xe,st);if(C)return{type:"success",matches:C};let O=Be(u,Xe,st,!0);if(!O||un.length===O.length&&un.every((V,re)=>V.route.id===O[re].route.id))return{type:"success",matches:null};un=O}})}function Ii(Se){Me={},lt=ee(Se,le,void 0,Me)}function wi(Se,Xe){let it=lt==null;fr(Se,Xe,lt||Ne,Me,le),it&&(Ne=[...Ne],bo({}))}return ao={get basename(){return st},get future(){return Xt},get state(){return et},get routes(){return Ne},get window(){return D},initialize:Ia,subscribe:Ma,enableScrollRestoration:jt,navigate:Gi,fetch:Yi,revalidate:La,createHref:Se=>S.history.createHref(Se),encodeLocation:Se=>S.history.encodeLocation(Se),getFetcher:H,deleteFetcher:Ae,dispose:ta,getBlocker:Ht,deleteBlocker:Ft,patchRoutes:wi,_internalFetchControllers:ho,_internalActiveDeferreds:$i,_internalSetRoutes:Ii},ao}const _r=Symbol("deferred");function io(S,D){R(S.length>0,"You must provide a non-empty routes array to createStaticHandler");let q={},ue=(D?D.basename:null)||"/",le;if(D!=null&&D.mapRouteProperties)le=D.mapRouteProperties;else if(D!=null&&D.detectErrorBoundary){let _t=D.detectErrorBoundary;le=nn=>({hasErrorBoundary:_t(nn)})}else le=Cr;let Me=F({v7_relativeSplatPath:!1,v7_throwAbortReason:!1},D?D.future:null),Ne=ee(S,le,void 0,q);function lt(_t,nn){return Ir(this,null,function*(){let{requestContext:tn,skipLoaderErrorBubbling:Cn,dataStrategy:pr}=nn===void 0?{}:nn,jn=new URL(_t.url),lr=_t.method,fn=se("",ge(jn),null,"default"),kr=g(Ne,fn,ue);if(!sa(lr)&&lr!=="HEAD"){let et=xr(405,{method:lr}),{matches:yr,route:ro}=bi(Ne);return{basename:ue,location:fn,matches:yr,loaderData:{},actionData:null,errors:{[ro.id]:et},statusCode:et.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}else if(!kr){let et=xr(404,{pathname:fn.pathname}),{matches:yr,route:ro}=bi(Ne);return{basename:ue,location:fn,matches:yr,loaderData:{},actionData:null,errors:{[ro.id]:et},statusCode:et.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}let ao=yield Dt(_t,fn,kr,tn,pr||null,Cn===!0,null);return Ri(ao)?ao:F({location:fn,basename:ue},ao)})}function st(_t,nn){return Ir(this,null,function*(){let{routeId:tn,requestContext:Cn,dataStrategy:pr}=nn===void 0?{}:nn,jn=new URL(_t.url),lr=_t.method,fn=se("",ge(jn),null,"default"),kr=g(Ne,fn,ue);if(!sa(lr)&&lr!=="HEAD"&&lr!=="OPTIONS")throw xr(405,{method:lr});if(!kr)throw xr(404,{pathname:fn.pathname});let ao=tn?kr.find(Gn=>Gn.route.id===tn):Ni(kr,fn);if(tn&&!ao)throw xr(403,{pathname:fn.pathname,routeId:tn});if(!ao)throw xr(404,{pathname:fn.pathname});let et=yield Dt(_t,fn,kr,Cn,pr||null,!1,ao);if(Ri(et))return et;let yr=et.errors?Object.values(et.errors)[0]:void 0;if(yr!==void 0)throw yr;if(et.actionData)return Object.values(et.actionData)[0];if(et.loaderData){var ro;let Gn=Object.values(et.loaderData)[0];return(ro=et.activeDeferreds)!=null&&ro[ao.route.id]&&(Gn[_r]=et.activeDeferreds[ao.route.id]),Gn}})}function Dt(_t,nn,tn,Cn,pr,jn,lr){return Ir(this,null,function*(){R(_t.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(Fr(_t.method.toLowerCase()))return yield Vt(_t,tn,lr||Ni(tn,nn),Cn,pr,jn,lr!=null);let fn=yield Xt(_t,tn,Cn,pr,jn,lr);return Ri(fn)?fn:F({},fn,{actionData:null,actionHeaders:{}})}catch(fn){if(Wr(fn)&&Ri(fn.result)){if(fn.type===ve.error)throw fn.result;return fn.result}if(Oo(fn))return fn;throw fn}})}function Vt(_t,nn,tn,Cn,pr,jn,lr){return Ir(this,null,function*(){let fn;if(!tn.route.action&&!tn.route.lazy){let et=xr(405,{method:_t.method,pathname:new URL(_t.url).pathname,routeId:tn.route.id});if(lr)throw et;fn={type:ve.error,error:et}}else fn=(yield yn("action",_t,[tn],nn,lr,Cn,pr))[tn.route.id],_t.signal.aborted&&fi(_t,lr,Me);if(Gt(fn))throw new Response(null,{status:fn.response.status,headers:{Location:fn.response.headers.get("Location")}});if(Fo(fn)){let et=xr(400,{type:"defer-action"});if(lr)throw et;fn={type:ve.error,error:et}}if(lr){if(Yr(fn))throw fn.error;return{matches:[tn],loaderData:{},actionData:{[tn.route.id]:fn.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}let kr=new Request(_t.url,{headers:_t.headers,redirect:_t.redirect,signal:_t.signal});if(Yr(fn)){let et=jn?tn:Sr(nn,tn.route.id),yr=yield Xt(kr,nn,Cn,pr,jn,null,[et.route.id,fn]);return F({},yr,{statusCode:$n(fn.error)?fn.error.status:fn.statusCode!=null?fn.statusCode:500,actionData:null,actionHeaders:F({},fn.headers?{[tn.route.id]:fn.headers}:{})})}let ao=yield Xt(kr,nn,Cn,pr,jn,null);return F({},ao,{actionData:{[tn.route.id]:fn.data}},fn.statusCode?{statusCode:fn.statusCode}:{},{actionHeaders:fn.headers?{[tn.route.id]:fn.headers}:{}})})}function Xt(_t,nn,tn,Cn,pr,jn,lr){return Ir(this,null,function*(){let fn=jn!=null;if(fn&&!(jn!=null&&jn.route.loader)&&!(jn!=null&&jn.route.lazy))throw xr(400,{method:_t.method,pathname:new URL(_t.url).pathname,routeId:jn==null?void 0:jn.route.id});let ao=(jn?[jn]:lr&&Yr(lr[1])?Ct(nn,lr[0]):nn).filter(oo=>oo.route.loader||oo.route.lazy);if(ao.length===0)return{matches:nn,loaderData:nn.reduce((oo,Ro)=>Object.assign(oo,{[Ro.route.id]:null}),{}),errors:lr&&Yr(lr[1])?{[lr[0]]:lr[1].error}:null,statusCode:200,loaderHeaders:{},activeDeferreds:null};let et=yield yn("loader",_t,ao,nn,fn,tn,Cn);_t.signal.aborted&&fi(_t,fn,Me);let yr=new Map,ro=fa(nn,et,lr,yr,pr),Gn=new Set(ao.map(oo=>oo.route.id));return nn.forEach(oo=>{Gn.has(oo.route.id)||(ro.loaderData[oo.route.id]=null)}),F({},ro,{matches:nn,activeDeferreds:yr.size>0?Object.fromEntries(yr.entries()):null})})}function yn(_t,nn,tn,Cn,pr,jn,lr){return Ir(this,null,function*(){let fn=yield Xr(lr||Fn,_t,null,nn,tn,Cn,null,q,le,jn),kr={};return yield Promise.all(Cn.map(ao=>Ir(null,null,function*(){if(!(ao.route.id in fn))return;let et=fn[ao.route.id];if(ha(et)){let yr=et.result;throw pi(yr,nn,ao.route.id,Cn,ue,Me.v7_relativeSplatPath)}if(Ri(et.result)&&pr)throw et;kr[ao.route.id]=yield bn(et)}))),kr})}return{dataRoutes:Ne,query:lt,queryRoute:st}}function Mr(S,D,q){return F({},D,{statusCode:$n(q)?q.status:500,errors:{[D._deepestRenderedBoundaryId||S[0].id]:q}})}function fi(S,D,q){if(q.v7_throwAbortReason&&S.signal.reason!==void 0)throw S.signal.reason;let ue=D?"queryRoute":"query";throw new Error(ue+"() call aborted: "+S.method+" "+S.url)}function Ji(S){return S!=null&&("formData"in S&&S.formData!=null||"body"in S&&S.body!==void 0)}function Qe(S,D,q,ue,le,Me,Ne,lt){let st,Dt;if(Ne){st=[];for(let Xt of D)if(st.push(Xt),Xt.route.id===Ne){Dt=Xt;break}}else st=D,Dt=D[D.length-1];let Vt=ct(le||".",mt(st,Me),gn(S.pathname,q)||S.pathname,lt==="path");if(le==null&&(Vt.search=S.search,Vt.hash=S.hash),(le==null||le===""||le===".")&&Dt){let Xt=Io(Vt.search);if(Dt.route.index&&!Xt)Vt.search=Vt.search?Vt.search.replace(/^\?/,"?index&"):"?index";else if(!Dt.route.index&&Xt){let yn=new URLSearchParams(Vt.search),_t=yn.getAll("index");yn.delete("index"),_t.filter(tn=>tn).forEach(tn=>yn.append("index",tn));let nn=yn.toString();Vt.search=nn?"?"+nn:""}}return ue&&q!=="/"&&(Vt.pathname=Vt.pathname==="/"?q:Sn([q,Vt.pathname])),ge(Vt)}function Ye(S,D,q,ue){if(!ue||!Ji(ue))return{path:q};if(ue.formMethod&&!sa(ue.formMethod))return{path:q,error:xr(405,{method:ue.formMethod})};let le=()=>({path:q,error:xr(400,{type:"invalid-body"})}),Me=ue.formMethod||"get",Ne=S?Me.toUpperCase():Me.toLowerCase(),lt=Oi(q);if(ue.body!==void 0){if(ue.formEncType==="text/plain"){if(!Fr(Ne))return le();let yn=typeof ue.body=="string"?ue.body:ue.body instanceof FormData||ue.body instanceof URLSearchParams?Array.from(ue.body.entries()).reduce((_t,nn)=>{let[tn,Cn]=nn;return""+_t+tn+"="+Cn+`
`},""):String(ue.body);return{path:q,submission:{formMethod:Ne,formAction:lt,formEncType:ue.formEncType,formData:void 0,json:void 0,text:yn}}}else if(ue.formEncType==="application/json"){if(!Fr(Ne))return le();try{let yn=typeof ue.body=="string"?JSON.parse(ue.body):ue.body;return{path:q,submission:{formMethod:Ne,formAction:lt,formEncType:ue.formEncType,formData:void 0,json:yn,text:void 0}}}catch(yn){return le()}}}R(typeof FormData=="function","FormData is not available in this environment");let st,Dt;if(ue.formData)st=po(ue.formData),Dt=ue.formData;else if(ue.body instanceof FormData)st=po(ue.body),Dt=ue.body;else if(ue.body instanceof URLSearchParams)st=ue.body,Dt=vi(st);else if(ue.body==null)st=new URLSearchParams,Dt=new FormData;else try{st=new URLSearchParams(ue.body),Dt=vi(st)}catch(yn){return le()}let Vt={formMethod:Ne,formAction:lt,formEncType:ue&&ue.formEncType||"application/x-www-form-urlencoded",formData:Dt,json:void 0,text:void 0};if(Fr(Vt.formMethod))return{path:q,submission:Vt};let Xt=ye(q);return D&&Xt.search&&Io(Xt.search)&&st.append("index",""),Xt.search="?"+st,{path:ge(Xt),submission:Vt}}function Ct(S,D,q){q===void 0&&(q=!1);let ue=S.findIndex(le=>le.route.id===D);return ue>=0?S.slice(0,q?ue+1:ue):S}function Nt(S,D,q,ue,le,Me,Ne,lt,st,Dt,Vt,Xt,yn,_t,nn,tn){let Cn=tn?Yr(tn[1])?tn[1].error:tn[1].data:void 0,pr=S.createURL(D.location),jn=S.createURL(le),lr=q;Me&&D.errors?lr=Ct(q,Object.keys(D.errors)[0],!0):tn&&Yr(tn[1])&&(lr=Ct(q,tn[0]));let fn=tn?tn[1].statusCode:void 0,kr=Ne&&fn&&fn>=400,ao=lr.filter((yr,ro)=>{let{route:Gn}=yr;if(Gn.lazy)return!0;if(Gn.loader==null)return!1;if(Me)return qt(Gn,D.loaderData,D.errors);if(En(D.loaderData,D.matches[ro],yr)||st.some(Ao=>Ao===yr.route.id))return!0;let oo=D.matches[ro],Ro=yr;return Yn(yr,F({currentUrl:pr,currentParams:oo.params,nextUrl:jn,nextParams:Ro.params},ue,{actionResult:Cn,actionStatus:fn,defaultShouldRevalidate:kr?!1:lt||pr.pathname+pr.search===jn.pathname+jn.search||pr.search!==jn.search||wn(oo,Ro)}))}),et=[];return Xt.forEach((yr,ro)=>{if(Me||!q.some(Ki=>Ki.route.id===yr.routeId)||Vt.has(ro))return;let Gn=g(_t,yr.path,nn);if(!Gn){et.push({key:ro,routeId:yr.routeId,path:yr.path,matches:null,match:null,controller:null});return}let oo=D.fetchers.get(ro),Ro=Ni(Gn,yr.path),Ao=!1;yn.has(ro)?Ao=!1:Dt.has(ro)?(Dt.delete(ro),Ao=!0):oo&&oo.state!=="idle"&&oo.data===void 0?Ao=lt:Ao=Yn(Ro,F({currentUrl:pr,currentParams:D.matches[D.matches.length-1].params,nextUrl:jn,nextParams:q[q.length-1].params},ue,{actionResult:Cn,actionStatus:fn,defaultShouldRevalidate:kr?!1:lt})),Ao&&et.push({key:ro,routeId:yr.routeId,path:yr.path,matches:Gn,match:Ro,controller:new AbortController})}),[ao,et]}function qt(S,D,q){if(S.lazy)return!0;if(!S.loader)return!1;let ue=D!=null&&D[S.id]!==void 0,le=q!=null&&q[S.id]!==void 0;return!ue&&le?!1:typeof S.loader=="function"&&S.loader.hydrate===!0?!0:!ue&&!le}function En(S,D,q){let ue=!D||q.route.id!==D.route.id,le=S[q.route.id]===void 0;return ue||le}function wn(S,D){let q=S.route.path;return S.pathname!==D.pathname||q!=null&&q.endsWith("*")&&S.params["*"]!==D.params["*"]}function Yn(S,D){if(S.route.shouldRevalidate){let q=S.route.shouldRevalidate(D);if(typeof q=="boolean")return q}return D.defaultShouldRevalidate}function fr(S,D,q,ue,le){var Me;let Ne;if(S){let Dt=ue[S];R(Dt,"No route found to patch children into: routeId = "+S),Dt.children||(Dt.children=[]),Ne=Dt.children}else Ne=q;let lt=D.filter(Dt=>!Ne.some(Vt=>gr(Dt,Vt))),st=ee(lt,le,[S||"_","patch",String(((Me=Ne)==null?void 0:Me.length)||"0")],ue);Ne.push(...st)}function gr(S,D){return"id"in S&&"id"in D&&S.id===D.id?!0:S.index===D.index&&S.path===D.path&&S.caseSensitive===D.caseSensitive?(!S.children||S.children.length===0)&&(!D.children||D.children.length===0)?!0:S.children.every((q,ue)=>{var le;return(le=D.children)==null?void 0:le.some(Me=>gr(q,Me))}):!1}function rr(S,D,q){return Ir(this,null,function*(){if(!S.lazy)return;let ue=yield S.lazy();if(!S.lazy)return;let le=q[S.id];R(le,"No route found in manifest");let Me={};for(let Ne in ue){let st=le[Ne]!==void 0&&Ne!=="hasErrorBoundary";z(!st,'Route "'+le.id+'" has a static property "'+Ne+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+Ne+'" will be ignored.')),!st&&!ae.has(Ne)&&(Me[Ne]=ue[Ne])}Object.assign(le,Me),Object.assign(le,F({},D(le),{lazy:void 0}))})}function Fn(S){return Ir(this,null,function*(){let{matches:D}=S,q=D.filter(le=>le.shouldLoad);return(yield Promise.all(q.map(le=>le.resolve()))).reduce((le,Me,Ne)=>Object.assign(le,{[q[Ne].route.id]:Me}),{})})}function Xr(S,D,q,ue,le,Me,Ne,lt,st,Dt){return Ir(this,null,function*(){let Vt=Me.map(_t=>_t.route.lazy?rr(_t.route,st,lt):void 0),Xt=Me.map((_t,nn)=>{let tn=Vt[nn],Cn=le.some(jn=>jn.route.id===_t.route.id);return F({},_t,{shouldLoad:Cn,resolve:jn=>Ir(null,null,function*(){return jn&&ue.method==="GET"&&(_t.route.lazy||_t.route.loader)&&(Cn=!0),Cn?fo(D,ue,_t,tn,jn,Dt):Promise.resolve({type:ve.data,result:void 0})})})}),yn=yield S({matches:Xt,request:ue,params:Me[0].params,fetcherKey:Ne,context:Dt});try{yield Promise.all(Vt)}catch(_t){}return yn})}function fo(S,D,q,ue,le,Me){return Ir(this,null,function*(){let Ne,lt,st=Dt=>{let Vt,Xt=new Promise((nn,tn)=>Vt=tn);lt=()=>Vt(),D.signal.addEventListener("abort",lt);let yn=nn=>typeof Dt!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+S+'" [routeId: '+q.route.id+"]"))):Dt({request:D,params:q.params,context:Me},...nn!==void 0?[nn]:[]),_t=Ir(null,null,function*(){try{return{type:"data",result:yield le?le(tn=>yn(tn)):yn()}}catch(nn){return{type:"error",result:nn}}});return Promise.race([_t,Xt])};try{let Dt=q.route[S];if(ue)if(Dt){let Vt,[Xt]=yield Promise.all([st(Dt).catch(yn=>{Vt=yn}),ue]);if(Vt!==void 0)throw Vt;Ne=Xt}else if(yield ue,Dt=q.route[S],Dt)Ne=yield st(Dt);else if(S==="action"){let Vt=new URL(D.url),Xt=Vt.pathname+Vt.search;throw xr(405,{method:D.method,pathname:Xt,routeId:q.route.id})}else return{type:ve.data,result:void 0};else if(Dt)Ne=yield st(Dt);else{let Vt=new URL(D.url),Xt=Vt.pathname+Vt.search;throw xr(404,{pathname:Xt})}R(Ne.result!==void 0,"You defined "+(S==="action"?"an action":"a loader")+" for route "+('"'+q.route.id+"\" but didn't return anything from your `"+S+"` ")+"function. Please return a value or `null`.")}catch(Dt){return{type:ve.error,result:Dt}}finally{lt&&D.signal.removeEventListener("abort",lt)}return Ne})}function bn(S){return Ir(this,null,function*(){let{result:D,type:q}=S;if(Ri(D)){let Xt;try{let yn=D.headers.get("Content-Type");yn&&/\bapplication\/json\b/.test(yn)?D.body==null?Xt=null:Xt=yield D.json():Xt=yield D.text()}catch(yn){return{type:ve.error,error:yn}}return q===ve.error?{type:ve.error,error:new vr(D.status,D.statusText,Xt),statusCode:D.status,headers:D.headers}:{type:ve.data,data:Xt,statusCode:D.status,headers:D.headers}}if(q===ve.error){if(ea(D)){var ue,le;if(D.data instanceof Error){var Me,Ne;return{type:ve.error,error:D.data,statusCode:(Me=D.init)==null?void 0:Me.status,headers:(Ne=D.init)!=null&&Ne.headers?new Headers(D.init.headers):void 0}}return{type:ve.error,error:new vr(((ue=D.init)==null?void 0:ue.status)||500,void 0,D.data),statusCode:$n(D)?D.status:void 0,headers:(le=D.init)!=null&&le.headers?new Headers(D.init.headers):void 0}}return{type:ve.error,error:D,statusCode:$n(D)?D.status:void 0}}if(Xa(D)){var lt,st;return{type:ve.deferred,deferredData:D,statusCode:(lt=D.init)==null?void 0:lt.status,headers:((st=D.init)==null?void 0:st.headers)&&new Headers(D.init.headers)}}if(ea(D)){var Dt,Vt;return{type:ve.data,data:D.data,statusCode:(Dt=D.init)==null?void 0:Dt.status,headers:(Vt=D.init)!=null&&Vt.headers?new Headers(D.init.headers):void 0}}return{type:ve.data,data:D}})}function pi(S,D,q,ue,le,Me){let Ne=S.headers.get("Location");if(R(Ne,"Redirects returned/thrown from loaders/actions must have a Location header"),!ko.test(Ne)){let lt=ue.slice(0,ue.findIndex(st=>st.route.id===q)+1);Ne=Qe(new URL(D.url),lt,le,!0,Ne,Me),S.headers.set("Location",Ne)}return S}function hi(S,D,q,ue){let le=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ko.test(S)){let Me=S,Ne=Me.startsWith("//")?new URL(D.protocol+Me):new URL(Me);if(le.includes(Ne.protocol))throw new Error("Invalid redirect location");let lt=gn(Ne.pathname,q)!=null;if(Ne.origin===D.origin&&lt)return Ne.pathname+Ne.search+Ne.hash}try{let Me=ue.createURL(S);if(le.includes(Me.protocol))throw new Error("Invalid redirect location")}catch(Me){}return S}function mi(S,D,q,ue){let le=S.createURL(Oi(D)).toString(),Me={signal:q};if(ue&&Fr(ue.formMethod)){let{formMethod:Ne,formEncType:lt}=ue;Me.method=Ne.toUpperCase(),lt==="application/json"?(Me.headers=new Headers({"Content-Type":lt}),Me.body=JSON.stringify(ue.json)):lt==="text/plain"?Me.body=ue.text:lt==="application/x-www-form-urlencoded"&&ue.formData?Me.body=po(ue.formData):Me.body=ue.formData}return new Request(le,Me)}function po(S){let D=new URLSearchParams;for(let[q,ue]of S.entries())D.append(q,typeof ue=="string"?ue:ue.name);return D}function vi(S){let D=new FormData;for(let[q,ue]of S.entries())D.append(q,ue);return D}function fa(S,D,q,ue,le){let Me={},Ne=null,lt,st=!1,Dt={},Vt=q&&Yr(q[1])?q[1].error:void 0;return S.forEach(Xt=>{if(!(Xt.route.id in D))return;let yn=Xt.route.id,_t=D[yn];if(R(!Gt(_t),"Cannot handle redirect results in processLoaderData"),Yr(_t)){let nn=_t.error;if(Vt!==void 0&&(nn=Vt,Vt=void 0),Ne=Ne||{},le)Ne[yn]=nn;else{let tn=Sr(S,yn);Ne[tn.route.id]==null&&(Ne[tn.route.id]=nn)}Me[yn]=void 0,st||(st=!0,lt=$n(_t.error)?_t.error.status:500),_t.headers&&(Dt[yn]=_t.headers)}else Fo(_t)?(ue.set(yn,_t.deferredData),Me[yn]=_t.deferredData.data,_t.statusCode!=null&&_t.statusCode!==200&&!st&&(lt=_t.statusCode),_t.headers&&(Dt[yn]=_t.headers)):(Me[yn]=_t.data,_t.statusCode&&_t.statusCode!==200&&!st&&(lt=_t.statusCode),_t.headers&&(Dt[yn]=_t.headers))}),Vt!==void 0&&q&&(Ne={[q[0]]:Vt},Me[q[0]]=void 0),{loaderData:Me,errors:Ne,statusCode:lt||200,loaderHeaders:Dt}}function Si(S,D,q,ue,le,Me,Ne){let{loaderData:lt,errors:st}=fa(D,q,ue,Ne,!1);return le.forEach(Dt=>{let{key:Vt,match:Xt,controller:yn}=Dt,_t=Me[Vt];if(R(_t,"Did not find corresponding fetcher result"),!(yn&&yn.signal.aborted))if(Yr(_t)){let nn=Sr(S.matches,Xt==null?void 0:Xt.route.id);st&&st[nn.route.id]||(st=F({},st,{[nn.route.id]:_t.error})),S.fetchers.delete(Vt)}else if(Gt(_t))R(!1,"Unhandled fetcher revalidation redirect");else if(Fo(_t))R(!1,"Unhandled fetcher deferred data");else{let nn=To(_t.data);S.fetchers.set(Vt,nn)}}),{loaderData:lt,errors:st}}function Ei(S,D,q,ue){let le=F({},D);for(let Me of q){let Ne=Me.route.id;if(D.hasOwnProperty(Ne)?D[Ne]!==void 0&&(le[Ne]=D[Ne]):S[Ne]!==void 0&&Me.route.loader&&(le[Ne]=S[Ne]),ue&&ue.hasOwnProperty(Ne))break}return le}function ja(S){return S?Yr(S[1])?{actionData:{}}:{actionData:{[S[0]]:S[1].data}}:{}}function Sr(S,D){return(D?S.slice(0,S.findIndex(ue=>ue.route.id===D)+1):[...S]).reverse().find(ue=>ue.route.hasErrorBoundary===!0)||S[0]}function bi(S){let D=S.length===1?S[0]:S.find(q=>q.index||!q.path||q.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:D}],route:D}}function xr(S,D){let{pathname:q,routeId:ue,method:le,type:Me,message:Ne}=D===void 0?{}:D,lt="Unknown Server Error",st="Unknown @remix-run/router error";return S===400?(lt="Bad Request",le&&q&&ue?st="You made a "+le+' request to "'+q+'" but '+('did not provide a `loader` for route "'+ue+'", ')+"so there is no way to handle the request.":Me==="defer-action"?st="defer() is not supported in actions":Me==="invalid-body"&&(st="Unable to encode submission body")):S===403?(lt="Forbidden",st='Route "'+ue+'" does not match URL "'+q+'"'):S===404?(lt="Not Found",st='No route matches URL "'+q+'"'):S===405&&(lt="Method Not Allowed",le&&q&&ue?st="You made a "+le.toUpperCase()+' request to "'+q+'" but '+('did not provide an `action` for route "'+ue+'", ')+"so there is no way to handle the request.":le&&(st='Invalid request method "'+le.toUpperCase()+'"')),new vr(S||500,lt,new Error(st),!0)}function aa(S){let D=Object.entries(S);for(let q=D.length-1;q>=0;q--){let[ue,le]=D[q];if(Gt(le))return{key:ue,result:le}}}function Oi(S){let D=typeof S=="string"?ye(S):S;return ge(F({},D,{hash:""}))}function pa(S,D){return S.pathname!==D.pathname||S.search!==D.search?!1:S.hash===""?D.hash!=="":S.hash===D.hash?!0:D.hash!==""}function Wr(S){return S!=null&&typeof S=="object"&&"type"in S&&"result"in S&&(S.type===ve.data||S.type===ve.error)}function ha(S){return Ri(S.result)&&Ar.has(S.result.status)}function Fo(S){return S.type===ve.deferred}function Yr(S){return S.type===ve.error}function Gt(S){return(S&&S.type)===ve.redirect}function ea(S){return typeof S=="object"&&S!=null&&"type"in S&&"data"in S&&"init"in S&&S.type==="DataWithResponseInit"}function Xa(S){let D=S;return D&&typeof D=="object"&&typeof D.data=="object"&&typeof D.subscribe=="function"&&typeof D.cancel=="function"&&typeof D.resolveData=="function"}function Ri(S){return S!=null&&typeof S.status=="number"&&typeof S.statusText=="string"&&typeof S.headers=="object"&&typeof S.body!="undefined"}function Oo(S){if(!Ri(S))return!1;let D=S.status,q=S.headers.get("Location");return D>=300&&D<=399&&q!=null}function sa(S){return Ze.has(S.toLowerCase())}function Fr(S){return wr.has(S.toLowerCase())}function ji(S,D,q,ue,le){return Ir(this,null,function*(){let Me=Object.entries(D);for(let Ne=0;Ne<Me.length;Ne++){let[lt,st]=Me[Ne],Dt=S.find(yn=>(yn==null?void 0:yn.route.id)===lt);if(!Dt)continue;let Vt=ue.find(yn=>yn.route.id===Dt.route.id),Xt=Vt!=null&&!wn(Vt,Dt)&&(le&&le[Dt.route.id])!==void 0;Fo(st)&&Xt&&(yield ni(st,q,!1).then(yn=>{yn&&(D[lt]=yn)}))}})}function Br(S,D,q){return Ir(this,null,function*(){for(let ue=0;ue<q.length;ue++){let{key:le,routeId:Me,controller:Ne}=q[ue],lt=D[le];S.find(Dt=>(Dt==null?void 0:Dt.route.id)===Me)&&Fo(lt)&&(R(Ne,"Expected an AbortController for revalidating fetcher deferred result"),yield ni(lt,Ne.signal,!0).then(Dt=>{Dt&&(D[le]=Dt)}))}})}function ni(S,D,q){return Ir(this,null,function*(){if(q===void 0&&(q=!1),!(yield S.deferredData.resolveData(D))){if(q)try{return{type:ve.data,data:S.deferredData.unwrappedData}}catch(le){return{type:ve.error,error:le}}return{type:ve.data,data:S.deferredData.data}}})}function Io(S){return new URLSearchParams(S).getAll("index").some(D=>D==="")}function Ni(S,D){let q=typeof D=="string"?ye(D).search:D.search;if(S[S.length-1].route.index&&Io(q||""))return S[S.length-1];let ue=nt(S);return ue[ue.length-1]}function Xo(S){let{formMethod:D,formAction:q,formEncType:ue,text:le,formData:Me,json:Ne}=S;if(!(!D||!q||!ue)){if(le!=null)return{formMethod:D,formAction:q,formEncType:ue,formData:void 0,json:void 0,text:le};if(Me!=null)return{formMethod:D,formAction:q,formEncType:ue,formData:Me,json:void 0,text:void 0};if(Ne!==void 0)return{formMethod:D,formAction:q,formEncType:ue,formData:void 0,json:Ne,text:void 0}}}function ma(S,D){return D?{state:"loading",location:S,formMethod:D.formMethod,formAction:D.formAction,formEncType:D.formEncType,formData:D.formData,json:D.json,text:D.text}:{state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function no(S,D){return{state:"submitting",location:S,formMethod:D.formMethod,formAction:D.formAction,formEncType:D.formEncType,formData:D.formData,json:D.json,text:D.text}}function wa(S,D){return S?{state:"loading",formMethod:S.formMethod,formAction:S.formAction,formEncType:S.formEncType,formData:S.formData,json:S.json,text:S.text,data:D}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:D}}function or(S,D){return{state:"submitting",formMethod:S.formMethod,formAction:S.formAction,formEncType:S.formEncType,formData:S.formData,json:S.json,text:S.text,data:D?D.data:void 0}}function To(S){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:S}}function Hi(S,D){try{let q=S.sessionStorage.getItem(to);if(q){let ue=JSON.parse(q);for(let[le,Me]of Object.entries(ue||{}))Me&&Array.isArray(Me)&&D.set(le,new Set(Me||[]))}}catch(q){}}function Di(S,D){if(D.size>0){let q={};for(let[ue,le]of D)q[ue]=[...le];try{S.sessionStorage.setItem(to,JSON.stringify(q))}catch(ue){z(!1,"Failed to save applied view transitions in sessionStorage ("+ue+").")}}}},9118(M,f,y){"use strict";y.d(f,{A:()=>d});var F=y(6540),E;function x(){return x=Object.assign?Object.assign.bind():function(J){for(var R=1;R<arguments.length;R++){var z=arguments[R];for(var X in z)({}).hasOwnProperty.call(z,X)&&(J[X]=z[X])}return J},x.apply(null,arguments)}var m=function(R){return F.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:21,height:21,fill:"none"},R),E||(E=F.createElement("path",{stroke:"#A2A2A2",strokeLinecap:"round",strokeWidth:2,d:"m20.046 20.046-4.508-4.515zm-2.01-10.55a8.54 8.54 0 1 1-17.081 0 8.54 8.54 0 0 1 17.08 0z"})))};const d=m},49(M,f,y){"use strict";y.d(f,{A:()=>d});var F=y(6540),E;function x(){return x=Object.assign?Object.assign.bind():function(J){for(var R=1;R<arguments.length;R++){var z=arguments[R];for(var X in z)({}).hasOwnProperty.call(z,X)&&(J[X]=z[X])}return J},x.apply(null,arguments)}var m=function(R){return F.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},R),E||(E=F.createElement("path",{fill:"#5896C0",stroke:"#5896C0",strokeWidth:.2,d:"m5.802 11.15 3.05-3.048a.85.85 0 1 0-1.204-1.204l-4.5 4.5zm0 0h8.448a.85.85 0 0 1 0 1.7H5.802l3.05 3.048a.85.85 0 1 1-1.204 1.204l-4.5-4.5zm-2.838 1.176a.9.9 0 0 0 .184.276zm0 0A.9.9 0 0 1 2.899 12m.065.326L2.899 12m0 0a.9.9 0 0 1 .065-.326M2.899 12l.065-.326m0 0a.9.9 0 0 1 .184-.276zM19.35 22.351a.85.85 0 0 1-1.451-.601V2.25a.85.85 0 0 1 1.7 0v19.5a.85.85 0 0 1-.249.601Z"})))};const d=m},1719(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`],sourceRoot:""}]);const J=d},4701(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`html,
body,
#content {
  position: fixed;
  width: 100%;
  height: 100%;
}

html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

#content {
  display: flex;
  flex-direction: column;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-white);
  color: var(--color-dark-grey);
  transition: background-color 0.3s ease, color 0.3s ease;
}

img {
  max-width: 100%;
  height: auto;
}

input,
button,
textarea,
select {
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
  word-break: break-word;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`,"",{version:3,sources:["webpack://./src/assets/styles/core/base.css"],names:[],mappings:"AAAA;;;EAGE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,oCAAoC;EACpC,6BAA6B;EAC7B,uDAAuD;AACzD;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;;;;EAIE,iCAAiC;AACnC;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB",sourcesContent:[`html,
body,
#content {
  position: fixed;
  width: 100%;
  height: 100%;
}

html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

#content {
  display: flex;
  flex-direction: column;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-white);
  color: var(--color-dark-grey);
  transition: background-color 0.3s ease, color 0.3s ease;
}

img {
  max-width: 100%;
  height: auto;
}

input,
button,
textarea,
select {
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
  word-break: break-word;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`],sourceRoot:""}]);const J=d},206(M,f,y){"use strict";y.d(f,{A:()=>be});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=y(6514),J=y(8685),R=y(1719),z=y(4701),X=m()(E());X.i(d.A),X.i(J.A),X.i(R.A),X.i(z.A),X.push([M.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const be=X},6514(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`:root {

  --color-white: #ffffff;
  --color-beige: #fafafa;
  --color-smoky-white: #f8f8f8;
  --color-light-grey: #f6f6f6;
  --color-decomposition-hover: #f1f1f1;


  --color-beige-grey: #a2a2a2;
  --color-dull-grey: #737373;
  --color-dark-grey: #323232;
  --color-dirty-grey: #454545;
  --color-silver: #c0c0c0;
  --color-soft-grey: #ececec;


  --color-navy-blue: #5896c0;
  --color-dark-blue: #7ec0ee;
  --color-grey-blue: #d7e6eb;


  --color-border-blue: #f3f7f8;
  --color-border-white: #ebebeb;
  --color-border-disabled: #eeeeee;
  --color-border-grey: #ededed;
  --color-popup-border: #f2f2f2;


  --color-red: #d81616;
  --color-error-message: #f14747;
  --color-error-notification: #f6cab1;
  --color-warning-notification: #feffe2;
  --color-success-notification: #eeffe8;


  --color-icon-hover: #7e7256;
  --color-button-disabled: #c0c0c0;
  --color-button-hover-bg: #4980a5;
  --color-button-secondary-hover: #f8f8f8;
  --color-button-secondary-disabled: #a6a6a6;
  --color-card-shadow: rgba(0, 0, 0, 0.14);
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-card-subtitle-subsystem: #f56060;
  --color-card-subtitle-kb: #7fbca9;
  --color-card-subtitle-interface: #f59e60;
  --color-card-subtitle-problemsolver: #5f95e5;
  --color-dependency-border: #d7d7d7;
  --color-dependency-text: #4678b9;
  --color-scrollbar-thumb: #c8c8c8;
  --color-library-border: #e8e8e8;
  --color-filter-shadow: rgba(0, 0, 0, 0.14);
  --color-spinner: #5896c0;
  --color-button-outline: #5896c0;
  --color-scg-popup: #323232;
  --color-card-text: #565656;
  --color-card-install-link-hover: #265c80;
  --color-input-border-hover: #e8e8e8;
  --color-chat-query-bg: #ffffff;
  --color-chat-query-shadow: rgba(0, 0, 0, 0.12);
  --color-chat-answer-bg: #f4f6f8;
  --color-chat-answer-border: #e7ebef;
  --color-chat-answer-shadow: rgba(0, 0, 0, 0.1);
  --color-chat-answer-hover-shadow: rgba(0, 0, 0, 0.14);
}

:root[data-theme="dark"] {

  --color-white: #1e1e1e;
  --color-beige: #252526;
  --color-smoky-white: #2d2d2d;
  --color-light-grey: #333333;
  --color-decomposition-hover: #3c3c3c;


  --color-beige-grey: #aaaaaa;
  --color-dull-grey: #aaaaaa;
  --color-dark-grey: #e0e0e0;
  --color-dirty-grey: #d0d0d0;
  --color-silver: #888888;
  --color-soft-grey: #3c3c3c;


  --color-navy-blue: #3f7fa8;
  --color-dark-blue: #5f9ac1;
  --color-grey-blue: #354555;


  --color-border-blue: #363636;
  --color-border-white: #404040;
  --color-border-disabled: #404040;
  --color-border-grey: #404040;
  --color-popup-border: #404040;


  --color-red: #ff6b6b;
  --color-error-message: #ff6b6b;
  --color-error-notification: #4a3020;
  --color-warning-notification: #3a3a20;
  --color-success-notification: #203a20;


  --color-icon-hover: #c0b090;
  --color-button-disabled: #555555;
  --color-button-hover-bg: #6aa5d0;
  --color-button-secondary-hover: #3c3c3c;
  --color-button-secondary-disabled: #555555;
  --color-card-shadow: rgba(0, 0, 0, 0.5);
  --color-overlay: rgba(0, 0, 0, 0.7);
  --color-card-subtitle-subsystem: #f56060;
  --color-card-subtitle-kb: #7fbca9;
  --color-card-subtitle-interface: #f59e60;
  --color-card-subtitle-problemsolver: #5f95e5;
  --color-dependency-border: #555555;
  --color-dependency-text: #78b0f0;
  --color-scrollbar-thumb: #555555;
  --color-library-border: #404040;
  --color-filter-shadow: rgba(0, 0, 0, 0.5);
  --color-spinner: #6db3e0;
  --color-button-outline: #6db3e0;
  --color-scg-popup: #e0e0e0;
  --color-card-text: #c0c0c0;
  --color-card-install-link-hover: #90d0ff;
  --color-input-border-hover: #555555;
  --color-chat-query-bg: #2a2f35;
  --color-chat-query-shadow: rgba(0, 0, 0, 0.28);
  --color-chat-answer-bg: #313840;
  --color-chat-answer-border: #434d57;
  --color-chat-answer-shadow: rgba(0, 0, 0, 0.22);
  --color-chat-answer-hover-shadow: rgba(0, 0, 0, 0.32);
}
`,"",{version:3,sources:["webpack://./src/assets/styles/variables/colors.css"],names:[],mappings:"AAAA;;EAEE,sBAAsB;EACtB,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,oCAAoC;;;EAGpC,2BAA2B;EAC3B,0BAA0B;EAC1B,0BAA0B;EAC1B,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;;;EAG1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;;;EAG1B,4BAA4B;EAC5B,6BAA6B;EAC7B,gCAAgC;EAChC,4BAA4B;EAC5B,6BAA6B;;;EAG7B,oBAAoB;EACpB,8BAA8B;EAC9B,mCAAmC;EACnC,qCAAqC;EACrC,qCAAqC;;;EAGrC,2BAA2B;EAC3B,gCAAgC;EAChC,gCAAgC;EAChC,uCAAuC;EACvC,0CAA0C;EAC1C,wCAAwC;EACxC,mCAAmC;EACnC,wCAAwC;EACxC,iCAAiC;EACjC,wCAAwC;EACxC,4CAA4C;EAC5C,kCAAkC;EAClC,gCAAgC;EAChC,gCAAgC;EAChC,+BAA+B;EAC/B,0CAA0C;EAC1C,wBAAwB;EACxB,+BAA+B;EAC/B,0BAA0B;EAC1B,0BAA0B;EAC1B,wCAAwC;EACxC,mCAAmC;EACnC,8BAA8B;EAC9B,8CAA8C;EAC9C,+BAA+B;EAC/B,mCAAmC;EACnC,8CAA8C;EAC9C,qDAAqD;AACvD;;AAEA;;EAEE,sBAAsB;EACtB,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,oCAAoC;;;EAGpC,2BAA2B;EAC3B,0BAA0B;EAC1B,0BAA0B;EAC1B,2BAA2B;EAC3B,uBAAuB;EACvB,0BAA0B;;;EAG1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;;;EAG1B,4BAA4B;EAC5B,6BAA6B;EAC7B,gCAAgC;EAChC,4BAA4B;EAC5B,6BAA6B;;;EAG7B,oBAAoB;EACpB,8BAA8B;EAC9B,mCAAmC;EACnC,qCAAqC;EACrC,qCAAqC;;;EAGrC,2BAA2B;EAC3B,gCAAgC;EAChC,gCAAgC;EAChC,uCAAuC;EACvC,0CAA0C;EAC1C,uCAAuC;EACvC,mCAAmC;EACnC,wCAAwC;EACxC,iCAAiC;EACjC,wCAAwC;EACxC,4CAA4C;EAC5C,kCAAkC;EAClC,gCAAgC;EAChC,gCAAgC;EAChC,+BAA+B;EAC/B,yCAAyC;EACzC,wBAAwB;EACxB,+BAA+B;EAC/B,0BAA0B;EAC1B,0BAA0B;EAC1B,wCAAwC;EACxC,mCAAmC;EACnC,8BAA8B;EAC9B,8CAA8C;EAC9C,+BAA+B;EAC/B,mCAAmC;EACnC,+CAA+C;EAC/C,qDAAqD;AACvD",sourcesContent:[`:root {

  --color-white: #ffffff;
  --color-beige: #fafafa;
  --color-smoky-white: #f8f8f8;
  --color-light-grey: #f6f6f6;
  --color-decomposition-hover: #f1f1f1;


  --color-beige-grey: #a2a2a2;
  --color-dull-grey: #737373;
  --color-dark-grey: #323232;
  --color-dirty-grey: #454545;
  --color-silver: #c0c0c0;
  --color-soft-grey: #ececec;


  --color-navy-blue: #5896c0;
  --color-dark-blue: #7ec0ee;
  --color-grey-blue: #d7e6eb;


  --color-border-blue: #f3f7f8;
  --color-border-white: #ebebeb;
  --color-border-disabled: #eeeeee;
  --color-border-grey: #ededed;
  --color-popup-border: #f2f2f2;


  --color-red: #d81616;
  --color-error-message: #f14747;
  --color-error-notification: #f6cab1;
  --color-warning-notification: #feffe2;
  --color-success-notification: #eeffe8;


  --color-icon-hover: #7e7256;
  --color-button-disabled: #c0c0c0;
  --color-button-hover-bg: #4980a5;
  --color-button-secondary-hover: #f8f8f8;
  --color-button-secondary-disabled: #a6a6a6;
  --color-card-shadow: rgba(0, 0, 0, 0.14);
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-card-subtitle-subsystem: #f56060;
  --color-card-subtitle-kb: #7fbca9;
  --color-card-subtitle-interface: #f59e60;
  --color-card-subtitle-problemsolver: #5f95e5;
  --color-dependency-border: #d7d7d7;
  --color-dependency-text: #4678b9;
  --color-scrollbar-thumb: #c8c8c8;
  --color-library-border: #e8e8e8;
  --color-filter-shadow: rgba(0, 0, 0, 0.14);
  --color-spinner: #5896c0;
  --color-button-outline: #5896c0;
  --color-scg-popup: #323232;
  --color-card-text: #565656;
  --color-card-install-link-hover: #265c80;
  --color-input-border-hover: #e8e8e8;
  --color-chat-query-bg: #ffffff;
  --color-chat-query-shadow: rgba(0, 0, 0, 0.12);
  --color-chat-answer-bg: #f4f6f8;
  --color-chat-answer-border: #e7ebef;
  --color-chat-answer-shadow: rgba(0, 0, 0, 0.1);
  --color-chat-answer-hover-shadow: rgba(0, 0, 0, 0.14);
}

:root[data-theme="dark"] {

  --color-white: #1e1e1e;
  --color-beige: #252526;
  --color-smoky-white: #2d2d2d;
  --color-light-grey: #333333;
  --color-decomposition-hover: #3c3c3c;


  --color-beige-grey: #aaaaaa;
  --color-dull-grey: #aaaaaa;
  --color-dark-grey: #e0e0e0;
  --color-dirty-grey: #d0d0d0;
  --color-silver: #888888;
  --color-soft-grey: #3c3c3c;


  --color-navy-blue: #3f7fa8;
  --color-dark-blue: #5f9ac1;
  --color-grey-blue: #354555;


  --color-border-blue: #363636;
  --color-border-white: #404040;
  --color-border-disabled: #404040;
  --color-border-grey: #404040;
  --color-popup-border: #404040;


  --color-red: #ff6b6b;
  --color-error-message: #ff6b6b;
  --color-error-notification: #4a3020;
  --color-warning-notification: #3a3a20;
  --color-success-notification: #203a20;


  --color-icon-hover: #c0b090;
  --color-button-disabled: #555555;
  --color-button-hover-bg: #6aa5d0;
  --color-button-secondary-hover: #3c3c3c;
  --color-button-secondary-disabled: #555555;
  --color-card-shadow: rgba(0, 0, 0, 0.5);
  --color-overlay: rgba(0, 0, 0, 0.7);
  --color-card-subtitle-subsystem: #f56060;
  --color-card-subtitle-kb: #7fbca9;
  --color-card-subtitle-interface: #f59e60;
  --color-card-subtitle-problemsolver: #5f95e5;
  --color-dependency-border: #555555;
  --color-dependency-text: #78b0f0;
  --color-scrollbar-thumb: #555555;
  --color-library-border: #404040;
  --color-filter-shadow: rgba(0, 0, 0, 0.5);
  --color-spinner: #6db3e0;
  --color-button-outline: #6db3e0;
  --color-scg-popup: #e0e0e0;
  --color-card-text: #c0c0c0;
  --color-card-install-link-hover: #90d0ff;
  --color-input-border-hover: #555555;
  --color-chat-query-bg: #2a2f35;
  --color-chat-query-shadow: rgba(0, 0, 0, 0.28);
  --color-chat-answer-bg: #313840;
  --color-chat-answer-border: #434d57;
  --color-chat-answer-shadow: rgba(0, 0, 0, 0.22);
  --color-chat-answer-hover-shadow: rgba(0, 0, 0, 0.32);
}
`],sourceRoot:""}]);const J=d},8685(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`:root {
  --header-height: 80px;
  --footer-height: 68px;
  --main-content-height: calc(100vh - 80px - 36px);
  --accordions-height: calc(100vh - 364px);
  --request-info-height: calc(100vh - 286px);
  --logo-search-pages-menu-height: 340px;
  --logo-search-create-requests-height: 257px;
  --logo-search-height: 179px;
}
`,"",{version:3,sources:["webpack://./src/assets/styles/variables/common.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,gDAAgD;EAChD,wCAAwC;EACxC,0CAA0C;EAC1C,sCAAsC;EACtC,2CAA2C;EAC3C,2BAA2B;AAC7B",sourcesContent:[`:root {
  --header-height: 80px;
  --footer-height: 68px;
  --main-content-height: calc(100vh - 80px - 36px);
  --accordions-height: calc(100vh - 364px);
  --request-info-height: calc(100vh - 286px);
  --logo-search-pages-menu-height: 340px;
  --logo-search-create-requests-height: 257px;
  --logo-search-height: 179px;
}
`],sourceRoot:""}]);const J=d},5773(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`@keyframes Mg0U66nLq7icKarC8QUx {
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

@keyframes PHYzMUg4SjZo_7u0CoGV {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.EMEUIZuB33p7LMCkY2ag {
  display: flex;
  justify-content: space-between;
  margin-right: 28px;
  height: 36px;
}

.e_CHbtZnB5n205ZX1Lgk {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 2px 0;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: var(--color-beige-grey);
}

.vrRzBvLX1MqJZgM7p38z {
  margin-right: 6px;
}

.w7jsR34OQcxB2CEiBKcN {
  display: flex;
  justify-content: center;
  margin-left: 12px;
  transform: rotate(0);
  transition: transform ease 0.3s;
}

.TBKEpaHVs_U_G5z_CQZg {
  transform: rotate(180deg);
}

.l1CxVuJ07oQ6EX5cecZm {
  padding: 8px 16px 0 24px;
  animation: Mg0U66nLq7icKarC8QUx ease 0.3s both;
}

.XQesDDRBdwlNzYLbvlt0 {
  animation: PHYzMUg4SjZo_7u0CoGV ease 0.3s both;
}
`,"",{version:3,sources:["webpack://./src/components/Accordion/Accordion.module.css"],names:[],mappings:"AAAA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,oBAAoB;EACpB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,8CAAyC;AAC3C;;AAEA;EACE,8CAA2C;AAC7C",sourcesContent:[`@keyframes fade-out-to-top {
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

@keyframes fade-in-to-bottom {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.headerWrapper {
  display: flex;
  justify-content: space-between;
  margin-right: 28px;
  height: 36px;
}

.leftContent {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 2px 0;
  cursor: pointer;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: var(--color-beige-grey);
}

.icon {
  margin-right: 6px;
}

.chevronDownWrapper {
  display: flex;
  justify-content: center;
  margin-left: 12px;
  transform: rotate(0);
  transition: transform ease 0.3s;
}

.chevronDownWrapper_expanded {
  transform: rotate(180deg);
}

.contentWrapper {
  padding: 8px 16px 0 24px;
  animation: fade-out-to-top ease 0.3s both;
}

.contentWrapper_expanded {
  animation: fade-in-to-bottom ease 0.3s both;
}
`],sourceRoot:""}]),d.locals={headerWrapper:"EMEUIZuB33p7LMCkY2ag",leftContent:"e_CHbtZnB5n205ZX1Lgk",icon:"vrRzBvLX1MqJZgM7p38z",chevronDownWrapper:"w7jsR34OQcxB2CEiBKcN",chevronDownWrapper_expanded:"TBKEpaHVs_U_G5z_CQZg",contentWrapper:"l1CxVuJ07oQ6EX5cecZm","fade-out-to-top":"Mg0U66nLq7icKarC8QUx",contentWrapper_expanded:"XQesDDRBdwlNzYLbvlt0","fade-in-to-bottom":"PHYzMUg4SjZo_7u0CoGV"};const J=d},5469(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.O6GjA7ZzAhHTKcBMKakZ {
  margin: 1.5rem auto;
  width: min(980px, calc(100% - 3rem));
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
}

.GRDdVwkFyi5GkWrxtWci {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: calc(50% + 100px);
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.MEbRxiw9cSHGgsiYsujp {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  padding: 4px 8px 20px 2px;
  scroll-behavior: smooth;
}

.j2xHVGXr2fH3kPGBE9p2 {
  margin-top: auto;
  position: sticky;
  bottom: 0;
  padding-top: 8px;
  background: linear-gradient(to top, var(--color-beige), rgba(0, 0, 0, 0));
}`,"",{version:3,sources:["webpack://./src/components/AskAnswer/AskAnswer.module.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,QAAQ;EACR,uBAAuB;EACvB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,gBAAgB;EAChB,yEAAyE;AAC3E",sourcesContent:[`.pageWrapper {
  margin: 1.5rem auto;
  width: min(980px, calc(100% - 3rem));
  display: flex;
  flex-direction: column;
  height: calc(100vh - 160px);
}

.spinnerWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: calc(50% + 100px);
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.history {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  padding: 4px 8px 20px 2px;
  scroll-behavior: smooth;
}

.inputQueryBar {
  margin-top: auto;
  position: sticky;
  bottom: 0;
  padding-top: 8px;
  background: linear-gradient(to top, var(--color-beige), rgba(0, 0, 0, 0));
}`],sourceRoot:""}]),d.locals={pageWrapper:"O6GjA7ZzAhHTKcBMKakZ",spinnerWrapper:"GRDdVwkFyi5GkWrxtWci",history:"MEbRxiw9cSHGgsiYsujp",inputQueryBar:"j2xHVGXr2fH3kPGBE9p2"};const J=d},2881(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.IIfOeNwOAwzifjiktTc2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
}

.uaHa0Axn31u2UYuHX3oD {
  align-self: flex-end;
  max-width: min(85%, 760px);
  padding: 10px 14px;
  border-radius: 14px;
  background: var(--color-chat-query-bg);
  box-shadow: 0 2px 8px var(--color-chat-query-shadow);
  color: var(--color-dark-grey);
  font-size: 16px;
  line-height: 1.45;
  word-break: break-word;
}

.Qxt1c_llxIpske9ZJ4kg {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--color-dull-grey);
}

.Ohw3YqB1ZPyET4mMhfrI {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--color-chat-answer-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.Ohw3YqB1ZPyET4mMhfrI svg {
  transition: filter 0.2s ease;
}

.R6IUMOLgCoN5TNpYbmTC {
  max-width: min(88%, 820px);
  padding: 12px 14px;
  border-radius: 14px;
  background: var(--color-chat-answer-bg);
  border: 1px solid var(--color-chat-answer-border);
  color: var(--color-dark-grey);
  font-size: 17px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.Qxt1c_llxIpske9ZJ4kg:hover .Ohw3YqB1ZPyET4mMhfrI {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--color-chat-answer-hover-shadow);
}

.Qxt1c_llxIpske9ZJ4kg:hover .R6IUMOLgCoN5TNpYbmTC {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px var(--color-chat-answer-hover-shadow);
}

:root[data-theme='dark'] .Ohw3YqB1ZPyET4mMhfrI svg {
  filter: saturate(0.78) brightness(0.9);
}`,"",{version:3,sources:["webpack://./src/components/AskAnswer/AskElement/AskElement.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;EAClB,mBAAmB;EACnB,sCAAsC;EACtC,oDAAoD;EACpD,6BAA6B;EAC7B,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,qDAAqD;EACrD,qDAAqD;AACvD;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,mBAAmB;EACnB,uCAAuC;EACvC,iDAAiD;EACjD,6BAA6B;EAC7B,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,qDAAqD;AACvD;;AAEA;EACE,2BAA2B;EAC3B,4DAA4D;AAC9D;;AAEA;EACE,2BAA2B;EAC3B,4DAA4D;AAC9D;;AAEA;EACE,sCAAsC;AACxC",sourcesContent:[`.elementWrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
}

.elementQuery {
  align-self: flex-end;
  max-width: min(85%, 760px);
  padding: 10px 14px;
  border-radius: 14px;
  background: var(--color-chat-query-bg);
  box-shadow: 0 2px 8px var(--color-chat-query-shadow);
  color: var(--color-dark-grey);
  font-size: 16px;
  line-height: 1.45;
  word-break: break-word;
}

.elementAnswer {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--color-dull-grey);
}

.iconWrapper {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--color-chat-answer-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.iconWrapper svg {
  transition: filter 0.2s ease;
}

.answerText {
  max-width: min(88%, 820px);
  padding: 12px 14px;
  border-radius: 14px;
  background: var(--color-chat-answer-bg);
  border: 1px solid var(--color-chat-answer-border);
  color: var(--color-dark-grey);
  font-size: 17px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.elementAnswer:hover .iconWrapper {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--color-chat-answer-hover-shadow);
}

.elementAnswer:hover .answerText {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px var(--color-chat-answer-hover-shadow);
}

:global(:root[data-theme='dark']) .iconWrapper svg {
  filter: saturate(0.78) brightness(0.9);
}`],sourceRoot:""}]),d.locals={elementWrapper:"IIfOeNwOAwzifjiktTc2",elementQuery:"uaHa0Axn31u2UYuHX3oD",elementAnswer:"Qxt1c_llxIpske9ZJ4kg",iconWrapper:"Ohw3YqB1ZPyET4mMhfrI",answerText:"R6IUMOLgCoN5TNpYbmTC"};const J=d},5317(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.K_BplJgOYrxQ7lBej5R3 {
  display: flex;
}

.frDG9YDHCKTmrO_ETKPw {
  width: 957px;
  height: 58px;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border-white);
  color: var(--color-dark-grey);
}

.frDG9YDHCKTmrO_ETKPw::placeholder {
  color: var(--color-beige-grey);
}

.frDG9YDHCKTmrO_ETKPw:focus {
  outline: none;
  border-color: var(--color-dark-blue);
}

.yVgFnr3BBL4pLWVCSl_V {
  margin-left: 12px;
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.yVgFnr3BBL4pLWVCSl_V:hover {
  background-color: var(--color-navy-blue);
}

.yVgFnr3BBL4pLWVCSl_V:active {
  background-color: var(--color-button-hover-bg);
}

.u8FpFGG8eLSflygNz4eB {
  margin-left: 12px;
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--color-navy-blue);
  color: var(--color-white);
  border: none;
  font-weight: 500;
}

.u8FpFGG8eLSflygNz4eB:hover {
  background-color: var(--color-button-hover-bg);
}

.u8FpFGG8eLSflygNz4eB:active {
  background-color: var(--color-dark-blue);
}`,"",{version:3,sources:["webpack://./src/components/AskInput/AskInput.module.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,oCAAoC;EACpC,2CAA2C;EAC3C,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,wCAAwC;EACxC,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,wCAAwC;EACxC,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,wCAAwC;AAC1C",sourcesContent:[`.inputWrapper {
  display: flex;
}

.dialogInput {
  width: 957px;
  height: 58px;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border-white);
  color: var(--color-dark-grey);
}

.dialogInput::placeholder {
  color: var(--color-beige-grey);
}

.dialogInput:focus {
  outline: none;
  border-color: var(--color-dark-blue);
}

.dialogBoxButton {
  margin-left: 12px;
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.dialogBoxButton:hover {
  background-color: var(--color-navy-blue);
}

.dialogBoxButton:active {
  background-color: var(--color-button-hover-bg);
}

.inputButton {
  margin-left: 12px;
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--color-navy-blue);
  color: var(--color-white);
  border: none;
  font-weight: 500;
}

.inputButton:hover {
  background-color: var(--color-button-hover-bg);
}

.inputButton:active {
  background-color: var(--color-dark-blue);
}`],sourceRoot:""}]),d.locals={inputWrapper:"K_BplJgOYrxQ7lBej5R3",dialogInput:"frDG9YDHCKTmrO_ETKPw",dialogBoxButton:"yVgFnr3BBL4pLWVCSl_V",inputButton:"u8FpFGG8eLSflygNz4eB"};const J=d},9244(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.GJIQoZL5i7jR4GMM66KA {
  padding: 16px;
  color: var(--color-dark-grey);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: none;
  background: var(--color-light-grey);
}

.GJIQoZL5i7jR4GMM66KA:hover {
  background-color: var(--color-decomposition-hover);
}`,"",{version:3,sources:["webpack://./src/components/AskPage/AskHintButtons/AskHintButtons.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kDAAkD;AACpD",sourcesContent:[`.hintAskButton {
  padding: 16px;
  color: var(--color-dark-grey);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: none;
  background: var(--color-light-grey);
}

.hintAskButton:hover {
  background-color: var(--color-decomposition-hover);
}`],sourceRoot:""}]),d.locals={hintAskButton:"GJIQoZL5i7jR4GMM66KA"};const J=d},7489(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.RIn08AsOLQ6loU0d1SLZ {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bG979o0uc1NG0sYwnxH6 {
  margin-top: 150px;
  display: flex;
  flex-direction: center;
  align-items: center;
}

.NbBjxHjXqBjJuzvJL1n2 {
  color: var(--color-dark-grey);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.Cs33pzZYTMNBDCFjgDla {
  margin-top: 176px;
  display: flex;
  width: 822px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 36px;
  flex-wrap: wrap;
}

.RGfWkgbPxukRAFiy7k0P {
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  width: 1457px;
  padding: 24px 29px;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`,"",{version:3,sources:["webpack://./src/components/AskPage/AskPage.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX",sourcesContent:[`.pageWrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.askMessage {
  margin-top: 150px;
  display: flex;
  flex-direction: center;
  align-items: center;
}

.message {
  color: var(--color-dark-grey);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.suggestedQuestion {
  margin-top: 176px;
  display: flex;
  width: 822px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 36px;
  flex-wrap: wrap;
}

.dialogBox {
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  width: 1457px;
  padding: 24px 29px;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`],sourceRoot:""}]),d.locals={pageWrapper:"RIn08AsOLQ6loU0d1SLZ",askMessage:"bG979o0uc1NG0sYwnxH6",message:"NbBjxHjXqBjJuzvJL1n2",suggestedQuestion:"Cs33pzZYTMNBDCFjgDla",dialogBox:"RGfWkgbPxukRAFiy7k0P"};const J=d},9503(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.AisLsJaE_AWnIhDlnTUV {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  outline: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease 0s;
}

.RxdlJxOb8k6NgT7FgeLm {
  border-radius: 10px;
  border: 0;
  background: var(--color-navy-blue);
  color: var(--color-white);
}

.RxdlJxOb8k6NgT7FgeLm:hover {
  color: var(--color-white);
  background: var(--color-button-hover-bg);
  text-decoration: none;
}

.RxdlJxOb8k6NgT7FgeLm:active {
  background: var(--color-button-hover-bg);
  outline: 2px solid var(--color-button-outline);
  outline-offset: -2px;
}

.RxdlJxOb8k6NgT7FgeLm:disabled {
  background-color: var(--color-button-disabled);
}

.jmKfSZ7gGAF6cQq4uiWD {
  border-radius: 10px;
  border: 0;
  background: var(--color-navy-blue);
  padding: 8px 36px;
  font-size: 26px;
  line-height: 30px;
  color: var(--color-white);
}

.jmKfSZ7gGAF6cQq4uiWD:hover {
  color: var(--color-white);
  background: var(--color-button-hover-bg);
  text-decoration: none;
}

.jmKfSZ7gGAF6cQq4uiWD:active {
  background: var(--color-button-hover-bg);
  outline: 2px solid var(--color-button-outline);
  outline-offset: -2px;
}

.jmKfSZ7gGAF6cQq4uiWD:disabled {
  background-color: var(--color-button-disabled);
  pointer-events: none;
  cursor: default;
}

.sVIWdsx05IwSrXTHcYVK {
  border: 2px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: var(--color-navy-blue);
}

.sVIWdsx05IwSrXTHcYVK:hover {
  border: 2px solid var(--color-button-secondary-hover);
  background-color: var(--color-button-secondary-hover);
  color: var(--color-navy-blue);
  text-decoration: none;
}

.sVIWdsx05IwSrXTHcYVK:active {
  border: 2px solid var(--color-white);
  outline-offset: -2px;
}

.sVIWdsx05IwSrXTHcYVK:disabled {
  background-color: var(--color-white);
  color: var(--color-button-secondary-disabled);
  pointer-events: none;
  cursor: default;
}
`,"",{version:3,sources:["webpack://./src/components/Button/Button.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,8CAA8C;EAC9C,oBAAoB;AACtB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,kCAAkC;EAClC,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,8CAA8C;EAC9C,oBAAoB;AACtB;;AAEA;EACE,8CAA8C;EAC9C,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,qDAAqD;EACrD,qDAAqD;EACrD,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,6CAA6C;EAC7C,oBAAoB;EACpB,eAAe;AACjB",sourcesContent:[`.button {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  outline: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease 0s;
}

.button_primaryAction {
  border-radius: 10px;
  border: 0;
  background: var(--color-navy-blue);
  color: var(--color-white);
}

.button_primaryAction:hover {
  color: var(--color-white);
  background: var(--color-button-hover-bg);
  text-decoration: none;
}

.button_primaryAction:active {
  background: var(--color-button-hover-bg);
  outline: 2px solid var(--color-button-outline);
  outline-offset: -2px;
}

.button_primaryAction:disabled {
  background-color: var(--color-button-disabled);
}

.button_primaryLarge {
  border-radius: 10px;
  border: 0;
  background: var(--color-navy-blue);
  padding: 8px 36px;
  font-size: 26px;
  line-height: 30px;
  color: var(--color-white);
}

.button_primaryLarge:hover {
  color: var(--color-white);
  background: var(--color-button-hover-bg);
  text-decoration: none;
}

.button_primaryLarge:active {
  background: var(--color-button-hover-bg);
  outline: 2px solid var(--color-button-outline);
  outline-offset: -2px;
}

.button_primaryLarge:disabled {
  background-color: var(--color-button-disabled);
  pointer-events: none;
  cursor: default;
}

.button_secondaryAction {
  border: 2px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: var(--color-navy-blue);
}

.button_secondaryAction:hover {
  border: 2px solid var(--color-button-secondary-hover);
  background-color: var(--color-button-secondary-hover);
  color: var(--color-navy-blue);
  text-decoration: none;
}

.button_secondaryAction:active {
  border: 2px solid var(--color-white);
  outline-offset: -2px;
}

.button_secondaryAction:disabled {
  background-color: var(--color-white);
  color: var(--color-button-secondary-disabled);
  pointer-events: none;
  cursor: default;
}
`],sourceRoot:""}]),d.locals={button:"AisLsJaE_AWnIhDlnTUV",button_primaryAction:"RxdlJxOb8k6NgT7FgeLm",button_primaryLarge:"jmKfSZ7gGAF6cQq4uiWD",button_secondaryAction:"sVIWdsx05IwSrXTHcYVK"};const J=d},5377(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.okEtrxKbhc_LdIHPX5OG {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: fit-content;
  min-width: 380px;
  height: fit-content;
  padding: 16px;
  background: var(--color-white);
  border: 1px solid var(--color-popup-border);
  box-shadow: 0 2px 4px var(--color-card-shadow);
  border-radius: 12px;
}

.StOzid2liHnkv9NYXNGz {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-dark-grey);
}

.XPnsF0pUBikxNfVGIqDK {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.AuQJM5XNfETCKW7vqUqO {
  width: fit-content;
}
`,"",{version:3,sources:["webpack://./src/components/ConfirmAction/ConfirmAction.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,2CAA2C;EAC3C,8CAA8C;EAC9C,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB",sourcesContent:[`.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: fit-content;
  min-width: 380px;
  height: fit-content;
  padding: 16px;
  background: var(--color-white);
  border: 1px solid var(--color-popup-border);
  box-shadow: 0 2px 4px var(--color-card-shadow);
  border-radius: 12px;
}

.title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-dark-grey);
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.button {
  width: fit-content;
}
`],sourceRoot:""}]),d.locals={wrapper:"okEtrxKbhc_LdIHPX5OG",title:"StOzid2liHnkv9NYXNGz",buttons:"XPnsF0pUBikxNfVGIqDK",button:"AuQJM5XNfETCKW7vqUqO"};const J=d},7669(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.Q7K_VFl779dkof5bQJYG {
  margin: 32px 14px 0 32px;
}

.sajkfEQR9SBAdcDLis1k {
  margin: 16px 154px;
}

.Q7K_VFl779dkof5bQJYG h4 {
  font-weight: 600;
  font-size: 24px;
  color: var(--color-dull-grey);
  margin: 0;
}

.Q7K_VFl779dkof5bQJYG p {
  margin: 8px 0;
  font-weight: 400;
  font-size: 20px;
  color: var(--color-dark-grey);
}

.DHaXXVCL0Uoh6ERAnswQ.DHaXXVCL0Uoh6ERAnswQ {
  width: fit-content;
  margin-top: 32px;
  gap: 13px;
  position: relative;
  z-index: 1;
}
`,"",{version:3,sources:["webpack://./src/components/ErrorBoundary/ErrorBoundary.module.css"],names:[],mappings:"AAAA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,UAAU;AACZ",sourcesContent:[`.wrap {
  margin: 32px 14px 0 32px;
}

.managmentWrap {
  margin: 16px 154px;
}

.wrap h4 {
  font-weight: 600;
  font-size: 24px;
  color: var(--color-dull-grey);
  margin: 0;
}

.wrap p {
  margin: 8px 0;
  font-weight: 400;
  font-size: 20px;
  color: var(--color-dark-grey);
}

.backButton.backButton {
  width: fit-content;
  margin-top: 32px;
  gap: 13px;
  position: relative;
  z-index: 1;
}
`],sourceRoot:""}]),d.locals={wrap:"Q7K_VFl779dkof5bQJYG",managmentWrap:"sajkfEQR9SBAdcDLis1k",backButton:"DHaXXVCL0Uoh6ERAnswQ"};const J=d},7435(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.LK8Ob5n6DHxgDN47o9ub {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 16px;
}

.TwIJ9c__7N0C5GDeplxL {
  width: 350px;
  height: calc(100vh - 80px - 68px);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 30px;
  padding-right: 12px;
  animation: CK7RXbq9ndcRr8O9ZbMG 0.3s ease both;
}

._ov2myoASuD3lDUGx9OA {
  animation: 0.3s ease-in-out both qYhG5kzJTJFQ6C23O0Az;
}

.SZHgg68_jJOIamVxqr2A {
  margin-bottom: 12px;
  padding: 8px 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  color: var(--color-dark-grey);
}

.SZHgg68_jJOIamVxqr2A:hover {
  background-color: var(--color-decomposition-hover);
  border-radius: 4px;
}

.rMxX8XGjGmDkgjnyMhp4 {
  background-color: var(--color-decomposition-hover);
  border-radius: 4px;
}
`,"",{version:3,sources:["webpack://./src/components/HistoryPanel/HistoryPanel.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,8CAAuC;AACzC;;AAEA;EACE,qDAA6C;AAC/C;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,kDAAkD;EAClD,kBAAkB;AACpB;;AAEA;EACE,kDAAkD;EAClD,kBAAkB;AACpB",sourcesContent:[`.historyPanelWrap {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 16px;
}

.historyList {
  width: 350px;
  height: calc(100vh - 80px - 68px);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 30px;
  padding-right: 12px;
  animation: fadeInFromTop 0.3s ease both;
}

.historyList_closing {
  animation: 0.3s ease-in-out both fadeOutToTop;
}

.historyBtn {
  margin-bottom: 12px;
  padding: 8px 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  color: var(--color-dark-grey);
}

.historyBtn:hover {
  background-color: var(--color-decomposition-hover);
  border-radius: 4px;
}

.historyBtnActive {
  background-color: var(--color-decomposition-hover);
  border-radius: 4px;
}
`],sourceRoot:""}]),d.locals={historyPanelWrap:"LK8Ob5n6DHxgDN47o9ub",historyList:"TwIJ9c__7N0C5GDeplxL",fadeInFromTop:"CK7RXbq9ndcRr8O9ZbMG",historyList_closing:"_ov2myoASuD3lDUGx9OA",fadeOutToTop:"qYhG5kzJTJFQ6C23O0Az",historyBtn:"SZHgg68_jJOIamVxqr2A",historyBtnActive:"rMxX8XGjGmDkgjnyMhp4"};const J=d},7090(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.CBM2eX9E5KnYxLFZngSu {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: 8px;
}
`,"",{version:3,sources:["webpack://./src/components/HistoryPanel/Skeleton/Skeleton.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB",sourcesContent:[`.root {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: 8px;
}
`],sourceRoot:""}]),d.locals={root:"CBM2eX9E5KnYxLFZngSu"};const J=d},7093(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.hQ3H3WWEM21uH24mIwLo {
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
}

.hQ3H3WWEM21uH24mIwLo path {
  transition: all ease 0.3s;
}

.hQ3H3WWEM21uH24mIwLo:hover path {
  fill: var(--color-icon-hover);
}

.COj8d1TdOM_scoXob75v {
  border-radius: 10px;
}

.COj8d1TdOM_scoXob75v:hover {
  background: var(--color-soft-grey);
}

.Bo1OZQqEqIqZb1O2fLNr {
  width: 36px;
  height: 36px;
}

.bhxtaO77gmtBAAPk2duG {
  width: 24px;
  height: 24px;
}

.XVYF2mWFvblwRXO387cJ {
  width: 16px;
  height: 16px;
}

.eTI0901U1QQI9Vm2Zls9 {
  pointer-events: none;
}
`,"",{version:3,sources:["webpack://./src/components/IconButton/IconButton.module.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB",sourcesContent:[`.iconButton {
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
}

.iconButton path {
  transition: all ease 0.3s;
}

.iconButton:hover path {
  fill: var(--color-icon-hover);
}

.iconButton_squared {
  border-radius: 10px;
}

.iconButton_squared:hover {
  background: var(--color-soft-grey);
}

.iconButton_l {
  width: 36px;
  height: 36px;
}

.iconButton_m {
  width: 24px;
  height: 24px;
}

.iconButton_s {
  width: 16px;
  height: 16px;
}

.iconButton_disabled {
  pointer-events: none;
}
`],sourceRoot:""}]),d.locals={iconButton:"hQ3H3WWEM21uH24mIwLo",iconButton_squared:"COj8d1TdOM_scoXob75v",iconButton_l:"Bo1OZQqEqIqZb1O2fLNr",iconButton_m:"bhxtaO77gmtBAAPk2duG",iconButton_s:"XVYF2mWFvblwRXO387cJ",iconButton_disabled:"eTI0901U1QQI9Vm2Zls9"};const J=d},7283(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.Iq6HOBBIzyeYuoExxEyG {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
}

.GC9Z04nytMQNgmmGgqoM {
  display: flex;
  justify-content: center;
  width: 100%;
}

.tHjrr1kNIaAspyMIoGdE {
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-silver);
  cursor: pointer;
}

.tHjrr1kNIaAspyMIoGdE:hover {
  outline: 2px solid var(--color-border-blue);
  background: var(--color-smoky-white);
}

.ZyKvj2S8etrD4NN7VgU1,
.WOx8rRzQ7ILtK_iWDaDA {
  padding: 4px 8px;
  border-radius: 4px;
}

.ZyKvj2S8etrD4NN7VgU1:active,
.WOx8rRzQ7ILtK_iWDaDA:active {
  outline: 2px solid var(--color-border-blue);
}

.r_zipNui5ZmFwWTyQPl0 {
  margin: 0 4px;
  border-left: 1px solid var(--color-silver);
}

.gnXxvEDohLo6IhReWwTk {
  color: var(--color-dark-grey);
  font-weight: 500;
}
`,"",{version:3,sources:["webpack://./src/components/Language/language.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,2CAA2C;EAC3C,oCAAoC;AACtC;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB",sourcesContent:[`.languageWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
}

.languages {
  display: flex;
  justify-content: center;
  width: 100%;
}

.language {
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-silver);
  cursor: pointer;
}

.language:hover {
  outline: 2px solid var(--color-border-blue);
  background: var(--color-smoky-white);
}

.engLanguage,
.rusLanguage {
  padding: 4px 8px;
  border-radius: 4px;
}

.engLanguage:active,
.rusLanguage:active {
  outline: 2px solid var(--color-border-blue);
}

.divider {
  margin: 0 4px;
  border-left: 1px solid var(--color-silver);
}

.activeLanguage {
  color: var(--color-dark-grey);
  font-weight: 500;
}
`],sourceRoot:""}]),d.locals={languageWrap:"Iq6HOBBIzyeYuoExxEyG",languages:"GC9Z04nytMQNgmmGgqoM",language:"tHjrr1kNIaAspyMIoGdE",engLanguage:"ZyKvj2S8etrD4NN7VgU1",rusLanguage:"WOx8rRzQ7ILtK_iWDaDA",divider:"r_zipNui5ZmFwWTyQPl0",activeLanguage:"gnXxvEDohLo6IhReWwTk"};const J=d},2387(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.fSS6r6Vu7tQuqkrOepUe {
  position: relative;
  display: grid;
  grid-template-columns: 463px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'logo  header'
    'sidebar  scn';
  min-height: 100%;
  background: var(--color-white);
}

.pKFCoI9tKPE5g_k39dKd {
  display: flex;
  align-items: center;
  justify-content: end;
  grid-area: header;
  width: 100%;
  padding: 0 24px 0 0;
}

.BagWfLWzQUXNkp5Fn0zf {
  grid-area: sidebar;
  width: 100%;
  padding: 26px 0 0 30px;
  background: var(--color-beige);
}

.Y8vSYMGZfcQyrQo2Rupi {
  height: 100px;
  width: 100%;
  grid-area: logo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: var(--color-beige);
  padding: 0 0 0 24px;
}

.pWtftL7V_Ve48VagFNQt {
  display: flex;
  align-items: center;
  gap: 16px;
}

.DAizogXPYNtY_pOZ7ErW {
  padding: 0 32px 10px 32px;
}

.fxjFwpoLp1D5swAzsysj {
  display: flex;
  padding-top: 36px;
  padding-left: 24px;
  grid-area: scn;
}

@media (max-width: 1365px) {
  .fSS6r6Vu7tQuqkrOepUe {
    grid-template-columns: 350px 1fr;
  }
}
`,"",{version:3,sources:["webpack://./src/components/Layout/Layout.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,gCAAgC;EAChC,4BAA4B;EAC5B;;kBAEgB;EAChB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE;IACE,gCAAgC;EAClC;AACF",sourcesContent:[`.root {
  position: relative;
  display: grid;
  grid-template-columns: 463px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'logo  header'
    'sidebar  scn';
  min-height: 100%;
  background: var(--color-white);
}

.header {
  display: flex;
  align-items: center;
  justify-content: end;
  grid-area: header;
  width: 100%;
  padding: 0 24px 0 0;
}

.sideBar {
  grid-area: sidebar;
  width: 100%;
  padding: 26px 0 0 30px;
  background: var(--color-beige);
}

.logoWrapper {
  height: 100px;
  width: 100%;
  grid-area: logo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: var(--color-beige);
  padding: 0 0 0 24px;
}

.headerControls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sideBarContent {
  padding: 0 32px 10px 32px;
}

.main {
  display: flex;
  padding-top: 36px;
  padding-left: 24px;
  grid-area: scn;
}

@media (max-width: 1365px) {
  .root {
    grid-template-columns: 350px 1fr;
  }
}
`],sourceRoot:""}]),d.locals={root:"fSS6r6Vu7tQuqkrOepUe",header:"pKFCoI9tKPE5g_k39dKd",sideBar:"BagWfLWzQUXNkp5Fn0zf",logoWrapper:"Y8vSYMGZfcQyrQo2Rupi",headerControls:"pWtftL7V_Ve48VagFNQt",sideBarContent:"DAizogXPYNtY_pOZ7ErW",main:"fxjFwpoLp1D5swAzsysj"};const J=d},6945(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.pr55WxxYYuDHYY7uIo4Q {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
  max-width: 510px;
  width: fit-content;
  padding: 17px 19px;
  box-shadow: 0 2px 4px var(--color-card-shadow);
}

.bzAdfN4JhDHtlTxsnyjC {
  background-color: var(--color-error-notification);
}

.zXnhoewbukwNZdpFxNle {
  background-color: var(--color-warning-notification);
}

.Sn4rSfGC5T5eB1piuRTO {
  background-color: var(--color-success-notification);
}

.EeDzl6V1cH_3CJnM7FHg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  gap: 8px;
}

.usy4bSWHMnOh0N0EFH9R {
  display: flex;
  align-items: center;
}

.npw2dnUZ_e2A5jTIqig_ {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-dark-grey);
}

.FlTnB_dwWHVAKXLLhFTq {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-dull-grey);
}

.swD6ZLSQorc5nw0WAUCJ {
  margin-right: 10px;
  flex-shrink: 0;
}

.LgGiaDWEtJt81mnkhzNo {
  flex-shrink: 0;
  margin-left: 39px;
}

.dPOoNuKcPeVHAdVKGJWC {
  margin-left: auto;
}
`,"",{version:3,sources:["webpack://./src/components/Notification/Notification.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,8CAA8C;AAChD;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:[`.notification {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
  max-width: 510px;
  width: fit-content;
  padding: 17px 19px;
  box-shadow: 0 2px 4px var(--color-card-shadow);
}

.error {
  background-color: var(--color-error-notification);
}

.warning {
  background-color: var(--color-warning-notification);
}

.success {
  background-color: var(--color-success-notification);
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  gap: 8px;
}

.main {
  display: flex;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-dark-grey);
}

.text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-dull-grey);
}

.icon {
  margin-right: 10px;
  flex-shrink: 0;
}

.close {
  flex-shrink: 0;
  margin-left: 39px;
}

.closeWithText {
  margin-left: auto;
}
`],sourceRoot:""}]),d.locals={notification:"pr55WxxYYuDHYY7uIo4Q",error:"bzAdfN4JhDHtlTxsnyjC",warning:"zXnhoewbukwNZdpFxNle",success:"Sn4rSfGC5T5eB1piuRTO",center:"EeDzl6V1cH_3CJnM7FHg",main:"usy4bSWHMnOh0N0EFH9R",title:"npw2dnUZ_e2A5jTIqig_",text:"FlTnB_dwWHVAKXLLhFTq",icon:"swD6ZLSQorc5nw0WAUCJ",close:"LgGiaDWEtJt81mnkhzNo",closeWithText:"dPOoNuKcPeVHAdVKGJWC"};const J=d},781(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.cRbkZiM_ESM2SU4nIhmO {
  position: absolute;
  height: calc(100vh - 80px - 36px);
  display: none;
}

.rbTLx2tXZ2rGhkNLTYNf {
  display: block;
}

.We9WZrqBMVsBgwhUGJ8A {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.uJxKNJDPGnhvKaQkWLqC {
  width: 100%;
  height: 100%;
  margin: -7px;
  border: 0;
}

.eXDKjMEmWZSPChPiBMAT {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-scg-popup);
}

.eXDKjMEmWZSPChPiBMAT b {
  font-weight: 500;
}

.ZDfERNX1Lxph5VRRmJ0A {
  width: 383px;
}

.vePM03kz_FQEI6_pAQJf {
  width: 344px;
}
`,"",{version:3,sources:["webpack://./src/components/Scg/Scg.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd",sourcesContent:[`.wrap {
  position: absolute;
  height: calc(100vh - 80px - 36px);
  display: none;
}

.wrapShow {
  display: block;
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.frame {
  width: 100%;
  height: 100%;
  margin: -7px;
  border: 0;
}

.popup {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--color-scg-popup);
}

.popup b {
  font-weight: 500;
}

.popupClear {
  width: 383px;
}

.popupNotClear {
  width: 344px;
}
`],sourceRoot:""}]),d.locals={wrap:"cRbkZiM_ESM2SU4nIhmO",wrapShow:"rbTLx2tXZ2rGhkNLTYNf",spinner:"We9WZrqBMVsBgwhUGJ8A",frame:"uJxKNJDPGnhvKaQkWLqC",popup:"eXDKjMEmWZSPChPiBMAT",popupClear:"ZDfERNX1Lxph5VRRmJ0A",popupNotClear:"vePM03kz_FQEI6_pAQJf"};const J=d},4901(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.t7GFrcQ4T5rhRreqcf70 {
  position: absolute;
  width: calc(100vw - 487px);
  height: calc(100vh - 80px - 36px);
  top: 116px;
  right: 0;
  z-index: 3;
}

.qGR2GEW1htCU61WQ0fqw {
  position: absolute;
  left: 480px;
}

.CfveFzGRjyb4heIrclhH {
  display: none;
}

@media (max-width: 1365px) {
  .t7GFrcQ4T5rhRreqcf70 {
    width: calc(75% - 10px);
  }
}
`,"",{version:3,sources:["webpack://./src/components/ScgPage/ScgPage.module.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,iCAAiC;EACjC,UAAU;EACV,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,uBAAuB;EACzB;AACF",sourcesContent:[`.scg {
  position: absolute;
  width: calc(100vw - 487px);
  height: calc(100vh - 80px - 36px);
  top: 116px;
  right: 0;
  z-index: 3;
}

.boundary {
  position: absolute;
  left: 480px;
}

.none {
  display: none;
}

@media (max-width: 1365px) {
  .scg {
    width: calc(75% - 10px);
  }
}
`],sourceRoot:""}]),d.locals={scg:"t7GFrcQ4T5rhRreqcf70",boundary:"qGR2GEW1htCU61WQ0fqw",none:"CfveFzGRjyb4heIrclhH"};const J=d},385(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.ZOcE0ywSVxGiybuSWrlY {
  border-bottom: 1px solid var(--color-light-grey);
}

.ZOcE0ywSVxGiybuSWrlY:last-child {
  border-bottom: none;
}
`,"",{version:3,sources:["webpack://./src/components/SearchField/SearchField.module.css"],names:[],mappings:"AAAA;EACE,gDAAgD;AAClD;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:[`.option {
  border-bottom: 1px solid var(--color-light-grey);
}

.option:last-child {
  border-bottom: none;
}
`],sourceRoot:""}]),d.locals={option:"ZOcE0ywSVxGiybuSWrlY"};const J=d},5117(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.ZLc9cU7TkYcdiFwB5lSz {
  max-height: 28px;
  height: 100%;
  max-width: 302px;
  width: 100%;
  margin-bottom: 62px;
  cursor: pointer;
}

@media (max-width: 1919px) {
  .ZLc9cU7TkYcdiFwB5lSz {
    padding-right: 24px;
  }
}

.yJgBWQAARl0iQeOryqcA {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  color: var(--color-dull-grey);
  width: 120px;
  height: 39px;
  padding: 8px;
  margin-left: -6px;
  margin-bottom: 24px;
  border-radius: 10px;
  background: var(--color-beige);
}

.yJgBWQAARl0iQeOryqcA:hover {
  background: var(--color-smoky-white);
}

.IurnqpTXR_bulqA7XUbb {
  margin-right: 24px;
}

.UdjNW0Z2GFqQTWSz2ZVQ {
  margin-bottom: 24px;
  margin-left: -6px;
  width: 100%;
  min-height: 40px;
  border: 1px solid var(--color-white);
}

.UdjNW0Z2GFqQTWSz2ZVQ:hover {
  border: 1px solid var(--color-grey-blue);
}

.WoVIyzdA6SofZ4_Mrbvf {
  color: var(--color-silver);
}

.AnjEVSx7S9BxgP36DKjr {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 51px;
}

.d_b7s7VkDno7KxitBseg {
  display: flex;
  flex-direction: column;
  gap: 46px;
  height: calc(100vh - var(--logo-search-height));
  margin-bottom: 24px;
  margin-right: 6px;
  cursor: auto;
  overflow: auto;
  overflow-x: hidden;
}

.d_b7s7VkDno7KxitBseg::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  margin: 8px;
}

.d_b7s7VkDno7KxitBseg::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-silver);
  margin: 8px;
}

.d_b7s7VkDno7KxitBseg::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.ce1GpqHg6WJxuogKFRzL {
  height: calc(100vh - var(--logo-search-create-requests-height));
}

.jjGM6jF48tK4dKsNcONg {
  height: calc(100vh - var(--logo-search-pages-menu-height));
}

.FBF2XmlLOSBXRqP8R9rn {
  position: fixed;
  left: 403px;
  top: 335px;
  padding: 10px;
  z-index: 100;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
}

.FBF2XmlLOSBXRqP8R9rn:hover {
  background: var(--color-soft-grey);
}

.uFyRpauRBnGWfpLoObCu {
  margin: 16px 0 0;
}

.ayoODkaaGPzsQRG4fK1k {
  overflow: visible;
  flex-basis: 24px;
}

.SdFzlk8hZo28iJcnjlWA button {
  width: 62px;
  height: 62px;
  border-radius: 12px;
  margin-right: 20px;
  border: none;
  background: none;
}
`,"",{version:3,sources:["webpack://./src/components/SidePanel/SidePanel.module.css"],names:[],mappings:"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+CAA+C;EAC/C,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;EACrC,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,0DAA0D;AAC5D;;AAEA;EACE,eAAe;EACf,WAAW;EACX,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB",sourcesContent:[`.logo {
  max-height: 28px;
  height: 100%;
  max-width: 302px;
  width: 100%;
  margin-bottom: 62px;
  cursor: pointer;
}

@media (max-width: 1919px) {
  .logo {
    padding-right: 24px;
  }
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  color: var(--color-dull-grey);
  width: 120px;
  height: 39px;
  padding: 8px;
  margin-left: -6px;
  margin-bottom: 24px;
  border-radius: 10px;
  background: var(--color-beige);
}

.search:hover {
  background: var(--color-smoky-white);
}

.searchFieldWrap {
  margin-right: 24px;
}

.searchField {
  margin-bottom: 24px;
  margin-left: -6px;
  width: 100%;
  min-height: 40px;
  border: 1px solid var(--color-white);
}

.searchField:hover {
  border: 1px solid var(--color-grey-blue);
}

.searchField_disabled {
  color: var(--color-silver);
}

.pagesMenu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 51px;
}

.accordionContent {
  display: flex;
  flex-direction: column;
  gap: 46px;
  height: calc(100vh - var(--logo-search-height));
  margin-bottom: 24px;
  margin-right: 6px;
  cursor: auto;
  overflow: auto;
  overflow-x: hidden;
}

.accordionContent::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  margin: 8px;
}

.accordionContent::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--color-silver);
  margin: 8px;
}

.accordionContent::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.accordionContent_userCanEdit {
  height: calc(100vh - var(--logo-search-create-requests-height));
}

.accordionContent_admin {
  height: calc(100vh - var(--logo-search-pages-menu-height));
}

.plusWrapper {
  position: fixed;
  left: 403px;
  top: 335px;
  padding: 10px;
  z-index: 100;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
}

.plusWrapper:hover {
  background: var(--color-soft-grey);
}

.errorBoundary {
  margin: 16px 0 0;
}

.icon {
  overflow: visible;
  flex-basis: 24px;
}

.switchModeButtonsWrapper button {
  width: 62px;
  height: 62px;
  border-radius: 12px;
  margin-right: 20px;
  border: none;
  background: none;
}
`],sourceRoot:""}]),d.locals={logo:"ZLc9cU7TkYcdiFwB5lSz",search:"yJgBWQAARl0iQeOryqcA",searchFieldWrap:"IurnqpTXR_bulqA7XUbb",searchField:"UdjNW0Z2GFqQTWSz2ZVQ",searchField_disabled:"WoVIyzdA6SofZ4_Mrbvf",pagesMenu:"AnjEVSx7S9BxgP36DKjr",accordionContent:"d_b7s7VkDno7KxitBseg",accordionContent_userCanEdit:"ce1GpqHg6WJxuogKFRzL",accordionContent_admin:"jjGM6jF48tK4dKsNcONg",plusWrapper:"FBF2XmlLOSBXRqP8R9rn",errorBoundary:"uFyRpauRBnGWfpLoObCu",icon:"ayoODkaaGPzsQRG4fK1k",switchModeButtonsWrapper:"SdFzlk8hZo28iJcnjlWA"};const J=d},9453(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.XrIUcRnw4gWL55ijt7UC {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
}

.GNp9UasL5a1YHpaKq2g5 {
  cursor: pointer;
  border: none;
  background: none;
  padding: 15px 0;
  filter: brightness(0.9);
  transition: filter 0.2s ease;
}

.GNp9UasL5a1YHpaKq2g5:hover {
  filter: brightness(1.1);
}

.hCR64FT00FlRVyKMtGag {
  filter: brightness(0.5) contrast(1.1);
}

.hCR64FT00FlRVyKMtGag:hover {
  filter: brightness(0.65);
}
`,"",{version:3,sources:["webpack://./src/components/SidePanel/SwitchMode/SwitchMode.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,wBAAwB;AAC1B",sourcesContent:[`.switchModeButtonsWrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
}

.switchModeButton {
  cursor: pointer;
  border: none;
  background: none;
  padding: 15px 0;
  filter: brightness(0.9);
  transition: filter 0.2s ease;
}

.switchModeButton:hover {
  filter: brightness(1.1);
}

.switchModeButtonDark {
  filter: brightness(0.5) contrast(1.1);
}

.switchModeButtonDark:hover {
  filter: brightness(0.65);
}
`],sourceRoot:""}]),d.locals={switchModeButtonsWrapper:"XrIUcRnw4gWL55ijt7UC",switchModeButton:"GNp9UasL5a1YHpaKq2g5",switchModeButtonDark:"hCR64FT00FlRVyKMtGag"};const J=d},7641(M,f,y){"use strict";y.d(f,{A:()=>J});var F=y(1354),E=y.n(F),x=y(6314),m=y.n(x),d=m()(E());d.push([M.id,`.i8QWoWCbDDftypikUGg1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: none;
  color: var(--color-dull-grey);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.i8QWoWCbDDftypikUGg1:hover {
  background: var(--color-soft-grey);
  color: var(--color-dark-grey);
}
`,"",{version:3,sources:["webpack://./src/components/ThemeToggle/ThemeToggle.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;EACf,iDAAiD;AACnD;;AAEA;EACE,kCAAkC;EAClC,6BAA6B;AAC/B",sourcesContent:[`.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: none;
  color: var(--color-dull-grey);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.button:hover {
  background: var(--color-soft-grey);
  color: var(--color-dark-grey);
}
`],sourceRoot:""}]),d.locals={button:"i8QWoWCbDDftypikUGg1"};const J=d},6314(M){"use strict";M.exports=function(f){var y=[];return y.toString=function(){return this.map(function(E){var x="",m=typeof E[5]!="undefined";return E[4]&&(x+="@supports (".concat(E[4],") {")),E[2]&&(x+="@media ".concat(E[2]," {")),m&&(x+="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {")),x+=f(E),m&&(x+="}"),E[2]&&(x+="}"),E[4]&&(x+="}"),x}).join("")},y.i=function(E,x,m,d,J){typeof E=="string"&&(E=[[null,E,void 0]]);var R={};if(m)for(var z=0;z<this.length;z++){var X=this[z][0];X!=null&&(R[X]=!0)}for(var be=0;be<E.length;be++){var se=[].concat(E[be]);m&&R[se[0]]||(typeof J!="undefined"&&(typeof se[5]=="undefined"||(se[1]="@layer".concat(se[5].length>0?" ".concat(se[5]):""," {").concat(se[1],"}")),se[5]=J),x&&(se[2]&&(se[1]="@media ".concat(se[2]," {").concat(se[1],"}")),se[2]=x),d&&(se[4]?(se[1]="@supports (".concat(se[4],") {").concat(se[1],"}"),se[4]=d):se[4]="".concat(d)),y.push(se))}},y}},1354(M){"use strict";M.exports=function(f){var y=f[1],F=f[3];if(!F)return y;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(F)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),m="/*# ".concat(x," */");return[y].concat([m]).join(`
`)}return[y].join(`
`)}},4146(M,f,y){"use strict";var F=y(3404),E={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J={};J[F.ForwardRef]=m,J[F.Memo]=d;function R(ve){return F.isMemo(ve)?d:J[ve.$$typeof]||E}var z=Object.defineProperty,X=Object.getOwnPropertyNames,be=Object.getOwnPropertySymbols,se=Object.getOwnPropertyDescriptor,ge=Object.getPrototypeOf,ye=Object.prototype;function Z(ve,ae,fe){if(typeof ae!="string"){if(ye){var ee=ge(ae);ee&&ee!==ye&&Z(ve,ee,fe)}var g=X(ae);be&&(g=g.concat(be(ae)));for(var Be=R(ve),Ee=R(ae),We=0;We<g.length;++We){var ht=g[We];if(!x[ht]&&!(fe&&fe[ht])&&!(Ee&&Ee[ht])&&!(Be&&Be[ht])){var Tt=se(ae,ht);try{z(ve,ht,Tt)}catch(zt){}}}}return ve}M.exports=Z},3072(M,f){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=typeof Symbol=="function"&&Symbol.for,F=y?Symbol.for("react.element"):60103,E=y?Symbol.for("react.portal"):60106,x=y?Symbol.for("react.fragment"):60107,m=y?Symbol.for("react.strict_mode"):60108,d=y?Symbol.for("react.profiler"):60114,J=y?Symbol.for("react.provider"):60109,R=y?Symbol.for("react.context"):60110,z=y?Symbol.for("react.async_mode"):60111,X=y?Symbol.for("react.concurrent_mode"):60111,be=y?Symbol.for("react.forward_ref"):60112,se=y?Symbol.for("react.suspense"):60113,ge=y?Symbol.for("react.suspense_list"):60120,ye=y?Symbol.for("react.memo"):60115,Z=y?Symbol.for("react.lazy"):60116,ve=y?Symbol.for("react.block"):60121,ae=y?Symbol.for("react.fundamental"):60117,fe=y?Symbol.for("react.responder"):60118,ee=y?Symbol.for("react.scope"):60119;function g(Ee){if(typeof Ee=="object"&&Ee!==null){var We=Ee.$$typeof;switch(We){case F:switch(Ee=Ee.type,Ee){case z:case X:case x:case d:case m:case se:return Ee;default:switch(Ee=Ee&&Ee.$$typeof,Ee){case R:case be:case Z:case ye:case J:return Ee;default:return We}}case E:return We}}}function Be(Ee){return g(Ee)===X}f.AsyncMode=z,f.ConcurrentMode=X,f.ContextConsumer=R,f.ContextProvider=J,f.Element=F,f.ForwardRef=be,f.Fragment=x,f.Lazy=Z,f.Memo=ye,f.Portal=E,f.Profiler=d,f.StrictMode=m,f.Suspense=se,f.isAsyncMode=function(Ee){return Be(Ee)||g(Ee)===z},f.isConcurrentMode=Be,f.isContextConsumer=function(Ee){return g(Ee)===R},f.isContextProvider=function(Ee){return g(Ee)===J},f.isElement=function(Ee){return typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===F},f.isForwardRef=function(Ee){return g(Ee)===be},f.isFragment=function(Ee){return g(Ee)===x},f.isLazy=function(Ee){return g(Ee)===Z},f.isMemo=function(Ee){return g(Ee)===ye},f.isPortal=function(Ee){return g(Ee)===E},f.isProfiler=function(Ee){return g(Ee)===d},f.isStrictMode=function(Ee){return g(Ee)===m},f.isSuspense=function(Ee){return g(Ee)===se},f.isValidElementType=function(Ee){return typeof Ee=="string"||typeof Ee=="function"||Ee===x||Ee===X||Ee===d||Ee===m||Ee===se||Ee===ge||typeof Ee=="object"&&Ee!==null&&(Ee.$$typeof===Z||Ee.$$typeof===ye||Ee.$$typeof===J||Ee.$$typeof===R||Ee.$$typeof===be||Ee.$$typeof===ae||Ee.$$typeof===fe||Ee.$$typeof===ee||Ee.$$typeof===ve)},f.typeOf=g},3404(M,f,y){"use strict";M.exports=y(3072)},2551(M,f,y){"use strict";/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=y(6540),E=y(9982);function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,d={};function J(e,t){R(e,t),R(e+"Capture",t)}function R(e,t){for(d[e]=t,e=0;e<t.length;e++)m.add(t[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),X=Object.prototype.hasOwnProperty,be=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,se={},ge={};function ye(e){return X.call(ge,e)?!0:X.call(se,e)?!1:be.test(e)?ge[e]=!0:(se[e]=!0,!1)}function Z(e,t,o,a){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ve(e,t,o,a){if(t===null||typeof t=="undefined"||Z(e,t,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,o,a,c,h,I){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=I}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ae(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ae(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ae(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ae(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){fe[e]=new ae(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){fe[e]=new ae(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){fe[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function g(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ee,g);fe[t]=new ae(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ee,g);fe[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ee,g);fe[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)}),fe.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){fe[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Be(e,t,o,a){var c=fe.hasOwnProperty(t)?fe[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ve(t,o,c,a)&&(o=null),a||c===null?ye(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):c.mustUseProperty?e[c.propertyName]=o===null?c.type===3?!1:"":o:(t=c.attributeName,a=c.attributeNamespace,o===null?e.removeAttribute(t):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?e.setAttributeNS(a,t,o):e.setAttribute(t,o))))}var Ee=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),ht=Symbol.for("react.portal"),Tt=Symbol.for("react.fragment"),zt=Symbol.for("react.strict_mode"),Wn=Symbol.for("react.profiler"),ir=Symbol.for("react.provider"),Vn=Symbol.for("react.context"),An=Symbol.for("react.forward_ref"),Bn=Symbol.for("react.suspense"),ar=Symbol.for("react.suspense_list"),_n=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),ln=Symbol.for("react.offscreen"),kn=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=kn&&e[kn]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,vt;function gn(e){if(vt===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);vt=t&&t[1]||""}return`
`+vt+e}var Bt=!1;function on(e,t){if(!e||Bt)return"";Bt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(pt){var a=pt}Reflect.construct(e,[],t)}else{try{t.call()}catch(pt){a=pt}e.call(t.prototype)}else{try{throw Error()}catch(pt){a=pt}e()}}catch(pt){if(pt&&a&&typeof pt.stack=="string"){for(var c=pt.stack.split(`
`),h=a.stack.split(`
`),I=c.length-1,_e=h.length-1;1<=I&&0<=_e&&c[I]!==h[_e];)_e--;for(;1<=I&&0<=_e;I--,_e--)if(c[I]!==h[_e]){if(I!==1||_e!==1)do if(I--,_e--,0>_e||c[I]!==h[_e]){var De=`
`+c[I].replace(" at new "," at ");return e.displayName&&De.includes("<anonymous>")&&(De=De.replace("<anonymous>",e.displayName)),De}while(1<=I&&0<=_e);break}}}finally{Bt=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?gn(e):""}function rt(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=on(e.type,!1),e;case 11:return e=on(e.type.render,!1),e;case 1:return e=on(e.type,!0),e;default:return""}}function tt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tt:return"Fragment";case ht:return"Portal";case Wn:return"Profiler";case zt:return"StrictMode";case Bn:return"Suspense";case ar:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vn:return(e.displayName||"Context")+".Consumer";case ir:return(e._context.displayName||"Context")+".Provider";case An:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _n:return t=e.displayName||null,t!==null?t:tt(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return tt(e(t))}catch(o){}}return null}function xt(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tt(t);case 8:return t===zt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ct(e){var t=mt(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o!="undefined"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(I){a=""+I,h.call(this,I)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(I){a=""+I},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kt(e){e._valueTracker||(e._valueTracker=ct(e))}function Sn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=mt(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function mn(e,t){var o=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o!=null?o:e._wrapperState.initialChecked})}function Lr(e,t){var o=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;o=nt(t.value!=null?t.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uo(e,t){t=t.checked,t!=null&&Be(e,"checked",t,!1)}function _i(e,t){uo(e,t);var o=nt(t.value),a=t.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Po(e,t.type,o):t.hasOwnProperty("defaultValue")&&Po(e,t.type,nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nr(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Po(e,t,o){(t!=="number"||Rn(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var di=Array.isArray;function xo(e,t,o,a){if(e=e.options,t){t={};for(var c=0;c<o.length;c++)t["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=t.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&a&&(e[o].defaultSelected=!0)}else{for(o=""+nt(o),t=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function So(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(x(92));if(di(o)){if(1<o.length)throw Error(x(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:nt(o)}}function Gr(e,t){var o=nt(t.value),a=nt(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $n,an=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,o,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,o,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Ar(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Zn(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Ar(o,t[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,c):e[o]=c}}var Kr=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(Kr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function Cr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var to=null,No=null,_r=null;function io(e){if(e=sl(e)){if(typeof to!="function")throw Error(x(280));var t=e.stateNode;t&&(t=_u(t),to(e.stateNode,e.type,t))}}function Mr(e){No?_r?_r.push(e):_r=[e]:No=e}function fi(){if(No){var e=No,t=_r;if(_r=No=null,io(e),t)for(e=0;e<t.length;e++)io(t[e])}}function Ji(e,t){return e(t)}function Qe(){}var Ye=!1;function Ct(e,t,o){if(Ye)return e(t,o);Ye=!0;try{return Ji(e,t,o)}finally{Ye=!1,(No!==null||_r!==null)&&(Qe(),fi())}}function Nt(e,t){var o=e.stateNode;if(o===null)return null;var a=_u(o);if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(x(231,t,typeof o));return o}var qt=!1;if(z)try{var En={};Object.defineProperty(En,"passive",{get:function(){qt=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch(e){qt=!1}function wn(e,t,o,a,c,h,I,_e,De){var pt=Array.prototype.slice.call(arguments,3);try{t.apply(o,pt)}catch(Yt){this.onError(Yt)}}var Yn=!1,fr=null,gr=!1,rr=null,Fn={onError:function(e){Yn=!0,fr=e}};function Xr(e,t,o,a,c,h,I,_e,De){Yn=!1,fr=null,wn.apply(Fn,arguments)}function fo(e,t,o,a,c,h,I,_e,De){if(Xr.apply(this,arguments),Yn){if(Yn){var pt=fr;Yn=!1,fr=null}else throw Error(x(198));gr||(gr=!0,rr=pt)}}function bn(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function pi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hi(e){if(bn(e)!==e)throw Error(x(188))}function mi(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var o=e,a=t;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return hi(c),e;if(h===a)return hi(c),t;h=h.sibling}throw Error(x(188))}if(o.return!==a.return)o=c,a=h;else{for(var I=!1,_e=c.child;_e;){if(_e===o){I=!0,o=c,a=h;break}if(_e===a){I=!0,a=c,o=h;break}_e=_e.sibling}if(!I){for(_e=h.child;_e;){if(_e===o){I=!0,o=h,a=c;break}if(_e===a){I=!0,a=h,o=c;break}_e=_e.sibling}if(!I)throw Error(x(189))}}if(o.alternate!==a)throw Error(x(190))}if(o.tag!==3)throw Error(x(188));return o.stateNode.current===o?e:t}function po(e){return e=mi(e),e!==null?vi(e):null}function vi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vi(e);if(t!==null)return t;e=e.sibling}return null}var fa=E.unstable_scheduleCallback,Si=E.unstable_cancelCallback,Ei=E.unstable_shouldYield,ja=E.unstable_requestPaint,Sr=E.unstable_now,bi=E.unstable_getCurrentPriorityLevel,xr=E.unstable_ImmediatePriority,aa=E.unstable_UserBlockingPriority,Oi=E.unstable_NormalPriority,pa=E.unstable_LowPriority,Wr=E.unstable_IdlePriority,ha=null,Fo=null;function Yr(e){if(Fo&&typeof Fo.onCommitFiberRoot=="function")try{Fo.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch(t){}}var Gt=Math.clz32?Math.clz32:Ri,ea=Math.log,Xa=Math.LN2;function Ri(e){return e>>>=0,e===0?32:31-(ea(e)/Xa|0)|0}var Oo=64,sa=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ji(e,t){var o=e.pendingLanes;if(o===0)return 0;var a=0,c=e.suspendedLanes,h=e.pingedLanes,I=o&268435455;if(I!==0){var _e=I&~c;_e!==0?a=Fr(_e):(h&=I,h!==0&&(a=Fr(h)))}else I=o&~c,I!==0?a=Fr(I):h!==0&&(a=Fr(h));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,h=t&-t,c>=h||c===16&&(h&4194240)!==0))return t;if((a&4)!==0&&(a|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)o=31-Gt(t),c=1<<o,a|=e[o],t&=~c;return a}function Br(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var I=31-Gt(h),_e=1<<I,De=c[I];De===-1?((_e&o)===0||(_e&a)!==0)&&(c[I]=Br(_e,t)):De<=t&&(e.expiredLanes|=_e),h&=~_e}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ni(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function Xo(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function ma(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=o}function no(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var c=31-Gt(o),h=1<<c;t[c]=0,a[c]=-1,e[c]=-1,o&=~h}}function wa(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-Gt(o),c=1<<a;c&t|e[a]&t&&(e[a]|=t),o&=~c}}var or=0;function To(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hi,Di,S,D,q,ue=!1,le=[],Me=null,Ne=null,lt=null,st=new Map,Dt=new Map,Vt=[],Xt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yn(e,t){switch(e){case"focusin":case"focusout":Me=null;break;case"dragenter":case"dragleave":Ne=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":st.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(t.pointerId)}}function _t(e,t,o,a,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},t!==null&&(t=sl(t),t!==null&&Di(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function nn(e,t,o,a,c){switch(t){case"focusin":return Me=_t(Me,e,t,o,a,c),!0;case"dragenter":return Ne=_t(Ne,e,t,o,a,c),!0;case"mouseover":return lt=_t(lt,e,t,o,a,c),!0;case"pointerover":var h=c.pointerId;return st.set(h,_t(st.get(h)||null,e,t,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Dt.set(h,_t(Dt.get(h)||null,e,t,o,a,c)),!0}return!1}function tn(e){var t=Vs(e.target);if(t!==null){var o=bn(t);if(o!==null){if(t=o.tag,t===13){if(t=pi(o),t!==null){e.blockedOn=t,q(e.priority,function(){S(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);ko=a,o.target.dispatchEvent(a),ko=null}else return t=sl(o),t!==null&&Di(t),e.blockedOn=o,!1;t.shift()}return!0}function pr(e,t,o){Cn(e)&&o.delete(t)}function jn(){ue=!1,Me!==null&&Cn(Me)&&(Me=null),Ne!==null&&Cn(Ne)&&(Ne=null),lt!==null&&Cn(lt)&&(lt=null),st.forEach(pr),Dt.forEach(pr)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,ue||(ue=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,jn)))}function fn(e){function t(c){return lr(c,e)}if(0<le.length){lr(le[0],e);for(var o=1;o<le.length;o++){var a=le[o];a.blockedOn===e&&(a.blockedOn=null)}}for(Me!==null&&lr(Me,e),Ne!==null&&lr(Ne,e),lt!==null&&lr(lt,e),st.forEach(t),Dt.forEach(t),o=0;o<Vt.length;o++)a=Vt[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Vt.length&&(o=Vt[0],o.blockedOn===null);)tn(o),o.blockedOn===null&&Vt.shift()}var kr=Ee.ReactCurrentBatchConfig,ao=!0;function et(e,t,o,a){var c=or,h=kr.transition;kr.transition=null;try{or=1,ro(e,t,o,a)}finally{or=c,kr.transition=h}}function yr(e,t,o,a){var c=or,h=kr.transition;kr.transition=null;try{or=4,ro(e,t,o,a)}finally{or=c,kr.transition=h}}function ro(e,t,o,a){if(ao){var c=oo(e,t,o,a);if(c===null)Ss(e,t,a,Gn,o),yn(e,a);else if(nn(c,e,t,o,a))a.stopPropagation();else if(yn(e,a),t&4&&-1<Xt.indexOf(e)){for(;c!==null;){var h=sl(c);if(h!==null&&Hi(h),h=oo(e,t,o,a),h===null&&Ss(e,t,a,Gn,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Ss(e,t,a,null,o)}}var Gn=null;function oo(e,t,o,a){if(Gn=null,e=Cr(a),e=Vs(e),e!==null)if(t=bn(e),t===null)e=null;else if(o=t.tag,o===13){if(e=pi(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gn=e,null}function Ro(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bi()){case xr:return 1;case aa:return 4;case Oi:case pa:return 16;case Wr:return 536870912;default:return 16}default:return 16}}var Ao=null,Ki=null,Pi=null;function Da(){if(Pi)return Pi;var e,t=Ki,o=t.length,a,c="value"in Ao?Ao.value:Ao.textContent,h=c.length;for(e=0;e<o&&t[e]===c[e];e++);var I=o-e;for(a=1;a<=I&&t[o-a]===c[h-a];a++);return Pi=c.slice(e,1<a?1-a:void 0)}function ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function _o(){return!1}function jo(e){function t(o,a,c,h,I){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=I,this.currentTarget=null;for(var _e in e)e.hasOwnProperty(_e)&&(o=e[_e],this[_e]=o?o(h):h[_e]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ho:_o,this.isPropagationStopped=_o,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=jo(oi),Uo=Oe({},oi,{view:0,detail:0}),va=jo(Uo),Mo,$i,Ur,Eo=Oe({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(Mo=e.screenX-Ur.screenX,$i=e.screenY-Ur.screenY):$i=Mo=0,Ur=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Ia=jo(Eo),ta=Oe({},Eo,{dataTransfer:0}),Ma=jo(ta),bo=Oe({},Uo,{relatedTarget:0}),zi=jo(bo),Gi=Oe({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),La=jo(Gi),wo=Oe({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ga=jo(wo),Ya=Oe({},oi,{data:0}),Xi=jo(Ya),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ls={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bs(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ls[e])?!!t[e]:!1}function Bi(){return bs}var Qa=Oe({},Uo,{key:function(e){if(e.key){var t=ts[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ws=jo(Qa),Na=Oe({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P=jo(Na),k=Oe({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),H=jo(k),ne=Oe({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ae=jo(ne),Ke=Oe({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$e=jo(Ke),yt=[9,13,27,32],xn=z&&"CompositionEvent"in window,Ht=null;z&&"documentMode"in document&&(Ht=document.documentMode);var Ft=z&&"TextEvent"in window&&!Ht,On=z&&(!xn||Ht&&8<Ht&&11>=Ht),zr=" ",Do=!1;function pe(e,t){switch(e){case"keyup":return yt.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fe=!1;function zo(e,t){switch(e){case"compositionend":return jt(t);case"keypress":return t.which!==32?null:(Do=!0,zr);case"textInput":return e=t.data,e===zr&&Do?null:e;default:return null}}function qo(e,t){if(Fe)return e==="compositionend"||!xn&&pe(e,t)?(e=Da(),Pi=Ki=Ao=null,Fe=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return On&&t.locale!=="ko"?null:t.data;default:return null}}var K={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K[e.type]:t==="textarea"}function Ii(e,t,o,a){Mr(a),t=ol(t,"onChange"),0<t.length&&(o=new gi("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var wi=null,Se=null;function Xe(e){rl(e,0)}function it(e){var t=ll(e);if(Sn(t))return e}function It(e,t){if(e==="change")return t}var un=!1;if(z){var Dn;if(z){var u="oninput"in document;if(!u){var v=document.createElement("div");v.setAttribute("oninput","return;"),u=typeof v.oninput=="function"}Dn=u}else Dn=!1;un=Dn&&(!document.documentMode||9<document.documentMode)}function C(){wi&&(wi.detachEvent("onpropertychange",O),Se=wi=null)}function O(e){if(e.propertyName==="value"&&it(Se)){var t=[];Ii(t,Se,e,Cr(e)),Ct(Xe,t)}}function V(e,t,o){e==="focusin"?(C(),wi=t,Se=o,wi.attachEvent("onpropertychange",O)):e==="focusout"&&C()}function re(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return it(Se)}function ke(e,t){if(e==="click")return it(t)}function Re(e,t){if(e==="input"||e==="change")return it(t)}function Te(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ie=typeof Object.is=="function"?Object.is:Te;function Pe(e,t){if(ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!X.call(t,c)||!ie(e[c],t[c]))return!1}return!0}function l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function p(e,t){var o=l(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=l(o)}}function b(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?b(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch(a){o=!1}if(o)e=t.contentWindow;else break;t=Rn(e.document)}return t}function j(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oe(e){var t=_(),o=e.focusedElem,a=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&b(o.ownerDocument.documentElement,o)){if(a!==null&&j(o)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!e.extend&&h>a&&(c=a,a=h,h=c),c=p(o,h);var I=p(o,a);c&&I&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==I.node||e.focusOffset!==I.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),h>a?(e.addRange(t),e.extend(I.node,I.offset)):(t.setEnd(I.node,I.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ce=z&&"documentMode"in document&&11>=document.documentMode,Le=null,qe=null,Ve=null,Mt=!1;function sn(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Mt||Le==null||Le!==Rn(a)||(a=Le,"selectionStart"in a&&j(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ve&&Pe(Ve,a)||(Ve=a,a=ol(qe,"onSelect"),0<a.length&&(t=new gi("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=Le)))}function ur(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var rn={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Tn={},hr={};z&&(hr=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Tr(e){if(Tn[e])return Tn[e];if(!rn[e])return e;var t=rn[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in hr)return Tn[e]=t[o];return e}var Or=Tr("animationend"),mo=Tr("animationiteration"),Jo=Tr("animationstart"),Un=Tr("transitionend"),vo=new Map,$r="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){vo.set(e,t),J(t,[e])}for(var Xn=0;Xn<$r.length;Xn++){var Fi=$r[Xn],Za=Fi.toLowerCase(),Wo=Fi[0].toUpperCase()+Fi.slice(1);Mn(Za,"on"+Wo)}Mn(Or,"onAnimationEnd"),Mn(mo,"onAnimationIteration"),Mn(Jo,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Un,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fa=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Cs(e,t,o){var a=e.type||"unknown-event";e.currentTarget=o,fo(a,t,void 0,e),e.currentTarget=null}function rl(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],c=a.event;a=a.listeners;e:{var h=void 0;if(t)for(var I=a.length-1;0<=I;I--){var _e=a[I],De=_e.instance,pt=_e.currentTarget;if(_e=_e.listener,De!==h&&c.isPropagationStopped())break e;Cs(c,_e,pt),h=De}else for(I=0;I<a.length;I++){if(_e=a[I],De=_e.instance,pt=_e.currentTarget,_e=_e.listener,De!==h&&c.isPropagationStopped())break e;Cs(c,_e,pt),h=De}}}if(gr)throw e=rr,gr=!1,rr=null,e}function ei(e,t){var o=t[jl];o===void 0&&(o=t[jl]=new Set);var a=e+"__bubble";o.has(a)||(xs(t,e,2,!1),o.add(a))}function Fs(e,t,o){var a=0;t&&(a|=4),xs(o,e,a,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[Us]){e[Us]=!0,m.forEach(function(o){o!=="selectionchange"&&(Fa.has(o)||Fs(o,!1,e),Fs(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Fs("selectionchange",!1,t))}}function xs(e,t,o,a){switch(Ro(t)){case 1:var c=et;break;case 4:c=yr;break;default:c=ro}o=c.bind(null,t,o,e),c=void 0,!qt||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,o,{capture:!0,passive:c}):e.addEventListener(t,o,!0):c!==void 0?e.addEventListener(t,o,{passive:c}):e.addEventListener(t,o,!1)}function Ss(e,t,o,a,c){var h=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var I=a.tag;if(I===3||I===4){var _e=a.stateNode.containerInfo;if(_e===c||_e.nodeType===8&&_e.parentNode===c)break;if(I===4)for(I=a.return;I!==null;){var De=I.tag;if((De===3||De===4)&&(De=I.stateNode.containerInfo,De===c||De.nodeType===8&&De.parentNode===c))return;I=I.return}for(;_e!==null;){if(I=Vs(_e),I===null)return;if(De=I.tag,De===5||De===6){a=h=I;continue e}_e=_e.parentNode}}a=a.return}Ct(function(){var pt=h,Yt=Cr(o),Jt=[];e:{var $t=vo.get(e);if($t!==void 0){var Ln=gi,Qn=e;switch(e){case"keypress":if(ri(o)===0)break e;case"keydown":case"keyup":Ln=ws;break;case"focusin":Qn="focus",Ln=zi;break;case"focusout":Qn="blur",Ln=zi;break;case"beforeblur":case"afterblur":Ln=zi;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ln=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ln=Ma;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ln=H;break;case Or:case mo:case Jo:Ln=La;break;case Un:Ln=Ae;break;case"scroll":Ln=va;break;case"wheel":Ln=$e;break;case"copy":case"cut":case"paste":Ln=ga;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ln=P}var qn=(t&4)!==0,qi=!qn&&e==="scroll",ot=qn?$t!==null?$t+"Capture":null:$t;qn=[];for(var Ge=pt,at;Ge!==null;){at=Ge;var cn=at.stateNode;if(at.tag===5&&cn!==null&&(at=cn,ot!==null&&(cn=Nt(Ge,ot),cn!=null&&qn.push(Ca(Ge,cn,at)))),qi)break;Ge=Ge.return}0<qn.length&&($t=new Ln($t,Qn,null,o,Yt),Jt.push({event:$t,listeners:qn}))}}if((t&7)===0){e:{if($t=e==="mouseover"||e==="pointerover",Ln=e==="mouseout"||e==="pointerout",$t&&o!==ko&&(Qn=o.relatedTarget||o.fromElement)&&(Vs(Qn)||Qn[ds]))break e;if((Ln||$t)&&($t=Yt.window===Yt?Yt:($t=Yt.ownerDocument)?$t.defaultView||$t.parentWindow:window,Ln?(Qn=o.relatedTarget||o.toElement,Ln=pt,Qn=Qn?Vs(Qn):null,Qn!==null&&(qi=bn(Qn),Qn!==qi||Qn.tag!==5&&Qn.tag!==6)&&(Qn=null)):(Ln=null,Qn=pt),Ln!==Qn)){if(qn=Ia,cn="onMouseLeave",ot="onMouseEnter",Ge="mouse",(e==="pointerout"||e==="pointerover")&&(qn=P,cn="onPointerLeave",ot="onPointerEnter",Ge="pointer"),qi=Ln==null?$t:ll(Ln),at=Qn==null?$t:ll(Qn),$t=new qn(cn,Ge+"leave",Ln,o,Yt),$t.target=qi,$t.relatedTarget=at,cn=null,Vs(Yt)===pt&&(qn=new qn(ot,Ge+"enter",Qn,o,Yt),qn.target=at,qn.relatedTarget=qi,cn=qn),qi=cn,Ln&&Qn)t:{for(qn=Ln,ot=Qn,Ge=0,at=qn;at;at=Os(at))Ge++;for(at=0,cn=ot;cn;cn=Os(cn))at++;for(;0<Ge-at;)qn=Os(qn),Ge--;for(;0<at-Ge;)ot=Os(ot),at--;for(;Ge--;){if(qn===ot||ot!==null&&qn===ot.alternate)break t;qn=Os(qn),ot=Os(ot)}qn=null}else qn=null;Ln!==null&&Al(Jt,$t,Ln,qn,!1),Qn!==null&&qi!==null&&Al(Jt,qi,Qn,qn,!0)}}e:{if($t=pt?ll(pt):window,Ln=$t.nodeName&&$t.nodeName.toLowerCase(),Ln==="select"||Ln==="input"&&$t.type==="file")var nr=It;else if(Yo($t))if(un)nr=Re;else{nr=re;var Er=V}else(Ln=$t.nodeName)&&Ln.toLowerCase()==="input"&&($t.type==="checkbox"||$t.type==="radio")&&(nr=ke);if(nr&&(nr=nr(e,pt))){Ii(Jt,nr,o,Yt);break e}Er&&Er(e,$t,pt),e==="focusout"&&(Er=$t._wrapperState)&&Er.controlled&&$t.type==="number"&&Po($t,"number",$t.value)}switch(Er=pt?ll(pt):window,e){case"focusin":(Yo(Er)||Er.contentEditable==="true")&&(Le=Er,qe=pt,Ve=null);break;case"focusout":Ve=qe=Le=null;break;case"mousedown":Mt=!0;break;case"contextmenu":case"mouseup":case"dragend":Mt=!1,sn(Jt,o,Yt);break;case"selectionchange":if(Ce)break;case"keydown":case"keyup":sn(Jt,o,Yt)}var br;if(xn)e:{switch(e){case"compositionstart":var Dr="onCompositionStart";break e;case"compositionend":Dr="onCompositionEnd";break e;case"compositionupdate":Dr="onCompositionUpdate";break e}Dr=void 0}else Fe?pe(e,o)&&(Dr="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Dr="onCompositionStart");Dr&&(On&&o.locale!=="ko"&&(Fe||Dr!=="onCompositionStart"?Dr==="onCompositionEnd"&&Fe&&(br=Da()):(Ao=Yt,Ki="value"in Ao?Ao.value:Ao.textContent,Fe=!0)),Er=ol(pt,Dr),0<Er.length&&(Dr=new Xi(Dr,e,null,o,Yt),Jt.push({event:Dr,listeners:Er}),br?Dr.data=br:(br=jt(o),br!==null&&(Dr.data=br)))),(br=Ft?zo(e,o):qo(e,o))&&(pt=ol(pt,"onBeforeInput"),0<pt.length&&(Yt=new Xi("onBeforeInput","beforeinput",null,o,Yt),Jt.push({event:Yt,listeners:pt}),Yt.data=br))}rl(Jt,t)})}function Ca(e,t,o){return{instance:e,listener:t,currentTarget:o}}function ol(e,t){for(var o=t+"Capture",a=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Nt(e,o),h!=null&&a.unshift(Ca(e,h,c)),h=Nt(e,t),h!=null&&a.push(Ca(e,h,c))),e=e.return}return a}function Os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Al(e,t,o,a,c){for(var h=t._reactName,I=[];o!==null&&o!==a;){var _e=o,De=_e.alternate,pt=_e.stateNode;if(De!==null&&De===a)break;_e.tag===5&&pt!==null&&(_e=pt,c?(De=Nt(o,h),De!=null&&I.unshift(Ca(o,De,_e))):c||(De=Nt(o,h),De!=null&&I.push(Ca(o,De,_e)))),o=o.return}I.length!==0&&e.push({event:t,listeners:I})}var zs=/\r\n?/g,us=/\u0000|\uFFFD/g;function il(e){return(typeof e=="string"?e:""+e).replace(zs,`
`).replace(us,"")}function cs(e,t,o){if(t=il(t),il(e)!==t&&o)throw Error(x(425))}function xa(){}var Ws=null,Ps=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Ic=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,ec=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju!="undefined"?function(e){return Ju.resolve(null).then(e).catch(Mc)}:Rl;function Mc(e){setTimeout(function(){throw e})}function yu(e,t){var o=t,a=0;do{var c=o.nextSibling;if(e.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){e.removeChild(c),fn(t);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);fn(t)}function Bs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var al=Math.random().toString(36).slice(2),ya="__reactFiber$"+al,Zl="__reactProps$"+al,ds="__reactContainer$"+al,jl="__reactEvents$"+al,Lc="__reactListeners$"+al,Nc="__reactHandles$"+al;function Vs(e){var t=e[ya];if(t)return t;for(var o=e.parentNode;o;){if(t=o[ds]||o[ya]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Au(e);e!==null;){if(o=e[ya])return o;e=Au(e)}return t}e=o,o=e.parentNode}return null}function sl(e){return e=e[ya]||e[ds],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ll(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function _u(e){return e[Zl]||null}var Eu=[],ul=-1;function ks(e){return{current:e}}function ii(e){0>ul||(e.current=Eu[ul],Eu[ul]=null,ul--)}function ti(e,t){ul++,Eu[ul]=e.current,e.current=t}var fs={},ua=ks(fs),Sa=ks(!1),Hs=fs;function cl(e,t){var o=e.type.contextTypes;if(!o)return fs;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=t[h];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Aa(e){return e=e.childContextTypes,e!=null}function ql(){ii(Sa),ii(ua)}function tc(e,t,o){if(ua.current!==fs)throw Error(x(168));ti(ua,t),ti(Sa,o)}function nc(e,t,o){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(x(108,xt(e)||"Unknown",c));return Oe({},o,a)}function Jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fs,Hs=ua.current,ti(ua,e),ti(Sa,Sa.current),!0}function bu(e,t,o){var a=e.stateNode;if(!a)throw Error(x(169));o?(e=nc(e,t,Hs),a.__reactInternalMemoizedMergedChildContext=e,ii(Sa),ii(ua),ti(ua,e)):ii(Sa),ti(Sa,o)}var Ts=null,eu=!1,tu=!1;function rc(e){Ts===null?Ts=[e]:Ts.push(e)}function Fc(e){eu=!0,rc(e)}function ps(){if(!tu&&Ts!==null){tu=!0;var e=0,t=or;try{var o=Ts;for(or=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}Ts=null,eu=!1}catch(c){throw Ts!==null&&(Ts=Ts.slice(e+1)),fa(xr,ps),c}finally{or=t,tu=!1}}return null}var dl=[],Ks=0,nu=null,ru=0,za=[],Wa=0,$s=null,hs=1,ms="";function Gs(e,t){dl[Ks++]=ru,dl[Ks++]=nu,nu=e,ru=t}function Uc(e,t,o){za[Wa++]=hs,za[Wa++]=ms,za[Wa++]=$s,$s=e;var a=hs;e=ms;var c=32-Gt(a)-1;a&=~(1<<c),o+=1;var h=32-Gt(t)+c;if(30<h){var I=c-c%5;h=(a&(1<<I)-1).toString(32),a>>=I,c-=I,hs=1<<32-Gt(t)+c|o<<c|a,ms=h+e}else hs=1<<h|o<<c|a,ms=e}function oc(e){e.return!==null&&(Gs(e,1),Uc(e,1,0))}function _l(e){for(;e===nu;)nu=dl[--Ks],dl[Ks]=null,ru=dl[--Ks],dl[Ks]=null;for(;e===$s;)$s=za[--Wa],za[Wa]=null,ms=za[--Wa],za[Wa]=null,hs=za[--Wa],za[Wa]=null}var Oa=null,_a=null,yi=!1,ns=null;function wu(e,t){var o=Es(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Cu(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oa=e,_a=Bs(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oa=e,_a=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=$s!==null?{id:hs,overflow:ms}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Es(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Oa=e,_a=null,!0):!1;default:return!1}}function ou(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(yi){var t=_a;if(t){var o=t;if(!Cu(e,t)){if(ou(e))throw Error(x(418));t=Bs(o.nextSibling);var a=Oa;t&&Cu(e,t)?wu(a,o):(e.flags=e.flags&-4097|2,yi=!1,Oa=e)}}else{if(ou(e))throw Error(x(418));e.flags=e.flags&-4097|2,yi=!1,Oa=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Dl(e){if(e!==Oa)return!1;if(!yi)return ic(e),yi=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=_a)){if(ou(e))throw Il(),Error(x(418));for(;t;)wu(e,t),t=Bs(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){_a=Bs(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}_a=null}}else _a=Oa?Bs(e.stateNode.nextSibling):null;return!0}function Il(){for(var e=_a;e;)e=Bs(e.nextSibling)}function Ml(){_a=Oa=null,yi=!1}function Su(e){ns===null?ns=[e]:ns.push(e)}var Xs=Ee.ReactCurrentBatchConfig;function El(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(x(309));var a=o.stateNode}if(!a)throw Error(x(147,e));var c=a,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(I){var _e=c.refs;I===null?delete _e[h]:_e[h]=I},t._stringRef=h,t)}if(typeof e!="string")throw Error(x(284));if(!o._owner)throw Error(x(290,e))}return e}function iu(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function Pu(e){function t(ot,Ge){if(e){var at=ot.deletions;at===null?(ot.deletions=[Ge],ot.flags|=16):at.push(Ge)}}function o(ot,Ge){if(!e)return null;for(;Ge!==null;)t(ot,Ge),Ge=Ge.sibling;return null}function a(ot,Ge){for(ot=new Map;Ge!==null;)Ge.key!==null?ot.set(Ge.key,Ge):ot.set(Ge.index,Ge),Ge=Ge.sibling;return ot}function c(ot,Ge){return ot=Ql(ot,Ge),ot.index=0,ot.sibling=null,ot}function h(ot,Ge,at){return ot.index=at,e?(at=ot.alternate,at!==null?(at=at.index,at<Ge?(ot.flags|=2,Ge):at):(ot.flags|=2,Ge)):(ot.flags|=1048576,Ge)}function I(ot){return e&&ot.alternate===null&&(ot.flags|=2),ot}function _e(ot,Ge,at,cn){return Ge===null||Ge.tag!==6?(Ge=Hd(at,ot.mode,cn),Ge.return=ot,Ge):(Ge=c(Ge,at),Ge.return=ot,Ge)}function De(ot,Ge,at,cn){var nr=at.type;return nr===Tt?Yt(ot,Ge,at.props.children,cn,at.key):Ge!==null&&(Ge.elementType===nr||typeof nr=="object"&&nr!==null&&nr.$$typeof===wt&&Ou(nr)===Ge.type)?(cn=c(Ge,at.props),cn.ref=El(ot,Ge,at),cn.return=ot,cn):(cn=Sc(at.type,at.key,at.props,null,ot.mode,cn),cn.ref=El(ot,Ge,at),cn.return=ot,cn)}function pt(ot,Ge,at,cn){return Ge===null||Ge.tag!==4||Ge.stateNode.containerInfo!==at.containerInfo||Ge.stateNode.implementation!==at.implementation?(Ge=Kd(at,ot.mode,cn),Ge.return=ot,Ge):(Ge=c(Ge,at.children||[]),Ge.return=ot,Ge)}function Yt(ot,Ge,at,cn,nr){return Ge===null||Ge.tag!==7?(Ge=Bl(at,ot.mode,cn,nr),Ge.return=ot,Ge):(Ge=c(Ge,at),Ge.return=ot,Ge)}function Jt(ot,Ge,at){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return Ge=Hd(""+Ge,ot.mode,at),Ge.return=ot,Ge;if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case We:return at=Sc(Ge.type,Ge.key,Ge.props,null,ot.mode,at),at.ref=El(ot,null,Ge),at.return=ot,at;case ht:return Ge=Kd(Ge,ot.mode,at),Ge.return=ot,Ge;case wt:var cn=Ge._init;return Jt(ot,cn(Ge._payload),at)}if(di(Ge)||er(Ge))return Ge=Bl(Ge,ot.mode,at,null),Ge.return=ot,Ge;iu(ot,Ge)}return null}function $t(ot,Ge,at,cn){var nr=Ge!==null?Ge.key:null;if(typeof at=="string"&&at!==""||typeof at=="number")return nr!==null?null:_e(ot,Ge,""+at,cn);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case We:return at.key===nr?De(ot,Ge,at,cn):null;case ht:return at.key===nr?pt(ot,Ge,at,cn):null;case wt:return nr=at._init,$t(ot,Ge,nr(at._payload),cn)}if(di(at)||er(at))return nr!==null?null:Yt(ot,Ge,at,cn,null);iu(ot,at)}return null}function Ln(ot,Ge,at,cn,nr){if(typeof cn=="string"&&cn!==""||typeof cn=="number")return ot=ot.get(at)||null,_e(Ge,ot,""+cn,nr);if(typeof cn=="object"&&cn!==null){switch(cn.$$typeof){case We:return ot=ot.get(cn.key===null?at:cn.key)||null,De(Ge,ot,cn,nr);case ht:return ot=ot.get(cn.key===null?at:cn.key)||null,pt(Ge,ot,cn,nr);case wt:var Er=cn._init;return Ln(ot,Ge,at,Er(cn._payload),nr)}if(di(cn)||er(cn))return ot=ot.get(at)||null,Yt(Ge,ot,cn,nr,null);iu(Ge,cn)}return null}function Qn(ot,Ge,at,cn){for(var nr=null,Er=null,br=Ge,Dr=Ge=0,ca=null;br!==null&&Dr<at.length;Dr++){br.index>Dr?(ca=br,br=null):ca=br.sibling;var Ho=$t(ot,br,at[Dr],cn);if(Ho===null){br===null&&(br=ca);break}e&&br&&Ho.alternate===null&&t(ot,br),Ge=h(Ho,Ge,Dr),Er===null?nr=Ho:Er.sibling=Ho,Er=Ho,br=ca}if(Dr===at.length)return o(ot,br),yi&&Gs(ot,Dr),nr;if(br===null){for(;Dr<at.length;Dr++)br=Jt(ot,at[Dr],cn),br!==null&&(Ge=h(br,Ge,Dr),Er===null?nr=br:Er.sibling=br,Er=br);return yi&&Gs(ot,Dr),nr}for(br=a(ot,br);Dr<at.length;Dr++)ca=Ln(br,ot,Dr,at[Dr],cn),ca!==null&&(e&&ca.alternate!==null&&br.delete(ca.key===null?Dr:ca.key),Ge=h(ca,Ge,Dr),Er===null?nr=ca:Er.sibling=ca,Er=ca);return e&&br.forEach(function(yl){return t(ot,yl)}),yi&&Gs(ot,Dr),nr}function qn(ot,Ge,at,cn){var nr=er(at);if(typeof nr!="function")throw Error(x(150));if(at=nr.call(at),at==null)throw Error(x(151));for(var Er=nr=null,br=Ge,Dr=Ge=0,ca=null,Ho=at.next();br!==null&&!Ho.done;Dr++,Ho=at.next()){br.index>Dr?(ca=br,br=null):ca=br.sibling;var yl=$t(ot,br,Ho.value,cn);if(yl===null){br===null&&(br=ca);break}e&&br&&yl.alternate===null&&t(ot,br),Ge=h(yl,Ge,Dr),Er===null?nr=yl:Er.sibling=yl,Er=yl,br=ca}if(Ho.done)return o(ot,br),yi&&Gs(ot,Dr),nr;if(br===null){for(;!Ho.done;Dr++,Ho=at.next())Ho=Jt(ot,Ho.value,cn),Ho!==null&&(Ge=h(Ho,Ge,Dr),Er===null?nr=Ho:Er.sibling=Ho,Er=Ho);return yi&&Gs(ot,Dr),nr}for(br=a(ot,br);!Ho.done;Dr++,Ho=at.next())Ho=Ln(br,ot,Dr,Ho.value,cn),Ho!==null&&(e&&Ho.alternate!==null&&br.delete(Ho.key===null?Dr:Ho.key),Ge=h(Ho,Ge,Dr),Er===null?nr=Ho:Er.sibling=Ho,Er=Ho);return e&&br.forEach(function(Yd){return t(ot,Yd)}),yi&&Gs(ot,Dr),nr}function qi(ot,Ge,at,cn){if(typeof at=="object"&&at!==null&&at.type===Tt&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case We:e:{for(var nr=at.key,Er=Ge;Er!==null;){if(Er.key===nr){if(nr=at.type,nr===Tt){if(Er.tag===7){o(ot,Er.sibling),Ge=c(Er,at.props.children),Ge.return=ot,ot=Ge;break e}}else if(Er.elementType===nr||typeof nr=="object"&&nr!==null&&nr.$$typeof===wt&&Ou(nr)===Er.type){o(ot,Er.sibling),Ge=c(Er,at.props),Ge.ref=El(ot,Er,at),Ge.return=ot,ot=Ge;break e}o(ot,Er);break}else t(ot,Er);Er=Er.sibling}at.type===Tt?(Ge=Bl(at.props.children,ot.mode,cn,at.key),Ge.return=ot,ot=Ge):(cn=Sc(at.type,at.key,at.props,null,ot.mode,cn),cn.ref=El(ot,Ge,at),cn.return=ot,ot=cn)}return I(ot);case ht:e:{for(Er=at.key;Ge!==null;){if(Ge.key===Er)if(Ge.tag===4&&Ge.stateNode.containerInfo===at.containerInfo&&Ge.stateNode.implementation===at.implementation){o(ot,Ge.sibling),Ge=c(Ge,at.children||[]),Ge.return=ot,ot=Ge;break e}else{o(ot,Ge);break}else t(ot,Ge);Ge=Ge.sibling}Ge=Kd(at,ot.mode,cn),Ge.return=ot,ot=Ge}return I(ot);case wt:return Er=at._init,qi(ot,Ge,Er(at._payload),cn)}if(di(at))return Qn(ot,Ge,at,cn);if(er(at))return qn(ot,Ge,at,cn);iu(ot,at)}return typeof at=="string"&&at!==""||typeof at=="number"?(at=""+at,Ge!==null&&Ge.tag===6?(o(ot,Ge.sibling),Ge=c(Ge,at),Ge.return=ot,ot=Ge):(o(ot,Ge),Ge=Hd(at,ot.mode,cn),Ge.return=ot,ot=Ge),I(ot)):o(ot,Ge)}return qi}var bl=Pu(!0),ac=Pu(!1),Ll=ks(null),au=null,Ys=null,Bu=null;function ku(){Bu=Ys=au=null}function wl(e){var t=Ll.current;ii(Ll),e._currentValue=t}function Qs(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function su(e,t){au=e,Bu=Ys=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(es=!0),e.firstContext=null)}function na(e){var t=e._currentValue;if(Bu!==e)if(e={context:e,memoizedValue:t,next:null},Ys===null){if(au===null)throw Error(x(308));Ys=e,au.dependencies={lanes:0,firstContext:e}}else Ys=Ys.next=e;return t}var fl=null;function Tu(e){fl===null?fl=[e]:fl.push(e)}function lu(e,t,o,a){var c=t.interleaved;return c===null?(o.next=o,Tu(t)):(o.next=c.next,c.next=o),t.interleaved=o,Qr(e,a)}function Qr(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Rs=!1;function Cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vs(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pl(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Lo&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Qr(e,o)}return c=a.interleaved,c===null?(t.next=t,Tu(a)):(t.next=c.next,c.next=t),a.interleaved=t,Qr(e,o)}function uu(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,wa(e,o)}}function zc(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var I={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=I:h=h.next=I,o=o.next}while(o!==null);h===null?c=h=t:h=h.next=t}else c=h=t;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function qa(e,t,o,a){var c=e.updateQueue;Rs=!1;var h=c.firstBaseUpdate,I=c.lastBaseUpdate,_e=c.shared.pending;if(_e!==null){c.shared.pending=null;var De=_e,pt=De.next;De.next=null,I===null?h=pt:I.next=pt,I=De;var Yt=e.alternate;Yt!==null&&(Yt=Yt.updateQueue,_e=Yt.lastBaseUpdate,_e!==I&&(_e===null?Yt.firstBaseUpdate=pt:_e.next=pt,Yt.lastBaseUpdate=De))}if(h!==null){var Jt=c.baseState;I=0,Yt=pt=De=null,_e=h;do{var $t=_e.lane,Ln=_e.eventTime;if((a&$t)===$t){Yt!==null&&(Yt=Yt.next={eventTime:Ln,lane:0,tag:_e.tag,payload:_e.payload,callback:_e.callback,next:null});e:{var Qn=e,qn=_e;switch($t=t,Ln=o,qn.tag){case 1:if(Qn=qn.payload,typeof Qn=="function"){Jt=Qn.call(Ln,Jt,$t);break e}Jt=Qn;break e;case 3:Qn.flags=Qn.flags&-65537|128;case 0:if(Qn=qn.payload,$t=typeof Qn=="function"?Qn.call(Ln,Jt,$t):Qn,$t==null)break e;Jt=Oe({},Jt,$t);break e;case 2:Rs=!0}}_e.callback!==null&&_e.lane!==0&&(e.flags|=64,$t=c.effects,$t===null?c.effects=[_e]:$t.push(_e))}else Ln={eventTime:Ln,lane:$t,tag:_e.tag,payload:_e.payload,callback:_e.callback,next:null},Yt===null?(pt=Yt=Ln,De=Jt):Yt=Yt.next=Ln,I|=$t;if(_e=_e.next,_e===null){if(_e=c.shared.pending,_e===null)break;$t=_e,_e=$t.next,$t.next=null,c.lastBaseUpdate=$t,c.shared.pending=null}}while(!0);if(Yt===null&&(De=Jt),c.baseState=De,c.firstBaseUpdate=pt,c.lastBaseUpdate=Yt,t=c.shared.interleaved,t!==null){c=t;do I|=c.lane,c=c.next;while(c!==t)}else h===null&&(c.shared.lanes=0);$l|=I,e.lanes=I,e.memoizedState=Jt}}function Ru(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(x(191,c));c.call(a)}}}var rs={},gs=ks(rs),Zs=ks(rs),ys=ks(rs);function Nl(e){if(e===rs)throw Error(x(174));return e}function lc(e,t){switch(ti(ys,t),ti(Zs,e),ti(gs,rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vr(t,e)}ii(gs),ti(gs,t)}function Fl(){ii(gs),ii(Zs),ii(ys)}function Wc(e){Nl(ys.current);var t=Nl(gs.current),o=vr(t,e.type);t!==o&&(ti(Zs,e),ti(gs,o))}function ju(e){Zs.current===e&&(ii(gs),ii(Zs))}var ki=ks(0);function cu(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function Ul(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var qs=Ee.ReactCurrentDispatcher,uc=Ee.ReactCurrentBatchConfig,Ja=0,Ci=null,Wi=null,Vr=null,Du=!1,cr=!1,tr=0,zl=0;function ra(){throw Error(x(321))}function Iu(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!ie(e[o],t[o]))return!1;return!0}function Mu(e,t,o,a,c,h){if(Ja=h,Ci=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qs.current=e===null||e.memoizedState===null?so:Ba,e=o(a,c),cr){h=0;do{if(cr=!1,tr=0,25<=h)throw Error(x(301));h+=1,Vr=Wi=null,t.updateQueue=null,qs.current=js,e=o(a,c)}while(cr)}if(qs.current=Ea,t=Wi!==null&&Wi.next!==null,Ja=0,Vr=Wi=Ci=null,Du=!1,t)throw Error(x(300));return e}function os(){var e=tr!==0;return tr=0,e}function Pa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vr===null?Ci.memoizedState=Vr=e:Vr=Vr.next=e,Vr}function is(){if(Wi===null){var e=Ci.alternate;e=e!==null?e.memoizedState:null}else e=Wi.next;var t=Vr===null?Ci.memoizedState:Vr.next;if(t!==null)Vr=t,Wi=e;else{if(e===null)throw Error(x(310));Wi=e,e={memoizedState:Wi.memoizedState,baseState:Wi.baseState,baseQueue:Wi.baseQueue,queue:Wi.queue,next:null},Vr===null?Ci.memoizedState=Vr=e:Vr=Vr.next=e}return Vr}function du(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=is(),o=t.queue;if(o===null)throw Error(x(311));o.lastRenderedReducer=e;var a=Wi,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var I=c.next;c.next=h.next,h.next=I}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _e=I=null,De=null,pt=h;do{var Yt=pt.lane;if((Ja&Yt)===Yt)De!==null&&(De=De.next={lane:0,action:pt.action,hasEagerState:pt.hasEagerState,eagerState:pt.eagerState,next:null}),a=pt.hasEagerState?pt.eagerState:e(a,pt.action);else{var Jt={lane:Yt,action:pt.action,hasEagerState:pt.hasEagerState,eagerState:pt.eagerState,next:null};De===null?(_e=De=Jt,I=a):De=De.next=Jt,Ci.lanes|=Yt,$l|=Yt}pt=pt.next}while(pt!==null&&pt!==h);De===null?I=a:De.next=_e,ie(a,t.memoizedState)||(es=!0),t.memoizedState=a,t.baseState=I,t.baseQueue=De,o.lastRenderedState=a}if(e=o.interleaved,e!==null){c=e;do h=c.lane,Ci.lanes|=h,$l|=h,c=c.next;while(c!==e)}else c===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function cc(e){var t=is(),o=t.queue;if(o===null)throw Error(x(311));o.lastRenderedReducer=e;var a=o.dispatch,c=o.pending,h=t.memoizedState;if(c!==null){o.pending=null;var I=c=c.next;do h=e(h,I.action),I=I.next;while(I!==c);ie(h,t.memoizedState)||(es=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),o.lastRenderedState=h}return[h,a]}function Lu(){}function Wl(e,t){var o=Ci,a=is(),c=t(),h=!ie(a.memoizedState,c);if(h&&(a.memoizedState=c,es=!0),a=a.queue,bt(L.bind(null,o,a,e),[e]),a.getSnapshot!==t||h||Vr!==null&&Vr.memoizedState.tag&1){if(o.flags|=2048,je(9,Hc.bind(null,o,a,c,t),void 0,null),ba===null)throw Error(x(349));(Ja&30)!==0||Vc(o,t,c)}return c}function Vc(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=Ci.updateQueue,t===null?(t={lastEffect:null,stores:null},Ci.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Hc(e,t,o,a){t.value=o,t.getSnapshot=a,W(t)&&G(e)}function L(e,t,o){return o(function(){W(t)&&G(e)})}function W(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!ie(e,o)}catch(a){return!0}}function G(e){var t=Qr(e,1);t!==null&&Ms(t,e,1,-1)}function Y(e){var t=Pa();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:du,lastRenderedState:e},t.queue=e,e=e.dispatch=oa.bind(null,Ci,e),[t.memoizedState,e]}function je(e,t,o,a){return e={tag:e,create:t,destroy:o,deps:a,next:null},t=Ci.updateQueue,t===null?(t={lastEffect:null,stores:null},Ci.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e)),e}function ut(){return is().memoizedState}function gt(e,t,o,a){var c=Pa();Ci.flags|=e,c.memoizedState=je(1|t,o,void 0,a===void 0?null:a)}function Qt(e,t,o,a){var c=is();a=a===void 0?null:a;var h=void 0;if(Wi!==null){var I=Wi.memoizedState;if(h=I.destroy,a!==null&&Iu(a,I.deps)){c.memoizedState=je(t,o,h,a);return}}Ci.flags|=e,c.memoizedState=je(1|t,o,h,a)}function Kt(e,t){return gt(8390656,8,e,t)}function bt(e,t){return Qt(2048,8,e,t)}function At(e,t){return Qt(4,2,e,t)}function vn(e,t){return Qt(4,4,e,t)}function mr(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rr(e,t,o){return o=o!=null?o.concat([e]):null,Qt(4,4,mr.bind(null,t,e),o)}function Co(){}function Qo(e,t){var o=is();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Iu(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function ai(e,t){var o=is();t=t===void 0?null:t;var a=o.memoizedState;return a!==null&&t!==null&&Iu(t,a[1])?a[0]:(e=e(),o.memoizedState=[e,t],e)}function Ui(e,t,o){return(Ja&21)===0?(e.baseState&&(e.baseState=!1,es=!0),e.memoizedState=o):(ie(o,t)||(o=Ni(),Ci.lanes|=o,$l|=o,e.baseState=!0),t)}function xi(e,t){var o=or;or=o!==0&&4>o?o:4,e(!0);var a=uc.transition;uc.transition={};try{e(!1),t()}finally{or=o,uc.transition=a}}function yo(){return is().memoizedState}function Ai(e,t,o){var a=Pl(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Qi(e))Js(t,o);else if(o=lu(e,t,o,a),o!==null){var c=$a();Ms(o,e,a,c),Vo(o,t,a)}}function oa(e,t,o){var a=Pl(e),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))Js(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var I=t.lastRenderedState,_e=h(I,o);if(c.hasEagerState=!0,c.eagerState=_e,ie(_e,I)){var De=t.interleaved;De===null?(c.next=c,Tu(t)):(c.next=De.next,De.next=c),t.interleaved=c;return}}catch(pt){}o=lu(e,t,c,a),o!==null&&(c=$a(),Ms(o,e,a,c),Vo(o,t,a))}}function Qi(e){var t=e.alternate;return e===Ci||t!==null&&t===Ci}function Js(e,t){cr=Du=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function Vo(e,t,o){if((o&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,wa(e,o)}}var Ea={readContext:na,useCallback:ra,useContext:ra,useEffect:ra,useImperativeHandle:ra,useInsertionEffect:ra,useLayoutEffect:ra,useMemo:ra,useReducer:ra,useRef:ra,useState:ra,useDebugValue:ra,useDeferredValue:ra,useTransition:ra,useMutableSource:ra,useSyncExternalStore:ra,useId:ra,unstable_isNewReconciler:!1},so={readContext:na,useCallback:function(e,t){return Pa().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:Kt,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,gt(4194308,4,mr.bind(null,t,e),o)},useLayoutEffect:function(e,t){return gt(4194308,4,e,t)},useInsertionEffect:function(e,t){return gt(4,2,e,t)},useMemo:function(e,t){var o=Pa();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var a=Pa();return t=o!==void 0?o(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Ai.bind(null,Ci,e),[a.memoizedState,e]},useRef:function(e){var t=Pa();return e={current:e},t.memoizedState=e},useState:Y,useDebugValue:Co,useDeferredValue:function(e){return Pa().memoizedState=e},useTransition:function(){var e=Y(!1),t=e[0];return e=xi.bind(null,e[1]),Pa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var a=Ci,c=Pa();if(yi){if(o===void 0)throw Error(x(407));o=o()}else{if(o=t(),ba===null)throw Error(x(349));(Ja&30)!==0||Vc(a,t,o)}c.memoizedState=o;var h={value:o,getSnapshot:t};return c.queue=h,Kt(L.bind(null,a,h,e),[e]),a.flags|=2048,je(9,Hc.bind(null,a,h,o,t),void 0,null),o},useId:function(){var e=Pa(),t=ba.identifierPrefix;if(yi){var o=ms,a=hs;o=(a&~(1<<32-Gt(a)-1)).toString(32)+o,t=":"+t+"R"+o,o=tr++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=zl++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ba={readContext:na,useCallback:Qo,useContext:na,useEffect:bt,useImperativeHandle:Rr,useInsertionEffect:At,useLayoutEffect:vn,useMemo:ai,useReducer:xl,useRef:ut,useState:function(){return xl(du)},useDebugValue:Co,useDeferredValue:function(e){var t=is();return Ui(t,Wi.memoizedState,e)},useTransition:function(){var e=xl(du)[0],t=is().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:Wl,useId:yo,unstable_isNewReconciler:!1},js={readContext:na,useCallback:Qo,useContext:na,useEffect:bt,useImperativeHandle:Rr,useInsertionEffect:At,useLayoutEffect:vn,useMemo:ai,useReducer:cc,useRef:ut,useState:function(){return cc(du)},useDebugValue:Co,useDeferredValue:function(e){var t=is();return Wi===null?t.memoizedState=e:Ui(t,Wi.memoizedState,e)},useTransition:function(){var e=cc(du)[0],t=is().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:Wl,useId:yo,unstable_isNewReconciler:!1};function As(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function el(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:Oe({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var fu={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var a=$a(),c=Pl(e),h=vs(a,c);h.payload=t,o!=null&&(h.callback=o),t=pl(e,h,c),t!==null&&(Ms(t,e,c,a),uu(t,e,c))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=$a(),c=Pl(e),h=vs(a,c);h.tag=1,h.payload=t,o!=null&&(h.callback=o),t=pl(e,h,c),t!==null&&(Ms(t,e,c,a),uu(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=$a(),a=Pl(e),c=vs(o,a);c.tag=2,t!=null&&(c.callback=t),t=pl(e,c,a),t!==null&&(Ms(t,e,a,o),uu(t,e,a))}};function hd(e,t,o,a,c,h,I){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,h,I):t.prototype&&t.prototype.isPureReactComponent?!Pe(o,a)||!Pe(c,h):!0}function of(e,t,o){var a=!1,c=fs,h=t.contextType;return typeof h=="object"&&h!==null?h=na(h):(c=Aa(t)?Hs:ua.current,a=t.contextTypes,h=(a=a!=null)?cl(e,c):fs),t=new t(o,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fu,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),t}function dc(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&fu.enqueueReplaceState(t,t.state,null)}function md(e,t,o,a){var c=e.stateNode;c.props=o,c.state=e.memoizedState,c.refs={},Cl(e);var h=t.contextType;typeof h=="object"&&h!==null?c.context=na(h):(h=Aa(t)?Hs:ua.current,c.context=cl(e,h)),c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(el(e,t,h,o),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&fu.enqueueReplaceState(c,c.state,null),qa(e,o,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Vl(e,t){try{var o="",a=t;do o+=rt(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:c,digest:null}}function vd(e,t,o){return{value:e,source:null,stack:o!=null?o:null,digest:t!=null?t:null}}function pu(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,o){o=vs(-1,o),o.tag=3,o.payload={element:null};var a=t.value;return o.callback=function(){_c||(_c=!0,Jc=a),pu(e,t)},o}function Kc(e,t,o){o=vs(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;o.payload=function(){return a(c)},o.callback=function(){pu(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pu(e,t),typeof a!="function"&&(Sl===null?Sl=new Set([this]):Sl.add(this));var I=t.stack;this.componentDidCatch(t.value,{componentStack:I!==null?I:""})}),o}function af(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new Ff;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(o)||(c.add(o),e=bf.bind(null,e,t,o),t.then(e,e))}function sf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yd(e,t,o,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=vs(-1,1),t.tag=2,pl(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var lf=Ee.ReactCurrentOwner,es=!1;function Va(e,t,o,a){t.child=e===null?ac(t,null,o,a):bl(t,e.child,o,a)}function uf(e,t,o,a,c){o=o.render;var h=t.ref;return su(t,c),a=Mu(e,t,o,a,h,c),o=os(),e!==null&&!es?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ml(e,t,c)):(yi&&o&&oc(t),t.flags|=1,Va(e,t,a,c),t.child)}function Ad(e,t,o,a,c){if(e===null){var h=o.type;return typeof h=="function"&&!rd(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=h,Uf(e,t,h,a,c)):(e=Sc(o.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&c)===0){var I=h.memoizedProps;if(o=o.compare,o=o!==null?o:Pe,o(I,a)&&e.ref===t.ref)return ml(e,t,c)}return t.flags|=1,e=Ql(h,a),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,o,a,c){if(e!==null){var h=e.memoizedProps;if(Pe(h,a)&&e.ref===t.ref)if(es=!1,t.pendingProps=a=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(es=!0);else return t.lanes=e.lanes,ml(e,t,c)}return $c(e,t,o,a,c)}function cf(e,t,o){var a=t.pendingProps,c=a.children,h=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ti(zu,_s),_s|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ti(zu,_s),_s|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ti(zu,_s),_s|=a}else h!==null?(a=h.baseLanes|o,t.memoizedState=null):a=o,ti(zu,_s),_s|=a;return Va(e,t,c,o),t.child}function _d(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function $c(e,t,o,a,c){var h=Aa(o)?Hs:ua.current;return h=cl(t,h),su(t,c),o=Mu(e,t,o,a,h,c),a=os(),e!==null&&!es?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ml(e,t,c)):(yi&&a&&oc(t),t.flags|=1,Va(e,t,o,c),t.child)}function df(e,t,o,a,c){if(Aa(o)){var h=!0;Jl(t)}else h=!1;if(su(t,c),t.stateNode===null)fc(e,t),of(t,o,a),md(t,o,a,c),a=!0;else if(e===null){var I=t.stateNode,_e=t.memoizedProps;I.props=_e;var De=I.context,pt=o.contextType;typeof pt=="object"&&pt!==null?pt=na(pt):(pt=Aa(o)?Hs:ua.current,pt=cl(t,pt));var Yt=o.getDerivedStateFromProps,Jt=typeof Yt=="function"||typeof I.getSnapshotBeforeUpdate=="function";Jt||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(_e!==a||De!==pt)&&dc(t,I,a,pt),Rs=!1;var $t=t.memoizedState;I.state=$t,qa(t,a,I,c),De=t.memoizedState,_e!==a||$t!==De||Sa.current||Rs?(typeof Yt=="function"&&(el(t,o,Yt,a),De=t.memoizedState),(_e=Rs||hd(t,o,_e,a,$t,De,pt))?(Jt||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(t.flags|=4194308)):(typeof I.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=De),I.props=a,I.state=De,I.context=pt,a=_e):(typeof I.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{I=t.stateNode,sc(e,t),_e=t.memoizedProps,pt=t.type===t.elementType?_e:As(t.type,_e),I.props=pt,Jt=t.pendingProps,$t=I.context,De=o.contextType,typeof De=="object"&&De!==null?De=na(De):(De=Aa(o)?Hs:ua.current,De=cl(t,De));var Ln=o.getDerivedStateFromProps;(Yt=typeof Ln=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(_e!==Jt||$t!==De)&&dc(t,I,a,De),Rs=!1,$t=t.memoizedState,I.state=$t,qa(t,a,I,c);var Qn=t.memoizedState;_e!==Jt||$t!==Qn||Sa.current||Rs?(typeof Ln=="function"&&(el(t,o,Ln,a),Qn=t.memoizedState),(pt=Rs||hd(t,o,pt,a,$t,Qn,De)||!1)?(Yt||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(a,Qn,De),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(a,Qn,De)),typeof I.componentDidUpdate=="function"&&(t.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof I.componentDidUpdate!="function"||_e===e.memoizedProps&&$t===e.memoizedState||(t.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||_e===e.memoizedProps&&$t===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=Qn),I.props=a,I.state=Qn,I.context=De,a=pt):(typeof I.componentDidUpdate!="function"||_e===e.memoizedProps&&$t===e.memoizedState||(t.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||_e===e.memoizedProps&&$t===e.memoizedState||(t.flags|=1024),a=!1)}return Gc(e,t,o,a,h,c)}function Gc(e,t,o,a,c,h){_d(e,t);var I=(t.flags&128)!==0;if(!a&&!I)return c&&bu(t,o,!1),ml(e,t,h);a=t.stateNode,lf.current=t;var _e=I&&typeof o.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&I?(t.child=bl(t,e.child,null,h),t.child=bl(t,null,_e,h)):Va(e,t,_e,h),t.memoizedState=a.state,c&&bu(t,o,!0),t.child}function Ed(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),lc(e,t.containerInfo)}function bd(e,t,o,a,c){return Ml(),Su(c),t.flags|=256,Va(e,t,o,a),t.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Xc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,o){var a=t.pendingProps,c=ki.current,h=!1,I=(t.flags&128)!==0,_e;if((_e=I)||(_e=e!==null&&e.memoizedState===null?!1:(c&2)!==0),_e?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),ti(ki,c&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(I=a.children,e=a.fallback,h?(a=t.mode,h=t.child,I={mode:"hidden",children:I},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=I):h=Oc(I,a,0,null),e=Bl(e,a,o,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=Xc(o),t.memoizedState=wd,e):Nu(t,I));if(c=e.memoizedState,c!==null&&(_e=c.dehydrated,_e!==null))return zf(e,t,I,a,_e,c,o);if(h){h=a.fallback,I=t.mode,c=e.child,_e=c.sibling;var De={mode:"hidden",children:a.children};return(I&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=De,t.deletions=null):(a=Ql(c,De),a.subtreeFlags=c.subtreeFlags&14680064),_e!==null?h=Ql(_e,h):(h=Bl(h,I,o,null),h.flags|=2),h.return=t,a.return=t,a.sibling=h,t.child=a,a=h,h=t.child,I=e.child.memoizedState,I=I===null?Xc(o):{baseLanes:I.baseLanes|o,cachePool:null,transitions:I.transitions},h.memoizedState=I,h.childLanes=e.childLanes&~o,t.memoizedState=wd,a}return h=e.child,e=h.sibling,a=Ql(h,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=o),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a}function Nu(e,t){return t=Oc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fu(e,t,o,a){return a!==null&&Su(a),bl(t,e.child,null,o),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,o,a,c,h,I){if(o)return t.flags&256?(t.flags&=-257,a=vd(Error(x(422))),Fu(e,t,I,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=a.fallback,c=t.mode,a=Oc({mode:"visible",children:a.children},c,0,null),h=Bl(h,c,I,null),h.flags|=2,a.return=t,h.return=t,a.sibling=h,t.child=a,(t.mode&1)!==0&&bl(t,e.child,null,I),t.child.memoizedState=Xc(I),t.memoizedState=wd,h);if((t.mode&1)===0)return Fu(e,t,I,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _e=a.dgst;return a=_e,h=Error(x(419)),a=vd(h,a,void 0),Fu(e,t,I,a)}if(_e=(I&e.childLanes)!==0,es||_e){if(a=ba,a!==null){switch(I&-I){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|I))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Qr(e,c),Ms(a,e,c,-1))}return nd(),a=vd(Error(x(421))),Fu(e,t,I,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),c._reactRetry=t,null):(e=h.treeContext,_a=Bs(c.nextSibling),Oa=t,yi=!0,ns=null,e!==null&&(za[Wa++]=hs,za[Wa++]=ms,za[Wa++]=$s,hs=e.id,ms=e.overflow,$s=t),t=Nu(t,a.children),t.flags|=4096,t)}function hu(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qs(e.return,t,o)}function Qc(e,t,o,a,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Cd(e,t,o){var a=t.pendingProps,c=a.revealOrder,h=a.tail;if(Va(e,t,a.children,o),a=ki.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,o,t);else if(e.tag===19)hu(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ti(ki,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(o=t.child,c=null;o!==null;)e=o.alternate,e!==null&&cu(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=t.child,t.child=null):(c=o.sibling,o.sibling=null),Qc(t,!1,c,o,h);break;case"backwards":for(o=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&cu(e)===null){t.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}Qc(t,!0,o,null,h);break;case"together":Qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fc(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ml(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),$l|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,o=Ql(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Ql(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Wf(e,t,o){switch(t.tag){case 3:Ed(t),Ml();break;case 5:Wc(t);break;case 1:Aa(t.type)&&Jl(t);break;case 4:lc(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;ti(Ll,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ti(ki,ki.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?Yc(e,t,o):(ti(ki,ki.current&1),e=ml(e,t,o),e!==null?e.sibling:null);ti(ki,ki.current&1);break;case 19:if(a=(o&t.childLanes)!==0,(e.flags&128)!==0){if(a)return Cd(e,t,o);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ti(ki,ki.current),a)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,o)}return ml(e,t,o)}var ff,xd,Vf,Hl;ff=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xd=function(){},Vf=function(e,t,o,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,Nl(gs.current);var h=null;switch(o){case"input":c=mn(e,c),a=mn(e,a),h=[];break;case"select":c=Oe({},c,{value:void 0}),a=Oe({},a,{value:void 0}),h=[];break;case"textarea":c=So(e,c),a=So(e,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=xa)}Bo(o,a);var I;o=null;for(pt in c)if(!a.hasOwnProperty(pt)&&c.hasOwnProperty(pt)&&c[pt]!=null)if(pt==="style"){var _e=c[pt];for(I in _e)_e.hasOwnProperty(I)&&(o||(o={}),o[I]="")}else pt!=="dangerouslySetInnerHTML"&&pt!=="children"&&pt!=="suppressContentEditableWarning"&&pt!=="suppressHydrationWarning"&&pt!=="autoFocus"&&(d.hasOwnProperty(pt)?h||(h=[]):(h=h||[]).push(pt,null));for(pt in a){var De=a[pt];if(_e=c!=null?c[pt]:void 0,a.hasOwnProperty(pt)&&De!==_e&&(De!=null||_e!=null))if(pt==="style")if(_e){for(I in _e)!_e.hasOwnProperty(I)||De&&De.hasOwnProperty(I)||(o||(o={}),o[I]="");for(I in De)De.hasOwnProperty(I)&&_e[I]!==De[I]&&(o||(o={}),o[I]=De[I])}else o||(h||(h=[]),h.push(pt,o)),o=De;else pt==="dangerouslySetInnerHTML"?(De=De?De.__html:void 0,_e=_e?_e.__html:void 0,De!=null&&_e!==De&&(h=h||[]).push(pt,De)):pt==="children"?typeof De!="string"&&typeof De!="number"||(h=h||[]).push(pt,""+De):pt!=="suppressContentEditableWarning"&&pt!=="suppressHydrationWarning"&&(d.hasOwnProperty(pt)?(De!=null&&pt==="onScroll"&&ei("scroll",e),h||_e===De||(h=[])):(h=h||[]).push(pt,De))}o&&(h=h||[]).push("style",o);var pt=h;(t.updateQueue=pt)&&(t.flags|=4)}},Hl=function(e,t,o,a){o!==a&&(t.flags|=4)};function pc(e,t){if(!yi)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ha(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function pf(e,t,o){var a=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ha(t),null;case 1:return Aa(t.type)&&ql(),Ha(t),null;case 3:return a=t.stateNode,Fl(),ii(Sa),ii(ua),Ul(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ns!==null&&(Fd(ns),ns=null))),xd(e,t),Ha(t),null;case 5:ju(t);var c=Nl(ys.current);if(o=t.type,e!==null&&t.stateNode!=null)Vf(e,t,o,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(x(166));return Ha(t),null}if(e=Nl(gs.current),Dl(t)){a=t.stateNode,o=t.type;var h=t.memoizedProps;switch(a[ya]=t,a[Zl]=h,e=(t.mode&1)!==0,o){case"dialog":ei("cancel",a),ei("close",a);break;case"iframe":case"object":case"embed":ei("load",a);break;case"video":case"audio":for(c=0;c<go.length;c++)ei(go[c],a);break;case"source":ei("error",a);break;case"img":case"image":case"link":ei("error",a),ei("load",a);break;case"details":ei("toggle",a);break;case"input":Lr(a,h),ei("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ei("invalid",a);break;case"textarea":Ra(a,h),ei("invalid",a)}Bo(o,h),c=null;for(var I in h)if(h.hasOwnProperty(I)){var _e=h[I];I==="children"?typeof _e=="string"?a.textContent!==_e&&(h.suppressHydrationWarning!==!0&&cs(a.textContent,_e,e),c=["children",_e]):typeof _e=="number"&&a.textContent!==""+_e&&(h.suppressHydrationWarning!==!0&&cs(a.textContent,_e,e),c=["children",""+_e]):d.hasOwnProperty(I)&&_e!=null&&I==="onScroll"&&ei("scroll",a)}switch(o){case"input":kt(a),Nr(a,h,!0);break;case"textarea":kt(a),Ga(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=xa)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{I=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=I.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=I.createElement(o,{is:a.is}):(e=I.createElement(o),o==="select"&&(I=e,a.multiple?I.multiple=!0:a.size&&(I.size=a.size))):e=I.createElementNS(e,o),e[ya]=t,e[Zl]=a,ff(e,t,!1,!1),t.stateNode=e;e:{switch(I=co(o,a),o){case"dialog":ei("cancel",e),ei("close",e),c=a;break;case"iframe":case"object":case"embed":ei("load",e),c=a;break;case"video":case"audio":for(c=0;c<go.length;c++)ei(go[c],e);c=a;break;case"source":ei("error",e),c=a;break;case"img":case"image":case"link":ei("error",e),ei("load",e),c=a;break;case"details":ei("toggle",e),c=a;break;case"input":Lr(e,a),c=mn(e,a),ei("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=Oe({},a,{value:void 0}),ei("invalid",e);break;case"textarea":Ra(e,a),c=So(e,a),ei("invalid",e);break;default:c=a}Bo(o,c),_e=c;for(h in _e)if(_e.hasOwnProperty(h)){var De=_e[h];h==="style"?Zn(e,De):h==="dangerouslySetInnerHTML"?(De=De?De.__html:void 0,De!=null&&an(e,De)):h==="children"?typeof De=="string"?(o!=="textarea"||De!=="")&&wr(e,De):typeof De=="number"&&wr(e,""+De):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(d.hasOwnProperty(h)?De!=null&&h==="onScroll"&&ei("scroll",e):De!=null&&Be(e,h,De,I))}switch(o){case"input":kt(e),Nr(e,a,!1);break;case"textarea":kt(e),Ga(e);break;case"option":a.value!=null&&e.setAttribute("value",""+nt(a.value));break;case"select":e.multiple=!!a.multiple,h=a.value,h!=null?xo(e,!!a.multiple,h,!1):a.defaultValue!=null&&xo(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ha(t),null;case 6:if(e&&t.stateNode!=null)Hl(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(x(166));if(o=Nl(ys.current),Nl(gs.current),Dl(t)){if(a=t.stateNode,o=t.memoizedProps,a[ya]=t,(h=a.nodeValue!==o)&&(e=Oa,e!==null))switch(e.tag){case 3:cs(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(a.nodeValue,o,(e.mode&1)!==0)}h&&(t.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[ya]=t,t.stateNode=a}return Ha(t),null;case 13:if(ii(ki),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(yi&&_a!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Il(),Ml(),t.flags|=98560,h=!1;else if(h=Dl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!h)throw Error(x(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(x(317));h[ya]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ha(t),h=!1}else ns!==null&&(Fd(ns),ns=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ki.current&1)!==0?ia===0&&(ia=3):nd())),t.updateQueue!==null&&(t.flags|=4),Ha(t),null);case 4:return Fl(),xd(e,t),e===null&&la(t.stateNode.containerInfo),Ha(t),null;case 10:return wl(t.type._context),Ha(t),null;case 17:return Aa(t.type)&&ql(),Ha(t),null;case 19:if(ii(ki),h=t.memoizedState,h===null)return Ha(t),null;if(a=(t.flags&128)!==0,I=h.rendering,I===null)if(a)pc(h,!1);else{if(ia!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(I=cu(e),I!==null){for(t.flags|=128,pc(h,!1),a=I.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=o,o=t.child;o!==null;)h=o,e=a,h.flags&=14680066,I=h.alternate,I===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=I.childLanes,h.lanes=I.lanes,h.child=I.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=I.memoizedProps,h.memoizedState=I.memoizedState,h.updateQueue=I.updateQueue,h.type=I.type,e=I.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ti(ki,ki.current&1|2),t.child}e=e.sibling}h.tail!==null&&Sr()>Vu&&(t.flags|=128,a=!0,pc(h,!1),t.lanes=4194304)}else{if(!a)if(e=cu(I),e!==null){if(t.flags|=128,a=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),pc(h,!0),h.tail===null&&h.tailMode==="hidden"&&!I.alternate&&!yi)return Ha(t),null}else 2*Sr()-h.renderingStartTime>Vu&&o!==1073741824&&(t.flags|=128,a=!0,pc(h,!1),t.lanes=4194304);h.isBackwards?(I.sibling=t.child,t.child=I):(o=h.last,o!==null?o.sibling=I:t.child=I,h.last=I)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=Sr(),t.sibling=null,o=ki.current,ti(ki,a?o&1|2:o&1),t):(Ha(t),null);case 22:case 23:return td(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(_s&1073741824)!==0&&(Ha(t),t.subtreeFlags&6&&(t.flags|=8192)):Ha(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Hf(e,t){switch(_l(t),t.tag){case 1:return Aa(t.type)&&ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fl(),ii(Sa),ii(ua),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ju(t),null;case 13:if(ii(ki),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ii(ki),null;case 4:return Fl(),null;case 10:return wl(t.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var hc=!1,Ka=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,Hn=null;function Mi(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Vi(e,t,a)}else o.current=null}function mc(e,t,o){try{o()}catch(a){Vi(e,t,a)}}var hf=!1;function mu(e,t){if(Ws=ao,e=_(),j(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch(cn){o=null;break e}var I=0,_e=-1,De=-1,pt=0,Yt=0,Jt=e,$t=null;t:for(;;){for(var Ln;Jt!==o||c!==0&&Jt.nodeType!==3||(_e=I+c),Jt!==h||a!==0&&Jt.nodeType!==3||(De=I+a),Jt.nodeType===3&&(I+=Jt.nodeValue.length),(Ln=Jt.firstChild)!==null;)$t=Jt,Jt=Ln;for(;;){if(Jt===e)break t;if($t===o&&++pt===c&&(_e=I),$t===h&&++Yt===a&&(De=I),(Ln=Jt.nextSibling)!==null)break;Jt=$t,$t=Jt.parentNode}Jt=Ln}o=_e===-1||De===-1?null:{start:_e,end:De}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ps={focusedElem:e,selectionRange:o},ao=!1,Hn=t;Hn!==null;)if(t=Hn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Hn=e;else for(;Hn!==null;){t=Hn;try{var Qn=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Qn!==null){var qn=Qn.memoizedProps,qi=Qn.memoizedState,ot=t.stateNode,Ge=ot.getSnapshotBeforeUpdate(t.elementType===t.type?qn:As(t.type,qn),qi);ot.__reactInternalSnapshotBeforeUpdate=Ge}break;case 3:var at=t.stateNode.containerInfo;at.nodeType===1?at.textContent="":at.nodeType===9&&at.documentElement&&at.removeChild(at.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(cn){Vi(t,t.return,cn)}if(e=t.sibling,e!==null){e.return=t.return,Hn=e;break}Hn=t.return}return Qn=hf,hf=!1,Qn}function Uu(e,t,o){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&mc(t,o,h)}c=c.next}while(c!==a)}}function vc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==t)}}function Zc(e){var t=e.ref;if(t!==null){var o=e.stateNode;e.tag,e=o,typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ya],delete t[Zl],delete t[jl],delete t[Lc],delete t[Nc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=xa));else if(a!==4&&(e=e.child,e!==null))for(Pd(e,t,o),e=e.sibling;e!==null;)Pd(e,t,o),e=e.sibling}function Bd(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Bd(e,t,o),e=e.sibling;e!==null;)Bd(e,t,o),e=e.sibling}var ka=null,tl=!1;function Kl(e,t,o){for(o=o.child;o!==null;)vf(e,t,o),o=o.sibling}function vf(e,t,o){if(Fo&&typeof Fo.onCommitFiberUnmount=="function")try{Fo.onCommitFiberUnmount(ha,o)}catch(_e){}switch(o.tag){case 5:Ka||Mi(o,t);case 6:var a=ka,c=tl;ka=null,Kl(e,t,o),ka=a,tl=c,ka!==null&&(tl?(e=ka,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):ka.removeChild(o.stateNode));break;case 18:ka!==null&&(tl?(e=ka,o=o.stateNode,e.nodeType===8?yu(e.parentNode,o):e.nodeType===1&&yu(e,o),fn(e)):yu(ka,o.stateNode));break;case 4:a=ka,c=tl,ka=o.stateNode.containerInfo,tl=!0,Kl(e,t,o),ka=a,tl=c;break;case 0:case 11:case 14:case 15:if(!Ka&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,I=h.destroy;h=h.tag,I!==void 0&&((h&2)!==0||(h&4)!==0)&&mc(o,t,I),c=c.next}while(c!==a)}Kl(e,t,o);break;case 1:if(!Ka&&(Mi(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_e){Vi(o,t,_e)}Kl(e,t,o);break;case 21:Kl(e,t,o);break;case 22:o.mode&1?(Ka=(a=Ka)||o.memoizedState!==null,Kl(e,t,o),Ka=a):Kl(e,t,o);break;default:Kl(e,t,o)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Kf),t.forEach(function(a){var c=Zf.bind(null,e,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Ds(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=e,I=t,_e=I;e:for(;_e!==null;){switch(_e.tag){case 5:ka=_e.stateNode,tl=!1;break e;case 3:ka=_e.stateNode.containerInfo,tl=!0;break e;case 4:ka=_e.stateNode.containerInfo,tl=!0;break e}_e=_e.return}if(ka===null)throw Error(x(160));vf(h,I,c),ka=null,tl=!1;var De=c.alternate;De!==null&&(De.return=null),c.return=null}catch(pt){Vi(c,t,pt)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Td(t,e),t=t.sibling}function Td(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ds(t,e),vl(e),a&4){try{Uu(3,e,e.return),vc(3,e)}catch(qn){Vi(e,e.return,qn)}try{Uu(5,e,e.return)}catch(qn){Vi(e,e.return,qn)}}break;case 1:Ds(t,e),vl(e),a&512&&o!==null&&Mi(o,o.return);break;case 5:if(Ds(t,e),vl(e),a&512&&o!==null&&Mi(o,o.return),e.flags&32){var c=e.stateNode;try{wr(c,"")}catch(qn){Vi(e,e.return,qn)}}if(a&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,I=o!==null?o.memoizedProps:h,_e=e.type,De=e.updateQueue;if(e.updateQueue=null,De!==null)try{_e==="input"&&h.type==="radio"&&h.name!=null&&uo(c,h),co(_e,I);var pt=co(_e,h);for(I=0;I<De.length;I+=2){var Yt=De[I],Jt=De[I+1];Yt==="style"?Zn(c,Jt):Yt==="dangerouslySetInnerHTML"?an(c,Jt):Yt==="children"?wr(c,Jt):Be(c,Yt,Jt,pt)}switch(_e){case"input":_i(c,h);break;case"textarea":Gr(c,h);break;case"select":var $t=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ln=h.value;Ln!=null?xo(c,!!h.multiple,Ln,!1):$t!==!!h.multiple&&(h.defaultValue!=null?xo(c,!!h.multiple,h.defaultValue,!0):xo(c,!!h.multiple,h.multiple?[]:"",!1))}c[Zl]=h}catch(qn){Vi(e,e.return,qn)}}break;case 6:if(Ds(t,e),vl(e),a&4){if(e.stateNode===null)throw Error(x(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(qn){Vi(e,e.return,qn)}}break;case 3:if(Ds(t,e),vl(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{fn(t.containerInfo)}catch(qn){Vi(e,e.return,qn)}break;case 4:Ds(t,e),vl(e);break;case 13:Ds(t,e),vl(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Md=Sr())),a&4&&kd(e);break;case 22:if(Yt=o!==null&&o.memoizedState!==null,e.mode&1?(Ka=(pt=Ka)||Yt,Ds(t,e),Ka=pt):Ds(t,e),vl(e),a&8192){if(pt=e.memoizedState!==null,(e.stateNode.isHidden=pt)&&!Yt&&(e.mode&1)!==0)for(Hn=e,Yt=e.child;Yt!==null;){for(Jt=Hn=Yt;Hn!==null;){switch($t=Hn,Ln=$t.child,$t.tag){case 0:case 11:case 14:case 15:Uu(4,$t,$t.return);break;case 1:Mi($t,$t.return);var Qn=$t.stateNode;if(typeof Qn.componentWillUnmount=="function"){a=$t,o=$t.return;try{t=a,Qn.props=t.memoizedProps,Qn.state=t.memoizedState,Qn.componentWillUnmount()}catch(qn){Vi(a,o,qn)}}break;case 5:Mi($t,$t.return);break;case 22:if($t.memoizedState!==null){jd(Jt);continue}}Ln!==null?(Ln.return=$t,Hn=Ln):jd(Jt)}Yt=Yt.sibling}e:for(Yt=null,Jt=e;;){if(Jt.tag===5){if(Yt===null){Yt=Jt;try{c=Jt.stateNode,pt?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_e=Jt.stateNode,De=Jt.memoizedProps.style,I=De!=null&&De.hasOwnProperty("display")?De.display:null,_e.style.display=Ar("display",I))}catch(qn){Vi(e,e.return,qn)}}}else if(Jt.tag===6){if(Yt===null)try{Jt.stateNode.nodeValue=pt?"":Jt.memoizedProps}catch(qn){Vi(e,e.return,qn)}}else if((Jt.tag!==22&&Jt.tag!==23||Jt.memoizedState===null||Jt===e)&&Jt.child!==null){Jt.child.return=Jt,Jt=Jt.child;continue}if(Jt===e)break e;for(;Jt.sibling===null;){if(Jt.return===null||Jt.return===e)break e;Yt===Jt&&(Yt=null),Jt=Jt.return}Yt===Jt&&(Yt=null),Jt.sibling.return=Jt.return,Jt=Jt.sibling}}break;case 19:Ds(t,e),vl(e),a&4&&kd(e);break;case 21:break;default:Ds(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(Od(o)){var a=o;break e}o=o.return}throw Error(x(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(wr(c,""),a.flags&=-33);var h=mf(e);Bd(e,h,c);break;case 3:case 4:var I=a.stateNode.containerInfo,_e=mf(e);Pd(e,_e,I);break;default:throw Error(x(161))}}catch(De){Vi(e,e.return,De)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,o){Hn=e,gf(e,t,o)}function gf(e,t,o){for(var a=(e.mode&1)!==0;Hn!==null;){var c=Hn,h=c.child;if(c.tag===22&&a){var I=c.memoizedState!==null||hc;if(!I){var _e=c.alternate,De=_e!==null&&_e.memoizedState!==null||Ka;_e=hc;var pt=Ka;if(hc=I,(Ka=De)&&!pt)for(Hn=c;Hn!==null;)I=Hn,De=I.child,I.tag===22&&I.memoizedState!==null?Dd(c):De!==null?(De.return=I,Hn=De):Dd(c);for(;h!==null;)Hn=h,gf(h,t,o),h=h.sibling;Hn=c,hc=_e,Ka=pt}Rd(e,t,o)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Hn=h):Rd(e,t,o)}}function Rd(e){for(;Hn!==null;){var t=Hn;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ka||vc(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ka)if(o===null)a.componentDidMount();else{var c=t.elementType===t.type?o.memoizedProps:As(t.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&Ru(t,h,a);break;case 3:var I=t.updateQueue;if(I!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Ru(t,I,o)}break;case 5:var _e=t.stateNode;if(o===null&&t.flags&4){o=_e;var De=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":De.autoFocus&&o.focus();break;case"img":De.src&&(o.src=De.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var pt=t.alternate;if(pt!==null){var Yt=pt.memoizedState;if(Yt!==null){var Jt=Yt.dehydrated;Jt!==null&&fn(Jt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ka||t.flags&512&&Zc(t)}catch($t){Vi(t,t.return,$t)}}if(t===e){Hn=null;break}if(o=t.sibling,o!==null){o.return=t.return,Hn=o;break}Hn=t.return}}function jd(e){for(;Hn!==null;){var t=Hn;if(t===e){Hn=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Hn=o;break}Hn=t.return}}function Dd(e){for(;Hn!==null;){var t=Hn;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{vc(4,t)}catch(De){Vi(t,o,De)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(De){Vi(t,c,De)}}var h=t.return;try{Zc(t)}catch(De){Vi(t,h,De)}break;case 5:var I=t.return;try{Zc(t)}catch(De){Vi(t,I,De)}}}catch(De){Vi(t,t.return,De)}if(t===e){Hn=null;break}var _e=t.sibling;if(_e!==null){_e.return=t.return,Hn=_e;break}Hn=t.return}}var yf=Math.ceil,gc=Ee.ReactCurrentDispatcher,Id=Ee.ReactCurrentOwner,Is=Ee.ReactCurrentBatchConfig,Lo=0,ba=null,Zi=null,Ta=0,_s=0,zu=ks(0),ia=0,Wu=null,$l=0,yc=0,qc=0,Ac=null,as=null,Md=0,Vu=1/0,gl=null,_c=!1,Jc=null,Sl=null,Ec=!1,Ol=null,bc=0,Hu=0,Ld=null,wc=-1,ed=0;function $a(){return(Lo&6)!==0?Sr():wc!==-1?wc:wc=Sr()}function Pl(e){return(e.mode&1)===0?1:(Lo&2)!==0&&Ta!==0?Ta&-Ta:Xs.transition!==null?(ed===0&&(ed=Ni()),ed):(e=or,e!==0||(e=window.event,e=e===void 0?16:Ro(e.type)),e)}function Ms(e,t,o,a){if(50<Hu)throw Hu=0,Ld=null,Error(x(185));ma(e,o,a),((Lo&2)===0||e!==ba)&&(e===ba&&((Lo&2)===0&&(yc|=o),ia===4&&Gl(e,Ta)),ss(e,a),o===1&&Lo===0&&(t.mode&1)===0&&(Vu=Sr()+500,eu&&ps()))}function ss(e,t){var o=e.callbackNode;ni(e,t);var a=ji(e,e===ba?Ta:0);if(a===0)o!==null&&Si(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(o!=null&&Si(o),t===1)e.tag===0?Fc(_f.bind(null,e)):rc(_f.bind(null,e)),ec(function(){(Lo&6)===0&&ps()}),o=null;else{switch(To(a)){case 1:o=xr;break;case 4:o=aa;break;case 16:o=Oi;break;case 536870912:o=Wr;break;default:o=Oi}o=xf(o,Af.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Af(e,t){if(wc=-1,ed=0,(Lo&6)!==0)throw Error(x(327));var o=e.callbackNode;if($u()&&e.callbackNode!==o)return null;var a=ji(e,e===ba?Ta:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=xc(e,a);else{t=a;var c=Lo;Lo|=2;var h=zd();(ba!==e||Ta!==t)&&(gl=null,Vu=Sr()+500,Yl(e,t));do try{Yf();break}catch(_e){Ud(e,_e)}while(!0);ku(),gc.current=h,Lo=c,Zi!==null?t=0:(ba=null,Ta=0,t=ia)}if(t!==0){if(t===2&&(c=Io(e),c!==0&&(a=c,t=Nd(e,c))),t===1)throw o=Wu,Yl(e,0),Gl(e,a),ss(e,Sr()),o;if(t===6)Gl(e,a);else{if(c=e.current.alternate,(a&30)===0&&!Gf(c)&&(t=xc(e,a),t===2&&(h=Io(e),h!==0&&(a=h,t=Nd(e,h))),t===1))throw o=Wu,Yl(e,0),Gl(e,a),ss(e,Sr()),o;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(x(345));case 2:vu(e,as,gl);break;case 3:if(Gl(e,a),(a&130023424)===a&&(t=Md+500-Sr(),10<t)){if(ji(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){$a(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Rl(vu.bind(null,e,as,gl),t);break}vu(e,as,gl);break;case 4:if(Gl(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var I=31-Gt(a);h=1<<I,I=t[I],I>c&&(c=I),a&=~h}if(a=c,a=Sr()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*yf(a/1960))-a,10<a){e.timeoutHandle=Rl(vu.bind(null,e,as,gl),a);break}vu(e,as,gl);break;case 5:vu(e,as,gl);break;default:throw Error(x(329))}}}return ss(e,Sr()),e.callbackNode===o?Af.bind(null,e):null}function Nd(e,t){var o=Ac;return e.current.memoizedState.isDehydrated&&(Yl(e,t).flags|=256),e=xc(e,t),e!==2&&(t=as,as=o,t!==null&&Fd(t)),e}function Fd(e){as===null?as=e:as.push.apply(as,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!ie(h(),c))return!1}catch(I){return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gl(e,t){for(t&=~qc,t&=~yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Gt(t),a=1<<o;e[o]=-1,t&=~a}}function _f(e){if((Lo&6)!==0)throw Error(x(327));$u();var t=ji(e,0);if((t&1)===0)return ss(e,Sr()),null;var o=xc(e,t);if(e.tag!==0&&o===2){var a=Io(e);a!==0&&(t=a,o=Nd(e,a))}if(o===1)throw o=Wu,Yl(e,0),Gl(e,t),ss(e,Sr()),o;if(o===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vu(e,as,gl),ss(e,Sr()),null}function Cc(e,t){var o=Lo;Lo|=1;try{return e(t)}finally{Lo=o,Lo===0&&(Vu=Sr()+500,eu&&ps())}}function Xl(e){Ol!==null&&Ol.tag===0&&(Lo&6)===0&&$u();var t=Lo;Lo|=1;var o=Is.transition,a=or;try{if(Is.transition=null,or=1,e)return e()}finally{or=a,Is.transition=o,Lo=t,(Lo&6)===0&&ps()}}function td(){_s=zu.current,ii(zu)}function Yl(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Ic(o)),Zi!==null)for(o=Zi.return;o!==null;){var a=o;switch(_l(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ql();break;case 3:Fl(),ii(Sa),ii(ua),Ul();break;case 5:ju(a);break;case 4:Fl();break;case 13:ii(ki);break;case 19:ii(ki);break;case 10:wl(a.type._context);break;case 22:case 23:td()}o=o.return}if(ba=e,Zi=e=Ql(e.current,null),Ta=_s=t,ia=0,Wu=null,qc=yc=$l=0,as=Ac=null,fl!==null){for(t=0;t<fl.length;t++)if(o=fl[t],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var I=h.next;h.next=c,a.next=I}o.pending=a}fl=null}return e}function Ud(e,t){do{var o=Zi;try{if(ku(),qs.current=Ea,Du){for(var a=Ci.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Du=!1}if(Ja=0,Vr=Wi=Ci=null,cr=!1,tr=0,Id.current=null,o===null||o.return===null){ia=1,Wu=t,Zi=null;break}e:{var h=e,I=o.return,_e=o,De=t;if(t=Ta,_e.flags|=32768,De!==null&&typeof De=="object"&&typeof De.then=="function"){var pt=De,Yt=_e,Jt=Yt.tag;if((Yt.mode&1)===0&&(Jt===0||Jt===11||Jt===15)){var $t=Yt.alternate;$t?(Yt.updateQueue=$t.updateQueue,Yt.memoizedState=$t.memoizedState,Yt.lanes=$t.lanes):(Yt.updateQueue=null,Yt.memoizedState=null)}var Ln=sf(I);if(Ln!==null){Ln.flags&=-257,yd(Ln,I,_e,h,t),Ln.mode&1&&af(h,pt,t),t=Ln,De=pt;var Qn=t.updateQueue;if(Qn===null){var qn=new Set;qn.add(De),t.updateQueue=qn}else Qn.add(De);break e}else{if((t&1)===0){af(h,pt,t),nd();break e}De=Error(x(426))}}else if(yi&&_e.mode&1){var qi=sf(I);if(qi!==null){(qi.flags&65536)===0&&(qi.flags|=256),yd(qi,I,_e,h,t),Su(Vl(De,_e));break e}}h=De=Vl(De,_e),ia!==4&&(ia=2),Ac===null?Ac=[h]:Ac.push(h),h=I;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var ot=gd(h,De,t);zc(h,ot);break e;case 1:_e=De;var Ge=h.type,at=h.stateNode;if((h.flags&128)===0&&(typeof Ge.getDerivedStateFromError=="function"||at!==null&&typeof at.componentDidCatch=="function"&&(Sl===null||!Sl.has(at)))){h.flags|=65536,t&=-t,h.lanes|=t;var cn=Kc(h,_e,t);zc(h,cn);break e}}h=h.return}while(h!==null)}Wd(o)}catch(nr){t=nr,Zi===o&&o!==null&&(Zi=o=o.return);continue}break}while(!0)}function zd(){var e=gc.current;return gc.current=Ea,e===null?Ea:e}function nd(){(ia===0||ia===3||ia===2)&&(ia=4),ba===null||($l&268435455)===0&&(yc&268435455)===0||Gl(ba,Ta)}function xc(e,t){var o=Lo;Lo|=2;var a=zd();(ba!==e||Ta!==t)&&(gl=null,Yl(e,t));do try{Xf();break}catch(c){Ud(e,c)}while(!0);if(ku(),Lo=o,gc.current=a,Zi!==null)throw Error(x(261));return ba=null,Ta=0,ia}function Xf(){for(;Zi!==null;)Ku(Zi)}function Yf(){for(;Zi!==null&&!Ei();)Ku(Zi)}function Ku(e){var t=Cf(e.alternate,e,_s);e.memoizedProps=e.pendingProps,t===null?Wd(e):Zi=t,Id.current=null}function Wd(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=pf(o,t,_s),o!==null){Zi=o;return}}else{if(o=Hf(o,t),o!==null){o.flags&=32767,Zi=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ia=6,Zi=null;return}}if(t=t.sibling,t!==null){Zi=t;return}Zi=t=e}while(t!==null);ia===0&&(ia=5)}function vu(e,t,o){var a=or,c=Is.transition;try{Is.transition=null,or=1,Qf(e,t,o,a)}finally{Is.transition=c,or=a}return null}function Qf(e,t,o,a){do $u();while(Ol!==null);if((Lo&6)!==0)throw Error(x(327));o=e.finishedWork;var c=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(no(e,h),e===ba&&(Zi=ba=null,Ta=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ec||(Ec=!0,xf(Oi,function(){return $u(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Is.transition,Is.transition=null;var I=or;or=1;var _e=Lo;Lo|=4,Id.current=null,mu(e,o),Td(o,e),oe(Ps),ao=!!Ws,Ps=Ws=null,e.current=o,$f(o,e,c),ja(),Lo=_e,or=I,Is.transition=h}else e.current=o;if(Ec&&(Ec=!1,Ol=e,bc=c),h=e.pendingLanes,h===0&&(Sl=null),Yr(o.stateNode,a),ss(e,Sr()),t!==null)for(a=e.onRecoverableError,o=0;o<t.length;o++)c=t[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(_c)throw _c=!1,e=Jc,Jc=null,e;return(bc&1)!==0&&e.tag!==0&&$u(),h=e.pendingLanes,(h&1)!==0?e===Ld?Hu++:(Hu=0,Ld=e):Hu=0,ps(),null}function $u(){if(Ol!==null){var e=To(bc),t=Is.transition,o=or;try{if(Is.transition=null,or=16>e?16:e,Ol===null)var a=!1;else{if(e=Ol,Ol=null,bc=0,(Lo&6)!==0)throw Error(x(331));var c=Lo;for(Lo|=4,Hn=e.current;Hn!==null;){var h=Hn,I=h.child;if((Hn.flags&16)!==0){var _e=h.deletions;if(_e!==null){for(var De=0;De<_e.length;De++){var pt=_e[De];for(Hn=pt;Hn!==null;){var Yt=Hn;switch(Yt.tag){case 0:case 11:case 15:Uu(8,Yt,h)}var Jt=Yt.child;if(Jt!==null)Jt.return=Yt,Hn=Jt;else for(;Hn!==null;){Yt=Hn;var $t=Yt.sibling,Ln=Yt.return;if(Sd(Yt),Yt===pt){Hn=null;break}if($t!==null){$t.return=Ln,Hn=$t;break}Hn=Ln}}}var Qn=h.alternate;if(Qn!==null){var qn=Qn.child;if(qn!==null){Qn.child=null;do{var qi=qn.sibling;qn.sibling=null,qn=qi}while(qn!==null)}}Hn=h}}if((h.subtreeFlags&2064)!==0&&I!==null)I.return=h,Hn=I;else e:for(;Hn!==null;){if(h=Hn,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Uu(9,h,h.return)}var ot=h.sibling;if(ot!==null){ot.return=h.return,Hn=ot;break e}Hn=h.return}}var Ge=e.current;for(Hn=Ge;Hn!==null;){I=Hn;var at=I.child;if((I.subtreeFlags&2064)!==0&&at!==null)at.return=I,Hn=at;else e:for(I=Ge;Hn!==null;){if(_e=Hn,(_e.flags&2048)!==0)try{switch(_e.tag){case 0:case 11:case 15:vc(9,_e)}}catch(nr){Vi(_e,_e.return,nr)}if(_e===I){Hn=null;break e}var cn=_e.sibling;if(cn!==null){cn.return=_e.return,Hn=cn;break e}Hn=_e.return}}if(Lo=c,ps(),Fo&&typeof Fo.onPostCommitFiberRoot=="function")try{Fo.onPostCommitFiberRoot(ha,e)}catch(nr){}a=!0}return a}finally{or=o,Is.transition=t}}return!1}function Ef(e,t,o){t=Vl(o,t),t=gd(e,t,1),e=pl(e,t,1),t=$a(),e!==null&&(ma(e,1,t),ss(e,t))}function Vi(e,t,o){if(e.tag===3)Ef(e,e,o);else for(;t!==null;){if(t.tag===3){Ef(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sl===null||!Sl.has(a))){e=Vl(o,e),e=Kc(t,e,1),t=pl(t,e,1),e=$a(),t!==null&&(ma(t,1,e),ss(t,e));break}}t=t.return}}function bf(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),t=$a(),e.pingedLanes|=e.suspendedLanes&o,ba===e&&(Ta&o)===o&&(ia===4||ia===3&&(Ta&130023424)===Ta&&500>Sr()-Md?Yl(e,0):qc|=o),ss(e,t)}function Vd(e,t){t===0&&((e.mode&1)===0?t=1:(t=sa,sa<<=1,(sa&130023424)===0&&(sa=4194304)));var o=$a();e=Qr(e,t),e!==null&&(ma(e,t,o),ss(e,o))}function wf(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),Vd(e,o)}function Zf(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(x(314))}a!==null&&a.delete(t),Vd(e,o)}var Cf;Cf=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Sa.current)es=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return es=!1,Wf(e,t,o);es=(e.flags&131072)!==0}else es=!1,yi&&(t.flags&1048576)!==0&&Uc(t,ru,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;fc(e,t),e=t.pendingProps;var c=cl(t,ua.current);su(t,o),c=Mu(null,t,a,e,c,o);var h=os();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Aa(a)?(h=!0,Jl(t)):h=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Cl(t),c.updater=fu,t.stateNode=c,c._reactInternals=t,md(t,a,e,o),t=Gc(null,t,a,!0,h,o)):(t.tag=0,yi&&h&&oc(t),Va(null,t,c,o),t=t.child),t;case 16:a=t.elementType;e:{switch(fc(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=qf(a),e=As(a,e),c){case 0:t=$c(null,t,a,e,o);break e;case 1:t=df(null,t,a,e,o);break e;case 11:t=uf(null,t,a,e,o);break e;case 14:t=Ad(null,t,a,As(a.type,e),o);break e}throw Error(x(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:As(a,c),$c(e,t,a,c,o);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:As(a,c),df(e,t,a,c,o);case 3:e:{if(Ed(t),e===null)throw Error(x(387));a=t.pendingProps,h=t.memoizedState,c=h.element,sc(e,t),qa(t,a,null,o);var I=t.memoizedState;if(a=I.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){c=Vl(Error(x(423)),t),t=bd(e,t,a,o,c);break e}else if(a!==c){c=Vl(Error(x(424)),t),t=bd(e,t,a,o,c);break e}else for(_a=Bs(t.stateNode.containerInfo.firstChild),Oa=t,yi=!0,ns=null,o=ac(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ml(),a===c){t=ml(e,t,o);break e}Va(e,t,a,o)}t=t.child}return t;case 5:return Wc(t),e===null&&xu(t),a=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,I=c.children,Ua(a,c)?I=null:h!==null&&Ua(a,h)&&(t.flags|=32),_d(e,t),Va(e,t,I,o),t.child;case 6:return e===null&&xu(t),null;case 13:return Yc(e,t,o);case 4:return lc(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=bl(t,null,a,o):Va(e,t,a,o),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:As(a,c),uf(e,t,a,c,o);case 7:return Va(e,t,t.pendingProps,o),t.child;case 8:return Va(e,t,t.pendingProps.children,o),t.child;case 12:return Va(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,h=t.memoizedProps,I=c.value,ti(Ll,a._currentValue),a._currentValue=I,h!==null)if(ie(h.value,I)){if(h.children===c.children&&!Sa.current){t=ml(e,t,o);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var _e=h.dependencies;if(_e!==null){I=h.child;for(var De=_e.firstContext;De!==null;){if(De.context===a){if(h.tag===1){De=vs(-1,o&-o),De.tag=2;var pt=h.updateQueue;if(pt!==null){pt=pt.shared;var Yt=pt.pending;Yt===null?De.next=De:(De.next=Yt.next,Yt.next=De),pt.pending=De}}h.lanes|=o,De=h.alternate,De!==null&&(De.lanes|=o),Qs(h.return,o,t),_e.lanes|=o;break}De=De.next}}else if(h.tag===10)I=h.type===t.type?null:h.child;else if(h.tag===18){if(I=h.return,I===null)throw Error(x(341));I.lanes|=o,_e=I.alternate,_e!==null&&(_e.lanes|=o),Qs(I,o,t),I=h.sibling}else I=h.child;if(I!==null)I.return=h;else for(I=h;I!==null;){if(I===t){I=null;break}if(h=I.sibling,h!==null){h.return=I.return,I=h;break}I=I.return}h=I}Va(e,t,c.children,o),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,su(t,o),c=na(c),a=a(c),t.flags|=1,Va(e,t,a,o),t.child;case 14:return a=t.type,c=As(a,t.pendingProps),c=As(a.type,c),Ad(e,t,a,c,o);case 15:return Uf(e,t,t.type,t.pendingProps,o);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:As(a,c),fc(e,t),t.tag=1,Aa(a)?(e=!0,Jl(t)):e=!1,su(t,o),of(t,a,c),md(t,a,c,o),Gc(null,t,a,!0,e,o);case 19:return Cd(e,t,o);case 22:return cf(e,t,o)}throw Error(x(156,t.tag))};function xf(e,t){return fa(e,t)}function Sf(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Es(e,t,o,a){return new Sf(e,t,o,a)}function rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qf(e){if(typeof e=="function")return rd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===An)return 11;if(e===_n)return 14}return 2}function Ql(e,t){var o=e.alternate;return o===null?(o=Es(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Sc(e,t,o,a,c,h){var I=2;if(a=e,typeof e=="function")rd(e)&&(I=1);else if(typeof e=="string")I=5;else e:switch(e){case Tt:return Bl(o.children,c,h,t);case zt:I=8,c|=8;break;case Wn:return e=Es(12,o,t,c|2),e.elementType=Wn,e.lanes=h,e;case Bn:return e=Es(13,o,t,c),e.elementType=Bn,e.lanes=h,e;case ar:return e=Es(19,o,t,c),e.elementType=ar,e.lanes=h,e;case ln:return Oc(o,c,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ir:I=10;break e;case Vn:I=9;break e;case An:I=11;break e;case _n:I=14;break e;case wt:I=16,a=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Es(I,o,t,c),t.elementType=e,t.type=a,t.lanes=h,t}function Bl(e,t,o,a){return e=Es(7,e,a,t),e.lanes=o,e}function Oc(e,t,o,a){return e=Es(22,e,a,t),e.elementType=ln,e.lanes=o,e.stateNode={isHidden:!1},e}function Hd(e,t,o){return e=Es(6,e,null,t),e.lanes=o,e}function Kd(e,t,o){return t=Es(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,o,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function od(e,t,o,a,c,h,I,_e,De){return e=new Of(e,t,o,_e,De),t===1?(t=1,h===!0&&(t|=8)):t=0,h=Es(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(h),e}function Jf(e,t,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ht,key:a==null?null:""+a,children:e,containerInfo:t,implementation:o}}function id(e){if(!e)return fs;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Aa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var o=e.type;if(Aa(o))return nc(e,o,t)}return t}function Pf(e,t,o,a,c,h,I,_e,De){return e=od(o,a,!0,e,c,h,I,_e,De),e.context=id(null),o=e.current,a=$a(),c=Pl(o),h=vs(a,c),h.callback=t!=null?t:null,pl(o,h,c),e.current.lanes=c,ma(e,c,a),ss(e,a),e}function Pc(e,t,o,a){var c=t.current,h=$a(),I=Pl(c);return o=id(o),t.context===null?t.context=o:t.pendingContext=o,t=vs(h,I),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=pl(c,t,I),e!==null&&(Ms(e,c,I,h),uu(e,c,I)),I}function Gu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function ad(e,t){Bf(e,t),(e=e.alternate)&&Bf(e,t)}function kf(){return null}var $d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gd(e){this._internalRoot=e}sd.prototype.render=Gd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Pc(e,t,null,null)},sd.prototype.unmount=Gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xl(function(){Pc(null,e,null,null)}),t[ds]=null}};function sd(e){this._internalRoot=e}sd.prototype.unstable_scheduleHydration=function(e){if(e){var t=D();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Vt.length&&t!==0&&t<Vt[o].priority;o++);Vt.splice(o,0,e),o===0&&tn(e)}};function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Tf(e,t,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var pt=Gu(I);h.call(pt)}}var I=Pf(t,a,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=I,e[ds]=I.current,la(e.nodeType===8?e.parentNode:e),Xl(),I}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var _e=a;a=function(){var pt=Gu(De);_e.call(pt)}}var De=od(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=De,e[ds]=De.current,la(e.nodeType===8?e.parentNode:e),Xl(function(){Pc(t,De,o,a)}),De}function Xu(e,t,o,a,c){var h=o._reactRootContainer;if(h){var I=h;if(typeof c=="function"){var _e=c;c=function(){var De=Gu(I);_e.call(De)}}Pc(t,I,e,c)}else I=Tf(o,t,e,c,a);return Gu(I)}Hi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=Fr(t.pendingLanes);o!==0&&(wa(t,o|1),ss(t,Sr()),(Lo&6)===0&&(Vu=Sr()+500,ps()))}break;case 13:Xl(function(){var a=Qr(e,1);if(a!==null){var c=$a();Ms(a,e,1,c)}}),ad(e,1)}},Di=function(e){if(e.tag===13){var t=Qr(e,134217728);if(t!==null){var o=$a();Ms(t,e,134217728,o)}ad(e,134217728)}},S=function(e){if(e.tag===13){var t=Pl(e),o=Qr(e,t);if(o!==null){var a=$a();Ms(o,e,t,a)}ad(e,t)}},D=function(){return or},q=function(e,t){var o=or;try{return or=e,t()}finally{or=o}},to=function(e,t,o){switch(t){case"input":if(_i(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var c=_u(a);if(!c)throw Error(x(90));Sn(a),_i(a,c)}}}break;case"textarea":Gr(e,o);break;case"select":t=o.value,t!=null&&xo(e,!!o.multiple,t,!1)}},Ji=Cc,Qe=Xl;var ep={usingClientEntryPoint:!1,Events:[sl,ll,_u,Mr,fi,Cc]},kc={findFiberByHostInstance:Vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:kc.bundleType,version:kc.version,rendererPackageName:kc.rendererPackageName,rendererConfig:kc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=po(e),e===null?null:e.stateNode},findFiberByHostInstance:kc.findFiberByHostInstance||kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yu.isDisabled&&Yu.supportsFiber)try{ha=Yu.inject(Rf),Fo=Yu}catch(e){}}f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep,f.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(t))throw Error(x(200));return Jf(e,t,null,o)},f.createRoot=function(e,t){if(!ld(e))throw Error(x(299));var o=!1,a="",c=$d;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=od(e,1,!1,null,null,o,!1,a,c),e[ds]=t.current,la(e.nodeType===8?e.parentNode:e),new Gd(t)},f.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=po(t),e=e===null?null:e.stateNode,e},f.flushSync=function(e){return Xl(e)},f.hydrate=function(e,t,o){if(!Bc(t))throw Error(x(200));return Xu(null,e,t,!0,o)},f.hydrateRoot=function(e,t,o){if(!ld(e))throw Error(x(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",I=$d;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(I=o.onRecoverableError)),t=Pf(t,null,e,1,o!=null?o:null,c,!1,h,I),e[ds]=t.current,la(e),a)for(e=0;e<a.length;e++)o=a[e],c=o._getVersion,c=c(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,c]:t.mutableSourceEagerHydrationData.push(o,c);return new sd(t)},f.render=function(e,t,o){if(!Bc(t))throw Error(x(200));return Xu(null,e,t,!1,o)},f.unmountComponentAtNode=function(e){if(!Bc(e))throw Error(x(40));return e._reactRootContainer?(Xl(function(){Xu(null,null,e,!1,function(){e._reactRootContainer=null,e[ds]=null})}),!0):!1},f.unstable_batchedUpdates=Cc,f.unstable_renderSubtreeIntoContainer=function(e,t,o,a){if(!Bc(o))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Xu(e,t,o,!1,a)},f.version="18.3.1-next-f1338f8080-20240426"},5338(M,f,y){"use strict";var F,E=y(961);if(1)f.H=E.createRoot,F=E.hydrateRoot;else var x},961(M,f,y){"use strict";function F(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F)}catch(E){console.error(E)}}F(),M.exports=y(2551)},2799(M,f){"use strict";var y;/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=Symbol.for("react.element"),E=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),R=Symbol.for("react.context"),z=Symbol.for("react.server_context"),X=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),ve;ve=Symbol.for("react.module.reference");function ae(fe){if(typeof fe=="object"&&fe!==null){var ee=fe.$$typeof;switch(ee){case F:switch(fe=fe.type,fe){case x:case d:case m:case be:case se:return fe;default:switch(fe=fe&&fe.$$typeof,fe){case z:case R:case X:case ye:case ge:case J:return fe;default:return ee}}case E:return ee}}}y=R,y=J,y=F,y=X,y=x,y=ye,y=ge,y=E,y=d,y=m,y=be,y=se,y=function(){return!1},y=function(){return!1},y=function(fe){return ae(fe)===R},y=function(fe){return ae(fe)===J},y=function(fe){return typeof fe=="object"&&fe!==null&&fe.$$typeof===F},y=function(fe){return ae(fe)===X},y=function(fe){return ae(fe)===x},y=function(fe){return ae(fe)===ye},y=function(fe){return ae(fe)===ge},y=function(fe){return ae(fe)===E},y=function(fe){return ae(fe)===d},y=function(fe){return ae(fe)===m},y=function(fe){return ae(fe)===be},y=function(fe){return ae(fe)===se},y=function(fe){return typeof fe=="string"||typeof fe=="function"||fe===x||fe===d||fe===m||fe===be||fe===se||fe===Z||typeof fe=="object"&&fe!==null&&(fe.$$typeof===ye||fe.$$typeof===ge||fe.$$typeof===J||fe.$$typeof===R||fe.$$typeof===X||fe.$$typeof===ve||fe.getModuleId!==void 0)},y=ae},4363(M,f,y){"use strict";y(2799)},2896(M,f,y){"use strict";y.d(f,{Kq:()=>xo,jO:()=>Be,wA:()=>Ga,d4:()=>Ee});var F=y(9888),E=y(9242),x=y(961);function m(Nn){Nn()}let d=m;const J=Nn=>d=Nn,R=()=>d;var z=y(6540);const X=Symbol.for("react-redux-context"),be=typeof globalThis!="undefined"?globalThis:{};function se(){var Nn;if(!z.createContext)return{};const vr=(Nn=be[X])!=null?Nn:be[X]=new Map;let $n=vr.get(z.createContext);return $n||($n=z.createContext(null),vr.set(z.createContext,$n)),$n}const ge=se(),ye=null;function Z(Nn=ge){return function(){return(0,z.useContext)(Nn)}}const ve=Z();let fe=()=>{throw new Error("uSES not initialized!")};const ee=Nn=>{fe=Nn},g=(Nn,vr)=>Nn===vr;function Be(Nn=ge){const vr=Nn===ge?ve:Z(Nn);return function(an,wr={}){const{equalityFn:zn=g,stabilityCheck:Ze=void 0,noopCheck:Ar=void 0}=typeof wr=="function"?{equalityFn:wr}:wr,{store:Zn,subscription:Kr,getServerState:Bo,stabilityCheck:co,noopCheck:ko}=vr(),Cr=(0,z.useRef)(!0),to=(0,z.useCallback)({[an.name](_r){return an(_r)}}[an.name],[an,co,Ze]),No=fe(Kr.addNestedSub,Zn.getState,Bo||Zn.getState,to,zn);return(0,z.useDebugValue)(No),No}}const Ee=Be();var We=y(4146),ht=y(4363);function Tt(){const Nn=R();let vr=null,$n=null;return{clear(){vr=null,$n=null},notify(){Nn(()=>{let an=vr;for(;an;)an.callback(),an=an.next})},get(){let an=[],wr=vr;for(;wr;)an.push(wr),wr=wr.next;return an},subscribe(an){let wr=!0,zn=$n={callback:an,next:null,prev:$n};return zn.prev?zn.prev.next=zn:vr=zn,function(){!wr||vr===null||(wr=!1,zn.next?zn.next.prev=zn.prev:$n=zn.prev,zn.prev?zn.prev.next=zn.next:vr=zn.next)}}}}const zt={notify(){},get:()=>[]};function Wn(Nn,vr){let $n,an=zt,wr=0,zn=!1;function Ze(No){Bo();const _r=an.subscribe(No);let io=!1;return()=>{io||(io=!0,_r(),co())}}function Ar(){an.notify()}function Zn(){to.onStateChange&&to.onStateChange()}function Kr(){return zn}function Bo(){wr++,$n||($n=vr?vr.addNestedSub(Zn):Nn.subscribe(Zn),an=Tt())}function co(){wr--,$n&&wr===0&&($n(),$n=void 0,an.clear(),an=zt)}function ko(){zn||(zn=!0,Bo())}function Cr(){zn&&(zn=!1,co())}const to={addNestedSub:Ze,notifyNestedSubs:Ar,handleChangeWrapper:Zn,isSubscribed:Kr,trySubscribe:ko,tryUnsubscribe:Cr,getListeners:()=>an};return to}const Vn=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?z.useLayoutEffect:z.useEffect;var An,Bn,ar,_n,wt,ln,kn,er,Oe,vt,gn,Bt,on,rt;const tt=null;let xt=null;const nt=Nn=>{xt=Nn},mt=null,ct=null,kt=Nn=>{try{return JSON.stringify(Nn)}catch(vr){return String(Nn)}};function Sn(Nn,vr,$n){gn(()=>Nn(...vr),$n)}function Rn(Nn,vr,$n,an,wr,zn){Nn.current=an,$n.current=!1,wr.current&&(wr.current=null,zn())}function mn(Nn,vr,$n,an,wr,zn,Ze,Ar,Zn,Kr,Bo){if(!Nn)return()=>{};let co=!1,ko=null;const Cr=()=>{if(co||!Ar.current)return;const No=vr.getState();let _r,io;try{_r=an(No,wr.current)}catch(Mr){io=Mr,ko=Mr}io||(ko=null),_r===zn.current?Ze.current||Kr():(zn.current=_r,Zn.current=_r,Ze.current=!0,Bo())};return $n.onStateChange=Cr,$n.trySubscribe(),Cr(),()=>{if(co=!0,$n.tryUnsubscribe(),$n.onStateChange=null,ko)throw ko}}const Lr=()=>mt;function uo(Nn,vr){return Nn===vr}let _i=!1;function Nr(Nn,vr,$n,{pure:an,areStatesEqual:wr=uo,areOwnPropsEqual:zn=Bt,areStatePropsEqual:Ze=Bt,areMergedPropsEqual:Ar=Bt,forwardRef:Zn=!1,context:Kr=on}={}){const Bo=Kr,co=er(Nn),ko=kn(vr),Cr=Oe($n),to=!!Nn;return _r=>{const io=_r.displayName||_r.name||"Component",Mr=`Connect(${io})`,fi={shouldHandleStateChanges:to,displayName:Mr,wrappedComponentName:io,WrappedComponent:_r,initMapStateToProps:co,initMapDispatchToProps:ko,initMergeProps:Cr,areStatesEqual:wr,areStatePropsEqual:Ze,areOwnPropsEqual:zn,areMergedPropsEqual:Ar};function Ji(Ct){const[Nt,qt,En]=_n.useMemo(()=>{const{reactReduxForwardedRef:Oi}=Ct,pa=Bn(Ct,tt);return[Ct.context,Oi,pa]},[Ct]),wn=_n.useMemo(()=>Nt&&Nt.Consumer&&wt(_n.createElement(Nt.Consumer,null))?Nt:Bo,[Nt,Bo]),Yn=_n.useContext(wn),fr=!!Ct.store&&!!Ct.store.getState&&!!Ct.store.dispatch,gr=!!Yn&&!!Yn.store,rr=fr?Ct.store:Yn.store,Fn=gr?Yn.getServerState:rr.getState,Xr=_n.useMemo(()=>ln(rr.dispatch,fi),[rr]),[fo,bn]=_n.useMemo(()=>{if(!to)return ct;const Oi=vt(rr,fr?void 0:Yn.subscription),pa=Oi.notifyNestedSubs.bind(Oi);return[Oi,pa]},[rr,fr,Yn]),pi=_n.useMemo(()=>fr?Yn:An({},Yn,{subscription:fo}),[fr,Yn,fo]),hi=_n.useRef(),mi=_n.useRef(En),po=_n.useRef(),vi=_n.useRef(!1),fa=_n.useRef(!1),Si=_n.useRef(!1),Ei=_n.useRef();gn(()=>(Si.current=!0,()=>{Si.current=!1}),[]);const ja=_n.useMemo(()=>()=>po.current&&En===mi.current?po.current:Xr(rr.getState(),En),[rr,En]),Sr=_n.useMemo(()=>pa=>fo?mn(to,rr,fo,Xr,mi,hi,vi,Si,po,bn,pa):()=>{},[fo]);Sn(Rn,[mi,hi,vi,En,po,bn]);let bi;try{bi=xt(Sr,ja,Fn?()=>Xr(Fn(),En):ja)}catch(Oi){throw Ei.current&&(Oi.message+=`
The error may be correlated with this previous error:
${Ei.current.stack}

`),Oi}gn(()=>{Ei.current=void 0,po.current=void 0,hi.current=bi});const xr=_n.useMemo(()=>_n.createElement(_r,An({},bi,{ref:qt})),[qt,_r,bi]);return _n.useMemo(()=>to?_n.createElement(wn.Provider,{value:pi},xr):xr,[wn,xr,pi])}const Ye=_n.memo(Ji);if(Ye.WrappedComponent=_r,Ye.displayName=Ji.displayName=Mr,Zn){const Nt=_n.forwardRef(function(En,wn){return _n.createElement(Ye,An({},En,{reactReduxForwardedRef:wn}))});return Nt.displayName=Mr,Nt.WrappedComponent=_r,ar(Nt,_r)}return ar(Ye,_r)}}const Po=null;function di({store:Nn,context:vr,children:$n,serverState:an,stabilityCheck:wr="once",noopCheck:zn="once"}){const Ze=z.useMemo(()=>{const Kr=Wn(Nn);return{store:Nn,subscription:Kr,getServerState:an?()=>an:void 0,stabilityCheck:wr,noopCheck:zn}},[Nn,an,wr,zn]),Ar=z.useMemo(()=>Nn.getState(),[Nn]);Vn(()=>{const{subscription:Kr}=Ze;return Kr.onStateChange=Kr.notifyNestedSubs,Kr.trySubscribe(),Ar!==Nn.getState()&&Kr.notifyNestedSubs(),()=>{Kr.tryUnsubscribe(),Kr.onStateChange=void 0}},[Ze,Ar]);const Zn=vr||ge;return z.createElement(Zn.Provider,{value:Ze},$n)}const xo=di;function So(Nn=ge){const vr=Nn===ge?ve:Z(Nn);return function(){const{store:an}=vr();return an}}const Ra=So();function Gr(Nn=ge){const vr=Nn===ge?Ra:So(Nn);return function(){return vr().dispatch}}const Ga=Gr();ee(E.useSyncExternalStoreWithSelector),nt(F.useSyncExternalStore),J(x.unstable_batchedUpdates)},7767(M,f,y){"use strict";var F;y.d(f,{$P:()=>ee,BV:()=>co,C5:()=>Ar,Ix:()=>Bo,RQ:()=>We,V8:()=>vr,Zp:()=>zt,jb:()=>Z,qh:()=>Kr,sv:()=>Zn,x$:()=>ar,zy:()=>Be});var E,x,m,d,J,R,z=y(6540),X=y(5588);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function be(){return be=Object.assign?Object.assign.bind():function(Qe){for(var Ye=1;Ye<arguments.length;Ye++){var Ct=arguments[Ye];for(var Nt in Ct)Object.prototype.hasOwnProperty.call(Ct,Nt)&&(Qe[Nt]=Ct[Nt])}return Qe},be.apply(this,arguments)}const se=z.createContext(null),ge=z.createContext(null),ye=z.createContext(null),Z=z.createContext(null),ve=z.createContext(null),ae=z.createContext({outlet:null,matches:[],isDataRoute:!1}),fe=z.createContext(null);function ee(Qe,Ye){let{relative:Ct}=Ye===void 0?{}:Ye;g()||(0,X.Oi)(!1);let{basename:Nt,navigator:qt}=z.useContext(Z),{hash:En,pathname:wn,search:Yn}=ar(Qe,{relative:Ct}),fr=wn;return Nt!=="/"&&(fr=wn==="/"?Nt:(0,X.HS)([Nt,wn])),qt.createHref({pathname:fr,search:Yn,hash:En})}function g(){return z.useContext(ve)!=null}function Be(){return g()||(0,X.Oi)(!1),z.useContext(ve).location}function Ee(){return E.useContext(ve).navigationType}function We(Qe){g()||(0,X.Oi)(!1);let{pathname:Ye}=Be();return z.useMemo(()=>(0,X.B6)(Qe,(0,X.RO)(Ye)),[Ye,Qe])}const ht=null;function Tt(Qe){z.useContext(Z).static||z.useLayoutEffect(Qe)}function zt(){let{isDataRoute:Qe}=z.useContext(ae);return Qe?xo():Wn()}function Wn(){g()||(0,X.Oi)(!1);let Qe=z.useContext(se),{basename:Ye,future:Ct,navigator:Nt}=z.useContext(Z),{matches:qt}=z.useContext(ae),{pathname:En}=Be(),wn=JSON.stringify((0,X.yD)(qt,Ct.v7_relativeSplatPath)),Yn=z.useRef(!1);return Tt(()=>{Yn.current=!0}),z.useCallback(function(gr,rr){if(rr===void 0&&(rr={}),!Yn.current)return;if(typeof gr=="number"){Nt.go(gr);return}let Fn=(0,X.Gh)(gr,JSON.parse(wn),En,rr.relative==="path");Qe==null&&Ye!=="/"&&(Fn.pathname=Fn.pathname==="/"?Ye:(0,X.HS)([Ye,Fn.pathname])),(rr.replace?Nt.replace:Nt.push)(Fn,rr.state,rr)},[Ye,Nt,wn,En,Qe])}const ir=z.createContext(null);function Vn(){return E.useContext(ir)}function An(Qe){let Ye=z.useContext(ae).outlet;return Ye&&z.createElement(ir.Provider,{value:Qe},Ye)}function Bn(){let{matches:Qe}=E.useContext(ae),Ye=Qe[Qe.length-1];return Ye?Ye.params:{}}function ar(Qe,Ye){let{relative:Ct}=Ye===void 0?{}:Ye,{future:Nt}=z.useContext(Z),{matches:qt}=z.useContext(ae),{pathname:En}=Be(),wn=JSON.stringify((0,X.yD)(qt,Nt.v7_relativeSplatPath));return z.useMemo(()=>(0,X.Gh)(Qe,JSON.parse(wn),En,Ct==="path"),[Qe,wn,En,Ct])}function _n(Qe,Ye){return wt(Qe,Ye)}function wt(Qe,Ye,Ct,Nt){g()||(0,X.Oi)(!1);let{navigator:qt}=z.useContext(Z),{matches:En}=z.useContext(ae),wn=En[En.length-1],Yn=wn?wn.params:{},fr=wn?wn.pathname:"/",gr=wn?wn.pathnameBase:"/",rr=wn&&wn.route,Fn=Be(),Xr;if(Ye){var fo;let po=typeof Ye=="string"?(0,X.Rr)(Ye):Ye;gr==="/"||(fo=po.pathname)!=null&&fo.startsWith(gr)||(0,X.Oi)(!1),Xr=po}else Xr=Fn;let bn=Xr.pathname||"/",pi=bn;if(gr!=="/"){let po=gr.replace(/^\//,"").split("/");pi="/"+bn.replace(/^\//,"").split("/").slice(po.length).join("/")}let hi=(0,X.ue)(Qe,{pathname:pi}),mi=vt(hi&&hi.map(po=>Object.assign({},po,{params:Object.assign({},Yn,po.params),pathname:(0,X.HS)([gr,qt.encodeLocation?qt.encodeLocation(po.pathname).pathname:po.pathname]),pathnameBase:po.pathnameBase==="/"?gr:(0,X.HS)([gr,qt.encodeLocation?qt.encodeLocation(po.pathnameBase).pathname:po.pathnameBase])})),En,Ct,Nt);return Ye&&mi?z.createElement(ve.Provider,{value:{location:be({pathname:"/",search:"",hash:"",state:null,key:"default"},Xr),navigationType:X.rc.Pop}},mi):mi}function ln(){let Qe=uo(),Ye=(0,X.pX)(Qe)?Qe.status+" "+Qe.statusText:Qe instanceof Error?Qe.message:JSON.stringify(Qe),Ct=Qe instanceof Error?Qe.stack:null,Nt="rgba(200,200,200, 0.5)",qt={padding:"0.5rem",backgroundColor:Nt},En={padding:"2px 4px",backgroundColor:Nt};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},Ye),Ct?z.createElement("pre",{style:qt},Ct):null,null)}const kn=z.createElement(ln,null);class er extends z.Component{constructor(Ye){super(Ye),this.state={location:Ye.location,revalidation:Ye.revalidation,error:Ye.error}}static getDerivedStateFromError(Ye){return{error:Ye}}static getDerivedStateFromProps(Ye,Ct){return Ct.location!==Ye.location||Ct.revalidation!=="idle"&&Ye.revalidation==="idle"?{error:Ye.error,location:Ye.location,revalidation:Ye.revalidation}:{error:Ye.error!==void 0?Ye.error:Ct.error,location:Ct.location,revalidation:Ye.revalidation||Ct.revalidation}}componentDidCatch(Ye,Ct){console.error("React Router caught the following error during render",Ye,Ct)}render(){return this.state.error!==void 0?z.createElement(ae.Provider,{value:this.props.routeContext},z.createElement(fe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oe(Qe){let{routeContext:Ye,match:Ct,children:Nt}=Qe,qt=z.useContext(se);return qt&&qt.static&&qt.staticContext&&(Ct.route.errorElement||Ct.route.ErrorBoundary)&&(qt.staticContext._deepestRenderedBoundaryId=Ct.route.id),z.createElement(ae.Provider,{value:Ye},Nt)}function vt(Qe,Ye,Ct,Nt){var qt;if(Ye===void 0&&(Ye=[]),Ct===void 0&&(Ct=null),Nt===void 0&&(Nt=null),Qe==null){var En;if(!Ct)return null;if(Ct.errors)Qe=Ct.matches;else if((En=Nt)!=null&&En.v7_partialHydration&&Ye.length===0&&!Ct.initialized&&Ct.matches.length>0)Qe=Ct.matches;else return null}let wn=Qe,Yn=(qt=Ct)==null?void 0:qt.errors;if(Yn!=null){let rr=wn.findIndex(Fn=>Fn.route.id&&(Yn==null?void 0:Yn[Fn.route.id])!==void 0);rr>=0||(0,X.Oi)(!1),wn=wn.slice(0,Math.min(wn.length,rr+1))}let fr=!1,gr=-1;if(Ct&&Nt&&Nt.v7_partialHydration)for(let rr=0;rr<wn.length;rr++){let Fn=wn[rr];if((Fn.route.HydrateFallback||Fn.route.hydrateFallbackElement)&&(gr=rr),Fn.route.id){let{loaderData:Xr,errors:fo}=Ct,bn=Fn.route.loader&&Xr[Fn.route.id]===void 0&&(!fo||fo[Fn.route.id]===void 0);if(Fn.route.lazy||bn){fr=!0,gr>=0?wn=wn.slice(0,gr+1):wn=[wn[0]];break}}}return wn.reduceRight((rr,Fn,Xr)=>{let fo,bn=!1,pi=null,hi=null;Ct&&(fo=Yn&&Fn.route.id?Yn[Fn.route.id]:void 0,pi=Fn.route.errorElement||kn,fr&&(gr<0&&Xr===0?(Ra("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),bn=!0,hi=null):gr===Xr&&(bn=!0,hi=Fn.route.hydrateFallbackElement||null)));let mi=Ye.concat(wn.slice(0,Xr+1)),po=()=>{let vi;return fo?vi=pi:bn?vi=hi:Fn.route.Component?vi=z.createElement(Fn.route.Component,null):Fn.route.element?vi=Fn.route.element:vi=rr,z.createElement(Oe,{match:Fn,routeContext:{outlet:rr,matches:mi,isDataRoute:Ct!=null},children:vi})};return Ct&&(Fn.route.ErrorBoundary||Fn.route.errorElement||Xr===0)?z.createElement(er,{location:Ct.location,revalidation:Ct.revalidation,component:pi,error:fo,children:po(),routeContext:{outlet:null,matches:mi,isDataRoute:!0}}):po()},null)}var gn=(function(Qe){return Qe.UseBlocker="useBlocker",Qe.UseRevalidator="useRevalidator",Qe.UseNavigateStable="useNavigate",Qe})(gn||{}),Bt=(function(Qe){return Qe.UseBlocker="useBlocker",Qe.UseLoaderData="useLoaderData",Qe.UseActionData="useActionData",Qe.UseRouteError="useRouteError",Qe.UseNavigation="useNavigation",Qe.UseRouteLoaderData="useRouteLoaderData",Qe.UseMatches="useMatches",Qe.UseRevalidator="useRevalidator",Qe.UseNavigateStable="useNavigate",Qe.UseRouteId="useRouteId",Qe})(Bt||{});function on(Qe){return Qe+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}function rt(Qe){let Ye=z.useContext(se);return Ye||(0,X.Oi)(!1),Ye}function tt(Qe){let Ye=z.useContext(ge);return Ye||(0,X.Oi)(!1),Ye}function xt(Qe){let Ye=z.useContext(ae);return Ye||(0,X.Oi)(!1),Ye}function nt(Qe){let Ye=xt(Qe),Ct=Ye.matches[Ye.matches.length-1];return Ct.route.id||(0,X.Oi)(!1),Ct.route.id}function mt(){return nt(Bt.UseRouteId)}function ct(){return tt(Bt.UseNavigation).navigation}function kt(){let Qe=rt(gn.UseRevalidator),Ye=tt(Bt.UseRevalidator);return E.useMemo(()=>({revalidate:Qe.router.revalidate,state:Ye.revalidation}),[Qe.router.revalidate,Ye.revalidation])}function Sn(){let{matches:Qe,loaderData:Ye}=tt(Bt.UseMatches);return E.useMemo(()=>Qe.map(Ct=>x(Ct,Ye)),[Qe,Ye])}function Rn(){let Qe=tt(Bt.UseLoaderData),Ye=nt(Bt.UseLoaderData);if(Qe.errors&&Qe.errors[Ye]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+Ye+")");return}return Qe.loaderData[Ye]}function mn(Qe){return tt(Bt.UseRouteLoaderData).loaderData[Qe]}function Lr(){let Qe=tt(Bt.UseActionData),Ye=nt(Bt.UseLoaderData);return Qe.actionData?Qe.actionData[Ye]:void 0}function uo(){var Qe;let Ye=z.useContext(fe),Ct=tt(Bt.UseRouteError),Nt=nt(Bt.UseRouteError);return Ye!==void 0?Ye:(Qe=Ct.errors)==null?void 0:Qe[Nt]}function _i(){let Qe=E.useContext(ye);return Qe==null?void 0:Qe._data}function Nr(){let Qe=E.useContext(ye);return Qe==null?void 0:Qe._error}let Po=0;function di(Qe){let{router:Ye,basename:Ct}=rt(gn.UseBlocker),Nt=tt(Bt.UseBlocker),[qt,En]=E.useState(""),wn=E.useCallback(Yn=>{if(typeof Qe!="function")return!!Qe;if(Ct==="/")return Qe(Yn);let{currentLocation:fr,nextLocation:gr,historyAction:rr}=Yn;return Qe({currentLocation:be({},fr,{pathname:m(fr.pathname,Ct)||fr.pathname}),nextLocation:be({},gr,{pathname:m(gr.pathname,Ct)||gr.pathname}),historyAction:rr})},[Ct,Qe]);return E.useEffect(()=>{let Yn=String(++Po);return En(Yn),()=>Ye.deleteBlocker(Yn)},[Ye]),E.useEffect(()=>{qt!==""&&Ye.getBlocker(qt,wn)},[Ye,qt,wn]),qt&&Nt.blockers.has(qt)?Nt.blockers.get(qt):d}function xo(){let{router:Qe}=rt(gn.UseNavigateStable),Ye=nt(Bt.UseNavigateStable),Ct=z.useRef(!1);return Tt(()=>{Ct.current=!0}),z.useCallback(function(qt,En){En===void 0&&(En={}),Ct.current&&(typeof qt=="number"?Qe.navigate(qt):Qe.navigate(qt,be({fromRouteId:Ye},En)))},[Qe,Ye])}const So={};function Ra(Qe,Ye,Ct){!Ye&&!So[Qe]&&(So[Qe]=!0)}const Gr={};function Ga(Qe,Ye){}const Nn=(Qe,Ye,Ct)=>(""+Ye+("You can use the `"+Qe+"` future flag to opt-in early. ")+("For more information, see "+Ct+"."),void 0);function vr(Qe,Ye){(Qe==null?void 0:Qe.v7_startTransition)===void 0&&Nn("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(Qe==null?void 0:Qe.v7_relativeSplatPath)===void 0&&(!Ye||Ye.v7_relativeSplatPath===void 0)&&Nn("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),Ye&&(Ye.v7_fetcherPersist===void 0&&Nn("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),Ye.v7_normalizeFormMethod===void 0&&Nn("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),Ye.v7_partialHydration===void 0&&Nn("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),Ye.v7_skipActionErrorRevalidation===void 0&&Nn("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}const an=(F||(F=y.t(z,2)))["startTransition"];function wr(Qe){let{fallbackElement:Ye,router:Ct,future:Nt}=Qe,[qt,En]=E.useState(Ct.state),{v7_startTransition:wn}=Nt||{},Yn=E.useCallback(Fn=>{wn&&an?an(()=>En(Fn)):En(Fn)},[En,wn]);E.useLayoutEffect(()=>Ct.subscribe(Yn),[Ct,Yn]),E.useEffect(()=>{},[]);let fr=E.useMemo(()=>({createHref:Ct.createHref,encodeLocation:Ct.encodeLocation,go:Fn=>Ct.navigate(Fn),push:(Fn,Xr,fo)=>Ct.navigate(Fn,{state:Xr,preventScrollReset:fo==null?void 0:fo.preventScrollReset}),replace:(Fn,Xr,fo)=>Ct.navigate(Fn,{replace:!0,state:Xr,preventScrollReset:fo==null?void 0:fo.preventScrollReset})}),[Ct]),gr=Ct.basename||"/",rr=E.useMemo(()=>({router:Ct,navigator:fr,static:!1,basename:gr}),[Ct,fr,gr]);return E.useEffect(()=>vr(Nt,Ct.future),[Ct,Nt]),E.createElement(E.Fragment,null,E.createElement(se.Provider,{value:rr},E.createElement(ge.Provider,{value:qt},E.createElement(Bo,{basename:gr,location:qt.location,navigationType:qt.historyAction,navigator:fr,future:{v7_relativeSplatPath:Ct.future.v7_relativeSplatPath}},qt.initialized||Ct.future.v7_partialHydration?E.createElement(zn,{routes:Ct.routes,future:Ct.future,state:qt}):Ye))),null)}function zn(Qe){let{routes:Ye,future:Ct,state:Nt}=Qe;return wt(Ye,void 0,Nt,Ct)}function Ze(Qe){let{basename:Ye,children:Ct,initialEntries:Nt,initialIndex:qt,future:En}=Qe,wn=E.useRef();wn.current==null&&(wn.current=J({initialEntries:Nt,initialIndex:qt,v5Compat:!0}));let Yn=wn.current,[fr,gr]=E.useState({action:Yn.action,location:Yn.location}),{v7_startTransition:rr}=En||{},Fn=E.useCallback(Xr=>{rr&&an?an(()=>gr(Xr)):gr(Xr)},[gr,rr]);return E.useLayoutEffect(()=>Yn.listen(Fn),[Yn,Fn]),E.useEffect(()=>vr(En),[En]),E.createElement(Bo,{basename:Ye,children:Ct,location:fr.location,navigationType:fr.action,navigator:Yn,future:En})}function Ar(Qe){let{to:Ye,replace:Ct,state:Nt,relative:qt}=Qe;g()||(0,X.Oi)(!1);let{future:En,static:wn}=z.useContext(Z),{matches:Yn}=z.useContext(ae),{pathname:fr}=Be(),gr=zt(),rr=(0,X.Gh)(Ye,(0,X.yD)(Yn,En.v7_relativeSplatPath),fr,qt==="path"),Fn=JSON.stringify(rr);return z.useEffect(()=>gr(JSON.parse(Fn),{replace:Ct,state:Nt,relative:qt}),[gr,Fn,qt,Ct,Nt]),null}function Zn(Qe){return An(Qe.context)}function Kr(Qe){(0,X.Oi)(!1)}function Bo(Qe){let{basename:Ye="/",children:Ct=null,location:Nt,navigationType:qt=X.rc.Pop,navigator:En,static:wn=!1,future:Yn}=Qe;g()&&(0,X.Oi)(!1);let fr=Ye.replace(/^\/*/,"/"),gr=z.useMemo(()=>({basename:fr,navigator:En,static:wn,future:be({v7_relativeSplatPath:!1},Yn)}),[fr,Yn,En,wn]);typeof Nt=="string"&&(Nt=(0,X.Rr)(Nt));let{pathname:rr="/",search:Fn="",hash:Xr="",state:fo=null,key:bn="default"}=Nt,pi=z.useMemo(()=>{let hi=(0,X.pb)(rr,fr);return hi==null?null:{location:{pathname:hi,search:Fn,hash:Xr,state:fo,key:bn},navigationType:qt}},[fr,rr,Fn,Xr,fo,bn,qt]);return pi==null?null:z.createElement(Z.Provider,{value:gr},z.createElement(ve.Provider,{children:Ct,value:pi}))}function co(Qe){let{children:Ye,location:Ct}=Qe;return _n(io(Ye),Ct)}function ko(Qe){let{children:Ye,errorElement:Ct,resolve:Nt}=Qe;return E.createElement(No,{resolve:Nt,errorElement:Ct},E.createElement(_r,null,Ye))}var Cr=(function(Qe){return Qe[Qe.pending=0]="pending",Qe[Qe.success=1]="success",Qe[Qe.error=2]="error",Qe})(Cr||{});const to=new Promise(()=>{});class No extends z.Component{constructor(Ye){super(Ye),this.state={error:null}}static getDerivedStateFromError(Ye){return{error:Ye}}componentDidCatch(Ye,Ct){console.error("<Await> caught the following error during render",Ye,Ct)}render(){let{children:Ye,errorElement:Ct,resolve:Nt}=this.props,qt=null,En=Cr.pending;if(!(Nt instanceof Promise))En=Cr.success,qt=Promise.resolve(),Object.defineProperty(qt,"_tracked",{get:()=>!0}),Object.defineProperty(qt,"_data",{get:()=>Nt});else if(this.state.error){En=Cr.error;let wn=this.state.error;qt=Promise.reject().catch(()=>{}),Object.defineProperty(qt,"_tracked",{get:()=>!0}),Object.defineProperty(qt,"_error",{get:()=>wn})}else Nt._tracked?(qt=Nt,En="_error"in qt?Cr.error:"_data"in qt?Cr.success:Cr.pending):(En=Cr.pending,Object.defineProperty(Nt,"_tracked",{get:()=>!0}),qt=Nt.then(wn=>Object.defineProperty(Nt,"_data",{get:()=>wn}),wn=>Object.defineProperty(Nt,"_error",{get:()=>wn})));if(En===Cr.error&&qt._error instanceof X.tH)throw to;if(En===Cr.error&&!Ct)throw qt._error;if(En===Cr.error)return z.createElement(ye.Provider,{value:qt,children:Ct});if(En===Cr.success)return z.createElement(ye.Provider,{value:qt,children:Ye});throw qt}}function _r(Qe){let{children:Ye}=Qe,Ct=_i(),Nt=typeof Ye=="function"?Ye(Ct):Ye;return E.createElement(E.Fragment,null,Nt)}function io(Qe,Ye){Ye===void 0&&(Ye=[]);let Ct=[];return z.Children.forEach(Qe,(Nt,qt)=>{if(!z.isValidElement(Nt))return;let En=[...Ye,qt];if(Nt.type===z.Fragment){Ct.push.apply(Ct,io(Nt.props.children,En));return}Nt.type!==Kr&&(0,X.Oi)(!1),!Nt.props.index||!Nt.props.children||(0,X.Oi)(!1);let wn={id:Nt.props.id||En.join("-"),caseSensitive:Nt.props.caseSensitive,element:Nt.props.element,Component:Nt.props.Component,index:Nt.props.index,path:Nt.props.path,loader:Nt.props.loader,action:Nt.props.action,errorElement:Nt.props.errorElement,ErrorBoundary:Nt.props.ErrorBoundary,hasErrorBoundary:Nt.props.ErrorBoundary!=null||Nt.props.errorElement!=null,shouldRevalidate:Nt.props.shouldRevalidate,handle:Nt.props.handle,lazy:Nt.props.lazy};Nt.props.children&&(wn.children=io(Nt.props.children,En)),Ct.push(wn)}),Ct}function Mr(Qe){return vt(Qe)}function fi(Qe){let Ye={hasErrorBoundary:Qe.ErrorBoundary!=null||Qe.errorElement!=null};return Qe.Component&&Object.assign(Ye,{element:E.createElement(Qe.Component),Component:void 0}),Qe.HydrateFallback&&Object.assign(Ye,{hydrateFallbackElement:E.createElement(Qe.HydrateFallback),HydrateFallback:void 0}),Qe.ErrorBoundary&&Object.assign(Ye,{errorElement:E.createElement(Qe.ErrorBoundary),ErrorBoundary:void 0}),Ye}function Ji(Qe,Ye){return R({basename:Ye==null?void 0:Ye.basename,future:be({},Ye==null?void 0:Ye.future,{v7_prependBasename:!0}),history:J({initialEntries:Ye==null?void 0:Ye.initialEntries,initialIndex:Ye==null?void 0:Ye.initialIndex}),hydrationData:Ye==null?void 0:Ye.hydrationData,routes:Qe,mapRouteProperties:fi,dataStrategy:Ye==null?void 0:Ye.dataStrategy,patchRoutesOnNavigation:Ye==null?void 0:Ye.patchRoutesOnNavigation}).initialize()}},1020(M,f,y){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=y(6540),E=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};function R(z,X,be){var se,ge={},ye=null,Z=null;be!==void 0&&(ye=""+be),X.key!==void 0&&(ye=""+X.key),X.ref!==void 0&&(Z=X.ref);for(se in X)m.call(X,se)&&!J.hasOwnProperty(se)&&(ge[se]=X[se]);if(z&&z.defaultProps)for(se in X=z.defaultProps,X)ge[se]===void 0&&(ge[se]=X[se]);return{$$typeof:E,type:z,key:ye,ref:Z,props:ge,_owner:d.current}}f.Fragment=x,f.jsx=R,f.jsxs=R},5287(M,f){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),F=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),J=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),X=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),se=Symbol.iterator;function ge(Oe){return Oe===null||typeof Oe!="object"?null:(Oe=se&&Oe[se]||Oe["@@iterator"],typeof Oe=="function"?Oe:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,ve={};function ae(Oe,vt,gn){this.props=Oe,this.context=vt,this.refs=ve,this.updater=gn||ye}ae.prototype.isReactComponent={},ae.prototype.setState=function(Oe,vt){if(typeof Oe!="object"&&typeof Oe!="function"&&Oe!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,Oe,vt,"setState")},ae.prototype.forceUpdate=function(Oe){this.updater.enqueueForceUpdate(this,Oe,"forceUpdate")};function fe(){}fe.prototype=ae.prototype;function ee(Oe,vt,gn){this.props=Oe,this.context=vt,this.refs=ve,this.updater=gn||ye}var g=ee.prototype=new fe;g.constructor=ee,Z(g,ae.prototype),g.isPureReactComponent=!0;var Be=Array.isArray,Ee=Object.prototype.hasOwnProperty,We={current:null},ht={key:!0,ref:!0,__self:!0,__source:!0};function Tt(Oe,vt,gn){var Bt,on={},rt=null,tt=null;if(vt!=null)for(Bt in vt.ref!==void 0&&(tt=vt.ref),vt.key!==void 0&&(rt=""+vt.key),vt)Ee.call(vt,Bt)&&!ht.hasOwnProperty(Bt)&&(on[Bt]=vt[Bt]);var xt=arguments.length-2;if(xt===1)on.children=gn;else if(1<xt){for(var nt=Array(xt),mt=0;mt<xt;mt++)nt[mt]=arguments[mt+2];on.children=nt}if(Oe&&Oe.defaultProps)for(Bt in xt=Oe.defaultProps,xt)on[Bt]===void 0&&(on[Bt]=xt[Bt]);return{$$typeof:y,type:Oe,key:rt,ref:tt,props:on,_owner:We.current}}function zt(Oe,vt){return{$$typeof:y,type:Oe.type,key:vt,ref:Oe.ref,props:Oe.props,_owner:Oe._owner}}function Wn(Oe){return typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===y}function ir(Oe){var vt={"=":"=0",":":"=2"};return"$"+Oe.replace(/[=:]/g,function(gn){return vt[gn]})}var Vn=/\/+/g;function An(Oe,vt){return typeof Oe=="object"&&Oe!==null&&Oe.key!=null?ir(""+Oe.key):vt.toString(36)}function Bn(Oe,vt,gn,Bt,on){var rt=typeof Oe;(rt==="undefined"||rt==="boolean")&&(Oe=null);var tt=!1;if(Oe===null)tt=!0;else switch(rt){case"string":case"number":tt=!0;break;case"object":switch(Oe.$$typeof){case y:case F:tt=!0}}if(tt)return tt=Oe,on=on(tt),Oe=Bt===""?"."+An(tt,0):Bt,Be(on)?(gn="",Oe!=null&&(gn=Oe.replace(Vn,"$&/")+"/"),Bn(on,vt,gn,"",function(mt){return mt})):on!=null&&(Wn(on)&&(on=zt(on,gn+(!on.key||tt&&tt.key===on.key?"":(""+on.key).replace(Vn,"$&/")+"/")+Oe)),vt.push(on)),1;if(tt=0,Bt=Bt===""?".":Bt+":",Be(Oe))for(var xt=0;xt<Oe.length;xt++){rt=Oe[xt];var nt=Bt+An(rt,xt);tt+=Bn(rt,vt,gn,nt,on)}else if(nt=ge(Oe),typeof nt=="function")for(Oe=nt.call(Oe),xt=0;!(rt=Oe.next()).done;)rt=rt.value,nt=Bt+An(rt,xt++),tt+=Bn(rt,vt,gn,nt,on);else if(rt==="object")throw vt=String(Oe),Error("Objects are not valid as a React child (found: "+(vt==="[object Object]"?"object with keys {"+Object.keys(Oe).join(", ")+"}":vt)+"). If you meant to render a collection of children, use an array instead.");return tt}function ar(Oe,vt,gn){if(Oe==null)return Oe;var Bt=[],on=0;return Bn(Oe,Bt,"","",function(rt){return vt.call(gn,rt,on++)}),Bt}function _n(Oe){if(Oe._status===-1){var vt=Oe._result;vt=vt(),vt.then(function(gn){(Oe._status===0||Oe._status===-1)&&(Oe._status=1,Oe._result=gn)},function(gn){(Oe._status===0||Oe._status===-1)&&(Oe._status=2,Oe._result=gn)}),Oe._status===-1&&(Oe._status=0,Oe._result=vt)}if(Oe._status===1)return Oe._result.default;throw Oe._result}var wt={current:null},ln={transition:null},kn={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:ln,ReactCurrentOwner:We};function er(){throw Error("act(...) is not supported in production builds of React.")}f.Children={map:ar,forEach:function(Oe,vt,gn){ar(Oe,function(){vt.apply(this,arguments)},gn)},count:function(Oe){var vt=0;return ar(Oe,function(){vt++}),vt},toArray:function(Oe){return ar(Oe,function(vt){return vt})||[]},only:function(Oe){if(!Wn(Oe))throw Error("React.Children.only expected to receive a single React element child.");return Oe}},f.Component=ae,f.Fragment=E,f.Profiler=m,f.PureComponent=ee,f.StrictMode=x,f.Suspense=z,f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kn,f.act=er,f.cloneElement=function(Oe,vt,gn){if(Oe==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+Oe+".");var Bt=Z({},Oe.props),on=Oe.key,rt=Oe.ref,tt=Oe._owner;if(vt!=null){if(vt.ref!==void 0&&(rt=vt.ref,tt=We.current),vt.key!==void 0&&(on=""+vt.key),Oe.type&&Oe.type.defaultProps)var xt=Oe.type.defaultProps;for(nt in vt)Ee.call(vt,nt)&&!ht.hasOwnProperty(nt)&&(Bt[nt]=vt[nt]===void 0&&xt!==void 0?xt[nt]:vt[nt])}var nt=arguments.length-2;if(nt===1)Bt.children=gn;else if(1<nt){xt=Array(nt);for(var mt=0;mt<nt;mt++)xt[mt]=arguments[mt+2];Bt.children=xt}return{$$typeof:y,type:Oe.type,key:on,ref:rt,props:Bt,_owner:tt}},f.createContext=function(Oe){return Oe={$$typeof:J,_currentValue:Oe,_currentValue2:Oe,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},Oe.Provider={$$typeof:d,_context:Oe},Oe.Consumer=Oe},f.createElement=Tt,f.createFactory=function(Oe){var vt=Tt.bind(null,Oe);return vt.type=Oe,vt},f.createRef=function(){return{current:null}},f.forwardRef=function(Oe){return{$$typeof:R,render:Oe}},f.isValidElement=Wn,f.lazy=function(Oe){return{$$typeof:be,_payload:{_status:-1,_result:Oe},_init:_n}},f.memo=function(Oe,vt){return{$$typeof:X,type:Oe,compare:vt===void 0?null:vt}},f.startTransition=function(Oe){var vt=ln.transition;ln.transition={};try{Oe()}finally{ln.transition=vt}},f.unstable_act=er,f.useCallback=function(Oe,vt){return wt.current.useCallback(Oe,vt)},f.useContext=function(Oe){return wt.current.useContext(Oe)},f.useDebugValue=function(){},f.useDeferredValue=function(Oe){return wt.current.useDeferredValue(Oe)},f.useEffect=function(Oe,vt){return wt.current.useEffect(Oe,vt)},f.useId=function(){return wt.current.useId()},f.useImperativeHandle=function(Oe,vt,gn){return wt.current.useImperativeHandle(Oe,vt,gn)},f.useInsertionEffect=function(Oe,vt){return wt.current.useInsertionEffect(Oe,vt)},f.useLayoutEffect=function(Oe,vt){return wt.current.useLayoutEffect(Oe,vt)},f.useMemo=function(Oe,vt){return wt.current.useMemo(Oe,vt)},f.useReducer=function(Oe,vt,gn){return wt.current.useReducer(Oe,vt,gn)},f.useRef=function(Oe){return wt.current.useRef(Oe)},f.useState=function(Oe){return wt.current.useState(Oe)},f.useSyncExternalStore=function(Oe,vt,gn){return wt.current.useSyncExternalStore(Oe,vt,gn)},f.useTransition=function(){return wt.current.useTransition()},f.version="18.3.1"},6540(M,f,y){"use strict";M.exports=y(5287)},4848(M,f,y){"use strict";M.exports=y(1020)},2325(M,f,y){"use strict";y.d(f,{Mz:()=>X});var F="NOT_FOUND";function E(se){var ge;return{get:function(Z){return ge&&se(ge.key,Z)?ge.value:F},put:function(Z,ve){ge={key:Z,value:ve}},getEntries:function(){return ge?[ge]:[]},clear:function(){ge=void 0}}}function x(se,ge){var ye=[];function Z(ee){var g=ye.findIndex(function(Ee){return ge(ee,Ee.key)});if(g>-1){var Be=ye[g];return g>0&&(ye.splice(g,1),ye.unshift(Be)),Be.value}return F}function ve(ee,g){Z(ee)===F&&(ye.unshift({key:ee,value:g}),ye.length>se&&ye.pop())}function ae(){return ye}function fe(){ye=[]}return{get:Z,put:ve,getEntries:ae,clear:fe}}var m=function(ge,ye){return ge===ye};function d(se){return function(ye,Z){if(ye===null||Z===null||ye.length!==Z.length)return!1;for(var ve=ye.length,ae=0;ae<ve;ae++)if(!se(ye[ae],Z[ae]))return!1;return!0}}function J(se,ge){var ye=typeof ge=="object"?ge:{equalityCheck:ge},Z=ye.equalityCheck,ve=Z===void 0?m:Z,ae=ye.maxSize,fe=ae===void 0?1:ae,ee=ye.resultEqualityCheck,g=d(ve),Be=fe===1?E(g):x(fe,g);function Ee(){var We=Be.get(arguments);if(We===F){if(We=se.apply(null,arguments),ee){var ht=Be.getEntries(),Tt=ht.find(function(zt){return ee(zt.value,We)});Tt&&(We=Tt.value)}Be.put(arguments,We)}return We}return Ee.clearCache=function(){return Be.clear()},Ee}function R(se){var ge=Array.isArray(se[0])?se[0]:se;if(!ge.every(function(Z){return typeof Z=="function"})){var ye=ge.map(function(Z){return typeof Z=="function"?"function "+(Z.name||"unnamed")+"()":typeof Z}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+ye+"]")}return ge}function z(se){for(var ge=arguments.length,ye=new Array(ge>1?ge-1:0),Z=1;Z<ge;Z++)ye[Z-1]=arguments[Z];var ve=function(){for(var fe=arguments.length,ee=new Array(fe),g=0;g<fe;g++)ee[g]=arguments[g];var Be=0,Ee,We={memoizeOptions:void 0},ht=ee.pop();if(typeof ht=="object"&&(We=ht,ht=ee.pop()),typeof ht!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof ht+"]");var Tt=We,zt=Tt.memoizeOptions,Wn=zt===void 0?ye:zt,ir=Array.isArray(Wn)?Wn:[Wn],Vn=R(ee),An=se.apply(void 0,[function(){return Be++,ht.apply(null,arguments)}].concat(ir)),Bn=se(function(){for(var _n=[],wt=Vn.length,ln=0;ln<wt;ln++)_n.push(Vn[ln].apply(null,arguments));return Ee=An.apply(null,_n),Ee});return Object.assign(Bn,{resultFunc:ht,memoizedResultFunc:An,dependencies:Vn,lastResult:function(){return Ee},recomputations:function(){return Be},resetRecomputations:function(){return Be=0}}),Bn};return ve}var X=z(J),be=function(ge,ye){if(ye===void 0&&(ye=X),typeof ge!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof ge));var Z=Object.keys(ge),ve=ye(Z.map(function(ae){return ge[ae]}),function(){for(var ae=arguments.length,fe=new Array(ae),ee=0;ee<ae;ee++)fe[ee]=arguments[ee];return fe.reduce(function(g,Be,Ee){return g[Z[Ee]]=Be,g},{})});return ve}},7463(M,f){"use strict";/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function y(wt,ln){var kn=wt.length;wt.push(ln);e:for(;0<kn;){var er=kn-1>>>1,Oe=wt[er];if(0<x(Oe,ln))wt[er]=ln,wt[kn]=Oe,kn=er;else break e}}function F(wt){return wt.length===0?null:wt[0]}function E(wt){if(wt.length===0)return null;var ln=wt[0],kn=wt.pop();if(kn!==ln){wt[0]=kn;e:for(var er=0,Oe=wt.length,vt=Oe>>>1;er<vt;){var gn=2*(er+1)-1,Bt=wt[gn],on=gn+1,rt=wt[on];if(0>x(Bt,kn))on<Oe&&0>x(rt,Bt)?(wt[er]=rt,wt[on]=kn,er=on):(wt[er]=Bt,wt[gn]=kn,er=gn);else if(on<Oe&&0>x(rt,kn))wt[er]=rt,wt[on]=kn,er=on;else break e}}return ln}function x(wt,ln){var kn=wt.sortIndex-ln.sortIndex;return kn!==0?kn:wt.id-ln.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;f.unstable_now=function(){return m.now()}}else{var d=Date,J=d.now();f.unstable_now=function(){return d.now()-J}}var R=[],z=[],X=1,be=null,se=3,ge=!1,ye=!1,Z=!1,ve=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(wt){for(var ln=F(z);ln!==null;){if(ln.callback===null)E(z);else if(ln.startTime<=wt)E(z),ln.sortIndex=ln.expirationTime,y(R,ln);else break;ln=F(z)}}function g(wt){if(Z=!1,ee(wt),!ye)if(F(R)!==null)ye=!0,ar(Be);else{var ln=F(z);ln!==null&&_n(g,ln.startTime-wt)}}function Be(wt,ln){ye=!1,Z&&(Z=!1,ae(ht),ht=-1),ge=!0;var kn=se;try{for(ee(ln),be=F(R);be!==null&&(!(be.expirationTime>ln)||wt&&!Wn());){var er=be.callback;if(typeof er=="function"){be.callback=null,se=be.priorityLevel;var Oe=er(be.expirationTime<=ln);ln=f.unstable_now(),typeof Oe=="function"?be.callback=Oe:be===F(R)&&E(R),ee(ln)}else E(R);be=F(R)}if(be!==null)var vt=!0;else{var gn=F(z);gn!==null&&_n(g,gn.startTime-ln),vt=!1}return vt}finally{be=null,se=kn,ge=!1}}var Ee=!1,We=null,ht=-1,Tt=5,zt=-1;function Wn(){return!(f.unstable_now()-zt<Tt)}function ir(){if(We!==null){var wt=f.unstable_now();zt=wt;var ln=!0;try{ln=We(!0,wt)}finally{ln?Vn():(Ee=!1,We=null)}}else Ee=!1}var Vn;if(typeof fe=="function")Vn=function(){fe(ir)};else if(typeof MessageChannel!="undefined"){var An=new MessageChannel,Bn=An.port2;An.port1.onmessage=ir,Vn=function(){Bn.postMessage(null)}}else Vn=function(){ve(ir,0)};function ar(wt){We=wt,Ee||(Ee=!0,Vn())}function _n(wt,ln){ht=ve(function(){wt(f.unstable_now())},ln)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(wt){wt.callback=null},f.unstable_continueExecution=function(){ye||ge||(ye=!0,ar(Be))},f.unstable_forceFrameRate=function(wt){0>wt||125<wt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<wt?Math.floor(1e3/wt):5},f.unstable_getCurrentPriorityLevel=function(){return se},f.unstable_getFirstCallbackNode=function(){return F(R)},f.unstable_next=function(wt){switch(se){case 1:case 2:case 3:var ln=3;break;default:ln=se}var kn=se;se=ln;try{return wt()}finally{se=kn}},f.unstable_pauseExecution=function(){},f.unstable_requestPaint=function(){},f.unstable_runWithPriority=function(wt,ln){switch(wt){case 1:case 2:case 3:case 4:case 5:break;default:wt=3}var kn=se;se=wt;try{return ln()}finally{se=kn}},f.unstable_scheduleCallback=function(wt,ln,kn){var er=f.unstable_now();switch(typeof kn=="object"&&kn!==null?(kn=kn.delay,kn=typeof kn=="number"&&0<kn?er+kn:er):kn=er,wt){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=kn+Oe,wt={id:X++,callback:ln,priorityLevel:wt,startTime:kn,expirationTime:Oe,sortIndex:-1},kn>er?(wt.sortIndex=kn,y(z,wt),F(R)===null&&wt===F(z)&&(Z?(ae(ht),ht=-1):Z=!0,_n(g,kn-er))):(wt.sortIndex=Oe,y(R,wt),ye||ge||(ye=!0,ar(Be))),wt},f.unstable_shouldYield=Wn,f.unstable_wrapCallback=function(wt){var ln=se;return function(){var kn=se;se=ln;try{return wt.apply(this,arguments)}finally{se=kn}}}},9982(M,f,y){"use strict";M.exports=y(7463)},9674(M,f,y){"use strict";y.d(f,{A:()=>ae});var F=y(5072),E=y.n(F),x=y(7825),m=y.n(x),d=y(7659),J=y.n(d),R=y(5056),z=y.n(R),X=y(540),be=y.n(X),se=y(1113),ge=y.n(se),ye=y(7669),Z={};Z.styleTagTransform=ge(),Z.setAttributes=z(),Z.insert=J().bind(null,"head"),Z.domAPI=m(),Z.insertStyleElement=be();var ve=E()(ye.A,Z);const ae=ye.A&&ye.A.locals?ye.A.locals:void 0},5072(M){"use strict";var f=[];function y(x){for(var m=-1,d=0;d<f.length;d++)if(f[d].identifier===x){m=d;break}return m}function F(x,m){for(var d={},J=[],R=0;R<x.length;R++){var z=x[R],X=m.base?z[0]+m.base:z[0],be=d[X]||0,se="".concat(X," ").concat(be);d[X]=be+1;var ge=y(se),ye={css:z[1],media:z[2],sourceMap:z[3],supports:z[4],layer:z[5]};if(ge!==-1)f[ge].references++,f[ge].updater(ye);else{var Z=E(ye,m);m.byIndex=R,f.splice(R,0,{identifier:se,updater:Z,references:1})}J.push(se)}return J}function E(x,m){var d=m.domAPI(m);d.update(x);var J=function(z){if(z){if(z.css===x.css&&z.media===x.media&&z.sourceMap===x.sourceMap&&z.supports===x.supports&&z.layer===x.layer)return;d.update(x=z)}else d.remove()};return J}M.exports=function(x,m){m=m||{},x=x||[];var d=F(x,m);return function(R){R=R||[];for(var z=0;z<d.length;z++){var X=d[z],be=y(X);f[be].references--}for(var se=F(R,m),ge=0;ge<d.length;ge++){var ye=d[ge],Z=y(ye);f[Z].references===0&&(f[Z].updater(),f.splice(Z,1))}d=se}}},7659(M){"use strict";var f={};function y(E){if(typeof f[E]=="undefined"){var x=document.querySelector(E);if(window.HTMLIFrameElement&&x instanceof window.HTMLIFrameElement)try{x=x.contentDocument.head}catch(m){x=null}f[E]=x}return f[E]}function F(E,x){var m=y(E);if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(x)}M.exports=F},540(M){"use strict";function f(y){var F=document.createElement("style");return y.setAttributes(F,y.attributes),y.insert(F,y.options),F}M.exports=f},5056(M,f,y){"use strict";function F(E){var x=y.nc;x&&E.setAttribute("nonce",x)}M.exports=F},7825(M){"use strict";function f(E,x,m){var d="";m.supports&&(d+="@supports (".concat(m.supports,") {")),m.media&&(d+="@media ".concat(m.media," {"));var J=typeof m.layer!="undefined";J&&(d+="@layer".concat(m.layer.length>0?" ".concat(m.layer):""," {")),d+=m.css,J&&(d+="}"),m.media&&(d+="}"),m.supports&&(d+="}");var R=m.sourceMap;R&&typeof btoa!="undefined"&&(d+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R))))," */")),x.styleTagTransform(d,E,x.options)}function y(E){if(E.parentNode===null)return!1;E.parentNode.removeChild(E)}function F(E){if(typeof document=="undefined")return{update:function(){},remove:function(){}};var x=E.insertStyleElement(E);return{update:function(d){f(x,E,d)},remove:function(){y(x)}}}M.exports=F},1113(M){"use strict";function f(y,F){if(F.styleSheet)F.styleSheet.cssText=y;else{for(;F.firstChild;)F.removeChild(F.firstChild);F.appendChild(document.createTextNode(y))}}M.exports=f},9616(M,f,y){"use strict";y.r(f),y.d(f,{ServerStyleSheet:()=>Te,StyleSheetConsumer:()=>pe,StyleSheetContext:()=>Do,StyleSheetManager:()=>zo,ThemeConsumer:()=>K,ThemeContext:()=>qo,ThemeProvider:()=>Ii,__PRIVATE__:()=>ie,createGlobalStyle:()=>V,css:()=>un,default:()=>v,isStyledComponent:()=>jo,keyframes:()=>ke,styled:()=>v,useTheme:()=>Yo,version:()=>ji,withTheme:()=>Re});var F=function(l,p){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,_){b.__proto__=_}||function(b,_){for(var j in _)Object.prototype.hasOwnProperty.call(_,j)&&(b[j]=_[j])},F(l,p)};function E(l,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");F(l,p);function b(){this.constructor=l}l.prototype=p===null?Object.create(p):(b.prototype=p.prototype,new b)}var x=function(){return x=Object.assign||function(p){for(var b,_=1,j=arguments.length;_<j;_++){b=arguments[_];for(var oe in b)Object.prototype.hasOwnProperty.call(b,oe)&&(p[oe]=b[oe])}return p},x.apply(this,arguments)};function m(l,p){var b={};for(var _ in l)Object.prototype.hasOwnProperty.call(l,_)&&p.indexOf(_)<0&&(b[_]=l[_]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,_=Object.getOwnPropertySymbols(l);j<_.length;j++)p.indexOf(_[j])<0&&Object.prototype.propertyIsEnumerable.call(l,_[j])&&(b[_[j]]=l[_[j]]);return b}function d(l,p,b,_){var j=arguments.length,oe=j<3?p:_===null?_=Object.getOwnPropertyDescriptor(p,b):_,Ce;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")oe=Reflect.decorate(l,p,b,_);else for(var Le=l.length-1;Le>=0;Le--)(Ce=l[Le])&&(oe=(j<3?Ce(oe):j>3?Ce(p,b,oe):Ce(p,b))||oe);return j>3&&oe&&Object.defineProperty(p,b,oe),oe}function J(l,p){return function(b,_){p(b,_,l)}}function R(l,p,b,_,j,oe){function Ce(Or){if(Or!==void 0&&typeof Or!="function")throw new TypeError("Function expected");return Or}for(var Le=_.kind,qe=Le==="getter"?"get":Le==="setter"?"set":"value",Ve=!p&&l?_.static?l:l.prototype:null,Mt=p||(Ve?Object.getOwnPropertyDescriptor(Ve,_.name):{}),sn,ur=!1,rn=b.length-1;rn>=0;rn--){var Tn={};for(var hr in _)Tn[hr]=hr==="access"?{}:_[hr];for(var hr in _.access)Tn.access[hr]=_.access[hr];Tn.addInitializer=function(Or){if(ur)throw new TypeError("Cannot add initializers after decoration has completed");oe.push(Ce(Or||null))};var Tr=(0,b[rn])(Le==="accessor"?{get:Mt.get,set:Mt.set}:Mt[qe],Tn);if(Le==="accessor"){if(Tr===void 0)continue;if(Tr===null||typeof Tr!="object")throw new TypeError("Object expected");(sn=Ce(Tr.get))&&(Mt.get=sn),(sn=Ce(Tr.set))&&(Mt.set=sn),(sn=Ce(Tr.init))&&j.unshift(sn)}else(sn=Ce(Tr))&&(Le==="field"?j.unshift(sn):Mt[qe]=sn)}Ve&&Object.defineProperty(Ve,_.name,Mt),ur=!0}function z(l,p,b){for(var _=arguments.length>2,j=0;j<p.length;j++)b=_?p[j].call(l,b):p[j].call(l);return _?b:void 0}function X(l){return typeof l=="symbol"?l:"".concat(l)}function be(l,p,b){return typeof p=="symbol"&&(p=p.description?"[".concat(p.description,"]"):""),Object.defineProperty(l,"name",{configurable:!0,value:b?"".concat(b," ",p):p})}function se(l,p){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(l,p)}function ge(l,p,b,_){function j(oe){return oe instanceof b?oe:new b(function(Ce){Ce(oe)})}return new(b||(b=Promise))(function(oe,Ce){function Le(Mt){try{Ve(_.next(Mt))}catch(sn){Ce(sn)}}function qe(Mt){try{Ve(_.throw(Mt))}catch(sn){Ce(sn)}}function Ve(Mt){Mt.done?oe(Mt.value):j(Mt.value).then(Le,qe)}Ve((_=_.apply(l,p||[])).next())})}function ye(l,p){var b={label:0,sent:function(){if(oe[0]&1)throw oe[1];return oe[1]},trys:[],ops:[]},_,j,oe,Ce=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return Ce.next=Le(0),Ce.throw=Le(1),Ce.return=Le(2),typeof Symbol=="function"&&(Ce[Symbol.iterator]=function(){return this}),Ce;function Le(Ve){return function(Mt){return qe([Ve,Mt])}}function qe(Ve){if(_)throw new TypeError("Generator is already executing.");for(;Ce&&(Ce=0,Ve[0]&&(b=0)),b;)try{if(_=1,j&&(oe=Ve[0]&2?j.return:Ve[0]?j.throw||((oe=j.return)&&oe.call(j),0):j.next)&&!(oe=oe.call(j,Ve[1])).done)return oe;switch(j=0,oe&&(Ve=[Ve[0]&2,oe.value]),Ve[0]){case 0:case 1:oe=Ve;break;case 4:return b.label++,{value:Ve[1],done:!1};case 5:b.label++,j=Ve[1],Ve=[0];continue;case 7:Ve=b.ops.pop(),b.trys.pop();continue;default:if(oe=b.trys,!(oe=oe.length>0&&oe[oe.length-1])&&(Ve[0]===6||Ve[0]===2)){b=0;continue}if(Ve[0]===3&&(!oe||Ve[1]>oe[0]&&Ve[1]<oe[3])){b.label=Ve[1];break}if(Ve[0]===6&&b.label<oe[1]){b.label=oe[1],oe=Ve;break}if(oe&&b.label<oe[2]){b.label=oe[2],b.ops.push(Ve);break}oe[2]&&b.ops.pop(),b.trys.pop();continue}Ve=p.call(l,b)}catch(Mt){Ve=[6,Mt],j=0}finally{_=oe=0}if(Ve[0]&5)throw Ve[1];return{value:Ve[0]?Ve[1]:void 0,done:!0}}}var Z=Object.create?(function(l,p,b,_){_===void 0&&(_=b);var j=Object.getOwnPropertyDescriptor(p,b);(!j||("get"in j?!p.__esModule:j.writable||j.configurable))&&(j={enumerable:!0,get:function(){return p[b]}}),Object.defineProperty(l,_,j)}):(function(l,p,b,_){_===void 0&&(_=b),l[_]=p[b]});function ve(l,p){for(var b in l)b!=="default"&&!Object.prototype.hasOwnProperty.call(p,b)&&Z(p,l,b)}function ae(l){var p=typeof Symbol=="function"&&Symbol.iterator,b=p&&l[p],_=0;if(b)return b.call(l);if(l&&typeof l.length=="number")return{next:function(){return l&&_>=l.length&&(l=void 0),{value:l&&l[_++],done:!l}}};throw new TypeError(p?"Object is not iterable.":"Symbol.iterator is not defined.")}function fe(l,p){var b=typeof Symbol=="function"&&l[Symbol.iterator];if(!b)return l;var _=b.call(l),j,oe=[],Ce;try{for(;(p===void 0||p-- >0)&&!(j=_.next()).done;)oe.push(j.value)}catch(Le){Ce={error:Le}}finally{try{j&&!j.done&&(b=_.return)&&b.call(_)}finally{if(Ce)throw Ce.error}}return oe}function ee(){for(var l=[],p=0;p<arguments.length;p++)l=l.concat(fe(arguments[p]));return l}function g(){for(var l=0,p=0,b=arguments.length;p<b;p++)l+=arguments[p].length;for(var _=Array(l),j=0,p=0;p<b;p++)for(var oe=arguments[p],Ce=0,Le=oe.length;Ce<Le;Ce++,j++)_[j]=oe[Ce];return _}function Be(l,p,b){if(b||arguments.length===2)for(var _=0,j=p.length,oe;_<j;_++)(oe||!(_ in p))&&(oe||(oe=Array.prototype.slice.call(p,0,_)),oe[_]=p[_]);return l.concat(oe||Array.prototype.slice.call(p))}function Ee(l){return this instanceof Ee?(this.v=l,this):new Ee(l)}function We(l,p,b){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var _=b.apply(l,p||[]),j,oe=[];return j=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),Le("next"),Le("throw"),Le("return",Ce),j[Symbol.asyncIterator]=function(){return this},j;function Ce(rn){return function(Tn){return Promise.resolve(Tn).then(rn,sn)}}function Le(rn,Tn){_[rn]&&(j[rn]=function(hr){return new Promise(function(Tr,Or){oe.push([rn,hr,Tr,Or])>1||qe(rn,hr)})},Tn&&(j[rn]=Tn(j[rn])))}function qe(rn,Tn){try{Ve(_[rn](Tn))}catch(hr){ur(oe[0][3],hr)}}function Ve(rn){rn.value instanceof Ee?Promise.resolve(rn.value.v).then(Mt,sn):ur(oe[0][2],rn)}function Mt(rn){qe("next",rn)}function sn(rn){qe("throw",rn)}function ur(rn,Tn){rn(Tn),oe.shift(),oe.length&&qe(oe[0][0],oe[0][1])}}function ht(l){var p,b;return p={},_("next"),_("throw",function(j){throw j}),_("return"),p[Symbol.iterator]=function(){return this},p;function _(j,oe){p[j]=l[j]?function(Ce){return(b=!b)?{value:Ee(l[j](Ce)),done:!1}:oe?oe(Ce):Ce}:oe}}function Tt(l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var p=l[Symbol.asyncIterator],b;return p?p.call(l):(l=typeof ae=="function"?ae(l):l[Symbol.iterator](),b={},_("next"),_("throw"),_("return"),b[Symbol.asyncIterator]=function(){return this},b);function _(oe){b[oe]=l[oe]&&function(Ce){return new Promise(function(Le,qe){Ce=l[oe](Ce),j(Le,qe,Ce.done,Ce.value)})}}function j(oe,Ce,Le,qe){Promise.resolve(qe).then(function(Ve){oe({value:Ve,done:Le})},Ce)}}function zt(l,p){return Object.defineProperty?Object.defineProperty(l,"raw",{value:p}):l.raw=p,l}var Wn=Object.create?(function(l,p){Object.defineProperty(l,"default",{enumerable:!0,value:p})}):function(l,p){l.default=p},ir=function(l){return ir=Object.getOwnPropertyNames||function(p){var b=[];for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(b[b.length]=_);return b},ir(l)};function Vn(l){if(l&&l.__esModule)return l;var p={};if(l!=null)for(var b=ir(l),_=0;_<b.length;_++)b[_]!=="default"&&Z(p,l,b[_]);return Wn(p,l),p}function An(l){return l&&l.__esModule?l:{default:l}}function Bn(l,p,b,_){if(b==="a"&&!_)throw new TypeError("Private accessor was defined without a getter");if(typeof p=="function"?l!==p||!_:!p.has(l))throw new TypeError("Cannot read private member from an object whose class did not declare it");return b==="m"?_:b==="a"?_.call(l):_?_.value:p.get(l)}function ar(l,p,b,_,j){if(_==="m")throw new TypeError("Private method is not writable");if(_==="a"&&!j)throw new TypeError("Private accessor was defined without a setter");if(typeof p=="function"?l!==p||!j:!p.has(l))throw new TypeError("Cannot write private member to an object whose class did not declare it");return _==="a"?j.call(l,b):j?j.value=b:p.set(l,b),b}function _n(l,p){if(p===null||typeof p!="object"&&typeof p!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof l=="function"?p===l:l.has(p)}function wt(l,p,b){if(p!=null){if(typeof p!="object"&&typeof p!="function")throw new TypeError("Object expected.");var _,j;if(b){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");_=p[Symbol.asyncDispose]}if(_===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");_=p[Symbol.dispose],b&&(j=_)}if(typeof _!="function")throw new TypeError("Object not disposable.");j&&(_=function(){try{j.call(this)}catch(oe){return Promise.reject(oe)}}),l.stack.push({value:p,dispose:_,async:b})}else b&&l.stack.push({async:!0});return p}var ln=typeof SuppressedError=="function"?SuppressedError:function(l,p,b){var _=new Error(b);return _.name="SuppressedError",_.error=l,_.suppressed=p,_};function kn(l){function p(oe){l.error=l.hasError?new ln(oe,l.error,"An error was suppressed during disposal."):oe,l.hasError=!0}var b,_=0;function j(){for(;b=l.stack.pop();)try{if(!b.async&&_===1)return _=0,l.stack.push(b),Promise.resolve().then(j);if(b.dispose){var oe=b.dispose.call(b.value);if(b.async)return _|=2,Promise.resolve(oe).then(j,function(Ce){return p(Ce),j()})}else _|=1}catch(Ce){p(Ce)}if(_===1)return l.hasError?Promise.reject(l.error):Promise.resolve();if(l.hasError)throw l.error}return j()}function er(l,p){return typeof l=="string"&&/^\.\.?\//.test(l)?l.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(b,_,j,oe,Ce){return _?p?".jsx":".js":j&&(!oe||!Ce)?b:j+oe+"."+Ce.toLowerCase()+"js"}):l}const Oe={__extends:E,__assign:x,__rest:m,__decorate:d,__param:J,__esDecorate:R,__runInitializers:z,__propKey:X,__setFunctionName:be,__metadata:se,__awaiter:ge,__generator:ye,__createBinding:Z,__exportStar:ve,__values:ae,__read:fe,__spread:ee,__spreadArrays:g,__spreadArray:Be,__await:Ee,__asyncGenerator:We,__asyncDelegator:ht,__asyncValues:Tt,__makeTemplateObject:zt,__importStar:Vn,__importDefault:An,__classPrivateFieldGet:Bn,__classPrivateFieldSet:ar,__classPrivateFieldIn:_n,__addDisposableResource:wt,__disposeResources:kn,__rewriteRelativeImportExtension:er};var vt=y(6540),gn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt="-ms-",on="-moz-",rt="-webkit-",tt="comm",xt="rule",nt="decl",mt="@page",ct="@media",kt="@import",Sn="@charset",Rn="@viewport",mn="@supports",Lr="@document",uo="@namespace",_i="@keyframes",Nr="@font-face",Po="@counter-style",di="@font-feature-values",xo="@layer",So="@scope",Ra=Math.abs,Gr=String.fromCharCode,Ga=Object.assign;function Nn(l,p){return zn(l,0)^45?(((p<<2^zn(l,0))<<2^zn(l,1))<<2^zn(l,2))<<2^zn(l,3):0}function vr(l){return l.trim()}function $n(l,p){return(l=p.exec(l))?l[0]:l}function an(l,p,b){return l.replace(p,b)}function wr(l,p,b){return l.indexOf(p,b)}function zn(l,p){return l.charCodeAt(p)|0}function Ze(l,p,b){return l.slice(p,b)}function Ar(l){return l.length}function Zn(l){return l.length}function Kr(l,p){return p.push(l),l}function Bo(l,p){return l.map(p).join("")}function co(l,p){return l.filter(function(b){return!$n(b,p)})}var ko,Cr,to=1,No=1,_r=0,io=0,Mr=0,fi="";function Ji(l,p,b,_,j,oe,Ce,Le){return{value:l,root:p,parent:b,type:_,props:j,children:oe,line:to,column:No,length:Ce,return:"",siblings:Le}}function Qe(l,p){return Ga(Ji("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},p)}function Ye(l){for(;l.root;)l=Qe(l.root,{children:[l]});Kr(l,l.siblings)}function Ct(){return Mr}function Nt(){return Mr=io>0?zn(fi,--io):0,No--,Mr===10&&(No=1,to--),Mr}function qt(){return Mr=io<_r?zn(fi,io++):0,No++,Mr===10&&(No=1,to++),Mr}function En(){return zn(fi,io)}function wn(){return io}function Yn(l,p){return Ze(fi,l,p)}function fr(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gr(l){return to=No=1,_r=Ar(fi=l),io=0,[]}function rr(l){return fi="",l}function Fn(l){return vr(Yn(io-1,hi(l===91?l+2:l===40?l+1:l)))}function Xr(l){return rr(bn(gr(l)))}function fo(l){for(;(Mr=En())&&Mr<33;)qt();return fr(l)>2||fr(Mr)>3?"":" "}function bn(l){for(;qt();)switch(fr(Mr)){case 0:ko(po(io-1),l);break;case 2:ko(Fn(Mr),l);break;default:ko(Cr(Mr),l)}return l}function pi(l,p){for(;--p&&qt()&&!(Mr<48||Mr>102||Mr>57&&Mr<65||Mr>70&&Mr<97););return Yn(l,wn()+(p<6&&En()==32&&qt()==32))}function hi(l){for(;qt();)switch(Mr){case l:return io;case 34:case 39:l!==34&&l!==39&&hi(Mr);break;case 40:l===41&&hi(l);break;case 92:qt();break}return io}function mi(l,p){for(;qt()&&l+Mr!==57;)if(l+Mr===84&&En()===47)break;return"/*"+Yn(p,io-1)+"*"+Gr(l===47?l:qt())}function po(l){for(;!fr(En());)qt();return Yn(l,io)}function vi(l,p){for(var b="",_=0;_<l.length;_++)b+=p(l[_],_,l,p)||"";return b}function fa(l,p,b,_){switch(l.type){case xo:if(l.children.length)break;case kt:case uo:case nt:return l.return=l.return||l.value;case tt:return"";case _i:return l.return=l.value+"{"+vi(l.children,_)+"}";case xt:if(!Ar(l.value=l.props.join(",")))return""}return Ar(b=vi(l.children,_))?l.return=l.value+"{"+b+"}":""}function Si(l,p,b){switch(Nn(l,p)){case 5103:return rt+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return rt+l+l;case 4855:return rt+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return on+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+l+on+l+Bt+l+l;case 5936:switch(zn(l,p+11)){case 114:return rt+l+Bt+an(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return rt+l+Bt+an(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return rt+l+Bt+an(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return rt+l+Bt+l+l;case 6165:return rt+l+Bt+"flex-"+l+l;case 5187:return rt+l+an(l,/(\w+).+(:[^]+)/,rt+"box-$1$2"+Bt+"flex-$1$2")+l;case 5443:return rt+l+Bt+"flex-item-"+an(l,/flex-|-self/g,"")+($n(l,/flex-|baseline/)?"":Bt+"grid-row-"+an(l,/flex-|-self/g,""))+l;case 4675:return rt+l+Bt+"flex-line-pack"+an(l,/align-content|flex-|-self/g,"")+l;case 5548:return rt+l+Bt+an(l,"shrink","negative")+l;case 5292:return rt+l+Bt+an(l,"basis","preferred-size")+l;case 6060:return rt+"box-"+an(l,"-grow","")+rt+l+Bt+an(l,"grow","positive")+l;case 4554:return rt+an(l,/([^-])(transform)/g,"$1"+rt+"$2")+l;case 6187:return an(an(an(l,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),l,"")+l;case 5495:case 3959:return an(l,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return an(an(l,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+Bt+"flex-pack:$3"),/space-between/,"justify")+rt+l+l;case 4200:if(!$n(l,/flex-|baseline/))return Bt+"grid-column-align"+Ze(l,p)+l;break;case 2592:case 3360:return Bt+an(l,"template-","")+l;case 4384:case 3616:return b&&b.some(function(_,j){return p=j,$n(_.props,/grid-\w+-end/)})?~wr(l+(b=b[p].value),"span",0)?l:Bt+an(l,"-start","")+l+Bt+"grid-row-span:"+(~wr(b,"span",0)?$n(b,/\d+/):+$n(b,/\d+/)-+$n(l,/\d+/))+";":Bt+an(l,"-start","")+l;case 4896:case 4128:return b&&b.some(function(_){return $n(_.props,/grid-\w+-start/)})?l:Bt+an(an(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return an(l,/(.+)-inline(.+)/,rt+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(l)-1-p>6)switch(zn(l,p+1)){case 109:if(zn(l,p+4)!==45)break;case 102:return an(l,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+on+(zn(l,p+3)==108?"$3":"$2-$3"))+l;case 115:return~wr(l,"stretch",0)?Si(an(l,"stretch","fill-available"),p,b)+l:l}break;case 5152:case 5920:return an(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(_,j,oe,Ce,Le,qe,Ve){return Bt+j+":"+oe+Ve+(Ce?Bt+j+"-span:"+(Le?qe:+qe-+oe)+Ve:"")+l});case 4949:if(zn(l,p+6)===121)return an(l,":",":"+rt)+l;break;case 6444:switch(zn(l,zn(l,14)===45?18:11)){case 120:return an(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(zn(l,14)===45?"inline-":"")+"box$3$1"+rt+"$2$3$1"+Bt+"$2box$3")+l;case 100:return an(l,":",":"+Bt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return an(l,"scroll-","scroll-snap-")+l}return l}var Ei,ja,Sr,bi,xr,aa,Oi;function pa(l){var p=Zn(l);return function(b,_,j,oe){for(var Ce="",Le=0;Le<p;Le++)Ce+=l[Le](b,_,j,oe)||"";return Ce}}function Wr(l){return function(p){p.root||(p=p.return)&&l(p)}}function ha(l,p,b,_){if(l.length>-1&&!l.return)switch(l.type){case nt:l.return=Si(l.value,l.length,b);return;case _i:return vi([Qe(l,{value:an(l.value,"@","@"+rt)})],_);case xt:if(l.length)return Bo(b=l.props,function(j){switch($n(j,_=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ye(Qe(l,{props:[an(j,/:(read-\w+)/,":"+on+"$1")]})),Ye(Qe(l,{props:[j]})),Ga(l,{props:co(b,_)});break;case"::placeholder":Ye(Qe(l,{props:[an(j,/:(plac\w+)/,":"+rt+"input-$1")]})),Ye(Qe(l,{props:[an(j,/:(plac\w+)/,":"+on+"$1")]})),Ye(Qe(l,{props:[an(j,/:(plac\w+)/,Bt+"input-$1")]})),Ye(Qe(l,{props:[j]})),Ga(l,{props:co(b,_)});break}return""})}}function Fo(l){l.type===Ei&&(l.props=l.props.map(function(p){return ja(Oi(p),function(b,_,j){switch(Sr(b,0)){case 12:return bi(b,1,xr(b));case 0:case 40:case 43:case 62:case 126:return b;case 58:j[++_]==="global"&&(j[_]="",j[++_]="\f"+bi(j[_],_=1,-1));case 32:return _===1?"":b;default:switch(_){case 0:return l=b,aa(j)>1?"":b;case(_=aa(j)-1):case 2:return _===2?b+l+l:b+l;default:return b}}})}))}function Yr(l){return rr(Gt("",null,null,null,[""],l=gr(l),0,[0],l))}function Gt(l,p,b,_,j,oe,Ce,Le,qe){for(var Ve=0,Mt=0,sn=Ce,ur=0,rn=0,Tn=0,hr=1,Tr=1,Or=1,mo=0,Jo="",Un=j,vo=oe,$r=_,Mn=Jo;Tr;)switch(Tn=mo,mo=qt()){case 40:if(Tn!=108&&zn(Mn,sn-1)==58){wr(Mn+=an(Fn(mo),"&","&\f"),"&\f",Ra(Ve?Le[Ve-1]:0))!=-1&&(Or=-1);break}case 34:case 39:case 91:Mn+=Fn(mo);break;case 9:case 10:case 13:case 32:Mn+=fo(Tn);break;case 92:Mn+=pi(wn()-1,7);continue;case 47:switch(En()){case 42:case 47:Kr(Xa(mi(qt(),wn()),p,b,qe),qe),(fr(Tn||1)==5||fr(En()||1)==5)&&Ar(Mn)&&Ze(Mn,-1,void 0)!==" "&&(Mn+=" ");break;default:Mn+="/"}break;case 123*hr:Le[Ve++]=Ar(Mn)*Or;case 125*hr:case 59:case 0:switch(mo){case 0:case 125:Tr=0;case 59+Mt:Or==-1&&(Mn=an(Mn,/\f/g,"")),rn>0&&(Ar(Mn)-sn||hr===0&&Tn===47)&&Kr(rn>32?Ri(Mn+";",_,b,sn-1,qe):Ri(an(Mn," ","")+";",_,b,sn-2,qe),qe);break;case 59:Mn+=";";default:if(Kr($r=ea(Mn,p,b,Ve,Mt,j,Le,Jo,Un=[],vo=[],sn,oe),oe),mo===123)if(Mt===0)Gt(Mn,p,$r,$r,Un,oe,sn,Le,vo);else{switch(ur){case 99:if(zn(Mn,3)===110)break;case 108:if(zn(Mn,2)===97)break;default:Mt=0;case 100:case 109:case 115:}Mt?Gt(l,$r,$r,_&&Kr(ea(l,$r,$r,0,0,j,Le,Jo,j,Un=[],sn,vo),vo),j,vo,sn,Le,_?Un:vo):Gt(Mn,$r,$r,$r,[""],vo,0,Le,vo)}}Ve=Mt=rn=0,hr=Or=1,Jo=Mn="",sn=Ce;break;case 58:sn=1+Ar(Mn),rn=Tn;default:if(hr<1){if(mo==123)--hr;else if(mo==125&&hr++==0&&Nt()==125)continue}switch(Mn+=Gr(mo),mo*hr){case 38:Or=Mt>0?1:(Mn+="\f",-1);break;case 44:Le[Ve++]=(Ar(Mn)-1)*Or,Or=1;break;case 64:En()===45&&(Mn+=Fn(qt())),ur=En(),Mt=sn=Ar(Jo=Mn+=po(wn())),mo++;break;case 45:Tn===45&&Ar(Mn)==2&&(hr=0)}}return oe}function ea(l,p,b,_,j,oe,Ce,Le,qe,Ve,Mt,sn){for(var ur=j-1,rn=j===0?oe:[""],Tn=Zn(rn),hr=0,Tr=0,Or=0;hr<_;++hr)for(var mo=0,Jo=Ze(l,ur+1,ur=Ra(Tr=Ce[hr])),Un=l;mo<Tn;++mo)(Un=vr(Tr>0?rn[mo]+" "+Jo:an(Jo,/&\f/g,rn[mo])))&&(qe[Or++]=Un);return Ji(l,p,b,j===0?xt:Le,qe,Ve,Mt,sn)}function Xa(l,p,b,_){return Ji(l,p,b,tt,Gr(Ct()),Ze(l,2,-2),0,_)}function Ri(l,p,b,_,j){return Ji(l,p,b,nt,Ze(l,0,_),Ze(l,_+1,-1),_,j)}var Oo=typeof process!="undefined"&&!0&&("MISSING_ENV_VAR".REACT_APP_SC_ATTR||"MISSING_ENV_VAR".SC_ATTR)||"data-styled",sa="active",Fr="data-styled-version",ji="6.3.12",Br=`/*!sc*/
`,ni=typeof window!="undefined"&&typeof document!="undefined",Io=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&"MISSING_ENV_VAR".REACT_APP_SC_DISABLE_SPEEDY!==void 0&&"MISSING_ENV_VAR".REACT_APP_SC_DISABLE_SPEEDY!==""?"MISSING_ENV_VAR".REACT_APP_SC_DISABLE_SPEEDY!=="false"&&"MISSING_ENV_VAR".REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&"MISSING_ENV_VAR".SC_DISABLE_SPEEDY!==void 0&&"MISSING_ENV_VAR".SC_DISABLE_SPEEDY!==""&&"MISSING_ENV_VAR".SC_DISABLE_SPEEDY!=="false"&&"MISSING_ENV_VAR".SC_DISABLE_SPEEDY),Ni={},Xo={};function ma(){for(var l=[],p=0;p<arguments.length;p++)l[p]=arguments[p];for(var b=l[0],_=[],j=1,oe=l.length;j<oe;j+=1)_.push(l[j]);return _.forEach(function(Ce){b=b.replace(/%[a-z]/,Ce)}),b}function no(l){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(p.length>0?" Args: ".concat(p.join(", ")):""))}var wa=null,or=new Map,To=new Map,Hi=1,Di=function(l){if(or.has(l))return or.get(l);for(;To.has(Hi);)Hi++;var p=Hi++;return or.set(l,p),To.set(p,l),p},S=function(l,p){Hi=p+1,or.set(l,p),To.set(p,l)},D=/invalid hook call/i,q=new Set,ue=function(l,p){if(0)var b,_,j,oe},le=Object.freeze([]),Me=Object.freeze({});function Ne(l,p,b){return b===void 0&&(b=Me),l.theme!==b.theme&&l.theme||p||b.theme}var lt=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),st=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dt=/(^-|-$)/g;function Vt(l){return l.replace(st,"-").replace(Dt,"")}var Xt=/(a)(d)/gi,yn=function(l){return String.fromCharCode(l+(l>25?39:97))};function _t(l){var p,b="";for(p=Math.abs(l);p>52;p=p/52|0)b=yn(p%52)+b;return(yn(p%52)+b).replace(Xt,"$1-$2")}var nn,tn=function(l,p){for(var b=p.length;b;)l=33*l^p.charCodeAt(--b);return l},Cn=function(l){return tn(5381,l)};function pr(l){return _t(Cn(l)>>>0)}function jn(l){return l.displayName||l.name||"Component"}function lr(l){return typeof l=="string"&&!0}var fn=typeof Symbol=="function"&&Symbol.for,kr=fn?Symbol.for("react.memo"):60115,ao=fn?Symbol.for("react.forward_ref"):60112,et={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ro={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gn=((nn={})[ao]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nn[kr]=ro,nn);function oo(l){return("type"in(p=l)&&p.type.$$typeof)===kr?ro:"$$typeof"in l?Gn[l.$$typeof]:et;var p}var Ro=Object.defineProperty,Ao=Object.getOwnPropertyNames,Ki=Object.getOwnPropertySymbols,Pi=Object.getOwnPropertyDescriptor,Da=Object.getPrototypeOf,ri=Object.prototype;function ho(l,p,b){if(typeof p!="string"){if(ri){var _=Da(p);_&&_!==ri&&ho(l,_,b)}var j=Ao(p);Ki&&(j=j.concat(Ki(p)));for(var oe=oo(l),Ce=oo(p),Le=0;Le<j.length;++Le){var qe=j[Le];if(!(qe in yr||b&&b[qe]||Ce&&qe in Ce||oe&&qe in oe)){var Ve=Pi(p,qe);try{Ro(l,qe,Ve)}catch(Mt){}}}}return l}function _o(l){return typeof l=="function"}function jo(l){return typeof l=="object"&&"styledComponentId"in l}function oi(l,p){return l&&p?"".concat(l," ").concat(p):l||p||""}function gi(l,p){return l.join(p||"")}function Uo(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function va(l,p,b){if(b===void 0&&(b=!1),!b&&!Uo(l)&&!Array.isArray(l))return p;if(Array.isArray(p))for(var _=0;_<p.length;_++)l[_]=va(l[_],p[_]);else if(Uo(p))for(var _ in p)l[_]=va(l[_],p[_]);return l}function Mo(l,p){Object.defineProperty(l,"toString",{value:p})}var $i=(function(){function l(p){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=p,this._cGroup=0,this._cIndex=0}return l.prototype.indexOfGroup=function(p){if(p===this._cGroup)return this._cIndex;var b=this._cIndex;if(p>this._cGroup)for(var _=this._cGroup;_<p;_++)b+=this.groupSizes[_];else for(_=this._cGroup-1;_>=p;_--)b-=this.groupSizes[_];return this._cGroup=p,this._cIndex=b,b},l.prototype.insertRules=function(p,b){if(p>=this.groupSizes.length){for(var _=this.groupSizes,j=_.length,oe=j;p>=oe;)if((oe<<=1)<0)throw no(16,"".concat(p));this.groupSizes=new Uint32Array(oe),this.groupSizes.set(_),this.length=oe;for(var Ce=j;Ce<oe;Ce++)this.groupSizes[Ce]=0}for(var Le=this.indexOfGroup(p+1),qe=0,Ve=(Ce=0,b.length);Ce<Ve;Ce++)this.tag.insertRule(Le,b[Ce])&&(this.groupSizes[p]++,Le++,qe++);qe>0&&this._cGroup>p&&(this._cIndex+=qe)},l.prototype.clearGroup=function(p){if(p<this.length){var b=this.groupSizes[p],_=this.indexOfGroup(p),j=_+b;this.groupSizes[p]=0;for(var oe=_;oe<j;oe++)this.tag.deleteRule(_);b>0&&this._cGroup>p&&(this._cIndex-=b)}},l.prototype.getGroup=function(p){var b="";if(p>=this.length||this.groupSizes[p]===0)return b;for(var _=this.groupSizes[p],j=this.indexOfGroup(p),oe=j+_,Ce=j;Ce<oe;Ce++)b+=this.tag.getRule(Ce)+Br;return b},l})(),Ur="style[".concat(Oo,"][").concat(Fr,'="').concat(ji,'"]'),Eo=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ia=function(l){return typeof ShadowRoot!="undefined"&&l instanceof ShadowRoot||"host"in l&&l.nodeType===11},ta=function(l){if(!l)return document;if(Ia(l))return l;if("getRootNode"in l){var p=l.getRootNode();if(Ia(p))return p}return document},Ma=function(l,p,b){for(var _,j=b.split(","),oe=0,Ce=j.length;oe<Ce;oe++)(_=j[oe])&&l.registerName(p,_)},bo=function(l,p){for(var b,_=((b=p.textContent)!==null&&b!==void 0?b:"").split(Br),j=[],oe=0,Ce=_.length;oe<Ce;oe++){var Le=_[oe].trim();if(Le){var qe=Le.match(Eo);if(qe){var Ve=0|parseInt(qe[1],10),Mt=qe[2];Ve!==0&&(S(Mt,Ve),Ma(l,Mt,qe[3]),l.getTag().insertRules(Ve,j)),j.length=0}else j.push(Le)}}},zi=function(l){for(var p=ta(l.options.target).querySelectorAll(Ur),b=0,_=p.length;b<_;b++){var j=p[b];j&&j.getAttribute(Oo)!==sa&&(bo(l,j),j.parentNode&&j.parentNode.removeChild(j))}};function Gi(){return y.nc}var La=function(l){var p=document.head,b=l||p,_=document.createElement("style"),j=(function(Le){var qe=Array.from(Le.querySelectorAll("style[".concat(Oo,"]")));return qe[qe.length-1]})(b),oe=j!==void 0?j.nextSibling:null;_.setAttribute(Oo,sa),_.setAttribute(Fr,ji);var Ce=Gi();return Ce&&_.setAttribute("nonce",Ce),b.insertBefore(_,oe),_},wo=(function(){function l(p){this.element=La(p),this.element.appendChild(document.createTextNode("")),this.sheet=(function(b){var _;if(b.sheet)return b.sheet;for(var j=(_=b.getRootNode().styleSheets)!==null&&_!==void 0?_:document.styleSheets,oe=0,Ce=j.length;oe<Ce;oe++){var Le=j[oe];if(Le.ownerNode===b)return Le}throw no(17)})(this.element),this.length=0}return l.prototype.insertRule=function(p,b){try{return this.sheet.insertRule(b,p),this.length++,!0}catch(_){return!1}},l.prototype.deleteRule=function(p){this.sheet.deleteRule(p),this.length--},l.prototype.getRule=function(p){var b=this.sheet.cssRules[p];return b&&b.cssText?b.cssText:""},l})(),ga=(function(){function l(p){this.element=La(p),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(p,b){if(p<=this.length&&p>=0){var _=document.createTextNode(b);return this.element.insertBefore(_,this.nodes[p]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(p){this.element.removeChild(this.nodes[p]),this.length--},l.prototype.getRule=function(p){return p<this.length?this.nodes[p].textContent:""},l})(),Ya=(function(){function l(p){this.rules=[],this.length=0}return l.prototype.insertRule=function(p,b){return p<=this.length&&(p===this.length?this.rules.push(b):this.rules.splice(p,0,b),this.length++,!0)},l.prototype.deleteRule=function(p){this.rules.splice(p,1),this.length--},l.prototype.getRule=function(p){return p<this.length?this.rules[p]:""},l})(),Xi=ni,ts={isServer:!ni,useCSSOMInjection:!Io},Yi=(function(){function l(p,b,_){p===void 0&&(p=Me),b===void 0&&(b={});var j=this;this.options=x(x({},ts),p),this.gs=b,this.names=new Map(_),this.server=!!p.isServer,!this.server&&ni&&Xi&&(Xi=!1,zi(this)),Mo(this,function(){return(function(oe){for(var Ce=oe.getTag(),Le=Ce.length,qe="",Ve=function(sn){var ur=(function(Or){return To.get(Or)})(sn);if(ur===void 0)return"continue";var rn=oe.names.get(ur);if(rn===void 0||!rn.size)return"continue";var Tn=Ce.getGroup(sn);if(Tn.length===0)return"continue";var hr=Oo+".g"+sn+'[id="'+ur+'"]',Tr="";rn.forEach(function(Or){Or.length>0&&(Tr+=Or+",")}),qe+=Tn+hr+'{content:"'+Tr+'"}'+Br},Mt=0;Mt<Le;Mt++)Ve(Mt);return qe})(j)})}return l.registerId=function(p){return Di(p)},l.prototype.rehydrate=function(){!this.server&&ni&&zi(this)},l.prototype.reconstructWithOptions=function(p,b){b===void 0&&(b=!0);var _=new l(x(x({},this.options),p),this.gs,b&&this.names||void 0);return!this.server&&ni&&p.target!==this.options.target&&ta(this.options.target)!==ta(p.target)&&zi(_),_},l.prototype.allocateGSInstance=function(p){return this.gs[p]=(this.gs[p]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(p=(function(b){var _=b.useCSSOMInjection,j=b.target;return b.isServer?new Ya(j):_?new wo(j):new ga(j)})(this.options),new $i(p)));var p},l.prototype.hasNameForId=function(p,b){var _,j;return(j=(_=this.names.get(p))===null||_===void 0?void 0:_.has(b))!==null&&j!==void 0&&j},l.prototype.registerName=function(p,b){Di(p);var _=this.names.get(p);_?_.add(b):this.names.set(p,new Set([b]))},l.prototype.insertRules=function(p,b,_){this.registerName(p,b),this.getTag().insertRules(Di(p),_)},l.prototype.clearNames=function(p){this.names.has(p)&&this.names.get(p).clear()},l.prototype.clearRules=function(p){this.getTag().clearGroup(Di(p)),this.clearNames(p)},l.prototype.clearTag=function(){this.tag=void 0},l})();function ls(l,p){return p==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||l in gn||l.startsWith("--")?String(p).trim():"".concat(p,"px")}var bs=function(l){return l>="A"&&l<="Z"};function Bi(l){for(var p="",b=0;b<l.length;b++){var _=l[b];if(b===1&&_==="-"&&l[0]==="-")return l;bs(_)?p+="-"+_.toLowerCase():p+=_}return p.startsWith("ms-")?"-"+p:p}var Qa=Symbol.for("sc-keyframes");function ws(l){return typeof l=="object"&&l!==null&&Qa in l}var Na=function(l){return l==null||l===!1||l===""},P=function(l){var p=[];for(var b in l){var _=l[b];l.hasOwnProperty(b)&&!Na(_)&&(Array.isArray(_)&&_.isCss||_o(_)?p.push("".concat(Bi(b),":"),_,";"):Uo(_)?p.push.apply(p,Be(Be(["".concat(b," {")],P(_),!1),["}"],!1)):p.push("".concat(Bi(b),": ").concat(ls(b,_),";")))}return p};function k(l,p,b,_,j){if(j===void 0&&(j=[]),typeof l=="string")return l&&j.push(l),j;if(Na(l))return j;if(jo(l))return j.push(".".concat(l.styledComponentId)),j;if(_o(l)){if(!_o(Ce=l)||Ce.prototype&&Ce.prototype.isReactComponent||!p)return j.push(l),j;var oe=l(p);return k(oe,p,b,_,j)}var Ce;if(ws(l))return b?(l.inject(b,_),j.push(l.getName(_))):j.push(l),j;if(Uo(l)){for(var Le=P(l),qe=0;qe<Le.length;qe++)j.push(Le[qe]);return j}if(!Array.isArray(l))return j.push(l.toString()),j;for(qe=0;qe<l.length;qe++)k(l[qe],p,b,_,j);return j}function H(l){for(var p=0;p<l.length;p+=1){var b=l[p];if(_o(b)&&!jo(b))return!1}return!0}var ne=Cn(ji),Ae=(function(){function l(p,b,_){this.rules=p,this.staticRulesId="",this.isStatic=(_===void 0||_.isStatic)&&H(p),this.componentId=b,this.baseHash=tn(ne,b),this.baseStyle=_,Yi.registerId(b)}return l.prototype.generateAndInjectStyles=function(p,b,_){var j=this.baseStyle?this.baseStyle.generateAndInjectStyles(p,b,_).className:"";if(this.isStatic&&!_.hash)if(this.staticRulesId&&b.hasNameForId(this.componentId,this.staticRulesId))j=oi(j,this.staticRulesId);else{var oe=gi(k(this.rules,p,b,_)),Ce=_t(tn(this.baseHash,oe)>>>0);if(!b.hasNameForId(this.componentId,Ce)){var Le=_(oe,".".concat(Ce),void 0,this.componentId);b.insertRules(this.componentId,Ce,Le)}j=oi(j,Ce),this.staticRulesId=Ce}else{for(var qe=tn(this.baseHash,_.hash),Ve="",Mt=0;Mt<this.rules.length;Mt++){var sn=this.rules[Mt];if(typeof sn=="string")Ve+=sn;else if(sn){var ur=gi(k(sn,p,b,_));qe=tn(tn(qe,String(Mt)),ur),Ve+=ur}}if(Ve){var rn=_t(qe>>>0);if(!b.hasNameForId(this.componentId,rn)){var Tn=_(Ve,".".concat(rn),void 0,this.componentId);b.insertRules(this.componentId,rn,Tn)}j=oi(j,rn)}}return{className:j,css:typeof window=="undefined"?b.getTag().getGroup(Di(this.componentId)):""}},l})(),Ke=/&/g,$e=47,yt=42;function xn(l){if(l.indexOf("}")===-1)return!1;for(var p=l.length,b=0,_=0,j=!1,oe=0;oe<p;oe++){var Ce=l.charCodeAt(oe);if(_!==0||j||Ce!==$e||l.charCodeAt(oe+1)!==yt)if(j)Ce===yt&&l.charCodeAt(oe+1)===$e&&(j=!1,oe++);else if(Ce!==34&&Ce!==39||oe!==0&&l.charCodeAt(oe-1)===92){if(_===0){if(Ce===123)b++;else if(Ce===125&&--b<0)return!0}}else _===0?_=Ce:_===Ce&&(_=0);else j=!0,oe++}return b!==0||_!==0}function Ht(l,p){return l.map(function(b){return b.type==="rule"&&(b.value="".concat(p," ").concat(b.value),b.value=b.value.replaceAll(",",",".concat(p," ")),b.props=b.props.map(function(_){return"".concat(p," ").concat(_)})),Array.isArray(b.children)&&b.type!=="@keyframes"&&(b.children=Ht(b.children,p)),b})}function Ft(l){var p,b,_,j=l===void 0?Me:l,oe=j.options,Ce=oe===void 0?Me:oe,Le=j.plugins,qe=Le===void 0?le:Le,Ve=function(Tn,hr,Tr){return Tr.startsWith(b)&&Tr.endsWith(b)&&Tr.replaceAll(b,"").length>0?".".concat(p):Tn},Mt=qe.slice();Mt.push(function(Tn){Tn.type===xt&&Tn.value.includes("&")&&(_||(_=new RegExp("\\".concat(b,"\\b"),"g")),Tn.props[0]=Tn.props[0].replace(Ke,b).replace(_,Ve))}),Ce.prefix&&Mt.push(ha),Mt.push(fa);var sn=[],ur=pa(Mt.concat(Wr(function(Tn){return sn.push(Tn)}))),rn=function(Tn,hr,Tr,Or){hr===void 0&&(hr=""),Tr===void 0&&(Tr=""),Or===void 0&&(Or="&"),p=Or,b=hr,_=void 0;var mo=(function(Un){if(!xn(Un))return Un;for(var vo=Un.length,$r="",Mn=0,Xn=0,Fi=0,Za=!1,Wo=0;Wo<vo;Wo++){var go=Un.charCodeAt(Wo);if(Fi!==0||Za||go!==$e||Un.charCodeAt(Wo+1)!==yt)if(Za)go===yt&&Un.charCodeAt(Wo+1)===$e&&(Za=!1,Wo++);else if(go!==34&&go!==39||Wo!==0&&Un.charCodeAt(Wo-1)===92){if(Fi===0)if(go===123)Xn++;else if(go===125){if(--Xn<0){for(var Fa=Wo+1;Fa<vo;){var Cs=Un.charCodeAt(Fa);if(Cs===59||Cs===10)break;Fa++}Fa<vo&&Un.charCodeAt(Fa)===59&&Fa++,Xn=0,Wo=Fa-1,Mn=Fa;continue}Xn===0&&($r+=Un.substring(Mn,Wo+1),Mn=Wo+1)}else go===59&&Xn===0&&($r+=Un.substring(Mn,Wo+1),Mn=Wo+1)}else Fi===0?Fi=go:Fi===go&&(Fi=0);else Za=!0,Wo++}if(Mn<vo){var rl=Un.substring(Mn);xn(rl)||($r+=rl)}return $r})((function(Un){if(Un.indexOf("//")===-1)return Un;for(var vo=Un.length,$r=[],Mn=0,Xn=0,Fi=0,Za=0;Xn<vo;){var Wo=Un.charCodeAt(Xn);if(Wo!==34&&Wo!==39||Xn!==0&&Un.charCodeAt(Xn-1)===92)if(Fi===0)if(Wo===$e&&Xn+1<vo&&Un.charCodeAt(Xn+1)===yt){for(Xn+=2;Xn+1<vo&&(Un.charCodeAt(Xn)!==yt||Un.charCodeAt(Xn+1)!==$e);)Xn++;Xn+=2}else if(Wo===40&&Xn>=3&&(32|Un.charCodeAt(Xn-1))==108&&(32|Un.charCodeAt(Xn-2))==114&&(32|Un.charCodeAt(Xn-3))==117)Za=1,Xn++;else if(Za>0)Wo===41?Za--:Wo===40&&Za++,Xn++;else if(Wo===yt&&Xn+1<vo&&Un.charCodeAt(Xn+1)===$e)Xn>Mn&&$r.push(Un.substring(Mn,Xn)),Mn=Xn+=2;else if(Wo===$e&&Xn+1<vo&&Un.charCodeAt(Xn+1)===$e){for(Xn>Mn&&$r.push(Un.substring(Mn,Xn));Xn<vo&&Un.charCodeAt(Xn)!==10;)Xn++;Mn=Xn}else Xn++;else Xn++;else Fi===0?Fi=Wo:Fi===Wo&&(Fi=0),Xn++}return Mn===0?Un:(Mn<vo&&$r.push(Un.substring(Mn)),$r.join(""))})(Tn)),Jo=Yr(Tr||hr?"".concat(Tr," ").concat(hr," { ").concat(mo," }"):mo);return Ce.namespace&&(Jo=Ht(Jo,Ce.namespace)),sn=[],vi(Jo,ur),sn};return rn.hash=qe.length?qe.reduce(function(Tn,hr){return hr.name||no(15),tn(Tn,hr.name)},5381).toString():"",rn}var On=new Yi,zr=Ft(),Do=vt.createContext({shouldForwardProp:void 0,styleSheet:On,stylis:zr}),pe=Do.Consumer,jt=vt.createContext(void 0);function Fe(){return vt.useContext(Do)}function zo(l){if(!vt.useMemo)return l.children;var p=Fe().styleSheet,b=vt.useMemo(function(){var oe=p;return l.sheet?oe=l.sheet:l.target&&(oe=oe.reconstructWithOptions({target:l.target},!1)),l.disableCSSOMInjection&&(oe=oe.reconstructWithOptions({useCSSOMInjection:!1})),oe},[l.disableCSSOMInjection,l.sheet,l.target,p]),_=vt.useMemo(function(){return Ft({options:{namespace:l.namespace,prefix:l.enableVendorPrefixes},plugins:l.stylisPlugins})},[l.enableVendorPrefixes,l.namespace,l.stylisPlugins]),j=vt.useMemo(function(){return{shouldForwardProp:l.shouldForwardProp,styleSheet:b,stylis:_}},[l.shouldForwardProp,b,_]);return vt.createElement(Do.Provider,{value:j},vt.createElement(jt.Provider,{value:_},l.children))}var qo=vt.createContext(void 0),K=qo.Consumer;function Yo(){var l=vt.useContext(qo);if(!l)throw no(18);return l}function Ii(l){var p=vt.useContext(qo),b=vt.useMemo(function(){return(function(_,j){if(!_)throw no(14);if(_o(_)){var oe=_(j);return oe}if(Array.isArray(_)||typeof _!="object")throw no(8);return j?x(x({},j),_):_})(l.theme,p)},[l.theme,p]);return l.children?vt.createElement(qo.Provider,{value:b},l.children):null}var wi={},Se=new Set;function Xe(l,p,b){var _=jo(l),j=l,oe=!lr(l),Ce=p.attrs,Le=Ce===void 0?le:Ce,qe=p.componentId,Ve=qe===void 0?(function(Un,vo){var $r=typeof Un!="string"?"sc":Vt(Un);wi[$r]=(wi[$r]||0)+1;var Mn="".concat($r,"-").concat(pr(ji+$r+wi[$r]));return vo?"".concat(vo,"-").concat(Mn):Mn})(p.displayName,p.parentComponentId):qe,Mt=p.displayName,sn=Mt===void 0?(function(Un){return lr(Un)?"styled.".concat(Un):"Styled(".concat(jn(Un),")")})(l):Mt,ur=p.displayName&&p.componentId?"".concat(Vt(p.displayName),"-").concat(p.componentId):p.componentId||Ve,rn=_&&j.attrs?j.attrs.concat(Le).filter(Boolean):Le,Tn=p.shouldForwardProp;if(_&&j.shouldForwardProp){var hr=j.shouldForwardProp;if(p.shouldForwardProp){var Tr=p.shouldForwardProp;Tn=function(Un,vo){return hr(Un,vo)&&Tr(Un,vo)}}else Tn=hr}var Or=new Ae(b,ur,_?j.componentStyle:void 0);function mo(Un,vo){return(function($r,Mn,Xn){var Fi=$r.attrs,Za=$r.componentStyle,Wo=$r.defaultProps,go=$r.foldedComponentIds,Fa=$r.styledComponentId,Cs=$r.target,rl=vt.useContext(qo),ei=Fe(),Fs=$r.shouldForwardProp||ei.shouldForwardProp,Us=Ne(Mn,rl,Wo)||Me,la=(function(zs,us,il){for(var cs,xa=x(x({},us),{className:void 0,theme:il}),Ws=0;Ws<zs.length;Ws+=1){var Ps=_o(cs=zs[Ws])?cs(xa):cs;for(var Ua in Ps)Ua==="className"?xa.className=oi(xa.className,Ps[Ua]):Ua==="style"?xa.style=x(x({},xa.style),Ps[Ua]):Ua in us&&us[Ua]===void 0||(xa[Ua]=Ps[Ua])}return"className"in us&&typeof us.className=="string"&&(xa.className=oi(xa.className,us.className)),xa})(Fi,Mn,Us),xs=la.as||Cs,Ss={};for(var Ca in la)la[Ca]===void 0||Ca[0]==="$"||Ca==="as"||Ca==="theme"&&la.theme===Us||(Ca==="forwardedAs"?Ss.as=la.forwardedAs:Fs&&!Fs(Ca,xs)||(Ss[Ca]=la[Ca]));var ol=(function(zs,us){var il=Fe(),cs=zs.generateAndInjectStyles(us,il.styleSheet,il.stylis);return cs})(Za,la),Os=ol.className,Al=oi(go,Fa);return Os&&(Al+=" "+Os),la.className&&(Al+=" "+la.className),Ss[lr(xs)&&!lt.has(xs)?"class":"className"]=Al,Xn&&(Ss.ref=Xn),(0,vt.createElement)(xs,Ss)})(Jo,Un,vo)}mo.displayName=sn;var Jo=vt.forwardRef(mo);return Jo.attrs=rn,Jo.componentStyle=Or,Jo.displayName=sn,Jo.shouldForwardProp=Tn,Jo.foldedComponentIds=_?oi(j.foldedComponentIds,j.styledComponentId):"",Jo.styledComponentId=ur,Jo.target=_?j.target:l,Object.defineProperty(Jo,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Un){this._foldedDefaultProps=_?(function(vo){for(var $r=[],Mn=1;Mn<arguments.length;Mn++)$r[Mn-1]=arguments[Mn];for(var Xn=0,Fi=$r;Xn<Fi.length;Xn++)va(vo,Fi[Xn],!0);return vo})({},j.defaultProps,Un):Un}}),Mo(Jo,function(){return".".concat(Jo.styledComponentId)}),oe&&ho(Jo,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Jo}function it(l,p){for(var b=[l[0]],_=0,j=p.length;_<j;_+=1)b.push(p[_],l[_+1]);return b}var It=function(l){return Object.assign(l,{isCss:!0})};function un(l){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];if(_o(l)||Uo(l))return It(k(it(le,Be([l],p,!0))));var _=l;return p.length===0&&_.length===1&&typeof _[0]=="string"?k(_):It(k(it(_,p)))}function Dn(l,p,b){if(b===void 0&&(b=Me),!p)throw no(1,p);var _=function(j){for(var oe=[],Ce=1;Ce<arguments.length;Ce++)oe[Ce-1]=arguments[Ce];return l(p,b,un.apply(void 0,Be([j],oe,!1)))};return _.attrs=function(j){return Dn(l,p,x(x({},b),{attrs:Array.prototype.concat(b.attrs,j).filter(Boolean)}))},_.withConfig=function(j){return Dn(l,p,x(x({},b),j))},_}var u=function(l){return Dn(Xe,l)},v=u;lt.forEach(function(l){v[l]=u(l)});var C,O=(function(){function l(p,b){this.rules=p,this.componentId=b,this.isStatic=H(p),Yi.registerId(this.componentId+1)}return l.prototype.createStyles=function(p,b,_,j){var oe=j(gi(k(this.rules,b,_,j)),""),Ce=this.componentId+p;_.insertRules(Ce,Ce,oe)},l.prototype.removeStyles=function(p,b){b.clearRules(this.componentId+p)},l.prototype.renderStyles=function(p,b,_,j){p>2&&Yi.registerId(this.componentId+p);var oe=this.componentId+p;this.isStatic?_.hasNameForId(oe,oe)||this.createStyles(p,b,_,j):(this.removeStyles(p,_),this.createStyles(p,b,_,j))},l})();function V(l){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];var _=un.apply(void 0,Be([l],p,!1)),j="sc-global-".concat(pr(JSON.stringify(_))),oe=new O(_,j),Ce=new WeakMap,Le=function(qe){var Ve=Fe(),Mt=vt.useContext(qo),sn=Ce.get(Ve.styleSheet);return sn===void 0&&(sn=Ve.styleSheet.allocateGSInstance(j),Ce.set(Ve.styleSheet,sn)),vt.useLayoutEffect(function(){return Ve.styleSheet.server||(function(ur,rn,Tn,hr,Tr){if(oe.isStatic)oe.renderStyles(ur,Ni,Tn,Tr);else{var Or=x(x({},rn),{theme:Ne(rn,hr,Le.defaultProps)});oe.renderStyles(ur,Or,Tn,Tr)}})(sn,qe,Ve.styleSheet,Mt,Ve.stylis),function(){oe.removeStyles(sn,Ve.styleSheet)}},[sn,qe,Ve.styleSheet,Mt,Ve.stylis]),null};return vt.memo(Le)}var re=(function(){function l(p,b){var _=this;this[C]=!0,this.inject=function(j,oe){oe===void 0&&(oe=zr);var Ce=_.name+oe.hash;j.hasNameForId(_.id,Ce)||j.insertRules(_.id,Ce,oe(_.rules,Ce,"@keyframes"))},this.name=p,this.id="sc-keyframes-".concat(p),this.rules=b,Mo(this,function(){throw no(12,String(_.name))})}return l.prototype.getName=function(p){return p===void 0&&(p=zr),this.name+p.hash},l})();function ke(l){for(var p=[],b=1;b<arguments.length;b++)p[b-1]=arguments[b];var _=gi(un.apply(void 0,Be([l],p,!1))),j=pr(_);return new re(j,_)}function Re(l){var p=vt.forwardRef(function(b,_){var j=Ne(b,vt.useContext(qo),l.defaultProps);return vt.createElement(l,x(x({},b),{theme:j,ref:_}))});return p.displayName="WithTheme(".concat(jn(l),")"),ho(p,l)}C=Qa;var Te=(function(){function l(){var p=this;this._emitSheetCSS=function(){var b=p.instance.toString();if(!b)return"";var _=Gi(),j=gi([_&&'nonce="'.concat(_,'"'),"".concat(Oo,'="true"'),"".concat(Fr,'="').concat(ji,'"')].filter(Boolean)," ");return"<style ".concat(j,">").concat(b,"</style>")},this.getStyleTags=function(){if(p.sealed)throw no(2);return p._emitSheetCSS()},this.getStyleElement=function(){var b;if(p.sealed)throw no(2);var _=p.instance.toString();if(!_)return[];var j=((b={})[Oo]="",b[Fr]=ji,b.dangerouslySetInnerHTML={__html:_},b),oe=Gi();return oe&&(j.nonce=oe),[vt.createElement("style",x({},j,{key:"sc-0-0"}))]},this.seal=function(){p.sealed=!0},this.instance=new Yi({isServer:!0}),this.sealed=!1}return l.prototype.collectStyles=function(p){if(this.sealed)throw no(2);return vt.createElement(zo,{sheet:this.instance},p)},l.prototype.interleaveWithNodeStream=function(p){throw no(3)},l})(),ie={StyleSheet:Yi,mainSheet:On},Pe="__sc-".concat(Oo,"__")},7809(M,f,y){"use strict";y.d(f,{Sn:()=>F.Sn,wz:()=>R,Iq:()=>J,F0:()=>X.F,Em:()=>X.E,EX:()=>F.EX});var F=y(8741),E=y(2613),x,m,d=function(be,se,ge,ye){function Z(ve){return ve instanceof ge?ve:new ge(function(ae){ae(ve)})}return new(ge||(ge=Promise))(function(ve,ae){function fe(Be){try{g(ye.next(Be))}catch(Ee){ae(Ee)}}function ee(Be){try{g(ye.throw(Be))}catch(Ee){ae(Ee)}}function g(Be){Be.done?ve(Be.value):Z(Be.value).then(fe,ee)}g((ye=ye.apply(be,se||[])).next())})};const J=()=>(0,X.E)({method:"GET",url:`${E.H$}/login`}),R=be=>d(void 0,void 0,void 0,function*(){return(0,X.E)({method:"POST",url:`${E.H$}/login`,data:JSON.stringify(be)})}),z=be=>d(void 0,void 0,void 0,function*(){return x({method:"POST",url:`${m}/login/check_password`,data:JSON.stringify(be)})});var X=y(4064)},3583(M,f,y){"use strict";y.d(f,{X:()=>m});var F=y(7809),E=y(2613),x=y(7108);const m=(d,...J)=>{const R=J.reduce((z,X,be)=>Object.assign(Object.assign({},z),{[`${String(be)}_`]:String(X)}),{});return(0,F.Em)({method:"POST",url:`${E.H$}/api/cmd/do/`,data:(0,x.b1)(Object.assign({cmd:d},R))})}},422(M,f,y){"use strict";y.d(f,{fc:()=>vt});var F=y(7520),E=y.n(F),x=y(7809),m=y(3583),d=function(nt,mt,ct,kt){function Sn(Rn){return Rn instanceof ct?Rn:new ct(function(mn){mn(Rn)})}return new(ct||(ct=Promise))(function(Rn,mn){function Lr(Nr){try{_i(kt.next(Nr))}catch(Po){mn(Po)}}function uo(Nr){try{_i(kt.throw(Nr))}catch(Po){mn(Po)}}function _i(Nr){Nr.done?Rn(Nr.value):Sn(Nr.value).then(Lr,uo)}_i((kt=kt.apply(nt,mt||[])).next())})};const J=!1,R={\u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D:"\u0421\u0438\u043D\u0433\u043B\u0442\u043E\u043D - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0412 \u0442\u0435\u043E\u0440\u0438\u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E {x}, \u0433\u0434\u0435 x - \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D":"\u0421\u0438\u043D\u0433\u043B\u0442\u043E\u043D - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0412 \u0442\u0435\u043E\u0440\u0438\u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E {x}, \u0433\u0434\u0435 x - \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442.",ims:"IMS (Intelligent Management System) - \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 OSTIS.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ims":"IMS (Intelligent Management System) - \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 OSTIS.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043C\u0441":"IMS (Intelligent Management System) - \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043D\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 OSTIS.",\u0433\u0440\u0430\u0444:"\u0413\u0440\u0430\u0444 - \u044D\u0442\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0438\u0437 \u0432\u0435\u0440\u0448\u0438\u043D (\u0443\u0437\u043B\u043E\u0432) \u0438 \u0440\u0451\u0431\u0435\u0440 (\u0441\u0432\u044F\u0437\u0435\u0439) \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0433\u0440\u0430\u0444":"\u0413\u0440\u0430\u0444 - \u044D\u0442\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0438\u0437 \u0432\u0435\u0440\u0448\u0438\u043D (\u0443\u0437\u043B\u043E\u0432) \u0438 \u0440\u0451\u0431\u0435\u0440 (\u0441\u0432\u044F\u0437\u0435\u0439) \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.",\u043E\u0441\u0442\u0438\u0441:"OSTIS (Open Semantic Technology for Intelligent Systems) - \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u043E\u0439.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0441\u0442\u0438\u0441":"OSTIS (Open Semantic Technology for Intelligent Systems) - \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u043E\u0439.",ostis:"OSTIS (Open Semantic Technology for Intelligent Systems) - \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u043E\u0439.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ostis":"OSTIS (Open Semantic Technology for Intelligent Systems) - \u044D\u0442\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u043E\u0439.","sc-\u043C\u0430\u0448\u0438\u043D\u0430":"SC-\u043C\u0430\u0448\u0438\u043D\u0430 (Semantic Computer Machine) - \u044D\u0442\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0431\u0430\u0437\u043E\u0439 \u0437\u043D\u0430\u043D\u0438\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0435\u0442\u0435\u0439.",\u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435:"\u041F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0441\u0435\u043C \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C\u044B\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430\u043C. \u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u2229.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435":"\u041F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0441\u0435\u043C \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C\u044B\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430\u043C. \u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u2229.",\u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435:"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u0437 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432. \u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u222A.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435":"\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432 - \u044D\u0442\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u0437 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432. \u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u222A.",\u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430:"\u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 OSTIS - \u044D\u0442\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430":"\u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 OSTIS - \u044D\u0442\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439.","\u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0441\u0442\u0438\u0441":"\u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 OSTIS - \u044D\u0442\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0440\u0435\u0434\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0430\u0445 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439.","\u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C - \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0435\u0439, \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0438 \u0441\u0432\u044F\u0437\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C":"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C - \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0435\u0439, \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0438 \u0441\u0432\u044F\u0437\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.","sc-\u043A\u043B\u0430\u0441\u0441":"SC-\u043A\u043B\u0430\u0441\u0441 - \u044D\u0442\u043E \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0432 SC-\u043A\u043E\u0434\u0435, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u043E\u0431\u0449\u0438\u043C\u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438. \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 sc-\u043A\u043B\u0430\u0441\u0441\u0430 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u043E\u0431\u0449\u0435\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043F\u0440\u0438\u0441\u0443\u0449\u0435\u0435 \u0432\u0441\u0435\u043C \u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C.",\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E:"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E - \u044D\u0442\u043E \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u0435 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0438, \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0449\u0435\u0435 \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0445 \u043F\u043E \u043A\u0430\u043A\u043E\u043C\u0443-\u043B\u0438\u0431\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0443. \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u044B\u043C\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E":"\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E - \u044D\u0442\u043E \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u0435 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0438, \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0449\u0435\u0435 \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0445 \u043F\u043E \u043A\u0430\u043A\u043E\u043C\u0443-\u043B\u0438\u0431\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0443. \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u044B\u043C\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C\u0438.","\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C":"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u2014 \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0432 \u0442.\u0447. \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0435 OSTIS).","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C":"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u2014 \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0432 \u0442.\u0447. \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0435 OSTIS).",\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430:"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u2014 \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0432 \u0442.\u0447. \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0435 OSTIS).","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430":"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u2014 \u044D\u0442\u043E \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043D\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u0441\u043C\u044B\u0441\u043B\u0430 \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (\u0432 \u0442.\u0447. \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u041C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0435 OSTIS).","\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C":"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C \u2014 \u044D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439 \u0432 \u0432\u0438\u0434\u0435 \u0433\u0440\u0430\u0444\u0430: \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044F\u043C (\u043F\u043E\u043D\u044F\u0442\u0438\u044F\u043C, \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C), \u0430 \u0434\u0443\u0433\u0438 \u2014 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C":"\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C \u2014 \u044D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439 \u0432 \u0432\u0438\u0434\u0435 \u0433\u0440\u0430\u0444\u0430: \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044F\u043C (\u043F\u043E\u043D\u044F\u0442\u0438\u044F\u043C, \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C), \u0430 \u0434\u0443\u0433\u0438 \u2014 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.","sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442":"Sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u2014 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 SC-\u043F\u0430\u043C\u044F\u0442\u0438 (\u0443\u0437\u0435\u043B, \u0434\u0443\u0433\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u044C), \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442":"Sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u2014 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 SC-\u043F\u0430\u043C\u044F\u0442\u0438 (\u0443\u0437\u0435\u043B, \u0434\u0443\u0433\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u044C), \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439.","sc \u044D\u043B\u0435\u043C\u0435\u043D\u0442":"Sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u2014 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 SC-\u043F\u0430\u043C\u044F\u0442\u0438 (\u0443\u0437\u0435\u043B, \u0434\u0443\u0433\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u044C), \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc \u044D\u043B\u0435\u043C\u0435\u043D\u0442":"Sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u2014 \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 SC-\u043F\u0430\u043C\u044F\u0442\u0438 (\u0443\u0437\u0435\u043B, \u0434\u0443\u0433\u0430 \u0438\u043B\u0438 \u0441\u0432\u044F\u0437\u044C), \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439.","sc-\u043F\u0430\u043C\u044F\u0442\u044C":"Sc-\u043F\u0430\u043C\u044F\u0442\u044C \u2014 \u044D\u0442\u043E \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C OSTIS, \u0433\u0434\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u0432\u0438\u0434\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (\u0443\u0437\u043B\u043E\u0432, \u0434\u0443\u0433 \u0438 \u0441\u0432\u044F\u0437\u0435\u0439) \u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u043F\u0430\u043C\u044F\u0442\u044C":"Sc-\u043F\u0430\u043C\u044F\u0442\u044C \u2014 \u044D\u0442\u043E \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C OSTIS, \u0433\u0434\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u0432\u0438\u0434\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (\u0443\u0437\u043B\u043E\u0432, \u0434\u0443\u0433 \u0438 \u0441\u0432\u044F\u0437\u0435\u0439) \u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438.","semantic code":"Semantic code (SC-\u043A\u043E\u0434) \u2014 \u044F\u0437\u044B\u043A \u0438 \u0444\u043E\u0440\u043C\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u043D\u0438\u0439 \u0432 OSTIS \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u0445 \u0441\u0432\u044F\u0437\u0435\u0439.","what is semantic code":"Semantic code (SC-code) is the OSTIS knowledge representation form based on sc-elements and semantic relations between them.","what is singleton":"A singleton is a set that contains exactly one element.","what is ims":"IMS (Intelligent Management System) is an intelligent management system based on OSTIS technology.","what is a graph":"A graph is a mathematical structure consisting of vertices (nodes) and edges (connections) between them.","what is ostis":"OSTIS (Open Semantic Technology for Intelligent Systems) is a technology for building intelligent systems with open semantics."},z=["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ostis","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ims","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0435\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u043F\u0430\u043C\u044F\u0442\u044C","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C"],X=["what is singleton","what is a graph","what is ims","what is ostis"],be={ostis:["\u043E\u0441\u0442\u0438\u0441","\u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 ostis","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 ostis"],ims:["\u0438\u043C\u0441"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ims":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043C\u0441"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043C\u0441":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ims"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0435\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F":["\u0434\u0435\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0430":["\u0441\u0438\u0441\u0442\u0435\u043C\u0430"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0433\u0440\u0430\u0444":["\u0433\u0440\u0430\u0444"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D":["\u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u044F\u0437\u044B\u043A":["\u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u044F\u0437\u044B\u043A","external language"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 external language":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u044F\u0437\u044B\u043A","external language"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0438\u0441\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430":["\u0434\u0438\u0441\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0438\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0438\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0438\u0441\u043A\u0440\u0435\u0442\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430"],\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430:["\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C","\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C"],"\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C":["semantic network","knowledge graph"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0442\u044C":["semantic network","knowledge graph"],"sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442":["sc element","sc_element"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442":["sc element","sc_element"],"sc \u044D\u043B\u0435\u043C\u0435\u043D\u0442":["sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442","sc element","sc_element"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc \u044D\u043B\u0435\u043C\u0435\u043D\u0442":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442","sc element","sc_element"],"sc-\u043F\u0430\u043C\u044F\u0442\u044C":["sc memory","sc-memory"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u043F\u0430\u043C\u044F\u0442\u044C":["sc-\u043F\u0430\u043C\u044F\u0442\u044C","sc memory","sc-memory"],"semantic code":["sc code","sc-code","semantic cod"],"what is semantic code":["semantic code","sc code","sc-code"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 semantic code":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 sc-\u043A\u043E\u0434","sc-\u043A\u043E\u0434","semantic code"],"\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432":["\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","library of components"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432":["\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","library of components"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ostis":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0441\u0442\u0438\u0441","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 ostis"],"\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0441\u0442\u0438\u0441":["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043C\u0435\u0442\u0430\u0441\u0438\u0441\u0442\u0435\u043C\u0430 ostis"],"what is \u043E\u0441\u0442\u0438\u0441":["what is ostis"]},se=nt=>ge(nt.toLowerCase().replace(/ё/g,"\u0435").replace(/[«»"'`]/g,"").replace(/[?!.,;:]+$/g,"").replace(/^(ну|так|ладно|пожалуйста|пж|pls)\s+/g,"")),ge=nt=>nt.replace(/\s+/g," ").trim(),ye=["\u043F\u043E\u043A\u0430\u0436\u0438","\u043F\u043E\u0441\u0442\u0440\u043E\u0439","\u043D\u0430\u0439\u0434\u0438","\u0437\u0430\u043F\u0443\u0441\u0442\u0438","\u0432\u044B\u043F\u043E\u043B\u043D\u0438","\u043F\u0440\u043E\u0432\u0435\u0440\u044C","\u0441\u043E\u0437\u0434\u0430\u0439","\u0443\u0434\u0430\u043B\u0438","\u0434\u043E\u0431\u0430\u0432\u044C","\u043E\u0442\u043A\u0440\u043E\u0439"],Z=["\u0433\u0434\u0435","\u043A\u0430\u043A \u043E\u0442\u043A\u0440\u044B\u0442\u044C","\u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0439\u0442\u0438","\u043A\u0430\u043A \u043D\u0430\u0439\u0442\u0438","\u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F"],ve=["\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435","\u043A\u0442\u043E \u0442\u0430\u043A\u043E\u0439","\u0447\u0442\u043E \u044D\u0442\u043E","\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438","\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435"],ae=4,fe=["\u043F\u043E\u043A\u0430\u0436\u0438","\u043F\u043E\u0441\u0442\u0440\u043E\u0439","\u043D\u0430\u0439\u0434\u0438","\u043E\u0442\u043A\u0440\u043E\u0439","\u043F\u043E\u043A\u0430\u0436\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C","\u043D\u0430\u0439\u0434\u0438 \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C"],ee=["\u0433\u0434\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F","\u0433\u0434\u0435","\u043A\u0430\u043A \u043E\u0442\u043A\u0440\u044B\u0442\u044C","\u043A\u0430\u043A \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A","\u043A\u0430\u043A \u043D\u0430\u0439\u0442\u0438"],g=(nt,mt)=>nt===mt||nt.startsWith(`${mt} `),Be=(nt,mt)=>{const ct=se(nt);if(!ct)return"other";if(mt==="ru"){if(ve.some(kt=>g(ct,kt)))return"definition";if(ye.some(kt=>g(ct,kt)))return"action";if(Z.some(kt=>g(ct,kt)))return"navigation"}else{if(ct.startsWith("what is ")||ct.startsWith("who is ")||ct.startsWith("define "))return"definition";if(ct.startsWith("show ")||ct.startsWith("build ")||ct.startsWith("run ")||ct.startsWith("find "))return"action";if(ct.startsWith("where ")||ct.startsWith("how to open "))return"navigation"}if(mt==="ru"){const kt=ct.split(" ").filter(Boolean);if(kt.length>0&&kt.length<=ae&&!ye.some(Sn=>g(ct,Sn))&&!Z.some(Sn=>g(ct,Sn)))return"definition"}return"other"},Ee=nt=>nt.replace(/сематническ/gi,"\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A").replace(/окретсност/gi,"\u043E\u043A\u0440\u0435\u0441\u0442\u043D\u043E\u0441\u0442").replace(/идетификатор/gi,"\u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440").replace(/дикретн/gi,"\u0434\u0438\u0441\u043A\u0440\u0435\u0442\u043D").replace(/библиотек\s+компонентов?\b/gi,"\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432").replace(/библиотека\s+компонент\b/gi,"\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"),We=(nt,mt)=>{const ct=se(nt),kt=new Set;ct&&kt.add(ct),ge(nt)&&kt.add(ge(nt)),mt==="ru"?ct&&!ct.startsWith("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ")&&kt.add(`\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ${ct}`):ct&&!ct.startsWith("what is ")&&kt.add(`what is ${ct}`);const Sn=be[ct];Sn&&Sn.forEach(Rn=>kt.add(Rn));for(const[Rn,mn]of Object.entries(be))ct.includes(Rn)&&mn.forEach(Lr=>{kt.add(ct.replace(Rn,Lr))});return Array.from(kt).filter(Rn=>Rn.length>1)},ht=(nt,mt)=>{const ct=se(nt),kt=new Set(We(nt,mt));return mt==="ru"?(!ct.startsWith("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ")&&ct&&kt.add(`\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ${ct}`),ct.startsWith("\u043A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 ")&&kt.add(`\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ${ct.replace(/^кто такой\s+/g,"")}`)):!ct.startsWith("what is ")&&ct&&kt.add(`what is ${ct}`),Array.from(kt).filter(Boolean)},Tt=nt=>{const mt=se(nt);return!mt||ve.some(ct=>g(mt,ct))?mt:`\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ${mt}`},zt=(nt,mt)=>{const ct=se(nt),kt=new Set(We(nt,mt));return mt==="ru"?kt.delete(`\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ${ct}`):kt.delete(`what is ${ct}`),Array.from(kt).filter(Sn=>Sn.length>1)},Wn=nt=>ge(nt.replace(/^мне\s+/i,"").replace(/^пожалуйста\s+/i,"").replace(/^(для|про|о|об)\s+/i,"")),ir=(nt,mt,ct)=>{const kt=se(nt);if(!kt)return null;const Sn=ct==="ru"?mt==="action"?fe:ee:mt==="action"?["show","build","run","find","open"]:["where","how to open","how to find"];for(const Rn of Sn)if(kt.startsWith(Rn)){const mn=Wn(kt.slice(Rn.length));if(mn.length>=2)return mn}return null},Vn=(nt,mt)=>d(void 0,void 0,void 0,function*(){const ct="_node",kt=new F.ScTemplate;kt.quintuple([F.ScType.Unknown,ct],F.ScType.VarCommonArc,nt,F.ScType.VarPermPosArc,mt);const Sn=yield x.Sn.searchByTemplate(kt);return Sn.length?Sn[0].get(ct):null}),An=nt=>d(void 0,void 0,void 0,function*(){const mt=se(nt);if(!mt)return null;const ct=Array.from(new Set([mt,nt.trim(),mt.replace(/^что такое\s+/i,""),mt.replace(/^what is\s+/i,"")])).filter(Rn=>Rn.length>1),{nrelMainIdtf:kt,nrelSystemIdentifier:Sn}=yield x.EX.searchKeynodes("nrel_system_identifier","nrel_main_idtf");for(const Rn of ct){const[mn]=yield x.Sn.searchLinksByContents([Rn]);if(!mn.length)continue;const Lr=yield Vn(mn[0],Sn);if(Lr)return Lr;const uo=yield Vn(mn[0],kt);if(uo)return uo}return null}),Bn=(nt,mt,ct)=>d(void 0,void 0,void 0,function*(){if(mt!=="action"&&mt!=="navigation")return null;const kt=ir(nt,mt,ct);if(!kt)return null;const Sn=yield An(kt);return Sn?xt(Sn.value):null}),ar=(nt,mt)=>d(void 0,void 0,void 0,function*(){let ct=null,kt=null;for(const Sn of nt){const Rn=yield er(Sn,mt);if(!Rn)continue;if(!Rn.lowQuality)return{answer:Rn.answer,quality:"strong"};if(Rn.answer.includes("\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u044F \u0432 \u0431\u0430\u0437\u0435")||Rn.answer.includes("\u042F\u0432\u043D\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")||Rn.answer.startsWith("\u041F\u043E\u043D\u044F\u0442\u0438\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u0431\u0430\u0437\u0435 \u0437\u043D\u0430\u043D\u0438\u0439:")){kt||(kt=Rn.answer);continue}ct||(ct=Rn.answer)}return ct?{answer:ct,quality:"low"}:kt?{answer:kt,quality:"weak"}:null}),_n=nt=>{const mt=nt.replace(/^Понятие найдено в базе знаний:\s*/i,"").replace(/^Явное определение по этому запросу не найдено\.\s*/i,""),ct=mt.indexOf("\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u043F\u043E\u043D\u044F\u0442\u0438\u044F \u0432 \u0431\u0430\u0437\u0435:"),kt=ct>=0?mt.slice(0,ct):mt;return ge(kt.replace(/\s+([,.!?;:])/g,"$1").replace(/([.!?]){2,}/g,"$1").replace(/\.{2,}/g,"."))},wt=nt=>{if(!nt)return nt;const mt=nt.split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean);return mt.length<=2?nt:`${mt.slice(0,2).join(" ")}.`},ln=(nt,mt)=>{const ct=_n(nt);if(!ct)return nt;if(mt!=="ru")return ct;const kt=wt(ct);if(kt.length>260){const Sn=kt.split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean)[0];return Sn!=null?Sn:kt}return kt},kn=(nt,mt)=>d(void 0,void 0,void 0,function*(){const ct=Array.from(new Set(nt.map(kt=>se(kt)).filter(kt=>kt.length>1)));for(const kt of ct){const Sn=yield An(kt);if(!Sn)continue;const Rn=yield xt(Sn.value);if(Rn)return ln(Rn,mt)}return null});function er(nt,mt){return d(this,void 0,void 0,function*(){try{const ct=yield(0,x.Em)({method:"POST",url:"/api/kb/search/",data:{query:nt,lang:mt}});if(!(0,x.F0)(ct)&&ct.status===200){const kt=ct.data;if(kt.success&&kt.found&&kt.answer){const Sn=kt.low_quality===!0||kt.low_quality==="true";return{answer:kt.answer,lowQuality:Sn}}}}catch(ct){return null}return null})}function Oe(nt){const mt=se(nt);for(const[ct,kt]of Object.entries(R))if(mt.includes(ct))return kt;return null}const vt=(nt,mt)=>d(void 0,void 0,void 0,function*(){const ct=mt==="ru"?Ee(nt):nt,kt=Be(ct,mt),Sn=mt==="ru"&&kt==="definition"?Tt(ct):ct,Rn=ht(Sn,mt),mn=zt(ct,mt),Lr=ir(ct,kt,mt);if(kt==="action"||kt==="navigation"){const Nr=yield Bn(ct,kt,mt);if(Nr)return Nr;if(Lr){const Po=ht(Lr,mt),di=yield ar(Po,mt);if(di&&di.quality!=="weak")return ln(di.answer,mt)}}if(kt==="definition"){const Nr=yield ar(Rn,mt);if(Nr)return ln(Nr.answer,mt);const Po=yield kn(Rn,mt);if(Po)return Po}else{const Nr=yield ar(mn,mt);if(Nr)return ln(Nr.answer,mt);const Po=yield ar(Rn,mt);if(Po)return ln(Po.answer,mt);const di=yield kn([...mn,...Rn],mt);if(di)return di}if(J){const Nr=Oe(ct);if(Nr)return Nr}const _i=(mt==="ru"?z:X).slice(0,5).map(Nr=>`"${Nr}"`).join(", ");return mt==="ru"?kt==="action"?`\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u043A\u0430\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0443 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 "\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ...", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: ${_i}.`:kt==="navigation"?`\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u0434\u0430\u043B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430. \u041F\u0435\u0440\u0435\u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u043A\u0430\u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 ("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ..."). \u041F\u0440\u0438\u043C\u0435\u0440\u044B: ${_i}.`:`\u041F\u043E \u044D\u0442\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u0432 \u0431\u0430\u0437\u0435 \u0437\u043D\u0430\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0443 \u0438\u043B\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432: ${_i}.`:`I couldn't find a reliable answer in the knowledge base. Try a more specific "what is ..." query, for example: ${_i}.`}),gn=()=>d(void 0,void 0,void 0,function*(){return vt("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ims","ru")}),Bt=()=>d(void 0,void 0,void 0,function*(){return vt("\u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F ims","ru")}),on=()=>d(void 0,void 0,void 0,function*(){return vt("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0433\u0440\u0430\u0444","ru")}),rt=()=>d(void 0,void 0,void 0,function*(){return vt("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D","ru")}),tt=()=>d(void 0,void 0,void 0,function*(){return vt("\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0442\u0435\u043E\u0440\u0438\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432","ru")}),xt=nt=>d(void 0,void 0,void 0,function*(){const{uiMenuSummary:mt}=yield x.EX.searchKeynodes("ui_menu_summary"),ct=yield(0,m.X)(mt.value,nt);if((0,x.F0)(ct))return null;const kt=ct.data.action,Sn=yield x.EX.getResult(new F.ScAddr(kt));if(!Sn)return null;const mn=(yield x.Sn.getLinkContents([Sn]))[0].data;return String(mn)})},1582(M,f,y){"use strict";y.d(f,{S:()=>d,T:()=>m});var F=y(7809),E=y(7108),x=function(J,R,z,X){function be(se){return se instanceof z?se:new z(function(ge){ge(se)})}return new(z||(z=Promise))(function(se,ge){function ye(ae){try{ve(X.next(ae))}catch(fe){ge(fe)}}function Z(ae){try{ve(X.throw(ae))}catch(fe){ge(fe)}}function ve(ae){ae.done?se(ae.value):be(ae.value).then(ye,Z)}ve((X=X.apply(J,R||[])).next())})};const m=(J,R,z)=>x(void 0,void 0,void 0,function*(){const X=yield F.EX.searchKeynodes(R,z);return(0,F.Em)({method:"POST",url:"/api/action/result/translate/",data:(0,E.b1)({action:J,format:X[(0,E.i4)(R)].value,lang:X[(0,E.i4)(z)].value})})}),d=J=>{const R=J.map((z,X)=>`${X}_=${z}`).join(";");return(0,F.Em)({method:"GET",url:`/api/context/?${R}`})}},4626(M,f,y){"use strict";y.d(f,{D:()=>se,X:()=>be});var F=y(7520),E=y.n(F),x=y(7809),m=y(7108),d=y(1582),J=function(ge,ye,Z,ve){function ae(fe){return fe instanceof Z?fe:new Z(function(ee){ee(fe)})}return new(Z||(Z=Promise))(function(fe,ee){function g(We){try{Ee(ve.next(We))}catch(ht){ee(ht)}}function Be(We){try{Ee(ve.throw(We))}catch(ht){ee(ht)}}function Ee(We){We.done?fe(We.value):ae(We.value).then(g,Be)}Ee((ve=ve.apply(ge,ye||[])).next())})};const R=ge=>J(void 0,void 0,void 0,function*(){const ye=yield(0,d.T)(ge,"format_scn_json","lang_ru");if((0,x.F0)(ye))return ye;const{link:Z}=ye.data,[{data:ve}]=yield x.Sn.getLinkContents([new F.ScAddr(Z)]);try{return{tree:JSON.parse(String(ve))[0]}}catch(ae){return null}}),z=50,X=(ge=z)=>{const ye=new Map;return[(ae,fe)=>J(void 0,void 0,void 0,function*(){const ee=ye.get(ae);if(ee)return ee;fe==null||fe();const g=yield R(ae);return g===null?null:((0,x.F0)(g)||(ye.set(ae,g),ye.size>ge&&(0,m.vG)(ye,1)),g)}),ae=>ye.delete(ae)]},[be,se]=X()},1879(M,f,y){"use strict";y.d(f,{J:()=>R,o:()=>J});var F=y(7520),E=y.n(F),x=y(7809),m=y(3583),d=function(z,X,be,se){function ge(ye){return ye instanceof be?ye:new be(function(Z){Z(ye)})}return new(be||(be=Promise))(function(ye,Z){function ve(ee){try{fe(se.next(ee))}catch(g){Z(g)}}function ae(ee){try{fe(se.throw(ee))}catch(g){Z(g)}}function fe(ee){ee.done?ye(ee.value):ge(ee.value).then(ve,ae)}fe((se=se.apply(z,X||[])).next())})};const J=(z,X)=>d(void 0,void 0,void 0,function*(){const{uiMenuViewAddActionToUserHistory:be}=yield x.EX.searchKeynodes("ui_menu_view_add_action_to_user_history");return yield(0,m.X)(be.value,X,z)}),R=()=>d(void 0,void 0,void 0,function*(){const{uiMenuViewGetUserActionHistory:z}=yield x.EX.searchKeynodes("ui_menu_view_get_user_action_history"),X=yield(0,m.X)(z.value);if((0,x.F0)(X))return[];const be=new F.ScAddr(X.data.action),se=yield x.EX.getResult(be);if(!se)return null;const ge="_link",ye=new F.ScTemplate;ye.triple(se,F.ScType.VarPermPosArc,[F.ScType.VarNodeLink,ge]);const Z=yield x.Sn.searchByTemplate(ye);if(!Z.length)return null;const ve=Z[0].get(ge),ae=yield x.Sn.getLinkContents([ve]),fe=JSON.parse(String(ae[0].data));return fe?fe.map(ee=>({action:Number(ee)})).reverse():[]})},8741(M,f,y){"use strict";y.d(f,{Sn:()=>m,dw:()=>d,EX:()=>be});var F=y(7520),E=y(2613);const x=2e3;let m,d,J,R;const z=()=>{J&&m.removeEventListener("error",J),R&&m.removeEventListener("close",R),m=new F.ScClient(E.nF),d=new F.ScHelper(m),J=()=>{setTimeout(z,x)},R=()=>{setTimeout(z,x)},m.addEventListener("error",J),m.addEventListener("close",R)};z();var X=y(2320);const be=(0,X.scUtilsBuilder)({client:m})},9987(M,f,y){"use strict";y.d(f,{g:()=>J});var F=y(7520),E=y.n(F),x=y(7809),m=function(R,z,X,be){function se(ge){return ge instanceof X?ge:new X(function(ye){ye(ge)})}return new(X||(X=Promise))(function(ge,ye){function Z(fe){try{ae(be.next(fe))}catch(ee){ye(ee)}}function ve(fe){try{ae(be.throw(fe))}catch(ee){ye(ee)}}function ae(fe){fe.done?ge(fe.value):se(fe.value).then(Z,ve)}ae((be=be.apply(R,z||[])).next())})};const d=(R,z)=>m(void 0,void 0,void 0,function*(){const X="_node",be=new F.ScTemplate;be.quintuple([F.ScType.Unknown,X],F.ScType.VarCommonArc,R,F.ScType.VarPermPosArc,z);const se=yield x.Sn.searchByTemplate(be);return se.length?se[0].get(X):null}),J=R=>m(void 0,void 0,void 0,function*(){const[z]=yield x.Sn.searchLinksByContents([R]),{nrelMainIdtf:X,nrelSystemIdentifier:be}=yield x.EX.searchKeynodes("nrel_system_identifier","nrel_main_idtf");if(!z.length)return null;const se=z[0],ge=yield d(se,be);if(ge)return ge;const ye=yield d(se,X);return ye||se})},4064(M,f,y){"use strict";y.d(f,{F:()=>ws,E:()=>Na});var F={};y.r(F),y.d(F,{hasBrowserEnv:()=>gr,hasStandardBrowserEnv:()=>Fn,hasStandardBrowserWebWorkerEnv:()=>Xr,navigator:()=>rr,origin:()=>fo});function E(P,k){return function(){return P.apply(k,arguments)}}const{toString:x}=Object.prototype,{getPrototypeOf:m}=Object,{iterator:d,toStringTag:J}=Symbol,R=(P=>k=>{const H=x.call(k);return P[H]||(P[H]=H.slice(8,-1).toLowerCase())})(Object.create(null)),z=P=>(P=P.toLowerCase(),k=>R(k)===P),X=P=>k=>typeof k===P,{isArray:be}=Array,se=X("undefined");function ge(P){return P!==null&&!se(P)&&P.constructor!==null&&!se(P.constructor)&&ae(P.constructor.isBuffer)&&P.constructor.isBuffer(P)}const ye=z("ArrayBuffer");function Z(P){let k;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?k=ArrayBuffer.isView(P):k=P&&P.buffer&&ye(P.buffer),k}const ve=X("string"),ae=X("function"),fe=X("number"),ee=P=>P!==null&&typeof P=="object",g=P=>P===!0||P===!1,Be=P=>{if(R(P)!=="object")return!1;const k=m(P);return(k===null||k===Object.prototype||Object.getPrototypeOf(k)===null)&&!(J in P)&&!(d in P)},Ee=P=>{if(!ee(P)||ge(P))return!1;try{return Object.keys(P).length===0&&Object.getPrototypeOf(P)===Object.prototype}catch(k){return!1}},We=z("Date"),ht=z("File"),Tt=P=>!!(P&&typeof P.uri!="undefined"),zt=P=>P&&typeof P.getParts!="undefined",Wn=z("Blob"),ir=z("FileList"),Vn=P=>ee(P)&&ae(P.pipe);function An(){return typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof y.g!="undefined"?y.g:{}}const Bn=An(),ar=typeof Bn.FormData!="undefined"?Bn.FormData:void 0,_n=P=>{let k;return P&&(ar&&P instanceof ar||ae(P.append)&&((k=R(P))==="formdata"||k==="object"&&ae(P.toString)&&P.toString()==="[object FormData]"))},wt=z("URLSearchParams"),[ln,kn,er,Oe]=["ReadableStream","Request","Response","Headers"].map(z),vt=P=>P.trim?P.trim():P.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gn(P,k,{allOwnKeys:H=!1}={}){if(P===null||typeof P=="undefined")return;let ne,Ae;if(typeof P!="object"&&(P=[P]),be(P))for(ne=0,Ae=P.length;ne<Ae;ne++)k.call(null,P[ne],ne,P);else{if(ge(P))return;const Ke=H?Object.getOwnPropertyNames(P):Object.keys(P),$e=Ke.length;let yt;for(ne=0;ne<$e;ne++)yt=Ke[ne],k.call(null,P[yt],yt,P)}}function Bt(P,k){if(ge(P))return null;k=k.toLowerCase();const H=Object.keys(P);let ne=H.length,Ae;for(;ne-- >0;)if(Ae=H[ne],k===Ae.toLowerCase())return Ae;return null}const on=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:y.g,rt=P=>!se(P)&&P!==on;function tt(){const{caseless:P,skipUndefined:k}=rt(this)&&this||{},H={},ne=(Ae,Ke)=>{if(Ke==="__proto__"||Ke==="constructor"||Ke==="prototype")return;const $e=P&&Bt(H,Ke)||Ke;Be(H[$e])&&Be(Ae)?H[$e]=tt(H[$e],Ae):Be(Ae)?H[$e]=tt({},Ae):be(Ae)?H[$e]=Ae.slice():(!k||!se(Ae))&&(H[$e]=Ae)};for(let Ae=0,Ke=arguments.length;Ae<Ke;Ae++)arguments[Ae]&&gn(arguments[Ae],ne);return H}const xt=(P,k,H,{allOwnKeys:ne}={})=>(gn(k,(Ae,Ke)=>{H&&ae(Ae)?Object.defineProperty(P,Ke,{value:E(Ae,H),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(P,Ke,{value:Ae,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:ne}),P),nt=P=>(P.charCodeAt(0)===65279&&(P=P.slice(1)),P),mt=(P,k,H,ne)=>{P.prototype=Object.create(k.prototype,ne),Object.defineProperty(P.prototype,"constructor",{value:P,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(P,"super",{value:k.prototype}),H&&Object.assign(P.prototype,H)},ct=(P,k,H,ne)=>{let Ae,Ke,$e;const yt={};if(k=k||{},P==null)return k;do{for(Ae=Object.getOwnPropertyNames(P),Ke=Ae.length;Ke-- >0;)$e=Ae[Ke],(!ne||ne($e,P,k))&&!yt[$e]&&(k[$e]=P[$e],yt[$e]=!0);P=H!==!1&&m(P)}while(P&&(!H||H(P,k))&&P!==Object.prototype);return k},kt=(P,k,H)=>{P=String(P),(H===void 0||H>P.length)&&(H=P.length),H-=k.length;const ne=P.indexOf(k,H);return ne!==-1&&ne===H},Sn=P=>{if(!P)return null;if(be(P))return P;let k=P.length;if(!fe(k))return null;const H=new Array(k);for(;k-- >0;)H[k]=P[k];return H},Rn=(P=>k=>P&&k instanceof P)(typeof Uint8Array!="undefined"&&m(Uint8Array)),mn=(P,k)=>{const ne=(P&&P[d]).call(P);let Ae;for(;(Ae=ne.next())&&!Ae.done;){const Ke=Ae.value;k.call(P,Ke[0],Ke[1])}},Lr=(P,k)=>{let H;const ne=[];for(;(H=P.exec(k))!==null;)ne.push(H);return ne},uo=z("HTMLFormElement"),_i=P=>P.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(H,ne,Ae){return ne.toUpperCase()+Ae}),Nr=(({hasOwnProperty:P})=>(k,H)=>P.call(k,H))(Object.prototype),Po=z("RegExp"),di=(P,k)=>{const H=Object.getOwnPropertyDescriptors(P),ne={};gn(H,(Ae,Ke)=>{let $e;($e=k(Ae,Ke,P))!==!1&&(ne[Ke]=$e||Ae)}),Object.defineProperties(P,ne)},xo=P=>{di(P,(k,H)=>{if(ae(P)&&["arguments","caller","callee"].indexOf(H)!==-1)return!1;const ne=P[H];if(ae(ne)){if(k.enumerable=!1,"writable"in k){k.writable=!1;return}k.set||(k.set=()=>{throw Error("Can not rewrite read-only method '"+H+"'")})}})},So=(P,k)=>{const H={},ne=Ae=>{Ae.forEach(Ke=>{H[Ke]=!0})};return be(P)?ne(P):ne(String(P).split(k)),H},Ra=()=>{},Gr=(P,k)=>P!=null&&Number.isFinite(P=+P)?P:k;function Ga(P){return!!(P&&ae(P.append)&&P[J]==="FormData"&&P[d])}const Nn=P=>{const k=new Array(10),H=(ne,Ae)=>{if(ee(ne)){if(k.indexOf(ne)>=0)return;if(ge(ne))return ne;if(!("toJSON"in ne)){k[Ae]=ne;const Ke=be(ne)?[]:{};return gn(ne,($e,yt)=>{const xn=H($e,Ae+1);!se(xn)&&(Ke[yt]=xn)}),k[Ae]=void 0,Ke}}return ne};return H(P,0)},vr=z("AsyncFunction"),$n=P=>P&&(ee(P)||ae(P))&&ae(P.then)&&ae(P.catch),an=((P,k)=>P?setImmediate:k?((H,ne)=>(on.addEventListener("message",({source:Ae,data:Ke})=>{Ae===on&&Ke===H&&ne.length&&ne.shift()()},!1),Ae=>{ne.push(Ae),on.postMessage(H,"*")}))(`axios@${Math.random()}`,[]):H=>setTimeout(H))(typeof setImmediate=="function",ae(on.postMessage)),wr=typeof queueMicrotask!="undefined"?queueMicrotask.bind(on):typeof process!="undefined"&&process.nextTick||an,Ze={isArray:be,isArrayBuffer:ye,isBuffer:ge,isFormData:_n,isArrayBufferView:Z,isString:ve,isNumber:fe,isBoolean:g,isObject:ee,isPlainObject:Be,isEmptyObject:Ee,isReadableStream:ln,isRequest:kn,isResponse:er,isHeaders:Oe,isUndefined:se,isDate:We,isFile:ht,isReactNativeBlob:Tt,isReactNative:zt,isBlob:Wn,isRegExp:Po,isFunction:ae,isStream:Vn,isURLSearchParams:wt,isTypedArray:Rn,isFileList:ir,forEach:gn,merge:tt,extend:xt,trim:vt,stripBOM:nt,inherits:mt,toFlatObject:ct,kindOf:R,kindOfTest:z,endsWith:kt,toArray:Sn,forEachEntry:mn,matchAll:Lr,isHTMLForm:uo,hasOwnProperty:Nr,hasOwnProp:Nr,reduceDescriptors:di,freezeMethods:xo,toObjectSet:So,toCamelCase:_i,noop:Ra,toFiniteNumber:Gr,findKey:Bt,global:on,isContextDefined:rt,isSpecCompliantForm:Ga,toJSONObject:Nn,isAsyncFn:vr,isThenable:$n,setImmediate:an,asap:wr,isIterable:P=>P!=null&&ae(P[d])};class Ar extends Error{static from(k,H,ne,Ae,Ke,$e){const yt=new Ar(k.message,H||k.code,ne,Ae,Ke);return yt.cause=k,yt.name=k.name,k.status!=null&&yt.status==null&&(yt.status=k.status),$e&&Object.assign(yt,$e),yt}constructor(k,H,ne,Ae,Ke){super(k),Object.defineProperty(this,"message",{value:k,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,H&&(this.code=H),ne&&(this.config=ne),Ae&&(this.request=Ae),Ke&&(this.response=Ke,this.status=Ke.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ze.toJSONObject(this.config),code:this.code,status:this.status}}}Ar.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",Ar.ERR_BAD_OPTION="ERR_BAD_OPTION",Ar.ECONNABORTED="ECONNABORTED",Ar.ETIMEDOUT="ETIMEDOUT",Ar.ERR_NETWORK="ERR_NETWORK",Ar.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",Ar.ERR_DEPRECATED="ERR_DEPRECATED",Ar.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",Ar.ERR_BAD_REQUEST="ERR_BAD_REQUEST",Ar.ERR_CANCELED="ERR_CANCELED",Ar.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",Ar.ERR_INVALID_URL="ERR_INVALID_URL";const Zn=Ar,Kr=null;function Bo(P){return Ze.isPlainObject(P)||Ze.isArray(P)}function co(P){return Ze.endsWith(P,"[]")?P.slice(0,-2):P}function ko(P,k,H){return P?P.concat(k).map(function(Ae,Ke){return Ae=co(Ae),!H&&Ke?"["+Ae+"]":Ae}).join(H?".":""):k}function Cr(P){return Ze.isArray(P)&&!P.some(Bo)}const to=Ze.toFlatObject(Ze,{},null,function(k){return/^is[A-Z]/.test(k)});function No(P,k,H){if(!Ze.isObject(P))throw new TypeError("target must be an object");k=k||new(Kr||FormData),H=Ze.toFlatObject(H,{metaTokens:!0,dots:!1,indexes:!1},!1,function(jt,Fe){return!Ze.isUndefined(Fe[jt])});const ne=H.metaTokens,Ae=H.visitor||Ft,Ke=H.dots,$e=H.indexes,xn=(H.Blob||typeof Blob!="undefined"&&Blob)&&Ze.isSpecCompliantForm(k);if(!Ze.isFunction(Ae))throw new TypeError("visitor must be a function");function Ht(pe){if(pe===null)return"";if(Ze.isDate(pe))return pe.toISOString();if(Ze.isBoolean(pe))return pe.toString();if(!xn&&Ze.isBlob(pe))throw new Zn("Blob is not supported. Use a Buffer instead.");return Ze.isArrayBuffer(pe)||Ze.isTypedArray(pe)?xn&&typeof Blob=="function"?new Blob([pe]):Buffer.from(pe):pe}function Ft(pe,jt,Fe){let zo=pe;if(Ze.isReactNative(k)&&Ze.isReactNativeBlob(pe))return k.append(ko(Fe,jt,Ke),Ht(pe)),!1;if(pe&&!Fe&&typeof pe=="object"){if(Ze.endsWith(jt,"{}"))jt=ne?jt:jt.slice(0,-2),pe=JSON.stringify(pe);else if(Ze.isArray(pe)&&Cr(pe)||(Ze.isFileList(pe)||Ze.endsWith(jt,"[]"))&&(zo=Ze.toArray(pe)))return jt=co(jt),zo.forEach(function(K,Yo){!(Ze.isUndefined(K)||K===null)&&k.append($e===!0?ko([jt],Yo,Ke):$e===null?jt:jt+"[]",Ht(K))}),!1}return Bo(pe)?!0:(k.append(ko(Fe,jt,Ke),Ht(pe)),!1)}const On=[],zr=Object.assign(to,{defaultVisitor:Ft,convertValue:Ht,isVisitable:Bo});function Do(pe,jt){if(!Ze.isUndefined(pe)){if(On.indexOf(pe)!==-1)throw Error("Circular reference detected in "+jt.join("."));On.push(pe),Ze.forEach(pe,function(zo,qo){(!(Ze.isUndefined(zo)||zo===null)&&Ae.call(k,zo,Ze.isString(qo)?qo.trim():qo,jt,zr))===!0&&Do(zo,jt?jt.concat(qo):[qo])}),On.pop()}}if(!Ze.isObject(P))throw new TypeError("data must be an object");return Do(P),k}const _r=No;function io(P){const k={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(P).replace(/[!'()~]|%20|%00/g,function(ne){return k[ne]})}function Mr(P,k){this._pairs=[],P&&_r(P,this,k)}const fi=Mr.prototype;fi.append=function(k,H){this._pairs.push([k,H])},fi.toString=function(k){const H=k?function(ne){return k.call(this,ne,io)}:io;return this._pairs.map(function(Ae){return H(Ae[0])+"="+H(Ae[1])},"").join("&")};const Ji=Mr;function Qe(P){return encodeURIComponent(P).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ye(P,k,H){if(!k)return P;const ne=H&&H.encode||Qe,Ae=Ze.isFunction(H)?{serialize:H}:H,Ke=Ae&&Ae.serialize;let $e;if(Ke?$e=Ke(k,Ae):$e=Ze.isURLSearchParams(k)?k.toString():new Ji(k,Ae).toString(ne),$e){const yt=P.indexOf("#");yt!==-1&&(P=P.slice(0,yt)),P+=(P.indexOf("?")===-1?"?":"&")+$e}return P}class Ct{constructor(){this.handlers=[]}use(k,H,ne){return this.handlers.push({fulfilled:k,rejected:H,synchronous:ne?ne.synchronous:!1,runWhen:ne?ne.runWhen:null}),this.handlers.length-1}eject(k){this.handlers[k]&&(this.handlers[k]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(k){Ze.forEach(this.handlers,function(ne){ne!==null&&k(ne)})}}const Nt=Ct,qt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},fr={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams!="undefined"?URLSearchParams:Ji,FormData:typeof FormData!="undefined"?FormData:null,Blob:typeof Blob!="undefined"?Blob:null},protocols:["http","https","file","blob","url","data"]},gr=typeof window!="undefined"&&typeof document!="undefined",rr=typeof navigator=="object"&&navigator||void 0,Fn=gr&&(!rr||["ReactNative","NativeScript","NS"].indexOf(rr.product)<0),Xr=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fo=gr&&window.location.href||"http://localhost",bn=Kn(Kn({},F),fr);function pi(P,k){return _r(P,new bn.classes.URLSearchParams,Kn({visitor:function(H,ne,Ae,Ke){return bn.isNode&&Ze.isBuffer(H)?(this.append(ne,H.toString("base64")),!1):Ke.defaultVisitor.apply(this,arguments)}},k))}function hi(P){return Ze.matchAll(/\w+|\[(\w*)]/g,P).map(k=>k[0]==="[]"?"":k[1]||k[0])}function mi(P){const k={},H=Object.keys(P);let ne;const Ae=H.length;let Ke;for(ne=0;ne<Ae;ne++)Ke=H[ne],k[Ke]=P[Ke];return k}function po(P){function k(H,ne,Ae,Ke){let $e=H[Ke++];if($e==="__proto__")return!0;const yt=Number.isFinite(+$e),xn=Ke>=H.length;return $e=!$e&&Ze.isArray(Ae)?Ae.length:$e,xn?(Ze.hasOwnProp(Ae,$e)?Ae[$e]=[Ae[$e],ne]:Ae[$e]=ne,!yt):((!Ae[$e]||!Ze.isObject(Ae[$e]))&&(Ae[$e]=[]),k(H,ne,Ae[$e],Ke)&&Ze.isArray(Ae[$e])&&(Ae[$e]=mi(Ae[$e])),!yt)}if(Ze.isFormData(P)&&Ze.isFunction(P.entries)){const H={};return Ze.forEachEntry(P,(ne,Ae)=>{k(hi(ne),Ae,H,0)}),H}return null}const vi=po;function fa(P,k,H){if(Ze.isString(P))try{return(k||JSON.parse)(P),Ze.trim(P)}catch(ne){if(ne.name!=="SyntaxError")throw ne}return(H||JSON.stringify)(P)}const Si={transitional:qt,adapter:["xhr","http","fetch"],transformRequest:[function(k,H){const ne=H.getContentType()||"",Ae=ne.indexOf("application/json")>-1,Ke=Ze.isObject(k);if(Ke&&Ze.isHTMLForm(k)&&(k=new FormData(k)),Ze.isFormData(k))return Ae?JSON.stringify(vi(k)):k;if(Ze.isArrayBuffer(k)||Ze.isBuffer(k)||Ze.isStream(k)||Ze.isFile(k)||Ze.isBlob(k)||Ze.isReadableStream(k))return k;if(Ze.isArrayBufferView(k))return k.buffer;if(Ze.isURLSearchParams(k))return H.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),k.toString();let yt;if(Ke){if(ne.indexOf("application/x-www-form-urlencoded")>-1)return pi(k,this.formSerializer).toString();if((yt=Ze.isFileList(k))||ne.indexOf("multipart/form-data")>-1){const xn=this.env&&this.env.FormData;return _r(yt?{"files[]":k}:k,xn&&new xn,this.formSerializer)}}return Ke||Ae?(H.setContentType("application/json",!1),fa(k)):k}],transformResponse:[function(k){const H=this.transitional||Si.transitional,ne=H&&H.forcedJSONParsing,Ae=this.responseType==="json";if(Ze.isResponse(k)||Ze.isReadableStream(k))return k;if(k&&Ze.isString(k)&&(ne&&!this.responseType||Ae)){const $e=!(H&&H.silentJSONParsing)&&Ae;try{return JSON.parse(k,this.parseReviver)}catch(yt){if($e)throw yt.name==="SyntaxError"?Zn.from(yt,Zn.ERR_BAD_RESPONSE,this,null,this.response):yt}}return k}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bn.classes.FormData,Blob:bn.classes.Blob},validateStatus:function(k){return k>=200&&k<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ze.forEach(["delete","get","head","post","put","patch"],P=>{Si.headers[P]={}});const Ei=Si,ja=Ze.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sr=(P=>{const k={};let H,ne,Ae;return P&&P.split(`
`).forEach(function($e){Ae=$e.indexOf(":"),H=$e.substring(0,Ae).trim().toLowerCase(),ne=$e.substring(Ae+1).trim(),!(!H||k[H]&&ja[H])&&(H==="set-cookie"?k[H]?k[H].push(ne):k[H]=[ne]:k[H]=k[H]?k[H]+", "+ne:ne)}),k}),bi=Symbol("internals");function xr(P){return P&&String(P).trim().toLowerCase()}function aa(P){return P===!1||P==null?P:Ze.isArray(P)?P.map(aa):String(P).replace(/[\r\n]+$/,"")}function Oi(P){const k=Object.create(null),H=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let ne;for(;ne=H.exec(P);)k[ne[1]]=ne[2];return k}const pa=P=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(P.trim());function Wr(P,k,H,ne,Ae){if(Ze.isFunction(ne))return ne.call(this,k,H);if(Ae&&(k=H),!!Ze.isString(k)){if(Ze.isString(ne))return k.indexOf(ne)!==-1;if(Ze.isRegExp(ne))return ne.test(k)}}function ha(P){return P.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(k,H,ne)=>H.toUpperCase()+ne)}function Fo(P,k){const H=Ze.toCamelCase(" "+k);["get","set","has"].forEach(ne=>{Object.defineProperty(P,ne+H,{value:function(Ae,Ke,$e){return this[ne].call(this,k,Ae,Ke,$e)},configurable:!0})})}class Yr{constructor(k){k&&this.set(k)}set(k,H,ne){const Ae=this;function Ke(yt,xn,Ht){const Ft=xr(xn);if(!Ft)throw new Error("header name must be a non-empty string");const On=Ze.findKey(Ae,Ft);(!On||Ae[On]===void 0||Ht===!0||Ht===void 0&&Ae[On]!==!1)&&(Ae[On||xn]=aa(yt))}const $e=(yt,xn)=>Ze.forEach(yt,(Ht,Ft)=>Ke(Ht,Ft,xn));if(Ze.isPlainObject(k)||k instanceof this.constructor)$e(k,H);else if(Ze.isString(k)&&(k=k.trim())&&!pa(k))$e(Sr(k),H);else if(Ze.isObject(k)&&Ze.isIterable(k)){let yt={},xn,Ht;for(const Ft of k){if(!Ze.isArray(Ft))throw TypeError("Object iterator must return a key-value pair");yt[Ht=Ft[0]]=(xn=yt[Ht])?Ze.isArray(xn)?[...xn,Ft[1]]:[xn,Ft[1]]:Ft[1]}$e(yt,H)}else k!=null&&Ke(H,k,ne);return this}get(k,H){if(k=xr(k),k){const ne=Ze.findKey(this,k);if(ne){const Ae=this[ne];if(!H)return Ae;if(H===!0)return Oi(Ae);if(Ze.isFunction(H))return H.call(this,Ae,ne);if(Ze.isRegExp(H))return H.exec(Ae);throw new TypeError("parser must be boolean|regexp|function")}}}has(k,H){if(k=xr(k),k){const ne=Ze.findKey(this,k);return!!(ne&&this[ne]!==void 0&&(!H||Wr(this,this[ne],ne,H)))}return!1}delete(k,H){const ne=this;let Ae=!1;function Ke($e){if($e=xr($e),$e){const yt=Ze.findKey(ne,$e);yt&&(!H||Wr(ne,ne[yt],yt,H))&&(delete ne[yt],Ae=!0)}}return Ze.isArray(k)?k.forEach(Ke):Ke(k),Ae}clear(k){const H=Object.keys(this);let ne=H.length,Ae=!1;for(;ne--;){const Ke=H[ne];(!k||Wr(this,this[Ke],Ke,k,!0))&&(delete this[Ke],Ae=!0)}return Ae}normalize(k){const H=this,ne={};return Ze.forEach(this,(Ae,Ke)=>{const $e=Ze.findKey(ne,Ke);if($e){H[$e]=aa(Ae),delete H[Ke];return}const yt=k?ha(Ke):String(Ke).trim();yt!==Ke&&delete H[Ke],H[yt]=aa(Ae),ne[yt]=!0}),this}concat(...k){return this.constructor.concat(this,...k)}toJSON(k){const H=Object.create(null);return Ze.forEach(this,(ne,Ae)=>{ne!=null&&ne!==!1&&(H[Ae]=k&&Ze.isArray(ne)?ne.join(", "):ne)}),H}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([k,H])=>k+": "+H).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(k){return k instanceof this?k:new this(k)}static concat(k,...H){const ne=new this(k);return H.forEach(Ae=>ne.set(Ae)),ne}static accessor(k){const ne=(this[bi]=this[bi]={accessors:{}}).accessors,Ae=this.prototype;function Ke($e){const yt=xr($e);ne[yt]||(Fo(Ae,$e),ne[yt]=!0)}return Ze.isArray(k)?k.forEach(Ke):Ke(k),this}}Yr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ze.reduceDescriptors(Yr.prototype,({value:P},k)=>{let H=k[0].toUpperCase()+k.slice(1);return{get:()=>P,set(ne){this[H]=ne}}}),Ze.freezeMethods(Yr);const Gt=Yr;function ea(P,k){const H=this||Ei,ne=k||H,Ae=Gt.from(ne.headers);let Ke=ne.data;return Ze.forEach(P,function(yt){Ke=yt.call(H,Ke,Ae.normalize(),k?k.status:void 0)}),Ae.normalize(),Ke}function Xa(P){return!!(P&&P.__CANCEL__)}class Ri extends Zn{constructor(k,H,ne){super(k==null?"canceled":k,Zn.ERR_CANCELED,H,ne),this.name="CanceledError",this.__CANCEL__=!0}}const Oo=Ri;function sa(P,k,H){const ne=H.config.validateStatus;!H.status||!ne||ne(H.status)?P(H):k(new Zn("Request failed with status code "+H.status,[Zn.ERR_BAD_REQUEST,Zn.ERR_BAD_RESPONSE][Math.floor(H.status/100)-4],H.config,H.request,H))}function Fr(P){const k=/^([-+\w]{1,25})(:?\/\/|:)/.exec(P);return k&&k[1]||""}function ji(P,k){P=P||10;const H=new Array(P),ne=new Array(P);let Ae=0,Ke=0,$e;return k=k!==void 0?k:1e3,function(xn){const Ht=Date.now(),Ft=ne[Ke];$e||($e=Ht),H[Ae]=xn,ne[Ae]=Ht;let On=Ke,zr=0;for(;On!==Ae;)zr+=H[On++],On=On%P;if(Ae=(Ae+1)%P,Ae===Ke&&(Ke=(Ke+1)%P),Ht-$e<k)return;const Do=Ft&&Ht-Ft;return Do?Math.round(zr*1e3/Do):void 0}}const Br=ji;function ni(P,k){let H=0,ne=1e3/k,Ae,Ke;const $e=(Ht,Ft=Date.now())=>{H=Ft,Ae=null,Ke&&(clearTimeout(Ke),Ke=null),P(...Ht)};return[(...Ht)=>{const Ft=Date.now(),On=Ft-H;On>=ne?$e(Ht,Ft):(Ae=Ht,Ke||(Ke=setTimeout(()=>{Ke=null,$e(Ae)},ne-On)))},()=>Ae&&$e(Ae)]}const Io=ni,Ni=(P,k,H=3)=>{let ne=0;const Ae=Br(50,250);return Io(Ke=>{const $e=Ke.loaded,yt=Ke.lengthComputable?Ke.total:void 0,xn=$e-ne,Ht=Ae(xn),Ft=$e<=yt;ne=$e;const On={loaded:$e,total:yt,progress:yt?$e/yt:void 0,bytes:xn,rate:Ht||void 0,estimated:Ht&&yt&&Ft?(yt-$e)/Ht:void 0,event:Ke,lengthComputable:yt!=null,[k?"download":"upload"]:!0};P(On)},H)},Xo=(P,k)=>{const H=P!=null;return[ne=>k[0]({lengthComputable:H,total:P,loaded:ne}),k[1]]},ma=P=>(...k)=>Ze.asap(()=>P(...k)),no=bn.hasStandardBrowserEnv?((P,k)=>H=>(H=new URL(H,bn.origin),P.protocol===H.protocol&&P.host===H.host&&(k||P.port===H.port)))(new URL(bn.origin),bn.navigator&&/(msie|trident)/i.test(bn.navigator.userAgent)):()=>!0,wa=bn.hasStandardBrowserEnv?{write(P,k,H,ne,Ae,Ke,$e){if(typeof document=="undefined")return;const yt=[`${P}=${encodeURIComponent(k)}`];Ze.isNumber(H)&&yt.push(`expires=${new Date(H).toUTCString()}`),Ze.isString(ne)&&yt.push(`path=${ne}`),Ze.isString(Ae)&&yt.push(`domain=${Ae}`),Ke===!0&&yt.push("secure"),Ze.isString($e)&&yt.push(`SameSite=${$e}`),document.cookie=yt.join("; ")},read(P){if(typeof document=="undefined")return null;const k=document.cookie.match(new RegExp("(?:^|; )"+P+"=([^;]*)"));return k?decodeURIComponent(k[1]):null},remove(P){this.write(P,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function or(P){return typeof P!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(P)}function To(P,k){return k?P.replace(/\/?\/$/,"")+"/"+k.replace(/^\/+/,""):P}function Hi(P,k,H){let ne=!or(k);return P&&(ne||H==!1)?To(P,k):k}const Di=P=>P instanceof Gt?Kn({},P):P;function S(P,k){k=k||{};const H={};function ne(Ht,Ft,On,zr){return Ze.isPlainObject(Ht)&&Ze.isPlainObject(Ft)?Ze.merge.call({caseless:zr},Ht,Ft):Ze.isPlainObject(Ft)?Ze.merge({},Ft):Ze.isArray(Ft)?Ft.slice():Ft}function Ae(Ht,Ft,On,zr){if(Ze.isUndefined(Ft)){if(!Ze.isUndefined(Ht))return ne(void 0,Ht,On,zr)}else return ne(Ht,Ft,On,zr)}function Ke(Ht,Ft){if(!Ze.isUndefined(Ft))return ne(void 0,Ft)}function $e(Ht,Ft){if(Ze.isUndefined(Ft)){if(!Ze.isUndefined(Ht))return ne(void 0,Ht)}else return ne(void 0,Ft)}function yt(Ht,Ft,On){if(On in k)return ne(Ht,Ft);if(On in P)return ne(void 0,Ht)}const xn={url:Ke,method:Ke,data:Ke,baseURL:$e,transformRequest:$e,transformResponse:$e,paramsSerializer:$e,timeout:$e,timeoutMessage:$e,withCredentials:$e,withXSRFToken:$e,adapter:$e,responseType:$e,xsrfCookieName:$e,xsrfHeaderName:$e,onUploadProgress:$e,onDownloadProgress:$e,decompress:$e,maxContentLength:$e,maxBodyLength:$e,beforeRedirect:$e,transport:$e,httpAgent:$e,httpsAgent:$e,cancelToken:$e,socketPath:$e,responseEncoding:$e,validateStatus:yt,headers:(Ht,Ft,On)=>Ae(Di(Ht),Di(Ft),On,!0)};return Ze.forEach(Object.keys(Kn(Kn({},P),k)),function(Ft){if(Ft==="__proto__"||Ft==="constructor"||Ft==="prototype")return;const On=Ze.hasOwnProp(xn,Ft)?xn[Ft]:Ae,zr=On(P[Ft],k[Ft],Ft);Ze.isUndefined(zr)&&On!==yt||(H[Ft]=zr)}),H}const D=(P=>{const k=S({},P);let{data:H,withXSRFToken:ne,xsrfHeaderName:Ae,xsrfCookieName:Ke,headers:$e,auth:yt}=k;if(k.headers=$e=Gt.from($e),k.url=Ye(Hi(k.baseURL,k.url,k.allowAbsoluteUrls),P.params,P.paramsSerializer),yt&&$e.set("Authorization","Basic "+btoa((yt.username||"")+":"+(yt.password?unescape(encodeURIComponent(yt.password)):""))),Ze.isFormData(H)){if(bn.hasStandardBrowserEnv||bn.hasStandardBrowserWebWorkerEnv)$e.setContentType(void 0);else if(Ze.isFunction(H.getHeaders)){const xn=H.getHeaders(),Ht=["content-type","content-length"];Object.entries(xn).forEach(([Ft,On])=>{Ht.includes(Ft.toLowerCase())&&$e.set(Ft,On)})}}if(bn.hasStandardBrowserEnv&&(ne&&Ze.isFunction(ne)&&(ne=ne(k)),ne||ne!==!1&&no(k.url))){const xn=Ae&&Ke&&wa.read(Ke);xn&&$e.set(Ae,xn)}return k}),ue=typeof XMLHttpRequest!="undefined"&&function(P){return new Promise(function(H,ne){const Ae=D(P);let Ke=Ae.data;const $e=Gt.from(Ae.headers).normalize();let{responseType:yt,onUploadProgress:xn,onDownloadProgress:Ht}=Ae,Ft,On,zr,Do,pe;function jt(){Do&&Do(),pe&&pe(),Ae.cancelToken&&Ae.cancelToken.unsubscribe(Ft),Ae.signal&&Ae.signal.removeEventListener("abort",Ft)}let Fe=new XMLHttpRequest;Fe.open(Ae.method.toUpperCase(),Ae.url,!0),Fe.timeout=Ae.timeout;function zo(){if(!Fe)return;const K=Gt.from("getAllResponseHeaders"in Fe&&Fe.getAllResponseHeaders()),Ii={data:!yt||yt==="text"||yt==="json"?Fe.responseText:Fe.response,status:Fe.status,statusText:Fe.statusText,headers:K,config:P,request:Fe};sa(function(Se){H(Se),jt()},function(Se){ne(Se),jt()},Ii),Fe=null}"onloadend"in Fe?Fe.onloadend=zo:Fe.onreadystatechange=function(){!Fe||Fe.readyState!==4||Fe.status===0&&!(Fe.responseURL&&Fe.responseURL.indexOf("file:")===0)||setTimeout(zo)},Fe.onabort=function(){Fe&&(ne(new Zn("Request aborted",Zn.ECONNABORTED,P,Fe)),Fe=null)},Fe.onerror=function(Yo){const Ii=Yo&&Yo.message?Yo.message:"Network Error",wi=new Zn(Ii,Zn.ERR_NETWORK,P,Fe);wi.event=Yo||null,ne(wi),Fe=null},Fe.ontimeout=function(){let Yo=Ae.timeout?"timeout of "+Ae.timeout+"ms exceeded":"timeout exceeded";const Ii=Ae.transitional||qt;Ae.timeoutErrorMessage&&(Yo=Ae.timeoutErrorMessage),ne(new Zn(Yo,Ii.clarifyTimeoutError?Zn.ETIMEDOUT:Zn.ECONNABORTED,P,Fe)),Fe=null},Ke===void 0&&$e.setContentType(null),"setRequestHeader"in Fe&&Ze.forEach($e.toJSON(),function(Yo,Ii){Fe.setRequestHeader(Ii,Yo)}),Ze.isUndefined(Ae.withCredentials)||(Fe.withCredentials=!!Ae.withCredentials),yt&&yt!=="json"&&(Fe.responseType=Ae.responseType),Ht&&([zr,pe]=Ni(Ht,!0),Fe.addEventListener("progress",zr)),xn&&Fe.upload&&([On,Do]=Ni(xn),Fe.upload.addEventListener("progress",On),Fe.upload.addEventListener("loadend",Do)),(Ae.cancelToken||Ae.signal)&&(Ft=K=>{Fe&&(ne(!K||K.type?new Oo(null,P,Fe):K),Fe.abort(),Fe=null)},Ae.cancelToken&&Ae.cancelToken.subscribe(Ft),Ae.signal&&(Ae.signal.aborted?Ft():Ae.signal.addEventListener("abort",Ft)));const qo=Fr(Ae.url);if(qo&&bn.protocols.indexOf(qo)===-1){ne(new Zn("Unsupported protocol "+qo+":",Zn.ERR_BAD_REQUEST,P));return}Fe.send(Ke||null)})},Me=(P,k)=>{const{length:H}=P=P?P.filter(Boolean):[];if(k||H){let ne=new AbortController,Ae;const Ke=function(Ht){if(!Ae){Ae=!0,yt();const Ft=Ht instanceof Error?Ht:this.reason;ne.abort(Ft instanceof Zn?Ft:new Oo(Ft instanceof Error?Ft.message:Ft))}};let $e=k&&setTimeout(()=>{$e=null,Ke(new Zn(`timeout of ${k}ms exceeded`,Zn.ETIMEDOUT))},k);const yt=()=>{P&&($e&&clearTimeout($e),$e=null,P.forEach(Ht=>{Ht.unsubscribe?Ht.unsubscribe(Ke):Ht.removeEventListener("abort",Ke)}),P=null)};P.forEach(Ht=>Ht.addEventListener("abort",Ke));const{signal:xn}=ne;return xn.unsubscribe=()=>Ze.asap(yt),xn}},Ne=function*(P,k){let H=P.byteLength;if(!k||H<k){yield P;return}let ne=0,Ae;for(;ne<H;)Ae=ne+k,yield P.slice(ne,Ae),ne=Ae},lt=function(P,k){return hp(this,null,function*(){try{for(var H=f0(st(P)),ne,Ae,Ke;ne=!(Ae=yield new Dc(H.next())).done;ne=!1){const $e=Ae.value;yield*mp(Ne($e,k))}}catch(Ae){Ke=[Ae]}finally{try{ne&&(Ae=H.return)&&(yield new Dc(Ae.call(H)))}finally{if(Ke)throw Ke[0]}}})},st=function(P){return hp(this,null,function*(){if(P[Symbol.asyncIterator]){yield*mp(P);return}const k=P.getReader();try{for(;;){const{done:H,value:ne}=yield new Dc(k.read());if(H)break;yield ne}}finally{yield new Dc(k.cancel())}})},Dt=(P,k,H,ne)=>{const Ae=lt(P,k);let Ke=0,$e,yt=Ht=>{$e||($e=!0,ne&&ne(Ht))};return new ReadableStream({pull(Ht){return Ir(this,null,function*(){try{const{done:Ft,value:On}=yield Ae.next();if(Ft){yt(),Ht.close();return}let zr=On.byteLength;if(H){let Do=Ke+=zr;H(Do)}Ht.enqueue(new Uint8Array(On))}catch(Ft){throw yt(Ft),Ft}})},cancel(Ht){return yt(Ht),Ae.return()}},{highWaterMark:2})},Vt=64*1024,{isFunction:Xt}=Ze,yn=(({Request:P,Response:k})=>({Request:P,Response:k}))(Ze.global),{ReadableStream:_t,TextEncoder:nn}=Ze.global,tn=(P,...k)=>{try{return!!P(...k)}catch(H){return!1}},Cn=P=>{P=Ze.merge.call({skipUndefined:!0},yn,P);const{fetch:k,Request:H,Response:ne}=P,Ae=k?Xt(k):typeof fetch=="function",Ke=Xt(H),$e=Xt(ne);if(!Ae)return!1;const yt=Ae&&Xt(_t),xn=Ae&&(typeof nn=="function"?(pe=>jt=>pe.encode(jt))(new nn):pe=>Ir(null,null,function*(){return new Uint8Array(yield new H(pe).arrayBuffer())})),Ht=Ke&&yt&&tn(()=>{let pe=!1;const jt=new _t,Fe=new H(bn.origin,{body:jt,method:"POST",get duplex(){return pe=!0,"half"}}).headers.has("Content-Type");return jt.cancel(),pe&&!Fe}),Ft=$e&&yt&&tn(()=>Ze.isReadableStream(new ne("").body)),On={stream:Ft&&(pe=>pe.body)};Ae&&["text","arrayBuffer","blob","formData","stream"].forEach(pe=>{!On[pe]&&(On[pe]=(jt,Fe)=>{let zo=jt&&jt[pe];if(zo)return zo.call(jt);throw new Zn(`Response type '${pe}' is not supported`,Zn.ERR_NOT_SUPPORT,Fe)})});const zr=pe=>Ir(null,null,function*(){if(pe==null)return 0;if(Ze.isBlob(pe))return pe.size;if(Ze.isSpecCompliantForm(pe))return(yield new H(bn.origin,{method:"POST",body:pe}).arrayBuffer()).byteLength;if(Ze.isArrayBufferView(pe)||Ze.isArrayBuffer(pe))return pe.byteLength;if(Ze.isURLSearchParams(pe)&&(pe=pe+""),Ze.isString(pe))return(yield xn(pe)).byteLength}),Do=(pe,jt)=>Ir(null,null,function*(){const Fe=Ze.toFiniteNumber(pe.getContentLength());return Fe==null?zr(jt):Fe});return pe=>Ir(null,null,function*(){let{url:jt,method:Fe,data:zo,signal:qo,cancelToken:K,timeout:Yo,onDownloadProgress:Ii,onUploadProgress:wi,responseType:Se,headers:Xe,withCredentials:it="same-origin",fetchOptions:It}=D(pe),un=k||fetch;Se=Se?(Se+"").toLowerCase():"text";let Dn=Me([qo,K&&K.toAbortSignal()],Yo),u=null;const v=Dn&&Dn.unsubscribe&&(()=>{Dn.unsubscribe()});let C;try{if(wi&&Ht&&Fe!=="get"&&Fe!=="head"&&(C=yield Do(Xe,zo))!==0){let Te=new H(jt,{method:"POST",body:zo,duplex:"half"}),ie;if(Ze.isFormData(zo)&&(ie=Te.headers.get("content-type"))&&Xe.setContentType(ie),Te.body){const[Pe,l]=Xo(C,Ni(ma(wi)));zo=Dt(Te.body,Vt,Pe,l)}}Ze.isString(it)||(it=it?"include":"omit");const O=Ke&&"credentials"in H.prototype,V=ci(Kn({},It),{signal:Dn,method:Fe.toUpperCase(),headers:Xe.normalize().toJSON(),body:zo,duplex:"half",credentials:O?it:void 0});u=Ke&&new H(jt,V);let re=yield Ke?un(u,It):un(jt,V);const ke=Ft&&(Se==="stream"||Se==="response");if(Ft&&(Ii||ke&&v)){const Te={};["status","statusText","headers"].forEach(p=>{Te[p]=re[p]});const ie=Ze.toFiniteNumber(re.headers.get("content-length")),[Pe,l]=Ii&&Xo(ie,Ni(ma(Ii),!0))||[];re=new ne(Dt(re.body,Vt,Pe,()=>{l&&l(),v&&v()}),Te)}Se=Se||"text";let Re=yield On[Ze.findKey(On,Se)||"text"](re,pe);return!ke&&v&&v(),yield new Promise((Te,ie)=>{sa(Te,ie,{data:Re,headers:Gt.from(re.headers),status:re.status,statusText:re.statusText,config:pe,request:u})})}catch(O){throw v&&v(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new Zn("Network Error",Zn.ERR_NETWORK,pe,u,O&&O.response),{cause:O.cause||O}):Zn.from(O,O&&O.code,pe,u,O&&O.response)}})},pr=new Map,jn=P=>{let k=P&&P.env||{};const{fetch:H,Request:ne,Response:Ae}=k,Ke=[ne,Ae,H];let $e=Ke.length,yt=$e,xn,Ht,Ft=pr;for(;yt--;)xn=Ke[yt],Ht=Ft.get(xn),Ht===void 0&&Ft.set(xn,Ht=yt?new Map:Cn(k)),Ft=Ht;return Ht},lr=jn(),fn=null,kr={http:Kr,xhr:ue,fetch:{get:jn}};Ze.forEach(kr,(P,k)=>{if(P){try{Object.defineProperty(P,"name",{value:k})}catch(H){}Object.defineProperty(P,"adapterName",{value:k})}});const ao=P=>`- ${P}`,et=P=>Ze.isFunction(P)||P===null||P===!1;function yr(P,k){P=Ze.isArray(P)?P:[P];const{length:H}=P;let ne,Ae;const Ke={};for(let $e=0;$e<H;$e++){ne=P[$e];let yt;if(Ae=ne,!et(ne)&&(Ae=kr[(yt=String(ne)).toLowerCase()],Ae===void 0))throw new Zn(`Unknown adapter '${yt}'`);if(Ae&&(Ze.isFunction(Ae)||(Ae=Ae.get(k))))break;Ke[yt||"#"+$e]=Ae}if(!Ae){const $e=Object.entries(Ke).map(([xn,Ht])=>`adapter ${xn} `+(Ht===!1?"is not supported by the environment":"is not available in the build"));let yt=H?$e.length>1?`since :
`+$e.map(ao).join(`
`):" "+ao($e[0]):"as no adapter specified";throw new Zn("There is no suitable adapter to dispatch the request "+yt,"ERR_NOT_SUPPORT")}return Ae}const ro={getAdapter:yr,adapters:kr};function Gn(P){if(P.cancelToken&&P.cancelToken.throwIfRequested(),P.signal&&P.signal.aborted)throw new Oo(null,P)}function oo(P){return Gn(P),P.headers=Gt.from(P.headers),P.data=ea.call(P,P.transformRequest),["post","put","patch"].indexOf(P.method)!==-1&&P.headers.setContentType("application/x-www-form-urlencoded",!1),ro.getAdapter(P.adapter||Ei.adapter,P)(P).then(function(ne){return Gn(P),ne.data=ea.call(P,P.transformResponse,ne),ne.headers=Gt.from(ne.headers),ne},function(ne){return Xa(ne)||(Gn(P),ne&&ne.response&&(ne.response.data=ea.call(P,P.transformResponse,ne.response),ne.response.headers=Gt.from(ne.response.headers))),Promise.reject(ne)})}const Ro="1.14.0",Ao={};["object","boolean","number","function","string","symbol"].forEach((P,k)=>{Ao[P]=function(ne){return typeof ne===P||"a"+(k<1?"n ":" ")+P}});const Ki={};Ao.transitional=function(k,H,ne){function Ae(Ke,$e){return"[Axios v"+Ro+"] Transitional option '"+Ke+"'"+$e+(ne?". "+ne:"")}return(Ke,$e,yt)=>{if(k===!1)throw new Zn(Ae($e," has been removed"+(H?" in "+H:"")),Zn.ERR_DEPRECATED);return H&&!Ki[$e]&&(Ki[$e]=!0,console.warn(Ae($e," has been deprecated since v"+H+" and will be removed in the near future"))),k?k(Ke,$e,yt):!0}},Ao.spelling=function(k){return(H,ne)=>(console.warn(`${ne} is likely a misspelling of ${k}`),!0)};function Pi(P,k,H){if(typeof P!="object")throw new Zn("options must be an object",Zn.ERR_BAD_OPTION_VALUE);const ne=Object.keys(P);let Ae=ne.length;for(;Ae-- >0;){const Ke=ne[Ae],$e=k[Ke];if($e){const yt=P[Ke],xn=yt===void 0||$e(yt,Ke,P);if(xn!==!0)throw new Zn("option "+Ke+" must be "+xn,Zn.ERR_BAD_OPTION_VALUE);continue}if(H!==!0)throw new Zn("Unknown option "+Ke,Zn.ERR_BAD_OPTION)}}const Da={assertOptions:Pi,validators:Ao},ri=Da.validators;class ho{constructor(k){this.defaults=k||{},this.interceptors={request:new Nt,response:new Nt}}request(k,H){return Ir(this,null,function*(){try{return yield this._request(k,H)}catch(ne){if(ne instanceof Error){let Ae={};Error.captureStackTrace?Error.captureStackTrace(Ae):Ae=new Error;const Ke=Ae.stack?Ae.stack.replace(/^.+\n/,""):"";try{ne.stack?Ke&&!String(ne.stack).endsWith(Ke.replace(/^.+\n.+\n/,""))&&(ne.stack+=`
`+Ke):ne.stack=Ke}catch($e){}}throw ne}})}_request(k,H){typeof k=="string"?(H=H||{},H.url=k):H=k||{},H=S(this.defaults,H);const{transitional:ne,paramsSerializer:Ae,headers:Ke}=H;ne!==void 0&&Da.assertOptions(ne,{silentJSONParsing:ri.transitional(ri.boolean),forcedJSONParsing:ri.transitional(ri.boolean),clarifyTimeoutError:ri.transitional(ri.boolean),legacyInterceptorReqResOrdering:ri.transitional(ri.boolean)},!1),Ae!=null&&(Ze.isFunction(Ae)?H.paramsSerializer={serialize:Ae}:Da.assertOptions(Ae,{encode:ri.function,serialize:ri.function},!0)),H.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?H.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:H.allowAbsoluteUrls=!0),Da.assertOptions(H,{baseUrl:ri.spelling("baseURL"),withXsrfToken:ri.spelling("withXSRFToken")},!0),H.method=(H.method||this.defaults.method||"get").toLowerCase();let $e=Ke&&Ze.merge(Ke.common,Ke[H.method]);Ke&&Ze.forEach(["delete","get","head","post","put","patch","common"],pe=>{delete Ke[pe]}),H.headers=Gt.concat($e,Ke);const yt=[];let xn=!0;this.interceptors.request.forEach(function(jt){if(typeof jt.runWhen=="function"&&jt.runWhen(H)===!1)return;xn=xn&&jt.synchronous;const Fe=H.transitional||qt;Fe&&Fe.legacyInterceptorReqResOrdering?yt.unshift(jt.fulfilled,jt.rejected):yt.push(jt.fulfilled,jt.rejected)});const Ht=[];this.interceptors.response.forEach(function(jt){Ht.push(jt.fulfilled,jt.rejected)});let Ft,On=0,zr;if(!xn){const pe=[oo.bind(this),void 0];for(pe.unshift(...yt),pe.push(...Ht),zr=pe.length,Ft=Promise.resolve(H);On<zr;)Ft=Ft.then(pe[On++],pe[On++]);return Ft}zr=yt.length;let Do=H;for(;On<zr;){const pe=yt[On++],jt=yt[On++];try{Do=pe(Do)}catch(Fe){jt.call(this,Fe);break}}try{Ft=oo.call(this,Do)}catch(pe){return Promise.reject(pe)}for(On=0,zr=Ht.length;On<zr;)Ft=Ft.then(Ht[On++],Ht[On++]);return Ft}getUri(k){k=S(this.defaults,k);const H=Hi(k.baseURL,k.url,k.allowAbsoluteUrls);return Ye(H,k.params,k.paramsSerializer)}}Ze.forEach(["delete","get","head","options"],function(k){ho.prototype[k]=function(H,ne){return this.request(S(ne||{},{method:k,url:H,data:(ne||{}).data}))}}),Ze.forEach(["post","put","patch"],function(k){function H(ne){return function(Ke,$e,yt){return this.request(S(yt||{},{method:k,headers:ne?{"Content-Type":"multipart/form-data"}:{},url:Ke,data:$e}))}}ho.prototype[k]=H(),ho.prototype[k+"Form"]=H(!0)});const _o=ho;class jo{constructor(k){if(typeof k!="function")throw new TypeError("executor must be a function.");let H;this.promise=new Promise(function(Ke){H=Ke});const ne=this;this.promise.then(Ae=>{if(!ne._listeners)return;let Ke=ne._listeners.length;for(;Ke-- >0;)ne._listeners[Ke](Ae);ne._listeners=null}),this.promise.then=Ae=>{let Ke;const $e=new Promise(yt=>{ne.subscribe(yt),Ke=yt}).then(Ae);return $e.cancel=function(){ne.unsubscribe(Ke)},$e},k(function(Ke,$e,yt){ne.reason||(ne.reason=new Oo(Ke,$e,yt),H(ne.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(k){if(this.reason){k(this.reason);return}this._listeners?this._listeners.push(k):this._listeners=[k]}unsubscribe(k){if(!this._listeners)return;const H=this._listeners.indexOf(k);H!==-1&&this._listeners.splice(H,1)}toAbortSignal(){const k=new AbortController,H=ne=>{k.abort(ne)};return this.subscribe(H),k.signal.unsubscribe=()=>this.unsubscribe(H),k.signal}static source(){let k;return{token:new jo(function(Ae){k=Ae}),cancel:k}}}const oi=jo;function gi(P){return function(H){return P.apply(null,H)}}function Uo(P){return Ze.isObject(P)&&P.isAxiosError===!0}const va={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(va).forEach(([P,k])=>{va[k]=P});const Mo=va;function $i(P){const k=new _o(P),H=E(_o.prototype.request,k);return Ze.extend(H,_o.prototype,k,{allOwnKeys:!0}),Ze.extend(H,k,null,{allOwnKeys:!0}),H.create=function(Ae){return $i(S(P,Ae))},H}const Ur=$i(Ei);Ur.Axios=_o,Ur.CanceledError=Oo,Ur.CancelToken=oi,Ur.isCancel=Xa,Ur.VERSION=Ro,Ur.toFormData=_r,Ur.AxiosError=Zn,Ur.Cancel=Ur.CanceledError,Ur.all=function(k){return Promise.all(k)},Ur.spread=gi,Ur.isAxiosError=Uo,Ur.mergeConfig=S,Ur.AxiosHeaders=Gt,Ur.formToJSON=P=>vi(Ze.isHTMLForm(P)?new FormData(P):P),Ur.getAdapter=ro.getAdapter,Ur.HttpStatusCode=Mo,Ur.default=Ur;const Eo=Ur,{Axios:Ia,AxiosError:ta,CanceledError:Ma,isCancel:bo,CancelToken:zi,VERSION:Gi,all:La,Cancel:wo,isAxiosError:ga,spread:Ya,toFormData:Xi,AxiosHeaders:ts,HttpStatusCode:Yi,formToJSON:ls,getAdapter:bs,mergeConfig:Bi}=Eo;var Qa=function(P,k,H,ne){function Ae(Ke){return Ke instanceof H?Ke:new H(function($e){$e(Ke)})}return new(H||(H=Promise))(function(Ke,$e){function yt(Ft){try{Ht(ne.next(Ft))}catch(On){$e(On)}}function xn(Ft){try{Ht(ne.throw(Ft))}catch(On){$e(On)}}function Ht(Ft){Ft.done?Ke(Ft.value):Ae(Ft.value).then(yt,xn)}Ht((ne=ne.apply(P,k||[])).next())})};const ws=P=>P instanceof ta,Na=P=>Qa(void 0,void 0,void 0,function*(){try{return yield Eo.request(Object.assign(Object.assign({},P),{withCredentials:!0}))}catch(k){return k}})},2574(M,f,y){"use strict";y.d(f,{$:()=>Ee});var F=y(4848),E=y(6942),x=y.n(E),m=y(5072),d=y.n(m),J=y(7825),R=y.n(J),z=y(7659),X=y.n(z),be=y(5056),se=y.n(be),ge=y(540),ye=y.n(ge),Z=y(1113),ve=y.n(Z),ae=y(9503),fe={};fe.styleTagTransform=ve(),fe.setAttributes=se(),fe.insert=X().bind(null,"head"),fe.domAPI=R(),fe.insertStyleElement=ye();var ee=d()(ae.A,fe);const g=ae.A&&ae.A.locals?ae.A.locals:void 0;var Be=function(We,ht){var Tt={};for(var zt in We)Object.prototype.hasOwnProperty.call(We,zt)&&ht.indexOf(zt)<0&&(Tt[zt]=We[zt]);if(We!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Wn=0,zt=Object.getOwnPropertySymbols(We);Wn<zt.length;Wn++)ht.indexOf(zt[Wn])<0&&Object.prototype.propertyIsEnumerable.call(We,zt[Wn])&&(Tt[zt[Wn]]=We[zt[Wn]]);return Tt};const Ee=We=>{var ht,Tt,{children:zt,appearance:Wn="primaryAction",className:ir}=We,Vn=Be(We,["children","appearance","className"]);const Bn=(typeof zt=="string"?zt.trim():"")||void 0,ar=(ht=Vn.title)!==null&&ht!==void 0?ht:Bn,_n=(Tt=Vn["aria-label"])!==null&&Tt!==void 0?Tt:Bn;return(0,F.jsx)("button",Object.assign({className:x()(g.button,g[`button_${Wn}`],ir),title:ar,"aria-label":_n},Vn,{children:zt}))}},7450(M,f,y){"use strict";y.d(f,{A:()=>fe});var F=y(4848),E=y(6942),x=y.n(E),m=y(6540),d=y(49),J=y(2574),R=y(7767),z=y(5588),X=y(2613),be=y(9205),se=y(8497);const ge=()=>{const ee=(0,se.d)(be.lz),g=(0,R.Zp)();return{goBack:(0,m.useCallback)(()=>{ee.length<2&&g(X.Ek),g((0,z.tW)(X.JZ.hr,{action:String(ee[1].action),format:"scn"}))},[g,ee])}};var ye=y(2320),Z=y(9674);function ve(){const{goBack:ee}=ge(),g=(0,ye.useTranslate)();return(0,F.jsxs)(J.$,{appearance:"secondaryAction",className:Z.A.backButton,onClick:ee,title:g({ru:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E",en:"Go back"}),children:[(0,F.jsx)(d.A,{}),g({ru:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E",en:"Go back"})]})}function ae(){const ee=(0,ye.useTranslate)();return(0,F.jsx)("p",{children:ee({ru:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",en:" Reload the page please"})})}class fe extends m.Component{constructor(g){super(g),this.state={hasError:!1,error:null,errorInfo:null}}componentDidCatch(g,Be){this.setState({hasError:!0,error:g,errorInfo:Be})}basicRender(){return(0,F.jsxs)("div",{className:x()(Z.A.wrap,this.props.className,{[Z.A.managmentWrap]:this.props.isManagment}),children:[(0,F.jsx)("h4",{children:this.props.title}),(0,F.jsx)("p",{children:this.props.paragraph}),(0,F.jsx)("p",{children:this.props.advice?this.props.advice:(0,F.jsx)(ae,{})}),this.props.shouldReturn&&(0,F.jsx)(ve,{})]})}render(){return this.state.hasError?this.basicRender():this.props.children}}},8320(M,f,y){"use strict";y.d(f,{E:()=>gn});var F=y(4848),E=y(6942),x=y.n(E),m=y(6540),d;function J(){return J=Object.assign?Object.assign.bind():function(Bt){for(var on=1;on<arguments.length;on++){var rt=arguments[on];for(var tt in rt)({}).hasOwnProperty.call(rt,tt)&&(Bt[tt]=rt[tt])}return Bt},J.apply(null,arguments)}var R=function(on){return m.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:10,height:10,fill:"none"},on),d||(d=m.createElement("path",{fill:"#BBB",d:"M5.627 5 9.31 1.316a.444.444 0 0 0-.626-.627L5 4.373 1.316.684a.446.446 0 1 0-.631.632L4.374 5 .684 8.684a.444.444 0 1 0 .627.627l3.69-3.684L8.684 9.31a.444.444 0 0 0 .626-.627z"})))};const z=R;var X;function be(){return be=Object.assign?Object.assign.bind():function(Bt){for(var on=1;on<arguments.length;on++){var rt=arguments[on];for(var tt in rt)({}).hasOwnProperty.call(rt,tt)&&(Bt[tt]=rt[tt])}return Bt},be.apply(null,arguments)}var se=function(on){return m.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},on),X||(X=m.createElement("path",{stroke:"red",strokeLinecap:"round",strokeLinejoin:"round",d:"M8 5.5v3.125M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M8 11.125h.007v.007H8z"})))};const ge=se;var ye;function Z(){return Z=Object.assign?Object.assign.bind():function(Bt){for(var on=1;on<arguments.length;on++){var rt=arguments[on];for(var tt in rt)({}).hasOwnProperty.call(rt,tt)&&(Bt[tt]=rt[tt])}return Bt},Z.apply(null,arguments)}var ve=function(on){return m.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},on),ye||(ye=m.createElement("path",{stroke:"#00CE3A",strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 10.625 9.375 12.5 12.5 8.125m5 1.875a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"})))};const ae=ve;var fe;function ee(){return ee=Object.assign?Object.assign.bind():function(Bt){for(var on=1;on<arguments.length;on++){var rt=arguments[on];for(var tt in rt)({}).hasOwnProperty.call(rt,tt)&&(Bt[tt]=rt[tt])}return Bt},ee.apply(null,arguments)}var g=function(on){return m.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:18,height:16,fill:"none"},on),fe||(fe=m.createElement("path",{stroke:"#FFB800",strokeLinecap:"round",strokeLinejoin:"round",d:"M9 6.5v3.125m-7.752 2.813c-.722 1.25.18 2.812 1.623 2.812h12.258c1.442 0 2.344-1.562 1.624-2.812L10.624 1.815c-.722-1.25-2.527-1.25-3.248 0zM9 12.125h.006v.007H9z"})))};const Be=g;var Ee=y(2320),We=y(5072),ht=y.n(We),Tt=y(7825),zt=y.n(Tt),Wn=y(7659),ir=y.n(Wn),Vn=y(5056),An=y.n(Vn),Bn=y(540),ar=y.n(Bn),_n=y(1113),wt=y.n(_n),ln=y(6945),kn={};kn.styleTagTransform=wt(),kn.setAttributes=An(),kn.insert=ir().bind(null,"head"),kn.domAPI=zt(),kn.insertStyleElement=ar();var er=ht()(ln.A,kn);const Oe=ln.A&&ln.A.locals?ln.A.locals:void 0,vt=(Bt,on)=>typeof Bt=="function"?Bt(on):typeof Bt=="object"&&(Bt!=null&&Bt.ru)?Bt[on]:Bt,gn=({type:Bt,title:on="",text:rt,onClose:tt})=>{const xt=(0,Ee.useLanguage)();return(0,F.jsx)("div",{className:x()(Oe.notification,{[Oe.success]:Bt==="success",[Oe.error]:Bt==="error",[Oe.warning]:Bt==="warning"}),children:(0,F.jsxs)("div",{className:Oe.center,children:[(0,F.jsxs)("div",{className:Oe.main,children:[Bt==="success"&&(0,F.jsx)(ae,{className:Oe.icon}),Bt==="warning"&&(0,F.jsx)(Be,{className:Oe.icon}),Bt==="error"&&(0,F.jsx)(ge,{className:Oe.icon}),(0,F.jsx)("div",{className:Oe.title,children:vt(on,xt)}),tt&&(0,F.jsx)("div",{className:x()(Oe.close,{[Oe.closeWithText]:rt}),onClick:tt,title:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435","aria-label":"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435",children:(0,F.jsx)(z,{})})]}),rt&&(0,F.jsx)("div",{className:Oe.text,children:vt(rt,xt)})]})})}},2613(M,f,y){"use strict";y.d(f,{H$:()=>Z,Ek:()=>fe,Cy:()=>ae,kk:()=>ve,nF:()=>ye,eT:()=>Wn,Q9:()=>g,iO:()=>Be,ih:()=>zt,xi:()=>Tt,JZ:()=>F,f3:()=>ee});var F={};y.r(F),y.d(F,{hr:()=>m,vn:()=>J,Go:()=>R,Wr:()=>x,oB:()=>d,QT:()=>E});const E="/",x="/c/:commandAddr/a/:addr/:format",m="/q/:action/:format",d="/l/",J="/ask-ai/",R="answer",z="myself",X="ui_menu_view_full_semantic_neighborhood";var be=y(5588);const se="",ge="ws://localhost:8090/ws_json",ye="ws://localhost:8090/ws_json",Z="http://localhost:8000",ve="myself",ae="ui_menu_view_full_semantic_neighborhood",fe=(0,be.tW)(x,{addr:ve,commandAddr:ae,format:"scn"}),ee=`${Z}/scg`,g=1e4,Be="getScnTimeoutError",Ee={ru:{mixed:{default:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442",required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",notType:"\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0438\u043F\u0443"},string:{length:"\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C ${length} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",min:"\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ${min} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",max:"\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 ${max} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",matches:"\u041F\u043E\u043B\u0435 \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u0447\u043D\u043E\u043C\u0443 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044E",email:"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 email"},number:{required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",positive:"\u0427\u0438\u0441\u043B\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C",negative:"\u0427\u0438\u0441\u043B\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C"},date:{required:"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",min:"\u0414\u0430\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u043E\u0437\u0436\u0435 ${min}",max:"\u0414\u0430\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u043D\u0435\u0435 ${max}"}},en:{mixed:{default:"Wrong format",required:"Required field",notType:"Incorrect field type"},string:{length:"Field should have ${length} symbols",required:"Required field",min:"Field should have more than ${min} symbols",max:"Field should have less than ${max} symbols",matches:"The field does not match the test expression",email:"Email is invalid"},number:{required:"Required field",positive:"Number should be positive",negative:"Number should be negative"},date:{required:"Required field",min:"Date should be later ${min}",max:"Date should be earlier ${max}"}}};var We=y(422),ht=function(ir,Vn,An,Bn){function ar(_n){return _n instanceof An?_n:new An(function(wt){wt(_n)})}return new(An||(An=Promise))(function(_n,wt){function ln(Oe){try{er(Bn.next(Oe))}catch(vt){wt(vt)}}function kn(Oe){try{er(Bn.throw(Oe))}catch(vt){wt(vt)}}function er(Oe){Oe.done?_n(Oe.value):ar(Oe.value).then(ln,kn)}er((Bn=Bn.apply(ir,Vn||[])).next())})};const Tt=[{text:{ru:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u0438\u043D\u0433\u043B\u0442\u043E\u043D?",en:"What is singleton?"}},{text:{ru:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 IMS?",en:"What is IMS?"}},{text:{ru:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0433\u0440\u0430\u0444?",en:"What is a graph?"}},{text:{ru:"\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438 \u043F\u0440\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F IMS",en:"Tell me about the history of IMS"}}],zt=(ir,Vn)=>Tt.find(Bn=>Bn.text[Vn]==ir.trim())?()=>ht(void 0,void 0,void 0,function*(){return yield(0,We.fc)(ir,Vn)}):()=>Promise.resolve(null),Wn="green"},6951(M,f,y){"use strict";y.d(f,{wA:()=>F.w,RU:()=>X.R,d4:()=>F.d});var F=y(8497),E=y(6540),x,m;const d=(Z,ve)=>{const ae=x(null),fe=x(Z);return m(()=>{fe.current=Z},[Z]),m(()=>{if(typeof ve=="number")return ae.current=window.setInterval(()=>fe.current(),ve),()=>window.clearInterval(ae.current||0)},[ve]),ae};var J=y(5782),R=y(3960),z=y(3645),X=y(9163),be=y(2320),se,ge;const ye=Z=>{const ve=ge();return se(()=>typeof Z=="function"?Z(ve):Z,[ve,Z])}},8497(M,f,y){"use strict";y.d(f,{d:()=>x,w:()=>E});var F=y(2896);const E=()=>(0,F.wA)(),x=(0,F.jO)()},9163(M,f,y){"use strict";y.d(f,{R:()=>J});var F=y(4848),E=y(6540),x=y(8320),m=y(2320),d=y.n(m);const J=()=>{const{addToast:R}=(0,m.useToast)();return(0,E.useCallback)(z=>{R((0,F.jsx)(x.E,{type:"error",title:z}),{position:"bottomRight",duration:4e3})},[R])}},5782(M,f,y){"use strict";y.d(f,{Q:()=>E});var F=y(6540);function E(x){const[m,d]=(0,F.useState)(()=>window.matchMedia(x).matches);return(0,F.useEffect)(()=>{const J=window.matchMedia(x),R=z=>d(z.matches);return J.addEventListener("change",R),()=>J.removeEventListener("change",R)},[x]),m}},3960(M,f,y){"use strict";y.d(f,{S:()=>z});var F=y(6540),E=y(7767),x=y(5588),m=y(2613),d=y(677),J=y(9205),R=y(8497);const z=()=>{const X=(0,R.d)(d.wS),[be]=(0,R.d)(J.lz),se=(0,E.Zp)(),ge=(0,F.useCallback)(()=>{if(!be)return se(m.Ek);se((0,x.tW)(m.JZ.hr,{action:String(be.action),format:X}))},[be,se,X]),ye=(0,F.useCallback)((ve,ae=m.Cy)=>{se((0,x.tW)(m.JZ.Wr,{addr:String(ve),commandAddr:String(ae),format:X}))},[X,se]),Z=(0,F.useCallback)(ve=>{se((0,x.tW)(m.JZ.hr,{action:ve,format:X}))},[X,se]);return{goToActiveFormatCommand:ye,goToActiveFormatAction:Z,goToPrevHistoryItem:ge}}},3645(M,f,y){"use strict";y.d(f,{L:()=>x});var F,E=y(6540);const x=(d,J)=>{const R=(0,E.useRef)(0),z=(0,E.useRef)(()=>{});z.current=d;const X=(0,E.useCallback)(()=>{window.clearTimeout(R.current)},[]),be=(0,E.useCallback)(()=>{R.current=window.setTimeout(()=>{z.current()},J)},[J]);return{timeoutRef:R,setTimeout:be,clearTimeout:X}},m=(d,J)=>{const{timeoutRef:R,clearTimeout:z,setTimeout:X}=x(d,J);return F(()=>(X(),z),[X,z]),{timeoutRef:R,clearTimeout:z,setTimeout:X}}},1542(M,f,y){"use strict";y.d(f,{B0:()=>J,Oo:()=>m});var F=y(2242),E=y(2613);const x={value:E.JZ.QT},m=(0,F.Z0)({name:"activeLink",initialState:x,reducers:{setActiveLink(R,z){R.value=z.payload.newActiveLink}}}),d=R=>R.activeLink.value,{setActiveLink:J}=m.actions},677(M,f,y){"use strict";y.d(f,{gE:()=>ge,wS:()=>ae,mB:()=>ye,Ri:()=>Z,ML:()=>g});var F=y(2242),E=y(2325),x=y(7809),m=y(4064);const d=Be=>{const Ee=document.cookie.match(new RegExp("(?:^|; )"+Be.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)"));return Ee?decodeURIComponent(Ee[1]):void 0},J=(Be,Ee,We={})=>{We=Object.assign({path:"/"},We),We.expires instanceof Date&&(We.expires=We.expires.toUTCString());let ht=encodeURIComponent(Be)+"="+encodeURIComponent(Ee);for(const Tt in We){ht+="; "+Tt;const zt=We[Tt];zt!==!0&&(ht+="="+zt)}document.cookie=ht},R=Be=>{J(Be,"",{"max-age":-1})};var z=function(Be,Ee,We,ht){function Tt(zt){return zt instanceof We?zt:new We(function(Wn){Wn(zt)})}return new(We||(We=Promise))(function(zt,Wn){function ir(Bn){try{An(ht.next(Bn))}catch(ar){Wn(ar)}}function Vn(Bn){try{An(ht.throw(Bn))}catch(ar){Wn(ar)}}function An(Bn){Bn.done?zt(Bn.value):Tt(Bn.value).then(ir,Vn)}An((ht=ht.apply(Be,Ee||[])).next())})};const X={format:"scn",user:{data:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,status:{isLoading:!1,isError:!1,isLoadingByToken:!1,isErrorByToken:!1}}},be=(0,F.zD)("/getLogin",(Be,Ee)=>z(void 0,[Be,Ee],void 0,function*(We,{rejectWithValue:ht}){var Tt;const zt=yield(0,x.Iq)();return(0,m.F)(zt)?ht((Tt=zt.response)===null||Tt===void 0?void 0:Tt.data):zt.data})),se=(0,F.zD)("/postLogin",(Be,Ee)=>z(void 0,[Be,Ee],void 0,function*(We,{rejectWithValue:ht}){var Tt;const zt=yield(0,x.wz)(We);return(0,m.F)(zt)?ht((Tt=zt.response)===null||Tt===void 0?void 0:Tt.data):zt.data})),ge=(0,F.Z0)({name:"common",initialState:X,reducers:{setUser(Be,Ee){Be.user.data=Ee.payload},setUserStatus(Be,Ee){Be.user.status=Ee.payload},setFormat(Be,Ee){Be.format=Ee.payload}},extraReducers:Be=>{Be.addCase(be.pending,Ee=>{Ee.user.status.isErrorByToken=!1,Ee.user.status.isLoadingByToken=!0}).addCase(be.fulfilled,(Ee,We)=>{localStorage.setItem("user",JSON.stringify(We.payload)),Ee.user.data=We.payload,Ee.user.status.isError=!1,Ee.user.status.isLoading=!1}).addCase(be.rejected,Ee=>{localStorage.removeItem("user"),R("session_key"),Ee.user.status.isLoading=!1,Ee.user.status.isError=!0}),Be.addCase(se.pending,Ee=>{Ee.user.status.isError=!1,Ee.user.status.isLoading=!0}).addCase(se.fulfilled,(Ee,We)=>{localStorage.setItem("user",JSON.stringify(We.payload)),Ee.user.data=We.payload,Ee.user.status.isError=!1,Ee.user.status.isLoading=!1}).addCase(se.rejected,Ee=>{localStorage.removeItem("user"),R("session_key"),Ee.user.status.isLoading=!1,Ee.user.status.isError=!0})}}),ye=Be=>Be.common.user.data,Z=(0,E.Mz)(ye,Be=>Be==null?void 0:Be.sc_addr),ve=Be=>Be.common.user.status,ae=Be=>Be.common.format||"scn",{setUser:fe,setUserStatus:ee,setFormat:g}=ge.actions},3631(M,f,y){"use strict";y.d(f,{O8:()=>z,l8:()=>R,E9:()=>J,M_:()=>Z});var F=y(2242),E=y(1542),x=y(2325);const m={args:[]},d=(0,F.Z0)({name:"args",initialState:m,reducers:{addArg(ve,ae){ve.args.push(ae.payload)},deleteArg(ve,ae){ve.args=ve.args.filter(fe=>fe.id!==ae.payload.id)},clearArgs(ve){ve.args=[]}}}),J=ve=>ve.args.args,R=(0,x.Mz)(J,ve=>ve.map(({addr:ae})=>ae)),{addArg:z,deleteArg:X,clearArgs:be}=d.actions;var se=y(677),ge=y(3605),ye=y(9205);const Z=(0,F.U1)({reducer:{[se.gE.name]:se.gE.reducer,[ye.CY.name]:ye.CY.reducer,[d.name]:d.reducer,[E.Oo.name]:E.Oo.reducer,[ge.Uh.name]:ge.Uh.reducer}})},3605(M,f,y){"use strict";y.d(f,{JQ:()=>d,Uh:()=>x,eU:()=>J,lz:()=>m});var F=y(2242);const E={requests:[]},x=(0,F.Z0)({name:"requestDialogHistory",initialState:E,reducers:{addInHistory:(R,z)=>{R.requests.push(z.payload)},resetHistory:R=>{R.requests=[]}}}),m=R=>R.requestDialogHistory.requests,{addInHistory:d,resetHistory:J}=x.actions},9205(M,f,y){"use strict";y.d(f,{CY:()=>x,N:()=>J,Zg:()=>d,lz:()=>m});var F=y(2242);const E={requests:[]},x=(0,F.Z0)({name:"requestHistory",initialState:E,reducers:{setRequests(R,z){R.requests=z.payload},addRequest(R,z){R.requests.unshift(z.payload)}}}),m=R=>R.requestHistory.requests,{setRequests:d,addRequest:J}=x.actions},7108(M,f,y){"use strict";y.d(f,{sg:()=>F,QD:()=>E,r_:()=>d,b1:()=>z,vG:()=>se,i4:()=>J});const F=(g,Be)=>{let Ee;return[(...Tt)=>{clearTimeout(Ee),Ee=setTimeout(()=>g(...Tt),Be)},()=>{clearTimeout(Ee)}]},E=(g,Be)=>{let Ee;return(...We)=>new Promise(ht=>{clearTimeout(Ee),Ee=setTimeout(()=>{ht(g(...We))},Be)})};var x=y(4329),m=function(g,Be,Ee,We){function ht(Tt){return Tt instanceof Ee?Tt:new Ee(function(zt){zt(Tt)})}return new(Ee||(Ee=Promise))(function(Tt,zt){function Wn(An){try{Vn(We.next(An))}catch(Bn){zt(Bn)}}function ir(An){try{Vn(We.throw(An))}catch(Bn){zt(Bn)}}function Vn(An){An.done?Tt(An.value):ht(An.value).then(Wn,ir)}Vn((We=We.apply(g,Be||[])).next())})};const d=g=>{let Be=[];return(...Ee)=>m(void 0,void 0,void 0,function*(){const We=(0,x.Ak)(5);Be.push(We);const ht=yield g(...Ee);Be=Be.filter(zt=>zt!==We);const Tt=Be.length===0;return{res:ht,isLast:Tt}})},J=g=>g.replace(/_(\w)/g,(Be,Ee)=>Ee.toUpperCase()),R=g=>g instanceof Blob?g:String(g),z=g=>{const Be=new FormData;return Object.keys(g).forEach(Ee=>Be.append(Ee,R(g[Ee]))),Be},X=g=>new Promise(Be=>setTimeout(()=>Be(),g)),be=(g,Be)=>(g=Math.ceil(g),Be=Math.floor(Be),Math.floor(Math.random()*(Be-g+1))+g),se=(g,Be=1)=>{if(Be<1)return;let Ee=!1,We=0;const ht=g.keys();for(;We<Be&&!Ee;){const Tt=ht.next();Ee=!!Tt.done,g.delete(Tt.value),We++}};var ge=y(8741),ye=y(2320),Z,ve,ae,fe=function(g,Be,Ee,We){function ht(Tt){return Tt instanceof Ee?Tt:new Ee(function(zt){zt(Tt)})}return new(Ee||(Ee=Promise))(function(Tt,zt){function Wn(An){try{Vn(We.next(An))}catch(Bn){zt(Bn)}}function ir(An){try{Vn(We.throw(An))}catch(Bn){zt(Bn)}}function Vn(An){An.done?Tt(An.value):ht(An.value).then(Wn,ir)}Vn((We=We.apply(g,Be||[])).next())})};const ee=g=>fe(void 0,void 0,void 0,function*(){return(yield Z.searchKeynodes(ve[g]))[ae(ve[g])].value})},7520(M){/*! For license information please see sc.js.LICENSE.txt */(function(f,y){M.exports=y()})(this,(()=>(()=>{"use strict";var f=[function(F,E,x){var m=this&&this.__createBinding||(Object.create?function(J,R,z,X){X===void 0&&(X=z);var be=Object.getOwnPropertyDescriptor(R,z);be&&!("get"in be?!R.__esModule:be.writable||be.configurable)||(be={enumerable:!0,get:function(){return R[z]}}),Object.defineProperty(J,X,be)}:function(J,R,z,X){X===void 0&&(X=z),J[X]=R[z]}),d=this&&this.__exportStar||function(J,R){for(var z in J)z==="default"||Object.prototype.hasOwnProperty.call(R,z)||m(R,J,z)};Object.defineProperty(E,"__esModule",{value:!0}),d(x(1),E),d(x(2),E),d(x(10),E),d(x(11),E),d(x(4),E),d(x(12),E),d(x(5),E),d(x(13),E),d(x(14),E),d(x(6),E),d(x(7),E),d(x(15),E),d(x(8),E),d(x(3),E)},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScAddr=void 0,E.ScAddr=class{constructor(x=0){this._value=x}get value(){return this._value}isValid(){return this._value!=0}equal(x){return this._value===x._value}}},function(F,E,x){var m=this&&this.__awaiter||function(Z,ve,ae,fe){return new(ae||(ae=Promise))((function(ee,g){function Be(ht){try{We(fe.next(ht))}catch(Tt){g(Tt)}}function Ee(ht){try{We(fe.throw(ht))}catch(Tt){g(Tt)}}function We(ht){var Tt;ht.done?ee(ht.value):(Tt=ht.value,Tt instanceof ae?Tt:new ae((function(zt){zt(Tt)}))).then(Be,Ee)}We((fe=fe.apply(Z,ve||[])).next())}))};Object.defineProperty(E,"__esModule",{value:!0}),E.ScClient=void 0;const d=x(3),J=x(1),R=x(4),z=x(5),X=x(6),be=x(7),se=x(9),ge=x(8),ye={keynodesCacheSize:ge.DEFAULT_KEYNODES_CACHE_SIZE};E.ScClient=class{constructor(Z,ve=ye){var ae;this.sendMessagesFromQueue=()=>{this._messageQueue.forEach((fe=>fe())),this._messageQueue=[]},this.onMessage=fe=>{var ee;const g=JSON.parse(fe.data.toString()),Be=g.id,Ee=this._callbacks[Be];if(g.event){const We=this._events[Be];if(!We)throw`Can't find callback for an event ${Be}`;(ee=We.callback)===null||ee===void 0||ee.call(We,new J.ScAddr(g.payload[0]),new J.ScAddr(g.payload[1]),new J.ScAddr(g.payload[2]),We.id)}else{if(!Ee)throw`Can't find callback for a command ${Be}`;delete this._callbacks[Be],Ee(g)}},this._socket=typeof Z=="string"?new WebSocket(Z):Z,this._socket.onmessage=this.onMessage,this._socket.onopen=this.sendMessagesFromQueue,this._messageQueue=[],this._callbacks={},this._events={},this._eventID=1,this._keynodesCacheSize=(ae=ve.keynodesCacheSize)!==null&&ae!==void 0?ae:ge.DEFAULT_KEYNODES_CACHE_SIZE,this._keynodesCache=new Map}addEventListener(Z,ve){this._socket.addEventListener(Z,ve)}removeEventListener(Z,ve){this._socket.removeEventListener(Z,ve)}sendMessage(Z,ve,ae){if(this._eventID++,this._callbacks[this._eventID])throw"Invalid state of messages queue";this._callbacks[this._eventID]=ae;const fe=JSON.stringify({id:this._eventID,type:Z,payload:ve}),ee=()=>this._socket.send(fe);this._socket.readyState===this._socket.OPEN?ee():this._messageQueue.push(ee)}resolveOrReject(Z,ve,ae,fe){return fe.length===0?Z(ae):ve(typeof fe=="string"?fe:fe.map((({message:ee})=>ee)))}getUser(){return m(this,void 0,void 0,(function*(){return new Promise(((Z,ve)=>{this.sendMessage("connection_info",null,(({payload:ae,errors:fe})=>{const ee=new J.ScAddr(ae.user_addr);this.resolveOrReject(Z,ve,ee,fe)}))}))}))}getElementsTypes(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{if(!Z.length)return ve([]);const fe=Z.map((({value:ee})=>ee));this.sendMessage("check_elements",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>new be.ScType(Ee)));this.resolveOrReject(ve,ae,Be,g)}))}))}))}checkElements(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `checkElements` method is deprecated. Use `getElementsTypes` instead."),this.getElementsTypes(Z)}))}generateElements(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.commands.map((ee=>ee.type.isLink()?{el:"link",type:ee.type.value,content:ee.data.content,content_type:ee.data.type}:ee.type.isNode()?{el:"node",type:ee.type.value}:ee.type.isConnector()?{el:"edge",type:ee.type.value,src:(0,se.transformConnectorInfo)(Z,ee.data.src),trg:(0,se.transformConnectorInfo)(Z,ee.data.trg)}:void(0,d.invalidValue)("Unknown type"))).filter((ee=>!!ee));this.sendMessage("create_elements",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>new J.ScAddr(Ee)));this.resolveOrReject(ve,ae,Be,g)}))}))}))}createElements(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `createElements` method is deprecated. Use `generateElements` instead."),this.generateElements(Z)}))}generateElementsBySCs(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((ee=>{var g;return typeof ee=="string"?{scs:ee,output_structure:0}:{scs:ee.scs,output_structure:(g=ee.output_structure)===null||g===void 0?void 0:g.value}}));this.sendMessage("create_elements_by_scs",fe,(({payload:ee,errors:g})=>{this.resolveOrReject(ve,ae,ee,g)}))}))}))}createElementsBySCs(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `createElementsBySCs` method is deprecated. Use `generateElementsBySCs` instead."),this.generateElementsBySCs(Z)}))}eraseElements(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((({value:ee})=>ee));this.sendMessage("delete_elements",fe,(({status:ee,errors:g})=>{this.resolveOrReject(ve,ae,ee,g)}))}))}))}deleteElements(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `deleteElements` method is deprecated. Use `eraseElements` instead."),this.eraseElements(Z)}))}setLinkContents(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((ee=>{var g;return{command:"set",type:ee.typeToStr(),data:ee.data,addr:(g=ee.addr)===null||g===void 0?void 0:g.value}}));this.sendMessage("content",fe,(({payload:ee,errors:g})=>{this.resolveOrReject(ve,ae,ee,g)}))}))}))}getLinkContents(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((({value:ee})=>({command:"get",addr:ee})));this.sendMessage("content",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>new z.ScLinkContent(Ee.value,z.ScLinkContent.stringToType(Ee.type))));this.resolveOrReject(ve,ae,Be,g)}))}))}))}searchLinksByContents(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((ee=>({command:"find",data:ee})));this.sendMessage("content",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>Ee.map((We=>new J.ScAddr(We)))));this.resolveOrReject(ve,ae,Be,g)}))}))}))}getLinksByContents(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `getLinksByContents` method is deprecated. Use `searchLinksByContents` instead."),this.searchLinksByContents(Z)}))}searchLinksByContentSubstrings(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((ee=>({command:"find_links_by_substr",data:ee})));this.sendMessage("content",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>Ee.map((We=>new J.ScAddr(We)))));this.resolveOrReject(ve,ae,Be,g)}))}))}))}getLinksByContentSubstrings(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `getLinksByContentSubstrings` method is deprecated. Use `searchLinksByContentSubstrings` instead."),this.searchLinksByContentSubstrings(Z)}))}searchLinkContentsByContentSubstrings(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((ee=>({command:"find_strings_by_substr",data:ee})));this.sendMessage("content",fe,(({payload:ee,errors:g})=>{this.resolveOrReject(ve,ae,ee,g)}))}))}))}getLinksContentsByContentSubstrings(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `getLinksContentsByContentSubstrings` method is deprecated. Use `searchLinkContentsByContentSubstrings` instead."),this.searchLinkContentsByContentSubstrings(Z)}))}resolveKeynodes(Z){return m(this,void 0,void 0,(function*(){return new Promise(((ve,ae)=>{const fe=Z.map((({id:ee,type:g})=>g.isValid()?{command:"resolve",idtf:ee,elType:g.value}:{command:"find",idtf:ee}));this.sendMessage("keynodes",fe,(({payload:ee,errors:g})=>{const Be=ee.map((Ee=>new J.ScAddr(Ee))).reduce(((Ee,We,ht)=>Object.assign(Object.assign({},Ee),{[Z[ht].id]:We})),{});this.resolveOrReject(ve,ae,Be,g)}))}))}))}processTripleItem({value:Z,alias:ve}){const ae=ve?{alias:ve}:{};return Z instanceof J.ScAddr?Object.assign({type:"addr",value:Z.value},ae):Z instanceof be.ScType?Object.assign({type:"type",value:Z.value},ae):Object.assign({type:"alias",value:Z},ae)}processTemplate(Z){return Z instanceof J.ScAddr?{type:"addr",value:Z.value}:typeof Z=="string"&&/^[a-z0-9_]+$/.test(Z)?{type:"idtf",value:Z}:typeof Z=="string"?Z:Z.triples.map((({source:ve,connector:ae,target:fe})=>[this.processTripleItem(ve),this.processTripleItem(ae),this.processTripleItem(fe)]))}processTemplateParams(Z){return Object.keys(Z).reduce(((ve,ae)=>{const fe=Z[ae];return ve[ae]=typeof fe=="string"?fe:fe.value,ve}),{})}searchByTemplate(Z,ve={}){return m(this,void 0,void 0,(function*(){return new Promise(((ae,fe)=>m(this,void 0,void 0,(function*(){const ee={templ:this.processTemplate(Z),params:this.processTemplateParams(ve)};this.sendMessage("search_template",ee,(({payload:g,status:Be,errors:Ee})=>{if(!Be)return ae([]);const We=g.addrs.map((ht=>{const Tt=ht.map((zt=>new J.ScAddr(zt)));return new X.ScTemplateResult(g.aliases,Tt)}));this.resolveOrReject(ae,fe,We,Ee)}))}))))}))}templateSearch(Z,ve={}){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `templateSearch` method is deprecated. Use `searchByTemplate` instead."),this.searchByTemplate(Z,ve)}))}generateByTemplate(Z,ve={}){return m(this,void 0,void 0,(function*(){return new Promise(((ae,fe)=>m(this,void 0,void 0,(function*(){const ee={templ:this.processTemplate(Z),params:this.processTemplateParams(ve)};this.sendMessage("generate_template",ee,(({status:g,payload:Be,errors:Ee})=>{g||ae(null);const We=Be.addrs.map((Tt=>new J.ScAddr(Tt))),ht=new X.ScTemplateResult(Be.aliases,We);this.resolveOrReject(ae,fe,ht,Ee)}))}))))}))}templateGenerate(Z,ve={}){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `templateGenerate` method is deprecated. Use `generateByTemplate` instead."),this.generateByTemplate(Z,ve)}))}createElementaryEventSubscriptions(Z){return m(this,void 0,void 0,(function*(){const ve=Array.isArray(Z)?Z:[Z];return new Promise(((ae,fe)=>{const ee={create:ve.map((({type:g,addr:Be})=>({type:g,addr:Be.value})))};this.sendMessage("events",ee,(({payload:g,errors:Be})=>{const Ee=ve.map((({callback:We,type:ht},Tt)=>{const zt=g[Tt],Wn=new R.ScEventSubscription(zt,ht,We);return this._events[zt]=Wn,Wn}));this.resolveOrReject(ae,fe,Ee,Be)}))}))}))}eventsCreate(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `eventsCreate` method is deprecated. Use `createElementaryEventSubscriptions` instead."),this.createElementaryEventSubscriptions(Z)}))}destroyElementaryEventSubscriptions(Z){return m(this,void 0,void 0,(function*(){const ve=Array.isArray(Z)?Z:[Z];return new Promise(((ae,fe)=>{const ee={delete:ve};this.sendMessage("events",ee,(({status:g,errors:Be})=>{ve.forEach((Ee=>{delete this._events[Ee]})),this.resolveOrReject(ae,fe,g,Be)}))}))}))}eventsDestroy(Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `eventsDestroy` method is deprecated. Use `destroyElementaryEventSubscriptions` instead."),this.destroyElementaryEventSubscriptions(Z)}))}searchKeynodes(...Z){return m(this,void 0,void 0,(function*(){const ve=Z.filter((We=>!this._keynodesCache.get(We))).map((We=>({id:We,type:be.ScType.ConstNode}))),ae=Z.filter((We=>this._keynodesCache.get(We))),fe=this._keynodesCache.size+ve.length-this._keynodesCacheSize;fe>0&&(0,se.shiftMap)(this._keynodesCache,fe);const ee=ve.length?yield this.resolveKeynodes(ve):[],g=Object.entries(ee),Be=ae.map((We=>[We,this._keynodesCache.get(We)]));g.forEach((([We,ht])=>this._keynodesCache.set(We,ht)));const Ee=[...g,...Be].map((([We,ht])=>[(0,se.snakeToCamelCase)(We),ht]));return Object.fromEntries(Ee)}))}findKeynodes(...Z){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScClient `findKeynodes` method is deprecated. Use `searchKeynodes` instead."),this.searchKeynodes(...Z)}))}}},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.invalidValue=void 0,E.invalidValue=x=>{((m,d)=>{throw`Invalid value: : ${d}`})(0,x)}},(F,E)=>{var x;Object.defineProperty(E,"__esModule",{value:!0}),E.ScEventSubscription=E.ScEventType=void 0,(x=E.ScEventType||(E.ScEventType={})).Unknown="unknown",x.AfterGenerateConnector="sc_event_after_generate_connector",x.AfterGenerateOutgoingArc="sc_event_after_generate_outgoing_arc",x.AfterGenerateIncomingArc="sc_event_after_generate_incoming_arc",x.AfterGenerateEdge="sc_event_after_generate_edge",x.BeforeEraseConnector="sc_event_before_erase_connector",x.BeforeEraseOutgoingArc="sc_event_before_erase_outgoing_arc",x.BeforeEraseIncomingArc="sc_event_before_erase_incoming_arc",x.BeforeEraseEdge="sc_event_before_erase_edge",x.BeforeEraseElement="sc_event_before_erase_element",x.BeforeChangeLinkContent="sc_event_before_change_link_content",E.ScEventSubscription=class{constructor(m,d,J){this._id=0,this._type=null,this._callback=null,this._id=m,this._type=d,this._callback=J}get id(){return this._id}get type(){return this._type}get callback(){return this._callback}IsValid(){return this._id>0}}},(F,E)=>{var x;Object.defineProperty(E,"__esModule",{value:!0}),E.ScLinkContent=E.ScLinkContentType=void 0,(function(m){m[m.Int=0]="Int",m[m.Float=1]="Float",m[m.String=2]="String",m[m.Binary=3]="Binary"})(x=E.ScLinkContentType||(E.ScLinkContentType={})),E.ScLinkContent=class{constructor(m,d,J){this._data=m,this._type=d,this._addr=J}get data(){return this._data}get type(){return this._type}get addr(){return this._addr}typeToStr(){switch(this._type){case x.Binary:return"binary";case x.Float:return"float";case x.Int:return"int";default:return"string"}}static stringToType(m){switch(m){case"binary":return x.Binary;case"float":return x.Float;case"int":return x.Int;default:return x.String}}}},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScTemplateResult=void 0,E.ScTemplateResult=class{constructor(x,m){this._addrs=[],this._indecies={},this._indecies=x,this._addrs=m}get size(){return this._addrs.length}get(x){return typeof x=="string"?this._addrs[this._indecies[x]]:this._addrs[x]}forEachTriple(x){for(let m=0;m<this.size;m+=3)x(this._addrs[m],this._addrs[m+1],this._addrs[m+2])}}},(F,E,x)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScType=void 0;const m=x(8);class d{constructor(R){this._value=typeof R=="number"?R||0:R instanceof d&&R._value||0}get value(){return this._value}hasConstancy(){return(this._value&m.sc_type_constancy_mask)!=0}hasSubtype(R){return(this._value&R)==R}isConst(){return this.hasSubtype(m.sc_type_const)}isVar(){return this.hasSubtype(m.sc_type_var)}hasDirection(){return this.isArc()}isNode(){return this.hasSubtype(m.sc_type_node)}isLink(){return this.hasSubtype(m.sc_type_node_link)}isConnector(){return this.hasSubtype(m.sc_type_connector)}isEdge(){return console.warn("Warning: ScType `isEdge` method is deprecated. Use `isConnector` instead."),this.isConnector()}isCommonEdge(){return this.hasSubtype(m.sc_type_common_edge)}isArc(){return this.hasSubtype(m.sc_type_arc)}isCommonArc(){return this.hasSubtype(m.sc_type_common_arc)}isMembershipArc(){return this.hasSubtype(m.sc_type_membership_arc)}isPos(){return this.hasSubtype(m.sc_type_pos_arc)}isNeg(){return this.hasSubtype(m.sc_type_neg_arc)}isFuz(){return this.hasSubtype(m.sc_type_fuz_arc)}isPerm(){return this.hasSubtype(m.sc_type_perm_arc)}isTemp(){return this.hasSubtype(m.sc_type_temp_arc)}isActual(){return this.hasSubtype(m.sc_type_actual_arc)}isInactual(){return this.hasSubtype(m.sc_type_inactual_arc)}isTuple(){return this.hasSubtype(m.sc_type_node_tuple)}isStructure(){return this.hasSubtype(m.sc_type_node_structure)}isStruct(){return console.warn("Warning: ScType `isStruct` method is deprecated. Use `isStructure` instead."),this.isStructure()}isRole(){return this.hasSubtype(m.sc_type_node_role)}isNonRole(){return this.hasSubtype(m.sc_type_node_non_role)}isClass(){return this.hasSubtype(m.sc_type_node_class)}isSuperclass(){return this.hasSubtype(m.sc_type_node_superclass)}isMaterial(){return this.hasSubtype(m.sc_type_node_material)}isValid(){return this._value!==0}equal(R){return this._value===R._value}static isNotCompatibleByMask(R,z,X){const be=R&X,se=z&X;return be!=m.sc_type_unknown&&be!=se}isExtendableTo(R){let z=this.value,X=R.value;if(d.isNotCompatibleByMask(z,X,m.sc_type_element_mask)||d.isNotCompatibleByMask(z,X,m.sc_type_constancy_mask))return!1;if(this.isLink()){if(!R.isLink()||(new d(z&~m.sc_type_node_link),R=new d(X&~m.sc_type_node_link),d.isNotCompatibleByMask(z,X,m.sc_type_node_link_mask)))return!1}else if(this.isNode()){if(!R.isNode()||(new d(z&~m.sc_type_node),R=new d(X&~m.sc_type_node),d.isNotCompatibleByMask(z,X,m.sc_type_node_mask)))return!1}else if(this.isConnector()){if(R.isConnector())return!1;if(d.isNotCompatibleByMask(z,X,m.sc_type_connector_mask)){if(this.isCommonEdge()){if(!R.isCommonEdge())return!1}else if(this.isArc()){if(!R.isArc())return!1;if(this.isCommonArc()){if(!R.isCommonArc())return!1}else if(!this.isMembershipArc()&&!R.isMembershipArc())return!1}}if(new d(z&~m.sc_type_connector_mask),R=new d(X&~m.sc_type_connector_mask),d.isNotCompatibleByMask(z,X,m.sc_type_actuality_mask)||d.isNotCompatibleByMask(z,X,m.sc_type_permanency_mask)||d.isNotCompatibleByMask(z,X,m.sc_type_positivity_mask)||d.isNotCompatibleByMask(z,X,m.sc_type_fuz_arc))return!1}return!0}merge(R){if(!this.isExtendableTo(R))throw"Type `"+this+"` can not be extended to `"+R+"`";return new d(this._value|R._value)}changeConst(R){const z=this._value&~m.sc_type_constancy_mask;return new d(z|(R?m.sc_type_const:m.sc_type_var))}}E.ScType=d,d.Unknown=new d(m.sc_type_unknown),d.Node=new d(m.sc_type_node),d.Connector=new d(m.sc_type_connector),d.CommonEdge=new d(m.sc_type_common_edge),d.Arc=new d(m.sc_type_arc),d.CommonArc=new d(m.sc_type_common_arc),d.MembershipArc=new d(m.sc_type_membership_arc),d.Const=new d(m.sc_type_const),d.Var=new d(m.sc_type_var),d.ConstNode=new d(m.sc_type_const|m.sc_type_node),d.VarNode=new d(m.sc_type_var|m.sc_type_node),d.ConstConnector=new d(m.sc_type_const|m.sc_type_connector),d.VarConnector=new d(m.sc_type_var|m.sc_type_connector),d.ConstCommonEdge=new d(m.sc_type_const|m.sc_type_common_edge),d.VarCommonEdge=new d(m.sc_type_var|m.sc_type_common_edge),d.ConstArc=new d(m.sc_type_const|m.sc_type_arc),d.VarArc=new d(m.sc_type_var|m.sc_type_arc),d.ConstCommonArc=new d(m.sc_type_const|m.sc_type_common_arc),d.VarCommonArc=new d(m.sc_type_var|m.sc_type_common_arc),d.ConstMembershipArc=new d(m.sc_type_const|m.sc_type_membership_arc),d.VarMembershipArc=new d(m.sc_type_var|m.sc_type_membership_arc),d.PermArc=new d(m.sc_type_perm_arc),d.TempArc=new d(m.sc_type_temp_arc),d.ConstPermArc=new d(m.sc_type_const|m.sc_type_perm_arc),d.VarPermArc=new d(m.sc_type_var|m.sc_type_perm_arc),d.ConstTempArc=new d(m.sc_type_const|m.sc_type_temp_arc),d.VarTempArc=new d(m.sc_type_var|m.sc_type_temp_arc),d.ActualTempArc=new d(m.sc_type_actual_arc|m.sc_type_temp_arc),d.InactualTempArc=new d(m.sc_type_inactual_arc|m.sc_type_temp_arc),d.ConstActualTempArc=new d(m.sc_type_const|m.sc_type_actual_arc|m.sc_type_temp_arc),d.VarActualTempArc=new d(m.sc_type_var|m.sc_type_actual_arc|m.sc_type_temp_arc),d.ConstInactualTempArc=new d(m.sc_type_const|m.sc_type_inactual_arc|m.sc_type_temp_arc),d.VarInactualTempArc=new d(m.sc_type_var|m.sc_type_inactual_arc|m.sc_type_temp_arc),d.PosArc=new d(m.sc_type_pos_arc),d.NegArc=new d(m.sc_type_neg_arc),d.ConstPosArc=new d(m.sc_type_const|m.sc_type_pos_arc),d.VarPosArc=new d(m.sc_type_var|m.sc_type_pos_arc),d.PermPosArc=new d(m.sc_type_perm_arc|m.sc_type_pos_arc),d.TempPosArc=new d(m.sc_type_temp_arc|m.sc_type_pos_arc),d.ActualTempPosArc=new d(m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.InactualTempPosArc=new d(m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.ConstPermPosArc=new d(m.sc_type_const|m.sc_type_perm_arc|m.sc_type_pos_arc),d.ConstTempPosArc=new d(m.sc_type_const|m.sc_type_temp_arc|m.sc_type_pos_arc),d.ConstActualTempPosArc=new d(m.sc_type_const|m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.ConstInactualTempPosArc=new d(m.sc_type_const|m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.VarPermPosArc=new d(m.sc_type_var|m.sc_type_perm_arc|m.sc_type_pos_arc),d.VarTempPosArc=new d(m.sc_type_var|m.sc_type_temp_arc|m.sc_type_pos_arc),d.VarActualTempPosArc=new d(m.sc_type_var|m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.VarInactualTempPosArc=new d(m.sc_type_var|m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_pos_arc),d.ConstNegArc=new d(m.sc_type_const|m.sc_type_neg_arc),d.VarNegArc=new d(m.sc_type_var|m.sc_type_neg_arc),d.PermNegArc=new d(m.sc_type_perm_arc|m.sc_type_neg_arc),d.TempNegArc=new d(m.sc_type_temp_arc|m.sc_type_neg_arc),d.ActualTempNegArc=new d(m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.InactualTempNegArc=new d(m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.ConstPermNegArc=new d(m.sc_type_const|m.sc_type_perm_arc|m.sc_type_neg_arc),d.ConstTempNegArc=new d(m.sc_type_const|m.sc_type_temp_arc|m.sc_type_neg_arc),d.ConstActualTempNegArc=new d(m.sc_type_const|m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.ConstInactualTempNegArc=new d(m.sc_type_const|m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.VarPermNegArc=new d(m.sc_type_var|m.sc_type_perm_arc|m.sc_type_neg_arc),d.VarTempNegArc=new d(m.sc_type_var|m.sc_type_temp_arc|m.sc_type_neg_arc),d.VarActualTempNegArc=new d(m.sc_type_var|m.sc_type_actual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.VarInactualTempNegArc=new d(m.sc_type_var|m.sc_type_inactual_arc|m.sc_type_temp_arc|m.sc_type_neg_arc),d.FuzArc=new d(m.sc_type_fuz_arc),d.ConstFuzArc=new d(m.sc_type_const|m.sc_type_fuz_arc),d.VarFuzArc=new d(m.sc_type_var|m.sc_type_fuz_arc),d.NodeLink=new d(m.sc_type_node_link),d.NodeLinkClass=new d(m.sc_type_node_link|m.sc_type_node_class),d.NodeTuple=new d(m.sc_type_node_tuple),d.NodeStructure=new d(m.sc_type_node_structure),d.NodeRole=new d(m.sc_type_node_role),d.NodeNonRole=new d(m.sc_type_node_non_role),d.NodeClass=new d(m.sc_type_node_class),d.NodeSuperclass=new d(m.sc_type_node_superclass),d.NodeMaterial=new d(m.sc_type_node_material),d.ConstNodeLink=new d(m.sc_type_const|m.sc_type_node_link),d.ConstNodeLinkClass=new d(m.sc_type_const|m.sc_type_node_link|m.sc_type_node_class),d.ConstNodeTuple=new d(m.sc_type_const|m.sc_type_node_tuple),d.ConstNodeStructure=new d(m.sc_type_const|m.sc_type_node_structure),d.ConstNodeRole=new d(m.sc_type_const|m.sc_type_node_role),d.ConstNodeNonRole=new d(m.sc_type_const|m.sc_type_node_non_role),d.ConstNodeClass=new d(m.sc_type_const|m.sc_type_node_class),d.ConstNodeSuperclass=new d(m.sc_type_const|m.sc_type_node_superclass),d.ConstNodeMaterial=new d(m.sc_type_const|m.sc_type_node_material),d.VarNodeLink=new d(m.sc_type_var|m.sc_type_node_link),d.VarNodeLinkClass=new d(m.sc_type_var|m.sc_type_node_link|m.sc_type_node_class),d.VarNodeTuple=new d(m.sc_type_var|m.sc_type_node_tuple),d.VarNodeStructure=new d(m.sc_type_var|m.sc_type_node_structure),d.VarNodeRole=new d(m.sc_type_var|m.sc_type_node_role),d.VarNodeNonRole=new d(m.sc_type_var|m.sc_type_node_non_role),d.VarNodeClass=new d(m.sc_type_var|m.sc_type_node_class),d.VarNodeSuperclass=new d(m.sc_type_var|m.sc_type_node_superclass),d.VarNodeMaterial=new d(m.sc_type_var|m.sc_type_node_material),d.EdgeUCommon=new d(d.CommonEdge),d.EdgeDCommon=new d(d.CommonArc),d.EdgeUCommonConst=new d(d.ConstCommonEdge),d.EdgeDCommonConst=new d(d.ConstCommonArc),d.EdgeAccess=new d(d.MembershipArc),d.EdgeAccessConstPosPerm=new d(d.ConstPermPosArc),d.EdgeAccessConstNegPerm=new d(d.ConstPermNegArc),d.EdgeAccessConstFuzPerm=new d(d.ConstFuzArc),d.EdgeAccessConstPosTemp=new d(d.ConstTempPosArc),d.EdgeAccessConstNegTemp=new d(d.ConstTempNegArc),d.EdgeAccessConstFuzTemp=new d(d.ConstFuzArc),d.EdgeUCommonVar=new d(d.VarCommonEdge),d.EdgeDCommonVar=new d(d.VarCommonArc),d.EdgeAccessVarPosPerm=new d(d.VarPermPosArc),d.EdgeAccessVarNegPerm=new d(d.VarPermNegArc),d.EdgeAccessVarFuzPerm=new d(d.VarFuzArc),d.EdgeAccessVarPosTemp=new d(d.VarTempPosArc),d.EdgeAccessVarNegTemp=new d(d.VarTempNegArc),d.EdgeAccessVarFuzTemp=new d(d.VarFuzArc),d.NodeConst=new d(d.ConstNode),d.NodeVar=new d(d.VarNode),d.Link=new d(d.NodeLink),d.LinkClass=new d(d.NodeLinkClass),d.NodeStruct=new d(d.NodeStructure),d.LinkConst=new d(d.ConstNodeLink),d.LinkConstClass=new d(d.ConstNodeLinkClass),d.NodeConstTuple=new d(d.ConstNodeTuple),d.NodeConstStruct=new d(d.ConstNodeStructure),d.NodeConstRole=new d(d.ConstNodeRole),d.NodeConstNoRole=new d(d.ConstNodeNonRole),d.NodeConstClass=new d(d.ConstNodeClass),d.NodeConstMaterial=new d(d.ConstNodeMaterial),d.LinkVar=new d(d.VarNodeLink),d.LinkVarClass=new d(d.VarNodeLinkClass),d.NodeVarStruct=new d(d.VarNodeStructure),d.NodeVarTuple=new d(d.VarNodeTuple),d.NodeVarRole=new d(d.VarNodeRole),d.NodeVarNoRole=new d(d.VarNodeNonRole),d.NodeVarClass=new d(d.VarNodeClass),d.NodeVarMaterial=new d(d.VarNodeMaterial)},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.DEFAULT_KEYNODES_CACHE_SIZE=E.sc_type_node_link_mask=E.sc_type_node_mask=E.sc_type_common_edge_mask=E.sc_type_common_arc_mask=E.sc_type_membership_arc_mask=E.sc_type_positivity_mask=E.sc_type_permanency_mask=E.sc_type_actuality_mask=E.sc_type_constancy_mask=E.sc_type_arc_mask=E.sc_type_connector_mask=E.sc_type_element_mask=E.sc_type_node_material=E.sc_type_node_superclass=E.sc_type_node_class=E.sc_type_node_non_role=E.sc_type_node_role=E.sc_type_node_structure=E.sc_type_node_tuple=E.sc_type_node_link=E.sc_type_fuz_arc=E.sc_type_neg_arc=E.sc_type_pos_arc=E.sc_type_perm_arc=E.sc_type_temp_arc=E.sc_type_inactual_arc=E.sc_type_actual_arc=E.sc_type_var=E.sc_type_const=E.sc_type_membership_arc=E.sc_type_common_arc=E.sc_type_arc=E.sc_type_common_edge=E.sc_type_connector=E.sc_type_node=E.sc_type_unknown=void 0,E.sc_type_unknown=0,E.sc_type_node=1,E.sc_type_connector=16384,E.sc_type_common_edge=4|E.sc_type_connector,E.sc_type_arc=32768|E.sc_type_connector,E.sc_type_common_arc=8|E.sc_type_arc,E.sc_type_membership_arc=16|E.sc_type_arc,E.sc_type_const=32,E.sc_type_var=64,E.sc_type_actual_arc=4096|E.sc_type_membership_arc,E.sc_type_inactual_arc=8192|E.sc_type_membership_arc,E.sc_type_temp_arc=1024|E.sc_type_membership_arc,E.sc_type_perm_arc=2048|E.sc_type_membership_arc,E.sc_type_pos_arc=128|E.sc_type_membership_arc,E.sc_type_neg_arc=256|E.sc_type_membership_arc,E.sc_type_fuz_arc=512|E.sc_type_membership_arc,E.sc_type_node_link=2|E.sc_type_node,E.sc_type_node_tuple=128|E.sc_type_node,E.sc_type_node_structure=256|E.sc_type_node,E.sc_type_node_role=512|E.sc_type_node,E.sc_type_node_non_role=1024|E.sc_type_node,E.sc_type_node_class=2048|E.sc_type_node,E.sc_type_node_superclass=4096|E.sc_type_node,E.sc_type_node_material=8192|E.sc_type_node,E.sc_type_element_mask=E.sc_type_node|E.sc_type_connector,E.sc_type_connector_mask=E.sc_type_common_edge|E.sc_type_common_arc|E.sc_type_membership_arc,E.sc_type_arc_mask=E.sc_type_common_arc|E.sc_type_membership_arc,E.sc_type_constancy_mask=E.sc_type_const|E.sc_type_var,E.sc_type_actuality_mask=E.sc_type_actual_arc|E.sc_type_inactual_arc,E.sc_type_permanency_mask=E.sc_type_perm_arc|E.sc_type_temp_arc,E.sc_type_positivity_mask=E.sc_type_pos_arc|E.sc_type_neg_arc,E.sc_type_membership_arc_mask=E.sc_type_actuality_mask|E.sc_type_permanency_mask|E.sc_type_positivity_mask|E.sc_type_fuz_arc,E.sc_type_common_arc_mask=E.sc_type_common_arc,E.sc_type_common_edge_mask=E.sc_type_common_edge,E.sc_type_node_mask=E.sc_type_node_link|E.sc_type_node_tuple|E.sc_type_node_structure|E.sc_type_node_role|E.sc_type_node_non_role|E.sc_type_node_class|E.sc_type_node_superclass|E.sc_type_node_material,E.sc_type_node_link_mask=E.sc_type_node|E.sc_type_node_link|E.sc_type_node_class,E.DEFAULT_KEYNODES_CACHE_SIZE=5e3},(F,E,x)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.snakeToCamelCase=E.shiftMap=E.transformConnectorInfo=void 0;const m=x(3);E.transformConnectorInfo=(d,J)=>{if(typeof J!="string")return{type:"addr",value:J.value};const R=d.getIndex(J);return R===void 0?(0,m.invalidValue)(`Invalid alias: ${R}`):{type:"ref",value:R}},E.shiftMap=(d,J=1)=>{if(J<1)return;let R=!1,z=0;const X=d.keys();for(;z<J&&!R;){const be=X.next();R=!!be.done,d.delete(be.value),z++}},E.snakeToCamelCase=d=>d.replace(/_(\w)/g,((J,R)=>R.toUpperCase()))},(F,E,x)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScConstruction=void 0;const m=x(3),d=x(11);E.ScConstruction=class{constructor(){this._commands=[],this._aliases={}}generateNode(J,R){J.isNode()||(0,m.invalidValue)("You should pass node type there");const z=new d.ScConstructionCommand(J);R&&(this._aliases[R]=this._commands.length),this._commands.push(z)}createNode(J,R){console.warn("Warning: ScConstruction `createNode` method is deprecated. Use `generateNode` instead."),this.generateNode(J,R)}generateConnector(J,R,z,X){J.isConnector()||(0,m.invalidValue)("You should pass connector type there");const be=new d.ScConstructionCommand(J,{src:R,trg:z});X&&(this._aliases[X]=this._commands.length),this._commands.push(be)}createEdge(J,R,z,X){console.warn("Warning: ScConstruction `createEdge` method is deprecated. Use `generateConnector` instead."),this.generateConnector(J,R,z,X)}generateLink(J,R,z){J.isLink()||(0,m.invalidValue)("You should pass link type there");const X=new d.ScConstructionCommand(J,{content:R.data,type:R.type});z&&(this._aliases[z]=this._commands.length),this._commands.push(X)}createLink(J,R,z){console.warn("Warning: ScConstruction `createLink` method is deprecated. Use `generateLink` instead."),this.generateLink(J,R,z)}get commands(){return this._commands}getIndex(J){return this._aliases[J]}}},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScConstructionCommand=void 0,E.ScConstructionCommand=class{constructor(x,m){this._elType=x,this._data=m}get type(){return this._elType}get data(){return this._data}}},(F,E)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScEventSubscriptionParams=void 0,E.ScEventSubscriptionParams=class{constructor(x,m,d){this._addr=x,this._type=m,this._callback=d}get addr(){return this._addr}get type(){return this._type}get callback(){return this._callback}}},function(F,E,x){var m=this&&this.__awaiter||function(X,be,se,ge){return new(se||(se=Promise))((function(ye,Z){function ve(ee){try{fe(ge.next(ee))}catch(g){Z(g)}}function ae(ee){try{fe(ge.throw(ee))}catch(g){Z(g)}}function fe(ee){var g;ee.done?ye(ee.value):(g=ee.value,g instanceof se?g:new se((function(Be){Be(g)}))).then(ve,ae)}fe((ge=ge.apply(X,be||[])).next())}))};Object.defineProperty(E,"__esModule",{value:!0}),E.ScSet=void 0;const d=x(4),J=x(12),R=x(14),z=x(7);E.ScSet=class{constructor(X,be,se,ge,ye,Z){if(this._elements={},this._scClient=null,this._addr=null,this._onAdd=null,this._onRemove=null,this._onInitialize=null,this._filterType=null,this._scClient=X,this._addr=be,this._onInitialize=se,this._onAdd=ge,this._onRemove=ye,this._filterType=Z,!this._addr||!this._addr.isValid())throw`Invalid addr of set: ${this._addr}`}initialize(){var X;return m(this,void 0,void 0,(function*(){if(!this._addr)return;const be=yield(X=this._scClient)===null||X===void 0?void 0:X.createElementaryEventSubscriptions([new J.ScEventSubscriptionParams(this._addr,d.ScEventType.AfterGenerateOutgoingArc,this.onEventGenerateElement.bind(this)),new J.ScEventSubscriptionParams(this._addr,d.ScEventType.BeforeEraseOutgoingArc,this.onEventEraseElement.bind(this))]);return this._evtGenerateElement=be==null?void 0:be[0],this._evtEraseElement=be==null?void 0:be[1],yield this.iterateExistingElements(),new Promise((function(se){se()}))}))}shouldAppend(X){var be;return m(this,void 0,void 0,(function*(){const se=yield(be=this._scClient)===null||be===void 0?void 0:be.getElementsTypes(X),ge=se==null?void 0:se.map((ye=>!(this._filterType&&(this._filterType.value&ye.value)!==this._filterType.value)));return new Promise((function(ye){ye(ge)}))}))}onEventGenerateElement(X,be,se){return m(this,void 0,void 0,(function*(){if(!this._elements[be.value]&&se.isValid()){const ge=yield this.shouldAppend([se]);ge!=null&&ge[0]&&(this._elements[be.value]=se,this.callOnAdd(se))}return new Promise((function(ge){ge()}))}))}onEventEraseElement(X,be){return m(this,void 0,void 0,(function*(){const se=this._elements[be.value];if(!se)throw`Invalid state of set: ${this._addr} (try to remove element ${be}, that doesn't exist)`;return yield this.callOnRemove(se),delete this._elements[be.value],new Promise((function(ge){ge()}))}))}callOnInitialize(X){return m(this,void 0,void 0,(function*(){return this._onInitialize&&(yield this._onInitialize(X)),new Promise((function(be){be()}))}))}callOnAdd(X){return m(this,void 0,void 0,(function*(){return this._onAdd&&(yield this._onAdd(X)),new Promise((function(be){be()}))}))}callOnRemove(X){return m(this,void 0,void 0,(function*(){return this._onRemove&&(yield this._onRemove(X)),new Promise((function(be){be()}))}))}iterateExistingElements(){return m(this,void 0,void 0,(function*(){if(!this._addr||!this._scClient)return;const X=[],be=new R.ScTemplate;be.triple(this._addr,[z.ScType.VarPermPosArc,"_arc"],[z.ScType.Unknown,"_item"]);const se=yield this._scClient.searchByTemplate(be),ge=(se==null?void 0:se.map((Z=>Z.get("_item"))))||[],ye=yield this.shouldAppend(ge);for(let Z=0;Z<se.length;++Z){if(!(ye!=null&&ye[Z]))continue;const ve=se[Z].get("_arc"),ae=se[Z].get("_item");if(this._elements[ve.value])throw`Element ${ae} already exist in set`;this._elements[ve.value]=ae,X.push(ae)}return yield this.callOnInitialize(X),new Promise((function(Z){Z()}))}))}addItem(X){return m(this,void 0,void 0,(function*(){if(!this._addr||!this._scClient)return;let be=!1;const se=new R.ScTemplate;if(se.triple(this._addr,[z.ScType.VarPermPosArc,"_arc"],[X,"_item"]),(yield this._scClient.searchByTemplate(se)).length==0){const ge=yield this._scClient.generateByTemplate(se,{_item:X});if(ge){const ye=ge.get("_item");be=ye&&ye.isValid()}}return new Promise((function(ge){ge(be)}))}))}}},(F,E,x)=>{Object.defineProperty(E,"__esModule",{value:!0}),E.ScTemplate=void 0;const m=x(1),d=x(7);E.ScTemplate=class{constructor(){this._triples=[]}get triples(){return this._triples}triple(J,R,z){const X=this.splitTemplateParam(J),be=this.splitTemplateParam(R),se=this.splitTemplateParam(z);return this._triples.push({source:X,connector:be,target:se}),this}quintuple(J,R,z,X,be){let{alias:se,value:ge}=this.splitTemplateParam(R);return se||(se=`connector_1_${this._triples.length}`),this.triple(J,[ge,se],z),this.triple(be,X,se),this}tripleWithRelation(J,R,z,X,be){return console.warn("Warning: ScTemplate `tripleWithRelation` method is deprecated. Use `quintuple` instead."),this.quintuple(J,R,z,X,be)}splitTemplateParam(J){if(J instanceof Array){if(J.length!==2)throw"Invalid number of values for replacement. Use [ScType | ScAddr, string]";const R=J[0],z=J[1];if(!(R instanceof m.ScAddr||R instanceof d.ScType)||typeof z!="string")throw"First parameter should be ScAddr or ScType. The second one - string";return{alias:z,value:R}}return{alias:null,value:J}}}},function(F,E,x){var m=this&&this.__awaiter||function(ye,Z,ve,ae){return new(ve||(ve=Promise))((function(fe,ee){function g(We){try{Ee(ae.next(We))}catch(ht){ee(ht)}}function Be(We){try{Ee(ae.throw(We))}catch(ht){ee(ht)}}function Ee(We){var ht;We.done?fe(We.value):(ht=We.value,ht instanceof ve?ht:new ve((function(Tt){Tt(ht)}))).then(g,Be)}Ee((ae=ae.apply(ye,Z||[])).next())}))},d=this&&this.__rest||function(ye,Z){var ve={};for(var ae in ye)Object.prototype.hasOwnProperty.call(ye,ae)&&Z.indexOf(ae)<0&&(ve[ae]=ye[ae]);if(ye!=null&&typeof Object.getOwnPropertySymbols=="function"){var fe=0;for(ae=Object.getOwnPropertySymbols(ye);fe<ae.length;fe++)Z.indexOf(ae[fe])<0&&Object.prototype.propertyIsEnumerable.call(ye,ae[fe])&&(ve[ae[fe]]=ye[ae[fe]])}return ve};Object.defineProperty(E,"__esModule",{value:!0}),E.ScHelper=void 0;const J=x(10),R=x(4),z=x(12),X=x(5),be=x(14),se=x(7),ge=x(9);E.ScHelper=class{constructor(ye){this._client=ye}getMainIdentifierLinkAddr(ye,Z){return m(this,void 0,void 0,(function*(){const ve=yield this._client.searchKeynodes("nrel_main_idtf",Z),{nrelMainIdtf:ae}=ve,fe=d(ve,["nrelMainIdtf"])[(0,ge.snakeToCamelCase)(Z)],ee=new be.ScTemplate,g="_link";ee.quintuple(ye,se.ScType.VarCommonArc,[se.ScType.VarNodeLink,g],se.ScType.VarPermPosArc,ae),ee.triple(fe,se.ScType.VarPermPosArc,g);const Be=yield this._client.searchByTemplate(ee);return Be.length?Be[0].get(g):null}))}getMainIdentifier(ye,Z){return m(this,void 0,void 0,(function*(){const ve=yield this.getMainIdentifierLinkAddr(ye,Z);return ve?(yield this._client.getLinkContents([ve]))[0].data:null}))}getSystemIdentifier(ye){return m(this,void 0,void 0,(function*(){const{nrelSystemIdentifier:Z}=yield this._client.searchKeynodes("nrel_system_identifier"),ve=new be.ScTemplate,ae="_link";ve.quintuple(ye,se.ScType.VarCommonArc,[se.ScType.VarNodeLink,ae],se.ScType.VarPermPosArc,Z);const fe=yield this._client.searchByTemplate(ve);if(!fe.length)return null;const ee=yield this._client.getLinkContents([fe[0].get(ae)]);return String(ee[0].data)}))}getScIdentifier(ye,Z){return m(this,void 0,void 0,(function*(){const ve=yield this.getMainIdentifier(ye,Z);if(ve)return String(ve);const ae=yield this.getSystemIdentifier(ye);return String(ae||ye.value)}))}getAddrOrSystemIdentifierAddr(ye){return m(this,void 0,void 0,(function*(){return Number(ye)||(yield this._client.searchKeynodes(String(ye)))[(0,ge.snakeToCamelCase)(String(ye))].value}))}getResult(ye){return new Promise((Z=>{m(this,void 0,void 0,(function*(){var ve;const{nrelResult:ae}=yield this._client.searchKeynodes("nrel_result"),fe=new z.ScEventSubscriptionParams(ye,R.ScEventType.AfterGenerateOutgoingArc,((We,ht,Tt,zt)=>m(this,void 0,void 0,(function*(){const Wn=new be.ScTemplate;Wn.triple(ae,se.ScType.VarPermPosArc,ht),(yield this._client.searchByTemplate(Wn)).length&&(this._client.destroyElementaryEventSubscriptions(zt),Z(Tt))})))),[ee]=yield this._client.createElementaryEventSubscriptions(fe),g="_result",Be=new be.ScTemplate;Be.quintuple(ye,se.ScType.VarCommonArc,[se.ScType.VarNode,g],se.ScType.VarPermPosArc,ae);const Ee=(ve=(yield this._client.searchByTemplate(Be))[0])===null||ve===void 0?void 0:ve.get(g);Ee&&(this._client.destroyElementaryEventSubscriptions(ee.id),Z(Ee))}))}))}getAnswer(ye){return console.warn("Warning: ScHelper `getAnswer` method is deprecated. Use `getResult` instead."),this.getResult(ye)}generateLink(ye){return m(this,void 0,void 0,(function*(){const Z=new J.ScConstruction;Z.generateLink(se.ScType.ConstNodeLink,new X.ScLinkContent(ye,X.ScLinkContentType.String));const ve=yield this._client.generateElements(Z);return ve.length?ve[0]:null}))}createLink(ye){return m(this,void 0,void 0,(function*(){return console.warn("Warning: ScHelper `createLink` method is deprecated. Use `generateLink` instead."),this.generateLink(ye)}))}}}],y={};return(function F(E){var x=y[E];if(x!==void 0)return x.exports;var m=y[E]={exports:{}};return f[E].call(m.exports,m,m.exports,F),m.exports})(0)})()))},8493(M,f,y){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=y(6540);function E(ge,ye){return ge===ye&&(ge!==0||1/ge===1/ye)||ge!==ge&&ye!==ye}var x=typeof Object.is=="function"?Object.is:E,m=F.useState,d=F.useEffect,J=F.useLayoutEffect,R=F.useDebugValue;function z(ge,ye){var Z=ye(),ve=m({inst:{value:Z,getSnapshot:ye}}),ae=ve[0].inst,fe=ve[1];return J(function(){ae.value=Z,ae.getSnapshot=ye,X(ae)&&fe({inst:ae})},[ge,Z,ye]),d(function(){return X(ae)&&fe({inst:ae}),ge(function(){X(ae)&&fe({inst:ae})})},[ge]),R(Z),Z}function X(ge){var ye=ge.getSnapshot;ge=ge.value;try{var Z=ye();return!x(ge,Z)}catch(ve){return!0}}function be(ge,ye){return ye()}var se=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?be:z;f.useSyncExternalStore=F.useSyncExternalStore!==void 0?F.useSyncExternalStore:se},2162(M,f,y){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=y(6540),E=y(9888);function x(be,se){return be===se&&(be!==0||1/be===1/se)||be!==be&&se!==se}var m=typeof Object.is=="function"?Object.is:x,d=E.useSyncExternalStore,J=F.useRef,R=F.useEffect,z=F.useMemo,X=F.useDebugValue;f.useSyncExternalStoreWithSelector=function(be,se,ge,ye,Z){var ve=J(null);if(ve.current===null){var ae={hasValue:!1,value:null};ve.current=ae}else ae=ve.current;ve=z(function(){function ee(ht){if(!g){if(g=!0,Be=ht,ht=ye(ht),Z!==void 0&&ae.hasValue){var Tt=ae.value;if(Z(Tt,ht))return Ee=Tt}return Ee=ht}if(Tt=Ee,m(Be,ht))return Tt;var zt=ye(ht);return Z!==void 0&&Z(Tt,zt)?(Be=ht,Tt):(Be=ht,Ee=zt)}var g=!1,Be,Ee,We=ge===void 0?null:ge;return[function(){return ee(se())},We===null?void 0:function(){return ee(We())}]},[se,ge,ye,Z]);var fe=d(be,ve[0],ve[1]);return R(function(){ae.hasValue=!0,ae.value=fe},[fe]),X(fe),fe}},9888(M,f,y){"use strict";M.exports=y(8493)},9242(M,f,y){"use strict";M.exports=y(2162)},2320(M,f,y){(function(E,x){if(1)M.exports=x(y(6540),y(9616),y(961),y(7520));else var m,d})(self,(F,E,x,m)=>(()=>{var d={418:(X=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var be=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;function ye(ve){if(ve==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(ve)}function Z(){try{if(!Object.assign)return!1;var ve=new String("abc");if(ve[5]="de",Object.getOwnPropertyNames(ve)[0]==="5")return!1;for(var ae={},fe=0;fe<10;fe++)ae["_"+String.fromCharCode(fe)]=fe;var ee=Object.getOwnPropertyNames(ae).map(function(Be){return ae[Be]});if(ee.join("")!=="0123456789")return!1;var g={};return"abcdefghijklmnopqrst".split("").forEach(function(Be){g[Be]=Be}),Object.keys(Object.assign({},g)).join("")==="abcdefghijklmnopqrst"}catch(Be){return!1}}X.exports=Z()?Object.assign:function(ve,ae){for(var fe,ee=ye(ve),g,Be=1;Be<arguments.length;Be++){fe=Object(arguments[Be]);for(var Ee in fe)se.call(fe,Ee)&&(ee[Ee]=fe[Ee]);if(be){g=be(fe);for(var We=0;We<g.length;We++)ge.call(fe,g[We])&&(ee[g[We]]=fe[g[We]])}}return ee}}),251:((X,be,se)=>{"use strict";/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */se(418);var ge=se(156),ye=60103;if(be.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var Z=Symbol.for;ye=Z("react.element"),be.Fragment=Z("react.fragment")}var ve=ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ae=Object.prototype.hasOwnProperty,fe={key:!0,ref:!0,__self:!0,__source:!0};function ee(g,Be,Ee){var We,ht={},Tt=null,zt=null;Ee!==void 0&&(Tt=""+Ee),Be.key!==void 0&&(Tt=""+Be.key),Be.ref!==void 0&&(zt=Be.ref);for(We in Be)ae.call(Be,We)&&!fe.hasOwnProperty(We)&&(ht[We]=Be[We]);if(g&&g.defaultProps)for(We in Be=g.defaultProps,Be)ht[We]===void 0&&(ht[We]=Be[We]);return{$$typeof:ye,type:g,key:Tt,ref:zt,props:ht,_owner:ve.current}}be.jsx=ee,be.jsxs=ee}),893:((X,be,se)=>{"use strict";X.exports=se(251)}),156:(X=>{"use strict";X.exports=F}),111:(X=>{"use strict";X.exports=x}),608:(X=>{"use strict";X.exports=E}),401:(X=>{"use strict";X.exports=m}),61:((X,be,se)=>{var ge=se(698).default;function ye(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */X.exports=ye=function(){return Z},X.exports.__esModule=!0,X.exports.default=X.exports;var Z={},ve=Object.prototype,ae=ve.hasOwnProperty,fe=Object.defineProperty||function(rt,tt,xt){rt[tt]=xt.value},ee=typeof Symbol=="function"?Symbol:{},g=ee.iterator||"@@iterator",Be=ee.asyncIterator||"@@asyncIterator",Ee=ee.toStringTag||"@@toStringTag";function We(rt,tt,xt){return Object.defineProperty(rt,tt,{value:xt,enumerable:!0,configurable:!0,writable:!0}),rt[tt]}try{We({},"")}catch(rt){We=function(xt,nt,mt){return xt[nt]=mt}}function ht(rt,tt,xt,nt){var mt=tt&&tt.prototype instanceof Wn?tt:Wn,ct=Object.create(mt.prototype),kt=new gn(nt||[]);return fe(ct,"_invoke",{value:kn(rt,xt,kt)}),ct}function Tt(rt,tt,xt){try{return{type:"normal",arg:rt.call(tt,xt)}}catch(nt){return{type:"throw",arg:nt}}}Z.wrap=ht;var zt={};function Wn(){}function ir(){}function Vn(){}var An={};We(An,g,function(){return this});var Bn=Object.getPrototypeOf,ar=Bn&&Bn(Bn(Bt([])));ar&&ar!==ve&&ae.call(ar,g)&&(An=ar);var _n=Vn.prototype=Wn.prototype=Object.create(An);function wt(rt){["next","throw","return"].forEach(function(tt){We(rt,tt,function(xt){return this._invoke(tt,xt)})})}function ln(rt,tt){function xt(mt,ct,kt,Sn){var Rn=Tt(rt[mt],rt,ct);if(Rn.type!=="throw"){var mn=Rn.arg,Lr=mn.value;return Lr&&ge(Lr)=="object"&&ae.call(Lr,"__await")?tt.resolve(Lr.__await).then(function(uo){xt("next",uo,kt,Sn)},function(uo){xt("throw",uo,kt,Sn)}):tt.resolve(Lr).then(function(uo){mn.value=uo,kt(mn)},function(uo){return xt("throw",uo,kt,Sn)})}Sn(Rn.arg)}var nt;fe(this,"_invoke",{value:function(ct,kt){function Sn(){return new tt(function(Rn,mn){xt(ct,kt,Rn,mn)})}return nt=nt?nt.then(Sn,Sn):Sn()}})}function kn(rt,tt,xt){var nt="suspendedStart";return function(mt,ct){if(nt==="executing")throw new Error("Generator is already running");if(nt==="completed"){if(mt==="throw")throw ct;return on()}for(xt.method=mt,xt.arg=ct;;){var kt=xt.delegate;if(kt){var Sn=er(kt,xt);if(Sn){if(Sn===zt)continue;return Sn}}if(xt.method==="next")xt.sent=xt._sent=xt.arg;else if(xt.method==="throw"){if(nt==="suspendedStart")throw nt="completed",xt.arg;xt.dispatchException(xt.arg)}else xt.method==="return"&&xt.abrupt("return",xt.arg);nt="executing";var Rn=Tt(rt,tt,xt);if(Rn.type==="normal"){if(nt=xt.done?"completed":"suspendedYield",Rn.arg===zt)continue;return{value:Rn.arg,done:xt.done}}Rn.type==="throw"&&(nt="completed",xt.method="throw",xt.arg=Rn.arg)}}}function er(rt,tt){var xt=tt.method,nt=rt.iterator[xt];if(nt===void 0)return tt.delegate=null,xt==="throw"&&rt.iterator.return&&(tt.method="return",tt.arg=void 0,er(rt,tt),tt.method==="throw")||xt!=="return"&&(tt.method="throw",tt.arg=new TypeError("The iterator does not provide a '"+xt+"' method")),zt;var mt=Tt(nt,rt.iterator,tt.arg);if(mt.type==="throw")return tt.method="throw",tt.arg=mt.arg,tt.delegate=null,zt;var ct=mt.arg;return ct?ct.done?(tt[rt.resultName]=ct.value,tt.next=rt.nextLoc,tt.method!=="return"&&(tt.method="next",tt.arg=void 0),tt.delegate=null,zt):ct:(tt.method="throw",tt.arg=new TypeError("iterator result is not an object"),tt.delegate=null,zt)}function Oe(rt){var tt={tryLoc:rt[0]};1 in rt&&(tt.catchLoc=rt[1]),2 in rt&&(tt.finallyLoc=rt[2],tt.afterLoc=rt[3]),this.tryEntries.push(tt)}function vt(rt){var tt=rt.completion||{};tt.type="normal",delete tt.arg,rt.completion=tt}function gn(rt){this.tryEntries=[{tryLoc:"root"}],rt.forEach(Oe,this),this.reset(!0)}function Bt(rt){if(rt){var tt=rt[g];if(tt)return tt.call(rt);if(typeof rt.next=="function")return rt;if(!isNaN(rt.length)){var xt=-1,nt=function mt(){for(;++xt<rt.length;)if(ae.call(rt,xt))return mt.value=rt[xt],mt.done=!1,mt;return mt.value=void 0,mt.done=!0,mt};return nt.next=nt}}return{next:on}}function on(){return{value:void 0,done:!0}}return ir.prototype=Vn,fe(_n,"constructor",{value:Vn,configurable:!0}),fe(Vn,"constructor",{value:ir,configurable:!0}),ir.displayName=We(Vn,Ee,"GeneratorFunction"),Z.isGeneratorFunction=function(rt){var tt=typeof rt=="function"&&rt.constructor;return!!tt&&(tt===ir||(tt.displayName||tt.name)==="GeneratorFunction")},Z.mark=function(rt){return Object.setPrototypeOf?Object.setPrototypeOf(rt,Vn):(rt.__proto__=Vn,We(rt,Ee,"GeneratorFunction")),rt.prototype=Object.create(_n),rt},Z.awrap=function(rt){return{__await:rt}},wt(ln.prototype),We(ln.prototype,Be,function(){return this}),Z.AsyncIterator=ln,Z.async=function(rt,tt,xt,nt,mt){mt===void 0&&(mt=Promise);var ct=new ln(ht(rt,tt,xt,nt),mt);return Z.isGeneratorFunction(tt)?ct:ct.next().then(function(kt){return kt.done?kt.value:ct.next()})},wt(_n),We(_n,Ee,"Generator"),We(_n,g,function(){return this}),We(_n,"toString",function(){return"[object Generator]"}),Z.keys=function(rt){var tt=Object(rt),xt=[];for(var nt in tt)xt.push(nt);return xt.reverse(),function mt(){for(;xt.length;){var ct=xt.pop();if(ct in tt)return mt.value=ct,mt.done=!1,mt}return mt.done=!0,mt}},Z.values=Bt,gn.prototype={constructor:gn,reset:function(tt){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(vt),!tt)for(var xt in this)xt.charAt(0)==="t"&&ae.call(this,xt)&&!isNaN(+xt.slice(1))&&(this[xt]=void 0)},stop:function(){this.done=!0;var tt=this.tryEntries[0].completion;if(tt.type==="throw")throw tt.arg;return this.rval},dispatchException:function(tt){if(this.done)throw tt;var xt=this;function nt(mn,Lr){return kt.type="throw",kt.arg=tt,xt.next=mn,Lr&&(xt.method="next",xt.arg=void 0),!!Lr}for(var mt=this.tryEntries.length-1;mt>=0;--mt){var ct=this.tryEntries[mt],kt=ct.completion;if(ct.tryLoc==="root")return nt("end");if(ct.tryLoc<=this.prev){var Sn=ae.call(ct,"catchLoc"),Rn=ae.call(ct,"finallyLoc");if(Sn&&Rn){if(this.prev<ct.catchLoc)return nt(ct.catchLoc,!0);if(this.prev<ct.finallyLoc)return nt(ct.finallyLoc)}else if(Sn){if(this.prev<ct.catchLoc)return nt(ct.catchLoc,!0)}else{if(!Rn)throw new Error("try statement without catch or finally");if(this.prev<ct.finallyLoc)return nt(ct.finallyLoc)}}}},abrupt:function(tt,xt){for(var nt=this.tryEntries.length-1;nt>=0;--nt){var mt=this.tryEntries[nt];if(mt.tryLoc<=this.prev&&ae.call(mt,"finallyLoc")&&this.prev<mt.finallyLoc){var ct=mt;break}}ct&&(tt==="break"||tt==="continue")&&ct.tryLoc<=xt&&xt<=ct.finallyLoc&&(ct=null);var kt=ct?ct.completion:{};return kt.type=tt,kt.arg=xt,ct?(this.method="next",this.next=ct.finallyLoc,zt):this.complete(kt)},complete:function(tt,xt){if(tt.type==="throw")throw tt.arg;return tt.type==="break"||tt.type==="continue"?this.next=tt.arg:tt.type==="return"?(this.rval=this.arg=tt.arg,this.method="return",this.next="end"):tt.type==="normal"&&xt&&(this.next=xt),zt},finish:function(tt){for(var xt=this.tryEntries.length-1;xt>=0;--xt){var nt=this.tryEntries[xt];if(nt.finallyLoc===tt)return this.complete(nt.completion,nt.afterLoc),vt(nt),zt}},catch:function(tt){for(var xt=this.tryEntries.length-1;xt>=0;--xt){var nt=this.tryEntries[xt];if(nt.tryLoc===tt){var mt=nt.completion;if(mt.type==="throw"){var ct=mt.arg;vt(nt)}return ct}}throw new Error("illegal catch attempt")},delegateYield:function(tt,xt,nt){return this.delegate={iterator:Bt(tt),resultName:xt,nextLoc:nt},this.method==="next"&&(this.arg=void 0),zt}},Z}X.exports=ye,X.exports.__esModule=!0,X.exports.default=X.exports}),698:(X=>{function be(se){"@babel/helpers - typeof";return X.exports=be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ge){return typeof ge}:function(ge){return ge&&typeof Symbol=="function"&&ge.constructor===Symbol&&ge!==Symbol.prototype?"symbol":typeof ge},X.exports.__esModule=!0,X.exports.default=X.exports,be(se)}X.exports=be,X.exports.__esModule=!0,X.exports.default=X.exports}),687:((X,be,se)=>{var ge=se(61)();X.exports=ge;try{regeneratorRuntime=ge}catch(ye){typeof globalThis=="object"?globalThis.regeneratorRuntime=ge:Function("r","regeneratorRuntime = r")(ge)}})},J={};function R(X){var be=J[X];if(be!==void 0)return be.exports;var se=J[X]={exports:{}};return d[X](se,se.exports,R),se.exports}R.n=X=>{var be=X&&X.__esModule?()=>X.default:()=>X;return R.d(be,{a:be}),be},R.d=(X,be)=>{for(var se in be)R.o(be,se)&&!R.o(X,se)&&Object.defineProperty(X,se,{enumerable:!0,get:be[se]})},R.o=(X,be)=>Object.prototype.hasOwnProperty.call(X,be),R.r=X=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(X,"__esModule",{value:!0})};var z={};return(()=>{"use strict";R.r(z),R.d(z,{Button:()=>al,ButtonWithIcon:()=>dc,Checkbox:()=>sp,Chip:()=>_l,ClientProvider:()=>Ul,CommandProvider:()=>Ci,ContextMenu:()=>Fu,ContextMenuProvider:()=>df,DecompositionPanel:()=>v0,DecompositionProvider:()=>E0,Dropdown:()=>Ai,DropdownOption:()=>so,Expandable:()=>b0,Highlight:()=>Ch,InfiniteScroll:()=>Wc,Input:()=>ps,LanguageProvider:()=>Hc,Option:()=>Im,OptionGroup:()=>Mm,Popup:()=>fu,PositionInPortal:()=>Ys,PseudoText:()=>qa,ScLangText:()=>Y,ScTag:()=>Nu,ScTagLink:()=>hu,ScUtilsProvider:()=>cc,Scg:()=>pf,Scn:()=>qf,Select:()=>Ah,Skeleton:()=>Ru,Spinner:()=>Il,SwitchScgScn:()=>p,Textarea:()=>lu,Toast:()=>Un,ToastProvider:()=>xa,Toasts:()=>il,Tooltip:()=>wi,Translate:()=>W,arcMap:()=>mc,defaultLightTheme:()=>Lm,getRandomInt:()=>Qr,langToKeynode:()=>os,observeRect:()=>Ou,refSetter:()=>ya,scUtilsBuilder:()=>is,searchKeynodesBuilder:()=>Mu,snakeToCamelCase:()=>zl,useBooleanState:()=>pu,useClickOutside:()=>je,useClient:()=>hl,useCommandContext:()=>Ja,useContextMenu:()=>$c,useDecompositionContext:()=>Bl,useInView:()=>rs,useInfiniteScroll:()=>ju,useInterval:()=>ut,useLanguage:()=>Wl,useLanguageContext:()=>Vc,useScUtils:()=>xl,useToast:()=>Ve,useTranslate:()=>L});function X(r){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},X(r)}function be(r,n){if(X(r)!=="object"||r===null)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var s=i.call(r,n||"default");if(X(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function se(r){var n=be(r,"string");return X(n)==="symbol"?n:String(n)}function ge(r,n,i){return n=se(n),n in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r}function ye(r){if(Array.isArray(r))return r}function Z(r,n){var i=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var s,A,w,T,B=[],N=!0,U=!1;try{if(w=(i=i.call(r)).next,n===0){if(Object(i)!==i)return;N=!1}else for(;!(N=(s=w.call(i)).done)&&(B.push(s.value),B.length!==n);N=!0);}catch(de){U=!0,A=de}finally{try{if(!N&&i.return!=null&&(T=i.return(),Object(T)!==T))return}finally{if(U)throw A}}return B}}function ve(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,s=new Array(n);i<n;i++)s[i]=r[i];return s}function ae(r,n){if(r){if(typeof r=="string")return ve(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return ve(r,n)}}function fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(r,n){return ye(r)||Z(r,n)||ae(r,n)||fe()}var g=R(156);function Be(r){return r.split("-")[1]}function Ee(r){return r==="y"?"height":"width"}function We(r){return r.split("-")[0]}function ht(r){return["top","bottom"].includes(We(r))?"x":"y"}function Tt(r,n,i){let{reference:s,floating:A}=r;const w=s.x+s.width/2-A.width/2,T=s.y+s.height/2-A.height/2,B=ht(n),N=Ee(B),U=s[N]/2-A[N]/2,de=B==="x";let Q;switch(We(n)){case"top":Q={x:w,y:s.y-A.height};break;case"bottom":Q={x:w,y:s.y+s.height};break;case"right":Q={x:s.x+s.width,y:T};break;case"left":Q={x:s.x-A.width,y:T};break;default:Q={x:s.x,y:s.y}}switch(Be(n)){case"start":Q[B]-=U*(i&&de?-1:1);break;case"end":Q[B]+=U*(i&&de?-1:1)}return Q}const zt=(r,n,i)=>Ir(null,null,function*(){const{placement:s="bottom",strategy:A="absolute",middleware:w=[],platform:T}=i,B=w.filter(Boolean),N=yield T.isRTL==null?void 0:T.isRTL(n);let U=yield T.getElementRects({reference:r,floating:n,strategy:A}),{x:de,y:Q}=Tt(U,s,N),te=s,$={},ce=0;for(let me=0;me<B.length;me++){const{name:xe,fn:he}=B[me],{x:we,y:He,data:Ue,reset:Ie}=yield he({x:de,y:Q,initialPlacement:s,placement:te,strategy:A,middlewareData:$,rects:U,platform:T,elements:{reference:r,floating:n}});de=we!=null?we:de,Q=He!=null?He:Q,$=ci(Kn({},$),{[xe]:Kn(Kn({},$[xe]),Ue)}),Ie&&ce<=50&&(ce++,typeof Ie=="object"&&(Ie.placement&&(te=Ie.placement),Ie.rects&&(U=Ie.rects===!0?yield T.getElementRects({reference:r,floating:n,strategy:A}):Ie.rects),{x:de,y:Q}=Tt(U,te,N)),me=-1)}return{x:de,y:Q,placement:te,strategy:A,middlewareData:$}});function Wn(r){return typeof r!="number"?(function(n){return Kn({top:0,right:0,bottom:0,left:0},n)})(r):{top:r,right:r,bottom:r,left:r}}function ir(r){return ci(Kn({},r),{top:r.y,left:r.x,right:r.x+r.width,bottom:r.y+r.height})}function Vn(r,n){return Ir(this,null,function*(){var i;n===void 0&&(n={});const{x:s,y:A,platform:w,rects:T,elements:B,strategy:N}=r,{boundary:U="clippingAncestors",rootBoundary:de="viewport",elementContext:Q="floating",altBoundary:te=!1,padding:$=0}=n,ce=Wn($),me=B[te?Q==="floating"?"reference":"floating":Q],xe=ir(yield w.getClippingRect({element:(i=yield w.isElement==null?void 0:w.isElement(me))==null||i?me:me.contextElement||(yield w.getDocumentElement==null?void 0:w.getDocumentElement(B.floating)),boundary:U,rootBoundary:de,strategy:N})),he=Q==="floating"?ci(Kn({},T.floating),{x:s,y:A}):T.reference,we=yield w.getOffsetParent==null?void 0:w.getOffsetParent(B.floating),He=(yield w.isElement==null?void 0:w.isElement(we))&&(yield w.getScale==null?void 0:w.getScale(we))||{x:1,y:1},Ue=ir(w.convertOffsetParentRelativeRectToViewportRelativeRect?yield w.convertOffsetParentRelativeRectToViewportRelativeRect({rect:he,offsetParent:we,strategy:N}):he);return{top:(xe.top-Ue.top+ce.top)/He.y,bottom:(Ue.bottom-xe.bottom+ce.bottom)/He.y,left:(xe.left-Ue.left+ce.left)/He.x,right:(Ue.right-xe.right+ce.right)/He.x}})}const An=Math.min,Bn=Math.max;function ar(r,n,i){return Bn(r,An(n,i))}const _n=r=>({name:"arrow",options:r,fn(i){return Ir(this,null,function*(){const{element:s,padding:A=0}=r||{},{x:w,y:T,placement:B,rects:N,platform:U,elements:de}=i;if(s==null)return{};const Q=Wn(A),te={x:w,y:T},$=ht(B),ce=Ee($),me=yield U.getDimensions(s),xe=$==="y",he=xe?"top":"left",we=xe?"bottom":"right",He=xe?"clientHeight":"clientWidth",Ue=N.reference[ce]+N.reference[$]-te[$]-N.floating[ce],Ie=te[$]-N.reference[$],ze=yield U.getOffsetParent==null?void 0:U.getOffsetParent(s);let Et=ze?ze[He]:0;Et&&(yield U.isElement==null?void 0:U.isElement(ze))||(Et=de.floating[He]||N.floating[ce]);const Ut=Ue/2-Ie/2,Ot=Q[he],Lt=Et-me[ce]-Q[we],St=Et/2-me[ce]/2+Ut,dt=ar(Ot,St,Lt),Pt=Be(B)!=null&&St!=dt&&N.reference[ce]/2-(St<Ot?Q[he]:Q[we])-me[ce]/2<0;return{[$]:te[$]-(Pt?St<Ot?Ot-St:Lt-St:0),data:{[$]:dt,centerOffset:St-dt}}})}}),wt=["top","right","bottom","left"],ln=wt.reduce(((r,n)=>r.concat(n,n+"-start",n+"-end")),[]),kn={left:"right",right:"left",bottom:"top",top:"bottom"};function er(r){return r.replace(/left|right|bottom|top/g,(n=>kn[n]))}function Oe(r,n,i){i===void 0&&(i=!1);const s=Be(r),A=ht(r),w=Ee(A);let T=A==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return n.reference[w]>n.floating[w]&&(T=er(T)),{main:T,cross:er(T)}}const vt={start:"end",end:"start"};function gn(r){return r.replace(/start|end/g,(n=>vt[n]))}const Bt=function(r){return r===void 0&&(r={}),{name:"autoPlacement",options:r,fn(i){return Ir(this,null,function*(){var s,A,w;const{rects:T,middlewareData:B,placement:N,platform:U,elements:de}=i,St=r,{crossAxis:Q=!1,alignment:te,allowedPlacements:$=ln,autoAlignment:ce=!0}=St,me=qu(St,["crossAxis","alignment","allowedPlacements","autoAlignment"]),xe=te!==void 0||$===ln?(function(dt,Pt,Je){return(dt?[...Je.filter((Rt=>Be(Rt)===dt)),...Je.filter((Rt=>Be(Rt)!==dt))]:Je.filter((Rt=>We(Rt)===Rt))).filter((Rt=>!dt||Be(Rt)===dt||!!Pt&&gn(Rt)!==Rt))})(te||null,ce,$):$,he=yield Vn(i,me),we=((s=B.autoPlacement)==null?void 0:s.index)||0,He=xe[we];if(He==null)return{};const{main:Ue,cross:Ie}=Oe(He,T,yield U.isRTL==null?void 0:U.isRTL(de.floating));if(N!==He)return{reset:{placement:xe[0]}};const ze=[he[We(He)],he[Ue],he[Ie]],Et=[...((A=B.autoPlacement)==null?void 0:A.overflows)||[],{placement:He,overflows:ze}],Ut=xe[we+1];if(Ut)return{data:{index:we+1,overflows:Et},reset:{placement:Ut}};const Ot=Et.map((dt=>{const Pt=Be(dt.placement);return[dt.placement,Pt&&Q?dt.overflows.slice(0,2).reduce(((Je,Rt)=>Je+Rt),0):dt.overflows[0],dt.overflows]})).sort(((dt,Pt)=>dt[1]-Pt[1])),Lt=((w=Ot.filter((dt=>dt[2].slice(0,Be(dt[0])?2:3).every((Pt=>Pt<=0))))[0])==null?void 0:w[0])||Ot[0][0];return Lt!==N?{data:{index:we+1,overflows:Et},reset:{placement:Lt}}:{}})}}},on=function(r){return r===void 0&&(r={}),{name:"flip",options:r,fn(i){return Ir(this,null,function*(){var s;const{placement:A,middlewareData:w,rects:T,initialPlacement:B,platform:N,elements:U}=i,dt=r,{mainAxis:de=!0,crossAxis:Q=!0,fallbackPlacements:te,fallbackStrategy:$="bestFit",fallbackAxisSideDirection:ce="none",flipAlignment:me=!0}=dt,xe=qu(dt,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),he=We(A),we=We(B)===B,He=yield N.isRTL==null?void 0:N.isRTL(U.floating),Ue=te||(we||!me?[er(B)]:(function(Pt){const Je=er(Pt);return[gn(Pt),Je,gn(Je)]})(B));te||ce==="none"||Ue.push(...(function(Pt,Je,Rt,Zt){const en=Be(Pt);let hn=(function(Wt,Pn,pn){const dn=["left","right"],Jn=["right","left"],Hr=["top","bottom"],Ko=["bottom","top"];switch(Wt){case"top":case"bottom":return pn?Pn?Jn:dn:Pn?dn:Jn;case"left":case"right":return Pn?Hr:Ko;default:return[]}})(We(Pt),Rt==="start",Zt);return en&&(hn=hn.map((Wt=>Wt+"-"+en)),Je&&(hn=hn.concat(hn.map(gn)))),hn})(B,me,ce,He));const Ie=[B,...Ue],ze=yield Vn(i,xe),Et=[];let Ut=((s=w.flip)==null?void 0:s.overflows)||[];if(de&&Et.push(ze[he]),Q){const{main:Pt,cross:Je}=Oe(A,T,He);Et.push(ze[Pt],ze[Je])}if(Ut=[...Ut,{placement:A,overflows:Et}],!Et.every((Pt=>Pt<=0))){var Ot,Lt;const Pt=(((Ot=w.flip)==null?void 0:Ot.index)||0)+1,Je=Ie[Pt];if(Je)return{data:{index:Pt,overflows:Ut},reset:{placement:Je}};let Rt=(Lt=Ut.filter((Zt=>Zt.overflows[0]<=0)).sort(((Zt,en)=>Zt.overflows[1]-en.overflows[1]))[0])==null?void 0:Lt.placement;if(!Rt)switch($){case"bestFit":{var St;const Zt=(St=Ut.map((en=>[en.placement,en.overflows.filter((hn=>hn>0)).reduce(((hn,Wt)=>hn+Wt),0)])).sort(((en,hn)=>en[1]-hn[1]))[0])==null?void 0:St[0];Zt&&(Rt=Zt);break}case"initialPlacement":Rt=B}if(A!==Rt)return{reset:{placement:Rt}}}return{}})}}};function rt(r,n){return{top:r.top-n.height,right:r.right-n.width,bottom:r.bottom-n.height,left:r.left-n.width}}function tt(r){return wt.some((n=>r[n]>=0))}const xt=function(r){return r===void 0&&(r={}),{name:"hide",options:r,fn(i){return Ir(this,null,function*(){const T=r,{strategy:s="referenceHidden"}=T,A=qu(T,["strategy"]),{rects:w}=i;switch(s){case"referenceHidden":{const B=rt(yield Vn(i,ci(Kn({},A),{elementContext:"reference"})),w.reference);return{data:{referenceHiddenOffsets:B,referenceHidden:tt(B)}}}case"escaped":{const B=rt(yield Vn(i,ci(Kn({},A),{altBoundary:!0})),w.floating);return{data:{escapedOffsets:B,escaped:tt(B)}}}default:return{}}})}}};function nt(r){const n=An(...r.map((s=>s.left))),i=An(...r.map((s=>s.top)));return{x:n,y:i,width:Bn(...r.map((s=>s.right)))-n,height:Bn(...r.map((s=>s.bottom)))-i}}const mt=function(r){return r===void 0&&(r={}),{name:"inline",options:r,fn(i){return Ir(this,null,function*(){const{placement:s,elements:A,rects:w,platform:T,strategy:B}=i,{padding:N=2,x:U,y:de}=r,Q=Array.from((yield T.getClientRects==null?void 0:T.getClientRects(A.reference))||[]),te=(function(xe){const he=xe.slice().sort(((Ue,Ie)=>Ue.y-Ie.y)),we=[];let He=null;for(let Ue=0;Ue<he.length;Ue++){const Ie=he[Ue];!He||Ie.y-He.y>He.height/2?we.push([Ie]):we[we.length-1].push(Ie),He=Ie}return we.map((Ue=>ir(nt(Ue))))})(Q),$=ir(nt(Q)),ce=Wn(N),me=yield T.getElementRects({reference:{getBoundingClientRect:function(){if(te.length===2&&te[0].left>te[1].right&&U!=null&&de!=null)return te.find((xe=>U>xe.left-ce.left&&U<xe.right+ce.right&&de>xe.top-ce.top&&de<xe.bottom+ce.bottom))||$;if(te.length>=2){if(ht(s)==="x"){const ze=te[0],Et=te[te.length-1],Ut=We(s)==="top",Ot=ze.top,Lt=Et.bottom,St=Ut?ze.left:Et.left,dt=Ut?ze.right:Et.right;return{top:Ot,bottom:Lt,left:St,right:dt,width:dt-St,height:Lt-Ot,x:St,y:Ot}}const xe=We(s)==="left",he=Bn(...te.map((ze=>ze.right))),we=An(...te.map((ze=>ze.left))),He=te.filter((ze=>xe?ze.left===we:ze.right===he)),Ue=He[0].top,Ie=He[He.length-1].bottom;return{top:Ue,bottom:Ie,left:we,right:he,width:he-we,height:Ie-Ue,x:we,y:Ue}}return $}},floating:A.floating,strategy:B});return w.reference.x!==me.reference.x||w.reference.y!==me.reference.y||w.reference.width!==me.reference.width||w.reference.height!==me.reference.height?{reset:{rects:me}}:{}})}}},ct=function(r){return r===void 0&&(r=0),{name:"offset",options:r,fn(i){return Ir(this,null,function*(){const{x:s,y:A}=i,w=yield(function(T,B){return Ir(this,null,function*(){const{placement:N,platform:U,elements:de}=T,Q=yield U.isRTL==null?void 0:U.isRTL(de.floating),te=We(N),$=Be(N),ce=ht(N)==="x",me=["left","top"].includes(te)?-1:1,xe=Q&&ce?-1:1,he=typeof B=="function"?B(T):B;let{mainAxis:we,crossAxis:He,alignmentAxis:Ue}=typeof he=="number"?{mainAxis:he,crossAxis:0,alignmentAxis:null}:Kn({mainAxis:0,crossAxis:0,alignmentAxis:null},he);return $&&typeof Ue=="number"&&(He=$==="end"?-1*Ue:Ue),ce?{x:He*xe,y:we*me}:{x:we*me,y:He*xe}})})(i,r);return{x:s+w.x,y:A+w.y,data:w}})}}};function kt(r){return r==="x"?"y":"x"}const Sn=function(r){return r===void 0&&(r={}),{name:"shift",options:r,fn(i){return Ir(this,null,function*(){const{x:s,y:A,placement:w}=i,he=r,{mainAxis:T=!0,crossAxis:B=!1,limiter:N={fn:we=>{let{x:He,y:Ue}=we;return{x:He,y:Ue}}}}=he,U=qu(he,["mainAxis","crossAxis","limiter"]),de={x:s,y:A},Q=yield Vn(i,U),te=ht(We(w)),$=kt(te);let ce=de[te],me=de[$];if(T){const we=te==="y"?"bottom":"right";ce=ar(ce+Q[te==="y"?"top":"left"],ce,ce-Q[we])}if(B){const we=$==="y"?"bottom":"right";me=ar(me+Q[$==="y"?"top":"left"],me,me-Q[we])}const xe=N.fn(ci(Kn({},i),{[te]:ce,[$]:me}));return ci(Kn({},xe),{data:{x:xe.x-s,y:xe.y-A}})})}}},Rn=function(r){return r===void 0&&(r={}),{options:r,fn(n){const{x:i,y:s,placement:A,rects:w,middlewareData:T}=n,{offset:B=0,mainAxis:N=!0,crossAxis:U=!0}=r,de={x:i,y:s},Q=ht(A),te=kt(Q);let $=de[Q],ce=de[te];const me=typeof B=="function"?B(n):B,xe=typeof me=="number"?{mainAxis:me,crossAxis:0}:Kn({mainAxis:0,crossAxis:0},me);if(N){const He=Q==="y"?"height":"width",Ue=w.reference[Q]-w.floating[He]+xe.mainAxis,Ie=w.reference[Q]+w.reference[He]-xe.mainAxis;$<Ue?$=Ue:$>Ie&&($=Ie)}if(U){var he,we;const He=Q==="y"?"width":"height",Ue=["top","left"].includes(We(A)),Ie=w.reference[te]-w.floating[He]+(Ue&&((he=T.offset)==null?void 0:he[te])||0)+(Ue?0:xe.crossAxis),ze=w.reference[te]+w.reference[He]+(Ue?0:((we=T.offset)==null?void 0:we[te])||0)-(Ue?xe.crossAxis:0);ce<Ie?ce=Ie:ce>ze&&(ce=ze)}return{[Q]:$,[te]:ce}}}},mn=function(r){return r===void 0&&(r={}),{name:"size",options:r,fn(i){return Ir(this,null,function*(){const{placement:s,rects:A,platform:w,elements:T}=i,Et=r,{apply:B=(()=>{})}=Et,N=qu(Et,["apply"]),U=yield Vn(i,N),de=We(s),Q=Be(s),te=ht(s)==="x",{width:$,height:ce}=A.floating;let me,xe;de==="top"||de==="bottom"?(me=de,xe=Q===((yield w.isRTL==null?void 0:w.isRTL(T.floating))?"start":"end")?"left":"right"):(xe=de,me=Q==="end"?"top":"bottom");const he=ce-U[me],we=$-U[xe],He=!i.middlewareData.shift;let Ue=he,Ie=we;if(te){const Ut=$-U.left-U.right;Ie=Q||He?An(we,Ut):Ut}else{const Ut=ce-U.top-U.bottom;Ue=Q||He?An(he,Ut):Ut}if(He&&!Q){const Ut=Bn(U.left,0),Ot=Bn(U.right,0),Lt=Bn(U.top,0),St=Bn(U.bottom,0);te?Ie=$-2*(Ut!==0||Ot!==0?Ut+Ot:Bn(U.left,U.right)):Ue=ce-2*(Lt!==0||St!==0?Lt+St:Bn(U.top,U.bottom))}yield B(ci(Kn({},i),{availableWidth:Ie,availableHeight:Ue}));const ze=yield w.getDimensions(T.floating);return $!==ze.width||ce!==ze.height?{reset:{rects:!0}}:{}})}}};function Lr(r){var n;return((n=r.ownerDocument)==null?void 0:n.defaultView)||window}function uo(r){return Lr(r).getComputedStyle(r)}function _i(r){return r instanceof Lr(r).Node}function Nr(r){return _i(r)?(r.nodeName||"").toLowerCase():""}let Po;function di(){if(Po)return Po;const r=navigator.userAgentData;return r&&Array.isArray(r.brands)?(Po=r.brands.map((n=>n.brand+"/"+n.version)).join(" "),Po):navigator.userAgent}function xo(r){return r instanceof Lr(r).HTMLElement}function So(r){return r instanceof Lr(r).Element}function Ra(r){return typeof ShadowRoot=="undefined"?!1:r instanceof Lr(r).ShadowRoot||r instanceof ShadowRoot}function Gr(r){const{overflow:n,overflowX:i,overflowY:s,display:A}=uo(r);return/auto|scroll|overlay|hidden|clip/.test(n+s+i)&&!["inline","contents"].includes(A)}function Ga(r){return["table","td","th"].includes(Nr(r))}function Nn(r){const n=/firefox/i.test(di()),i=uo(r),s=i.backdropFilter||i.WebkitBackdropFilter;return i.transform!=="none"||i.perspective!=="none"||!!s&&s!=="none"||n&&i.willChange==="filter"||n&&!!i.filter&&i.filter!=="none"||["transform","perspective"].some((A=>i.willChange.includes(A)))||["paint","layout","strict","content"].some((A=>{const w=i.contain;return w!=null&&w.includes(A)}))}function vr(){return/^((?!chrome|android).)*safari/i.test(di())}function $n(r){return["html","body","#document"].includes(Nr(r))}const an=Math.min,wr=Math.max,zn=Math.round;function Ze(r){const n=uo(r);let i=parseFloat(n.width)||0,s=parseFloat(n.height)||0;const A=xo(r),w=A?r.offsetWidth:i,T=A?r.offsetHeight:s,B=zn(i)!==w||zn(s)!==T;return B&&(i=w,s=T),{width:i,height:s,fallback:B}}function Ar(r){return So(r)?r:r.contextElement}const Zn={x:1,y:1};function Kr(r){const n=Ar(r);if(!xo(n))return Zn;const i=n.getBoundingClientRect(),{width:s,height:A,fallback:w}=Ze(n);let T=(w?zn(i.width):i.width)/s,B=(w?zn(i.height):i.height)/A;return T&&Number.isFinite(T)||(T=1),B&&Number.isFinite(B)||(B=1),{x:T,y:B}}function Bo(r,n,i,s){var A,w;n===void 0&&(n=!1),i===void 0&&(i=!1);const T=r.getBoundingClientRect(),B=Ar(r);let N=Zn;n&&(s?So(s)&&(N=Kr(s)):N=Kr(r));const U=B?Lr(B):window,de=vr()&&i;let Q=(T.left+(de&&((A=U.visualViewport)==null?void 0:A.offsetLeft)||0))/N.x,te=(T.top+(de&&((w=U.visualViewport)==null?void 0:w.offsetTop)||0))/N.y,$=T.width/N.x,ce=T.height/N.y;if(B){const me=Lr(B),xe=s&&So(s)?Lr(s):s;let he=me.frameElement;for(;he&&s&&xe!==me;){const we=Kr(he),He=he.getBoundingClientRect(),Ue=getComputedStyle(he);He.x+=(he.clientLeft+parseFloat(Ue.paddingLeft))*we.x,He.y+=(he.clientTop+parseFloat(Ue.paddingTop))*we.y,Q*=we.x,te*=we.y,$*=we.x,ce*=we.y,Q+=He.x,te+=He.y,he=Lr(he).frameElement}}return ir({width:$,height:ce,x:Q,y:te})}function co(r){return((_i(r)?r.ownerDocument:r.document)||window.document).documentElement}function ko(r){return So(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Cr(r){return Bo(co(r)).left+ko(r).scrollLeft}function to(r){if(Nr(r)==="html")return r;const n=r.assignedSlot||r.parentNode||Ra(r)&&r.host||co(r);return Ra(n)?n.host:n}function No(r){const n=to(r);return $n(n)?n.ownerDocument.body:xo(n)&&Gr(n)?n:No(n)}function _r(r,n){var i;n===void 0&&(n=[]);const s=No(r),A=s===((i=r.ownerDocument)==null?void 0:i.body),w=Lr(s);return A?n.concat(w,w.visualViewport||[],Gr(s)?s:[]):n.concat(s,_r(s))}function io(r,n,i){let s;if(n==="viewport")s=(function(T,B){const N=Lr(T),U=co(T),de=N.visualViewport;let Q=U.clientWidth,te=U.clientHeight,$=0,ce=0;if(de){Q=de.width,te=de.height;const me=vr();(!me||me&&B==="fixed")&&($=de.offsetLeft,ce=de.offsetTop)}return{width:Q,height:te,x:$,y:ce}})(r,i);else if(n==="document")s=(function(T){const B=co(T),N=ko(T),U=T.ownerDocument.body,de=wr(B.scrollWidth,B.clientWidth,U.scrollWidth,U.clientWidth),Q=wr(B.scrollHeight,B.clientHeight,U.scrollHeight,U.clientHeight);let te=-N.scrollLeft+Cr(T);const $=-N.scrollTop;return uo(U).direction==="rtl"&&(te+=wr(B.clientWidth,U.clientWidth)-de),{width:de,height:Q,x:te,y:$}})(co(r));else if(So(n))s=(function(T,B){const N=Bo(T,!0,B==="fixed"),U=N.top+T.clientTop,de=N.left+T.clientLeft,Q=xo(T)?Kr(T):{x:1,y:1};return{width:T.clientWidth*Q.x,height:T.clientHeight*Q.y,x:de*Q.x,y:U*Q.y}})(n,i);else{const T=Kn({},n);if(vr()){var A,w;const B=Lr(r);T.x-=((A=B.visualViewport)==null?void 0:A.offsetLeft)||0,T.y-=((w=B.visualViewport)==null?void 0:w.offsetTop)||0}s=T}return ir(s)}function Mr(r,n){const i=to(r);return!(i===n||!So(i)||$n(i))&&(uo(i).position==="fixed"||Mr(i,n))}function fi(r,n){return xo(r)&&uo(r).position!=="fixed"?n?n(r):r.offsetParent:null}function Ji(r,n){const i=Lr(r);if(!xo(r))return i;let s=fi(r,n);for(;s&&Ga(s)&&uo(s).position==="static";)s=fi(s,n);return s&&(Nr(s)==="html"||Nr(s)==="body"&&uo(s).position==="static"&&!Nn(s))?i:s||(function(A){let w=to(A);for(;xo(w)&&!$n(w);){if(Nn(w))return w;w=to(w)}return null})(r)||i}function Qe(r,n,i){const s=xo(n),A=co(n),w=Bo(r,!0,i==="fixed",n);let T={scrollLeft:0,scrollTop:0};const B={x:0,y:0};if(s||!s&&i!=="fixed")if((Nr(n)!=="body"||Gr(A))&&(T=ko(n)),xo(n)){const N=Bo(n,!0);B.x=N.x+n.clientLeft,B.y=N.y+n.clientTop}else A&&(B.x=Cr(A));return{x:w.left+T.scrollLeft-B.x,y:w.top+T.scrollTop-B.y,width:w.width,height:w.height}}const Ye={getClippingRect:function(r){let{element:n,boundary:i,rootBoundary:s,strategy:A}=r;const w=i==="clippingAncestors"?(function(U,de){const Q=de.get(U);if(Q)return Q;let te=_r(U).filter((xe=>So(xe)&&Nr(xe)!=="body")),$=null;const ce=uo(U).position==="fixed";let me=ce?to(U):U;for(;So(me)&&!$n(me);){const xe=uo(me),he=Nn(me);he||xe.position!=="fixed"||($=null),(ce?!he&&!$:!he&&xe.position==="static"&&$&&["absolute","fixed"].includes($.position)||Gr(me)&&!he&&Mr(U,me))?te=te.filter((we=>we!==me)):$=xe,me=to(me)}return de.set(U,te),te})(n,this._c):[].concat(i),T=[...w,s],B=T[0],N=T.reduce(((U,de)=>{const Q=io(n,de,A);return U.top=wr(Q.top,U.top),U.right=an(Q.right,U.right),U.bottom=an(Q.bottom,U.bottom),U.left=wr(Q.left,U.left),U}),io(n,B,A));return{width:N.right-N.left,height:N.bottom-N.top,x:N.left,y:N.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(r){let{rect:n,offsetParent:i,strategy:s}=r;const A=xo(i),w=co(i);if(i===w)return n;let T={scrollLeft:0,scrollTop:0},B={x:1,y:1};const N={x:0,y:0};if((A||!A&&s!=="fixed")&&((Nr(i)!=="body"||Gr(w))&&(T=ko(i)),xo(i))){const U=Bo(i);B=Kr(i),N.x=U.x+i.clientLeft,N.y=U.y+i.clientTop}return{width:n.width*B.x,height:n.height*B.y,x:n.x*B.x-T.scrollLeft*B.x+N.x,y:n.y*B.y-T.scrollTop*B.y+N.y}},isElement:So,getDimensions:function(r){return Ze(r)},getOffsetParent:Ji,getDocumentElement:co,getScale:Kr,getElementRects(r){return Ir(this,null,function*(){let{reference:n,floating:i,strategy:s}=r;const A=this.getOffsetParent||Ji,w=this.getDimensions;return{reference:Qe(n,yield A(i),s),floating:Kn({x:0,y:0},yield w(i))}})},getClientRects:r=>Array.from(r.getClientRects()),isRTL:r=>uo(r).direction==="rtl"};function Ct(r,n,i,s){s===void 0&&(s={});const{ancestorScroll:A=!0,ancestorResize:w=!0,elementResize:T=!0,animationFrame:B=!1}=s,N=A||w?[...So(r)?_r(r):r.contextElement?_r(r.contextElement):[],..._r(n)]:[];N.forEach((te=>{const $=!So(te)&&te.toString().includes("V");!A||B&&!$||te.addEventListener("scroll",i,{passive:!0}),w&&te.addEventListener("resize",i)}));let U,de=null;T&&(de=new ResizeObserver((()=>{i()})),So(r)&&!B&&de.observe(r),So(r)||!r.contextElement||B||de.observe(r.contextElement),de.observe(n));let Q=B?Bo(r):null;return B&&(function te(){const $=Bo(r);!Q||$.x===Q.x&&$.y===Q.y&&$.width===Q.width&&$.height===Q.height||i(),Q=$,U=requestAnimationFrame(te)})(),i(),()=>{var te;N.forEach(($=>{A&&$.removeEventListener("scroll",i),w&&$.removeEventListener("resize",i)})),(te=de)==null||te.disconnect(),de=null,B&&cancelAnimationFrame(U)}}const Nt=(r,n,i)=>{const s=new Map,A=Kn({platform:Ye},i),w=ci(Kn({},A.platform),{_c:s});return zt(r,n,ci(Kn({},A),{platform:w}))};var qt=R(111),En=R.n(qt);const wn=r=>{const{element:n,padding:i}=r;function s(A){return{}.hasOwnProperty.call(A,"current")}return{name:"arrow",options:r,fn(A){return n&&s(n)?n.current!=null?arrow$1({element:n.current,padding:i}).fn(A):{}:n?arrow$1({element:n,padding:i}).fn(A):{}}}};var Yn=typeof document!="undefined"?g.useLayoutEffect:g.useEffect;function fr(r,n){if(r===n)return!0;if(typeof r!=typeof n)return!1;if(typeof r=="function"&&r.toString()===n.toString())return!0;let i,s,A;if(r&&n&&typeof r=="object"){if(Array.isArray(r)){if(i=r.length,i!=n.length)return!1;for(s=i;s--!==0;)if(!fr(r[s],n[s]))return!1;return!0}if(A=Object.keys(r),i=A.length,i!==Object.keys(n).length)return!1;for(s=i;s--!==0;)if(!{}.hasOwnProperty.call(n,A[s]))return!1;for(s=i;s--!==0;){const w=A[s];if(!(w==="_owner"&&r.$$typeof)&&!fr(r[w],n[w]))return!1}return!0}return r!==r&&n!==n}function gr(r){return typeof window=="undefined"?1:(r.ownerDocument.defaultView||window).devicePixelRatio||1}function rr(r,n){const i=gr(r);return Math.round(n*i)/i}function Fn(r){const n=g.useRef(r);return Yn(()=>{n.current=r}),n}function Xr(r){r===void 0&&(r={});const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:A,elements:{reference:w,floating:T}={},transform:B=!0,whileElementsMounted:N,open:U}=r,[de,Q]=g.useState({x:0,y:0,strategy:i,placement:n,middlewareData:{},isPositioned:!1}),[te,$]=g.useState(s);fr(te,s)||$(s);const[ce,me]=g.useState(null),[xe,he]=g.useState(null),we=g.useCallback(Zt=>{Zt!=ze.current&&(ze.current=Zt,me(Zt))},[me]),He=g.useCallback(Zt=>{Zt!==Et.current&&(Et.current=Zt,he(Zt))},[he]),Ue=w||ce,Ie=T||xe,ze=g.useRef(null),Et=g.useRef(null),Ut=g.useRef(de),Ot=Fn(N),Lt=Fn(A),St=g.useCallback(()=>{if(!ze.current||!Et.current)return;const Zt={placement:n,strategy:i,middleware:te};Lt.current&&(Zt.platform=Lt.current),Nt(ze.current,Et.current,Zt).then(en=>{const hn=ci(Kn({},en),{isPositioned:!0});dt.current&&!fr(Ut.current,hn)&&(Ut.current=hn,qt.flushSync(()=>{Q(hn)}))})},[te,n,i,Lt]);Yn(()=>{U===!1&&Ut.current.isPositioned&&(Ut.current.isPositioned=!1,Q(Zt=>ci(Kn({},Zt),{isPositioned:!1})))},[U]);const dt=g.useRef(!1);Yn(()=>(dt.current=!0,()=>{dt.current=!1}),[]),Yn(()=>{if(Ue&&(ze.current=Ue),Ie&&(Et.current=Ie),Ue&&Ie){if(Ot.current)return Ot.current(Ue,Ie,St);St()}},[Ue,Ie,St,Ot]);const Pt=g.useMemo(()=>({reference:ze,floating:Et,setReference:we,setFloating:He}),[we,He]),Je=g.useMemo(()=>({reference:Ue,floating:Ie}),[Ue,Ie]),Rt=g.useMemo(()=>{const Zt={position:i,left:0,top:0};if(!Je.floating)return Zt;const en=rr(Je.floating,de.x),hn=rr(Je.floating,de.y);return B?Kn(ci(Kn({},Zt),{transform:"translate("+en+"px, "+hn+"px)"}),gr(Je.floating)>=1.5&&{willChange:"transform"}):{position:i,left:en,top:hn}},[i,B,Je.floating,de.x,de.y]);return g.useMemo(()=>ci(Kn({},de),{update:St,refs:Pt,elements:Je,floatingStyles:Rt}),[de,St,Pt,Je,Rt])}function fo(){return fo=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},fo.apply(this,arguments)}var bn=typeof document!="undefined"?g.useLayoutEffect:g.useEffect;let pi=!1,hi=0;const mi=()=>"floating-ui-"+hi++;function po(){const[r,n]=g.useState(()=>pi?mi():void 0);return bn(()=>{r==null&&n(mi())},[]),g.useEffect(()=>{pi||(pi=!0)},[]),r}const fa=g.useId||po,Si=null;function Ei(){const r=new Map;return{emit(n,i){var s;(s=r.get(n))==null||s.forEach(A=>A(i))},on(n,i){r.set(n,[...r.get(n)||[],i])},off(n,i){var s;r.set(n,((s=r.get(n))==null?void 0:s.filter(A=>A!==i))||[])}}}const ja=g.createContext(null),Sr=g.createContext(null),bi=()=>{var r;return((r=g.useContext(ja))==null?void 0:r.id)||null},xr=()=>g.useContext(Sr);function aa(r){const n=fa(),i=xr(),s=bi(),A=r||s;return bn(()=>{const w={id:n,parentId:A};return i==null||i.addNode(w),()=>{i==null||i.removeNode(w)}},[i,n,A]),n}function Oi(r){let{children:n,id:i}=r;const s=bi();return React.createElement(ja.Provider,{value:React.useMemo(()=>({id:i,parentId:s}),[i,s])},n)}function pa(r){let{children:n}=r;const i=React.useRef([]),s=React.useCallback(T=>{i.current=[...i.current,T]},[]),A=React.useCallback(T=>{i.current=i.current.filter(B=>B!==T)},[]),w=React.useState(()=>Ei())[0];return React.createElement(Sr.Provider,{value:React.useMemo(()=>({nodesRef:i,addNode:s,removeNode:A,events:w}),[i,s,A,w])},n)}function Wr(r){return(r==null?void 0:r.ownerDocument)||document}function ha(){const r=navigator.userAgentData;return r!=null&&r.platform?r.platform:navigator.platform}function Fo(){const r=navigator.userAgentData;return r&&Array.isArray(r.brands)?r.brands.map(n=>{let{brand:i,version:s}=n;return i+"/"+s}).join(" "):navigator.userAgent}function Yr(r){return Wr(r).defaultView||window}function Gt(r){return r?r instanceof Yr(r).Element:!1}function ea(r){return r?r instanceof Yr(r).HTMLElement:!1}function Xa(r){if(typeof ShadowRoot=="undefined")return!1;const n=Yr(r).ShadowRoot;return r instanceof n||r instanceof ShadowRoot}function Ri(r){if(r.mozInputSource===0&&r.isTrusted)return!0;const n=/Android/i;return(n.test(ha())||n.test(Fo()))&&r.pointerType?r.type==="click"&&r.buttons===1:r.detail===0&&!r.pointerType}function Oo(r){return r.width===0&&r.height===0||r.width===1&&r.height===1&&r.pressure===0&&r.detail===0&&r.pointerType!=="mouse"||r.width<1&&r.height<1&&r.pressure===0&&r.detail===0}function sa(){return/apple/i.test(navigator.vendor)}function Fr(){return ha().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function ji(r,n){const i=["mouse","pen"];return n||i.push("",void 0),i.includes(r)}function Br(r,n){if(!r||!n)return!1;const i=n.getRootNode&&n.getRootNode();if(r.contains(n))return!0;if(i&&Xa(i)){let s=n;for(;s;){if(r===s)return!0;s=s.parentNode||s.host}}return!1}function ni(r){const n=(0,g.useRef)(r);return bn(()=>{n.current=r}),n}const Io="data-floating-ui-safe-polygon";function Ni(r,n,i){return i&&!ji(i)?0:typeof r=="number"?r:r==null?void 0:r[n]}function Xo(r,n){n===void 0&&(n={});const{open:i,onOpenChange:s,dataRef:A,events:w,elements:{domReference:T,floating:B},refs:N}=r,{enabled:U=!0,delay:de=0,handleClose:Q=null,mouseOnly:te=!1,restMs:$=0,move:ce=!0}=n,me=xr(),xe=bi(),he=ni(Q),we=ni(de),He=g.useRef(),Ue=g.useRef(),Ie=g.useRef(),ze=g.useRef(),Et=g.useRef(!0),Ut=g.useRef(!1),Ot=g.useRef(()=>{}),Lt=g.useCallback(()=>{var Je;const Rt=(Je=A.current.openEvent)==null?void 0:Je.type;return(Rt==null?void 0:Rt.includes("mouse"))&&Rt!=="mousedown"},[A]);g.useEffect(()=>{if(!U)return;function Je(){clearTimeout(Ue.current),clearTimeout(ze.current),Et.current=!0}return w.on("dismiss",Je),()=>{w.off("dismiss",Je)}},[U,w]),g.useEffect(()=>{if(!U||!he.current||!i)return;function Je(){Lt()&&s(!1)}const Rt=Wr(B).documentElement;return Rt.addEventListener("mouseleave",Je),()=>{Rt.removeEventListener("mouseleave",Je)}},[B,i,s,U,he,A,Lt]);const St=g.useCallback(function(Je){Je===void 0&&(Je=!0);const Rt=Ni(we.current,"close",He.current);Rt&&!Ie.current?(clearTimeout(Ue.current),Ue.current=setTimeout(()=>s(!1),Rt)):Je&&(clearTimeout(Ue.current),s(!1))},[we,s]),dt=g.useCallback(()=>{Ot.current(),Ie.current=void 0},[]),Pt=g.useCallback(()=>{if(Ut.current){const Je=Wr(N.floating.current).body;Je.style.pointerEvents="",Je.removeAttribute(Io),Ut.current=!1}},[N]);return g.useEffect(()=>{if(!U)return;function Je(){return A.current.openEvent?["click","mousedown"].includes(A.current.openEvent.type):!1}function Rt(hn){if(clearTimeout(Ue.current),Et.current=!1,te&&!ji(He.current)||$>0&&Ni(we.current,"open")===0)return;A.current.openEvent=hn;const Wt=Ni(we.current,"open",He.current);Wt?Ue.current=setTimeout(()=>{s(!0)},Wt):s(!0)}function Zt(hn){if(Je())return;Ot.current();const Wt=Wr(B);if(clearTimeout(ze.current),he.current){i||clearTimeout(Ue.current),Ie.current=he.current(ci(Kn({},r),{tree:me,x:hn.clientX,y:hn.clientY,onClose(){Pt(),dt(),St()}}));const pn=Ie.current;Wt.addEventListener("mousemove",pn),Ot.current=()=>{Wt.removeEventListener("mousemove",pn)};return}(He.current!=="touch"||!Br(B,hn.relatedTarget))&&St()}function en(hn){Je()||he.current==null||he.current(ci(Kn({},r),{tree:me,x:hn.clientX,y:hn.clientY,onClose(){Pt(),dt(),St()}}))(hn)}if(Gt(T)){const hn=T;return i&&hn.addEventListener("mouseleave",en),B==null||B.addEventListener("mouseleave",en),ce&&hn.addEventListener("mousemove",Rt,{once:!0}),hn.addEventListener("mouseenter",Rt),hn.addEventListener("mouseleave",Zt),()=>{i&&hn.removeEventListener("mouseleave",en),B==null||B.removeEventListener("mouseleave",en),ce&&hn.removeEventListener("mousemove",Rt),hn.removeEventListener("mouseenter",Rt),hn.removeEventListener("mouseleave",Zt)}}},[T,B,U,r,te,$,ce,St,dt,Pt,s,i,me,we,he,A]),bn(()=>{var Je;if(U&&i&&(Je=he.current)!=null&&Je.__options.blockPointerEvents&&Lt()){const en=Wr(B).body;if(en.setAttribute(Io,""),en.style.pointerEvents="none",Ut.current=!0,Gt(T)&&B){var Rt,Zt;const hn=T,Wt=me==null||(Rt=me.nodesRef.current.find(Pn=>Pn.id===xe))==null||(Zt=Rt.context)==null?void 0:Zt.elements.floating;return Wt&&(Wt.style.pointerEvents=""),hn.style.pointerEvents="auto",B.style.pointerEvents="auto",()=>{hn.style.pointerEvents="",B.style.pointerEvents=""}}}},[U,i,xe,B,T,me,he,A,Lt]),bn(()=>{i||(He.current=void 0,dt(),Pt())},[i,dt,Pt]),g.useEffect(()=>()=>{dt(),clearTimeout(Ue.current),clearTimeout(ze.current),Pt()},[U,dt,Pt]),g.useMemo(()=>{if(!U)return{};function Je(Rt){He.current=Rt.pointerType}return{reference:{onPointerDown:Je,onPointerEnter:Je,onMouseMove(){i||$===0||(clearTimeout(ze.current),ze.current=setTimeout(()=>{Et.current||s(!0)},$))}},floating:{onMouseEnter(){clearTimeout(Ue.current)},onMouseLeave(){w.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),St(!1)}}}},[w,U,$,i,s,St])}const ma=g.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:()=>{},setState:()=>{},isInstantPhase:!1}),no=()=>React.useContext(ma),wa=r=>{let{children:n,delay:i,timeoutMs:s=0}=r;const[A,w]=React.useReducer((N,U)=>Kn(Kn({},N),U),{delay:i,timeoutMs:s,initialDelay:i,currentId:null,isInstantPhase:!1}),T=React.useRef(null),B=React.useCallback(N=>{w({currentId:N})},[]);return bn(()=>{A.currentId?T.current===null?T.current=A.currentId:w({isInstantPhase:!0}):(w({isInstantPhase:!1}),T.current=null)},[A.currentId]),React.createElement(ma.Provider,{value:React.useMemo(()=>ci(Kn({},A),{setState:w,setCurrentId:B}),[A,w,B])},n)},or=(r,n)=>{let{open:i,onOpenChange:s}=r,{id:A}=n;const{currentId:w,setCurrentId:T,initialDelay:B,setState:N,timeoutMs:U}=no();bn(()=>{w&&(N({delay:{open:1,close:Ni(B,"close")}}),w!==A&&s(!1))},[A,s,N,w,B]),bn(()=>{function de(){s(!1),N({delay:B,currentId:null})}if(!i&&w===A)if(U){const Q=window.setTimeout(de,U);return()=>{clearTimeout(Q)}}else de()},[i,N,w,A,s,B,U]),bn(()=>{i&&T(A)},[i,T,A])};function To(r){let n=r.activeElement;for(;((i=n)==null||(s=i.shadowRoot)==null?void 0:s.activeElement)!=null;){var i,s;n=n.shadowRoot.activeElement}return n}let Hi=0;function Di(r,n){n===void 0&&(n={});const{preventScroll:i=!1,cancelPrevious:s=!0,sync:A=!1}=n;s&&cancelAnimationFrame(Hi);const w=()=>r==null?void 0:r.focus({preventScroll:i});A?w():Hi=requestAnimationFrame(w)}function S(r,n){var i;let s=[],A=(i=r.find(w=>w.id===n))==null?void 0:i.parentId;for(;A;){const w=r.find(T=>T.id===A);A=w==null?void 0:w.parentId,w&&(s=s.concat(w))}return s}function D(r,n){let i=r.filter(A=>{var w;return A.parentId===n&&((w=A.context)==null?void 0:w.open)}),s=i;for(;s.length;)s=r.filter(A=>{var w;return(w=s)==null?void 0:w.some(T=>{var B;return A.parentId===T.id&&((B=A.context)==null?void 0:B.open)})}),i=i.concat(s);return i}function q(r){return"composedPath"in r?r.composedPath()[0]:r.target}const ue=null;function le(r){return ea(r)&&r.matches(ue)}function Me(r){r.preventDefault(),r.stopPropagation()}const Ne=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function lt(r,n){const i=tabbable(r,Ne());n==="prev"&&i.reverse();const s=i.indexOf(To(Wr(r)));return i.slice(s+1)[0]}function st(){return lt(document.body,"next")}function Dt(){return lt(document.body,"prev")}function Vt(r,n){const i=n||r.currentTarget,s=r.relatedTarget;return!s||!Br(i,s)}function Xt(r){tabbable(r,Ne()).forEach(i=>{i.dataset.tabindex=i.getAttribute("tabindex")||"",i.setAttribute("tabindex","-1")})}function yn(r){r.querySelectorAll("[data-tabindex]").forEach(i=>{const s=i.dataset.tabindex;delete i.dataset.tabindex,s?i.setAttribute("tabindex",s):i.removeAttribute("tabindex")})}const _t={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let nn;function tn(r){r.key==="Tab"&&(r.target,clearTimeout(nn))}const Cn=null,pr=null;function jn(r){let{id:n,root:i}=r===void 0?{}:r;const[s,A]=React.useState(null),w=fa(),T=fn(),B=React.useMemo(()=>({id:n,root:i,portalContext:T,uniqueId:w}),[n,i,T,w]),N=React.useRef();return bn(()=>()=>{s==null||s.remove()},[s,B]),bn(()=>{if(N.current===B)return;N.current=B;const{id:U,root:de,portalContext:Q,uniqueId:te}=B,$=U?document.getElementById(U):null,ce="data-floating-ui-portal";if($){const me=document.createElement("div");me.id=te,me.setAttribute(ce,""),$.appendChild(me),A(me)}else{let me=(Q==null?void 0:Q.portalNode)||de||document.body,xe=null;U&&(xe=document.createElement("div"),xe.id=U,me.appendChild(xe));const he=document.createElement("div");he.id=te,he.setAttribute(ce,""),me=xe||me,me.appendChild(he),A(he)}},[B]),s}function lr(r){let{children:n,id:i,root:s=null,preserveTabOrder:A=!0}=r;const w=jn({id:i,root:s}),[T,B]=React.useState(null),N=React.useRef(null),U=React.useRef(null),de=React.useRef(null),Q=React.useRef(null),te=!!T&&!T.modal&&T.open&&A&&!!(s||w);return React.useEffect(()=>{if(!w||!A||T!=null&&T.modal)return;function $(ce){w&&Vt(ce)&&(ce.type==="focusin"?yn:Xt)(w)}return w.addEventListener("focusin",$,!0),w.addEventListener("focusout",$,!0),()=>{w.removeEventListener("focusin",$,!0),w.removeEventListener("focusout",$,!0)}},[w,A,T==null?void 0:T.modal]),React.createElement(pr.Provider,{value:React.useMemo(()=>({preserveTabOrder:A,beforeOutsideRef:N,afterOutsideRef:U,beforeInsideRef:de,afterInsideRef:Q,portalNode:w,setFocusManagerState:B}),[A,w])},te&&w&&React.createElement(Cn,{"data-type":"outside",ref:N,onFocus:$=>{if(Vt($,w)){var ce;(ce=de.current)==null||ce.focus()}else{const me=Dt()||(T==null?void 0:T.refs.domReference.current);me==null||me.focus()}}}),te&&w&&React.createElement("span",{"aria-owns":w.id,style:_t}),w&&createPortal(n,w),te&&w&&React.createElement(Cn,{"data-type":"outside",ref:U,onFocus:$=>{if(Vt($,w)){var ce;(ce=Q.current)==null||ce.focus()}else{const me=st()||(T==null?void 0:T.refs.domReference.current);me==null||me.focus(),T!=null&&T.closeOnFocusOut&&(T==null||T.onOpenChange(!1))}}}))}const fn=()=>React.useContext(pr),kr=null;function ao(r){const{context:n,children:i,order:s=["content"],guards:A=!0,initialFocus:w=0,returnFocus:T=!0,modal:B=!0,visuallyHiddenDismiss:N=!1,closeOnFocusOut:U=!0}=r,{open:de,refs:Q,nodeId:te,onOpenChange:$,events:ce,dataRef:me,elements:{domReference:xe,floating:he}}=n,we=ni(s),He=ni(w),Ue=ni(T),Ie=xr(),ze=fn(),Et=typeof w=="number"&&w<0,Ut=React.useRef(null),Ot=React.useRef(null),Lt=React.useRef(!1),St=React.useRef(null),dt=React.useRef(!1),Pt=ze!=null,Je=xe&&xe.getAttribute("role")==="combobox"&&le(xe),Rt=React.useCallback(function(Wt){return Wt===void 0&&(Wt=he),Wt?tabbable(Wt,Ne()):[]},[he]),Zt=React.useCallback(Wt=>{const Pn=Rt(Wt);return we.current.map(pn=>xe&&pn==="reference"?xe:he&&pn==="floating"?he:Pn).filter(Boolean).flat()},[xe,he,we,Rt]);React.useEffect(()=>{if(!B)return;function Wt(pn){if(pn.key==="Tab"){Br(he,To(Wr(he)))&&Rt().length===0&&!Je&&Me(pn);const dn=Zt(),Jn=q(pn);we.current[0]==="reference"&&Jn===xe&&(Me(pn),pn.shiftKey?Di(dn[dn.length-1]):Di(dn[1])),we.current[1]==="floating"&&Jn===he&&pn.shiftKey&&(Me(pn),Di(dn[0]))}}const Pn=Wr(he);return Pn.addEventListener("keydown",Wt),()=>{Pn.removeEventListener("keydown",Wt)}},[xe,he,B,we,Q,Je,Rt,Zt]),React.useEffect(()=>{if(!U)return;function Wt(){dt.current=!0,setTimeout(()=>{dt.current=!1})}function Pn(pn){const dn=pn.relatedTarget;queueMicrotask(()=>{const Jn=!(Br(xe,dn)||Br(he,dn)||Br(dn,he)||Br(ze==null?void 0:ze.portalNode,dn)||dn!=null&&dn.hasAttribute("data-floating-ui-focus-guard")||Ie&&(D(Ie.nodesRef.current,te).find(Hr=>{var Ko,Ti;return Br((Ko=Hr.context)==null?void 0:Ko.elements.floating,dn)||Br((Ti=Hr.context)==null?void 0:Ti.elements.domReference,dn)})||S(Ie.nodesRef.current,te).find(Hr=>{var Ko,Ti;return((Ko=Hr.context)==null?void 0:Ko.elements.floating)===dn||((Ti=Hr.context)==null?void 0:Ti.elements.domReference)===dn})));dn&&Jn&&!dt.current&&dn!==St.current&&(Lt.current=!0,$(!1))})}if(he&&ea(xe))return xe.addEventListener("focusout",Pn),xe.addEventListener("pointerdown",Wt),!B&&he.addEventListener("focusout",Pn),()=>{xe.removeEventListener("focusout",Pn),xe.removeEventListener("pointerdown",Wt),!B&&he.removeEventListener("focusout",Pn)}},[xe,he,B,te,Ie,ze,$,U]),React.useEffect(()=>{var Wt;const Pn=Array.from((ze==null||(Wt=ze.portalNode)==null?void 0:Wt.querySelectorAll("[data-floating-ui-portal]"))||[]);function pn(){return[Ut.current,Ot.current].filter(Boolean)}if(he&&B){const dn=[he,...Pn,...pn()],Jn=hideOthers(we.current.includes("reference")||Je?dn.concat(xe||[]):dn);return()=>{Jn()}}},[xe,he,B,we,ze,Je]),React.useEffect(()=>{if(B&&!A&&he){const Wt=[],Pn=Ne(),pn=tabbable(Wr(he).body,Pn),dn=Zt(),Jn=pn.filter(Hr=>!dn.includes(Hr));return Jn.forEach((Hr,Ko)=>{Wt[Ko]=Hr.getAttribute("tabindex"),Hr.setAttribute("tabindex","-1")}),()=>{Jn.forEach((Hr,Ko)=>{const Ti=Wt[Ko];Ti==null?Hr.removeAttribute("tabindex"):Hr.setAttribute("tabindex",Ti)})}}},[he,B,A,Zt]),bn(()=>{if(!he)return;const Wt=Wr(he),Pn=To(Wt);queueMicrotask(()=>{const pn=Zt(he),dn=He.current,Jn=(typeof dn=="number"?pn[dn]:dn.current)||he,Hr=Br(he,Pn);!Et&&!Hr&&de&&Di(Jn,{preventScroll:Jn===he})})},[de,he,Et,Zt,He]),bn(()=>{if(!he)return;let Wt=!1;const Pn=Wr(he),pn=To(Pn),dn=me.current;St.current=pn;function Jn(Hr){if(Hr.type==="escapeKey"&&Q.domReference.current&&(St.current=Q.domReference.current),["referencePress","escapeKey"].includes(Hr.type))return;const Ko=Hr.data.returnFocus;typeof Ko=="object"?(Lt.current=!1,Wt=Ko.preventScroll):Lt.current=!Ko}return ce.on("dismiss",Jn),()=>{ce.off("dismiss",Jn);const Hr=To(Pn);(Br(he,Hr)||Ie&&D(Ie.nodesRef.current,te).some(Ti=>{var In;return Br((In=Ti.context)==null?void 0:In.elements.floating,Hr)})||dn.openEvent&&["click","mousedown"].includes(dn.openEvent.type))&&Q.domReference.current&&(St.current=Q.domReference.current),Ue.current&&ea(St.current)&&!Lt.current&&Di(St.current,{cancelPrevious:!1,preventScroll:Wt})}},[he,Ue,me,Q,ce,Ie,te]),bn(()=>{if(ze)return ze.setFocusManagerState(ci(Kn({},n),{modal:B,closeOnFocusOut:U,open:de})),()=>{ze.setFocusManagerState(null)}},[ze,B,de,U,n]),bn(()=>{if(he&&typeof MutationObserver=="function"){const Wt=()=>{const pn=he.getAttribute("tabindex");we.current.includes("floating")||To(Wr(he))!==Q.domReference.current&&Rt().length===0?pn!=="0"&&he.setAttribute("tabindex","0"):pn!=="-1"&&he.setAttribute("tabindex","-1")};Wt();const Pn=new MutationObserver(Wt);return Pn.observe(he,{childList:!0,subtree:!0,attributes:!0}),()=>{Pn.disconnect()}}},[he,Q,we,Rt]);function en(Wt){return N&&B?React.createElement(kr,{ref:Wt==="start"?Ut:Ot,onClick:()=>$(!1)},typeof N=="string"?N:"Dismiss"):null}const hn=A&&!Je&&(Pt||B);return React.createElement(React.Fragment,null,hn&&React.createElement(Cn,{"data-type":"inside",ref:ze==null?void 0:ze.beforeInsideRef,onFocus:Wt=>{if(B){const pn=Zt();Di(s[0]==="reference"?pn[0]:pn[pn.length-1])}else if(ze!=null&&ze.preserveTabOrder&&ze.portalNode)if(Lt.current=!1,Vt(Wt,ze.portalNode)){const pn=st()||xe;pn==null||pn.focus()}else{var Pn;(Pn=ze.beforeOutsideRef.current)==null||Pn.focus()}}}),!Je&&en("start"),i,en("end"),hn&&React.createElement(Cn,{"data-type":"inside",ref:ze==null?void 0:ze.afterInsideRef,onFocus:Wt=>{if(B)Di(Zt()[0]);else if(ze!=null&&ze.preserveTabOrder&&ze.portalNode)if(U&&(Lt.current=!0),Vt(Wt,ze.portalNode)){const pn=Dt()||xe;pn==null||pn.focus()}else{var Pn;(Pn=ze.afterOutsideRef.current)==null||Pn.focus()}}}))}function et(r,n){const i=r.compareDocumentPosition(n);return i&Node.DOCUMENT_POSITION_FOLLOWING||i&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:i&Node.DOCUMENT_POSITION_PRECEDING||i&Node.DOCUMENT_POSITION_CONTAINS?1:0}function yr(r,n){if(r.size!==n.size)return!1;for(const[i,s]of r.entries())if(s!==n.get(i))return!1;return!0}const ro=g.createContext({register:()=>{},unregister:()=>{},map:new Map,elementsRef:{current:[]}});function Gn(r){let{children:n,elementsRef:i,labelsRef:s}=r;const[A,w]=React.useState(()=>new Map),T=React.useCallback(N=>{w(U=>new Map(U).set(N,null))},[]),B=React.useCallback(N=>{w(U=>{const de=new Map(U);return de.delete(N),de})},[]);return bn(()=>{const N=new Map(A);Array.from(N.keys()).sort(et).forEach((de,Q)=>{N.set(de,Q)}),yr(A,N)||w(N)},[A]),React.createElement(ro.Provider,{value:{register:T,unregister:B,map:A,elementsRef:i,labelsRef:s}},n)}function oo(r){let{label:n}=r===void 0?{}:r;const[i,s]=React.useState(null),A=React.useRef(null),{register:w,unregister:T,map:B,elementsRef:N,labelsRef:U}=React.useContext(ro),de=React.useCallback(Q=>{if(A.current=Q,i!==null&&(N.current[i]=Q,U)){var te;const $=n!==void 0;U.current[i]=$?n:(te=Q==null?void 0:Q.textContent)!=null?te:null}},[i,N,U,n]);return bn(()=>{const Q=A.current;if(Q)return w(Q),()=>{T(Q)}},[w,T]),bn(()=>{const Q=A.current?B.get(A.current):null;Q!=null&&s(Q)},[B]),React.useMemo(()=>({ref:de,index:i==null?-1:i}),[i,de])}const Ro="data-floating-ui-scroll-lock",Ao=null;function Ki(r){return ea(r.target)&&r.target.tagName==="BUTTON"}function Pi(r){return le(r)}function Da(r,n){n===void 0&&(n={});const{open:i,onOpenChange:s,dataRef:A,elements:{domReference:w}}=r,{enabled:T=!0,event:B="click",toggle:N=!0,ignoreMouse:U=!1,keyboardHandlers:de=!0}=n,Q=React.useRef(),te=React.useRef(!1);return React.useMemo(()=>T?{reference:{onPointerDown($){Q.current=$.pointerType},onMouseDown($){$.button===0&&(ji(Q.current,!0)&&U||B!=="click"&&(i?N&&(!A.current.openEvent||A.current.openEvent.type==="mousedown")&&s(!1):($.preventDefault(),s(!0)),A.current.openEvent=$.nativeEvent))},onClick($){if(B==="mousedown"&&Q.current){Q.current=void 0;return}ji(Q.current,!0)&&U||(i?N&&(!A.current.openEvent||A.current.openEvent.type==="click")&&s(!1):s(!0),A.current.openEvent=$.nativeEvent)},onKeyDown($){Q.current=void 0,!($.defaultPrevented||!de||Ki($))&&($.key===" "&&!Pi(w)&&($.preventDefault(),te.current=!0),$.key==="Enter"&&(i?N&&s(!1):s(!0)))},onKeyUp($){$.defaultPrevented||!de||Ki($)||Pi(w)||$.key===" "&&te.current&&(te.current=!1,i?N&&s(!1):s(!0))}}}:{},[T,A,B,U,de,w,N,i,s])}const ho=g.useInsertionEffect||(r=>r());function _o(r){const n=g.useRef(()=>{});return ho(()=>{n.current=r}),g.useCallback(function(){for(var i=arguments.length,s=new Array(i),A=0;A<i;A++)s[A]=arguments[A];return n.current==null?void 0:n.current(...s)},[])}function jo(r,n){let i=null,s=null,A=!1;return{contextElement:r.current||void 0,getBoundingClientRect(){var w,T;const B=((w=r.current)==null?void 0:w.getBoundingClientRect())||{width:0,height:0,x:0,y:0},N=n.axis==="x"||n.axis==="both",U=n.axis==="y"||n.axis==="both",de=["mouseenter","mousemove"].includes(((T=n.dataRef.current.openEvent)==null?void 0:T.type)||"")&&n.pointerType!=="touch";let Q=B.width,te=B.height,$=B.x,ce=B.y;return i==null&&n.x&&N&&(i=B.x-n.x),s==null&&n.y&&U&&(s=B.y-n.y),$-=i||0,ce-=s||0,Q=0,te=0,!A||de?(Q=n.axis==="y"?B.width:0,te=n.axis==="x"?B.height:0,$=N&&n.x!=null?n.x:$,ce=U&&n.y!=null?n.y:ce):A&&!de&&(te=n.axis==="x"?B.height:te,Q=n.axis==="y"?B.width:Q),A=!0,{width:Q,height:te,x:$,y:ce,top:ce,right:$+Q,bottom:ce+te,left:$}}}}function oi(r){return r!=null&&r.clientX!=null}function gi(r,n){n===void 0&&(n={});const{open:i,refs:s,dataRef:A,elements:{floating:w}}=r,{enabled:T=!0,axis:B="both",x:N=null,y:U=null}=n,de=React.useRef(!1),Q=React.useRef(null),[te,$]=React.useState(),[ce,me]=React.useState([]),xe=_o((Ue,Ie)=>{de.current||A.current.openEvent&&!oi(A.current.openEvent)||s.setPositionReference(jo(s.domReference,{x:Ue,y:Ie,axis:B,dataRef:A,pointerType:te}))}),he=_o(Ue=>{N!=null||U!=null||(i?Q.current||me([]):xe(Ue.clientX,Ue.clientY))}),we=ji(te)?w:i,He=React.useCallback(()=>{if(!we||!T||N!=null||U!=null)return;const Ue=Yr(s.floating.current);function Ie(ze){const Et=q(ze);Br(s.floating.current,Et)?(Ue.removeEventListener("mousemove",Ie),Q.current=null):xe(ze.clientX,ze.clientY)}if(!A.current.openEvent||oi(A.current.openEvent)){Ue.addEventListener("mousemove",Ie);const ze=()=>{Ue.removeEventListener("mousemove",Ie),Q.current=null};return Q.current=ze,ze}s.setPositionReference(s.domReference.current)},[A,T,we,s,xe,N,U]);return React.useEffect(()=>He(),[He,ce]),React.useEffect(()=>{T&&!w&&(de.current=!1)},[T,w]),React.useEffect(()=>{!T&&i&&(de.current=!0)},[T,i]),bn(()=>{T&&(N!=null||U!=null)&&(de.current=!1,xe(N,U))},[T,N,U,xe]),React.useMemo(()=>{if(!T)return{};function Ue(Ie){let{pointerType:ze}=Ie;$(ze)}return{reference:{onPointerDown:Ue,onPointerEnter:Ue,onMouseMove:he,onMouseEnter:he}}},[T,he])}function Uo(r,n){if(n==null)return!1;if("composedPath"in r)return r.composedPath().includes(n);const i=r;return i.target!=null&&n.contains(i.target)}const va={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Mo={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},$i=r=>{var n,i;return{escapeKeyBubbles:typeof r=="boolean"?r:(n=r==null?void 0:r.escapeKey)!=null?n:!1,outsidePressBubbles:typeof r=="boolean"?r:(i=r==null?void 0:r.outsidePress)!=null?i:!0}};function Ur(r,n){n===void 0&&(n={});const{open:i,onOpenChange:s,events:A,nodeId:w,elements:{reference:T,domReference:B,floating:N},dataRef:U}=r,{enabled:de=!0,escapeKey:Q=!0,outsidePress:te=!0,outsidePressEvent:$="pointerdown",referencePress:ce=!1,referencePressEvent:me="pointerdown",ancestorScroll:xe=!1,bubbles:he}=n,we=xr(),He=bi()!=null,Ue=_o(typeof te=="function"?te:()=>!1),Ie=typeof te=="function"?Ue:te,ze=g.useRef(!1),{escapeKeyBubbles:Et,outsidePressBubbles:Ut}=$i(he),Ot=_o(St=>{if(!i||!de||!Q||St.key!=="Escape")return;const dt=we?D(we.nodesRef.current,w):[];if(!Et&&(St.stopPropagation(),dt.length>0)){let Pt=!0;if(dt.forEach(Je=>{var Rt;if((Rt=Je.context)!=null&&Rt.open&&!Je.context.dataRef.current.__escapeKeyBubbles){Pt=!1;return}}),!Pt)return}A.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),s(!1)}),Lt=_o(St=>{const dt=ze.current;if(ze.current=!1,dt||typeof Ie=="function"&&!Ie(St))return;const Pt=q(St);if(ea(Pt)&&N){const Zt=Pt.clientWidth>0&&Pt.scrollWidth>Pt.clientWidth,en=Pt.clientHeight>0&&Pt.scrollHeight>Pt.clientHeight;let hn=en&&St.offsetX>Pt.clientWidth;if(en&&Yr(N).getComputedStyle(Pt).direction==="rtl"&&(hn=St.offsetX<=Pt.offsetWidth-Pt.clientWidth),hn||Zt&&St.offsetY>Pt.clientHeight)return}const Je=we&&D(we.nodesRef.current,w).some(Zt=>{var en;return Uo(St,(en=Zt.context)==null?void 0:en.elements.floating)});if(Uo(St,N)||Uo(St,B)||Je)return;const Rt=we?D(we.nodesRef.current,w):[];if(Rt.length>0){let Zt=!0;if(Rt.forEach(en=>{var hn;if((hn=en.context)!=null&&hn.open&&!en.context.dataRef.current.__outsidePressBubbles){Zt=!1;return}}),!Zt)return}A.emit("dismiss",{type:"outsidePress",data:{returnFocus:He?{preventScroll:!0}:Ri(St)||Oo(St)}}),s(!1)});return g.useEffect(()=>{if(!i||!de)return;U.current.__escapeKeyBubbles=Et,U.current.__outsidePressBubbles=Ut;function St(){s(!1)}const dt=Wr(N);Q&&dt.addEventListener("keydown",Ot),Ie&&dt.addEventListener($,Lt);let Pt=[];return xe&&(Gt(B)&&(Pt=_r(B)),Gt(N)&&(Pt=Pt.concat(_r(N))),!Gt(T)&&T&&T.contextElement&&(Pt=Pt.concat(_r(T.contextElement)))),Pt=Pt.filter(Je=>{var Rt;return Je!==((Rt=dt.defaultView)==null?void 0:Rt.visualViewport)}),Pt.forEach(Je=>{Je.addEventListener("scroll",St,{passive:!0})}),()=>{Q&&dt.removeEventListener("keydown",Ot),Ie&&dt.removeEventListener($,Lt),Pt.forEach(Je=>{Je.removeEventListener("scroll",St)})}},[U,N,B,T,Q,Ie,$,i,s,xe,de,Et,Ut,Ot,Lt]),g.useEffect(()=>{ze.current=!1},[Ie,$]),g.useMemo(()=>de?{reference:{onKeyDown:Ot,[va[me]]:()=>{ce&&(A.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),s(!1))}},floating:{onKeyDown:Ot,[Mo[$]]:()=>{ze.current=!0}}}:{},[de,A,ce,$,me,s,Ot])}function Eo(r,n){n===void 0&&(n={});const{open:i,onOpenChange:s,dataRef:A,events:w,refs:T,elements:{floating:B,domReference:N}}=r,{enabled:U=!0,keyboardOnly:de=!0}=n,Q=g.useRef(""),te=g.useRef(!1),$=g.useRef();return g.useEffect(()=>{if(!U)return;const me=Wr(B).defaultView||window;function xe(){!i&&ea(N)&&N===To(Wr(N))&&(te.current=!0)}return me.addEventListener("blur",xe),()=>{me.removeEventListener("blur",xe)}},[B,N,i,U]),g.useEffect(()=>{if(!U)return;function ce(me){(me.type==="referencePress"||me.type==="escapeKey")&&(te.current=!0)}return w.on("dismiss",ce),()=>{w.off("dismiss",ce)}},[w,U]),g.useEffect(()=>()=>{clearTimeout($.current)},[]),g.useMemo(()=>U?{reference:{onPointerDown(ce){let{pointerType:me}=ce;Q.current=me,te.current=!!(me&&de)},onMouseLeave(){te.current=!1},onFocus(ce){var me;te.current||ce.type==="focus"&&((me=A.current.openEvent)==null?void 0:me.type)==="mousedown"&&A.current.openEvent&&Uo(A.current.openEvent,N)||(A.current.openEvent=ce.nativeEvent,s(!0))},onBlur(ce){te.current=!1;const me=ce.relatedTarget,xe=Gt(me)&&me.hasAttribute("data-floating-ui-focus-guard")&&me.getAttribute("data-type")==="outside";$.current=setTimeout(()=>{Br(T.floating.current,me)||Br(N,me)||xe||s(!1)})}}}:{},[U,de,N,T,A,s])}let Ia=!1;const ta="ArrowUp",Ma="ArrowDown",bo="ArrowLeft",zi="ArrowRight";function Gi(r,n,i){return Math.floor(r/n)!==i}function La(r,n){return n<0||n>=r.current.length}function wo(r,n){let{startingIndex:i=-1,decrement:s=!1,disabledIndices:A,amount:w=1}=n===void 0?{}:n;const T=r.current;let B=i;do{var N,U;B=B+(s?-w:w)}while(B>=0&&B<=T.length-1&&(A?A.includes(B):T[B]==null||(N=T[B])!=null&&N.hasAttribute("disabled")||((U=T[B])==null?void 0:U.getAttribute("aria-disabled"))==="true"));return B}function ga(r,n,i){switch(r){case"vertical":return n;case"horizontal":return i;default:return n||i}}function Ya(r,n){return ga(n,r===ta||r===Ma,r===bo||r===zi)}function Xi(r,n,i){return ga(n,r===Ma,i?r===bo:r===zi)||r==="Enter"||r==" "||r===""}function ts(r,n,i){return ga(n,i?r===bo:r===zi,r===Ma)}function Yi(r,n,i){return ga(n,i?r===zi:r===bo,r===ta)}function ls(r,n){return wo(r,{disabledIndices:n})}function bs(r,n){return wo(r,{decrement:!0,startingIndex:r.current.length,disabledIndices:n})}function Bi(r,n){const{open:i,onOpenChange:s,refs:A,elements:{domReference:w,floating:T}}=r,{listRef:B,activeIndex:N,onNavigate:U=()=>{},enabled:de=!0,selectedIndex:Q=null,allowEscape:te=!1,loop:$=!1,nested:ce=!1,rtl:me=!1,virtual:xe=!1,focusItemOnOpen:he="auto",focusItemOnHover:we=!0,openOnArrowKeyDown:He=!0,disabledIndices:Ue=void 0,orientation:Ie="vertical",cols:ze=1,scrollItemIntoView:Et=!0}=n,Ut=bi(),Ot=xr(),Lt=_o(U),St=React.useRef(he),dt=React.useRef(Q!=null?Q:-1),Pt=React.useRef(null),Je=React.useRef(!0),Rt=React.useRef(Lt),Zt=React.useRef(!!T),en=React.useRef(!1),hn=React.useRef(!1),Wt=ni(Ue),Pn=ni(i),pn=ni(Et),[dn,Jn]=React.useState(),Hr=_o(function(In,lo,Zr){Zr===void 0&&(Zr=!1);const qr=In.current[lo.current];qr&&(xe?Jn(qr.id):Di(qr,{preventScroll:!0,sync:Fr()&&sa()?Ia||en.current:!1}),requestAnimationFrame(()=>{const si=pn.current;si&&qr&&(Zr||!Je.current)&&(qr.scrollIntoView==null||qr.scrollIntoView(typeof si=="boolean"?{block:"nearest",inline:"nearest"}:si))}))});bn(()=>{document.createElement("div").focus({get preventScroll(){return Ia=!0,!1}})},[]),bn(()=>{de&&(i&&T?St.current&&Q!=null&&(hn.current=!0,Lt(Q)):Zt.current&&(dt.current=-1,Rt.current(null)))},[de,i,T,Q,Lt]),bn(()=>{if(de&&i&&T)if(N==null){if(en.current=!1,Q!=null)return;if(Zt.current&&(dt.current=-1,Hr(B,dt)),!Zt.current&&St.current&&(Pt.current!=null||St.current===!0&&Pt.current==null)){let In=0;const lo=()=>{B.current[0]==null?(In<2&&(In?requestAnimationFrame:queueMicrotask)(lo),In++):(dt.current=Pt.current==null||Xi(Pt.current,Ie,me)||ce?ls(B,Wt.current):bs(B,Wt.current),Pt.current=null,Lt(dt.current))};lo()}}else La(B,N)||(dt.current=N,Hr(B,dt,hn.current),hn.current=!1)},[de,i,T,N,Q,ce,B,Ie,me,Lt,Hr,Wt]),bn(()=>{if(de&&Zt.current&&!T&&Ot){var In,lo;const Zr=Ot.nodesRef.current,qr=(In=Zr.find(li=>li.id===Ut))==null||(lo=In.context)==null?void 0:lo.elements.floating,si=To(Wr(T)),jr=Zr.some(li=>li.context&&Br(li.context.elements.floating,si));qr&&!jr&&qr.focus({preventScroll:!0})}},[de,T,Ot,Ut]),bn(()=>{Rt.current=Lt,Zt.current=!!T}),bn(()=>{i||(Pt.current=null)},[i]);const Ko=N!=null,Ti=React.useMemo(()=>{function In(Zr){if(!i)return;const qr=B.current.indexOf(Zr);qr!==-1&&Lt(qr)}return Kn({onFocus(Zr){let{currentTarget:qr}=Zr;In(qr)},onClick:Zr=>{let{currentTarget:qr}=Zr;return qr.focus({preventScroll:!0})}},we&&{onMouseMove(Zr){let{currentTarget:qr}=Zr;In(qr)},onPointerLeave(Zr){let{pointerType:qr}=Zr;!Je.current||qr==="touch"||(dt.current=-1,Hr(B,dt),Lt(null),xe||Di(A.floating.current,{preventScroll:!0}))}})},[i,A,Hr,we,B,Lt,xe]);return React.useMemo(()=>{if(!de)return{};const In=Wt.current;function lo(jr){if(Je.current=!1,en.current=!0,!Pn.current&&jr.currentTarget===A.floating.current)return;if(ce&&Yi(jr.key,Ie,me)){Me(jr),s(!1),ea(w)&&w.focus();return}const li=dt.current,ui=ls(B,In),$o=bs(B,In);if(jr.key==="Home"&&(Me(jr),dt.current=ui,Lt(dt.current)),jr.key==="End"&&(Me(jr),dt.current=$o,Lt(dt.current)),ze>1){const Pr=dt.current;if(jr.key===ta){if(Me(jr),Pr===-1)dt.current=$o;else if(dt.current=wo(B,{startingIndex:Pr,amount:ze,decrement:!0,disabledIndices:In}),$&&(Pr-ze<ui||dt.current<0)){const Zo=Pr%ze,kl=$o%ze,gu=$o-(kl-Zo);kl===Zo?dt.current=$o:dt.current=kl>Zo?gu:gu-ze}La(B,dt.current)&&(dt.current=Pr),Lt(dt.current)}if(jr.key===Ma&&(Me(jr),Pr===-1?dt.current=ui:(dt.current=wo(B,{startingIndex:Pr,amount:ze,disabledIndices:In}),$&&Pr+ze>$o&&(dt.current=wo(B,{startingIndex:Pr%ze-ze,amount:ze,disabledIndices:In}))),La(B,dt.current)&&(dt.current=Pr),Lt(dt.current)),Ie==="both"){const Zo=Math.floor(Pr/ze);jr.key===zi&&(Me(jr),Pr%ze!==ze-1?(dt.current=wo(B,{startingIndex:Pr,disabledIndices:In}),$&&Gi(dt.current,ze,Zo)&&(dt.current=wo(B,{startingIndex:Pr-Pr%ze-1,disabledIndices:In}))):$&&(dt.current=wo(B,{startingIndex:Pr-Pr%ze-1,disabledIndices:In})),Gi(dt.current,ze,Zo)&&(dt.current=Pr)),jr.key===bo&&(Me(jr),Pr%ze!==0?(dt.current=wo(B,{startingIndex:Pr,disabledIndices:In,decrement:!0}),$&&Gi(dt.current,ze,Zo)&&(dt.current=wo(B,{startingIndex:Pr+(ze-Pr%ze),decrement:!0,disabledIndices:In}))):$&&(dt.current=wo(B,{startingIndex:Pr+(ze-Pr%ze),decrement:!0,disabledIndices:In})),Gi(dt.current,ze,Zo)&&(dt.current=Pr));const kl=Math.floor($o/ze)===Zo;La(B,dt.current)&&($&&kl?dt.current=jr.key===bo?$o:wo(B,{startingIndex:Pr-Pr%ze-1,disabledIndices:In}):dt.current=Pr),Lt(dt.current);return}}if(Ya(jr.key,Ie)){if(Me(jr),i&&!xe&&To(jr.currentTarget.ownerDocument)===jr.currentTarget){dt.current=Xi(jr.key,Ie,me)?ui:$o,Lt(dt.current);return}Xi(jr.key,Ie,me)?$?dt.current=li>=$o?te&&li!==B.current.length?-1:ui:wo(B,{startingIndex:li,disabledIndices:In}):dt.current=Math.min($o,wo(B,{startingIndex:li,disabledIndices:In})):$?dt.current=li<=ui?te&&li!==-1?B.current.length:$o:wo(B,{startingIndex:li,decrement:!0,disabledIndices:In}):dt.current=Math.max(ui,wo(B,{startingIndex:li,decrement:!0,disabledIndices:In})),La(B,dt.current)?Lt(null):Lt(dt.current)}}function Zr(jr){he==="auto"&&Ri(jr.nativeEvent)&&(St.current=!0)}function qr(jr){St.current=he,he==="auto"&&Oo(jr.nativeEvent)&&(St.current=!0)}const si=xe&&i&&Ko&&{"aria-activedescendant":dn};return{reference:ci(Kn({},si),{onKeyDown(jr){Je.current=!1;const li=jr.key.indexOf("Arrow")===0;if(xe&&i)return lo(jr);if(!i&&!He&&li)return;const ui=li||jr.key==="Enter"||jr.key.trim()==="",$o=Ya(jr.key,Ie),Pr=ts(jr.key,Ie,me);if(ui&&(Pt.current=ce&&$o?null:jr.key),ce){Pr&&(Me(jr),i?(dt.current=ls(B,In),Lt(dt.current)):s(!0));return}$o&&(Q!=null&&(dt.current=Q),Me(jr),!i&&He?s(!0):lo(jr),i&&Lt(dt.current))},onFocus(){i&&Lt(null)},onPointerDown:qr,onMouseDown:Zr,onClick:Zr}),floating:ci(Kn({"aria-orientation":Ie==="both"?void 0:Ie},si),{onKeyDown:lo,onPointerMove(){Je.current=!0}}),item:Ti}},[w,A,dn,Wt,Pn,B,de,Ie,me,xe,i,Ko,ce,Q,He,te,ze,$,he,Lt,s,Ti])}function Qa(r){return React.useMemo(()=>r.every(n=>n==null)?null:n=>{r.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})},r)}function ws(r,n){n===void 0&&(n={});const{open:i,floatingId:s}=r,{enabled:A=!0,role:w="dialog"}=n,T=fa();return g.useMemo(()=>{const B={id:s,role:w};return A?w==="tooltip"?{reference:{"aria-describedby":i?s:void 0},floating:B}:{reference:Kn(Kn({"aria-expanded":i?"true":"false","aria-haspopup":w==="alertdialog"?"dialog":w,"aria-controls":i?s:void 0},w==="listbox"&&{role:"combobox"}),w==="menu"&&{id:T}),floating:Kn(Kn({},B),w==="menu"&&{"aria-labelledby":T})}:{}},[A,w,i,s,T])}const Na=r=>r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(n,i)=>(i?"-":"")+n.toLowerCase());function P(r,n){return typeof r=="function"?r(n):r}function k(r,n){const[i,s]=React.useState(r);return r&&!i&&s(!0),React.useEffect(()=>{if(!r){const A=setTimeout(()=>s(!1),n);return()=>clearTimeout(A)}},[r,n]),i}function H(r,n){n===void 0&&(n={});const{open:i,elements:{floating:s}}=r,{duration:A=250}=n,T=(typeof A=="number"?A:A.close)||0,[B,N]=React.useState(!1),[U,de]=React.useState("unmounted"),Q=k(i,T);return bn(()=>{B&&!Q&&de("unmounted")},[B,Q]),bn(()=>{if(s)if(i){de("initial");const te=requestAnimationFrame(()=>{de("open")});return()=>{cancelAnimationFrame(te)}}else N(!0),de("close")},[i,s]),{isMounted:Q,status:U}}function ne(r,n){n===void 0&&(n={});const{initial:i={opacity:0},open:s,close:A,common:w,duration:T=250}=n,B=r.placement,N=B.split("-")[0],U=React.useMemo(()=>({side:N,placement:B}),[N,B]),de=typeof T=="number",Q=(de?T:T.open)||0,te=(de?T:T.close)||0,[$,ce]=React.useState(()=>Kn(Kn({},P(w,U)),P(i,U))),{isMounted:me,status:xe}=H(r,{duration:T}),he=ni(i),we=ni(s),He=ni(A),Ue=ni(w);return bn(()=>{const Ie=P(he.current,U),ze=P(He.current,U),Et=P(Ue.current,U),Ut=P(we.current,U)||Object.keys(Ie).reduce((Ot,Lt)=>(Ot[Lt]="",Ot),{});if(xe==="initial"&&ce(Ot=>Kn(Kn({transitionProperty:Ot.transitionProperty},Et),Ie)),xe==="open"&&ce(Kn(Kn({transitionProperty:Object.keys(Ut).map(Na).join(","),transitionDuration:Q+"ms"},Et),Ut)),xe==="close"){const Ot=ze||Ie;ce(Kn(Kn({transitionProperty:Object.keys(Ot).map(Na).join(","),transitionDuration:te+"ms"},Et),Ot))}},[te,He,he,we,Ue,Q,xe,U]),{isMounted:me,styles:$}}function Ae(r,n){var i;const{open:s,dataRef:A}=r,{listRef:w,activeIndex:T,onMatch:B,onTypingChange:N,enabled:U=!0,findMatch:de=null,resetMs:Q=750,ignoreKeys:te=[],selectedIndex:$=null}=n,ce=React.useRef(),me=React.useRef(""),xe=React.useRef((i=$!=null?$:T)!=null?i:-1),he=React.useRef(null),we=_o(B),He=_o(N),Ue=ni(de),Ie=ni(te);return bn(()=>{s&&(clearTimeout(ce.current),he.current=null,me.current="")},[s]),bn(()=>{if(s&&me.current===""){var ze;xe.current=(ze=$!=null?$:T)!=null?ze:-1}},[s,$,T]),React.useMemo(()=>{if(!U)return{};function ze(Ot){Ot?A.current.typing||(A.current.typing=Ot,He(Ot)):A.current.typing&&(A.current.typing=Ot,He(Ot))}function Et(Ot,Lt,St){const dt=Ue.current?Ue.current(Lt,St):Lt.find(Pt=>(Pt==null?void 0:Pt.toLocaleLowerCase().indexOf(St.toLocaleLowerCase()))===0);return dt?Ot.indexOf(dt):-1}function Ut(Ot){const Lt=w.current;if(me.current.length>0&&me.current[0]!==" "&&(Et(Lt,Lt,me.current)===-1?ze(!1):Ot.key===" "&&Me(Ot)),Lt==null||Ie.current.includes(Ot.key)||Ot.key.length!==1||Ot.ctrlKey||Ot.metaKey||Ot.altKey)return;s&&Ot.key!==" "&&(Me(Ot),ze(!0)),Lt.every(Je=>{var Rt,Zt;return Je?((Rt=Je[0])==null?void 0:Rt.toLocaleLowerCase())!==((Zt=Je[1])==null?void 0:Zt.toLocaleLowerCase()):!0})&&me.current===Ot.key&&(me.current="",xe.current=he.current),me.current+=Ot.key,clearTimeout(ce.current),ce.current=setTimeout(()=>{me.current="",xe.current=he.current,ze(!1)},Q);const dt=xe.current,Pt=Et(Lt,[...Lt.slice((dt||0)+1),...Lt.slice(0,(dt||0)+1)],me.current);Pt!==-1?(we(Pt),he.current=Pt):Ot.key!==" "&&(me.current="",ze(!1))}return{reference:{onKeyDown:Ut},floating:{onKeyDown:Ut,onKeyUp(Ot){Ot.key===" "&&ze(!1)}}}},[U,s,A,w,Q,Ie,Ue,we,He])}function Ke(r,n){return ci(Kn({},r),{rects:ci(Kn({},r.rects),{floating:ci(Kn({},r.rects.floating),{height:n})})})}const $e=r=>({name:"inner",options:r,fn(i){return Ir(this,null,function*(){const ze=r,{listRef:s,overflowRef:A,onFallbackChange:w,offset:T=0,index:B=0,minItemsVisible:N=4,referenceOverflowThreshold:U=0,scrollRef:de}=ze,Q=qu(ze,["listRef","overflowRef","onFallbackChange","offset","index","minItemsVisible","referenceOverflowThreshold","scrollRef"]),{rects:te,elements:{floating:$}}=i,ce=s.current[B];if(!ce)return{};const me=Kn(Kn({},i),yield offset(-ce.offsetTop-te.reference.height/2-ce.offsetHeight/2-T).fn(i)),xe=(de==null?void 0:de.current)||$,he=yield detectOverflow(Ke(me,xe.scrollHeight),Q),we=yield detectOverflow(me,ci(Kn({},Q),{elementContext:"reference"})),He=Math.max(0,he.top),Ue=me.y+He,Ie=Math.max(0,xe.scrollHeight-He-Math.max(0,he.bottom));return xe.style.maxHeight=Ie+"px",xe.scrollTop=He,w&&(xe.offsetHeight<ce.offsetHeight*Math.min(N,s.current.length-1)-1||we.top>=-U||we.bottom>=-U?flushSync(()=>w(!0)):flushSync(()=>w(!1))),A&&(A.current=yield detectOverflow(Ke(ci(Kn({},me),{y:Ue}),xe.offsetHeight),Q)),{y:Ue}})}});function yt(r,n){const{open:i,elements:s}=r,{enabled:A=!0,overflowRef:w,scrollRef:T,onChange:B}=n,N=_o(B),U=React.useRef(!1),de=React.useRef(null),Q=React.useRef(null);return React.useEffect(()=>{if(!A)return;function te(ce){if(ce.ctrlKey||!$||w.current==null)return;const me=ce.deltaY,xe=w.current.top>=-.5,he=w.current.bottom>=-.5,we=$.scrollHeight-$.clientHeight,He=me<0?-1:1,Ue=me<0?"max":"min";$.scrollHeight<=$.clientHeight||(!xe&&me>0||!he&&me<0?(ce.preventDefault(),flushSync(()=>{N(Ie=>Ie+Math[Ue](me,we*He))})):/firefox/i.test(Fo())&&($.scrollTop+=me))}const $=(T==null?void 0:T.current)||s.floating;if(i&&$)return $.addEventListener("wheel",te),requestAnimationFrame(()=>{de.current=$.scrollTop,w.current!=null&&(Q.current=Kn({},w.current))}),()=>{de.current=null,Q.current=null,$.removeEventListener("wheel",te)}},[A,i,s.floating,w,T,N]),React.useMemo(()=>A?{floating:{onKeyDown(){U.current=!0},onWheel(){U.current=!1},onPointerMove(){U.current=!1},onScroll(){const te=(T==null?void 0:T.current)||s.floating;if(!(!w.current||!te||!U.current)){if(de.current!==null){const $=te.scrollTop-de.current;(w.current.bottom<-.5&&$<-1||w.current.top<-.5&&$>1)&&flushSync(()=>N(ce=>ce+$))}requestAnimationFrame(()=>{de.current=te.scrollTop})}}}}:{},[A,w,s.floating,T,N])}function xn(r,n){const[i,s]=r;let A=!1;const w=n.length;for(let T=0,B=w-1;T<w;B=T++){const[N,U]=n[T]||[0,0],[de,Q]=n[B]||[0,0];U>=s!=Q>=s&&i<=(de-N)*(s-U)/(Q-U)+N&&(A=!A)}return A}function Ht(r,n){return r[0]>=n.x&&r[0]<=n.x+n.width&&r[1]>=n.y&&r[1]<=n.y+n.height}function Ft(r){r===void 0&&(r={});const{buffer:n=.5,blockPointerEvents:i=!1,requireIntent:s=!0}=r;let A,w=!1,T=null,B=null,N=performance.now();function U(Q,te){const $=performance.now(),ce=$-N;if(T===null||B===null||ce===0)return T=Q,B=te,N=$,null;const me=Q-T,xe=te-B,we=Math.sqrt(me*me+xe*xe)/ce;return T=Q,B=te,N=$,we}const de=Q=>{let{x:te,y:$,placement:ce,elements:me,onClose:xe,nodeId:he,tree:we}=Q;return function(Ue){function Ie(){clearTimeout(A),xe()}if(clearTimeout(A),!me.domReference||!me.floating||ce==null||te==null||$==null)return;const{clientX:ze,clientY:Et}=Ue,Ut=[ze,Et],Ot=q(Ue),Lt=Ue.type==="mouseleave",St=Br(me.floating,Ot),dt=Br(me.domReference,Ot),Pt=me.domReference.getBoundingClientRect(),Je=me.floating.getBoundingClientRect(),Rt=ce.split("-")[0],Zt=te>Je.right-Je.width/2,en=$>Je.bottom-Je.height/2,hn=Ht(Ut,Pt),Wt=Je.width>Pt.width,Pn=Je.height>Pt.height,pn=(Wt?Pt:Je).left,dn=(Wt?Pt:Je).right,Jn=(Pn?Pt:Je).top,Hr=(Pn?Pt:Je).bottom;if(St&&(w=!0,!Lt))return;if(dt&&(w=!1),dt&&!Lt){w=!0;return}if(Lt&&Gt(Ue.relatedTarget)&&Br(me.floating,Ue.relatedTarget)||we&&D(we.nodesRef.current,he).some(In=>{let{context:lo}=In;return lo==null?void 0:lo.open}))return;if(Rt==="top"&&$>=Pt.bottom-1||Rt==="bottom"&&$<=Pt.top+1||Rt==="left"&&te>=Pt.right-1||Rt==="right"&&te<=Pt.left+1)return Ie();let Ko=[];switch(Rt){case"top":Ko=[[pn,Pt.top+1],[pn,Je.bottom-1],[dn,Je.bottom-1],[dn,Pt.top+1]];break;case"bottom":Ko=[[pn,Je.top+1],[pn,Pt.bottom-1],[dn,Pt.bottom-1],[dn,Je.top+1]];break;case"left":Ko=[[Je.right-1,Hr],[Je.right-1,Jn],[Pt.left+1,Jn],[Pt.left+1,Hr]];break;case"right":Ko=[[Pt.right-1,Hr],[Pt.right-1,Jn],[Je.left+1,Jn],[Je.left+1,Hr]];break}function Ti(In){let[lo,Zr]=In;switch(Rt){case"top":{const qr=[Wt?lo+n/2:Zt?lo+n*4:lo-n*4,Zr+n+1],si=[Wt?lo-n/2:Zt?lo+n*4:lo-n*4,Zr+n+1],jr=[[Je.left,Zt||Wt?Je.bottom-n:Je.top],[Je.right,Zt?Wt?Je.bottom-n:Je.top:Je.bottom-n]];return[qr,si,...jr]}case"bottom":{const qr=[Wt?lo+n/2:Zt?lo+n*4:lo-n*4,Zr-n],si=[Wt?lo-n/2:Zt?lo+n*4:lo-n*4,Zr-n],jr=[[Je.left,Zt||Wt?Je.top+n:Je.bottom],[Je.right,Zt?Wt?Je.top+n:Je.bottom:Je.top+n]];return[qr,si,...jr]}case"left":{const qr=[lo+n+1,Pn?Zr+n/2:en?Zr+n*4:Zr-n*4],si=[lo+n+1,Pn?Zr-n/2:en?Zr+n*4:Zr-n*4];return[...[[en||Pn?Je.right-n:Je.left,Je.top],[en?Pn?Je.right-n:Je.left:Je.right-n,Je.bottom]],qr,si]}case"right":{const qr=[lo-n,Pn?Zr+n/2:en?Zr+n*4:Zr-n*4],si=[lo-n,Pn?Zr-n/2:en?Zr+n*4:Zr-n*4],jr=[[en||Pn?Je.left+n:Je.right,Je.top],[en?Pn?Je.left+n:Je.right:Je.left+n,Je.bottom]];return[qr,si,...jr]}}}if(!xn([ze,Et],Ko)){if(w&&!hn)return Ie();if(!Lt&&s){const In=U(Ue.clientX,Ue.clientY);if(In!==null&&In<.1)return Ie()}xn([ze,Et],Ti([te,$]))?!w&&s&&(A=window.setTimeout(Ie,40)):Ie()}}};return de.__options={blockPointerEvents:i},de}function On(r){var n;r===void 0&&(r={});const{open:i=!1,onOpenChange:s,nodeId:A}=r,[w,T]=g.useState(null),B=((n=r.elements)==null?void 0:n.reference)||w,N=Xr(r),U=xr(),de=_o(s),Q=g.useRef(null),te=g.useRef({}),$=g.useState(()=>Ei())[0],ce=fa(),me=g.useCallback(Ue=>{const Ie=Gt(Ue)?{getBoundingClientRect:()=>Ue.getBoundingClientRect(),contextElement:Ue}:Ue;N.refs.setReference(Ie)},[N.refs]),xe=g.useCallback(Ue=>{(Gt(Ue)||Ue===null)&&(Q.current=Ue,T(Ue)),(Gt(N.refs.reference.current)||N.refs.reference.current===null||Ue!==null&&!Gt(Ue))&&N.refs.setReference(Ue)},[N.refs]),he=g.useMemo(()=>ci(Kn({},N.refs),{setReference:xe,setPositionReference:me,domReference:Q}),[N.refs,xe,me]),we=g.useMemo(()=>ci(Kn({},N.elements),{domReference:B}),[N.elements,B]),He=g.useMemo(()=>ci(Kn({},N),{refs:he,elements:we,dataRef:te,nodeId:A,floatingId:ce,events:$,open:i,onOpenChange:de}),[N,A,ce,$,i,de,he,we]);return bn(()=>{const Ue=U==null?void 0:U.nodesRef.current.find(Ie=>Ie.id===A);Ue&&(Ue.context=He)}),g.useMemo(()=>ci(Kn({},N),{context:He,refs:he,elements:we}),[N,he,we,He])}function zr(r,n,i){const s=new Map;return Kn(Kn(Kn({},i==="floating"&&{tabIndex:-1}),r),n.map(A=>A?A[i]:null).concat(r).reduce((A,w)=>(w&&Object.entries(w).forEach(T=>{let[B,N]=T;if(B.indexOf("on")===0){if(s.has(B)||s.set(B,[]),typeof N=="function"){var U;(U=s.get(B))==null||U.push(N),A[B]=function(){for(var de,Q=arguments.length,te=new Array(Q),$=0;$<Q;$++)te[$]=arguments[$];return(de=s.get(B))==null?void 0:de.map(ce=>ce(...te)).find(ce=>ce!==void 0)}}}else A[B]=N}),A),{}))}function Do(r){r===void 0&&(r=[]);const n=r,i=g.useCallback(w=>zr(w,r,"reference"),n),s=g.useCallback(w=>zr(w,r,"floating"),n),A=g.useCallback(w=>zr(w,r,"item"),r.map(w=>w==null?void 0:w.item));return g.useMemo(()=>({getReferenceProps:i,getFloatingProps:s,getItemProps:A}),[i,s,A])}function pe(r,n){return n||(n=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(n)}}))}var jt=R(608),Fe=R.n(jt),zo,qo=Fe().div(zo||(zo=pe([`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #7e7e7e;

  padding: 8px;

  width: max-content;
  min-width: 69px;
  height: 32px;

  background: var(--color-white)fff;

  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`]))),K=R(893);function Yo(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Ii(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Yo(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Yo(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var wi=function(n){var i=n.title,s=n.placement,A=s===void 0?"bottom":s,w=n.children,T=n.className,B=(0,g.useState)(!1),N=ee(B,2),U=N[0],de=N[1],Q=On({placement:A,open:U,onOpenChange:de,middleware:[ct(5),on({fallbackAxisSideDirection:"start",padding:5}),Sn({padding:5})],whileElementsMounted:Ct}),te=Q.refs,$=Q.floatingStyles,ce=Q.context,me=Xo(ce,{move:!1}),xe=Eo(ce),he=Ur(ce),we=ws(ce,{role:"tooltip"}),He=Do([me,xe,he,we]),Ue=He.getReferenceProps,Ie=He.getFloatingProps;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("div",Ii(Ii({ref:te.setReference},Ue()),{},{children:w})),U&&(0,K.jsx)(qo,Ii(Ii({className:T,ref:te.setFloating,style:$},Ie()),{},{children:i}))]})},Se,Xe;function it(){return it=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},it.apply(this,arguments)}var It=function(n){return g.createElement("svg",it({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Se||(Se=g.createElement("path",{d:"M20.28 15.667c-.832 0-1.63.32-2.231.893l-3.255-2.52a3.074 3.074 0 0 0 .368-2.155l2.242-.733a3.231 3.231 0 0 0 3.98 1.568 3.217 3.217 0 0 0 1.732-1.494 3.198 3.198 0 0 0-.991-4.148 3.23 3.23 0 0 0-4.252.498 3.201 3.201 0 0 0-.814 2.132c.002.193.021.384.058.573l-2.243.734c-.269-.53-.68-.975-1.188-1.287A3.241 3.241 0 0 0 12 9.25c-.296 0-.59.043-.874.126l-1.092-2.452a3.198 3.198 0 0 0 1.224-4.028 3.214 3.214 0 0 0-1.584-1.598 3.231 3.231 0 0 0-4.058 1.167 3.199 3.199 0 0 0 .592 4.166 3.227 3.227 0 0 0 2.112.786c.296-.001.59-.044.874-.126l1.093 2.452a3.215 3.215 0 0 0-1.435 2.035 3.197 3.197 0 0 0 .457 2.445l-3.52 3.117a3.181 3.181 0 0 0-2.07-.757c-.716 0-1.413.24-1.978.679a3.197 3.197 0 0 0-.966 3.824c.289.653.788 1.192 1.42 1.53a3.23 3.23 0 0 0 3.902-.658 3.202 3.202 0 0 0 .314-3.93l3.519-3.118c.577.49 1.312.76 2.07.757.832-.001 1.63-.321 2.231-.894l3.255 2.52a3.074 3.074 0 0 0-.425 1.582 3.2 3.2 0 0 0 1.987 2.964 3.232 3.232 0 0 0 3.51-.695 3.204 3.204 0 0 0 .698-3.497 3.228 3.228 0 0 0-2.975-1.98Zm0-8.25a2.306 2.306 0 0 1 2.125 1.414 2.283 2.283 0 0 1-.499 2.498 2.303 2.303 0 0 1-3.926-1.62 2.299 2.299 0 0 1 .677-1.618 2.316 2.316 0 0 1 1.623-.674ZM6.019 4.208a2.286 2.286 0 0 1 1.42-2.117 2.308 2.308 0 0 1 2.506.497A2.289 2.289 0 0 1 8.32 6.5a2.316 2.316 0 0 1-1.623-.675 2.299 2.299 0 0 1-.677-1.617Zm-2.3 17.875a2.306 2.306 0 0 1-2.126-1.414 2.284 2.284 0 0 1 .499-2.498 2.303 2.303 0 0 1 3.927 1.62 2.299 2.299 0 0 1-.677 1.618c-.431.429-1.014.671-1.624.674Zm8.28-7.333a2.306 2.306 0 0 1-2.125-1.415 2.284 2.284 0 0 1 .499-2.497 2.303 2.303 0 0 1 3.926 1.62 2.299 2.299 0 0 1-.677 1.617c-.43.43-1.014.672-1.623.675Zm8.28 6.417a2.306 2.306 0 0 1-2.124-1.415 2.283 2.283 0 0 1 .498-2.497 2.302 2.302 0 0 1 2.507-.497 2.299 2.299 0 0 1 1.42 2.117 2.299 2.299 0 0 1-.677 1.617c-.43.43-1.014.672-1.623.675Z",fill:"silver"})),Xe||(Xe=g.createElement("path",{d:"M20.28 7.417a2.306 2.306 0 0 1 2.125 1.414 2.283 2.283 0 0 1-.499 2.498 2.303 2.303 0 0 1-3.926-1.62 2.299 2.299 0 0 1 .677-1.618 2.316 2.316 0 0 1 1.623-.674ZM3.718 22.083a2.306 2.306 0 0 1-2.125-1.414 2.284 2.284 0 0 1 .499-2.498 2.303 2.303 0 0 1 3.927 1.62 2.299 2.299 0 0 1-.677 1.618c-.431.429-1.014.671-1.624.674Z",fill:"silver"})))};const un=It;var Dn;function u(){return u=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},u.apply(this,arguments)}var v=function(n){return g.createElement("svg",u({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Dn||(Dn=g.createElement("path",{d:"M4 3h14c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1Zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1ZM4.125 11h15.75c.619 0 1.125.45 1.125 1s-.506 1-1.125 1H4.125C3.506 13 3 12.55 3 12s.506-1 1.125-1Zm0 4h9c.619 0 1.125.45 1.125 1s-.506 1-1.125 1h-9C3.506 17 3 16.55 3 16s.506-1 1.125-1ZM19.875 19H4.125C3.506 19 3 19.45 3 20s.506 1 1.125 1h15.75c.619 0 1.125-.45 1.125-1s-.506-1-1.125-1Z",fill:"var(--color-navy-blue)"})))};const C=v;var O,V,re,ke,Re,Te=Fe().div(O||(O=pe([`
  display: flex;
  align-items: center;
  justify-content: center;
`]))),ie=Fe().div(V||(V=pe([`
  display: flex;
  justify-content: end;

  width: 100%;
`]))),Pe=Fe().div(re||(re=pe([`
  font-size: 26px;
  font-weight: 400;
  color: var(--color-silver);

  cursor: pointer;

  &:hover {
    background: var(--color-decomposition-hover);
    path {
      fill: var(--color-navy-blue);
    }
  }

  padding: 4px 8px;

  border-radius: 4px;

  path {
    fill: var(--color-silver);
  }

  `,`
`])),function(r){return r.$isActive&&(0,jt.css)(ke||(ke=pe([`
      background: var(--color-smoky-white);

      path {
        fill: var(--color-navy-blue);
      }
    `])))}),l=Fe().span(Re||(Re=pe([`
  margin: 0 4px;

  border-left: 1px solid #c0c0c0;
`]))),p=function(n){var i=n.tab,s=n.className,A=n.onTabClick,w=function(B){return function(){A(B)}};return(0,K.jsx)(Te,{className:s,children:(0,K.jsxs)(ie,{children:[(0,K.jsx)(wi,{title:"SCn-\u043A\u043E\u0434",children:(0,K.jsx)(Pe,{$isActive:i==="scn",onClick:w("scn"),children:(0,K.jsx)(C,{})})}),(0,K.jsx)(l,{}),(0,K.jsx)(wi,{title:"SCg-\u043A\u043E\u0434",placement:"bottom-end",children:(0,K.jsx)(Pe,{$isActive:i==="scg",onClick:w("scg"),children:(0,K.jsx)(un,{})})})]})})};function b(r,n){if(r==null)return{};var i={},s=Object.keys(r),A,w;for(w=0;w<s.length;w++)A=s[w],!(n.indexOf(A)>=0)&&(i[A]=r[A]);return i}function _(r,n){if(r==null)return{};var i=b(r,n),s,A;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(r);for(A=0;A<w.length;A++)s=w[A],!(n.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(i[s]=r[s])}return i}var j=["children"],oe=function(n){var i=(0,g.createContext)(n),s=function(T){var B=T.children,N=_(T,j);return(0,K.jsx)(i.Provider,{value:N,children:B})},A=function(){return(0,g.useContext)(i)};return[s,A]},Ce=oe({toasts:[],addToast:function(){},removeToast:function(){}}),Le=ee(Ce,2),qe=Le[0],Ve=Le[1],Mt=oe({deletingToasts:[],removeToast:function(){}}),sn=ee(Mt,2),ur=sn[0],rn=sn[1],Tn,hr,Tr,Or=(0,jt.keyframes)(Tn||(Tn=pe([`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
`]))),mo=(0,jt.keyframes)(hr||(hr=pe([`
  to {
    opacity: 0;
    transform: translateX(40px);
  }
`]))),Jo=Fe().div(Tr||(Tr=pe([`
  animation: `,` 0.3s ease both;
`])),function(r){var n=r.$isDisappearing;return n?mo:Or}),Un=function(n){var i=n.id,s=Ve(),A=s.removeToast,w=s.toasts,T=rn(),B=T.removeToast,N=T.deletingToasts,U=w.find(function(ce){return ce.params.id===i}),de=(0,g.useCallback)(function(){var ce,me;A(i),U==null||(ce=(me=U.component.props).onClose)===null||ce===void 0||ce.call(me)},[i,A,U==null?void 0:U.component.props]);(0,g.useEffect)(function(){(U==null?void 0:U.params.duration)!=="infinity"&&setTimeout(de,U==null?void 0:U.params.duration)},[U==null?void 0:U.params.duration,de]);var Q=U?(0,g.cloneElement)(U.component,{onClose:U.params.closeable?de:void 0}):null,te=N.includes(i),$=function(){te&&B(i)};return(0,K.jsx)(Jo,{$isDisappearing:te,onAnimationEnd:$,children:Q})};function vo(r){if(Array.isArray(r))return ve(r)}function $r(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xn(r){return vo(r)||$r(r)||ae(r)||Mn()}let Fi=r=>crypto.getRandomValues(new Uint8Array(r)),Za=(r,n,i)=>{let s=(2<<Math.log(r.length-1)/Math.LN2)-1,A=-~(1.6*s*n/r.length);return(w=n)=>{let T="";for(;;){let B=i(A),N=A;for(;N--;)if(T+=r[B[N]&s]||"",T.length===w)return T}}},Wo=(r,n=21)=>Za(r,n,Fi),go=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,i)=>(i&=63,i<36?n+=i.toString(36):i<62?n+=(i-26).toString(36).toUpperCase():i>62?n+="-":n+="_",n),"");var Fa,Cs,rl,ei,Fs,Us,la,xs,Ss,Ca,ol,Os=Fe().div(Fa||(Fa=pe([`
  position: fixed;
  top: 136px;
  bottom: 136px;
  left: 24px;
  right: 24px;

  z-index: 100;

  pointer-events: none;
`]))),Al=Fe().div(Cs||(Cs=pe([`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 24px;

  pointer-events: all;

  `,`
`])),function(r){var n=r.position;switch(n){case"topLeft":return(0,jt.css)(rl||(rl=pe([`
          left: 0;
          top: 0;
        `])));case"topCenter":return(0,jt.css)(ei||(ei=pe([`
          left: 50%;
          top: 0;

          transform: translate3d(-50%, 0, 0);

          align-items: center;
        `])));case"topRight":return(0,jt.css)(Fs||(Fs=pe([`
          top: 0;
          right: 0;

          align-items: flex-end;
        `])));case"centerLeft":return(0,jt.css)(Us||(Us=pe([`
          left: 0;
          top: 50%;

          transform: translate3d(0, -50%, 0);
        `])));case"center":return(0,jt.css)(la||(la=pe([`
          left: 50%;
          top: 50%;

          transform: translate3d(-50%, -50%, 0);

          align-items: center;
        `])));case"centerRight":return(0,jt.css)(xs||(xs=pe([`
          right: 0;
          top: 50%;

          transform: translate3d(0, -50%, 0);

          align-items: flex-end;
        `])));case"bottomLeft":return(0,jt.css)(Ss||(Ss=pe([`
          left: 0;
          bottom: 0;
        `])));case"bottomCenter":return(0,jt.css)(Ca||(Ca=pe([`
          left: 50%;
          bottom: 0;

          transform: translate3d(-50%, 0, 0);

          align-items: center;
        `])));case"bottomRight":return(0,jt.css)(ol||(ol=pe([`
          bottom: 0;
          right: 0;

          align-items: flex-end;
        `])));default:return""}});function zs(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function us(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?zs(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):zs(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var il=function(n){var i=n.className,s=Ve(),A=s.toasts,w=(0,g.useMemo)(function(){return A.reduce(function(T,B){return us(us({},T),{},ge({},B.params.position,[].concat(Xn(T[B.params.position]||[]),[B])))},{})},[A]);return(0,K.jsx)(Os,{className:i,children:Object.entries(w).map(function(T){var B=ee(T,2),N=B[0],U=B[1],de=N;return(0,K.jsx)(Al,{position:de,children:U.map(function(Q){var te=Q.params;return(0,K.jsx)(Un,{id:te.id},te.id)})},N)})})},cs=function(){return(0,K.jsx)(il,{})},xa=function(n){var i=n.children,s=n.renderToasts,A=s===void 0?cs:s,w=(0,g.useState)([]),T=ee(w,2),B=T[0],N=T[1],U=(0,g.useState)([]),de=ee(U,2),Q=de[0],te=de[1],$=(0,g.useCallback)(function(xe,he){var we,He={id:(he==null?void 0:he.id)||go(5),duration:(he==null?void 0:he.duration)||"infinity",position:(he==null?void 0:he.position)||"topCenter",closeable:(we=he==null?void 0:he.closeable)!==null&&we!==void 0?we:!0};N(function(Ue){return[{params:He,component:xe}].concat(Xn(Ue.filter(function(Ie){return Ie.params.id!==(he==null?void 0:he.id)})))})},[]),ce=(0,g.useCallback)(function(xe){te(function(he){return[].concat(Xn(he),[xe])})},[]),me=(0,g.useCallback)(function(xe){te(function(he){return he.filter(function(we){return we!==xe})}),N(function(he){return he.filter(function(we){return we.params.id!==xe})})},[]);return(0,K.jsx)(qe,{toasts:B,addToast:$,removeToast:ce,children:(0,K.jsxs)(ur,{deletingToasts:Q,removeToast:me,children:[i,A({toasts:B})]})})},Ws,Ps,Ua,Rl,Ic,Ju,ec,Mc=Fe().button(Ws||(Ws=pe([`
  display: flex;
  align-items: center;
  gap: `,`;
  box-sizing: border-box;
  outline: none;
  border-radius: `,`;
  cursor: pointer;
  font-family: `,`;
  font-weight: 500;
  letter-spacing: 0;
  user-select: none;

  fill: currentColor;

  &:disabled {
    pointer-events: none;
  }

  /* Variants */
  `,`

  /* Sizes */
  `,`

  `,`

  `,`

  /* Colors */
  `,`

  `,`
`])),function(r){var n=r.theme;return n.button.gap},function(r){var n=r.theme;return n.button.borderRadius},function(r){var n=r.theme;return n.button.font.fontFamily},function(r){return r.$variant==="contained"&&(0,jt.css)(Ps||(Ps=pe([`
      border: none;
    `])))},function(r){return r.$size==="lg"&&(0,jt.css)(Ua||(Ua=pe([`
      padding: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),function(n){var i=n.theme;return i.button.size.large.padding},function(n){var i=n.theme;return i.button.font.large.fontSize},function(n){var i=n.theme;return i.button.font.large.lineHeight})},function(r){return r.$size==="md"&&(0,jt.css)(Rl||(Rl=pe([`
      padding: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),function(n){var i=n.theme;return i.button.size.medium.padding},function(n){var i=n.theme;return i.button.font.medium.fontSize},function(n){var i=n.theme;return i.button.font.medium.lineHeight})},function(r){return r.$size==="sm"&&(0,jt.css)(Ic||(Ic=pe([`
      padding: `,`;
      font-size: `,`;
      line-height: `,`;
    `])),function(n){var i=n.theme;return i.button.size.small.padding},function(n){var i=n.theme;return i.button.font.small.fontSize},function(n){var i=n.theme;return i.button.font.small.lineHeight})},function(r){return r.$color==="primary"&&(0,jt.css)(Ju||(Ju=pe([`
      background: `,`;
      color: `,`;

      &:hover {
        background: `,`;
      }
      &:active {
        background: `,`;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      &:disabled {
        background: `,`;
        color: `,`;
      }
    `])),function(n){var i=n.theme;return i.button.colors.primary.backgroundInitial},function(n){var i=n.theme;return i.button.colors.primary.text},function(n){var i=n.theme;return i.button.colors.primary.backgroundHover},function(n){var i=n.theme;return i.button.colors.primary.backgroundActive},function(n){var i=n.theme;return i.button.colors.primary.backgroundDisabled},function(n){var i=n.theme;return i.button.colors.primary.textDisabled})},function(r){return r.$color==="secondary"&&(0,jt.css)(ec||(ec=pe([`
      background: `,`;
      color: `,`;

      &:hover {
        background: `,`;
      }
      &:active {
        background: `,`;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      &:disabled {
        background: `,`;
        color: `,`;
      }
    `])),function(n){var i=n.theme;return i.button.colors.secondary.backgroundInitial},function(n){var i=n.theme;return i.button.colors.secondary.text},function(n){var i=n.theme;return i.button.colors.secondary.backgroundHover},function(n){var i=n.theme;return i.button.colors.secondary.backgroundActive},function(n){var i=n.theme;return i.button.colors.secondary.backgroundDisabled},function(n){var i=n.theme;return i.button.colors.primary.textDisabled})}),yu=["variant","color","size","children"];function Bs(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Au(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Bs(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Bs(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var al=function(n){var i=n.variant,s=i===void 0?"contained":i,A=n.color,w=A===void 0?"primary":A,T=n.size,B=T===void 0?"lg":T,N=n.children,U=_(n,yu);return(0,K.jsx)(Mc,Au(Au({$variant:s,$color:w,$size:B},U),{},{children:N}))},ya=function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return function(A){i.forEach(function(w){w&&(typeof w=="function"?w(A):w.current=A)})}},Zl=function(n,i){n.setSelectionRange&&setTimeout(function(){n.setSelectionRange(i,i)},0)},ds;function jl(){return jl=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},jl.apply(this,arguments)}var Lc=function(n){return g.createElement("svg",jl({width:21,height:14,viewBox:"0 0 19 14",fill:"var(--color-dull-grey)",xmlns:"http://www.w3.org/2000/svg"},n),ds||(ds=g.createElement("path",{d:"M6.972 7c0 .638.257 1.25.715 1.7a2.459 2.459 0 0 0 1.726.705c.647 0 1.268-.253 1.726-.704A2.387 2.387 0 0 0 11.853 7c0-.638-.257-1.25-.714-1.7a2.459 2.459 0 0 0-1.726-.705c-.647 0-1.268.253-1.726.704A2.387 2.387 0 0 0 6.972 7Zm11.902-.554C16.808 2.158 13.686 0 9.5 0 5.312 0 2.192 2.158.126 6.448a1.279 1.279 0 0 0 0 1.106C2.192 11.842 5.314 14 9.5 14c4.188 0 7.308-2.158 9.374-6.448a1.278 1.278 0 0 0 0-1.106Zm-9.461 4.333C7.295 10.78 5.578 9.087 5.578 7c0-2.087 1.717-3.78 3.835-3.78S13.248 4.914 13.248 7c0 2.087-1.717 3.78-3.835 3.78Z"})))};const Nc=Lc;var Vs,sl;function ll(){return ll=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},ll.apply(this,arguments)}var _u=function(n){return g.createElement("svg",ll({width:22,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Vs||(Vs=g.createElement("path",{d:"M10.914 13.406a2.407 2.407 0 0 0 2.397-2.615l-2.606 2.606c.069.006.138.01.209.01Zm7.965-9.85-.918-.916a.172.172 0 0 0-.243 0l-2.349 2.35c-1.295-.663-2.752-.994-4.37-.994-4.128 0-7.21 2.15-9.242 6.452a1.296 1.296 0 0 0 0 1.106c.812 1.71 1.79 3.082 2.934 4.114l-2.273 2.271a.172.172 0 0 0 0 .243l.917.918a.172.172 0 0 0 .243 0l15.3-15.3a.172.172 0 0 0 0-.243ZM7.133 11a3.781 3.781 0 0 1 5.562-3.336L11.65 8.708a2.408 2.408 0 0 0-3.028 3.028l-1.044 1.045A3.762 3.762 0 0 1 7.133 11Z",fill:"var(--color-dull-grey)"})),sl||(sl=g.createElement("path",{d:"M20.242 10.446c-.756-1.593-1.656-2.892-2.7-3.896l-3.097 3.096a3.783 3.783 0 0 1-4.884 4.885l-2.627 2.627c1.218.564 2.574.846 4.066.846 4.13 0 7.21-2.15 9.242-6.452a1.294 1.294 0 0 0 0-1.106Z",fill:"var(--color-dull-grey)"})))};const Eu=_u;var ul,ks,ii,ti,fs,ua,Sa,Hs,cl,Aa,ql=Fe().div(ul||(ul=pe([`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: `,`;
  gap: `,`;

  box-sizing: border-box;

  width: 100%;
  height: 40px;

  padding: `,`;

  border: `," solid ",`;
  border-radius: `,`;

  outline: none;
  cursor: text;

  background-color: `,`;

  @media (hover: hover) {
    &:hover {
      border-color: `,`;
    }
  }

  `,`

  `,`

	`,`
`])),function(r){var n=r.theme;return n.input.font.fontFamily},function(r){var n=r.theme;return n.input.iconGap},function(r){var n=r.theme;return n.input.size.padding},function(r){var n=r.theme;return n.input.size.borderWidth},function(r){var n=r.theme;return n.input.colors.initial.border},function(r){var n=r.theme;return n.input.borderRadius},function(r){var n=r.theme;return n.input.colors.initial.background},function(r){var n=r.theme;return n.input.colors.borderHover},function(r){return r.$isFocused&&(0,jt.css)(ks||(ks=pe([`
      border-color: `,`;

      @media (hover: hover) {
        &:hover {
          border-color: `,`;
        }
      }
    `])),function(n){var i=n.theme;return i.input.colors.borderFocused},function(n){var i=n.theme;return i.input.colors.borderFocusedHover})},function(r){return r.$isError&&(0,jt.css)(ii||(ii=pe([`
      border-color: `,`;
      @media (hover: hover) {
        &:hover {
          border-color: `,`;
        }
      }
    `])),function(n){var i=n.theme;return i.input.colors.borderError},function(n){var i=n.theme;return i.input.colors.borderErrorHover})},function(r){return r.$isDisabled&&(0,jt.css)(ti||(ti=pe([`
      background-color: `,`;
      border-color: `,`;

      cursor: default;
      pointer-events: none;
    `])),function(n){var i=n.theme;return i.input.colors.disabled.background},function(n){var i=n.theme;return i.input.colors.disabled.border})}),tc=Fe().div(fs||(fs=pe([`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`]))),nc=Fe().input(ua||(ua=pe([`
  flex-grow: 1;

  padding: 0;
  min-width: 0;

  font-family: inherit;
  font-style: normal;
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;

  border: none;
  outline: none;

  color: `,`;

  &::placeholder {
    color: `,`;
    font-weight: `,`;
  }

  &:disabled {
    background-color: `,`;
    color: `,`;

    cursor: default;
  }
`])),function(r){var n=r.theme;return n.input.font.inputWeight},function(r){var n=r.theme;return n.input.font.fontSize},function(r){var n=r.theme;return n.input.font.lineHeight},function(r){var n=r.theme;return n.input.colors.initial.text},function(r){var n=r.theme;return n.input.colors.placeholder},function(r){var n=r.theme;return n.input.font.placeholderWeight},function(r){var n=r.theme;return n.input.colors.disabled.background},function(r){var n=r.theme;return n.input.colors.disabled.text}),Jl=Fe().div(Sa||(Sa=pe([`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`]))),bu=Fe().div(Hs||(Hs=pe([`
  display: flex;
  flex-shrink: 0;
`]))),Ts=Fe()(Nc)(cl||(cl=pe([`
  flex-shrink: 0;
  padding: 0px 1px;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`]))),eu=Fe()(Eu)(Aa||(Aa=pe([`
  flex-shrink: 0;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
`]))),tu=["iconLeft","iconRight","type","status","className","inputClassName","disabled","style","showPasswordIcon","hidePasswordIcon"];function rc(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Fc(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?rc(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):rc(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var ps=(0,g.forwardRef)(function(r,n){var i=r.iconLeft,s=r.iconRight,A=r.type,w=r.status,T=r.className,B=r.inputClassName,N=r.disabled,U=r.style,de=r.showPasswordIcon,Q=de===void 0?(0,K.jsx)(eu,{}):de,te=r.hidePasswordIcon,$=te===void 0?(0,K.jsx)(Ts,{}):te,ce=_(r,tu),me=(0,g.useState)(!1),xe=ee(me,2),he=xe[0],we=xe[1],He=(0,g.useState)(A),Ue=ee(He,2),Ie=Ue[0],ze=Ue[1],Et=(0,g.useState)(!1),Ut=ee(Et,2),Ot=Ut[0],Lt=Ut[1],St=(0,g.useRef)(null),dt=function(){ze(Ie==="password"?"text":"password"),Lt(function(Wt){return!Wt}),St.current&&Zl(St.current,St.current.value.length)},Pt=function(){var Wt;St==null||(Wt=St.current)===null||Wt===void 0||Wt.focus()},Je=function(Wt){var Pn;we(!0),(Pn=ce.onFocus)===null||Pn===void 0||Pn.call(ce,Wt)},Rt=function(Wt){var Pn;we(!1),(Pn=ce.onBlur)===null||Pn===void 0||Pn.call(ce,Wt)},Zt=function(Wt){var Pn;Wt.stopPropagation(),(Pn=ce.onMouseDown)===null||Pn===void 0||Pn.call(ce,Wt)},en=A==="password";return(0,K.jsxs)(ql,{$isFocused:he,$isError:w==="error",$isDisabled:N,className:T,style:U,onClick:Pt,onMouseDown:function(Wt){return Wt.preventDefault()},children:[i&&(0,K.jsx)(tc,{children:i}),(0,K.jsx)(nc,Fc(Fc({ref:ya(n,St),autoComplete:"off",spellCheck:"false",type:Ie,disabled:N},ce),{},{className:B,onFocus:Je,onBlur:Rt,onMouseDown:Zt})),(s||en)&&(0,K.jsxs)(Jl,{children:[en&&Ot&&(0,K.jsx)(bu,{onClick:dt,children:Q}),en&&!Ot&&(0,K.jsx)(bu,{onClick:dt,children:$}),s]})]})});ps.displayName="Input";var dl;function Ks(){return Ks=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Ks.apply(this,arguments)}var nu=function(n){return g.createElement("svg",Ks({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),dl||(dl=g.createElement("path",{d:"m12.94 12 5.527-5.527a.667.667 0 0 0-.94-.94L12 11.06 6.473 5.527a.67.67 0 1 0-.947.946L11.06 12l-5.534 5.527a.667.667 0 1 0 .94.94L12 12.94l5.526 5.527a.667.667 0 0 0 .94-.94L12.94 12Z",fill:"var(--color-silver)"})))};const ru=nu;var za,Wa,$s,hs,ms,Gs=Fe().div(za||(za=pe([`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: `,`;
  padding: `,`;
  width: `,`;
  max-width: `,`;
  border-radius: `,`;
  border: `," solid ",`;
  background-color: `,`;

  color: `,`;

  `,`
`])),function(r){var n=r.theme;return n.chip.size.gap},function(r){var n=r.$hasCloseIcon;return n?function(i){var s=i.theme;return s.chip.size.paddingWithIcon}:function(i){var s=i.theme;return s.chip.size.padding}},function(r){var n=r.theme;return n.chip.size.width},function(r){var n=r.theme;return n.chip.size.maxWidth},function(r){var n=r.theme;return n.chip.size.borderRadius},function(r){var n=r.theme;return n.chip.size.border},function(r){var n=r.theme;return n.chip.colors.border},function(r){var n=r.theme;return n.chip.colors.backgroundColor},function(r){var n=r.theme;return n.chip.colors.color},function(r){var n=r.$disabled;return n&&(0,jt.css)(Wa||(Wa=pe([`
      color: `,`;
      border: `,` solid
        `,`;
      pointer-events: none;
    `])),function(i){var s=i.theme;return s.chip.colors.disabled.color},function(i){var s=i.theme;return s.chip.size.disabled.border},function(i){var s=i.theme;return s.chip.colors.disabled.border})}),Uc=Fe().div($s||($s=pe([`
  font-family: `,`;
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  max-width: `,`;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`])),function(r){var n=r.theme;return n.chip.font.fontFamily},function(r){var n=r.theme;return n.chip.font.fontWeight},function(r){var n=r.theme;return n.chip.font.fontSize},function(r){var n=r.theme;return n.chip.font.lineHeight},function(r){var n=r.theme;return n.chip.size.maxWidthText}),oc=Fe().div(hs||(hs=pe([`
  flex-shrink: 0;
  border-radius: `,`;
  cursor: pointer;

  &:hover {
    background-color: `,`;
    path: {
      fill: `,`;
    }
  }

  `,`
`])),function(r){var n=r.theme;return n.chip.size.borderRadiusIcon},function(r){var n=r.theme;return n.chip.colors.hover.backgroundColorIcon},function(r){var n=r.theme;return n.chip.colors.hover.fillIcon},function(r){var n=r.$disabled;return n&&(0,jt.css)(ms||(ms=pe([`
      pointer-events: none;
      background-color: `,`;
      path: {
        fill: `,`;
      }
    `])),function(i){var s=i.theme;return s.chip.colors.disabled.backgroundColorIcon},function(i){var s=i.theme;return s.chip.colors.disabled.fillIcon})}),_l=(0,g.forwardRef)(function(r,n){var i=r.children,s=r.className,A=r.disabled,w=r.onClose,T=r.onClick,B=r.size,N=B===void 0?"m":B;return(0,K.jsxs)(Gs,{ref:n,onClick:T,className:s,$disabled:A,$size:N,$hasCloseIcon:!!w,children:[(0,K.jsx)(Uc,{size:N,children:i}),!!w&&(0,K.jsx)(oc,{onClick:w,$disabled:A,children:(0,K.jsx)(ru,{})})]})});_l.displayName="Chip";var Oa;function _a(){return _a=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},_a.apply(this,arguments)}var yi=function(n){return g.createElement("svg",_a({viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Oa||(Oa=g.createElement("path",{d:"M42 21A21 21 0 1 1 21 0v3.732A17.268 17.268 0 1 0 38.268 21H42Z",fill:"var(--color-navy-blue)"})))};const ns=yi;var wu,Cu,ou,xu=Fe().span(wu||(wu=pe([`
  display: block;

  width: `,`;
  height: `,`;
`])),function(r){var n=r.width;return"".concat(n,"px")},function(r){var n=r.height;return"".concat(n,"px")}),ic=(0,jt.keyframes)(Cu||(Cu=pe([`
  to {
    transform: rotate(360deg);
  }
`]))),Dl=Fe()(ns)(ou||(ou=pe([`
  animation: `,` 1s linear infinite;

  path {
    fill: `,`;
  }
`])),ic,function(r){var n=r.appearance;return n}),Il=function(n){var i=n.size,s=i===void 0?42:i,A=n.className,w=n.appearance,T=w===void 0?"#5896C0":w;return(0,K.jsx)(xu,{className:A,width:s,height:s,children:(0,K.jsx)(Dl,{appearance:T})})},Ml=["bottom","height","left","right","top","width"],Su=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ml.some(function(s){return n[s]!==i[s]})},Xs=new Map,El,iu=function r(){var n=[];Xs.forEach(function(i,s){var A=s.getBoundingClientRect(),w=A.bottom,T=A.height,B=A.left,N=A.right,U=A.top,de=A.width,Q=A.x,te=A.y,$={bottom:w,height:T,left:B,right:N,top:U,width:de,x:Q||B,y:te||U};Su($,i.rect)&&(i.rect=$,n.push(i))}),n.forEach(function(i){i.callbacks.forEach(function(s){return s(i.rect)})}),El=window.requestAnimationFrame(r)},Ou=function(n,i){return{observe:function(){var A=Xs.size===0;if(Xs.has(n)){var w;(w=Xs.get(n))===null||w===void 0||w.callbacks.push(i)}else Xs.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[i]});A&&iu()},unobserve:function(){var A=Xs.get(n);if(A){var w=A.callbacks.indexOf(i);w>=0&&A.callbacks.splice(w,1),A.callbacks.length||Xs.delete(n),Xs.size||cancelAnimationFrame(El)}}}},Pu,bl=Fe().div(Pu||(Pu=pe([`
  pointer-events: none;

  position: fixed;

  overflow: visible;

  z-index: 3;
`]))),ac=["targetRef","relativeRef","container","fullContainerWidth","className"];function Ll(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function au(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Ll(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Ll(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var Ys=function(n){var i=n.targetRef,s=n.relativeRef,A=n.container,w=n.fullContainerWidth,T=n.className,B=_(n,ac),N=(0,g.useRef)(null);return(0,g.useEffect)(function(){var U=N.current,de=s==null?void 0:s.current,Q=de?de.getBoundingClientRect():{x:0,y:0};if(U&&i.current){var te=Ou(i.current,function($){if($){var ce=$.x,me=$.y,xe=$.height,he=$.width,we=U.style;we.top="".concat(Q.y+me,"px"),we.left=w?"0px":"".concat(Q.x+ce,"px"),we.height="".concat(xe,"px"),we.width=w?"100%":"".concat(he,"px")}});return te.observe(),function(){te.unobserve()}}},[w]),(0,qt.createPortal)((0,K.jsx)(bl,au({className:T,ref:N},B)),(A==null?void 0:A.current)||document.body)},Bu,ku,wl,Qs,su=Fe().textarea(Bu||(Bu=pe([`
  width: 100%;
  max-height: 80px;
  min-height: 40px;

  padding: `,`;

  background-color: `,`;

  border: `," solid ",`;
  border-radius: `,`;

  font-size: `,`;
  line-height: `,`;

  resize: none;

  overflow: hidden;
  outline: none;

  color: `,`;

  &::placeholder {
    color: `,`;
    font-weight: `,`;
  }

  &:hover,
  &:focus {
    border-color: `,`;
  }

  `,`

  `,`

    `,`
`])),function(r){var n=r.theme;return n.textarea.size.padding},function(r){var n=r.theme;return n.textarea.colors.initial.background},function(r){var n=r.theme;return n.textarea.size.borderWidth},function(r){var n=r.theme;return n.textarea.colors.initial.border},function(r){var n=r.theme;return n.textarea.borderRadius},function(r){var n=r.theme;return n.textarea.font.fontSize},function(r){var n=r.theme;return n.textarea.font.lineHeight},function(r){var n=r.theme;return n.textarea.colors.initial.text},function(r){var n=r.theme;return n.textarea.colors.placeholder},function(r){var n=r.theme;return n.textarea.font.placeholderWeight},function(r){var n=r.theme;return n.textarea.colors.borderHover},function(r){var n=r.disabled;return n&&(0,jt.css)(ku||(ku=pe([`
      background-color: `,`;
      border-color: `,`;

      &:hover {
        border-color: `,`;
      }
    `])),function(i){var s=i.theme;return s.textarea.colors.disabled.background},function(i){var s=i.theme;return s.textarea.colors.disabled.border},function(i){var s=i.theme;return s.textarea.colors.disabled.border})},function(r){var n=r.status;return n==="error"&&(0,jt.css)(wl||(wl=pe([`
      border-color: `,`;

      &:hover {
        border-color: `,`;
      }
    `])),function(i){var s=i.theme;return s.textarea.colors.borderError},function(i){var s=i.theme;return s.textarea.colors.borderErrorHover})},function(r){var n=r.$isScrollable;return n&&(0,jt.css)(Qs||(Qs=pe([`
      margin-right: 6px;

      cursor: auto;

      overflow: auto;

      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;

        margin: 8px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;

        background-color: var(--color-silver);

        margin: 8px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;

        background-color: transparent;
      }
    `])))}),na=["className","status","onChange","onKeyDown","minHeight","maxHeight"];function fl(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Tu(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?fl(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):fl(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var lu=(0,g.forwardRef)(function(r,n){var i=r.className,s=r.status,A=r.onChange,w=r.onKeyDown,T=r.minHeight,B=T===void 0?39:T,N=r.maxHeight,U=N===void 0?84:N,de=_(r,na),Q=(0,g.useRef)(null),te=(0,g.useState)(""),$=ee(te,2),ce=$[0],me=$[1],xe=(0,g.useState)("".concat(B,"px")),he=ee(xe,2),we=he[0],He=he[1],Ue=(0,g.useState)(!1),Ie=ee(Ue,2),ze=Ie[0],Et=Ie[1];(0,g.useEffect)(function(){var Ot=function(){He("".concat(B,"px")),Q.current&&He("".concat(Q.current.scrollHeight,"px"))};if(Q.current)return He("".concat(Q.current.scrollHeight,"px")),window.addEventListener("resize",Ot),function(){window.removeEventListener("resize",Ot)}},[B,ce]),(0,g.useEffect)(function(){me(de.value||"")},[de.value]);var Ut=function(Lt){He("".concat(B,"px")),Q.current&&(me(Lt.target.value),A==null||A(Lt))};return(0,g.useEffect)(function(){Et(Number(we.replace(/[^0-9, ]/g,""))>U)},[U,we]),(0,K.jsx)(su,Tu(Tu({},de),{},{className:i,disabled:de.disabled,status:s,$isScrollable:ze,style:{height:we},onChange:Ut,onKeyDown:w,ref:ya(Q,n)}))});lu.displayName="Textarea";var Qr=function(n,i){return n=Math.ceil(n),i=Math.floor(i),Math.floor(Math.random()*(i-n+1))+n},Rs=function(n){return typeof n=="number"?"".concat(n,"px"):n},Cl,sc,vs,pl=(0,jt.keyframes)(Cl||(Cl=pe([`
  to {
    opacity: 0.4;
  }
`]))),uu=Fe().span.attrs(function(r){return{width:Rs(r.width),height:Rs(r.height)}})(sc||(sc=pe([`
  display: block;

  width: `,`;
  height: `,`;

  background-color: var(--color-soft-grey);

  border-radius: 8px;

  animation: `,` 0.8s ease-in-out infinite alternate-reverse both;
`])),function(r){var n=r.width;return n},function(r){var n=r.height;return n},pl),zc=Fe().span(vs||(vs=pe([`
  display: flex;
  align-items: center;

  width: 100%;
  height: `,`;
`])),function(r){var n=r.height;return n}),qa=(0,g.forwardRef)(function(r,n){var i=r.width,s=i===void 0?"".concat(Qr(20,60),"%"):i,A=r.height,w=r.className,T=(0,g.useState)(null),B=ee(T,2),N=B[0],U=B[1],de=(0,g.useRef)(null);(0,g.useEffect)(function(){if(de.current){var $=de.current.parentElement;if($){var ce=getComputedStyle($),me=ce.fontSize,xe=ce.lineHeight;U({fontSize:me,lineHeight:xe})}}},[]);var Q=Rs(A),te=Q||(N==null?void 0:N.fontSize);return(0,K.jsxs)(zc,{ref:ya(n,de),height:N==null?void 0:N.lineHeight,children:["\u200B",(0,K.jsx)(uu,{className:w,width:s,height:te})]})});qa.displayName="PseudoText";var Ru=function(n){var i=n.width,s=n.height,A=n.className;return(0,K.jsx)(uu,{className:A,width:i,height:s})},rs=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=n.threshold,s=n.rootMargin,A=n.root,w=(0,g.useState)(!1),T=ee(w,2),B=T[0],N=T[1],U=(0,g.useRef)(null),de=(0,g.useRef)(null),Q=(0,g.useCallback)(function(te){N(te.some(function($){var ce=$.isIntersecting;return ce}))},[]);return(0,g.useEffect)(function(){var te=U.current;if(te){var $=new IntersectionObserver(Q,{threshold:i,rootMargin:s,root:de.current||A});return $.observe(te),function(){$.unobserve(te)}}},[Q,A,s,i]),[U,B,de]},gs,Zs,ys,Nl=Fe().div(gs||(gs=pe([`
  overflow: auto;
`]))),lc=Fe().div(Zs||(Zs=pe([`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`]))),Fl=Fe().div(ys||(ys=pe([`
  position: absolute;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: gold;

  bottom: `,`;
`])),function(r){return r.bottom}),Wc=function(n){var i=n.className,s=n.total,A=n.pageSize,w=A===void 0?5:A,T=n.triggerOffset,B=T===void 0?"20px":T,N=n.initialPage,U=N===void 0?1:N,de=n.renderElement,Q=(0,g.useState)(!1),te=ee(Q,2),$=te[0],ce=te[1],me=(0,g.useState)(U),xe=ee(me,2),he=xe[0],we=xe[1],He=rs(),Ue=ee(He,3),Ie=Ue[0],ze=Ue[1],Et=Ue[2],Ut=(0,g.useRef)(null),Ot=Math.min(w*he,s),Lt=Ot===s;return(0,g.useEffect)(function(){Ut.current&&(Ut.current.scrollTop=0)},[]),(0,g.useEffect)(function(){if(!($||Lt)){var St=Ut.current,dt=Ie.current;if(!(!dt||!St)){var Pt=dt.offsetTop<St.offsetHeight;if(!Pt)return ce(!0);we(function(Je){return Je+1})}}},[Lt,he,$]),(0,g.useEffect)(function(){!$||!ze||Lt||we(function(St){return St+1})},[ze,Lt,$]),(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(Nl,{className:i,ref:ya(Ut,Et),children:(0,K.jsxs)(lc,{children:[Array.from({length:Ot}).map(function(St,dt){return(0,K.jsx)(g.Fragment,{children:de(dt)},dt)}),(0,K.jsx)(Fl,{ref:Ie,bottom:B})]})})})},ju=function(n){var i=n.total,s=n.pageSize,A=s===void 0?5:s,w=n.initialPage,T=w===void 0?1:w,B=(0,g.useState)(!1),N=ee(B,2),U=N[0],de=N[1],Q=(0,g.useState)(T),te=ee(Q,2),$=te[0],ce=te[1],me=rs(),xe=ee(me,3),he=xe[0],we=xe[1],He=xe[2],Ue=Math.min(A*$,i),Ie=Ue===i;return(0,g.useEffect)(function(){He.current&&(He.current.scrollTop=0)},[]),(0,g.useEffect)(function(){if(!(U||Ie)){var ze=He.current,Et=he.current;if(!(!Et||!ze)){var Ut=Et.offsetTop<ze.offsetHeight;if(!Ut)return de(!0);ce(function(Ot){return Ot+1})}}},[Ie,$,U]),(0,g.useEffect)(function(){!U||!we||Ie||ce(function(ze){return ze+1})},[we,Ie,U]),{page:$,scrollRef:He,targetRef:he}},ki=["children"],cu=(0,g.createContext)({}),hl=function(){return(0,g.useContext)(cu).client},Ul=function(n){var i=n.children,s=_(n,ki);return(0,K.jsx)(cu.Provider,{value:s,children:i})},qs=["children"],uc=(0,g.createContext)({}),Ja=function(){return(0,g.useContext)(uc)},Ci=function(n){var i=n.children,s=_(n,qs);return(0,K.jsx)(uc.Provider,{value:s,children:i})};function Wi(r,n,i,s,A,w,T){try{var B=r[w](T),N=B.value}catch(U){i(U);return}B.done?n(N):Promise.resolve(N).then(s,A)}function Vr(r){return function(){var n=this,i=arguments;return new Promise(function(s,A){var w=r.apply(n,i);function T(N){Wi(w,s,A,T,B,"next",N)}function B(N){Wi(w,s,A,T,B,"throw",N)}T(void 0)})}}var Du=R(687),cr=R.n(Du),tr=R(401),zl=function(n){return n.replace(/_(\w)/g,function(i,s){return s.toUpperCase()})},ra=5e3,Iu=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(!(i<1))for(var s=!1,A=0,w=n.keys();A<i&&!s;){var T=w.next();s=!!T.done,n.delete(T.value),A++}},Mu=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ra,s=new Map;return Vr(cr().mark(function A(){var w,T,B,N,U,de,Q,te,$,ce,me,xe=arguments;return cr().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:for(w=xe.length,T=new Array(w),B=0;B<w;B++)T[B]=xe[B];if(N=T.filter(function(He){return!s.get(He)}).map(function(He){return{id:He,type:tr.ScType.ConstNode}}),U=T.filter(function(He){return s.get(He)}),de=s.size+N.length-i,de>0&&Iu(s,de),!N.length){we.next=11;break}return we.next=8,n.resolveKeynodes(N);case 8:we.t0=we.sent,we.next=12;break;case 11:we.t0=[];case 12:return Q=we.t0,te=Object.entries(Q),$=U.map(function(He){return[He,s.get(He)]}),te.forEach(function(He){var Ue=ee(He,2),Ie=Ue[0],ze=Ue[1];return s.set(Ie,ze)}),ce=[].concat(te,Xn($)),me=ce.map(function(He){var Ue=ee(He,2),Ie=Ue[0],ze=Ue[1];return[zl(Ie),ze]}),we.abrupt("return",Object.fromEntries(me));case 19:case"end":return we.stop()}},A)}))},os={ru:"lang_ru",en:"lang_en"},Pa=["nrelMainIdtf"],is=function(n){var i=n.client,s=Mu(i),A=(function(){var Q=Vr(cr().mark(function te($,ce){var me,xe,he,we,He,Ue,Ie;return cr().wrap(function(Et){for(;;)switch(Et.prev=Et.next){case 0:return Et.next=2,s("nrel_main_idtf",os[ce]);case 2:return me=Et.sent,xe=me.nrelMainIdtf,he=_(me,Pa),we=he[zl(os[ce])],He=new tr.ScTemplate,Ue="_link",He.quintuple($,tr.ScType.VarCommonArc,[tr.ScType.VarNodeLink,Ue],tr.ScType.VarPermPosArc,xe),He.triple(we,tr.ScType.VarPermPosArc,Ue),Et.next=12,i.searchByTemplate(He);case 12:if(Ie=Et.sent,!Ie.length){Et.next=15;break}return Et.abrupt("return",Ie[0].get(Ue));case 15:return Et.abrupt("return",null);case 16:case"end":return Et.stop()}},te)}));return function($,ce){return Q.apply(this,arguments)}})(),w=(function(){var Q=Vr(cr().mark(function te($,ce){var me,xe;return cr().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,A($,ce);case 2:if(me=we.sent,!me){we.next=8;break}return we.next=6,i.getLinkContents([me]);case 6:return xe=we.sent,we.abrupt("return",xe[0].data);case 8:return we.abrupt("return",null);case 9:case"end":return we.stop()}},te)}));return function($,ce){return Q.apply(this,arguments)}})(),T=(function(){var Q=Vr(cr().mark(function te($){var ce,me,xe,he,we,He;return cr().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,s("nrel_system_identifier");case 2:return ce=Ie.sent,me=ce.nrelSystemIdentifier,xe=new tr.ScTemplate,he="_link",xe.quintuple($,tr.ScType.VarCommonArc,[tr.ScType.VarNodeLink,he],tr.ScType.VarPermPosArc,me),Ie.next=9,i.searchByTemplate(xe);case 9:if(we=Ie.sent,!we.length){Ie.next=15;break}return Ie.next=13,i.getLinkContents([we[0].get(he)]);case 13:return He=Ie.sent,Ie.abrupt("return",String(He[0].data));case 15:return Ie.abrupt("return",null);case 16:case"end":return Ie.stop()}},te)}));return function($){return Q.apply(this,arguments)}})(),B=(function(){var Q=Vr(cr().mark(function te($,ce){var me,xe;return cr().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:return we.next=2,w($,ce);case 2:if(me=we.sent,!me){we.next=5;break}return we.abrupt("return",String(me));case 5:return we.next=7,T($);case 7:if(xe=we.sent,!xe){we.next=10;break}return we.abrupt("return",String(xe));case 10:return we.abrupt("return",String($.value));case 11:case"end":return we.stop()}},te)}));return function($,ce){return Q.apply(this,arguments)}})(),N=(function(){var Q=Vr(cr().mark(function te($){var ce,me;return cr().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:if(ce=Number($),!ce){he.next=3;break}return he.abrupt("return",ce);case 3:return he.next=5,s(String($));case 5:return me=he.sent,he.abrupt("return",me[zl(String($))].value);case 7:case"end":return he.stop()}},te)}));return function($){return Q.apply(this,arguments)}})(),U=function(te){return new Promise(function($){s("nrel_result").then((function(){var ce=Vr(cr().mark(function me(xe){var he,we,He,Ue,Ie,ze,Et,Ut,Ot,Lt,St;return cr().wrap(function(Pt){for(;;)switch(Pt.prev=Pt.next){case 0:return we=xe.nrelResult,He=(function(){var Je=Vr(cr().mark(function Rt(Zt,en,hn,Wt){var Pn,pn;return cr().wrap(function(Jn){for(;;)switch(Jn.prev=Jn.next){case 0:return Pn=new tr.ScTemplate,Pn.triple(we,tr.ScType.VarPermPosArc,en),Jn.next=4,i.searchByTemplate(Pn);case 4:if(pn=Jn.sent.length,pn){Jn.next=7;break}return Jn.abrupt("return");case 7:i.destroyElementaryEventSubscriptions(Wt),$(hn);case 9:case"end":return Jn.stop()}},Rt)}));return function(Zt,en,hn,Wt){return Je.apply(this,arguments)}})(),Ue=new tr.ScEventSubscriptionParams(te,tr.ScEventType.AfterGenerateOutgoingArc,He),Pt.next=5,i.createElementaryEventSubscriptions(Ue);case 5:return Ie=Pt.sent,ze=ee(Ie,1),Et=ze[0],Ut="_result",Ot=new tr.ScTemplate,Ot.quintuple(te,tr.ScType.VarCommonArc,[tr.ScType.VarNode,Ut],tr.ScType.VarPermPosArc,we),Pt.next=13,i.searchByTemplate(Ot);case 13:if(Lt=Pt.sent,St=(he=Lt[0])===null||he===void 0?void 0:he.get(Ut),St){Pt.next=17;break}return Pt.abrupt("return");case 17:i.destroyElementaryEventSubscriptions(Et.id),$(St);case 19:case"end":return Pt.stop()}},me)}));return function(me){return ce.apply(this,arguments)}})())})},de=(function(){var Q=Vr(cr().mark(function te($){var ce,me;return cr().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return ce=new tr.ScConstruction,ce.generateLink(tr.ScType.ConstNodeLink,new tr.ScLinkContent($,tr.ScLinkContentType.String)),he.next=4,i.generateElements(ce);case 4:if(me=he.sent,!me.length){he.next=7;break}return he.abrupt("return",me[0]);case 7:return he.abrupt("return",null);case 8:case"end":return he.stop()}},te)}));return function($){return Q.apply(this,arguments)}})();return{searchKeynodes:s,getId:B,getMainIdLinkAddr:A,getMainId:w,getSystemId:T,addrOrSystemIdAddr:N,getResult:U,generateLink:de}},du=(0,g.createContext)({}),xl=function(){return(0,g.useContext)(du)},cc=function(n){var i=n.children,s=hl();return(0,K.jsx)(du.Provider,{value:is({client:s}),children:i})},Lu=(0,g.createContext)({}),Wl=function(){var n=(0,g.useContext)(Lu),i=n.lang;return i},Vc=function(){return(0,g.useContext)(Lu)},Hc=function(n){var i=n.children,s=n.defaultLanguage,A=(0,g.useState)(s),w=ee(A,2),T=w[0],B=w[1],N=(0,g.useMemo)(function(){return{lang:T,setLang:B}},[T]);return(0,K.jsx)(Lu.Provider,{value:N,children:i})},L=function(){var n=Wl();return(0,g.useCallback)(function(i){return i[n]},[n])},W=function(n){var i=n.children,s=L();return(0,K.jsx)(K.Fragment,{children:s(i)})},G=function(n){return n},Y=function(n){var i=n.addrOrSystemId,s=n.loaderHeight,A=n.loaderWidth,w=n.defaultText,T=w===void 0?"...":w,B=n.renderText,N=B===void 0?G:B,U=n.setIsLoad,de=(0,g.useState)(!1),Q=ee(de,2),te=Q[0],$=Q[1],ce=(0,g.useState)(""),me=ee(ce,2),xe=me[0],he=me[1],we=(0,g.useState)(null),He=ee(we,2),Ue=He[0],Ie=He[1],ze=Wl(),Et=hl(),Ut=xl(),Ot=Ut.getMainId,Lt=Ut.getSystemId,St=Ut.getMainIdLinkAddr,dt=Ut.addrOrSystemIdAddr;return(0,g.useEffect)(function(){$(!0),Vr(cr().mark(function Pt(){var Je,Rt;return cr().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return en.t0=tr.ScAddr,en.next=3,dt(i);case 3:return en.t1=en.sent,Je=new en.t0(en.t1),en.next=7,Ot(Je,ze);case 7:if(Rt=en.sent,Rt){en.next=13;break}return en.next=11,Lt(Je);case 11:Rt=en.sent,Rt||(Rt=T);case 13:he(String(Rt)),$(!1);case 15:case"end":return en.stop()}},Pt)}))()},[i,dt,Ot,ze,T]),(0,g.useEffect)(function(){Vr(cr().mark(function Pt(){var Je,Rt,Zt,en,hn,Wt,Pn;return cr().wrap(function(dn){for(;;)switch(dn.prev=dn.next){case 0:return dn.next=2,dt(i);case 2:return Je=dn.sent,dn.next=5,St(new tr.ScAddr(Je),ze);case 5:if(Rt=dn.sent,Rt){dn.next=8;break}return dn.abrupt("return");case 8:return Zt=(function(){var Jn=Vr(cr().mark(function Hr(Ko){var Ti,In,lo;return cr().wrap(function(qr){for(;;)switch(qr.prev=qr.next){case 0:return qr.next=2,Et.getLinkContents([Ko]);case 2:Ti=qr.sent,In=ee(Ti,1),lo=In[0],he(String(lo.data));case 6:case"end":return qr.stop()}},Hr)}));return function(Ko){return Jn.apply(this,arguments)}})(),en=new tr.ScEventSubscriptionParams(Rt,tr.ScEventType.BeforeChangeLinkContent,Zt),dn.next=12,Et.createElementaryEventSubscriptions(en);case 12:hn=dn.sent,Wt=ee(hn,1),Pn=Wt[0].id,Ie(Pn);case 16:case"end":return dn.stop()}},Pt)}))()},[i,dt,Et,St,ze]),(0,g.useEffect)(function(){if(Ue)return function(){Et.destroyElementaryEventSubscriptions(Ue)}},[Et,Ue]),(0,g.useEffect)(function(){xe&&U&&U(!1)},[xe]),(0,K.jsxs)(K.Fragment,{children:[!U&&te&&(0,K.jsx)(qa,{height:s,width:A}),!te&&N(xe)]})},je=function(n,i){var s=(0,g.useCallback)(function(A){var w=Array.isArray(n)?n:[n],T=w.every(function(B){var N;return B.current&&!((N=B.current)!==null&&N!==void 0&&N.contains(A.target))});T&&i(A)},[i,n]);(0,g.useEffect)(function(){return document.addEventListener("mousedown",s,!0),document.addEventListener("touchstart",s),function(){document.removeEventListener("mousedown",s,!0),document.removeEventListener("touchstart",s)}},[s])},ut=function(n,i){var s=(0,g.useRef)(null),A=(0,g.useRef)(n);return(0,g.useEffect)(function(){A.current=n},[n]),(0,g.useEffect)(function(){if(typeof i=="number")return s.current=window.setInterval(function(){return A.current()},i),function(){return window.clearInterval(s.current||0)}},[i]),s},gt,Qt,Kt,bt,At=Fe()(Ys)(gt||(gt=pe([`
  display: flex;
  flex-wrap: nowrap;

  z-index: 3;

  flex-direction: `,`;
`])),function(r){var n=r.display;return function(){switch(n){case"bottom":return"column";case"top":return"column-reverse";default:return"column"}}}),vn=Fe().div(Qt||(Qt=pe([`
  pointer-events: none;

  height: 100%;

  flex: 0 0 auto;
`]))),mr=Fe().div(Kt||(Kt=pe([`
  pointer-events: initial;
  margin: 2px 0;

  background-color: var(--color-white);

  border-radius: 10px;

  flex: 0 0 auto;

  max-width: calc(100vw - 32px);

  opacity: 0;

  transition-delay: 200ms;
  transition-property: opacity;

  `,`

  margin-right: 6px;
  cursor: auto;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    margin: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background-color: var(--color-silver);

    margin: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;

    background-color: transparent;
  }
`])),function(r){return r.display==="center"&&(0,jt.css)(bt||(bt=pe([`
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    `])))}),Rr=["targetRef","relativeRef","onClickOutside","className"];function Co(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Qo(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Co(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Co(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var ai=68,Ui=80,xi=2,yo={top:0,right:0,bottom:0,left:0},Ai=(0,g.forwardRef)(function(r,n){var i=r.targetRef,s=r.relativeRef,A=r.onClickOutside,w=A===void 0?function(){return null}:A,T=r.className,B=T===void 0?"":T,N=_(r,Rr),U=(0,g.useState)("bottom"),de=ee(U,2),Q=de[0],te=de[1],$=function(){var xe,he=ce.current,we=i.current;if(!(!he||!we)){var He=he.getBoundingClientRect(),Ue=we.getBoundingClientRect(),Ie=(s==null||(xe=s.current)===null||xe===void 0?void 0:xe.getBoundingClientRect())||yo,ze=window.innerHeight,Et=window.innerWidth,Ut=Ue.bottom+Ie.top+xi+He.height+ai<ze,Ot=xi+He.height+Ui<Ue.top+Ie.top;te(Ut?"bottom":Ot?"top":"center");var Lt=He.right-He.left;Ue.right<Lt&&Et-Ue.left<Lt?he.style.alignSelf="center":Ue.right-16>=Lt&&Et-Ue.left>=Lt?he.style.alignSelf="":Ue.right-16<Lt?he.style.alignSelf="flex-start":Et-Ue.left<Lt&&(he.style.alignSelf="flex-end")}};ut($,100),(0,g.useEffect)(function(){ce.current&&(ce.current.style.opacity="1")},[]);var ce=(0,g.useRef)(null);return je([ce],w),(0,K.jsxs)(At,{display:Q,targetRef:i,relativeRef:s,container:N.container,children:[(0,K.jsx)(vn,{}),(0,K.jsx)(mr,Qo({className:B,display:Q||"center",ref:ya(n,ce)},N))]})});Ai.displayName="Dropdown";var oa,Qi=Fe().div(oa||(oa=pe([`
  display: flex;
  flex: 0 0 auto;
  align-items: center;

  font-family: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;

  word-break: break-word;

  padding: `,`;

  background-color: transparent;

  cursor: pointer;
`])),function(r){var n=r.theme;return n.dropdownOption.font.fontFamily},function(r){var n=r.theme;return n.dropdownOption.font.fontSize},function(r){var n=r.theme;return n.dropdownOption.font.lineHeight},function(r){var n=r.theme;return n.dropdownOption.colors.text},function(r){var n=r.theme;return n.dropdownOption.size.padding}),Js=["children","className"];function Vo(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Ea(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Vo(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Vo(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var so=(0,g.forwardRef)(function(r,n){var i=r.children,s=r.className,A=_(r,Js);return(0,K.jsx)(Qi,Ea(Ea({ref:n,className:s},A),{},{children:i}))});so.displayName="DropdownOption";var Ba,js,As=Fe().div(Ba||(Ba=pe([`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: `,`;

  z-index: 3;
`])),function(r){var n=r.theme;return n.popup.colors.overlayBackground}),el=Fe().div(js||(js=pe([`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 3;
`]))),fu=function(n){var i=n.children,s=n.className,A=n.onClose,w=(0,g.useCallback)(function(T){T.key==="Escape"&&A()},[A]);return(0,g.useEffect)(function(){return window.addEventListener("keydown",w),function(){window.removeEventListener("keydown",w)}},[A,w]),En().createPortal((0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(As,{onClick:A}),(0,K.jsx)(el,{className:s,children:i})]}),document.body)},hd,of=Fe().button(hd||(hd=pe([`
  padding: 0;

  border: none;

  background: none;

  outline: none;

  cursor: pointer;
`]))),dc=(0,g.forwardRef)(function(r,n){var i=r.children,s=r.className,A=r.disabled,w=A===void 0?!1:A,T=r.type,B=T===void 0?"button":T,N=r.onClick;return(0,K.jsx)(of,{type:B,className:s,ref:n,onClick:N,disabled:w,children:i})});dc.displayName="ButtonWithIcon";function md(r){if(r==null)throw new TypeError("Cannot destructure "+r)}function Vl(){return Vl=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Vl.apply(this,arguments)}var vd={updateable:!1},pu=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vd,s=(0,g.useState)(n),A=ee(s,2),w=A[0],T=A[1],B=(0,g.useCallback)(function(){return T(!1)},[]),N=(0,g.useCallback)(function(){return T(!0)},[]),U=(0,g.useCallback)(function(){return T(function(de){return!de})},[]);return(0,g.useEffect)(function(){i.updateable&&T(n)},[n]),[w,N,B,U]},Ff="#5896C0",gd;function Kc(){return Kc=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Kc.apply(this,arguments)}var af=function(n){return g.createElement("svg",Kc({width:18,height:19,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),gd||(gd=g.createElement("path",{d:"M16.84 8.988a.728.728 0 0 1 0 1.024L9.464 17.37a5.032 5.032 0 0 1-7.116-7.115l8.922-9.039a3.594 3.594 0 1 1 5.085 5.077L7.434 15.33a2.138 2.138 0 0 1-1.528.638 2.157 2.157 0 0 1-1.527-3.684l7.484-7.6a.72.72 0 1 1 1.024 1.006L5.403 13.3a.72.72 0 0 0-.215.511.728.728 0 0 0 .206.513.746.746 0 0 0 .512.206.728.728 0 0 0 .512-.206l8.913-9.048a2.138 2.138 0 0 0 .638-1.527 2.157 2.157 0 0 0-3.684-1.527L3.373 11.27a3.593 3.593 0 1 0 5.076 5.085l7.367-7.367a.728.728 0 0 1 1.024 0Z",fill:"var(--color-dirty-grey)"})))};const sf=af;var yd,lf,es,Va,uf=Fe()(Ai)(yd||(yd=pe([`
  width: 600px;
  max-height: 380px;

  box-shadow: 0px 2px 4px var(--color-card-shadow);

  padding: 8px 0;

  overflow: auto;
`]))),Ad=Fe()(so)(lf||(lf=pe([`
  &:hover {
    background-color: var(--color-decomposition-hover);
  }

  `,`
`])),function(r){return r.$isLoad&&(0,jt.css)(es||(es=pe([`
      display: flex;
      align-items: center;
      
      gap: 8px;
    `])))}),Uf=Fe()(sf)(Va||(Va=pe([`
  margin-right: 5px;
`]))),cf=["children"],_d=(0,g.createContext)({}),$c=function(){return(0,g.useContext)(_d)},df=function(n){var i=n.children,s=_(n,cf);return(0,K.jsx)(_d.Provider,{value:s,children:i})},Gc,Ed,bd,wd=["addr","systemId","as","children","showMenu"];function Xc(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Yc(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Xc(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Xc(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var Nu=function(n){var i=n.addr,s=n.systemId,A=n.as,w=A===void 0?"div":A,T=n.children,B=n.showMenu,N=B===void 0?!0:B,U=_(n,wd),de=pu(!1),Q=ee(de,3),te=Q[0],$=Q[1],ce=Q[2],me=(0,g.useRef)(null),xe=w,he=(function(){var He=Vr(cr().mark(function Ue(Ie){return cr().wrap(function(Et){for(;;)switch(Et.prev=Et.next){case 0:Ie.preventDefault(),Ie.stopPropagation(),$();case 3:case"end":return Et.stop()}},Ue)}));return function(Ie){return He.apply(this,arguments)}})(),we=i?{"data-addr":i}:{"data-system-id":s||""};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(xe,Yc(Yc(Yc({},U),we),{},{ref:me,onContextMenu:he,children:T})),te&&N&&(0,K.jsx)(Fu,{addr:i,systemId:s,onClose:ce,targetRef:me})]})},Fu=function(n){var i=n.addr,s=n.systemId,A=n.targetRef,w=n.relativeRef,T=n.onClose,B=(0,g.useState)(!1),N=ee(B,2),U=N[0],de=N[1],Q=(0,g.useState)([]),te=ee(Q,2),$=te[0],ce=te[1],me=$c(),xe=me.getContextItems,he=me.onFixArgument,we=L(),He=(0,g.useRef)(null);(0,g.useEffect)(function(){de(!0),Vr(cr().mark(function Ie(){var ze,Et;return cr().wrap(function(Ot){for(;;)switch(Ot.prev=Ot.next){case 0:return Ot.next=2,xe(i||s);case 2:if(ze=Ot.sent,ze){Ot.next=5;break}return Ot.abrupt("return",T());case 5:Et=ze.map(function(Lt){return{addr:Lt}}),ce(Et),de(!1);case 8:case"end":return Ot.stop()}},Ie)}))()},[i,xe,T,s]);var Ue=(function(){var Ie=Vr(cr().mark(function ze(Et){return cr().wrap(function(Ot){for(;;)switch(Ot.prev=Ot.next){case 0:Et.stopPropagation(),he==null||he(i||s),T();case 3:case"end":return Ot.stop()}},ze)}));return function(Et){return Ie.apply(this,arguments)}})();return(0,g.useEffect)(function(){var Ie=function(Et){Et.key==="Escape"&&T()};return document.addEventListener("keydown",Ie),function(){document.removeEventListener("keydown",Ie)}},[T]),je(He,T),(0,K.jsxs)(uf,{ref:He,targetRef:A,relativeRef:w,children:[U&&(0,K.jsxs)(Ad,{$isLoad:!0,children:[(0,K.jsx)(Il,{size:24,appearance:Ff}),we({ru:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",en:"Loading"})]}),!U&&(0,K.jsx)(K.Fragment,{children:$.map(function(Ie,ze){var Et=Ie.addr;return(0,K.jsx)(hu,{command:Et,addr:i,showMenu:!1,onClick:T,children:(0,K.jsx)(Ad,{children:(0,K.jsx)(Y,{addrOrSystemId:Et})})},ze)})})]})},zf=Fe()(Nu)(Gc||(Gc=pe([`
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;

  `,`
`])),function(r){var n=r.appearance;switch(n){case"blue":return(0,jt.css)(Ed||(Ed=pe([`
          color: var(--color-navy-blue);

          &:hover {
            background-color: var(--color-grey-blue);

            color: var(--color-dark-blue);
          }
        `])));case"transparent":return(0,jt.css)(bd||(bd=pe([`
          &:hover {
            color: var(--color-dark-grey);
          }
        `])));default:return""}}),hu=function(n){var i=n.addr,s=n.children,A=n.systemId,w=n.command,T=n.className,B=n.as,N=n.appearance,U=N===void 0?"blue":N,de=n.showMenu,Q=n.onClick,te=Ja(),$=te.onExecuteCommand,ce=(function(){var me=Vr(cr().mark(function xe(he){return cr().wrap(function(He){for(;;)switch(He.prev=He.next){case 0:he.stopPropagation(),Q==null||Q(),$(i||A,w);case 3:case"end":return He.stop()}},xe)}));return function(he){return me.apply(this,arguments)}})();return(0,K.jsx)(zf,{className:T,forwardedAs:B,addr:i,systemId:A,showMenu:de,onClick:ce,appearance:U,children:s})},Qc,Cd,fc,ml,Wf=Fe().div(Qc||(Qc=pe([`
  position: absolute;
  height: calc(100vh - 80px - 36px);

  display: flex;
  justify-content: center;
  align-items: center;

  display: `,`;
`])),function(r){return r.show?"block":"none"}),ff=Fe()(Il)(Cd||(Cd=pe([`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate3d(-50%, -50%, 0);
`]))),xd=Fe().iframe(fc||(fc=pe([`
  width: 100%;
  height: 100%;

  margin: -7px;

  border: 0;
`]))),Vf=Fe().div(ml||(ml=pe([`
  width: `,`;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: var(--color-dark-grey);

  b {
    font-weight: 500;
  }
`])),function(r){return r.$isClear?"383px":"344px"}),Hl=(function(r){return r.deleteScgElement="deleteScgElement",r.deleteScgElements="deleteScgElements",r.clearScene="clearScene",r.updateScg="updateScg",r.openFragment="openFragment",r.emptyFragment="emptyFragment",r.fullfilledFragment="fullfilledFragment",r})({}),pc="#5896C0",Ha=`
  <style>
    .demo-scg-tools-panel {
      display: none !important;
    }
  </style>
`,pf=function(n){var i=n.action,s=n.readonly,A=n.className,w=n.url,T=n.show,B=T===void 0?!1:T,N=n.onOpenFragment,U=n.onUpdateScg,de=n.onEmptyFragment,Q=n.onFullfilledFragment,te=(0,g.useState)(!1),$=ee(te,2),ce=$[0],me=$[1],xe=(0,g.useState)(!1),he=ee(xe,2),we=he[0],He=he[1],Ue=(0,g.useState)(null),Ie=ee(Ue,2),ze=Ie[0],Et=Ie[1],Ut=pu(!1),Ot=ee(Ut,3),Lt=Ot[0],St=Ot[1],dt=Ot[2],Pt=pu(!1),Je=ee(Pt,3),Rt=Je[0],Zt=Je[1],en=Je[2],hn=(0,g.useState)(),Wt=ee(hn,2),Pn=Wt[0],pn=Wt[1],dn=(0,g.useState)(),Jn=ee(dn,2),Hr=Jn[0],Ko=Jn[1],Ti=(0,g.useRef)(null),In=(0,g.useRef)(null),lo=xl(),Zr=lo.searchKeynodes,qr=Wl(),si=function(){return Et(null)},jr=function(ui){var $o;ui.preventDefault();var Pr=ui.target.closest("[sc_addr]");if(Pr){var Zo=Number(($o=Pr.attributes.getNamedItem("sc_addr"))===null||$o===void 0?void 0:$o.nodeValue)||void 0;Et(null),setTimeout(function(){Et({element:Pr,addr:Zo})},10)}};return(0,g.useEffect)(function(){var li;He(!0);var ui=Ti.current;if(!ui)return He(!1);ui.contentWindow.onInitializationFinished=function(){me(!0)},ui.contentWindow.demoImplementation=!0,(li=ui.contentWindow)===null||li===void 0||li.addEventListener("DOMContentLoaded",function(){var $o,Pr,Zo;($o=ui.contentDocument)===null||$o===void 0||$o.addEventListener("click",si),(Pr=ui.contentDocument)===null||Pr===void 0||Pr.addEventListener("contextmenu",jr),s&&((Zo=ui.contentDocument)===null||Zo===void 0||Zo.head.insertAdjacentHTML("beforeend",Ha)),setTimeout(function(){return He(!1)},800)})},[s]),(0,g.useEffect)(function(){var li=Ti.current;li&&(window.onmessage=function(ui){var $o,Pr;switch(ui.data.type){case Hl.deleteScgElement:St(),pn(function(){var Zo;return(Zo=li.contentWindow)===null||Zo===void 0?void 0:Zo.deleteScgElement});break;case Hl.deleteScgElements:St(),pn(function(){var Zo;return(Zo=li.contentWindow)===null||Zo===void 0?void 0:Zo.deleteScgElements});break;case Hl.clearScene:Zt(),Ko(function(){var Zo;return(Zo=li.contentWindow)===null||Zo===void 0?void 0:Zo.clearScene});break;case Hl.updateScg:if(!i)break;U==null||U(i);break;case Hl.openFragment:if(!(($o=ui.data)!==null&&$o!==void 0&&(Pr=$o.payload)!==null&&Pr!==void 0&&Pr.fragmentAddr))break;N==null||N(ui.data.payload.fragmentAddr);break;case Hl.emptyFragment:de==null||de();break;case Hl.fullfilledFragment:Q==null||Q();break}})},[U,N,de,Q,i]),(0,g.useEffect)(function(){Vr(cr().mark(function li(){var ui,$o,Pr,Zo,kl,gu;return cr().wrap(function(Tl){for(;;)switch(Tl.prev=Tl.next){case 0:if(!(!ce||!B||!i)){Tl.next=2;break}return Tl.abrupt("return");case 2:if(Pr=Ti.current,Pr){Tl.next=5;break}return Tl.abrupt("return");case 5:return Tl.next=7,Zr(os[qr]);case 7:Zo=Tl.sent,kl=Vl({},(md(Zo),Zo)),gu=kl[zl(os[qr])],(ui=($o=Pr.contentWindow).renderScg)===null||ui===void 0||ui.call($o,i,gu.value);case 11:case"end":return Tl.stop()}},li)}))()},[ce,i,B,qr,Zr]),In.current=(ze==null?void 0:ze.element)||null,(0,K.jsxs)(Wf,{show:B,className:A,children:[we&&(0,K.jsx)(ff,{appearance:pc}),(0,K.jsx)(xd,{src:w,ref:Ti,title:"SCg codes"}),ze&&(0,K.jsx)(Fu,{onClose:si,addr:ze.addr,relativeRef:Ti,targetRef:In})]})},Hf=["children"],hc=(0,g.createContext)({}),Ka=function(){return(0,g.useContext)(hc)},Kf=function(n){var i=n.children,s=_(n,Hf);return(0,K.jsx)(hc.Provider,{value:s,children:i})},Hn="#5896C0",Mi,mc=(Mi={},ge(Mi,tr.ScType.CommonEdge.value,{right:"\u2194",left:"\u2194"}),ge(Mi,tr.ScType.CommonArc.value,{right:"\u2192",left:"\u2190"}),ge(Mi,tr.ScType.MembershipArc.value,{right:"..\u220D",left:"\u220A.."}),ge(Mi,tr.ScType.ConstCommonEdge.value,{right:"\u21D4",left:"\u21D4"}),ge(Mi,tr.ScType.VarCommonEdge.value,{right:"\u21D0\u21D2",left:"\u21D0\u21D2"}),ge(Mi,tr.ScType.ConstCommonArc.value,{right:"\u21D2",left:"\u21D0"}),ge(Mi,tr.ScType.VarCommonArc.value,{right:"_\u21D2",left:"_\u21D0"}),ge(Mi,tr.ScType.ConstPermPosArc.value,{right:"\u220D",left:"\u220A"}),ge(Mi,tr.ScType.ConstPermNegArc.value,{right:"\u220C",left:"\u2209"}),ge(Mi,tr.ScType.ConstFuzArc.value,{right:"/\u220D",left:"\u220A/"}),ge(Mi,tr.ScType.ConstTempPosArc.value,{right:"~\u220D",left:"\u220A~"}),ge(Mi,tr.ScType.ConstTempNegArc.value,{right:"~\u220C",left:"\u2209~"}),ge(Mi,tr.ScType.VarPermPosArc.value,{right:"_\u220D",left:"_\u220A"}),ge(Mi,tr.ScType.VarPermNegArc.value,{right:"_\u220C",left:"_\u2209"}),ge(Mi,tr.ScType.VarFuzArc.value,{right:"_/\u220D",left:"_\u220A/"}),ge(Mi,tr.ScType.VarTempPosArc.value,{right:"_~\u220D",left:"_\u220A~"}),ge(Mi,tr.ScType.VarTempNegArc.value,{right:"_~\u220C",left:"_\u2209~"}),Mi),hf=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"],mu=function(n){var i=n.addr,s=n.systemId,A=n.loaderHeight,w=n.loaderWidth,T=n.className,B=(0,g.useState)(!0),N=ee(B,2),U=N[0],de=N[1];return(0,K.jsxs)(K.Fragment,{children:[U&&(0,K.jsx)(qa,{height:A,width:w}),(0,K.jsx)(hu,{className:T,addr:i,systemId:s,as:"span",children:(0,K.jsx)(Y,{addrOrSystemId:i||s,loaderHeight:A,loaderWidth:w,setIsLoad:de})})]})},Uu,vc,Zc,Sd,Od=Fe()(Nu)(Uu||(Uu=pe([`
  display: flex;
  gap: 2px;

  padding: 8px;

  font-size: 18px;
  line-height: 21px;
  color: var(--color-dark-grey);

  `,`
`])),function(r){return r.isHTML&&(0,jt.css)(vc||(vc=pe([`
      display: block;

      p:first-of-type {
        margin-top: 0;
      }
    `])))}),mf=Fe()(hu)(Zc||(Zc=pe([`
  display: block;

  text-decoration: none;

  box-shadow: inset 0 0 0 1px var(--color-border-grey);

  background: linear-gradient(135deg, #d9d9d9 12px, transparent 12px);

  transition: all ease 0.15s;

  width: fit-content;

  word-break: break-word;

  &:hover {
    background-color: var(--color-decomposition-hover);

    opacity: 1;
  }

  &:active {
    box-shadow: inset 0 0 0 3px var(--color-border-grey);
  }
`]))),Pd=Fe()(mu)(Sd||(Sd=pe([`
  display: inline;
`]))),Bd=function(n){var i=(0,g.useState)(null),s=ee(i,2),A=s[0],w=s[1],T=rs(),B=ee(T,2),N=B[0],U=B[1],de=hl(),Q=(0,g.useCallback)(Vr(cr().mark(function te(){var $,ce,me;return cr().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,de.getLinkContents([new tr.ScAddr(n)]);case 2:if($=he.sent,ce=ee($,1),me=ce[0].data,me){he.next=7;break}return he.abrupt("return");case 7:w(String(me).trim());case 8:case"end":return he.stop()}},te)})),[n,de]);return(0,g.useEffect)(function(){U&&Q()},[Q,U]),{content:A,targetRef:N}},ka=function r(n){var i=n.node;if(i instanceof Text)return(0,K.jsx)(K.Fragment,{children:i.textContent});if(i.nodeName==="SC_ELEMENT"){var s,A=((s=i.attributes.getNamedItem("sys_idtf"))===null||s===void 0?void 0:s.nodeValue)||void 0;return(0,K.jsx)(Pd,{systemId:A})}if(!(i instanceof HTMLElement))return null;var w=hf.includes(i.nodeName.toLowerCase()),T=i.nodeName.toLowerCase();return w?(0,K.jsx)(T,{}):(0,K.jsx)(T,{children:Array.from(i.childNodes).map(function(B,N){return(0,K.jsx)(r,{node:B},N)})})},tl=function(n){var i=n.addr,s=(0,g.useState)(null),A=ee(s,2),w=A[0],T=A[1],B=rs(),N=ee(B,2),U=N[0],de=N[1],Q=hl(),te=(0,g.useCallback)(Vr(cr().mark(function $(){var ce,me,xe,he,we,He;return cr().wrap(function(Ie){for(;;)switch(Ie.prev=Ie.next){case 0:return Ie.next=2,Q.getLinkContents([new tr.ScAddr(i)]);case 2:if(ce=Ie.sent,me=ee(ce,1),xe=me[0].data,xe){Ie.next=7;break}return Ie.abrupt("return");case 7:he=new DOMParser,we=he.parseFromString(String(xe).trim(),"text/html"),He=we.querySelector("body"),T(He||null);case 11:case"end":return Ie.stop()}},$)})),[i,Q]);return(0,g.useEffect)(function(){de&&te()},[te,de]),(0,K.jsxs)(Od,{isHTML:!0,addr:i,children:[w&&Array.from(w.childNodes).map(function($,ce){return(0,K.jsx)(ka,{node:$},ce)}),!w&&(0,K.jsx)("span",{ref:U})]})},Kl=function(n){var i=n.addr,s=n.contentType,A=Bd(i),w=A.content,T=A.targetRef;return s==="format_html"?(0,K.jsx)(tl,{addr:i}):(0,K.jsxs)(Od,{forwardedAs:"span",addr:i,children:[w&&s==="format_png"&&(0,K.jsx)("img",{src:"data:image/png;base64,".concat(w)}),s!=="format_png"&&(0,K.jsx)(K.Fragment,{children:w}),!w&&(0,K.jsx)("span",{ref:T})]})},vf=function(n){var i=n.addr,s=n.contentType;return(0,K.jsx)(mf,{appearance:"transparent",addr:i,children:(0,K.jsx)(Kl,{addr:i,contentType:s})})},kd,Ds,Td,vl=Fe().div(kd||(kd=pe([`
  display: flex;
  align-items: center;
`]))),$f=Fe().div(Ds||(Ds=pe([`
  display: flex;
  align-items: center;
`]))),gf=Fe()(hu)(Td||(Td=pe([`
  margin: 0 4px;
`]))),Rd=function(n){var i=n.node,s=i.addr,A=i.type,w=i.sourceNode,T=i.targetNode;return!w||!T?null:(0,K.jsxs)(vl,{children:["(",(0,K.jsxs)($f,{children:[(0,K.jsx)(mu,{addr:w.addr,loaderWidth:Qr(40,80)}),(0,K.jsx)(gf,{addr:s,forwardedAs:"span",children:mc[A].right}),(0,K.jsx)(mu,{addr:T.addr,loaderWidth:Qr(40,80)})]}),")"]})},jd,Dd,yf,gc=Fe()(mu)(jd||(jd=pe([`
  font-weight: 500;
  line-height: 26px;
  font-size: 22px;
`]))),Id=Fe().div(Dd||(Dd=pe([`
  display: flex;
`]))),Is=Fe().span(yf||(yf=pe([`
  width: 20px;

  color: var(--color-navy-blue);
  
  flex-shrink: 0;
`]))),Lo=function(n){var i=n.tree,s=i.addr;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(gc,{addr:s}),(0,K.jsxs)(Id,{children:[(0,K.jsx)(Is,{children:"="}),(0,K.jsx)(Zi,{tree:i})]})]})},ba=function(n){var i=n.children,s=n.tree,A=s.addr,w=s.type,T=new tr.ScType(w),B=function(){return T.isConnector()?(0,K.jsx)(Rd,{node:s}):T.isLink()?(0,K.jsx)(Lo,{tree:s}):(0,K.jsx)(gc,{addr:A})};return(0,K.jsxs)(K.Fragment,{children:[B(),i]})},Zi=function(n){var i=n.children,s=n.tree,A=s.addr,w=s.content,T=s.contentType;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(vf,{addr:A,content:w,contentType:T}),i]})},Ta=function(n){var i=n.children,s=n.tree;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Rd,{node:s}),i]})},_s=function(n){var i=n.children,s=n.tree;return s.children?(0,K.jsxs)(K.Fragment,{children:["{",i,"}"]}):(0,K.jsx)(mu,{addr:s.addr})},zu=function(n){var i=n.tree.addr,s=n.children;return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(mu,{addr:i}),s]})},ia,Wu,$l,yc,qc,Ac=Fe().div(ia||(ia=pe([`
  border: solid 1px #96a399;

  background-color: var(--color-beige);

  padding: 8px;

  border-radius: 8px;

  width: 100%;

  position: relative;

  overflow: hidden;

  `,`
`])),function(r){var n=r.isScg;return n&&(0,jt.css)(Wu||(Wu=pe([`
      padding: 0;
    `])))}),as=Fe()(p)($l||($l=pe([`
  top: 8px !important;
`]))),Md=Fe()(pf)(yc||(yc=pe([`
  position: relative;

  min-height: 1024px;

  iframe {
    margin: 0 !important;
  }
`]))),Vu=Fe()(Il)(qc||(qc=pe([`
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
`]))),gl,_c,Jc,Sl,Ec,Ol,bc,Hu,Ld=Fe().div(gl||(gl=pe([`
  display: flex;
`]))),wc=Fe().div(_c||(_c=pe([`
  flex-shrink: 0;

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: var(--color-navy-blue);

  margin-right: 15px;
  margin-top: 6px;
`]))),ed=Fe().div(Jc||(Jc=pe([`
  font-family: 'Roboto';

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-grow: 1;
`]))),$a=Fe().div(Sl||(Sl=pe([`
  display: flex;

  width: 100%;
`]))),Pl=Fe().div(Ec||(Ec=pe([`
  width: 20px;

  color: var(--color-navy-blue);

  flex-shrink: 0;
  align-self: flex-start;

  font-family: 'Unicode Symbols', 'Times New Roman', 'Apple Symbols', 'Arial Unicode MS';
`]))),Ms=Fe().div(Ol||(Ol=pe([`
  flex-grow: 1;
`]))),ss=Fe().div(bc||(bc=pe([`
  display: flex;
  align-items: center;
  
  margin-bottom: 6px;
`]))),Af=Fe().div(Hu||(Hu=pe([`
  display: flex;
  flex-direction: column;
  gap: 10px;
`]))),Nd=["languages"],Fd=function(n){var i=n.type,s=new tr.ScType(i);return s.isConst()?(0,K.jsx)(K.Fragment,{children:":"}):(0,K.jsx)(K.Fragment,{children:"::"})},Gf=function(n){var i=n.tree,s=(0,g.useState)(!1),A=ee(s,2),w=A[0],T=A[1],B=(0,g.useState)(null),N=ee(B,2),U=N[0],de=N[1],Q=(0,g.useState)("scn"),te=ee(Q,2),$=te[0],ce=te[1],me=Ka(),xe=me.onInitiateAction,he=me.scgUrl,we=(0,g.useCallback)(Vr(cr().mark(function Ie(){var ze;return cr().wrap(function(Ut){for(;;)switch(Ut.prev=Ut.next){case 0:return T(!0),Ut.next=3,xe(i.addr);case 3:ze=Ut.sent,T(!1),de(ze);case 6:case"end":return Ut.stop()}},Ie)})),[xe,i.addr]);(0,g.useEffect)(function(){we()},[we]);var He=$==="scg",Ue=He&&!!U&&!w;return(0,K.jsxs)(Ac,{isScg:He,children:[(0,K.jsx)(as,{tab:$,onTabClick:ce}),!He&&(0,K.jsx)(Cc,{tree:i,isRoot:!0}),(0,K.jsx)(Md,{url:he,action:U||void 0,show:Ue,readonly:!0}),He&&w&&(0,K.jsx)(Vu,{appearance:Hn})]})},Gl=function(n){var i=n.node,s=n.showMarker,A=(0,g.useState)(!0),w=ee(A,2),T=w[0],B=w[1],N=Wl(),U=hl(),de=xl(),Q=de.searchKeynodes,te=new tr.ScType(i.type),$=te.isLink();return(0,g.useEffect)(function(){if(!$)return B(!0);Vr(cr().mark(function ce(){var me,xe,he,we,He,Ue,Ie,ze;return cr().wrap(function(Ut){for(;;)switch(Ut.prev=Ut.next){case 0:return Ut.next=2,Q("languages",os[N]);case 2:return me=Ut.sent,xe=me.languages,he=_(me,Nd),we=he[zl(os[N])],He=new tr.ScTemplate,Ue="_lang",He.triple(xe,tr.ScType.VarPermPosArc,[tr.ScType.VarNodeClass,Ue]),He.triple(Ue,tr.ScType.VarPermPosArc,new tr.ScAddr(i.addr)),Ut.next=12,U.searchByTemplate(He);case 12:if(Ie=Ut.sent,Ie.length){Ut.next=15;break}return Ut.abrupt("return",B(!0));case 15:ze=Ie[0].get(Ue),B(ze.value===we.value);case 17:case"end":return Ut.stop()}},ce)}))()},[U,Q,$,N,i.addr]),T?(0,K.jsxs)(Ld,{children:[s&&(0,K.jsx)(wc,{}),(0,K.jsx)(Cc,{tree:i})]}):null},_f=function(n){var i=n.tree,s=n.isRoot,A=s===void 0?!1:s,w=i.children,T=i.type,B=i.struct,N=new tr.ScType(T),U=function(){return A?ba:N.isLink()?Zi:N.isConnector()?Ta:N.isTuple()?_s:zu},de=U(),Q=N.isTuple();return(0,K.jsx)(ed,{children:(0,K.jsxs)(de,{tree:i,children:[B&&(0,K.jsxs)($a,{children:[(0,K.jsx)(Pl,{children:"="}),(0,K.jsx)(Ms,{children:(0,K.jsx)(Gf,{tree:B})})]}),w==null?void 0:w.map(function(te){var $,ce=ee(te.arcs,1),me=ce[0],xe=te.modifiers,he=te.linkedNodes;return(0,K.jsxs)($a,{children:[!Q&&(0,K.jsx)(Pl,{children:($=mc[me.type])===null||$===void 0?void 0:$[me.direction]}),Q&&(0,K.jsx)(wc,{}),(0,K.jsxs)(Ms,{children:[xe&&(0,K.jsx)(ss,{children:xe.map(function(we){return(0,K.jsxs)(g.Fragment,{children:[(0,K.jsx)(mu,{addr:we.addr,loaderHeight:18,loaderWidth:"".concat(Qr(20,60),"%")}),(0,K.jsx)(Fd,{type:we.modifierArcs[0].type})]},"".concat(me.addr).concat(we.addr))})}),(0,K.jsx)(Af,{children:he.map(function(we,He){return(0,K.jsx)(Gl,{showMarker:he.length>1,node:we},"".concat(we.addr,".").concat(He))})})]})]},me.addr)})]})})},Cc=(0,g.memo)(_f),Xl,td,Yl,Ud,zd,nd,xc,Xf=Fe().div(Xl||(Xl=pe([`
  display: flex;
  gap: 4px;
`]))),Yf=Fe().div(td||(td=pe([`
  width: 100%;
`]))),Ku=Fe()(Ru)(Yl||(Yl=pe([`
  `,`

  `,`
`])),function(r){var n=r.isArc;return n&&(0,jt.css)(Ud||(Ud=pe([`
      flex-shrink: 0;

      margin-top: 4px;
    `])))},function(r){var n=r.isMdifier;return n&&(0,jt.css)(zd||(zd=pe([`
      margin-bottom: 6px;
    `])))}),Wd=Fe().div(nd||(nd=pe([`
  display: flex;
  flex-direction: column;
  gap: 10px;
`]))),vu=Fe().div(xc||(xc=pe([`
  display: flex;
  gap: 4px;
`]))),Qf={id:go(5),children:[{id:go(5),modifier:go(5),children:[{id:go(5)}]},{id:go(5),modifier:go(5),children:[{id:go(5)},{id:go(5),isLink:!0}]},{id:go(5),children:[{id:go(5)}]},{id:go(5),children:[{id:go(5)}]},{id:go(5),modifier:go(5),children:[{id:go(5),isLink:!0},{id:go(5)},{id:go(5)}]}]},$u=function(n){var i,s=n.tree;return(0,K.jsxs)(Xf,{children:[(0,K.jsx)(Ku,{isArc:!0,width:16,height:16}),(0,K.jsxs)(Yf,{children:[s.modifier&&(0,K.jsx)(Ku,{isMdifier:!0,width:Qr(200,400),height:22}),(0,K.jsx)(Wd,{children:(i=s.children)===null||i===void 0?void 0:i.map(function(A){var w;return(0,K.jsxs)(vu,{children:[(((w=s.children)===null||w===void 0?void 0:w.length)||0)>1&&(0,K.jsx)(Ku,{isArc:!0,width:16,height:16}),(0,K.jsx)(Ku,{width:"".concat(Qr(30,80),"%"),height:A.isLink?70:22})]},A.id)})})]})]})},Ef=function(){var n;return(0,K.jsxs)(Wd,{children:[(0,K.jsx)(Ku,{height:26,width:Qr(250,350)}),(n=Qf.children)===null||n===void 0?void 0:n.map(function(i){return(0,K.jsx)($u,{tree:i},i.id)})]})},Vi=(0,g.memo)(Ef),bf,Vd,wf,Zf=Fe()(Nu)(bf||(bf=pe([`
  margin-bottom: 16px;

  flex-grow: 1;

  padding-right: 6px;

  margin-right: 6px;

  cursor: auto;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;

    margin: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;

    background-color: var(--color-silver);

    margin: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;

    background-color: transparent;
  }
`]))),Cf=Fe().div(Vd||(Vd=pe([`
  position: relative;
`]))),xf=Fe().div(wf||(wf=pe([`
  position: absolute;

  left: 0;
  bottom: 200px;
  height: 1px;
  width: 100%;
`])));function Sf(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Es(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Sf(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Sf(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var rd=25,qf=function(n){var i,s=n.isLoading,A=n.tree,w=n.scgUrl,T=n.renderRequestPanel,B=n.onInitiateAction,N=n.action,U=n.className,de=ju({total:(A==null||(i=A.children)===null||i===void 0?void 0:i.length)||1,pageSize:rd}),Q=de.page,te=de.scrollRef,$=de.targetRef;(0,g.useEffect)(function(){var me;(me=te.current)===null||me===void 0||me.scroll(0,0)},[]);var ce=(0,g.useMemo)(function(){var me;return A?Es(Es({},A),{},{children:(me=A.children)===null||me===void 0?void 0:me.slice(0,Q*rd)}):null},[A,Q]);return(0,K.jsx)(Kf,{onInitiateAction:B,scgUrl:w,children:(0,K.jsx)(Zf,{ref:te,addr:N,className:U,children:(0,K.jsxs)(Cf,{children:[s&&(0,K.jsx)(Vi,{}),ce&&!s&&(0,K.jsx)(Cc,{tree:ce,isRoot:!0}),ce&&T&&T(ce.addr),(0,K.jsx)(xf,{ref:$})]})})})},Ql={},Sc=(0,g.createContext)(Ql),Bl=function(){return(0,g.useContext)(Sc)},Oc,Hd=Fe()(lu)(Oc||(Oc=pe([`
  height: 28px;

  overflow: hidden;
`]))),Kd=function(n){var i=n.defaultValue,s=n.onClose,A=n.onSave,w=(0,g.useState)(i),T=ee(w,2),B=T[0],N=T[1],U=(0,g.useRef)(null),de=function(){B.trim()&&A(B),s()},Q=function(ce){ce.key==="Enter"&&de(),ce.key==="Escape"&&s()},te=function(ce){N(ce.target.value)};return(0,g.useEffect)(function(){U.current&&(U.current.selectionStart=U.current.value.length)},[]),je(U,de),(0,K.jsx)(Hd,{value:B,onChange:te,onKeyDown:Q,ref:U,autoFocus:!0})},Of,od,Jf=Fe().div(Of||(Of=pe([`
  position: absolute;
  top: 100%;
  right: 0;

  min-width: 185px;

  background: var(--color-white)fff;

  border: 1px solid var(--color-border-grey);
  box-shadow: 0px 4px 4px var(--color-card-shadow);
  border-radius: 10px;

  z-index: 2;
`]))),id=Fe()(dc)(od||(od=pe([`
  width: 100%;

  padding: 8px 16px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  font-size: 18px;
  line-height: 20px;

  text-align: left;
  white-space: nowrap;

  &:hover {
    background: #ececec;
  }

  &:last-child {
    border-bottom: none;
  }
`]))),Pf=function(n){var i=n.onAddClick,s=n.onEditClick,A=n.onDeleteClick,w=n.deletable,T=L();return(0,K.jsxs)(Jf,{children:[(0,K.jsx)(id,{onClick:s,children:T({ru:"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",en:"Rename"})}),w&&(0,K.jsx)(id,{onClick:A,children:T({ru:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",en:"Delete"})}),(0,K.jsx)(id,{onClick:i,children:T({ru:"\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B",en:"New subsection"})})]})},Pc;function Gu(){return Gu=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Gu.apply(this,arguments)}var Bf=function(n){return g.createElement("svg",Gu({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Pc||(Pc=g.createElement("circle",{cx:7,cy:7,r:4,fill:"var(--color-dark-grey)"})))};const ad=Bf;var kf,$d,Gd=Fe().div(kf||(kf=pe([`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  width: 100%;
  min-height: 40px;

  padding: 8px 0 8px 6px;
`]))),sd=Fe()(lu)($d||($d=pe([`
  height: 28px;

  overflow: hidden;
`]))),ld=function(n){var i=n.value,s=n.wrapperTextareaRef,A=n.onChange,w=n.onKeyDown;return(0,K.jsxs)(Gd,{ref:s,children:[(0,K.jsx)(ad,{}),(0,K.jsx)(sd,{value:i,onChange:A,onKeyDown:w,autoFocus:!0})]})},Bc,Xd,Tf;function Xu(){return Xu=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Xu.apply(this,arguments)}var ep=function(n){return g.createElement("svg",Xu({width:4,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Bc||(Bc=g.createElement("circle",{cx:2,cy:2.29,r:1.677,fill:"var(--color-silver)"})),Xd||(Xd=g.createElement("circle",{cx:2,cy:9,r:1.677,fill:"var(--color-silver)"})),Tf||(Tf=g.createElement("circle",{cx:2,cy:15.709,r:1.677,fill:"var(--color-silver)"})))};const kc=ep;var Rf;function Yu(){return Yu=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},Yu.apply(this,arguments)}var e=function(n){return g.createElement("svg",Yu({width:13,height:13,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Rf||(Rf=g.createElement("path",{d:"m11.917 6.5-8.938 4.69V1.81l8.938 4.69Z",fill:"var(--color-dark-grey)"})))};const t=e;var o,a,c,h,I,_e,De,pt,Yt,Jt,$t,Ln=(0,jt.keyframes)(o||(o=pe([`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
`]))),Qn=Fe().div(a||(a=pe([`
  display: grid;
  grid-template-columns: 26px 1fr 26px;
  align-items: center;
  grid-column-gap: 10px;

  padding: 8px 3px 8px 0;

  font-size: 20px;
  line-height: 24px;
  color: var(--color-dark-grey);

  word-break: break-word;

  border-radius: 4px;

  &:hover {
    background: var(--color-decomposition-hover);

    .optionsBtn {
      opacity: 1;
    }
  }

  `,`

  &isLoading {
    animation-name: `,`;
  }
`])),function(r){return r.isOptionsOpen&&(0,jt.css)(c||(c=pe([`
      background: var(--color-decomposition-hover);
      opacity: 1;
    `])))},Ln),qn=Fe()(dc)(h||(h=pe([`
  width: 24px;
  height: 24px;

  `,`

  `,`
`])),function(r){return r.marker&&(0,jt.css)(I||(I=pe([`
      &:disabled {
        cursor: unset;
      }
    `])))},function(r){return r.options&&(0,jt.css)(_e||(_e=pe([`
      border-radius: 41px;

      opacity: 0;

      &:hover {
        background: var(--color-soft-grey);
      }
    `])))}),qi=Fe()(t)(De||(De=pe([`
  `,`
`])),function(r){return r.expanded&&(0,jt.css)(pt||(pt=pe([`
      transform: rotate(90deg);
    `])))}),ot=Fe().div(Yt||(Yt=pe([`
  position: relative;
`]))),Ge=Fe().div(Jt||(Jt=pe([`
  grid-column: 1/4;

  padding: 12px 0 0 16px;
  margin-bottom: 12px;
`]))),at=Fe()(hu)($t||($t=pe([`
  font-size: 20px;
  line-height: 24px;

  &::first-letter {
    text-transform: uppercase;
  }
`]))),cn=function(n){var i=n.data,s=n.children,A=n.deletable,w=n.editable;return(0,K.jsxs)("ul",{children:[i.map(function(T){return(0,K.jsx)(nr,{menuItem:T,deletable:A,editable:w},T.id)}),s]})},nr=function(n){var i=n.menuItem,s=n.editable,A=n.deletable,w=(0,g.useState)(!1),T=ee(w,2),B=T[0],N=T[1],U=(0,g.useState)(!1),de=ee(U,2),Q=de[0],te=de[1],$=(0,g.useState)(!1),ce=ee($,2),me=ce[0],xe=ce[1],he=(0,g.useState)(""),we=ee(he,2),He=we[0],Ue=we[1],Ie=(0,g.useRef)(null),ze=(0,g.useRef)(null),Et=Bl(),Ut=Et.onToggle,Ot=Et.onAdd,Lt=Et.onEdit,St=Et.onDelete;(0,g.useEffect)(function(){Q&&Rt()},[Q]);var dt=function(){N(!B)},Pt=function(){Ot(i.id,"",1),te(!0)},Je=function(){xe(!0)},Rt=function(){N(!1)},Zt=function(){He.trim()&&Ot(i.id,He,Math.random()),te(!1),Rt(),Ue(""),St(1)},en=function(Jn){Ue(Jn.target.value)},hn=function(Jn){Jn.key==="Enter"&&Zt(),Jn.key==="Escape"&&(te(!1),Rt(),Ue(""))},Wt=function(){xe(!1),Rt()},Pn=function(Jn){Lt(i.id,Jn)};je(Ie,Rt),je(ze,Zt);var pn=function(Jn){return(0,K.jsxs)(K.Fragment,{children:[!me&&(0,K.jsx)(at,{addr:i.id,appearance:"transparent",children:Jn}),me&&(0,K.jsx)(Kd,{defaultValue:Jn,onClose:Wt,onSave:Pn})]})};return(0,K.jsx)(K.Fragment,{children:i.title&&(0,K.jsxs)("li",{children:[(0,K.jsxs)(Qn,{isOptionsOpen:B,isLoading:i.isLoading,children:[(0,K.jsx)(qn,{marker:!0,onClick:function(){return Ut(i.id)},disabled:!i.children.length,children:i.children.length?(0,K.jsx)(qi,{expanded:i.expanded}):(0,K.jsx)(ad,{})}),(0,K.jsx)(Y,{addrOrSystemId:i.id,renderText:pn}),s&&!me&&(0,K.jsxs)(ot,{ref:Ie,children:[(0,K.jsx)(qn,{options:!0,className:"optionsBtn",onClick:dt,children:(0,K.jsx)(kc,{})}),B&&(0,K.jsx)(Pf,{onAddClick:Pt,onEditClick:Je,onDeleteClick:function(){St(i.id),Rt()},deletable:A})]})]}),i.expanded&&!!i.children.length&&(0,K.jsx)(Ge,{children:(0,K.jsx)(Er,{data:i.children,deletable:A,editable:s,children:Q&&(0,K.jsx)(ld,{value:He,onChange:en,onKeyDown:hn,wrapperTextareaRef:ze})})})]})})},Er=(0,g.memo)(cn),br,Dr,ca,Ho=Fe().div(br||(br=pe([`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding-top: 8px;
`]))),yl=Fe().div(Dr||(Dr=pe([`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  grid-column-gap: 10px;
`]))),Yd=Fe().div(ca||(ca=pe([`
  display: flex;
  justify-content: flex-end;
`]))),p0=function(){return(0,K.jsxs)(Ho,{children:[(0,K.jsxs)(yl,{children:[(0,K.jsx)(Yd,{children:(0,K.jsx)(qa,{width:24,height:24})}),(0,K.jsx)(qa,{width:"100%",height:24})]}),(0,K.jsxs)(yl,{children:[(0,K.jsx)(Yd,{children:(0,K.jsx)(qa,{width:24,height:24})}),(0,K.jsx)(qa,{width:"60%",height:24})]}),(0,K.jsxs)(yl,{children:[(0,K.jsx)(Yd,{children:(0,K.jsx)(qa,{width:24,height:24})}),(0,K.jsx)(qa,{width:"80%",height:24})]})]})},vp,h0=Fe().nav(vp||(vp=pe([`
  margin-right: 0;
`]))),m0=[],v0=function(n){var i=n.className,s=n.editable,A=s===void 0?!1:s,w=n.deletable,T=w===void 0?!1:w,B=Bl(),N=B.isMenuListLoading,U=B.menuList,de=B.isAddInputShow,Q=B.setIsAddInputShow,te=B.addInputValue,$=B.setAddInputValue,ce=B.onAdd,me=B.onDelete,xe=(0,g.useRef)(null),he=function(Ie){$(Ie.target.value)},we=function(Ie){Ie.key==="Enter"&&He(),Ie.key==="Escape"&&(Q(!1),$(""))},He=function(){U&&(te.trim()&&ce(U.id,te,Math.random()),Q(!1),$(""),me(1))};return je(xe,He),(0,K.jsx)("div",{className:i,children:(0,K.jsxs)(h0,{children:[!N&&(0,K.jsx)(Er,{data:(U==null?void 0:U.children)||m0,editable:A,deletable:T,children:(0,K.jsx)(K.Fragment,{children:de&&(0,K.jsx)(ld,{value:te,onChange:he,onKeyDown:we,wrapperTextareaRef:xe})})}),N&&(0,K.jsx)(p0,{})]})})},g0=function r(n){return Object.entries(n).sort(function(i,s){return i[1].position-s[1].position}).map(function(i){var s=ee(i,2),A=s[0],w=s[1];return{id:Number(A),title:w.idtf,children:w.decomposition?r(w.decomposition):[],expanded:!1,isLoading:!1}})};function gp(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function yp(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?gp(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):gp(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}function Ap(r,n){var i=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!i){if(Array.isArray(r)||(i=y0(r))||n&&r&&typeof r.length=="number"){i&&(r=i);var s=0,A=function(){};return{s:A,n:function(){return s>=r.length?{done:!0}:{done:!1,value:r[s++]}},e:function(U){throw U},f:A}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w=!0,T=!1,B;return{s:function(){i=i.call(r)},n:function(){var U=i.next();return w=U.done,U},e:function(U){T=!0,B=U},f:function(){try{!w&&i.return!=null&&i.return()}finally{if(T)throw B}}}}function y0(r,n){if(r){if(typeof r=="string")return _p(r,n);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _p(r,n)}}function _p(r,n){(n==null||n>r.length)&&(n=r.length);for(var i=0,s=new Array(n);i<n;i++)s[i]=r[i];return s}var A0=function r(n,i){if(n.id===i)return[n.id];var s=Ap(n.children),A;try{for(s.s();!(A=s.n()).done;){var w=A.value,T=r(w,i);if(T.length)return[n.id].concat(Xn(T))}}catch(B){s.e(B)}finally{s.f()}return[]},_0=function r(n,i,s,A){if(!i.includes(n.id))return n;if(n.id===s)return A(n);var w=n.children.some(function(T){return i.includes(T.id)});return yp(yp({},n),{},{children:w?n.children.map(function(T){return r(T,i,s,A)}):n.children})},Ep=function r(n,i){if(n.children.find(function(B){return B.id===i}))return n;var s=Ap(n.children),A;try{for(s.s();!(A=s.n()).done;){var w=A.value,T=r(w,i);if(T)return T}}catch(B){s.e(B)}finally{s.f()}return null},Tc=function(n,i,s){var A=A0(n,i);return _0(n,A,i,s)};function bp(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Ls(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?bp(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):bp(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var E0=function(n){var i=n.getDecompositionCallback,s=n.addDecompositionItemCallBack,A=n.editDecompositionItemCallback,w=n.deleteDecompositionItemCallback,T=n.children,B=(0,g.useState)(!0),N=ee(B,2),U=N[0],de=N[1],Q=(0,g.useState)(null),te=ee(Q,2),$=te[0],ce=te[1],me=(0,g.useState)(!1),xe=ee(me,2),he=xe[0],we=xe[1],He=(0,g.useState)(""),Ue=ee(He,2),Ie=Ue[0],ze=Ue[1];(0,g.useEffect)(function(){Vr(cr().mark(function Je(){var Rt;return cr().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return en.next=2,i();case 2:if(Rt=en.sent,Rt){en.next=5;break}return en.abrupt("return");case 5:ce(g0(Rt)[0]),de(!1);case 7:case"end":return en.stop()}},Je)}))()},[i]);var Et=(0,g.useCallback)(function(Je){ce(function(Rt){return Rt?Tc(Rt,Je,function(Zt){return Ls(Ls({},Zt),{},{expanded:!Zt.expanded})}):null})},[]),Ut=(0,g.useCallback)(function(Je){ce(function(Rt){return Rt?Tc(Rt,Je,function(Zt){return Ls(Ls({},Zt),{},{expanded:!0})}):null})},[]),Ot=(0,g.useCallback)((function(){var Je=Vr(cr().mark(function Rt(Zt,en,hn){var Wt;return cr().wrap(function(pn){for(;;)switch(pn.prev=pn.next){case 0:if(hn===1){pn.next=8;break}return ce(function(dn){return dn?Tc(dn,Zt,function(Jn){return Ls(Ls({},Jn),{},{expanded:!0,children:[].concat(Xn(Jn.children),[{id:hn,title:en,expanded:!1,children:[],isLoading:!0}])})}):null}),pn.next=4,s(String(Zt),{sectionName:en});case 4:if(Wt=pn.sent,Wt){pn.next=7;break}return pn.abrupt("return");case 7:return pn.abrupt("return",ce(function(dn){return!dn||!Wt?null:Tc(dn,hn,function(Jn){return Ls(Ls({},Jn),{},{id:Wt,expanded:!1,isLoading:!1})})}));case 8:ce(function(dn){return dn?Tc(dn,Zt,function(Jn){return Ls(Ls({},Jn),{},{expanded:!0,children:[].concat(Xn(Jn.children),[{id:hn,title:en,expanded:!1,children:[],isLoading:!1}])})}):null});case 9:case"end":return pn.stop()}},Rt)}));return function(Rt,Zt,en){return Je.apply(this,arguments)}})(),[s]),Lt=(0,g.useCallback)((function(){var Je=Vr(cr().mark(function Rt(Zt,en){return cr().wrap(function(Wt){for(;;)switch(Wt.prev=Wt.next){case 0:return Wt.next=2,A(Zt,en);case 2:case"end":return Wt.stop()}},Rt)}));return function(Rt,Zt){return Je.apply(this,arguments)}})(),[A]),St=(0,g.useCallback)((function(){var Je=Vr(cr().mark(function Rt(Zt){var en,hn,Wt;return cr().wrap(function(pn){for(;;)switch(pn.prev=pn.next){case 0:if(Zt!==1){pn.next=2;break}return pn.abrupt("return",ce(function(dn){if(!dn)return null;var Jn=Ep(dn,Zt);return Jn?Tc(dn,Jn.id,function(Hr){return Ls(Ls({},Hr),{},{children:Hr.children.filter(function(Ko){return Ko.id!==Number(Zt)})})}):dn}));case 2:if($){pn.next=4;break}return pn.abrupt("return");case 4:if(en=Ep($,Zt),en){pn.next=7;break}return pn.abrupt("return");case 7:return pn.next=9,w(String(en.id),String(Zt));case 9:if(hn=pn.sent,hn){pn.next=12;break}return pn.abrupt("return");case 12:Wt=Tc($,en.id,function(dn){return Ls(Ls({},dn),{},{children:dn.children.filter(function(Jn){return Jn.id!==hn})})}),ce(Wt);case 14:case"end":return pn.stop()}},Rt)}));return function(Rt){return Je.apply(this,arguments)}})(),[w,$]),dt=(0,g.useCallback)(function(){$&&(Ot($.id,"",1),we(!0))},[$,Ot]),Pt=(0,g.useMemo)(function(){return{isMenuListLoading:U,setIsMenuListLoading:de,menuList:$,setMenuList:ce,isAddInputShow:he,setIsAddInputShow:we,addInputValue:Ie,setAddInputValue:ze,onToggle:Et,onToggleShowItem:Ut,onAdd:Ot,onEdit:Lt,onDelete:St,onAddClick:dt}},[U,de,$,ce,he,we,Ie,ze,Et,Ut,Ot,Lt,St,dt]);return(0,K.jsx)(Sc.Provider,{value:Pt,children:T})},wp={width:"scrollWidth",height:"scrollHeight"},b0=function(n){var i,s=n.expanded,A=n.children,w=n.className,T=n.initialSize,B=T===void 0?0:T,N=n.unmountOnEnd,U=N===void 0?B===0:N,de=n.growProperty,Q=de===void 0?"height":de,te=n.transitionDuration,$=te===void 0?"0.3s":te,ce=n.transitionTimingFunction,me=ce===void 0?"ease":ce,xe=(0,g.useState)(!U),he=ee(xe,2),we=he[0],He=he[1],Ue=(0,g.useState)("hidden"),Ie=ee(Ue,2),ze=Ie[0],Et=Ie[1],Ut=(0,g.useState)(B),Ot=ee(Ut,2),Lt=Ot[0],St=Ot[1],dt=(0,g.useRef)(null);(0,g.useEffect)(function(){var Je=dt.current;if(s)He(!0);else if(Je){var Rt=Je[wp[Q]];St(Rt),Et("hidden"),window.requestAnimationFrame(function(){return St(B)})}},[s,Q,B]),(0,g.useEffect)(function(){var Je=dt.current;if(s&&we&&Je){var Rt=Je[wp[Q]];St(Rt)}},[s,we,Q]);var Pt=function(){s?(St("auto"),Et("visible")):U&&He(!1)};return we?(0,K.jsx)("div",{style:(i={overflow:ze,transitionProperty:Q},ge(i,Q,Lt),ge(i,"transitionTimingFunction",me),ge(i,"transitionDuration",$),i),className:w,onTransitionEnd:Pt,ref:dt,children:A}):null},Cp;function tp(){return tp=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},tp.apply(this,arguments)}var w0=function(n){return g.createElement("svg",tp({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Cp||(Cp=g.createElement("path",{d:"m13.53 11.982 6.454-6.437.007-.007.006-.008a1.047 1.047 0 0 0-.756-1.728c-.265-.01-.523.079-.724.25l-.007.007-.007.007-6.455 6.438-6.456-6.446a1.054 1.054 0 0 0-1.798.743c0 .28.111.547.31.744l6.461 6.437-6.455 6.43a1.05 1.05 0 0 0-.052 1.531 1.05 1.05 0 0 0 1.532-.051l6.457-6.432 6.456 6.438.007.007.007.006a1.051 1.051 0 0 0 1.732-.755c.01-.264-.08-.522-.252-.723l-.006-.007-.007-.007-6.454-6.437Z",fill:"var(--color-dull-grey)",stroke:"#ADADAD",strokeWidth:.5})))};const C0=w0;var xp,Sp,Op,Pp,Bp,x0=Fe().button(xp||(xp=pe([`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  cursor: pointer;
  border-radius: `,`;

  background-color: `,`;

  flex-shrink: 0;
  box-sizing: border-box;

  &:hover {
    background-color: `,`;
  }

  &:active {
    box-shadow: inset 0 0 0 2px `,`;
  }

  &:disabled {
    opacity: 0.5;
    background-color: `,`;

    pointer-events: none;
  }

  /* Sizes */
  `,`

  `,`
  
	`,`
  
	`,`
`])),function(r){var n=r.theme;return n.iconButton.borderRadius},function(r){var n=r.theme;return n.iconButton.colors.background},function(r){var n=r.theme;return n.iconButton.colors.backgroundHover},function(r){var n=r.theme;return n.iconButton.colors.borderActive},function(r){var n=r.theme;return n.iconButton.colors.backgroundDisabled},function(r){return r.$size==="s"&&(0,jt.css)(Sp||(Sp=pe([`
      width: `,`;
      height: `,`;

      border-radius: `,`;

      &:active {
        box-shadow: inset 0 0 0 1px `,`;
      }
    `])),function(n){var i=n.theme;return i.iconButton.size.small.width},function(n){var i=n.theme;return i.iconButton.size.small.height},function(n){var i=n.theme;return i.iconButton.size.small.borderRadius},function(n){var i=n.theme;return i.iconButton.colors.borderActive})},function(r){return r.$size==="m"&&(0,jt.css)(Op||(Op=pe([`
      width: `,`;
      height: `,`;
      padding: `,`;
      border-radius: `,`;
    `])),function(n){var i=n.theme;return i.iconButton.size.medium.width},function(n){var i=n.theme;return i.iconButton.size.medium.height},function(n){var i=n.theme;return i.iconButton.size.medium.padding},function(n){var i=n.theme;return i.iconButton.size.medium.borderRadius})},function(r){return r.$size==="l"&&(0,jt.css)(Pp||(Pp=pe([`
      width: `,`;
      height: `,`;
      padding: `,`;
      border-radius: `,`;
    `])),function(n){var i=n.theme;return i.iconButton.size.large.width},function(n){var i=n.theme;return i.iconButton.size.large.height},function(n){var i=n.theme;return i.iconButton.size.large.padding},function(n){var i=n.theme;return i.iconButton.size.large.borderRadius})},function(r){return r.$size==="xl"&&(0,jt.css)(Bp||(Bp=pe([`
      width: `,`;
      height: `,`;
      padding: `,`;
      border-radius: `,`;
    `])),function(n){var i=n.theme;return i.iconButton.size.xlarge.width},function(n){var i=n.theme;return i.iconButton.size.xlarge.height},function(n){var i=n.theme;return i.iconButton.size.xlarge.padding},function(n){var i=n.theme;return i.iconButton.size.xlarge.borderRadius})}),S0=["children","className","disabled","size","type","onClick"];function kp(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Tp(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?kp(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):kp(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var O0=function(n){var i=n.children,s=n.className,A=n.disabled,w=n.size,T=w===void 0?"l":w,B=n.type,N=B===void 0?"button":B,U=n.onClick,de=_(n,S0);return(0,K.jsx)(x0,Tp(Tp({className:s,$size:T,disabled:A,onClick:U,type:N},de),{},{children:i}))},P0=Object.defineProperty,B0=(r,n,i)=>n in r?P0(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i,jf=(r,n,i)=>(B0(r,typeof n!="symbol"?n+"":n,i),i),np=new Map,Df=new WeakMap,Rp=0,jp=void 0;function Ov(r){jp=r}function k0(r){return r?(Df.has(r)||(Rp+=1,Df.set(r,Rp.toString())),Df.get(r)):"0"}function T0(r){return Object.keys(r).sort().filter(n=>r[n]!==void 0).map(n=>`${n}_${n==="root"?k0(r.root):r[n]}`).toString()}function R0(r){let n=T0(r),i=np.get(n);if(!i){const s=new Map;let A;const w=new IntersectionObserver(T=>{T.forEach(B=>{var N;const U=B.isIntersecting&&A.some(de=>B.intersectionRatio>=de);r.trackVisibility&&typeof B.isVisible=="undefined"&&(B.isVisible=U),(N=s.get(B.target))==null||N.forEach(de=>{de(U,B)})})},r);A=w.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),i={id:n,observer:w,elements:s},np.set(n,i)}return i}function Dp(r,n,i={},s=jp){if(typeof window.IntersectionObserver=="undefined"&&s!==void 0){const N=r.getBoundingClientRect();return n(s,{isIntersecting:s,target:r,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:N,intersectionRect:N,rootBounds:N}),()=>{}}const{id:A,observer:w,elements:T}=R0(i);let B=T.get(r)||[];return T.has(r)||T.set(r,B),B.push(n),w.observe(r),function(){B.splice(B.indexOf(n),1),B.length===0&&(T.delete(r),w.unobserve(r)),T.size===0&&(w.disconnect(),np.delete(A))}}function j0(r){return typeof r.children!="function"}var Pv=class extends g.Component{constructor(r){super(r),jf(this,"node",null),jf(this,"_unobserveCb",null),jf(this,"handleNode",n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()}),jf(this,"handleChange",(n,i)=>{n&&this.props.triggerOnce&&this.unobserve(),j0(this.props)||this.setState({inView:n,entry:i}),this.props.onChange&&this.props.onChange(n,i)}),this.state={inView:!!r.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:r,root:n,rootMargin:i,trackVisibility:s,delay:A,fallbackInView:w}=this.props;this._unobserveCb=Dp(this.node,this.handleChange,{threshold:r,root:n,rootMargin:i,trackVisibility:s,delay:A},w)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:r}=this.props;if(typeof r=="function"){const{inView:ce,entry:me}=this.state;return r({inView:ce,entry:me,ref:this.handleNode})}const $=this.props,{as:n,triggerOnce:i,threshold:s,root:A,rootMargin:w,onChange:T,skip:B,trackVisibility:N,delay:U,initialInView:de,fallbackInView:Q}=$,te=qu($,["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"]);return g.createElement(n||"div",Kn({ref:this.handleNode},te),r)}};function D0({threshold:r,delay:n,trackVisibility:i,rootMargin:s,root:A,triggerOnce:w,skip:T,initialInView:B,fallbackInView:N,onChange:U}={}){var de;const[Q,te]=g.useState(null),$=g.useRef(),[ce,me]=g.useState({inView:!!B,entry:void 0});$.current=U,g.useEffect(()=>{if(T||!Q)return;let He;return He=Dp(Q,(Ue,Ie)=>{me({inView:Ue,entry:Ie}),$.current&&$.current(Ue,Ie),Ie.isIntersecting&&w&&He&&(He(),He=void 0)},{root:A,rootMargin:s,threshold:r,trackVisibility:i,delay:n},N),()=>{He&&He()}},[Array.isArray(r)?r.toString():r,Q,A,s,w,T,i,N,n]);const xe=(de=ce.entry)==null?void 0:de.target,he=g.useRef();!Q&&xe&&!w&&!T&&he.current!==xe&&(he.current=xe,me({inView:!!B,entry:void 0}));const we=[te,ce.inView,ce.entry];return we.ref=we[0],we.inView=we[1],we.entry=we[2],we}var I0=function(n,i){var s=n.offsetTop-i.offsetTop,A=s<i.scrollTop,w=s+n.clientHeight>i.scrollTop+i.clientHeight;A&&(i.scrollTop=s),w&&(i.scrollTop=s+n.clientHeight-i.clientHeight)},Ip=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"word",A=s==="word"?i.split(" "):[i],w=A.filter(Boolean).map(function(de){return de.toLowerCase()}),T=["[","]","\\","^","$",".","|","?","*","+","(",")"],B=w.map(function(de){var Q=de.split("").map(function(te){return T.includes(te)?"\\".concat(te):te}).join("");return"(".concat(Q,")?")}).join(""),N=n.split(new RegExp(B,"gi")).filter(Boolean),U=i?N.some(function(de){return w.includes(de.toLowerCase())}):!0;return{shouldHiglight:U,parts:N,chunks:w}},rp=function(n){return n.preventDefault()};function M0(r,n){return r.value!==n.value||r.selectionStart!==n.selectionStart||r.selectionEnd!==n.selectionEnd}function Mp(r,n){var i=n.value,s=i===void 0?r.value:i,A=n.selectionStart,w=n.selectionEnd;if(M0(r,{value:s,selectionStart:A,selectionEnd:w})){var T,B=(T=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r),"value"))===null||T===void 0?void 0:T.set;B==null||B.call(r,s),r.setSelectionRange(A||0,w||0);var N;typeof Event=="function"?N=new Event("input",{bubbles:!0}):(N=document.createEvent("Event"),N.initEvent("input",!0,!0)),r.dispatchEvent(N)}}var Lp,Np,Fp,Up,zp,Wp,L0=Fe().div(Lp||(Lp=pe([`
  display: flex;
  max-width: 100%;
`]))),N0=Fe().div(Np||(Np=pe([`
  display: flex;
  gap: 8px;
  max-width: 100%;

  `,`
`])),function(r){var n=r.$vissible;return!n&&(0,jt.css)(Fp||(Fp=pe([`
      transition: all ease 0.15s;
      opacity: 0;
      pointer-events: none;
    `])))}),Vp=Fe()(_l)(Up||(Up=pe([`
  max-width: fit-content;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`]))),F0=Fe()(_l)(zp||(zp=pe([`
  /* opacity: `,`; */
  /* transform: scale(`,`); */
  display: `,`;
  /* transition: all ease 0.15s; */
`])),function(r){var n=r.$vissible;return n?1:0},function(r){var n=r.$vissible;return n?1:0},function(r){var n=r.$vissible;return n?"unset":"none"}),Bv=Fe().div(Wp||(Wp=pe([`
  max-width: 488px;
`]))),U0=function(n){var i=n.className,s=n.option,A=n.restChips,w=n.chipVissible,T=w===void 0?!1:w,B=n.counterVissible,N=B===void 0?!1:B,U=n.disabled,de=n.onVisibiltyChange,Q=n.onChipRemove,te=D0({threshold:1,onChange:de}),$=ee(te,1),ce=$[0],me=(0,g.useCallback)(function(xe){xe.stopPropagation(),Q==null||Q(s.value)},[Q,s.value]);return(0,K.jsxs)(N0,{className:i,ref:ce,$vissible:T,children:[s.renderValue({onClose:Q?me:void 0}),(0,K.jsxs)(F0,{disabled:U,size:"l",$vissible:N,children:["+",A]})]})},z0=function(n){var i=n.options,s=n.disabled,A=n.idleHeight,w=n.onChipRemove,T=(0,g.useState)(!1),B=ee(T,2),N=B[0],U=B[1],de=(0,g.useState)([]),Q=ee(de,2),te=Q[0],$=Q[1],ce=function(Et){return function(Ut){if(Et===i[i.length-1].value&&U(!0),Ut)return $(function(Ot){return Ot.filter(function(Lt){return Lt!==Et})});$(function(Ot){return Ot.includes(Et)?Ot:[].concat(Xn(Ot),[Et])})}},me=i.findIndex(function(ze){var Et=ze.value;return te.includes(Et)}),xe=me!==-1,he=2,we=xe?i.slice(0,me+he):i,He=N&&!te.length,Ue=function(Et){return A==="full"?!0:He||xe&&!te.includes(Et)},Ie=function(Et){return A==="full"||!Et?!1:!Ue(Et)};return(0,K.jsx)(K.Fragment,{children:we.map(function(ze,Et){var Ut;return(0,K.jsx)(L0,{onMouseDown:rp,children:(0,K.jsx)(U0,{className:"chip",option:ze,onChipRemove:w,onVisibiltyChange:ce(ze.value),disabled:s,restChips:i.length-Et-1,chipVissible:Ue(ze.value),counterVissible:Ie((Ut=we[Et+1])===null||Ut===void 0?void 0:Ut.value)})},ze.value)})})},W0="Searching for match",V0="No results",Hp;function op(){return op=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},op.apply(this,arguments)}var H0=function(n){return g.createElement("svg",op({width:15,height:12,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),Hp||(Hp=g.createElement("path",{d:"m4 4.5 3.5 3 3.5-3",stroke:"#B9B9B9",strokeWidth:1.3,strokeLinecap:"round"})))};const K0=H0;var Kp,$p,Gp,Xp,Yp,Qp,Zp,qp,Jp,eh,th,nh,rh,oh,ih,ah,sh,lh,uh,ch=function(n){return n?"32px":"26px"},dh=function(n){var i=n.status,s=n.hovered,A=n.disabled,w=n.theme;return i==="error"&&s?w.select.colors.borderError:i==="error"&&!s?w.select.colors.borderErrorHover:A?w.select.colors.borderDisabled:s?w.select.colors.borderHover:w.select.colors.borderInitial},$0=Fe().div(Kp||(Kp=pe([`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  cursor: pointer;

  position: relative;
  padding: `,`;

  min-height: `,`;

  background: `,`;
  border: `,` solid
    `,`;
  border-radius: `,`;

  font-family: `,`;
  font-style: normal;
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;

  color: `,`;

  &:hover {
    border-color: `,`;
  }

  `,`
`])),function(r){var n=r.$multiple;return n?"0 15px 0 7px":"4px 15px"},function(r){var n=r.theme;return n.select.size.initialHeight},function(r){var n=r.theme;return n.select.colors.initialBackgroundColor},function(r){var n=r.theme;return n.select.size.borderWidth},function(r){var n=r.$disabled,i=r.$status,s=r.$focused,A=r.theme;return dh({theme:A,status:i,disabled:n,hovered:s})},function(r){var n=r.theme;return n.select.borderRadius},function(r){var n=r.theme;return n.select.font.fontFamily},function(r){var n=r.theme;return n.select.font.fontWeight},function(r){var n=r.theme;return n.select.font.fontSize},function(r){var n=r.theme;return n.select.font.lineHeight},function(r){var n=r.theme;return n.select.colors.text},function(r){var n=r.$disabled,i=r.$status,s=r.theme;return dh({theme:s,status:i,disabled:n,hovered:!0})},function(r){var n=r.$disabled;return n&&(0,jt.css)($p||($p=pe([`
      background-color: var(--color-beige);
      color: var(--color-dull-grey);

      pointer-events: none;
      cursor: text;
    `])))}),G0=Fe().div(Gp||(Gp=pe([`
  position: absolute;

  width: 0;
  height: 0;

  opacity: 0;

  overflow: hidden;
  pointer-events: none;
`]))),X0=Fe().select(Xp||(Xp=pe([`
  position: absolute;

  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
  border: none;
  pointer-events: none;
`]))),Y0=Fe().div(Yp||(Yp=pe([`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-right: 8px;
`]))),Q0=Fe().div(Qp||(Qp=pe([`
  display: flex;
  flex-wrap: `,`;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;

  overflow: hidden;
  align-items: center;

  /* In multiple select state padding is spicified in ValueWrapper because browser zooming cause Intersection observer wrong work */
  padding: `,`;

  `,`
`])),function(r){var n=r.$fixHeight;return n?"unset":"wrap"},function(r){var n=r.$multiple;return n?"4px 0":"unset"},function(r){var n=r.$fixHeight,i=r.$multiple;return n&&(0,jt.css)(Zp||(Zp=pe([`
      height: `,`;
    `])),ch(i))}),Z0=Fe().input(qp||(qp=pe([`
  box-sizing: border-box;

  flex: 1 1 auto;

  width: 100px;
  padding: 0;
  background: transparent;

  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-overflow: ellipsis;

  color: inherit;

  border: none;
  outline: none;
  appearance: none;
  height: `,`;

  &::placeholder {
    font-weight: `,`;
    color: `,`;
  }
`])),function(r){var n=r.$multiple;return ch(n)},function(r){var n=r.theme;return n.select.font.placeholderWeight},function(r){var n=r.theme;return n.select.colors.placeholder}),q0=Fe()(K0)(Jp||(Jp=pe([`
  transition: transform 0.3s ease-in-out;
  transform: rotate(0);

  cursor: pointer;

  `,`
`])),function(r){var n=r.$opened;return n&&(0,jt.css)(eh||(eh=pe([`
      transform: rotate(180deg);
    `])))}),J0=Fe().div(th||(th=pe([`
  flex-shrink: 0;

  border-radius: 50%;
  padding: 5px;

  cursor: pointer;

  &:hover {
    background-color: `,`;
  }
`])),function(r){var n=r.theme;return n.select.colors.closeButtonBackgroundHover}),em=Fe().div(nh||(nh=pe([`
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  align-items: center;

  margin-left: 8px;
`]))),tm=Fe()(Ai)(rh||(rh=pe([`
  padding: `,`;

  max-height: `,`;
  overflow: auto;

  box-shadow: `,`;

  option {
    display: none;
  }
`])),function(r){var n=r.theme;return n.select.size.dropdownPadding},function(r){var n=r.theme;return n.select.size.dropdownMaxHeight},function(r){var n=r.theme;return n.select.dropdownBoxShadow}),nm=Fe().div(oh||(oh=pe([`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`]))),rm=Fe().div(ih||(ih=pe([`
  padding: 0 8px;
  margin-bottom: 16px;
`]))),om=Fe().div(ah||(ah=pe([`
  overflow: auto;
`]))),im=Fe().div(sh||(sh=pe([`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 2px 8px;
  margin-bottom: 16px;
  max-height: 155px;
  overflow: auto;
  flex-shrink: 0;
`]))),am=Fe()(fu)(lh||(lh=pe([`
  display: flex;
  flex-direction: column;

  background-color: var(--color-white);
  width: calc(100% - 32px);
  height: calc(100% - 110px);
  border-radius: 15px;

  padding-bottom: 8px;
  box-sizing: border-box;
`]))),sm=Fe().div(uh||(uh=pe([`
  padding: 16px 16px;
  display: flex;
  justify-content: flex-end;
`]))),lm=["children"],um=["children"],cm=["children"],dm=["children"],Rc=function(){},fh=(0,g.createContext)({onConstantOptionMount:Rc,onConstantOptionUnMount:Rc,searchValue:"",multiple:!1}),fm=function(){return(0,g.useContext)(fh)},pm=function(n){var i=n.children,s=_(n,lm);return(0,K.jsx)(fh.Provider,{value:s,children:i})},ph=(0,g.createContext)({onDropDownOptionMount:Rc,onDropDownOptionUnMount:Rc,onOptionClick:Rc,setHoverValue:Rc,hoverValue:"",searchValue:"",highlightFormat:"word",multiple:!1,defaultHighlighted:!0,showCheckbox:!0,mobile:!1}),ip=function(){return(0,g.useContext)(ph)},hh=function(n){var i=n.children,s=_(n,um);return(0,K.jsx)(ph.Provider,{value:s,children:i})},mh=(0,g.createContext)({onAddTextToHighlight:Rc}),hm=function(){return(0,g.useContext)(mh)},mm=function(n){var i=n.children,s=_(n,cm);return(0,K.jsx)(mh.Provider,{value:s,children:i})},vh=(0,g.createContext)({label:""}),gh=function(){return(0,g.useContext)(vh)},vm=function(n){var i=n.children,s=_(n,dm);return(0,K.jsx)(vh.Provider,{value:s,children:i})},gm=["value","mobile","isLoading","className","style","iconsRight","iconsLeft","portalTargetRef","disabled","placeholder","defaultValue","children","status","renderedEmptyValue","loadingAppearance","idleHeight","mode","highlightFormat","multiple","defaultHighlighted","showCheckbox","loadingMessage","emptyMessage","containerRef","onInputChange","renderSelectValue","hideSelectedValues","onFocus","onBlur"];function yh(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function ud(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?yh(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):yh(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var Qd=function(n){var i;return(i=n.find(function(s){var A=s.disabled;return!A}))===null||i===void 0?void 0:i.value},ym=function(n){return n.stopPropagation()},Ah=(0,g.forwardRef)(function(r,n){var i=r.value,s=r.mobile,A=s===void 0?!1:s,w=r.isLoading,T=r.className,B=r.style,N=r.iconsRight,U=r.iconsLeft,de=r.portalTargetRef,Q=r.disabled,te=Q===void 0?!1:Q,$=r.placeholder,ce=r.defaultValue,me=r.children,xe=r.status,he=r.renderedEmptyValue,we=r.loadingAppearance,He=we===void 0?"input":we,Ue=r.idleHeight,Ie=Ue===void 0?"fixed":Ue,ze=r.mode,Et=ze===void 0?"select":ze,Ut=r.highlightFormat,Ot=Ut===void 0?"word":Ut,Lt=r.multiple,St=Lt===void 0?!1:Lt,dt=r.defaultHighlighted,Pt=dt===void 0?!0:dt,Je=r.showCheckbox,Rt=Je===void 0?!0:Je,Zt=r.loadingMessage,en=r.emptyMessage,hn=r.containerRef,Wt=r.onInputChange,Pn=r.renderSelectValue,pn=r.hideSelectedValues,dn=r.onFocus,Jn=r.onBlur,Hr=_(r,gm),Ko=(0,g.useState)(i!=null?i:ce),Ti=ee(Ko,2),In=Ti[0],lo=Ti[1],Zr=(0,g.useState)(""),qr=ee(Zr,2),si=qr[0],jr=qr[1],li=(0,g.useState)(""),ui=ee(li,2),$o=ui[0],Pr=ui[1],Zo=(0,g.useState)(!1),kl=ee(Zo,2),gu=kl[0],qd=kl[1],Tl=(0,g.useState)([]),Kh=ee(Tl,2),Jd=Kh[0],$h=Kh[1],Nm=(0,g.useState)([]),Gh=ee(Nm,2),nl=Gh[0],Xh=Gh[1],Fm=pu(!1),If=ee(Fm,4),Qu=If[0],Yh=If[1],Qh=If[2],Um=If[3],zm=(0,g.useState)(!1),Zh=ee(zm,2),lp=Zh[0],qh=Zh[1],Wm=(0,g.useState)(!1),Jh=ee(Wm,2),Vm=Jh[0],e0=Jh[1],t0=Zt||W0,n0=en||V0,up=i===void 0,ef=Et==="select",cp=(0,g.useMemo)(function(){return pn||St?null:Jd.find(function(dr){return dr.value===In})},[pn,St,Jd,In]),tf=(0,g.useMemo)(function(){return pn?[]:St?Jd.filter(function(dr){return In==null?void 0:In.includes(dr.value)}):[]},[Jd,In,St,pn]),dd=(0,g.useMemo)(function(){return nl.findIndex(function(dr){return dr.value===$o})},[nl,$o]),r0=(0,g.useMemo)(function(){return w&&He==="options"?(0,K.jsx)(so,{children:t0}):(0,K.jsxs)(K.Fragment,{children:[!nl.length&&(0,K.jsx)(so,{children:n0}),me]})},[w,t0,me,nl,n0,He]),o0=(0,g.useRef)(null),jc=(0,g.useRef)(null),Mf=(0,g.useRef)(null),dp=(0,g.useRef)(null),Lf=(0,g.useRef)(null),fp=(0,g.useRef)({shouldExtendInputValue:!1}),Hm=(0,g.useCallback)(function(dr){return $h(function(sr){return sr.some(function(Go){var da=Go.value;return da===dr.value})?sr:[].concat(Xn(sr),[dr])})},[]),Km=(0,g.useCallback)(function(dr){return $h(function(sr){return sr.filter(function(Go){return Go.value!==dr.value||(In==null?void 0:In.includes(dr.value))})})},[In]),$m=(0,g.useCallback)(function(dr){return Xh(function(sr){return[].concat(Xn(sr),[dr])})},[]),Gm=(0,g.useCallback)(function(dr){return Xh(function(sr){return sr.filter(function(Go){return Go.value!==dr.value})})},[]),Zu=(0,g.useCallback)(function(){Qh(),Pr(Array.isArray(In)?In[0]:In||""),jc.current&&Mp(jc.current,{value:""}),qd(!0)},[Qh,In]),fd=(0,g.useCallback)(function(dr){var sr=Mf.current;if(sr){var Go=Array.from(sr.options),da=Go.find(function(Ns){return Ns.value===dr});da&&(St||Go.forEach(function(Ns){return Ns.selected=!1}),da.selected=St?!da.selected:!0,sr.dispatchEvent(new Event("change",{bubbles:!0})),St||Zu())}},[Zu,St]),Xm=Ie==="fixed"&&!Qu&&!A,Ym=(0,g.useCallback)(function(){return(0,K.jsx)(z0,{options:tf,idleHeight:Ie,disabled:te,onChipRemove:A?void 0:fd})},[tf,Ie,te,A,fd]),Qm=St?!(In!=null&&In.length):!In,pp=Qm&&!si,Zm=Pn==null?void 0:Pn(In,si),qm=cp==null?void 0:cp.children,Jm=St?Ym():qm,nf=Zm||Jm||((he!=null?he:pn)?null:In)||null,rf=typeof nf=="string",ev=Ie==="fixed"&&(rf||pp),tv=St?Xm:ev,nv=function(){if(!pn)return rf?(0,K.jsx)(nm,{children:nf}):nf},rv=function(sr){!fp.current.shouldExtendInputValue||!rf||(sr.target.value="".concat(nf).concat(sr.target.value),fp.current.shouldExtendInputValue=!1)},ov=function(){return qd(!1)},i0=function(sr){St||ov(),rv(sr),jr(sr.target.value),Wt==null||Wt(sr)},iv=function(){var sr=Qd(tf.reverse());sr&&fd(sr)},av=function(){if(!(si||!In||pn)){if(!St)return qd(!1);iv()}},sv=function(){var sr=nl[dd];sr&&(fd(sr.value),!St&&Zu())},lv=function(){return sv()},uv=function(){if(Qu)return lv();Yh()},a0=function(sr){var Go,da,Ns=Lf.current,l0=(Go=nl.find(function(bv){return bv.value===sr}))===null||Go===void 0||(da=Go.ref)===null||da===void 0?void 0:da.current;!Ns||!l0||I0(l0,Ns)},cv=(0,g.useCallback)(function(){var dr=Qd(nl.slice(dd+1));return dr||Qd(nl)},[dd,nl]),dv=(0,g.useCallback)(function(){var dr=dd===-1?void 0:dd,sr=Qd(nl.slice(0,dr).reverse());return sr||Qd(nl.slice().reverse())},[dd,nl]),fv=function(sr){var Go=sr.code;switch(Go){case"Enter":{uv();break}case"Escape":{Zu();break}case"ArrowUp":{var da=dv();if(!da)break;a0(da),Pr(da);break}case"ArrowDown":{var Ns=cv();if(!Ns)break;a0(Ns),Pr(Ns);break}}},pv=function(sr){var Go=sr.code,da=["Enter","Space","ArrowDown","ArrowUp"];da.includes(Go)&&sr.preventDefault()},hv=function(){Yh()},mv=function(){!rf||si||!gu||(fp.current.shouldExtendInputValue=!0)},vv=function(sr){if(!(!rf||!jc.current||si||!gu||!In)){sr.preventDefault();var Go=nf.slice(0,-1);Mp(jc.current,{value:Go,selectionEnd:Go.length,selectionStart:Go.length})}},gv=function(sr){var Go=sr.code;(Go==="ArrowUp"||Go==="ArrowDown")&&sr.preventDefault(),sr.key.length===1&&mv(),Go==="Backspace"&&!sr.repeat&&av(),Go==="Backspace"&&vv(sr),Go==="Enter"&&Qu&&sr.preventDefault()},yv=function(sr){qh(!0),dn==null||dn(sr)},Av=function(sr){qh(!1),sr.currentTarget.contains(sr.relatedTarget)||Jn==null||Jn(sr)},_v=function(sr){var Go;up&&lo(St?Array.from(sr.target.selectedOptions).map(function(da){return da.value}):sr.target.value),(Go=Hr.onChange)===null||Go===void 0||Go.call(Hr,sr)},Ev=function(){Zu()};(0,g.useEffect)(function(){Array.isArray(In)||Pr(In||"")},[In]),(0,g.useEffect)(function(){(!lp&&!St||St)&&qd(!0)},[St,lp]),(0,g.useEffect)(function(){if(Qu){var dr,sr,Go;if(A)return(dr=o0.current)===null||dr===void 0?void 0:dr.focus();ef?(sr=Mf.current)===null||sr===void 0||sr.focus():(Go=jc.current)===null||Go===void 0||Go.focus()}else{var da,Ns;ef?(da=Mf.current)===null||da===void 0||da.blur():(Ns=jc.current)===null||Ns===void 0||Ns.blur()}},[Qu,A,ef]),(0,g.useEffect)(function(){up||lo(i)},[i,up]),(0,g.useEffect)(function(){var dr;(dr=Lf.current)===null||dr===void 0||dr.scroll(0,0)},[nl]),(0,g.useEffect)(function(){e0(!!si)},[si]),je([dp,Lf],Zu);var s0={onOptionClick:fd,setHoverValue:Pr,onDropDownOptionMount:$m,onDropDownOptionUnMount:Gm,highlightFormat:Ot,selectValue:In,searchValue:si,hoverValue:$o,multiple:St,defaultHighlighted:Pt,showCheckbox:Rt,mobile:A};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)($0,{className:T,$disabled:te,$focused:lp,$multiple:St,$status:xe,style:B,ref:dp,onKeyUp:fv,onKeyDown:gv,onClick:hv,onBlur:Av,onFocus:yv,children:[(0,K.jsx)(G0,{children:(0,K.jsx)(pm,{onConstantOptionMount:Hm,onConstantOptionUnMount:Km,searchValue:si,multiple:St,children:me})}),(0,K.jsxs)(X0,ud(ud({ref:ya(n,Mf),value:In,multiple:St,disabled:te,onKeyDown:pv},Hr),{},{onChange:_v,children:[(0,K.jsx)("option",{value:""}),Jd.map(function(dr){return(0,K.jsx)("option",{value:dr.value,children:dr.value},dr.value)})]})),U&&(0,K.jsx)(Y0,{children:U}),(0,K.jsxs)(Q0,{$multiple:St,$fixHeight:tv,id:"selectValueWrapper",children:[gu&&nv(),($&&pp||!ef)&&(0,K.jsx)(Z0,{tabIndex:-1,$multiple:St,ref:jc,placeholder:pp||pn?$:void 0,disabled:te,readOnly:ef,value:si,onChange:i0})]}),Qu&&!A&&(0,K.jsx)(tm,{id:"selectDropdownContainer",targetRef:de||dp,onMouseDown:rp,ref:Lf,container:hn,children:(0,K.jsx)(hh,ud(ud({},s0),{},{children:r0}))}),(0,K.jsxs)(em,{onClick:ym,onMouseDown:rp,children:[N&&Vm&&(0,K.jsx)(J0,{onClick:Ev,children:N}),w&&He==="input"&&(0,K.jsx)(Il,{size:22,appearance:"#5896C0"}),(0,K.jsx)(q0,{$opened:Qu,onClick:Um,"aria-hidden":!0})]})]}),Qu&&A&&(0,K.jsxs)(am,{onClose:Zu,children:[(0,K.jsx)(sm,{children:(0,K.jsx)(O0,{onClick:Zu,children:(0,K.jsx)(C0,{})})}),(0,K.jsxs)(hh,ud(ud({},s0),{},{children:[!!tf.length&&(0,K.jsx)(im,{children:tf.map(function(dr){return(0,K.jsx)(Vp,{onClose:function(){return fd(dr.value)},children:dr.children},dr.value)})}),(0,K.jsx)(rm,{children:(0,K.jsx)(ps,{placeholder:$,value:si,onChange:i0,ref:o0})}),(0,K.jsx)(om,{children:r0})]}))]})]})});Ah.displayName="Select";var Am=["children"],_h,Eh;function bh(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function wh(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?bh(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):bh(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var _m=Fe().div(_h||(_h=pe([`
  color: inherit;
`]))),Em=Fe().span(Eh||(Eh=pe([`
  font-weight: 500;
`]))),Ch=function(n){var i=n.children,s=i===void 0?"":i,A=_(n,Am),w=ip(),T=hm(),B=T.onAddTextToHighlight,N=(w==null?void 0:w.searchValue)||"",U=(0,g.useMemo)(function(){return Ip(s,N,w==null?void 0:w.highlightFormat)},[s,N,w==null?void 0:w.highlightFormat]),de=U.chunks,Q=U.parts;return(0,g.useEffect)(function(){B(s)},[B,s]),(0,K.jsx)(_m,wh(wh({},A),{},{className:A.className,title:s,children:Q.map(function(te,$){return de.includes(te.toLowerCase())?(0,K.jsx)(Em,{children:te},$):te})}))},xh;function ap(){return ap=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])}return r},ap.apply(this,arguments)}var bm=function(n){return g.createElement("svg",ap({width:10,height:8,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),xh||(xh=g.createElement("path",{d:"M9.702.465a.875.875 0 0 0-1.26.026L4.39 5.653 1.948 3.21A.875.875 0 0 0 .711 4.447l3.087 3.088a.875.875 0 0 0 1.26-.023L9.714 1.69A.875.875 0 0 0 9.702.465Z",fill:"var(--color-white)"})))};const wm=bm;var Sh,Oh,Ph,Bh,kh,Th,Rh,jh,Dh,Cm=Fe().label(Sh||(Sh=pe([`
  display: flex;
  align-items: center;
  gap: `,`;

  width: fit-content;
  color: `,`;

  cursor: pointer;

  `,`
`])),function(r){var n=r.theme;return n.checkbox.labelGap},function(r){var n=r.theme;return n.checkbox.colors.label},function(r){var n=r.$disabled;return n&&(0,jt.css)(Oh||(Oh=pe([`
      cursor: auto;
    `])))}),Zd=Fe().div(Ph||(Ph=pe([`
  position: relative;
  box-sizing: border-box;

  width: `,`;
  height: `,`;

  border-radius: `,`;

  flex-shrink: 0;

  border: `," solid ",`;

  &::before {
    background-color: `,`;
  }

  `,`

  &::before {
    content: '';

    position: absolute;

    border-radius: `,`;

    width: `,`;
    height: `,`;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%) scale(0);
    transition: all ease 0.2s;

    opacity: 0;
  }
`])),function(r){var n=r.theme;return n.checkbox.size.outer},function(r){var n=r.theme;return n.checkbox.size.outer},function(r){var n=r.theme;return n.checkbox.size.outerRadius},function(r){var n=r.theme;return n.size.inputBorderWidth},function(r){var n=r.theme;return n.checkbox.colors.borderInitial},function(r){var n=r.theme;return n.checkbox.colors.borderInitial},function(r){var n=r.$disabled;return n&&(0,jt.css)(Bh||(Bh=pe([`
      border-color: `,`;
      color: `,`;

      cursor: auto;

      &::before {
        background-color: `,`;
        cursor: auto;
      }
    `])),function(i){var s=i.theme;return s.checkbox.colors.disabled},function(i){var s=i.theme;return s.checkbox.colors.disabled},function(i){var s=i.theme;return s.checkbox.colors.disabled})},function(r){var n=r.theme;return n.checkbox.size.innerRadius},function(r){var n=r.theme;return n.checkbox.size.inner},function(r){var n=r.theme;return n.checkbox.size.inner}),Ih=Fe()(wm)(kh||(kh=pe([`
  position: absolute;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;

  `,`
`])),function(r){var n=r.$disabled;return n&&(0,jt.css)(Th||(Th=pe([`
      cursor: auto;
    `])))}),xm=Fe().input(Rh||(Rh=pe([`
  position: absolute;

  width: 0;
  height: 0;

  overflow: hidden;

  clip: rect(0 0 0 0);

  &:checked ~ `,` {
    border-color: `,`;
  }

  &:checked:disabled ~ `,` {
    border-color: `,`;
  }

  &:checked ~ `,`::before {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &:checked ~ `," ",` {
    opacity: 1;
  }
`])),Zd,function(r){var n=r.theme;return n.checkbox.colors.borderInitial},Zd,function(r){var n=r.theme;return n.checkbox.colors.disabled},Zd,Zd,Ih),Sm=Fe().div(jh||(jh=pe([`
  font-family: `,`;
  font-size: `,`;
  line-height: `,`;

  `,`
`])),function(r){var n=r.theme;return n.checkbox.font.fontFamily},function(r){var n=r.theme;return n.checkbox.font.fontSize},function(r){var n=r.theme;return n.checkbox.font.lineHeight},function(r){var n=r.$disabled;return n&&(0,jt.css)(Dh||(Dh=pe([`
      color: `,`;
    `])),function(i){var s=i.theme;return s.checkbox.colors.disabledLabel})}),Om=["className","label","disabled"];function Mh(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function Lh(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Mh(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Mh(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var sp=(0,g.forwardRef)(function(r,n){var i=r.className,s=r.label,A=r.disabled,w=A===void 0?!1:A,T=_(r,Om);return(0,K.jsxs)(Cm,{className:i,$disabled:w,children:[(0,K.jsx)(xm,Lh(Lh({disabled:w,type:"checkbox"},T),{},{ref:n})),(0,K.jsx)(Zd,{$disabled:w,children:(0,K.jsx)(Ih,{$disabled:w})}),s&&(0,K.jsx)(Sm,{$disabled:w,children:s})]})});sp.displayName="Checkbox";var Nh,Fh,Uh,zh,Wh,Vh,Pm=Fe()(sp)(Nh||(Nh=pe([`
  margin-right: 8px;
  pointer-events: none;
  flex-shrink: 0;
`]))),Bm=Fe()(so)(Fh||(Fh=pe([`
  `,`
  `,`

  `,`

  `,`
`])),function(r){var n=r.$mobile;return n&&(0,jt.css)(Uh||(Uh=pe([`
      box-shadow: inset 0 -1px 0 0 #f6f6f6;
    `])))},function(r){var n=r.$disabled;return n&&(0,jt.css)(zh||(zh=pe([`
      pointer-events: none;
      cursor: text;
    `])))},function(r){var n=r.$selected;return n&&(0,jt.css)(Wh||(Wh=pe([`
      background-color: var(--color-grey-blue);
      &:hover {
        background-color: var(--color-grey-blue);
      }
    `])))},function(r){var n=r.$active;return n&&(0,jt.css)(Vh||(Vh=pe([`
      background-color: var(--color-smoky-white);
    `])))}),km=["disabled","value","children","renderOption","renderValue"];function Hh(r,n){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);n&&(s=s.filter(function(A){return Object.getOwnPropertyDescriptor(r,A).enumerable})),i.push.apply(i,s)}return i}function cd(r){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?Hh(Object(i),!0).forEach(function(s){ge(r,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Hh(Object(i)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(i,s))})}return r}var Tm=function(n){var i=n.disabled,s=i===void 0?!1:i,A=n.value,w=n.children,T=n.renderOption,B=n.renderValue,N=_(n,km),U=ip(),de=U.defaultHighlighted,Q=U.showCheckbox,te=U.selectValue,$=U.mobile,ce=U.multiple,me=U.searchValue,xe=U.hoverValue,he=U.onOptionClick,we=U.setHoverValue,He=U.onDropDownOptionMount,Ue=U.onDropDownOptionUnMount,Ie=gh(),ze=N.onMouseDown,Et=(Ie==null?void 0:Ie.disabled)||s,Ut=(0,g.useMemo)(function(){return typeof w=="string"&&de?(0,K.jsx)(Ch,{children:w}):w},[de,w]),Ot=(0,g.useMemo)(function(){return(0,K.jsxs)(K.Fragment,{children:[Q&&(0,K.jsx)(Pm,{checked:te==null?void 0:te.includes(A),disabled:s,readOnly:!0}),Ut]})},[Q,te,A,s,Ut]),Lt=(0,g.useRef)(null),St=(0,g.useCallback)(function(){return ce?Ot:Ut},[ce,Ot,Ut]),dt=(0,g.useCallback)(function(){return he==null?void 0:he(A)},[he,A]),Pt=(0,g.useCallback)(function(){return we==null?void 0:we(A)},[we,A]),Je=(0,g.useCallback)(function(){return we==null?void 0:we("")},[we]),Rt=(0,g.useCallback)(function(hn){dt(),ze==null||ze(hn)},[dt,ze]),Zt=(0,g.useMemo)(function(){return{value:A,disabled:Et,ref:Lt}},[A,Et]),en=(0,g.useMemo)(function(){return T?T({disabled:s,searchValue:me,isHovered:xe===A}):St()},[T,St,s,A,me,xe]);return(0,g.useEffect)(function(){return He==null||He(Zt),function(){return Ue==null?void 0:Ue(Zt)}},[He,Ue,Zt]),(0,K.jsx)(Bm,cd(cd({},N),{},{className:N.className,$disabled:Et,$selected:te===A,$active:xe===A,$mobile:$,ref:Lt,onMouseDown:Rt,onMouseEnter:Pt,onMouseMove:Pt,onMouseLeave:Je,children:en}))},Rm=function(n){var i=n.disabled,s=i===void 0?!1:i,A=n.value,w=n.children,T=n.renderOption,B=n.renderValue,N=fm(),U=N.searchValue,de=N.multiple,Q=N.onConstantOptionMount,te=N.onConstantOptionUnMount,$=gh(),ce=($==null?void 0:$.disabled)||s,me=(0,g.useCallback)(function(He){var Ue=He.onClose;return de?(0,K.jsx)(Vp,{onClose:Ue,disabled:ce,size:"l",children:w}):(0,K.jsx)(K.Fragment,{children:w})},[w,de,ce]),xe=B||me,he=(0,g.useMemo)(function(){return T?T({disabled:s,searchValue:U}):w},[T,s,w,U]),we=(0,g.useMemo)(function(){return{value:A,disabled:ce,children:he,renderValue:xe}},[A,ce,he,xe]);return(0,g.useEffect)(function(){return Q==null||Q(we),function(){return te==null?void 0:te(we)}},[Q,te,we]),null},jm=function(n){return(0,K.jsx)(Rm,cd({},n))},Dm=function(n){var i=(0,g.useState)(null),s=ee(i,2),A=s[0],w=s[1],T=ip(),B=A==null?void 0:A.some(function(de){return Ip(de,T==null?void 0:T.searchValue,T==null?void 0:T.highlightFormat).shouldHiglight}),N=(0,g.useCallback)(function(de){return w(function(Q){return Array.from(new Set([].concat(Xn(Q||[]),[de])))})},[]),U=A===null||B;return(0,K.jsx)(mm,{onAddTextToHighlight:N,children:T&&U&&(0,K.jsx)(Tm,cd({},n))})},Im=function(n){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(jm,cd({},n)),(0,K.jsx)(Dm,cd({},n))]})},Mm=function(n){var i=n.label,s=n.disabled,A=s===void 0?!1:s,w=n.children;return(0,K.jsxs)(vm,{label:i,disabled:A,children:[(0,K.jsx)("div",{children:i}),w]})},Lm={size:{inputBorderWidth:"1px"},colors:{primary:"#5D8FEF"},checkbox:{labelGap:"8px",colors:{label:"#454545",borderInitial:"#5D8FEF",borderHover:"#5D8FEF",disabled:"#C1C1C1",disabledLabel:"#454545"},size:{outerRadius:"6px",innerRadius:"4px",outer:"24px",inner:"18px"},font:{fontFamily:"Roboto",fontSize:"22px",lineHeight:"26px"}},select:{borderRadius:"10px",dropdownBoxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)",colors:{placeholder:"#737373",text:"#414141",initialBackgroundColor:"#ffffff",borderInitial:"#EBEBEB",borderHover:"#5D8FEF",borderDisabled:"#eeeeee",borderError:"#EC7575",borderErrorHover:"#EC7575",closeButtonBackgroundHover:"#ececec"},size:{borderWidth:"1px",initialHeight:"42px",dropdownMaxHeight:"256px",dropdownPadding:"8px 0"},font:{fontFamily:"Roboto",fontSize:"20px",lineHeight:"23px",fontWeight:"400",placeholderWeight:"300"}},input:{iconGap:"9px",borderRadius:"10px",colors:{disabled:{background:"#fbfbfb",border:"#eeeeee",text:"#737373"},initial:{background:"#ffffff",border:"#ebebeb",text:"#323232"},borderHover:"#7ec0ee",borderFocused:"#7ec0ee",borderFocusedHover:"#7ec0ee",borderError:"#f14747",borderErrorHover:"#f14747",placeholder:"#737373"},size:{padding:"8px 16px",borderWidth:"2px"},font:{fontSize:"20px",lineHeight:"24px",inputWeight:"400",placeholderWeight:"300",fontFamily:"Roboto"}},textarea:{borderRadius:"10px",colors:{disabled:{background:"#fafafa",border:"#eeeeee",text:"#737373"},initial:{background:"#ffffff",border:"#ebebeb",text:"#323232"},borderHover:"#7ec0ee",borderFocused:"#7ec0ee",borderFocusedHover:"#7ec0ee",borderError:"#f14747",borderErrorHover:"#f14747",placeholder:"#737373"},size:{padding:"6px 14px",borderWidth:"2px"},font:{fontSize:"20px",lineHeight:"24px",inputWeight:"400",placeholderWeight:"300",fontFamily:"Roboto"}},button:{gap:"8px",borderRadius:"10px",colors:{primary:{text:"#ffffff",textDisabled:"#ffffff",backgroundDisabled:"#c0c0c0",backgroundInitial:"#5896c0",backgroundHover:"#4980a5",backgroundActive:"#4980a5"},secondary:{text:"#5896c0",textDisabled:"#a6a6a6",backgroundDisabled:"#ffffff",backgroundInitial:"#ffffff",backgroundHover:"#f5f5f5",backgroundActive:"#f5f5f5"}},size:{large:{padding:"8px 48px"},medium:{padding:"8px 16px"},small:{padding:"8px 16px"}},font:{fontFamily:"Roboto",large:{fontSize:"26px",lineHeight:"30px"},medium:{fontSize:"22px",lineHeight:"26px"},small:{fontSize:"18px",lineHeight:"20px"}}},popup:{colors:{overlayBackground:"rgba(250, 250, 250, 0.65)"}},dropdownOption:{colors:{text:"#454545"},size:{padding:"8px 16px"},font:{fontFamily:"Roboto",fontSize:"20px",lineHeight:"24px"}},chip:{font:{fontFamily:"Roboto",fontWeight:400,fontSize:"20px",lineHeight:"24px"},size:{maxWidth:"190px",width:"fit-content",gap:"4px",maxWidthText:"fit-content",padding:"3px 7px",paddingWithIcon:"3px 3px 3px 7px",border:"1px",borderRadius:"8px",borderRadiusIcon:"4px",disabled:{border:"1px"}},colors:{backgroundColor:"#ffffff",color:"#454545",border:"#5d8fef",disabled:{color:"#a6a6a6",border:"#ffffff",backgroundColorIcon:"#ececec",fillIcon:"#ececec"},hover:{backgroundColorIcon:"#ececec",fillIcon:"#959595"}}},iconButton:{borderRadius:"10px",colors:{background:"#ffffff",backgroundHover:"#ebebeb",borderActive:"#dadada",backgroundDisabled:"#ebebeb"},size:{xlarge:{width:"48px",height:"48px",borderRadius:"10px",padding:"12px"},large:{width:"42px",height:"42px",borderRadius:"10px",padding:"9px"},medium:{width:"36px",height:"36px",borderRadius:"8px",padding:"6px"},small:{width:"24px",height:"24px",borderRadius:"4px",padding:"unset"}}}}})(),z})())},6942(M,f){var y,F;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var E={}.hasOwnProperty;function x(){for(var J="",R=0;R<arguments.length;R++){var z=arguments[R];z&&(J=d(J,m(z)))}return J}function m(J){if(typeof J=="string"||typeof J=="number")return J;if(typeof J!="object")return"";if(Array.isArray(J))return x.apply(null,J);if(J.toString!==Object.prototype.toString&&!J.toString.toString().includes("[native code]"))return J.toString();var R="";for(var z in J)E.call(J,z)&&J[z]&&(R=d(R,z));return R}function d(J,R){return R?J?J+" "+R:J+R:J}M.exports?(x.default=x,M.exports=x):(y=[],F=(function(){return x}).apply(f,y),F!==void 0&&(M.exports=F))})()},4329(M,f,y){"use strict";y.d(f,{Ak:()=>m});let F=d=>crypto.getRandomValues(new Uint8Array(d)),E=(d,J,R)=>{let z=(2<<Math.log(d.length-1)/Math.LN2)-1,X=-~(1.6*z*J/d.length);return(be=J)=>{let se="";for(;;){let ge=R(X),ye=X;for(;ye--;)if(se+=d[ge[ye]&z]||"",se.length===be)return se}}},x=(d,J=21)=>E(d,J,F),m=(d=21)=>crypto.getRandomValues(new Uint8Array(d)).reduce((J,R)=>(R&=63,R<36?J+=R.toString(36):R<62?J+=(R-26).toString(36).toUpperCase():R>62?J+="-":J+="_",J),"")}},eo={};function ft(M){var f=eo[M];if(f!==void 0)return f.exports;var y=eo[M]={id:M,exports:{}};return Jr[M].call(y.exports,y,y.exports,ft),y.exports}ft.m=Jr,ft.n=M=>{var f=M&&M.__esModule?()=>M.default:()=>M;return ft.d(f,{a:f}),f},(()=>{var M=Object.getPrototypeOf?y=>Object.getPrototypeOf(y):y=>y.__proto__,f;ft.t=function(y,F){if(F&1&&(y=this(y)),F&8||typeof y=="object"&&y&&(F&4&&y.__esModule||F&16&&typeof y.then=="function"))return y;var E=Object.create(null);ft.r(E);var x={};f=f||[null,M({}),M([]),M(M)];for(var m=F&2&&y;(typeof m=="object"||typeof m=="function")&&!~f.indexOf(m);m=M(m))Object.getOwnPropertyNames(m).forEach(d=>x[d]=()=>y[d]);return x.default=()=>y,ft.d(E,x),E}})(),ft.d=(M,f)=>{for(var y in f)ft.o(f,y)&&!ft.o(M,y)&&Object.defineProperty(M,y,{enumerable:!0,get:f[y]})},ft.f={},ft.e=M=>Promise.all(Object.keys(ft.f).reduce((f,y)=>(ft.f[y](M,f),f),[])),ft.u=M=>""+{792:"main",849:"askmain",920:"library",957:"action",998:"command"}[M]+"."+{792:"cdb0cb34",849:"17addacf",920:"dfe204fd",957:"39c2cc81",998:"c63c9b02"}[M]+".js",ft.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(M){if(typeof window=="object")return window}})(),ft.o=(M,f)=>Object.prototype.hasOwnProperty.call(M,f),(()=>{var M={},f="react-sc-web:";ft.l=(y,F,E,x)=>{if(M[y]){M[y].push(F);return}var m,d;if(E!==void 0)for(var J=document.getElementsByTagName("script"),R=0;R<J.length;R++){var z=J[R];if(z.getAttribute("src")==y||z.getAttribute("data-webpack")==f+E){m=z;break}}m||(d=!0,m=document.createElement("script"),m.charset="utf-8",ft.nc&&m.setAttribute("nonce",ft.nc),m.setAttribute("data-webpack",f+E),m.src=y),M[y]=[F];var X=(se,ge)=>{m.onerror=m.onload=null,clearTimeout(be);var ye=M[y];if(delete M[y],m.parentNode&&m.parentNode.removeChild(m),ye&&ye.forEach(Z=>Z(ge)),se)return se(ge)},be=setTimeout(X.bind(null,void 0,{type:"timeout",target:m}),12e4);m.onerror=X.bind(null,m.onerror),m.onload=X.bind(null,m.onload),d&&document.head.appendChild(m)}})(),ft.r=M=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},ft.p="/",(()=>{var M={524:0};ft.f.j=(F,E)=>{var x=ft.o(M,F)?M[F]:void 0;if(x!==0)if(x)E.push(x[2]);else{var m=new Promise((z,X)=>x=M[F]=[z,X]);E.push(x[2]=m);var d=ft.p+ft.u(F),J=new Error,R=z=>{if(ft.o(M,F)&&(x=M[F],x!==0&&(M[F]=void 0),x)){var X=z&&(z.type==="load"?"missing":z.type),be=z&&z.target&&z.target.src;J.message="Loading chunk "+F+` failed.
(`+X+": "+be+")",J.name="ChunkLoadError",J.type=X,J.request=be,x[1](J)}};ft.l(d,R,"chunk-"+F,F)}};var f=(F,E)=>{var[x,m,d]=E,J,R,z=0;if(x.some(be=>M[be]!==0)){for(J in m)ft.o(m,J)&&(ft.m[J]=m[J]);if(d)var X=d(ft)}for(F&&F(E);z<x.length;z++)R=x[z],ft.o(M,R)&&M[R]&&M[R][0](),M[R]=0},y=self.webpackChunkreact_sc_web=self.webpackChunkreact_sc_web||[];y.forEach(f.bind(null,0)),y.push=f.bind(null,y.push.bind(y))})(),ft.nc=void 0;var Li={};(()=>{"use strict";var M=ft(4848),f=ft(6540),y=ft.t(f,2),F=ft(5338),E=ft(2896),x=ft(961),m=ft.t(x,2),d=ft(7767),J=ft(5588),R,z,X,be,se,ge,ye,Z,ve,ae,fe,ee,g,Be,Ee,We,ht,Tt,zt,Wn,ir,Vn,An,Bn,ar,_n;/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wt(){return wt=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)Object.prototype.hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},wt.apply(this,arguments)}function ln(L,W){if(L==null)return{};var G={},Y=Object.keys(L),je,ut;for(ut=0;ut<Y.length;ut++)je=Y[ut],!(W.indexOf(je)>=0)&&(G[je]=L[je]);return G}const kn="get",er="application/x-www-form-urlencoded";function Oe(L){return L!=null&&typeof L.tagName=="string"}function vt(L){return Oe(L)&&L.tagName.toLowerCase()==="button"}function gn(L){return Oe(L)&&L.tagName.toLowerCase()==="form"}function Bt(L){return Oe(L)&&L.tagName.toLowerCase()==="input"}function on(L){return!!(L.metaKey||L.altKey||L.ctrlKey||L.shiftKey)}function rt(L,W){return L.button===0&&(!W||W==="_self")&&!on(L)}function tt(L){return L===void 0&&(L=""),new URLSearchParams(typeof L=="string"||Array.isArray(L)||L instanceof URLSearchParams?L:Object.keys(L).reduce((W,G)=>{let Y=L[G];return W.concat(Array.isArray(Y)?Y.map(je=>[G,je]):[[G,Y]])},[]))}function xt(L,W){let G=tt(L);return W&&W.forEach((Y,je)=>{G.has(je)||W.getAll(je).forEach(ut=>{G.append(je,ut)})}),G}let nt=null;function mt(){if(nt===null)try{new FormData(document.createElement("form"),0),nt=!1}catch(L){nt=!0}return nt}const ct=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kt(L){return L!=null&&!ct.has(L)?null:L}function Sn(L,W){let G,Y,je,ut,gt;if(gn(L)){let Qt=L.getAttribute("action");Y=Qt?Tt(Qt,W):null,G=L.getAttribute("method")||kn,je=kt(L.getAttribute("enctype"))||er,ut=new FormData(L)}else if(vt(L)||Bt(L)&&(L.type==="submit"||L.type==="image")){let Qt=L.form;if(Qt==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let Kt=L.getAttribute("formaction")||Qt.getAttribute("action");if(Y=Kt?Tt(Kt,W):null,G=L.getAttribute("formmethod")||Qt.getAttribute("method")||kn,je=kt(L.getAttribute("formenctype"))||kt(Qt.getAttribute("enctype"))||er,ut=new FormData(Qt,L),!mt()){let{name:bt,type:At,value:vn}=L;if(At==="image"){let mr=bt?bt+".":"";ut.append(mr+"x","0"),ut.append(mr+"y","0")}else bt&&ut.append(bt,vn)}}else{if(Oe(L))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');G=kn,Y=null,je=er,gt=L}return ut&&je==="text/plain"&&(gt=ut,ut=void 0),{action:Y,method:G.toLowerCase(),encType:je,formData:ut,body:gt}}const Rn=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mn=null,Lr=null,uo="6";try{window.__reactRouterVersion=uo}catch(L){}function _i(L,W){return zt({basename:W==null?void 0:W.basename,future:wt({},W==null?void 0:W.future,{v7_prependBasename:!0}),history:Wn({window:W==null?void 0:W.window}),hydrationData:(W==null?void 0:W.hydrationData)||Po(),routes:L,mapRouteProperties:z,dataStrategy:W==null?void 0:W.dataStrategy,patchRoutesOnNavigation:W==null?void 0:W.patchRoutesOnNavigation,window:W==null?void 0:W.window}).initialize()}function Nr(L,W){return zt({basename:W==null?void 0:W.basename,future:wt({},W==null?void 0:W.future,{v7_prependBasename:!0}),history:ir({window:W==null?void 0:W.window}),hydrationData:(W==null?void 0:W.hydrationData)||Po(),routes:L,mapRouteProperties:z,dataStrategy:W==null?void 0:W.dataStrategy,patchRoutesOnNavigation:W==null?void 0:W.patchRoutesOnNavigation,window:W==null?void 0:W.window}).initialize()}function Po(){var L;let W=(L=window)==null?void 0:L.__staticRouterHydrationData;return W&&W.errors&&(W=wt({},W,{errors:di(W.errors)})),W}function di(L){if(!L)return null;let W=Object.entries(L),G={};for(let[Y,je]of W)if(je&&je.__type==="RouteErrorResponse")G[Y]=new Vn(je.status,je.statusText,je.data,je.internal===!0);else if(je&&je.__type==="Error"){if(je.__subType){let ut=window[je.__subType];if(typeof ut=="function")try{let gt=new ut(je.message);gt.stack="",G[Y]=gt}catch(gt){}}if(G[Y]==null){let ut=new Error(je.message);ut.stack="",G[Y]=ut}}else G[Y]=je;return G}const xo=f.createContext({isTransitioning:!1}),So=f.createContext(new Map),Gr=y["startTransition"],Nn=m["flushSync"],$n=y["useId"];function an(L){Gr?Gr(L):L()}function wr(L){Nn?Nn(L):L()}class zn{constructor(){this.status="pending",this.promise=new Promise((W,G)=>{this.resolve=Y=>{this.status==="pending"&&(this.status="resolved",W(Y))},this.reject=Y=>{this.status==="pending"&&(this.status="rejected",G(Y))}})}}function Ze(L){let{fallbackElement:W,router:G,future:Y}=L,[je,ut]=R.useState(G.state),[gt,Qt]=R.useState(),[Kt,bt]=R.useState({isTransitioning:!1}),[At,vn]=R.useState(),[mr,Rr]=R.useState(),[Co,Qo]=R.useState(),ai=R.useRef(new Map),{v7_startTransition:Ui}=Y||{},xi=R.useCallback(Vo=>{Ui?an(Vo):Vo()},[Ui]),yo=R.useCallback((Vo,Ea)=>{let{deletedFetchers:so,flushSync:Ba,viewTransitionOpts:js}=Ea;Vo.fetchers.forEach((el,fu)=>{el.data!==void 0&&ai.current.set(fu,el.data)}),so.forEach(el=>ai.current.delete(el));let As=G.window==null||G.window.document==null||typeof G.window.document.startViewTransition!="function";if(!js||As){Ba?wr(()=>ut(Vo)):xi(()=>ut(Vo));return}if(Ba){wr(()=>{mr&&(At&&At.resolve(),mr.skipTransition()),bt({isTransitioning:!0,flushSync:!0,currentLocation:js.currentLocation,nextLocation:js.nextLocation})});let el=G.window.document.startViewTransition(()=>{wr(()=>ut(Vo))});el.finished.finally(()=>{wr(()=>{vn(void 0),Rr(void 0),Qt(void 0),bt({isTransitioning:!1})})}),wr(()=>Rr(el));return}mr?(At&&At.resolve(),mr.skipTransition(),Qo({state:Vo,currentLocation:js.currentLocation,nextLocation:js.nextLocation})):(Qt(Vo),bt({isTransitioning:!0,flushSync:!1,currentLocation:js.currentLocation,nextLocation:js.nextLocation}))},[G.window,mr,At,ai,xi]);R.useLayoutEffect(()=>G.subscribe(yo),[G,yo]),R.useEffect(()=>{Kt.isTransitioning&&!Kt.flushSync&&vn(new zn)},[Kt]),R.useEffect(()=>{if(At&&gt&&G.window){let Vo=gt,Ea=At.promise,so=G.window.document.startViewTransition(()=>Ir(null,null,function*(){xi(()=>ut(Vo)),yield Ea}));so.finished.finally(()=>{vn(void 0),Rr(void 0),Qt(void 0),bt({isTransitioning:!1})}),Rr(so)}},[xi,gt,At,G.window]),R.useEffect(()=>{At&&gt&&je.location.key===gt.location.key&&At.resolve()},[At,mr,je.location,gt]),R.useEffect(()=>{!Kt.isTransitioning&&Co&&(Qt(Co.state),bt({isTransitioning:!0,flushSync:!1,currentLocation:Co.currentLocation,nextLocation:Co.nextLocation}),Qo(void 0))},[Kt.isTransitioning,Co]),R.useEffect(()=>{},[]);let Ai=R.useMemo(()=>({createHref:G.createHref,encodeLocation:G.encodeLocation,go:Vo=>G.navigate(Vo),push:(Vo,Ea,so)=>G.navigate(Vo,{state:Ea,preventScrollReset:so==null?void 0:so.preventScrollReset}),replace:(Vo,Ea,so)=>G.navigate(Vo,{replace:!0,state:Ea,preventScrollReset:so==null?void 0:so.preventScrollReset})}),[G]),oa=G.basename||"/",Qi=R.useMemo(()=>({router:G,navigator:Ai,static:!1,basename:oa}),[G,Ai,oa]),Js=R.useMemo(()=>({v7_relativeSplatPath:G.future.v7_relativeSplatPath}),[G.future.v7_relativeSplatPath]);return R.useEffect(()=>X(Y,G.future),[Y,G.future]),R.createElement(R.Fragment,null,R.createElement(be.Provider,{value:Qi},R.createElement(se.Provider,{value:je},R.createElement(So.Provider,{value:ai.current},R.createElement(xo.Provider,{value:Kt},R.createElement(ge,{basename:oa,location:je.location,navigationType:je.historyAction,navigator:Ai,future:Js},je.initialized||G.future.v7_partialHydration?R.createElement(Ar,{routes:G.routes,future:G.future,state:je}):W))))),null)}const Ar=null;function Zn(L){let{routes:W,future:G,state:Y}=L;return ye(W,void 0,Y,G)}function Kr(L){let{basename:W,children:G,future:Y,window:je}=L,ut=f.useRef();ut.current==null&&(ut.current=(0,J.zR)({window:je,v5Compat:!0}));let gt=ut.current,[Qt,Kt]=f.useState({action:gt.action,location:gt.location}),{v7_startTransition:bt}=Y||{},At=f.useCallback(vn=>{bt&&Gr?Gr(()=>Kt(vn)):Kt(vn)},[Kt,bt]);return f.useLayoutEffect(()=>gt.listen(At),[gt,At]),f.useEffect(()=>(0,d.V8)(Y),[Y]),f.createElement(d.Ix,{basename:W,children:G,location:Qt.location,navigationType:Qt.action,navigator:gt,future:Y})}function Bo(L){let{basename:W,children:G,future:Y,window:je}=L,ut=R.useRef();ut.current==null&&(ut.current=ir({window:je,v5Compat:!0}));let gt=ut.current,[Qt,Kt]=R.useState({action:gt.action,location:gt.location}),{v7_startTransition:bt}=Y||{},At=R.useCallback(vn=>{bt&&Gr?Gr(()=>Kt(vn)):Kt(vn)},[Kt,bt]);return R.useLayoutEffect(()=>gt.listen(At),[gt,At]),R.useEffect(()=>X(Y),[Y]),R.createElement(ge,{basename:W,children:G,location:Qt.location,navigationType:Qt.action,navigator:gt,future:Y})}function co(L){let{basename:W,children:G,future:Y,history:je}=L,[ut,gt]=R.useState({action:je.action,location:je.location}),{v7_startTransition:Qt}=Y||{},Kt=R.useCallback(bt=>{Qt&&Gr?Gr(()=>gt(bt)):gt(bt)},[gt,Qt]);return R.useLayoutEffect(()=>je.listen(Kt),[je,Kt]),R.useEffect(()=>X(Y),[Y]),R.createElement(ge,{basename:W,children:G,location:ut.location,navigationType:ut.action,navigator:je,future:Y})}const ko=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Cr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,to=f.forwardRef(function(W,G){let{onClick:Y,relative:je,reloadDocument:ut,replace:gt,state:Qt,target:Kt,to:bt,preventScrollReset:At,viewTransition:vn}=W,mr=ln(W,Rn),{basename:Rr}=f.useContext(d.jb),Co,Qo=!1;if(typeof bt=="string"&&Cr.test(bt)&&(Co=bt,ko))try{let yo=new URL(window.location.href),Ai=bt.startsWith("//")?new URL(yo.protocol+bt):new URL(bt),oa=(0,J.pb)(Ai.pathname,Rr);Ai.origin===yo.origin&&oa!=null?bt=oa+Ai.search+Ai.hash:Qo=!0}catch(yo){}let ai=(0,d.$P)(bt,{relative:je}),Ui=Ct(bt,{replace:gt,state:Qt,target:Kt,preventScrollReset:At,relative:je,viewTransition:vn});function xi(yo){Y&&Y(yo),yo.defaultPrevented||Ui(yo)}return f.createElement("a",wt({},mr,{href:Co||ai,onClick:Qo||ut?Y:xi,ref:G,target:Kt}))}),No=null,_r=null;function io(L){let{getKey:W,storageKey:G}=L;return fo({getKey:W,storageKey:G}),null}var Mr;(function(L){L.UseScrollRestoration="useScrollRestoration",L.UseSubmit="useSubmit",L.UseSubmitFetcher="useSubmitFetcher",L.UseFetcher="useFetcher",L.useViewTransitionState="useViewTransitionState"})(Mr||(Mr={}));var fi;(function(L){L.UseFetcher="useFetcher",L.UseFetchers="useFetchers",L.UseScrollRestoration="useScrollRestoration"})(fi||(fi={}));function Ji(L){return L+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}function Qe(L){let W=R.useContext(be);return W||An(!1),W}function Ye(L){let W=R.useContext(se);return W||An(!1),W}function Ct(L,W){let{target:G,replace:Y,state:je,preventScrollReset:ut,relative:gt,viewTransition:Qt}=W===void 0?{}:W,Kt=(0,d.Zp)(),bt=(0,d.zy)(),At=(0,d.x$)(L,{relative:gt});return f.useCallback(vn=>{if(rt(vn,G)){vn.preventDefault();let mr=Y!==void 0?Y:(0,J.AO)(bt)===(0,J.AO)(At);Kt(L,{replace:mr,state:je,preventScrollReset:ut,relative:gt,viewTransition:Qt})}},[bt,Kt,At,Y,je,G,L,ut,gt,Qt])}function Nt(L){let W=R.useRef(tt(L)),G=R.useRef(!1),Y=ve(),je=R.useMemo(()=>xt(Y.search,G.current?null:W.current),[Y.search]),ut=fe(),gt=R.useCallback((Qt,Kt)=>{const bt=tt(typeof Qt=="function"?Qt(je):Qt);G.current=!0,ut("?"+bt,Kt)},[ut,je]);return[je,gt]}function qt(){if(typeof document=="undefined")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let En=0,wn=()=>"__"+String(++En)+"__";function Yn(){let{router:L}=Qe(Mr.UseSubmit),{basename:W}=R.useContext(ae),G=ee();return R.useCallback(function(Y,je){je===void 0&&(je={}),qt();let{action:ut,method:gt,encType:Qt,formData:Kt,body:bt}=Sn(Y,W);if(je.navigate===!1){let At=je.fetcherKey||wn();L.fetch(At,G,je.action||ut,{preventScrollReset:je.preventScrollReset,formData:Kt,body:bt,formMethod:je.method||gt,formEncType:je.encType||Qt,flushSync:je.flushSync})}else L.navigate(je.action||ut,{preventScrollReset:je.preventScrollReset,formData:Kt,body:bt,formMethod:je.method||gt,formEncType:je.encType||Qt,replace:je.replace,state:je.state,fromRouteId:G,flushSync:je.flushSync,viewTransition:je.viewTransition})},[L,W,G])}function fr(L,W){let{relative:G}=W===void 0?{}:W,{basename:Y}=R.useContext(ae),je=R.useContext(g);je||An(!1);let[ut]=je.matches.slice(-1),gt=wt({},Z(L||".",{relative:G})),Qt=ve();if(L==null){gt.search=Qt.search;let Kt=new URLSearchParams(gt.search),bt=Kt.getAll("index");if(bt.some(vn=>vn==="")){Kt.delete("index"),bt.filter(mr=>mr).forEach(mr=>Kt.append("index",mr));let vn=Kt.toString();gt.search=vn?"?"+vn:""}}return(!L||L===".")&&ut.route.index&&(gt.search=gt.search?gt.search.replace(/^\?/,"?index&"):"?index"),Y!=="/"&&(gt.pathname=gt.pathname==="/"?Y:Bn([Y,gt.pathname])),ht(gt)}function gr(L){var W;let{key:G}=L===void 0?{}:L,{router:Y}=Qe(Mr.UseFetcher),je=Ye(fi.UseFetcher),ut=R.useContext(So),gt=R.useContext(g),Qt=(W=gt.matches[gt.matches.length-1])==null?void 0:W.route.id;ut||An(!1),gt||An(!1),Qt==null&&An(!1);let Kt=$n?$n():"",[bt,At]=R.useState(G||Kt);G&&G!==bt?At(G):bt||At(wn()),R.useEffect(()=>(Y.getFetcher(bt),()=>{Y.deleteFetcher(bt)}),[Y,bt]);let vn=R.useCallback((xi,yo)=>{Qt||An(!1),Y.fetch(bt,Qt,xi,yo)},[bt,Qt,Y]),mr=Yn(),Rr=R.useCallback((xi,yo)=>{mr(xi,wt({},yo,{navigate:!1,fetcherKey:bt}))},[bt,mr]),Co=R.useMemo(()=>R.forwardRef((yo,Ai)=>R.createElement(_r,wt({},yo,{navigate:!1,fetcherKey:bt,ref:Ai}))),[bt]),Qo=je.fetchers.get(bt)||ar,ai=ut.get(bt);return R.useMemo(()=>wt({Form:Co,submit:Rr,load:vn},Qo,{data:ai}),[Co,Rr,vn,Qo,ai])}function rr(){let L=Ye(fi.UseFetchers);return Array.from(L.fetchers.entries()).map(W=>{let[G,Y]=W;return wt({},Y,{key:G})})}const Fn="react-router-scroll-positions";let Xr={};function fo(L){let{getKey:W,storageKey:G}=L===void 0?{}:L,{router:Y}=Qe(Mr.UseScrollRestoration),{restoreScrollPosition:je,preventScrollReset:ut}=Ye(fi.UseScrollRestoration),{basename:gt}=R.useContext(ae),Qt=ve(),Kt=Be(),bt=Ee();R.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),pi(R.useCallback(()=>{if(bt.state==="idle"){let At=(W?W(Qt,Kt):null)||Qt.key;Xr[At]=window.scrollY}try{sessionStorage.setItem(G||Fn,JSON.stringify(Xr))}catch(At){}window.history.scrollRestoration="auto"},[G,W,bt.state,Qt,Kt])),typeof document!="undefined"&&(R.useLayoutEffect(()=>{try{let At=sessionStorage.getItem(G||Fn);At&&(Xr=JSON.parse(At))}catch(At){}},[G]),R.useLayoutEffect(()=>{let At=W&&gt!=="/"?(mr,Rr)=>W(wt({},mr,{pathname:Tt(mr.pathname,gt)||mr.pathname}),Rr):W,vn=Y==null?void 0:Y.enableScrollRestoration(Xr,()=>window.scrollY,At);return()=>vn&&vn()},[Y,gt,W]),R.useLayoutEffect(()=>{if(je!==!1){if(typeof je=="number"){window.scrollTo(0,je);return}if(Qt.hash){let At=document.getElementById(decodeURIComponent(Qt.hash.slice(1)));if(At){At.scrollIntoView();return}}ut!==!0&&window.scrollTo(0,0)}},[Qt,je,ut]))}function bn(L,W){let{capture:G}=W||{};R.useEffect(()=>{let Y=G!=null?{capture:G}:void 0;return window.addEventListener("beforeunload",L,Y),()=>{window.removeEventListener("beforeunload",L,Y)}},[L,G])}function pi(L,W){let{capture:G}=W||{};R.useEffect(()=>{let Y=G!=null?{capture:G}:void 0;return window.addEventListener("pagehide",L,Y),()=>{window.removeEventListener("pagehide",L,Y)}},[L,G])}function hi(L){let{when:W,message:G}=L,Y=We(W);R.useEffect(()=>{Y.state==="blocked"&&(window.confirm(G)?setTimeout(Y.proceed,0):Y.reset())},[Y,G]),R.useEffect(()=>{Y.state==="blocked"&&!W&&Y.reset()},[Y,W])}function mi(L,W){W===void 0&&(W={});let G=R.useContext(xo);G==null&&An(!1);let{basename:Y}=Qe(Mr.useViewTransitionState),je=Z(L,{relative:W.relative});if(!G.isTransitioning)return!1;let ut=Tt(G.currentLocation.pathname,Y)||G.currentLocation.pathname,gt=Tt(G.nextLocation.pathname,Y)||G.nextLocation.pathname;return _n(je.pathname,gt)!=null||_n(je.pathname,ut)!=null}var po=ft(9616),vi=ft(4329),fa=ft(1582),Si=ft(4064),Ei=ft(422),ja=ft(6942),Sr=ft.n(ja),bi;function xr(){return xr=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},xr.apply(null,arguments)}var aa=function(W){return f.createElement("svg",xr({xmlns:"http://www.w3.org/2000/svg",width:36,height:36,fill:"none"},W),bi||(bi=f.createElement("path",{stroke:"var(--color-white)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m7.5 18-.906-8.156c-.26-2.334 2.143-4.048 4.266-3.042l17.916 8.488c2.288 1.082 2.288 4.338 0 5.42L10.86 29.199c-2.123 1.005-4.526-.709-4.266-3.043zH18"})))};const Oi=aa;var pa;function Wr(){return Wr=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Wr.apply(null,arguments)}var ha=function(W){return f.createElement("svg",Wr({xmlns:"http://www.w3.org/2000/svg",width:36,height:36,fill:"none"},W),pa||(pa=f.createElement("path",{stroke:"var(--color-white)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m7.5 18-.906-8.156c-.26-2.334 2.143-4.048 4.266-3.042l17.916 8.488c2.288 1.082 2.288 4.338 0 5.42L10.86 29.199c-2.123 1.005-4.526-.709-4.266-3.043zH18"})))};const Fo=ha;var Yr=ft(5782),Gt=ft(2320);const ea={size:{inputBorderWidth:"1px"},colors:{primary:"#6db3e0"},checkbox:{labelGap:"8px",colors:{label:"#e0e0e0",borderInitial:"#6db3e0",borderHover:"#6db3e0",disabled:"#555555",disabledLabel:"#888888"},size:{outerRadius:"6px",innerRadius:"4px",outer:"24px",inner:"18px"},font:{fontFamily:"Roboto",fontSize:"22px",lineHeight:"26px"}},select:{borderRadius:"10px",dropdownBoxShadow:"0 2px 4px rgba(0, 0, 0, 0.5)",colors:{placeholder:"#aaaaaa",text:"#e0e0e0",initialBackgroundColor:"#1e1e1e",borderInitial:"#404040",borderHover:"#6db3e0",borderDisabled:"#404040",borderError:"#ff6b6b",borderErrorHover:"#ff6b6b",closeButtonBackgroundHover:"#3c3c3c"},size:{borderWidth:"1px",initialHeight:"42px",dropdownMaxHeight:"256px",dropdownPadding:"8px 0"},font:{fontFamily:"Roboto",fontSize:"20px",lineHeight:"23px",fontWeight:"400",placeholderWeight:"300"}},input:{iconGap:"9px",borderRadius:"10px",colors:{disabled:{background:"#252526",border:"#404040",text:"#aaaaaa"},initial:{background:"#1e1e1e",border:"#404040",text:"#e0e0e0"},borderHover:"#90d0ff",borderFocused:"#90d0ff",borderFocusedHover:"#90d0ff",borderError:"#ff6b6b",borderErrorHover:"#ff6b6b",placeholder:"#aaaaaa"},size:{padding:"8px 16px",borderWidth:"2px"},font:{fontSize:"20px",lineHeight:"24px",inputWeight:"400",placeholderWeight:"300",fontFamily:"Roboto"}},textarea:{borderRadius:"10px",colors:{disabled:{background:"#252526",border:"#404040",text:"#aaaaaa"},initial:{background:"#1e1e1e",border:"#404040",text:"#e0e0e0"},borderHover:"#90d0ff",borderFocused:"#90d0ff",borderFocusedHover:"#90d0ff",borderError:"#ff6b6b",borderErrorHover:"#ff6b6b",placeholder:"#aaaaaa"},size:{padding:"6px 14px",borderWidth:"2px"},font:{fontSize:"20px",lineHeight:"24px",inputWeight:"400",placeholderWeight:"300",fontFamily:"Roboto"}},button:{gap:"8px",borderRadius:"10px",colors:{primary:{text:"#ffffff",textDisabled:"#ffffff",backgroundDisabled:"#555555",backgroundInitial:"#6db3e0",backgroundHover:"#6aa5d0",backgroundActive:"#6aa5d0"},secondary:{text:"#6db3e0",textDisabled:"#555555",backgroundDisabled:"#1e1e1e",backgroundInitial:"#1e1e1e",backgroundHover:"#2d2d2d",backgroundActive:"#2d2d2d"}},size:{large:{padding:"8px 48px"},medium:{padding:"8px 16px"},small:{padding:"8px 16px"}},font:{fontFamily:"Roboto",large:{fontSize:"26px",lineHeight:"30px"},medium:{fontSize:"22px",lineHeight:"26px"},small:{fontSize:"18px",lineHeight:"20px"}}},popup:{colors:{overlayBackground:"rgba(0, 0, 0, 0.65)"}},dropdownOption:{colors:{text:"#e0e0e0"},size:{padding:"8px 16px"},font:{fontFamily:"Roboto",fontSize:"20px",lineHeight:"24px"}},chip:{font:{fontFamily:"Roboto",fontWeight:400,fontSize:"20px",lineHeight:"24px"},size:{maxWidth:"190px",width:"fit-content",gap:"4px",maxWidthText:"fit-content",padding:"3px 7px",paddingWithIcon:"3px 3px 3px 7px",border:"1px",borderRadius:"8px",borderRadiusIcon:"4px",disabled:{border:"1px"}},colors:{backgroundColor:"#1e1e1e",color:"#e0e0e0",border:"#6db3e0",disabled:{color:"#555555",border:"#404040",backgroundColorIcon:"#3c3c3c",fillIcon:"#3c3c3c"},hover:{backgroundColorIcon:"#3c3c3c",fillIcon:"#aaaaaa"}}},iconButton:{borderRadius:"10px",colors:{background:"#1e1e1e",backgroundHover:"#3c3c3c",borderActive:"#555555",backgroundDisabled:"#3c3c3c"},size:{xlarge:{width:"48px",height:"48px",borderRadius:"10px",padding:"12px"},large:{width:"42px",height:"42px",borderRadius:"10px",padding:"9px"},medium:{width:"36px",height:"36px",borderRadius:"8px",padding:"6px"},small:{width:"24px",height:"24px",borderRadius:"4px",padding:"unset"}}}},Xa=(0,f.createContext)({theme:"system",setTheme:()=>{},resolved:"light",styledTheme:Gt.defaultLightTheme}),Ri=()=>(0,f.useContext)(Xa),Oo=({children:L})=>{const W=(0,Yr.Q)("(prefers-color-scheme: dark)"),[G,Y]=(0,f.useState)(()=>localStorage.getItem("theme")||"system"),je=G==="system"?W?"dark":"light":G,ut=je==="dark"?ea:Gt.defaultLightTheme;return(0,f.useEffect)(()=>{document.documentElement.setAttribute("data-theme",je),localStorage.setItem("theme",G)},[je,G]),(0,M.jsx)(Xa.Provider,{value:{theme:G,setTheme:Y,resolved:je,styledTheme:ut},children:L})};var sa=ft(5072),Fr=ft.n(sa),ji=ft(7825),Br=ft.n(ji),ni=ft(7659),Io=ft.n(ni),Ni=ft(5056),Xo=ft.n(Ni),ma=ft(540),no=ft.n(ma),wa=ft(1113),or=ft.n(wa),To=ft(5317),Hi={};Hi.styleTagTransform=or(),Hi.setAttributes=Xo(),Hi.insert=Io().bind(null,"head"),Hi.domAPI=Br(),Hi.insertStyleElement=no();var Di=Fr()(To.A,Hi);const S=To.A&&To.A.locals?To.A.locals:void 0;var D=function(L,W){var G={};for(var Y in L)Object.prototype.hasOwnProperty.call(L,Y)&&W.indexOf(Y)<0&&(G[Y]=L[Y]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var je=0,Y=Object.getOwnPropertySymbols(L);je<Y.length;je++)W.indexOf(Y[je])<0&&Object.prototype.propertyIsEnumerable.call(L,Y[je])&&(G[Y[je]]=L[Y[je]]);return G};const q=(0,f.forwardRef)((L,W)=>{var{className:G,onChange:Y,onSubmit:je,onEmptySubmit:ut,onFocus:gt,onBlur:Qt,value:Kt}=L,bt=D(L,["className","onChange","onSubmit","onEmptySubmit","onFocus","onBlur","value"]);const[At,vn]=(0,f.useState)(""),mr=(0,Gt.useTranslate)(),{resolved:Rr}=Ri(),Co=Rr==="dark",Qo=(0,f.useRef)(null),ai=Kt!==void 0?Kt:At,Ui=Kt!==void 0,xi=so=>{var Ba;so.target.closest("input")||(Ba=Qo==null?void 0:Qo.current)===null||Ba===void 0||Ba.focus()},yo=so=>{const Ba=so.currentTarget.value;Ui||vn(Ba),Y(so)},Ai=so=>{so.code==="Enter"&&Vo()},oa=so=>{const Ba=so.code;["Enter"].includes(Ba)&&so.preventDefault()},Qi=so=>{gt==null||gt(so)},Js=so=>{so.currentTarget.contains(so.relatedTarget)&&(Qt==null||Qt(so))},Vo=()=>{if(!ai.trim()){ut();return}je(),Ui||Ea()},Ea=()=>{vn("")};return(0,M.jsxs)("div",{className:Sr()(G,S.inputWrapper),onKeyUp:Ai,onClick:xi,onFocus:Qi,onBlur:Js,children:[(0,M.jsx)("input",Object.assign({},bt,{className:S.dialogInput,placeholder:mr({ru:"\u{1FA84} \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 AskAI",en:"\u{1FA84} Ask AskAI a question"}),title:mr({ru:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u044F AskAI",en:"Type a question for AskAI"}),"aria-label":mr({ru:"\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",en:"Question input field"}),ref:(0,Gt.refSetter)(W,Qo),value:ai,onKeyDown:oa,onChange:yo})),(0,M.jsx)("button",{className:S.dialogBoxButton,onClick:Vo,type:"button",title:mr({ru:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",en:"Send question"}),"aria-label":mr({ru:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",en:"Send question"}),children:Co?(0,M.jsx)(Fo,{}):(0,M.jsx)(Oi,{})})]})});q.displayName="AskInput";var ue=ft(8320),le=ft(2613),Me=ft(3605),Ne=ft(5469),lt={};lt.styleTagTransform=or(),lt.setAttributes=Xo(),lt.insert=Io().bind(null,"head"),lt.domAPI=Br(),lt.insertStyleElement=no();var st=Fr()(Ne.A,lt);const Dt=Ne.A&&Ne.A.locals?Ne.A.locals:void 0;var Vt,Xt,yn;function _t(){return _t=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},_t.apply(null,arguments)}var nn=function(W){return f.createElement("svg",_t({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none"},W),Vt||(Vt=f.createElement("rect",{width:32,height:32,fill:"url(#AskAIMessageIcon_svg__a)",rx:4})),Xt||(Xt=f.createElement("g",{clipPath:"url(#AskAIMessageIcon_svg__b)"},f.createElement("path",{fill:"#fff",d:"M16.486 13.37a.542.542 0 0 1 1.029 0l.967 2.906a4.33 4.33 0 0 0 2.744 2.742l2.904.968a.542.542 0 0 1 0 1.029l-2.906.967a4.34 4.34 0 0 0-2.742 2.744l-.967 2.904a.542.542 0 0 1-1.03 0l-.967-2.906a4.34 4.34 0 0 0-2.742-2.742l-2.906-.967a.54.54 0 0 1 0-1.03l2.906-.967a4.33 4.33 0 0 0 2.742-2.742zM10.69 5.723a.325.325 0 0 1 .618 0l.58 1.743c.26.777.869 1.386 1.646 1.646l1.743.58a.326.326 0 0 1 0 .618l-1.743.58a2.6 2.6 0 0 0-1.646 1.646l-.58 1.743a.326.326 0 0 1-.618 0l-.58-1.743a2.6 2.6 0 0 0-1.646-1.645l-1.743-.58a.325.325 0 0 1 0-.619l1.743-.58a2.6 2.6 0 0 0 1.646-1.646zM21.294 4.15a.217.217 0 0 1 .412 0l.387 1.16c.172.52.579.926 1.098 1.099l1.16.387a.217.217 0 0 1 0 .41l-1.16.388a1.73 1.73 0 0 0-1.098 1.098l-.387 1.16a.218.218 0 0 1-.412 0l-.387-1.16a1.73 1.73 0 0 0-1.098-1.098l-1.159-.387a.217.217 0 0 1 0-.411l1.161-.387a1.73 1.73 0 0 0 1.098-1.098l.386-1.16z"}))),yn||(yn=f.createElement("defs",null,f.createElement("linearGradient",{id:"AskAIMessageIcon_svg__a",x1:2.5,x2:30,y1:2,y2:30,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#66C2FF"}),f.createElement("stop",{offset:1,stopColor:"#5B62F5"})),f.createElement("clipPath",{id:"AskAIMessageIcon_svg__b"},f.createElement("path",{fill:"#fff",d:"M4 4h24v24H4z"})))))};const tn=nn;var Cn=ft(2881),pr={};pr.styleTagTransform=or(),pr.setAttributes=Xo(),pr.insert=Io().bind(null,"head"),pr.domAPI=Br(),pr.insertStyleElement=no();var jn=Fr()(Cn.A,pr);const lr=Cn.A&&Cn.A.locals?Cn.A.locals:void 0,fn=({query:L,answer:W})=>(0,M.jsxs)("div",{className:lr.elementWrapper,children:[(0,M.jsx)("div",{className:lr.elementQuery,title:L,children:L}),(0,M.jsxs)("div",{className:lr.elementAnswer,children:[(0,M.jsx)("div",{className:lr.iconWrapper,title:"\u041E\u0442\u0432\u0435\u0442 AskAI",children:(0,M.jsx)(tn,{})}),(0,M.jsx)("div",{className:lr.answerText,title:W,children:W})]})]});var kr=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})};const ao=()=>{const L=(0,d.zy)().state,W=(0,Gt.useLanguage)(),G=(0,E.wA)(),Y=(0,E.d4)(Me.lz),[je,ut]=(0,f.useState)(!1),[gt]=(0,f.useState)(L==null?void 0:L.query),Qt=(L==null?void 0:L.isHintButton)||!1,[Kt,bt]=(0,f.useState)(""),{addToast:At}=(0,Gt.useToast)(),vn=(0,f.useRef)(null),mr=(0,f.useRef)(!1),Rr=(0,f.useRef)(!1),Co=(0,f.useRef)(W);Co.current=W;const Qo=(0,Gt.useTranslate)(),ai=Qi=>{bt(Qi.currentTarget.value)},Ui=(0,f.useCallback)(()=>kr(void 0,void 0,void 0,function*(){const Qi=Kt.trim();Qi&&!mr.current?(yield xi(Qi),bt("")):Qi||oa()}),[Kt]),xi=(Qi,...Js)=>kr(void 0,[Qi,...Js],void 0,function*(Vo,Ea=!1){if(!Vo||mr.current)return;mr.current=!0;let so=null;ut(!0);try{Ea?so=yield(0,le.ih)(Vo,Co.current)():so=yield(0,Ei.fc)(Vo,Co.current),G(so?(0,Me.JQ)({query:Vo,answer:so}):(0,Me.JQ)({query:Vo,answer:Qo({ru:"\u042F \u043D\u0435 \u043D\u0430\u0448\u0451\u043B \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0430 \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0435\u0433\u043E \u0438\u043D\u0430\u0447\u0435.",en:"I did not find an answer to your question. Try asking it differently."})}))}catch(Ba){G((0,Me.JQ)({query:Vo,answer:Qo({ru:"\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043E\u0442\u0432\u0435\u0442\u0430.",en:"An error occurred while getting the answer."})}))}finally{ut(!1),mr.current=!1}}),yo=()=>{gt&&!Rr.current&&(Rr.current=!0,xi(gt,Qt))};(0,f.useEffect)(()=>{yo()},[]),(0,f.useEffect)(()=>{Ai()},[Y]);const Ai=()=>{vn.current&&vn.current.scrollIntoView({behavior:"auto",block:"end"})},oa=()=>{At((0,M.jsx)(ue.E,{type:"warning",title:{ru:"\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",en:"It is impossible to save an empty fragment"}}),{position:"bottomRight",duration:2e4})};return!gt&&Y.length===0?null:je?(0,M.jsx)("div",{className:Dt.spinnerWrapper,children:(0,M.jsx)(Gt.Spinner,{appearance:le.eT})}):(0,M.jsxs)("div",{className:Dt.pageWrapper,children:[(0,M.jsxs)("div",{className:Dt.history,children:[Y.map((Qi,Js)=>(0,M.jsx)(fn,Object.assign({},Qi),Js)),(0,M.jsx)("div",{ref:vn})]}),(0,M.jsx)(q,{className:Dt.inputQueryBar,onChange:ai,onSubmit:Ui,onEmptySubmit:oa,value:Kt})]})};var et=ft(9244),yr={};yr.styleTagTransform=or(),yr.setAttributes=Xo(),yr.insert=Io().bind(null,"head"),yr.domAPI=Br(),yr.insertStyleElement=no();var ro=Fr()(et.A,yr);const Gn=et.A&&et.A.locals?et.A.locals:void 0,oo=()=>{const L=(0,Gt.useTranslate)(),W=(0,d.Zp)(),G=Y=>{W(le.JZ.Go,{state:Y,replace:!0})};return(0,M.jsx)(M.Fragment,{children:le.xi.map((Y,je)=>{const ut=L(Y.text);return(0,M.jsx)("button",{className:Gn.hintAskButton,onClick:()=>{G({query:ut,isHintButton:!0})},title:ut,"aria-label":ut,children:ut},je)})})};var Ro=ft(7489),Ao={};Ao.styleTagTransform=or(),Ao.setAttributes=Xo(),Ao.insert=Io().bind(null,"head"),Ao.domAPI=Br(),Ao.insertStyleElement=no();var Ki=Fr()(Ro.A,Ao);const Pi=Ro.A&&Ro.A.locals?Ro.A.locals:void 0,Da=()=>{const L=(0,Gt.useTranslate)(),W=(0,d.Zp)(),{addToast:G}=(0,Gt.useToast)(),[Y,je]=(0,f.useState)(),ut=bt=>je(bt.target.value),gt=bt=>{W(le.JZ.Go,{state:bt,replace:!0})},Qt=(0,f.useCallback)(()=>{G((0,M.jsx)(ue.E,{type:"warning",title:{ru:"\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",en:"It's impossible to save an empty fragment"}}),{position:"bottomRight",duration:2e3})},[G]),Kt=()=>{gt({query:Y,isHintButton:!1})};return(0,M.jsxs)("div",{className:Pi.pageWrapper,children:[(0,M.jsx)("div",{className:Pi.askMessage,children:(0,M.jsx)("h1",{className:Pi.message,children:L({ru:"\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C, \u0438 AskAI \u043D\u0430\u0439\u0434\u0451\u0442 \u043E\u0442\u0432\u0435\u0442!",en:"Ask anything, and AskAI will find an answer!"})})}),(0,M.jsx)("div",{className:Pi.suggestedQuestion,children:(0,M.jsx)(oo,{})}),(0,M.jsx)("div",{className:Pi.dialogBox,children:(0,M.jsx)(q,{onChange:ut,onEmptySubmit:Qt,onSubmit:Kt})})]})};var ri,ho;function _o(){return _o=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},_o.apply(null,arguments)}var jo=function(W){return f.createElement("svg",_o({xmlns:"http://www.w3.org/2000/svg",width:285,height:40,fill:"none"},W),ri||(ri=f.createElement("path",{fill:"#737373",d:"M31.462 24.667a4.2 4.2 0 0 0-2.873 1.137l-4.19-3.208a3.88 3.88 0 0 0 .474-2.742l2.887-.933a4.12 4.12 0 0 0 2.177 1.958 4.2 4.2 0 0 0 2.948.038 4.13 4.13 0 0 0 2.227-1.901 4.03 4.03 0 0 0 .382-2.88 4.08 4.08 0 0 0-1.658-2.4 4.19 4.19 0 0 0-5.473.633 4.05 4.05 0 0 0-1.047 2.714q.003.369.074.73l-2.887.933a4.1 4.1 0 0 0-1.529-1.637 4.2 4.2 0 0 0-2.172-.609c-.38.001-.76.055-1.125.16l-1.406-3.12a4.1 4.1 0 0 0 1.76-2.273 4.03 4.03 0 0 0-.185-2.853 4.1 4.1 0 0 0-2.038-2.035 4.2 4.2 0 0 0-2.894-.219 4.14 4.14 0 0 0-2.33 1.704 4.03 4.03 0 0 0-.625 2.792c.14.974.633 1.866 1.387 2.51.754.646 1.72 1.001 2.719 1 .38 0 .76-.055 1.125-.16l1.406 3.121a4.1 4.1 0 0 0-1.188 1.112 4.023 4.023 0 0 0-.07 4.59l-4.53 3.967a4.12 4.12 0 0 0-2.665-.963c-.923 0-1.82.305-2.547.864a4.08 4.08 0 0 0-1.47 2.223 4.03 4.03 0 0 0 .226 2.643 4.1 4.1 0 0 0 1.828 1.949 4.2 4.2 0 0 0 2.658.43 4.16 4.16 0 0 0 2.365-1.268 4.037 4.037 0 0 0 .404-5.003l4.53-3.967a4.12 4.12 0 0 0 2.665.963 4.2 4.2 0 0 0 2.872-1.138l4.19 3.209a3.9 3.9 0 0 0-.548 2.012c0 .808.243 1.597.699 2.269a4.13 4.13 0 0 0 1.86 1.504c.758.309 1.591.39 2.395.232a4.17 4.17 0 0 0 2.123-1.118 4.07 4.07 0 0 0 1.134-2.09 4.03 4.03 0 0 0-.236-2.36 4.1 4.1 0 0 0-1.527-1.832 4.2 4.2 0 0 0-2.303-.688m0-10.5c.585 0 1.158.17 1.644.491.487.32.867.776 1.091 1.31.224.532.283 1.119.168 1.684a2.9 2.9 0 0 1-.81 1.494 2.98 2.98 0 0 1-1.516.798 3 3 0 0 1-1.71-.166 2.95 2.95 0 0 1-1.33-1.074 2.9 2.9 0 0 1-.498-1.62 2.9 2.9 0 0 1 .871-2.059 3 3 0 0 1 2.09-.858m-18.358-4.084c0-.577.174-1.14.499-1.62s.788-.854 1.329-1.074a3 3 0 0 1 1.71-.166c.575.112 1.102.39 1.516.798.415.408.697.928.81 1.493A2.88 2.88 0 0 1 18.8 11.2a2.93 2.93 0 0 1-1.09 1.309c-.487.32-1.06.491-1.645.491a3 3 0 0 1-2.09-.858 2.9 2.9 0 0 1-.871-2.059m-2.961 22.75a3 3 0 0 1-1.645-.491 2.93 2.93 0 0 1-1.09-1.31 2.88 2.88 0 0 1-.169-1.684 2.9 2.9 0 0 1 .81-1.494 2.98 2.98 0 0 1 1.516-.798 3 3 0 0 1 1.711.166c.541.22 1.004.595 1.329 1.074s.499 1.044.499 1.62a2.9 2.9 0 0 1-.872 2.059 3 3 0 0 1-2.089.858m10.66-9.333a3 3 0 0 1-1.646-.491 2.93 2.93 0 0 1-1.09-1.31 2.88 2.88 0 0 1-.169-1.685 2.9 2.9 0 0 1 .81-1.493 2.98 2.98 0 0 1 1.517-.798 3 3 0 0 1 1.71.166c.541.22 1.004.594 1.33 1.074.325.48.498 1.043.498 1.62a2.9 2.9 0 0 1-.871 2.059 3 3 0 0 1-2.09.858m10.659 8.167a3 3 0 0 1-1.645-.492 2.93 2.93 0 0 1-1.091-1.309 2.88 2.88 0 0 1-.169-1.685 2.9 2.9 0 0 1 .81-1.493 2.98 2.98 0 0 1 1.517-.799 3 3 0 0 1 1.71.166c.542.221 1.004.595 1.33 1.075.325.48.498 1.043.498 1.62a2.9 2.9 0 0 1-.871 2.058 3 3 0 0 1-2.09.859"})),ho||(ho=f.createElement("path",{fill:"#737373",d:"M31.462 14.167c.585 0 1.158.17 1.644.491.487.32.867.776 1.091 1.31.224.532.283 1.119.168 1.684a2.9 2.9 0 0 1-.81 1.494 2.98 2.98 0 0 1-1.516.798 3 3 0 0 1-1.71-.166 2.95 2.95 0 0 1-1.33-1.074 2.9 2.9 0 0 1-.498-1.62 2.9 2.9 0 0 1 .871-2.059 3 3 0 0 1 2.09-.858M10.143 32.833a3 3 0 0 1-1.645-.491 2.93 2.93 0 0 1-1.09-1.31 2.88 2.88 0 0 1-.169-1.684 2.9 2.9 0 0 1 .81-1.494 2.98 2.98 0 0 1 1.516-.798 3 3 0 0 1 1.711.166c.541.22 1.004.595 1.329 1.074s.499 1.044.499 1.62a2.9 2.9 0 0 1-.872 2.059 3 3 0 0 1-2.089.858M63.243 18.918v1.258q0 2.242-.56 4.02-.561 1.776-1.613 3.02a7 7 0 0 1-2.53 1.901q-1.463.656-3.281.656-1.764 0-3.24-.656a7.3 7.3 0 0 1-2.543-1.9q-1.066-1.245-1.654-3.022t-.588-4.02v-1.257q0-2.242.574-4.006.588-1.778 1.654-3.021a7.1 7.1 0 0 1 2.53-1.914q1.476-.657 3.24-.657 1.819 0 3.28.657a6.9 6.9 0 0 1 2.53 1.914q1.066 1.244 1.627 3.021.574 1.764.574 4.006m-2.61 1.258V18.89q0-1.777-.37-3.145-.356-1.367-1.053-2.297a4.54 4.54 0 0 0-1.709-1.408q-.998-.479-2.27-.479-1.23 0-2.228.479a4.7 4.7 0 0 0-1.695 1.408q-.698.93-1.08 2.297-.383 1.368-.383 3.145v1.285q0 1.79.383 3.172.383 1.366 1.093 2.31a4.84 4.84 0 0 0 1.71 1.408q.998.48 2.228.479 1.285 0 2.283-.479a4.46 4.46 0 0 0 1.682-1.408q.698-.944 1.053-2.31.355-1.38.355-3.172M77.804 24.469q0-.697-.219-1.23-.205-.547-.738-.985-.52-.438-1.45-.834-.915-.396-2.324-.807a21 21 0 0 1-2.665-.97q-1.19-.547-2.038-1.245a4.9 4.9 0 0 1-1.299-1.6q-.45-.9-.45-2.064 0-1.162.478-2.146a5 5 0 0 1 1.367-1.71q.902-.737 2.147-1.148 1.243-.41 2.775-.41 2.243 0 3.8.862 1.573.848 2.393 2.228a5.6 5.6 0 0 1 .82 2.926h-2.624q0-1.122-.479-1.982-.478-.876-1.45-1.368-.97-.506-2.46-.506-1.409 0-2.324.424-.917.424-1.367 1.149-.438.724-.438 1.654 0 .63.26 1.148.273.507.834.944.575.437 1.449.806.888.37 2.12.711 1.695.48 2.925 1.067 1.23.588 2.023 1.326a4.5 4.5 0 0 1 1.19 1.654q.396.917.396 2.078 0 1.217-.492 2.202a4.8 4.8 0 0 1-1.408 1.681q-.915.697-2.201 1.08-1.272.37-2.844.37-1.381 0-2.72-.383a8.1 8.1 0 0 1-2.42-1.149 6 6 0 0 1-1.737-1.887q-.642-1.134-.642-2.625h2.624q0 1.026.397 1.764.396.724 1.08 1.203a5 5 0 0 0 1.572.711 7.7 7.7 0 0 0 1.846.219q1.38 0 2.338-.383.957-.383 1.45-1.094.505-.71.505-1.681M91.175 9.594V29.5h-2.598V9.594zm6.398 0v2.16h-15.38v-2.16zM103.357 9.594V29.5h-2.639V9.594zM118.765 24.469a3.2 3.2 0 0 0-.219-1.23q-.205-.547-.738-.985-.52-.438-1.449-.834-.916-.396-2.325-.807a21 21 0 0 1-2.666-.97q-1.19-.547-2.037-1.245a4.9 4.9 0 0 1-1.299-1.6q-.45-.9-.451-2.064 0-1.162.479-2.146a5 5 0 0 1 1.367-1.71q.903-.737 2.146-1.148 1.245-.41 2.776-.41 2.243 0 3.801.862 1.572.848 2.392 2.228a5.6 5.6 0 0 1 .821 2.926h-2.625q0-1.122-.479-1.982-.479-.876-1.449-1.368-.971-.506-2.461-.506-1.409 0-2.324.424-.916.424-1.368 1.149-.437.724-.437 1.654 0 .63.26 1.148.273.507.834.944.575.437 1.449.806.888.37 2.119.711 1.695.48 2.926 1.067 1.23.588 2.023 1.326a4.5 4.5 0 0 1 1.19 1.654q.396.917.396 2.078 0 1.217-.492 2.202a4.8 4.8 0 0 1-1.408 1.681q-.917.697-2.201 1.08-1.272.37-2.844.37a9.9 9.9 0 0 1-2.721-.383 8.1 8.1 0 0 1-2.42-1.149 6 6 0 0 1-1.736-1.887q-.643-1.134-.643-2.625h2.625q0 1.026.397 1.764.396.724 1.08 1.203.698.48 1.572.711a7.7 7.7 0 0 0 1.846.219q1.38 0 2.338-.383.957-.383 1.449-1.094.506-.71.506-1.681M132.56 9.594h2.556l6.522 16.228 6.508-16.228h2.57L142.622 29.5h-1.996zm-.834 0h2.256l.369 12.14V29.5h-2.625zm17.555 0h2.255V29.5h-2.625v-7.766zM161.927 29.773q-1.545 0-2.803-.52a6.35 6.35 0 0 1-2.146-1.49 6.6 6.6 0 0 1-1.367-2.269q-.479-1.313-.479-2.871v-.574q0-1.804.533-3.213.534-1.422 1.45-2.406a6.2 6.2 0 0 1 2.078-1.49 6 6 0 0 1 2.406-.506q1.586 0 2.734.547a5 5 0 0 1 1.901 1.53q.738.971 1.093 2.298.356 1.313.356 2.87v1.136h-11.047V20.75h8.518v-.191a6.3 6.3 0 0 0-.411-1.915 3.44 3.44 0 0 0-1.093-1.53q-.753-.602-2.051-.602-.861 0-1.586.369a3.4 3.4 0 0 0-1.244 1.066q-.52.711-.807 1.737-.287 1.025-.287 2.365v.574q0 1.053.287 1.982.301.916.861 1.614.575.698 1.381 1.093.82.397 1.86.397 1.34 0 2.269-.547a5.6 5.6 0 0 0 1.627-1.463l1.531 1.217a7 7 0 0 1-1.216 1.38q-.74.657-1.819 1.067-1.067.41-2.529.41M176.829 14.707v1.941h-7.998v-1.941zm-5.291-3.596h2.53v14.725q0 .752.232 1.135.233.383.602.506t.793.123q.314 0 .656-.055.356-.068.533-.11l.014 2.065a6 6 0 0 1-.793.178 6 6 0 0 1-1.162.095q-.93 0-1.709-.369-.78-.369-1.244-1.23-.452-.875-.452-2.352zM188.519 26.97v-7.614q0-.876-.356-1.518a2.33 2.33 0 0 0-1.039-1.012q-.698-.355-1.722-.355-.957 0-1.682.328-.711.328-1.121.861a1.9 1.9 0 0 0-.397 1.149h-2.529q0-.794.41-1.573.411-.78 1.176-1.408a5.9 5.9 0 0 1 1.859-1.012q1.095-.382 2.434-.382 1.613 0 2.844.547a4.26 4.26 0 0 1 1.941 1.654q.711 1.093.711 2.748v6.89q0 .74.123 1.573.136.834.397 1.435v.219h-2.639q-.192-.438-.301-1.162a9.4 9.4 0 0 1-.109-1.367m.437-6.439.028 1.778h-2.557q-1.08 0-1.928.177-.847.165-1.422.506a2.4 2.4 0 0 0-.875.861q-.3.506-.3 1.19 0 .698.314 1.271.315.575.943.916.643.33 1.573.329 1.161 0 2.05-.493.889-.492 1.409-1.203.533-.711.574-1.38l1.08 1.216q-.096.574-.52 1.272-.423.697-1.134 1.34a6.1 6.1 0 0 1-1.668 1.052q-.957.41-2.16.41-1.505 0-2.639-.587-1.122-.588-1.75-1.573a4.16 4.16 0 0 1-.615-2.228q0-1.19.464-2.092.465-.916 1.34-1.518.875-.615 2.106-.93 1.23-.314 2.748-.314zM203.64 25.576a2.1 2.1 0 0 0-.246-1.012q-.233-.479-.971-.86-.725-.397-2.187-.684a17 17 0 0 1-2.229-.616q-.984-.355-1.682-.861a3.6 3.6 0 0 1-1.052-1.19q-.369-.682-.369-1.6 0-.874.382-1.653.397-.78 1.108-1.381a5.4 5.4 0 0 1 1.736-.944q1.012-.341 2.256-.341 1.778 0 3.035.629t1.928 1.681a4.2 4.2 0 0 1 .67 2.31h-2.529q0-.615-.37-1.189-.356-.588-1.052-.97-.684-.383-1.682-.383-1.052 0-1.709.328-.643.314-.943.806a2 2 0 0 0-.287 1.04q0 .41.136.738.151.314.52.588.369.26 1.039.492t1.709.465q1.818.41 2.994.984t1.75 1.408.574 2.024a3.9 3.9 0 0 1-.41 1.777 3.94 3.94 0 0 1-1.162 1.395q-.752.574-1.805.902-1.039.315-2.338.314-1.955 0-3.308-.697-1.354-.697-2.051-1.805-.697-1.107-.697-2.337h2.543q.054 1.039.601 1.654a3.07 3.07 0 0 0 1.34.861 5.3 5.3 0 0 0 1.572.246q1.04 0 1.737-.273.711-.273 1.08-.752.369-.48.369-1.094M213.648 27.969l4.115-13.262h2.707l-5.934 17.076a9.4 9.4 0 0 1-.546 1.176 5.7 5.7 0 0 1-.848 1.217 4.05 4.05 0 0 1-1.258.93q-.725.369-1.736.369-.301 0-.766-.082a7 7 0 0 1-.656-.137l-.014-2.05q.11.012.342.026.246.028.342.028.861 0 1.463-.233a2.2 2.2 0 0 0 1.011-.752q.424-.519.725-1.435zm-3.022-13.262 3.842 11.484.656 2.666-1.818.93-5.441-15.08zM231.366 25.576a2.1 2.1 0 0 0-.246-1.012q-.232-.479-.97-.86-.725-.397-2.188-.684a17 17 0 0 1-2.228-.616q-.985-.355-1.682-.861a3.6 3.6 0 0 1-1.053-1.19q-.369-.682-.369-1.6 0-.874.383-1.653a4.4 4.4 0 0 1 1.107-1.381 5.4 5.4 0 0 1 1.737-.944q1.011-.341 2.256-.341 1.776 0 3.035.629 1.257.629 1.927 1.681.67 1.04.67 2.31h-2.529q0-.615-.369-1.189-.355-.588-1.053-.97-.684-.383-1.681-.383-1.053 0-1.709.328-.643.314-.944.806a2.04 2.04 0 0 0-.287 1.04q0 .41.137.738.15.314.519.588.37.26 1.039.492.67.232 1.709.465 1.82.41 2.995.984t1.75 1.408.574 2.024a3.9 3.9 0 0 1-.41 1.777 3.94 3.94 0 0 1-1.163 1.395q-.751.574-1.804.902-1.04.315-2.338.314-1.955 0-3.309-.697-1.353-.697-2.05-1.805-.698-1.107-.698-2.337h2.543q.055 1.039.602 1.654.546.6 1.34.861a5.3 5.3 0 0 0 1.572.246q1.039 0 1.736-.273.711-.273 1.08-.752.369-.48.369-1.094M243.411 14.707v1.941h-7.998v-1.941zm-5.291-3.596h2.53v14.725q0 .752.232 1.135.233.383.602.506t.793.123q.314 0 .656-.055.356-.068.533-.11l.014 2.065a6 6 0 0 1-.793.178 6 6 0 0 1-1.162.095q-.93 0-1.709-.369-.78-.369-1.244-1.23-.452-.875-.452-2.352zM252.517 29.773q-1.545 0-2.803-.52a6.35 6.35 0 0 1-2.146-1.49 6.6 6.6 0 0 1-1.368-2.269q-.478-1.313-.478-2.871v-.574q0-1.804.533-3.213.534-1.422 1.449-2.406a6.2 6.2 0 0 1 2.078-1.49 6 6 0 0 1 2.407-.506q1.585 0 2.734.547a5 5 0 0 1 1.9 1.53q.739.971 1.094 2.298.356 1.313.356 2.87v1.136h-11.047V20.75h8.517v-.191a6.3 6.3 0 0 0-.41-1.915 3.44 3.44 0 0 0-1.093-1.53q-.753-.602-2.051-.602-.861 0-1.586.369a3.4 3.4 0 0 0-1.244 1.066q-.52.711-.807 1.737-.287 1.025-.287 2.365v.574q0 1.053.287 1.982.302.916.861 1.614.574.698 1.381 1.093.82.397 1.86.397 1.34 0 2.269-.547a5.6 5.6 0 0 0 1.627-1.463l1.531 1.217a7 7 0 0 1-1.216 1.38q-.74.657-1.819 1.067-1.067.41-2.529.41M263.741 17.647V29.5h-2.543V14.707h2.407zm-.519 3.896-1.176-.041q.013-1.518.397-2.803.382-1.299 1.134-2.256a5.05 5.05 0 0 1 1.873-1.476q1.122-.533 2.598-.533 1.04 0 1.914.3a3.9 3.9 0 0 1 1.518.916q.642.63.998 1.614.355.984.355 2.379V29.5h-2.529v-9.734q0-1.162-.397-1.86a2.26 2.26 0 0 0-1.093-1.011q-.711-.33-1.668-.329-1.122 0-1.873.397a3.15 3.15 0 0 0-1.203 1.094 4.9 4.9 0 0 0-.657 1.6 9 9 0 0 0-.191 1.886m9.584-1.395-1.695.52a7.5 7.5 0 0 1 .396-2.338 6.3 6.3 0 0 1 1.135-1.996 5.4 5.4 0 0 1 1.846-1.38q1.094-.52 2.502-.52 1.188 0 2.105.314.93.315 1.559.97.643.644.97 1.655.328 1.012.328 2.406V29.5h-2.543v-9.748q0-1.244-.396-1.928a2.07 2.07 0 0 0-1.094-.97q-.697-.288-1.668-.288-.834 0-1.476.288a3.04 3.04 0 0 0-1.08.793 3.5 3.5 0 0 0-.67 1.134 4.2 4.2 0 0 0-.219 1.367"})))};const oi=jo;var gi=ft(7283),Uo={};Uo.styleTagTransform=or(),Uo.setAttributes=Xo(),Uo.insert=Io().bind(null,"head"),Uo.domAPI=Br(),Uo.insertStyleElement=no();var va=Fr()(gi.A,Uo);const Mo=gi.A&&gi.A.locals?gi.A.locals:void 0,$i=()=>{const{lang:L,setLang:W}=(0,Gt.useLanguageContext)(),G=Y=>()=>{localStorage.setItem("language",Y),W(Y)};return(0,M.jsx)("div",{className:Mo.languageWrap,children:(0,M.jsxs)("div",{className:Mo.languages,children:[(0,M.jsx)("span",{className:Sr()(Mo.language,Mo.engLanguage,{[Mo.activeLanguage]:L==="en"}),onClick:G("en"),title:"Switch interface language to English",children:"En"}),(0,M.jsx)("span",{className:Mo.divider}),(0,M.jsx)("span",{className:Sr()(Mo.language,Mo.rusLanguage,{[Mo.activeLanguage]:L==="ru"}),onClick:G("ru"),title:"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439",children:"Ru"})]})})};var Ur=ft(7450),Eo=ft(7809),Ia=ft(4626),ta=ft(2574),Ma=ft(5377),bo={};bo.styleTagTransform=or(),bo.setAttributes=Xo(),bo.insert=Io().bind(null,"head"),bo.domAPI=Br(),bo.insertStyleElement=no();var zi=Fr()(Ma.A,bo);const Gi=Ma.A&&Ma.A.locals?Ma.A.locals:void 0,La=({onComplete:L,onClose:W,title:G,content:Y,completeBtnText:je="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"})=>{const ut=()=>{L(),W()};return(0,M.jsxs)("div",{className:Gi.wrapper,children:[(0,M.jsx)("div",{className:Gi.title,children:G}),(0,M.jsx)("div",{className:Gi.content,children:Y}),(0,M.jsxs)("div",{className:Gi.buttons,children:[(0,M.jsx)(ta.$,{className:Gi.button,appearance:"secondaryAction",onClick:W,title:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",children:"\u041E\u0442\u043C\u0435\u043D\u0430"}),(0,M.jsx)(ta.$,{className:Gi.button,onClick:ut,title:je,children:je})]})]})};var wo=ft(3960),ga=ft(9205),Ya=ft(781),Xi={};Xi.styleTagTransform=or(),Xi.setAttributes=Xo(),Xi.insert=Io().bind(null,"head"),Xi.domAPI=Br(),Xi.insertStyleElement=no();var ts=Fr()(Ya.A,Xi);const Yi=Ya.A&&Ya.A.locals?Ya.A.locals:void 0,ls=(0,M.jsxs)("div",{className:Yi.popup,children:["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 ",(0,M.jsx)("b",{children:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C"})," \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u0431\u0430\u0437\u044B \u0437\u043D\u0430\u043D\u0438\u0439?",(0,M.jsx)("b",{children:"\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439."})]}),bs=(0,M.jsxs)("div",{className:`${Yi.popup} ${Yi.popupClear}`,children:["\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0435 \u044D\u0442\u043E\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0438\u0437 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0443\u0442 ",(0,M.jsx)("b",{children:"\u0443\u0434\u0430\u043B\u0435\u043D\u044B"})," \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.",(0,M.jsx)("br",{}),(0,M.jsx)("b",{children:"\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C."})]});var Bi;(function(L){L.deleteScgElement="deleteScgElement",L.clearScene="clearScene",L.onInitializationFinished="onInitializationFinished",L.commandExecuted="commandExecuted"})(Bi||(Bi={}));var Qa=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})},ws=function(L,W){var G={};for(var Y in L)Object.prototype.hasOwnProperty.call(L,Y)&&W.indexOf(Y)<0&&(G[Y]=L[Y]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var je=0,Y=Object.getOwnPropertySymbols(L);je<Y.length;je++)W.indexOf(Y[je])<0&&Object.prototype.propertyIsEnumerable.call(L,Y[je])&&(G[Y[je]]=L[Y[je]]);return G};const Na="#5896C0",P=({action:L,className:W,show:G=!1})=>{const[Y,je]=(0,f.useState)(!1),[ut,gt]=(0,f.useState)(!1),[Qt,Kt,bt]=(0,Gt.useBooleanState)(!1),[At,vn,mr]=(0,Gt.useBooleanState)(!1),Rr=(0,f.useRef)(null),Co=(0,Gt.useLanguage)(),Qo=(0,Gt.useTranslate)(),ai=(0,E.wA)(),Ui=(0,wo.S)(),xi=(0,f.useCallback)(yo=>{!yo.payload||!yo.payload.state||!yo.payload.response||(ai((0,ga.N)({action:Number(yo.payload.response.action)})),Ui.goToActiveFormatAction(yo.payload.response.action))},[ai,Ui]);return(0,f.useEffect)(()=>{if(!Rr.current)return;const Ai=oa=>{var Qi;switch((Qi=oa.data)===null||Qi===void 0?void 0:Qi.type){case Bi.onInitializationFinished:je(!0),gt(!1);break;case Bi.deleteScgElement:Kt();break;case Bi.clearScene:vn();break;case Bi.commandExecuted:xi(oa.data);break}};return window.addEventListener("message",Ai),()=>{window.removeEventListener("message",Ai)}},[L,xi,Kt,vn]),(0,f.useEffect)(()=>{Qa(void 0,void 0,void 0,function*(){if(!Y||!G||!L)return;const yo=Rr.current;if(!yo)return;const oa=ws(yield Eo.EX.searchKeynodes(Gt.langToKeynode[Co]),[])[(0,Gt.snakeToCamelCase)(Gt.langToKeynode[Co])];(0,Ia.D)(L),yo.contentWindow&&yo.contentWindow.postMessage({type:"renderScg",addr:L,lang:oa.value},"*")})},[Y,L,G,Co]),(0,M.jsxs)(M.Fragment,{children:[Qt&&(0,M.jsx)(Gt.Popup,{onClose:bt,children:(0,M.jsx)(La,{onComplete:()=>Rr.current&&Rr.current.contentWindow&&Rr.current.contentWindow.postMessage({type:"deleteScgElement"},"*"),onClose:bt,title:"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435",content:ls,completeBtnText:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"})}),At&&(0,M.jsx)(Gt.Popup,{onClose:mr,children:(0,M.jsx)(La,{onComplete:()=>Rr.current&&Rr.current.contentWindow&&Rr.current.contentWindow.postMessage({type:"clearScene"},"*"),onClose:mr,title:"\u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",content:bs,completeBtnText:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"})}),(0,M.jsxs)("div",{className:Sr()(Yi.wrap,G&&Yi.wrapShow,W),children:[ut&&(0,M.jsx)(Gt.Spinner,{className:Yi.spinner,appearance:Na}),(0,M.jsx)("iframe",{className:Yi.frame,src:le.f3,ref:Rr,title:Qo({ru:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 SCg-\u043A\u043E\u0434\u0430",en:"SCg code editor"})})]})]})};var k=ft(4901),H={};H.styleTagTransform=or(),H.setAttributes=Xo(),H.insert=Io().bind(null,"head"),H.domAPI=Br(),H.insertStyleElement=no();var ne=Fr()(k.A,H);const Ae=k.A&&k.A.locals?k.A.locals:void 0,Ke=()=>{const L=(0,d.zy)(),W=(0,Gt.useTranslate)(),G=L.pathname.match(/^\/q\/(\d+)\/scg$/),Y=G?Number(G[1]):void 0,je=L.pathname.split("/");return(0,M.jsx)(Ur.A,{title:W({ru:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 SCg-\u043A\u043E\u0434\u0430",en:"Error loading SCg"}),paragraph:W({ru:"\u041F\u043E\u0445\u043E\u0436\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438\u043D\u0438\u0446\u0438\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0412\u0430\u043C\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",en:"Looks like an error occured"}),advice:W({ru:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C\u0443 \u043F\u043E\u043D\u044F\u0442\u0438\u044E",en:"Please, reload the page or go back"}),className:Sr()(Ae.boundary,{[Ae.none]:je[je.length-1]!=="scg"}),shouldReturn:!0,children:(0,M.jsx)("div",{title:W({ru:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 SCg-\u043A\u043E\u0434\u0430",en:"Result view and edit area in SCg format"}),"aria-label":W({ru:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F SCg-\u043A\u043E\u0434\u0430",en:"SCg code view area"}),children:(0,M.jsx)(P,{className:Ae.scg,action:Y,show:!!G})})})};var $e=ft(1879),yt;function xn(){return xn=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},xn.apply(null,arguments)}var Ht=function(W){return f.createElement("svg",xn({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},W),yt||(yt=f.createElement("path",{fill:"#949494",d:"M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L11 5v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a1 1 0 0 1-.284-.576L9 10V5a1 1 0 0 1 1-1"})))};const Ft=Ht;var On;function zr(){return zr=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},zr.apply(null,arguments)}var Do=function(W){return f.createElement("svg",zr({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 20 20"},W),On||(On=f.createElement("path",{stroke:"#949494",strokeLinecap:"round",strokeWidth:3,d:"M10 18v-8m0 0V2m0 8h8m-8 0H2"})))};const pe=Do;var jt;function Fe(){return Fe=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Fe.apply(null,arguments)}var zo=function(W){return f.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",width:20,height:16,fill:"none"},W),jt||(jt=f.createElement("path",{fill:"#949494",d:"M5.25 13.5a1.25 1.25 0 1 1 .07 2.5 1.25 1.25 0 0 1-.07-2.5m3.5.5h10.5a.75.75 0 0 1 .102 1.493l-.102.008H8.75a.75.75 0 0 1-.102-1.493zm-7.5-7a1.25 1.25 0 1 1 .07 2.5A1.25 1.25 0 0 1 1.25 7m3.5.5h14.5a.75.75 0 0 1 .102 1.493l-.102.008H4.75a.75.75 0 0 1-.102-1.493zm-3.5-7A1.25 1.25 0 1 1 1.32 3 1.25 1.25 0 0 1 1.25.5m3.5.5h14.5a.75.75 0 0 1 .102 1.494l-.102.006H4.75a.75.75 0 0 1-.102-1.492z"})))};const qo=zo;var K;function Yo(){return Yo=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Yo.apply(null,arguments)}var Ii=function(W){return f.createElement("svg",Yo({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},W),K||(K=f.createElement("path",{fill:"#949494",d:"M7.217 11.173A.8.8 0 0 1 7.732 11q.297 0 .514.173l4.247 3.384 4.26-3.395a.8.8 0 0 1 .508-.162q.304 0 .522.173.216.173.217.41 0 .237-.217.41l-4.884 3.88a.5.5 0 0 1-.189.098.8.8 0 0 1-.217.029.8.8 0 0 1-.218-.03.5.5 0 0 1-.188-.097l-4.884-3.891a.5.5 0 0 1-.203-.4q0-.236.217-.409"})))};const wi=Ii;var Se=ft(7093),Xe={};Xe.styleTagTransform=or(),Xe.setAttributes=Xo(),Xe.insert=Io().bind(null,"head"),Xe.domAPI=Br(),Xe.insertStyleElement=no();var it=Fr()(Se.A,Xe);const It=Se.A&&Se.A.locals?Se.A.locals:void 0;var un=function(L,W){var G={};for(var Y in L)Object.prototype.hasOwnProperty.call(L,Y)&&W.indexOf(Y)<0&&(G[Y]=L[Y]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var je=0,Y=Object.getOwnPropertySymbols(L);je<Y.length;je++)W.indexOf(Y[je])<0&&Object.prototype.propertyIsEnumerable.call(L,Y[je])&&(G[Y[je]]=L[Y[je]]);return G};const Dn=(0,f.forwardRef)((L,W)=>{var{children:G,className:Y,disabled:je=!1,type:ut="button",dimention:gt="l",squared:Qt="false"}=L,Kt=un(L,["children","className","disabled","type","dimention","squared"]);return(0,M.jsx)("button",Object.assign({type:ut,className:Sr()(Y,It.iconButton,It[`iconButton_${gt}`],{[It.iconButton_disabled]:je,[It.iconButton_squared]:Qt}),ref:W,disabled:je},Kt,{children:G}))});Dn.displayName="IconButton";var u=ft(5773),v={};v.styleTagTransform=or(),v.setAttributes=Xo(),v.insert=Io().bind(null,"head"),v.domAPI=Br(),v.insertStyleElement=no();var C=Fr()(u.A,v);const O=u.A&&u.A.locals?u.A.locals:void 0,V=({header:L,leftIcon:W,rightIcon:G,rightIconTitle:Y,children:je,className:ut,onToggle:gt,expanded:Qt=!0,isAutoControl:Kt=!0,onRightClick:bt})=>{const[At,,,vn]=(0,Gt.useBooleanState)(Qt,{updateable:!0}),mr=()=>{if(Kt){gt==null||gt(At),vn();return}gt==null||gt(At)},Rr=()=>{At||mr(),bt==null||bt()};return(0,M.jsxs)("div",{className:ut,children:[(0,M.jsxs)("div",{className:O.headerWrapper,children:[(0,M.jsxs)("div",{className:O.leftContent,onClick:mr,children:[W&&(0,M.jsx)("div",{className:O.icon,children:W}),L,(0,M.jsx)("div",{className:Sr()(O.chevronDownWrapper,{[O.chevronDownWrapper_expanded]:At}),children:(0,M.jsx)(wi,{width:"24",height:"24"})})]}),G&&(0,M.jsx)(Dn,{squared:!0,onClick:Rr,title:Y,"aria-label":Y,children:G})]}),(0,M.jsx)(Gt.Expandable,{expanded:At,children:(0,M.jsx)("div",{className:Sr()(O.contentWrapper,{[O.contentWrapper_expanded]:At}),children:je})})]})};var re=ft(7435),ke={};ke.styleTagTransform=or(),ke.setAttributes=Xo(),ke.insert=Io().bind(null,"head"),ke.domAPI=Br(),ke.insertStyleElement=no();var Re=Fr()(re.A,ke);const Te=re.A&&re.A.locals?re.A.locals:void 0;var ie=ft(7090),Pe={};Pe.styleTagTransform=or(),Pe.setAttributes=Xo(),Pe.insert=Io().bind(null,"head"),Pe.domAPI=Br(),Pe.insertStyleElement=no();var l=Fr()(ie.A,Pe);const p=ie.A&&ie.A.locals?ie.A.locals:void 0,b=()=>(0,M.jsxs)("div",{className:p.root,children:[(0,M.jsx)(Gt.PseudoText,{width:"100%",height:24}),(0,M.jsx)(Gt.PseudoText,{width:"60%",height:24}),(0,M.jsx)(Gt.PseudoText,{width:"80%",height:24})]}),_=L=>{const W=(0,d.RQ)(le.JZ.hr),{goToActiveFormatAction:G}=(0,wo.S)(),Y=je=>()=>{G(je)};return(0,M.jsxs)(M.Fragment,{children:[!L.isLoading&&(0,M.jsx)("div",{className:Te.historyPanelWrap,children:L.requests.map(({action:je},ut)=>(0,M.jsx)(Gt.ScTag,{as:"span",className:Sr()(Te.historyBtn,{[Te.historyBtnActive]:String(je)===(W==null?void 0:W.params.action)}),addr:je,onClick:Y(String(je)),title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438\u0437 \u0438\u0441\u0442\u043E\u0440\u0438\u0438",children:(0,M.jsx)(Gt.ScLangText,{addrOrSystemId:je,defaultText:String(je)})},ut))}),L.isLoading&&(0,M.jsx)(b,{})]})};var j=ft(9987),oe=ft(9118),Ce=ft(7108),Le=ft(385),qe={};qe.styleTagTransform=or(),qe.setAttributes=Xo(),qe.insert=Io().bind(null,"head"),qe.domAPI=Br(),qe.insertStyleElement=no();var Ve=Fr()(Le.A,qe);const Mt=Le.A&&Le.A.locals?Le.A.locals:void 0;var sn=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})};const ur=200,rn=300,Tn=({className:L})=>{const[W,G]=(0,f.useState)(!1),[Y,je]=(0,f.useState)(null),{goToActiveFormatCommand:ut}=(0,wo.S)(),gt=(0,Gt.useTranslate)(),Qt=gt({ru:"\u041F\u043E\u0438\u0441\u043A sc-\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u043C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0430\u043C",en:"Search for sc-elements by text fragments"}),Kt=(0,f.useCallback)(Rr=>sn(void 0,void 0,void 0,function*(){if(!Rr)return je(null);G(!0);const[Co=[]]=yield Eo.Sn.searchLinkContentsByContentSubstrings([Rr]),Qo=[...new Set(Co.filter(ai=>ai.length<ur))].sort((ai,Ui)=>ai.length-Ui.length);G(!1),je(Qo)}),[]),[bt]=(0,f.useMemo)(()=>(0,Ce.sg)(Kt,rn),[Kt]),At=Rr=>{bt(Rr.target.value)},vn=Rr=>sn(void 0,void 0,void 0,function*(){const{value:Co}=Rr.target;if(!Co)return;G(!0);const Qo=yield(0,j.g)(Co);G(!1),Qo&&ut(Qo.value)}),mr=Y?void 0:gt({ru:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",en:"Enter a search string"});return(0,M.jsx)(Gt.Select,{className:L,mode:"search",value:"",placeholder:gt({ru:"\u041F\u043E\u0438\u0441\u043A...",en:"Search..."}),title:Qt,"aria-label":Qt,isLoading:W,onInputChange:At,onChange:vn,emptyMessage:mr,iconsLeft:(0,M.jsx)(oe.A,{}),children:(Y||[]).map(Rr=>(0,M.jsx)(Gt.Option,{value:Rr,className:Mt.option,title:Rr,children:Rr},Rr))})};var hr=ft(6951),Tr=ft(677),Or=ft(5117),mo={};mo.styleTagTransform=or(),mo.setAttributes=Xo(),mo.insert=Io().bind(null,"head"),mo.domAPI=Br(),mo.insertStyleElement=no();var Jo=Fr()(Or.A,mo);const Un=Or.A&&Or.A.locals?Or.A.locals:void 0;var vo,$r,Mn;function Xn(){return Xn=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Xn.apply(null,arguments)}var Fi=function(W){return f.createElement("svg",Xn({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),vo||(vo=f.createElement("rect",{width:62,height:62,fill:"#F2F2F2",rx:9.098})),$r||($r=f.createElement("g",{clipPath:"url(#AskAiPageButton_svg__a)"},f.createElement("path",{fill:"url(#AskAiPageButton_svg__b)",d:"M31.41 26.57c.31-.928 1.62-.928 1.93 0l1.814 5.448a8.13 8.13 0 0 0 5.144 5.141l5.445 1.815c.928.309.928 1.62 0 1.929l-5.448 1.814a8.13 8.13 0 0 0-5.141 5.144l-1.814 5.445a1.016 1.016 0 0 1-1.93 0l-1.814-5.448a8.13 8.13 0 0 0-5.141-5.141l-5.448-1.814a1.015 1.015 0 0 1 0-1.93l5.448-1.814a8.13 8.13 0 0 0 5.141-5.14zM20.546 12.23a.61.61 0 0 1 1.158 0l1.089 3.268a4.88 4.88 0 0 0 3.085 3.085l3.268 1.088a.61.61 0 0 1 0 1.159l-3.268 1.089a4.88 4.88 0 0 0-3.085 3.085l-1.089 3.268a.61.61 0 0 1-1.158 0l-1.089-3.268a4.88 4.88 0 0 0-3.085-3.085l-3.268-1.089a.61.61 0 0 1 0-1.159l3.268-1.088a4.88 4.88 0 0 0 3.085-3.085zm19.881-2.95a.408.408 0 0 1 .77 0l.726 2.176a3.25 3.25 0 0 0 2.06 2.059l2.176.725a.407.407 0 0 1 0 .771l-2.177.726a3.25 3.25 0 0 0-2.059 2.058l-.725 2.177a.407.407 0 0 1-.77 0l-.726-2.177a3.25 3.25 0 0 0-2.06-2.058l-2.173-.726a.408.408 0 0 1 0-.77l2.177-.726a3.25 3.25 0 0 0 2.058-2.059l.723-2.174z"}))),Mn||(Mn=f.createElement("defs",null,f.createElement("linearGradient",{id:"AskAiPageButton_svg__b",x1:12.46,x2:46.21,y1:9.001,y2:54.001,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#72D4E1"}),f.createElement("stop",{offset:1,stopColor:"#4050DE"})),f.createElement("clipPath",{id:"AskAiPageButton_svg__a"},f.createElement("path",{fill:"#fff",d:"M8 9h45v45H8z"})))))};const Za=Fi;var Wo,go,Fa;function Cs(){return Cs=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Cs.apply(null,arguments)}var rl=function(W){return f.createElement("svg",Cs({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),Wo||(Wo=f.createElement("rect",{width:62,height:62,fill:"url(#AskAiPageButtonFocus_svg__a)",rx:9.098})),go||(go=f.createElement("g",{clipPath:"url(#AskAiPageButtonFocus_svg__b)"},f.createElement("path",{fill:"url(#AskAiPageButtonFocus_svg__c)",d:"M31.41 26.57c.31-.928 1.62-.928 1.93 0l1.814 5.448a8.13 8.13 0 0 0 5.144 5.142l5.445 1.814c.928.309.928 1.62 0 1.929l-5.448 1.814a8.13 8.13 0 0 0-5.141 5.144l-1.814 5.445a1.016 1.016 0 0 1-1.93 0l-1.814-5.448a8.13 8.13 0 0 0-5.141-5.141l-5.448-1.814a1.016 1.016 0 0 1 0-1.93l5.448-1.813a8.13 8.13 0 0 0 5.141-5.142zM20.546 12.23a.611.611 0 0 1 1.158 0l1.089 3.268a4.88 4.88 0 0 0 3.085 3.085l3.268 1.088a.61.61 0 0 1 0 1.16l-3.268 1.088a4.88 4.88 0 0 0-3.085 3.085l-1.089 3.268a.61.61 0 0 1-1.158 0l-1.089-3.268a4.88 4.88 0 0 0-3.085-3.085l-3.268-1.089a.61.61 0 0 1 0-1.159l3.268-1.088a4.88 4.88 0 0 0 3.085-3.085zm19.881-2.95a.408.408 0 0 1 .77 0l.726 2.176a3.25 3.25 0 0 0 2.06 2.059l2.176.726a.407.407 0 0 1 0 .77l-2.177.726a3.25 3.25 0 0 0-2.059 2.059l-.725 2.176a.408.408 0 0 1-.77 0l-.726-2.177a3.25 3.25 0 0 0-2.06-2.058l-2.173-.726a.408.408 0 0 1 0-.77l2.177-.726a3.25 3.25 0 0 0 2.058-2.059l.723-2.174z"}))),Fa||(Fa=f.createElement("defs",null,f.createElement("linearGradient",{id:"AskAiPageButtonFocus_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#7EA9EB"}),f.createElement("stop",{offset:1,stopColor:"#4265E0"})),f.createElement("linearGradient",{id:"AskAiPageButtonFocus_svg__c",x1:53,x2:7,y1:54,y2:5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#ABD8F1"}),f.createElement("stop",{offset:1,stopColor:"#fff"})),f.createElement("clipPath",{id:"AskAiPageButtonFocus_svg__b"},f.createElement("path",{fill:"#fff",d:"M8 9h45v45H8z"})))))};const ei=rl;var Fs,Us,la;function xs(){return xs=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},xs.apply(null,arguments)}var Ss=function(W){return f.createElement("svg",xs({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),Fs||(Fs=f.createElement("rect",{width:62,height:62,fill:"url(#AskAiPageButtonFocusThemed_svg__a)",rx:9.098})),Us||(Us=f.createElement("g",{clipPath:"url(#AskAiPageButtonFocusThemed_svg__b)"},f.createElement("path",{fill:"url(#AskAiPageButtonFocusThemed_svg__c)",d:"M31.41 26.57c.31-.928 1.62-.928 1.93 0l1.814 5.448a8.13 8.13 0 0 0 5.144 5.142l5.445 1.814c.928.309.928 1.62 0 1.929l-5.448 1.814a8.13 8.13 0 0 0-5.141 5.144l-1.814 5.445a1.016 1.016 0 0 1-1.93 0l-1.814-5.448a8.13 8.13 0 0 0-5.141-5.141l-5.448-1.814a1.016 1.016 0 0 1 0-1.93l5.448-1.813a8.13 8.13 0 0 0 5.141-5.142zM20.546 12.23a.611.611 0 0 1 1.158 0l1.089 3.268a4.88 4.88 0 0 0 3.085 3.085l3.268 1.088a.61.61 0 0 1 0 1.16l-3.268 1.088a4.88 4.88 0 0 0-3.085 3.085l-1.089 3.268a.61.61 0 0 1-1.158 0l-1.089-3.268a4.88 4.88 0 0 0-3.085-3.085l-3.268-1.089a.61.61 0 0 1 0-1.159l3.268-1.088a4.88 4.88 0 0 0 3.085-3.085zm19.881-2.95a.408.408 0 0 1 .77 0l.726 2.176a3.25 3.25 0 0 0 2.06 2.059l2.176.726a.407.407 0 0 1 0 .77l-2.177.726a3.25 3.25 0 0 0-2.059 2.059l-.725 2.176a.408.408 0 0 1-.77 0l-.726-2.177a3.25 3.25 0 0 0-2.06-2.058l-2.173-.726a.408.408 0 0 1 0-.77l2.177-.726a3.25 3.25 0 0 0 2.058-2.059l.723-2.174z"}))),la||(la=f.createElement("defs",null,f.createElement("linearGradient",{id:"AskAiPageButtonFocusThemed_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#7EA9EB"}),f.createElement("stop",{offset:1,stopColor:"#4265E0"})),f.createElement("linearGradient",{id:"AskAiPageButtonFocusThemed_svg__c",x1:53,x2:7,y1:54,y2:5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#ABD8F1"}),f.createElement("stop",{offset:1,stopColor:"#fff"})),f.createElement("clipPath",{id:"AskAiPageButtonFocusThemed_svg__b"},f.createElement("path",{fill:"#fff",d:"M8 9h45v45H8z"})))))};const Ca=Ss;var ol,Os,Al;function zs(){return zs=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},zs.apply(null,arguments)}var us=function(W){return f.createElement("svg",zs({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),ol||(ol=f.createElement("rect",{width:62,height:62,fill:"var(--color-soft-grey)",rx:9.098})),Os||(Os=f.createElement("g",{clipPath:"url(#AskAiPageButtonThemed_svg__a)"},f.createElement("path",{fill:"var(--color-navy-blue)",d:"M31.41 26.57c.31-.928 1.62-.928 1.93 0l1.814 5.448a8.13 8.13 0 0 0 5.144 5.141l5.445 1.815c.928.309.928 1.62 0 1.929l-5.448 1.814a8.13 8.13 0 0 0-5.141 5.144l-1.814 5.445a1.016 1.016 0 0 1-1.93 0l-1.814-5.448a8.13 8.13 0 0 0-5.141-5.141l-5.448-1.814a1.015 1.015 0 0 1 0-1.93l5.448-1.814a8.13 8.13 0 0 0 5.141-5.14zM20.546 12.23a.61.61 0 0 1 1.158 0l1.089 3.268a4.88 4.88 0 0 0 3.085 3.085l3.268 1.088a.61.61 0 0 1 0 1.159l-3.268 1.089a4.88 4.88 0 0 0-3.085 3.085l-1.089 3.268a.61.61 0 0 1-1.158 0l-1.089-3.268a4.88 4.88 0 0 0-3.085-3.085l-3.268-1.089a.61.61 0 0 1 0-1.159l3.268-1.088a4.88 4.88 0 0 0 3.085-3.085zm19.881-2.95a.408.408 0 0 1 .77 0l.726 2.176a3.25 3.25 0 0 0 2.06 2.059l2.176.725a.407.407 0 0 1 0 .771l-2.177.726a3.25 3.25 0 0 0-2.059 2.058l-.725 2.177a.407.407 0 0 1-.77 0l-.726-2.177a3.25 3.25 0 0 0-2.06-2.058l-2.173-.726a.408.408 0 0 1 0-.77l2.177-.726a3.25 3.25 0 0 0 2.058-2.059l.723-2.174z"}))),Al||(Al=f.createElement("defs",null,f.createElement("clipPath",{id:"AskAiPageButtonThemed_svg__a"},f.createElement("path",{fill:"#fff",d:"M8 9h45v45H8z"})))))};const il=us;var cs,xa,Ws,Ps,Ua;function Rl(){return Rl=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Rl.apply(null,arguments)}var Ic=function(W){return f.createElement("svg",Rl({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),cs||(cs=f.createElement("rect",{width:62,height:62,fill:"#F2F2F2",rx:9.098})),xa||(xa=f.createElement("path",{fill:"url(#LibraryPageButton_svg__a)",fillRule:"evenodd",d:"M24.26 23.141h12.48c6.326 0 9.491 0 11.269 1.85 1.775 1.852 1.357 4.709.52 10.426l-.79 5.422c-.657 4.483-.985 6.726-2.667 8.069-1.681 1.342-4.162 1.342-9.125 1.342H25.053c-4.961 0-7.444 0-9.126-1.343s-2.01-3.584-2.666-8.068l-.791-5.422c-.838-5.717-1.256-8.574.521-10.425 1.778-1.85 4.943-1.85 11.269-1.85M23 42.75c0-.776.7-1.406 1.562-1.406h11.876c.862 0 1.562.63 1.562 1.406s-.7 1.406-1.562 1.406H24.562c-.863 0-1.562-.63-1.562-1.406",clipRule:"evenodd"})),Ws||(Ws=f.createElement("path",{fill:"url(#LibraryPageButton_svg__b)",d:"M23.956 12.75h13.088c.437 0 .769 0 1.063.028 2.077.204 3.776 1.453 4.498 3.135h-24.21c.722-1.682 2.422-2.93 4.5-3.135.29-.028.626-.028 1.061-.028"})),Ps||(Ps=f.createElement("path",{fill:"url(#LibraryPageButton_svg__c)",d:"M19.831 17.856c-2.606 0-4.743 1.575-5.456 3.661l-.045.132q1.135-.332 2.31-.475c2.025-.258 4.586-.258 7.56-.258h12.923c2.973 0 5.535 0 7.56.258.787.102 1.563.25 2.31.475l-.044-.132c-.712-2.088-2.85-3.661-5.458-3.661z"})),Ua||(Ua=f.createElement("defs",null,f.createElement("linearGradient",{id:"LibraryPageButton_svg__a",x1:11.499,x2:26.28,y1:23.139,y2:59.485,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#72D4E1"}),f.createElement("stop",{offset:1,stopColor:"#4050DE"})),f.createElement("linearGradient",{id:"LibraryPageButton_svg__b",x1:18.233,x2:18.595,y1:12.75,y2:17.666,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#72D4E1"}),f.createElement("stop",{offset:1,stopColor:"#4050DE"})),f.createElement("linearGradient",{id:"LibraryPageButton_svg__c",x1:14.112,x2:14.498,y1:17.855,y2:23.757,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#72D4E1"}),f.createElement("stop",{offset:1,stopColor:"#4050DE"})))))};const Ju=Ic;var ec,Mc,yu,Bs,Au;function al(){return al=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},al.apply(null,arguments)}var ya=function(W){return f.createElement("svg",al({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),ec||(ec=f.createElement("rect",{width:62,height:62,fill:"url(#LibraryPageButtonFocus_svg__a)",rx:9.098})),Mc||(Mc=f.createElement("path",{fill:"url(#LibraryPageButtonFocus_svg__b)",fillRule:"evenodd",d:"M24.26 23.141h12.48c6.326 0 9.491 0 11.269 1.851 1.775 1.85 1.357 4.708.52 10.425l-.79 5.422c-.657 4.484-.985 6.726-2.667 8.069-1.681 1.342-4.162 1.342-9.125 1.342H25.053c-4.961 0-7.444 0-9.126-1.342s-2.01-3.585-2.666-8.068l-.791-5.423c-.838-5.717-1.256-8.574.521-10.425 1.778-1.85 4.943-1.85 11.269-1.85M23 42.751c0-.777.7-1.407 1.562-1.407h11.876c.862 0 1.562.63 1.562 1.406s-.7 1.406-1.562 1.406H24.562c-.863 0-1.562-.63-1.562-1.406",clipRule:"evenodd"})),yu||(yu=f.createElement("path",{fill:"url(#LibraryPageButtonFocus_svg__c)",d:"M23.956 12.75h13.088c.437 0 .769 0 1.063.028 2.077.204 3.776 1.453 4.498 3.135h-24.21c.722-1.682 2.422-2.93 4.5-3.135.29-.028.626-.028 1.061-.028"})),Bs||(Bs=f.createElement("path",{fill:"url(#LibraryPageButtonFocus_svg__d)",d:"M19.831 17.856c-2.606 0-4.743 1.575-5.456 3.662l-.045.13a14.4 14.4 0 0 1 2.31-.474c2.025-.258 4.586-.258 7.56-.258h12.923c2.973 0 5.535 0 7.56.258.787.102 1.563.25 2.31.475l-.044-.131c-.712-2.09-2.85-3.662-5.458-3.662z"})),Au||(Au=f.createElement("defs",null,f.createElement("linearGradient",{id:"LibraryPageButtonFocus_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#7EA9EB"}),f.createElement("stop",{offset:1,stopColor:"#4265E0"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocus_svg__b",x1:30.499,x2:30.499,y1:23.141,y2:50.25,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocus_svg__c",x1:30.5,x2:30.5,y1:12.75,y2:15.913,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocus_svg__d",x1:30.661,x2:30.661,y1:17.856,y2:21.649,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})))))};const Zl=ya;var ds,jl,Lc,Nc,Vs;function sl(){return sl=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},sl.apply(null,arguments)}var ll=function(W){return f.createElement("svg",sl({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),ds||(ds=f.createElement("rect",{width:62,height:62,fill:"url(#LibraryPageButtonFocusThemed_svg__a)",rx:9.098})),jl||(jl=f.createElement("path",{fill:"url(#LibraryPageButtonFocusThemed_svg__b)",fillRule:"evenodd",d:"M24.26 23.141h12.48c6.326 0 9.491 0 11.269 1.851 1.775 1.85 1.357 4.708.52 10.425l-.79 5.422c-.657 4.484-.985 6.726-2.667 8.069-1.681 1.342-4.162 1.342-9.125 1.342H25.053c-4.961 0-7.444 0-9.126-1.342s-2.01-3.585-2.666-8.068l-.791-5.423c-.838-5.717-1.256-8.574.521-10.425 1.778-1.85 4.943-1.85 11.269-1.85M23 42.751c0-.777.7-1.407 1.562-1.407h11.876c.862 0 1.562.63 1.562 1.406s-.7 1.406-1.562 1.406H24.562c-.863 0-1.562-.63-1.562-1.406",clipRule:"evenodd"})),Lc||(Lc=f.createElement("path",{fill:"url(#LibraryPageButtonFocusThemed_svg__c)",d:"M23.956 12.75h13.088c.437 0 .769 0 1.063.028 2.077.204 3.776 1.453 4.498 3.135h-24.21c.722-1.682 2.422-2.93 4.5-3.135.29-.028.626-.028 1.061-.028"})),Nc||(Nc=f.createElement("path",{fill:"url(#LibraryPageButtonFocusThemed_svg__d)",d:"M19.831 17.856c-2.606 0-4.743 1.575-5.456 3.662l-.045.13a14.4 14.4 0 0 1 2.31-.474c2.025-.258 4.586-.258 7.56-.258h12.923c2.973 0 5.535 0 7.56.258.787.102 1.563.25 2.31.475l-.044-.131c-.712-2.09-2.85-3.662-5.458-3.662z"})),Vs||(Vs=f.createElement("defs",null,f.createElement("linearGradient",{id:"LibraryPageButtonFocusThemed_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-navy-blue)"}),f.createElement("stop",{offset:1,stopColor:"#1e5a80"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocusThemed_svg__b",x1:30.499,x2:30.499,y1:23.141,y2:50.25,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocusThemed_svg__c",x1:30.5,x2:30.5,y1:12.75,y2:15.913,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})),f.createElement("linearGradient",{id:"LibraryPageButtonFocusThemed_svg__d",x1:30.661,x2:30.661,y1:17.856,y2:21.649,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})))))};const _u=ll;var Eu,ul,ks,ii,ti;function fs(){return fs=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},fs.apply(null,arguments)}var ua=function(W){return f.createElement("svg",fs({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),Eu||(Eu=f.createElement("rect",{width:62,height:62,fill:"var(--color-soft-grey)",rx:9.098})),ul||(ul=f.createElement("path",{fill:"url(#LibraryPageButtonThemed_svg__a)",fillRule:"evenodd",d:"M24.26 23.141h12.48c6.326 0 9.491 0 11.269 1.85 1.775 1.852 1.357 4.709.52 10.426l-.79 5.422c-.657 4.483-.985 6.726-2.667 8.069-1.681 1.342-4.162 1.342-9.125 1.342H25.053c-4.961 0-7.444 0-9.126-1.343s-2.01-3.584-2.666-8.068l-.791-5.422c-.838-5.717-1.256-8.574.521-10.425 1.778-1.85 4.943-1.85 11.269-1.85M23 42.75c0-.776.7-1.406 1.562-1.406h11.876c.862 0 1.562.63 1.562 1.406s-.7 1.406-1.562 1.406H24.562c-.863 0-1.562-.63-1.562-1.406",clipRule:"evenodd"})),ks||(ks=f.createElement("path",{fill:"url(#LibraryPageButtonThemed_svg__b)",d:"M23.956 12.75h13.088c.437 0 .769 0 1.063.028 2.077.204 3.776 1.453 4.498 3.135h-24.21c.722-1.682 2.422-2.93 4.5-3.135.29-.028.626-.028 1.061-.028"})),ii||(ii=f.createElement("path",{fill:"url(#LibraryPageButtonThemed_svg__c)",d:"M19.831 17.856c-2.606 0-4.743 1.575-5.456 3.661l-.045.132q1.135-.332 2.31-.475c2.025-.258 4.586-.258 7.56-.258h12.923c2.973 0 5.535 0 7.56.258.787.102 1.563.25 2.31.475l-.044-.132c-.712-2.088-2.85-3.661-5.458-3.661z"})),ti||(ti=f.createElement("defs",null,f.createElement("linearGradient",{id:"LibraryPageButtonThemed_svg__a",x1:11.499,x2:26.28,y1:23.139,y2:59.485,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"LibraryPageButtonThemed_svg__b",x1:18.233,x2:18.595,y1:12.75,y2:17.666,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"LibraryPageButtonThemed_svg__c",x1:14.112,x2:14.498,y1:17.855,y2:23.757,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})))))};const Sa=ua;var Hs,cl,Aa,ql,tc,nc,Jl,bu,Ts,eu;function tu(){return tu=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},tu.apply(null,arguments)}var rc=function(W){return f.createElement("svg",tu({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),Hs||(Hs=f.createElement("rect",{width:62,height:62,fill:"#F2F2F2",rx:12.4})),cl||(cl=f.createElement("path",{stroke:"#B0C0CF",strokeWidth:1.24,d:"m12.844 18.033 18.112-3.63-10.565 19.055m0 0 24.15.907m-24.15-.907 11.572 12.249M44.54 34.365l4.529-14.972M44.54 34.366 31.963 45.707m0 0L16.365 49.79"})),Aa||(Aa=f.createElement("circle",{cx:12,cy:18,r:3,fill:"url(#ScnPageButton_svg__a)"})),ql||(ql=f.createElement("circle",{cx:49,cy:19,r:3,fill:"url(#ScnPageButton_svg__b)"})),tc||(tc=f.createElement("circle",{cx:32,cy:46,r:3,fill:"url(#ScnPageButton_svg__c)"})),nc||(nc=f.createElement("circle",{cx:16,cy:50,r:3,fill:"url(#ScnPageButton_svg__d)"})),Jl||(Jl=f.createElement("circle",{cx:20.5,cy:33.5,r:4.5,fill:"url(#ScnPageButton_svg__e)"})),bu||(bu=f.createElement("circle",{cx:44.5,cy:34.5,r:4.5,fill:"url(#ScnPageButton_svg__f)"})),Ts||(Ts=f.createElement("circle",{cx:31.5,cy:14.5,r:4.5,fill:"url(#ScnPageButton_svg__g)"})),eu||(eu=f.createElement("defs",null,f.createElement("linearGradient",{id:"ScnPageButton_svg__a",x1:12,x2:12,y1:15,y2:21,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#B3D9EF"}),f.createElement("stop",{offset:1,stopColor:"#87AFEA"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__b",x1:49,x2:49,y1:16,y2:22,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#B3D9EF"}),f.createElement("stop",{offset:1,stopColor:"#87AFEA"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__c",x1:32,x2:32,y1:43,y2:49,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#B3D9EF"}),f.createElement("stop",{offset:1,stopColor:"#87AFEA"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__d",x1:16,x2:16,y1:47,y2:53,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#B3D9EF"}),f.createElement("stop",{offset:1,stopColor:"#87AFEA"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__e",x1:20.5,x2:20.5,y1:29,y2:38,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#708EF8"}),f.createElement("stop",{offset:1,stopColor:"#425EA8"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__f",x1:44.5,x2:44.5,y1:30,y2:39,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#708EF8"}),f.createElement("stop",{offset:1,stopColor:"#425EA8"})),f.createElement("linearGradient",{id:"ScnPageButton_svg__g",x1:31.5,x2:31.5,y1:10,y2:19,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#708EF8"}),f.createElement("stop",{offset:1,stopColor:"#425EA8"})))))};const Fc=rc;var ps,dl,Ks,nu,ru,za,Wa,$s,hs,ms;function Gs(){return Gs=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Gs.apply(null,arguments)}var Uc=function(W){return f.createElement("svg",Gs({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),ps||(ps=f.createElement("rect",{width:62,height:62,fill:"url(#ScnPageButtonFocus_svg__a)",rx:9.098})),dl||(dl=f.createElement("path",{stroke:"#fff",strokeWidth:1.24,d:"m14.496 17.313 16.81-3.735L21.5 33.19m0 0 22.414.933M21.5 33.19l10.74 12.607m11.674-11.674 4.203-15.409m-4.203 15.41L32.24 45.796m0 0L17.765 50"})),Ks||(Ks=f.createElement("circle",{cx:30.773,cy:14.003,r:4.669,fill:"url(#ScnPageButtonFocus_svg__b)",transform:"rotate(38.608 30.773 14.003)"})),nu||(nu=f.createElement("circle",{cx:43.626,cy:33.829,r:4.669,fill:"url(#ScnPageButtonFocus_svg__c)",transform:"rotate(38.608 43.626 33.829)"})),ru||(ru=f.createElement("circle",{cx:21.602,cy:32.974,r:4.669,fill:"url(#ScnPageButtonFocus_svg__d)",transform:"rotate(38.608 21.602 32.974)"})),za||(za=f.createElement("circle",{cx:32.333,cy:45.725,r:3.269,fill:"url(#ScnPageButtonFocus_svg__e)",transform:"rotate(38.608 32.333 45.725)"})),Wa||(Wa=f.createElement("circle",{cx:18.19,cy:49.966,r:3.269,fill:"url(#ScnPageButtonFocus_svg__f)",transform:"rotate(38.608 18.19 49.966)"})),$s||($s=f.createElement("circle",{cx:14.514,cy:17.154,r:3.269,fill:"url(#ScnPageButtonFocus_svg__g)",transform:"rotate(38.608 14.514 17.154)"})),hs||(hs=f.createElement("circle",{cx:47.915,cy:18.728,r:3.269,fill:"url(#ScnPageButtonFocus_svg__h)",transform:"rotate(38.608 47.915 18.728)"})),ms||(ms=f.createElement("defs",null,f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#7EA9EB"}),f.createElement("stop",{offset:1,stopColor:"#4265E0"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__b",x1:30.773,x2:30.773,y1:9.334,y2:18.672,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__c",x1:43.626,x2:43.626,y1:29.159,y2:38.498,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__d",x1:21.602,x2:21.602,y1:28.304,y2:37.643,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#F3F0F8"}),f.createElement("stop",{offset:1,stopColor:"#C7C6EE"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__e",x1:32.333,x2:32.333,y1:42.456,y2:48.994,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#fff"}),f.createElement("stop",{offset:1,stopColor:"#DBF2FF"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__f",x1:18.19,x2:18.19,y1:46.697,y2:53.234,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#fff"}),f.createElement("stop",{offset:1,stopColor:"#DBF2FF"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__g",x1:14.514,x2:14.514,y1:13.885,y2:20.422,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#E5F6FF"}),f.createElement("stop",{offset:1,stopColor:"#fff"})),f.createElement("linearGradient",{id:"ScnPageButtonFocus_svg__h",x1:47.915,x2:47.915,y1:15.46,y2:21.997,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#fff"}),f.createElement("stop",{offset:1,stopColor:"#DBF2FF"})))))};const oc=Uc;var _l,Oa,_a,yi,ns,wu,Cu,ou,xu,ic;function Dl(){return Dl=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Dl.apply(null,arguments)}var Il=function(W){return f.createElement("svg",Dl({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),_l||(_l=f.createElement("rect",{width:62,height:62,fill:"url(#ScnPageButtonFocusThemed_svg__a)",rx:9.098})),Oa||(Oa=f.createElement("path",{stroke:"var(--color-white)",strokeWidth:1.24,d:"m14.496 17.313 16.81-3.735L21.5 33.19m0 0 22.414.933M21.5 33.19l10.74 12.607m11.674-11.674 4.203-15.409m-4.203 15.41L32.24 45.796m0 0L17.765 50"})),_a||(_a=f.createElement("circle",{cx:30.773,cy:14.003,r:4.669,fill:"url(#ScnPageButtonFocusThemed_svg__b)",transform:"rotate(38.608 30.773 14.003)"})),yi||(yi=f.createElement("circle",{cx:43.626,cy:33.829,r:4.669,fill:"url(#ScnPageButtonFocusThemed_svg__c)",transform:"rotate(38.608 43.626 33.829)"})),ns||(ns=f.createElement("circle",{cx:21.602,cy:32.974,r:4.669,fill:"url(#ScnPageButtonFocusThemed_svg__d)",transform:"rotate(38.608 21.602 32.974)"})),wu||(wu=f.createElement("circle",{cx:32.333,cy:45.725,r:3.269,fill:"url(#ScnPageButtonFocusThemed_svg__e)",transform:"rotate(38.608 32.333 45.725)"})),Cu||(Cu=f.createElement("circle",{cx:18.19,cy:49.966,r:3.269,fill:"url(#ScnPageButtonFocusThemed_svg__f)",transform:"rotate(38.608 18.19 49.966)"})),ou||(ou=f.createElement("circle",{cx:14.514,cy:17.154,r:3.269,fill:"url(#ScnPageButtonFocusThemed_svg__g)",transform:"rotate(38.608 14.514 17.154)"})),xu||(xu=f.createElement("circle",{cx:47.915,cy:18.728,r:3.269,fill:"url(#ScnPageButtonFocusThemed_svg__h)",transform:"rotate(38.608 47.915 18.728)"})),ic||(ic=f.createElement("defs",null,f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__a",x1:0,x2:62,y1:0,y2:58.5,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-navy-blue)"}),f.createElement("stop",{offset:1,stopColor:"#1e5a80"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__b",x1:30.773,x2:30.773,y1:9.334,y2:18.672,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__c",x1:43.626,x2:43.626,y1:29.159,y2:38.498,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__d",x1:21.602,x2:21.602,y1:28.304,y2:37.643,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-silver)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__e",x1:32.333,x2:32.333,y1:42.456,y2:48.994,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-white)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-grey-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__f",x1:18.19,x2:18.19,y1:46.697,y2:53.234,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-white)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-grey-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__g",x1:14.514,x2:14.514,y1:13.885,y2:20.422,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-white)"})),f.createElement("linearGradient",{id:"ScnPageButtonFocusThemed_svg__h",x1:47.915,x2:47.915,y1:15.46,y2:21.997,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-white)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-grey-blue)"})))))};const Ml=Il;var Su,Xs,El,iu,Ou,Pu,bl,ac,Ll,au;function Ys(){return Ys=Object.assign?Object.assign.bind():function(L){for(var W=1;W<arguments.length;W++){var G=arguments[W];for(var Y in G)({}).hasOwnProperty.call(G,Y)&&(L[Y]=G[Y])}return L},Ys.apply(null,arguments)}var Bu=function(W){return f.createElement("svg",Ys({xmlns:"http://www.w3.org/2000/svg",width:62,height:62,fill:"none"},W),Su||(Su=f.createElement("rect",{width:62,height:62,fill:"var(--color-soft-grey)",rx:12.4})),Xs||(Xs=f.createElement("path",{stroke:"var(--color-silver)",strokeWidth:1.24,d:"m12.844 18.033 18.112-3.63-10.565 19.055m0 0 24.15.907m-24.15-.907 11.572 12.249M44.54 34.365l4.529-14.972M44.54 34.366 31.963 45.707m0 0L16.365 49.79"})),El||(El=f.createElement("circle",{cx:12,cy:18,r:3,fill:"url(#ScnPageButtonThemed_svg__a)"})),iu||(iu=f.createElement("circle",{cx:49,cy:19,r:3,fill:"url(#ScnPageButtonThemed_svg__b)"})),Ou||(Ou=f.createElement("circle",{cx:32,cy:46,r:3,fill:"url(#ScnPageButtonThemed_svg__c)"})),Pu||(Pu=f.createElement("circle",{cx:16,cy:50,r:3,fill:"url(#ScnPageButtonThemed_svg__d)"})),bl||(bl=f.createElement("circle",{cx:20.5,cy:33.5,r:4.5,fill:"url(#ScnPageButtonThemed_svg__e)"})),ac||(ac=f.createElement("circle",{cx:44.5,cy:34.5,r:4.5,fill:"url(#ScnPageButtonThemed_svg__f)"})),Ll||(Ll=f.createElement("circle",{cx:31.5,cy:14.5,r:4.5,fill:"url(#ScnPageButtonThemed_svg__g)"})),au||(au=f.createElement("defs",null,f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__a",x1:12,x2:12,y1:15,y2:21,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__b",x1:49,x2:49,y1:16,y2:22,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__c",x1:32,x2:32,y1:43,y2:49,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__d",x1:16,x2:16,y1:47,y2:53,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-grey-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-navy-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__e",x1:20.5,x2:20.5,y1:29,y2:38,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-navy-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-dark-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__f",x1:44.5,x2:44.5,y1:30,y2:39,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-navy-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-dark-blue)"})),f.createElement("linearGradient",{id:"ScnPageButtonThemed_svg__g",x1:31.5,x2:31.5,y1:10,y2:19,gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"var(--color-navy-blue)"}),f.createElement("stop",{offset:1,stopColor:"var(--color-dark-blue)"})))))};const ku=Bu;var wl=ft(9453),Qs={};Qs.styleTagTransform=or(),Qs.setAttributes=Xo(),Qs.insert=Io().bind(null,"head"),Qs.domAPI=Br(),Qs.insertStyleElement=no();var su=Fr()(wl.A,Qs);const na=wl.A&&wl.A.locals?wl.A.locals:void 0,fl=()=>{const[L,W]=(0,f.useState)(),G=(0,d.zy)(),{resolved:Y}=Ri(),je=Y==="dark",ut=bt=>{W(bt)};(0,f.useEffect)(()=>{G.pathname.substring(0,2)==="/q"?W(le.JZ.QT):G.pathname.startsWith("/ask-ai")?W(le.JZ.vn):W(G.pathname)},[G.pathname]);const gt=L===le.JZ.QT||L===le.JZ.hr||L===le.JZ.Wr?je?Ml:oc:je?ku:Fc,Qt=L===le.JZ.oB?je?_u:Zl:je?Sa:Ju,Kt=L===le.JZ.vn?je?Ca:ei:je?il:Za;return(0,M.jsxs)("div",{className:na.switchModeButtonsWrapper,children:[(0,M.jsx)(to,{to:le.JZ.QT,className:`${na.switchModeButton} ${je?na.switchModeButtonDark:""}`,onClick:()=>ut(le.JZ.hr),title:"SCn/SCg \u0440\u0435\u0436\u0438\u043C","aria-label":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0440\u0435\u0436\u0438\u043C SCn/SCg",children:(0,M.jsx)(gt,{})}),(0,M.jsx)(to,{to:le.JZ.oB,className:`${na.switchModeButton} ${je?na.switchModeButtonDark:""}`,onClick:()=>ut(le.JZ.oB),title:"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432","aria-label":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432",children:(0,M.jsx)(Qt,{})}),(0,M.jsx)(to,{to:le.JZ.vn,className:`${na.switchModeButton} ${je?na.switchModeButtonDark:""}`,onClick:()=>ut(le.JZ.vn),title:"\u0414\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A AskAI","aria-label":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 AskAI",children:(0,M.jsx)(Kt,{})})]})};var Tu=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})};const lu=({className:L})=>{const W=(0,E.wA)(),G=(0,hr.d4)(Tr.mB),{onAddClick:Y}=(0,Gt.useDecompositionContext)(),je=(0,Gt.useTranslate)(),[ut,gt]=(0,f.useState)(!1),Qt=(0,hr.d4)(ga.lz);return(0,f.useEffect)(()=>{G&&(gt(!0),Tu(void 0,void 0,void 0,function*(){try{const Kt=yield(0,$e.J)();Kt&&W((0,ga.Zg)(Kt))}catch(Kt){W((0,ga.Zg)([]))}finally{gt(!1)}}))},[W,G]),(0,M.jsx)("div",{className:L,children:(0,M.jsxs)("div",{className:Un.sideBarContent,children:[(0,M.jsx)("div",{className:Un.searchFieldWrap,children:(0,M.jsx)(Tn,{className:Un.searchField})}),(0,M.jsxs)("div",{className:Sr()(Un.accordionContent,{[Un.accordionContent_userCanEdit]:!!(G!=null&&G.can_edit),[Un.accordionContent_admin]:!!(G!=null&&G.is_admin)}),children:[(0,M.jsx)(fl,{}),(0,M.jsx)("div",{children:(0,M.jsx)(V,{header:je({ru:"\u0420\u0430\u0437\u0434\u0435\u043B\u044B",en:"Sections"}),leftIcon:(0,M.jsx)(qo,{}),rightIcon:G!=null&&G.is_admin||G!=null&&G.can_edit?(0,M.jsx)(pe,{}):null,rightIconTitle:je({ru:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B",en:"Add new section"}),onRightClick:Y,expanded:!0,children:(0,M.jsx)(Ur.A,{title:je({ru:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0435\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438",en:"Error requesting a decomposition"}),paragraph:je({ru:"\u041E\u0448\u0438\u0431\u043A\u0430",en:"Error"}),className:Un.errorBoundary,children:(0,M.jsx)(Gt.DecompositionPanel,{className:"dark-decomposition"})})})}),(0,M.jsx)("div",{className:Un.decompositionAndHistoryPanels,children:(0,M.jsx)(V,{header:je({ru:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",en:"History"}),leftIcon:(0,M.jsx)(Ft,{}),children:(0,M.jsx)(Ur.A,{title:je({ru:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0438",en:"Error requesting a history"}),paragraph:je({ru:"\u041E\u0448\u0438\u0431\u043A\u0430",en:"Error"}),className:Un.errorBoundary,children:(0,M.jsx)(_,{requests:Qt,isLoading:ut})})})})]})]})})};var Qr=ft(7520),Rs=ft(3583),Cl=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})},sc=function(L,W){var G={};for(var Y in L)Object.prototype.hasOwnProperty.call(L,Y)&&W.indexOf(Y)<0&&(G[Y]=L[Y]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var je=0,Y=Object.getOwnPropertySymbols(L);je<Y.length;je++)W.indexOf(Y[je])<0&&Object.prototype.propertyIsEnumerable.call(L,Y[je])&&(G[Y[je]]=L[Y[je]]);return G};const vs=L=>Cl(void 0,void 0,void 0,function*(){return(yield Eo.EX.searchKeynodes(Gt.langToKeynode[L]))[(0,Gt.snakeToCamelCase)(Gt.langToKeynode[L])]}),pl=L=>Cl(void 0,void 0,void 0,function*(){const{uiStartScElement:G,uiMenuViewGetDecomposition:Y,nrelSectionDecomposition:je}=yield Eo.EX.searchKeynodes("ui_start_sc_element","ui_menu_view_get_decomposition","nrel_section_decomposition"),ut="_subjDomain",gt=new Qr.ScTemplate;gt.triple(G,Qr.ScType.VarPermPosArc,[Qr.ScType.VarNode,ut]);const Qt=yield Eo.Sn.searchByTemplate(gt);if(!Qt.length)return null;const Kt=Qt[0].get(ut),bt=new Qr.ScConstruction;bt.generateLink(Qr.ScType.ConstNodeLink,new Qr.ScLinkContent("10",Qr.ScLinkContentType.String));const[At]=yield Eo.Sn.generateElements(bt),vn=yield vs(L),mr=yield(0,Rs.X)(Y.value,Kt.value,At.value,vn.value,je.value);if((0,Eo.F0)(mr))return null;const Rr=mr.data.action,Co=yield Eo.EX.getResult(new Qr.ScAddr(Rr));if(!Co)return null;const Qo="_targetLink",ai=new Qr.ScTemplate;ai.triple(Co,Qr.ScType.VarPermPosArc,[Qr.ScType.VarNodeLink,Qo]);const Ui=yield Eo.Sn.searchByTemplate(ai);if(!Ui.length)return null;const xi=Ui[0].get(Qo),Ai=(yield Eo.Sn.getLinkContents([xi]))[0].data;return JSON.parse(String(Ai))}),uu=(L,W)=>Cl(void 0,void 0,void 0,function*(){const G=yield vs(W.lang);return(0,Eo.Em)({method:"POST",url:`${le.H$}/api/sections/${L}/subsections`,data:Object.assign(Object.assign({},W),{lang:G.value})})}),zc=(L,W)=>(0,Eo.Em)({method:"DELETE",url:`${le.H$}/api/sections/${L}/subsections/${W}`}),qa=(L,W,G)=>Cl(void 0,void 0,void 0,function*(){const Y="_link",je=yield Eo.EX.searchKeynodes("nrel_main_idtf",Gt.langToKeynode[G]),{nrelMainIdtf:ut}=je,Qt=sc(je,["nrelMainIdtf"])[(0,Gt.snakeToCamelCase)(Gt.langToKeynode[G])],Kt=new Qr.ScTemplate;Kt.quintuple(new Qr.ScAddr(L),Qr.ScType.VarCommonArc,[Qr.ScType.VarNodeLink,Y],Qr.ScType.VarPermPosArc,ut),Kt.triple(Qt,Qr.ScType.VarPermPosArc,Y);const bt=yield Eo.Sn.searchByTemplate(Kt);if(bt.length)return Eo.Sn.setLinkContents([new Qr.ScLinkContent(W,Qr.ScLinkContentType.String,bt[0].get(Y))]),!0;const At=yield Eo.EX.generateLink(W);if(!At)return;const vn=new Qr.ScTemplate;return vn.quintuple(new Qr.ScAddr(L),Qr.ScType.VarCommonArc,At,Qr.ScType.VarPermPosArc,ut),vn.triple(Qt,Qr.ScType.VarPermPosArc,At),!!(yield Eo.Sn.generateByTemplate(vn))});var Ru=ft(9163),rs=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})};const gs=({children:L})=>{const W=(0,Ru.R)(),G=(0,Gt.useLanguage)(),Y=(0,Gt.useTranslate)(),je=(0,f.useCallback)(()=>rs(void 0,void 0,void 0,function*(){const Kt=yield pl(G);return Kt||(W(Y({ru:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0434\u0435\u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438",en:"Decomposition panel is not updated"})),null)}),[W,Y,G]),ut=(0,f.useCallback)((Kt,bt)=>rs(void 0,void 0,void 0,function*(){const At=yield uu(Kt,Object.assign(Object.assign({},bt),{lang:G}));return(0,Si.F)(At)?(W(Y({ru:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",en:"Element is not added"})),null):At.data.scAddr}),[W,Y,G]),gt=(0,f.useCallback)((Kt,bt)=>rs(void 0,void 0,void 0,function*(){const At=yield qa(Kt,bt,G);return At||(W(Y({ru:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",en:"Element is not updated"})),null)}),[W,G,Y]),Qt=(0,f.useCallback)((Kt,bt)=>rs(void 0,void 0,void 0,function*(){const At=yield zc(Kt,bt);return(0,Si.F)(At)?(W(Y({ru:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442",en:"Element is not deleted"})),null):At.data.sc_addr}),[W,Y]);return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(Gt.DecompositionProvider,{getDecompositionCallback:je,addDecompositionItemCallBack:ut,editDecompositionItemCallback:gt,deleteDecompositionItemCallback:Qt,children:L})})};var Zs=ft(7641),ys={};ys.styleTagTransform=or(),ys.setAttributes=Xo(),ys.insert=Io().bind(null,"head"),ys.domAPI=Br(),ys.insertStyleElement=no();var Nl=Fr()(Zs.A,ys);const lc=Zs.A&&Zs.A.locals?Zs.A.locals:void 0,Fl=L=>L==="light"?"dark":L==="dark"?"system":"light",Wc=()=>(0,M.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,M.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,M.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,M.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,M.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,M.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,M.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,M.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,M.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,M.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),ju=()=>(0,M.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,M.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),ki=()=>(0,M.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,M.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,M.jsx)("path",{d:"M12 2a10 10 0 0 1 0 20"}),(0,M.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),cu=()=>{const{theme:L,setTheme:W}=Ri(),G=()=>{W(Fl(L))},Y=L==="light"?(0,M.jsx)(Wc,{}):L==="dark"?(0,M.jsx)(ju,{}):(0,M.jsx)(ki,{}),ut=`\u0422\u0435\u043C\u0430: ${L==="light"?"\u0421\u0432\u0435\u0442\u043B\u0430\u044F":L==="dark"?"\u0422\u0451\u043C\u043D\u0430\u044F":"\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F"}. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F`;return(0,M.jsx)("button",{className:lc.button,onClick:G,type:"button",title:ut,"aria-label":ut,children:Y})};var hl=ft(1542),Ul=ft(2387),qs={};qs.styleTagTransform=or(),qs.setAttributes=Xo(),qs.insert=Io().bind(null,"head"),qs.domAPI=Br(),qs.insertStyleElement=no();var uc=Fr()(Ul.A,qs);const Ja=Ul.A&&Ul.A.locals?Ul.A.locals:void 0,Ci=({children:L})=>{const W=(0,E.wA)(),Y=(0,d.zy)().pathname===le.JZ.vn,je=()=>{W((0,hl.B0)({newActiveLink:le.JZ.QT}))};return(0,M.jsxs)("div",{className:Ja.root,children:[(0,M.jsx)("div",{className:Ja.logoWrapper,children:(0,M.jsx)(to,{to:le.JZ.QT,onClick:je,title:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443","aria-label":"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",children:(0,M.jsx)(oi,{})})}),(0,M.jsx)("header",{className:Ja.header,style:{marginLeft:Y?"-150px":"0"},children:(0,M.jsxs)("div",{className:Ja.headerControls,children:[(0,M.jsx)(cu,{}),(0,M.jsx)($i,{})]})}),(0,M.jsx)(gs,{children:(0,M.jsx)(lu,{className:Ja.sideBar})}),(0,M.jsxs)("main",{className:Ja.main,children:[!Y&&(0,M.jsx)(Ke,{}),L]})]})},Wi=(0,f.lazy)(()=>ft.e(957).then(ft.bind(ft,1989))),Vr=(0,f.lazy)(()=>ft.e(849).then(ft.bind(ft,9877))),Du=(0,f.lazy)(()=>ft.e(998).then(ft.bind(ft,2663))),cr=(0,f.lazy)(()=>ft.e(920).then(ft.bind(ft,9167))),tr=(0,f.lazy)(()=>ft.e(792).then(ft.bind(ft,5885))),zl=()=>(0,M.jsx)(f.Suspense,{fallback:(0,M.jsx)(M.Fragment,{children:"loading..."}),children:(0,M.jsxs)(d.BV,{children:[(0,M.jsxs)(d.qh,{path:le.JZ.QT,element:(0,M.jsx)(Ci,{children:(0,M.jsx)(tr,{})}),children:[(0,M.jsx)(d.qh,{index:!0,element:(0,M.jsx)(d.C5,{to:le.Ek,replace:!0})}),(0,M.jsx)(d.qh,{path:le.JZ.Wr,element:(0,M.jsx)(Du,{})}),(0,M.jsx)(d.qh,{path:le.JZ.hr,element:(0,M.jsx)(Wi,{})}),(0,M.jsx)(d.qh,{path:le.JZ.oB,element:(0,M.jsx)(cr,{})})]}),(0,M.jsxs)(d.qh,{path:le.JZ.vn,element:(0,M.jsx)(Ci,{children:(0,M.jsx)(Vr,{})}),children:[(0,M.jsx)(d.qh,{index:!0,element:(0,M.jsx)(Da,{})}),(0,M.jsx)(d.qh,{path:"answer",element:(0,M.jsx)(ao,{})})]})]})});var ra=ft(3631),Iu=function(L,W,G,Y){function je(ut){return ut instanceof G?ut:new G(function(gt){gt(ut)})}return new(G||(G=Promise))(function(ut,gt){function Qt(At){try{bt(Y.next(At))}catch(vn){gt(vn)}}function Kt(At){try{bt(Y.throw(At))}catch(vn){gt(vn)}}function bt(At){At.done?ut(At.value):je(At.value).then(Qt,Kt)}bt((Y=Y.apply(L,W||[])).next())})};const Mu=()=>{const{goToActiveFormatCommand:L}=(0,wo.S)(),{addrOrSystemIdAddr:W}=(0,Gt.useScUtils)(),G=(0,E.d4)(ra.E9),Y=(0,Ru.R)(),je=(0,E.wA)(),ut=(0,Gt.useTranslate)(),gt=(0,f.useCallback)((bt,At)=>{L(bt!=null?bt:le.kk,At!=null?At:le.Cy)},[]),Qt=bt=>Iu(void 0,void 0,void 0,function*(){const At=yield W(bt!=null?bt:le.kk);je((0,ra.O8)({addr:At,id:(0,vi.Ak)(5)}))}),Kt=bt=>Iu(void 0,void 0,void 0,function*(){const At=yield W(bt||le.kk),vn=G.map(Rr=>Rr.addr),mr=yield(0,fa.S)([...vn,At]);return(0,Si.F)(mr)?(Y(ut({ru:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442",en:"Error while getting context"})),null):mr.data});return(0,M.jsx)(Gt.CommandProvider,{onExecuteCommand:gt,children:(0,M.jsx)(Gt.ContextMenuProvider,{getContextItems:Kt,onFixArgument:Qt,children:(0,M.jsx)(zl,{})})})};var os=ft(206),Pa={};Pa.styleTagTransform=or(),Pa.setAttributes=Xo(),Pa.insert=Io().bind(null,"head"),Pa.domAPI=Br(),Pa.insertStyleElement=no();var is=Fr()(os.A,Pa);const du=os.A&&os.A.locals?os.A.locals:void 0,xl=document.getElementById("root");if(!xl)throw new Error("Root element #root was not found");const cc=(0,F.H)(xl),Lu=new Set(["isOptionsOpen","isLoading","isHTML","expanded","position"]),Wl=L=>!Lu.has(L),Vc=()=>{const L=localStorage.getItem("language"),W=window.navigator.language==="ru-RU"?"ru":"en";return L||W},Hc=()=>{const{styledTheme:L}=Ri();return(0,M.jsx)(po.ThemeProvider,{theme:L,children:(0,M.jsx)(Mu,{})})};cc.render((0,M.jsx)(f.StrictMode,{children:(0,M.jsx)(Gt.LanguageProvider,{defaultLanguage:Vc(),children:(0,M.jsx)(E.Kq,{store:ra.M_,children:(0,M.jsx)(Gt.ClientProvider,{client:Eo.Sn,children:(0,M.jsx)(Gt.ScUtilsProvider,{children:(0,M.jsx)(Gt.ToastProvider,{children:(0,M.jsx)(po.StyleSheetManager,{shouldForwardProp:Wl,children:(0,M.jsx)(Kr,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:(0,M.jsx)(Oo,{children:(0,M.jsx)(Hc,{})})})})})})})})})}))})()})();})();

//# sourceMappingURL=app.ddbf39fc.js.map