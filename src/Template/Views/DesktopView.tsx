/*
    This file contains the desktop view of the template page.
*/

import styled from "styled-components";
import HeaderContainer from "../Containers/Desktop/HeaderContainer";
import ProductsContainer from "../Containers/Desktop/ProductsContainer";
import FilterSidebar from "../Components/Desktop/FilterSidebar";
import { TextBox } from "../Components/CommonStyles/TextStyles";
import { FlexBox } from "../Components/CommonStyles/FlexStyles";
import { BasicBox } from "../Components/CommonStyles/BoxStyles";

const DesktopView = () => {
  return (
    <>
      {/* header starts */}
      <HeaderContainer />
      {/* header ends */}

      <BasicBox padding="2rem" width="100vw">
        {/* page bar starts */}
        <BasicBox width="100%" padding="1rem" fontSize="0.8rem">
          <TextBox color="secondary" fontWeight="300">
            Home
          </TextBox>
          <TextBox color="secondary" fontWeight="300">
            &nbsp; &gt; &nbsp;
          </TextBox>
          <TextBox>Watches</TextBox>
        </BasicBox>
        {/* page bar ends */}
        {/* main starts */}
        <StyledMain>
          {/* filter sidebar starts */}
          <FlexBox flex={1.5}>
            <FilterSidebar />
          </FlexBox>
          {/* filter sidebar ends */}
          {/* products container starts */}
          <FlexBox flex={4}>
            <ProductsContainer />
          </FlexBox>
          {/* products container ends */}
        </StyledMain>
        {/* main ends */}
      </BasicBox>
    </>
  );
};

export default DesktopView;

const StyledMain = styled.main`
  display: flex;
`;
