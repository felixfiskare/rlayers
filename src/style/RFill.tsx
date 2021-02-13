import React from 'react';
import {ColorLike} from 'ol/colorlike';
import {Fill} from 'ol/style';

import {default as RStyleBase, RStyleBaseProps} from './RStyleBase';
import debug from '../debug';

export interface RFillProps extends RStyleBaseProps {
    /** color */
    color?: ColorLike;
}

/** A component for adding a fill to a Style */
export default class RFill extends RStyleBase<RFillProps> {
    static classProps = ['color'];
    ol: Fill;

    create(props: RFillProps): Fill {
        this.classProps = RFill.classProps;
        return new Fill(props);
    }

    set(ol: Fill): void {
        if (this.context.setFill) return this.context.setFill(ol);
        /* istanbul ignore next */
        throw new Error('Parent element does not support a fill');
    }
}
