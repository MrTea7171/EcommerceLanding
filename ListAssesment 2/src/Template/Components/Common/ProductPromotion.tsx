import { BasicBox } from "../CommonStyles/BoxStyles";
import styled from "styled-components";
import ProductPromotionImage from "/assets/card-banner.png";
import ProductPromotionMobileImage from "/assets/card-banner-mobile.png";

const ProductPromotion = () => {
  return (
    <BasicBox width="100%" height="100%">
      <ProductPromotionContainer />
    </BasicBox>
  );
};

const ProductPromotionContainer = styled.div`
  width: 100%;
  background-image: url(${ProductPromotionImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;

  @media (max-width: 768px) {
    background-image: url(${ProductPromotionMobileImage});
    background-size: cover;
  }
`;

export default ProductPromotion;
