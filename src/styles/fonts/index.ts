/* eslint-disable sort-keys */
import {css} from 'styled-components';
import * as fontFamily from './fontFamilies';
import * as fontSize from './fontSizes';
import * as fontWeight from './fontWeights';

const t0Base = css`
  ${fontFamily.fontFamilyTitle};
  ${fontSize.fontSizeT0};
`;

const t1Base = css`
  ${fontFamily.fontFamilyTitle};
  ${fontSize.fontSizeT1};
`;

const t2Base = css`
  ${fontFamily.fontFamilyTitle};
  ${fontSize.fontSizeT2};
`;

const d0Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeD0};
`;

const d1Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeD1};
`;

const d2Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeD2};
`;

const h0Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeH0};
`;

const h1Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeH1};
`;

const h2Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeH2};
`;

const h3Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeH3};
`;

const h4Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeH4};
`;

const b1Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeB1};
`;

const b2Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeB2};
`;

const b3Base = css`
  ${fontFamily.fontFamilyDefault};
  ${fontSize.fontSizeB3};
`;

export const d0 = {
  bold: css`
    ${d0Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${d0Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${d0Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${d0Base};
    ${fontWeight.fontWeightRegular};
  `,
  light: css`
    ${d0Base};
    ${fontWeight.fontWeightLight};
  `,
};

export const t0 = {
  bold: css`
    ${t0Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${t0Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${t0Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${t0Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const t1 = {
  bold: css`
    ${t1Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${t1Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${t1Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${t1Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const t2 = {
  bold: css`
    ${t2Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${t2Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${t2Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${t2Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const d1 = {
  bold: css`
    ${d1Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${d1Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${d1Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${d1Base};
    ${fontWeight.fontWeightRegular};
  `,
  light: css`
    ${d1Base};
    ${fontWeight.fontWeightLight};
  `,
};

export const d2 = {
  bold: css`
    ${d2Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${d2Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${d2Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${d2Base};
    ${fontWeight.fontWeightRegular};
  `,
  light: css`
    ${d2Base};
    ${fontWeight.fontWeightLight};
  `,
};

export const h0 = {
  bold: css`
    ${h0Base};
    ${fontWeight.fontWeightBold};
  `,
  medium: css`
    ${h0Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${h0Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const h1 = {
  bold: css`
    ${h1Base};
    ${fontWeight.fontWeightBold};
  `,
  medium: css`
    ${h1Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${h1Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const h2 = {
  bold: css`
    ${h2Base};
    ${fontWeight.fontWeightBold};
  `,
  semiBold: css`
    ${h2Base};
    ${fontWeight.fontWeightSemiBold};
  `,
  medium: css`
    ${h2Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${h2Base};
    ${fontWeight.fontWeightRegular};
  `,
  light: css`
    ${h2Base};
    ${fontWeight.fontWeightLight};
  `,
};

export const h3 = {
  bold: css`
    ${h3Base};
    ${fontWeight.fontWeightBold};
  `,
  medium: css`
    ${h3Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${h3Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const h4 = {
  bold: css`
    ${h4Base};
    ${fontWeight.fontWeightBold};
  `,
  medium: css`
    ${h4Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${h4Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const b1 = {
  medium: css`
    ${b1Base};
    ${fontWeight.fontWeightMedium};
  `,
  regular: css`
    ${b1Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const b2 = {
  regular: css`
    ${b2Base};
    ${fontWeight.fontWeightRegular};
  `,
};

export const b3 = {
  regular: css`
    ${b3Base};
    ${fontWeight.fontWeightRegular};
  `,
};
