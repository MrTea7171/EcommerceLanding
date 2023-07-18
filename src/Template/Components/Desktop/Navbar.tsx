import { BasicBox } from "../CommonStyles/BoxStyles";
import { TextBox } from "../CommonStyles/TextStyles";
import { useState } from "react";
import { themeColors } from "../CommonStyles/colors";
import { FlexBox } from "../CommonStyles/FlexStyles";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>("Just In");
  return (
    <FlexBox display="flex">
      {[
        "Just In",
        "Brands",
        "Women",
        "Men",
        "Kids",
        "Watches",
        "Jewellery",
        "Home",
        "Indie",
        "Luxe",
        "Le Prestige",
        "SALE",
        "Auctions",
      ].map((title, index) => {
        const isActive = activeNav === title;
        const isSale = title === "SALE";
        return (
          <div>
            <BasicBox
              padding={"1.5rem 0.65rem"}
              onClick={() => {
                setActiveNav(title);
              }}
            >
              <TextBox
                fontSize={"0.85rem"}
                fontWeight={isActive ? "500" : "300"}
                color={isSale ? themeColors.primary : "black"}
              >
                {title}
              </TextBox>
            </BasicBox>
            {isActive && (
              <BasicBox
                padding="2px"
                width="100%"
                backgroundColor={themeColors.primary}
                borderRadius="5px 5px 0px 0px"
              ></BasicBox>
            )}
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Navbar;
