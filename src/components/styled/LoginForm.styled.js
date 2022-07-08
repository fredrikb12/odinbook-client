import styled from "styled-components";

export const StyledLoginForm = styled.form`
  color: ${({ theme }) => theme.primaryText};
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  font-size: 1.3rem;
  border-left: 5px solid white;
  border-right: 5px solid white;
  border-radius: ${({ theme }) => theme.loginBorderRadius};
  background-color: ${({ theme }) => theme.postBg};
  width: clamp(250px, 60vw, 400px);
  padding: 30px 20px;

  & button {
    width: 100%;
  }

  & input {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
  }

  @media (min-width: 1400px) {
    width: clamp(400px, 60vw, 520px);
  }
`;
