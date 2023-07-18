import styled from "styled-components";
import { BasicBox } from "../CommonStyles/BoxStyles";
import { TextBox } from "../CommonStyles/TextStyles";

const SortBox = ({
  closeSortBox,
  sortBy,
  setSortBy,
}: {
  closeSortBox: () => void;
  sortBy:
    | "RELEVANCE"
    | "BESTSELLER"
    | "PRICE_DESC"
    | "PRICE_ASC"
    | "NEW_ARRIVAl"
    | "EDITORS_TOP_PICK";
  setSortBy: React.Dispatch<
    React.SetStateAction<
      | "RELEVANCE"
      | "BESTSELLER"
      | "PRICE_DESC"
      | "PRICE_ASC"
      | "NEW_ARRIVAl"
      | "EDITORS_TOP_PICK"
    >
  >;
}) => {
  return (
    <SortOptions>
      <CloseButton
        onClick={() => {
          closeSortBox();
        }}
      >
        x
      </CloseButton>
      <BasicBox backgroundColor="#fff">
        <TextBox fontSize="0.7rem" fontWeight="600">
          Sort By
        </TextBox>
        <BasicBox paddingTop="1rem">
          <OptionButton
            className={sortBy === "RELEVANCE" ? "active" : ""}
            onClick={() => {
              setSortBy("RELEVANCE");
            }}
          >
            Relevance
          </OptionButton>
          <OptionButton
            className={sortBy === "BESTSELLER" ? "active" : ""}
            onClick={() => {
              setSortBy("BESTSELLER");
            }}
          >
            Best Seller
          </OptionButton>
          <OptionButton
            className={sortBy === "PRICE_DESC" ? "active" : ""}
            onClick={() => {
              setSortBy("PRICE_DESC");
            }}
          >
            Price (High to Low)
          </OptionButton>
          <OptionButton
            className={sortBy === "PRICE_ASC" ? "active" : ""}
            onClick={() => {
              setSortBy("PRICE_ASC");
            }}
          >
            Price (Low to High)
          </OptionButton>
          <OptionButton
            className={sortBy === "NEW_ARRIVAl" ? "active" : ""}
            onClick={() => {
              setSortBy("NEW_ARRIVAl");
            }}
          >
            New Arrival
          </OptionButton>
          <OptionButton
            className={sortBy === "EDITORS_TOP_PICK" ? "active" : ""}
            onClick={() => {
              setSortBy("EDITORS_TOP_PICK");
            }}
          >
            Editor's Top Picks
          </OptionButton>
        </BasicBox>
      </BasicBox>
    </SortOptions>
  );
};

const SortOptions = styled.div`
  position: fixed;
  bottom: 0vh;
  height: 40vh;
  width: 100vw;
  background-color: white;
  padding: 1rem 2rem;
`;

const OptionButton = styled.button`
  width: 100%;
  background-color: white;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0.5rem;
  text-align: left;
  font-size: 0.75rem;

  &.active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 20px;
  font-size: 1.5rem;
  font-weight: 100;
  background-color: transparent;
  border: none;
  color: #fff;
`;
export default SortBox;
