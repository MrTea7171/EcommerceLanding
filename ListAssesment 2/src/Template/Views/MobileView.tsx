import styled from "styled-components";
import FilterSortBar from "../Containers/Mobile/FilterSortBar";
import MobileHeaderContainer from "../Containers/Mobile/MobileHeaderContainer";
import MobileProductContainer from "../Containers/Mobile/MobileProductContainer";

/*
    This file contains the mobile view of the template page.
*/
const MobileView = () => {
  return (
    <>
      <MobileHeaderContainer />
      <Main>
        <MobileProductContainer />
      </Main>
      <FilterSortBar />
    </>
  );
};

export default MobileView;

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  padding: 1rem;
`;
