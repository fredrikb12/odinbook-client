import styled from "styled-components";

export const StyledPost = styled.article`
  margin-bottom: 20px;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.postBg};
  color: ${({ theme }) => theme.primaryText};
  font-size: 1rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
`;
