import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryText};

  &:hover {
    text-decoration: underline;
  }
`;
