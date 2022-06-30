import styled from "styled-components";
import { StyledButton } from "./Button.styled";

export const StyledGenericButton = styled(StyledButton)`
  transition: 0.5s;
  &:hover {
    background-color: #0f1112;
    color: #e4e6eb;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 4px 1px;
  }
`;
