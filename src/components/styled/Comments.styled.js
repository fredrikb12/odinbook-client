import styled from "styled-components";

export const StyledComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px;

  & {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
