import React, { FunctionComponent } from 'react';
import styled, { css, ThemedCssFunction, DefaultTheme, StyledInterface, ThemedBaseStyledInterface, AnyStyledComponent } from 'styled-components';
import styles from './styles';

interface variantsProps {
  flush: boolean
}

const variants = Object.keys(styles).reduce((result, key) => {
    result[key as keyof typeof styles] = (css<variantsProps>`
      ${styles[key as keyof typeof styles]};
      padding-bottom: ${props => props.flush && 0};
    `) as unknown as ThemedCssFunction<DefaultTheme>;
    return result;
  }, {} as Record<string, ThemedCssFunction<DefaultTheme>>);
  
  const Components: Record<string, StyledInterface> = [
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
    result[key as keyof typeof styles] = (styled(key as AnyStyledComponent)`
      ${props => variants[props.variant] || variants['body-1-bold']}
    `) as unknown as ThemedBaseStyledInterface<any>;
    return result;
  }, {} as Record<string, StyledInterface>);
  
  const Typography = ({ component, ...props } : any) => {
    const TypeEl = (Components[component]  || Components.span) as unknown as FunctionComponent;
  
    return <TypeEl {...props} />;
  }

  export default Typography;