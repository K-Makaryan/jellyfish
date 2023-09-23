"use strict";(self.webpackChunkJellyfish=self.webpackChunkJellyfish||[]).push([[537],{821:(Xr,ke,p)=>{p.r(ke),p.d(ke,{YoutubeMp3Component:()=>Jr});var o=p(946),Ie=p(96),He=p(715),Ge=p(592),dn=p(328),hn=p(181),I=p(398),Be=p(716),fn=p(535),w=p(814);class z{}class Y{}class C{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(r=>{const n=r.indexOf(":");if(n>0){const s=r.slice(0,n),i=s.toLowerCase(),a=r.slice(n+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((r,n)=>{this.setHeaderEntries(n,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([r,n])=>{this.setHeaderEntries(r,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const r=this.headers.get(e.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,r){return this.clone({name:e,value:r,op:"a"})}set(e,r){return this.clone({name:e,value:r,op:"s"})}delete(e,r){return this.clone({name:e,value:r,op:"d"})}maybeSetNormalizedName(e,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,e)}init(){this.lazyInit&&(this.lazyInit instanceof C?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(r=>{this.headers.set(r,e.headers.get(r)),this.normalizedNames.set(r,e.normalizedNames.get(r))})}clone(e){const r=new C;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof C?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([e]),r}applyUpdate(e){const r=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,r);const s=("a"===e.op?this.headers.get(r):void 0)||[];s.push(...n),this.headers.set(r,s);break;case"d":const i=e.value;if(i){let a=this.headers.get(r);if(!a)return;a=a.filter(l=>-1===i.indexOf(l)),0===a.length?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,a)}else this.headers.delete(r),this.normalizedNames.delete(r)}}setHeaderEntries(e,r){const n=(Array.isArray(r)?r:[r]).map(i=>i.toString()),s=e.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>e(this.normalizedNames.get(r),this.headers.get(r)))}}class pn{encodeKey(e){return je(e)}encodeValue(e){return je(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const gn=/%(\d[a-f0-9])/gi,_n={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function je(t){return encodeURIComponent(t).replace(gn,(e,r)=>_n[r]??e)}function J(t){return`${t}`}class V{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new pn,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function mn(t,e){const r=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[a,l]=-1==i?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],c=r.get(a)||[];c.push(l),r.set(a,c)}),r}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(r=>{const n=e.fromObject[r],s=Array.isArray(n)?n.map(J):[J(n)];this.map.set(r,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const r=this.map.get(e);return r?r[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,r){return this.clone({param:e,value:r,op:"a"})}appendAll(e){const r=[];return Object.keys(e).forEach(n=>{const s=e[n];Array.isArray(s)?s.forEach(i=>{r.push({param:n,value:i,op:"a"})}):r.push({param:n,value:s,op:"a"})}),this.clone(r)}set(e,r){return this.clone({param:e,value:r,op:"s"})}delete(e,r){return this.clone({param:e,value:r,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const r=this.encoder.encodeKey(e);return this.map.get(e).map(n=>r+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const r=new V({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(e),r}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const r=("a"===e.op?this.map.get(e.param):void 0)||[];r.push(J(e.value)),this.map.set(e.param,r);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let n=this.map.get(e.param)||[];const s=n.indexOf(J(e.value));-1!==s&&n.splice(s,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class yn{constructor(){this.map=new Map}set(e,r){return this.map.set(e,r),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function Ue(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Le(t){return typeof Blob<"u"&&t instanceof Blob}function qe(t){return typeof FormData<"u"&&t instanceof FormData}class H{constructor(e,r,n,s){let i;if(this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function vn(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,i=s):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new C),this.context||(this.context=new yn),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=r;else{const l=r.indexOf("?");this.urlWithParams=r+(-1===l?"?":l<r.length-1?"&":"")+a}}else this.params=new V,this.urlWithParams=r}serializeBody(){return null===this.body?null:Ue(this.body)||Le(this.body)||qe(this.body)||function Cn(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof V?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||qe(this.body)?null:Le(this.body)?this.body.type||null:Ue(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof V?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const r=e.method||this.method,n=e.url||this.url,s=e.responseType||this.responseType,i=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let c=e.headers||this.headers,u=e.params||this.params;const f=e.context??this.context;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce((v,g)=>v.set(g,e.setHeaders[g]),c)),e.setParams&&(u=Object.keys(e.setParams).reduce((v,g)=>v.set(g,e.setParams[g]),u)),new H(r,n,i,{params:u,headers:c,context:f,reportProgress:l,responseType:s,withCredentials:a})}}var T=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(T||{});class ae{constructor(e,r=200,n="OK"){this.headers=e.headers||new C,this.status=void 0!==e.status?e.status:r,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class le extends ae{constructor(e={}){super(e),this.type=T.ResponseHeader}clone(e={}){return new le({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class x extends ae{constructor(e={}){super(e),this.type=T.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new x({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class ze extends ae{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function ue(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let Ye=(()=>{var t;class e{constructor(n){this.handler=n}request(n,s,i={}){let a;if(n instanceof H)a=n;else{let u,f;u=i.headers instanceof C?i.headers:new C(i.headers),i.params&&(f=i.params instanceof V?i.params:new V({fromObject:i.params})),a=new H(n,s,void 0!==i.body?i.body:null,{headers:u,context:i.context,params:f,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials})}const l=(0,Ie.of)(a).pipe((0,dn.b)(u=>this.handler.handle(u)));if(n instanceof H||"events"===i.observe)return l;const c=l.pipe((0,hn.h)(u=>u instanceof x));switch(i.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe((0,I.U)(u=>{if(null!==u.body&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return c.pipe((0,I.U)(u=>{if(null!==u.body&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return c.pipe((0,I.U)(u=>{if(null!==u.body&&"string"!=typeof u.body)throw new Error("Response is not a string.");return u.body}));default:return c.pipe((0,I.U)(u=>u.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(n,s={}){return this.request("DELETE",n,s)}get(n,s={}){return this.request("GET",n,s)}head(n,s={}){return this.request("HEAD",n,s)}jsonp(n,s){return this.request("JSONP",n,{params:(new V).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,s={}){return this.request("OPTIONS",n,s)}patch(n,s,i={}){return this.request("PATCH",n,ue(i,s))}post(n,s,i={}){return this.request("POST",n,ue(i,s))}put(n,s,i={}){return this.request("PUT",n,ue(i,s))}}return(t=e).\u0275fac=function(n){return new(n||t)(o.LFG(z))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),e})();function $e(t,e){return e(t)}function Vn(t,e){return(r,n)=>e.intercept(r,{handle:s=>t(s,n)})}const Mn=new o.OlP(""),G=new o.OlP(""),We=new o.OlP("");function An(){let t=null;return(e,r)=>{null===t&&(t=((0,o.f3M)(Mn,{optional:!0})??[]).reduceRight(Vn,$e));const n=(0,o.f3M)(o.HDt),s=n.add();return t(e,r).pipe((0,Be.x)(()=>n.remove(s)))}}let Ze=(()=>{var t;class e extends z{constructor(n,s){super(),this.backend=n,this.injector=s,this.chain=null,this.pendingTasks=(0,o.f3M)(o.HDt)}handle(n){if(null===this.chain){const i=Array.from(new Set([...this.injector.get(G),...this.injector.get(We,[])]));this.chain=i.reduceRight((a,l)=>function En(t,e,r){return(n,s)=>r.runInContext(()=>e(n,i=>t(i,s)))}(a,l,this.injector),$e)}const s=this.pendingTasks.add();return this.chain(n,i=>this.backend.handle(i)).pipe((0,Be.x)(()=>this.pendingTasks.remove(s)))}}return(t=e).\u0275fac=function(n){return new(n||t)(o.LFG(Y),o.LFG(o.lqb))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),e})();const Sn=/^\)\]\}',?\n/;let Qe=(()=>{var t;class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new o.vHH(-2800,!1);const s=this.xhrFactory;return(s.\u0275loadImpl?(0,He.D)(s.\u0275loadImpl()):(0,Ie.of)(null)).pipe((0,fn.w)(()=>new Ge.y(a=>{const l=s.build();if(l.open(n.method,n.urlWithParams),n.withCredentials&&(l.withCredentials=!0),n.headers.forEach((d,h)=>l.setRequestHeader(d,h.join(","))),n.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const d=n.detectContentTypeHeader();null!==d&&l.setRequestHeader("Content-Type",d)}if(n.responseType){const d=n.responseType.toLowerCase();l.responseType="json"!==d?d:"text"}const c=n.serializeBody();let u=null;const f=()=>{if(null!==u)return u;const d=l.statusText||"OK",h=new C(l.getAllResponseHeaders()),N=function Fn(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(l)||n.url;return u=new le({headers:h,status:l.status,statusText:d,url:N}),u},v=()=>{let{headers:d,status:h,statusText:N,url:Pe}=f(),y=null;204!==h&&(y=typeof l.response>"u"?l.responseText:l.response),0===h&&(h=y?200:0);let ie=h>=200&&h<300;if("json"===n.responseType&&"string"==typeof y){const cn=y;y=y.replace(Sn,"");try{y=""!==y?JSON.parse(y):null}catch(Re){y=cn,ie&&(ie=!1,y={error:Re,text:y})}}ie?(a.next(new x({body:y,headers:d,status:h,statusText:N,url:Pe||void 0})),a.complete()):a.error(new ze({error:y,headers:d,status:h,statusText:N,url:Pe||void 0}))},g=d=>{const{url:h}=f(),N=new ze({error:d,status:l.status||0,statusText:l.statusText||"Unknown Error",url:h||void 0});a.error(N)};let k=!1;const xe=d=>{k||(a.next(f()),k=!0);let h={type:T.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),"text"===n.responseType&&l.responseText&&(h.partialText=l.responseText),a.next(h)},q=d=>{let h={type:T.UploadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),a.next(h)};return l.addEventListener("load",v),l.addEventListener("error",g),l.addEventListener("timeout",g),l.addEventListener("abort",g),n.reportProgress&&(l.addEventListener("progress",xe),null!==c&&l.upload&&l.upload.addEventListener("progress",q)),l.send(c),a.next({type:T.Sent}),()=>{l.removeEventListener("error",g),l.removeEventListener("abort",g),l.removeEventListener("load",v),l.removeEventListener("timeout",g),n.reportProgress&&(l.removeEventListener("progress",xe),null!==c&&l.upload&&l.upload.removeEventListener("progress",q)),l.readyState!==l.DONE&&l.abort()}})))}}return(t=e).\u0275fac=function(n){return new(n||t)(o.LFG(w.JF))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),e})();const ce=new o.OlP("XSRF_ENABLED"),et=new o.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),tt=new o.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class nt{}let xn=(()=>{var t;class e{constructor(n,s,i){this.doc=n,this.platform=s,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,w.Mx)(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return(t=e).\u0275fac=function(n){return new(n||t)(o.LFG(w.K0),o.LFG(o.Lbi),o.LFG(et))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),e})();function Pn(t,e){const r=t.url.toLowerCase();if(!(0,o.f3M)(ce)||"GET"===t.method||"HEAD"===t.method||r.startsWith("http://")||r.startsWith("https://"))return e(t);const n=(0,o.f3M)(nt).getToken(),s=(0,o.f3M)(tt);return null!=n&&!t.headers.has(s)&&(t=t.clone({headers:t.headers.set(s,n)})),e(t)}var E=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(E||{});function O(t,e){return{\u0275kind:t,\u0275providers:e}}function Rn(...t){const e=[Ye,Qe,Ze,{provide:z,useExisting:Ze},{provide:Y,useExisting:Qe},{provide:G,useValue:Pn,multi:!0},{provide:ce,useValue:!0},{provide:nt,useClass:xn}];for(const r of t)e.push(...r.\u0275providers);return(0,o.MR2)(e)}const rt=new o.OlP("LEGACY_INTERCEPTOR_FN");let In=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[Rn(O(E.LegacyInterceptors,[{provide:rt,useFactory:An},{provide:G,useExisting:rt,multi:!0}]))]}),e})();var Ln=p(453),qn=p(829),zn=p(564),Yn=p(251),Jn=p(400),Xn=p(714);let st=(()=>{var t;class e{constructor(n,s){this._renderer=n,this._elementRef=s,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(n,s){this._renderer.setProperty(this._elementRef.nativeElement,n,s)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(t=e).\u0275fac=function(n){return new(n||t)(o.Y36(o.Qsj),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t}),e})(),S=(()=>{var t;class e extends st{}return(t=e).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,features:[o.qOj]}),e})();const b=new o.OlP("NgValueAccessor"),Zn={provide:b,useExisting:(0,o.Gpc)(()=>$),multi:!0},Qn=new o.OlP("CompositionEventMode");let $=(()=>{var t;class e extends st{constructor(n,s,i){super(n,s),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Kn(){const t=(0,w.q)()?(0,w.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(t=e).\u0275fac=function(n){return new(n||t)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Qn,8))},t.\u0275dir=o.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){1&n&&o.NdJ("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[o._Bn([Zn]),o.qOj]}),e})();function M(t){return null==t||("string"==typeof t||Array.isArray(t))&&0===t.length}function it(t){return null!=t&&"number"==typeof t.length}const m=new o.OlP("NgValidators"),A=new o.OlP("NgAsyncValidators"),er=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class at{static min(e){return function lt(t){return e=>{if(M(e.value)||M(t))return null;const r=parseFloat(e.value);return!isNaN(r)&&r<t?{min:{min:t,actual:e.value}}:null}}(e)}static max(e){return function ut(t){return e=>{if(M(e.value)||M(t))return null;const r=parseFloat(e.value);return!isNaN(r)&&r>t?{max:{max:t,actual:e.value}}:null}}(e)}static required(e){return function ct(t){return M(t.value)?{required:!0}:null}(e)}static requiredTrue(e){return function dt(t){return!0===t.value?null:{required:!0}}(e)}static email(e){return function ht(t){return M(t.value)||er.test(t.value)?null:{email:!0}}(e)}static minLength(e){return function ft(t){return e=>M(e.value)||!it(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function pt(t){return e=>it(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(e)}static pattern(e){return function mt(t){if(!t)return W;let e,r;return"string"==typeof t?(r="","^"!==t.charAt(0)&&(r+="^"),r+=t,"$"!==t.charAt(t.length-1)&&(r+="$"),e=new RegExp(r)):(r=t.toString(),e=t),n=>{if(M(n.value))return null;const s=n.value;return e.test(s)?null:{pattern:{requiredPattern:r,actualValue:s}}}}(e)}static nullValidator(e){return null}static compose(e){return bt(e)}static composeAsync(e){return Vt(e)}}function W(t){return null}function gt(t){return null!=t}function _t(t){return(0,o.QGY)(t)?(0,He.D)(t):t}function yt(t){let e={};return t.forEach(r=>{e=null!=r?{...e,...r}:e}),0===Object.keys(e).length?null:e}function vt(t,e){return e.map(r=>r(t))}function Ct(t){return t.map(e=>function tr(t){return!t.validate}(e)?e:r=>e.validate(r))}function bt(t){if(!t)return null;const e=t.filter(gt);return 0==e.length?null:function(r){return yt(vt(r,e))}}function de(t){return null!=t?bt(Ct(t)):null}function Vt(t){if(!t)return null;const e=t.filter(gt);return 0==e.length?null:function(r){return function $n(...t){const e=(0,zn.jO)(t),{args:r,keys:n}=(0,Ln.D)(t),s=new Ge.y(i=>{const{length:a}=r;if(!a)return void i.complete();const l=new Array(a);let c=a,u=a;for(let f=0;f<a;f++){let v=!1;(0,qn.Xf)(r[f]).subscribe((0,Yn.x)(i,g=>{v||(v=!0,u--),l[f]=g},()=>c--,void 0,()=>{(!c||!v)&&(u||i.next(n?(0,Xn.n)(n,l):l),i.complete())}))}});return e?s.pipe((0,Jn.Z)(e)):s}(vt(r,e).map(_t)).pipe((0,I.U)(yt))}}function he(t){return null!=t?Vt(Ct(t)):null}function Et(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Mt(t){return t._rawValidators}function At(t){return t._rawAsyncValidators}function fe(t){return t?Array.isArray(t)?t:[t]:[]}function Z(t,e){return Array.isArray(t)?t.includes(e):t===e}function Dt(t,e){const r=fe(e);return fe(t).forEach(s=>{Z(r,s)||r.push(s)}),r}function wt(t,e){return fe(e).filter(r=>!Z(t,r))}class Ot{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=de(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=he(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}class _ extends Ot{get formDirective(){return null}get path(){return null}}class D extends Ot{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class St{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ft=(()=>{var t;class e extends St{constructor(n){super(n)}}return(t=e).\u0275fac=function(n){return new(n||t)(o.Y36(D,2))},t.\u0275dir=o.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){2&n&&o.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[o.qOj]}),e})(),Nt=(()=>{var t;class e extends St{constructor(n){super(n)}}return(t=e).\u0275fac=function(n){return new(n||t)(o.Y36(_,10))},t.\u0275dir=o.lG2({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){2&n&&o.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[o.qOj]}),e})();const B="VALID",Q="INVALID",P="PENDING",j="DISABLED";function ee(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class Rt{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===B}get invalid(){return this.status===Q}get pending(){return this.status==P}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Dt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Dt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(wt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(wt(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=P,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(n=>{n.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=B,this._forEachChild(n=>{n.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===P)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=P,this._hasOwnPendingAsyncValidator=!0;const r=_t(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(!1!==r.emitEvent)}get(e){let r=e;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,s)=>n&&n._find(s),this)}getError(e,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?Q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P)?P:this._anyControlsHaveStatus(Q)?Q:B}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function or(t){return Array.isArray(t)?de(t):t||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function ir(t){return Array.isArray(t)?he(t):t||null}(this._rawAsyncValidators)}}const R=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>te}),te="always";function U(t,e,r=te){(function ve(t,e){const r=Mt(t);null!==e.validator?t.setValidators(Et(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const n=At(t);null!==e.asyncValidator?t.setAsyncValidators(Et(n,e.asyncValidator)):"function"==typeof n&&t.setAsyncValidators([n]);const s=()=>t.updateValueAndValidity();se(e._rawValidators,s),se(e._rawAsyncValidators,s)})(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||"always"===r)&&e.valueAccessor.setDisabledState?.(t.disabled),function ur(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&kt(t,e)})}(t,e),function dr(t,e){const r=(n,s)=>{e.valueAccessor.writeValue(n),s&&e.viewToModelUpdate(n)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}(t,e),function cr(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&kt(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function lr(t,e){if(e.valueAccessor.setDisabledState){const r=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}(t,e)}function re(t,e,r=!0){const n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),function oe(t,e){let r=!1;if(null!==t){if(null!==e.validator){const s=Mt(t);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==e.validator);i.length!==s.length&&(r=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const s=At(t);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==e.asyncValidator);i.length!==s.length&&(r=!0,t.setAsyncValidators(i))}}}const n=()=>{};return se(e._rawValidators,n),se(e._rawAsyncValidators,n),r}(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function se(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function kt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Gt(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}function Bt(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}const Me=class extends Rt{constructor(e=null,r,n){super(function ge(t){return(ee(t)?t.validators:t)||null}(r),function _e(t,e){return(ee(e)?e.asyncValidators:t)||null}(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=Bt(e)?e.value:e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Gt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Gt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Bt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let zt=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})(),Jt=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({}),e})();const Ae=new o.OlP("NgModelWithFormControlWarning"),Mr={provide:D,useExisting:(0,o.Gpc)(()=>De)};let De=(()=>{var t;class e extends D{set isDisabled(n){}constructor(n,s,i,a,l){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=l,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=function Ve(t,e){if(!e)return null;let r,n,s;return Array.isArray(e),e.forEach(i=>{i.constructor===$?r=i:function pr(t){return Object.getPrototypeOf(t.constructor)===S}(i)?n=i:s=i}),s||n||r||null}(0,i)}ngOnChanges(n){if(this._isControlChanged(n)){const s=n.form.previousValue;s&&re(s,this,!1),U(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}(function be(t,e){if(!t.hasOwnProperty("model"))return!1;const r=t.model;return!!r.isFirstChange()||!Object.is(e,r.currentValue)})(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&re(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return(t=e)._ngModelWarningSentOnce=!1,t.\u0275fac=function(n){return new(n||t)(o.Y36(m,10),o.Y36(A,10),o.Y36(b,10),o.Y36(Ae,8),o.Y36(R,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([Mr]),o.qOj,o.TTD]}),e})(),Lr=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Jt]}),e})(),zr=(()=>{var t;class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ae,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:R,useValue:n.callSetDisabledState??te}]}}}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Lr]}),e})();function Yr(t,e){if(1&t&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&t){const r=o.oxw();o.xp6(1),o.hij(" ",r.ytId.hasError("required")?"The field is required":"The link is Invalid"," ")}}let Jr=(()=>{var t;class e{constructor(n){this.http=n,this.pattern=/(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,this.ytId=new Me("",[at.required,at.pattern(this.pattern)])}matchRegex(n){return n.match(this.pattern)?.[1]||null}requestMp3(){this.pending=!0,this.http.get(`https://youtube-mp36.p.rapidapi.com/dl?id=${this.matchRegex(this.ytId.value||"")}`,{headers:{"X-RapidAPI-Key":"c91988d166mshfc1a617401e8b10p1e5ed6jsn6f82ddf95f6e","X-RapidAPI-Host":"youtube-mp36.p.rapidapi.com"}}).subscribe(n=>{this.ytData=n,this.pending=!1,this.ytId.reset(),window.open(this.ytData.link,"_self")})}}return(t=e).\u0275fac=function(n){return new(n||t)(o.Y36(Ye))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-youtube-mp3"]],standalone:!0,features:[o.jDz],decls:8,vars:3,consts:[[1,"header-1"],[1,"input-wrapper"],["placeholder","Pass video link","type","text",3,"formControl"],[4,"ngIf"],["data-tooltip","Size: 20Mb","type","button",3,"disabled","click"]],template:function(n,s){1&n&&(o.TgZ(0,"form")(1,"h1",0),o._uU(2,"Youtube Video To MP3 Converter"),o.qZA(),o.TgZ(3,"div",1),o._UZ(4,"input",2),o.YNc(5,Yr,2,1,"span",3),o.qZA(),o.TgZ(6,"button",4),o.NdJ("click",function(){return s.requestMp3()}),o._uU(7," Download "),o.qZA()()),2&n&&(o.xp6(4),o.Q6J("formControl",s.ytId),o.xp6(1),o.Q6J("ngIf",s.ytId.invalid&&s.ytId.dirty),o.xp6(1),o.Q6J("disabled",s.ytId.invalid||s.pending))},dependencies:[w.ez,w.O5,In,zr,zt,$,Ft,Nt,De],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;flex:1}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:80%}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]}),e})()}}]);