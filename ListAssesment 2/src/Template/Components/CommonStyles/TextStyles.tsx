import styled from "styled-components";
import colors from "./colors";

export const TextChip = styled.span<{
  backgroundColor?: string;
  color?: string;
}>`
  display: inline-block;
  padding: 0.25rem;
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.backgroundColor || "white"};
  border-radius: 5px;
  font-size: 0.7rem;
`;

export const TextBox = styled.span<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  textAlign?: string;
  textDecoration?: string;
}>`
  ${(props) => {
    let properties = "";
    if (props.fontSize) {
      properties += `font-size: ${props.fontSize};`;
    }
    if (props.fontWeight) {
      properties += `font-weight: ${props.fontWeight};`;
    }
    if (props.color) {
      if (props.color in colors)
        properties += `color: ${colors[props.color as keyof typeof colors]};`;
      else properties += `color: ${props.color};`;
    }
    if (props.backgroundColor) {
      if (props.backgroundColor in colors)
        properties += `background-color: ${
          colors[props.backgroundColor as keyof typeof colors]
        };`;
      else properties += `background-color: ${props.backgroundColor};`;
    }

    if (props.textAlign) {
      properties += `text-align: ${props.textAlign};`;
    }
    if (props.textDecoration) {
      properties += `text-decoration: ${props.textDecoration};`;
    }
    return properties;
  }}
`;
