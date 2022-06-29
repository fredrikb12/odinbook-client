import styled from "styled-components";

export const StyledLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 5px solid white;
  border-left: 5px solid white;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  gap: 20px;
  border-radius: ${({ theme }) => theme.loginBorderRadius};
  background-color: ${({ theme }) => theme.postBg};

  & button {
    width: clamp(150px, 20vw, 300px);
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1400px) {
  }
`;
