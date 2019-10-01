import styled from 'styled-components';

interface gridParentProps {
  gridTemplateColumns: number,
  bgColor: string,
}

export default styled.div<gridParentProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridTemplateColumns}, 1fr);
  grid-gap: 0 25px;
  background-color: ${(props) => props.bgColor ? props.bgColor : 'transparent'};
`;

