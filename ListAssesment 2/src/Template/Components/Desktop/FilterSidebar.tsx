import styled from "styled-components";
import { TextBox } from "../CommonStyles/TextStyles";
import { BasicBox } from "../CommonStyles/BoxStyles";
import { FlexBox } from "../CommonStyles/FlexStyles";
import FilterImage from "/assets/bars-filter.svg";
import FilterBox from "./FilterBox";
import { FilterBy, FilterParams } from "../../Data/FilterParams";
import { useEffect, useState } from "react";
import { filterProduct } from "../../Redux/ProductSlice";
import { useDispatch } from "react-redux";

const FilterSidebar = () => {
  const [filterBy, setFilterBy] = useState<FilterBy>({});
  const dispatch = useDispatch();
  const handleFilter = (
    filterKey: keyof FilterBy,
    value: string,
    add: boolean
  ) => {
    const newFilterBy = { ...filterBy };
    if (add) {
      if (newFilterBy[filterKey] !== undefined) {
        newFilterBy[filterKey]!.push(value);
      } else {
        newFilterBy[filterKey] = [value];
      }
    }
    if (!add) {
      if (newFilterBy[filterKey]) {
        newFilterBy[filterKey] = newFilterBy[filterKey]!.filter(
          (item) => item !== value
        );
      }
    }
    if (newFilterBy[filterKey]?.length === 0) {
      delete newFilterBy[filterKey];
    }
    setFilterBy(newFilterBy);
  };

  useEffect(() => {
    dispatch(
      filterProduct({
        filter: filterBy,
      })
    );
  }, [filterBy]);

  return (
    <BasicBox padding="1rem">
      <BasicBox>
        <FlexBox display="flex" alignItems={"baseline"}>
          <BasicBox margin="0px 1rem 0px 1px">
            <TextBox fontWeight="600" fontSize="1rem">
              Watches
            </TextBox>
          </BasicBox>
          <TextBox fontWeight="300" fontSize="0.85rem">
            (1150 Items)
          </TextBox>
        </FlexBox>

        <BasicBox
          borderRight={"1px solid rgba(0,0,0,0.1)"}
          paddingRight="2rem"
          marginTop="1rem"
        >
          <FlexBox
            display={"flex"}
            justifyContent="space-between"
            alignItems={"baseline"}
          >
            <FlexBox display="flex" alignItems="center">
              <BasicBox marginRight="5px">
                <img src={FilterImage} alt="filter" height={"11px"} />
              </BasicBox>
              <TextBox fontWeight="500" fontSize="0.85rem">
                Filter
              </TextBox>
            </FlexBox>
            <ClearFilterStyle
              onClick={() => {
                setFilterBy({});
              }}
            >
              Clear All
            </ClearFilterStyle>
          </FlexBox>

          {FilterParams.map((item, index) => {
            return (
              <BasicBox margin={"1rem 0rem"} key={index}>
                <FilterBox
                  title={item.title}
                  values={item.values}
                  onCheck={(value: string, add: boolean) => {
                    handleFilter(item.filterKey, value, add);
                  }}
                  filterBy={filterBy[item.filterKey]}
                />
              </BasicBox>
            );
          })}
        </BasicBox>
      </BasicBox>
    </BasicBox>
  );
};

export default FilterSidebar;

const ClearFilterStyle = styled.button`
  background-color: transparent;
  font-weight: 0.8rem;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  padding: 0;
`;
