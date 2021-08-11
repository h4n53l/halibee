import { StyledButton } from "./buttonStyle";

export default function Button({ content, onClick }) {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

