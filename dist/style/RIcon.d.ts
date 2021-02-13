import { Icon } from 'ol/style';
import IconOrigin from 'ol/style/IconOrigin';
import { Size } from 'ol/size';
import { Color } from 'ol/color';
import RImage, { RImageProps } from './RImage';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
export interface RIconProps extends RImageProps {
    anchor?: number[];
    anchorXUnits?: IconAnchorUnits;
    anchorYUnits?: IconAnchorUnits;
    color?: Color | string;
    crossOrigin?: null | string;
    img?: HTMLImageElement | HTMLCanvasElement;
    offset?: number[];
    offsetOrigin?: IconOrigin;
    size?: Size;
    imgSize?: Size;
    src?: string;
}
export default class RIcon extends RImage<RIconProps> {
    static classProps: string[];
    ol: Icon;
    create(props: RIconProps): Icon;
}
//# sourceMappingURL=RIcon.d.ts.map