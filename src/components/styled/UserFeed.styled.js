import styled from "styled-components";
import { StyledPostFeed } from "./PostFeed.styled";

export const StyledUserFeed = styled(StyledPostFeed)`
  gap: 10px;
  background-color: ${({ theme }) => theme.postBg};
  padding: 20px;
  margin-top: 0;
  min-height: 90vh;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.05);
    padding: 20px;
  }
`;
