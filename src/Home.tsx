import Intro from '@components/Intro';
import Projects from '@components/Projects';
import styled from 'styled-components';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Wrap = styled.div`
  #horizontal {
    position: relative;
    height: 300vh;
    height: 300svh;
  }

  #sticky {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    height: 100vh;
    height: 100svh;
    overflow: hidden;
  }

  #contents {
    display: flex;
  }
`;

function Home() {
  const horizonRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: horizonRef });
  const spring = useSpring(scrollYProgress, { bounce: 0 });

  // 스크롤 가로값은 컨텐츠 뷰포트 가로길이 - 컨텐츠 총 가로길이
  // 스크롤바 가로값은 17정도 되는데 이는 여백으로 조절하자
  const scrollWidth = window.innerWidth - 3100 - 17;
  const x = useTransform(spring, [0, 1], ['0px', `${scrollWidth}px`]);

  return (
    <Wrap>
      <div id="horizontal" ref={horizonRef}>
        <div id="sticky">
          <motion.div id="contents" style={{ x }}>
            <Intro />
            <Projects />
          </motion.div>
        </div>
      </div>
    </Wrap>
  );
}

export default Home;
