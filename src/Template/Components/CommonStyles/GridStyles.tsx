import styled from "styled-components";

export const GridStyle = styled.div<{
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  placeItems?: string;
  gap: string;
}>`
  display: grid;

  ${(props) => {
    let properties = "";
    if (props.gridTemplateRows) {
      properties = `grid-template-rows: ${props.gridTemplateRows};`;
    }
    if (props.gridTemplateColumns) {
      properties += `grid-template-columns: ${props.gridTemplateColumns};`;
    }
    if (props.placeItems) {
      properties += `place-items: ${props.placeItems};`;
    }
    return properties;
  }}
  gap: ${(props) => props.gap || "0"};
`;
