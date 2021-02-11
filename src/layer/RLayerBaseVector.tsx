import React from 'react';
import {Map, Feature, MapBrowserEvent} from 'ol';
import {VectorSourceEvent} from 'ol/source/Vector';
import RenderEvent from 'ol/render/Event';
import BaseVector from 'ol/layer/BaseVector';
import {Vector as SourceVector} from 'ol/source';
import FeatureFormat from 'ol/format/Feature';
import {StyleLike} from 'ol/style/Style';

import {RVectorContext, RVectorContextType} from '../context';
import {default as RLayer, RLayerProps} from './RLayer';
import {default as RFeature} from '../RFeature';

import debug from '../debug';

export interface RLayerBaseVectorProps extends RLayerProps {
    /** URL for loading features, requires `format` */
    url?: string;
    /** Width of the frame around the viewport that shall be rendered too
     * so that the symbols, whose center is outside of the viewport,
     * but are partially inside, can be rendered */
    renderBuffer?: number;
    /** OpenLayers features that will be loaded */
    features?: Feature[];
    /** Format of the features when `url` is used */
    format?: FeatureFormat;
    /** OpenLayers default style for features without `style` */
    style?: StyleLike;
    /** Default onClick handler for loaded features */
    onClick?: (e: MapBrowserEvent) => boolean | void;
    /** Called when a feature is added, not called for features
     * already present at creation, ie loaded via `features`
     */
    onAddFeature?: (e: VectorSourceEvent) => boolean | void;
    /** Default onPointerMove handler for loaded features */
    onPointerMove?: (e: MapBrowserEvent) => boolean | void;
    /** Default onPointerEnter handler for loaded features */
    onPointerEnter?: (e: MapBrowserEvent) => boolean | void;
    /** Default onPointerLeave handler for loaded features */
    onPointerLeave?: (e: MapBrowserEvent) => boolean | void;
    onPostRender?: (e: RenderEvent) => boolean | void;
    onPreRender?: (e: RenderEvent) => boolean | void;
}

export default class RLayerBaseVector<P extends RLayerBaseVectorProps> extends RLayer<P> {
    ol: BaseVector;
    source: SourceVector;
    context: Map;

    constructor(props: Readonly<P>, context: React.Context<Map>) {
        super(props, context);
        RFeature.initEventRelay(this.context);
    }

    newFeature = (e: VectorSourceEvent): void => {
        if (e.feature) this.attachNewFeatureHandlers([e.feature]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((e as any).features) this.attachNewFeatureHandlers((e as any).features);
    };

    attachNewFeatureHandlers(RFeatures: Feature[]): void {
        for (const ev of ['Click', 'PointerMove', 'PointerEnter', 'PointerLeave'])
            if (this.props['on' + ev])
                for (const f of RFeatures) f.on(ev.toLowerCase(), this.eventRelay);
    }

    attachExistingFeatureHandlers(prevProps?: P): void {
        for (const ev of ['Click', 'PointerMove', 'PointerEnter', 'PointerLeave'])
            if (
                (!prevProps || this.props['on' + ev] !== prevProps['on' + ev]) &&
                this.props['on' + ev]
            )
                for (const f of this.source.getFeatures()) f.on(ev.toLowerCase(), this.eventRelay);
    }

    eventRelay = (e: MapBrowserEvent): boolean => {
        // TODO fix this loop
        for (const ev of ['Click', 'PointerMove', 'PointerEnter', 'PointerLeave'])
            if (e.type === ev.toLowerCase() && this.props['on' + ev])
                return this.props['on' + ev](e) !== false;
        return true;
    };

    componentWillUnmount(): void {
        for (const ev of ['Click', 'PointerMove', 'PointerEnter', 'PointerLeave'])
            this.source.forEachFeature((f) => {
                f.un(ev.toLowerCase(), this.eventRelay);
                return false;
            });
    }

    refresh(prevProps?: P): void {
        super.refresh();
        this.attachExistingFeatureHandlers(prevProps);
        if (!prevProps || prevProps.style !== this.props.style) this.ol.setStyle(this.props.style);
    }

    render(): JSX.Element {
        return (
            <RVectorContext.Provider
                value={
                    {map: this.context, layer: this.ol, source: this.source} as RVectorContextType
                }
            >
                {this.props.children}
            </RVectorContext.Provider>
        );
    }
}