import styled from "styled-components";
import { FlexBox } from "../CommonStyles/FlexStyles";
import { TextBox } from "../CommonStyles/TextStyles";
import { BasicBox } from "../CommonStyles/BoxStyles";
import { FilterBy, FilterParams } from "../../Data/FilterParams";
import { useState } from "react";
import FilterCheckBox from "../Common/FilterCheckBox";
import SearchIcon from "/assets/search-icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FilterBox = ({
  closeFilterBox,
  filterBy,
  setFilterBy,
}: {
  closeFilterBox: () => void;
  filterBy: FilterBy;
  setFilterBy: React.Dispatch<React.SetStateAction<FilterBy>>;
}) => {
  const filterNames = FilterParams.map((item) => item.title);
  const [selectedFilter, setSelectedFilter] = useState<{
    title: string;
    values: string[];
    filterKey: string;
  }>(FilterParams[0]);

  const [tempFilterBy, setTempFilterBy] = useState<FilterBy>(filterBy);

  const startFilter = () => {
    setFilterBy(tempFilterBy);
  };

  const resetFilter = () => {
    setTempFilterBy({});
  };

  const handleFilter = (
    filterKey: keyof FilterBy,
    value: string,
    add: boolean
  ) => {
    const newFilterBy = { ...tempFilterBy };
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
    setTempFilterBy(newFilterBy);
  };

  return (
    <FilterOptions>
      <BasicBox width="100%" padding="1rem">
        <FlexBox
          display={"flex"}
          justifyContent="space-between"
          alignItems={"baseline"}
        >
          <TextBox fontWeight="600" fontSize="0.85rem">
            Filter
          </TextBox>
          <ClearFilterStyle
            onClick={() => {
              setFilterBy({});
              setTempFilterBy({});
            }}
          >
            Clear All
          </ClearFilterStyle>
        </FlexBox>
      </BasicBox>
      <OptionsBody>
        <FlexBox display="flex">
          <FlexBox flex={2}>
            {filterNames.map((item, index) => {
              return (
                <BasicBox
                  key={item + index}
                  width="100%"
                  backgroundColor={
                    selectedFilter.title !== item ? "#F5F5F6" : "#D6D6D6"
                  }
                  padding="0.89rem"
                  borderTop={index !== 0 ? "1px solid #E0E0E0" : ""}
                  onClick={() => {
                    setSelectedFilter(FilterParams[index]);
                  }}
                >
                  <TextBox fontSize="0.7rem">{item}</TextBox>
                </BasicBox>
              );
            })}
          </FlexBox>
          <FlexBox flex={3}>
            <BasicBox>
              <SearchBox>
                <FlexBox display="flex" alignContent="center">
                  <FlexBox flex={1}>
                    <LazyLoadImage
                      src={SearchIcon}
                      alt="Search Icon"
                      height="16px"
                    />
                  </FlexBox>
                  <FlexBox flex={7}>
                    <input type="text" placeholder="Search..." />
                  </FlexBox>
                </FlexBox>
              </SearchBox>
              {selectedFilter.values.map((item, index) => {
                return (
                  <BasicBox
                    width="100%"
                    padding="0.5rem 1rem"
                    key={item + index}
                  >
                    <FilterCheckBox
                      value={item}
                      onCheck={(value, add) => {
                        handleFilter(
                          selectedFilter.filterKey as keyof FilterBy,
                          value,
                          add
                        );
                      }}
                      isChecked={
                        tempFilterBy[
                          selectedFilter.filterKey as keyof FilterBy
                        ]?.includes(item) ?? false
                      }
                      isReverse={true}
                      justifyContent="space-between"
                    />
                  </BasicBox>
                );
              })}
            </BasicBox>
          </FlexBox>
        </FlexBox>
      </OptionsBody>
      <FilterBar>
        <FooterButton
          onClick={() => {
            resetFilter();
            closeFilterBox();
          }}
        >
          Cancel
        </FooterButton>
        <FooterButton
          className="filter-box"
          onClick={() => {
            startFilter();
            closeFilterBox();
          }}
        >
          Apply
        </FooterButton>
      </FilterBar>
    </FilterOptions>
  );
};

const FilterOptions = styled.div`
  position: fixed;
  top: 0vh;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const OptionsBody = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const FilterBar = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const FooterButton = styled.button`
  padding: 1rem 4rem;
  background-color: white;
  border: none;
  margin: 0px auto;
  border-radius: 10px;
  text-align: center;

  &.filter-box {
    background-color: black;
    color: white;
  }
`;

const ClearFilterStyle = styled.button`
  background-color: transparent;
  font-weight: 0.8rem;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const SearchBox = styled.div`
  width: 230px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-left: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export default FilterBox;
