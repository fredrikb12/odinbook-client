import styled from "styled-components";

export const StyledLoginForm = styled.form`
  color: ${({ theme }) => theme.primaryText};
  display: grid;
  grid-template-columns: 1fr;
  padding: 50px;
  gap: 20px;
  font-size: 1.2rem;
  border-left: 5px solid white;
  border-right: 5px solid white;
  border-radius: ${({ theme }) => theme.loginBorderRadius};
  background-color: ${({ theme }) => theme.postBg};

  @media (min-width: 768px) {
    padding: 100px;
    font-size: 1.5rem;

    input {
      padding: 8px 16px;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 150px;
  }

  @media (min-width: 1400px) {
  }
`;
