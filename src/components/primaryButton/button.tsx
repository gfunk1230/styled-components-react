import styled from "styled-components";
import { buttonResize, buttonColor } from "./mixins";

interface primaryButtonProps {
  radius?: string,
  size?: string,
  color?: string,
}

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1;
  text-align: center
  vertical-align: middle;
  color: rgb(255, 255, 255);
  border-width: 0px;
  outline: none;
  font-size: 13px;
  width: 115px;
`;


export const PrimaryButton = styled.button<primaryButtonProps>`
  border-radius: ${props => (props.radius ? props.radius : "5px")};
  ${props => props.size && buttonResize(props.size)};
  ${props => props.color && buttonColor(props.color)};
`;
