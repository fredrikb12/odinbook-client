import styled from "styled-components";

export const StyledPost = styled.article`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.postBg};
  & > div {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
`;
