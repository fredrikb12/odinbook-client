import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 120px;
  padding: 15px;
  font-size: 1.5rem;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
