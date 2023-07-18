import styled from "styled-components";
import ProductList from "../../Components/Common/ProductList";
import ProductBanner from "../../Components/Common/ProductBanner";
import { useDispatch } from "react-redux";
import { sortProduct } from "../../Redux/ProductSlice";
const ProductsContainer = () => {
  const dispatch = useDispatch();
  return (
    <StyledProductsContainer>
      {/*Product Banner*/}
      <ProductBanner />
      {/*Sort Button Area*/}
      <SortContainer>
        <label
          style={{
            marginRight: "1rem",
            fontSize: "0.8rem",
          }}
        >
          Sort by:
        </label>
        <div>
          <StyledSelect
            onChange={(e: any) => {
              dispatch(
                sortProduct({
                  sort: e.target.value,
                })
              );
            }}
          >
            <option value={"RELEVANCE"}>Relevance</option>
            <option value={"BESTSELLER"}>Best Seller</option>
            <option value={"PRICE_DESC"}>Price (High to Low)</option>
            <option value={"PRICE_ASC"}>Price (Low to High)</option>
            <option value={"NEW_ARRIVAl"}>New Arrival</option>
            <option value={"EDITORS_TOP_PICk"}>Editor's Top Picks</option>
          </StyledSelect>
        </div>
      </SortContainer>

      {/*Product List*/}
      <ProductList />
    </StyledProductsContainer>
  );
};

const StyledProductsContainer = styled.div`
  padding: 2rem 1.5rem;
`;

const SortContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;

const StyledSelect = styled.select`
  font-size: 0.8rem;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
export default ProductsContainer;
