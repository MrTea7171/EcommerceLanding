import ProductBanner from "../../Components/Common/ProductBanner";
import { BasicBox } from "../../Components/CommonStyles/BoxStyles";
import ProductList from "../../Components/Common/ProductList";
import { FlexBox } from "../../Components/CommonStyles/FlexStyles";
import { TextBox } from "../../Components/CommonStyles/TextStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MobileProductContainer = () => {
  return (
    <BasicBox width="100%">
      {/* Page Details */}
      <FlexBox display="flex" alignItems="center">
        <LazyLoadImage
          src={"/assets/breadcrumb-icon.png"}
          alt="breadcrumb-icon"
          height="10px"
        />
        &nbsp;
        <LazyLoadImage
          src={"/assets/chevron-right-solid.svg"}
          alt="chevron-right-icon"
          height="10px"
        />
        &nbsp;
        <TextBox fontWeight="300" fontSize="0.85rem">
          Watches
        </TextBox>
      </FlexBox>
      {/*  Watch Titles */}
      <BasicBox width="100%" margin="1rem 0rem">
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
      </BasicBox>
      {/* Product Banner */}
      <ProductBanner />
      <ProductList />
    </BasicBox>
  );
};

export default MobileProductContainer;
