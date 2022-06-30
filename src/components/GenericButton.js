import { StyledGenericButton } from "./styled/GenericButton.styled";

function GenericButton({ children, ...props }) {
  return <StyledGenericButton {...props}>{children}</StyledGenericButton>;
}

export default GenericButton;
