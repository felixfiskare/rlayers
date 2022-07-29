(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[7635],{1788:(n,e,o)=>{"use strict";o.d(e,{Z:()=>a});var t=o(8081),l=o.n(t),r=o(3645),i=o.n(r)()(l());i.push([n.id,'.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid rgb(179,197,219);\n  background-color: rgba(255,255,255,0.4);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-singlebar-even{\n  background-color: #000000;\n}\n.ol-scale-singlebar-odd{\n  background-color: #ffffff;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-viewport canvas {\n  all: unset;\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n.ol-attribution a {\n  color: rgba(0,60,136,0.7);\n  text-decoration: none;\n}\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n  font-size: 12px;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution button {\n  flex-shrink: 0;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 2px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const a=i},2031:(n,e,o)=>{"use strict";var t=o(3379),l=o.n(t),r=o(7795),i=o.n(r),a=o(569),s=o.n(a),c=o(3565),p=o.n(c),m=o(9216),b=o.n(m),d=o(4589),u=o.n(d),g=o(1788),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=b(),l()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},8338:n=>{n.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' version='1.1' height='64' width='64' style='shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;' viewBox='0 0 222.14 392.275' x='0px' y='0px' fill-rule='evenodd' clip-rule='evenodd'%3e %3cdefs%3e %3clinearGradient id='gradient' x2='1' y2='1'%3e %3cstop offset='0%25' stop-color='%23447799' /%3e %3cstop offset='50%25' stop-color='%23224488' /%3e %3cstop offset='100%25' stop-color='%23112266' /%3e %3c/linearGradient%3e %3c/defs%3e %3cg%3e %3cpath fill='url(%23gradient) %23447799' d='M111.07 0c-61.34,0 -111.07,49.73 -111.07,111.07 0,70.61 56.28,148.74 102.39,198.93 4.68,5.08 12.68,5.08 17.36,0 46.11,-50.19 102.39,-128.32 102.39,-198.93 0,-61.34 -49.73,-111.07 -111.07,-111.07zm0 52.68c32.24,0 58.39,26.14 58.39,58.39 0,32.24 -26.15,58.38 -58.39,58.38 -32.24,0 -58.39,-26.14 -58.39,-58.38 0,-32.25 26.15,-58.39 58.39,-58.39z'/%3e %3c/g%3e %3c/svg%3e"},7635:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>x});var t=o(7294),l=o(6414),r=o(188),i=o(3083),a=(o(2031),o(9854)),s=o(9404),c=o(8338),p=o.n(c);const m=[2.364,48.82],b=[2.295,48.8737],d=[2.355,48.831],u=[2.369,48.853],g=[2.294,48.858];function x(){return t.createElement(a.rO,{className:"example-map",initial:{center:(0,l.mi)(m),zoom:11}},t.createElement(a.H3,null),t.createElement(a.jh,{zIndex:10},t.createElement(a.j$,{geometry:new r.Z((0,l.mi)(b))},t.createElement(s.P_,null,t.createElement(s.JW,{src:p(),anchor:[.5,.8]})),t.createElement(a.Zr,{trigger:"click",className:"example-overlay"},t.createElement("div",{className:"card"},t.createElement("p",{className:"card-header"},t.createElement("strong",null,"Arc de Triomphe")),t.createElement("p",{className:"card-body text-center"},"Popup on click")))),t.createElement(a.j$,{geometry:new i.ZP([[(0,l.mi)(d),(0,l.mi)(u),(0,l.mi)(g),(0,l.mi)(d)]]),onClick:(0,t.useCallback)((n=>n.map.getView().fit(n.target.getGeometry().getExtent(),{duration:250})),[])},t.createElement(s.P_,null,t.createElement(s.c5,{color:"yellow",width:4}),t.createElement(s.X3,{color:"transparent"})),t.createElement(a.Zr,{trigger:"hover",className:"example-overlay"},t.createElement("p",null,t.createElement("strong",null,"Les catacombes")),t.createElement("p",null,t.createElement("em",null,"Popup on hover, pan on click"))))))}}}]);