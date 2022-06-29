import styled from "styled-components";

export const StyledLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 5px solid white;
  border-left: 5px solid white;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
  border-radius: ${({ theme }) => theme.loginBorderRadius};
  background-color: ${({ theme }) => theme.postBg};
  width: clamp(250px, 60vw, 400px);
  padding: 40px;

  @media (min-width: 1024px) {
  }

  @media (min-width: 1400px) {
    width: clamp(400px, 60vw, 520px);
  }
`;
