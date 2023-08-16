"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[8105],{8105:(n,o,t)=>{t.r(o),t.d(o,{default:()=>e});const e="import React, {useCallback} from 'react';\nimport {MapBrowserEvent} from 'ol';\nimport {fromLonLat, toLonLat} from 'ol/proj';\nimport 'ol/ol.css';\nimport 'rlayers/control/layers.css';\n\nimport {RMap, ROSM, RControl} from 'rlayers';\nimport {RView} from 'rlayers/RMap';\n\nconst origin = [2.364, 48.82];\nconst initial: RView = {center: fromLonLat(origin), zoom: 11};\n\nexport default function Controls(): JSX.Element {\n    const [loc, setLoc] = React.useState(origin);\n    const [view, setView] = React.useState(initial);\n    return (\n        <React.Fragment>\n            <RMap\n                className='example-map'\n                initial={initial}\n                view={[view, setView]}\n                noDefaultControls={true}\n                onClick={useCallback((e: MapBrowserEvent<UIEvent>) => {\n                    const coords = e.map.getCoordinateFromPixel(e.pixel);\n                    const lonlat = toLonLat(coords);\n                    setLoc(lonlat);\n                }, [])}\n            >\n                <ROSM />\n                <RControl.RScaleLine />\n                <RControl.RAttribution />\n                <RControl.RZoom />\n                <RControl.RZoomSlider />\n                <RControl.RFullScreen\n                    // A custom-looking full-screen control\n                    // Take a look at index.html and example.css\n                    className='example-fullscreen'\n                    source='fullscreen'\n                    label='&#x6269;'\n                    labelActive='&#x564f;'\n                />\n                {/* A control that centers the map on the last clicked point\n                 * without modifying the current zoom level */}\n                <RControl.RCustom className='example-control'>\n                    <button onClick={() => setView({...view, center: fromLonLat(loc)})}>o</button>\n                </RControl.RCustom>\n            </RMap>\n            <div className='mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow'>\n                <p>\n                    Last click location is{' '}\n                    <strong>{`${loc[1].toFixed(3)} : ${loc[0].toFixed(3)}`}</strong>\n                </p>\n            </div>\n        </React.Fragment>\n    );\n}\n"}}]);