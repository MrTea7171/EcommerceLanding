import styled from "styled-components";
import { TextBox } from "../../Components/CommonStyles/TextStyles";
import { BasicBox } from "../../Components/CommonStyles/BoxStyles";
import { themeColors } from "../../Components/CommonStyles/colors";
import CountryIcon from "/assets/country-flag.png";
import HeartOutlinedIcon from "/assets/heart-top.png";
import UserOutlinedIcon from "/assets/user-icon.png";
import CartIcon from "/assets/cart-icon.png";
import SearchIcon from "/assets/search-icon.png";
import Navbar from "../../Components/Desktop/Navbar";
import { FlexBox } from "../../Components/CommonStyles/FlexStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeaderContainer = () => {
  return (
    <StyledHeader>
      {/* Top Header Starts*/}
      <SubHeader>
        {/* Left Side */}
        <FlexBox display="flex">
          <BasicBox padding="0.5rem">
            <TextBox fontWeight="300" fontSize="1rem">
              New
            </TextBox>
          </BasicBox>
          <BasicBox
            border="0.6px solid rgba(0,0,0,0.1)"
            padding="1rem 0rem"
            margin="0rem 1rem"
          ></BasicBox>
          <BasicBox
            padding="0.5rem"
            borderBottom={`2px solid ${themeColors.primary}`}
          >
            <TextBox fontWeight="500" fontSize="1rem">
              Pre-Owned
            </TextBox>
          </BasicBox>
        </FlexBox>
        {/* Right Side */}
        <BasicBox width="280px">
          <FlexBox
            display="flex"
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <SignUpButton>Sell with us</SignUpButton>
            <UserIconStyle>
              <img src={CountryIcon} alt="Country Icon" />
            </UserIconStyle>
            <UserIconStyle>
              <img src={UserOutlinedIcon} alt="User Icon" />
            </UserIconStyle>
            <UserIconStyle>
              <img src={HeartOutlinedIcon} alt="Heart Icon" />
            </UserIconStyle>
            <CartIconStyle items={10}>
              <img src={CartIcon} alt="Cart Icon" />
            </CartIconStyle>
          </FlexBox>
        </BasicBox>
      </SubHeader>
      {/* Top Header Ends*/}
      {/* Bottom Header Starts*/}
      <nav>
        <SubHeader>
          <Navbar />
          <SearchBox>
            <FlexBox display="flex">
              <FlexBox flex={7}>
                <input type="text" placeholder="What Are You Looking For?" />
              </FlexBox>
              <FlexBox flex={1}>
                <LazyLoadImage src={SearchIcon} alt="Search Icon" />
              </FlexBox>
            </FlexBox>
          </SearchBox>
        </SubHeader>
      </nav>
      {/* Bottom Header Ends*/}
    </StyledHeader>
  );
};

export default HeaderContainer;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  z-index: 5;
  padding: 2rem 2rem;
  padding-bottom: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const SubHeader = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  align-content: center;
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

const SignUpButton = styled.a`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: 300 !important;
  border-radius: 5px;
`;

const SearchBox = styled.div`
  width: 280px;
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-left: 1rem;
  padding: 0.5rem 0.7rem;
  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
