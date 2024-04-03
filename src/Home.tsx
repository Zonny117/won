import Intro from '@components/Intro';
import Projects from '@components/Projects';
import styled from 'styled-components';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from './redux/hooks';

const Wrap = styled.div`
  &.preventScroll {
    height: 100vh;
    height: 100svh;
    overflow: hidden;
  }

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
  const animationEnd = useAppSelector(state => state.root.introReducer);
  const [width, setWidth] = useState<number>(0);
  const horizonRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({ target: horizonRef });
  const spring = useSpring(scrollYProgress, { bounce: 0 });
  const x = useTransform(spring, [0, 1], ['0px', `${width}px`]);

  // 스크롤 가로값은 컨텐츠 뷰포트 가로길이 - 컨텐츠 총 가로길이(인트로와 프로젝트의 가로값의 합)
  // 스크롤바 가로값은 17정도 되는데 이는 컨텐츠 오른쪽 여백으로 조절하자
  useEffect(() => {
    if (animationEnd) {
      let sum = 0;
      widthRef.current.forEach(i => {
        sum += i!.clientWidth;
        setWidth(window.innerWidth - sum);
      });
    }
  }, [animationEnd]);

  return (
    <Wrap className={animationEnd ? '' : 'preventScroll'}>
      <div id="horizontal" ref={horizonRef}>
        <div id="sticky">
          <motion.div id="contents" style={{ x }}>
            <Intro ref={t => (widthRef.current[0] = t)} />
            <Projects
              ref={t => (widthRef.current[1] = t)}
              scrollYProgress={scrollYProgress}
            />
          </motion.div>
        </div>
      </div>
      <div>인포박스</div>
    </Wrap>
  );
}

export default Home;
