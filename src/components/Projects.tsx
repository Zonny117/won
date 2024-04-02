import { MotionValue, useTransform, motion } from 'framer-motion';
import styled from 'styled-components';

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

  span {
    display: block;
    background-color: #000;
    width: 100%;
    height: 100%;
  }
`;

const dummy = Array.from({ length: 5 }).fill(0);

function Span({
  scrollYProgress,
  opa,
}: {
  scrollYProgress: MotionValue<number>;
  opa: number;
}) {
  const opacitiy = useTransform(scrollYProgress, [0, opa], [0, 1]);

  return (
    <motion.span
      style={{
        opacity: opacitiy,
      }}
    ></motion.span>
  );
}

function Projects({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <Wrap>
      {dummy.map((_i, idx) => {
        const percent = 100 / (idx + 1);
        const discount = (100 - Math.floor(percent)) * 0.01;

        console.log(discount);

        return (
          <div key={idx}>
            <Span scrollYProgress={scrollYProgress} opa={discount}></Span>
          </div>
        );
      })}
    </Wrap>
  );
}

export default Projects;
