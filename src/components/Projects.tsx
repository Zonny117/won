import { MotionValue } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

type Props = {
  scrollYProgress: MotionValue<number>;
};

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  height: 100svh;
  background-color: pink;

  div {
    position: relative;
    width: 500px;
    height: 100%;
  }
`;

const dummy = Array.from({ length: 5 }).fill(0);

const Projects = React.forwardRef<HTMLDivElement, Props>(
  ({ scrollYProgress }: Props, ref) => {
    return (
      <Wrap ref={ref}>
        {dummy.map((_i, idx) => {
          const percent = 100 / (idx + 1);
          const discount = (100 - Math.floor(percent)) * 0.01;
          console.log(discount, scrollYProgress);

          return <div key={idx}></div>;
        })}
      </Wrap>
    );
  }
);

export default Projects;
