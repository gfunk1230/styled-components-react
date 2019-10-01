import { css } from 'styled-components';
import { media } from "../utils/mediaQueries";

export default {
    'display-1': css`
      font-size: 56px;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 2rem;

      ${media.phone`
            font-size: 80px;
      `}

      ${media.tablet`
            font-size: 96px;
      `}
    `,
  
    'display-2': css`
      font-size: 48px;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 2rem;
  
      ${media.phone`
        font-size: 70px;
      `}

      ${media.tablet`
        font-size: 64px;
      `}
    `,
  
    'heading-1': css`
      font-size: 32px;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 2rem;
  
      ${media.phone`
        font-size: 40px;
      `}

      ${media.tablet`
        font-size: 48px;
      `}
    `,
  
    'heading-2': css`
      font-size: 28px;
      font-weight: bold;
      line-height: 1.25;
      padding-bottom: 2rem;

      ${media.tablet`
        font-size: 32px;
      `}
    `,

    'body-1-bold': css`
      font-size: 12px;
      font-weight: bold;
      padding-bottom: 2rem;

      ${media.tablet`
        font-size: 18px;
      `}
    `,
  };