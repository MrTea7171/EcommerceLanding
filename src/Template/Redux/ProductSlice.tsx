import { createSlice } from "@reduxjs/toolkit";
import { ProductListData, productData } from "./DataObject";
import { FilterBy } from "../Data/FilterParams";

const productSlice = createSlice<
  productData[],
  {
    filterProduct: (
      state: productData[],
      action: {
        payload: {
          filter: FilterBy;
        };
      }
    ) => void;
    sortProduct: (
      state: productData[],
      action: {
        payload: {
          sort:
            | "RELEVANCE"
            | "BESTSELLER"
            | "PRICE_DESC"
            | "PRICE_ASC"
            | "NEW_ARRIVAl"
            | "EDITORS_TOP_PICK";
        };
      }
    ) => void;
  },
  string
>({
  name: "ProductData",
  initialState: ProductListData,
  reducers: {
    filterProduct: (
      [],
      action: {
        payload: {
          filter: FilterBy;
        };
      }
    ) => {
      const { filter } = action.payload;
      const checkExistInArray = (array1: string[], array2: string[]) => {
        return array1.some((element) => array2.includes(element));
      };

      const checkExistInString = (array: string[], string: string) => {
        return array.includes(string);
      };

      const checkPrice = (array: string[], price: number) => {
        let priceRange = "";
        if (price < 10000) {
          priceRange = "Under ₹10000";
        } else if (price < 20000) {
          priceRange = "Under ₹20000";
        } else if (price < 30000) {
          priceRange = "₹25000 - ₹30000";
        } else if (price < 50000) {
          priceRange = "₹35000 - ₹50000";
        } else if (price < 100000) {
          priceRange = "₹50000 - ₹100000";
        } else {
          priceRange = "Above ₹100000";
        }
        return array.includes(priceRange);
      };

      const filteredProducts = ProductListData.filter((product) => {
        if (filter) {
          if (
            filter.availability &&
            !checkExistInString(filter.availability, product.availability)
          ) {
            return false;
          }
          if (
            filter.gender &&
            !checkExistInString(filter.gender, product.gender)
          ) {
            return false;
          }
          if (
            filter.brands &&
            !checkExistInString(filter.brands, product.brands)
          ) {
            return false;
          }
          if (
            filter.buyBackAssurance &&
            !checkExistInString(
              filter.buyBackAssurance,
              product.buy_back_assurance
            )
          ) {
            return false;
          }
          if (
            filter.strapBraceletMaterial &&
            !checkExistInString(
              filter.strapBraceletMaterial,
              product.strap_bracelet_material
            )
          ) {
            return false;
          }
          if (
            filter.movementType &&
            !checkExistInString(filter.movementType, product.movement_type)
          ) {
            return false;
          }
          if (
            filter.caseMaterial &&
            !checkExistInString(filter.caseMaterial, product.case_material)
          ) {
            return false;
          }
          if (
            filter.purchaseYear &&
            !checkExistInString(filter.purchaseYear, product.purchase_year)
          ) {
            return false;
          }
          if (
            filter.caseSize &&
            !checkExistInArray(filter.caseSize, product.case_size)
          ) {
            return false;
          }
          if (
            filter.dialColours &&
            !checkExistInArray(filter.dialColours, product.dial_colours)
          ) {
            return false;
          }
          if (
            filter.watchStyles &&
            !checkExistInArray(filter.watchStyles, product.watch_styles)
          ) {
            return false;
          }
          if (
            filter.strapColours &&
            !checkExistInArray(filter.strapColours, product.strap_colours)
          ) {
            return false;
          }
          if (filter.price && !checkPrice(filter.price, product.price)) {
            return false;
          }
        }

        return true;
      });

      return filteredProducts;
    },
    sortProduct: (
      state,
      action: {
        payload: {
          sort:
            | "RELEVANCE"
            | "BESTSELLER"
            | "PRICE_DESC"
            | "PRICE_ASC"
            | "NEW_ARRIVAl"
            | "EDITORS_TOP_PICK";
        };
      }
    ) => {
      const { sort } = action.payload;
      switch (sort) {
        case "RELEVANCE":
          state.sort((a, b) => {
            return a.relevance - b.relevance;
          });
          break;
        case "BESTSELLER":
          state.sort((a, b) => {
            return a.best_seller - b.best_seller;
          });
          break;
        case "PRICE_DESC":
          state.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        case "PRICE_ASC":
          state.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "NEW_ARRIVAl":
          state.sort((a, b) => {
            return a.new_arrival - b.new_arrival;
          });
          break;
        case "EDITORS_TOP_PICK":
          state.sort((a, b) => {
            return a.editor_top_picks - b.editor_top_picks;
          });
          break;
        default:
          break;
      }
    },
  },
});

export const { filterProduct, sortProduct } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
