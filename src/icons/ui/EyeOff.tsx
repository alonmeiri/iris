import React, { forwardRef, Ref } from 'react';
import { IrisSVGProps } from '../../utils';
export const EyeOff = forwardRef(
  (props: IrisSVGProps, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" ref={ref} {...props}>
      <g fill="#1a2e3b">
        <path d="M10 13a3 3 0 0 0 3-3l-3.33 3z" />
        <path d="M17.19 6.25L15.7 7.59A16.35 16.35 0 0 1 17.78 10c-2.37 3.32-5 5-7.78 5a6.91 6.91 0 0 1-2.2-.37l-1.67 1.49A9 9 0 0 0 10 17c3.65 0 7-2.17 9.83-6.44a1 1 0 0 0 0-1.12 19.65 19.65 0 0 0-2.64-3.19zm2.56-4.91a1 1 0 0 0-1.41-.09L14.8 4.39A9.23 9.23 0 0 0 10 3C6.35 3 3 5.17.17 9.44a1 1 0 0 0 0 1.12 18.51 18.51 0 0 0 3.37 3.85l-3.2 2.84a1 1 0 0 0-.09 1.41A1 1 0 0 0 1 19a1 1 0 0 0 .66-.25l18-16a1 1 0 0 0 .09-1.41zM2.22 10c2.37-3.32 5-5 7.78-5a7.14 7.14 0 0 1 3.21.81l-1.77 1.57A3.06 3.06 0 0 0 10 7a3 3 0 0 0-3 3 3 3 0 0 0 .22 1.13l-2.17 1.93A15.1 15.1 0 0 1 2.22 10z" />
      </g>
    </svg>
  ),
);
