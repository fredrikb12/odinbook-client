import styled from "styled-components";

export const StyledPostFeed = styled.main`
  margin: 40px auto;
  width: clamp(300px, 50vw, 1200px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.primaryText};
  /*& > * {
    background-color: ${({ theme }) => theme.postBg};
    border-radius: 12px;
    border: 1px solid black;
    box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.4);
    padding: 12px 8px;
  }*/
`;
