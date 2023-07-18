import { Fragment } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import ProductPromotion from "./ProductPromotion";
import { getRandomNumber } from "../../GlobalFunctions/generatePosition";
import { useSelector } from "react-redux";
import { productData } from "../../Redux/DataObject";

const ProductList = () => {
  let bannerPosition = getRandomNumber();
  const ProductData = useSelector((state: any) => state.ProductData);
  return (
    <CardContainer>
      {ProductData.map((product: productData, index: number) => {
        const showBanner = bannerPosition === index + 1;
        if (showBanner) {
          bannerPosition = index + 1 + getRandomNumber();
        }
        return (
          <Fragment key={index}>
            <ProductCard key={"productcard" + index} productDetails={product} />
            {showBanner && <ProductPromotion key={"promotion" + index} />}
          </Fragment>
        );
      })}
    </CardContainer>
  );
};
const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 1200px) {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;

export default ProductList;
