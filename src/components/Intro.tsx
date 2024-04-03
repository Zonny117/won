import { useAppDispatch } from '@/redux/hooks';
import { setIntroEnd } from '@/redux/reducers';
import { Variants, cubicBezier, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #000;

  .introMsg {
    color: #fff;
  }

  .title {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 400px;
    font-family: 'Morganite';
    letter-spacing: 20px;
  }
`;

const Intro = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const dispatch = useAppDispatch();

  const intro: Variants = {
    init: {
      minWidth: '100%',
    },
    end: {
      minWidth: '50%',
      transition: {
        delay: 1,
        duration: 1.5,
        ease: cubicBezier(0.76, 0, 0.24, 1),
      },
    },
  };

  return (
    <Wrap
      ref={ref}
      variants={intro}
      initial={'init'}
      animate={'end'}
      onAnimationComplete={() => {
        dispatch(setIntroEnd(true));
      }}
    >
      <div className="introMsg">THE ONE WHO</div>
      <div className="title">WON</div>
      <div className="introMsg">THE STRUGGLE</div>
    </Wrap>
  );
});

export default Intro;
