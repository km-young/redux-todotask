import React from 'react';
import styled from 'styled-components';

export default function Buttons({children, btBgColor, fontSize, width, paddingTop}) {
  return (
    <ButtonStyle
      btBgColor={btBgColor}
      fontSize={fontSize}
      width={width}
      paddingTop={paddingTop}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  border-radius: 10px;
  border: none;
  padding-top: ${(props) => props.paddingTop};
  margin-right: 5px;
  background-color: ${(props) => props.btBgColor};
  filter: drop-shadow(2px 2px 3px);
  &:active{
    filter: drop-shadow(1px 1px 1px);
  }
`;