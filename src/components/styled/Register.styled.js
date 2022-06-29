import styled from "styled-components";

export const StyledRegister = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  width: clamp(250px, 50vw, 800px);
  padding: 30px 20px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.postBg};
  border-radius: ${({ theme }) => theme.loginBorderRadius};
  border-left: 5px solid white;
  border-right: 5px solid white;

  button {
    width: 100%;
    font-size: 1rem;
  }

  button:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.primaryText};
  }

  input {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    gap: 12px;
    padding: 50px;
    font-size: 1.1rem;

    input {
      font-size: 1.05rem;
    }
  }
`;
