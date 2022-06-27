import styled from "styled-components";

export const StyledNewPost = styled.form`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.postBg};
  border-radius: 12px;

  border: 1px solid black;
  margin-bottom: 20px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);

  textarea {
    width: 100%;
    resize: vertical;
    background-color: #363636;
    outline: none;
    padding: 10px;
    color: ${({ theme }) => theme.primaryText};
    line-height: 1.1rem;
  }
`;
