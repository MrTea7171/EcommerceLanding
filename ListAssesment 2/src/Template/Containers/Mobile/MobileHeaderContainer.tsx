import styled from "styled-components";
import { FlexBox } from "../../Components/CommonStyles/FlexStyles";
import { BasicBox } from "../../Components/CommonStyles/BoxStyles";
import BackArrow from "/assets/arrow.png";
import HeartOutlinedIcon from "/assets/heart-top.png";
import CartIcon from "/assets/cart-icon.png";

const MobileHeaderContainer = () => {
  return (
    <Header>
      <BasicBox width="100%">
        <FlexBox
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <BasicBox>
            <img src={BackArrow} alt="Back Arrow" height={"16px"} />
          </BasicBox>
          <FlexBox display="flex">
            <UserIconStyle>
              <img src={HeartOutlinedIcon} alt="Heart Icon" />
            </UserIconStyle>
            <CartIconStyle items={10}>
              <img src={CartIcon} alt="Cart Icon" />
            </CartIconStyle>
          </FlexBox>
        </FlexBox>
      </BasicBox>
    </Header>
  );
};

export default MobileHeaderContainer;

const Header = styled.header`
  display: flex;
  width: 100vw;
  position: sticky;
  top: 0;
  padding: 0.5rem 1.5rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const UserIconStyle = styled.div`
  height: 40px;
  padding: 0.5rem;

  & img {
    height: 100%;
  }
`;

const CartIconStyle = styled(UserIconStyle)<{
  items: number;
}>`
  position: relative;
  &:before {
    content: "${(props) => props.items}";
    position: absolute;
    top: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
    background-color: rgb(200, 137, 77);
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
