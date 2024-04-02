import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  min-width: 600px;
  height: 100vh;
  height: 100svh;
  background-color: #000;
`;

const Intro = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return <Wrap ref={ref}></Wrap>;
});

export default Intro;
