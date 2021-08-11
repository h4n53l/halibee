import { StyledInput } from "./inputStyle";

export default function Input({ type, placeholder, value, onChange }) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
