import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';

// Breakpoint sizes
const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((obj, platform) => {
  obj[platform] = ((first: TemplateStringsArray, ...args:any[]) => css`
    @media (min-width: ${sizes[platform as keyof typeof sizes]  / 16}rem) {
      ${css(first, ...args)}
    }
  `) as unknown as ThemedCssFunction<DefaultTheme>
  return obj
}, {} as Record<string, ThemedCssFunction<DefaultTheme>>);