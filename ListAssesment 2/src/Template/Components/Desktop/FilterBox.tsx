import styled from "styled-components";
import { BasicBox } from "../CommonStyles/BoxStyles";
import { FlexBox } from "../CommonStyles/FlexStyles";
import { TextBox } from "../CommonStyles/TextStyles";
import FilterCheckBox from "../Common/FilterCheckBox";

interface IFilterBoxProps {
  title: string;
  values: string[];
  onCheck: (value: string, add: boolean) => void;
  filterBy: string[] | undefined;
}
const FilterBox = ({ title, values, onCheck, filterBy }: IFilterBoxProps) => {
  const isMultiple = title === "Case Size";
  const isColor = ["Dial Colours", "Strap Colours"].includes(title);
  return (
    <BasicBox paddingBottom="0.5rem" borderBottom={`1px solid rgba(0,0,0,0.1)`}>
      <FlexBox display="flex" justifyContent="space-between">
        <TextBox fontWeight="500" fontSize="0.85rem">
          {title}
        </TextBox>
        <FiterMenuButton> &#8211;</FiterMenuButton>
      </FlexBox>
      <BasicBox marginTop="10px">
        <FlexBox display={isMultiple ? "flex" : undefined} flexWrap="wrap">
          {values.map((value, index) => {
            return (
              <BasicBox
                margin={
                  isMultiple
                    ? "0.5rem 0.45rem 0.5rem 0rem"
                    : "1rem 0.5rem 0.75rem 0rem"
                }
                padding={isMultiple ? "0.2rem 0.2rem" : undefined}
                border={isMultiple ? "2px dotted rgba(0,0,0,0.2)" : undefined}
                width={isMultiple ? "90px" : undefined}
              >
                <FilterCheckBox
                  isColor={isColor}
                  value={value}
                  onCheck={onCheck}
                  isChecked={(filterBy && filterBy.includes(value)) ?? false}
                />
              </BasicBox>
            );
          })}
        </FlexBox>
      </BasicBox>
    </BasicBox>
  );
};

export default FilterBox;

const FiterMenuButton = styled.button`
  background-color: transparent;
  font-weight: 0.7rem;
  border: none;
`;
