/*! For license information please see 7061.bundle.js.LICENSE.txt */
(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[7061],{645:(t,e)=>{e.read=function(t,e,i,r,s){var n,o,a=8*s-r-1,h=(1<<a)-1,u=h>>1,f=-7,p=i?s-1:0,l=i?-1:1,d=t[e+p];for(p+=l,n=d&(1<<-f)-1,d>>=-f,f+=a;f>0;n=256*n+t[e+p],p+=l,f-=8);for(o=n&(1<<-f)-1,n>>=-f,f+=r;f>0;o=256*o+t[e+p],p+=l,f-=8);if(0===n)n=1-u;else{if(n===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,r),n-=u}return(d?-1:1)*o*Math.pow(2,n-r)},e.write=function(t,e,i,r,s,n){var o,a,h,u=8*n-s-1,f=(1<<u)-1,p=f>>1,l=23===s?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:n-1,c=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=f):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),(e+=o+p>=1?l/h:l*Math.pow(2,1-p))*h>=2&&(o++,h/=2),o+p>=f?(a=0,o=f):o+p>=1?(a=(e*h-1)*Math.pow(2,s),o+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,s),o=0));s>=8;t[i+d]=255&a,d+=c,a/=256,s-=8);for(o=o<<s|a,u+=s;u>0;t[i+d]=255&o,d+=c,o/=256,u-=8);t[i+d-c]|=128*y}},3614:(t,e,i)=>{"use strict";t.exports=s;var r=i(645);function s(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}s.Varint=0,s.Fixed64=1,s.Bytes=2,s.Fixed32=5;var n=4294967296,o=1/n,a="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function h(t){return t.type===s.Bytes?t.readVarint()+t.pos:t.pos+1}function u(t,e,i){return i?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function f(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));i.realloc(r);for(var s=i.pos-1;s>=t;s--)i.buf[s+r]=i.buf[s]}function p(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function l(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function d(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function c(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function y(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function w(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function g(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function v(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function F(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function _(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function b(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function x(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}s.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=7&r,t(s,e,this),this.pos===n&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=_(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=x(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=_(this.buf,this.pos)+_(this.buf,this.pos+4)*n;return this.pos+=8,t},readSFixed64:function(){var t=_(this.buf,this.pos)+x(this.buf,this.pos+4)*n;return this.pos+=8,t},readFloat:function(){var t=r.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=r.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,i,r=this.buf;return e=127&(i=r[this.pos++]),i<128?e:(e|=(127&(i=r[this.pos++]))<<7,i<128?e:(e|=(127&(i=r[this.pos++]))<<14,i<128?e:(e|=(127&(i=r[this.pos++]))<<21,i<128?e:function(t,e,i){var r,s,n=i.buf;if(r=(112&(s=n[i.pos++]))>>4,s<128)return u(t,r,e);if(r|=(127&(s=n[i.pos++]))<<3,s<128)return u(t,r,e);if(r|=(127&(s=n[i.pos++]))<<10,s<128)return u(t,r,e);if(r|=(127&(s=n[i.pos++]))<<17,s<128)return u(t,r,e);if(r|=(127&(s=n[i.pos++]))<<24,s<128)return u(t,r,e);if(r|=(1&(s=n[i.pos++]))<<31,s<128)return u(t,r,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(i=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&a?function(t,e,i){return a.decode(t.subarray(e,i))}(this.buf,e,t):function(t,e,i){for(var r="",s=e;s<i;){var n,o,a,h=t[s],u=null,f=h>239?4:h>223?3:h>191?2:1;if(s+f>i)break;1===f?h<128&&(u=h):2===f?128==(192&(n=t[s+1]))&&(u=(31&h)<<6|63&n)<=127&&(u=null):3===f?(n=t[s+1],o=t[s+2],128==(192&n)&&128==(192&o)&&((u=(15&h)<<12|(63&n)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===f&&(n=t[s+1],o=t[s+2],a=t[s+3],128==(192&n)&&128==(192&o)&&128==(192&a)&&((u=(15&h)<<18|(63&n)<<12|(63&o)<<6|63&a)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,f=1):u>65535&&(u-=65536,r+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),r+=String.fromCharCode(u),s+=f}return r}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==s.Bytes)return t.push(this.readVarint(e));var i=h(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==s.Bytes)return t.push(this.readSVarint());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==s.Bytes)return t.push(this.readBoolean());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==s.Bytes)return t.push(this.readFloat());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==s.Bytes)return t.push(this.readDouble());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==s.Bytes)return t.push(this.readFixed32());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==s.Bytes)return t.push(this.readSFixed32());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==s.Bytes)return t.push(this.readFixed64());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==s.Bytes)return t.push(this.readSFixed64());var e=h(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===s.Varint)for(;this.buf[this.pos++]>127;);else if(e===s.Bytes)this.pos=this.readVarint()+this.pos;else if(e===s.Fixed32)this.pos+=4;else{if(e!==s.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var i=new Uint8Array(e);i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),b(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),b(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),b(this.buf,-1&t,this.pos),b(this.buf,Math.floor(t*o),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),b(this.buf,-1&t,this.pos),b(this.buf,Math.floor(t*o),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var i,r;if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos]=127&t}(i,0,e),function(t,e){var i=(7&t)<<4;e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(r,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,i){for(var r,s,n=0;n<e.length;n++){if((r=e.charCodeAt(n))>55295&&r<57344){if(!s){r>56319||n+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):s=r;continue}if(r<56320){t[i++]=239,t[i++]=191,t[i++]=189,s=r;continue}r=s-55296<<10|r-56320|65536,s=null}else s&&(t[i++]=239,t[i++]=191,t[i++]=189,s=null);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return i}(this.buf,t,this.pos);var i=this.pos-e;i>=128&&f(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),r.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),r.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++;var i=this.pos;t(e,this);var r=this.pos-i;r>=128&&f(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,s.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,p,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,l,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,y,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,d,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,c,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,w,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,g,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,v,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,F,e)},writeBytesField:function(t,e){this.writeTag(t,s.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,s.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,s.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,s.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,s.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,s.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,s.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,s.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,s.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,s.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}},7061:(t,e,i)=>{"use strict";i.d(e,{Z:()=>P});var r,s=i(9646),n=i(2450),o=i(2083),a=i(7403),h=i(6259),u=i(5063),f=i(3614),p=i(188),l=i(3083),d=i(9619),c=i(7571),y=i(8375),w=i(9515),g=i(6414),v=i(974),F=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});function _(t,e,i){if(3===t){var r={keys:[],values:[],features:[]},s=i.readVarint()+i.pos;i.readFields(b,r,s),r.length=r.features.length,r.length&&(e[r.name]=r)}}function b(t,e,i){if(15===t)e.version=i.readVarint();else if(1===t)e.name=i.readString();else if(5===t)e.extent=i.readVarint();else if(2===t)e.features.push(i.pos);else if(3===t)e.keys.push(i.readString());else if(4===t){for(var r=null,s=i.readVarint()+i.pos;i.pos<s;)r=1==(t=i.readVarint()>>3)?i.readString():2===t?i.readFloat():3===t?i.readDouble():4===t?i.readVarint64():5===t?i.readVarint():6===t?i.readSVarint():7===t?i.readBoolean():null;e.values.push(r)}}function x(t,e,i){if(1==t)e.id=i.readVarint();else if(2==t)for(var r=i.readVarint()+i.pos;i.pos<r;){var s=e.layer.keys[i.readVarint()],n=e.layer.values[i.readVarint()];e.properties[s]=n}else 3==t?e.type=i.readVarint():4==t&&(e.geometry=i.pos)}function V(t,e,i){t.pos=e.features[i];var r=t.readVarint()+t.pos,s={layer:e,type:0,properties:{}};return t.readFields(x,s,r),s}const P=function(t){function e(e){var i=t.call(this)||this,r=e||{};return i.dataProjection=new d.Z({code:"",units:y.ZP.TILE_PIXELS}),i.featureClass_=r.featureClass?r.featureClass:c.ZP,i.geometryName_=r.geometryName,i.layerName_=r.layerName?r.layerName:"layer",i.layers_=r.layers?r.layers:null,i.idProperty_=r.idProperty,i.supportedMediaTypes=["application/vnd.mapbox-vector-tile","application/x-protobuf"],i}return F(e,t),e.prototype.readRawGeometry_=function(t,e,i,r){t.pos=e.geometry;for(var s=t.readVarint()+t.pos,n=1,o=0,a=0,h=0,u=0,f=0;t.pos<s;){if(!o){var p=t.readVarint();n=7&p,o=p>>3}o--,1===n||2===n?(a+=t.readSVarint(),h+=t.readSVarint(),1===n&&u>f&&(r.push(u),f=u),i.push(a,h),u+=2):7===n?u>f&&(i.push(i[f],i[f+1]),u+=2):(0,w.h)(!1,59)}u>f&&(r.push(u),f=u)},e.prototype.createFeature_=function(t,e,i){var r,f=e.type;if(0===f)return null;var d,y=e.properties;this.idProperty_?(d=y[this.idProperty_],delete y[this.idProperty_]):d=e.id,y[this.layerName_]=e.layer.name;var w=[],g=[];this.readRawGeometry_(t,e,w,g);var F=function(t,e){var i;return 1===t?i=1===e?"Point":"MultiPoint":2===t?i=1===e?"LineString":"MultiLineString":3===t&&(i="Polygon"),i}(f,g.length);if(this.featureClass_===c.ZP)(r=new this.featureClass_(F,w,g,y,d)).transform(i.dataProjection);else{var _=void 0;if("Polygon"==F){var b=(0,v.Q3)(w,g);_=b.length>1?new u.Z(w,n.Z.XY,b):new l.ZP(w,n.Z.XY,g)}else _="Point"===F?new p.Z(w,n.Z.XY):"LineString"===F?new o.Z(w,n.Z.XY):"MultiPoint"===F?new h.Z(w,n.Z.XY):"MultiLineString"===F?new a.Z(w,n.Z.XY,g):null;r=new(0,this.featureClass_),this.geometryName_&&r.setGeometryName(this.geometryName_);var x=(0,s.fI)(_,!1,i);r.setGeometry(x),void 0!==d&&r.setId(d),r.setProperties(y,!0)}return r},e.prototype.getType=function(){return"arraybuffer"},e.prototype.readFeatures=function(t,e){var i=this.layers_,r=this.adaptOptions(e),s=(0,g.U2)(r.dataProjection);s.setWorldExtent(r.extent),r.dataProjection=s;var n=new f(t),o=n.readFields(_,{}),a=[];for(var h in o)if(!i||-1!=i.indexOf(h)){var u=o[h],p=u?[0,0,u.extent,u.extent]:null;s.setExtent(p);for(var l=0,d=u.length;l<d;++l){var c=V(n,u,l),y=this.createFeature_(n,c,r);null!==y&&a.push(y)}}return a},e.prototype.readProjection=function(t){return this.dataProjection},e.prototype.setLayers=function(t){this.layers_=t},e}(s.ZP)},7571:(t,e,i)=>{"use strict";i.d(e,{ZP:()=>d});var r=i(6101),s=i(8641),n=i(5537),o=i(3448),a=i(6414),h=i(9405),u=i(1071),f=i(6442),p=(0,r.Ue)(),l=function(){function t(t,e,i,r,s){this.styleFunction,this.extent_,this.id_=s,this.type_=t,this.flatCoordinates_=e,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i,this.properties_=r}return t.prototype.get=function(t){return this.properties_[t]},t.prototype.getExtent=function(){return this.extent_||(this.extent_="Point"===this.type_?(0,s.HK)(this.flatCoordinates_):(0,s.GN)(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_},t.prototype.getFlatInteriorPoint=function(){if(!this.flatInteriorPoints_){var t=(0,s.qg)(this.getExtent());this.flatInteriorPoints_=(0,o.X)(this.flatCoordinates_,0,this.ends_,2,t,0)}return this.flatInteriorPoints_},t.prototype.getFlatInteriorPoints=function(){if(!this.flatInteriorPoints_){var t=(0,u.E)(this.flatCoordinates_,0,this.ends_,2);this.flatInteriorPoints_=(0,o.U)(this.flatCoordinates_,0,this.ends_,2,t)}return this.flatInteriorPoints_},t.prototype.getFlatMidpoint=function(){return this.flatMidpoints_||(this.flatMidpoints_=(0,h.WW)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_},t.prototype.getFlatMidpoints=function(){if(!this.flatMidpoints_){this.flatMidpoints_=[];for(var t=this.flatCoordinates_,e=0,i=this.ends_,r=0,s=i.length;r<s;++r){var o=i[r],a=(0,h.WW)(t,e,o,2,.5);(0,n.l7)(this.flatMidpoints_,a),e=o}}return this.flatMidpoints_},t.prototype.getId=function(){return this.id_},t.prototype.getOrientedFlatCoordinates=function(){return this.flatCoordinates_},t.prototype.getGeometry=function(){return this},t.prototype.getSimplifiedGeometry=function(t){return this},t.prototype.simplifyTransformed=function(t,e){return this},t.prototype.getProperties=function(){return this.properties_},t.prototype.getStride=function(){return 2},t.prototype.getStyleFunction=function(){return this.styleFunction},t.prototype.getType=function(){return this.type_},t.prototype.transform=function(t){var e=(t=(0,a.U2)(t)).getExtent(),i=t.getWorldExtent();if(e&&i){var n=(0,s.Cr)(i)/(0,s.Cr)(e);(0,r.qC)(p,i[0],i[3],n,-n,0,0,0),(0,f.vT)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,p,this.flatCoordinates_)}},t.prototype.getEnds=function(){return this.ends_},t}();l.prototype.getEndss=l.prototype.getEnds,l.prototype.getFlatCoordinates=l.prototype.getOrientedFlatCoordinates;const d=l}}]);