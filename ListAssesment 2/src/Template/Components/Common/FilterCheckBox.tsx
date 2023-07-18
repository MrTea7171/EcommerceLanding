import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexBox } from "../CommonStyles/FlexStyles";

interface FilterCheckBoxProps {
  isColor?: boolean;
  value: string;
  onCheck: (value: string, add: boolean) => void;
  isChecked: boolean;
  isReverse?: boolean;
  justifyContent?:
    | "space-between"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-evenly";
}

const FilterCheckBox = ({
  isColor,
  value,
  onCheck,
  isChecked,
  isReverse,
  justifyContent,
}: FilterCheckBoxProps) => {
  const [checked, setChecked] = React.useState(isChecked);
  useEffect(() => {
    onCheck(value, checked);
  }, [checked]);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <FlexBox
      display="flex"
      alignItems="center"
      flexDirection={isReverse ? "row-reverse" : "row"}
      justifyContent={justifyContent ?? "flex-start"}
    >
      <CheckboxInputStyle
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      {isColor && <ColorBox color={value !== "Burgundy" ? value : "#800020"} />}
      <CheckboxLabelStyle>{value}</CheckboxLabelStyle>
    </FlexBox>
  );
};

const CheckboxLabelStyle = styled.label`
  margin-left: 0.5rem;
  background-color: #fff;
  font-size: 0.75rem;
  font-weight: 300;
`;

const CheckboxInputStyle = styled.input`
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  accent-color: #000;
  font-size: 0.7rem;
`;

const ColorBox = styled.div<{
  color: string;
}>`
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-left: 0.5rem;
`;

export default FilterCheckBox;
