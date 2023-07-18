import styled from "styled-components";

export const BasicBox = styled.div<{
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  backgroundColor?: string;
  overflow?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  boxSizing?: string;
  fontSize?: string;
}>`
  ${(props) => {
    let properties = "";
    if (props.padding) {
      properties += `padding: ${props.padding};`;
    } else {
      if (props.paddingTop) {
        properties += `padding-top: ${props.paddingTop};`;
      }
      if (props.paddingBottom) {
        properties += `padding-bottom: ${props.paddingBottom};`;
      }
      if (props.paddingLeft) {
        properties += `padding-left: ${props.paddingLeft};`;
      }
      if (props.paddingRight) {
        properties += `padding-right: ${props.paddingRight};`;
      }
    }
    if (props.margin) {
      properties += `margin: ${props.margin};`;
    } else {
      if (props.marginTop) {
        properties += `margin-top: ${props.marginTop};`;
      }
      if (props.marginBottom) {
        properties += `margin-bottom: ${props.marginBottom};`;
      }
      if (props.marginLeft) {
        properties += `margin-left: ${props.marginLeft};`;
      }
      if (props.marginRight) {
        properties += `margin-right: ${props.marginRight};`;
      }
    }
    if (props.backgroundColor) {
      properties += `background-color: ${props.backgroundColor};`;
    }
    if (props.overflow) {
      properties += `overflow: ${props.overflow};`;
    }
    if (props.width) {
      properties += `width: ${props.width};`;
    }
    if (props.height) {
      properties += `height: ${props.height};`;
    }
    if (props.border) {
      properties += `border: ${props.border};`;
    } else {
      if (props.borderLeft) {
        properties += `border-left: ${props.borderLeft};`;
      }
      if (props.borderRight) {
        properties += `border-right: ${props.borderRight};`;
      }
      if (props.borderTop) {
        properties += `border-top: ${props.borderTop};`;
      }
      if (props.borderBottom) {
        properties += `border-bottom: ${props.borderBottom};`;
      }
    }

    if (props.borderRadius) {
      properties += `border-radius: ${props.borderRadius};`;
    }
    if (props.boxSizing) {
      properties += `box-sizing: ${props.boxSizing};`;
    }
    if (props.fontSize) {
      properties += `font-size: ${props.fontSize};`;
    }
    return properties;
  }}
`;
