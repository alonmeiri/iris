import React, { ReactNode, SFC } from 'react';
import TooltipOverlay from '../TooltipOverlay/TooltipOverlay';
import InfoIcon from '../icons/circle-info.svg';
import {
    TooltipAnnotationIconStyled,
    IconWrapper,
} from './TooltipAnnotationIconStyled';

interface Props {
    children?: ReactNode;
    labelType?: 'textBlock' | 'inline' | 'noPosition'; // DEPRECATE?
    tooltipText: string;
    size?: 'md' | 'lg'; // DEPRECATE?
    tooltipProps?: {};
}

const TooltipAnnotationIcon: SFC<Props> = ({
    children,
    labelType = 'inline',
    size = 'md',
    tooltipText,
    tooltipProps,
    ...props
}) => (
    <TooltipAnnotationIconStyled {...props}>
        {children}
        <IconWrapper labelType={labelType}>
            <TooltipOverlay
                {...tooltipProps}
                tooltipText={tooltipText}
                triggerOnClick={false}
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <InfoIcon />
            </TooltipOverlay>
        </IconWrapper>
    </TooltipAnnotationIconStyled>
);

export default TooltipAnnotationIcon;
