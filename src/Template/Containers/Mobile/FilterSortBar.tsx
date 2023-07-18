import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexBox } from "../../Components/CommonStyles/FlexStyles";
import { BasicBox } from "../../Components/CommonStyles/BoxStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SortBox from "../../Components/Mobile/SortBox";
import FilterBox from "../../Components/Mobile/FilterBox";
import { FilterBy } from "../../Data/FilterParams";
import { filterProduct, sortProduct } from "../../Redux/ProductSlice";
import { useDispatch } from "react-redux";

const FilterSortBar = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState<"FILTER" | "SORT" | null>(
    null
  );
  const [sortBy, setSortBy] = useState<
    | "RELEVANCE"
    | "BESTSELLER"
    | "PRICE_DESC"
    | "PRICE_ASC"
    | "NEW_ARRIVAl"
    | "EDITORS_TOP_PICK"
  >("RELEVANCE");

  useEffect(() => {
    dispatch(
      sortProduct({
        sort: sortBy,
      })
    );
  }, [sortBy]);

  const [filterBy, setFilterBy] = useState<FilterBy>({});
  useEffect(() => {
    dispatch(
      filterProduct({
        filter: filterBy,
      })
    );
  }, [filterBy]);

  return (
    <>
      <FilterBar>
        <FlexBox flex={1}>
          <FooterButton
            onClick={() => {
              setShowOptions("SORT");
            }}
          >
            <LazyLoadImage
              src={"/assets/sort-icon.png"}
              alt="sort-icon"
              height="10px"
            />
            &nbsp; Sort
          </FooterButton>
        </FlexBox>
        <BasicBox
          width="1px"
          backgroundColor={"rgba(0,0,0,0.2)"}
          margin="0px 1rem"
        />
        <FlexBox flex={1}>
          <BasicBox>
            <FooterButton
              onClick={() => {
                setShowOptions("FILTER");
              }}
            >
              <LazyLoadImage
                src={"/assets/filter-icon.png"}
                alt="filter-icon"
                height="10px"
              />
              &nbsp; Filter
            </FooterButton>
          </BasicBox>
        </FlexBox>
      </FilterBar>
      {showOptions && (
        <>
          <BackDrop />
          {showOptions === "FILTER" && (
            <FilterBox
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              closeFilterBox={() => {
                setShowOptions(null);
              }}
            />
          )}
          {showOptions === "SORT" && (
            <SortBox
              sortBy={sortBy}
              setSortBy={setSortBy}
              closeSortBox={() => {
                setShowOptions(null);
              }}
            />
          )}
        </>
      )}
    </>
  );
};
const FilterBar = styled.div`
  position: sticky;
  bottom: 0;
  width: 100vw;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const FooterButton = styled.button`
  flex: 1;
  height: 30px;
  width: 100%;
  background-color: white;
  border: none;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0vh;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default FilterSortBar;
