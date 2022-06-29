import styled from "styled-components";
import { StyledPostFeed } from "./PostFeed.styled";

export const StyledUserFeed = styled(StyledPostFeed)`
  background-color: ${({ theme }) => theme.postBg};
  padding: 40px 20px;
  margin-top: 0;
  min-height: 90vh;
  font-size: 1.1rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.05);
    padding: 20px;
  }

  @media (min-width: 1024px) {
    display: grid;
    width: clamp(700px, 70vw, 1000px);
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 200px;
    gap: 20px;
  }
`;
