"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5522],{7737:(e,r,t)=>{function n(e,r){let t=e.length-r,n=0;do{for(let t=r;t>0;t--)e[n+r]+=e[n],n++;t-=r}while(t>0)}function i(e,r,t){let n=0,i=e.length;const o=i/t;for(;i>r;){for(let t=r;t>0;--t)e[n+r]+=e[n],++n;i-=r}const l=e.slice();for(let r=0;r<o;++r)for(let n=0;n<t;++n)e[t*r+n]=l[(t-n-1)*o+r]}t.d(r,{Z:()=>o});class o{async decode(e,r){const t=await this.decodeBlock(r),o=e.Predictor||1;if(1!==o){const r=!e.StripOffsets;return function(e,r,t,o,l,s){if(!r||1===r)return e;for(let e=0;e<l.length;++e){if(l[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[e]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const a=l[0]/8,c=2===s?1:l.length;for(let s=0;s<o&&!(s*c*t*a>=e.byteLength);++s){let o;if(2===r){switch(l[0]){case 8:o=new Uint8Array(e,s*c*t*a,c*t*a);break;case 16:o=new Uint16Array(e,s*c*t*a,c*t*a/2);break;case 32:o=new Uint32Array(e,s*c*t*a,c*t*a/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}n(o,c)}else 3===r&&(o=new Uint8Array(e,s*c*t*a,c*t*a),i(o,c,a))}return e}(t,o,r?e.TileWidth:e.ImageWidth,r?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return t}}},5522:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var n=t(7885),i=t(7737);class o extends i.Z{decodeBlock(e){return(0,n.rr)(new Uint8Array(e)).buffer}}}}]);