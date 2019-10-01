import { css } from 'styled-components';

// Breakpoint sizes
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((obj, platform) => {
  obj[platform] = (...args:string[]) => css`
    @media (min-width: ${sizes[platform] / 16}rem) {
      ${css(...args)}
    }
  `
  return obj
}, {});