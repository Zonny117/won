import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  height: 100svh;
  background-color: pink;

  div {
    width: 500px;
    height: 100%;
  }
`;

function Projects() {
  return (
    <Wrap>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrap>
  );
}

export default Projects;
