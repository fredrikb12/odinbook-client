import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  grid-template-columns: 1fr;
  padding: 20px;
  
  border-radius: 12px;

  @media (min-width: 768px) {
    padding: 80px 60px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
  }

  @media (min-width: 1400px) {
  }
`;
