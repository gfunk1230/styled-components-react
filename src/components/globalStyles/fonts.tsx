import { css } from 'styled-components';

export const cdnPath = '../../assets/fonts';

export default css`
  @font-face {
    font-family: grubhubsans-bold;
    font-style: normal;
    font-weight: bold;
    src: url('${cdnPath}/grubhub-sans-bold.woff') format('woff');
  }
`;
