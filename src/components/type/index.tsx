import React from 'react';
import styled, { css } from 'styled-components';
import styles from './styles';

const variants = Object.keys(styles).reduce((result, key) => {
    result[key] = css`
      ${styles[key]};
      padding-bottom: ${props => props.flush && 0};
    `;
    return result;
  }, {});
  
  const Components = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'small',
    'li',
    'label',
  ].reduce((result, key) => {
    result[key] = styled(key)`
      ${props => variants[props.variant] || variants['body-1-bold']}
    `;
    return result;
  }, {});
  
  const Typography = ({ component, ...props }) => {
    const TypeEl = Components[component] || Components.span;
  
    return <TypeEl {...props} />;
  }

  export default Typography;