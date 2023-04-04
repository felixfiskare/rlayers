(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[4832],{5550:e=>{"use strict";function t(e,t){this.x=e,this.y=t}e.exports=t,t.prototype={clone:function(){return new t(this.x,this.y)},add:function(e){return this.clone()._add(e)},sub:function(e){return this.clone()._sub(e)},multByPoint:function(e){return this.clone()._multByPoint(e)},divByPoint:function(e){return this.clone()._divByPoint(e)},mult:function(e){return this.clone()._mult(e)},div:function(e){return this.clone()._div(e)},rotate:function(e){return this.clone()._rotate(e)},rotateAround:function(e,t){return this.clone()._rotateAround(e,t)},matMult:function(e){return this.clone()._matMult(e)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(e){return this.x===e.x&&this.y===e.y},dist:function(e){return Math.sqrt(this.distSqr(e))},distSqr:function(e){var t=e.x-this.x,r=e.y-this.y;return t*t+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(e){return Math.atan2(this.y-e.y,this.x-e.x)},angleWith:function(e){return this.angleWithSep(e.x,e.y)},angleWithSep:function(e,t){return Math.atan2(this.x*t-this.y*e,this.x*e+this.y*t)},_matMult:function(e){var t=e[0]*this.x+e[1]*this.y,r=e[2]*this.x+e[3]*this.y;return this.x=t,this.y=r,this},_add:function(e){return this.x+=e.x,this.y+=e.y,this},_sub:function(e){return this.x-=e.x,this.y-=e.y,this},_mult:function(e){return this.x*=e,this.y*=e,this},_div:function(e){return this.x/=e,this.y/=e,this},_multByPoint:function(e){return this.x*=e.x,this.y*=e.y,this},_divByPoint:function(e){return this.x/=e.x,this.y/=e.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var e=this.y;return this.y=this.x,this.x=-e,this},_rotate:function(e){var t=Math.cos(e),r=Math.sin(e),o=t*this.x-r*this.y,n=r*this.x+t*this.y;return this.x=o,this.y=n,this},_rotateAround:function(e,t){var r=Math.cos(e),o=Math.sin(e),n=t.x+r*(this.x-t.x)-o*(this.y-t.y),i=t.y+o*(this.x-t.x)+r*(this.y-t.y);return this.x=n,this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},t.convert=function(e){return e instanceof t?e:Array.isArray(e)?new t(e[0],e[1]):e}},8929:(e,t,r)=>{e.exports.VectorTile=r(2779),r(6024),r(9701)},2779:(e,t,r)=>{"use strict";var o=r(9701);function n(e,t,r){if(3===e){var n=new o(r,r.readVarint()+r.pos);n.length&&(t[n.name]=n)}}e.exports=function(e,t){this.layers=e.readFields(n,{},t)}},6024:(e,t,r)=>{"use strict";var o=r(5550);function n(e,t,r,o,n){this.properties={},this.extent=r,this.type=0,this._pbf=e,this._geometry=-1,this._keys=o,this._values=n,e.readFields(i,this,t)}function i(e,t,r){1==e?t.id=r.readVarint():2==e?function(e,t){for(var r=e.readVarint()+e.pos;e.pos<r;){var o=t._keys[e.readVarint()],n=t._values[e.readVarint()];t.properties[o]=n}}(r,t):3==e?t.type=r.readVarint():4==e&&(t._geometry=r.pos)}function s(e){for(var t,r,o=0,n=0,i=e.length,s=i-1;n<i;s=n++)t=e[n],o+=((r=e[s]).x-t.x)*(t.y+r.y);return o}e.exports=n,n.types=["Unknown","Point","LineString","Polygon"],n.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t,r=e.readVarint()+e.pos,n=1,i=0,s=0,a=0,l=[];e.pos<r;){if(i<=0){var u=e.readVarint();n=7&u,i=u>>3}if(i--,1===n||2===n)s+=e.readSVarint(),a+=e.readSVarint(),1===n&&(t&&l.push(t),t=[]),t.push(new o(s,a));else{if(7!==n)throw new Error("unknown command "+n);t&&t.push(t[0].clone())}}return t&&l.push(t),l},n.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,r=1,o=0,n=0,i=0,s=1/0,a=-1/0,l=1/0,u=-1/0;e.pos<t;){if(o<=0){var d=e.readVarint();r=7&d,o=d>>3}if(o--,1===r||2===r)(n+=e.readSVarint())<s&&(s=n),n>a&&(a=n),(i+=e.readSVarint())<l&&(l=i),i>u&&(u=i);else if(7!==r)throw new Error("unknown command "+r)}return[s,l,a,u]},n.prototype.toGeoJSON=function(e,t,r){var o,i,a=this.extent*Math.pow(2,r),l=this.extent*e,u=this.extent*t,d=this.loadGeometry(),c=n.types[this.type];function h(e){for(var t=0;t<e.length;t++){var r=e[t],o=180-360*(r.y+u)/a;e[t]=[360*(r.x+l)/a-180,360/Math.PI*Math.atan(Math.exp(o*Math.PI/180))-90]}}switch(this.type){case 1:var p=[];for(o=0;o<d.length;o++)p[o]=d[o][0];h(d=p);break;case 2:for(o=0;o<d.length;o++)h(d[o]);break;case 3:for(d=function(e){var t=e.length;if(t<=1)return[e];for(var r,o,n=[],i=0;i<t;i++){var a=s(e[i]);0!==a&&(void 0===o&&(o=a<0),o===a<0?(r&&n.push(r),r=[e[i]]):r.push(e[i]))}return r&&n.push(r),n}(d),o=0;o<d.length;o++)for(i=0;i<d[o].length;i++)h(d[o][i])}1===d.length?d=d[0]:c="Multi"+c;var f={type:"Feature",geometry:{type:c,coordinates:d},properties:this.properties};return"id"in this&&(f.id=this.id),f}},9701:(e,t,r)=>{"use strict";var o=r(6024);function n(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(i,this,t),this.length=this._features.length}function i(e,t,r){15===e?t.version=r.readVarint():1===e?t.name=r.readString():5===e?t.extent=r.readVarint():2===e?t._features.push(r.pos):3===e?t._keys.push(r.readString()):4===e&&t._values.push(function(e){for(var t=null,r=e.readVarint()+e.pos;e.pos<r;){var o=e.readVarint()>>3;t=1===o?e.readString():2===o?e.readFloat():3===o?e.readDouble():4===o?e.readVarint64():5===o?e.readVarint():6===o?e.readSVarint():7===o?e.readBoolean():null}return t}(r))}e.exports=n,n.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new o(this._pbf,t,this.extent,this._keys,this._values)}},4832:(e,t,r)=>{"use strict";var o;r.r(t),r.d(t,{MBTilesFormat:()=>C,MBTilesRasterSource:()=>L,MBTilesVectorSource:()=>O,importMBTiles:()=>j}),globalThis.sqlite3Worker1Promiser=function e(t=e.defaultConfig){if(1===arguments.length&&"function"==typeof arguments[0]){const r=t;(t=Object.assign(Object.create(null),e.defaultConfig)).onready=r}else t=Object.assign(Object.create(null),e.defaultConfig,t);const r=Object.create(null),o=function(){},n=t.onerror||o,i=t.debug||o,s=t.generateMessageId?void 0:Object.create(null),a=t.generateMessageId||function(e){return e.type+"#"+(s[e.type]=(s[e.type]||0)+1)},l=(...e)=>{throw new Error(e.join(" "))};let u;return t.worker||(t.worker=e.defaultConfig.worker),"function"==typeof t.worker&&(t.worker=t.worker()),t.worker.onmessage=function(e){e=e.data,i("worker1.onmessage",e);let o=r[e.messageId];if(!o)return e&&"sqlite3-api"===e.type&&"worker1-ready"===e.result?void(t.onready&&t.onready()):(o=r[e.type],o&&o.onrow?void o.onrow(e):void(t.onunhandled?t.onunhandled(arguments[0]):n("sqlite3Worker1Promiser() unhandled worker message:",e)));switch(delete r[e.messageId],e.type){case"error":return void o.reject(e);case"open":u||(u=e.dbId);break;case"close":e.dbId===u&&(u=void 0)}try{o.resolve(e)}catch(e){o.reject(e)}},function(){let e;1===arguments.length?e=arguments[0]:2===arguments.length?e={type:arguments[0],args:arguments[1]}:l("Invalid arugments for sqlite3Worker1Promiser()-created factory."),e.dbId||(e.dbId=u),e.messageId=a(e),e.departureTime=performance.now();const o=Object.create(null);let n;o.message=e,"exec"===e.type&&e.args&&("function"==typeof e.args.callback?(n=e.messageId+":row",o.onrow=e.args.callback,e.args.callback=n,r[n]=o):"string"==typeof e.args.callback&&l("exec callback may not be a string when using the Promise interface."));let s=new Promise((function(n,s){o.resolve=n,o.reject=s,r[e.messageId]=o,i("Posting",e.type,"message to Worker dbId="+(u||"default")+":",e),t.worker.postMessage(e)}));return n&&(s=s.finally((()=>delete r[n]))),s}},globalThis.sqlite3Worker1Promiser.defaultConfig={worker:function(){return new Worker("sqlite3-worker1-bundler-friendly.mjs",{type:"module"})}.bind({currentScript:globalThis?.document?.currentScript}),onerror:(...e)=>console.error("worker1 promiser error",...e)};const n={timeout:2e4,maxPageSize:4096,cacheSize:1024,headers:{}};var i;!function(e){e[e.WORKMSG=16777215]="WORKMSG",e[e.HANDSHAKE=16777214]="HANDSHAKE"}(i||(i={}));const s="undefined"!=typeof SQLITE_DEBUG&&SQLITE_DEBUG||void 0!==(null===(o=void 0==={env:{RLAYERS_DEBUG:void 0}}?void 0:{RLAYERS_DEBUG:void 0})||void 0===o?void 0:o.SQLITE_DEBUG)&&{RLAYERS_DEBUG:void 0}.SQLITE_DEBUG||"",a=["threads","vfs","cache","http"],l={};for(const e of a)l[e]=s.includes(e)?console.debug.bind(console):()=>{};!function(){const e=new ArrayBuffer(2),t=new Uint8Array(e),r=new Uint16Array(e);if(t[0]=240,t[1]=13,61453==r[0])return l.threads("System is Big-Endian"),!1;if(3568==r[0])return l.threads("System is Little-Endian"),!0;throw new Error(`Failed determining endianness: ${r}`)}();var u=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};function d(e){let t;return l.threads("Creating new SQLite thread",e),new Promise(((o,n)=>{const i=sqlite3Worker1Promiser({onready:()=>{o(i)},worker:()=>{try{t=new Worker(new URL(r.p+r.u(4759),r.b)),t.onerror=e=>console.error("Worker bootstrap failed",e);const o=null==e?void 0:e.http;return"shared"===(null==o?void 0:o.type)?o.createNewChannel().then((e=>{t.postMessage({httpChannel:e,httpOptions:o.options},[e.port])})):"sync"===(null==o?void 0:o.type)?t.postMessage({httpChannel:!0,httpOptions:o.options}):t.postMessage({}),t}catch(e){console.error("Failed to create SQLite worker",e),n(e)}}})})).then((e=>(e.close=()=>{t.terminate()},e)))}const c='SharedArrayBuffer is not available. If your browser supports it, the webserver must send "Cross-Origin-Opener-Policy: same-origin "and "Cross-Origin-Embedder-Policy: require-corp" headers. Alternatively, if you do not intend to use concurrent connections, pass `sync` to `createHttpBackend` to explicitly create a synchronous HTTP backend and suppress this warning message.';function h(e){var t;return u(this,void 0,void 0,(function*(){const o=function(e){if(l.threads("Creating new HTTP VFS backend thread"),"undefined"==typeof SharedArrayBuffer||"sync"===(null==e?void 0:e.backendType)){if("shared"===(null==e?void 0:e.backendType))throw new Error(c);return"sync"!==(null==e?void 0:e.backendType)&&console.warn(c+" Falling back to the legacy HTTP backend."),{type:"sync",worker:null,options:e,createNewChannel:()=>{throw new Error("Sync backend does not support channels")},close:()=>Promise.resolve(),terminate:()=>{}}}let t=1;const o=new Worker(new URL(r.p+r.u(5729),r.b));o.postMessage({msg:"init",options:e});const i={};return o.onmessage=({data:e})=>{if(l.threads("Received control message reply",e),"ack"===e.msg)return i[e.id]?(l.threads("New HTTP VFS channel created",i),i[e.id].resolve({port:i[e.id].channel.port2,shm:e.shm}),clearTimeout(i[e.id].timeout),delete i[e.id].resolve,void delete i[e.id].timeout):void console.error("Invalid response received from backend",e)},{type:"shared",worker:o,options:e,createNewChannel:function(){l.threads("Creating a new HTTP VFS channel");const r=new MessageChannel,s=t++;return o.postMessage({msg:"handshake",port:r.port1,id:s},[r.port1]),new Promise(((t,o)=>{var a;const l=setTimeout((()=>{delete i[s],o("Timeout while waiting on backend")}),null!==(a=null==e?void 0:e.timeout)&&void 0!==a?a:n.timeout);i[s]={id:s,channel:r,resolve:t,timeout:l}}))},terminate:function(){o.terminate()},close:function(){return l.threads("Closing the HTTP VFS channel"),o.postMessage({msg:"close"}),new Promise(((t,r)=>{var i;const s=setTimeout((()=>{r("Timeout while waiting on backend")}),null!==(i=null==e?void 0:e.timeout)&&void 0!==i?i:n.timeout);o.onmessage=({data:e})=>{l.threads("Received close response",e),"ack"===e.msg&&void 0===e.id&&(t(),clearTimeout(s))}}))}}}(null==e?void 0:e.httpOptions),i=[],s=[];for(let r=0;r<(null!==(t=e.workers)&&void 0!==t?t:1);r++)s.push(d({http:o}).then((e=>i.push({worker:e,busy:null}))).then((()=>{})));return yield Promise.all(s),{open:e=>Promise.all(i.map((t=>t.worker("open",{filename:"file:"+encodeURI(e),vfs:"http"})))).then((()=>{})),close:()=>Promise.all(i.map((e=>e.worker.close()))).then((()=>o.close())),exec:function(e,t,r){return u(this,void 0,void 0,(function*(){let o;do{o=i.find((e=>!e.busy)),o||(yield Promise.race(i.map((e=>e.busy))).catch((()=>{})))}while(!o);const n=[];return o.busy=o.worker("exec",{sql:e,bind:t,rowMode:null==r?void 0:r.rowMode,callback:e=>{e.row&&n.push(e)}}).then((()=>{})).finally((()=>{if(!o)throw new Error("Lost worker pool");o.busy=null})),yield o.busy,n}))}}}))}var p,f=r(6414),y=r(8641),m=r(8738),v=r(7358),g=r(3614),w=r(8929),x=r(7885),b=r(9646),_=r(9619),k=r(7571),P=r(928),E=r(7195);const S="undefined"!=typeof OL_MBTILES_DEBUG&&OL_MBTILES_DEBUG||void 0!==(null===(p=void 0==={env:{RLAYERS_DEBUG:void 0}}?void 0:{RLAYERS_DEBUG:void 0})||void 0===p?void 0:p.OL_MBTILES_DEBUG)&&{RLAYERS_DEBUG:void 0}.OL_MBTILES_DEBUG?console.debug.bind(console):()=>{},M={jpg:"raster",png:"raster",webp:"raster",pbf:"vector",mvt:"vector"};function T(e){var t,r,o;return{workers:null!==(t=null==e?void 0:e.sqlWorkers)&&void 0!==t?t:4,httpOptions:{maxPageSize:null!==(r=null==e?void 0:e.maxSqlPageSize)&&void 0!==r?r:4096,cacheSize:null!==(o=null==e?void 0:e.sqlCacheSize)&&void 0!==o?o:4096}}}function j(e){const t=h(T(e)).then((t=>t.open(e.url).then((()=>t))));return t.then((e=>e.exec("SELECT name,value FROM metadata"))).then((e=>{if(e&&e.length){const t=e.reduce(((e,t)=>(e[t.row[0]]=t.row[1],e)),{});return S("Loaded metadata",t),t}throw new Error("Could not load metadata")})).then((r=>{var o,n,i,s,a,l,u,d;const c=Object.assign({},e),h=null===(n=null===(o=r.format)||void 0===o?void 0:o.toLowerCase)||void 0===n?void 0:n.call(o);M[h]||console.warn("Unknown tile format",h),c.projection=null!==(i=e.projection)&&void 0!==i?i:"EPSG:3857",c.attributions=null!==(s=r.attribution)&&void 0!==s?s:r.description,c.maxZoom=null!==(a=e.maxZoom)&&void 0!==a?a:+r.maxzoom,c.minZoom=null!==(l=e.minZoom)&&void 0!==l?l:+r.minzoom;const p=null===(d=null===(u=(0,f.U2)(c.projection))||void 0===u?void 0:u.getExtent)||void 0===d?void 0:d.call(u),v=r.bounds,g=v?(0,f.$A)(v.split(",").map((e=>+e)),"EPSG:4326",c.projection):p;if("raster"===M[h]){if(void 0===c.maxZoom||void 0===c.minZoom||void 0===p)throw new Error("Cannot determine tilegrid, need minZoom, maxZoom");const e=[(0,y.dz)(p)/256];for(let t=1;t<=c.maxZoom;t++)e.push(e[e.length-1]/2);c.tileGrid=new m.Z({origin:[p[0],p[2]],extent:g,minZoom:c.minZoom,resolutions:e})}else c.extent=p;return c.pool=t,c.url=e.url,c}))}class C extends b.ZP{constructor(e){var t,r,o;super(),e=e||{},this.dataProjection=new _.Z({code:"",units:"tile-pixels"}),this.featureClass_=e.featureClass?e.featureClass:k.ZP,this.geometryName_=null!==(t=e.geometryName)&&void 0!==t?t:"Geometry",this.layers_=null!==(r=e.layers)&&void 0!==r?r:null,this.idProperty_=e.idProperty,this.extent=null!==(o=e.extent)&&void 0!==o?o:4096,this.supportedMediaTypes=["application/vnd-mbtiles"]}readFeature(e,t){const r=e.properties;let o;this.idProperty_?(o=r[this.idProperty_],delete r[this.idProperty_]):o=e.id;const n=e.loadGeometry(),i=[],s=[],a=C.MBTypes[n.length>1?"multi":"mono"][e.type];if("Unknown"===a)return null;for(let e=0;e<n.length;e++)if(0!=n[e].length){for(let t=0;t<n[e].length;t++)i.push(n[e][t].x,n[e][t].y);s.push(i.length)}const l=new this.featureClass_(a,i,s,r,o);return l.transform(null==t?void 0:t.dataProjection),l}readFeatures(e,t){const r=this.layers_,o=[],n=new w.VectorTile(new g(x.ZP.ungzip(e)));t=this.adaptOptions(t);const i=(0,f.U2)(null==t?void 0:t.dataProjection),s=null==t?void 0:t.extent;if(!i||!t||!s)throw new Error("Cannot determine the projection/extent");i.setWorldExtent(s),i.setExtent([0,0,this.extent,this.extent]),t.dataProjection=i;for(const e of Object.keys(n.layers)){if(r&&!r.includes(e))continue;const i=n.layers[e];for(let r=0;r<i.length;r++){const n=i.feature(r),s=this.readFeature(n,t);s.getProperties().layer=e,o.push(s)}}return o}readProjection(){return this.dataProjection}}C.MBTypes={mono:["Unknown","Point","LineString","Polygon"],multi:["Unknown","MultiPoint","MultiLineString","Polygon"]};class O extends v.Z{constructor(e){var t;if(void 0===e.url&&void 0===e.pool)throw new Error("Must specify url");super(Object.assign(Object.assign({},e),{url:void 0,format:new C({layers:e.layers}),tileUrlFunction:t=>`${e.url}#${t[0]}:${t[1]}:${t[2]}`})),this.setTileLoadFunction(this.tileLoader.bind(this)),this.pool=null!==(t=e.pool)&&void 0!==t?t:h(T(e)).then((t=>t.open(e.url).then((()=>t))))}tileLoader(e,t){const r=e;S("loading tile",[r.tileCoord[0],r.tileCoord[1],r.tileCoord[2]]),r.setLoader(((e,t,o)=>{this.pool.then((e=>e.exec("SELECT tile_data FROM tiles WHERE zoom_level = $zoom AND tile_column = $col AND tile_row = $row",{$zoom:r.tileCoord[0],$col:r.tileCoord[1],$row:(1<<r.tileCoord[0])-1-r.tileCoord[2]}))).then((t=>{if(t&&t[0]&&t[0].row[0]){const n=r.getFormat().readFeatures(t[0].row[0],{extent:e,featureProjection:o});return r.setFeatures(n),void r.onLoad(n,o)}throw new Error(`No data for ${r.tileCoord}`)})).catch((e=>{S(e),r.onError()}))}))}disposeInternal(){return this.pool.then((e=>e.close()))}}class L extends P.Z{constructor(e){var t;if(void 0===e.url&&void 0===e.pool)throw new Error("Must specify url");super(Object.assign(Object.assign({},e),{url:void 0,tileUrlFunction:t=>`${e.url}#${t[0]}:${t[1]}:${t[2]}`})),this.setTileLoadFunction(this.tileLoader.bind(this)),this.pool=null!==(t=e.pool)&&void 0!==t?t:h(T(e)).then((t=>t.open(e.url).then((()=>t))))}tileLoader(e,t){S("loading tile",[e.tileCoord[0],e.tileCoord[1],e.tileCoord[2]]);const r=e.getImage();this.pool.then((t=>t.exec("SELECT tile_data FROM tiles WHERE zoom_level = $zoom AND tile_column = $col AND tile_row = $row",{$zoom:e.tileCoord[0],$col:e.tileCoord[1],$row:(1<<e.tileCoord[0])-1-e.tileCoord[2]}))).then((t=>{if(!(t&&t[0]&&t[0].row[0]instanceof Uint8Array))throw new Error(`No data for ${e.tileCoord}`);{const e=new Blob([t[0].row[0]]),o=URL.createObjectURL(e);r.src=o}})).catch((t=>{S(t),e.setState(E.Z.ERROR)}))}disposeInternal(){return this.pool.then((e=>e.close()))}}},9646:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i,fI:()=>s});var o=r(4187),n=r(6414);const i=class{constructor(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}getReadOptions(e,t){if(t){let r=t.dataProjection?(0,n.U2)(t.dataProjection):this.readProjection(e);t.extent&&r&&"tile-pixels"===r.getUnits()&&(r=(0,n.U2)(r),r.setWorldExtent(t.extent)),t={dataProjection:r,featureProjection:t.featureProjection}}return this.adaptOptions(t)}adaptOptions(e){return Object.assign({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},e)}getType(){return(0,o.O3)()}readFeature(e,t){return(0,o.O3)()}readFeatures(e,t){return(0,o.O3)()}readGeometry(e,t){return(0,o.O3)()}readProjection(e){return(0,o.O3)()}writeFeature(e,t){return(0,o.O3)()}writeFeatures(e,t){return(0,o.O3)()}writeGeometry(e,t){return(0,o.O3)()}};function s(e,t,r){const o=r?(0,n.U2)(r.featureProjection):null,i=r?(0,n.U2)(r.dataProjection):null;let s;if(s=o&&i&&!(0,n.OP)(o,i)?(t?e.clone():e).transform(t?o:i,t?i:o):e,t&&r&&void 0!==r.decimals){const t=Math.pow(10,r.decimals),o=function(e){for(let r=0,o=e.length;r<o;++r)e[r]=Math.round(e[r]*t)/t;return e};s===e&&(s=e.clone()),s.applyTransform(o)}return s}}}]);