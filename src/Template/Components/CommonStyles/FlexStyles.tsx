import styled from "styled-components";
export const FlexBox = styled.div<{
  display?: "flex" | "inline-flex";
  flex?: number;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
}>`
  ${(props) => {
    let properties = "";
    if (props.display) {
      properties += `display: ${props.display};`;
    }
    if (props.flex) {
      properties += `flex: ${props.flex};`;
    }
    if (props.flexDirection) {
      properties += `flex-direction: ${props.flexDirection};`;
    }
    if (props.justifyContent) {
      properties += `justify-content: ${props.justifyContent};`;
    }
    if (props.alignItems) {
      properties += `align-items: ${props.alignItems};`;
    }
    if (props.flexWrap) {
      properties += `flex-wrap: ${props.flexWrap};`;
    }
    if (props.alignContent) {
      properties += `align-content: ${props.alignContent};`;
    }
    return properties;
  }}
`;
