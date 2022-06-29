import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 0.85rem;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const StyledDeleteButton = styled(StyledButton)`
  background-color: #ff486b;

  &:hover {
    background-color: #c90f34;
  }
`;
