import { useState } from "react";
import styled from "styled-components";
import { TextBox, TextChip } from "../CommonStyles/TextStyles";
import { GridStyle } from "../CommonStyles/GridStyles";
import NewIcon from "/assets/new-icon.png";
import CertificateIcon from "/assets/certified-icon.png";
import EditorChoice from "/assets/editors-choice-icon.png";
import HeartOutlinedIcon from "/assets/heart.png";
import HeartFilledIcon from "/assets/heart-filled.png";
import { BasicBox } from "../CommonStyles/BoxStyles";
import { themeColors } from "../CommonStyles/colors";
import { FlexBox } from "../CommonStyles/FlexStyles";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { productData } from "../../Redux/DataObject";

const ProductCard = ({ productDetails }: { productDetails: productData }) => {
  const [productLiked, setProductLiked] = useState<boolean>(false);
  return (
    <Card>
      {/* Product Header */}
      <BasicBox height="20px">
        <FlexBox display={"flex"} justifyContent="space-between">
          <TextChip
            color={themeColors.primary}
            backgroundColor={themeColors.background}
          >
            Pre-Owned
          </TextChip>
          <GridStyle gridTemplateColumns="repeat(3,1fr)" gap={"0.5rem"}>
            <img src={NewIcon} alt="NewIcon" height={"20px"} />
            <img src={CertificateIcon} alt="Certificate Icon" height={"20px"} />
            <EditorChoiceBox>
              <LazyLoadImage
                src={EditorChoice}
                alt="Editor Icon"
                height={"20px"}
              />
              <EditorChoiceTag color={themeColors.primary}>
                <TextBox fontSize="12px">Editor's Choice</TextBox>
              </EditorChoiceTag>
            </EditorChoiceBox>
          </GridStyle>
        </FlexBox>
      </BasicBox>

      {/* Product Images */}
      <LazyLoadComponent>
        <MultiImage></MultiImage>
      </LazyLoadComponent>

      {/* Product Body */}
      <CardBody>
        <BasicBox borderBottom="1px solid rgba(0,0,0,0.1)">
          <FlexBox display="flex" alignItems="center" flexDirection="column">
            {/* Product Details */}
            <article className="productDetails">
              <ProductDetailsGrid
                gridTemplateRows="repeat(4,25px)"
                gap={"0rem"}
                placeItems="center"
              >
                <ProductTitle>
                  {productDetails.brands.toUpperCase()}
                </ProductTitle>
                <TextBox fontSize="0.8rem" textAlign="center">
                  {productDetails.name}
                </TextBox>
                <p>
                  <TextBox fontSize="0.9rem">
                    &#x20B9; {productDetails.price}
                  </TextBox>
                  &nbsp;
                  <TextBox fontSize="0.8rem" color={themeColors.primary}>
                    {productDetails.discounted}%Off
                  </TextBox>
                </p>
                <TextBox
                  textDecoration="line-through"
                  fontSize="0.75rem"
                  color="secondary"
                >
                  &#x20B9; {productDetails.original_price}
                </TextBox>
              </ProductDetailsGrid>
            </article>
            {/* Product Sizes  */}
            <article className="productSizes">
              <BasicBox>
                <MobileGridStyle
                  gridTemplateRows="repeat(4,25px)"
                  gap={"0rem"}
                  placeItems="center"
                >
                  <TextBox fontWeight="600">Available In</TextBox>
                  <TextBox fontWeight="300">
                    {productDetails.case_size.length} Sizes
                  </TextBox>
                </MobileGridStyle>
              </BasicBox>
            </article>
            <BasicBox margin="10px 0px">
              <TextBox fontWeight="300" fontSize="13px">
                EMI Available
              </TextBox>
            </BasicBox>
          </FlexBox>
        </BasicBox>
      </CardBody>

      {/* Product Footer */}
      <BasicBox padding="0.5rem">
        <FlexBox display={"flex"} justifyContent="space-between">
          <div>
            <LazyLoadImage
              src={"/assets/fast-shipping-icon.png"}
              alt="FastShippingIcon"
              height={"16px"}
            />
          </div>
          <FlexBox display={"flex"} justifyContent="space-between">
            <LazyLoadComponent>
              <LikeLogo
                backgroundStartImage={
                  productLiked ? HeartFilledIcon : HeartOutlinedIcon
                }
                backgroundEndImage={HeartFilledIcon}
                onClick={() => {
                  setProductLiked(!productLiked);
                }}
              />
            </LazyLoadComponent>
            <TextBox fontSize="0.8rem" fontWeight="300">
              20 Likes
            </TextBox>
          </FlexBox>
        </FlexBox>
      </BasicBox>
    </Card>
  );
};

//Card Layout
const Card = styled.div`
  background-color: white;
  padding: 1rem;
  padding-bottom: 0px;
  color: black;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

//Card Body
const CardBody = styled.div`
  & .productSizes {
    display: none;
  }
  @media screen and (min-width: 769px) {
    &:hover {
      & .productSizes {
        display: block;
      }
      & .productDetails {
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & .productSizes {
      display: block;
    }
  }
`;

const MultiImage = styled.div`
  cursor: pointer;
  background-image: url("/assets/product-main-image-desktop.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 250px;

  @media screen and (min-width: 769px) {
    &:hover {
      background-image: url("/assets/product-hover-img-desktop.png");
    }
  }

  @media screen and (max-width: 768px) {
    background-size: cover;
    margin: 0.5rem 0rem;
  }
`;

//Card Footer
const LikeLogo = styled.div<{
  backgroundStartImage: string;
  backgroundEndImage: string;
}>`
  cursor: pointer;
  background-image: url(${({ backgroundStartImage }) => backgroundStartImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;

  &:hover {
    background-image: url(${({ backgroundEndImage }) => backgroundEndImage});
  }
`;

const EditorChoiceTag = styled(TextChip)`
  display: none;
  position: absolute;
  top: 33px;
  right: 0px;
  width: 97px;
  padding: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: -15px;
    right: 2px;
    border: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }
`;

const EditorChoiceBox = styled.div`
  &:hover {
    position: relative;
  }
  &:hover > ${EditorChoiceTag} {
    display: block;
  }
`;

const ProductDetailsGrid = styled(GridStyle)`
  @media screen and (max-width: 768px) {
    grid-template-rows: 30px 35px 20px 20px;
    font-size: 0.7rem !important;
  }
`;

const MobileGridStyle = styled(GridStyle)`
  @media screen and (max-width: 768px) {
    grid-template-rows: 20px 15px;
    font-size: 0.7rem;
  }
`;

const ProductTitle = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0px;
  color: ${themeColors.primary};
`;

export default ProductCard;
