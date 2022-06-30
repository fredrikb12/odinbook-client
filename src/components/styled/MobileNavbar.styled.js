import styled from "styled-components";

export const StyledMobileNav = styled.nav`
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.2rem;
  position: absolute;
  color: white;
  width: 60vw;
  height: clamp(300px, 45vh, 800px);
  background-color: #424345;
  z-index: 2;
  padding: 20px;
  gap: 20px;
  top: 0;
  left: 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);
`;

export const StyledMobileHeader = styled.header`
  display: block;
  position: fixed;
  z-index: 2;

  @media (min-width: 501px) {
    display: none;
  }
`;
