import styled from "styled-components";


const StyledHero = styled.header`
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 69px);
  background: url(${props => props.img})center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default StyledHero;