import { createGlobalStyle } from 'styled-components';
import resets from './resets';
import fonts from './fonts';

export default createGlobalStyle`
  ${fonts}
  ${resets}
`;
