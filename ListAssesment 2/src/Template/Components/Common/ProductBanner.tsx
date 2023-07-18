import { TextBox } from "../CommonStyles/TextStyles";
import styled from "styled-components";
import { FlexBox } from "../CommonStyles/FlexStyles";
import ProductBannerDesktopImage from "/assets/main-banner.png";
import ProductBannerMobileImage from "/assets/main-banner-mobile.png";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ProductBanner = () => {
  return (
    <LazyLoadComponent>
      <StyledBannerContainer>
        <StyledBannerMessage
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <h1>The Great Luxury Watch Sale</h1>
          <p>Upto 70% off* + 40% Additional Retail</p>
          <TextBox textDecoration="underline ">Shop Now</TextBox>
        </StyledBannerMessage>
      </StyledBannerContainer>
    </LazyLoadComponent>
  );
};

const StyledBannerContainer = styled.div`
  width: 100%;
  background-image: url(${ProductBannerDesktopImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 150px;
    width: 100%;
    background-image: url(${ProductBannerMobileImage});
    background-size: cover;
  }
`;

const StyledBannerMessage = styled(FlexBox)`
  position: relative;
  right: 10%;
  top: -5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default ProductBanner;
